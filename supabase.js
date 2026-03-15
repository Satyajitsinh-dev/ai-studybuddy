/* =====================================================
   supabase.js – Supabase integration for AI Study Buddy
   =====================================================
   SETUP INSTRUCTIONS:
   1. Create a free project at https://supabase.com
   2. Go to Project Settings → API
   3. Copy your Project URL and anon/public key below
   4. Run the SQL schema in supabase/schema.sql

   EMAIL / MAGIC LINK SETUP (required for registration):
   5. Go to Authentication → URL Configuration in Supabase dashboard
      - Set "Site URL" to your deployed app URL:
          https://YOUR-USERNAME.github.io/study-buddy/index.html
      - Under "Redirect URLs", click Add URL and add:
          https://YOUR-USERNAME.github.io/study-buddy/index.html
          http://localhost:8080/index.html   (for local dev)
      Without this step, magic link emails will either not send
      or redirect to a blank Supabase page instead of your app.

   EMAIL SENDER (magic link emails come from):
   6. By default emails come from: noreply@mail.supabase.io
      They sometimes land in spam — ask admins to check spam folder.
      To send from your own domain: Authentication → Email Templates
      → SMTP Settings → add your own SMTP server (e.g. Gmail, SendGrid).

   OFFLINE MODE:
   7. The app works fully offline without Supabase —
      results sync automatically when you reconnect.
   ===================================================== */

const SUPABASE_URL  = 'https://rgxtuyspvtfmbofbymrc.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJneHR1eXNwdnRmbWJvZmJ5bXJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1NDM0MzksImV4cCI6MjA4OTExOTQzOX0.VXjJXOsSdCkwVWZOs78AwkkXKw558soqw1foozbFZus';

// =====================================================
// APP BASE URL — set this to your deployed app URL.
// Used for magic link redirects.
// For GitHub Pages: 'https://USERNAME.github.io/REPO/index.html'
// For local dev:    'http://localhost:5500/index.html'  (or whatever port)
// =====================================================
const APP_BASE_URL = 'https://satyajitsinh-dev.github.io/study-buddy/index.html';

/* ---- Supabase client (lazy-initialised) ---- */
let _sb = null;
function sb() {
  if (_sb) return _sb;
  if (!SUPABASE_URL || !SUPABASE_ANON) return null;
  try {
    _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
    return _sb;
  } catch(e) {
    console.warn('Supabase init failed:', e);
    return null;
  }
}

const isSupabaseEnabled = () => !!(SUPABASE_URL && SUPABASE_ANON);

/* =====================================================
   OFFLINE-FIRST SYNC QUEUE
   Writes that fail (offline) are queued in localStorage
   and flushed automatically when the browser goes online.
   ===================================================== */
const SYNC_KEY = 'studyBuddy_syncQueue';

function getSyncQueue() {
  try { return JSON.parse(localStorage.getItem(SYNC_KEY) || '[]'); } catch { return []; }
}
function saveSyncQueue(q) {
  localStorage.setItem(SYNC_KEY, JSON.stringify(q));
}
function enqueueSync(op) {
  // op = { table, action:'insert'|'upsert'|'update', data, id? }
  const q = getSyncQueue();
  q.push({ ...op, queuedAt: Date.now() });
  saveSyncQueue(q);
  updateSyncBadge();
}

async function flushSyncQueue() {
  const client = sb();
  if (!client) return;
  const q = getSyncQueue();
  if (!q.length) return;

  const failed = [];
  for (const op of q) {
    try {
      if (op.action === 'insert') {
        const { error } = await client.from(op.table).insert(op.data);
        if (error) throw error;
      } else if (op.action === 'upsert') {
        const { error } = await client.from(op.table).upsert(op.data);
        if (error) throw error;
      } else if (op.action === 'update') {
        const { error } = await client.from(op.table).update(op.data).eq('id', op.id);
        if (error) throw error;
      }
    } catch(e) {
      console.warn('Sync failed for op:', op.table, e.message);
      failed.push(op);
    }
  }
  saveSyncQueue(failed);
  updateSyncBadge();
  if (failed.length === 0 && q.length > 0) showToast(t('sync_done'));
}

function updateSyncBadge() {
  const badge = document.getElementById('sync-badge');
  if (!badge) return;
  const n = getSyncQueue().length;
  const online = navigator.onLine;
  if (!isSupabaseEnabled()) { badge.style.display = 'none'; return; }
  badge.style.display = 'inline-flex';
  if (!online) {
    badge.textContent = t('offline_badge');
    badge.className = 'sync-badge offline';
  } else if (n > 0) {
    badge.textContent = t('sync_pending', { n });
    badge.className = 'sync-badge pending';
  } else {
    badge.textContent = t('sync_done');
    badge.className = 'sync-badge synced';
  }
}

window.addEventListener('online',  () => { updateSyncBadge(); flushSyncQueue(); });
window.addEventListener('offline', () => { updateSyncBadge(); });

/* =====================================================
   AUTH
   Magic-link email login. Works with role column on
   the users table (admin / teacher / student).
   ===================================================== */
let currentUser   = null;
let currentProfile = null;  // { role, institute_id, name, preferred_lang, section_id }

function isLoggedIn()  { return !!currentUser; }
function userRole()    { return currentProfile?.role || 'student'; }
function isAdmin()     { return userRole() === 'admin'; }
function isTeacher()   { return userRole() === 'teacher' || isAdmin(); }
// Test helper — allows tests.js to set currentProfile without window assignment
function _setCurrentProfileForTest(profile) { currentProfile = profile; }
function instituteId() {
  // Prefer the logged-in user's institute; fall back to URL param cached value
  return currentProfile?.institute_id
    || localStorage.getItem('studyBuddy_instituteId')
    || null;
}

async function initAuth() {
  const client = sb();
  if (!client) return;

  const { data: { session } } = await client.auth.getSession();
  if (session) await onSignIn(session.user);

  client.auth.onAuthStateChange(async (_event, session) => {
    if (session) await onSignIn(session.user);
    else         onSignOut();
  });
}

async function onSignIn(user) {
  currentUser = user;
  const client = sb();
  if (!client) return;

  const { data } = await client
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single();

  currentProfile = data || { role: 'student', institute_id: null };

  // Apply saved language preference
  if (currentProfile.preferred_lang) setLang(currentProfile.preferred_lang);

  // Load and apply institute branding
  if (currentProfile.institute_id) await loadBranding(currentProfile.institute_id);

  updateAuthUI();
  renderAdminCards();
  // Refresh admin URL bar with school slug (works whenever admin is on admin page)
  if (typeof renderAdminUrlBar === 'function') renderAdminUrlBar();
}

function onSignOut() {
  currentUser    = null;
  currentProfile = null;
  updateAuthUI();
  renderAdminCards();
}

function updateAuthUI() {
  const btn    = document.getElementById('auth-btn');
  const label  = document.getElementById('auth-label');
  if (!btn || !label) return;

  if (isLoggedIn()) {
    label.textContent = t('auth_signed_in') + ': ' + (currentUser.email || '').split('@')[0];
    btn.textContent   = t('auth_sign_out');
    btn.onclick       = signOut;
  } else {
    label.textContent = '';
    btn.textContent   = 'Sign in';
    btn.onclick       = () => showPage('page-auth');
  }
}

