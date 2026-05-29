<!-- SEED — generated before implementation. Re-run `$impeccable document` once components exist to replace with extracted tokens. -->

---

name: Skill & Mix
description: A bold mixology and bartending academy for serious craft.
colors:
ember-red: "#C8352A"
ember-deep: "#8B2019"
bar-black: "#130D0C"
surface-raised: "#1F1311"
surface-border: "#2E1A18"
warm-white: "#F0E8E7"
ash: "#B5ACAC"
typography:
display:
fontFamily: "Big Shoulders Display, system-ui, sans-serif"
fontSize: "clamp(4.5rem, 13vw, 10rem)"
fontWeight: 900
lineHeight: 0.9
letterSpacing: "-0.02em"
headline:
fontFamily: "Big Shoulders Display, system-ui, sans-serif"
fontSize: "clamp(2rem, 5vw, 3.5rem)"
fontWeight: 800
lineHeight: 1.0
letterSpacing: "-0.015em"
title:
fontFamily: "Geist, system-ui, sans-serif"
fontSize: "1.25rem"
fontWeight: 600
lineHeight: 1.3
body:
fontFamily: "Geist, system-ui, sans-serif"
fontSize: "1rem"
fontWeight: 400
lineHeight: 1.65
label:
fontFamily: "Geist Mono, monospace"
fontSize: "0.75rem"
fontWeight: 500
letterSpacing: "0.1em"
rounded:
none: "0px"
sm: "3px"
md: "6px"
full: "9999px"
spacing:
xs: "4px"
sm: "8px"
md: "16px"
lg: "32px"
xl: "64px"
2xl: "128px"
components:
button-primary:
backgroundColor: "{colors.ember-red}"
textColor: "{colors.warm-white}"
rounded: "{rounded.none}"
padding: "14px 40px"
button-primary-hover:
backgroundColor: "{colors.ember-deep}"
textColor: "{colors.warm-white}"
button-ghost:
backgroundColor: "transparent"
textColor: "{colors.warm-white}"
rounded: "{rounded.none}"
padding: "14px 40px"
button-ghost-hover:
backgroundColor: "{colors.surface-raised}"
textColor: "{colors.warm-white}"

---

# Design System: Skill & Mix

## 1. Overview

**Creative North Star: "The Bar at Last Call"**

The design system is the interior of a serious cocktail bar — not a hotel bar, not a chain, not a pop-up activation. This is the kind of place where the person behind the counter has the technique, the history, and the confidence to be silent until the moment they speak. The surface is dark, architecturally spare, lit from the material itself. There is no decoration that isn't load-bearing.

The background is predominantly near-black with a trace of ember in the tint — not flat web-black, but a warm darkness that reads as intentional. Red appears with total precision: on calls to action, on structural highlights, and on moments that demand to announce themselves. Everything else recedes. Typographically, display headings carry visual mass and expressive weight through a variable serif; body copy runs in a clean geometric sans-serif that vanishes behind the words; metadata and labels are rendered in monospace, telegraphing the technical discipline of a practiced bartender's annotated recipe card.

This system explicitly rejects: the course-platform aesthetic (soft blue, thumbnail-grid soup, neutral sans-serif from margin to margin); the corporate hospitality look (beige-white, hotel brochure warmth, stock photography of people shaking hands); and the over-minimized cocktail-app design (pure white background, hairline text, maximum whitespace — mistaken for skincare). It also rejects dark-neon nightclub graphics: this is an academy, not a music festival.

**Key Characteristics:**

- Surface-first darkness: the background is not a canvas — it is the design.
- Red as a loaded, precise instrument: its rarity is its power.
- Typographic authority: a display serif with visual mass paired with invisible body type.
- Monospaced labels and metadata: technical craft made visible.
- Confident stillness: every element feels placed, not arranged.

