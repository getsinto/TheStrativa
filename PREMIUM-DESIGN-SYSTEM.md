# Premium Design System Upgrade
## McKinsey-Style Corporate Design

---

## 🎨 Enhanced Color Palette

### Primary Colors (Corporate Luxury)
```css
--primary-navy: #001F3F;        /* Deep corporate navy - primary brand */
--primary-teal: #0A5F5F;        /* Sophisticated teal - accent */
--primary-gold: #C9A961;        /* Luxury gold - premium accent */
```

### Neutral Palette (Professional Grays)
```css
--neutral-50: #FAFAFA;          /* Ultra light background */
--neutral-100: #F5F5F5;         /* Light background */
--neutral-200: #E8E8E8;         /* Subtle borders */
--neutral-300: #D4D4D4;         /* Medium borders */
--neutral-400: #A3A3A3;         /* Disabled text */
--neutral-500: #737373;         /* Secondary text */
--neutral-600: #525252;         /* Body text */
--neutral-700: #404040;         /* Dark text */
--neutral-800: #262626;         /* Headings */
--neutral-900: #171717;         /* Pure black alternative */
```

### Semantic Colors
```css
--success: #059669;             /* Success states */
--warning: #D97706;             /* Warning states */
--error: #DC2626;               /* Error states */
--info: #0284C7;                /* Info states */
```

### Background Palette
```css
--bg-primary: #FFFFFF;          /* Pure white */
--bg-secondary: #FAFAFA;        /* Off-white */
--bg-tertiary: #F5F5F5;         /* Light gray */
--bg-dark: #001F3F;             /* Dark sections */
--bg-accent: #F8F9FA;           /* Subtle accent */
```

---

## 📝 Typography System

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

### Type Scale (Fluid Typography)
```css
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);      /* 12-14px */
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);        /* 14-16px */
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);      /* 16-18px */
--text-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem);    /* 18-20px */
--text-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);        /* 20-24px */
--text-2xl: clamp(1.5rem, 1.35rem + 0.75vw, 1.875rem);     /* 24-30px */
--text-3xl: clamp(1.875rem, 1.65rem + 1.125vw, 2.25rem);   /* 30-36px */
--text-4xl: clamp(2.25rem, 1.95rem + 1.5vw, 3rem);         /* 36-48px */
--text-5xl: clamp(3rem, 2.55rem + 2.25vw, 4rem);           /* 48-64px */
--text-6xl: clamp(3.75rem, 3.15rem + 3vw, 5rem);           /* 60-80px */
```

### Font Weights
```css
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Line Heights
```css
--leading-tight: 1.2;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 1.75;
```

### Letter Spacing
```css
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

---

## 🔲 Spacing System

### Base Unit: 4px

```css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
--space-40: 10rem;     /* 160px */
--space-48: 12rem;     /* 192px */
```

### Section Spacing
```css
--section-xs: 3rem;    /* 48px */
--section-sm: 4rem;    /* 64px */
--section-md: 6rem;    /* 96px */
--section-lg: 8rem;    /* 128px */
--section-xl: 10rem;   /* 160px */
```

---

## 🎭 Shadows & Elevation

```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-premium: 0 30px 60px -15px rgba(0, 31, 63, 0.15);
```

---

## 🔘 Button Styles

### Primary Button (Navy)
```css
background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
color: #FFFFFF;
padding: 14px 32px;
border-radius: 6px;
font-weight: 600;
font-size: 16px;
letter-spacing: 0.01em;
box-shadow: 0 4px 12px rgba(0, 31, 63, 0.15);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

hover: {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 31, 63, 0.25);
}
```

### Secondary Button (Outline)
```css
background: transparent;
color: #001F3F;
border: 2px solid #001F3F;
padding: 12px 30px;
border-radius: 6px;
font-weight: 600;
font-size: 16px;

hover: {
  background: #001F3F;
  color: #FFFFFF;
}
```

### Tertiary Button (Ghost)
```css
background: transparent;
color: #0A5F5F;
padding: 12px 24px;
font-weight: 600;
font-size: 16px;
position: relative;

hover: {
  color: #001F3F;
}

::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}

hover::after {
  width: 100%;
}
```

---

## 🎴 Card Styles

### Premium Card
```css
background: #FFFFFF;
border: 1px solid #E8E8E8;
border-radius: 12px;
padding: 32px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

hover: {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 31, 63, 0.08);
  border-color: #0A5F5F;
}
```

### Feature Card
```css
background: linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%);
border: 1px solid #E8E8E8;
border-radius: 16px;
padding: 40px;
position: relative;
overflow: hidden;

::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #0A5F5F 0%, #C9A961 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

hover::before {
  opacity: 1;
}
```

---

## 🎯 Icon Style

### Icon System
- **Style**: Minimal, line-based (2px stroke)
- **Size Scale**: 16px, 20px, 24px, 32px, 48px
- **Color**: Match text color or use accent
- **Library**: Heroicons, Lucide, or Feather Icons

### Icon Usage
```css
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 24px; height: 24px; }
.icon-lg { width: 32px; height: 32px; }
.icon-xl { width: 48px; height: 48px; }
```

---

## 🎪 Banner & Hero Sections

### Hero Section (Full-Screen)
```css
min-height: 90vh;
background: linear-gradient(135deg, #001F3F 0%, #003366 50%, #0A5F5F 100%);
position: relative;
overflow: hidden;

/* Overlay pattern */
::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
  background-size: 40px 40px;
}
```

### Content Banner
```css
background: linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%);
border-top: 1px solid #E8E8E8;
border-bottom: 1px solid #E8E8E8;
padding: 80px 0;
position: relative;

/* Accent line */
::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #0A5F5F 0%, #C9A961 100%);
}
```

---

## 📐 Layout Structure

### Container Widths
```css
--container-xs: 640px;
--container-sm: 768px;
--container-md: 1024px;
--container-lg: 1280px;
--container-xl: 1440px;
--container-2xl: 1600px;
```

### Grid System
```css
.grid-2 { grid-template-columns: repeat(2, 1fr); gap: 32px; }
.grid-3 { grid-template-columns: repeat(3, 1fr); gap: 32px; }
.grid-4 { grid-template-columns: repeat(4, 1fr); gap: 24px; }
```

---

## 🎬 Animation & Transitions

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-premium: cubic-bezier(0.16, 1, 0.3, 1);
```

### Duration
```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

---

## 🎨 Design Principles

1. **Whitespace is Premium** - Use generous spacing
2. **Hierarchy is Key** - Clear visual hierarchy in every section
3. **Consistency** - Same patterns across all pages
4. **Subtle Animations** - Smooth, professional transitions
5. **High Contrast** - Ensure readability
6. **Mobile-First** - Responsive on all devices
7. **Accessibility** - WCAG 2.1 AA compliant
8. **Performance** - Fast loading, optimized assets

---

## 📱 Responsive Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

---

This design system creates a world-class, premium corporate website that matches McKinsey's level of sophistication and professionalism.
