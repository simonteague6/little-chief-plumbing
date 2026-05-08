# Little Chief Plumbing — Project Memory

> This file serves as the AI assistant's working memory for the Little Chief Plumbing website redesign. It captures all decisions, file states, user preferences, and project context so future sessions can pick up exactly where the last one left off.

---

## Project Overview

**Client:** Little Chief Plumbing (San Antonio, TX)
**Type:** Single-page plumbing service website (portfolio/demo piece)
**Aesthetic:** Rugged & Trustworthy — Warm Industrial Craftsmanship
**Status:** Build phase complete, visual polish ongoing
**Live:** Static HTML/CSS/JS site served from `index.html`

---

## Design Flow Completed

The full **Design Flow** process was executed:

1. **Grill Me** — Extensive interview covering brand identity, inspiration sites, aesthetic direction, site structure, content strategy
2. **Design Brief** — Saved to `.design/little-chief/DESIGN_BRIEF.md`
3. **Information Architecture** — Saved to `.design/little-chief/INFORMATION_ARCHITECTURE.md` (single-page, 7 sections, 4 user flows)
4. **Design Tokens** — Saved to `.design/little-chief/DESIGN_TOKENS.css` (earth palette with green/taupe scales)
5. **Brief to Tasks** — Saved to `.design/little-chief/TASKS.md` (17 build tasks)
6. **Frontend Design — Build** — All sections coded
7. **Visual Polish** — Ongoing (section backgrounds, color refinements)

---

## Key User Decisions & Preferences

These are locked-in decisions the user has explicitly approved:

- **No coupons** — Trust-driven, not discount-driven
- **No emergency strip** — 24/7 messaging lives in hero and contact sections only
- **Curated static Google review cards** — Not a live API (87+ reviews referenced)
- **Headdress as visual motif** — Logo from actual business card used throughout
- **Single-page structure** — No separate pages except `thanks.html` and `404.html`
- **Dark hero + alternating light sections** — Not all light
- **No green accent** — User rejected the green "TX Licensed" stat; removed entirely
- **No check circles in About** — User disliked checkbox SVG circles; replaced with gold left-border list items
- **Photo backgrounds for dark sections** — Hero (skyline), About (plumbing work), FAQ (bathroom fixture)

---

## File Structure

```
.
├── index.html              ← Main single-page site (7 sections)
├── thanks.html             ← Form submission thank-you page
├── 404.html                ← Error page
├── css/
│   └── style.css           ← All styles (tokens + sections + components)
├── js/
│   └── main.js             ← Mobile nav + FAQ accordion + scroll reveals
├── assets/
│   ├── logo-card.png       ← Actual business card logo (headdress)
│   ├── logo.svg            ← Original SVG logo (unused)
│   ├── san-antonio-skyline.jpg  ← Hero background
│   ├── plumbing-work.jpg       ← About section background
│   └── bathroom-fixture.jpg    ← FAQ section background
├── .design/little-chief/
│   ├── DESIGN_BRIEF.md
│   ├── INFORMATION_ARCHITECTURE.md
│   ├── DESIGN_TOKENS.css
│   └── TASKS.md
├── color-showcase.html     ← 3 palette options (Earth selected)
└── MEMORY.md               ← This file
```

---

## Earth Color Palette (Active)

All CSS custom properties in `css/style.css` use these values:

