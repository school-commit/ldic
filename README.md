# लक्ष्मी देवी इंटर कॉलेज — Official School Website

A complete, responsive, multi-page website for **Laxmi Devi Inter College (LDIC)**, Madhwapur, Bahraich, Uttar Pradesh — built as a pure static site (HTML/CSS/JS) with no build step, so it deploys directly on **GitHub Pages**.

## 🚀 Deploy on GitHub Pages (3 steps)

1. Push this entire folder's contents to a GitHub repository (e.g. `ldic-website`).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source: Deploy from a branch**, choose the `main` branch and `/ (root)` folder → Save.

Your site will be live at:
`https://<your-username>.github.io/<repo-name>/`

No npm install, no build command, no server required — it's plain HTML/CSS/JS.

## 📁 Project Structure

```
ldic-website/
├── index.html              # Home page
├── about.html               # About School
├── principal.html           # Principal's Message
├── achievements.html        # Our Achievements
├── results.html             # UP Board Results (2023 / 2024 / 2026 tabs)
├── facilities.html          # Academic Facilities
├── laboratory.html          # Science Laboratory
├── journey.html             # School Journey (timeline)
├── student-life.html        # Student Life
├── trips.html                # Educational Trips (Taj Mahal)
├── scholarship.html          # UP Scholarship – How to Apply
├── gallery.html               # Photo Gallery (masonry + lightbox)
├── contact.html               # Contact Us (map, call, email, WhatsApp)
├── social.html                 # Social Media / Connect With Us
├── 404.html                    # Custom not-found page
├── .nojekyll                   # Disables Jekyll processing on GitHub Pages
├── assets/
│   ├── css/
│   │   ├── style.css           # Core design system (colors, layout, nav shell)
│   │   └── pages.css           # Page-specific components (hero, timeline, tabs, gallery...)
│   ├── js/
│   │   ├── nav-data.js         # Single source of truth for menu items + icons
│   │   ├── app.js               # Sidebar/drawer logic, scroll reveal, lightbox, tabs, filters
│   │   └── footer.js            # Shared footer component
│   └── images/
│       ├── logo.png                        # Official school logo (as uploaded)
│       ├── school-gate.jpg                 # School gate photograph
│       ├── school-building.jpg             # School building photograph
│       ├── science-lab.jpg                 # Science laboratory photograph
│       ├── lab-scout-facilities.jpg        # Lab + Scout/Guide promotional photo
│       ├── result-2023.jpg                 # UP Board Result 2023 poster (original)
│       ├── result-2024.jpg                 # UP Board Result 2024 poster (original)
│       ├── result-2026.jpg                 # UP Board Result 2026 poster (original)
│       └── educational-trip-tajmahal.webp  # Educational trip photo (Taj Mahal, Agra)
└── README.md
```

## 🎨 Design System

- **Colours:** Saffron/Bhagwa (`#F2760F`) and gold (`#C6941E`) dominant, maroon (`#7A1E20`) for structure/nav, cream/ivory backgrounds, small dark-green accents. Blue used only as the school logo's own colour — never as a UI theme colour.
- **Typography:** *Hind* for Devanagari + general body text, *Poppins* for English headings, *Inter* for English body text — all loaded from Google Fonts.
- **Navigation:** Collapsible icon/text sidebar on desktop (persists expand/collapse choice via `localStorage`); slide-in drawer with overlay on mobile.
- **Animations:** Subtle scroll-reveal (`IntersectionObserver`), hero zoom/fade-in, hover lifts on cards/buttons — respects `prefers-reduced-motion`.

## ✅ Content Accuracy

All text, names, phone numbers, percentages, and photographs come directly from material supplied by the school (see `Ldic.txt` instructions). No statistics, fees, rankings, or facilities were invented. The UP Board result posters and the Taj Mahal trip photo are the **original uploaded images**, unaltered, displayed via `<img>` tags rather than recreated.

## 🔧 Editing Content Later

- **Menu items:** edit `assets/js/nav-data.js` (`NAV_ITEMS` array) — it drives both desktop sidebar and mobile drawer automatically.
- **Footer:** edit `assets/js/footer.js`.
- **Colours/fonts:** edit the `:root` variables at the top of `assets/css/style.css`.
- **Any page's text:** open that page's `.html` file directly — content is plain, readable HTML with Hindi headings marked by class `hi-head`.

## 🌐 Official Links Used (do not change)

| Purpose | Link |
|---|---|
| UP Scholarship Portal | https://scholarship.up.gov.in/ |
| Google Maps | https://maps.app.goo.gl/7c9vRDv6QZhhVDzn6 |
| YouTube | https://youtube.com/@ldic1236?si=Wy3Z7Y0gZsjElKBQ |
| Instagram | https://www.instagram.com/ldic1236 |
| Facebook | https://www.facebook.com/ldic1236 |
| X / Twitter | https://x.com/ldic1236 |
| Telegram | https://www.telegram.com/ldic1236 |
| WhatsApp Channel | https://whatsapp.com/channel/0029VaUwFchAojYnk6egLF0L |

## 📱 Responsiveness

Tested breakpoints: ≤560px (mobile), ≤900px (tablet), >900px (desktop). No horizontal scroll; sidebar becomes a hamburger + slide-in drawer below 900px; grids collapse from 3–4 columns → 2 → 1.
