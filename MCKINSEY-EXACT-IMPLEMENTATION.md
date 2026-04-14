# McKinsey.com Exact Design Implementation

## Overview
This guide implements the exact McKinsey.com design system with their signature elements:
- **Blue (#003D7A)** as primary color
- **Clean white backgrounds** with minimal decoration
- **System fonts** (not custom serif)
- **High contrast** design philosophy
- **Generous whitespace**
- **Simple, clean cards** with subtle borders
- **No gradients or textures**

---

## Step 1: Import McKinsey CSS

Add to your `app/layout.tsx`:

```tsx
import '@/styles/mckinsey-exact.css';
```

---

## Step 2: Update Homepage Hero

Replace your hero section with this McKinsey-exact style:

```tsx
{/* HERO - McKinsey Style */}
<section className="mckinsey-hero bg-white">
  <div className="mckinsey-container-narrow">
    <div className="mckinsey-fade-in">
      {/* Remove logo/icon - McKinsey doesn't use this in hero */}
      
      {/* Eyebrow label */}
      <p className="mckinsey-label mb-6">
        PROGRAMME DELIVERY EXCELLENCE
      </p>
      
      {/* Main headline - clean, no decorative elements */}
      <h1 className="mckinsey-h1 mb-8">
        Clarity where others see complexity. Control where others lose it.
      </h1>
      
      {/* Body text - simple, clean */}
      <p className="mckinsey-body-large mb-12 max-w-[600px]">
        We help organisations take control of complex work bringing structure, direction, and delivery where it matters most.
      </p>
      
      {/* Single primary CTA - McKinsey style */}
      <div className="flex gap-4">
        <a href="/contact" className="mckinsey-btn mckinsey-btn-primary">
          Start a conversation
        </a>
        <a href="/case-studies" className="mckinsey-btn mckinsey-btn-secondary">
          Explore our work
        </a>
      </div>
    </div>
  </div>
</section>
```

---

## Step 3: Statement Section

```tsx
{/* STATEMENT - McKinsey Quote Style */}
<section className="mckinsey-section bg-[#F8F9FA]">
  <div className="mckinsey-container-narrow">
    <div className="mckinsey-quote">
      <p className="mb-6">
        Most projects do not fail because they are complex.
      </p>
      <p className="text-[#003D7A]">
        They fail because complexity is not controlled.
      </p>
    </div>
    <p className="mckinsey-label text-center mt-12">
      WE EXIST TO FIX THAT
    </p>
  </div>
</section>
```

---

## Step 4: Services Grid

```tsx
{/* SERVICES - McKinsey Card Grid */}
<section className="mckinsey-section bg-white">
  <div className="mckinsey-container">
    <div className="mb-16">
      <p className="mckinsey-label mb-4">WHAT WE DO</p>
      <h2 className="mckinsey-h2">Our services</h2>
    </div>

    <div className="mckinsey-grid-4">
      {/* Card 1 */}
      <div className="mckinsey-card">
        <h3 className="mckinsey-h4 mb-4">Clarity</h3>
        <p className="mckinsey-body-small">
          We bring a clear understanding of your situation and define what needs to happen.
        </p>
      </div>

      {/* Card 2 */}
      <div className="mckinsey-card">
        <h3 className="mckinsey-h4 mb-4">Control</h3>
        <p className="mckinsey-body-small">
          We structure delivery, manage risks, and keep everything visible and organised.
        </p>
      </div>

      {/* Card 3 */}
      <div className="mckinsey-card">
        <h3 className="mckinsey-h4 mb-4">Delivery</h3>
        <p className="mckinsey-body-small">
          We support execution from start to finish, ensuring work progresses in a controlled way.
        </p>
      </div>

      {/* Card 4 */}
      <div className="mckinsey-card">
        <h3 className="mckinsey-h4 mb-4">Website Delivery</h3>
        <p className="mckinsey-body-small">
          We deliver high-quality websites through structured coordination, without unnecessary complexity.
        </p>
      </div>
    </div>
  </div>
</section>
```

---

## Step 5: Featured Work

```tsx
{/* FEATURED WORK - McKinsey Large Card */}
<section className="mckinsey-section bg-[#F8F9FA]">
  <div className="mckinsey-container">
    <div className="mb-16">
      <p className="mckinsey-label mb-4">FEATURED WORK</p>
      <h2 className="mckinsey-h2">Work that moved things forward</h2>
    </div>

    {/* Large feature card */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-[#DEE2E6] overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="bg-[#F1F3F5] h-64 lg:h-auto"></div>
      
      {/* Content */}
      <div className="p-12">
        <p className="mckinsey-label mb-6">ERP PROGRAMME CLOSURE</p>
        <h3 className="mckinsey-h3 mb-6">
          A complex ERP programme brought to a controlled, credible closure
        </h3>
        <p className="mckinsey-body mb-8">
          Multiple suppliers. Unresolved issues. No clear closure position.
        </p>
        <a href="/case-studies" className="mckinsey-link">
          Read case study →
        </a>
      </div>
    </div>

    <div className="text-center mt-12">
      <a href="/case-studies" className="mckinsey-link">
        View all case studies →
      </a>
    </div>
  </div>
</section>
```

---

## Step 6: Statistics

```tsx
{/* STATISTICS - McKinsey Stats Grid */}
<section className="mckinsey-section bg-white">
  <div className="mckinsey-container">
    <div className="mckinsey-grid-3">
      <div className="mckinsey-stat">
        <div className="mckinsey-stat-number">15+</div>
        <div className="mckinsey-stat-label">Years Combined Experience</div>
      </div>
      
      <div className="mckinsey-stat">
        <div className="mckinsey-stat-number">£50M+</div>
        <div className="mckinsey-stat-label">Programme Value Delivered</div>
      </div>
      
      <div className="mckinsey-stat">
        <div className="mckinsey-stat-number">100%</div>
        <div class="mckinsey-stat-label">Client Satisfaction</div>
      </div>
    </div>
  </div>
</section>
```

---

## Step 7: How We Work

```tsx
{/* HOW WE WORK - McKinsey Feature Section */}
<section className="mckinsey-section bg-[#F8F9FA]">
  <div className="mckinsey-container-narrow">
    <p className="mckinsey-label mb-4">HOW WE WORK</p>
    <h2 className="mckinsey-h2 mb-8">
      We focus only on what creates real value
    </h2>
    
    <p className="mckinsey-body-large mb-12">
      We do not add unnecessary work, unnecessary complexity, or unnecessary process. Everything we do must have a clear purpose and a clear outcome.
    </p>

    {/* Feature boxes */}
    <div className="mckinsey-feature">
      <h3 className="mckinsey-h4 mb-4">What this means</h3>
      <ul className="mckinsey-list">
        <li>We do not build things "just in case"</li>
        <li>We do not create documents or reports that are not actively used</li>
        <li>We only introduce structure where it improves clarity, reduces risk, or supports delivery</li>
      </ul>
    </div>

    <div className="mckinsey-feature">
      <h3 className="mckinsey-h4 mb-4">Our approach</h3>
      <p className="mckinsey-body mb-4">Before doing any piece of work, we ask three simple questions:</p>
      <ul className="mckinsey-list">
        <li>What problem does this solve?</li>
        <li>Who benefits from this?</li>
        <li>What happens if we simplify this?</li>
      </ul>
    </div>
  </div>
</section>
```

---

## Step 8: CTA Section

```tsx
{/* CTA - McKinsey Simple CTA */}
<section className="mckinsey-section bg-white">
  <div className="mckinsey-container-narrow text-center">
    <h2 className="mckinsey-h2 mb-8">
      Ready to take control?
    </h2>
    <p className="mckinsey-body-large mb-12">
      Let's discuss how we can bring clarity and structure to your programme.
    </p>
    <a href="/contact" className="mckinsey-btn mckinsey-btn-primary">
      Start a conversation
    </a>
    <p className="mckinsey-body-small mt-8">
      Or email us at{' '}
      <a href="mailto:hello@stratoraconsulting.com" className="mckinsey-link">
        hello@stratoraconsulting.com
      </a>
    </p>
  </div>
</section>
```

---

## Key McKinsey Design Principles

### 1. **Color Usage**
- Primary: #003D7A (McKinsey Blue)
- Background: #FFFFFF (White) and #F8F9FA (Light Gray)
- Text: #212529 (Near Black)
- NO gradients, NO textures, NO decorative elements

### 2. **Typography**
- System fonts only (no custom serif for web)
- Bold headings (700 weight)
- Clean, readable body text
- Generous line-height (1.6-1.75)

### 3. **Spacing**
- Large sections: 120px padding
- Standard sections: 80px padding
- Card padding: 32px
- Generous margins between elements

### 4. **Cards**
- White background
- 1px border (#DEE2E6)
- NO shadows by default
- Subtle shadow on hover
- NO rounded corners

### 5. **Buttons**
- Rectangular (no border-radius)
- Solid colors
- Clear hover states
- Generous padding (14px 32px)

### 6. **Layout**
- Max-width: 1200px for full content
- Max-width: 800px for reading content
- Clean grid layouts (2, 3, or 4 columns)
- NO complex layouts

---

## What to Remove

1. ❌ Remove all texture overlays
2. ❌ Remove gradient backgrounds
3. ❌ Remove decorative SVG elements in hero
4. ❌ Remove complex animations
5. ❌ Remove rounded corners
6. ❌ Remove custom serif fonts for body text
7. ❌ Remove dark backgrounds (except footer)
8. ❌ Remove colored backgrounds (except light gray)

---

## What to Keep

1. ✅ Your exact text content
2. ✅ Your page structure
3. ✅ Your navigation
4. ✅ Your footer
5. ✅ Your case studies content
6. ✅ Your services descriptions

---

## Implementation Checklist

- [ ] Add mckinsey-exact.css to project
- [ ] Update hero section
- [ ] Update statement section
- [ ] Update services grid
- [ ] Update featured work
- [ ] Add statistics section
- [ ] Update how we work section
- [ ] Update CTA section
- [ ] Remove all textures/gradients
- [ ] Test on mobile
- [ ] Test on tablet
- [ ] Test on desktop

---

This is the EXACT McKinsey design system - clean, professional, high-contrast, and focused on content over decoration.
