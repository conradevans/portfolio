# Conrad Evans — Software Engineering Portfolio

A responsive React/Vite portfolio focused on software engineering recruiting. It is designed to replace the previous static `conradevans.github.io/portfolio/` site.

## Included

- Responsive one-page portfolio
- Dark/light theme toggle
- Featured projects: Golf Mullet, HiberGator, WAD File System
- Additional projects: Minesweeper, Sudoku
- Skills, education, tutoring experience, contact section
- Current resume bundled at `public/Conrad-Evans-Resume.pdf`
- GitHub Pages deployment workflow
- Vercel-compatible Vite project

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to the existing GitHub Pages portfolio repo

1. Replace the contents of your current `portfolio` repository with this project.
2. Commit and push to `main`.
3. In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. The included workflow will build and publish the site.

`vite.config.js` uses a relative base (`./`), so the build works under the `/portfolio/` GitHub Pages path and can also be deployed on Vercel.

## Before you publish

- Confirm the resume PDF is the exact version you want public.
- If you create a clean public repo for the WAD File System, add its link in `src/App.jsx`.
- If you have a clean public Minesweeper repo or screenshots, add them later; the site does not need them to launch.
- Consider cleaning the Golf Mullet repository READMEs before sending recruiters there.
