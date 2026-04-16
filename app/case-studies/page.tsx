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
      {/* HERO */}
      <section className="relative bg-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-primary-teal"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                Case Studies
              </p>
              <div className="w-8 h-0.5 bg-primary-teal"></div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-neutral-900 leading-tight mb-6 font-bold tracking-tight">
              Work that moved things forward
            </h1>

            <p className="text-lg text-neutral-600">
              Real programmes. Real conditions. Real outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID - Premium Card Style */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study: any, index: number) => (
              <AnimatedSection key={study._id} delay={index * 100}>
                <Link href={`/case-studies/${study.slug.current}`}>
                  <article className="card-premium h-full group cursor-pointer">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-teal/10 to-primary-teal/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>

                    {/* Date */}
                    <time className="text-xs text-primary-teal uppercase tracking-widest font-semibold block mb-4">
                      {formatDate(study.publishedAt)}
                    </time>

                    {/* Title */}
                    <h2 className="font-display text-2xl text-neutral-900 font-semibold mb-4 leading-tight group-hover:text-primary-teal transition-colors">
                      {study.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-base text-neutral-600 leading-relaxed mb-6 line-clamp-3">
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
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                  Get in touch
                </p>
                <div className="w-8 h-0.5 bg-primary-teal"></div>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-neutral-900 font-bold mb-8">
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
