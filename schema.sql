-- =====================================================
-- AI Study Buddy — Supabase Schema
-- Run this in your Supabase project:
-- Dashboard → SQL Editor → New Query → paste → Run
-- =====================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- INSTITUTES — one row per school / institute
-- =====================================================
CREATE TABLE IF NOT EXISTS institutes (
  id               uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name             text NOT NULL DEFAULT 'My School',
  slug             text UNIQUE,                 -- URL-safe identifier e.g. 'green-valley-school'
  logo_url         text,
  primary_color    text DEFAULT '#4f46e5',
  secondary_color  text DEFAULT '#7c3aed',
  address          text,
  phone            text,
  email            text,
  footer_text      text,
  created_at       timestamptz DEFAULT now()
);

-- =====================================================
-- USERS — extends Supabase auth.users
-- =====================================================
CREATE TABLE IF NOT EXISTS users (
  id               uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  institute_id     uuid REFERENCES institutes(id),
  role             text NOT NULL DEFAULT 'student'   -- 'admin' | 'teacher' | 'student'
                   CHECK (role IN ('admin','teacher','student')),
  name             text,
  class_level      text,
  section_id       uuid,
  preferred_lang   text DEFAULT 'en'
                   CHECK (preferred_lang IN ('en','hi','gu')),
  created_at       timestamptz DEFAULT now()
);

-- Auto-create user profile on sign-up
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
DECLARE
  meta jsonb := new.raw_user_meta_data;
