# Little Chief Plumbing — Redesign Summary

## What We Did

This project was a **complete ground-up redesign** of the Little Chief Plumbing website using the full **Design Flow** process (Grill Me → Design Brief → Information Architecture → Design Tokens → Brief to Tasks → Frontend Design).

### Phase 1: Grill Me
Interviewed extensively about:
- Brand identity (colors from the actual business card)
- Inspiration sites (Plumbing Bros, Clarke Kent Plumbing)
- Aesthetic direction (Rugged & Trustworthy)
- Site structure (single-page, no coupons, curated Google reviews)
- Content strategy (Pedro's story, FAQ, real photography)

**Key decisions made:**
- Headdress as a site-wide visual motif
- Dark hero + light content sections
- No emergency strip (24/7 messaging lives in hero and contact)
- No coupons (trust-driven, not discount-driven)
- Curated static Google review cards (not live API)
- Demo/portfolio piece to showcase design skills

### Phase 2: Design Brief
Saved to `.design/little-chief/DESIGN_BRIEF.md`

### Phase 3: Information Architecture
Saved to `.design/little-chief/INFORMATION_ARCHITECTURE.md`
- Single-page structure with 7 sections
- 4 user flows mapped (Emergency Caller, Researcher→Booker, Comparison Shopper, Mobile User)

### Phase 4: Design Tokens
Saved to `.design/little-chief/DESIGN_TOKENS.css`
- Initial tokens based on business card colors

### Phase 5: Brief to Tasks
Saved to `.design/little-chief/TASKS.md`
- 17 build tasks in order

### Phase 6: Frontend Design — Build
**Files modified:**
- `index.html` — Completely rebuilt with all 7 sections
- `css/style.css` — 1170 lines of new brand tokens and section styles
- `js/main.js` — Updated with FAQ accordion support
- `thanks.html` — Updated with new brand
- `404.html` — Updated with new brand

**New assets added:**
- `assets/logo-card.png` — Actual business card logo (headdress + decorative text)
- `assets/san-antonio-skyline.jpg` — Stock photo for hero background
- `assets/plumbing-work.jpg` — Stock photo for potential "Our Work" section
- `assets/bathroom-fixture.jpg` — Stock photo for potential fixture section

**Post-build fixes applied:**
- Emojis removed from contact sidebar (replaced with plain text)
- Checkmarks replaced with SVG stroke inside copper circles
- Service card numbers darkened for visibility
- Logo replaced throughout with actual business card image
- San Antonio skyline added as hero background with dark gradient overlay
- Schema.org and Open Graph updated to reference new logo

### Phase 7: Color Palette Exploration
Created `color-showcase.html` with 3 palette options:
1. **Earth** — Refined version of current palette (chosen)
2. **Skyline** — Drawn from San Antonio skyline photo
3. **Warm Slate** — Modern and clean

---

## Earth Color Palette (Selected)

These are the colors that will be applied to the site:

| Role | Hex | Name |
|------|-----|------|
| **Dark** | `#1A120B` | Deep warm brown-black. Hero background, footer, dark sections. |
| **Copper** | `#C45C2A` | Primary accent. CTAs, links, highlights, active states. |
| **Gold** | `#F5A623` | Secondary accent. Star ratings, eyebrow text, badges. |
| **Light** | `#FAF8F5` | Warm white. Light section backgrounds, cards, form areas. |
| **Green** | `#4A6741` | Tertiary accent. Trust badge, success states, subtle accent. |
| **Taupe** | `#8B7355` | Neutral warm. Borders, dividers, muted text. |

### Semantic Mapping

```
--bg-primary:    #FAF8F5 (light sections)
--bg-secondary:  #F0EBE3 (cards, wells)
--bg-inverse:    #1A120B (hero, footer)
--text-primary:  #1A120B (body text on light)
--text-secondary:#6B5E4F (subdued text)
--text-inverse:  #FAF8F5 (text on dark)
--accent:        #C45C2A (buttons, links)
--accent-hover:  #D46832 (button hover)
--gold:          #F5A623 (stars, badges)
--border:        #D4C8B8 (borders, dividers)
```

---

## Remaining / Next

- Apply Earth palette to `css/style.css`
- Add remaining stock photos to appropriate sections
- Design review when ready (`/design-review`)
