# Daniel Takabayashi - Bio/Resume Website

A modern, dynamic bio/resume website built with Bun and TypeScript.

## Features

- 🚀 **Fast & Modern**: Built with Bun's native server (no external frameworks)
- 📱 **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- 🎨 **Beautiful UI**: Clean, professional design with gradient accents
- 🔄 **Dynamic Content**: All content loaded from JSON data file
- 📊 **Multiple Pages**: Home, Experience, Projects, and Contact pages
- 📮 **Contact Form**: Functional contact form with API endpoint
- ⚡ **Hot Reload**: Development mode with automatic reloading
- 🎯 **Type Safe**: Full TypeScript support

## Project Structure

```
bio_site/
├── index.ts              # Main server file with routes
├── data/
│   └── bio.json          # All bio/resume data
├── public/
│   ├── css/
│   │   └── style.css     # Styling
│   ├── js/
│   │   └── main.js       # Client-side JavaScript
│   └── images/           # Image assets
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your system

### Installation

```bash
# Install dependencies
bun install
```

### Development

Run the development server with hot reload:

```bash
bun run dev
```

Or simply:

```bash
bun --hot index.ts
```

The server will start at `http://localhost:3000`

### Production

Run the production server:

```bash
bun start
```

## Customizing Your Bio

Edit the `data/bio.json` file to update your personal information:

- **Personal Info**: Name, title, tagline, contact details
- **Social Links**: GitHub, LinkedIn, Twitter profiles
- **Experience**: Work history with achievements
- **Education**: Academic background
- **Skills**: Technical skills, frameworks, tools
- **Projects**: Portfolio projects with links
- **Certifications**: Professional certifications

## API Endpoints

The website provides several API endpoints:

- `GET /api/bio` - Full bio data
- `GET /api/experience` - Work experience
- `GET /api/projects` - Projects
- `GET /api/skills` - Skills
- `POST /api/contact` - Contact form submission

## Pages

- **Home** (`/`) - Hero section, about, skills overview
- **Experience** (`/experience`) - Work history, education, certifications
- **Projects** (`/projects`) - Portfolio projects
- **Contact** (`/contact`) - Contact information and form

## Technologies Used

- **Runtime**: Bun
- **Language**: TypeScript
- **Server**: Bun.serve() (native)
- **Styling**: Pure CSS with CSS Variables
- **Client-side**: Vanilla JavaScript

## License

Private project for personal use.

---

Built with [Bun](https://bun.sh) 🥟
