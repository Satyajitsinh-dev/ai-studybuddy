# 🤖 AI Study Buddy – Multi-Class, Multi-School Edition

A **completely free**, browser-based AI-powered study app for CBSE students of **any class**.  
No server. No installation. Just open `index.html` and start learning.

> Works as a standalone offline app for individual students, or as a branded multi-school platform powered by Supabase — your choice. All features work without any backend.

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| 📝 Practice Quiz | Chapter-wise MCQ with topic / difficulty / type filters; 5–30 questions; anti-repeat rotation |
| ☀️ Daily Practice | 20 random questions from active class; subject filter; answer review |
| 🎓 Mock Exam | 5 MCQ + 3 Short + 2 Long answer; estimated grade |
| 📋 Term Exam | 50-mark paper — 20 MCQ + 5 Short + 3 Long + 1 Essay; 90-min timer; PDF download |
| 🏅 Annual Exam | 80-mark paper — 30 MCQ + 6 Short + 4 Long + 2 Essay; 180-min timer; PDF download |
| 📊 My Progress | Score, accuracy %, streak, subject bars, 10 achievements |
| 📂 Question Bank | Upload unlimited CSV files; multiple banks; deletable |
| ✍️ Exam Question Bank | Upload short/long/essay exam questions; class-filtered |
| 🌐 Multi-language | English, Hindi, Gujarati — toggle in topbar; easily extendable |
| 🏫 School Registration | Self-service onboarding at `/register.html`; unique URL per school |
| ⚙️ Admin Panel | Institute branding, colours, logo, address — applies to app + PDFs |
| 📝 Teacher Review | Mark short/long/essay answers; saves to Supabase with offline fallback |
| 🔄 Offline-first Sync | All features work offline; results sync automatically when back online |
| 👤 Student Name Modal | Name prompt before each exam; appears on result and PDF |
| 👥 Sections Management | Add/delete class sections per institute |
| 📥 Bulk Student Import | CSV upload sends magic-link invites to all student emails |
| 💬 AI Tutor | Ask anything (Claude / ChatGPT / Gemini) — demo version, API key required |

---

## 🚀 Quick Start — Individual Use (2 minutes)

1. Download this folder — keep all files together
2. Open `index.html` in your browser
3. On first visit a **landing modal** appears — click **Continue as Individual**
4. Go to **📂 Question Bank** → click **📦 Load Sample Bank** (2368 Class 7 questions)
5. Optionally load sample exam questions from the same page
6. Select Class 7 from the nav dropdown → start practising

> The landing modal only appears once. On any subsequent visit (or when opening a school URL like `?institute=my-school`) it is skipped automatically.

---

## 🏫 Quick Start — School / Institute

1. Visit `/register.html` (or `https://your-site/register.html` after deployment)
2. Fill in school name, URL slug, colours, and your admin email
3. Click **Register School** — your unique URL is generated instantly
4. Check your email, click the magic link — you land back as admin
5. Share the URL with students and teachers

**Student URL format:** `https://your-site/index.html?institute=your-school-slug`

Students open this URL — no sign-in needed. The app loads with your school's branding automatically.

---

## 📁 File Structure

```
AI-Study-Buddy/
├── index.html                  ← App — all pages
├── register.html               ← School self-registration page
├── style.css                   ← All styles
├── script.js                   ← App logic, quiz engine, exam
├── i18n.js                     ← Translations (EN / HI / GU)
├── supabase.js                 ← DB, auth, sync, branding, review
├── manifest.json               ← PWA — installable on phones
├── class7_questions.csv        ← 2368 sample MCQ questions
├── supabase/
│   └── schema.sql              ← Run once (idempotent — safe to re-run)
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Auto-deploy to GitHub Pages
├── icons/                      ← Add icon-192.png + icon-512.png for PWA
├── DEPLOY.md                   ← Full deployment guide
└── README.md                   ← This file
```

---

## 🌐 Hosting (free)

### GitHub Pages — recommended
1. Push files to a public GitHub repo
2. Settings → Pages → Source: **GitHub Actions**
3. Live at `https://YOUR-USERNAME.github.io/REPO-NAME/`

The `.github/workflows/deploy.yml` workflow handles everything. Every push to `main` auto-deploys in ~1 minute.

### Alternatives
| Option | URL | Notes |
|---|---|---|
| **Vercel** | `your-app.vercel.app` | Drag folder to vercel.com — 30 seconds |
| **Netlify** | `your-app.netlify.app` | Drag folder to netlify.com — 30 seconds |
| **Cloudflare Pages** | `your-app.pages.dev` | Connect GitHub repo |

All are free forever for static sites. See `DEPLOY.md` for step-by-step instructions.

---

## 🌐 Multi-language

Three languages built in — toggle in the topbar:

