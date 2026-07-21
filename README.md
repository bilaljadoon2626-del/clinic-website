# LifeCare Medical Clinic — Website

A modern, premium, fully responsive marketing website for a fictional medical clinic, **LifeCare Medical Clinic**. Built with plain HTML, CSS and vanilla JavaScript — no build step, no dependencies, no frameworks.

## Live preview

Open `index.html` directly in a browser, or serve the folder with any static file server (see below).

## Project structure

```
lifecare-medical-clinic/
├── index.html              # All page markup and content
├── assets/
│   ├── css/
│   │   └── style.css       # All styling (design tokens, layout, components, animations)
│   └── js/
│       └── main.js         # Header scroll state, mobile menu, scroll reveals, appointment form
├── .gitignore
├── LICENSE
└── README.md
```

## Features

- **Sections**: hero, about, services (7 cards), doctor profiles (3), why-choose-us, patient reviews (6), appointment booking form, FAQ accordion, contact block with embedded map + WhatsApp, footer
- **Responsive**: mobile-first layout, breakpoints at 640px / 768px / 900px / 960px
- **Interactions**: sticky header that condenses on scroll, mobile slide-in menu, scroll-triggered reveal animations, animated SVG "pulse line" motif, accessible `<details>`-based FAQ accordion, client-side validated appointment form with a success confirmation state
- **Accessibility**: semantic landmarks, skip-to-content link, visible focus states, labelled form fields, `prefers-reduced-motion` support
- **SEO**: descriptive `<title>`/meta description/keywords, Open Graph tags, semantic heading structure, descriptive image `alt` text

## Running locally

No build tools are required. Any static server works, for example:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit `http://localhost:8000`.

## Customizing

- **Branding & copy**: edit content directly in `index.html`.
- **Colors & type**: design tokens live at the top of `assets/css/style.css` under `:root` (e.g. `--blue`, `--mint`, `--ff-display`, `--ff-body`).
- **Doctor photos**: currently sourced from Unsplash as placeholders — swap the `<img>` `src` attributes in the "Meet Our Doctors" and hero/about sections for real photography before launch.
- **Contact details**: update the placeholder address, phone number, email and WhatsApp link (`wa.me/...`) in the Contact section and footer.
- **Map**: the embedded Google Map uses a generic search query embed — replace with your clinic's actual place/address for an accurate pin.
- **Appointment form**: currently client-side only (shows a success message on submit). Wire the `<form id="apptForm">` in `index.html` up to your backend or a form service (e.g. Formspree, Netlify Forms) to actually receive submissions.

## License

Provided under the MIT License — see `LICENSE`. Placeholder content (clinic name, doctor names, testimonials, contact details) is fictional and for demonstration purposes only.
