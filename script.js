/* =====================================================
   AI Study Buddy – Class 7 CBSE
   script.js – All app logic, question banks, AI tutor
   ===================================================== */

// =====================================================
// SECTION 1: DATA – CBSE Class 7 Chapters
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

/* Each question: { q, opts:[A,B,C,D], ans:0-3, exp, subject, chapter } */

const QUESTION_BANK = [

  // ---- MATH ----
  { q:"What is (-5) + (-3)?", opts:["-8","8","-2","2"], ans:0, exp:"Negative + Negative = More Negative. (-5)+(-3) = -8 🎯", subject:"Math", chapter:"Integers" },
  { q:"What is (-7) × (-3)?", opts:["21","-21","10","-10"], ans:0, exp:"Negative × Negative = Positive! (-7)×(-3) = 21 🌟", subject:"Math", chapter:"Integers" },
  { q:"What is (-12) ÷ 4?", opts:["-3","3","-8","8"], ans:0, exp:"Negative ÷ Positive = Negative. (-12)÷4 = -3 👍", subject:"Math", chapter:"Integers" },
  { q:"Which integer is greater: -5 or -2?", opts:["-2","-5","Both equal","Cannot say"], ans:0, exp:"On the number line, -2 is to the right of -5, so -2 is greater! 📏", subject:"Math", chapter:"Integers" },
  { q:"What is the additive inverse of 8?", opts:["-8","8","0","1"], ans:0, exp:"Additive inverse of a number n is -n. So additive inverse of 8 is -8 ✅", subject:"Math", chapter:"Integers" },

  { q:"What is 2/5 + 1/5?", opts:["3/5","3/10","1/5","2/5"], ans:0, exp:"Same denominator? Just add numerators! 2/5 + 1/5 = 3/5 🍕", subject:"Math", chapter:"Fractions and Decimals" },
  { q:"0.1 × 0.1 = ?", opts:["0.01","0.1","1","0.001"], ans:0, exp:"0.1 × 0.1 = 0.01 (count decimal places: 1+1=2 places) 🧮", subject:"Math", chapter:"Fractions and Decimals" },
  { q:"Which fraction is bigger: 3/4 or 2/3?", opts:["3/4","2/3","Both equal","Cannot say"], ans:0, exp:"Convert to same denominator: 9/12 vs 8/12. So 3/4 is bigger! 🏆", subject:"Math", chapter:"Fractions and Decimals" },
  { q:"2.5 ÷ 0.5 = ?", opts:["5","25","0.5","50"], ans:0, exp:"2.5 ÷ 0.5 = 25/5 = 5. Multiply both by 10 to remove decimal! 💡", subject:"Math", chapter:"Fractions and Decimals" },
  { q:"What is 3/4 of 20?", opts:["15","12","10","8"], ans:0, exp:"3/4 of 20 = (3×20)/4 = 60/4 = 15 🌟", subject:"Math", chapter:"Fractions and Decimals" },

  { q:"If 2x + 3 = 11, what is x?", opts:["4","3","7","8"], ans:0, exp:"2x = 11-3 = 8, so x = 8/2 = 4. Always do the same to both sides! ⚖️", subject:"Math", chapter:"Simple Equations" },
  { q:"If x/3 = 5, what is x?", opts:["15","5/3","8","2"], ans:0, exp:"Multiply both sides by 3: x = 5×3 = 15 ✅", subject:"Math", chapter:"Simple Equations" },
  { q:"Which is a linear equation?", opts:["2x+3=7","x²=4","x³=8","√x=2"], ans:0, exp:"Linear equation has variable with power 1 only. 2x+3=7 is linear! 📐", subject:"Math", chapter:"Simple Equations" },

  { q:"Mean of 2, 4, 6, 8, 10 is:", opts:["6","5","7","8"], ans:0, exp:"Mean = Sum/Count = 30/5 = 6 📊", subject:"Math", chapter:"Data Handling" },
  { q:"Mode of 3,3,5,7,7,7,9 is:", opts:["7","3","9","5"], ans:0, exp:"Mode = most frequent number. 7 appears 3 times! 🎯", subject:"Math", chapter:"Data Handling" },
  { q:"The middle value of arranged data is called:", opts:["Median","Mean","Mode","Range"], ans:0, exp:"When data is arranged in order, the middle value is called Median! 📏", subject:"Math", chapter:"Data Handling" },

  { q:"Sum of angles in a triangle is:", opts:["180°","360°","90°","270°"], ans:0, exp:"The angles in any triangle always add up to 180°! Try drawing one 🔺", subject:"Math", chapter:"The Triangle" },
  { q:"An angle of exactly 90° is called:", opts:["Right angle","Acute angle","Obtuse angle","Reflex angle"], ans:0, exp:"A 90° angle is called a Right Angle. Looks like the corner of a book! 📐", subject:"Math", chapter:"Lines and Angles" },

  { q:"If CP = ₹200 and SP = ₹250, profit is:", opts:["₹50","₹200","₹250","₹450"], ans:0, exp:"Profit = SP - CP = 250 - 200 = ₹50 💰", subject:"Math", chapter:"Comparing Quantities" },
  { q:"20% of 300 = ?", opts:["60","30","20","300"], ans:0, exp:"20% of 300 = (20/100)×300 = 60 🎯", subject:"Math", chapter:"Comparing Quantities" },

  // ---- SCIENCE ----
  { q:"The process by which plants make their own food is called:", opts:["Photosynthesis","Respiration","Digestion","Transpiration"], ans:0, exp:"Plants use sunlight, water, and CO₂ to make food through Photosynthesis 🌿☀️", subject:"Science", chapter:"Nutrition in Plants" },
  { q:"The green pigment in leaves is called:", opts:["Chlorophyll","Glucose","Starch","Cellulose"], ans:0, exp:"Chlorophyll is the green pigment that traps sunlight for photosynthesis! 🍃", subject:"Science", chapter:"Nutrition in Plants" },
  { q:"Plants get CO₂ through tiny pores called:", opts:["Stomata","Roots","Flowers","Seeds"], ans:0, exp:"Stomata are tiny pores on leaves. They let CO₂ in and O₂ out! 🌱", subject:"Science", chapter:"Nutrition in Plants" },
  { q:"Insectivorous plants eat insects because:", opts:["Lack nitrogen","Lack sunlight","Lack water","Lack CO₂"], ans:0, exp:"Insectivorous plants like Venus flytrap grow in nitrogen-poor soil! 🪤", subject:"Science", chapter:"Nutrition in Plants" },

  { q:"Digestion of food starts in the:", opts:["Mouth","Stomach","Small intestine","Large intestine"], ans:0, exp:"Saliva in the mouth begins breaking down food – especially starch! 👄", subject:"Science", chapter:"Nutrition in Animals" },
  { q:"Which organ absorbs most nutrients from food?", opts:["Small intestine","Large intestine","Stomach","Liver"], ans:0, exp:"The small intestine has villi that absorb nutrients into the blood! 🫁", subject:"Science", chapter:"Nutrition in Animals" },

  { q:"Heat always flows from:", opts:["Hot to cold","Cold to hot","Both ways","Neither"], ans:0, exp:"Heat always flows from a hotter object to a colder object! 🌡️", subject:"Science", chapter:"Heat" },
  { q:"The best conductor of heat among these is:", opts:["Iron","Wood","Plastic","Cotton"], ans:0, exp:"Metals like iron are good conductors of heat. That's why pans are metal! 🍳", subject:"Science", chapter:"Heat" },
  { q:"Which thermometer is used to measure body temperature?", opts:["Clinical thermometer","Lab thermometer","Both","None"], ans:0, exp:"Clinical thermometer measures body temperature (35°C–42°C range)! 🌡️", subject:"Science", chapter:"Heat" },
  { q:"Land breeze blows from:", opts:["Land to sea","Sea to land","North to south","South to north"], ans:0, exp:"At night, land cools faster, so air flows from land to sea – land breeze! 🌬️", subject:"Science", chapter:"Heat" },

  { q:"Acids taste:", opts:["Sour","Sweet","Bitter","Salty"], ans:0, exp:"Acids taste sour! Like lemon juice and vinegar 🍋", subject:"Science", chapter:"Acids Bases and Salts" },
  { q:"Litmus paper turns red in:", opts:["Acid","Base","Neutral solution","Water"], ans:0, exp:"Red litmus turns blue in base, blue litmus turns red in acid! 🔴🔵", subject:"Science", chapter:"Acids Bases and Salts" },
  { q:"Baking soda is:", opts:["A base","An acid","A salt","Neutral"], ans:0, exp:"Baking soda (sodium bicarbonate) is a base. It turns litmus blue! 🧁", subject:"Science", chapter:"Acids Bases and Salts" },

  { q:"Rusting of iron is a:", opts:["Chemical change","Physical change","Both","Neither"], ans:0, exp:"Rusting is a chemical change – new substance (iron oxide) forms and can't be reversed! 🔧", subject:"Science", chapter:"Physical and Chemical Changes" },
  { q:"Melting of ice is a:", opts:["Physical change","Chemical change","Both","Neither"], ans:0, exp:"Melting is physical – water can be frozen again! No new substance is formed 🧊", subject:"Science", chapter:"Physical and Chemical Changes" },

  { q:"Which gas do plants release during photosynthesis?", opts:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"], ans:0, exp:"Plants release Oxygen during photosynthesis. That's why trees are so important! 🌳", subject:"Science", chapter:"Nutrition in Plants" },
  { q:"Respiration in organisms releases:", opts:["Energy","Sunlight","Food","Water only"], ans:0, exp:"Respiration breaks down glucose to release energy for all body activities! ⚡", subject:"Science", chapter:"Respiration in Organisms" },
  { q:"Which blood vessels carry blood away from the heart?", opts:["Arteries","Veins","Capillaries","Nerves"], ans:0, exp:"Arteries carry blood AWAY from the heart. Remember: A for Away and Artery! ❤️", subject:"Science", chapter:"Transportation in Animals and Plants" },

  // ---- ENGLISH ----
  { q:"A noun is a word that names a:", opts:["Person, place or thing","Action","Description","Joining word"], ans:0, exp:"Nouns name people (Ram), places (Delhi), things (book) or ideas (love)! 📝", subject:"English", chapter:"Grammar – Nouns" },
  { q:"Which is a proper noun?", opts:["Delhi","City","River","Mountain"], ans:0, exp:"Proper nouns name specific things – Delhi is a specific city! Always capitalized 🏙️", subject:"English", chapter:"Grammar – Nouns" },
  { q:"The plural of 'child' is:", opts:["Children","Childs","Childes","Child"], ans:0, exp:"Child → Children is an irregular plural. No '-s' or '-es' added! 👶", subject:"English", chapter:"Grammar – Nouns" },

  { q:"'He runs every day' – the verb is in which tense?", opts:["Present","Past","Future","Perfect"], ans:0, exp:"'Runs' shows a habit in the present. Simple Present Tense! ⏰", subject:"English", chapter:"Grammar – Verbs and Tenses" },
  { q:"Past tense of 'go' is:", opts:["Went","Goed","Gone","Going"], ans:0, exp:"Go is an irregular verb. Its past tense is Went, not Goed! 🚶", subject:"English", chapter:"Grammar – Verbs and Tenses" },
  { q:"'She __ going to school.' – Fill in:", opts:["is","are","am","were"], ans:0, exp:"'She' is third person singular, so we use 'is'. She is going to school! ✏️", subject:"English", chapter:"Grammar – Verbs and Tenses" },

  { q:"An adjective is a word that:", opts:["Describes a noun","Shows action","Joins sentences","Names a place"], ans:0, exp:"Adjectives describe nouns: a RED apple, a TALL boy, a HAPPY child! 🎨", subject:"English", chapter:"Grammar – Adjectives" },
  { q:"In 'The big dog barked', the adjective is:", opts:["Big","Dog","Barked","The"], ans:0, exp:"'Big' describes the dog – it tells us what kind of dog! 🐕", subject:"English", chapter:"Grammar – Adjectives" },
  { q:"Comparative degree of 'good' is:", opts:["Better","Gooder","Best","More good"], ans:0, exp:"Good → Better → Best are irregular degrees of comparison! ⭐", subject:"English", chapter:"Grammar – Adjectives" },

  { q:"'He, she, it' are:", opts:["Pronouns","Nouns","Verbs","Adjectives"], ans:0, exp:"Pronouns replace nouns. Instead of 'Ram', we say 'He' 🔄", subject:"English", chapter:"Grammar – Pronouns" },
  { q:"The subject pronoun for 'Ram and I' when we become the subject:", opts:["We","Us","Our","They"], ans:0, exp:"Ram and I = We (subject pronoun). We went to school. 🏫", subject:"English", chapter:"Grammar – Pronouns" },

  // ---- SOCIAL SCIENCE ----
  { q:"Who wrote the Prithviraj Raso?", opts:["Chand Bardai","Kalhana","Amir Khusrau","Tulsidas"], ans:0, exp:"Chand Bardai wrote Prithviraj Raso, a poem about Prithviraj Chauhan! 📜", subject:"SST", chapter:"Tracing Changes Through Thousand Years" },
  { q:"The Rashtrakutas were a dynasty from:", opts:["Deccan","Bengal","Kashmir","Rajasthan"], ans:0, exp:"The Rashtrakutas ruled from the Deccan (South India) region! 🏯", subject:"SST", chapter:"New Kings and Kingdoms" },
  { q:"The first Battle of Panipat was fought in:", opts:["1526","1556","1761","1192"], ans:0, exp:"Babur defeated Ibrahim Lodi in the First Battle of Panipat in 1526 CE! ⚔️", subject:"SST", chapter:"The Mughal Empire" },
  { q:"Who built the Taj Mahal?", opts:["Shah Jahan","Akbar","Aurangzeb","Jahangir"], ans:0, exp:"Shah Jahan built the Taj Mahal in memory of his wife Mumtaz Mahal 💎", subject:"SST", chapter:"The Mughal Empire" },
  { q:"Akbar followed a policy of:", opts:["Religious tolerance","Religious intolerance","Isolation","Expansion only"], ans:0, exp:"Akbar was known for Sul-i-kul (peace with all) – religious tolerance! 🕊️", subject:"SST", chapter:"The Mughal Empire" },
  { q:"The innermost layer of the Earth is called:", opts:["Core","Mantle","Crust","Lithosphere"], ans:0, exp:"The innermost layer is the Core, then Mantle, and finally the Crust on the outside! 🌍", subject:"SST", chapter:"Inside Our Earth" },
  { q:"Earthquakes are recorded by:", opts:["Seismograph","Barometer","Thermometer","Anemometer"], ans:0, exp:"A Seismograph detects and records earthquake waves! 📈", subject:"SST", chapter:"Our Changing Earth" },
  { q:"India is a:", opts:["Democracy","Monarchy","Dictatorship","Oligarchy"], ans:0, exp:"India is the world's largest Democracy! Citizens choose their leaders 🗳️", subject:"SST", chapter:"Democracy – Equality and Justice" },
  { q:"Universal Adult Franchise means:", opts:["Every adult can vote","Only educated can vote","Only rich can vote","Only men can vote"], ans:0, exp:"Universal Adult Franchise = every citizen above 18 gets to vote, regardless of wealth or gender! ✅", subject:"SST", chapter:"Democracy – Equality and Justice" },
  { q:"The head of the State Government is the:", opts:["Chief Minister","Governor","Prime Minister","President"], ans:0, exp:"The Chief Minister is the real head of the State Government! 🏛️", subject:"SST", chapter:"State Government" }
];

// =====================================================
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

function showPage(id) {
  document.querySelectorAll('.hero, .page').forEach(el => el.style.display = 'none');
  const el = document.getElementById(id);
  if (el) el.style.display = 'block';
  if (id === 'page-progress') renderProgress();
  if (id === 'page-tutor') { checkApiKeyBanner(); renderKeyBadge(); }
  window.scrollTo(0, 0);
}

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

// ---- Shared system prompt ----
const SYSTEM_PROMPT = `You are "Study Buddy", a friendly and encouraging AI tutor for Class 7 CBSE students (age 12-13) in India.

Your job:
- Explain concepts clearly in very simple, kid-friendly language
- Use emojis to make answers fun and engaging 🌟
- Keep answers concise but complete (100-200 words max)
- Use bullet points or numbered steps when explaining processes
- Always relate to NCERT Class 7 syllabus topics
- Be encouraging and positive — say things like "Great question!" or "You've got this! 💪"
- Use relevant Indian examples when possible (e.g., rupees for maths, Indian history for SST)
- If the question is off-topic or inappropriate, gently redirect to studies

Subjects: Mathematics, Science, English, Social Science (History, Geography, Civics)
Format: readable HTML only — use <b> for bold, <br> for line breaks. No markdown.`;

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
  addChatMsg(`🎉 <b>${cfg.logo} ${cfg.name}</b> is now active! Ask me anything about your Class 7 subjects! 📚`, 'bot');
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
        system: SYSTEM_PROMPT,
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
    { role: 'system', content: SYSTEM_PROMPT },
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
        { role: 'user',  parts: [{ text: SYSTEM_PROMPT + '\n\nNow answer this question: ' + question }] }
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
// SECTION 8: QUIZ SETUP
// =====================================================

let selectedSubject = 'Math';
let selectedChapter = null;
let currentQuizQuestions = [];
let currentQIndex = 0;
let quizScore = 0;
let quizMode = 'chapter'; // 'chapter' | 'daily' | 'mock'

function selectSubject(subj, btn) {
  selectedSubject = subj;
  selectedChapter = null;
  document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderChapters();
  document.getElementById('quiz-start-row').style.display = 'none';
}

function renderChapters() {
  const grid = document.getElementById('chapter-grid');
  const chapters = CHAPTERS[selectedSubject];
  grid.innerHTML = chapters.map((ch, i) =>
    `<button class="chap-btn" onclick="selectChapter('${ch}', this)">${ch}</button>`
  ).join('');
}

function selectChapter(ch, btn) {
  selectedChapter = ch;
  document.querySelectorAll('.chap-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const row = document.getElementById('quiz-start-row');
  row.style.display = 'block';
  document.getElementById('selected-info').textContent = `📚 ${selectedSubject} › ${ch} — 5 MCQ questions`;
}

// =====================================================
// SECTION 9: GENERATE QUIZ
// =====================================================

function generateQuiz() {
  quizMode = 'chapter';
  // Filter questions by subject and chapter (fall back to subject only if not enough)
  let pool = QUESTION_BANK.filter(q => q.subject === selectedSubject && q.chapter === selectedChapter);
  if (pool.length < 5) {
    pool = [...pool, ...QUESTION_BANK.filter(q => q.subject === selectedSubject && q.chapter !== selectedChapter)];
  }
  if (pool.length < 5) pool = [...pool, ...QUESTION_BANK.filter(q => q.subject === selectedSubject)];
  pool = pool.slice(0, 20);
  currentQuizQuestions = shuffle(pool).slice(0, 5);
  currentQIndex = 0;
  quizScore = 0;

  document.getElementById('quiz-setup').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-play').style.display = 'block';
  renderQuestion();
}

function generateDailyPractice() {
  quizMode = 'daily';
  const pool = shuffle([...QUESTION_BANK]);
  currentQuizQuestions = pool.slice(0, 10);
  currentQIndex = 0;
  quizScore = 0;
  renderDailyQuestion();
}

function startDaily() {
  showPage('page-daily');
  generateDailyPractice();
}

// =====================================================
// SECTION 10: RENDER QUIZ QUESTION
// =====================================================

function renderQuestion() {
  const q = currentQuizQuestions[currentQIndex];
  const total = currentQuizQuestions.length;
  const pct = (currentQIndex / total) * 100;

  document.getElementById('qpf').style.width = pct + '%';
  document.getElementById('quiz-counter').textContent = `Question ${currentQIndex+1} of ${total}`;
  document.getElementById('quiz-feedback').style.display = 'none';
  document.getElementById('next-btn').style.display = 'none';

  document.getElementById('question-card').innerHTML = `
    <div class="q-subject-tag">📚 ${q.subject} › ${q.chapter}</div>
    <div>${q.q}</div>
  `;

  const labels = ['A','B','C','D'];
  document.getElementById('options-grid').innerHTML = q.opts.map((opt, i) =>
    `<button class="option-btn" onclick="checkAnswer(${i})" id="opt-${i}">
      <span class="opt-label">${labels[i]}</span> ${opt}
    </button>`
  ).join('');
}

function checkAnswer(chosen) {
  const q = currentQuizQuestions[currentQIndex];
  const isCorrect = chosen === q.ans;

  // Disable all options
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans)   btn.classList.add('correct');
    if (i === chosen && !isCorrect) btn.classList.add('wrong');
  });

  const fb = document.getElementById('quiz-feedback');
  fb.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');
  if (isCorrect) {
    quizScore++;
    fb.innerHTML = `✅ Correct! Great job! 🌟<br><small>💡 ${q.exp}</small>`;
    showToast(getEncouragement(true));
  } else {
    fb.innerHTML = `❌ Not quite! The answer was <b>${q.opts[q.ans]}</b>.<br><small>💡 ${q.exp}</small>`;
    showToast(getEncouragement(false));
  }
  fb.style.display = 'block';
  document.getElementById('next-btn').style.display = 'block';

  // Update global progress
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
  const q = currentQuizQuestions[dailyIndex];
  const total = currentQuizQuestions.length;
  const pct = (dailyIndex / total) * 100;

  document.getElementById('dpf').style.width = pct + '%';
  document.getElementById('daily-counter').textContent = `Question ${dailyIndex+1} of ${total}`;
  document.getElementById('daily-feedback').style.display = 'none';
  document.getElementById('daily-next-btn').style.display = 'none';
  document.getElementById('daily-result').style.display = 'none';

  document.getElementById('daily-question-card').innerHTML = `
    <div class="q-subject-tag">📚 ${q.subject}</div>
    <div>${q.q}</div>
  `;

  const labels = ['A','B','C','D'];
  document.getElementById('daily-options-grid').innerHTML = q.opts.map((opt, i) =>
    `<button class="option-btn" onclick="checkDailyAnswer(${i})" id="dopt-${i}">
      <span class="opt-label">${labels[i]}</span> ${opt}
    </button>`
  ).join('');
}

