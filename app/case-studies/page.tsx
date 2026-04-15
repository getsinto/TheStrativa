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

export const revalidate = 3600;

async function getCaseStudies() {
  try {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
    });
    
    const caseStudies = await client.fetch(`*[_type == "caseStudy"] | order(publishedAt desc)`);
    return caseStudies.length > 0 ? caseStudies : STATIC_CASE_STUDIES;
  } catch {
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
      {/* HERO - McKinsey Style */}
      <section className="relative bg-white py-4xl">
        <div className="container-custom max-w-content text-center">
          <div className="animate-fade-in-up">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-8">
              Case Studies
            </p>

            <h1 className="font-display text-[clamp(40px,6vw,64px)] text-[#0F1113] leading-[1.2] mb-6 font-bold tracking-[-0.02em]">
              Work that moved things forward
            </h1>

            <p className="text-[18px] text-[#6B7280]">
              Real programmes. Real conditions. Real outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES GRID - McKinsey Card Style */}
      <section className="bg-[#F8F9FA] py-4xl">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study: any, index: number) => (
              <AnimatedSection key={study._id} delay={index * 100}>
                <Link href={`/case-studies/${study.slug.current}`}>
                  <article className="group bg-white border border-[#E5E7EB] p-10 transition-all duration-200 hover:shadow-card-hover hover:border-[#2F5D62] h-full flex flex-col">
                    {/* Category/Date */}
                    <time className="text-[12px] text-[#2F5D62] uppercase tracking-[0.1em] font-semibold">
                      {formatDate(study.publishedAt)}
                    </time>

                    {/* Title */}
                    <h2 className="font-display text-[24px] text-[#0F1113] font-semibold mt-4 mb-4 leading-[1.3]">
                      {study.title}
                    </h2>

                    {/* Excerpt */}
                    <p
                      className="text-[15px] text-[#6B7280] leading-[1.7] mb-6 flex-1"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {study.subtitle || study.situation}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[16px] font-semibold text-[#2F5D62] group-hover:text-[#1E3D40] transition-colors">
                      Read case study
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-6">
                Get in touch
              </p>
              <h3 className="font-display text-[28px] text-[#0F1113] font-semibold mb-8">
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
