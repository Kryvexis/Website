# NEW_WEBSITE - GitHub + Vercel Starter

This is a futuristic landing page starter built from scratch with Next.js 14 and Framer Motion, based on the uploaded concept brief.

## Folder path
C:\dev\NEW_WEBSITE

## CMD prompts from start to finish

### 1) Go to your dev folder
```cmd
cd /d C:\dev
```

### 2) Create the folder and open it
```cmd
mkdir NEW_WEBSITE
cd NEW_WEBSITE
```

### 3) Extract the ZIP into this folder
Make sure files like these exist after extraction:
- package.json
- app\page.js
- app\layout.js
- app\globals.css
- components\ShockwaveButton.jsx

### 4) Install dependencies
```cmd
npm install
```

### 5) Run the site locally
```cmd
npm run dev
```
Then open `http://localhost:3000`

### 6) Initialize Git
```cmd
git init
git add .
git commit -m "Initial futuristic website build"
```

### 7) Connect GitHub repo
```cmd
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/NEW_WEBSITE.git
git push -u origin main
```

### 8) Deploy to Vercel with CLI
```cmd
npm i -g vercel
vercel
vercel --prod
```

## Quick update workflow later
```cmd
cd /d C:\dev\NEW_WEBSITE
git add .
git commit -m "Update site"
git push
```
