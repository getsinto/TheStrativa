import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';

async function getSlugs() {
  try {
    const caseStudies = await client.fetch(`*[_type == "caseStudy"]{ "slug": slug.current }`);
    const insights = await client.fetch(`*[_type == "insight"]{ "slug": slug.current }`);
    return { caseStudies, insights };
  } catch {
    return {
      caseStudies: [
        { slug: 'erp-programme-closure' },
        { slug: 'lessons-learned-survey-design' },
        { slug: 'go-live-readiness' },
      ],
      insights: [
        { slug: 'ready-with-conditions' },
        { slug: 'what-programmes-get-wrong-about-go-live' },
        { slug: 'why-data-should-not-be-left-late' },
      ],
    };
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { caseStudies, insights } = await getSlugs();
  const base = 'https://thestrativa.com';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/case-studies`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${base}/insights`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((cs: { slug: string }) => ({
    url: `${base}/case-studies/${cs.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const insightRoutes: MetadataRoute.Sitemap = insights.map((i: { slug: string }) => ({
    url: `${base}/insights/${i.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...insightRoutes];
}
