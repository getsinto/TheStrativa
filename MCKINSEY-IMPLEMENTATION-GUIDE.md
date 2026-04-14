# McKinsey-Inspired Redesign Implementation Guide
## Stratora Consulting Website

---

## Quick Start

### Step 1: Update Tailwind Configuration
Replace your current `tailwind.config.ts` with `tailwind.config.mckinsey.ts`:

```bash
mv tailwind.config.ts tailwind.config.old.ts
mv tailwind.config.mckinsey.ts tailwind.config.ts
```

### Step 2: Update Global Styles
Add these utility classes to `styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-body text-body text-charcoal;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

@layer utilities {
  .container-custom {
    @apply max-w-container mx-auto px-md;
  }
  
  .content-width {
    @apply max-w-content mx-auto;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
```

### Step 3: Update Button Component
Modify `components/ui/Button.tsx` for McKinsey style:

```tsx
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary',
  onClick,
  className = ''
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-xl py-md text-body font-medium transition-all duration-200";
  
  const variants = {
    primary: "bg-navy text-white hover:bg-navy-dark",
    secondary: "bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white",
    ghost: "text-navy hover:text-teal",
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
```

---

## Component Usage Examples

### 1. Editorial Hero

```tsx
<section className="bg-white py-4xl">
  <div className="max-w-content mx-auto px-md">
    <div className="animate-fade-in-up">
      <p className="text-label text-steel uppercase mb-lg">
        Programme Delivery Excellence
      </p>
      
      <h1 className="font-display text-hero text-navy mb-xl">
        Clarity where others see complexity
      </h1>
      
      <p className="text-body-lg text-charcoal mb-2xl max-w-wide">
        We help organisations take control of complex programmes.
      </p>
      
      <Button href="/contact" variant="primary">
        Start a conversation
      </Button>
    </div>
  </div>
</section>
```

### 2. Statement Block

```tsx
import StatementBlock from '@/components/mckinsey/StatementBlock';

<StatementBlock accent attribution="Stratora Consulting">
  Most projects fail not because they are complex, but because complexity is not controlled.
</StatementBlock>
```

### 3. Service Cards Grid

```tsx
import ServiceCard from '@/components/mckinsey/ServiceCard';

<section className="bg-white py-4xl">
  <div className="max-w-container mx-auto px-md">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
      <ServiceCard
        icon={<CheckIcon />}
        title="Clarity"
        description="We bring a clear understanding of your situation."
        href="/services/clarity"
      />
      {/* More cards... */}
    </div>
  </div>
</section>
```

### 4. Featured Insight

```tsx
import FeaturedInsight from '@/components/mckinsey/FeaturedInsight';

<FeaturedInsight
  category="Programme Delivery"
  title="From chaos to controlled closure"
  excerpt="Multiple suppliers. Unresolved issues. No clear closure position."
  href="/case-studies/erp-programme-closure"
  imagePosition="left"
/>
```

### 5. Statistics Block

```tsx
import StatisticsBlock from '@/components/mckinsey/StatisticsBlock';

<StatisticsBlock
  columns={3}
  statistics={[
    { value: '15+', label: 'Years Combined Experience' },
    { value: '£50M+', label: 'Programme Value Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
  ]}
/>
```

### 6. Content Cards Grid

```tsx
import ContentCard from '@/components/mckinsey/ContentCard';

<div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
  <ContentCard
    category="Programme Delivery"
    title="Why most ERP programmes fail"
    excerpt="It's not the technology. It's the lack of structure and control."
    href="/insights/why-erp-programmes-fail"
  />
  {/* More cards... */}
</div>
```

---

## Page Templates

### Homepage Structure

```
1. Editorial Hero (py-4xl)
   - Label
   - Large headline
   - Supporting text
   - Single CTA
   - Scroll indicator

2. Statement Block (bg-gray-100, py-4xl)
   - Border-left accent
   - Large serif quote
   - Optional attribution

3. Services Grid (bg-white, py-4xl)
   - Section header
   - 3-column grid
   - Service cards with icons

4. Featured Work (bg-gray-100, py-4xl)
   - Section header
   - Large format case study
   - Image + content split

5. Statistics (bg-white, py-4xl)
   - 3-column grid
   - Large numbers
   - Labels

6. Insights Preview (bg-gray-100, py-4xl)
   - Section header
   - 3-column grid
   - Content cards

7. CTA Section (bg-white, py-4xl)
   - Centered content
   - Headline + text
   - Single CTA
```

### Case Study Template

