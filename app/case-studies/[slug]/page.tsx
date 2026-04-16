import Link from 'next/link';
import { createClient } from '@sanity/client';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Divider from '@/components/ui/Divider';

import { STATIC_CASE_STUDIES } from '@/lib/caseStudiesData';

async function getCaseStudy(slug: string) {
  try {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: false, // Use fresh data, not CDN
    });
    
    const caseStudy = await client.fetch(
      `*[_type == "caseStudy" && slug.current == $slug][0]`,
      { slug }
    );
    
    if (caseStudy) {
      // Check if Sanity data has the required detailed structure
      const hasDetailedStructure = caseStudy.theSituation && caseStudy.whatWasAtRisk && 
                                   caseStudy.whatWeDid && caseStudy.theResult && caseStudy.whyItWorked;
      
      const hasFlagshipStructure = caseStudy.isFlagship && caseStudy.sections;
      
      if (hasDetailedStructure || hasFlagshipStructure) {
        return caseStudy;
      }
      // If Sanity data is incomplete, fall through to static data
    }
  } catch (error) {
    console.error('Error fetching case study from Sanity:', error);
  }
  
  // Fallback to static data
  return STATIC_CASE_STUDIES.find((study) => study.slug.current === slug);
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
  });
}

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

// Enable dynamic params - allows new pages to be generated on-demand
export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudy(params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.subtitle || caseStudy.situation,
  };
}

export async function generateStaticParams() {
  try {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: false,
    });
    
    const caseStudies = await client.fetch(`*[_type == "caseStudy"]{ "slug": slug.current }`);
    
    if (caseStudies && caseStudies.length > 0) {
      return caseStudies.map((study: any) => ({
        slug: study.slug,
      }));
    }
  } catch (error) {
    console.error('Error generating static params from Sanity:', error);
  }
  
  // Fallback to static data - generate params for ALL case studies
  return STATIC_CASE_STUDIES.map((study) => ({
    slug: study.slug.current,
  }));
}

