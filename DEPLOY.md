# Deployment Guide

## Hosting options (free, zero server)

| Option | URL | Auto-deploy | Custom domain |
|---|---|---|---|
| **GitHub Pages** ✅ recommended | `username.github.io/study-buddy` | Yes (on push) | Yes (free) |
| **Vercel** | `study-buddy.vercel.app` | Yes | Yes |
| **Netlify** | `study-buddy.netlify.app` | Yes | Yes |
| **Cloudflare Pages** | `study-buddy.pages.dev` | Yes | Yes |

All four are completely free for a static site. GitHub Pages is the simplest if you're already using GitHub.

---

## GitHub Pages — step by step

### 1. Create a GitHub account
Go to https://github.com and sign up (free).

### 2. Create a new repository
- Click **New repository**
- Name it `study-buddy` (or anything you like)
- Set it to **Public**
- Do NOT add README, .gitignore, or license yet (you already have files)
- Click **Create repository**

### 3. Push your code
Open a terminal in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/study-buddy.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

### 4. Enable GitHub Pages
- Go to your repository on GitHub
- Click **Settings** → **Pages** (left sidebar)
- Under **Source**, select **GitHub Actions**
- That's it — the workflow file at `.github/workflows/deploy.yml` handles everything

### 5. Your site is live
After the first push, GitHub Actions will run (takes about 1–2 minutes).
Your site will be at: `https://YOUR-USERNAME.github.io/study-buddy`

You can watch the deployment progress under the **Actions** tab.

### 6. Future updates
Every time you push to `main`, the site updates automatically within ~1 minute:
```bash
git add .
git commit -m "Update questions"
git push
```

---

## Custom domain (optional)

1. Buy a domain (e.g. `studybuddy.school`) from any registrar (~₹800/year)
2. In your registrar's DNS settings, add a CNAME record:
   - Name: `www`
   - Value: `YOUR-USERNAME.github.io`
3. In GitHub → Settings → Pages → Custom domain, enter your domain
4. Check **Enforce HTTPS** (free SSL from GitHub)

---

## Supabase setup (for multi-institute features)

Supabase provides the database, authentication, and file storage. It is completely free for up to 50,000 monthly active users.

### 1. Create a Supabase project
- Go to https://supabase.com and sign up (free)
- Click **New Project**
- Choose a name (e.g. `study-buddy-db`), set a database password, choose the region closest to India (Mumbai or Singapore)
- Wait ~2 minutes for the project to be created

### 2. Run the database schema
- In your Supabase dashboard, go to **SQL Editor** → **New Query**
- Open the file `supabase/schema.sql` from this project
- Paste the entire contents and click **Run**
- All tables, RLS policies, and views will be created

### 3. Get your API credentials
- Go to **Settings** → **API**
- Copy the **Project URL** (e.g. `https://abcdefgh.supabase.co`)
- Copy the **anon/public** key (the long string starting with `eyJ...`)
- **Never copy the service_role key** — that one is secret

### 4. Add credentials to supabase.js
Open `supabase.js` and fill in lines 12–13:

```javascript
const SUPABASE_URL  = 'https://YOUR-PROJECT.supabase.co';
const SUPABASE_ANON = 'eyJ...your-anon-key...';
```

Then commit and push. The app will now use Supabase for auth, branding, and data sync.

### 5. Register your first school (self-service)

No SQL needed. Open this URL in a browser:

```
https://YOUR-USERNAME.github.io/study-buddy/register.html
```

Fill in the form — school name, address, contact details, colours, and your admin email. Click **Register School**. The app will:

1. Create the institute row in the database automatically
2. Generate a unique URL for your school: `…/index.html?institute=green-valley-school`
3. Send a magic link to your admin email

Click the magic link in your email — you land back on the app as a fully activated admin. The **Admin Panel ⚙️** card will appear on the home screen.

### 6. Adding more schools

Same process — each school visits `/register.html` and fills in their own form. Every school gets their own isolated URL and data. No manual SQL, no involvement from you.

**Sharing with students and teachers:**
- Give each school their URL: `…/index.html?institute=their-slug`
- Students just open the URL — **no sign-in required**. The app loads with their school's branding automatically
- Teachers sign in via their email magic link to access the Teacher Review panel
- Admins sign in to access the Admin Panel

**QR code tip:** generate a QR code for the school URL at https://qr.io and print it on the notice board. Students scan it and the app opens with their school's branding.


---

## App URL strategies for multiple schools

### Option A — URL parameter ✅ built in
Each school gets a unique URL — this is already handled automatically:
```
https://YOUR-USERNAME.github.io/study-buddy/index.html?institute=green-valley-school
```

`supabase.js` reads the `?institute=` parameter on every page load, fetches that school's branding from Supabase, and applies it instantly — no login needed, works for students. Generated automatically by `/register.html`.

### Option B — Subdomain per school (requires Vercel/Netlify)
```
green-valley.studybuddy.in
sunrise-academy.studybuddy.in
```
Each subdomain points to the same static site; branding loads based on hostname.

### Option C — QR code (easiest for students)
Generate a QR code for the URL above and print it on the school's notice board. Students scan it and the app loads with the school's branding.

---

## Offline behaviour

The app works fully offline — no internet required for:
- Practice quiz, daily practice, mock exam, term exam, annual exam
- Viewing progress and achievements
- Downloading exam PDFs
- All question banks (stored in browser localStorage)

When internet is restored, any exam results taken offline automatically sync to Supabase in the background. A sync badge in the topbar shows the status.

---

## File structure

```
study-buddy/
├── index.html              ← App layout, all pages
├── style.css               ← All styles
├── script.js               ← App logic, quiz engine, exam
├── i18n.js                 ← Translations (EN / HI / GU)
├── supabase.js             ← Database, auth, sync, branding, review
├── manifest.json           ← PWA manifest (installable on phones)
├── class7_questions.csv    ← 2368 sample questions
├── supabase/
│   └── schema.sql          ← Run once in Supabase SQL Editor
├── .github/
│   └── workflows/
│       └── deploy.yml      ← Auto-deploy to GitHub Pages
├── icons/                  ← Add icon-192.png and icon-512.png here
│   ├── icon-192.png
│   └── icon-512.png
└── DEPLOY.md               ← This file
```

---

## PWA — install on phones

The app can be installed as a standalone app on Android and iPhone:

1. Open the site in Chrome (Android) or Safari (iPhone)
2. Android: tap the browser menu → **Add to Home Screen**
3. iPhone: tap the Share button → **Add to Home Screen**

To make this work, add icon files:
- `icons/icon-192.png` — 192×192 px PNG of your app icon
- `icons/icon-512.png` — 512×512 px PNG

You can use any free icon generator (e.g. https://favicon.io) to create these from an emoji or image.

---

## Vercel (alternative to GitHub Pages)

If you prefer Vercel (slightly faster CDN, better analytics):

1. Go to https://vercel.com and sign up with your GitHub account
2. Click **New Project** → Import your `study-buddy` repository
3. Leave all settings as default (no build command needed for a static site)
4. Click **Deploy**

Done. Every push to `main` auto-deploys in ~30 seconds.
