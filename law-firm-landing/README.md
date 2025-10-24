# Ponthieu Legal Group Landing Page

A responsive React single-page experience tailored for the fictitious Ponthieu Legal Group. The layout highlights the firm’s expertise with a hero section, consultation form, practice area cards, client testimonials, and a closing call to action.

## Project structure
- `src/App.jsx` &mdash; Page content and section markup for the landing page.
- `src/App.css` &mdash; Component-specific styles including responsive breakpoints and theme tokens.
- `src/index.css` &mdash; Global resets, font imports, and utility styles.
- `public/` &mdash; Static assets served as-is (favicons, images, etc.).

## Prerequisites
- Node.js 18 or newer (Node 20+ recommended)
- npm 9 or newer (ships with recent Node releases)
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
   Vite will display a local URL (typically `http://localhost:5173`). Open it in your browser to see the page with hot reload.

## Working in VS Code
1. Open the folder: **File &rarr; Open Folder...** and choose `ponthieu/law-firm-landing`.
2. VS Code will detect the Vite project. If prompted, install the recommended extensions (ESLint + Prettier).
3. Use the integrated terminal (`Ctrl + backtick`) to run the scripts above while you edit components under `src/`.

## Available scripts
- `npm run dev` &mdash; Start the Vite development server with hot module replacement.
- `npm run build` &mdash; Create an optimized production bundle in `dist/`.
- `npm run preview` &mdash; Serve the production build locally for smoke testing.
- `npm run lint` &mdash; Run ESLint using the configuration in `eslint.config.js`.

## Customisation tips
- Update copy or add new sections in `src/App.jsx`.
- Adjust colors, spacing, or typography tokens inside `src/App.css`.
- Replace placeholder contact details and email addresses before going live.

## Deployment
Any static hosting platform that supports Vite builds will work:
1. Run `npm run build`.
2. Deploy the contents of the generated `dist/` folder to your hosting provider (Netlify, Vercel, GitHub Pages, etc.).
