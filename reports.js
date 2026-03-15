/* =====================================================
   reports.js – Reports & Export Engine for AI Study Buddy
   Generates:
   • CSV / Excel (.xlsx) exports of results
   • PDF reports with institute branding
   • Per-student report card
   • Class analytics (avg, high, low, pass/fail)
   • Question difficulty analysis
   • Teacher review summary
   ===================================================== */

/* =====================================================
   DATA AGGREGATION
   ===================================================== */

// All results available to this session (local + Supabase)
function getAllResults() {
  if (typeof getLocalResults === 'function') return getLocalResults();
  try { return JSON.parse(localStorage.getItem('studyBuddy_results') || '[]'); } catch { return []; }
}

// Results filtered to current institute/class
function getFilteredResults(opts = {}) {
  let res = getAllResults();
  if (opts.examType)   res = res.filter(r => r.exam_type === opts.examType);
  if (opts.classLevel) res = res.filter(r => r.class_level === opts.classLevel);
  if (opts.student)    res = res.filter(r => r.student_name === opts.student);
  if (opts.since)      res = res.filter(r => new Date(r.taken_at) >= new Date(opts.since));
  return res;
}

// Class analytics: avg/high/low/pass/fail for a set of results
function computeClassAnalytics(results) {
  const mcqResults = results.filter(r => r.mcq_total > 0);
  if (!mcqResults.length) return null;
  const pcts = mcqResults.map(r => Math.round(r.mcq_score / r.mcq_total * 100));
  const avg  = Math.round(pcts.reduce((a,b) => a+b, 0) / pcts.length);
  const pass = pcts.filter(p => p >= 40).length;
  return {
    total:     results.length,
    withMCQ:   mcqResults.length,
    avg,
    highest:   Math.max(...pcts),
    lowest:    Math.min(...pcts),
    pass,
    fail:      mcqResults.length - pass,
    passRate:  Math.round(pass / mcqResults.length * 100),
  };
}

// Question difficulty: which questions were most often answered wrong
function computeQuestionDifficulty(results) {
  const qMap = {}; // question_id → {q, attempts, correct}
  results.forEach(r => {
    (r.answers_log || []).forEach(a => {
      if (a.type !== 'mcq' || !a.question_id) return;
      if (!qMap[a.question_id]) qMap[a.question_id] = { q: a.q, attempts: 0, correct: 0 };
      qMap[a.question_id].attempts++;
      if (a.isCorrect) qMap[a.question_id].correct++;
    });
  });
  return Object.entries(qMap)
    .map(([id, d]) => ({
      id, q: d.q, attempts: d.attempts, correct: d.correct,
      pct: Math.round(d.correct / d.attempts * 100)
    }))
    .sort((a, b) => a.pct - b.pct);  // worst first
}

// Per-student performance trend
function computeStudentTrend(studentName) {
  return getFilteredResults({ student: studentName })
    .sort((a, b) => new Date(a.taken_at) - new Date(b.taken_at))
    .map(r => ({
      date:      new Date(r.taken_at).toLocaleDateString('en-IN'),
      examType:  r.exam_type,
      mcqScore:  r.mcq_score,
      mcqTotal:  r.mcq_total,
      pct:       r.mcq_total > 0 ? Math.round(r.mcq_score / r.mcq_total * 100) : null,
      reviewed:  !!(r.reviewed_at),
    }));
}

/* =====================================================
   REPORTS PAGE RENDERING
   ===================================================== */

function renderReportsPage() {
  renderSummaryCards();
  renderResultsTable();
  renderClassAnalyticsSection();
  renderQuestionDifficultySection();
}

