---
name: Update Case Study Content
status: completed
created: 2026-04-09
completed: 2026-04-09
---

# Update Case Study Content

## Overview
Update the three case study detail pages with new, more structured content that follows a consistent format: Title, Situation, Problem, Intervention, Outcome, and Final Line.

## Requirements

### R1: Update Case Study 1 - ERP Programme Closure
**Priority:** High  
**Status:** completed

Update the ERP Programme Closure case study with the following content structure:

**Title:**
- "A complex ERP programme brought to a controlled, credible closure."

**Situation:**
- "A major ERP programme involving multiple suppliers had reached its final stages without a clear understanding of delivery status."

**Problem:**
- Multiple suppliers.
- Unresolved issues.
- No clear closure position.
- Different stakeholders held different views of reality.
- Delivery had taken place, but clarity had not.

**Intervention:**
- We stepped in to establish control.
- We reviewed delivery against scope, aligned stakeholders on what had actually been delivered, and clearly defined what remained.
- We separated:
  - Completed delivery
  - Outstanding risks
  - Unresolved issues
- We replaced assumption with evidence.

**Outcome:**
- A clear, evidence-based closure position.
- Leadership were able to make a confident decision based on reality, not interpretation.
- The programme was closed in a controlled and credible way, with a defined transition into business-as-usual.

**Final Line:**
- "Not a forced ending. A controlled closure."

### R2: Update Case Study 2 - Lessons Learned & Survey Design
**Priority:** High  
**Status:** completed

Update the Lessons Learned & Survey Design case study with the following content structure:

**Title:**
- "From unclear feedback to structured, usable insight."

**Situation:**
- "Stakeholder feedback was required to capture lessons learned across the programme."

**Problem:**
- Feedback was inconsistent.
- Scoring was unclear.
- Questions were open to interpretation.
- The data could not be trusted to support decision-making.

**Intervention:**
- We redesigned the approach from the ground up.
- We structured the survey around delivery phases, clarified scoring, and removed ambiguity from every question.
- We ensured that:
  - Every response could be interpreted clearly
  - Every score had a consistent meaning
  - Every output could be analysed with confidence

**Outcome:**
- A structured, reliable view of programme performance.
- Leadership gained clear insight into what worked, what did not, and what needed to change going forward.

**Final Line:**
- "Not just feedback. Clear, usable insight."

### R3: Update Case Study 3 - Go-Live Readiness
**Priority:** High  
**Status:** completed

Update the Go-Live Readiness case study with the following content structure:

**Title:**
- "A complex go-live decision made with clarity and control."

**Situation:**
- "Multiple workstreams were approaching go-live at different levels of readiness."

**Problem:**
- No single view of readiness.
- Different stakeholders held different positions.
- Risks were not clearly understood or aligned.
- Go-live risked becoming a decision based on pressure, not clarity.

**Intervention:**
- We defined what readiness actually meant.
- We aligned stakeholders around a "ready with conditions" position, ensuring all risks were:
  - Visible
  - Understood
  - Owned
- We brought structure to decision-making.

**Outcome:**
- A controlled go-live decision.
- Known risks were accepted, managed, and transitioned into Hypercare with clear ownership.
- The programme moved forward with clarity, not uncertainty.

**Final Line:**
- "Not perfect readiness. Controlled readiness."

### R4: Update Data Structure
**Priority:** High  
**Status:** completed

Update the STATIC_CASE_STUDIES data structure in both:
- `app/case-studies/[slug]/page.tsx`
- `app/case-studies/page.tsx`

The data structure should support the new content format with fields for:
- title (subtitle/tagline)
- situation
- problem (array of bullet points)
- intervention (array of bullet points)
- outcome (array of paragraphs)
- finalLine

### R5: Update Page Layout
**Priority:** High  
**Status:** completed

Update the case study detail page layout (`app/case-studies/[slug]/page.tsx`) to display the new content structure:

1. **Hero Section:** Display the title (tagline)
2. **Situation Section:** Display the situation context
3. **The Challenge Section:** Display the problem bullet points
4. **The Intervention Section:** Display the intervention bullet points
5. **The Outcome Section:** Display the outcome paragraphs
6. **Final Line:** Display as a prominent closing statement

Maintain the existing visual design and animations.

### R6: Update Case Studies Index
**Priority:** Medium  
**Status:** completed

Update the case studies index page to show appropriate excerpts from the new content structure. Use the situation or first problem statement as the preview text.

## Acceptance Criteria

- [x] All three case studies display the new content correctly
- [x] The page layout properly renders all sections (Situation, Problem, Intervention, Outcome, Final Line)
- [x] The visual design and animations are maintained
- [x] The case studies index page shows appropriate previews
- [x] Navigation between case studies works correctly
- [x] Content is properly formatted with bullet points and paragraphs where specified
- [x] The "Final Line" is displayed prominently as a closing statement

## Technical Notes

- The current implementation uses static data (STATIC_CASE_STUDIES array)
- The page also attempts to fetch from Sanity CMS but falls back to static data
- Both the detail page and index page have their own STATIC_CASE_STUDIES arrays that need updating
- The layout uses AnimatedSection components for scroll animations
- Typography uses the font-display class for headings

## Files to Modify

1. `app/case-studies/[slug]/page.tsx` - Main case study detail page
2. `app/case-studies/page.tsx` - Case studies index page
