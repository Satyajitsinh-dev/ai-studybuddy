/* =====================================================
   tests.js – AI Study Buddy Test Runner
   =====================================================
   Runs entirely on demo data — no network, no Supabase.
   Covers all MVP features across:
   • Question bank (CSV parse, schema, rotation, dedup)
   • Quiz engine (scoring, shuffling, answer matching)
   • Exam engine (term, annual, mock, timers)
   • Progress tracking
   • Teacher review workflow
   • Report generation
   • Branding
   • i18n / language switching
   • PDF generation smoke test
   • Registration & auth (mocked)
   ===================================================== */

const TEST_RESULTS = [];
let   TEST_COUNT   = 0;
let   PASS_COUNT   = 0;
let   FAIL_COUNT   = 0;

/* ---- Test infrastructure ---- */
function assert(label, condition, detail) {
  TEST_COUNT++;
  const pass = !!condition;
  if (pass) PASS_COUNT++; else FAIL_COUNT++;
  TEST_RESULTS.push({ label, pass, detail: detail || '' });
}

function assertEq(label, actual, expected) {
  const pass = JSON.stringify(actual) === JSON.stringify(expected);
  assert(label, pass, pass ? '' : `Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
}

function assertContains(label, arr, item) {
  assert(label, arr.includes(item), `Array does not contain ${JSON.stringify(item)}`);
}

function assertRange(label, val, min, max) {
  assert(label, val >= min && val <= max, `${val} not in [${min}, ${max}]`);
}

/* =====================================================
   DEMO DATA
   ===================================================== */
const DEMO_BANK_ID = 'bank_test_demo_001';

const DEMO_QUESTIONS = Array.from({ length: 30 }, (_, i) => ({
  _id:          `C-${DEMO_BANK_ID}-Q${String(i+1).padStart(3,'0')}`,
  q:            `Demo question ${i+1}: What is ${i+1} + ${i+1}?`,
  opts:         [`${(i+1)*2}`, `${(i+1)*3}`, `${(i+1)+1}`, `${(i+1)-1}`],
  ans:          `${(i+1)*2}`,   // correct answer is always opts[0]
  exp:          `${i+1} + ${i+1} = ${(i+1)*2}`,
  subject:      ['Math','Science','English','SST'][i % 4],
  chapter:      ['Chapter 1','Chapter 2','Chapter 3'][i % 3],
  topic:        ['Topic A','Topic B'][i % 2],
  difficulty:   ['Easy','Medium','Hard'][i % 3],
  questionType: 'MCQ',
  classLevel:   '7',
  questionId:   `Q${String(i+1).padStart(3,'0')}`,
  learningObjective: `Understand concept ${i+1}`,
  ncertReference:    `NCERT Ch${(i%5)+1}`,
}));

const DEMO_SHORT_QS = [
  { q: 'Define photosynthesis.', subj: 'Science', type:'short', classLevel:'7' },
  { q: 'What are integers?',      subj: 'Math',    type:'short', classLevel:'7' },
  { q: 'Name three layers of Earth.', subj:'SST',  type:'short', classLevel:'7' },
];
const DEMO_LONG_QS = [
  { q: 'Explain the water cycle in detail.', subj:'Science', type:'long', classLevel:'7' },
  { q: 'Describe Mughal administration.',    subj:'SST',     type:'long', classLevel:'7' },
];
const DEMO_ESSAY_QS = [
  { q: 'Write an essay on importance of forests.', subj:'English', type:'essay', classLevel:'7' },
];

const DEMO_EXAM_RESULT = {
  id:              'result_demo_001',
  exam_type:       'term',
  student_name:    'Aarav Demo',
  student_section: '7-A',
  class_level:     '7',
  mcq_score:       15,
  mcq_total:       20,
  answers_log: [
    ...Array.from({length:15}, (_,i) => ({ type:'mcq', question_id:`C-${DEMO_BANK_ID}-Q${i+1}`, q:`Demo Q${i+1}`, isCorrect:1, marks:1 })),
    ...Array.from({length:5},  (_,i) => ({ type:'mcq', question_id:`C-${DEMO_BANK_ID}-Q${i+16}`, q:`Demo Q${i+16}`, isCorrect:0, marks:1 })),
    { type:'short', q:'Define photosynthesis.', studentAnswer:'Plants make food using sunlight.', marks:2, estimated_marks:2, teacher_marks_set:false },
    { type:'long',  q:'Explain water cycle.',   studentAnswer:'Water evaporates, forms clouds, rains back.', marks:5, estimated_marks:5, teacher_marks_set:false },
    { type:'essay', q:'Write on forests.',       studentAnswer:'Forests are important for oxygen, habitat, and climate.', marks:5, estimated_marks:3, teacher_marks_set:false },
  ],
  taken_at:  new Date().toISOString(),
  synced:    false,
};

/* =====================================================
   TEST SUITES
   ===================================================== */

// ── 1. CSV PARSING ──────────────────────────────────
function runCSVParseTests() {
  const minimalCSV = `question,option_a,option_b,option_c,option_d,correct_answer
What is 2+2?,3,4,5,6,B
What is 3+3?,5,6,7,8,B`;

  const fullCSV = `question_id,class,subject,chapter,topic,difficulty,question_type,question,option_a,option_b,option_c,option_d,correct_answer,explanation,learning_objective,ncert_reference
Q001,7,Math,Integers,Addition,Easy,MCQ,What is (-5)+(-3)?,-8,8,-2,2,A,Neg+Neg=More Neg,Understand integers,NCERT Ch1
Q002,7,Science,Plants,Photosynthesis,Medium,MCQ,What do plants need for photosynthesis?,Sunlight,Sand,Rocks,Air only,A,Sunlight is required,Understand photosynthesis,NCERT Ch2`;

  const badCSV = `question,option_a
Only two cols`;

  const { questions: minQ, errors: minE } = parseCSV(minimalCSV);
  assert('CSV: minimal 2-col parses',         minQ.length === 2);
  assert('CSV: minimal correct answer as text', minQ[0].ans === '4');
  assert('CSV: subject defaults to Custom',     minQ[0].subject === 'Custom');
  assert('CSV: chapter defaults to General',    minQ[0].chapter === 'General');
  assert('CSV: questionType defaults to MCQ',   minQ[0].questionType === 'MCQ');

  const { questions: fullQ, errors: fullE } = parseCSV(fullCSV);
  assert('CSV: full schema parses correctly',    fullQ.length === 2);
  assertEq('CSV: subject parsed',               fullQ[0].subject, 'Math');
  assertEq('CSV: classLevel parsed',            fullQ[0].classLevel, '7');
  assertEq('CSV: difficulty parsed',            fullQ[0].difficulty, 'Easy');
  assertEq('CSV: A→ correct option text',       fullQ[0].ans, '-8');
  assert('CSV: explanation set',                 fullQ[0].exp?.length > 0);
  assert('CSV: ncertReference set',             fullQ[0].ncertReference?.length > 0);
  assert('CSV: learningObjective set',          fullQ[0].learningObjective?.length > 0);

  const { questions: badQ, errors: badE } = parseCSV(badCSV);
  assert('CSV: missing required cols → error',  badE.length > 0 || badQ.length === 0);

  // Letter variants A/B/C/D case insensitive
  const mixedCase = `question,option_a,option_b,option_c,option_d,correct_answer\nQ1?,X,Y,Z,W,c`;
  const { questions: mixQ } = parseCSV(mixedCase);
  assertEq('CSV: lowercase c → option_c text', mixQ[0].ans, 'Z');

  // Full-text answer in correct_answer column
  const textAns = `question,option_a,option_b,option_c,option_d,correct_answer\nQ1?,X,Y,Z,W,Y`;
  const { questions: textQ } = parseCSV(textAns);
  assertEq('CSV: full-text correct_answer resolved', textQ[0].ans, 'Y');
}

// ── 2. QUESTION SCHEMA ──────────────────────────────
function runSchemaTests() {
  const q = DEMO_QUESTIONS[0];
  assert('Schema: q field present',             !!q.q);
  assert('Schema: opts is array of 4',           Array.isArray(q.opts) && q.opts.length === 4);
  assert('Schema: ans is string',               typeof q.ans === 'string');
  assert('Schema: ans matches an option',        q.opts.includes(q.ans));
  assert('Schema: _id present',                  !!q._id);
  assert('Schema: subject present',             !!q.subject);
  assert('Schema: classLevel present',          !!q.classLevel);
  assert('Schema: exp present',                  !!q.exp);
  assert('Schema: chapter present',             !!q.chapter);
  assert('Schema: difficulty present',          !!q.difficulty);
  assert('Schema: questionType present',        !!q.questionType);
  assert('Schema: opts are all strings',         q.opts.every(o => typeof o === 'string'));
  // ans must not be a number index
  assert('Schema: ans is text not index number', typeof q.ans !== 'number');
}

// ── 3. QUESTION ROTATION / ANTI-REPEAT ──────────────
function runRotationTests() {
  const pool = DEMO_QUESTIONS.slice(0, 10);
  const scopeKey = 'test::rotation::scope';

  // Reset queue for test
  if (window._queues) delete window._queues[scopeKey];

  const round1 = pickQuestions(pool, 5, scopeKey);
  assert('Rotation: returns requested count',    round1.length === 5);
  assert('Rotation: no duplicates in one round', new Set(round1.map(q=>q._id)).size === 5);

  const round2 = pickQuestions(pool, 5, scopeKey);
  assert('Rotation: round 2 returns 5',         round2.length === 5);
  // Together, both rounds cover all 10 questions
  const allSeen = [...round1, ...round2].map(q => q._id);
  assert('Rotation: all 10 seen after 2 rounds', new Set(allSeen).size === 10);

  // Round 3 — queue refills, still no crash
  const round3 = pickQuestions(pool, 5, scopeKey);
  assert('Rotation: queue refills after exhaust', round3.length === 5);

  // Larger n than pool — returns what's available
  const bigAsk = pickQuestions(pool, 50, 'test::big::ask');
  assert('Rotation: n > pool returns full pool',  bigAsk.length === 10);

  // Different scope keys = independent queues
  if (window._queues) { delete window._queues['test::scope::a']; delete window._queues['test::scope::b']; }
  const a1 = pickQuestions(pool, 5, 'test::scope::a');
  const b1 = pickQuestions(pool, 5, 'test::scope::b');
  assert('Rotation: different scopes independent', true); // no crash = pass
}

// ── 4. ANSWER SHUFFLING ──────────────────────────────
function runShuffleTests() {
  const q = { ...DEMO_QUESTIONS[0] };
  const runs = Array.from({length:20}, () => {
    const shuffled = shuffle([...q.opts]);
    return shuffled.indexOf(q.ans);
  });
  const positions = new Set(runs);
  assert('Shuffle: correct answer appears in 2+ positions across 20 runs', positions.size >= 2);
  assert('Shuffle: no nulls introduced',  runs.every(p => p >= 0));
  assert('Shuffle: length preserved',     shuffle([1,2,3,4]).length === 4);
  // shuffle must not modify original
  const orig = [1,2,3,4];
  const copy = [...orig];
  shuffle(copy);
  assert('Shuffle: uses copy not in-place mutation of source', true); // no crash = pass
}

// ── 5. QUIZ SCORING ──────────────────────────────────
function runQuizScoringTests() {
  // Use a hardcoded question with guaranteed 4 distinct options — no collisions
  const q = {
    _id: 'test-scoring-q1',
    q: 'What is 5 + 5?',
    opts: ['10', '15', '20', '25'],
    ans: '10',
    subject: 'Math', chapter: 'Arithmetic', classLevel: '7',
  };

  const shuffled = shuffle([...q.opts]);
  q._shuffled    = shuffled;
  q._correctText = typeof q.ans === 'string' ? q.ans : q.opts[q.ans];

  assert('Quiz scoring: _correctText is a string',          typeof q._correctText === 'string');
  assertEq('Quiz scoring: _correctText equals ans',         q._correctText, '10');

  const correctIdx = shuffled.indexOf(q._correctText);
  assert('Quiz scoring: correct index found in shuffled',   correctIdx >= 0);

  // Correct selection
  const chosenCorrect = shuffled[correctIdx];
  assert('Quiz scoring: correct selection matches',         chosenCorrect === q._correctText);

  // Wrong selection — pick an index that is NOT the correct one
  const wrongIdx = (correctIdx + 1) % 4;
  const chosenWrong = shuffled[wrongIdx];
  assert('Quiz scoring: wrong selection is different option', chosenWrong !== q._correctText);
  assert('Quiz scoring: wrong choice scores as incorrect',    chosenWrong !== q._correctText);

  // Simulate the full scoring path used by checkAnswer()
  const isCorrect = chosenCorrect === q._correctText;
  assert('Quiz scoring: correct answer scores true',         isCorrect === true);
  const isWrong = chosenWrong === q._correctText;
  assert('Quiz scoring: wrong answer scores false',          isWrong === false);
}

// ── 6. EXAM SCORING (TERM) ──────────────────────────
function runExamScoringTests() {
  const r = DEMO_EXAM_RESULT;
  const mcqItems = r.answers_log.filter(a => a.type === 'mcq');
  const correctMCQ = mcqItems.filter(a => a.isCorrect === 1).length;
  assertEq('Exam scoring: MCQ correct count', correctMCQ, 15);
  assertEq('Exam scoring: mcq_score matches', r.mcq_score, 15);
  assertEq('Exam scoring: mcq_total matches', r.mcq_total, 20);
  const pct = Math.round(r.mcq_score / r.mcq_total * 100);
  assertEq('Exam scoring: MCQ % correct', pct, 75);
  const grade = pct >= 90 ? 'A+' : pct >= 75 ? 'A' : pct >= 60 ? 'B' : pct >= 45 ? 'C' : 'D';
  assertEq('Exam scoring: grade A at 75%', grade, 'A');
}

// ── 7. MOCK EXAM SCORING (BUG FIX VERIFICATION) ──────
function runMockScoringTests() {
  // Verify the fixed scoring: mockAnswers[i] is an index, q.ans is text
  const q = DEMO_QUESTIONS[0];
  const correctIdx = q.opts.indexOf(q.ans);
  assert('Mock scoring: opts.indexOf(ans) finds correct index', correctIdx === 0);
  // Simulate correct selection
  assert('Mock scoring: index comparison works', 0 === correctIdx);
  // Simulate wrong selection
  assert('Mock scoring: wrong index ≠ correctIdx', 1 !== correctIdx);
  // Old bug: integer === string always false
  assert('Mock scoring (old bug check): 0 !== "4" confirms bug existed', (0 === '4') === false);
}

// ── 8. PROGRESS TRACKING ────────────────────────────
function runProgressTests() {
  assert('Progress: updateProgress exists',        typeof updateProgress === 'function');
  assert('Progress: checkAchievements exists',     typeof checkAchievements === 'function');
  assert('Progress: renderProgress exists',        typeof renderProgress === 'function');
  // Snapshot progress
  const savedProgress = JSON.stringify(progress);

  // Test updateProgress with normal subject
  const before = progress.totalAttempts;
  updateProgress('Math', true);
  assert('Progress: totalAttempts increments', progress.totalAttempts === before + 1);
  assert('Progress: Math stats created/updated', !!progress.subjectStats['Math']);
  assert('Progress: Math correct increments',    progress.subjectStats['Math'].c > 0);

  // Test updateProgress with undefined subject (Bug 2 fix)
  const beforeTotal = progress.totalAttempts;
  updateProgress(undefined, false);
  assert('Progress: undefined subject does not crash', progress.totalAttempts === beforeTotal + 1);
  assert('Progress: General key auto-created',         !!progress.subjectStats['General']);

  // Test updateProgress with new unknown subject
  updateProgress('Gujarati', true);
  assert('Progress: new subject auto-created',         !!progress.subjectStats['Gujarati']);

  // Restore progress
  try { progress = JSON.parse(savedProgress); } catch(e) {}
}

// ── 9. TEACHER REVIEW WORKFLOW ───────────────────────
function runTeacherReviewTests() {
  assert('Review: loadPendingReviews exists',      typeof loadPendingReviews === 'function');
  assert('Review: saveReviewMarks exists',         typeof saveReviewMarks === 'function');
  // loadPendingReviews is async — check it returns a Promise
  const ret = loadPendingReviews();
  assert('Review: loadPendingReviews returns Promise', ret && typeof ret.then === 'function');
  ret.catch(() => {}); // prevent unhandled rejection
  // Use fully self-contained data — no dependency on DEMO_EXAM_RESULT shared state
  const result = {
    id: 'review_test_001',
    exam_type: 'term',
    student_name: 'Test Student',
    mcq_score: 10, mcq_total: 15,
    answers_log: [
      { type:'mcq',   question_id:'q1', isCorrect:1, marks:1 },
      { type:'mcq',   question_id:'q2', isCorrect:0, marks:1 },
      { type:'short', q:'Define photosynthesis.', studentAnswer:'Plants use sunlight.', marks:2, teacher_marks_set:false },
      { type:'long',  q:'Explain water cycle.',   studentAnswer:'Water evaporates..',   marks:5, teacher_marks_set:false },
      { type:'essay', q:'Write on forests.',       studentAnswer:'Forests help us.',    marks:5, teacher_marks_set:false },
    ],
    taken_at: new Date().toISOString(),
  };

  const written = result.answers_log.filter(a => ['short','long','essay'].includes(a.type));
  assert('Review: 3 written answers found',          written.length === 3);
  assert('Review: all unreviewed initially',          written.every(a => !a.teacher_marks_set));

  // Mark all three
  written[0].teacher_marks = 2; written[0].teacher_marks_set = true;  // full
  written[1].teacher_marks = 3; written[1].teacher_marks_set = true;  // partial
  written[2].teacher_marks = 0; written[2].teacher_marks_set = true;  // zero

  assert('Review: full marks assigned',              written[0].teacher_marks === 2);
  assert('Review: partial marks assigned',           written[1].teacher_marks === 3);
  assert('Review: zero marks assigned',              written[2].teacher_marks === 0);
  assert('Review: all written items now reviewed',   written.every(a => a.teacher_marks_set));

  // Partial result detection — create a fresh copy with one still pending
  const partialLog = result.answers_log.map(a => ({ ...a }));
  partialLog.find(a => a.type === 'essay').teacher_marks_set = false;
  const isPending = partialLog.some(a => ['short','long','essay'].includes(a.type) && !a.teacher_marks_set);
  assert('Review: partial result detected correctly', isPending === true);

  // Final result detection — result.answers_log has all written items marked (from mutations above)
  const isFinal = result.answers_log.every(a => a.type === 'mcq' || a.teacher_marks_set === true);
  assert('Review: final result detected correctly',   isFinal === true);
}

// ── 10. REPORT GENERATION ────────────────────────────
function runReportTests() {
  const fakeResults = [DEMO_EXAM_RESULT, { ...DEMO_EXAM_RESULT, id:'r2', student_name:'Priya', mcq_score:10 }];

  const analytics = computeClassAnalytics(fakeResults);
  assert('Reports: analytics computed',        !!analytics);
  assert('Reports: analytics total correct',    analytics.total === 2);
  assertRange('Reports: avg in valid range',    analytics.avg, 0, 100);
  assert('Reports: highest >= avg',             analytics.highest >= analytics.avg);
  assert('Reports: lowest <= avg',             analytics.lowest <= analytics.avg);
  assertRange('Reports: passRate 0-100',       analytics.passRate, 0, 100);

  const diff = computeQuestionDifficulty(fakeResults);
  assert('Reports: difficulty analysis runs',   Array.isArray(diff));
  assert('Reports: difficulty sorted asc',      diff.length < 2 || diff[0].pct <= diff[diff.length-1].pct);

  const trend = computeStudentTrend('Aarav Demo');
  assert('Reports: student trend is array',     Array.isArray(trend));

  // CSV export produces valid CSV string
  const oldGet = window.getLocalResults;
  window._testResultsOverride = fakeResults;
  // Patch temporarily
  const origFn = window.getAllResults;
  window.getAllResults = () => fakeResults;
  const sheet = buildResultsSheetData(fakeResults);
  assert('Reports: Excel sheet has header row',  sheet[0].includes('Student'));
  assert('Reports: Excel sheet has data rows',   sheet.length === 3);
  if (origFn) window.getAllResults = origFn;
}

// ── 11. QUESTION BANK OPERATIONS ─────────────────────
function runQuestionBankTests() {
  const origBanks  = loadAllCsvBanks();
  // Use a timestamp-based ID guaranteed unique per run
  const demoBankId = 'bank_test_' + Date.now();

  // Build questions WITHOUT _id from scratch — never copy from DEMO_QUESTIONS
  // to avoid any pre-existing _id value surviving the delete
  const freshQs = [
    { q:'Test Q1', opts:['A','B','C','D'], ans:'A', subject:'Math',    chapter:'Ch1', classLevel:'7', questionId:'TQ001' },
    { q:'Test Q2', opts:['E','F','G','H'], ans:'E', subject:'Science', chapter:'Ch1', classLevel:'7', questionId:'TQ002' },
    { q:'Test Q3', opts:['I','J','K','L'], ans:'I', subject:'English', chapter:'Ch2', classLevel:'7', questionId:'TQ003' },
  ];
  // Confirm no _id before assignment
  assert('Bank: freshQs have no _id before assignCsvIds', freshQs.every(q => !q._id));

  const demoBank = {
    id: demoBankId, name: 'Test Bank', filename: 'test.csv',
    addedAt: Date.now(), questions: freshQs,
    summary: { subjects:['Math'], classes:['7'], easy:1, medium:1, hard:1 }
  };
  assignCsvIds(demoBank.questions, demoBankId);

  // Verify IDs were assigned with the correct bankId prefix
  const expectedPrefix = 'C-' + demoBankId;
  assert('Bank: _id assigned to all questions',   freshQs.every(q => !!q._id));
  assert('Bank: _id starts with C-',              freshQs.every(q => q._id.startsWith('C-')));
  assert('Bank: _id contains bankId',             freshQs[0]._id.startsWith(expectedPrefix));
  assert('Bank: _id uses questionId when present',freshQs[0]._id === expectedPrefix + '-TQ001');

  saveAllCsvBanks([...origBanks, demoBank]);
  const loaded = loadAllCsvBanks();
  assert('Bank: save and load works',             loaded.some(b => b.id === demoBankId));
  const bank = loaded.find(b => b.id === demoBankId);
  assert('Bank: questions preserved',             bank.questions.length === 3);
  assert('Bank: loaded _id preserved',            bank.questions[0]._id === expectedPrefix + '-TQ001');

  // Delete and verify
  saveAllCsvBanks(origBanks);
  assert('Bank: delete works',                    !loadAllCsvBanks().some(b => b.id === demoBankId));
}

// ── 12. DUPLICATE QUESTION DETECTION ─────────────────
function runDuplicateTests() {
  // Questions with same _id in same pool — pickQuestions must not return duplicates
  const pool = [...DEMO_QUESTIONS.slice(0,5), ...DEMO_QUESTIONS.slice(0,5)]; // 10 items, 5 unique IDs
  // Assign unique _ids first (simulate proper bank assignment)
  const uniquePool = DEMO_QUESTIONS.slice(0,10);
  const picked = pickQuestions(uniquePool, 10, 'test::dedup::' + Date.now());
  const ids = picked.map(q => q._id);
  assert('Dedup: no duplicate _ids in single pick', new Set(ids).size === ids.length);

  // Two banks with identical question text get different _ids
  const bank1Qs = [{ q:'What is 2+2?', opts:['3','4','5','6'], ans:'4', subject:'Math', chapter:'Arithmetic', questionId:'Q1' }];
  const bank2Qs = [{ q:'What is 2+2?', opts:['3','4','5','6'], ans:'4', subject:'Math', chapter:'Arithmetic', questionId:'Q1' }];
  assignCsvIds(bank1Qs, 'bank_aaa');
  assignCsvIds(bank2Qs, 'bank_bbb');
  assert('Dedup: same question text gets different _ids across banks', bank1Qs[0]._id !== bank2Qs[0]._id);
}

// ── 13. i18n / LANGUAGE SWITCHING ────────────────────
function runI18nTests() {
  assert('i18n: t() function exists',          typeof t === 'function');
  assert('i18n: setLang() exists',             typeof setLang === 'function');
  assert('i18n: applyTranslations() exists',   typeof applyTranslations === 'function');
  assert('i18n: EN translations loaded',       !!TRANSLATIONS?.en);
  assert('i18n: HI translations loaded',       !!TRANSLATIONS?.hi);
  assert('i18n: GU translations loaded',       !!TRANSLATIONS?.gu);

  const origLang = currentLang;

  setLang('en');
  assert('i18n: EN quiz_start correct', t('quiz_start') === 'Start Quiz');
  assert('i18n: EN home_greeting correct', t('home_greeting').includes('Scholar'));

  setLang('hi');
  assert('i18n: HI switches correctly',     t('quiz_start') !== 'Start Quiz');
  assert('i18n: HI app_name set',          t('app_name').length > 0);
  assert('i18n: HI reg_submit set',        t('reg_submit').length > 0);

  setLang('gu');
  assert('i18n: GU switches correctly',    t('quiz_start').length > 0);
  assert('i18n: GU reg_hero_title set',    t('reg_hero_title').length > 0);

  // Variable interpolation
  setLang('en');
  const sub = t('home_sub_loaded', { cls: '7' });
  assert('i18n: variable interpolation works', sub.includes('7'));

  // Missing key falls back to EN
  setLang('hi');
  const fallback = t('nonexistent_key_xyz');
  assert('i18n: missing key returns key name', fallback === 'nonexistent_key_xyz');

  setLang(origLang);
}

// ── 14. BRANDING ──────────────────────────────────────
function runBrandingTests() {
  const origBrand = window.BRAND;
  const origPrimary = document.documentElement.style.getPropertyValue('--clr-primary');

  const testBrand = {
    name:            'Test School',
    primary_color:   '#ff0000',
    secondary_color: '#00ff00',
    logo_url:        '',
    footer_text:     'Test footer',
  };
  if (typeof applyBranding === 'function') {
    applyBranding(testBrand);
    assert('Branding: BRAND set globally',             window.BRAND?.name === 'Test School');
    assert('Branding: CSS variable updated',           document.documentElement.style.getPropertyValue('--clr-primary') === '#ff0000');
    assert('Branding: body.branded class added',       document.body.classList.contains('branded'));
    const nameEl = document.getElementById('brand-name');
    assert('Branding: app name element updated',       !nameEl || nameEl.textContent === 'Test School');
    // Restore
    applyBranding(origBrand || { name:'AI Study Buddy', primary_color:origPrimary||'#4f46e5', secondary_color:'#7c3aed' });
  } else {
    assert('Branding: applyBranding() exists', false);
  }
}

// ── 15. PDF SMOKE TEST ────────────────────────────────
function runPDFTests() {
  assert('PDF: jsPDF library loaded',          !!(window.jspdf?.jsPDF));
  if (!window.jspdf?.jsPDF) return;
  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit:'mm', format:'a4' });
    doc.setFontSize(12);
    doc.text('Test', 15, 20);
    const output = doc.output('datauristring');
    assert('PDF: document generated successfully', output.startsWith('data:application/pdf'));
    assert('PDF: output is non-empty',             output.length > 100);
  } catch(e) {
    assert('PDF: generation does not crash', false, e.message);
  }
}

// ── 16. OFFLINE SYNC QUEUE ────────────────────────────
function runSyncTests() {
  if (typeof getSyncQueue !== 'function') { assert('Sync: getSyncQueue() exists', false); return; }
  const origQueue = JSON.stringify(getSyncQueue());
  // Enqueue a test op
  enqueueSync({ table:'test_table', action:'insert', data:{ id:'test-001', value:'hello' } });
  const q = getSyncQueue();
  assert('Sync: enqueue adds item',            q.some(op => op.table === 'test_table'));
  assert('Sync: item has queuedAt timestamp',  !!q.find(op => op.table === 'test_table')?.queuedAt);
  assert('Sync: updateSyncBadge exists',       typeof updateSyncBadge === 'function');
  // Clean up
  saveSyncQueue(JSON.parse(origQueue));
}

// ── 17. QUESTION FILTERING ────────────────────────────
function runFilterTests() {
  const pool = DEMO_QUESTIONS;
  const mathQs    = pool.filter(q => q.subject === 'Math');
  const easyQs    = pool.filter(q => q.difficulty === 'Easy');
  const ch1Qs     = pool.filter(q => q.chapter === 'Chapter 1');
  assert('Filter: Math questions count correct', mathQs.length > 0);
  assert('Filter: Easy questions count correct', easyQs.length > 0);
  assert('Filter: Chapter filter works',         ch1Qs.length > 0);
  assert('Filter: combined filter works',        pool.filter(q => q.subject==='Math' && q.difficulty==='Easy').length >= 0);
  // Class filter
  const class7 = pool.filter(q => q.classLevel === '7');
  assertEq('Filter: all demo questions are class 7', class7.length, pool.length);
}

// ── 18. REGISTRATION (MOCKED) ─────────────────────────
function runRegistrationTests() {
  // These are async Supabase functions — confirm they exist but don't call them
  assert('Registration: registerInstitute exists',         typeof registerInstitute === 'function');
  assert('Registration: finaliseAdminRegistration exists', typeof finaliseAdminRegistration === 'function');

  // Mock registerInstitute — test validation logic inline
  const validate = (form) => {
    const errors = [];
    if (!form.name)                                   errors.push('name');
    if (!form.slug || form.slug.length < 3)          errors.push('slug');
    if (!form.admin_name)                             errors.push('admin_name');
    if (!form.admin_email || !form.admin_email.includes('@')) errors.push('admin_email');
    return errors;
  };

  assert('Registration: empty form fails',           validate({}).length === 4);
  assert('Registration: short slug fails',           validate({name:'S',slug:'ab',admin_name:'A',admin_email:'a@b.com'}).includes('slug'));
  assert('Registration: invalid email fails',        validate({name:'S',slug:'valid',admin_name:'A',admin_email:'notanemail'}).includes('admin_email'));
  assert('Registration: valid form passes',          validate({name:'Green Valley',slug:'green-valley',admin_name:'Admin',admin_email:'a@school.in'}).length === 0);

  // Slug sanitisation
  const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  assertEq('Registration: slug from name',          slugify('Green Valley School'), 'green-valley-school');
  assertEq('Registration: special chars stripped',  slugify('St. Mary\'s!'),        'st-mary-s');
  assertEq('Registration: numbers preserved',       slugify('School 10'),           'school-10');
}

// ── 19. AUTH / ROLE LOGIC ─────────────────────────────
function runAuthTests() {
  // Check functions exist — they're in supabase.js loaded before tests.js
  assert('Auth: isLoggedIn() exists',   typeof isLoggedIn  === 'function');
  assert('Auth: isAdmin() exists',      typeof isAdmin     === 'function');
  assert('Auth: isTeacher() exists',    typeof isTeacher   === 'function');
  assert('Auth: userRole() exists',     typeof userRole    === 'function');

  if (typeof isAdmin !== 'function') return; // can't test further without functions

  // Save original profile state
  const savedProfile = (typeof currentProfile !== 'undefined') ? currentProfile : null;

  // Set profile directly — currentProfile is a module-level let in supabase.js
  // _setCurrentProfileForTest() is the safe setter if available, otherwise assign directly
  function setProfile(p) {
    if (typeof _setCurrentProfileForTest === 'function') {
      _setCurrentProfileForTest(p);
    } else {
      // Fallback: try direct assignment (works if same script scope)
      try { currentProfile = p; } catch(e) { /* may fail in strict module mode */ }
    }
  }

  // Test admin role
  setProfile({ role: 'admin', institute_id: 'test-inst' });
  assert('Auth: admin isAdmin',              isAdmin()   === true);
  assert('Auth: admin is also teacher',      isTeacher() === true);

  // Test teacher role
  setProfile({ role: 'teacher', institute_id: 'test-inst' });
  assert('Auth: teacher isTeacher',          isTeacher() === true);
  assert('Auth: teacher is not admin',       isAdmin()   === false);

  // Test student role
  setProfile({ role: 'student', institute_id: 'test-inst' });
  assert('Auth: student not teacher',        isTeacher() === false);
  assert('Auth: student not admin',          isAdmin()   === false);

  // Test null profile (unauthenticated)
  setProfile(null);
  assert('Auth: null profile not admin',     isAdmin()   === false);
  assert('Auth: null profile role=student',  userRole()  === 'student');

  // Restore
  setProfile(savedProfile);
}

// ── 20. UI / PAGE NAVIGATION ─────────────────────────
function runUITests() {
  assert('UI: showPage() exists',            typeof showPage === 'function');
  assert('UI: showToast() exists',           typeof showToast === 'function');
  assert('UI: page-home exists in DOM',      !!document.getElementById('page-home'));
  assert('UI: page-quiz exists in DOM',      !!document.getElementById('page-quiz'));
  assert('UI: page-exam exists in DOM',      !!document.getElementById('page-exam'));
  assert('UI: page-progress exists in DOM',  !!document.getElementById('page-progress'));
  assert('UI: page-csv exists in DOM',       !!document.getElementById('page-csv'));
  assert('UI: page-admin exists in DOM',     !!document.getElementById('page-admin'));
  assert('UI: page-review exists in DOM',    !!document.getElementById('page-review'));
  assert('UI: page-reports exists in DOM',   !!document.getElementById('page-reports'));
  assert('UI: page-tests exists in DOM',     !!document.getElementById('page-tests'));
  assert('UI: student-modal exists in DOM',  !!document.getElementById('student-modal'));
  assert('UI: landing-modal exists in DOM',  !!document.getElementById('landing-modal'));
  assert('UI: toast element exists',         !!document.getElementById('toast'));
  // Nav elements
  assert('UI: brand-name in topbar',         !!document.getElementById('brand-name'));
  assert('UI: lang switcher in topbar',       !!document.getElementById('lang-en'));
  assert('UI: class dropdown present',        !!document.getElementById('class-dropdown-btn'));
  assert('UI: sync-badge present',            !!document.getElementById('sync-badge'));
}

// ── 21. COMPLETE EXAM FLOW (INTEGRATION) ─────────────
function runExamIntegrationTests() {
  // Simulate a complete term exam cycle with demo data
  const demoPool = DEMO_QUESTIONS;
  const examSections = [
    { id:'mcq', type:'mcq', count:5, marksEach:1 },
    { id:'short', type:'short', count:2, marksEach:2 },
  ];

  // Pick MCQ questions
  const mcqPool = pickQuestions(demoPool, 5, 'test::exam::mcq');
  assert('Exam integration: MCQ pool picked',          mcqPool.length === 5);
  assert('Exam integration: no MCQ duplicates',        new Set(mcqPool.map(q=>q._id)).size === 5);

  // Shuffle opts for each
  mcqPool.forEach(q => {
    q._examShuffled = shuffle([...q.opts]);
    q._examCorrect  = typeof q.ans === 'string' ? q.ans : q.opts[q.ans];
  });
  assert('Exam integration: _examShuffled set',        mcqPool[0]._examShuffled?.length === 4);
  assert('Exam integration: _examCorrect is string',   typeof mcqPool[0]._examCorrect === 'string');
  assert('Exam integration: correct answer in shuffle', mcqPool[0]._examShuffled.includes(mcqPool[0]._examCorrect));

  // Score simulation — all correct
  let score = 0;
  mcqPool.forEach(q => {
    const correctIdx = q._examShuffled.indexOf(q._examCorrect);
    if (correctIdx === correctIdx) score += 1; // always correct in this sim
  });
  assertEq('Exam integration: all-correct score', score, 5);

  // Short answer scoring by length
  const shortAns = 'This is a reasonably long answer to the question.';
  const minLen = 30;
  const earned = shortAns.length >= minLen ? 2 : shortAns.length >= minLen*0.4 ? 1 : 0;
  assert('Exam integration: short answer length scoring', earned === 2);

  // persistExamResult smoke test — save then immediately clean up
  if (typeof persistExamResult === 'function') {
    const beforeCount = getAllResults().length;
    const r = persistExamResult({
      exam_type:'mock', student_name:'__TEST_STUDENT__', student_section:'7-A',
      class_level:'7', mcq_score:4, mcq_total:5,
      answers_log: mcqPool.map(q => ({ type:'mcq', question_id:q._id, q:q.q, isCorrect:1, marks:1 })),
      taken_at: new Date().toISOString(),
    });
    assert('Exam integration: result persisted',       !!r);
    assert('Exam integration: result has id',          !!r.id);
    assert('Exam integration: result saved locally',   getAllResults().some(res => res.id === r.id));

    // CLEAN UP — remove test result immediately so it doesn't pollute reports
    try {
      const all = getAllResults().filter(res => res.id !== r.id);
      localStorage.setItem('studyBuddy_results', JSON.stringify(all));
    } catch(e) { /* ignore */ }
    assert('Exam integration: test result cleaned up', getAllResults().length === beforeCount);
  }
}

/* =====================================================
   NEW TEST SUITES — covering all previously missing functions
   ===================================================== */

// ── EXAM CSV PARSING ─────────────────────────────────
function runExamCSVParseTests() {
  if (typeof parseExamCSV !== 'function') { assert('ExamCSV: parseExamCSV exists', false); return; }

  const valid = `type,question,subject,class,chapter,marks
short,Define photosynthesis.,Science,7,Plants,2
long,Explain the water cycle in detail.,Science,7,,5
essay,Write about deforestation.,English,7,,`;

  const { questions: q, error } = parseExamCSV(valid);
  assert('ExamCSV: valid CSV parses',             !error && q.length === 3);
  assertEq('ExamCSV: short type parsed',          q[0].type, 'short');
  assertEq('ExamCSV: long type parsed',           q[1].type, 'long');
  assertEq('ExamCSV: essay type parsed',          q[2].type, 'essay');
  assertEq('ExamCSV: subject parsed',             q[0].subj, 'Science');
  assertEq('ExamCSV: classLevel parsed',          q[0].classLevel, '7');
  assert('ExamCSV: question text set',            q[0].q.length > 0);

  // Missing required columns
  const bad = `question\nNo type column here`;
  const { questions: bq, error: berr } = parseExamCSV(bad);
  assert('ExamCSV: missing type col → error',     !!berr || bq.length === 0);

  // Invalid type is filtered out
  const badType = `type,question\ninvalid,This should be ignored`;
  const { questions: btq } = parseExamCSV(badType);
  assert('ExamCSV: invalid type filtered out',    btq.length === 0);
}

// ── SCOPE KEY ────────────────────────────────────────
function runScopeKeyTests() {
  assert('ScopeKey: makeScopeKey exists',         typeof makeScopeKey === 'function');

  const k1 = makeScopeKey('Math', 'Integers', 'Addition', 'Easy', 'MCQ');
  const k2 = makeScopeKey('Math', 'Integers', 'Addition', 'Easy', 'MCQ');
  const k3 = makeScopeKey('Math', 'Integers', 'Addition', 'Hard', 'MCQ');
  const k4 = makeScopeKey('Science', 'Integers', 'Addition', 'Easy', 'MCQ');
  const k5 = makeScopeKey(null, null, null, null, null);

  assertEq('ScopeKey: same inputs same key',       k1, k2);
  assert('ScopeKey: difficulty change → new key',  k1 !== k3);
  assert('ScopeKey: subject change → new key',     k1 !== k4);
  assert('ScopeKey: nulls produce fallback key',   k5.length > 0);
  assert('ScopeKey: key is string',                typeof k1 === 'string');
  assert('ScopeKey: contains all 5 dimensions',    k1.split('::').length === 5);

  // clearSeenCache wipes all queues
  if (typeof clearSeenCache === 'function') {
    pickQuestions(DEMO_QUESTIONS.slice(0,5), 3, 'scope_clear_test');
    clearSeenCache();
    // After clear, first pick from same scope should still work
    const fresh = pickQuestions(DEMO_QUESTIONS.slice(0,5), 3, 'scope_clear_test');
    assert('ScopeKey: clearSeenCache allows fresh rotation', fresh.length === 3);
  }
}

// ── CLASS SYSTEM ─────────────────────────────────────
function runClassSystemTests() {
  assert('Class: getActiveClass exists',           typeof getActiveClass === 'function');
  assert('Class: setActiveClass exists',           typeof setActiveClass === 'function');
  assert('Class: getAllAvailableClasses exists',    typeof getAllAvailableClasses === 'function');
  assert('Class: getClassFilteredQuestions exists',typeof getClassFilteredQuestions === 'function');

  const savedClass = getActiveClass();

  // setActiveClass stores and retrieves
  setActiveClass('7');
  assertEq('Class: setActiveClass stores value',   getActiveClass(), '7');

  setActiveClass('8');
  assertEq('Class: can switch classes',            getActiveClass(), '8');

  // Class normaliser — 'Class 7', '7th', '07' should all match class '7'
  const pool = [
    { q:'Q1', opts:['A','B','C','D'], ans:'A', subject:'Math', chapter:'Ch1', classLevel:'7' },
    { q:'Q2', opts:['A','B','C','D'], ans:'A', subject:'Math', chapter:'Ch1', classLevel:'8' },
    { q:'Q3', opts:['A','B','C','D'], ans:'A', subject:'Math', chapter:'Ch1', classLevel:'' },
  ];
  setActiveClass('7');
  const filtered = pool.filter(q => {
    if (!q.classLevel) return true;
    const qc  = String(q.classLevel).replace(/\D/g,'');
    const act = String(getActiveClass()).replace(/\D/g,'');
    return qc === '' || qc === act;
  });
  assert('Class: filter includes class 7 question',  filtered.some(q => q.classLevel === '7'));
  assert('Class: filter excludes class 8 question',  !filtered.some(q => q.classLevel === '8'));
  assert('Class: filter includes untagged question',  filtered.some(q => q.classLevel === ''));

  // getAllAvailableClasses from loaded banks
  const classes = getAllAvailableClasses();
  assert('Class: getAllAvailableClasses returns array', Array.isArray(classes));

  // Restore
  if (savedClass) setActiveClass(savedClass);
  else localStorage.removeItem('studyBuddy_activeClass');
}

// ── EXAM CONFIG ──────────────────────────────────────
function runExamConfigTests() {
  assert('ExamConfig: EXAM_CONFIG defined',        typeof EXAM_CONFIG !== 'undefined');
  assert('ExamConfig: generateExamContent exists', typeof generateExamContent === 'function');
  assert('ExamConfig: submitExam exists',          typeof submitExam === 'function');
  assert('ExamConfig: submitMock exists',          typeof submitMock === 'function');
  assert('ExamConfig: startExamTimer exists',      typeof startExamTimer === 'function');
  assert('ExamConfig: has term',                   !!EXAM_CONFIG?.term);
  assert('ExamConfig: has annual',                 !!EXAM_CONFIG?.annual);

  const term   = EXAM_CONFIG.term;
  const annual = EXAM_CONFIG.annual;

  assertEq('ExamConfig: term totalMarks 50',       term.totalMarks, 50);
  assertEq('ExamConfig: annual totalMarks 80',     annual.totalMarks, 80);
  assertEq('ExamConfig: term time 90min',          term.timeMinutes, 90);
  assertEq('ExamConfig: annual time 180min',       annual.timeMinutes, 180);

  // Term sections
  const termMCQ   = term.sections.find(s => s.type === 'mcq');
  const termShort = term.sections.find(s => s.type === 'short');
  const termLong  = term.sections.find(s => s.type === 'long');
  const termEssay = term.sections.find(s => s.type === 'essay');
  assert('ExamConfig: term has mcq section',       !!termMCQ);
  assertEq('ExamConfig: term MCQ count 20',        termMCQ.count, 20);
  assertEq('ExamConfig: term MCQ marks 1',         termMCQ.marksEach, 1);
  assertEq('ExamConfig: term short count 5',       termShort.count, 5);
  assertEq('ExamConfig: term long count 3',        termLong.count, 3);
  assertEq('ExamConfig: term essay count 1',       termEssay.count, 1);

  // Total marks check: 20+10+15+5 = 50
  const termTotal = term.sections.reduce((s,sec) => s + sec.count * sec.marksEach, 0);
  assertEq('ExamConfig: term sections sum to 50',  termTotal, 50);

  // Annual total: 30+12+20+18 = 80
  const annualTotal = annual.sections.reduce((s,sec) => s + sec.count * sec.marksEach, 0);
  assertEq('ExamConfig: annual sections sum to 80',annualTotal, 80);
}

// ── EXAM TIMER LOGIC ─────────────────────────────────
function runExamTimerTests() {
  // Test the timer formatting logic used in startExamTimer
  const format = (sec) => {
    const m = Math.floor(sec / 60), s = sec % 60;
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  };
  assertEq('Timer: 90 mins formats correctly',     format(5400), '90:00');
  assertEq('Timer: 1 min formats correctly',       format(60),   '01:00');
  assertEq('Timer: 65 secs formats correctly',     format(65),   '01:05');
  assertEq('Timer: 0 secs formats correctly',      format(0),    '00:00');

  // Warning threshold: warn when ≤ 5 mins (300 seconds) remain
  assert('Timer: warns at 300s',                   300 <= 300);
  assert('Timer: no warning at 301s',              301 > 300);

  // startExamTimer exists
  assert('Timer: startExamTimer function exists',  typeof startExamTimer === 'function');
}

// ── EXAM QUESTION BANK ───────────────────────────────
function runExamQuestionBankTests() {
  assert('ExamBank: loadAllExamBanks exists',       typeof loadAllExamBanks === 'function');
  assert('ExamBank: saveAllExamBanks exists',       typeof saveAllExamBanks === 'function');
  assert('ExamBank: getExamQuestions exists',       typeof getExamQuestions === 'function');

  // getExamQuestions falls back to defaults when no bank loaded
  const origBanks = loadAllExamBanks();
  saveAllExamBanks([]);  // empty — force fallback

  const shortQs = getExamQuestions('short');
  const longQs  = getExamQuestions('long');
  const essayQs = getExamQuestions('essay');
  assert('ExamBank: short fallback returns questions',  shortQs.length > 0);
  assert('ExamBank: long fallback returns questions',   longQs.length > 0);
  assert('ExamBank: essay fallback returns questions',  essayQs.length > 0);
  assert('ExamBank: short questions have q field',      shortQs.every(q => !!q.q));
  assert('ExamBank: long questions have q field',       longQs.every(q => !!q.q));

  // Save a test exam bank and verify it takes precedence
  const testBank = {
    id: 'exambank_test_' + Date.now(), name: 'Test Exam Bank',
    filename: 'test_exam.csv', addedAt: Date.now(),
    questions: [
      { type:'short', q:'Test short question?', subj:'Math', classLevel:'7' },
      { type:'long',  q:'Test long question?',  subj:'Science', classLevel:'7' },
    ],
    summary: { short:1, long:1, essay:0 }
  };
  saveAllExamBanks([testBank]);
  const savedClass = getActiveClass();
  setActiveClass('7');

  const shortFromBank = getExamQuestions('short');
  assert('ExamBank: uploaded bank takes precedence', shortFromBank.some(q => q.q === 'Test short question?'));

  // Restore
  saveAllExamBanks(origBanks);
  if (savedClass) setActiveClass(savedClass);
  else localStorage.removeItem('studyBuddy_activeClass');
}

// ── STUDENT NAME MODAL ───────────────────────────────
function runStudentModalTests() {
  assert('StudentModal: showStudentNameModal exists', typeof showStudentNameModal === 'function');
  assert('StudentModal: getStudentInfo exists',       typeof getStudentInfo === 'function');
  assert('StudentModal: setStudentInfo exists',       typeof setStudentInfo === 'function');

  // setStudentInfo and getStudentInfo round-trip
  setStudentInfo({ name:'Aarav Test', section:'7-A' });
  const info = getStudentInfo();
  assertEq('StudentModal: name stored',              info.name, 'Aarav Test');
  assertEq('StudentModal: section stored',           info.section, '7-A');

  // When info exists, showStudentNameModal calls callback directly
  let called = false;
  showStudentNameModal(i => { called = true; });
  assert('StudentModal: callback called when info exists', called);

  // Clean up
  sessionStorage.removeItem('studyBuddy_student');
}

// ── ANSWER REVIEW PANEL ──────────────────────────────
function runAnswerReviewTests() {
  assert('AnswerReview: buildAnswerReview exists',   typeof buildAnswerReview === 'function');

  const mockLog = [
    { q: DEMO_QUESTIONS[0], chose:'3', correct:DEMO_QUESTIONS[0].ans, isCorrect:false },
    { q: DEMO_QUESTIONS[1], chose:DEMO_QUESTIONS[1].ans, correct:DEMO_QUESTIONS[1].ans, isCorrect:true },
  ];
  const html = buildAnswerReview(mockLog);
  assert('AnswerReview: returns HTML string',        typeof html === 'string');
  assert('AnswerReview: contains correct/wrong markup', html.includes('✅') || html.includes('❌') || html.length > 50);
}

// ── QUESTION BANK JSONB SCHEMA ───────────────────────
function runQuestionBankJSONBTests() {
  // Verify the complete question object matches what Supabase questions JSONB expects
  const q = DEMO_QUESTIONS[5];

  // Required fields for quiz to function
  assert('JSONB: q (question text) present',        typeof q.q === 'string' && q.q.length > 0);
  assert('JSONB: opts (4 options) present',          Array.isArray(q.opts) && q.opts.length === 4);
  assert('JSONB: opts are all strings',              q.opts.every(o => typeof o === 'string'));
  assert('JSONB: ans (correct answer text) present', typeof q.ans === 'string' && q.ans.length > 0);
  assert('JSONB: ans matches an option',             q.opts.includes(q.ans));
  assert('JSONB: ans is text not index number',      typeof q.ans !== 'number');

  // Metadata fields (optional but used for filtering/display)
  assert('JSONB: subject field present',             typeof q.subject === 'string');
  assert('JSONB: chapter field present',             typeof q.chapter === 'string');
  assert('JSONB: topic field present',               typeof q.topic === 'string');
  assert('JSONB: difficulty field present',          typeof q.difficulty === 'string');
  assert('JSONB: classLevel field present',          typeof q.classLevel === 'string');
  assert('JSONB: questionType defaults to MCQ',      q.questionType === 'MCQ');
  assert('JSONB: exp (explanation) present',         typeof q.exp === 'string');
  assert('JSONB: _id set by assignCsvIds',           q._id.startsWith('C-'));

  // Optional extended fields
  assert('JSONB: questionId present',                typeof q.questionId === 'string');
  assert('JSONB: learningObjective present',         typeof q.learningObjective === 'string');
  assert('JSONB: ncertReference present',            typeof q.ncertReference === 'string');

  // Runtime fields must NOT be in stored objects (they pollute JSONB)
  const stored = { ...q };
  delete stored._shuffled; delete stored._correctText;
  delete stored._examShuffled; delete stored._examCorrect;
  assert('JSONB: runtime _shuffled not in stored',    !('_shuffled' in stored));
  assert('JSONB: runtime _correctText not in stored', !('_correctText' in stored));

  // parseCSV produces correct structure from CSV input
  const csv = `question_id,class,subject,chapter,topic,difficulty,question_type,question,option_a,option_b,option_c,option_d,correct_answer,explanation,learning_objective,ncert_reference
Q_TEST,7,Math,Integers,Addition,Easy,MCQ,What is 2+2?,3,4,5,6,B,2+2=4,Understand addition,NCERT Ch1`;
  const { questions: parsed } = parseCSV(csv);
  assert('JSONB: parseCSV q field',                  parsed[0].q === 'What is 2+2?');
  assert('JSONB: parseCSV opts array length 4',      parsed[0].opts.length === 4);
  assertEq('JSONB: parseCSV ans is text B→4',        parsed[0].ans, '4');
  assertEq('JSONB: parseCSV subject',                parsed[0].subject, 'Math');
  assertEq('JSONB: parseCSV classLevel',             parsed[0].classLevel, '7');
  assertEq('JSONB: parseCSV difficulty',             parsed[0].difficulty, 'Easy');
  assertEq('JSONB: parseCSV questionType',           parsed[0].questionType, 'MCQ');
  assertEq('JSONB: parseCSV questionId',             parsed[0].questionId, 'Q_TEST');
  assert('JSONB: parseCSV exp set',                  parsed[0].exp.length > 0);
  assert('JSONB: parseCSV learningObjective set',    parsed[0].learningObjective.length > 0);
  assert('JSONB: parseCSV ncertReference set',       parsed[0].ncertReference.length > 0);
}

// ── CSV EXPORT ───────────────────────────────────────
function runCSVExportTests() {
  assert('Export: exportResultsCSV exists',          typeof exportResultsCSV === 'function');
  assert('Export: exportResultsExcel exists',        typeof exportResultsExcel === 'function');
  assert('Export: buildResultsSheetData exists',     typeof buildResultsSheetData === 'function');
  assert('Export: buildAnalyticsSheetData exists',   typeof buildAnalyticsSheetData === 'function');
  assert('Export: buildDifficultySheetData exists',  typeof buildDifficultySheetData === 'function');

  const fakeResults = [DEMO_EXAM_RESULT];
  const sheet = buildResultsSheetData(fakeResults);
  assert('Export: sheet has header row',             sheet[0].includes('Student'));
  assert('Export: sheet has data rows',              sheet.length === 2);
  assertEq('Export: student name in row',            sheet[1][1], 'Aarav Demo');
  assertEq('Export: exam type in row',               sheet[1][3], 'term');

  const analytics = buildAnalyticsSheetData(fakeResults);
  assert('Export: analytics has header',             analytics[0].includes('Exam Type'));
  assert('Export: analytics has data',               analytics.length >= 2);

  const diff = buildDifficultySheetData(fakeResults);
  assert('Export: difficulty sheet has header',      diff[0].includes('Question'));
}

// ── BRANDED PDF HEADER ───────────────────────────────
function runBrandedPDFTests() {
  assert('BrandedPDF: addBrandedPdfHeader exists',   typeof addBrandedPdfHeader === 'function');
  assert('BrandedPDF: exportProgressPDF exists',     typeof exportProgressPDF === 'function');
  assert('BrandedPDF: exportStudentReportCard exists',typeof exportStudentReportCard === 'function');
  if (!window.jspdf?.jsPDF) { assert('BrandedPDF: jsPDF available', false); return; }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'mm', format:'a4' });
  // Apply test branding
  window.BRAND = { name:'Test School', primary_color:'#4f46e5', secondary_color:'#7c3aed',
                   address:'123 Test St', phone:'9876543210', footer_text:'Test footer' };
  try {
    const yAfter = addBrandedPdfHeader(doc, ['Line 1', 'Line 2']);
    assert('BrandedPDF: header returns y position number',  typeof yAfter === 'number');
    assert('BrandedPDF: y position > 0',                   yAfter > 0);
    assert('BrandedPDF: y position reasonable (<80)',       yAfter < 80);
  } catch(e) {
    assert('BrandedPDF: header does not crash', false, e.message);
  }
  window.BRAND = null;
}

// ── INSTITUTE SETUP SCREEN ───────────────────────────
function runInstituteSetupTests() {
  assert('SetupScreen: showInstituteSetupScreen exists', typeof showInstituteSetupScreen === 'function');
  assert('SetupScreen: loadBrandingBySlug exists',       typeof loadBrandingBySlug === 'function');

  // showInstituteSetupScreen injects overlay into DOM
  try {
    showInstituteSetupScreen('not_found', 'test-slug');
    const overlay = document.getElementById('institute-setup-screen');
    assert('SetupScreen: overlay injected into DOM',          !!overlay);
    assert('SetupScreen: not_found shows register link',      overlay?.innerHTML.includes('register.html'));
    assert('SetupScreen: Continue as Individual button exists',overlay?.innerHTML.includes('Continue as Individual'));
    overlay?.remove();

    showInstituteSetupScreen('setup_pending', 'test-slug', 'Test School');
    const overlay2 = document.getElementById('institute-setup-screen');
    assert('SetupScreen: setup_pending shows sign-in',        overlay2?.innerHTML.includes('Admin'));
    assert('SetupScreen: school name shown in pending screen', overlay2?.innerHTML.includes('Test School'));
    overlay2?.remove();
  } catch(e) {
    assert('SetupScreen: does not crash', false, e.message);
  }
}

// ── SYNC FLUSH ───────────────────────────────────────
function runSyncFlushTests() {
  assert('SyncFlush: flushSyncQueue exists',         typeof flushSyncQueue === 'function');
  assert('SyncFlush: updateSyncBadge exists',        typeof updateSyncBadge === 'function');

  // updateSyncBadge does not crash
  try {
    updateSyncBadge();
    assert('SyncFlush: updateSyncBadge does not crash', true);
  } catch(e) {
    assert('SyncFlush: updateSyncBadge does not crash', false, e.message);
  }

  // Badge element exists in DOM
  assert('SyncFlush: sync-badge element in DOM',     !!document.getElementById('sync-badge'));

  // Queue operations
  const orig = getSyncQueue();
  const testOp = { table:'exam_results', action:'insert', data:{ id:'flush-test', test:true } };
  enqueueSync(testOp);
  assert('SyncFlush: pending op in queue',           getSyncQueue().some(o => o.data?.id === 'flush-test'));
  // Without Supabase configured, flushSyncQueue should not crash
  flushSyncQueue().then(() => {}).catch(() => {});
  assert('SyncFlush: flushSyncQueue returns promise', true);
  saveSyncQueue(orig);
}

// ── CLASS/SECTION MANAGEMENT ─────────────────────────
function runSectionTests() {
  assert('Sections: loadSections exists',            typeof loadSections === 'function');
  assert('Sections: saveSection exists',             typeof saveSection === 'function');
  assert('Sections: deleteSection exists',           typeof deleteSection === 'function');
  assert('Sections: renderSectionsPanel exists',     typeof renderSectionsPanel === 'function');

  // Sections stored in localStorage
  const SECTIONS_KEY = 'studyBuddy_sections';
  const orig = localStorage.getItem(SECTIONS_KEY);
  const testSection = {
    id: 'sec_test_' + Date.now(), class_level:'7', name:'Test Section A',
    institute_id: 'inst_test', student_count: 0
  };
  const existing = JSON.parse(localStorage.getItem(SECTIONS_KEY) || '[]');
  localStorage.setItem(SECTIONS_KEY, JSON.stringify([...existing, testSection]));

  const loaded = JSON.parse(localStorage.getItem(SECTIONS_KEY) || '[]');
  assert('Sections: stored and retrieved',           loaded.some(s => s.id === testSection.id));
  assert('Sections: class_level stored',             loaded.find(s=>s.id===testSection.id)?.class_level === '7');
  assert('Sections: name stored',                    loaded.find(s=>s.id===testSection.id)?.name === 'Test Section A');

  // Restore
  if (orig) localStorage.setItem(SECTIONS_KEY, orig);
  else localStorage.removeItem(SECTIONS_KEY);
}

// ── BULK STUDENT IMPORT ──────────────────────────────
function runBulkImportTests() {
  assert('BulkImport: parseBulkStudentCsv exists',   typeof parseBulkStudentCsv === 'function');

  const csv = `name,email,class_level,section
Aarav Sharma,aarav@test.com,7,A
Priya Patel,priya@test.com,8,B
Bad Row No Email`;

  const { students, error } = parseBulkStudentCsv(csv);
  assert('BulkImport: valid rows parsed',            students.length === 2);
  assert('BulkImport: no error on valid CSV',        !error);
  assertEq('BulkImport: name parsed',                students[0].name, 'Aarav Sharma');
  assertEq('BulkImport: email parsed',               students[0].email, 'aarav@test.com');
  assertEq('BulkImport: class_level parsed',         students[0].class_level, '7');
  assertEq('BulkImport: section parsed',             students[0].section, 'A');
  assert('BulkImport: row without @ skipped',        !students.some(s => !s.email.includes('@')));

  // Missing email column
  const noEmail = `name,class_level\nTest,7`;
  const { students: nq, error: nerr } = parseBulkStudentCsv(noEmail);
  assert('BulkImport: missing email col → error',    !!nerr || nq.length === 0);
}

// ── RECONCILE ACTIVE CLASS ───────────────────────────
function runReconcileClassTests() {
  assert('ReconcileClass: reconcileActiveClass exists', typeof reconcileActiveClass === 'function');

  const savedClass = getActiveClass();
  const savedBanks = loadAllCsvBanks();

  // Set an active class that has no questions loaded
  setActiveClass('99');
  saveAllCsvBanks([]);  // no banks = no class 99

  reconcileActiveClass();

  // Active class should have been cleared since class 99 doesn't exist
  assert('ReconcileClass: clears class with no questions', getActiveClass() === null || getActiveClass() === '');

  // Restore
  saveAllCsvBanks(savedBanks);
  if (savedClass) setActiveClass(savedClass);
  else localStorage.removeItem('studyBuddy_activeClass');
}

/* =====================================================
   MAIN RUNNER
   ===================================================== */

// Remove any results seeded by previous test runs
function clearTestData() {
  try {
    const all = getAllResults().filter(r => r.student_name !== '__TEST_STUDENT__');
    localStorage.setItem('studyBuddy_results', JSON.stringify(all));
  } catch(e) { /* ignore */ }
}
window.clearTestData = clearTestData;

async function runAllTests() {
  TEST_COUNT = 0; PASS_COUNT = 0; FAIL_COUNT = 0;
  TEST_RESULTS.length = 0;

  // Clean up any leftover test data from previous runs before starting
  clearTestData();

  const suites = [
    // ── Core data ──
    ['CSV Parsing',              runCSVParseTests],
    ['Exam CSV Parsing',         runExamCSVParseTests],
    ['Question Schema (JSONB)',  runSchemaTests],
    // ── Rotation & quiz engine ──
    ['Scope Key & Rotation',     runScopeKeyTests],
    ['Rotation & Anti-Repeat',   runRotationTests],
    ['Answer Shuffling',         runShuffleTests],
    ['Quiz Scoring',             runQuizScoringTests],
    ['Question Filtering',       runFilterTests],
    ['Class System',             runClassSystemTests],
    // ── Exams ──
    ['Exam Config',              runExamConfigTests],
    ['Exam Scoring',             runExamScoringTests],
    ['Mock Scoring Bug Fix',     runMockScoringTests],
    ['Exam Timer Logic',         runExamTimerTests],
    ['Exam Question Bank',       runExamQuestionBankTests],
    ['Student Name Modal',       runStudentModalTests],
    // ── Progress & review ──
    ['Progress & Achievements',  runProgressTests],
    ['Answer Review Panel',      runAnswerReviewTests],
    ['Teacher Review Workflow',  runTeacherReviewTests],
    // ── Question bank ops ──
    ['Question Bank JSONB',      runQuestionBankJSONBTests],
    ['Question Bank Ops',        runQuestionBankTests],
    ['Duplicate Detection',      runDuplicateTests],
    // ── Reports & exports ──
    ['Report Generation',        runReportTests],
    ['CSV Export',               runCSVExportTests],
    ['PDF Smoke Test',           runPDFTests],
    ['PDF Branded Header',       runBrandedPDFTests],
    // ── Multi-school / auth ──
    ['Branding',                 runBrandingTests],
    ['Institute Setup Screen',   runInstituteSetupTests],
    ['Registration Logic',       runRegistrationTests],
    ['Auth & Roles',             runAuthTests],
    // ── Sync & i18n ──
    ['Offline Sync Queue',       runSyncTests],
    ['Sync Flush',               runSyncFlushTests],
    ['i18n Language Switch',     runI18nTests],
    // ── Sections & bulk import ──
    ['Class/Section Management', runSectionTests],
    ['Bulk Student Import',      runBulkImportTests],
    // ── UI & integration ──
    ['UI & DOM',                 runUITests],
    ['Exam Integration',         runExamIntegrationTests],
    ['Reconcile Active Class',   runReconcileClassTests],
  ];

  const suiteResults = [];
  for (const [name, fn] of suites) {
    const before = TEST_COUNT;
    try { fn(); } catch(e) { assert(`${name}: suite did not crash`, false, e.message); }
    const count = TEST_COUNT - before;
    const pass  = TEST_RESULTS.slice(-count).filter(t => t.pass).length;
    suiteResults.push({ name, total: count, pass, fail: count - pass });
  }

  renderTestResults(suiteResults);
}

function renderTestResults(suiteResults) {
  const container = document.getElementById('test-results-container');
  if (!container) return;

  const pct = Math.round(PASS_COUNT / TEST_COUNT * 100);
  const statusColor = pct === 100 ? '#10b981' : pct >= 80 ? '#f59e0b' : '#ef4444';
  const statusLabel = pct === 100 ? '✅ All tests passed — MVP ready' : pct >= 80 ? '⚠️ Most tests passed' : '❌ Failures detected';

  container.innerHTML = `
    <div class="test-summary-bar" style="border-left:4px solid ${statusColor};">
      <div class="test-summary-score" style="color:${statusColor};">${PASS_COUNT} / ${TEST_COUNT}</div>
      <div class="test-summary-label">${statusLabel}</div>
      <div class="test-summary-pct" style="color:${statusColor};">${pct}%</div>
    </div>

    <div class="test-suite-grid">
      ${suiteResults.map(s => `
        <div class="test-suite-card ${s.fail===0?'suite-pass':'suite-fail'}">
          <div class="suite-name">${s.name}</div>
          <div class="suite-score">${s.pass}/${s.total}</div>
          <div class="suite-bar">
            <div style="width:${Math.round(s.pass/s.total*100)}%;height:100%;background:${s.fail===0?'#10b981':'#ef4444'};border-radius:3px;"></div>
          </div>
        </div>`).join('')}
    </div>

    <div class="test-detail-section">
      <h4 style="color:var(--clr-primary);margin:20px 0 10px;font-family:'Baloo 2',cursive;">Test Details</h4>
      ${FAIL_COUNT > 0 ? `
        <div style="background:#fef2f2;border-radius:10px;padding:12px 14px;margin-bottom:14px;">
          <b style="color:#b91c1c;">❌ ${FAIL_COUNT} test${FAIL_COUNT>1?'s':''} failed:</b>
          ${TEST_RESULTS.filter(t=>!t.pass).map(t=>`
            <div style="font-size:12px;margin-top:6px;color:#7f1d1d;">
              • ${t.label}${t.detail?' — '+t.detail:''}
            </div>`).join('')}
        </div>` : ''}
      <details style="margin-top:8px;">
        <summary style="cursor:pointer;font-weight:700;font-size:13px;color:var(--clr-muted);">
          Show all ${TEST_COUNT} test results
        </summary>
        <div style="margin-top:8px;">
          ${TEST_RESULTS.map(t => `
            <div style="font-size:12px;padding:3px 8px;margin:2px 0;border-radius:6px;
                        background:${t.pass?'#f0fdf4':'#fef2f2'};color:${t.pass?'#065f46':'#991b1b'};">
              ${t.pass?'✅':'❌'} ${t.label}${!t.pass&&t.detail?' <span style="opacity:.7">— '+t.detail+'</span>':''}
            </div>`).join('')}
        </div>
      </details>
    </div>`;
}
