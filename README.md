# Mao-Chang Ku — Academic CV Website

This repository contains the source for my academic homepage hosted at [kumaochang.github.io](https://kumaochang.github.io/). The site is built with [Hugo](https://gohugo.io/) using the Hugo Blox Academic CV template and is deployed automatically to GitHub Pages.

## Local Development

```bash
pnpm install
pnpm dev
```

The development server runs at `http://localhost:1313/` and rebuilds whenever content changes.

## Build & Deploy

- `pnpm build` creates the production build in the `public/` folder.
- GitHub Actions (see `.github/workflows/`) build the site and publish it to GitHub Pages on every push to `main`.

## Content Structure

- `content/` holds pages such as the homepage, bio, papers, and publications.
- `data/authors/` stores profile data for the homepage hero block.
- `assets/css/` contains custom styling, including reference list formatting.
- `static/uploads/` contains downloadable assets like my résumé.

## Contact

Feel free to reach me at [mcku1115@gmail.com](mailto:mcku1115@gmail.com).


