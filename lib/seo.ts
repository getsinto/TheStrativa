/**
 * SEO Utilities for The Strativa
 * 
 * Helper functions for generating structured data and metadata
 */

interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  email: string;
  description: string;
  founder: Array<{
    '@type': string;
    name: string;
  }>;
}

interface ArticleSchema {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  datePublished?: string;
  publisher: {
    '@type': string;
    name: string;
    url: string;
  };
}

interface WebPageSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
}

export function getOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Strativa',
    url: 'https://thestrativa.com',
    email: 'hello@thestrativa.com',
    description: 'Delivery-focused partnership for ERP and transformation programmes',
    founder: [
      {
        '@type': 'Person',
        name: 'Olusegun Olamide',
      },
      {
        '@type': 'Person',
        name: 'Hiram Kanwal',
      },
    ],
  };
}

export function getArticleSchema(
  title: string,
  description: string,
  publishedAt?: string
): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description.slice(0, 160),
    ...(publishedAt && { datePublished: publishedAt }),
    publisher: {
      '@type': 'Organization',
      name: 'The Strativa',
      url: 'https://thestrativa.com',
    },
  };
}

export function getWebPageSchema(
  name: string,
  description: string,
  url: string
): WebPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