async function sendMagicLink(email) {
  const client = sb();
  if (!client) { showToast('⚠️ Supabase not configured.'); return; }
  const { error } = await client.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: APP_BASE_URL }
  });
  if (error) showToast('⚠️ ' + error.message);
  else {
    document.getElementById('auth-sent-msg').style.display = 'block';
    document.getElementById('auth-form').style.display = 'none';
    showToast(t('auth_sent'));
  }
}

async function signOut() {
  const client = sb();
  if (client) await client.auth.signOut();
  onSignOut();
  showPage('page-home');
}

/* =====================================================
   BRANDING
   Loaded from institutes table on login.
   Also saved in localStorage for offline use.
   ===================================================== */
const BRAND_KEY = 'studyBuddy_brand';

function getBrandCache() {
  try { return JSON.parse(localStorage.getItem(BRAND_KEY) || 'null'); } catch { return null; }
}

async function loadBranding(instId) {
  const client = sb();
  let brand = getBrandCache();

  if (client) {
    const { data } = await client.from('institutes').select('*').eq('id', instId).single();
    if (data) { brand = data; localStorage.setItem(BRAND_KEY, JSON.stringify(data)); }
  }

  if (brand) applyBranding(brand);
}

function applyBranding(b) {
  window.BRAND = b;
  if (b.primary_color)   document.documentElement.style.setProperty('--clr-primary',   b.primary_color);
  if (b.secondary_color) document.documentElement.style.setProperty('--clr-secondary',  b.secondary_color);

  const nameEl = document.getElementById('brand-name');
  if (nameEl) nameEl.textContent = b.name || t('app_name');

  const logoEl = document.getElementById('brand-logo');
  if (logoEl) {
    if (b.logo_url) { logoEl.src = b.logo_url; logoEl.style.display = 'inline'; }
    else logoEl.style.display = 'none';
  }

  // When a school brand is active, the register link is irrelevant — hide it
  document.body.classList.add('branded');
  const strip = document.querySelector('.home-register-strip');
  if (strip) strip.style.display = 'none';
}

async function saveBranding(formData) {
  const cached = getBrandCache();
  const brand  = { ...cached, ...formData };
  localStorage.setItem(BRAND_KEY, JSON.stringify(brand));
  applyBranding(brand);

  if (isSupabaseEnabled() && instituteId()) {
    enqueueSync({ table:'institutes', action:'upsert', data:{ ...brand, id: instituteId() } });
    await flushSyncQueue();
  }
  showToast('💾 ' + t('admin_save'));
  return { ok: true };
}

/* =====================================================
   EXAM RESULTS — save + sync
   ===================================================== */
const RESULTS_KEY = 'studyBuddy_results';

function getLocalResults() {
  try { return JSON.parse(localStorage.getItem(RESULTS_KEY) || '[]'); } catch { return []; }
}
function saveLocalResult(result) {
  const all = getLocalResults();
  all.unshift(result);          // newest first
  if (all.length > 200) all.length = 200;  // keep last 200 locally
  localStorage.setItem(RESULTS_KEY, JSON.stringify(all));
}

function persistExamResult(result) {
  // result = { exam_type, student_name, student_section, class_level,
  //            mcq_score, mcq_total, answers_log, taken_at }
  const full = {
    ...result,
    id:            crypto.randomUUID ? crypto.randomUUID() : (Date.now() + Math.random()).toString(36),
    institute_id:  instituteId(),
    student_id:    currentUser?.id || null,
    taken_at:      result.taken_at || new Date().toISOString(),
    synced:        false,
  };
  saveLocalResult(full);

  if (isSupabaseEnabled()) {
    enqueueSync({ table:'exam_results', action:'insert', data: full });
    flushSyncQueue();
  }
  return full;
}

/* =====================================================
   TEACHER REVIEW
   Loads pending (unreviewed written) answers.
   ===================================================== */
async function loadPendingReviews() {
  const client = sb();
  let results = [];

  if (client && instituteId()) {
    const { data } = await client
      .from('exam_results')
      .select('*')
      .eq('institute_id', instituteId())
      .order('taken_at', { ascending: false })
      .limit(100);
    if (data) results = data;
  } else {
    // Offline: load from localStorage
    results = getLocalResults();
  }

  // Filter to those with unreviewed written answers
  return results.filter(r => {
    const log = r.answers_log || [];
    return log.some(a => ['short','long','essay'].includes(a.type) && !a.teacher_marks_set);
  });
}

async function saveReviewMarks(resultId, updatedLog) {
  // Update locally first
  const all = getLocalResults();
  const idx = all.findIndex(r => r.id === resultId);
  if (idx >= 0) {
    all[idx].answers_log = updatedLog;
    all[idx].reviewed_at = new Date().toISOString();
    localStorage.setItem(RESULTS_KEY, JSON.stringify(all));
  }

  enqueueSync({ table:'exam_results', action:'update',
    id: resultId, data: { answers_log: updatedLog, reviewed_at: new Date().toISOString() } });
  await flushSyncQueue();
}

/* =====================================================
   CLASS / SECTION MANAGEMENT
   ===================================================== */
const SECTIONS_KEY = 'studyBuddy_sections';

function getLocalSections() {
  try { return JSON.parse(localStorage.getItem(SECTIONS_KEY) || '[]'); } catch { return []; }
}

async function loadSections() {
  const client = sb();
  if (client && instituteId()) {
    const { data } = await client
      .from('sections')
      .select('*')
      .eq('institute_id', instituteId())
      .order('class_level')
      .order('name');
    if (data) {
      localStorage.setItem(SECTIONS_KEY, JSON.stringify(data));
      return data;
    }
  }
  return getLocalSections();
}

async function saveSection(section) {
  const local = getLocalSections();
  const id    = section.id || (Date.now() + Math.random()).toString(36);
  const full  = { ...section, id, institute_id: instituteId() };

  const idx = local.findIndex(s => s.id === id);
  if (idx >= 0) local[idx] = full; else local.push(full);
  localStorage.setItem(SECTIONS_KEY, JSON.stringify(local));

  enqueueSync({ table:'sections', action:'upsert', data: full });
  await flushSyncQueue();
  return full;
}

async function deleteSection(id) {
  const local = getLocalSections().filter(s => s.id !== id);
  localStorage.setItem(SECTIONS_KEY, JSON.stringify(local));

  const client = sb();
  if (client) {
    const { error } = await client.from('sections').delete().eq('id', id);
    if (error) showToast('⚠️ ' + error.message);
  }
}

/* =====================================================
   BULK STUDENT IMPORT
   CSV columns: name, email, class_level, section
   ===================================================== */
function parseBulkStudentCsv(text) {
  const lines   = text.trim().split(/\r?\n/);
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/^"|"$/g,''));
  const nIdx = headers.indexOf('name');
  const eIdx = headers.indexOf('email');
  const cIdx = headers.indexOf('class_level') >= 0 ? headers.indexOf('class_level') : headers.indexOf('class');
  const sIdx = headers.indexOf('section');

  if (eIdx < 0) return { students:[], error:'CSV must have an "email" column.' };

  const students = [];
  lines.slice(1).forEach(line => {
    if (!line.trim()) return;
    const v = line.split(',').map(c => c.trim().replace(/^"|"$/g,''));
    const email = v[eIdx];
    if (!email || !email.includes('@')) return;
    students.push({
      email,
      name:        nIdx >= 0 ? v[nIdx] : '',
      class_level: cIdx >= 0 ? v[cIdx] : '',
      section:     sIdx >= 0 ? v[sIdx] : '',
    });
  });
  return { students, error: null };
}