```
1. Hero
   - Client name (label)
   - Project title (h1)
   - Key outcome (body-lg)

2. Challenge (bg-gray-100)
   - Border-left accent
   - Full-width text
   - Max-width 720px

3. Approach (bg-white)
   - 2-column layout
   - Bullet points
   - Process steps

4. Results (bg-gray-100)
   - Statistics block
   - Client quote
   - Visual evidence

5. Related Work (bg-white)
   - 2-3 related case studies
   - Content cards
```

### About Page Template

```
1. Hero
   - Company statement
   - Mission/vision

2. Leadership (bg-gray-100)
   - 2-column grid
   - Photos + bios

3. Values (bg-white)
   - 3-column grid
   - Icon + title + description

4. Approach (bg-gray-100)
   - Statement block
   - Process overview

5. CTA (bg-white)
   - Contact section
```

---

## Responsive Breakpoints

### Mobile (< 640px)
```css
- Single column layouts
- Font sizes: 60% of desktop
- Spacing: 50% of desktop
- py-2xl instead of py-4xl
- Stack all grids
- Full-width buttons
```

### Tablet (641-1024px)
```css
- 2-column grids
- Font sizes: 80% of desktop
- Spacing: 75% of desktop
- py-3xl instead of py-4xl
- Maintain visual hierarchy
```

### Desktop (1025px+)
```css
- Full design system
- 3-column grids
- Maximum spacing
- py-4xl sections
- Optimal line lengths
```

---

## Animation Implementation

### Fade In Up (Page Load)

```tsx
<div className="animate-fade-in-up">
  {/* Content */}
</div>
```

### Scroll-Triggered Animations

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {children}
    </div>
  );
}
```

---

## Content Guidelines

### Headlines
- **Maximum 10 words**
- Use active voice
- Be specific, not abstract
- Front-load key information

### Body Text
- **Maximum 25 words per sentence**
- One idea per paragraph
- Use concrete examples
- Avoid jargon

### CTAs
- **Maximum 4 words**
- Action-oriented verbs
- Clear value proposition
- Examples:
  - "Start a conversation"
  - "View our work"
  - "Read the case study"
  - "Get in touch"

---

## Migration Checklist

### Phase 1: Foundation (Week 1)
- [ ] Update Tailwind config
- [ ] Update global styles
- [ ] Update Button component
- [ ] Create AnimatedSection component
- [ ] Test on all breakpoints

### Phase 2: Components (Week 2)
- [ ] Create StatementBlock
- [ ] Create ServiceCard
- [ ] Create ContentCard
- [ ] Create FeaturedInsight
- [ ] Create StatisticsBlock
- [ ] Test all components

### Phase 3: Pages (Week 3)
- [ ] Redesign Homepage
- [ ] Redesign About page
- [ ] Redesign Case Studies listing
- [ ] Redesign Individual case study
- [ ] Redesign Contact page

### Phase 4: Polish (Week 4)
- [ ] Add scroll animations
- [ ] Optimize images
- [ ] Test performance
- [ ] Cross-browser testing
- [ ] Mobile optimization
- [ ] Accessibility audit

---

## Performance Optimization

### Images
```tsx
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  quality={85}
  loading="lazy"
  className="w-full h-auto"
/>
```

### Fonts
```tsx
// lib/fonts.ts
import { Inter, Playfair_Display } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});
```

### Code Splitting
```tsx
import dynamic from 'next/dynamic';

const DeliveryWheel = dynamic(() => import('@/components/sections/DeliveryWheel'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
});
```

---

## Accessibility

### Color Contrast
- Navy (#003366) on white: 9.7:1 ✓
- Charcoal (#1A1A1A) on white: 15.8:1 ✓
- Steel (#6B7280) on white: 4.6:1 ✓

### Keyboard Navigation
```tsx
<button
  className="focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
  aria-label="Start a conversation"
>
  Start a conversation
</button>
```

### Screen Readers
```tsx
<nav aria-label="Main navigation">
  {/* Navigation items */}
</nav>

<section aria-labelledby="services-heading">
  <h2 id="services-heading">Our Services</h2>
  {/* Content */}
</section>
```

---

## Testing Checklist

### Visual Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3.5s

### Accessibility Testing
- [ ] WAVE (no errors)
- [ ] axe DevTools (no violations)
- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Color contrast validation

---

## Support & Resources

### Design References
- McKinsey.com
- BCG.com
- Bain.com
- HBR.org

### Documentation
- Tailwind CSS: https://tailwindcss.com
- Next.js: https://nextjs.org
- Web Accessibility: https://www.w3.org/WAI/

### Tools
- Figma (design mockups)
- Lighthouse (performance)
- WAVE (accessibility)
- BrowserStack (cross-browser testing)

---

*This implementation guide provides everything needed to execute the McKinsey-inspired redesign systematically and professionally.*
