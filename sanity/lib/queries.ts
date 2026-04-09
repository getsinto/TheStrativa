import { groq } from 'next-sanity';

// Case Studies
export const ALL_CASE_STUDIES = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    challenge,
    approach,
    outcome,
    publishedAt,
    featured
  }
`;

export const CASE_STUDY_BY_SLUG = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    challenge,
    approach,
    outcome,
    publishedAt
  }
`;

// Insights
export const ALL_INSIGHTS = groq`
  *[_type == "insight"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    summary,
    quote,
    publishedAt,
    featured
  }
`;

export const INSIGHT_BY_SLUG = groq`
  *[_type == "insight" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    summary,
    quote,
    body,
    publishedAt
  }
`;

// Services
export const ALL_SERVICES = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    summary,
    description,
    bullets,
    outcome,
    order
  }
`;

// Site Settings
export const SITE_SETTINGS = groq`
  *[_type == "siteSettings"][0] {
    businessName,
    tagline,
    email,
    linkedinUrl,
    contactNote
  }
`;
