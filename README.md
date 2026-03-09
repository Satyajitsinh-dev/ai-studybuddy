# 🤖 AI Study Buddy – Class 7 CBSE

A **completely free**, browser-based AI-powered study app for Class 7 CBSE students.  
No server. No installation. Just open `index.html` and start learning!

---

## ✨ Features at a Glance

| Feature | Description |
|---|---|
| 💬 AI Tutor | Ask any question — powered by Claude, ChatGPT, or Gemini |
| 📝 Practice Quiz | Subject + chapter-wise MCQ quiz (choose 5–20 questions) |
| ☀️ Daily Practice | 10 mixed questions — filter by subject or go All Subjects |
| 🎓 Mock Exam | Full exam: 5 MCQ + 3 Short + 2 Long answer questions |
| 📊 Progress Tracker | Score, accuracy, streaks, subject bars, achievements |
| 📂 Question Bank Manager | Upload your own questions via CSV — stored in browser |

---

## 🚀 How to Run Locally

1. Download / clone this folder
2. Make sure all **4 files** are in the **same folder**:
   ```
   index.html
   style.css
   script.js
   README.md
   ```
3. Double-click `index.html` — opens instantly in your browser!

> No internet needed after the first load (Google Fonts load on first visit, but the app works offline too).

---

## 🌐 Free Hosting Options