| Token | Hex | Usage |
|-------|-----|-------|
| `--brand-dark` | `#1A120B` | Deep warm brown-black |
| `--brand-dark-900` | `#1A120B` | Darkest |
| `--brand-dark-800` | `#2C1E14` | Dark sections (hero, footer, about, FAQ) |
| `--brand-dark-700` | `#3D2A1E` | |
| `--brand-dark-600` | `#4E3628` | |
| `--brand-copper` | `#C45C2A` | Primary accent (buttons, links) |
| `--brand-copper-700` | `#9A4A22` | Active state |
| `--brand-copper-600` | `#C45C2A` | Default accent |
| `--brand-copper-500` | `#D46832` | Hover state |
| `--brand-copper-400` | `#E07840` | Light accent on dark bg |
| `--brand-yellow` | `#F5A623` | Gold — stars, badges, borders |
| `--brand-yellow-600` | `#D48A1A` | |
| `--brand-yellow-500` | `#F5A623` | |
| `--brand-yellow-400` | `#F7B84A` | |
| `--brand-cream` | `#FAF8F5` | Text on dark backgrounds |
| `--brand-taupe` | `#8B7355` | Muted text, borders |
| `--warm-50` | `#FAF8F5` | Lightest bg |
| `--warm-100` | `#F0EBE3` | Card/well bg, alternate section bg |
| `--warm-200` | `#E5DDD3` | |
| `--warm-300` | `#D4C8B8` | Borders, dividers |
| `--warm-400` | `#B8AFA0` | |
| `--warm-500` | `#9A9182` | |
| `--warm-600` | `#7D6E5F` | |
| `--warm-700` | `#6B5E4F` | Secondary text on light |
| `--warm-800` | `#4A3F34` | |
| `--warm-900` | `#1A120B` | |

### Semantic Tokens

```css
--bg-primary:    var(--warm-50);
--bg-secondary:  var(--warm-100);
--bg-inverse:    var(--brand-dark-800);
--text-primary:  var(--brand-dark-800);
--text-secondary:var(--warm-700);
--text-muted:    var(--brand-taupe);
--text-inverse:  var(--brand-cream);
--accent:        var(--brand-copper-600);
--accent-hover:  var(--brand-copper-500);
--accent-active: var(--brand-copper-700);
--border:        var(--warm-300);
--gold:          var(--brand-yellow-500);
--taupe:         var(--brand-taupe);
```

### Dark Section Overrides

```css
--dark-text:      var(--warm-50);
--dark-text-sec:  var(--warm-300);
--dark-accent:    var(--brand-copper-400);
--dark-border:    rgba(245,166,35,0.15);
```

**Green removed:** The `--brand-green: #4A6741` token and `--trust` semantic token were added then removed per user request. No green is used on the site.

---

## Section Layout & Background Rhythm

| Section | Background | Photo | Text Color |
|---------|-----------|-------|------------|
| **Hero** | Dark `#1A120B` | `san-antonio-skyline.jpg` with `82%` dark overlay | Light on dark |
| **Services** | Light `#FAF8F5` | None | Dark on light |
| **About** | Dark `#1A120B` | `plumbing-work.jpg` with `82%` dark overlay | Light on dark |
| **Reviews** | Light `#FAF8F5` | None | Dark on light |
| **FAQ** | Dark `#1A120B` | `bathroom-fixture.jpg` with `82%` dark overlay | Light on dark |
| **Contact** | Light `#FAF8F5` | None | Dark on light |
| **Footer** | Dark `#1A120B` | None | Light on dark |

Pattern: `dark-photo → light → dark-photo → light → dark-photo → light → dark`

### Section CSS Classes

- `.section` — Base section padding (`--space-10` mobile, `--space-11` desktop)
- `.section--dark` — Dark background (`--bg-inverse`) + light text
- `.section--alt` — Cream background (`--bg-secondary`) — currently only used if a section is light but needs distinct card backgrounds
- `.about` — Custom class for photo background section
- `.faq` — Custom class for photo background section

---

## Typography

- **Display:** `Playfair Display` (headings, stats, accents)
- **Body:** `Lora` (paragraphs, buttons, nav)
- **Scale:** xs (0.75rem) through 5xl (4.5rem)

---

## Component Patterns

### Buttons
- `.btn-copper` — Solid copper bg, warm-50 text
- `.btn-ghost` — Transparent bg, border, inherits text color