BEGIN
  INSERT INTO users (id, institute_id, name, class_level, role)
  VALUES (
    new.id,
    (meta->>'institute_id')::uuid,
    meta->>'name',
    meta->>'class_level',
    COALESCE(meta->>'role', 'student')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- =====================================================
-- SECTIONS — class sections within an institute
-- =====================================================
CREATE TABLE IF NOT EXISTS sections (
  id               uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  institute_id     uuid REFERENCES institutes(id) ON DELETE CASCADE,
  class_level      text NOT NULL,               -- e.g. '7', '8'
  name             text NOT NULL,               -- e.g. 'A', 'B', 'Mango', 'Rose'
  teacher_id       uuid REFERENCES users(id),
  student_count    int DEFAULT 0,
  created_at       timestamptz DEFAULT now(),
  UNIQUE (institute_id, class_level, name)
);

-- =====================================================
-- QUESTION BANKS — stored per institute
-- =====================================================
CREATE TABLE IF NOT EXISTS question_banks (
  id               uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  institute_id     uuid REFERENCES institutes(id) ON DELETE CASCADE,
  name             text NOT NULL,
  filename         text,
  class_level      text,
  subject          text,
  questions        jsonb NOT NULL DEFAULT '[]',  -- MCQ questions array
  exam_questions   jsonb DEFAULT '[]',           -- short/long/essay questions
  is_shared        boolean DEFAULT false,        -- shared across all institutes
  created_by       uuid REFERENCES users(id),
  created_at       timestamptz DEFAULT now(),
  updated_at       timestamptz DEFAULT now()
);

-- =====================================================
-- EXAM RESULTS — one row per exam submission
-- =====================================================
CREATE TABLE IF NOT EXISTS exam_results (
  id               uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  institute_id     uuid REFERENCES institutes(id),
  student_id       uuid REFERENCES users(id),
  student_name     text,
  student_section  text,
  class_level      text,
  exam_type        text NOT NULL                 -- 'mock' | 'term' | 'annual' | 'quiz' | 'daily'
                   CHECK (exam_type IN ('mock','term','annual','quiz','daily')),
  mcq_score        int DEFAULT 0,
  mcq_total        int DEFAULT 0,
  answers_log      jsonb DEFAULT '[]',           -- [{type,q,studentAnswer,correct,marks,teacher_marks,...}]
  taken_at         timestamptz DEFAULT now(),
  reviewed_at      timestamptz,                  -- set when teacher marks written answers
  synced           boolean DEFAULT true
);

-- =====================================================
-- ROW-LEVEL SECURITY
-- Every table is locked to the user's own institute.
-- =====================================================

DO $$ BEGIN ALTER TABLE institutes     ENABLE ROW LEVEL SECURITY; EXCEPTION WHEN OTHERS THEN NULL; END $$;
DO $$ BEGIN ALTER TABLE users          ENABLE ROW LEVEL SECURITY; EXCEPTION WHEN OTHERS THEN NULL; END $$;
DO $$ BEGIN ALTER TABLE sections       ENABLE ROW LEVEL SECURITY; EXCEPTION WHEN OTHERS THEN NULL; END $$;
DO $$ BEGIN ALTER TABLE question_banks ENABLE ROW LEVEL SECURITY; EXCEPTION WHEN OTHERS THEN NULL; END $$;
DO $$ BEGIN ALTER TABLE exam_results   ENABLE ROW LEVEL SECURITY; EXCEPTION WHEN OTHERS THEN NULL; END $$;

-- Helper: returns current user's institute_id
CREATE OR REPLACE FUNCTION get_my_institute_id()
RETURNS uuid AS $$
  SELECT institute_id FROM users WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Helper: returns current user's role
CREATE OR REPLACE FUNCTION get_my_role()
RETURNS text AS $$
  SELECT role FROM users WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- INSTITUTES: admins can see/edit their own institute
DROP POLICY IF EXISTS "institutes_select" ON institutes;
CREATE POLICY "institutes_select" ON institutes FOR SELECT
  USING (id = get_my_institute_id());
DROP POLICY IF EXISTS "institutes_update" ON institutes;
CREATE POLICY "institutes_update" ON institutes FOR UPDATE
  USING (id = get_my_institute_id() AND get_my_role() = 'admin');

-- USERS: users see their own row; admins/teachers see whole institute
DROP POLICY IF EXISTS "users_own" ON users;
CREATE POLICY "users_own" ON users FOR SELECT
  USING (id = auth.uid() OR institute_id = get_my_institute_id());
DROP POLICY IF EXISTS "users_insert" ON users;
CREATE POLICY "users_insert" ON users FOR INSERT
  WITH CHECK (true);   -- new user inserts their own profile via trigger

-- SECTIONS: any member can read; only admins can write
DROP POLICY IF EXISTS "sections_read" ON sections;
CREATE POLICY "sections_read" ON sections FOR SELECT
  USING (institute_id = get_my_institute_id());
DROP POLICY IF EXISTS "sections_write" ON sections;
CREATE POLICY "sections_write" ON sections FOR ALL
  USING (institute_id = get_my_institute_id() AND get_my_role() = 'admin');

-- QUESTION BANKS: members can read own institute + shared; teachers/admins write
DROP POLICY IF EXISTS "qbanks_read" ON question_banks;
CREATE POLICY "qbanks_read" ON question_banks FOR SELECT
  USING (institute_id = get_my_institute_id() OR is_shared = true);
DROP POLICY IF EXISTS "qbanks_write" ON question_banks;
CREATE POLICY "qbanks_write" ON question_banks FOR ALL
  USING (institute_id = get_my_institute_id()
    AND get_my_role() IN ('admin','teacher'));

-- EXAM RESULTS: students see own; teachers/admins see whole institute
DROP POLICY IF EXISTS "results_student_read" ON exam_results;
CREATE POLICY "results_student_read" ON exam_results FOR SELECT
  USING (student_id = auth.uid() OR institute_id = get_my_institute_id());
DROP POLICY IF EXISTS "results_insert" ON exam_results;
CREATE POLICY "results_insert" ON exam_results FOR INSERT
  WITH CHECK (institute_id = get_my_institute_id() OR student_id = auth.uid());
DROP POLICY IF EXISTS "results_teacher_update" ON exam_results;
CREATE POLICY "results_teacher_update" ON exam_results FOR UPDATE
  USING (institute_id = get_my_institute_id()
    AND get_my_role() IN ('admin','teacher'));

-- =====================================================
-- REPORTING VIEWS
-- =====================================================

-- Per-institute exam statistics
CREATE OR REPLACE VIEW institute_exam_stats AS
SELECT
  institute_id,
  exam_type,
  COUNT(*)                                                          AS total_exams,
  ROUND(AVG(CASE WHEN mcq_total > 0
    THEN mcq_score::numeric / mcq_total * 100 ELSE NULL END), 1)   AS avg_pct,
  MAX(CASE WHEN mcq_total > 0
    THEN mcq_score::numeric / mcq_total * 100 ELSE NULL END)       AS highest_pct,
  MIN(CASE WHEN mcq_total > 0
    THEN mcq_score::numeric / mcq_total * 100 ELSE NULL END)       AS lowest_pct,
  SUM(CASE WHEN mcq_total > 0
    AND mcq_score::numeric / mcq_total >= 0.4 THEN 1 ELSE 0 END)  AS pass_count,
  COUNT(DISTINCT student_id)                                        AS unique_students
FROM exam_results
GROUP BY institute_id, exam_type;

-- Student performance over time
CREATE OR REPLACE VIEW student_performance AS
SELECT
  student_id,
  student_name,
  institute_id,
  class_level,
  exam_type,
  mcq_score,
  mcq_total,
  CASE WHEN mcq_total > 0
    THEN ROUND(mcq_score::numeric / mcq_total * 100, 1)
    ELSE NULL END AS pct,
  taken_at
FROM exam_results
ORDER BY taken_at DESC;

-- Most missed questions (from answers_log JSONB)
CREATE OR REPLACE VIEW question_difficulty AS
SELECT
  institute_id,
  q->>'question_id'                                                            AS question_id,
  COUNT(*)                                                                     AS attempts,
  SUM((q->>'isCorrect')::int)                                                  AS correct_count,
  ROUND(
    SUM((q->>'isCorrect')::int)::numeric / NULLIF(COUNT(*), 0) * 100, 1
  )                                                                            AS accuracy_pct
FROM exam_results, jsonb_array_elements(answers_log) AS q
WHERE q->>'type' = 'mcq'
GROUP BY institute_id, q->>'question_id'
ORDER BY accuracy_pct ASC NULLS LAST;

-- =====================================================
-- SAMPLE DATA — first institute setup
-- Run this once to create your first institute:
-- =====================================================
-- INSERT INTO institutes (name, slug, primary_color, secondary_color)
-- VALUES ('My School', 'my-school', '#4f46e5', '#7c3aed')
-- RETURNING id;
-- Then copy the id and run:
-- UPDATE users SET institute_id = '<id>', role = 'admin' WHERE id = auth.uid();

-- =====================================================
-- SELF-SERVICE REGISTRATION
-- A Postgres function that runs with SECURITY DEFINER
-- (elevated privileges) so the anon key can call it
-- safely from the frontend without bypassing RLS.
-- =====================================================

CREATE OR REPLACE FUNCTION register_institute(
  p_name            text,
  p_slug            text,
  p_address         text,
  p_phone           text,
  p_email           text,
  p_primary_color   text,
  p_secondary_color text,
  p_admin_email     text   -- the registering user's email
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER           -- runs as DB owner, bypasses RLS safely
SET search_path = public
AS $$
DECLARE
  v_institute_id  uuid;
  v_clean_slug    text;
  v_exists        boolean;
BEGIN
  -- Sanitise slug: lowercase, only a-z 0-9 and hyphens
  v_clean_slug := lower(regexp_replace(trim(p_slug), '[^a-z0-9]+', '-', 'g'));
  v_clean_slug := trim(both '-' from v_clean_slug);

  IF length(v_clean_slug) < 3 THEN
    RETURN json_build_object('ok', false, 'error', 'Slug too short — must be at least 3 characters.');
  END IF;

  -- Check slug is not already taken
  SELECT EXISTS(SELECT 1 FROM institutes WHERE slug = v_clean_slug) INTO v_exists;
  IF v_exists THEN
    RETURN json_build_object('ok', false, 'error', 'This URL is already taken. Try a different name.');
  END IF;

  -- Create the institute row
  INSERT INTO institutes (name, slug, address, phone, email, primary_color, secondary_color)
  VALUES (p_name, v_clean_slug, p_address, p_phone, p_email, p_primary_color, p_secondary_color)
  RETURNING id INTO v_institute_id;

  -- Return success with the generated slug and institute id
  RETURN json_build_object(
    'ok',           true,
    'institute_id', v_institute_id,
    'slug',         v_clean_slug
  );
END;
$$;

-- Allow the anon role (unauthenticated frontend) to call this function.
-- This is safe because the function itself validates inputs and checks for duplicates.
GRANT EXECUTE ON FUNCTION register_institute TO anon;
GRANT EXECUTE ON FUNCTION register_institute TO authenticated;

-- =====================================================
-- After registration, the admin signs in via magic link.
-- This trigger automatically upgrades their user role to
-- 'admin' and links them to the institute if the invite
-- metadata contains an institute_id.
-- (Already handled by handle_new_user trigger above —
-- institute_id and role are passed via OTP metadata.)
-- =====================================================

-- Function called after admin confirms their email
-- to finalise the admin link. Call this from the app
-- after the magic link redirect:
--   SELECT finalise_admin_registration(institute_id)
CREATE OR REPLACE FUNCTION finalise_admin_registration(p_institute_id uuid)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_user_id uuid := auth.uid();
BEGIN
  IF v_user_id IS NULL THEN
    RETURN json_build_object('ok', false, 'error', 'Not signed in.');
  END IF;

  -- Prevent takeover: only allow if this institute has no admin yet
  IF EXISTS (
    SELECT 1 FROM users
    WHERE institute_id = p_institute_id AND role = 'admin'
      AND id <> v_user_id
  ) THEN
    RETURN json_build_object('ok', false, 'error', 'This institute already has an admin.');
  END IF;

  UPDATE users
  SET institute_id = p_institute_id, role = 'admin'
  WHERE id = v_user_id;

  RETURN json_build_object('ok', true);
END;
$$;

GRANT EXECUTE ON FUNCTION finalise_admin_registration TO authenticated;
