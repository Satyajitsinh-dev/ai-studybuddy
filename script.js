/* =====================================================
   AI Study Buddy – Multi-Class Edition
   script.js – All app logic, question banks, AI tutor
   ===================================================== */

// =====================================================
// SECTION 0: CLASS STATE MANAGEMENT
// =====================================================

const CLASS_STORE_KEY = 'studyBuddy_activeClass';

function getActiveClass() {
  return localStorage.getItem(CLASS_STORE_KEY) || null;
}

function setActiveClass(cls) {
  localStorage.setItem(CLASS_STORE_KEY, String(cls));
  updateClassUI();
}

// Returns all classes available across built-in + CSV banks
function getAllAvailableClasses() {
  const all = [...QUESTION_BANK, ...loadAllCsvBanks().flatMap(b => b.questions)];
  const classes = [...new Set(all.map(q => q.classLevel).filter(Boolean))];
  // Sort numerically then alphabetically
  return classes.sort((a, b) => {
    const na = parseFloat(a), nb = parseFloat(b);
    if (!isNaN(na) && !isNaN(nb)) return na - nb;
    return String(a).localeCompare(String(b));
  });
}

// Wraps getAllQuestions() with active class filter
function getClassFilteredQuestions() {
  const cls = getActiveClass();
  const all = getAllQuestions();
  if (!cls) return all;
  return all.filter(q => !q.classLevel || q.classLevel === String(cls));
}

// Update all dynamic UI text that references the active class
function updateClassUI() {
  const cls = getActiveClass();
  const label = cls ? `🎓 Class ${cls}` : '🎓 Select Class';
  const btnLabel = document.getElementById('class-dropdown-label');
  if (btnLabel) btnLabel.textContent = label;

  const heroSub = document.getElementById('hero-sub-text');
  if (heroSub) heroSub.innerHTML = `Your fun AI-powered study partner${cls ? ` for <b>Class ${cls}</b>` : ''}.<br>Let's learn, practice and ace those exams! 🚀`;
  const tutorSub = document.getElementById('tutor-page-sub');
  if (tutorSub) tutorSub.textContent = `Choose Claude 🟣, ChatGPT 🟢 or Gemini 🔵 — ask anything${cls ? ` about Class ${cls}` : ''}!`;
}

// Build and populate the dropdown list
function renderClassDropdown() {
  const list = document.getElementById('class-dropdown-list');
  if (!list) return;
  const classes = getAllAvailableClasses();
  const active  = getActiveClass();
  const all = getAllQuestions();
  const countByClass = {};
  all.forEach(q => {
    const c = q.classLevel || 'General';
    countByClass[c] = (countByClass[c] || 0) + 1;
  });
  const classEmojis = { '1':'🌱','2':'🌿','3':'🌳','4':'🌸','5':'⭐','6':'🚀','7':'🎯','8':'🏆','9':'💡','10':'🎓','11':'🔬','12':'🎪' };

  let html = `<div class="cdrop-item ${!active ? 'cdrop-active' : ''}" onclick="selectClass(null)">
    🌈 All Classes <span class="cdrop-count">${all.length}</span>
  </div>`;

  if (classes.length === 0) {
    html += `<div class="cdrop-empty">Upload a CSV to add classes 📂</div>`;
  } else {
    classes.forEach(cls => {
      const count = countByClass[cls] || 0;
      const emoji = classEmojis[String(cls)] || '📚';
      const isActive = String(active) === String(cls);
      html += `<div class="cdrop-item ${isActive ? 'cdrop-active' : ''}" onclick="selectClass('${cls}')">
        ${emoji} Class ${cls} <span class="cdrop-count">${count}</span>
      </div>`;
    });
  }
  list.innerHTML = html;
}

function toggleClassDropdown() {
  const menu = document.getElementById('class-dropdown-menu');
  if (!menu) return;
  const isOpen = menu.style.display !== 'none';
  if (isOpen) {
    closeClassDropdown();
  } else {
    renderClassDropdown();
    menu.style.display = 'block';
    // Close on outside click
    setTimeout(() => document.addEventListener('click', outsideDropdownClose, { once: true }), 0);
  }
}

function outsideDropdownClose(e) {
  const wrap = document.getElementById('class-dropdown-wrap');
  if (wrap && !wrap.contains(e.target)) closeClassDropdown();
}

function closeClassDropdown() {
  const menu = document.getElementById('class-dropdown-menu');
  if (menu) menu.style.display = 'none';
}

// Kept for backward compatibility (CSV page "Upload your own" link)
function showClassSelector() { toggleClassDropdown(); }

function selectClass(cls) {
  closeClassDropdown();
  if (cls !== null) setActiveClass(cls);
  else {
    localStorage.removeItem(CLASS_STORE_KEY);
    updateClassUI();
  }
  // Reset quiz state so it reloads with new class filter
  const subjects = getAllSubjects();
  selectedSubject = subjects[0] || null;
  selectedChapter = null;
  dailySubjectFilter = '__all__';
  showToast(`✅ ${cls ? `Class ${cls} selected!` : 'Showing all classes'}`);
  showPage('page-home');
}

// =====================================================
// SECTION 1: DATA – Multi-Class Question Bank
// =====================================================

const CHAPTERS = {
  Math: [
    "Integers",
    "Fractions and Decimals",
    "Data Handling",
    "Simple Equations",
    "Lines and Angles",
    "The Triangle",
    "Congruence of Triangles",
    "Comparing Quantities",
    "Rational Numbers",
    "Practical Geometry",
    "Perimeter and Area",
    "Algebraic Expressions"
  ],
  Science: [
    "Nutrition in Plants",
    "Nutrition in Animals",
    "Fibre to Fabric",
    "Heat",
    "Acids Bases and Salts",
    "Physical and Chemical Changes",
    "Weather Climate and Adaptations",
    "Winds Storms and Cyclones",
    "Soil",
    "Respiration in Organisms",
    "Transportation in Animals and Plants",
    "Reproduction in Plants"
  ],
  English: [
    "Grammar – Nouns",
    "Grammar – Verbs and Tenses",
    "Grammar – Adjectives",
    "Grammar – Pronouns",
    "Reading Comprehension",
    "Writing Skills – Letters",
    "Writing Skills – Essays",
    "Poem Appreciation"
  ],
  SST: [
    "Tracing Changes Through Thousand Years",
    "New Kings and Kingdoms",
    "The Sultans of Delhi",
    "The Mughal Empire",
    "Inside Our Earth",
    "Our Changing Earth",
    "Our Environment",
    "Democracy – Equality and Justice",
    "State Government",
    "Markets Around Us"
  ]
};

// =====================================================
// SECTION 2: QUESTION BANK
// =====================================================

/* Each question: { q, opts:[A,B,C,D], ans:0-3, exp, subject, chapter, topic, difficulty, classLevel }
   NOTE: opts are shuffled at render time — ans stores the CORRECT ANSWER TEXT, not an index */

