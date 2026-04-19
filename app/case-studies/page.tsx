import Link from 'next/link';
import { createClient } from '@sanity/client';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import { STATIC_CASE_STUDIES } from '@/lib/caseStudiesData';

export const metadata = {
  title: 'Case Studies',
  description: 'Real programme delivery work by Stratora Consulting. ERP closure, go-live readiness, lessons learned — controlled outcomes across complex programmes.',
};

export const revalidate = 60; // Revalidate every 60 seconds

async function getCaseStudies() {
  try {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: false, // Use fresh data
    });
    
    const caseStudies = await client.fetch(`*[_type == "caseStudy"] | order(publishedAt desc)`);
    return caseStudies.length > 0 ? caseStudies : STATIC_CASE_STUDIES;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return STATIC_CASE_STUDIES;
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
  });
}

export async function generateStaticParams() {
  return STATIC_CASE_STUDIES.map((study) => ({
    slug: study.slug.current,
  }));
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies();

  return (
    <main className="pt-20">
      {/* HERO - Sophisticated & Clean */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A5F5F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container-custom max-w-4xl py-16 md:py-20 lg:py-24 relative text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-primary-teal"></div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-teal">Case Studies</span>
              <div className="w-8 h-0.5 bg-primary-teal"></div>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-neutral-900 leading-tight mb-6 tracking-tight">
              Work that moved things forward
            </h1>

            <p className="text-xl text-neutral-600">
              Real programmes. Real conditions. Real outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID - Clean Professional Cards */}
      <section className="bg-neutral-50 py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study: any, index: number) => (
              <AnimatedSection key={study._id} delay={index * 100}>
                <Link href={`/case-studies/${study.slug.current}`}>
                  <article className="h-full p-8 rounded-2xl bg-white border border-neutral-200 hover:border-primary-teal hover:shadow-lg transition-all duration-300 group">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary-teal/10 flex items-center justify-center mb-6 group-hover:bg-primary-teal/20 transition-colors">
                      <svg className="w-6 h-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>

                    {/* Date */}
                    <time className="text-xs text-primary-teal uppercase tracking-wider font-semibold block mb-4">
                      {formatDate(study.publishedAt)}
                    </time>

                    {/* Title */}
                    <h2 className="font-display text-2xl text-neutral-900 mb-4 leading-tight group-hover:text-primary-teal transition-colors">
                      {study.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                      {study.subtitle || study.situation}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary-teal group-hover:gap-3 transition-all">
                      Read case study
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-0.5 bg-primary-teal"></div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-teal">
                  Get in touch
                </p>
                <div className="w-8 h-0.5 bg-primary-teal"></div>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-neutral-900 mb-8">
                Have a similar challenge?
              </h3>
              <Button href="/contact" variant="primary">
                Start a conversation
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
