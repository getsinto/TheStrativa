import Link from 'next/link';
import { createClient } from '@sanity/client';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
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
      {/* HERO */}
      <section className="relative min-h-[50vh] bg-[#0F1113] flex items-center justify-center overflow-hidden">
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 text-center max-w-4xl">
          <h1
            className="font-display text-white leading-[1.2] mb-6 animate-fadeUp"
            style={{
              fontSize: 'clamp(40px, 6vw, 64px)',
              letterSpacing: '-0.02em',
              animationDelay: '0ms',
              animationFillMode: 'both',
            }}
          >
            Work that moved things forward.
          </h1>

          <p
            className="text-[18px] text-white opacity-65 animate-fadeUp"
            style={{
              animationDelay: '150ms',
              animationFillMode: 'both',
            }}
          >
            Real programmes. Real conditions. Real outcomes.
          </p>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section className="bg-[#F7F6F3] py-[100px]">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study: any, index: number) => (
              <AnimatedSection key={study._id} delay={index * 100}>
                <Link href={`/case-studies/${study.slug.current}`}>
                  <article className="group border border-[#E8E6E1] p-10 transition-all duration-200 hover:border-[#2F5D62] hover:-translate-y-1 h-full flex flex-col">
                    {/* Date */}
                    <time className="text-[12px] text-[#A89F91] uppercase tracking-wider">
                      {formatDate(study.publishedAt)}
                    </time>

                    {/* Title */}
                    <h2 className="font-display text-[26px] text-[#0F1113] mt-3 mb-4 leading-[1.3]">
                      {study.title}
                    </h2>

                    {/* Challenge excerpt */}
                    <p
                      className="text-[15px] text-[#525250] leading-[1.7] mb-6 flex-1"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {study.subtitle || study.situation}
                    </p>

                    {/* Bottom bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#E8E6E1]">
                      <span className="text-[14px] text-[#2F5D62] flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                        View case study
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