**Inspiration Reference: [des-todes.su](https://des-todes.su)**
Borrow the structural language, not the palette. Specifically: (1) **Typography as architecture** — use large Fraunces display headlines as layout objects, placed asymmetrically or edge-anchored, not just centered in a content column. (2) **Extreme scale contrast** — only two type sizes on any given surface: very large and very small. Middle sizes are filler. (3) **Full-bleed horizontal image strip** — consider a marquee-style image strip as an alternative to a classic hero; it reads as a catalogue, not a campaign. (4) **Card metadata pattern** — course title in Fraunces (heading weight), then a second row of Geist Mono uppercase metadata (duration, level, price) directly below, no icon. (5) **Arrow as directional element** — the `→` glyph is a design element, not just punctuation. Use it on CTAs, navigation links, and section transitions. (6) **Minimal CTA button weight** — the secondary action button should feel like the brand is confident enough not to shout.

## 2. Colors: The Ember Palette

A full palette with four named roles. Black and red in command, supported by ash gray and warm white as the text register.

### Primary

- **Ember Red** (`#C8352A` / `oklch(52% 0.22 27)`): The academy's signal color. Used on primary CTAs, active nav states, interactive highlights, and structural decorative accents (borders, underlines). Never used as a background wash or gradient source — its authority depends on restraint.

### Depth

- **Ember Deep** (`#8B2019` / `oklch(38% 0.19 27)`): The shadow variant of Ember Red. Pressed and active states, depth layers behind red elements.

### Neutral

- **Bar Black** (`#130D0C` / `oklch(9% 0.006 27)`): Primary background surface. Near-black tinted with a trace of red — prevents the harshness of pure black and reads as warm, not cold.
- **Surface Raised** (`#1F1311` / `oklch(13% 0.008 27)`): Elevated surfaces — course cards, info panels, navigation background, drawers.
- **Surface Border** (`#2E1A18` / `oklch(19% 0.009 27)`): Dividers, hairlines, input strokes.
- **Warm White** (`#F0E8E7` / `oklch(93% 0.006 27)`): Primary text. Slightly warm — calibrated against Bar Black so it reads as intentional, not harsh.
- **Ash** (`#B5ACAC` / `oklch(72% 0.007 27)`): Secondary text, metadata, captions, placeholder copy.

### Named Rules

**The Ember Reserve Rule.** Ember Red appears on ≤15% of any given screen. Every use is structural or interactive. Decorative red — tinted washes, background fills, gradients — is not permitted.

## 3. Typography

**Display Font:** Big Shoulders Display (variable condensed grotesque; load from Google Fonts)
**Body Font:** Geist (already installed; `var(--font-geist-sans)`)
**Label/Mono Font:** Geist Mono (already installed; `var(--font-geist-mono)`)

**Character:** Big Shoulders Display is a tall, condensed grotesque variable font — the typeface of bar signage, spirits labels, and printed menus, not of editorial magazines. At 900 weight and large sizes it reads like carved lettering: confident, physical, unambiguous. Geist body text is quiet and purposeful, designed for legibility at all sizes. Geist Mono labels enforce technical precision: the instrument reading on the cocktail menu, the timestamp on the reservation.

### Hierarchy

- **Display** (900w, `clamp(4.5rem, 13vw, 10rem)`, line-height 0.9, tracking −0.02em): Hero section headings only. Set tight. Big Shoulders Display at this size occupies space as a layout object. Maximum 5–7 words.
- **Headline** (800w, `clamp(2rem, 5vw, 3.5rem)`, line-height 1.0, tracking −0.015em): Section headings, page titles, course card titles.
- **Title** (600w, `1.25rem`, line-height 1.3): Sub-section labels, feature callouts, nav items.
- **Body** (400w, `1rem`, line-height 1.65): Prose, course descriptions, blog copy. Max line length 65–72ch.
- **Label** (Geist Mono, 500w, `0.75rem`, tracking 0.1em, uppercase): Category tags, pricing, course duration, form labels, metadata of any kind.

### Named Rules

**The Hierarchy Contract.** Each level appears in one typographic role only. Do not set body copy at Title size for emphasis — use weight contrast within the body role, or elevate structurally to Headline with a genuine reason.

**The Tight-Display Rule.** Display headlines are set with negative tracking and leading below 1.0. This is not a default override — it is the typographic instruction.

## 4. Elevation

This system uses **tonal layering**, not cast shadows. Dark surfaces are distinguished by lightness steps — Bar Black → Surface Raised → Surface Border as the edge signal — not by dropping shadows beneath them. The z-axis is implied through color, not depth.

Shadows appear only as **state signals**: hover lift on interactive cards, focus ring on focusable elements. They are never decorative defaults.

### Shadow Vocabulary

- **Ember Glow** (`box-shadow: 0 0 0 3px oklch(52% 0.22 27 / 0.35)`): Focus ring on all focusable interactive elements. Replaces the browser default outline.
- **Hover Lift** (`box-shadow: 0 8px 32px oklch(9% 0.006 27 / 0.7)`): On card hover only. Reinforces interactive state by sinking the card's perceived plane.

### Named Rules

**The Tonal-First Rule.** Distinguish surfaces through background steps, not shadows. Reach for shadow only as a state signal.

## 5. Components

The component feel: architecturally sharp, material-confident. Buttons and inputs have visual weight and occupy space with intention. No decorative radius. Interactions feel committed.

### Buttons

- **Shape:** No radius (`rounded: none`). Buttons are rectangular. This is the doctrine, not a default.
- **Primary:** Ember Red background, Warm White text, `14px 40px` padding. Label set in Geist Mono uppercase at `0.75rem` / `0.1em` tracking.
- **Hover / Focus:** Background shifts to Ember Deep. Transition: `background 280ms cubic-bezier(0.16, 1, 0.3, 1)`. Focus: Ember Glow ring.
- **Ghost:** Transparent background, Warm White text, `1px` Surface Border stroke. Hover: Surface Raised background fill, same transition.

### Cards / Containers

- **Corner Style:** `3px` (rounded.sm) — minimal, present.
- **Background:** Surface Raised (`#1F1311`) on Bar Black backgrounds.
- **Shadow Strategy:** No shadow at rest. Hover Lift on cursor hover.
- **Border:** `1px` Surface Border hairline at rest.
- **Internal Padding:** `24px` (between md and lg spacing steps).

### Inputs / Fields

- **Style:** Surface Raised background, `1px` Surface Border stroke, no radius. Warm White text, Ash placeholder.
- **Focus:** Ember Glow ring. No border-color change — the glow is the signal.
- **Error:** Stroke shifts to Ember Red. Error message in Geist Mono Label size, Ember Red color.

### Navigation

- **Style:** Surface Raised background, full-width, `64px` height. Brand mark left, primary nav center, CTA button right.
- **Typography:** Title weight (600w, `1rem`, Geist), Warm White. Active state: `2px` Ember Red underline positioned below the text.
- **Mobile:** Collapsed to hamburger icon. Drawer opens from right at `280px` width, Surface Raised background, nav items stacked with `24px` vertical rhythm.

## 6. Do's and Don'ts

### Do:

- **Do** use Bar Black (`#130D0C`) as the default background. Dark tonal layering is the vocabulary — every surface above it should feel earned.
- **Do** treat Ember Red as the only accent. One loaded signal. Use it on CTAs, active states, and structural highlights only.
- **Do** set Fraunces at Display weight with tight leading (`0.92`) and negative tracking (`−0.02em`). The headline should take up space.
- **Do** write all metadata, pricing, category tags, and form labels in Geist Mono uppercase. Technical precision is the brand's craft signal.
- **Do** use `280ms cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) for interactive state transitions. Confident, not bouncy.
- **Do** distinguish surfaces through lightness steps (Bar Black → Surface Raised), not box shadows.

### Don't:

- **Don't** replicate generic course platform aesthetics — soft blue, grid of identical thumbnail cards, neutral sans-serif margin to margin. This is the first anti-reference by name.
- **Don't** use the corporate hospitality look: beige-white backgrounds, hotel brochure warmth, muted palettes, stock photography of uniformed staff.
- **Don't** design like an over-minimized cocktail app — pure white background, hairline type, maximum whitespace that reads as skincare, not academy.
- **Don't** use gradient text (`background-clip: text` with a gradient). Ember Red is a solid. Its power comes from exactness.
- **Don't** use a left-border stripe accent (`border-left: 3px solid #C8352A`) on cards or callout boxes. This is the most overused cliché in this domain. Use a top border, full border, or background tint instead.
- **Don't** use pure black (`#000`) or pure white (`#fff`) on any surface. Every neutral is tinted toward the brand hue.
- **Don't** use bounce, spring, or elastic easing. `cubic-bezier` curves that overshoot their target are not permitted. Motion is choreographed.
- **Don't** use neon or outer glow effects as ambient decoration — no color-glow card halos, no hero glow treatments. The Ember Glow is a focus ring, not an atmosphere.