async function importStudents(students) {
  const client = sb();
  if (!client || !isAdmin()) {
    showToast('⚠️ Admin login required to import students.');
    return { ok: 0, failed: students.length };
  }

  let ok = 0, failed = 0;
  // Supabase admin SDK can create users — but with anon key we invite via magic link
  for (const s of students) {
    try {
      const { error } = await client.auth.signInWithOtp({
        email: s.email,
        options: { data: { name: s.name, institute_id: instituteId(),
                           class_level: s.class_level, section: s.section } }
      });
      if (error) throw error;
      ok++;
    } catch(e) {
      console.warn('Import failed for', s.email, e.message);
      failed++;
    }
  }
  return { ok, failed };
}

/* =====================================================
   TEACHER INVITE
   Admin invites teachers by email — they receive a magic
   link that signs them in with role = 'teacher'.
   ===================================================== */

// Send a single teacher invite
async function inviteTeacher(email, name) {
  const client = sb();
  if (!client || !isAdmin()) return { ok: false, error: 'Admin login required.' };
  if (!email || !email.includes('@')) return { ok: false, error: 'Valid email required.' };

  const instId = instituteId();
  if (!instId) return { ok: false, error: 'No institute linked to your account.' };

  const redirectTo = APP_BASE_URL + '?institute='
    + (localStorage.getItem('studyBuddy_instituteSlug') || '')
    + '&role=teacher';

  const { error } = await client.auth.signInWithOtp({
    email: email.trim().toLowerCase(),
    options: {
      emailRedirectTo: redirectTo,
      data: {
        name:         name || '',
        institute_id: instId,
        role:         'teacher',
      }
    }
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

// UI handler — single invite button
async function inviteTeacherUI() {
  const email  = document.getElementById('invite-teacher-email')?.value?.trim();
  const name   = document.getElementById('invite-teacher-name')?.value?.trim();
  const result = document.getElementById('invite-teacher-result');
  const btn    = document.getElementById('invite-teacher-btn');

  if (!email) {
    if (result) result.innerHTML = '<p class="invite-msg invite-err">⚠️ Please enter an email address.</p>';
    return;
  }

  if (btn) { btn.textContent = '⏳ Sending…'; btn.disabled = true; }

  const res = await inviteTeacher(email, name);

  if (btn) { btn.textContent = '📧 Send Invite'; btn.disabled = false; }

  if (res.ok) {
    if (result) result.innerHTML = `<p class="invite-msg invite-ok">✅ Invite sent to <b>${email}</b>. They'll receive a magic-link to sign in as teacher.</p>`;
    // Clear inputs
    const eEl = document.getElementById('invite-teacher-email');
    const nEl = document.getElementById('invite-teacher-name');
    if (eEl) eEl.value = '';
    if (nEl) nEl.value = '';
    // Refresh teachers list
    await renderTeachersList();
  } else {
    if (result) result.innerHTML = `<p class="invite-msg invite-err">❌ ${res.error}</p>`;
  }
}

// Bulk teacher CSV — same as student import but role = teacher
function handleBulkTeacherFile(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const text = ev.target.result;
    const lines = text.trim().split(/\r?\n/);
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const eIdx = headers.indexOf('email');
    const nIdx = headers.indexOf('name');

    if (eIdx < 0) {
      const area = document.getElementById('bulk-teacher-preview');
      if (area) area.innerHTML = '<p class="invite-msg invite-err">❌ CSV must have an "email" column.</p>';
      return;
    }

    const teachers = [];
    lines.slice(1).forEach(line => {
      if (!line.trim()) return;
      const v = line.split(',').map(c => c.trim().replace(/^"|"$/g,''));
      const email = v[eIdx];
      if (!email || !email.includes('@')) return;
      teachers.push({ email, name: nIdx >= 0 ? v[nIdx] : '' });
    });

    const area = document.getElementById('bulk-teacher-preview');
    if (!teachers.length) {
      if (area) area.innerHTML = '<p class="invite-msg invite-err">⚠️ No valid emails found in CSV.</p>';
      return;
    }

    if (area) area.innerHTML = `
      <div class="invite-preview-box">
        <p style="font-weight:700;margin-bottom:10px;">📋 ${teachers.length} teacher${teachers.length>1?'s':''} found:</p>
        ${teachers.map(t => `
          <div class="invite-preview-row">
            <span>👩‍🏫 ${t.name || '(no name)'}</span>
            <span class="invite-email">${t.email}</span>
          </div>`).join('')}
        <div style="display:flex;gap:10px;margin-top:14px;">
          <button class="csv-sample-load-btn"
                  onclick="sendBulkTeacherInvites(${JSON.stringify(teachers).replace(/"/g,'&quot;')})">
            📧 Send ${teachers.length} Invite${teachers.length>1?'s':''}
          </button>
          <button class="csv-sample-download-btn"
                  onclick="document.getElementById('bulk-teacher-preview').innerHTML=''">
            Cancel
          </button>
        </div>
      </div>`;
  };
  reader.readAsText(file);
  // Reset file input so same file can be re-selected
  e.target.value = '';
}

async function sendBulkTeacherInvites(teachers) {
  const area = document.getElementById('bulk-teacher-preview');
  if (area) area.innerHTML = '<p class="invite-msg">⏳ Sending invites…</p>';

  let ok = 0, failed = 0;
  for (const t of teachers) {
    const res = await inviteTeacher(t.email, t.name);
    if (res.ok) ok++; else failed++;
  }

  if (area) area.innerHTML = `
    <p class="invite-msg ${failed > 0 ? 'invite-err' : 'invite-ok'}">
      ✅ ${ok} invite${ok!==1?'s':''} sent${failed > 0 ? ` · ⚠️ ${failed} failed` : ''}.
    </p>`;

  await renderTeachersList();
}

// Download a simple 2-column CSV template for teachers
function downloadTeacherCsvTemplate() {
  const csv = 'name,email\nMrs. Sharma,sharma@myschool.in\nMr. Patel,patel@myschool.in';
  const blob = new Blob([csv], { type:'text/csv' });
  const a    = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(blob), download: 'teachers-template.csv'
  });
  a.click(); URL.revokeObjectURL(a.href);
}

// Load and render the list of existing teachers for this institute
async function renderTeachersList() {
  const container = document.getElementById('teachers-list');
  if (!container) return;

  const client = sb();
  if (!client || !isAdmin()) {
    container.innerHTML = '<p style="color:var(--clr-muted);font-size:13px;">Sign in as admin to see teachers.</p>';
    return;
  }

  const instId = instituteId();
  if (!instId) { container.innerHTML = ''; return; }

  const { data: teachers, error } = await client
    .from('users')
    .select('id, name, preferred_lang, created_at')
    .eq('institute_id', instId)
    .eq('role', 'teacher')
    .order('created_at', { ascending: false });

  if (error || !teachers?.length) {
    container.innerHTML = '<p style="color:var(--clr-muted);font-size:13px;">No teachers added yet.</p>';
    return;
  }

  // Fetch emails from auth.users via the user metadata (we stored email in user_metadata)
  container.innerHTML = teachers.map(t => `
    <div class="teacher-row">
      <div class="teacher-info">
        <span class="teacher-avatar">👩‍🏫</span>
        <div>
          <div class="teacher-name">${t.name || '(no name)'}</div>
          <div class="teacher-meta">Added ${new Date(t.created_at).toLocaleDateString('en-IN')}</div>
        </div>
      </div>
      <div class="teacher-actions">
        <span class="teacher-role-badge">Teacher</span>
        <button class="key-change-btn danger" style="font-size:11px;padding:4px 10px;"
                onclick="removeTeacherUI('${t.id}', this)">
          Remove
        </button>
      </div>
    </div>`).join('');
}

