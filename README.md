# luzbone.github.io

Personal website for [luzbone](https://github.com/luzbone), built as a
dependency-light static site (plain HTML, CSS, and JavaScript) and deployed with
GitHub Pages.

## Getting started

Requires [Node.js](https://nodejs.org/) 18+ (the repo is developed on Node 22).

```bash
npm install      # install dev tooling
npm run dev      # start a live-reloading dev server on http://localhost:8080
```

## Scripts

| Command                | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `npm run dev`          | Live-reloading dev server (`live-server`) on port 8080 |
| `npm run serve`        | Static preview server (`http-server`) on port 8080     |
| `npm run format`       | Format all files with Prettier                         |
| `npm run format:check` | Check formatting without writing                       |
| `npm run lint`         | Lint HTML with `html-validate`                         |
| `npm test`             | Run `format:check` and `lint`                          |

## Project structure

```
.
├── index.html          # Home page
├── 404.html            # Custom not-found page
├── assets/
│   ├── css/styles.css  # Styles (light/dark theme)
│   └── js/main.js      # Theme toggle, counter demo, project list
└── .nojekyll           # Serve files as-is (skip Jekyll processing)
```

## Deployment

GitHub Pages serves the contents of the default branch directly. The `.nojekyll`
file disables Jekyll processing so files are published exactly as they are.