### GitHub Pages (Recommended)
1. Create a free account at [github.com](https://github.com)
2. Click **New Repository** → name it `study-buddy`
3. Upload all files (`index.html`, `style.css`, `script.js`)
4. Go to **Settings → Pages**
5. Set Source → **Deploy from branch → main → / (root)**
6. Your app goes live at:
   ```
   https://YOUR-USERNAME.github.io/study-buddy
   ```

### Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Click **Add New Project** → drag & drop your folder
3. Click Deploy → live in 30 seconds!

### Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Drag & drop your folder onto the Netlify dashboard
3. Done — instant free hosting!

---

## 🤖 AI Tutor Setup

The AI Tutor supports **3 AI providers**. You can save keys for all three and switch between them anytime.

### Supported Providers

| Provider | Model Used | Free Tier | Get Key |
|---|---|---|---|
| 🟣 **Claude** (Anthropic) | claude-sonnet-4-20250514 | Limited free tier | [console.anthropic.com](https://console.anthropic.com) |
| 🟢 **ChatGPT** (OpenAI) | gpt-4o-mini | Limited free tier | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |
| 🔵 **Gemini** (Google) | gemini-2.0-flash | **1,500 req/day FREE** ✅ | [aistudio.google.com](https://aistudio.google.com/app/apikey) |

> 💡 **Best free option: Google Gemini** — 1,500 requests/day, no credit card required.

### How to Add Your API Key
1. Open the app → click **💬 Ask AI Tutor**
2. A setup panel appears at the top
3. Click the provider tab (Claude / ChatGPT / Gemini)
4. Paste your API key → click **Save 🔑**
5. Your key is saved in your browser's localStorage — never sent anywhere else

### No API Key?
The app still works in **offline mode** using a built-in knowledge base covering all major Class 7 CBSE topics.

---

## 📂 Question Bank Manager (CSV Upload)

You can add unlimited custom questions by uploading CSV files.

### CSV Format

Your CSV file must have these column headers (in any order):

```
question, option_a, option_b, option_c, option_d, correct_answer, explanation, subject, chapter
```

| Column | Required | Description |
|---|---|---|
| `question` | ✅ Yes | The question text |
| `option_a` | ✅ Yes | Choice A |
| `option_b` | ✅ Yes | Choice B |
| `option_c` | ✅ Yes | Choice C |
| `option_d` | ✅ Yes | Choice D |
| `correct_answer` | ✅ Yes | Must be **A**, **B**, **C**, or **D** |
| `explanation` | Optional | Brief explanation shown after answering |
| `subject` | Optional | Subject name (e.g. Math, Science, Hindi) |
| `chapter` | Optional | Chapter name |

### Example CSV Content

```csv
question,option_a,option_b,option_c,option_d,correct_answer,explanation,subject,chapter
What is 5 × 6?,25,30,35,40,B,5 multiplied by 6 equals 30,Math,Multiplication
Which planet is closest to the Sun?,Venus,Earth,Mercury,Mars,C,Mercury is the closest planet,Science,Solar System
What is the plural of child?,Childs,Childes,Children,Childrens,C,Irregular plural — becomes Children,English,Grammar
```

### How to Upload
1. Click **📂 Question Bank** on the home screen
2. Drag & drop your CSV file onto the upload area, or click to browse
3. Preview your questions before saving
4. Give the bank a name (e.g. "Science Term 2") and click **Save**
5. New subjects and chapters appear automatically in all quiz modes!

### Tips
- You can upload **multiple CSV files** — each becomes a separate named bank
- Downloaded questions are saved in **browser localStorage** — they persist across sessions
- Click **⬇️ Download Sample CSV** in the app to get a ready-to-fill template
- Delete any bank at any time from the manager page
- Subject names from your CSV (e.g. "Hindi", "Computer Science") automatically become new tabs in the quiz and daily practice screens

---

## 📚 Built-in CBSE Class 7 Content

### Subjects & Chapters

**➕ Mathematics**
Integers · Fractions and Decimals · Data Handling · Simple Equations · Lines and Angles · The Triangle · Congruence of Triangles · Comparing Quantities · Rational Numbers · Practical Geometry · Perimeter and Area · Algebraic Expressions

**🔬 Science**
Nutrition in Plants · Nutrition in Animals · Fibre to Fabric · Heat · Acids Bases and Salts · Physical and Chemical Changes · Weather Climate and Adaptations · Winds Storms and Cyclones · Soil · Respiration in Organisms · Transportation in Animals and Plants · Reproduction in Plants

**📖 English**
Grammar – Nouns · Grammar – Verbs and Tenses · Grammar – Adjectives · Grammar – Pronouns · Reading Comprehension · Writing Skills – Letters · Writing Skills – Essays · Poem Appreciation

**🌍 Social Science**
Tracing Changes Through Thousand Years · New Kings and Kingdoms · The Sultans of Delhi · The Mughal Empire · Inside Our Earth · Our Changing Earth · Our Environment · Democracy – Equality and Justice · State Government · Markets Around Us

---

## 🎮 How Each Feature Works

### 📝 Practice Quiz
1. Open Practice Quiz from the home screen
2. Select a **subject tab** (or All Subjects 🌈)
3. Select a **chapter** (or All Chapters)
4. Choose how many questions: **5, 10, 15, or 20**
5. Click **Start Quiz** → answer MCQs with instant feedback

### ☀️ Daily Practice
1. Click Daily Practice from the home screen
2. Use the **subject filter tabs** to focus on one subject or pick All Subjects
3. Answer 10 random questions — score tracked automatically

### 🎓 Mock Exam
- Auto-generates a full paper: **5 MCQ + 3 Short Answer + 2 Long Answer**
- MCQ answers are auto-scored
- Written answers are estimated by length (have your teacher check!)
- Gives an estimated grade (A+/A/B/C/D)

### 📊 Progress Tracker
- Tracks total attempts, correct answers, accuracy %, and streak
- Subject-wise breakdown with progress bars
- 10 unlockable achievements (First Step, 5 Streak, Science Star, etc.)
- All data saved in browser localStorage — persists across sessions
- Reset button to start fresh

---

## ➕ How to Add More Questions

### Option 1: Upload a CSV (Recommended)
Use the **📂 Question Bank Manager** — no coding needed!

### Option 2: Edit the Code
Open `script.js` and find the `QUESTION_BANK` array. Add:

```javascript
{
  q: "Your question here?",
  opts: ["Option A", "Option B", "Option C", "Option D"],
  ans: 0,       // 0=A, 1=B, 2=C, 3=D
  exp: "Short explanation! 🎯",
  subject: "Math",       // Must match a subject name
  chapter: "Integers"    // Chapter name
}
```

### Add a New AI Tutor Topic (offline mode)
Find `TUTOR_KB` in `script.js` and add:

```javascript
{
  keys: ["keyword1", "keyword2"],
  answer: `Your HTML explanation with <b>bold</b> and emojis! 🌟`
}
```

---

## 📁 File Structure

```
AI-Study-Buddy/
├── index.html   ← App layout, all page sections
├── style.css    ← All styles, colors, animations
├── script.js    ← All logic, question bank, AI tutor, CSV manager
└── README.md    ← This file
```

### Key Sections in script.js

| Section | What it does |
|---|---|
| SECTION 1 | CBSE Chapter definitions |
| SECTION 2 | Built-in question bank (60+ questions) |
| SECTION 3 | AI Tutor offline knowledge base |
| SECTION 7 | AI Tutor — Claude / ChatGPT / Gemini API calls |
| SECTION 8 | Quiz setup, subject tabs, chapter rendering |
| SECTION 9 | Quiz generation & daily practice |
| SECTION 10 | Quiz question rendering & answer checking |
| SECTION 11 | Daily practice logic |
| SECTION 12 | Mock exam generation & scoring |
| SECTION 13 | Progress tracker & achievements |
| SECTION 14b | CSV upload, parse, save, manage |

---

## 🎨 Customisation Tips

- **Change color scheme**: Edit CSS variables at the top of `style.css`
  ```css
  :root {
    --clr-primary:  #4f46e5;  /* Main purple */
    --clr-accent:   #f59e0b;  /* Gold accent */
    --clr-green:    #10b981;
  }
  ```
- **Add a new subject emoji**: Add to `SUBJECT_EMOJI` in `script.js`
  ```javascript
  const SUBJECT_EMOJI = { Math:'➕', Science:'🔬', Hindi:'🇮🇳', ... };
  ```
- **Change question count options**: Edit the `<select>` in `index.html` inside `#quiz-start-row`
- **Unlock new achievements**: Add to `checkAchievements()` in `script.js`

---

## 🔒 Privacy & Data

- **All data stays in your browser** — nothing is sent to any server except your chosen AI provider
- API keys are stored in `localStorage` and never logged or shared
- Progress, quiz scores, and uploaded question banks are all stored locally in `localStorage`
- Clearing your browser data will reset everything

---

## 🆘 Troubleshooting

| Problem | Fix |
|---|---|
| AI Tutor not responding | Check your API key is correct and you have internet |
| "No questions found" on quiz | Upload a CSV or pick a different subject/chapter |
| CSV upload not working | Check column headers match exactly (see format above) |
| Progress not saving | Make sure your browser allows localStorage (not in incognito) |
| App looks broken | Make sure all 3 files are in the same folder |

---

Made with ❤️ for young learners. Completely free, forever.