| Button | Language | Coverage |
|---|---|---|
| EN | English | Full |
| हिं | Hindi | Full |
| ગુ | Gujarati | Full |

**Adding a new language:** copy the `en` block in `i18n.js`, translate the values, add the language button to the topbar in `index.html`.

All visible UI text uses `data-i18n="key"` attributes. `applyTranslations()` runs on every page navigation and language switch.

---

## 📂 MCQ Question Bank

All MCQ questions come from uploaded CSV files — no hardcoded questions.

### Getting questions

| Method | How |
|---|---|
| Built-in sample | 📂 Question Bank → **📦 Load Sample Bank** (2368 Class 7 CBSE questions) |
| Download template | Same page → **⬇️ Download Sample CSV** — edit and re-upload |
| Upload your own | Drag & drop any CSV with the schema below |

### CSV schema

**Required:** `question`, `option_a`, `option_b`, `option_c`, `option_d`, `correct_answer` (A/B/C/D)

**Optional:** `question_id`, `class`, `subject`, `chapter`, `topic`, `difficulty` (Easy/Medium/Hard), `question_type`, `explanation`, `learning_objective`, `ncert_reference`

```csv
question_id,class,subject,chapter,topic,difficulty,question_type,question,option_a,option_b,option_c,option_d,correct_answer,explanation
Q001,7,Math,Integers,Addition,Easy,MCQ,What is (-5)+(-3)?,-8,8,-2,2,A,Negative+Negative=More Negative
```

The `class` column drives the Class Selector — upload a CSV with `class=8` and a Class 8 card appears automatically.

---

## ✍️ Exam Question Bank (Short / Long / Essay)

Mock, Term and Annual exams include open-ended sections. These questions have no answers — students write their own.

### CSV schema

**Required:** `type` (short / long / essay), `question`

**Optional:** `subject`, `class`, `chapter`, `marks`

```csv
type,question,subject,class,chapter,marks
short,Define photosynthesis and write its word equation.,Science,7,Nutrition in Plants,2
long,Explain how plants prepare food through photosynthesis.,Science,7,,5
essay,Write an essay on the importance of trees and forests.,English,7,,
```

### Priority order
1. Questions from uploaded exam banks (filtered to active class)
2. Built-in Class 7 defaults if no bank uploaded for that type

---

## 🔄 Question Rotation (Anti-Repeat)

Queue-based per 5-dimension scope key: `subject :: chapter :: topic :: difficulty :: type`

Every filter combination has its own independent queue. Questions rotate through the entire pool before any repeat. Multiple CSV banks get unique timestamp-based IDs — no collisions.

---

## 🏫 Multi-School Architecture

### Registration
Any school visits `/register.html` — fills in name, URL slug, colours, admin email — and is onboarded instantly. No manual database work needed.

### URL-based isolation
```
https://your-site/index.html?institute=green-valley-school
https://your-site/index.html?institute=sunrise-academy
```

Each URL loads that school's branding. `supabase.js` reads `?institute=` on every page load and applies colours, logo, name — **no login needed for students**.

### Data isolation
Row-Level Security in Supabase enforces that School A can never read School B's data, even with direct API calls.

### Roles
| Role | Access |
|---|---|
| student | Own results only; no sign-in required |
| teacher | Own institute results; teacher review panel |
| admin | Full institute; admin panel; branding; sections; student import |

---

## 🔄 Offline-First Sync

The app works fully offline. When offline:
- All quiz/exam features work normally
- Results saved to `localStorage`
- A badge shows `📴 Offline`

When back online:
- Queued writes flush to Supabase automatically
- Badge shows `🔄 N unsynced` then `✅ Synced`

No data is ever lost.

---

## ☁️ Supabase Setup

