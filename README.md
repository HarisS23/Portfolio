# Portfolio Template

A dark, cinematic portfolio built with vanilla HTML, CSS & JS. No build step required.

## File Structure

```
portfolio/
├── index.html              ← Main page (hero, about, projects, contact)
├── pages/
│   ├── employee-atlas.html ← Project page
│   ├── flair.html          ← Project page
│   └── deadshot.html       ← Project page
├── css/
│   ├── style.css           ← Global styles (nav, hero, about, projects, contact, footer)
│   └── project.css         ← Project page styles
├── js/
│   └── main.js             ← Cursor, scroll reveal, nav, form handler
├── assets/
│   └── images/             ← Put all your images here
└── README.md
```

## Quick Start: What to Replace

Search for `[` brackets throughout the files — every placeholder is wrapped in `[...]`.

### index.html
| Placeholder | Replace with |
|---|---|
| `[YOUR NAME]` | Your full name |
| `[YOUR LOCATION]` | e.g. "Sarajevo, BA" |
| `[Your Role]` | e.g. "Full-Stack Developer & UI Designer" |
| `[YOUR@EMAIL.COM]` | Your email |
| `[YOUR-HANDLE]` | LinkedIn / GitHub handles |
| `[N]+` | Number of projects shipped |
| `[Skill / Tool]` | Your actual skills |
| Bio paragraphs | Your actual bio text |

### Each project page
| Placeholder | Replace with |
|---|---|
| `[20XX]` | The project year |
| `[Your Role]` | Your role on the project |
| Overview paragraphs | Actual project description |
| Feature cards | Real features of the project |
| `[Tech 1]` etc. | Stack badges |
| `[YOUR-LIVE-URL]` | Live URL |

### Images
Replace every `<!-- REPLACE: <img ... /> -->` comment by:
1. Adding your image to `assets/images/`
2. Uncommenting the `<img>` tag
3. Removing the `<div class="img-placeholder">` block

Recommended image sizes:
- Hero photo: 800×1000px
- About photo: 600×800px
- Project hero banner: 1600×900px
- Project screenshots: 1280×800px (16:9), 900×1200px (portrait)

## Adding a New Project

1. Copy `pages/employee-atlas.html` → `pages/your-project.html`
2. Update all `[...]` placeholders
3. Change the `project-category` text (Web Application / Video Game / etc.)
4. Add images in `assets/images/`
5. Add a card in `index.html` inside `.projects-grid`
6. Update `project-nav` links on neighbouring project pages

## Form Setup

The contact form has a stub in `js/main.js`. Connect it to one of:

- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID" method="POST"` to the `<form>` tag
- **Netlify**: Add the `netlify` attribute to `<form>`
- **EmailJS**: Replace the `setTimeout` stub in `main.js` with EmailJS code

## Deployment

Works on any static host:
- Vercel: drag & drop the folder
- Netlify: drag & drop or connect GitHub
- GitHub Pages: push to a repo and enable Pages
- Any web server: upload via FTP