// Demote a teacher back to student (remove teacher role)
async function removeTeacherUI(userId, btnEl) {
  if (!confirm('Remove this teacher? They will lose access to review answers and class reports.')) return;

  const client = sb();
  if (!client || !isAdmin()) return;

  if (btnEl) { btnEl.textContent = '⏳'; btnEl.disabled = true; }

  const { error } = await client
    .from('users')
    .update({ role: 'student' })
    .eq('id', userId)
    .eq('institute_id', instituteId()); // safety: only demote within own institute

  if (error) {
    showToast('⚠️ Could not remove teacher: ' + error.message);
    if (btnEl) { btnEl.textContent = 'Remove'; btnEl.disabled = false; }
    return;
  }

  showToast('✅ Teacher removed.');
  await renderTeachersList();
}

// Export to window so onclick handlers in HTML can reach them
window.inviteTeacherUI        = inviteTeacherUI;
window.handleBulkTeacherFile  = handleBulkTeacherFile;
window.sendBulkTeacherInvites = sendBulkTeacherInvites;
window.downloadTeacherCsvTemplate = downloadTeacherCsvTemplate;
window.removeTeacherUI        = removeTeacherUI;
function addBrandedPdfHeader(doc, extraLines) {
  const b = window.BRAND || {};
  const margin = 15;
  let y = 14;

  // Logo
  if (b.logo_url) {
    try { doc.addImage(b.logo_url, 'PNG', margin, 10, 24, 24); }
    catch(e) { /* logo unavailable */ }
    y = 12;
  }

  const nameX = b.logo_url ? margin + 28 : margin;

  // Institute name
  doc.setFontSize(15).setFont(undefined, 'bold');
  doc.text(b.name || 'AI Study Buddy', nameX, y + 6);

  // Address / contact line
  const contact = [b.address, b.phone, b.email].filter(Boolean).join('  |  ');
  if (contact) {
    doc.setFontSize(8).setFont(undefined, 'normal');
    doc.text(contact, nameX, y + 13);
  }

  // Extra lines (e.g. student name, exam type, date)
  if (extraLines?.length) {
    doc.setFontSize(9);
    extraLines.forEach((line, i) => doc.text(line, nameX, y + 21 + i * 6));
  }

  // Divider
  const divY = Math.max(40, y + 22 + (extraLines?.length || 0) * 6);
  doc.setDrawColor(b.primary_color || '#4f46e5');
  doc.setLineWidth(0.6);
  doc.line(margin, divY, doc.internal.pageSize.getWidth() - margin, divY);

  // Footer on all pages (called after doc is fully built)
  if (b.footer_text) {
    const pages = doc.internal.getNumberOfPages();
    for (let p = 1; p <= pages; p++) {
      doc.setPage(p);
      doc.setFontSize(8).setFont(undefined, 'normal');
      const pw = doc.internal.pageSize.getWidth();
      const ph = doc.internal.pageSize.getHeight();
      doc.text(b.footer_text, margin, ph - 8);
      doc.text(`Page ${p} / ${pages}`, pw - margin, ph - 8, { align:'right' });
    }
  }

  return divY + 4;  // return y-position after header for caller to continue
}

/* =====================================================
   ADMIN UI HELPERS — called by page-admin in index.html
   ===================================================== */
async function renderAdminPage() {
  renderAdminCards();
  renderBrandingForm();
  await renderSectionsPanel();
  renderAdminUrlBar();
  await renderTeachersList();
}

// Populates the green school URL bar at the top of the admin page
function renderAdminUrlBar() {
  const slug = localStorage.getItem('studyBuddy_instituteSlug')
            || new URLSearchParams(window.location.search).get('institute')
            || '';
  const bar     = document.getElementById('admin-url-bar');
  const linkEl  = document.getElementById('admin-url-bar-link');
  const openBtn = document.getElementById('admin-url-open-btn');
  if (!bar || !linkEl || !slug) return;

  const url = APP_BASE_URL + '?institute=' + slug;
  linkEl.textContent = url;
  if (openBtn) { openBtn.href = url; }
  bar.style.display = 'flex';
}

function copyAdminSchoolUrl() {
  const url = document.getElementById('admin-url-bar-link')?.textContent?.trim();
  if (!url) return;
  const btn = document.getElementById('admin-url-copy-btn');
  navigator.clipboard?.writeText(url)
    .then(() => { if (btn) { btn.textContent = '✅ Copied!'; setTimeout(() => btn.textContent = '📋 Copy', 2000); } })
    .catch(() => { prompt('Copy your school URL:', url); });
}
window.copyAdminSchoolUrl = copyAdminSchoolUrl;

function renderAdminCards() {
  const adminCard   = document.getElementById('feat-admin-card');
  const reviewCard  = document.getElementById('feat-review-card');
  const reportsCard = document.getElementById('feat-reports-card');
  const testsCard   = document.getElementById('feat-tests-card');
  if (adminCard)   adminCard.style.display   = isAdmin()    ? '' : 'none';
  if (reviewCard)  reviewCard.style.display  = isTeacher()  ? '' : 'none';
  // Reports: teacher/admin only — shows student names and class data
  if (reportsCard) reportsCard.style.display = isTeacher()  ? '' : 'none';
  // Tests visible only to admins (or when URL has ?dev=1 for developers)
  const isDev = new URLSearchParams(window.location.search).get('dev') === '1';
  if (testsCard) testsCard.style.display = (isAdmin() || isDev) ? '' : 'none';
}

function renderBrandingForm() {
  const b = getBrandCache() || {};
  const fields = ['name','logo_url','address','phone','email','footer_text','primary_color','secondary_color'];
  fields.forEach(f => {
    const el = document.getElementById('brand-' + f.replace('_','-'));
    if (el) el.value = b[f] || '';
  });
  // Live preview colour swatches
  const p = document.getElementById('brand-primary-color');
  const s = document.getElementById('brand-secondary-color');
  if (p) p.addEventListener('input', e => document.documentElement.style.setProperty('--clr-primary',   e.target.value));
  if (s) s.addEventListener('input', e => document.documentElement.style.setProperty('--clr-secondary', e.target.value));
}

function collectBrandingForm() {
  return {
    name:            document.getElementById('brand-name-input')?.value?.trim() || '',
    logo_url:        document.getElementById('brand-logo-url')?.value?.trim()   || '',
    address:         document.getElementById('brand-address')?.value?.trim()    || '',
    phone:           document.getElementById('brand-phone')?.value?.trim()      || '',
    email:           document.getElementById('brand-email')?.value?.trim()      || '',
    footer_text:     document.getElementById('brand-footer')?.value?.trim()     || '',
    primary_color:   document.getElementById('brand-primary-color')?.value      || '#4f46e5',
    secondary_color: document.getElementById('brand-secondary-color')?.value    || '#7c3aed',
  };
}

