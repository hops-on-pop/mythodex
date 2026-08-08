# MythoDex — Design Details

## Typography

| Role                 | Font                | Weight(s)          | Usage                                                         |
| -------------------- | ------------------- | ------------------ | ------------------------------------------------------------- |
| Display / Headers    | `Cinzel Decorative` | 700, 900           | Site title, character names (card + detail), section headings |
| Hand-lettered accent | `Kalam`             | 400, 700           | Eyebrow label, tagline, pronunciation guide, fact labels      |
| Body                 | `Nunito`            | 400, 600, 700, 800 | Paragraph copy, badges, buttons, quick-fact values            |

Google Fonts import:

```
https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Kalam:wght@400;700&family=Nunito:wght@400;600;700;800&display=swap
```

Type scale in use:

- Hero title: 56px, Cinzel Decorative 700
- Detail character name: 42px, Cinzel Decorative 700
- Card character name: 17px, Cinzel Decorative 700
- Preview/eyebrow labels: 14px, Kalam, uppercase, letter-spacing .14em
- Body copy: 15.5–16px, Nunito 400, line-height 1.65–1.7
- Badge/label text: 10.5–11.5px, Nunito 800, uppercase, letter-spacing .04em

## Color Palette

### Base

| Token        | Hex       | Usage                            |
| ------------ | --------- | -------------------------------- |
| `bg-deep`    | `#0b0e1a` | Page background (night sky)      |
| `parchment`  | `#f2e8d0` | Card / panel surface             |
| `ink`        | `#2a2118` | Primary text on parchment        |
| `ink-soft`   | `#3a2f22` | Body paragraph text on parchment |
| `star-white` | `#efe9da` | Body text on dark background     |

### Hero background wash (radial gradients over `bg-deep`)

- `rgba(224,194,95,.18)` at 15% 25% (gold)
- `rgba(160,107,224,.16)` at 85% 70% (purple)
- `rgba(95,208,224,.14)` at 60% 15% (cyan)
- `rgba(226,114,91,.12)` at 35% 85% (ember)
- Star dots: 1.5px radial dots in `#e0c25f`, `#5fd0e0`, `#a06be0`, `#efe9da` scattered at fixed coordinates

### Category accent hues

One accent per category — same role (badge, portrait border/glow, stat-card top edge, CTA gradient, filter chip), varied only by hue:

| Category | Accent (`dot`)     | Text (`color`) | Badge bg (`bg`)         | Badge border            |
| -------- | ------------------ | -------------- | ----------------------- | ----------------------- |
| God      | `#c9a24b` (gold)   | `#8a6413`      | `rgba(201,162,75,.20)`  | `rgba(201,162,75,.6)`   |
| Hero     | `#5fd0e0` (cyan)   | `#186878`      | `rgba(95,208,224,.18)`  | `rgba(95,208,224,.55)`  |
| Titan    | `#a06be0` (purple) | `#5b3486`      | `rgba(160,107,224,.18)` | `rgba(160,107,224,.55)` |
| Monster  | `#e2725b` (ember)  | `#8f3225`      | `rgba(226,114,91,.20)`  | `rgba(226,114,91,.6)`   |

Gradient title text (hero `<h1>`): `linear-gradient(90deg, #f3dfa0, #e07a4f 45%, #a06be0 75%, #5fd0e0)`

Divider bar under hero title: `linear-gradient(90deg, #c9a24b, #e2725b, #a06be0, #5fd0e0)`

## Components

**Portrait frame** (grid card + detail page): rounded rect, `aspect-ratio: 3/4`, gradient fill `linear-gradient(160deg, {accent}55, {accent}18)` over a diagonal repeating-stripe texture, `3px solid {accent}` border, soft `{accent}` glow shadow. Monospace placeholder label: "full-body portrait / {name}".

**Category badge**: pill, `border-radius: 999px`, category bg/border/text combo above, 800-weight Nunito, uppercase.

**Stat/fact card**: parchment surface tint `rgba(0,0,0,.035)`, `border-radius: 10px`, `3px solid {accent}` top edge (no left-border accents — avoided as a trope).

**CTA button**: `linear-gradient(135deg, {accent}, #2a2118 140%)`, white-gold text `#fff8e8`, pill shape, accent-tinted drop shadow.

**Filter chip**: pill, inactive = transparent fill + accent border/text; active = solid accent fill + `#0b0e1a` text.

**Card hover**: `translateY(-4px)` lift, 0.15s ease.

## Layout

- Page bg: `#0b0e1a` throughout
- Hero: centered content, max-width 900px
- Browse grid: max-width 1200px, `repeat(auto-fill, minmax(200px, 1fr))`, 22px gap
- Detail page: max-width 840px, single parchment card, header row = title/eyebrow block → portrait → stat stack (left to right)