const QUESTION_BANK = [

  // ---- MATH: Integers ----
  { q:"What is (-5) + (-3)?", opts:["-8","8","-2","2"], ans:"-8", exp:"Negative + Negative = More Negative. (-5)+(-3) = -8 🎯", subject:"Math", chapter:"Integers", topic:"Addition of Integers", difficulty:"Easy", classLevel:"7" },
  { q:"What is (-7) × (-3)?", opts:["21","-21","10","-10"], ans:"21", exp:"Negative × Negative = Positive! (-7)×(-3) = 21 🌟", subject:"Math", chapter:"Integers", topic:"Multiplication of Integers", difficulty:"Easy", classLevel:"7" },
  { q:"What is (-12) ÷ 4?", opts:["-3","3","-8","8"], ans:"-3", exp:"Negative ÷ Positive = Negative. (-12)÷4 = -3 👍", subject:"Math", chapter:"Integers", topic:"Division of Integers", difficulty:"Easy", classLevel:"7" },
  { q:"Which integer is greater: -5 or -2?", opts:["-2","-5","Both equal","Cannot say"], ans:"-2", exp:"On the number line, -2 is to the right of -5, so -2 is greater! 📏", subject:"Math", chapter:"Integers", topic:"Comparing Integers", difficulty:"Easy", classLevel:"7" },
  { q:"What is the additive inverse of 8?", opts:["-8","8","0","1"], ans:"-8", exp:"Additive inverse of a number n is -n. So additive inverse of 8 is -8 ✅", subject:"Math", chapter:"Integers", topic:"Properties of Integers", difficulty:"Medium", classLevel:"7" },

  // ---- MATH: Fractions and Decimals ----
  { q:"What is 2/5 + 1/5?", opts:["3/5","3/10","1/5","2/5"], ans:"3/5", exp:"Same denominator? Just add numerators! 2/5 + 1/5 = 3/5 🍕", subject:"Math", chapter:"Fractions and Decimals", topic:"Addition of Fractions", difficulty:"Easy", classLevel:"7" },
  { q:"0.1 × 0.1 = ?", opts:["0.01","0.1","1","0.001"], ans:"0.01", exp:"0.1 × 0.1 = 0.01 (count decimal places: 1+1=2 places) 🧮", subject:"Math", chapter:"Fractions and Decimals", topic:"Multiplication of Decimals", difficulty:"Easy", classLevel:"7" },
  { q:"Which fraction is bigger: 3/4 or 2/3?", opts:["3/4","2/3","Both equal","Cannot say"], ans:"3/4", exp:"Convert to same denominator: 9/12 vs 8/12. So 3/4 is bigger! 🏆", subject:"Math", chapter:"Fractions and Decimals", topic:"Comparing Fractions", difficulty:"Medium", classLevel:"7" },
  { q:"2.5 ÷ 0.5 = ?", opts:["5","25","0.5","50"], ans:"5", exp:"2.5 ÷ 0.5 = 25/5 = 5. Multiply both by 10 to remove decimal! 💡", subject:"Math", chapter:"Fractions and Decimals", topic:"Division of Decimals", difficulty:"Medium", classLevel:"7" },
  { q:"What is 3/4 of 20?", opts:["15","12","10","8"], ans:"15", exp:"3/4 of 20 = (3×20)/4 = 60/4 = 15 🌟", subject:"Math", chapter:"Fractions and Decimals", topic:"Fraction of a Quantity", difficulty:"Medium", classLevel:"7" },

  // ---- MATH: Simple Equations ----
  { q:"If 2x + 3 = 11, what is x?", opts:["4","3","7","8"], ans:"4", exp:"2x = 11-3 = 8, so x = 8/2 = 4. Always do the same to both sides! ⚖️", subject:"Math", chapter:"Simple Equations", topic:"Solving Equations", difficulty:"Medium", classLevel:"7" },
  { q:"If x/3 = 5, what is x?", opts:["15","5/3","8","2"], ans:"15", exp:"Multiply both sides by 3: x = 5×3 = 15 ✅", subject:"Math", chapter:"Simple Equations", topic:"Solving Equations", difficulty:"Easy", classLevel:"7" },
  { q:"Which is a linear equation?", opts:["2x+3=7","x²=4","x³=8","√x=2"], ans:"2x+3=7", exp:"Linear equation has variable with power 1 only. 2x+3=7 is linear! 📐", subject:"Math", chapter:"Simple Equations", topic:"Identifying Linear Equations", difficulty:"Easy", classLevel:"7" },
  { q:"If 5y − 2 = 13, then y =", opts:["3","5","2","11"], ans:"3", exp:"5y = 13+2 = 15, so y = 15/5 = 3. Transpose -2 to the other side! ⚖️", subject:"Math", chapter:"Simple Equations", topic:"Solving Equations", difficulty:"Medium", classLevel:"7" },
  { q:"The solution of 3x = 0 is:", opts:["0","3","1","-3"], ans:"0", exp:"3x = 0 → x = 0/3 = 0. Zero is the only solution! ✅", subject:"Math", chapter:"Simple Equations", topic:"Solving Equations", difficulty:"Easy", classLevel:"7" },

  // ---- MATH: Data Handling ----
  { q:"Mean of 2, 4, 6, 8, 10 is:", opts:["6","5","7","8"], ans:"6", exp:"Mean = Sum/Count = 30/5 = 6 📊", subject:"Math", chapter:"Data Handling", topic:"Mean", difficulty:"Easy", classLevel:"7" },
  { q:"Mode of 3,3,5,7,7,7,9 is:", opts:["7","3","9","5"], ans:"7", exp:"Mode = most frequently appearing number. 7 appears 3 times! 🎯", subject:"Math", chapter:"Data Handling", topic:"Mode", difficulty:"Easy", classLevel:"7" },
  { q:"The middle value of arranged data is called:", opts:["Median","Mean","Mode","Range"], ans:"Median", exp:"When data is arranged in order, the middle value is called Median! 📏", subject:"Math", chapter:"Data Handling", topic:"Median", difficulty:"Easy", classLevel:"7" },
  { q:"Median of 3, 5, 7, 9, 11 is:", opts:["7","5","9","6"], ans:"7", exp:"The data is already ordered. Middle value (3rd of 5) = 7. That's the median! 📊", subject:"Math", chapter:"Data Handling", topic:"Median", difficulty:"Medium", classLevel:"7" },
  { q:"A bar graph is used to:", opts:["Compare data using bars","Show parts of a whole","Plot points on a grid","Draw pie slices"], ans:"Compare data using bars", exp:"Bar graphs use rectangular bars of different heights to compare data! 📊", subject:"Math", chapter:"Data Handling", topic:"Bar Graphs", difficulty:"Easy", classLevel:"7" },
  { q:"Range of 4, 7, 2, 9, 1 is:", opts:["8","9","5","7"], ans:"8", exp:"Range = Highest − Lowest = 9 − 1 = 8 📏", subject:"Math", chapter:"Data Handling", topic:"Range", difficulty:"Easy", classLevel:"7" },
  { q:"If mean of 5 numbers is 8, their sum is:", opts:["40","8","13","45"], ans:"40", exp:"Sum = Mean × Count = 8 × 5 = 40 🔢", subject:"Math", chapter:"Data Handling", topic:"Mean", difficulty:"Medium", classLevel:"7" },
  { q:"Which of these is NOT a measure of central tendency?", opts:["Range","Mean","Median","Mode"], ans:"Range", exp:"Range measures spread of data, not central tendency. Mean, Median, Mode are central tendency measures! 📊", subject:"Math", chapter:"Data Handling", topic:"Central Tendency", difficulty:"Hard", classLevel:"7" },

  // ---- MATH: The Triangle ----
  { q:"Sum of angles in a triangle is:", opts:["180°","360°","90°","270°"], ans:"180°", exp:"The angles in any triangle always add up to 180°! Try drawing one 🔺", subject:"Math", chapter:"The Triangle", topic:"Angle Sum Property", difficulty:"Easy", classLevel:"7" },
  { q:"An equilateral triangle has:", opts:["All 3 sides equal","2 sides equal","No sides equal","1 right angle"], ans:"All 3 sides equal", exp:"Equilateral = all three sides AND all three angles are equal (60° each)! △", subject:"Math", chapter:"The Triangle", topic:"Types of Triangles", difficulty:"Easy", classLevel:"7" },
  { q:"A triangle with one angle equal to 90° is called:", opts:["Right-angled triangle","Obtuse triangle","Acute triangle","Equilateral triangle"], ans:"Right-angled triangle", exp:"A right-angled triangle has exactly one 90° angle – think of a set-square! 📐", subject:"Math", chapter:"The Triangle", topic:"Types of Triangles", difficulty:"Easy", classLevel:"7" },
  { q:"If two angles of a triangle are 60° and 80°, the third angle is:", opts:["40°","60°","80°","100°"], ans:"40°", exp:"Sum of angles = 180°. Third angle = 180° − 60° − 80° = 40° ✅", subject:"Math", chapter:"The Triangle", topic:"Angle Sum Property", difficulty:"Medium", classLevel:"7" },
  { q:"A scalene triangle has:", opts:["No sides equal","All sides equal","Two sides equal","One right angle"], ans:"No sides equal", exp:"Scalene triangle – all 3 sides are of different lengths! 📏", subject:"Math", chapter:"The Triangle", topic:"Types of Triangles", difficulty:"Easy", classLevel:"7" },

  // ---- MATH: Lines and Angles ----
  { q:"An angle of exactly 90° is called:", opts:["Right angle","Acute angle","Obtuse angle","Reflex angle"], ans:"Right angle", exp:"A 90° angle is called a Right Angle. Looks like the corner of a book! 📐", subject:"Math", chapter:"Lines and Angles", topic:"Types of Angles", difficulty:"Easy", classLevel:"7" },
  { q:"Two lines that never meet are called:", opts:["Parallel lines","Perpendicular lines","Intersecting lines","Curved lines"], ans:"Parallel lines", exp:"Parallel lines always stay the same distance apart and never meet! Like railway tracks 🚃", subject:"Math", chapter:"Lines and Angles", topic:"Types of Lines", difficulty:"Easy", classLevel:"7" },
  { q:"An angle less than 90° is called:", opts:["Acute angle","Obtuse angle","Right angle","Straight angle"], ans:"Acute angle", exp:"Acute means 'sharp' – an acute angle is sharp and small, less than 90°! ✏️", subject:"Math", chapter:"Lines and Angles", topic:"Types of Angles", difficulty:"Easy", classLevel:"7" },
  { q:"Two angles that add up to 180° are called:", opts:["Supplementary angles","Complementary angles","Adjacent angles","Vertical angles"], ans:"Supplementary angles", exp:"Supplementary angles add up to 180°. Like two angles on a straight line! 📏", subject:"Math", chapter:"Lines and Angles", topic:"Pairs of Angles", difficulty:"Medium", classLevel:"7" },
  { q:"Vertically opposite angles are always:", opts:["Equal","Supplementary","Complementary","Different"], ans:"Equal", exp:"When two lines cross, the angles opposite each other (vertically opposite) are always equal! ✖️", subject:"Math", chapter:"Lines and Angles", topic:"Pairs of Angles", difficulty:"Medium", classLevel:"7" },

  // ---- MATH: Comparing Quantities ----
  { q:"If CP = ₹200 and SP = ₹250, profit is:", opts:["₹50","₹200","₹250","₹450"], ans:"₹50", exp:"Profit = SP - CP = 250 - 200 = ₹50 💰", subject:"Math", chapter:"Comparing Quantities", topic:"Profit and Loss", difficulty:"Easy", classLevel:"7" },
  { q:"20% of 300 = ?", opts:["60","30","20","300"], ans:"60", exp:"20% of 300 = (20/100)×300 = 60 🎯", subject:"Math", chapter:"Comparing Quantities", topic:"Percentage", difficulty:"Easy", classLevel:"7" },
  { q:"If SP = ₹400 and profit = 25%, then CP is:", opts:["₹320","₹300","₹350","₹380"], ans:"₹320", exp:"CP = SP × 100/(100+profit%) = 400×100/125 = ₹320 💡", subject:"Math", chapter:"Comparing Quantities", topic:"Profit and Loss", difficulty:"Hard", classLevel:"7" },
  { q:"A discount of 10% on ₹500 gives a selling price of:", opts:["₹450","₹400","₹490","₹510"], ans:"₹450", exp:"Discount = 10% of 500 = ₹50. SP = 500 − 50 = ₹450 🏷️", subject:"Math", chapter:"Comparing Quantities", topic:"Discount", difficulty:"Medium", classLevel:"7" },
  { q:"Simple interest on ₹1000 at 5% per year for 2 years is:", opts:["₹100","₹50","₹200","₹150"], ans:"₹100", exp:"SI = P×R×T/100 = 1000×5×2/100 = ₹100 🏦", subject:"Math", chapter:"Comparing Quantities", topic:"Simple Interest", difficulty:"Medium", classLevel:"7" },

  // ---- SCIENCE: Nutrition in Plants ----
  { q:"The process by which plants make their own food is called:", opts:["Photosynthesis","Respiration","Digestion","Transpiration"], ans:"Photosynthesis", exp:"Plants use sunlight, water, and CO₂ to make food through Photosynthesis 🌿☀️", subject:"Science", chapter:"Nutrition in Plants", topic:"Photosynthesis", difficulty:"Easy", classLevel:"7" },
  { q:"The green pigment in leaves is called:", opts:["Chlorophyll","Glucose","Starch","Cellulose"], ans:"Chlorophyll", exp:"Chlorophyll is the green pigment that traps sunlight for photosynthesis! 🍃", subject:"Science", chapter:"Nutrition in Plants", topic:"Photosynthesis", difficulty:"Easy", classLevel:"7" },
  { q:"Plants get CO₂ through tiny pores called:", opts:["Stomata","Roots","Flowers","Seeds"], ans:"Stomata", exp:"Stomata are tiny pores on leaves. They let CO₂ in and O₂ out! 🌱", subject:"Science", chapter:"Nutrition in Plants", topic:"Stomata", difficulty:"Easy", classLevel:"7" },
  { q:"Insectivorous plants eat insects because:", opts:["Lack nitrogen","Lack sunlight","Lack water","Lack CO₂"], ans:"Lack nitrogen", exp:"Insectivorous plants like Venus flytrap grow in nitrogen-poor soil! 🪤", subject:"Science", chapter:"Nutrition in Plants", topic:"Insectivorous Plants", difficulty:"Medium", classLevel:"7" },
  { q:"Which gas do plants release during photosynthesis?", opts:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"], ans:"Oxygen", exp:"Plants release Oxygen during photosynthesis. That's why trees are so important! 🌳", subject:"Science", chapter:"Nutrition in Plants", topic:"Photosynthesis", difficulty:"Easy", classLevel:"7" },

  // ---- SCIENCE: Nutrition in Animals ----
  { q:"Digestion of food starts in the:", opts:["Mouth","Stomach","Small intestine","Large intestine"], ans:"Mouth", exp:"Saliva in the mouth begins breaking down food – especially starch! 👄", subject:"Science", chapter:"Nutrition in Animals", topic:"Digestive System", difficulty:"Easy", classLevel:"7" },
  { q:"Which organ absorbs most nutrients from food?", opts:["Small intestine","Large intestine","Stomach","Liver"], ans:"Small intestine", exp:"The small intestine has villi that absorb nutrients into the blood! 🫁", subject:"Science", chapter:"Nutrition in Animals", topic:"Digestive System", difficulty:"Easy", classLevel:"7" },
  { q:"Amoeba gets its food by a process called:", opts:["Phagocytosis","Photosynthesis","Digestion","Absorption"], ans:"Phagocytosis", exp:"Amoeba engulfs food particles using pseudopodia – this is called phagocytosis! 🦠", subject:"Science", chapter:"Nutrition in Animals", topic:"Nutrition in Simple Organisms", difficulty:"Hard", classLevel:"7" },
  { q:"The digestive juice in the stomach is:", opts:["Gastric juice","Bile","Saliva","Pancreatic juice"], ans:"Gastric juice", exp:"The stomach secretes gastric juice which contains HCl and enzymes to digest food! 🧪", subject:"Science", chapter:"Nutrition in Animals", topic:"Digestive System", difficulty:"Medium", classLevel:"7" },
  { q:"Cellulose is digested in ruminants by:", opts:["Bacteria in the stomach","Saliva","Liver enzymes","Pancreatic juice"], ans:"Bacteria in the stomach", exp:"Ruminants like cows have special bacteria in their stomach that digest cellulose! 🐄", subject:"Science", chapter:"Nutrition in Animals", topic:"Ruminants", difficulty:"Hard", classLevel:"7" },
  { q:"The largest gland in the human body is:", opts:["Liver","Stomach","Pancreas","Kidney"], ans:"Liver", exp:"The liver is the largest gland. It produces bile which helps digest fats! 🫀", subject:"Science", chapter:"Nutrition in Animals", topic:"Digestive System", difficulty:"Medium", classLevel:"7" },
  { q:"Bile is produced by which organ?", opts:["Liver","Pancreas","Stomach","Small intestine"], ans:"Liver", exp:"Bile is produced by the liver and stored in the gall bladder. It helps digest fats! 🟢", subject:"Science", chapter:"Nutrition in Animals", topic:"Digestive System", difficulty:"Medium", classLevel:"7" },

  // ---- SCIENCE: Heat ----
  { q:"Heat always flows from:", opts:["Hot to cold","Cold to hot","Both ways","Neither way"], ans:"Hot to cold", exp:"Heat always flows from a hotter object to a colder object! 🌡️", subject:"Science", chapter:"Heat", topic:"Transfer of Heat", difficulty:"Easy", classLevel:"7" },
  { q:"The best conductor of heat among these is:", opts:["Iron","Wood","Plastic","Cotton"], ans:"Iron", exp:"Metals like iron are good conductors of heat. That's why pans are metal! 🍳", subject:"Science", chapter:"Heat", topic:"Conductors and Insulators", difficulty:"Easy", classLevel:"7" },
  { q:"Which thermometer is used to measure body temperature?", opts:["Clinical thermometer","Lab thermometer","Maximum thermometer","Digital compass"], ans:"Clinical thermometer", exp:"Clinical thermometer measures body temperature (35°C–42°C range)! 🌡️", subject:"Science", chapter:"Heat", topic:"Thermometer", difficulty:"Easy", classLevel:"7" },
  { q:"Land breeze blows from:", opts:["Land to sea","Sea to land","North to south","South to north"], ans:"Land to sea", exp:"At night, land cools faster, so air flows from land to sea – land breeze! 🌬️", subject:"Science", chapter:"Heat", topic:"Convection", difficulty:"Medium", classLevel:"7" },
  { q:"Radiation is the transfer of heat:", opts:["Without any medium","Through solids only","Through liquids only","Through gases only"], ans:"Without any medium", exp:"Radiation needs no medium – heat from the Sun reaches Earth through the vacuum of space! ☀️", subject:"Science", chapter:"Heat", topic:"Transfer of Heat", difficulty:"Medium", classLevel:"7" },
  { q:"Normal body temperature of a human is:", opts:["37°C","32°C","40°C","45°C"], ans:"37°C", exp:"Normal human body temperature is 37°C (98.6°F). Above 37°C indicates fever! 🌡️", subject:"Science", chapter:"Heat", topic:"Thermometer", difficulty:"Easy", classLevel:"7" },
  { q:"Two angles that add up to 90° are called:", opts:["Complementary","Supplementary","Adjacent","Vertically opposite"], ans:"Complementary", exp:"Complementary angles add up to 90°. Supplementary add up to 180°! 📐", subject:"Math", chapter:"Lines and Angles", topic:"Pairs of Angles", difficulty:"Medium", classLevel:"7" },
  { q:"Sea breeze blows from:", opts:["Sea to land","Land to sea","East to west","West to east"], ans:"Sea to land", exp:"During the day, land heats up faster than sea, so cooler sea air flows inland – sea breeze! 🌊", subject:"Science", chapter:"Heat", topic:"Convection", difficulty:"Medium", classLevel:"7" },
  { q:"A dark-coloured object is a:", opts:["Better absorber of heat","Poor absorber of heat","Better reflector","Poor emitter"], ans:"Better absorber of heat", exp:"Dark surfaces absorb more heat and light. That's why we wear light colours in summer! 🌞", subject:"Science", chapter:"Heat", topic:"Radiation", difficulty:"Hard", classLevel:"7" },

  // ---- SCIENCE: Acids Bases and Salts ----
  { q:"Acids taste:", opts:["Sour","Sweet","Bitter","Salty"], ans:"Sour", exp:"Acids taste sour! Like lemon juice and vinegar 🍋", subject:"Science", chapter:"Acids Bases and Salts", topic:"Properties of Acids", difficulty:"Easy", classLevel:"7" },
  { q:"Blue litmus paper turns red in:", opts:["Acid","Base","Neutral solution","Distilled water"], ans:"Acid", exp:"Blue litmus turns RED in acid. Red litmus turns BLUE in base! 🔴🔵", subject:"Science", chapter:"Acids Bases and Salts", topic:"Indicators", difficulty:"Easy", classLevel:"7" },
  { q:"Baking soda is:", opts:["A base","An acid","A salt","Neutral"], ans:"A base", exp:"Baking soda (sodium bicarbonate) is a base. It turns red litmus blue! 🧁", subject:"Science", chapter:"Acids Bases and Salts", topic:"Bases", difficulty:"Easy", classLevel:"7" },
  { q:"The chemical name of common salt is:", opts:["Sodium chloride","Sodium bicarbonate","Calcium carbonate","Potassium chloride"], ans:"Sodium chloride", exp:"Common salt = Sodium Chloride (NaCl). Formed when HCl reacts with NaOH! 🧂", subject:"Science", chapter:"Acids Bases and Salts", topic:"Salts", difficulty:"Medium", classLevel:"7" },
  { q:"Turmeric turns red/pink in:", opts:["Basic solutions","Acidic solutions","Neutral solutions","Distilled water"], ans:"Basic solutions", exp:"Turmeric is a natural indicator – it turns red/pink in basic (alkaline) solutions! 🟡", subject:"Science", chapter:"Acids Bases and Salts", topic:"Indicators", difficulty:"Medium", classLevel:"7" },
  { q:"Which of these is an acid?", opts:["Lemon juice","Soap","Baking soda","Chalk"], ans:"Lemon juice", exp:"Lemon juice contains citric acid – it turns blue litmus paper red! 🍋", subject:"Science", chapter:"Acids Bases and Salts", topic:"Properties of Acids", difficulty:"Easy", classLevel:"7" },
  { q:"When acid and base react, they form:", opts:["Salt and water","Gas and water","Gas and salt","Only water"], ans:"Salt and water", exp:"Neutralisation reaction: Acid + Base → Salt + Water. This is also called a neutralisation reaction! ⚗️", subject:"Science", chapter:"Acids Bases and Salts", topic:"Neutralisation", difficulty:"Medium", classLevel:"7" },
  { q:"The pH of a neutral solution is:", opts:["7","0","14","4"], ans:"7", exp:"Pure water is neutral with pH 7. Below 7 = acidic, above 7 = basic! 🔬", subject:"Science", chapter:"Acids Bases and Salts", topic:"pH Scale", difficulty:"Hard", classLevel:"7" },

  // ---- SCIENCE: Physical and Chemical Changes ----
  { q:"Rusting of iron is a:", opts:["Chemical change","Physical change","Both","Neither"], ans:"Chemical change", exp:"Rusting is a chemical change – new substance (iron oxide) forms and can't be reversed! 🔧", subject:"Science", chapter:"Physical and Chemical Changes", topic:"Chemical Changes", difficulty:"Easy", classLevel:"7" },
  { q:"Melting of ice is a:", opts:["Physical change","Chemical change","Both","Neither"], ans:"Physical change", exp:"Melting is physical – water can be frozen again! No new substance is formed 🧊", subject:"Science", chapter:"Physical and Chemical Changes", topic:"Physical Changes", difficulty:"Easy", classLevel:"7" },
  { q:"Burning of wood is a:", opts:["Chemical change","Physical change","Reversible change","Biological change"], ans:"Chemical change", exp:"Burning produces new substances (ash, CO₂) that can't be turned back to wood – chemical change! 🔥", subject:"Science", chapter:"Physical and Chemical Changes", topic:"Chemical Changes", difficulty:"Easy", classLevel:"7" },
  { q:"Crystallisation is an example of:", opts:["Physical change","Chemical change","Biological change","Nuclear change"], ans:"Physical change", exp:"Crystallisation is a physical change – no new substance forms, and it can be reversed! 💎", subject:"Science", chapter:"Physical and Chemical Changes", topic:"Physical Changes", difficulty:"Medium", classLevel:"7" },
  { q:"When vinegar and baking soda are mixed, which gas is released?", opts:["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"], ans:"Carbon dioxide", exp:"Vinegar (acid) + baking soda (base) → CO₂ gas + water + salt. It fizzes! 🧁", subject:"Science", chapter:"Physical and Chemical Changes", topic:"Chemical Changes", difficulty:"Medium", classLevel:"7" },
  { q:"Which of these is a physical change?", opts:["Cutting paper","Burning coal","Souring of milk","Cooking rice"], ans:"Cutting paper", exp:"Cutting paper only changes shape, no new substance forms – it's a physical change! ✂️", subject:"Science", chapter:"Physical and Chemical Changes", topic:"Physical Changes", difficulty:"Easy", classLevel:"7" },
  { q:"Electroplating uses which type of change?", opts:["Chemical change","Physical change","Biological change","Mechanical change"], ans:"Chemical change", exp:"Electroplating uses electrolysis (a chemical process) to deposit a metal layer on an object! ⚡", subject:"Science", chapter:"Physical and Chemical Changes", topic:"Chemical Changes", difficulty:"Hard", classLevel:"7" },

  // ---- SCIENCE: Respiration in Organisms ----
  { q:"Respiration in organisms releases:", opts:["Energy","Sunlight","Food","Only water"], ans:"Energy", exp:"Respiration breaks down glucose to release energy for all body activities! ⚡", subject:"Science", chapter:"Respiration in Organisms", topic:"Aerobic Respiration", difficulty:"Easy", classLevel:"7" },
  { q:"The gas we breathe in is:", opts:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"], ans:"Oxygen", exp:"We breathe in Oxygen (O₂) and use it to break down food for energy! 💨", subject:"Science", chapter:"Respiration in Organisms", topic:"Aerobic Respiration", difficulty:"Easy", classLevel:"7" },
  { q:"Yeast performs which type of respiration?", opts:["Anaerobic","Aerobic","Both","None"], ans:"Anaerobic", exp:"Yeast respires anaerobically – without oxygen – producing CO₂ and alcohol! 🍞", subject:"Science", chapter:"Respiration in Organisms", topic:"Anaerobic Respiration", difficulty:"Medium", classLevel:"7" },
  { q:"During heavy exercise, muscles produce:", opts:["Lactic acid","Glucose","Oxygen","CO₂ only"], ans:"Lactic acid", exp:"When oxygen supply is short, muscles do anaerobic respiration and produce lactic acid (causes cramps)! 💪", subject:"Science", chapter:"Respiration in Organisms", topic:"Anaerobic Respiration", difficulty:"Hard", classLevel:"7" },
  { q:"The organ used for breathing in fish is:", opts:["Gills","Lungs","Skin","Stomata"], ans:"Gills", exp:"Fish breathe through gills which absorb dissolved oxygen from water! 🐟", subject:"Science", chapter:"Respiration in Organisms", topic:"Breathing in Animals", difficulty:"Easy", classLevel:"7" },
  { q:"The formula for aerobic respiration is:", opts:["Glucose + Oxygen → CO₂ + Water + Energy","Glucose → CO₂ + Alcohol","CO₂ + Water → Glucose + O₂","Glucose + Water → CO₂ + Energy"], ans:"Glucose + Oxygen → CO₂ + Water + Energy", exp:"Aerobic respiration: Glucose + O₂ → CO₂ + H₂O + Energy. This is the opposite of photosynthesis! ⚡", subject:"Science", chapter:"Respiration in Organisms", topic:"Aerobic Respiration", difficulty:"Hard", classLevel:"7" },

  // ---- SCIENCE: Transportation in Animals and Plants ----
  { q:"Which blood vessels carry blood away from the heart?", opts:["Arteries","Veins","Capillaries","Nerves"], ans:"Arteries", exp:"Arteries carry blood AWAY from the heart. Remember: A for Away and Artery! ❤️", subject:"Science", chapter:"Transportation in Animals and Plants", topic:"Blood Vessels", difficulty:"Easy", classLevel:"7" },
  { q:"Which blood cells help in clotting of blood?", opts:["Platelets","Red blood cells","White blood cells","Plasma"], ans:"Platelets", exp:"Platelets (thrombocytes) help form clots to stop bleeding at a wound! 🩸", subject:"Science", chapter:"Transportation in Animals and Plants", topic:"Blood", difficulty:"Medium", classLevel:"7" },
  { q:"Water is transported in plants through:", opts:["Xylem","Phloem","Stomata","Roots alone"], ans:"Xylem", exp:"Xylem vessels transport water and minerals from roots to leaves! 🌿", subject:"Science", chapter:"Transportation in Animals and Plants", topic:"Transport in Plants", difficulty:"Medium", classLevel:"7" },
  { q:"Food is transported in plants through:", opts:["Phloem","Xylem","Stomata","Chlorophyll"], ans:"Phloem", exp:"Phloem transports food (glucose) made in leaves to all parts of the plant! 🍃", subject:"Science", chapter:"Transportation in Animals and Plants", topic:"Transport in Plants", difficulty:"Medium", classLevel:"7" },
  { q:"The liquid part of blood is called:", opts:["Plasma","Platelets","Serum","Haemoglobin"], ans:"Plasma", exp:"Plasma is the yellowish liquid part of blood that carries nutrients, hormones, and waste! 🔬", subject:"Science", chapter:"Transportation in Animals and Plants", topic:"Blood", difficulty:"Hard", classLevel:"7" },
  { q:"White blood cells help in:", opts:["Fighting infections","Carrying oxygen","Clotting blood","Transporting food"], ans:"Fighting infections", exp:"White blood cells (WBCs) are our body's soldiers – they fight bacteria and viruses! 🛡️", subject:"Science", chapter:"Transportation in Animals and Plants", topic:"Blood", difficulty:"Easy", classLevel:"7" },

  // ---- ENGLISH: Grammar – Nouns ----
  { q:"A noun is a word that names a:", opts:["Person, place or thing","Action word","Describing word","Joining word"], ans:"Person, place or thing", exp:"Nouns name people (Ram), places (Delhi), things (book) or ideas (love)! 📝", subject:"English", chapter:"Grammar – Nouns", topic:"Definition of Noun", difficulty:"Easy", classLevel:"7" },
  { q:"Which is a proper noun?", opts:["Delhi","City","River","Mountain"], ans:"Delhi", exp:"Proper nouns name specific things – Delhi is a specific city! Always capitalized 🏙️", subject:"English", chapter:"Grammar – Nouns", topic:"Types of Nouns", difficulty:"Easy", classLevel:"7" },
  { q:"The plural of 'child' is:", opts:["Children","Childs","Childes","Child"], ans:"Children", exp:"Child → Children is an irregular plural. No '-s' or '-es' added! 👶", subject:"English", chapter:"Grammar – Nouns", topic:"Plural Nouns", difficulty:"Medium", classLevel:"7" },
  { q:"Which of these is a collective noun?", opts:["Flock","Run","Tall","Quickly"], ans:"Flock", exp:"A collective noun names a group: a flock of birds, a team of players, a herd of cattle! 🐦", subject:"English", chapter:"Grammar – Nouns", topic:"Types of Nouns", difficulty:"Medium", classLevel:"7" },
  { q:"The noun in 'Her kindness impressed everyone' is:", opts:["Kindness","Her","Impressed","Everyone"], ans:"Kindness", exp:"'Kindness' is an abstract noun – it names a quality or idea you can't touch! 💛", subject:"English", chapter:"Grammar – Nouns", topic:"Types of Nouns", difficulty:"Hard", classLevel:"7" },

  // ---- ENGLISH: Grammar – Verbs and Tenses ----
  { q:"'He runs every day' – the verb is in which tense?", opts:["Simple Present","Simple Past","Simple Future","Past Perfect"], ans:"Simple Present", exp:"'Runs' shows a habit in the present. Simple Present Tense! ⏰", subject:"English", chapter:"Grammar – Verbs and Tenses", topic:"Tenses", difficulty:"Easy", classLevel:"7" },
  { q:"Past tense of 'go' is:", opts:["Went","Goed","Gone","Going"], ans:"Went", exp:"Go is an irregular verb. Its past tense is Went, not Goed! 🚶", subject:"English", chapter:"Grammar – Verbs and Tenses", topic:"Irregular Verbs", difficulty:"Easy", classLevel:"7" },
  { q:"'She __ going to school.' – Fill in:", opts:["is","are","am","were"], ans:"is", exp:"'She' is third person singular, so we use 'is'. She is going to school! ✏️", subject:"English", chapter:"Grammar – Verbs and Tenses", topic:"Subject-Verb Agreement", difficulty:"Easy", classLevel:"7" },
  { q:"Which sentence uses the future tense?", opts:["She will sing tomorrow","She sang yesterday","She sings daily","She was singing"], ans:"She will sing tomorrow", exp:"'Will sing' shows future tense – something that hasn't happened yet! 🔮", subject:"English", chapter:"Grammar – Verbs and Tenses", topic:"Tenses", difficulty:"Easy", classLevel:"7" },
  { q:"The past participle of 'write' is:", opts:["Written","Wrote","Writing","Writed"], ans:"Written", exp:"Write → Wrote (past) → Written (past participle). Irregular verb! ✍️", subject:"English", chapter:"Grammar – Verbs and Tenses", topic:"Irregular Verbs", difficulty:"Medium", classLevel:"7" },

  // ---- ENGLISH: Grammar – Adjectives ----
  { q:"An adjective is a word that:", opts:["Describes a noun","Shows an action","Joins sentences","Names a place"], ans:"Describes a noun", exp:"Adjectives describe nouns: a RED apple, a TALL boy, a HAPPY child! 🎨", subject:"English", chapter:"Grammar – Adjectives", topic:"Definition of Adjective", difficulty:"Easy", classLevel:"7" },
  { q:"In 'The big dog barked', the adjective is:", opts:["Big","Dog","Barked","The"], ans:"Big", exp:"'Big' describes the dog – it tells us what kind of dog! 🐕", subject:"English", chapter:"Grammar – Adjectives", topic:"Identifying Adjectives", difficulty:"Easy", classLevel:"7" },
  { q:"Comparative degree of 'good' is:", opts:["Better","Gooder","Best","More good"], ans:"Better", exp:"Good → Better → Best are irregular degrees of comparison! ⭐", subject:"English", chapter:"Grammar – Adjectives", topic:"Degrees of Comparison", difficulty:"Medium", classLevel:"7" },
  { q:"Superlative degree of 'tall' is:", opts:["Tallest","Taller","Most tall","Tallier"], ans:"Tallest", exp:"Tall → Taller → Tallest. Add '-est' to short adjectives for superlative! 🏔️", subject:"English", chapter:"Grammar – Adjectives", topic:"Degrees of Comparison", difficulty:"Easy", classLevel:"7" },
  { q:"Which word is an adjective in: 'She wore a beautiful dress'?", opts:["Beautiful","Wore","Dress","She"], ans:"Beautiful", exp:"'Beautiful' describes the dress (a noun), so it is an adjective! 👗", subject:"English", chapter:"Grammar – Adjectives", topic:"Identifying Adjectives", difficulty:"Easy", classLevel:"7" },

  // ---- ENGLISH: Grammar – Pronouns ----
  { q:"'He, she, it' are:", opts:["Pronouns","Nouns","Verbs","Adjectives"], ans:"Pronouns", exp:"Pronouns replace nouns. Instead of 'Ram', we say 'He' 🔄", subject:"English", chapter:"Grammar – Pronouns", topic:"Personal Pronouns", difficulty:"Easy", classLevel:"7" },
  { q:"Which is a reflexive pronoun?", opts:["Himself","He","Him","His"], ans:"Himself", exp:"Reflexive pronouns end in -self/-selves: myself, yourself, himself, herself! 🪞", subject:"English", chapter:"Grammar – Pronouns", topic:"Types of Pronouns", difficulty:"Medium", classLevel:"7" },
  { q:"'This' and 'that' are examples of:", opts:["Demonstrative pronouns","Personal pronouns","Relative pronouns","Indefinite pronouns"], ans:"Demonstrative pronouns", exp:"This/that/these/those point to specific things – they are demonstrative pronouns! 👉", subject:"English", chapter:"Grammar – Pronouns", topic:"Types of Pronouns", difficulty:"Medium", classLevel:"7" },
  { q:"Choose the correct pronoun: 'Ram and ___ went to school.'", opts:["I","Me","My","Mine"], ans:"I", exp:"Use subject pronoun 'I' as the subject of the verb. 'Me' is an object pronoun! 🧑‍🏫", subject:"English", chapter:"Grammar – Pronouns", topic:"Personal Pronouns", difficulty:"Hard", classLevel:"7" },
  { q:"'Who' is used for:", opts:["Persons","Things","Animals only","Places"], ans:"Persons", exp:"'Who' refers to persons. 'Which' refers to things/animals. 'That' can be used for both! 👤", subject:"English", chapter:"Grammar – Pronouns", topic:"Relative Pronouns", difficulty:"Medium", classLevel:"7" },
  { q:"Plural of 'I' is:", opts:["We","They","You","Us"], ans:"We", exp:"I (singular) → We (plural). Both are subject pronouns! 👥", subject:"English", chapter:"Grammar – Pronouns", topic:"Personal Pronouns", difficulty:"Easy", classLevel:"7" },

  // ---- SST: The Mughal Empire ----
  { q:"The Mughal Empire was founded by:", opts:["Babur","Akbar","Humayun","Aurangzeb"], ans:"Babur", exp:"Babur founded the Mughal Empire in 1526 after winning the First Battle of Panipat! 🏯", subject:"SST", chapter:"The Mughal Empire", topic:"Mughal Rulers", difficulty:"Easy", classLevel:"7" },
  { q:"Who built the Taj Mahal?", opts:["Akbar","Babur","Aurangzeb","Shah Jahan"], ans:"Shah Jahan", exp:"Shah Jahan built the Taj Mahal in memory of his wife Mumtaz Mahal. It is in Agra! 💎", subject:"SST", chapter:"The Mughal Empire", topic:"Mughal Monuments", difficulty:"Easy", classLevel:"7" },
  { q:"Akbar's policy of religious tolerance was called:", opts:["Sul-i-kul","Jihad","Dharma","Fatwa"], ans:"Sul-i-kul", exp:"Akbar believed in 'Sul-i-kul' meaning universal peace – he respected all religions! 🕊️", subject:"SST", chapter:"The Mughal Empire", topic:"Akbar's Policies", difficulty:"Medium", classLevel:"7" },
  { q:"The First Battle of Panipat was fought in:", opts:["1526","1556","1600","1707"], ans:"1526", exp:"Babur defeated Ibrahim Lodi at the First Battle of Panipat in 1526, establishing Mughal rule! ⚔️", subject:"SST", chapter:"The Mughal Empire", topic:"Mughal History", difficulty:"Medium", classLevel:"7" },
  { q:"Din-i-Ilahi was started by:", opts:["Akbar","Babur","Shah Jahan","Aurangzeb"], ans:"Akbar", exp:"Akbar introduced Din-i-Ilahi as a combination of elements from different religions! 🌟", subject:"SST", chapter:"The Mughal Empire", topic:"Akbar's Policies", difficulty:"Medium", classLevel:"7" },
  { q:"The autobiography of Babur is called:", opts:["Baburnama","Akbarnama","Ain-i-Akbari","Tuzuk-i-Timuri"], ans:"Baburnama", exp:"Babur wrote his autobiography 'Baburnama' in the Chagatai Turkic language! 📚", subject:"SST", chapter:"The Mughal Empire", topic:"Mughal Literature", difficulty:"Hard", classLevel:"7" },
  { q:"Fatehpur Sikri was built by:", opts:["Akbar","Shah Jahan","Babur","Jahangir"], ans:"Akbar", exp:"Akbar built Fatehpur Sikri near Agra as his new capital city! 🏯", subject:"SST", chapter:"The Mughal Empire", topic:"Mughal Monuments", difficulty:"Medium", classLevel:"7" },
  { q:"The last great Mughal emperor was:", opts:["Aurangzeb","Shah Jahan","Akbar","Bahadur Shah Zafar"], ans:"Aurangzeb", exp:"Aurangzeb was the last powerful Mughal emperor. After him the empire declined! 👑", subject:"SST", chapter:"The Mughal Empire", topic:"Mughal Rulers", difficulty:"Hard", classLevel:"7" },

  // ---- SST: Democracy – Equality and Justice ----
  { q:"Democracy means government by:", opts:["The people","The king","The army","The rich"], ans:"The people", exp:"Democracy comes from Greek: 'demos' (people) + 'kratos' (rule). Power belongs to the people! 🗳️", subject:"SST", chapter:"Democracy – Equality and Justice", topic:"Democracy", difficulty:"Easy", classLevel:"7" },
  { q:"The voting age in India is:", opts:["18 years","21 years","16 years","25 years"], ans:"18 years", exp:"Citizens above 18 years can vote in India. This is called Universal Adult Franchise! 🗳️", subject:"SST", chapter:"Democracy – Equality and Justice", topic:"Elections", difficulty:"Easy", classLevel:"7" },
  { q:"The Right to Equality is guaranteed by Article:", opts:["14","19","21","32"], ans:"14", exp:"Article 14 of the Indian Constitution guarantees the Right to Equality to all citizens! ⚖️", subject:"SST", chapter:"Democracy – Equality and Justice", topic:"Fundamental Rights", difficulty:"Medium", classLevel:"7" },
  { q:"Untouchability was abolished in India in:", opts:["1950","1947","1960","1975"], ans:"1950", exp:"The Constitution that came into force on 26 Jan 1950 abolished untouchability under Article 17! 🇮🇳", subject:"SST", chapter:"Democracy – Equality and Justice", topic:"Equality", difficulty:"Medium", classLevel:"7" },
  { q:"Which of these is NOT a Fundamental Right in India?", opts:["Right to property","Right to equality","Right to freedom","Right against exploitation"], ans:"Right to property", exp:"Right to Property was removed from Fundamental Rights by the 44th Amendment in 1978! 📜", subject:"SST", chapter:"Democracy – Equality and Justice", topic:"Fundamental Rights", difficulty:"Hard", classLevel:"7" },
  { q:"Universal Adult Franchise means:", opts:["Every adult can vote","Only men can vote","Only educated can vote","Only taxpayers can vote"], ans:"Every adult can vote", exp:"Universal Adult Franchise = every adult citizen above 18 has the right to vote regardless of caste, religion or gender! 🗳️", subject:"SST", chapter:"Democracy – Equality and Justice", topic:"Elections", difficulty:"Easy", classLevel:"7" },
  { q:"India is described as a:", opts:["Sovereign Socialist Secular Democratic Republic","Constitutional Monarchy","Federal Theocracy","Military Democracy"], ans:"Sovereign Socialist Secular Democratic Republic", exp:"These are the words in the Indian Constitution's Preamble describing our nation! 🇮🇳", subject:"SST", chapter:"Democracy – Equality and Justice", topic:"Indian Constitution", difficulty:"Hard", classLevel:"7" },

  // ---- SST: State Government ----
  { q:"The head of a State Government is the:", opts:["Chief Minister","Prime Minister","Governor","President"], ans:"Chief Minister", exp:"The Chief Minister heads the State Government and is the elected leader of the state! 🏛️", subject:"SST", chapter:"State Government", topic:"State Legislature", difficulty:"Easy", classLevel:"7" },
  { q:"The Governor of a state is appointed by the:", opts:["President","Prime Minister","Chief Minister","Parliament"], ans:"President", exp:"The Governor is appointed by the President of India and is the constitutional head of the state! 🎖️", subject:"SST", chapter:"State Government", topic:"Governor", difficulty:"Medium", classLevel:"7" },
  { q:"The State Legislature is also called:", opts:["Vidhan Sabha","Lok Sabha","Rajya Sabha","Gram Sabha"], ans:"Vidhan Sabha", exp:"The Vidhan Sabha (Legislative Assembly) is the lower house of the state legislature! 🏛️", subject:"SST", chapter:"State Government", topic:"State Legislature", difficulty:"Easy", classLevel:"7" },
  { q:"Which is NOT a function of the State Government?", opts:["Defence of the country","Police","Education","Agriculture"], ans:"Defence of the country", exp:"Defence is a Central/Union subject. State governments handle police, education, agriculture etc.! 🛡️", subject:"SST", chapter:"State Government", topic:"Functions of State Government", difficulty:"Medium", classLevel:"7" },
  { q:"The state of Goa has how many Lok Sabha seats?", opts:["2","5","1","4"], ans:"2", exp:"Goa is a small state with 2 Lok Sabha constituencies – North Goa and South Goa! 🗺️", subject:"SST", chapter:"State Government", topic:"State Legislature", difficulty:"Hard", classLevel:"7" },
  { q:"A bill becomes a law after being signed by the:", opts:["Governor","Chief Minister","Speaker","President"], ans:"Governor", exp:"At the state level, the Governor gives assent to bills passed by the State Legislature! ✍️", subject:"SST", chapter:"State Government", topic:"Law Making", difficulty:"Hard", classLevel:"7" },

  // ---- SST: Inside Our Earth ----
  { q:"The outermost layer of the Earth is called the:", opts:["Crust","Mantle","Core","Hydrosphere"], ans:"Crust", exp:"The Crust is the outermost solid layer of the Earth. We live on it! The thinnest layer 🌍", subject:"SST", chapter:"Inside Our Earth", topic:"Layers of the Earth", difficulty:"Easy", classLevel:"7" },
  { q:"The innermost layer of the Earth is:", opts:["Core","Mantle","Crust","Hydrosphere"], ans:"Core", exp:"The Core is at the centre of the Earth. The inner core is solid, outer core is liquid! 🔥", subject:"SST", chapter:"Inside Our Earth", topic:"Layers of the Earth", difficulty:"Easy", classLevel:"7" },
  { q:"Rocks formed from cooled lava are called:", opts:["Igneous rocks","Sedimentary rocks","Metamorphic rocks","Limestone only"], ans:"Igneous rocks", exp:"Igneous = 'fire'. Lava cools and solidifies to form igneous rocks like basalt and granite! 🌋", subject:"SST", chapter:"Inside Our Earth", topic:"Types of Rocks", difficulty:"Easy", classLevel:"7" },
  { q:"Fossils are found in which type of rock?", opts:["Sedimentary","Igneous","Metamorphic","All types"], ans:"Sedimentary", exp:"Fossils form when organisms are buried in sediment layers that turn to sedimentary rock! 🦕", subject:"SST", chapter:"Inside Our Earth", topic:"Types of Rocks", difficulty:"Medium", classLevel:"7" },
  { q:"The middle layer of the Earth is called:", opts:["Mantle","Crust","Core","Magma layer"], ans:"Mantle", exp:"The Mantle lies between the Crust and the Core. It contains semi-molten rock called magma! 🌐", subject:"SST", chapter:"Inside Our Earth", topic:"Layers of the Earth", difficulty:"Easy", classLevel:"7" },
  { q:"The deepest mine in the world can reach up to:", opts:["About 4 km","About 40 km","About 400 km","About 4000 km"], ans:"About 4 km", exp:"Even our deepest mines only reach about 4 km – the Earth's crust alone is 35 km thick! 🪨", subject:"SST", chapter:"Inside Our Earth", topic:"Layers of the Earth", difficulty:"Hard", classLevel:"7" },

  // ---- SST: Our Changing Earth ----
  { q:"Earthquakes occur because of movement of:", opts:["Tectonic plates","Clouds","Oceans","Volcanoes"], ans:"Tectonic plates", exp:"The Earth's crust is made of tectonic plates. When they move and collide, earthquakes occur! 🌍", subject:"SST", chapter:"Our Changing Earth", topic:"Earthquakes", difficulty:"Easy", classLevel:"7" },
  { q:"A volcano is formed when:", opts:["Magma erupts through the Earth's surface","Plates freeze","Ice melts quickly","Rivers flood plains"], ans:"Magma erupts through the Earth's surface", exp:"Magma (molten rock) from inside the Earth erupts through weak spots to form volcanoes! 🌋", subject:"SST", chapter:"Our Changing Earth", topic:"Volcanoes", difficulty:"Easy", classLevel:"7" },
  { q:"The instrument used to measure earthquakes is:", opts:["Seismograph","Thermometer","Barometer","Anemometer"], ans:"Seismograph", exp:"A Seismograph measures the intensity and location of earthquakes! 📊", subject:"SST", chapter:"Our Changing Earth", topic:"Earthquakes", difficulty:"Medium", classLevel:"7" },
  { q:"Meanders are formed by:", opts:["Rivers","Glaciers","Wind","Volcanoes"], ans:"Rivers", exp:"Rivers form curved loops called meanders on flat land as they wind across the surface! 〰️", subject:"SST", chapter:"Our Changing Earth", topic:"River Features", difficulty:"Medium", classLevel:"7" },
  { q:"Which of these is a depositional feature of rivers?", opts:["Delta","Valley","Gorge","Waterfall"], ans:"Delta", exp:"A delta is formed when a river deposits silt at its mouth before meeting the sea! 🌊", subject:"SST", chapter:"Our Changing Earth", topic:"River Features", difficulty:"Medium", classLevel:"7" },
  { q:"The Richter scale is used to measure:", opts:["Magnitude of earthquakes","Height of volcanoes","Speed of wind","Depth of ocean"], ans:"Magnitude of earthquakes", exp:"The Richter scale measures the magnitude (strength) of earthquakes from 1 to 10! 📈", subject:"SST", chapter:"Our Changing Earth", topic:"Earthquakes", difficulty:"Hard", classLevel:"7" },

  // ---- SST: Tracing Changes Through Thousand Years ----
  { q:"Manuscripts in medieval India were usually written on:", opts:["Palm leaves or bark","Paper only","Cloth only","Stone always"], ans:"Palm leaves or bark", exp:"Before paper became common, manuscripts were written on palm leaves or the bark of the birch tree! 🌿", subject:"SST", chapter:"Tracing Changes Through Thousand Years", topic:"Historical Sources", difficulty:"Medium", classLevel:"7" },
  { q:"The Persian wheel was used for:", opts:["Irrigation","Grinding grain","Measuring time","Warfare"], ans:"Irrigation", exp:"The Persian wheel (rhat) is a water-lifting device driven by animals, used for irrigation! 💧", subject:"SST", chapter:"Tracing Changes Through Thousand Years", topic:"Medieval Technology", difficulty:"Medium", classLevel:"7" },
  { q:"The word 'Hindustan' originally referred to:", opts:["The region around the Indus river","All of India","South India","The Deccan plateau"], ans:"The region around the Indus river", exp:"'Hindustan' originally referred to the region around the Indus, used by early Islamic writers! 🗺️", subject:"SST", chapter:"Tracing Changes Through Thousand Years", topic:"Historical Geography", difficulty:"Hard", classLevel:"7" },
  { q:"Historical records written by court historians are called:", opts:["Chronicles","Inscriptions","Coins","Maps"], ans:"Chronicles", exp:"Chronicles are historical accounts written by court historians recording events of their time! 📜", subject:"SST", chapter:"Tracing Changes Through Thousand Years", topic:"Historical Sources", difficulty:"Medium", classLevel:"7" },
  { q:"Coins are an important source of history because they show:", opts:["Rulers, dates and symbols","Weather patterns","Agricultural practices","Population size"], ans:"Rulers, dates and symbols", exp:"Coins tell us about rulers who issued them, the time period, and the symbols of their kingdoms! 🪙", subject:"SST", chapter:"Tracing Changes Through Thousand Years", topic:"Historical Sources", difficulty:"Easy", classLevel:"7" },
  { q:"The study of inscriptions is called:", opts:["Epigraphy","Numismatics","Archaeology","Palaeography"], ans:"Epigraphy", exp:"Epigraphy = study of inscriptions carved on stone, metal, or other materials! 🪨", subject:"SST", chapter:"Tracing Changes Through Thousand Years", topic:"Historical Sources", difficulty:"Hard", classLevel:"7" },

  // ---- SST: New Kings and Kingdoms ----
  { q:"The Chola Empire was located in:", opts:["South India","North India","East India","Central India"], ans:"South India", exp:"The Chola dynasty was one of the longest-ruling dynasties in South India! 🌴", subject:"SST", chapter:"New Kings and Kingdoms", topic:"Regional Kingdoms", difficulty:"Easy", classLevel:"7" },
  { q:"Prashastis were:", opts:["Inscriptions praising kings","Tax records","Religious texts","Land grants"], ans:"Inscriptions praising kings", exp:"Prashastis were inscriptions composed to praise kings, recording their victories and qualities! 📜", subject:"SST", chapter:"New Kings and Kingdoms", topic:"Historical Sources", difficulty:"Medium", classLevel:"7" },
  { q:"Land grants given to Brahmanas were called:", opts:["Agrahara","Prashasti","Mandala","Samanta"], ans:"Agrahara", exp:"Agrahara were land grants given to Brahmanas and temples, free from taxes! 🏛️", subject:"SST", chapter:"New Kings and Kingdoms", topic:"Land Grants", difficulty:"Hard", classLevel:"7" },
  { q:"The Rashtrakutas were rulers of:", opts:["Deccan","Bengal","Punjab","Rajasthan"], ans:"Deccan", exp:"The Rashtrakutas were a powerful dynasty who ruled over the Deccan region of India! 🏯", subject:"SST", chapter:"New Kings and Kingdoms", topic:"Regional Kingdoms", difficulty:"Medium", classLevel:"7" },
  { q:"Samantas were:", opts:["Subordinate rulers who paid tribute","Priests","Merchants","Tax collectors"], ans:"Subordinate rulers who paid tribute", exp:"Samantas were subordinate kings who paid tribute and provided military service to more powerful kings! ⚔️", subject:"SST", chapter:"New Kings and Kingdoms", topic:"Political Structure", difficulty:"Hard", classLevel:"7" },
  { q:"Tripartite struggle was fought over control of:", opts:["Kannauj","Panipat","Delhi","Agra"], ans:"Kannauj", exp:"Three kingdoms – Gurjara-Pratiharas, Rashtrakutas and Palas – fought for control of Kannauj! 👑", subject:"SST", chapter:"New Kings and Kingdoms", topic:"Regional Kingdoms", difficulty:"Hard", classLevel:"7" },
];
// SECTION 3: AI TUTOR KNOWLEDGE BASE (rule-based)
// =====================================================

const TUTOR_KB = [
  // Math
  { keys:["integer","negative","positive","number line"], answer:`📐 <b>Integers</b> are all whole numbers: positive (1,2,3…), zero (0), and negative (…-3,-2,-1).<br><br>🔑 Key rules:<br>• (+) × (+) = Positive 😊<br>• (−) × (−) = Positive 😊<br>• (+) × (−) = Negative 😟<br>• To add negatives: add and keep the sign (-3 + -4 = -7)<br><br>Think of the number line like a street – positive is going right, negative is going left! 🚶` },
  { keys:["photosynthesis","plant food","chlorophyll","glucose"], answer:`🌿 <b>Photosynthesis</b> is how plants make their own food!<br><br>📝 Formula:<br><b>Sunlight + Water + CO₂ → Glucose + Oxygen</b><br><br>🔑 Key points:<br>• Happens in the leaves 🍃<br>• Chlorophyll (green pigment) traps sunlight<br>• Takes place in daytime<br>• Releases Oxygen (which we breathe!) 😤<br><br>Remember: Plants are like little solar-powered kitchens! ☀️🍳` },
  { keys:["fraction","numerator","denominator","half","quarter"], answer:`🍕 <b>Fractions</b> represent parts of a whole!<br><br>Structure: <b>Numerator / Denominator</b><br>• Numerator = top number (how many parts you have)<br>• Denominator = bottom number (total parts)<br><br>🔑 Tips:<br>• To add/subtract: make the denominators equal first<br>• To multiply: multiply numerators, then denominators<br>• To divide: flip the second fraction and multiply!<br><br>3/4 means 3 out of 4 equal parts – like 3 slices of a 4-slice pizza! 🍕` },
  { keys:["equation","variable","solve","unknown"], answer:`⚖️ <b>Simple Equations</b> are like balance puzzles!<br><br>🔑 Golden Rule: Whatever you do to one side, do the SAME to the other side!<br><br>Example: 2x + 3 = 11<br>Step 1: Subtract 3 from both sides → 2x = 8<br>Step 2: Divide both by 2 → x = 4 ✅<br><br>Always check your answer by putting it back in the equation! 🎯` },
  { keys:["mean","median","mode","average","data"], answer:`📊 <b>Data Handling</b> – Three important measures:<br><br>📌 <b>Mean (Average)</b>: Add all values ÷ number of values<br>📌 <b>Median</b>: Middle value when data is arranged in order<br>📌 <b>Mode</b>: Most frequently appearing value<br><br>Example: 2, 3, 3, 4, 8<br>• Mean = (2+3+3+4+8)/5 = 20/5 = 4<br>• Median = 3 (middle value)<br>• Mode = 3 (appears most) 🎯` },
  { keys:["acid","base","salt","litmus","ph"], answer:`🧪 <b>Acids, Bases and Salts</b>:<br><br>🔴 <b>Acids</b>: Taste sour, turn blue litmus RED<br>Examples: Lemon juice, vinegar, curd<br><br>🔵 <b>Bases</b>: Taste bitter, turn red litmus BLUE<br>Examples: Baking soda, soap, bleach<br><br>🟢 <b>Salts</b>: Formed when acid + base react (neutralization)<br>Example: Common salt (NaCl)<br><br>🎨 Indicators like litmus, turmeric help us identify them!` },
  { keys:["noun","pronoun","verb","adjective","adverb","grammar"], answer:`📖 <b>Parts of Speech</b>:<br><br>👤 <b>Noun</b>: Names a person, place, thing or idea (Ram, Delhi, book)<br>🔄 <b>Pronoun</b>: Replaces a noun (he, she, it, they)<br>🏃 <b>Verb</b>: Shows action or state (run, is, have)<br>🎨 <b>Adjective</b>: Describes a noun (tall, red, happy)<br>💨 <b>Adverb</b>: Describes a verb/adjective (quickly, very)<br>🔗 <b>Conjunction</b>: Joins words/phrases (and, but, or)<br><br>Every sentence needs a Noun + Verb at minimum! 📝` },
  { keys:["democracy","government","election","vote","citizen"], answer:`🗳️ <b>Democracy</b> means "Rule by the People"!<br><br>🔑 Key ideas:<br>• Citizens above 18 can vote (Universal Adult Franchise)<br>• People elect their representatives<br>• Government is accountable to people<br>• Free and fair elections<br><br>India is the world's LARGEST democracy! 🇮🇳<br><br>Levels of government:<br>• Central (Parliament) → Prime Minister<br>• State (Legislature) → Chief Minister<br>• Local (Panchayat/Municipality)` },
  { keys:["mughal","akbar","babur","shah jahan","taj mahal"], answer:`🏯 <b>The Mughal Empire</b>:<br><br>👑 Important rulers:<br>• <b>Babur</b> (1526): Founded Mughal Empire, won 1st Battle of Panipat<br>• <b>Akbar</b>: Greatest Mughal, policy of religious tolerance (Sul-i-kul)<br>• <b>Jahangir</b>: Known for love of art<br>• <b>Shah Jahan</b>: Built Taj Mahal for wife Mumtaz Mahal 💎<br>• <b>Aurangzeb</b>: Extended empire but later declined<br><br>The Mughals ruled most of India from 1526–1857! 📜` },
  { keys:["heat","temperature","conductor","insulator","thermometer"], answer:`🌡️ <b>Heat</b>:<br><br>🔑 Key concepts:<br>• Heat is a form of energy; Temperature measures how hot something is<br>• Heat always flows from HOT → COLD objects<br>• <b>Conductors</b>: Allow heat to pass easily (metals like iron, copper)<br>• <b>Insulators</b>: Block heat flow (wood, plastic, wool)<br><br>🌬️ Types of wind:<br>• Sea breeze: Sea → Land (during day)<br>• Land breeze: Land → Sea (at night)<br><br>Clinical thermometer measures body temperature (normal = 37°C / 98.6°F)! 🏥` },
  { keys:["triangle","angle","polygon","side","geometry"], answer:`🔺 <b>Triangles</b>:<br><br>📐 Sum of all angles = 180°<br><br>Types by sides:<br>• <b>Equilateral</b>: All 3 sides equal<br>• <b>Isosceles</b>: 2 sides equal<br>• <b>Scalene</b>: No sides equal<br><br>Types by angles:<br>• <b>Acute</b>: All angles < 90°<br>• <b>Right</b>: One angle = 90°<br>• <b>Obtuse</b>: One angle > 90°<br><br>The longest side is opposite the largest angle! 🎯` },
  { keys:["respiration","breathing","oxygen","lungs","energy"], answer:`💨 <b>Respiration in Organisms</b>:<br><br>Respiration = Process of releasing energy from food<br><br>📝 Formula:<br><b>Glucose + Oxygen → Carbon dioxide + Water + Energy</b><br><br>🔑 Types:<br>• <b>Aerobic</b>: With oxygen (in most organisms including humans)<br>• <b>Anaerobic</b>: Without oxygen (in yeast, some bacteria)<br><br>We breathe in Oxygen and breathe out Carbon Dioxide! 😤<br>Our lungs do this work ~20,000 times a day! 🫁` },
  { keys:["soil","erosion","layer","humus","profile"], answer:`🌍 <b>Soil</b>:<br><br>Soil has different layers called <b>horizons</b>:<br>• <b>Topsoil (A)</b>: Rich in humus, dark colour<br>• <b>Subsoil (B)</b>: Less humus, more minerals<br>• <b>C horizon</b>: Broken parent rock<br>• <b>Bedrock</b>: Solid rock at bottom<br><br>🌱 <b>Humus</b>: Decayed plant/animal matter that makes soil fertile<br><br>Soil erosion = removal of topsoil by wind/water. Trees prevent it! 🌳` },
];

// =====================================================
// SECTION 4: MOCK EXAM QUESTIONS (non-MCQ)
// =====================================================

const SHORT_QUESTIONS = [
  { q:"What is the difference between a conductor and an insulator? Give one example of each.", subj:"Science" },
  { q:"Define photosynthesis and write its word equation.", subj:"Science" },
  { q:"What is Universal Adult Franchise? Why is it important?", subj:"SST" },
  { q:"What is the difference between mean and mode? Give an example.", subj:"Math" },
  { q:"Write three rules for integers with examples.", subj:"Math" },
  { q:"What is the difference between an acid and a base?", subj:"Science" },
  { q:"What are proper nouns? Give two examples.", subj:"English" },
  { q:"Name the three layers of the Earth.", subj:"SST" },
];

const LONG_QUESTIONS = [
  { q:"Explain how plants prepare their food through photosynthesis. Mention the raw materials needed, conditions required, and the products formed.", subj:"Science" },
  { q:"Describe the Mughal Emperor Akbar's religious policy. How was it different from other rulers of his time?", subj:"SST" },
  { q:"Write a short essay (8-10 sentences) on 'The Importance of Trees for Our Environment'.", subj:"English" },
  { q:"Explain the water cycle. How does water move through different forms in nature?", subj:"Science" },
  { q:"Describe the layers of soil and explain why topsoil is important for farming.", subj:"SST" },
];

// =====================================================
// SECTION 5: PROGRESS TRACKING (localStorage)
// =====================================================

let progress = JSON.parse(localStorage.getItem('studyBuddyProgress') || 'null') || {
  totalAttempts: 0,
  correct: 0,
  streak: 0,
  bestStreak: 0,
  subjectStats: { Math:{ a:0, c:0 }, Science:{ a:0, c:0 }, English:{ a:0, c:0 }, SST:{ a:0, c:0 } },
  achievements: [],
  history: []
};

function saveProgress() {
  localStorage.setItem('studyBuddyProgress', JSON.stringify(progress));
  updateNavScore();
  updateHomeStats();
}

function updateProgress(subject, isCorrect) {
  progress.totalAttempts++;
  if (isCorrect) {
    progress.correct++;
    progress.streak++;
    if (progress.streak > progress.bestStreak) progress.bestStreak = progress.streak;
  } else {
    progress.streak = 0;
  }
  progress.subjectStats[subject].a++;
  if (isCorrect) progress.subjectStats[subject].c++;
  checkAchievements();
  saveProgress();
}

function checkAchievements() {
  const achs = [
    { id:"first", title:"First Step 🌟", cond: () => progress.totalAttempts >= 1 },
    { id:"ten",   title:"10 Questions 🎯", cond: () => progress.totalAttempts >= 10 },
    { id:"fifty", title:"50 Questions 💪", cond: () => progress.totalAttempts >= 50 },
    { id:"streak5", title:"5 Streak 🔥", cond: () => progress.bestStreak >= 5 },
    { id:"streak10", title:"10 Streak 🚀", cond: () => progress.bestStreak >= 10 },
    { id:"perfect", title:"Perfect Score 🏆", cond: () => progress.correct > 0 && progress.correct === progress.totalAttempts },
    { id:"math5",    title:"Math Explorer ➕", cond: () => progress.subjectStats.Math.a >= 5 },
    { id:"science5", title:"Science Star 🔬",  cond: () => progress.subjectStats.Science.a >= 5 },
    { id:"english5", title:"Word Wizard 📖",   cond: () => progress.subjectStats.English.a >= 5 },
    { id:"sst5",     title:"History Hero 🌍",  cond: () => progress.subjectStats.SST.a >= 5 },
  ];
  achs.forEach(a => {
    if (!progress.achievements.includes(a.id) && a.cond()) {
      progress.achievements.push(a.id);
      showToast("Achievement Unlocked: " + a.title);
    }
  });
}

function updateNavScore() {
  document.getElementById('nav-score').textContent = progress.correct;
  document.getElementById('nav-streak').textContent = progress.streak;
}

function updateHomeStats() {
  document.getElementById('hs-attempts').textContent = progress.totalAttempts;
  document.getElementById('hs-correct').textContent = progress.correct;
  const acc = progress.totalAttempts > 0 ? Math.round((progress.correct/progress.totalAttempts)*100) : 0;
  document.getElementById('hs-score').textContent = acc + '%';
}

// =====================================================
// SECTION 6: PAGE NAVIGATION
// =====================================================

// =====================================================
// SECTION 7: AI TUTOR – Multi-Provider (Claude / ChatGPT / Gemini)
// =====================================================

// Conversation memory per provider
let chatHistory = [];

// ---- Provider config ----
const AI_PROVIDERS = {
  claude: {
    name: 'Claude',
    logo: '🟣',
    placeholder: 'sk-ant-…',
    validate: k => k.startsWith('sk-ant'),
    hint: 'console.anthropic.com → API Keys',
    hintUrl: 'https://console.anthropic.com',
    color: '#7c3aed'
  },
  openai: {
    name: 'ChatGPT',
    logo: '🟢',
    placeholder: 'sk-…',
    validate: k => k.startsWith('sk-'),
    hint: 'platform.openai.com → API Keys',
    hintUrl: 'https://platform.openai.com/api-keys',
    color: '#10a37f'
  },
  gemini: {
    name: 'Gemini',
    logo: '🔵',
    placeholder: 'AIza…',
    validate: k => k.startsWith('AIza') || k.length > 20,
    hint: 'aistudio.google.com → Get API Key',
    hintUrl: 'https://aistudio.google.com/app/apikey',
    color: '#4285f4'
  }
};

// ---- Storage helpers ----
function getProvider()    { return localStorage.getItem('studyBuddyProvider') || 'claude'; }
function setProvider(p)   { localStorage.setItem('studyBuddyProvider', p); }
function getApiKey(p)     { return localStorage.getItem('studyBuddyKey_' + (p || getProvider())) || ''; }
function setApiKey(p, k)  { localStorage.setItem('studyBuddyKey_' + p, k.trim()); }
function clearApiKey(p)   { localStorage.removeItem('studyBuddyKey_' + (p || getProvider())); }

// ---- Shared system prompt (dynamic based on active class) ----
function getSystemPrompt() {
  const cls = getActiveClass();
  const classDesc = cls ? `Class ${cls} CBSE` : 'school';
  const ageDesc   = cls ? (() => {
    const n = parseInt(cls);
    if (!isNaN(n)) return `(age ${n + 5}–${n + 6})`;
    return '';
  })() : '';
  const subjects = getAllSubjects();
  const subjectList = subjects.length
    ? subjects.join(', ')
    : 'Mathematics, Science, English, Social Science';
  return `You are "Study Buddy", a friendly and encouraging AI tutor for ${classDesc} students ${ageDesc} in India.

Your job:
- Explain concepts clearly in very simple, kid-friendly language
- Use emojis to make answers fun and engaging 🌟
- Keep answers concise but complete (100-200 words max)
- Use bullet points or numbered steps when explaining processes
- Always relate to NCERT ${classDesc} syllabus topics
- Be encouraging and positive — say things like "Great question!" or "You've got this! 💪"
- Use relevant Indian examples when possible (e.g., rupees for maths, Indian history for SST)
- If the question is off-topic or inappropriate, gently redirect to studies

Subjects: ${subjectList}
Format: readable HTML only — use <b> for bold, <br> for line breaks. No markdown.`;
}

// ---- Show setup panel ----
function checkApiKeyBanner() {
  document.getElementById('api-key-banner')?.remove();
  const provider = getProvider();
  const cfg = AI_PROVIDERS[provider];

  const banner = document.createElement('div');
  banner.id = 'api-key-banner';

  // Provider selector tabs
  const tabs = Object.entries(AI_PROVIDERS).map(([id, c]) => `
    <button class="provider-tab ${id === provider ? 'active' : ''}"
            onclick="switchProvider('${id}')"
            style="--pcol:${c.color}">
      ${c.logo} ${c.name}
    </button>`).join('');

  const hasKey = !!getApiKey(provider);

  banner.innerHTML = `
    <div class="api-banner">
      <div class="api-banner-icon">🤖</div>
      <div class="api-banner-body">
        <b>Choose your AI provider:</b>
        <div class="provider-tabs">${tabs}</div>
        ${hasKey
          ? `<div class="key-saved-row">
               ✅ <b>${cfg.name} key saved</b> — AI is active!
               <button class="key-change-btn" onclick="showKeyInput('${provider}')">Change Key</button>
               <button class="key-change-btn danger" onclick="removeProviderKey('${provider}')">Remove</button>
             </div>`
          : `<div id="key-input-area-${provider}">
               <small>Get a free key at <a href="${cfg.hintUrl}" target="_blank">${cfg.hint}</a></small>
               <div class="api-key-row">
                 <input type="password" id="api-key-input" placeholder="${cfg.placeholder}" autocomplete="off"/>
                 <button class="send-btn" onclick="submitApiKey('${provider}')">Save 🔑</button>
               </div>
               <small style="color:#6b7280">Saved only in your browser. Never shared. 🔒</small>
             </div>`
        }
      </div>
    </div>`;

  const container = document.querySelector('.tutor-container');
  if (container) container.insertBefore(banner, container.firstChild);
}

function showKeyInput(provider) {
  // Force show input even if key exists (for changing key)
  clearApiKey(provider);
  checkApiKeyBanner();
}

function removeProviderKey(provider) {
  if (confirm(`Remove your ${AI_PROVIDERS[provider].name} API key?`)) {
    clearApiKey(provider);
    checkApiKeyBanner();
    renderKeyBadge();
    showToast(`🔑 ${AI_PROVIDERS[provider].name} key removed.`);
  }
}

function switchProvider(provider) {
  setProvider(provider);
  chatHistory = []; // clear chat history on provider switch
  checkApiKeyBanner();
  renderKeyBadge();
  const cfg = AI_PROVIDERS[provider];
  addChatMsg(`Switched to <b>${cfg.logo} ${cfg.name}</b>! ${getApiKey(provider) ? 'Ready to answer your questions 🚀' : 'Please add your API key above to activate it.'}`, 'bot');
}

function submitApiKey(provider) {
  const val = document.getElementById('api-key-input')?.value?.trim();
  const cfg = AI_PROVIDERS[provider];
  if (!val || !cfg.validate(val)) {
    showToast(`⚠️ Please enter a valid ${cfg.name} API key (${cfg.placeholder})`);
    return;
  }
  setApiKey(provider, val);
  setProvider(provider);
  checkApiKeyBanner();
  renderKeyBadge();
  showToast(`✅ ${cfg.name} key saved! AI is now active 🤖`);
  addChatMsg(`🎉 <b>${cfg.logo} ${cfg.name}</b> is now active! Ask me anything about your ${getActiveClass() ? `Class ${getActiveClass()}` : ''} subjects! 📚`, 'bot');
}

// ---- Main ask dispatcher ----
async function askTutor() {
  const inp = document.getElementById('tutor-input');
  const q = inp.value.trim();
  if (!q) return;

  addChatMsg(q, 'user');
  inp.value = '';
  showTyping();

  const provider = getProvider();
  const apiKey   = getApiKey(provider);

  if (!apiKey) {
    await new Promise(r => setTimeout(r, 600));
    removeTyping();
    const ans = getRuleBasedAnswer(q);
    addChatMsg(ans + `<br><br><small style="color:#6b7280">💡 <i>Add an API key above for real AI answers!</i></small>`, 'bot');
    return;
  }

  if (provider === 'claude')  await askClaude(q, apiKey);
  if (provider === 'openai')  await askOpenAI(q, apiKey);
  if (provider === 'gemini')  await askGemini(q, apiKey);
}

// ---- Generic error handler ----
function handleApiError(err, provider) {
  removeTyping();
  console.error(`${provider} API error:`, err);
  const msg = err.message || '';
  if (msg.includes('401') || msg.includes('invalid') || msg.includes('auth') || msg.includes('API key')) {
    addChatMsg(`❌ Your ${AI_PROVIDERS[provider].name} API key seems wrong or expired. Please update it above! 🔑`, 'bot');
    clearApiKey(provider);
    checkApiKeyBanner();
    renderKeyBadge();
  } else if (msg.includes('429') || msg.includes('rate')) {
    addChatMsg('⏳ Too many requests! Please wait a moment and try again. 😊', 'bot');
  } else if (msg.includes('fetch') || msg.includes('network') || msg.includes('Failed')) {
    const offline = getRuleBasedAnswer(chatHistory.at(-2)?.content || '');
    addChatMsg(offline + '<br><br><small style="color:#e67e22">⚠️ <i>Network issue — showing offline answer.</i></small>', 'bot');
  } else {
    addChatMsg(`😕 Something went wrong: <i>${msg}</i><br>Please try again!`, 'bot');
  }
}

// ---- Claude (Anthropic) ----
async function askClaude(question, apiKey) {
  chatHistory.push({ role: 'user', content: question });
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 600,
        system: getSystemPrompt(),
        messages: chatHistory.slice(-10)
      })
    });
    if (!res.ok) { const e = await res.json().catch(()=>({})); throw new Error(e?.error?.message || `HTTP ${res.status}`); }
    const data  = await res.json();
    const reply = data.content?.[0]?.text || "I couldn't get an answer. Try again! 😊";
    chatHistory.push({ role: 'assistant', content: reply });
    removeTyping();
    addChatMsg(`<small style="color:#7c3aed;font-weight:800">🟣 Claude</small><br>${reply}`, 'bot');
  } catch(err) { handleApiError(err, 'claude'); }
}