async function renderSectionsPanel() {
  const sections  = await loadSections();
  const container = document.getElementById('sections-list');
  if (!container) return;

  if (!sections.length) {
    container.innerHTML = '<p style="color:var(--clr-muted);font-size:14px;">No sections yet. Add one below.</p>';
    return;
  }
  container.innerHTML = sections.map(s => `
    <div class="section-item">
      <span class="section-class">Class ${s.class_level}</span>
      <span class="section-name">${s.name}</span>
      <span class="section-count">${s.student_count || 0} students</span>
      <button class="key-change-btn danger" onclick="deleteSectionUI('${s.id}')">🗑️</button>
    </div>`).join('');
}

async function addSectionUI() {
  const cls  = document.getElementById('new-section-class')?.value?.trim();
  const name = document.getElementById('new-section-name')?.value?.trim();
  if (!cls || !name) { showToast('⚠️ Enter both class and section name.'); return; }
  await saveSection({ class_level: cls, name });
  await renderSectionsPanel();
  showToast('✅ Section added!');
}

async function deleteSectionUI(id) {
  if (!confirm('Delete this section?')) return;
  await deleteSection(id);
  await renderSectionsPanel();
}

/* ---- Bulk student import UI ---- */
function handleBulkStudentFile(e) {
  const file = e.target?.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const { students, error } = parseBulkStudentCsv(ev.target.result);
    if (error) { showToast('⚠️ ' + error); return; }
    showBulkImportPreview(students);
  };
  reader.readAsText(file);
  e.target.value = '';
}

function showBulkImportPreview(students) {
  const area = document.getElementById('bulk-import-preview');
  if (!area) return;
  const rows = students.slice(0, 8).map((s, i) =>
    `<tr><td>${i+1}</td><td>${s.name}</td><td>${s.email}</td><td>${s.class_level}</td><td>${s.section}</td></tr>`
  ).join('');
  area.innerHTML = `
    <div class="csv-preview-card" style="margin-top:12px;">
      <div class="csv-preview-header">
        <span>👥 ${students.length} students found</span>
      </div>
      <div class="csv-format-table-wrap">
        <table class="csv-format-table">
          <thead><tr><th>#</th><th>Name</th><th>Email</th><th>Class</th><th>Section</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div style="margin-top:12px;">
        <button class="big-btn btn-green" style="padding:8px 20px;font-size:14px;"
          onclick="runBulkImport(${JSON.stringify(students).replace(/'/g,'&apos;')})">
          📥 Import ${students.length} Students
        </button>
        <button class="key-change-btn" style="margin-left:8px;"
          onclick="document.getElementById('bulk-import-preview').innerHTML=''">Cancel</button>
      </div>
    </div>`;
}

async function runBulkImport(students) {
  const area = document.getElementById('bulk-import-preview');
  if (area) area.innerHTML = '<p style="padding:12px;color:var(--clr-muted);">⏳ Sending invites…</p>';
  const { ok, failed } = await importStudents(students);
  if (area) area.innerHTML = `<p style="padding:12px;">✅ ${ok} invites sent. ${failed ? '⚠️ ' + failed + ' failed.' : ''}</p>`;
}

/* =====================================================
   TEACHER REVIEW UI
   ===================================================== */
async function renderReviewPage() {
  const container = document.getElementById('review-list');
  if (!container) return;
  container.innerHTML = '<p style="color:var(--clr-muted)">Loading…</p>';

  const pending = await loadPendingReviews();
  if (!pending.length) {
    container.innerHTML = `<p class="csv-empty">${t('review_empty')}</p>`;
    return;
  }

  container.innerHTML = pending.map(result => {
    const written = (result.answers_log || []).filter(a => ['short','long','essay'].includes(a.type));
    const date    = new Date(result.taken_at).toLocaleDateString('en-IN');
    return `
      <div class="review-card" id="review-${result.id}">
        <div class="review-card-header">
          <span class="review-student">👤 ${result.student_name || 'Unknown'}</span>
          <span class="review-meta">${result.exam_type?.toUpperCase()} · Class ${result.class_level || '?'} · ${date}</span>
          <span class="review-mcq">MCQ: ${result.mcq_score ?? '?'} / ${result.mcq_total ?? '?'}</span>
        </div>
        ${written.map((a, idx) => `
          <div class="review-item">
            <div class="review-q-type"><span class="exam-type-pill exam-type-${a.type}">${a.type}</span>
              <span style="font-weight:700;margin-left:8px;">${a.q}</span></div>
            <div class="review-answer">${a.studentAnswer || '<em style="color:var(--clr-muted)">No answer written</em>'}</div>
            <div class="review-marks-row">
              <span style="font-size:13px;font-weight:600;margin-right:8px;">${t('review_save')} (${a.marks || '?'} marks):</span>
              <button class="review-mark-btn" onclick="setReviewMark('${result.id}',${idx},'full')">
                ${t('review_mark_full')}</button>
              <button class="review-mark-btn" onclick="setReviewMark('${result.id}',${idx},'partial')">
                ${t('review_mark_partial')}</button>
              <button class="review-mark-btn" onclick="setReviewMark('${result.id}',${idx},'zero')">
                ${t('review_mark_zero')}</button>
              <span class="review-mark-set" id="review-mark-${result.id}-${idx}"></span>
            </div>
          </div>`).join('')}
        <div style="margin-top:12px;">
          <button class="big-btn btn-green" style="padding:8px 20px;font-size:13px;"
            onclick="saveReview('${result.id}')">💾 Save all marks for this paper</button>
        </div>
      </div>`;
  }).join('');

  // Store pending results in window for mark edits
  window._pendingReviews = pending;
}

function setReviewMark(resultId, idx, level) {
  // Update in-memory pending reviews
  const r = window._pendingReviews?.find(r => r.id === resultId);
  if (!r) return;
  const written = r.answers_log.filter(a => ['short','long','essay'].includes(a.type));
  if (!written[idx]) return;
  const maxMarks = written[idx].marks || 5;
  written[idx].teacher_marks = level === 'full' ? maxMarks
                             : level === 'partial' ? Math.round(maxMarks / 2)
                             : 0;
  written[idx].teacher_marks_set = true;
  // Update indicator
  const el = document.getElementById(`review-mark-${resultId}-${idx}`);
  if (el) el.textContent = `→ ${written[idx].teacher_marks} marks`;
}

async function saveReview(resultId) {
  const r = window._pendingReviews?.find(r => r.id === resultId);
  if (!r) return;
  await saveReviewMarks(resultId, r.answers_log);
  const card = document.getElementById(`review-${resultId}`);
  if (card) card.style.opacity = '0.5';
  showToast('✅ Marks saved!');
}

/* =====================================================
   STUDENT NAME MODAL
   Shown before every exam. Stores in sessionStorage
   so it only prompts once per browser session.
   ===================================================== */
function getStudentInfo() {
  try { return JSON.parse(sessionStorage.getItem('studyBuddy_student') || 'null'); } catch { return null; }
}
function setStudentInfo(info) {
  sessionStorage.setItem('studyBuddy_student', JSON.stringify(info));
}