function renderSummaryCards() {
  const results  = getAllResults();
  const analytics = computeClassAnalytics(results);
  const el = document.getElementById('report-summary-cards');
  if (!el) return;
  const p = progress || {};
  el.innerHTML = `
    <div class="rpt-card rpt-blue">
      <div class="rpt-big">${results.length}</div>
      <div class="rpt-label">Exams Taken</div>
    </div>
    <div class="rpt-card rpt-green">
      <div class="rpt-big">${p.correct || 0}</div>
      <div class="rpt-label">Correct Answers</div>
    </div>
    <div class="rpt-card rpt-orange">
      <div class="rpt-big">${analytics ? analytics.avg + '%' : '—'}</div>
      <div class="rpt-label">Avg MCQ Score</div>
    </div>
    <div class="rpt-card rpt-purple">
      <div class="rpt-big">${analytics ? analytics.passRate + '%' : '—'}</div>
      <div class="rpt-label">Pass Rate</div>
    </div>`;
}

function renderResultsTable() {
  const el = document.getElementById('report-results-table');
  if (!el) return;
  const results = getAllResults().slice(0, 50);
  if (!results.length) {
    el.innerHTML = '<p style="color:var(--clr-muted);padding:16px;">No exam results yet. Complete a Term or Annual exam to see results here.</p>';
    return;
  }
  const rows = results.map((r, i) => {
    const date = new Date(r.taken_at).toLocaleDateString('en-IN');
    const pct  = r.mcq_total > 0 ? Math.round(r.mcq_score / r.mcq_total * 100) : null;
    const grade = pct == null ? '—' : pct >= 90 ? 'A+' : pct >= 75 ? 'A' : pct >= 60 ? 'B' : pct >= 45 ? 'C' : 'D';
    const reviewed = r.reviewed_at ? '✅ Reviewed' : (r.answers_log?.some(a => ['short','long','essay'].includes(a.type)) ? '⏳ Pending' : '—');
    return `<tr>
      <td>${i+1}</td>
      <td>${r.student_name || '—'}</td>
      <td>${r.exam_type?.toUpperCase() || '—'}</td>
      <td>Class ${r.class_level || '?'}</td>
      <td>${r.mcq_score ?? '—'} / ${r.mcq_total ?? '—'}</td>
      <td>${pct != null ? pct + '%' : '—'}</td>
      <td><b>${grade}</b></td>
      <td>${reviewed}</td>
      <td>${date}</td>
    </tr>`;
  }).join('');
  el.innerHTML = `
    <table class="rpt-table">
      <thead><tr>
        <th>#</th><th>Student</th><th>Exam</th><th>Class</th>
        <th>MCQ Score</th><th>%</th><th>Grade</th><th>Written</th><th>Date</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function renderClassAnalyticsSection() {
  const el = document.getElementById('report-class-analytics');
  if (!el) return;
  const results  = getAllResults();
  const byType   = {};
  results.forEach(r => {
    if (!byType[r.exam_type]) byType[r.exam_type] = [];
    byType[r.exam_type].push(r);
  });
  if (!Object.keys(byType).length) { el.innerHTML = '<p style="color:var(--clr-muted)">No data yet.</p>'; return; }
  el.innerHTML = Object.entries(byType).map(([type, res]) => {
    const a = computeClassAnalytics(res);
    if (!a) return '';
    return `
      <div class="rpt-analytics-row">
        <span class="rpt-exam-type">${type.toUpperCase()}</span>
        <span>📊 ${a.total} exams</span>
        <span>⌀ ${a.avg}%</span>
        <span>⬆️ ${a.highest}%</span>
        <span>⬇️ ${a.lowest}%</span>
        <span style="color:var(--clr-green)">✅ ${a.pass} pass</span>
        <span style="color:var(--clr-red)">❌ ${a.fail} fail</span>
        <span>Pass rate: <b>${a.passRate}%</b></span>
      </div>`;
  }).join('');
}

function renderQuestionDifficultySection() {
  const el = document.getElementById('report-question-difficulty');
  if (!el) return;
  const diff = computeQuestionDifficulty(getAllResults()).slice(0, 15);
  if (!diff.length) { el.innerHTML = '<p style="color:var(--clr-muted)">No question data yet.</p>'; return; }
  el.innerHTML = `
    <table class="rpt-table">
      <thead><tr><th>#</th><th>Question</th><th>Attempts</th><th>Correct</th><th>Accuracy</th></tr></thead>
      <tbody>${diff.map((d,i) => `
        <tr>
          <td>${i+1}</td>
          <td style="max-width:320px;">${(d.q||'').slice(0,80)}…</td>
          <td>${d.attempts}</td>
          <td>${d.correct}</td>
          <td>
            <div style="display:flex;align-items:center;gap:6px;">
              <div style="flex:1;height:8px;background:#e0e7ff;border-radius:4px;">
                <div style="width:${d.pct}%;height:100%;background:${d.pct<40?'#ef4444':d.pct<70?'#f59e0b':'#10b981'};border-radius:4px;"></div>
              </div>
              <b>${d.pct}%</b>
            </div>
          </td>
        </tr>`).join('')}
      </tbody>
    </table>`;
}

/* =====================================================
   CSV / EXCEL EXPORT
   ===================================================== */

function exportResultsCSV() {
  const results = getAllResults();
  if (!results.length) { if (typeof showToast === 'function') showToast('⚠️ No results to export.'); return; }
  const header = ['#','Student','Section','Exam Type','Class','MCQ Score','MCQ Total','MCQ %','Grade','Written Status','Date','Reviewed'];
  const rows = results.map((r, i) => {
    const pct   = r.mcq_total > 0 ? Math.round(r.mcq_score / r.mcq_total * 100) : '';
    const grade = pct !== '' ? (pct >= 90 ? 'A+' : pct >= 75 ? 'A' : pct >= 60 ? 'B' : pct >= 45 ? 'C' : 'D') : '';
    const written = r.answers_log?.some(a => ['short','long','essay'].includes(a.type))
      ? (r.reviewed_at ? 'Reviewed' : 'Pending Review') : 'MCQ Only';
    const date = new Date(r.taken_at).toLocaleDateString('en-IN');
    return [i+1, r.student_name||'', r.student_section||'', r.exam_type||'', r.class_level||'',
            r.mcq_score??'', r.mcq_total??'', pct, grade, written, date, r.reviewed_at ? 'Yes' : 'No'];
  });
  const csv = [header, ...rows].map(row =>
    row.map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')
  ).join('\n');
  downloadFile(csv, 'text/csv', `results-export-${dateStamp()}.csv`);
  if (typeof showToast === 'function') showToast('📥 Results CSV downloaded!');
}

function exportResultsExcel() {
  const results = getAllResults();
  if (!results.length) { if (typeof showToast === 'function') showToast('⚠️ No results to export.'); return; }

  // Build workbook data — three sheets
  const resultsSheet = buildResultsSheetData(results);
  const analyticsSheet = buildAnalyticsSheetData(results);
  const diffSheet = buildDifficultySheetData(results);

  // Use SheetJS (loaded from CDN on demand)
  loadSheetJS(() => {
    try {
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(resultsSheet),   'Results');
      XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(analyticsSheet), 'Analytics');
      XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(diffSheet),      'Question Difficulty');
      XLSX.writeFile(wb, `study-buddy-report-${dateStamp()}.xlsx`);
      if (typeof showToast === 'function') showToast('📊 Excel report downloaded!');
    } catch(e) {
      console.error('Excel export failed:', e);
      if (typeof showToast === 'function') showToast('⚠️ Excel export failed — downloading CSV instead.');
      exportResultsCSV();
    }
  });
}

function buildResultsSheetData(results) {
  const header = ['#','Student','Section','Exam Type','Class','MCQ Score','MCQ Total','MCQ %','Grade','Written Status','Date','Reviewed'];
  return [header, ...results.map((r, i) => {
    const pct   = r.mcq_total > 0 ? Math.round(r.mcq_score / r.mcq_total * 100) : '';
    const grade = pct !== '' ? (pct >= 90 ? 'A+' : pct >= 75 ? 'A' : pct >= 60 ? 'B' : pct >= 45 ? 'C' : 'D') : '';
    const written = r.answers_log?.some(a => ['short','long','essay'].includes(a.type))
      ? (r.reviewed_at ? 'Reviewed' : 'Pending Review') : 'MCQ Only';
    return [i+1, r.student_name||'', r.student_section||'', r.exam_type||'',
            r.class_level||'', r.mcq_score??'', r.mcq_total??'', pct, grade,
            written, new Date(r.taken_at).toLocaleDateString('en-IN'), r.reviewed_at ? 'Yes' : 'No'];
  })];
}

function buildAnalyticsSheetData(results) {
  const rows = [['Exam Type','Total Exams','Avg %','Highest %','Lowest %','Pass','Fail','Pass Rate %']];
  const byType = {};
  results.forEach(r => { if (!byType[r.exam_type]) byType[r.exam_type] = []; byType[r.exam_type].push(r); });
  Object.entries(byType).forEach(([type, res]) => {
    const a = computeClassAnalytics(res);
    if (a) rows.push([type.toUpperCase(), a.total, a.avg, a.highest, a.lowest, a.pass, a.fail, a.passRate]);
  });
  return rows;
}

function buildDifficultySheetData(results) {
  const diff = computeQuestionDifficulty(results);
  const rows = [['#','Question','Attempts','Correct','Accuracy %']];
  diff.forEach((d, i) => rows.push([i+1, d.q, d.attempts, d.correct, d.pct]));
  return rows;
}

function loadSheetJS(cb) {
  if (window.XLSX) { cb(); return; }
  const s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
  s.onload = cb;
  s.onerror = () => {
    if (typeof showToast === 'function') showToast('⚠️ Could not load Excel library. Downloading CSV instead.');
    exportResultsCSV();
  };
  document.head.appendChild(s);
}

/* =====================================================
   PDF REPORT GENERATION
   ===================================================== */

function exportProgressPDF() {
  const { jsPDF } = window.jspdf;
  if (!jsPDF) { if (typeof showToast === 'function') showToast('⚠️ PDF library not loaded yet.'); return; }

  const doc    = new jsPDF({ unit:'mm', format:'a4' });
  const W      = doc.internal.pageSize.getWidth();
  const margin = 15;
  const usable = W - margin * 2;
  let y = 20;

  const safe = s => (s || '').replace(/[^\x00-\x7F]/g, c => ({'\u2013':'-','\u2014':'--','\u2026':'...'}[c] || '?'));
  const hline = yy => { doc.setDrawColor(200); doc.setLineWidth(0.3); doc.line(margin, yy, W-margin, yy); };

  // Branded header
  if (window.BRAND && typeof addBrandedPdfHeader === 'function') {
    const cls = (typeof getActiveClass === 'function') ? getActiveClass() : '';
    y = addBrandedPdfHeader(doc, [
      'Student Progress Report',
      cls ? `Class ${cls}` : '',
      'Generated: ' + new Date().toLocaleDateString('en-IN', {day:'2-digit', month:'long', year:'numeric'}),
    ].filter(Boolean));
  } else {
    doc.setFillColor(79, 70, 229);
    doc.rect(0, 0, W, 16, 'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(12); doc.setTextColor(255,255,255);
    doc.text('AI STUDY BUDDY — PROGRESS REPORT', W/2, 10, {align:'center'});
    y = 24;
    doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(100,100,120);
    doc.text('Generated: ' + new Date().toLocaleDateString('en-IN'), W/2, y, {align:'center'}); y += 8;
    hline(y); y += 6;
  }

  // Summary stats
  const p = (typeof progress !== 'undefined') ? progress : {};
  const acc = p.totalAttempts > 0 ? Math.round(p.correct / p.totalAttempts * 100) : 0;
  doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(79,70,229);
  doc.text('Overall Performance', margin, y); y += 7;
  [
    ['Total Attempts', p.totalAttempts || 0],
    ['Correct Answers', p.correct || 0],
    ['Accuracy', acc + '%'],
    ['Best Streak', p.bestStreak || 0],
  ].forEach(([label, val]) => {
    doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(60,60,80);
    doc.text(safe(label) + ':', margin + 4, y);
    doc.setFont('helvetica','normal'); doc.setTextColor(30,30,50);
    doc.text(String(val), margin + 50, y);
    y += 6;
  });

  y += 4; hline(y); y += 6;

  // Subject breakdown
  doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(79,70,229);
  doc.text('Subject Breakdown', margin, y); y += 7;
  const stats = p.subjectStats || {};
  Object.entries(stats).forEach(([subj, s]) => {
    if (!s.a) return;
    const pct = Math.round(s.c / s.a * 100);
    doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(60,60,80);
    doc.text(safe(subj), margin + 4, y);
    doc.setFont('helvetica','normal');
    doc.text(`${s.c}/${s.a}  (${pct}%)`, margin + 40, y);
    // Mini bar
    doc.setFillColor(224,231,255); doc.rect(margin + 75, y - 3, 60, 4, 'F');
    doc.setFillColor(79,70,229);   doc.rect(margin + 75, y - 3, 60 * pct / 100, 4, 'F');
    y += 7;
  });

  y += 4; hline(y); y += 6;

  // Exam results table
  const results = getAllResults().slice(0, 20);
  if (results.length) {
    doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(79,70,229);
    doc.text('Recent Exam Results', margin, y); y += 7;
    // Table header
    doc.setFillColor(238,242,255);
    doc.rect(margin, y - 4, usable, 8, 'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(79,70,229);
    doc.text('Student',      margin+2,   y+0);
    doc.text('Exam',         margin+45,  y+0);
    doc.text('MCQ',          margin+80,  y+0);
    doc.text('Grade',        margin+100, y+0);
    doc.text('Date',         margin+120, y+0);
    y += 8;
    results.forEach(r => {
      if (y > 270) { doc.addPage(); y = 20; }
      const pct   = r.mcq_total > 0 ? Math.round(r.mcq_score / r.mcq_total * 100) : null;
      const grade = pct != null ? (pct>=90?'A+':pct>=75?'A':pct>=60?'B':pct>=45?'C':'D') : '—';
      doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(40,40,60);
      doc.text(safe((r.student_name||'Unknown').slice(0,18)), margin+2,   y);
      doc.text(safe((r.exam_type||'').toUpperCase()),          margin+45,  y);
      doc.text(pct != null ? pct+'%' : '—',                   margin+80,  y);
      doc.text(grade,                                           margin+100, y);
      doc.text(new Date(r.taken_at).toLocaleDateString('en-IN'), margin+120, y);
      y += 6;
      hline(y-1);
    });
  }

  // Question difficulty
  const diff = computeQuestionDifficulty(getAllResults()).slice(0, 10);
  if (diff.length) {
    y += 4;
    if (y > 240) { doc.addPage(); y = 20; }
    doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(79,70,229);
    doc.text('Most Challenging Questions (lowest accuracy)', margin, y); y += 7;
    diff.forEach((d, i) => {
      if (y > 270) { doc.addPage(); y = 20; }
      doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(40,40,60);
      const qText = safe((d.q||'').slice(0,70)) + (d.q?.length > 70 ? '…' : '');
      doc.text(`${i+1}. ${qText}`, margin+2, y);
      doc.text(`${d.pct}% (${d.correct}/${d.attempts})`, margin + usable - 25, y, {align:'right'});
      y += 5;
    });
  }

  // Footer
  const pages = doc.internal.getNumberOfPages();
  for (let p2 = 1; p2 <= pages; p2++) {
    doc.setPage(p2);
    doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(160,160,180);
    doc.text('AI Study Buddy — Confidential Progress Report', margin, 290);
    doc.text(`Page ${p2} / ${pages}`, W-margin, 290, {align:'right'});
  }

  doc.save(`progress-report-${dateStamp()}.pdf`);
  if (typeof showToast === 'function') showToast('📄 Progress report PDF downloaded!');
}

// Per-student report card PDF
function exportStudentReportCard(studentName) {
  const { jsPDF } = window.jspdf;
  if (!jsPDF) { if (typeof showToast === 'function') showToast('⚠️ PDF library not loaded yet.'); return; }
  const results = getFilteredResults({ student: studentName });
  if (!results.length) { if (typeof showToast === 'function') showToast('⚠️ No results for this student.'); return; }

  const doc    = new jsPDF({ unit:'mm', format:'a4' });
  const W      = doc.internal.pageSize.getWidth();
  const margin = 15;
  let y = 20;
  const safe = s => (s||'').replace(/[^\x00-\x7F]/g, () => '?');
  const hline = yy => { doc.setDrawColor(200); doc.setLineWidth(0.3); doc.line(margin, yy, W-margin, yy); };

  if (window.BRAND && typeof addBrandedPdfHeader === 'function') {
    y = addBrandedPdfHeader(doc, ['Student Report Card', `Student: ${studentName}`]);
  } else {
    doc.setFillColor(79,70,229); doc.rect(0,0,W,16,'F');
    doc.setFont('helvetica','bold'); doc.setFontSize(12); doc.setTextColor(255,255,255);
    doc.text('STUDENT REPORT CARD', W/2, 10, {align:'center'}); y = 24;
    doc.setFont('helvetica','bold'); doc.setFontSize(11); doc.setTextColor(79,70,229);
    doc.text(safe(studentName), W/2, y, {align:'center'}); y += 8;
    hline(y); y += 6;
  }

  const trend = computeStudentTrend(studentName);
  const analytics = computeClassAnalytics(results);

  if (analytics) {
    doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(79,70,229);
    doc.text('Summary', margin, y); y += 7;
    [
      ['Total Exams', analytics.total],
      ['Average Score', analytics.avg + '%'],
      ['Highest Score', analytics.highest + '%'],
      ['Lowest Score', analytics.lowest + '%'],
    ].forEach(([l,v]) => {
      doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(60,60,80);
      doc.text(l+':', margin+4, y);
      doc.setFont('helvetica','normal'); doc.text(String(v), margin+50, y); y += 6;
    });
    y += 4; hline(y); y += 6;
  }

  doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(79,70,229);
  doc.text('Exam History', margin, y); y += 7;
  doc.setFillColor(238,242,255); doc.rect(margin, y-4, W-margin*2, 8, 'F');
  doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(79,70,229);
  doc.text('Exam', margin+2, y); doc.text('MCQ', margin+55, y);
  doc.text('Grade', margin+75, y); doc.text('Written', margin+95, y); doc.text('Date', margin+130, y);
  y += 8;

  trend.forEach(t => {
    if (y > 270) { doc.addPage(); y = 20; }
    doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(40,40,60);
    doc.text(safe(t.examType?.toUpperCase()||''),  margin+2, y);
    doc.text(t.pct != null ? t.pct+'%' : '—',      margin+55, y);
    const grade = t.pct == null ? '—' : t.pct>=90?'A+':t.pct>=75?'A':t.pct>=60?'B':t.pct>=45?'C':'D';
    doc.text(grade, margin+75, y);
    doc.text(t.reviewed ? 'Reviewed' : '—', margin+95, y);
    doc.text(t.date, margin+130, y);
    y += 6; hline(y-1);
  });

  const pages = doc.internal.getNumberOfPages();
  for (let p2=1; p2<=pages; p2++) {
    doc.setPage(p2);
    doc.setFontSize(7); doc.setTextColor(160,160,180);
    doc.text('AI Study Buddy', margin, 290);
    doc.text(`Page ${p2}/${pages}`, W-margin, 290, {align:'right'});
  }

  doc.save(`report-card-${safe(studentName).replace(/\s+/g,'-')}-${dateStamp()}.pdf`);
  if (typeof showToast === 'function') showToast('📄 Student report card downloaded!');
}

/* =====================================================
   HELPERS
   ===================================================== */

function dateStamp() {
  const d = new Date();
  return `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`;
}

function downloadFile(content, mimeType, filename) {
  const blob = new Blob([content], { type: mimeType });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}