// ---- OpenAI (ChatGPT) ----
async function askOpenAI(question, apiKey) {
  chatHistory.push({ role: 'user', content: question });
  const messages = [
    { role: 'system', content: getSystemPrompt() },
    ...chatHistory.slice(-10)
  ];
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',   // cost-efficient, free-tier friendly
        max_tokens: 600,
        messages
      })
    });
    if (!res.ok) { const e = await res.json().catch(()=>({})); throw new Error(e?.error?.message || `HTTP ${res.status}`); }
    const data  = await res.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't get an answer. Try again! 😊";
    chatHistory.push({ role: 'assistant', content: reply });
    removeTyping();
    addChatMsg(`<small style="color:#10a37f;font-weight:800">🟢 ChatGPT</small><br>${reply}`, 'bot');
  } catch(err) { handleApiError(err, 'openai'); }
}

// ---- Google Gemini ----
async function askGemini(question, apiKey) {
  // Build Gemini-format history (user/model alternating, no system role)
  const geminiHistory = chatHistory.slice(-10).map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }]
  }));
  // Prepend system prompt as first user turn if history is empty or first message
  const contents = geminiHistory.length
    ? [...geminiHistory, { role: 'user', parts: [{ text: question }] }]
    : [
        { role: 'user',  parts: [{ text: getSystemPrompt() + '\n\nNow answer this question: ' + question }] }
      ];

  chatHistory.push({ role: 'user', content: question });

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents, generationConfig: { maxOutputTokens: 600 } })
      }
    );
    if (!res.ok) { const e = await res.json().catch(()=>({})); throw new Error(e?.error?.message || `HTTP ${res.status}`); }
    const data  = await res.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't get an answer. Try again! 😊";
    chatHistory.push({ role: 'assistant', content: reply });
    removeTyping();
    // Convert basic markdown bold (**text**) Gemini sometimes returns
    const cleaned = reply.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
    addChatMsg(`<small style="color:#4285f4;font-weight:800">🔵 Gemini</small><br>${cleaned}`, 'bot');
  } catch(err) { handleApiError(err, 'gemini'); }
}