function showStudentNameModal(onConfirm) {
  // Check sessionStorage first (set this session), then localStorage (set on welcome)
  const existing  = getStudentInfo();
  const savedName = localStorage.getItem('studyBuddy_studentName');

  if (existing?.name) { onConfirm(existing); return; }

  // Pre-fill from localStorage if student already entered name on welcome screen
  if (savedName) {
    const info = {
      name:    savedName,
      section: localStorage.getItem('studyBuddy_studentSection') || ''
    };
    setStudentInfo(info);
    onConfirm(info);
    return;
  }

  const modal     = document.getElementById('student-modal');
  const nameInput = document.getElementById('student-name-input');
  const errEl     = document.getElementById('student-modal-error');
  if (!modal) { onConfirm({ name:'', section:'' }); return; }

  // Pre-fill if input already has a value from a previous partial entry
  if (nameInput && !nameInput.value) nameInput.value = '';
  modal.style.display = 'flex';
  setTimeout(() => nameInput?.focus(), 100);

  // Hide any previous error
  if (errEl) errEl.style.display = 'none';

  document.getElementById('student-modal-start').onclick = () => {
    const name    = document.getElementById('student-name-input')?.value?.trim() || '';
    const section = document.getElementById('student-section-input')?.value?.trim() || '';

    // Name is mandatory — block and show error
    if (!name) {
      if (errEl) errEl.style.display = 'block';
      const inp = document.getElementById('student-name-input');
      if (inp) {
        inp.style.borderColor = '#ef4444';
        inp.style.animation = 'shake 0.35s ease';
        inp.focus();
        setTimeout(() => { inp.style.animation = ''; inp.style.borderColor = ''; }, 400);
      }
      return;
    }

    if (errEl) errEl.style.display = 'none';
    const info = { name, section };
    setStudentInfo(info);
    localStorage.setItem('studyBuddy_studentName', name);
    localStorage.setItem('studyBuddy_studentSection', section);
    modal.style.display = 'none';
    onConfirm(info);
  };
}

/* =====================================================
   URL-BASED INSTITUTE DETECTION
   Reads ?institute=slug from the URL and loads that
   school's branding — no login needed for students.
   Works for Option A (URL parameter) deployment.
   ===================================================== */

// Returns the institute slug from ?institute= URL param, or null
function getInstituteSlugFromUrl() {
  try {
    return new URLSearchParams(window.location.search).get('institute') || null;
  } catch { return null; }
}

// Load branding for a given slug (public — no auth needed)
// Returns: 'ok' | 'not_found' | 'setup_pending'
async function loadBrandingBySlug(slug) {
  const client = sb();
  if (!client || !slug) return 'ok';   // no Supabase → pass through silently

  try {
    // 1. Fetch the institute row
    const { data: inst, error } = await client
      .from('institutes')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error || !inst) {
      // Slug does not exist in the database
      showInstituteSetupScreen('not_found', slug);
      return 'not_found';
    }

    // 2. Check whether this institute has an admin user yet
    const { data: admins } = await client
      .from('users')
      .select('id')
      .eq('institute_id', inst.id)
      .eq('role', 'admin')
      .limit(1);

    const hasAdmin = admins && admins.length > 0;

    if (!hasAdmin) {
      // Institute registered but admin never clicked the magic link
      showInstituteSetupScreen('setup_pending', slug, inst.name);
      return 'setup_pending';
    }

    // 3. All good — apply branding
    localStorage.setItem(BRAND_KEY, JSON.stringify(inst));
    applyBranding(inst);
    localStorage.setItem('studyBuddy_instituteSlug', slug);
    localStorage.setItem('studyBuddy_instituteId', inst.id);
    return 'ok';

  } catch(e) {
    console.warn('Could not load branding for slug:', slug, e.message);
    return 'ok';   // fail open — don't block if Supabase is unreachable
  }
}

// Silent version — applies branding if institute exists, never shows blocking overlay.
// Used during magic link / setup landings so we don't block the admin.
async function loadBrandingBySlugSilent(slug) {
  const client = sb();
  if (!client || !slug) return;
  try {
    const { data: inst } = await client
      .from('institutes').select('*').eq('slug', slug).single();
    if (inst) {
      localStorage.setItem(BRAND_KEY, JSON.stringify(inst));
      applyBranding(inst);
      localStorage.setItem('studyBuddy_instituteSlug', slug);
      localStorage.setItem('studyBuddy_instituteId', inst.id);
    }
  } catch(e) { /* silent */ }
}

// Full-screen blocking overlay shown when ?institute= slug has a problem
function showInstituteSetupScreen(reason, slug, schoolName) {
  // Remove any existing overlay
  document.getElementById('institute-setup-screen')?.remove();

  const isNotFound     = reason === 'not_found';
  const title          = isNotFound
    ? '🔍 School Not Found'
    : '⏳ School Setup Incomplete';
  const message        = isNotFound
    ? `No school is registered with the URL <b>${slug}</b>.<br>The link may be incorrect or the school has not registered yet.`
    : `<b>${schoolName || slug}</b> has been registered but the admin account has not been activated yet.<br><br>The school admin needs to check their email and click the magic link to complete setup.`;
  const actionLabel    = isNotFound ? '🏫 Register This School' : '📧 Admin: Sign In to Activate';
  const actionHref     = isNotFound
    ? `register.html`
    : `#`;
  const actionOnclick  = isNotFound ? '' : `onclick="showPage('page-auth');document.getElementById('institute-setup-screen').remove();return false;"`;

  const overlay = document.createElement('div');
  overlay.id = 'institute-setup-screen';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(15,10,40,.75);display:flex;align-items:center;justify-content:center;padding:16px;';
  overlay.innerHTML = `
    <div style="background:#fff;border-radius:20px;padding:36px 28px;max-width:440px;width:100%;text-align:center;box-shadow:0 8px 40px rgba(79,70,229,.35);">
      <div style="font-size:52px;margin-bottom:14px;">${isNotFound ? '🏫' : '⚙️'}</div>
      <h2 style="font-family:'Baloo 2',cursive;font-size:22px;font-weight:800;color:var(--clr-primary);margin-bottom:10px;">${title}</h2>
      <p style="font-size:14px;color:#6b7280;line-height:1.7;margin-bottom:22px;">${message}</p>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <a href="${actionHref}" ${actionOnclick}
           style="display:block;padding:13px 20px;border-radius:12px;background:linear-gradient(135deg,var(--clr-primary),var(--clr-secondary));color:#fff;font-weight:800;font-size:15px;text-decoration:none;font-family:inherit;">
          ${actionLabel}
        </a>
        <button onclick="document.getElementById('institute-setup-screen').remove();localStorage.removeItem('studyBuddy_instituteSlug');localStorage.removeItem('studyBuddy_instituteId');"
                style="padding:12px 20px;border-radius:12px;border:2px solid #c7d2fe;background:#fff;color:var(--clr-primary);font-weight:800;font-size:14px;cursor:pointer;font-family:inherit;">
          👤 Continue as Individual
        </button>
      </div>
      <p style="margin-top:14px;font-size:12px;color:#9ca3af;">
        The app will work in individual mode — your data stays local.
      </p>
    </div>`;
  document.body.appendChild(overlay);
}

/* =====================================================
   SELF-SERVICE INSTITUTE REGISTRATION
   Calls the register_institute Postgres function via RPC.
   No manual SQL needed — any school can register themselves.
   ===================================================== */

