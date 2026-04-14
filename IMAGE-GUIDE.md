# Image Guide for Stratora Consulting Website

## Required Images & Specifications

### 1. Homepage Images

#### Hero Image
- **Path**: `/public/images/hero-consulting.jpg`
- **Dimensions**: 1200x900px (4:3 ratio)
- **Subject**: Professional consulting environment - modern office, team collaboration, or strategic planning
- **Style**: Clean, professional, slightly desaturated to match McKinsey aesthetic
- **Alternative**: Business meeting, whiteboard strategy session, or professional workspace

#### Featured Case Study Image
- **Path**: `/public/images/case-study-erp.jpg`
- **Dimensions**: 800x600px
- **Subject**: ERP system dashboard, project management board, or professional team working
- **Style**: Professional, corporate, technology-focused

### 2. Services Page Images (Optional Enhancement)

Each service could have a supporting image:
- **Programme Delivery**: `/public/images/service-programme.jpg` - Project timeline, Gantt chart
- **Go-Live Readiness**: `/public/images/service-golive.jpg` - Launch preparation, checklist
- **Website Delivery**: `/public/images/service-website.jpg` - Web design, digital interface

**Dimensions**: 600x400px each

### 3. About Page Images

#### Team/Office Photo
- **Path**: `/public/images/about-team.jpg`
- **Dimensions**: 1200x800px
- **Subject**: Professional team photo or modern office space
- **Style**: Approachable yet professional

#### Leadership Photos (if adding individual profiles)
- **Path**: `/public/images/team/[name].jpg`
- **Dimensions**: 400x400px (square)
- **Subject**: Professional headshots
- **Style**: Consistent lighting and background

### 4. Case Studies Page

Each case study should have a featured image:
- **ERP Programme**: `/public/images/cases/erp-programme.jpg`
- **Go-Live Readiness**: `/public/images/cases/golive-readiness.jpg`
- **Transformation**: `/public/images/cases/transformation.jpg`
- **Website Delivery**: `/public/images/cases/website-delivery.jpg`

**Dimensions**: 800x600px each
**Style**: Professional, relevant to the case study topic

### 5. Insights/Blog Images

Each insight article could have a header image:
- **Path**: `/public/images/insights/[slug].jpg`
- **Dimensions**: 1200x630px (good for social sharing too)
- **Subject**: Relevant to article topic

## Image Sources & Recommendations

### Free Stock Photo Sites (Professional Quality)
1. **Unsplash** (unsplash.com) - High quality, free for commercial use
   - Search terms: "business meeting", "consulting", "office", "strategy", "teamwork"
   
2. **Pexels** (pexels.com) - Free stock photos
   - Search terms: "corporate", "professional", "business strategy", "project management"

3. **Pixabay** (pixabay.com) - Free images
   - Search terms: "business", "consulting", "office workspace"

### Recommended Search Terms
- "business consulting professional"
- "corporate strategy meeting"
- "project management office"
- "professional team collaboration"
- "modern office workspace"
- "business planning whiteboard"
- "ERP system dashboard"
- "digital transformation"

## Image Optimization

Before uploading, optimize images:
1. **Format**: Use WebP for better performance (with JPG fallback)
2. **Compression**: Use tools like TinyPNG or Squoosh
3. **Naming**: Use descriptive, SEO-friendly names (e.g., `consulting-team-strategy.jpg`)

## Color Palette Guidance

Choose images that complement the site's color scheme:
- **Primary**: Teal (#2F5D62)
- **Backgrounds**: White, Light Gray (#F8F9FA)
- **Accents**: Navy, Charcoal

Look for images with:
- Neutral backgrounds (white, gray, light blue)
- Professional, clean aesthetics
- Minimal bright colors that might clash
- Good contrast and clarity

## Implementation Priority

### Phase 1 (Immediate Impact)
1. ✅ Hero image on homepage
2. ✅ Featured case study image
3. About page team photo

### Phase 2 (Enhanced Experience)
4. Individual case study images
5. Services page imagery
6. Insights article headers

### Phase 3 (Polish)
7. Leadership headshots
8. Additional decorative elements
9. Icon illustrations

## Next Steps

1. **Create `/public/images/` folder structure**:
   ```
   /public
     /images
       hero-consulting.jpg
       case-study-erp.jpg
       /cases
         erp-programme.jpg
         golive-readiness.jpg
         transformation.jpg
         website-delivery.jpg
       /team
         [team-member-photos].jpg
       /insights
         [article-images].jpg
   ```

2. **Download/prepare images** from stock photo sites
3. **Optimize images** for web
4. **Upload to `/public/images/`** folder
5. **Uncomment image tags** in the code (already prepared in homepage)

## Code Already Prepared

The homepage hero and featured work sections are already set up to display images. Simply:
1. Add your images to the correct paths
2. Uncomment the `<img>` tags in the code
3. The placeholder designs will automatically be replaced

## Professional Image Tips

- **Consistency**: Use similar style/tone across all images
- **Quality**: High resolution but optimized for web
- **Relevance**: Images should support the content, not distract
- **Diversity**: Show inclusive, diverse teams when possible
- **Authenticity**: Avoid overly staged stock photos
- **McKinsey Style**: Clean, professional, slightly understated

---

**Note**: All image paths are relative to the `/public` folder in Next.js. The code is already prepared - just add the images and uncomment the relevant sections!
