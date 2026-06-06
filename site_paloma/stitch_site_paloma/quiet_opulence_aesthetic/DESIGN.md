---
name: Quiet Opulence Aesthetic
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#4f4444'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#817474'
  outline-variant: '#d3c3c2'
  surface-tint: '#725858'
  primary: '#3c2627'
  on-primary: '#ffffff'
  primary-container: '#543c3c'
  on-primary-container: '#c8a7a6'
  inverse-primary: '#e1bebe'
  secondary: '#6e5b4d'
  on-secondary: '#ffffff'
  secondary-container: '#f8decb'
  on-secondary-container: '#746152'
  tertiary: '#5d041b'
  on-tertiary: '#ffffff'
  tertiary-container: '#7c1e2f'
  on-tertiary-container: '#ff8d98'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fedad9'
  primary-fixed-dim: '#e1bebe'
  on-primary-fixed: '#2a1617'
  on-primary-fixed-variant: '#594141'
  secondary-fixed: '#f8decb'
  secondary-fixed-dim: '#dbc2b0'
  on-secondary-fixed: '#26190e'
  on-secondary-fixed-variant: '#554336'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b8'
  on-tertiary-fixed: '#40000f'
  on-tertiary-fixed-variant: '#832334'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
  truffle-brown: '#543C3C'
  luxury-nude: '#CAB2A1'
  champagne-gold: '#D4AF37'
  carrara-gray: '#E5E5E5'
  deep-burgundy: '#591E27'
  off-white: '#FDFCFB'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '300'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-desktop: 80px
  margin-mobile: 24px
  gutter: 32px
  section-gap: 120px
  unit: 8px
---

## Brand & Style

This design system embodies the "Quiet Luxury" ethos—an understated yet unmistakable expression of wealth, precision, and care. It is tailored for an elite clientele who values scientific rigor wrapped in a high-hospitality experience. The brand personality is exclusive and feminine, leaning into a "Neo-Modernist" minimalism that prioritizes the "respiro" (breathing room) of white space over decorative clutter.

The visual style is characterized by:
- **Neo-Modernist Minimalism:** A focus on structural purity, high-quality materials, and intentionality in every pixel.
- **Tactile Sophistication:** Digital surfaces should feel like physical materials—brushed metal, fine linen, and honed marble.
- **Editorial Precision:** Layouts mimic high-end fashion magazines, emphasizing natural lighting and the "science of beauty."

## Colors

The palette is anchored in organic, earthy tones that suggest timelessness and skin-health. 

- **Primary Gradient:** A transition from **Truffle Brown (#543C3C)** to **Luxury Nude (#CAB2A1)**. This gradient should be used sparingly for high-impact backgrounds or hero typography, never for functional elements like body text.
- **Accents:** **Champagne Gold** is reserved for hair-line borders, icons, and small decorative "stamps" of authenticity. 
- **The Burgundy Legacy:** Drawing from the inspired source, **Deep Burgundy (#591E27)** is utilized as an "expert" accent color, representing the clinical/scientific authority of the practice.
- **Neutrals:** The UI lives on a bed of **Off-White** and **Carrara Gray**, avoiding pure blacks or harsh whites to maintain a soft, inviting atmosphere.

## Typography

Typography is the primary vehicle for authority in this design system. 

- **Headings:** **Playfair Display** is used with generous kerning (letter-spacing) in all-caps or title case to evoke the feel of a luxury heritage brand. 
- **Body:** **Montserrat** provides a clean, technical counterpoint. Use the "Light" (300) weight for large blocks of copy to maintain the airy, modern aesthetic.
- **Hierarchy:** Use the `label-caps` style for section headers and "Expertise" tags to differentiate clinical data from lifestyle content.

## Layout & Spacing

The layout philosophy is "The Breathable Grid." We utilize a **fixed-center grid** for desktop (1440px max-width) to ensure the composition feels curated and intentional, rather than stretched.

- **White Space:** Increase standard vertical padding between sections to **120px+** to signal luxury and lack of urgency.
- **Grid:** A 12-column grid with wide 32px gutters. Elements should often "break" the grid slightly with asymmetrical offsets to mimic fashion editorial layouts.
- **Mobile:** Transition to a single-column layout with 24px side margins, maintaining the large vertical gaps to preserve the brand feel.

## Elevation & Depth

Depth is created through "Material Layering" rather than standard dropshadows.

- **Tonal Layers:** Use subtle shifts in background color (e.g., a Nude surface over an Off-White background) to define containers.
- **Ambient Depth:** When shadows are necessary, use extremely diffused, low-opacity shadows (Blur: 40px, Opacity: 4%) with a hint of the Truffle Brown in the shadow color. This makes elements feel like they are floating slightly above a soft surface.
- **Glassmorphism:** Apply backdrop blurs on navigation bars to simulate a frosted glass effect over editorial photography, keeping the UI light and ethereal.

## Shapes

The shape language is "Soft-Modernist." 

- **Primary Radius:** We use a "Soft" (0.25rem) radius for standard UI elements. This provides enough warmth to feel welcoming while maintaining the architectural discipline of straight lines.
- **Interactive Elements:** Buttons and form inputs should use the 0.25rem radius.
- **Editorial Frames:** Photography containers can remain sharp (0px) to mimic printed magazine spreads.

## Components

- **Buttons:** Use "Ghost-Style" buttons for secondary actions with 1px Champagne Gold borders. Primary buttons are solid Truffle Brown with white Montserrat text in `label-caps` format.
- **Inputs:** Ultra-minimal. Only a bottom border (1px Carrara Gray) that turns into Truffle Brown on focus. No heavy boxes.
- **Cards:** Use "Material Cards"—no borders, but a subtle change in background tone (e.g., #FDFCFB) and a very soft ambient shadow.
- **Chips/Tags:** Small, all-caps Montserrat text inside a pill-shaped container with a very light Luxury Nude background. Use these for treatment categories (e.g., "DERMATOLOGY", "FACIAL REJUVENATION").
- **Clinical Details:** Use "Technical Insets"—small boxes with a linene-texture background to house scientific data or ingredient lists, signaling the "Scientific" personality of the brand.