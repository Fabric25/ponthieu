# Ponthieu Legal Group Landing Page

A responsive marketing site for the fictitious Ponthieu Legal Group, now powered by Next.js. The layout highlights the firm’s expertise with a hero section, consultation form, practice area cards, client testimonials, and a closing call to action.

## Project structure
- `app/layout.jsx` — Global document shell that registers metadata and loads shared styles.
- `app/page.jsx` — Server component that renders the full landing page experience.
- `app/globals.css` — Global resets, typography, and component styles.
- `public/` — Static assets served verbatim (favicons, images, etc.).
- `next.config.mjs` — Framework configuration (left empty for now but ready for tweaks).

## Prerequisites
- Node.js 18.17 or newer (Node 20+ recommended)
- npm 9 or newer (bundled with recent Node releases)
- Git (to clone the repository)

## Getting started locally
1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-account>/ponthieu.git
   cd ponthieu/law-firm-landing
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   ```
   Next.js will print a local URL (typically `http://localhost:3000`). Open it in your browser to work with hot reload and React Server Components.

## Working in VS Code
1. Open the folder: **File → Open Folder...** and choose `ponthieu/law-firm-landing`.
2. If prompted, install the recommended extensions (ESLint + Prettier). The Next.js ESLint config is already wired up.
3. Use the integrated terminal (`Ctrl + backtick`) to run the scripts above while you edit files in the `app/` directory.

## Available scripts
- `npm run dev` — Start the Next.js dev server with fast refresh.
- `npm run build` — Create an optimized production build in `.next/`.
- `npm run start` — Serve the production build locally.
- `npm run lint` — Run ESLint using the `next/core-web-vitals` ruleset.

## Customisation tips
- Update copy or add new sections in `app/page.jsx`.
- Adjust colors, spacing, or typography tokens in `app/globals.css`.
- Replace placeholder contact details and email addresses before going live.

## Deployment
Deploying to Vercel is the quickest option for Next.js:
1. Push your branch to GitHub (see below).
2. Import the repository in Vercel, keeping the default build command (`next build`) and output directory (`.next`).
3. Every push to the tracked branch will trigger a new deployment.

Other platforms that support Node.js runtimes (Netlify, Render, etc.) also work—just make sure they run `npm run build` and start with `npm run start`.

## Publishing your changes to GitHub
If you have cloned this project locally but do not see the files in your GitHub repository yet, make sure the commits have been pushed to a remote:

1. Create a repository on GitHub (or open the existing one you want to use).
2. In VS Code’s terminal, add the GitHub repository as a remote (replace `<your-account>` and `<repo>`):
   ```bash
   git remote add origin https://github.com/<your-account>/<repo>.git
   ```
3. Push the current branch and set it to track the remote branch:
   ```bash
   git push -u origin work
   ```
   If you are on a different branch name, substitute `work` with the branch you are using.
4. Refresh the repository page on GitHub. All files tracked by Git in this project, including the updated Next.js code, will now appear in the web UI.

> **Tip:** You can push again later with `git push` after making additional commits.