function quickAsk(q) {
  document.getElementById('tutor-input').value = q;
  askTutor();
}

// Rule-based fallback (offline mode)
function getRuleBasedAnswer(q) {
  const lower = q.toLowerCase();
  for (const item of TUTOR_KB) {
    if (item.keys.some(k => lower.includes(k))) return item.answer;
  }
  const match = QUESTION_BANK.find(qb =>
    lower.split(' ').some(w => w.length > 4 && qb.q.toLowerCase().includes(w))
  );
  if (match) {
    return `📚 Here's what I know about that:<br><br><b>Q: ${match.q}</b><br><br>✅ Answer: <b>${match.opts[match.ans]}</b><br><br>💡 ${match.exp}`;
  }
  return `🤔 Great question! Add an AI key above to get a full explanation of this topic! 📚`;
}

function addChatMsg(text, type) {
  const box = document.getElementById('chat-box');
  const div = document.createElement('div');
  div.className = `chat-msg ${type}`;
  div.innerHTML = `
    <span class="chat-avatar">${type==='bot'?'🤖':'😊'}</span>
    <div class="chat-bubble">${text}</div>
  `;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function showTyping() {
  const box = document.getElementById('chat-box');
  const div = document.createElement('div');
  div.className = 'chat-msg bot'; div.id = 'typing-indicator';
  div.innerHTML = `<span class="chat-avatar">🤖</span><div class="chat-bubble"><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing-indicator');
  if (t) t.remove();
}

// =====================================================
// SECTION 8: COMBINED QUESTION BANK (built-in + CSV)
// =====================================================

// Returns full question pool: built-in QUESTION_BANK + all saved CSV banks
function getAllQuestions() {
  const csvBanks = loadAllCsvBanks();
  const csvQuestions = csvBanks.flatMap(b => b.questions);
  return [...QUESTION_BANK, ...csvQuestions];
}

// Returns class-filtered question pool (the one used by quiz/daily/mock)
function getActiveQuestions() {
  return getClassFilteredQuestions();
}

// Returns sorted unique list of subjects across active-class questions
function getAllSubjects() {
  const all = getActiveQuestions();
  const subjects = [...new Set(all.map(q => q.subject).filter(Boolean))];
  const preferred = ['Math','Science','English','SST'];
  return [
    ...preferred.filter(s => subjects.includes(s)),
    ...subjects.filter(s => !preferred.includes(s)).sort()
  ];
}

// Returns chapters for a given subject from active-class questions
function getChaptersForSubject(subject) {
  if (subject === '__all__') return ['All Chapters'];
  const all = getActiveQuestions();
  const chapters = [...new Set(all.filter(q => q.subject === subject).map(q => q.chapter).filter(Boolean))];
  return chapters.length ? chapters : ['General'];
}

// Subject emoji map (built-in + fallback)
const SUBJECT_EMOJI = { Math:'➕', Science:'🔬', English:'📖', SST:'🌍' };
function subjectEmoji(s) { return SUBJECT_EMOJI[s] || '📚'; }

// =====================================================
// SECTION 9: QUIZ SETUP
// =====================================================

let selectedSubject = 'Math';
let selectedChapter = null;
let currentQuizQuestions = [];
let currentQIndex = 0;
let quizScore = 0;
let quizMode = 'chapter';
let dailySubjectFilter = '__all__';

// Render subject tab bar into any container element
// includeAll: whether to show an "All Subjects" tab
// activeSubject: which subject is currently active
// onSelectFn: string name of JS function to call on click
function renderSubjectTabs(containerId, activeSubject, onSelectFn, includeAll = true) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const subjects = getAllSubjects();
  const tabs = [];
  if (includeAll) {
    tabs.push(`<button class="stab ${activeSubject === '__all__' ? 'active' : ''}"
      onclick="${onSelectFn}('__all__', this)">🌈 All Subjects</button>`);
  }
  subjects.forEach(s => {
    tabs.push(`<button class="stab ${activeSubject === s ? 'active' : ''}"
      onclick="${onSelectFn}('${s.replace(/'/g,"\\'")}', this)">${subjectEmoji(s)} ${s}</button>`);
  });
  container.innerHTML = tabs.join('');
}

