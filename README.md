# Saagar Arya — Portfolio

Personal portfolio site, live at **https://saagar-arya.github.io/**.

Built with React 19, TypeScript, Chakra UI v3, and Vite 8. Deployed to GitHub Pages
automatically on every push to `main` via `.github/workflows/deploy.yml`.

## Getting started

```bash
npm install
npm run dev        # dev server at http://localhost:5173
```

| Script            | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Vite dev server with hot reload               |
| `npm run build`   | Typecheck (`tsc -b`) then build to `dist/`    |
| `npm run preview` | Serve the production build locally            |
| `npm run lint`    | ESLint over the whole project                 |

## Layout

```
src/
  App.tsx               nav bar + routes
  main.tsx              entry: HashRouter + ChakraProvider
  theme.ts              Chakra system (fonts, global CSS)
  index.css             page background gradient, base typography
  components/
    Gallery.tsx         carousel used by every page
    ProjectPage.tsx     shared shell for the project detail pages
    PagePanels.tsx      the frosted panel wrappers
    ui/                 Chakra v3 composed primitives (tooltip, toaster)
  data/
    site.ts             email, LinkedIn, resume path, nav links
    gallery.ts          builds gallery entries from filenames
  pages/                one file per route
```

Routing uses `HashRouter`, so URLs look like `/#/duke-robotics`. That is deliberate —
GitHub Pages has no server-side rewrite, so a hash route is what survives a direct
visit or refresh on a deep link.

## Adding images

Drop the file in `public/Gallery/` and add its filename to the relevant page:

```ts
const images = galleryImages(['my-new-photo.jpg']);
```

`galleryImages` prefixes `/Gallery/` and derives the alt text from the filename, so
**name files descriptively** — `titanium-top-plate-installed.jpg`, not `IMG_4821.jpg`.
The alt text is what screen readers announce.

Every gallery slide is rendered into a fixed-ratio stage with `object-fit: contain`,
so images of any aspect ratio can be mixed without the carousel changing height.

## Content that goes stale

- `public/Saagar_Arya_Resume_2025_06_07.pdf` — linked from the nav; the filename is
  the version. Update `RESUME_PDF` in `src/data/site.ts` when you replace it.
- Project copy lives inline in `src/pages/*.tsx` and in `projectCards` in `Home.tsx`.
  The Home card and the detail page each carry their own description — keep them in sync.