async function registerInstitute(formData) {
  const client = sb();
  if (!client) {
    return { ok: false, error: 'Supabase is not configured. Add your SUPABASE_URL and SUPABASE_ANON key to supabase.js first.' };
  }

  // Auto-generate slug from school name if not provided
  const slug = formData.slug
    ? formData.slug
    : formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const { data, error } = await client.rpc('register_institute', {
    p_name:            formData.name            || '',
    p_slug:            slug,
    p_address:         formData.address          || '',
    p_phone:           formData.phone            || '',
    p_email:           formData.contact_email    || '',
    p_primary_color:   formData.primary_color    || '#4f46e5',
    p_secondary_color: formData.secondary_color  || '#7c3aed',
    p_admin_email:     formData.admin_email       || '',
  });

  if (error) return { ok: false, error: error.message };
  if (data && !data.ok) return { ok: false, error: data.error };

  // Send magic link to the admin so they can sign in and claim the institute
  if (formData.admin_email && data.ok) {
    // APP_BASE_URL (defined at top of this file) must also be whitelisted in:
    // Supabase Dashboard → Authentication → URL Configuration → Redirect URLs
    const redirectTo = APP_BASE_URL
      + '?institute=' + data.slug
      + '&setup=1';

    await client.auth.signInWithOtp({
      email: formData.admin_email,
      options: {
        data: {
          institute_id: data.institute_id,
          role:         'admin',
          name:         formData.admin_name || '',
        },
        emailRedirectTo: redirectTo,
      }
    });
  }

  return { ok: true, slug: data.slug, institute_id: data.institute_id };
}

// Called once after admin clicks their magic link and lands back on the app.
// Supabase delivers the session in TWO ways depending on config:
//   1. ?setup=1 in query params  (when emailRedirectTo includes ?setup=1)
//   2. #access_token=... in hash (when Site URL is used as fallback)
// We handle both.
async function finaliseAdminRegistration() {
  const params   = new URLSearchParams(window.location.search);
  const hash     = new URLSearchParams(window.location.hash.replace('#',''));
  const isSetup  = params.get('setup') === '1';
  const roleParam = params.get('role') || hash.get('role') || '';
  const hasToken = hash.get('access_token') || params.get('access_token');

  if (!isSetup && !hasToken && !roleParam) return;

  const client = sb();
  if (!client) return;

  // Exchange hash token for session if Supabase used the fallback redirect
  if (hasToken) {
    try {
      await client.auth.setSession({
        access_token:  hash.get('access_token')  || params.get('access_token'),
        refresh_token: hash.get('refresh_token') || params.get('refresh_token') || '',
      });
    } catch(e) { console.warn('setSession failed:', e.message); }
  }

  const { data: { session } } = await client.auth.getSession();
  if (!session) return;

  const instId = session.user.user_metadata?.institute_id;
  const metaRole = session.user.user_metadata?.role || roleParam;

  if (instId && metaRole === 'teacher') {
    // Teacher first login — ensure their role is set correctly in public.users
    await client
      .from('users')
      .upsert({
        id:           session.user.id,
        institute_id: instId,
        role:         'teacher',
        name:         session.user.user_metadata?.name || '',
      }, { onConflict: 'id' });

  } else if (instId && (isSetup || metaRole === 'admin')) {
    // Admin first login — finalise admin registration
    await client.rpc('finalise_admin_registration', { p_institute_id: instId });
  }

  // Clean URL
  const clean = new URL(window.location.href);
  clean.searchParams.delete('setup');
  clean.searchParams.delete('role');
  clean.hash = '';
  window.history.replaceState({}, '', clean.toString());

  // Load profile
  await onSignIn(session.user);

  // Show admin setup screen only for first-time admin
  if (isSetup || (metaRole === 'admin' && instId)) {
    setTimeout(() => {
      const slug = localStorage.getItem('studyBuddy_instituteSlug')
                || params.get('institute') || '';
      showAdminSetupWelcome(slug);
    }, 400);
  } else if (metaRole === 'teacher') {
    showToast('✅ Signed in as Teacher — Review Answers card is now available.');
  }
}

// Full-screen school setup modal — shown immediately after admin clicks magic link.
// Admin must complete mandatory fields before the school link is shared.
function showAdminSetupWelcome(slug) {
  document.getElementById('admin-setup-welcome')?.remove();

  const schoolUrl = slug ? APP_BASE_URL + '?institute=' + slug : '';
  const brand     = getBrandCache() || {};

  const overlay = document.createElement('div');
  overlay.id = 'admin-setup-welcome';
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(15,10,40,.85);display:flex;align-items:flex-start;justify-content:center;padding:16px;overflow-y:auto;';
  overlay.innerHTML = `
    <div style="background:#fff;border-radius:20px;padding:32px 28px;max-width:520px;width:100%;margin:auto;box-shadow:0 8px 40px rgba(79,70,229,.4);">

      <!-- Header -->
      <div style="text-align:center;margin-bottom:24px;">
        <div style="font-size:48px;margin-bottom:8px;">🎉</div>
        <h2 style="font-family:'Baloo 2',cursive;font-size:24px;font-weight:800;color:var(--clr-primary);margin-bottom:6px;">
          Welcome! Complete School Setup
        </h2>
        <p style="font-size:13px;color:#6b7280;line-height:1.6;">
          Fill in your school details below. Your school URL will be revealed once you save.
        </p>
      </div>

      <!-- Setup form -->
      <div style="display:flex;flex-direction:column;gap:14px;">

        <div>
          <label style="font-size:12px;font-weight:700;color:#374151;display:block;margin-bottom:4px;">
            School / Institute Name <span style="color:#ef4444;">*</span>
          </label>
          <input id="setup-school-name" type="text" placeholder="e.g. Green Valley School"
            value="${(brand.name||'').replace(/"/g,'&quot;')}"
            style="width:100%;border:1.5px solid #c7d2fe;border-radius:10px;padding:10px 13px;font-size:14px;font-family:inherit;outline:none;box-sizing:border-box;">
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div>
            <label style="font-size:12px;font-weight:700;color:#374151;display:block;margin-bottom:4px;">Primary Colour</label>
            <input id="setup-primary-color" type="color" value="${brand.primary_color||'#4f46e5'}"
              style="width:100%;height:42px;border:1.5px solid #c7d2fe;border-radius:10px;cursor:pointer;padding:4px;">
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#374151;display:block;margin-bottom:4px;">Secondary Colour</label>
            <input id="setup-secondary-color" type="color" value="${brand.secondary_color||'#7c3aed'}"
              style="width:100%;height:42px;border:1.5px solid #c7d2fe;border-radius:10px;cursor:pointer;padding:4px;">
          </div>
        </div>

        <div>
          <label style="font-size:12px;font-weight:700;color:#374151;display:block;margin-bottom:4px;">Address</label>
          <input id="setup-address" type="text" placeholder="123 Main St, City"
            value="${(brand.address||'').replace(/"/g,'&quot;')}"
            style="width:100%;border:1.5px solid #c7d2fe;border-radius:10px;padding:10px 13px;font-size:14px;font-family:inherit;outline:none;box-sizing:border-box;">
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div>
            <label style="font-size:12px;font-weight:700;color:#374151;display:block;margin-bottom:4px;">Phone</label>
            <input id="setup-phone" type="tel" placeholder="+91 98765 43210"
              value="${(brand.phone||'').replace(/"/g,'&quot;')}"
              style="width:100%;border:1.5px solid #c7d2fe;border-radius:10px;padding:10px 13px;font-size:14px;font-family:inherit;outline:none;box-sizing:border-box;">
          </div>
          <div>
            <label style="font-size:12px;font-weight:700;color:#374151;display:block;margin-bottom:4px;">School Email</label>
            <input id="setup-email" type="email" placeholder="info@myschool.in"
              value="${(brand.email||'').replace(/"/g,'&quot;')}"
              style="width:100%;border:1.5px solid #c7d2fe;border-radius:10px;padding:10px 13px;font-size:14px;font-family:inherit;outline:none;box-sizing:border-box;">
          </div>
        </div>

        <div>
          <label style="font-size:12px;font-weight:700;color:#374151;display:block;margin-bottom:4px;">Logo URL <span style="font-weight:400;color:#9ca3af;">(optional)</span></label>
          <input id="setup-logo" type="url" placeholder="https://…/logo.png"
            value="${(brand.logo_url||'').replace(/"/g,'&quot;')}"
            style="width:100%;border:1.5px solid #c7d2fe;border-radius:10px;padding:10px 13px;font-size:14px;font-family:inherit;outline:none;box-sizing:border-box;">
        </div>

        <!-- Error msg -->
        <div id="setup-error" style="display:none;background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:10px 14px;font-size:13px;color:#b91c1c;"></div>

        <!-- Save button -->
        <button id="setup-save-btn" onclick="saveSchoolSetup()"
          style="background:linear-gradient(135deg,var(--clr-primary),var(--clr-secondary));color:#fff;border:none;border-radius:12px;padding:14px;font-size:16px;font-weight:800;cursor:pointer;font-family:inherit;width:100%;margin-top:4px;">
          💾 Save & Reveal School URL
        </button>

        <p style="text-align:center;font-size:12px;color:#9ca3af;">
          You can update these details anytime from the <b>⚙️ Admin Panel</b>
        </p>
      </div>
    </div>`;
  document.body.appendChild(overlay);
}

