# Engineering Leader Portfolio (React + Tailwind)

Modern, responsive portfolio for a engineering leader with 20+ years of experience across SaaS, cloud-native platforms, and AI solutions.

## Tech

- Node.js 22
- React 18 + Vite
- Tailwind CSS
- React Router

## Getting Started

If you are using `nvm`, you can run `nvm use` in the project root to automatically switch to the correct Node.js version.

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Customize

- Colors/fonts: `tailwind.config.cjs`
- SEO/Open Graph: `index.html`
- Analytics: update Plausible `data-domain` in `index.html`
- Pages: `src/pages/*`
- Components: `src/components/*`
- Resume: replace `public/resume.pdf`
- Dashboard images: replace `public/placeholders/*`

## Accessibility & SEO

- Semantic HTML, keyboard-friendly nav, descriptive meta tags

## Deployment

- This project is hosted on Azure: https://jolly-water-0daf7de10.3.azurestaticapps.net/
- Deploy the static build to Netlify/Vercel/GitHub Pages.
