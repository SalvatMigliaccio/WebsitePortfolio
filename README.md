# Portfolio — Salvatore Migliaccio

Personal portfolio website built with **Vite + React 19**, **Tailwind CSS v4**, and **Framer Motion**.

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install dependencies

```bash
npm install
```

### Configure environment variables

Copy the example file and fill in your [EmailJS](https://www.emailjs.com/) credentials:

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

---

## Replace placeholder assets

| File | Purpose |
|---|---|
| `public/cv.pdf` | Your actual CV — replace the placeholder with your real PDF |
| `public/avatar.jpg` | Profile photo — place an `avatar.jpg` here to show it in the About section |

---

## Project Structure

```
src/
├── App.jsx                  # Root component — assembles all sections
├── main.jsx                 # React entry point
├── index.css                # Global styles + Tailwind v4 design tokens (@theme)
├── i18n.js                  # Minimal i18n helper — t(key) reads from translations/en.js
│
├── translations/
│   └── en.js                # All UI strings and content (single source of truth)
│
├── data/
│   ├── projects.js          # Project entries (title, link, deployed, wip flags)
│   └── skills.js            # Skills grouped by category
│
├── hooks/
│   ├── useScrollSpy.js      # IntersectionObserver-based active section tracker
│   └── useScrollPosition.js # Tracks scroll offset for navbar background change
│
├── components/
│   ├── common/
│   │   ├── Button.jsx       # Reusable button (solid / outline variants)
│   │   ├── SectionTitle.jsx # Section heading with decorative underline
│   │   ├── ProjectCard.jsx  # Card for a single project entry
│   │   └── icons.jsx        # Custom SVG icons (GithubIcon, LinkedinIcon)
│   │
│   ├── layout/
│   │   ├── Navbar.jsx       # Sticky navbar with scroll-spy and mobile menu
│   │   └── Footer.jsx       # Footer with social links and CV download
│   │
│   └── sections/
│       ├── Hero.jsx         # Landing section with typewriter and CTA buttons
│       ├── About.jsx        # Bio, education, certifications, work experience, interests
│       ├── Skills.jsx       # Skills grid grouped by category
│       ├── Projects.jsx     # Project cards with live/GitHub links
│       ├── Publications.jsx # Research publications list
│       └── Contact.jsx      # EmailJS contact form + social links
│
public/
├── cv.pdf                   # CV download (replace placeholder with real file)
├── avatar.jpg               # Profile photo (add your own)
└── favicon.svg              # Site favicon
```

---

## Customization

### Add or edit content

All text content lives in **`src/translations/en.js`** — edit strings there without touching component files.

### Add a project

Open `src/data/projects.js` and add an entry to the array:

```js
{
  id: 'myproject',
  translationKey: 'projects.myproject',
  link: 'https://github.com/you/myproject',
  deployed: false,
  wip: false,
}
```

Then add the corresponding keys to `src/translations/en.js`:

```js
'projects.myproject.title': 'My Project',
'projects.myproject.desc': 'Short description.',
'projects.myproject.tags': ['React', 'Node.js'],
```

### Add a publication

Open `src/components/sections/Publications.jsx` and add an object to the `publications` array.

### Design tokens

All colors and fonts are defined as CSS custom properties in `src/index.css` under `@theme`. Change them there to restyle the entire site.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Vite | 6 | Build tool & dev server |
| React | 19 | UI framework |
| Tailwind CSS | v4 | Utility CSS via `@tailwindcss/vite` |
| Framer Motion | 11 | Scroll animations |
| EmailJS | 4 | Contact form (no backend needed) |
| lucide-react | latest | Icons |
| clsx | 2 | Conditional class names |


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