### Cards
- **Service cards:** `bg-secondary`, `1px solid border`, `radius-lg`
- **Review cards:** `bg-inverse` (dark), `1px solid dark-border`, `radius-lg`
- **FAQ items (on dark bg):** `rgba(26,18,11,0.5)` (semi-transparent dark), `1px solid dark-border`
- **Contact cards:** `bg-secondary`, `1px solid border`

### Hero Stats
Three stat blocks: `4.9 / 87+ Reviews`, `24/7 / Available`, `TX / Licensed`
All values use `var(--brand-cream)` on dark backgrounds.

---

## Assets Inventory

| File | Dimensions | Usage |
|------|-----------|-------|
| `logo-card.png` | ~40x40 nav, ~400x400 about (was) | Business card logo with headdress |
| `san-antonio-skyline.jpg` | ~1.3MB | Hero full-bleed background |
| `plumbing-work.jpg` | ~3.3MB | About section full-bleed background |
| `bathroom-fixture.jpg` | ~2.0MB | FAQ section full-bleed background |

**No remaining unused assets.** All 4 photos are deployed.

---

## Git Commit History (Recent)

```
65879a1  FAQ section: bathroom-fixture photo background with dark overlay, gold accents on dark cards
8c89b73  About section: photo background with dark overlay, remove check circles, gold left-border list items
748a893  Apply earth color palette, fix hero text z-index, alternate section backgrounds, remove green accent
```

(Plus earlier commits for initial build, logo swap, skyline hero, etc.)

---

## HTML Structure (index.html)

```html
<!-- 1. Header/Nav -->
<header class="header">...logo + nav + phone...</header>

<!-- 2. Hero -->
<section class="hero section--dark" id="hero">
  <!-- badge, heading, sub, buttons, stats -->
</section>

<!-- 3. Services -->
<section class="section" id="services">
  <!-- 6 service cards (1-2-3 grid) -->
</section>

<!-- 4. About -->
<section class="section about" id="about">
  <!-- centered column: eyebrow, title, paragraph, 5 list items with gold left borders -->
</section>

<!-- 5. Reviews -->
<section class="section" id="reviews">
  <!-- 4 dark review cards + footer link -->
</section>

<!-- 6. FAQ -->
<section class="section faq" id="faq">
  <!-- 6 accordion items -->
</section>

<!-- 7. Contact -->
<section class="section" id="contact">
  <!-- form + contact cards + map -->
</section>

<!-- 8. Footer -->
<footer class="footer section--dark" id="footer">
  <!-- logo, nav, contact, hours, social, legal -->
</footer>
```

---

## JavaScript (main.js)

- **Mobile nav toggle** — `aria-expanded`, hamburger animation
- **FAQ accordion** — `open` class toggle, max-height transition, single-open behavior
- **Scroll reveal** — IntersectionObserver, `.reveal` + staggered `.reveal-delay-*` classes
- **Header shadow** — Adds `.header--scrolled` after 50px scroll

---

## What Was Tried & Rejected

| Feature | Reason Rejected |
|---------|-----------------|
| Green `#4A6741` accent on "TX Licensed" stat | User: "only time it shows up is right there" — one-off, inconsistent |
| Check-circle SVGs in About list | User disliked generic checklist aesthetic |
| All-white/cream content sections | User: "five sections in a row... looks pretty horrible" |
| Logo image in About right column | Removed when section became centered photo-bg |

---

## Open / Future Work

- [ ] Design review pass (`/design-review` skill)
- [ ] Responsive testing across breakpoints
- [ ] Accessibility audit (contrast, focus states, ARIA)
- [ ] Performance: image optimization (photos are 1-3MB each)
- [ ] Meta tags / SEO final pass
- [ ] Form backend integration (currently static)
- [ ] Analytics / conversion tracking

---

## How to Resume Work

1. Check `git status` and `git log --oneline -5` to see last state
2. Read this `MEMORY.md` for full context
3. Read `index.html` and `css/style.css` for current code state
4. Check `.design/little-chief/` for original design decisions
5. Ask user what they want to tackle next