function checkDailyAnswer(chosen) {
  const q = currentQuizQuestions[dailyIndex];
  const isCorrect = chosen === q.ans;

  document.querySelectorAll('#daily-options-grid .option-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans)   btn.classList.add('correct');
    if (i === chosen && !isCorrect) btn.classList.add('wrong');
  });

  const fb = document.getElementById('daily-feedback');
  fb.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');
  if (isCorrect) {
    dailyScore++;
    fb.innerHTML = `✅ Correct! 🌟<br><small>💡 ${q.exp}</small>`;
  } else {
    fb.innerHTML = `❌ The answer was <b>${q.opts[q.ans]}</b>.<br><small>💡 ${q.exp}</small>`;
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

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
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
// SECTION 15: INIT
// =====================================================

// Render a small status badge in tutor header
function renderKeyBadge() {
  const row = document.getElementById('key-badge-row');
  if (!row) return;
  const provider = getProvider();
  const cfg      = AI_PROVIDERS[provider];
  const hasKey   = !!getApiKey(provider);
  row.innerHTML  = hasKey
    ? `<span class="key-status" style="background:#d1fae5;border-color:#10b981;color:#065f46">
         ✅ ${cfg.logo} ${cfg.name} Active &nbsp;·&nbsp;
         <span style="text-decoration:underline;cursor:pointer" onclick="switchProvider('${provider}')">Switch AI</span>
       </span>`
    : `<span class="key-status no-key">❌ No API Key — offline mode &nbsp;·&nbsp;
         <span style="text-decoration:underline;cursor:pointer" onclick="checkApiKeyBanner()">Add Key</span>
       </span>`;
}

function init() {
  updateNavScore();
  updateHomeStats();
  renderChapters();
}

// Run on load
window.addEventListener('DOMContentLoaded', init);
