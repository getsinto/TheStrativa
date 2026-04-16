# Visual Testing Checklist

## Development Server
✅ **Running on:** http://localhost:3003

---

## Homepage Sections to Test

### 1. Hero Section
- [ ] Gradient background displays correctly
- [ ] Hero text is readable and properly sized
- [ ] CTA buttons have hover effects (shimmer animation)
- [ ] Hero image displays with proper aspect ratio
- [ ] Floating accent card appears on desktop
- [ ] Scroll indicator animates smoothly
- [ ] Spacing looks generous (py-20 lg:py-24)

### 2. Statement Section (Quote)
- [ ] Gradient background (neutral-50 to white) displays
- [ ] Decorative accent line at top is visible
- [ ] Left border accent line shows on quote
- [ ] Text gradient on italic text works
- [ ] Animated badge with pulse effect displays
- [ ] Spacing: py-32 md:py-40 lg:py-48

### 3. Services Grid
- [ ] 4 service cards display in grid (1 col mobile, 2 tablet, 4 desktop)
- [ ] Icons display in gradient background circles
- [ ] Hover effects work (scale icon, color change)
- [ ] Card shadows appear on hover
- [ ] Section header with decorative lines displays
- [ ] Spacing: py-32 md:py-40 lg:py-48

### 4. Featured Work
- [ ] Large premium card displays (2 col image, 3 col content on desktop)
- [ ] Image zoom effect on hover works
- [ ] Category badge displays correctly
- [ ] Text gradient on hover works for heading
- [ ] CTA link has arrow animation on hover
- [ ] "View all case studies" link works
- [ ] Bottom CTA section displays with proper spacing
- [ ] Spacing: py-32 md:py-40 lg:py-48

### 5. How We Work
- [ ] Premium cards display with icons
- [ ] Numbered steps (1, 2, 3) have hover effects
- [ ] Bullet points have hover scale effect
- [ ] Benefits grid (3 columns) displays correctly
- [ ] Final statement with left border displays
- [ ] Spacing: py-32 md:py-40 lg:py-48

### 6. Delivery Wheel
- [ ] Component renders correctly
- [ ] (No spacing changes - existing component)

### 7. Closing CTA
- [ ] Full-width gradient background (navy → teal) displays
- [ ] Pattern overlay is visible but subtle
- [ ] Gold badge displays at top
- [ ] White text is readable
- [ ] CTA buttons have correct styling (white bg, white border)
- [ ] Email link has hover effect (gold color)
- [ ] Decorative blur elements visible
- [ ] Spacing: py-32 md:py-40 lg:py-48

---

## Responsive Testing

### Mobile (320px - 767px)
- [ ] All sections stack vertically
- [ ] Text sizes are readable (clamp functions work)
- [ ] Buttons are full-width or properly sized
- [ ] Images scale correctly
- [ ] Spacing: py-32 (128px)
- [ ] No horizontal scroll
- [ ] Touch targets are large enough (min 44px)

### Tablet (768px - 1023px)
- [ ] Grid layouts adjust (2 columns where appropriate)
- [ ] Text sizes increase appropriately
- [ ] Spacing: py-40 (160px)
- [ ] Hero image appears on tablet
- [ ] Cards display in 2-column grid

### Desktop (1024px+)
- [ ] Full grid layouts (4 columns for services)
- [ ] Maximum container width: 1280px
- [ ] Spacing: py-48 (192px)
- [ ] All decorative elements visible
- [ ] Hover effects work smoothly

---

## Interactive Elements

### Buttons
- [ ] Primary button: Navy gradient background, shimmer on hover, lift effect
- [ ] Secondary button: Transparent with navy border, fills on hover
- [ ] Ghost button: Underline animation on hover
- [ ] Focus states visible (ring on keyboard focus)

### Cards
- [ ] Premium cards: Shadow increases on hover, lift effect
- [ ] Feature cards: Left border appears on hover
- [ ] Service cards: Icon scales, text color changes

### Links
- [ ] Underline animation on hover
- [ ] Arrow icons slide on hover
- [ ] Color transitions smooth

### Animations
- [ ] Fade-in-up on scroll (AnimatedSection)
- [ ] Pulse effects on badges
- [ ] Bounce animation on scroll indicator
- [ ] Smooth transitions (300ms default)

---

## Typography

### Headings
- [ ] Display font (Playfair Display) loads correctly
- [ ] Fluid sizing works (clamp functions)
- [ ] Letter spacing is appropriate
- [ ] Line heights are comfortable

### Body Text
- [ ] Body font (Inter) loads correctly
- [ ] Text is readable (min 16px)
- [ ] Line height is comfortable (1.625 - 1.8)
- [ ] Color contrast is sufficient (WCAG AA)

---

## Colors

### Primary Colors
- [ ] Navy (#001F3F) displays correctly
- [ ] Teal (#0A5F5F) displays correctly
- [ ] Gold (#C9A961) displays correctly

### Gradients
- [ ] Navy → Teal gradient smooth
- [ ] Text gradients render correctly
- [ ] Background gradients subtle

### Neutral Scale
- [ ] White backgrounds clean
- [ ] Gray text readable
- [ ] Border colors subtle

---

## Performance

### Loading
- [ ] Page loads quickly (< 3 seconds)
- [ ] Images load progressively
- [ ] No layout shift (CLS)
- [ ] Fonts load without FOIT/FOUT

### Animations
- [ ] Animations smooth (60fps)
- [ ] No janky scrolling
- [ ] Hover effects instant
- [ ] Transitions smooth

---

## Accessibility

### Keyboard Navigation
- [ ] All interactive elements focusable
- [ ] Focus indicators visible
- [ ] Tab order logical
- [ ] Skip links work (if present)

### Screen Readers
- [ ] Headings in logical order (h1, h2, h3)
- [ ] Alt text on images
- [ ] ARIA labels where needed
- [ ] Semantic HTML used

### Color Contrast
- [ ] Text on backgrounds meets WCAG AA (4.5:1)
- [ ] Interactive elements meet WCAG AA
- [ ] Focus indicators meet WCAG AA (3:1)

---

## Browser Testing

### Chrome
- [ ] All features work
- [ ] Animations smooth
- [ ] Gradients render correctly

### Firefox
- [ ] All features work
- [ ] Animations smooth
- [ ] Gradients render correctly

### Safari
- [ ] All features work
- [ ] Animations smooth
- [ ] Gradients render correctly
- [ ] Backdrop filters work

### Edge
- [ ] All features work
- [ ] Animations smooth
- [ ] Gradients render correctly

---

## Issues Found

### Critical
- [ ] None

### Medium
- [ ] None

### Minor
- [ ] None

---

## Sign-off

- [ ] All sections display correctly
- [ ] Spacing is generous and premium
- [ ] Responsive design works on all breakpoints
- [ ] Interactive elements work smoothly
- [ ] Typography is readable and elegant
- [ [ ] Colors match design system
- [ ] Performance is acceptable
- [ ] Accessibility requirements met
- [ ] Cross-browser compatible

**Tested by:** _________________
**Date:** _________________
**Status:** ☐ Approved ☐ Needs Changes

---

## Next Steps After Approval

1. Deploy to production
2. Apply same design to remaining pages:
   - About
   - Services
   - Case Studies
   - Contact
   - Insights
   - Pricing
   - Delivery Standards
3. Update Navigation and Footer
4. Final QA testing