// Quiz page: subject selected
function selectSubject(subj, btn) {
  selectedSubject = subj;
  selectedChapter = null;
  document.querySelectorAll('#quiz-subject-tabs .stab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // Hide filters & start row first — renderQuizChapters will re-show them if needed
  document.getElementById('quiz-filters').style.display = 'none';
  document.getElementById('quiz-start-row').style.display = 'none';
  renderQuizChapters();
}

function renderQuizChapters() {
  const grid = document.getElementById('chapter-grid');

  if (selectedSubject === '__all__') {
    // Auto-select "All Chapters" and show everything immediately
    selectedChapter = '__all__';
    grid.innerHTML = `<button class="chap-btn selected" style="cursor:default">🌈 All Chapters</button>`;
    document.getElementById('selected-info').textContent = '📚 All Subjects — Mixed Questions';
    populateFilterDropdowns();
    document.getElementById('quiz-filters').style.display = 'block';
    document.getElementById('quiz-start-row').style.display = 'block';
    updateFilterCountBadge();
    return;
  }

  // Specific subject: render its chapters for the student to pick
  const chapters = getChaptersForSubject(selectedSubject);

  // If subject only has one chapter, auto-select it
  if (chapters.length === 1) {
    selectedChapter = chapters[0];
    grid.innerHTML = `<button class="chap-btn selected" style="cursor:default">${chapters[0]}</button>`;
    document.getElementById('selected-info').textContent = `📚 ${selectedSubject} › ${chapters[0]}`;
    populateFilterDropdowns();
    document.getElementById('quiz-filters').style.display = 'block';
    document.getElementById('quiz-start-row').style.display = 'block';
    updateFilterCountBadge();
    return;
  }

  // Multiple chapters: render buttons, add an "All Chapters" option at the top
  grid.innerHTML =
    `<button class="chap-btn" onclick="selectChapter('All Chapters', this)">📚 All Chapters</button>` +
    chapters.map(ch =>
      `<button class="chap-btn" onclick="selectChapter('${ch.replace(/'/g,"\\'")}', this)">${ch}</button>`
    ).join('');
}

function selectChapter(ch, btn) {
  selectedChapter = ch;
  document.querySelectorAll('.chap-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const isAll = ch === '__all__' || ch === 'All Chapters';
  const label = isAll
    ? `📚 ${selectedSubject} — All Chapters`
    : `📚 ${selectedSubject} › ${ch}`;
  document.getElementById('selected-info').textContent = label;
  populateFilterDropdowns();
  document.getElementById('quiz-filters').style.display = 'block';
  document.getElementById('quiz-start-row').style.display = 'block';
  updateFilterCountBadge();
}

// Populate the four filter <select> dropdowns based on subject+chapter pool
function populateFilterDropdowns() {
  const allQ = getActiveQuestions();
  let pool = allQ;
  if (selectedSubject !== '__all__') pool = pool.filter(q => q.subject === selectedSubject);
  const isAllChap = !selectedChapter || selectedChapter === '__all__' || selectedChapter === 'All Chapters';
  if (!isAllChap) pool = pool.filter(q => q.chapter === selectedChapter);

  // Topics
  const topics = [...new Set(pool.map(q => q.topic).filter(Boolean))].sort();
  const topicSel = document.getElementById('filter-topic');
  if (topicSel) {
    topicSel.innerHTML = `<option value="">All Topics</option>` +
      topics.map(t => `<option value="${t}">${t}</option>`).join('');
    topicSel.onchange = updateFilterCountBadge;
  }

  // Classes — only show if no active class is set (multi-class mode)
  const classFilterGroup = document.getElementById('filter-class-group');
  const activeClass = getActiveClass();
  if (classFilterGroup) classFilterGroup.style.display = activeClass ? 'none' : '';
  if (!activeClass) {
    const classes = [...new Set(pool.map(q => q.classLevel).filter(Boolean))].sort();
    const classSel = document.getElementById('filter-class');
    if (classSel) {
      classSel.innerHTML = `<option value="">All Classes</option>` +
        classes.map(c => `<option value="${c}">Class ${c}</option>`).join('');
      classSel.onchange = updateFilterCountBadge;
    }
  }

  // Question types
  const types = [...new Set(pool.map(q => q.questionType).filter(Boolean))].sort();
  const typeSel = document.getElementById('filter-type');
  if (typeSel) {
    typeSel.innerHTML = `<option value="">All Types</option>` +
      types.map(t => `<option value="${t}">${t}</option>`).join('');
    typeSel.onchange = updateFilterCountBadge;
  }

  // Difficulty onchange
  const diffSel = document.getElementById('filter-difficulty');
  if (diffSel) diffSel.onchange = updateFilterCountBadge;
}

// Get filtered pool using the four <select> dropdowns
function getFilteredPool() {
  let pool = getActiveQuestions();

  // Subject filter
  if (selectedSubject !== '__all__') pool = pool.filter(q => q.subject === selectedSubject);

  // Chapter filter — skip if "All Chapters" or no chapter selected
  const isAllChap = !selectedChapter || selectedChapter === '__all__' || selectedChapter === 'All Chapters';
  if (!isAllChap) pool = pool.filter(q => q.chapter === selectedChapter);

  // Dropdown filters
  const topic      = document.getElementById('filter-topic')?.value      || '';
  const difficulty = document.getElementById('filter-difficulty')?.value || '';
  const classLevel = document.getElementById('filter-class')?.value      || '';
  const qtype      = document.getElementById('filter-type')?.value       || '';
  if (topic)      pool = pool.filter(q => q.topic === topic);
  if (difficulty) pool = pool.filter(q => q.difficulty?.toLowerCase() === difficulty.toLowerCase());
  if (classLevel) pool = pool.filter(q => q.classLevel === classLevel);
  if (qtype)      pool = pool.filter(q => q.questionType?.toLowerCase() === qtype.toLowerCase());
  return pool;
}

// Show live count of matching questions
function updateFilterCountBadge() {
  const pool  = getFilteredPool();
  const badge = document.getElementById('filter-count-badge');
  if (!badge) return;
  if (!pool.length) {
    badge.innerHTML = `<span class="filter-badge-zero">⚠️ No questions match these filters — try different options</span>`;
    return;
  }
  const easy   = pool.filter(q => q.difficulty?.toLowerCase() === 'easy').length;
  const medium = pool.filter(q => q.difficulty?.toLowerCase() === 'medium').length;
  const hard   = pool.filter(q => q.difficulty?.toLowerCase() === 'hard').length;
  const pills  = [
    easy   ? `<span class="diff-pill easy">🟢 ${easy} Easy</span>`     : '',
    medium ? `<span class="diff-pill medium">🟡 ${medium} Medium</span>` : '',
    hard   ? `<span class="diff-pill hard">🔴 ${hard} Hard</span>`       : ''
  ].filter(Boolean).join('');
  badge.innerHTML = `<span class="filter-badge-ok">✅ <b>${pool.length}</b> questions available ${pills}</span>`;
}

// Helper: count occurrences by key function
function countBy(arr, fn) {
  return arr.reduce((acc, item) => {
    const key = fn(item) || 'unknown';
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

// =====================================================
// SECTION 10: GENERATE QUIZ
// =====================================================

function generateQuiz() {
  quizMode = 'chapter';
  const count      = parseInt(document.getElementById('quiz-count-select')?.value || '10');
  const strictPool = getFilteredPool();

  if (!strictPool.length) {
    showToast('⚠️ No questions match your filters! Try a broader selection.');
    return;
  }

  let finalPool  = [];
  let padded     = false;
  let paddedFrom = '';

  if (strictPool.length >= count) {
    // Enough questions — pick randomly without repetition
    finalPool = randomPick(strictPool, count);
  } else {
    // Not enough — use all strict questions + pad from wider pool
    const allQ      = getActiveQuestions();
    const isAllChap = !selectedChapter || selectedChapter === '__all__' || selectedChapter === 'All Chapters';
    const isAllSubj = selectedSubject === '__all__';

    let padPool = [];
    if (!isAllSubj && !isAllChap) {
      padPool = allQ.filter(q => q.subject === selectedSubject && q.chapter !== selectedChapter && !strictPool.includes(q));
      paddedFrom = `other ${selectedSubject} chapters`;
    } else if (!isAllSubj) {
      padPool = allQ.filter(q => q.subject === selectedSubject && !strictPool.includes(q));
      paddedFrom = `other ${selectedSubject} questions`;
    }

    if (!padPool.length) {
      padPool = allQ.filter(q => !strictPool.includes(q));
      paddedFrom = 'other subjects';
    }

    const needed  = count - strictPool.length;
    finalPool = [...shuffle(strictPool), ...randomPick(padPool, needed)];
    padded    = true;
  }

  // Clear any cached shuffle data from previous quiz runs
  finalPool.forEach(q => { delete q._shuffled; delete q._correctText; });

  currentQuizQuestions = finalPool;
  currentQIndex = 0;
  quizScore     = 0;

  document.getElementById('quiz-setup').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-play').style.display   = 'block';

  if (padded) {
    const notice = document.createElement('div');
    notice.className = 'quiz-pad-notice';
    notice.innerHTML = `💡 Only <b>${strictPool.length}</b> questions matched — added from ${paddedFrom} to reach <b>${finalPool.length}</b>.`;
    const playEl = document.getElementById('quiz-play');
    const existing = playEl.querySelector('.quiz-pad-notice');
    if (existing) existing.remove();
    playEl.insertBefore(notice, playEl.firstChild);
  } else {
    document.querySelector('#quiz-play .quiz-pad-notice')?.remove();
  }

  renderQuestion();
}

// Daily practice: subject filter changed
function selectDailySubject(subj, btn) {
  dailySubjectFilter = subj;
  document.querySelectorAll('#daily-subject-tabs .stab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  generateDailyPractice();
}

function generateDailyPractice() {
  quizMode = 'daily';
  const allQ = getActiveQuestions();
  let pool = dailySubjectFilter === '__all__'
    ? allQ
    : allQ.filter(q => q.subject === dailySubjectFilter);

  if (pool.length === 0) {
    showToast('⚠️ No questions for this subject yet!');
    return;
  }

  const picked = randomPick(pool, Math.min(20, pool.length));
  picked.forEach(q => { delete q._shuffled; delete q._correctText; });

  currentQuizQuestions = picked;
  currentQIndex = 0;
  quizScore = 0;
  dailyScore = 0;
  dailyIndex = 0;

  // Reset UI
  document.getElementById('daily-result').style.display = 'none';
  document.getElementById('daily-feedback').style.display = 'none';
  document.getElementById('daily-next-btn').style.display = 'none';
  renderDailyQuestion();
}

function startDaily() {
  showPage('page-daily');
  renderSubjectTabs('daily-subject-tabs', dailySubjectFilter, 'selectDailySubject', true);
  generateDailyPractice();
}

// =====================================================
// SECTION 10: RENDER QUIZ QUESTION
// =====================================================

// Shared meta-pill builder used by all question renders
function buildMetaPills(q) {
  return [
    q.classLevel  ? `<span class="q-meta-pill pill-class">🎓 Class ${q.classLevel}</span>` : '',
    q.subject     ? `<span class="q-meta-pill pill-subject">📚 ${q.subject}</span>` : '',
    q.chapter     ? `<span class="q-meta-pill pill-chapter">📖 ${q.chapter}</span>` : '',
    q.topic       ? `<span class="q-meta-pill pill-topic">🔖 ${q.topic}</span>` : '',
    q.difficulty  ? `<span class="q-meta-pill" style="background:${DIFF_COLOR[q.difficulty.toLowerCase()]||'#6b7280'}22;color:${DIFF_COLOR[q.difficulty.toLowerCase()]||'#6b7280'};border-color:${DIFF_COLOR[q.difficulty.toLowerCase()]||'#6b7280'}40">${DIFF_EMOJI[q.difficulty.toLowerCase()]||'⚪'} ${q.difficulty}</span>` : '',
    q.questionType && q.questionType !== 'MCQ' ? `<span class="q-meta-pill pill-type">${QTYPE_EMOJI[q.questionType?.toLowerCase()]||'📋'} ${q.questionType}</span>` : ''
  ].filter(Boolean).join('');
}

function renderQuestion() {
  const q     = currentQuizQuestions[currentQIndex];
  const total = currentQuizQuestions.length;
  const pct   = (currentQIndex / total) * 100;

  document.getElementById('qpf').style.width = pct + '%';
  document.getElementById('quiz-counter').textContent = `Question ${currentQIndex+1} of ${total}`;
  document.getElementById('quiz-feedback').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';

  document.getElementById('question-card').innerHTML = `
    <div class="q-meta-row">${buildMetaPills(q)}</div>
    <div class="q-text">${q.q}</div>
  `;

  // Shuffle options, track correct answer by text
  const shuffled = shuffle([...q.opts]);
  q._shuffled = shuffled;
  q._correctText = typeof q.ans === 'string' ? q.ans : q.opts[q.ans]; // support both formats

  const labels = ['A','B','C','D'];
  document.getElementById('options-grid').innerHTML = shuffled.map((opt, i) =>
    `<button class="option-btn" onclick="checkAnswer(${i})" id="opt-${i}">
      <span class="opt-label">${labels[i]}</span> ${opt}
    </button>`
  ).join('');
}

function checkAnswer(chosen) {
  const q           = currentQuizQuestions[currentQIndex];
  const correctText = q._correctText;
  const chosenText  = q._shuffled[chosen];
  const correctIdx  = q._shuffled.indexOf(correctText);
  const isCorrect   = chosenText === correctText;

  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIdx)            btn.classList.add('correct');
    if (i === chosen && !isCorrect)  btn.classList.add('wrong');
  });

  const fb = document.getElementById('quiz-feedback');
  fb.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');

  const extraInfo = [
    q.exp               ? `<div class="fb-exp">💡 ${q.exp}</div>` : '',
    q.learningObjective ? `<div class="fb-meta">🎯 <b>Learning Objective:</b> ${q.learningObjective}</div>` : '',
    q.ncertReference    ? `<div class="fb-meta">📘 <b>NCERT Ref:</b> ${q.ncertReference}</div>` : ''
  ].filter(Boolean).join('');

  if (isCorrect) {
    quizScore++;
    fb.innerHTML = `<div class="fb-result">✅ Correct! Great job! 🌟</div>${extraInfo}`;
    showToast(getEncouragement(true));
  } else {
    fb.innerHTML = `<div class="fb-result">❌ The answer was <b>${correctText}</b></div>${extraInfo}`;
    showToast(getEncouragement(false));
  }
  fb.style.display = 'block';
  document.getElementById('next-btn').style.display = 'block';
  updateProgress(q.subject, isCorrect);
}

function nextQuestion() {
  currentQIndex++;
  if (currentQIndex < currentQuizQuestions.length) {
    renderQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  document.getElementById('quiz-play').style.display = 'none';
  const total = currentQuizQuestions.length;
  const pct = Math.round((quizScore/total)*100);
  const emoji = pct === 100 ? '🏆' : pct >= 80 ? '⭐' : pct >= 60 ? '😊' : '💪';
  const msg   = pct === 100 ? 'Perfect score! You\'re a genius! 🎉' :
                pct >= 80   ? 'Amazing work! Keep it up! 🌟' :
                pct >= 60   ? 'Good effort! A little more practice and you\'ll nail it! 😊' :
                              'Keep going! Every attempt makes you smarter! 💪';
  const res = document.getElementById('quiz-result');
  res.style.display = 'block';
  res.innerHTML = `
    <div class="result-card">
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">Quiz Complete!</div>
      <div class="result-score">${quizScore}/${total}</div>
      <div class="result-msg">${msg}</div>
      <div class="result-actions">
        <button class="big-btn btn-green" onclick="generateQuiz()">Try Again 🔄</button>
        <button class="big-btn btn-blue"  onclick="resetQuizSetup()">New Chapter 📚</button>
        <button class="big-btn btn-orange" onclick="showPage('page-home')">Home 🏠</button>
      </div>
    </div>
  `;
}

function resetQuizSetup() {
  document.getElementById('quiz-setup').style.display = 'block';
  document.getElementById('quiz-play').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
}

// =====================================================
// SECTION 11: DAILY PRACTICE
// =====================================================

let dailyScore = 0;
let dailyIndex = 0;

function renderDailyQuestion() {
  const q     = currentQuizQuestions[dailyIndex];
  const total = currentQuizQuestions.length;
  const pct   = (dailyIndex / total) * 100;

  document.getElementById('dpf').style.width = pct + '%';
  document.getElementById('daily-counter').textContent = `Question ${dailyIndex+1} of ${total}`;
  document.getElementById('daily-feedback').style.display = 'none';
  document.getElementById('daily-next-btn').style.display = 'none';
  document.getElementById('daily-result').style.display = 'none';

  document.getElementById('daily-question-card').innerHTML = `
    <div class="q-meta-row">${buildMetaPills(q)}</div>
    <div class="q-text">${q.q}</div>
  `;

  // Shuffle options, track correct answer by text
  const shuffled = shuffle([...q.opts]);
  q._shuffled = shuffled;
  q._correctText = typeof q.ans === 'string' ? q.ans : q.opts[q.ans];

  const labels = ['A','B','C','D'];
  document.getElementById('daily-options-grid').innerHTML = shuffled.map((opt, i) =>
    `<button class="option-btn" onclick="checkDailyAnswer(${i})" id="dopt-${i}">
      <span class="opt-label">${labels[i]}</span> ${opt}
    </button>`
  ).join('');
}

function checkDailyAnswer(chosen) {
  const q           = currentQuizQuestions[dailyIndex];
  const correctText = q._correctText;
  const chosenText  = q._shuffled[chosen];
  const correctIdx  = q._shuffled.indexOf(correctText);
  const isCorrect   = chosenText === correctText;

  document.querySelectorAll('#daily-options-grid .option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIdx)           btn.classList.add('correct');
    if (i === chosen && !isCorrect) btn.classList.add('wrong');
  });

  const fb = document.getElementById('daily-feedback');
  fb.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');

  const extraInfo = [
    q.exp               ? `<div class="fb-exp">💡 ${q.exp}</div>` : '',
    q.learningObjective ? `<div class="fb-meta">🎯 <b>Learning Objective:</b> ${q.learningObjective}</div>` : '',
    q.ncertReference    ? `<div class="fb-meta">📘 <b>NCERT Ref:</b> ${q.ncertReference}</div>` : ''
  ].filter(Boolean).join('');

  if (isCorrect) {
    dailyScore++;
    fb.innerHTML = `<div class="fb-result">✅ Correct! 🌟</div>${extraInfo}`;
  } else {
    fb.innerHTML = `<div class="fb-result">❌ Answer: <b>${correctText}</b></div>${extraInfo}`;
  }
  fb.style.display = 'block';
  document.getElementById('daily-next-btn').style.display = 'block';
  updateProgress(q.subject, isCorrect);
  showToast(getEncouragement(isCorrect));
}

function nextDailyQuestion() {
  dailyIndex++;
  if (dailyIndex < currentQuizQuestions.length) {
    renderDailyQuestion();
  } else {
    showDailyResult();
  }
}

function showDailyResult() {
  document.getElementById('daily-options-grid').innerHTML = '';
  document.getElementById('daily-question-card').innerHTML = '';
  document.getElementById('daily-feedback').style.display = 'none';
  document.getElementById('daily-next-btn').style.display = 'none';
  const total = currentQuizQuestions.length;
  const pct = Math.round((dailyScore/total)*100);
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '⭐' : '💪';
  document.getElementById('daily-result').style.display = 'block';
  document.getElementById('daily-result').innerHTML = `
    <div class="result-card">
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">Daily Practice Done!</div>
      <div class="result-score">${dailyScore}/${total}</div>
      <div class="result-msg">${pct>=80?'Awesome day of practice! 🌟':'Great effort! Come back tomorrow! 💪'}</div>
      <div class="result-actions">
        <button class="big-btn btn-green" onclick="startDaily()">Practice Again 🔄</button>
        <button class="big-btn btn-orange" onclick="showPage('page-home')">Home 🏠</button>
      </div>
    </div>
  `;
}

// =====================================================
// SECTION 12: MOCK EXAM
// =====================================================

let mockMCQQuestions = [];
let mockAnswers = {};
let mockShortQs = [];
let mockLongQs = [];

function startMock() {
  showPage('page-mock');
  generateMockExam();
}

function generateMockExam() {
  mockMCQQuestions = shuffle([...QUESTION_BANK]).slice(0, 5);
  mockShortQs = shuffle([...SHORT_QUESTIONS]).slice(0, 3);
  mockLongQs  = shuffle([...LONG_QUESTIONS]).slice(0, 2);
  mockAnswers  = {};

  const labels = ['A','B','C','D'];

  // Build MCQ HTML
  const mcqHTML = mockMCQQuestions.map((q, qi) => `
    <div class="mock-mcq-item">
      <div class="mock-q-text">Q${qi+1}. ${q.q} <small style="color:#6b7280">(${q.subject})</small></div>
      <div class="mock-options">
        ${q.opts.map((opt, oi) => `
          <label class="mock-opt" id="mock-opt-${qi}-${oi}">
            <input type="radio" name="mock-q-${qi}" value="${oi}" onchange="selectMockOpt(${qi},${oi})">
            <span><b>${labels[oi]}.</b> ${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');

  const shortHTML = mockShortQs.map((q, i) => `
    <div class="mock-short-item">
      <div class="mock-q-text">Q${i+1}. ${q.q} <small style="color:#6b7280">(${q.subj})</small></div>
      <textarea rows="3" placeholder="Write your answer here…" id="short-ans-${i}"></textarea>
    </div>
  `).join('');

  const longHTML = mockLongQs.map((q, i) => `
    <div class="mock-long-item">
      <div class="mock-q-text">Q${i+1}. ${q.q} <small style="color:#6b7280">(${q.subj})</small></div>
      <textarea rows="6" placeholder="Write your detailed answer here… 📝" id="long-ans-${i}"></textarea>
    </div>
  `).join('');

  document.getElementById('mock-content').innerHTML = `
    <div class="mock-section">
      <h3>📝 Section A – Multiple Choice Questions (5 × 1 = 5 marks)</h3>
      ${mcqHTML}
    </div>
    <div class="mock-section">
      <h3>✍️ Section B – Short Answer Questions (3 × 2 = 6 marks)</h3>
      ${shortHTML}
    </div>
    <div class="mock-section">
      <h3>📄 Section C – Long Answer Questions (2 × 4 = 8 marks)</h3>
      ${longHTML}
    </div>
    <div class="mock-submit-row">
      <button class="big-btn btn-purple" onclick="submitMock()">Submit Exam 🎓</button>
    </div>
  `;
  document.getElementById('mock-result').style.display = 'none';
}

function selectMockOpt(qi, oi) {
  // Highlight selected
  for (let x = 0; x < 4; x++) {
    const el = document.getElementById(`mock-opt-${qi}-${x}`);
    if (el) el.classList.remove('selected');
  }
  const sel = document.getElementById(`mock-opt-${qi}-${oi}`);
  if (sel) sel.classList.add('selected');
  mockAnswers[qi] = oi;
}

function submitMock() {
  let mcqScore = 0;
  mockMCQQuestions.forEach((q, i) => {
    if (mockAnswers[i] === q.ans) { mcqScore++; updateProgress(q.subject, true); }
    else { updateProgress(q.subject, false); }
  });

  const shortAnswered = mockShortQs.filter((_, i) => (document.getElementById(`short-ans-${i}`)?.value||'').trim().length > 10).length;
  const longAnswered  = mockLongQs.filter((_,  i) => (document.getElementById(`long-ans-${i}`)?.value||'').trim().length > 30).length;
  const estShort = shortAnswered * 1.5;
  const estLong  = longAnswered  * 3;
  const totalEst = mcqScore + estShort + estLong;
  const maxMarks = 19;
  const pct = Math.round((totalEst / maxMarks) * 100);
  const grade = pct >= 90 ? 'A+' : pct >= 75 ? 'A' : pct >= 60 ? 'B' : pct >= 45 ? 'C' : 'D';
  const emoji = pct >= 75 ? '🏆' : pct >= 60 ? '⭐' : '💪';

  document.getElementById('mock-content').style.display = 'none';
  const res = document.getElementById('mock-result');
  res.style.display = 'block';
  res.innerHTML = `
    <div class="result-card">
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">Mock Exam Submitted! 🎓</div>
      <div class="result-score">~${Math.round(totalEst)}/${maxMarks}</div>
      <div style="font-size:32px;font-weight:900;color:var(--clr-green);margin:8px 0">Grade: ${grade}</div>
      <div class="result-msg">
        MCQ: ${mcqScore}/5 correct ✅<br>
        Short Answers: ${shortAnswered}/3 attempted ✍️<br>
        Long Answers: ${longAnswered}/2 attempted 📄<br><br>
        <i>Note: Written answer scores are estimated based on length. Have your teacher check them! 😊</i>
      </div>
      <div class="result-actions">
        <button class="big-btn btn-purple" onclick="retryMock()">Try Again 🔄</button>
        <button class="big-btn btn-orange" onclick="showPage('page-home')">Home 🏠</button>
      </div>
    </div>
  `;
}

function retryMock() {
  document.getElementById('mock-content').style.display = 'block';
  generateMockExam();
}

// =====================================================
// SECTION 13: PROGRESS PAGE
// =====================================================

function renderProgress() {
  const acc = progress.totalAttempts > 0 ? Math.round((progress.correct/progress.totalAttempts)*100) : 0;
  document.getElementById('prog-total').textContent    = progress.totalAttempts;
  document.getElementById('prog-correct').textContent  = progress.correct;
  document.getElementById('prog-accuracy').textContent = acc + '%';
  document.getElementById('prog-streak').textContent   = progress.bestStreak;

  // Subject bars
  const colors = { Math:'#4f46e5', Science:'#10b981', English:'#f59e0b', SST:'#ec4899' };
  const emojis = { Math:'➕', Science:'🔬', English:'📖', SST:'🌍' };
  const barsHTML = Object.entries(progress.subjectStats).map(([subj, stats]) => {
    const pct = stats.a > 0 ? Math.round((stats.c/stats.a)*100) : 0;
    return `
      <div class="subj-bar-row">
        <div class="subj-bar-label">
          <span>${emojis[subj]} ${subj}</span>
          <span>${stats.c}/${stats.a} (${pct}%)</span>
        </div>
        <div class="subj-bar-track">
          <div class="subj-bar-fill" style="width:${pct}%;background:${colors[subj]}"></div>
        </div>
      </div>
    `;
  }).join('');
  document.getElementById('subject-bars').innerHTML = barsHTML || '<p style="color:#6b7280">No data yet. Start practising! 🚀</p>';

  // Achievements
  const allAchs = [
    { id:"first",    title:"First Step",     emoji:"🌟", desc:"Complete first question" },
    { id:"ten",      title:"10 Questions",   emoji:"🎯", desc:"Answer 10 questions" },
    { id:"fifty",    title:"50 Questions",   emoji:"💪", desc:"Answer 50 questions" },
    { id:"streak5",  title:"5 Streak",       emoji:"🔥", desc:"Get 5 correct in a row" },
    { id:"streak10", title:"10 Streak",      emoji:"🚀", desc:"Get 10 correct in a row" },
    { id:"perfect",  title:"Perfect Score",  emoji:"🏆", desc:"100% accuracy" },
    { id:"math5",    title:"Math Explorer",  emoji:"➕", desc:"Answer 5 Math questions" },
    { id:"science5", title:"Science Star",   emoji:"🔬", desc:"Answer 5 Science questions" },
    { id:"english5", title:"Word Wizard",    emoji:"📖", desc:"Answer 5 English questions" },
    { id:"sst5",     title:"History Hero",   emoji:"🌍", desc:"Answer 5 SST questions" },
  ];
  const achHTML = allAchs.map(a => {
    const earned = progress.achievements.includes(a.id);
    return `
      <div class="achievement ${earned?'earned':'locked'}">
        <span class="achievement-icon">${a.emoji}</span>
        <div>
          <div style="font-weight:800;font-size:13px">${a.title}</div>
          <div style="font-size:11px;color:#6b7280">${a.desc}</div>
        </div>
        ${earned?'<span style="margin-left:auto;color:#f59e0b;font-weight:900">✓</span>':''}
      </div>
    `;
  }).join('');
  document.getElementById('achievements-grid').innerHTML = achHTML;
}

function resetProgress() {
  if (confirm('Are you sure you want to reset all your progress? 😟')) {
    progress = {
      totalAttempts:0, correct:0, streak:0, bestStreak:0,
      subjectStats:{ Math:{a:0,c:0}, Science:{a:0,c:0}, English:{a:0,c:0}, SST:{a:0,c:0} },
      achievements:[], history:[]
    };
    saveProgress();
    renderProgress();
    showToast("Progress reset! Fresh start! 🌟");
  }
}

// =====================================================
// SECTION 14: HELPERS
// =====================================================

// Cryptographically seeded shuffle (uses crypto.getRandomValues when available)
function shuffle(arr) {
  const a = [...arr];
  const len = a.length;
  // Use crypto.getRandomValues for better randomness if available
  let randoms;
  try {
    randoms = new Uint32Array(len);
    crypto.getRandomValues(randoms);
  } catch(e) {
    randoms = null;
  }
  for (let i = len - 1; i > 0; i--) {
    const j = randoms
      ? Math.floor((randoms[i] / 0x100000000) * (i + 1))
      : Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Pick `n` random unique items from arr — uses crypto shuffle for true randomness
function randomPick(arr, n) {
  if (n >= arr.length) return shuffle(arr);
  // Partial Fisher-Yates: stop after n swaps
  const a = [...arr];
  const len = a.length;
  let randoms;
  try {
    randoms = new Uint32Array(n);
    crypto.getRandomValues(randoms);
  } catch(e) { randoms = null; }
  const result = [];
  for (let i = 0; i < n; i++) {
    const remaining = len - i;
    const j = i + (randoms
      ? Math.floor((randoms[i] / 0x100000000) * remaining)
      : Math.floor(Math.random() * remaining));
    [a[i], a[j]] = [a[j], a[i]];
    result.push(a[i]);
  }
  return result;
}

function getEncouragement(correct) {
  const pos = ["Great job! 🌟","Awesome! 🎉","Nailed it! 🎯","You're brilliant! 💡","Keep it up! 🚀","Superstar! ⭐"];
  const neg = ["Don't give up! 💪","You're learning! 📚","Next one's yours! 😊","Keep trying! 🌈","Almost there! 🎯"];
  const arr = correct ? pos : neg;
  return arr[Math.floor(Math.random()*arr.length)];
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// =====================================================
// SECTION 14b: CSV QUESTION BANK MANAGER
// =====================================================

const CSV_STORAGE_KEY = 'studyBuddy_csvBanks';

// Full column spec — all supported fields from the extended schema
const CSV_COLUMNS = {
  required: ['question','option_a','option_b','option_c','option_d','correct_answer'],
  optional: ['question_id','class','subject','chapter','topic','difficulty',
             'question_type','explanation','learning_objective','ncert_reference']
};

// Difficulty display helpers
const DIFF_COLOR  = { easy:'#10b981', medium:'#f59e0b', hard:'#ef4444' };
const DIFF_EMOJI  = { easy:'🟢', medium:'🟡', hard:'🔴' };
const QTYPE_EMOJI = { mcq:'📝', 'true/false':'✅', fillblank:'✏️', short:'📄' };

function diffBadge(d) {
  if (!d) return '';
  const key = d.toLowerCase();
  const col = DIFF_COLOR[key] || '#6b7280';
  const em  = DIFF_EMOJI[key] || '⚪';
  return `<span class="meta-badge" style="background:${col}20;color:${col};border-color:${col}40">${em} ${d}</span>`;
}
function typeBadge(t) {
  if (!t) return '';
  const em = QTYPE_EMOJI[t.toLowerCase()] || '📋';
  return `<span class="meta-badge meta-type">${em} ${t}</span>`;
}

// ---- Storage ----
function loadAllCsvBanks() {
  try { return JSON.parse(localStorage.getItem(CSV_STORAGE_KEY) || '[]'); }
  catch { return []; }
}
function saveAllCsvBanks(banks) {
  try { localStorage.setItem(CSV_STORAGE_KEY, JSON.stringify(banks)); }
  catch { showToast('⚠️ Storage full! Remove an older bank first.'); }
}

// ---- Drag / Drop / File ----
function csvDragOver(e) {
  e.preventDefault();
  document.getElementById('csv-drop-zone').style.borderColor = '#4f46e5';
}
function csvDrop(e) {
  e.preventDefault();
  document.getElementById('csv-drop-zone').style.borderColor = '';
  const file = e.dataTransfer?.files?.[0];
  if (file) processCsvFile(file);
}
function handleCsvFile(e) {
  const file = e.target.files?.[0];
  if (file) processCsvFile(file);
  e.target.value = '';
}

function processCsvFile(file) {
  if (!file.name.endsWith('.csv')) { showToast('⚠️ Please upload a .csv file!'); return; }
  const reader = new FileReader();
  reader.onload = e => {
    const result = parseCSV(e.target.result);
    if (result.errors.length && result.questions.length === 0) { showCsvError(result.errors); return; }
    showCsvPreview(file.name, result);
  };
  reader.readAsText(file);
}

// ---- CSV Parser (extended schema) ----
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) return { questions:[], errors:['CSV is empty or has no data rows.'] };

  const headers = parseCsvRow(lines[0]).map(h => h.toLowerCase().trim().replace(/[\s-]+/g,'_'));
  const missing  = CSV_COLUMNS.required.filter(r => !headers.includes(r));
  if (missing.length) return { questions:[], errors:[`Missing required columns: ${missing.join(', ')}`] };

  const questions = [], errors = [];
  const ansMap = { a:0, b:1, c:2, d:3 };

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const cols = parseCsvRow(lines[i]);
    const row  = {};
    headers.forEach((h, idx) => row[h] = (cols[idx] || '').trim());

    if (!row.question) { errors.push(`Row ${i+1}: empty question — skipped.`); continue; }
    const ansKey = row.correct_answer.toLowerCase().replace(/[^a-d]/g, '');
    if (!(ansKey in ansMap)) { errors.push(`Row ${i+1}: correct_answer "${row.correct_answer}" must be A/B/C/D.`); continue; }

    questions.push({
      // Core quiz fields
      q:          row.question,
      opts:       [row.option_a, row.option_b, row.option_c, row.option_d],
      ans:        ansMap[ansKey],
      exp:        row.explanation || '💡 See your textbook for more details.',
      subject:    row.subject    || 'Custom',
      chapter:    row.chapter    || 'General',
      // Extended metadata fields — stored as-is for display & filtering
      questionId: row.question_id       || '',
      classLevel: row.class             || '',
      topic:      row.topic             || '',
      difficulty: row.difficulty        || '',
      questionType: row.question_type   || 'MCQ',
      learningObjective: row.learning_objective || '',
      ncertReference:    row.ncert_reference    || ''
    });
  }
  return { questions, errors };
}

// Minimal quoted-CSV row parser
function parseCsvRow(line) {
  const result = [];
  let cur = '', inQuote = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') { inQuote = !inQuote; }
    else if (ch === ',' && !inQuote) { result.push(cur); cur = ''; }
    else { cur += ch; }
  }
  result.push(cur);
  return result;
}

// ---- Preview ----
function showCsvPreview(filename, result) {
  const area = document.getElementById('csv-preview-area');
  const { questions, errors } = result;

  // Summary stats
  const subjects    = [...new Set(questions.map(q => q.subject))];
  const classes     = [...new Set(questions.map(q => q.classLevel).filter(Boolean))];
  const diffs       = [...new Set(questions.map(q => q.difficulty).filter(Boolean))];
  const easy   = questions.filter(q => q.difficulty?.toLowerCase() === 'easy').length;
  const medium = questions.filter(q => q.difficulty?.toLowerCase() === 'medium').length;
  const hard   = questions.filter(q => q.difficulty?.toLowerCase() === 'hard').length;

  const errHtml = errors.length
    ? `<div class="csv-warn">⚠️ ${errors.length} row(s) skipped:<br><small>${errors.slice(0,5).join('<br>')}${errors.length>5?`<br>…and ${errors.length-5} more`:''}` +
      `</small></div>` : '';

  const previewRows = questions.slice(0, 8).map((q, i) => `
    <tr>
      <td>${q.questionId || i+1}</td>
      <td title="${q.q}">${q.q.slice(0,55)}${q.q.length>55?'…':''}</td>
      <td>${typeof q.ans === "string" ? q.ans : (q.opts[q.ans] || q.ans)}</td>
      <td><span class="subj-tag">${q.subject}</span></td>
      <td>${q.chapter}</td>
      <td>${q.topic || '—'}</td>
      <td>${diffBadge(q.difficulty) || '—'}</td>
      <td>${typeBadge(q.questionType) || '—'}</td>
    </tr>`).join('');

  area.innerHTML = `
    <div class="csv-preview-card">
      <div class="csv-preview-header">
        <span>📄 <b>${filename}</b></span>
        <span class="csv-stat">✅ ${questions.length} questions</span>
        <span class="csv-stat">📚 ${subjects.join(', ')}</span>
        ${classes.length ? `<span class="csv-stat">🎓 Class ${classes.join(', ')}</span>` : ''}
        ${easy   ? `<span class="csv-stat" style="color:#10b981">🟢 ${easy} Easy</span>`   : ''}
        ${medium ? `<span class="csv-stat" style="color:#f59e0b">🟡 ${medium} Medium</span>` : ''}
        ${hard   ? `<span class="csv-stat" style="color:#ef4444">🔴 ${hard} Hard</span>`   : ''}
      </div>
      ${errHtml}
      <div class="csv-table-wrap">
        <table class="csv-preview-table">
          <thead><tr><th>ID</th><th>Question</th><th>Answer</th><th>Subject</th><th>Chapter</th><th>Topic</th><th>Difficulty</th><th>Type</th></tr></thead>
          <tbody>${previewRows}</tbody>
        </table>
        ${questions.length > 8 ? `<div class="csv-more">…and ${questions.length - 8} more questions</div>` : ''}
      </div>
      ${questions.length > 0 ? `
        <div class="csv-preview-actions">
          <input type="text" id="csv-bank-name" placeholder="Name this bank (e.g. Science Term 1)" class="csv-name-input"
                 value="${filename.replace('.csv','')}" />
          <button class="big-btn btn-green" onclick="saveCsvBank('${filename}')">💾 Save to Question Bank</button>
          <button class="big-btn btn-red"   onclick="document.getElementById('csv-preview-area').innerHTML=''">✕ Discard</button>
        </div>` : ''}
    </div>`;

  window._pendingCsvData = questions;
}

function showCsvError(errors) {
  document.getElementById('csv-preview-area').innerHTML = `
    <div class="csv-preview-card">
      <div class="csv-preview-header"><span>❌ Could not parse CSV</span></div>
      <div class="csv-warn">${errors.join('<br>')}</div>
      <p style="font-size:13px;color:#6b7280;margin-top:8px">
        Required columns: <b>question, option_a, option_b, option_c, option_d, correct_answer</b>
      </p>
    </div>`;
}

// ---- Save ----
function saveCsvBank(filename) {
  const questions = window._pendingCsvData;
  if (!questions?.length) return;
  const name  = document.getElementById('csv-bank-name')?.value?.trim() || filename;
  const banks = loadAllCsvBanks();
  const id    = 'bank_' + Date.now();
  // Store a summary alongside the questions for quick display
  const summary = {
    subjects:    [...new Set(questions.map(q => q.subject))],
    classes:     [...new Set(questions.map(q => q.classLevel).filter(Boolean))],
    easy:   questions.filter(q => q.difficulty?.toLowerCase()==='easy').length,
    medium: questions.filter(q => q.difficulty?.toLowerCase()==='medium').length,
    hard:   questions.filter(q => q.difficulty?.toLowerCase()==='hard').length,
    types:  [...new Set(questions.map(q => q.questionType).filter(Boolean))]
  };
  banks.push({ id, name, filename, questions, summary, addedAt: new Date().toISOString() });
  saveAllCsvBanks(banks);
  window._pendingCsvData = null;
  document.getElementById('csv-preview-area').innerHTML = '';
  showToast(`✅ "${name}" saved! ${questions.length} questions added.`);
  renderCsvBanksList();
  renderClassDropdown(); // refresh dropdown in case new classes were added
  renderSubjectTabs('quiz-subject-tabs', selectedSubject, 'selectSubject', true);
}

// ---- Banks List ----
function renderCsvBanksList() {
  const banks     = loadAllCsvBanks();
  const container = document.getElementById('csv-banks-list');
  if (!container) return;

  if (!banks.length) {
    container.innerHTML = `<div class="csv-empty">No question banks uploaded yet. Upload a CSV above to get started! 📂</div>`;
    return;
  }

  container.innerHTML = banks.map(bank => {
    const s   = bank.summary || {};
    const subj = s.subjects?.join(', ') || [...new Set(bank.questions.map(q=>q.subject))].join(', ');
    const date = new Date(bank.addedAt).toLocaleDateString('en-IN');
    const diffPills = [
      s.easy   ? `<span style="color:#10b981;font-weight:800">🟢 ${s.easy}</span>`   : '',
      s.medium ? `<span style="color:#f59e0b;font-weight:800">🟡 ${s.medium}</span>` : '',
      s.hard   ? `<span style="color:#ef4444;font-weight:800">🔴 ${s.hard}</span>`   : ''
    ].filter(Boolean).join(' ');

    return `
      <div class="csv-bank-item" id="bankcard-${bank.id}">
        <div class="csv-bank-info">
          <div class="csv-bank-name">📚 ${bank.name}</div>
          <div class="csv-bank-meta">
            <span>📄 ${bank.filename}</span>
            <span>✅ ${bank.questions.length} questions</span>
            <span>📘 ${subj}</span>
            ${s.classes?.length ? `<span>🎓 Class ${s.classes.join(', ')}</span>` : ''}
            ${diffPills ? `<span>${diffPills}</span>` : ''}
            <span>🗓️ ${date}</span>
          </div>
        </div>
        <div class="csv-bank-actions">
          <button class="key-change-btn" onclick="previewBankQuestions('${bank.id}')">👁️ Preview</button>
          <button class="key-change-btn danger" onclick="deleteCsvBank('${bank.id}')">🗑️ Delete</button>
        </div>
      </div>`;
  }).join('');
}

function previewBankQuestions(bankId) {
  const bank = loadAllCsvBanks().find(b => b.id === bankId);
  if (!bank) return;

  const rows = bank.questions.slice(0, 12).map((q, i) => `
    <tr>
      <td>${q.questionId || i+1}</td>
      <td title="${q.q}">${q.q.slice(0,55)}${q.q.length>55?'…':''}</td>
      <td>${typeof q.ans === "string" ? q.ans : (q.opts[q.ans] || q.ans)}</td>
      <td><span class="subj-tag">${q.subject}</span></td>
      <td>${q.chapter}</td>
      <td>${q.topic||'—'}</td>
      <td>${diffBadge(q.difficulty)||'—'}</td>
      <td>${typeBadge(q.questionType)||'—'}</td>
      <td style="font-size:11px;color:#6b7280">${q.ncertReference||'—'}</td>
    </tr>`).join('');

  const el = document.getElementById('csv-preview-area');
  el.innerHTML = `
    <div class="csv-preview-card">
      <div class="csv-preview-header">
        <b>👁️ Preview: ${bank.name}</b>
        <span class="csv-stat">✅ ${bank.questions.length} total</span>
        <button class="key-change-btn" onclick="document.getElementById('csv-preview-area').innerHTML=''">✕ Close</button>
      </div>
      <div class="csv-table-wrap">
        <table class="csv-preview-table">
          <thead><tr><th>ID</th><th>Question</th><th>Answer</th><th>Subject</th><th>Chapter</th><th>Topic</th><th>Difficulty</th><th>Type</th><th>NCERT Ref</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        ${bank.questions.length > 12 ? `<div class="csv-more">…and ${bank.questions.length - 12} more</div>` : ''}
      </div>
    </div>`;
  el.scrollIntoView({ behavior: 'smooth' });
}

function deleteCsvBank(bankId) {
  const bank = loadAllCsvBanks().find(b => b.id === bankId);
  if (!bank) return;
  if (!confirm(`Delete "${bank.name}"? This removes ${bank.questions.length} questions.`)) return;
  saveAllCsvBanks(loadAllCsvBanks().filter(b => b.id !== bankId));
  renderCsvBanksList();
  renderSubjectTabs('quiz-subject-tabs', selectedSubject, 'selectSubject', true);
  showToast(`🗑️ "${bank.name}" deleted.`);
}

// ---- Sample CSV download (full schema) ----
function downloadSampleCsv() {
  const header = 'question_id,class,subject,chapter,topic,difficulty,question_type,question,option_a,option_b,option_c,option_d,correct_answer,explanation,learning_objective,ncert_reference';
  const rows = [
    'Q001,7,Math,Integers,Addition of Integers,Easy,MCQ,What is (-5) + (-3)?,-8,8,-2,2,A,Negative + Negative = More Negative. So (-5)+(-3) = -8,Students can add negative integers,NCERT Class 7 Maths Ch 1',
    'Q002,7,Science,Nutrition in Plants,Photosynthesis,Easy,MCQ,What gas do plants release during photosynthesis?,Carbon dioxide,Nitrogen,Oxygen,Hydrogen,C,Plants release Oxygen during photosynthesis using sunlight water and CO2,Students understand photosynthesis output,NCERT Class 7 Science Ch 1',
    'Q003,7,English,Grammar – Nouns,Proper Nouns,Medium,MCQ,Which of these is a proper noun?,city,river,Delhi,mountain,C,Proper nouns name specific places people or things and are always capitalised,Students identify proper nouns,NCERT Class 7 English Grammar',
    'Q004,7,SST,The Mughal Empire,Mughal Rulers,Medium,MCQ,Who built the Taj Mahal?,Akbar,Aurangzeb,Babur,Shah Jahan,D,Shah Jahan built the Taj Mahal in memory of his wife Mumtaz Mahal,Students recall Mughal rulers and monuments,NCERT Class 7 History Ch 4',
    'Q005,7,Science,Acids Bases and Salts,Indicators,Hard,MCQ,What colour does blue litmus paper turn in an acid?,Blue,Red,Green,Yellow,B,Acids turn blue litmus paper red. Bases turn red litmus paper blue,Students apply knowledge of indicators,NCERT Class 7 Science Ch 5'
  ];
  const csv = [header, ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'sample_questions_full.csv'; a.click();
  URL.revokeObjectURL(url);
  showToast('📥 Sample CSV (full schema) downloaded!');
}

function showPage(id) {
  document.querySelectorAll('.hero, .page').forEach(el => el.style.display = 'none');
  const el = document.getElementById(id);
  if (el) el.style.display = 'block';
  if (id === 'page-progress') renderProgress();
  if (id === 'page-tutor')    { checkApiKeyBanner(); renderKeyBadge(); injectClassBanner('page-tutor'); }
  if (id === 'page-quiz') {
    document.getElementById('quiz-setup').style.display = 'block';
    document.getElementById('quiz-play').style.display = 'none';
    document.getElementById('quiz-result').style.display = 'none';
    document.getElementById('quiz-filters').style.display = 'none';
    document.getElementById('quiz-start-row').style.display = 'none';
    injectClassBanner('page-quiz');
    renderSubjectTabs('quiz-subject-tabs', selectedSubject, 'selectSubject', true);
    renderQuizChapters();
  }
  if (id === 'page-daily')    injectClassBanner('page-daily');
  if (id === 'page-mock')     injectClassBanner('page-mock');
  if (id === 'page-csv') { renderCsvBanksList(); }
  window.scrollTo(0, 0);
}

// Inject a small "Active: Class X" banner at top of content pages
function injectClassBanner(pageId) {
  const page = document.getElementById(pageId);
  if (!page) return;
  const existing = page.querySelector('.active-class-banner');
  if (existing) existing.remove();
  const cls = getActiveClass();
  const banner = document.createElement('div');
  banner.className = 'active-class-banner';
  banner.innerHTML = cls
    ? `🎓 Active: <span class="acb-tag">Class ${cls}</span>
       <button class="acb-change" onclick="toggleClassDropdown()">Switch ▾</button>`
    : `🌈 All classes — <button class="acb-change" onclick="toggleClassDropdown()">Select class ▾</button>`;
  const header = page.querySelector('.page-header');
  if (header) header.after(banner);
  else page.insertBefore(banner, page.firstChild);
}

function init() {
  updateClassUI();
  updateNavScore();
  updateHomeStats();
  const subjects = getAllSubjects();
  selectedSubject = subjects[0] || 'Math';
  // Render the dropdown list so it's ready
  renderClassDropdown();
}

window.addEventListener('DOMContentLoaded', init);