### 1. Create project
Free at [supabase.com](https://supabase.com) — up to 50,000 monthly active users.

### 2. Run schema
Dashboard → SQL Editor → New Query → paste `supabase/schema.sql` → Run.

**The schema is fully idempotent — safe to run multiple times.** Every `CREATE POLICY` is preceded by `DROP POLICY IF EXISTS`. All `ALTER TABLE ENABLE ROW LEVEL SECURITY` statements are wrapped in exception-safe `DO` blocks. `CREATE TABLE IF NOT EXISTS` and `CREATE OR REPLACE FUNCTION/VIEW` were already re-run safe.

### 3. Add credentials
Open `supabase.js` and fill in lines 12–13:
```javascript
const SUPABASE_URL  = 'https://YOUR-PROJECT.supabase.co';
const SUPABASE_ANON = 'eyJ...your-anon-key...';
```

### 4. Register first school
Visit `/register.html` — no SQL needed.

See `DEPLOY.md` for the complete step-by-step guide.

---

## 👤 Student Name Modal

Shown before every Term or Annual exam (once per browser session via `sessionStorage`). The student enters their name and optional section. This appears on:
- The result screen after the exam
- The downloaded PDF exam paper
- The teacher review panel

---

## 📋 Term Exam & 🏅 Annual Exam

| | Term (50M) | Annual (80M) |
|---|---|---|
| MCQ | 20 × 1 = 20 | 30 × 1 = 30 |
| Short Answer | 5 × 2 = 10 | 6 × 2 = 12 |
| Long Answer | 3 × 5 = 15 | 4 × 5 = 20 |
| Essay | 1 × 5 = 5 | 2 × 9 = 18 |
| Timer | 90 min | 180 min |

MCQs from the MCQ Question Bank. Short/Long/Essay from the Exam Question Bank. PDF download after submission includes institute branding if configured.

---

## 📝 Teacher Review

Teachers (and admins) see a **Review Answers** card on the home screen after signing in.

The page shows all pending written answers (short/long/essay) from student exam submissions — grouped by student, with the question, the student's written answer, and mark buttons (Full / Partial / No marks).

Marks are saved locally first, then synced to Supabase when online.

---

## 🎨 Customisation

**Colours** — edit CSS variables in `style.css`:
```css
:root {
  --clr-primary:   #4f46e5;
  --clr-secondary: #7c3aed;
  --clr-accent:    #f59e0b;
}
```

**Subject emojis** — find `SUBJECT_EMOJI` in `script.js`.

**Offline AI topics** — add entries to `TUTOR_KB` in `script.js`.

**Add a language** — copy the `en` block in `i18n.js`, translate, add a button to the topbar.

---

## 🔒 Privacy & Security

- All data stays in your browser (`localStorage`) when Supabase is not configured
- API keys for AI providers stored in `localStorage` only — never sent to any server
- Supabase `anon` key is safe to include in frontend code — Row-Level Security enforces data isolation at the database level
- The `service_role` key is never used in the frontend
- Magic-link auth — no passwords stored anywhere

---

## 🆘 Troubleshooting

| Problem | Fix |
|---|---|
| Landing modal keeps appearing | Click "Continue as Individual" — this sets a localStorage flag so it won't show again |
| Home shows "No questions loaded" | 📂 Question Bank → Load Sample Bank |
| Class dropdown still shows old class after delete | Fixed — `reconcileActiveClass()` clears it automatically |
| Supabase schema errors on re-run | Schema is now fully idempotent — safe to run as many times as needed |
| Registration says "URL already taken" | Choose a different slug — slugs are unique per Supabase project |
| Admin Panel not showing | Sign in with the admin email that was used during registration |
| AI Tutor not responding | Add an API key in the tutor setup panel; AI Tutor is a demo feature |
| CSV upload fails | Headers must match exactly; `correct_answer` must be A/B/C/D; save as UTF-8 |
| PDF not downloading | Allow pop-ups for the app URL; try another browser |
| Progress not saving | `localStorage` may be disabled in private/incognito mode |

---

## 📋 Changelog

### Current Version
- **Landing modal** — shown on first visit with Register Your School / Continue as Individual options. Skipped automatically when opening a `?institute=` school URL
- **AI Tutor moved to last** in the feature grid, marked with `⚗️ Demo version` badge
- **Hero text fully i18n** — greeting, subtitle and all four stat labels (`Questions / Attempts / Correct / Accuracy`) translate with the language switcher
- **`updateHomeStats()` uses `t()`** — hero subtitle updates dynamically based on active class AND active language
- **Schema fully idempotent** — all `CREATE POLICY` statements preceded by `DROP POLICY IF EXISTS`; all `ALTER TABLE ENABLE ROW LEVEL SECURITY` wrapped in exception-safe `DO` blocks; safe to re-run unlimited times
- **Self-service school registration** via `/register.html` — no SQL, no admin involvement. Generates unique `?institute=slug` URL, sends admin magic link, auto-activates admin role on first login
- **URL-based branding** — `?institute=slug` loads school branding without any login. Works for students
- **Multi-language UI** — English, Hindi, Gujarati with topbar toggle
- **Offline-first sync** — queue in localStorage, auto-flush on reconnect, sync badge
- **Student name modal** before exams — name appears on results and PDFs
- **Branded PDF** — institute name, logo, address, contact on exam PDFs
- **Teacher answer review** — mark short/long/essay answers, sync to Supabase
- **Class/section management** in Admin Panel
- **Bulk student import** via CSV — sends magic-link invites
- **CSV-only MCQ architecture** — `QUESTION_BANK = []`; all questions from uploads
- **2368-question starter pack** embedded and loadable in one click
- **Queue-based rotation** with 5-dimension scope key

---

Made with ❤️ for students and teachers of all classes. Completely free, forever.
