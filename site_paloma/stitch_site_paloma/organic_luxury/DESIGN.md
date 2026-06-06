---
name: Organic Luxury
colors:
  surface: '#fff8f7'
  surface-dim: '#dfd8d8'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2f1'
  surface-container: '#f4eceb'
  surface-container-high: '#eee6e6'
  surface-container-highest: '#e8e1e0'
  on-surface: '#1e1b1b'
  on-surface-variant: '#4f4444'
  inverse-surface: '#33302f'
  inverse-on-surface: '#f7efee'
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
  tertiary: '#1f3026'
  on-tertiary: '#ffffff'
  tertiary-container: '#35463c'
  on-tertiary-container: '#a0b3a6'
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
  tertiary-fixed: '#d4e7d9'
  tertiary-fixed-dim: '#b8cbbe'
  on-tertiary-fixed: '#0e1f16'
  on-tertiary-fixed-variant: '#394b40'
  background: '#fff8f7'
  on-background: '#1e1b1b'
  surface-variant: '#e8e1e0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: '8'
  container-max: '1280'
  gutter: '24'
  section-padding-lg: '120'
  section-padding-sm: '64'
---

## Brand & Style

This design system embodies "Clean Organic Luxury," now presented in a luminous light mode that balances the precision of high-end dermatological care with the restorative quiet of a serene, non-clinical environment. The target audience is discerning individuals seeking professional expertise in a sanctuary-like digital space.

The aesthetic is a hybrid of **Minimalism** and **Modern Luxury**. It prioritizes generous negative space—referred to here as "breathing room"—to evoke a sense of calm and exclusivity. By transitioning to a light, airy palette, the system uses sophisticated serif typography and warm earth-toned accents to build a narrative of timelessness and specialized care.

Key characteristics include:
- **Serenity:** A heavy reliance on a bright, clean foundation to reduce visual stress and create an open, inviting experience.
- **Sophistication:** Using deep truffle and warm sand for high-contrast typography and interactive elements.
- **Organic Precision:** Softly rounded corners that feel human and approachable, paired with a structured, rigorous grid.

## Colors

The color palette is rooted in earth-toned sophistication, now optimized for a light, high-clarity interface. The primary engine of the UI is the interplay between **Linen Whites** (background/surfaces) and **Deep Truffle** (typography and primary actions).

- **Primary (#543C3C):** In this light mode, the primary color is used for high-impact typography, primary buttons, and key structural elements. It provides a grounded, professional contrast against light surfaces.
- **Secondary (#CAB2A1):** Used for soft accents, decorative elements, and secondary call-to-actions. It adds a layer of organic warmth (Warm Sand) to the clinical precision of the layout.
- **Neutral/Background:** The foundational canvas is a crisp, warm white derived from the truffle seed to maintain a cohesive, "organic" rather than "stark" white appearance.

Gradients are avoided to maintain the minimalist aesthetic, relying instead on flat tonal shifts between surface levels.

## Typography

The typography system uses a classic pairing of a high-contrast serif for authority and a clean, modern sans-serif for functional clarity.

- **Playfair Display** (Headlines): Used for all editorial content, section headers, and the hero area. Its delicate hairlines evoke a sense of luxury publishing, rendered in Deep Truffle for optimal readability on light backgrounds.
- **Manrope** (Body & Labels): A geometric sans-serif that provides a contemporary balance. It is highly legible at smaller sizes and feels "tailored."

**Usage Notes:**
- Large headlines should use a slight negative letter-spacing to appear more cohesive.
- "Label-caps" should be used for overlines (e.g., "TREATMENTS" above a headline) to establish hierarchy.
- Line heights for body text are intentionally generous (1.6) to enhance the feeling of "breathable" space.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain an editorial, magazine-like structure. 

- **The 12-Column Grid:** Content is housed within a 1280px central container. Use 24px gutters.
- **Vertical Rhythm:** A strict 8px baseline grid ensures consistent spacing between elements. 
- **Section Breathing Room:** Sections are separated by large vertical paddings (120px on desktop) to ensure the user never feels overwhelmed.
- **Mobile Adaptivity:** On mobile, margins reduce to 20px, and section padding scales down to 64px. 

## Elevation & Depth

In this light mode, visual hierarchy is conveyed through **Tonal Layers** and **Subtle Shadows** rather than high-contrast dark surfaces.

- **Surface Tiering:** Use color to denote elevation. The main background is the lightest tone; elevated cards use a slightly different neutral tint or very subtle 1px borders in a muted secondary tone.
- **Soft Shadows:** If depth is required, use extremely soft, large-radius shadows with low opacity (3-5%) to create a "floated" effect without looking heavy or "app-like."
- **Depth through Imagery:** Depth is primarily created through the use of high-quality photography with natural bokeh, which pops against the light UI.

## Shapes

The shape language is defined by "Softened Geometry." 

- **Radius:** A standard 0.5rem (8px) radius is applied to cards, input fields, and buttons. This provides a friendly, approachable feel.
- **Image Treatment:** Images should occasionally utilize asymmetrical rounding (e.g., top-left and bottom-right only) to create a more custom, boutique aesthetic.

## Components

### Buttons
- **Primary:** Solid Deep Truffle (#543C3C) with Linen White Manrope text (bold). 8px corner radius.
- **Secondary:** Transparent background with a 1.5px border in Deep Truffle or Warm Sand. Text in matching color.
- **Tertiary:** Text-only in Deep Truffle with a 1px underline that expands on hover.

### Cards (Treatments)
- Cards should use a Surface-Container background to subtly pop against the page background.
- Use a 1px border in a muted earth tone.
- Headlines inside cards use **Headline-MD**.

### Input Fields
- Underlined style or subtle box. Use a background slightly darker than the page with a Deep Truffle border on focus.

### Lists
- Use custom iconography for bullets—ideally a small, elegant organic shape in Warm Sand.

### WhatsApp Floating Action
- Positioned in the bottom right. Use a soft circular shape with a Deep Truffle background and a subtle soft shadow.