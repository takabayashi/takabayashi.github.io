# Daniel Takabayashi - Bio/Resume Website

[![Deploy to GitHub Pages](https://github.com/takabayashi/takabayashi.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/takabayashi/takabayashi.github.io/actions/workflows/deploy.yml)
[![Release](https://github.com/takabayashi/takabayashi.github.io/actions/workflows/release.yml/badge.svg)](https://github.com/takabayashi/takabayashi.github.io/actions/workflows/release.yml)
[![GitHub release](https://img.shields.io/github/v/release/takabayashi/takabayashi.github.io?color=00ff41)](https://github.com/takabayashi/takabayashi.github.io/releases)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Ftakabayashi.github.io&label=takabayashi.github.io&color=00ff41)](https://takabayashi.github.io)
[![Built with Bun](https://img.shields.io/badge/built%20with-Bun-f9f1e1?logo=bun)](https://bun.sh)

A modern bio/resume website built with Bun and TypeScript, deployed as a static site on GitHub Pages.

## Features

- **Fast & Modern**: Built with Bun's native server (no external frameworks)
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Beautiful UI**: Dark cyberpunk theme with neon green accents
- **Data-Driven**: All content loaded from a single JSON file
- **Multiple Pages**: Home, Experience, Projects, Publications, Certifications, and Contact
- **Auto-Deploy**: Pushes to `main` trigger automatic builds and deploys
- **Auto-Release**: Tag with `vX.Y.Z` to create a GitHub Release

## Quick Start

```bash
bun install
bun run dev        # Dev server with hot reload at http://localhost:3000
bun run build      # Generate static site in dist/
```

## Customizing

Edit `data/bio.json` to update all content (experience, projects, skills, etc.).

## Releases

Create a release by tagging a commit:

```bash
git tag v1.0.0
git push origin v1.0.0
```

This automatically creates a GitHub Release with auto-generated release notes.

## Technologies

- **Runtime**: Bun
- **Language**: TypeScript
- **Styling**: Pure CSS with CSS Variables
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

---

Built with [Bun](https://bun.sh)