// Called when admin clicks Save in the setup modal
async function saveSchoolSetup() {
  const name    = document.getElementById('setup-school-name')?.value?.trim();
  const errEl   = document.getElementById('setup-error');
  const saveBtn = document.getElementById('setup-save-btn');

  if (!name) {
    errEl.textContent = 'School name is required.';
    errEl.style.display = 'block';
    return;
  }
  errEl.style.display = 'none';
  saveBtn.textContent = '⏳ Saving…';
  saveBtn.disabled    = true;

  const formData = {
    name,
    primary_color:   document.getElementById('setup-primary-color')?.value  || '#4f46e5',
    secondary_color: document.getElementById('setup-secondary-color')?.value || '#7c3aed',
    address:  document.getElementById('setup-address')?.value?.trim()  || '',
    phone:    document.getElementById('setup-phone')?.value?.trim()    || '',
    email:    document.getElementById('setup-email')?.value?.trim()    || '',
    logo_url: document.getElementById('setup-logo')?.value?.trim()    || '',
  };

  const result = await saveBranding(formData);

  if (result && result.error) {
    errEl.textContent   = result.error;
    errEl.style.display = 'block';
    saveBtn.textContent = '💾 Save & Reveal School URL';
    saveBtn.disabled    = false;
    return;
  }

  // Remove setup overlay
  document.getElementById('admin-setup-welcome')?.remove();

  // Apply branding live
  applyBranding({ ...formData });
  showToast('✅ School setup saved!');

  // Reveal the school URL in a prominent banner
  revealSchoolUrl();

  // Navigate to admin panel for further customisation
  setTimeout(() => {
    if (typeof showPage === 'function') showPage('page-admin');
  }, 800);
}

window.showAdminSetupWelcome = showAdminSetupWelcome;
window.saveSchoolSetup       = saveSchoolSetup;

// Called when admin dismisses the setup welcome modal.
// Shows a persistent URL banner in the app so admin can copy it anytime.
function revealSchoolUrl() {
  const slug = localStorage.getItem('studyBuddy_instituteSlug');
  if (!slug) return;
  const url = APP_BASE_URL + '?institute=' + slug;

  // Remove any existing banner
  document.getElementById('school-url-banner')?.remove();

  const banner = document.createElement('div');
  banner.id = 'school-url-banner';
  banner.style.cssText = [
    'position:fixed;bottom:16px;left:50%;transform:translateX(-50%);z-index:8000;',
    'background:linear-gradient(135deg,#065f46,#047857);color:#fff;',
    'border-radius:14px;padding:14px 20px;max-width:520px;width:calc(100% - 32px);',
    'box-shadow:0 4px 24px rgba(0,0,0,.25);display:flex;align-items:center;gap:12px;',
    'font-family:\'Nunito\',sans-serif;'
  ].join('');
  banner.innerHTML = `
    <div style="flex:1;min-width:0;">
      <div style="font-size:12px;font-weight:700;opacity:.8;margin-bottom:2px;">🎉 Setup complete — your school URL is ready to share:</div>
      <div style="font-family:monospace;font-size:12px;font-weight:700;word-break:break-all;background:rgba(255,255,255,.15);border-radius:6px;padding:4px 8px;">${url}</div>
    </div>
    <div style="display:flex;flex-direction:column;gap:6px;flex-shrink:0;">
      <button onclick="navigator.clipboard?.writeText('${url}').then(()=>this.textContent='✅ Copied!').catch(()=>{})"
              style="background:#fff;color:#065f46;border:none;border-radius:8px;padding:6px 14px;font-size:12px;font-weight:800;cursor:pointer;font-family:inherit;white-space:nowrap;">
        📋 Copy
      </button>
      <button onclick="document.getElementById('school-url-banner').remove()"
              style="background:rgba(255,255,255,.2);color:#fff;border:none;border-radius:8px;padding:6px 14px;font-size:12px;font-weight:800;cursor:pointer;font-family:inherit;">
        Dismiss
      </button>
    </div>`;
  document.body.appendChild(banner);
}
async function initSupabase() {
  updateSyncBadge();

  // Apply cached branding immediately (offline-safe, zero flicker)
  const cached = getBrandCache();
  if (cached) applyBranding(cached);

  // Detect if this is a magic link / setup landing BEFORE doing branding check
  // so we don't show "School Not Found" while the session is still being established
  const params   = new URLSearchParams(window.location.search);
  const hash     = new URLSearchParams(window.location.hash.replace('#', ''));
  const isSetup  = params.get('setup') === '1';
  const hasToken = hash.get('access_token') || params.get('access_token');
  const isAuthLanding = isSetup || hasToken;

  // Auth — must run before branding slug check so we know who is logged in
  await initAuth();

  // Finalise admin setup if redirected from magic link
  // Run BEFORE loadBrandingBySlug so institute has an admin before the check
  if (isAuthLanding) {
    await finaliseAdminRegistration();
    // After finalising, reload slug branding normally
  }

  // Load branding from URL param — skip blocking check during setup landing
  const slug = getInstituteSlugFromUrl();
  if (slug) {
    if (isAuthLanding) {
      // Just apply branding silently — don't block on "no admin yet"
      // because we just created the admin above
      await loadBrandingBySlugSilent(slug);
    } else {
      await loadBrandingBySlug(slug);
    }
  }
}