import FlagshipCaseStudy from '@/components/case-studies/FlagshipCaseStudy';

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const currentIndex = STATIC_CASE_STUDIES.findIndex(
    (study) => study.slug.current === params.slug
  );
  const nextCaseStudy = STATIC_CASE_STUDIES[currentIndex + 1];

  // Render flagship case study with special layout
  if (caseStudy.isFlagship && caseStudy.sections) {
    return <FlagshipCaseStudy caseStudy={caseStudy} nextCaseStudy={nextCaseStudy} formatDate={formatDate} />;
  }

  // Safety check - ensure all required properties exist
  if (!caseStudy.theSituation || !caseStudy.whatWasAtRisk || !caseStudy.whatWeDid || !caseStudy.theResult || !caseStudy.whyItWorked) {
    notFound();
  }

  // Render regular case study
  return (
    <main className="pt-20">
      <section className="bg-[#F7F6F3] pt-8 pb-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-[13px]">
            <Link href="/case-studies" className="text-[#2F5D62] hover:underline transition-colors">Case Studies</Link>
            <span className="text-[#A89F91]">/</span>
            <span className="text-[#0F1113]">{caseStudy.title}</span>
          </nav>
        </div>
      </section>

      <section className="bg-[#0F1113] py-20">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <time className="text-[13px] text-[#A89F91] uppercase tracking-wider">{formatDate(caseStudy.publishedAt)}</time>
            <h1 className="font-display text-white leading-[1.2] mt-4 mb-6" style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.02em' }}>{caseStudy.title}</h1>
            <p className="text-[20px] text-white opacity-80 leading-[1.6]">{caseStudy.subtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      {caseStudy.situation && (
        <section className="bg-[#F7F6F3] pt-20 pb-12">
          <div className="container-custom max-w-3xl">
            <AnimatedSection>
              <div className="space-y-4">
                {caseStudy.situation.split('\n\n').map((para: string, i: number) => (
                  <p key={i} className="font-display italic text-[22px] text-[#0F1113] leading-[1.6]">{para}</p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <section className="bg-[#F7F6F3] py-12">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8"><SectionLabel>THE SITUATION</SectionLabel></div>
            <p className="text-[18px] text-[#0F1113] leading-[1.8] mb-8">{caseStudy.theSituation.intro}</p>
            <ul className="space-y-3 mb-8">
              {caseStudy.theSituation.points.map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-4 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                  <span className="text-[16px] text-[#0F1113]">{point}</span>
                </li>
              ))}
            </ul>
            <p className="font-display italic text-[20px] text-[#525250]">{caseStudy.theSituation.conclusion}</p>
          </AnimatedSection>
        </div>
      </section>

      <Divider margin={0} />

      <section className="bg-[#F7F6F3] py-12">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8"><SectionLabel>WHAT WAS AT RISK</SectionLabel></div>
            <p className="text-[18px] text-[#0F1113] leading-[1.8] mb-8">{caseStudy.whatWasAtRisk.intro}</p>
            <ul className="space-y-3 mb-8">
              {caseStudy.whatWasAtRisk.points.map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-4 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                  <span className="text-[16px] text-[#0F1113]">{point}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              {caseStudy.whatWasAtRisk.conclusion.split('\n').map((line: string, i: number) => (
                <p key={i} className="font-display italic text-[20px] text-[#2F5D62]">{line}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Divider margin={0} />

      <section className="bg-[#F7F6F3] py-12">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8"><SectionLabel>WHAT WE DID</SectionLabel></div>
            <p className="font-display text-[24px] text-[#0F1113] leading-[1.5] mb-12">{caseStudy.whatWeDid.intro}</p>
            <div className="space-y-10 mb-12">
              {caseStudy.whatWeDid.sections.map((section: any, i: number) => (
                <div key={i}>
                  <h3 className="font-display text-[20px] text-[#0F1113] mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.points.map((point: string, j: number) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-4 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                        <span className="text-[16px] text-[#0F1113]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="font-display italic text-[22px] text-[#2F5D62]">{caseStudy.whatWeDid.conclusion}</p>
          </AnimatedSection>
        </div>
      </section>

      <Divider margin={0} />

      <section className="bg-[#F7F6F3] py-12">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8"><SectionLabel>THE RESULT</SectionLabel></div>
            <p className="font-display text-[24px] text-[#0F1113] leading-[1.5] mb-8">{caseStudy.theResult.intro}</p>
            <ul className="space-y-3 mb-8">
              {caseStudy.theResult.points.map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-4 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                  <span className="text-[16px] text-[#0F1113]">{point}</span>
                </li>
              ))}
            </ul>
            <p className="font-display italic text-[22px] text-[#2F5D62]">{caseStudy.theResult.conclusion}</p>
          </AnimatedSection>
        </div>
      </section>

      <Divider margin={0} />

      <section className="bg-[#F7F6F3] py-12 pb-20">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8"><SectionLabel>WHY IT WORKED</SectionLabel></div>
            <div className="space-y-4 mb-8">
              {caseStudy.whyItWorked.intro.split('\n\n').map((para: string, i: number) => (
                <p key={i} className="font-display text-[24px] text-[#0F1113] leading-[1.5]">{para}</p>
              ))}
            </div>
            <ul className="space-y-3 mb-8">
              {caseStudy.whyItWorked.points.map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-4 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                  <span className="text-[16px] text-[#0F1113]">{point}</span>
                </li>
              ))}
            </ul>
            <p className="font-display italic text-[22px] text-[#2F5D62]">{caseStudy.whyItWorked.conclusion}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-[#F7F6F3] pb-20">
        <div className="container-custom max-w-3xl">
          <div className="pt-8 border-t border-[#E8E6E1] flex flex-col sm:flex-row justify-between gap-6">
            <Link href="/case-studies" className="text-[14px] text-[#0F1113] hover:text-[#2F5D62] transition-colors inline-flex items-center gap-2">
              <span>←</span>Back to Case Studies
            </Link>
            {nextCaseStudy && (
              <Link href={`/case-studies/${nextCaseStudy.slug.current}`} className="text-[14px] text-[#0F1113] hover:text-[#2F5D62] transition-colors inline-flex items-center gap-2 sm:ml-auto">
                Next: {nextCaseStudy.title}<span>→</span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
