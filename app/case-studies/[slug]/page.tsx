import Link from 'next/link';
import { createClient } from '@sanity/client';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Divider from '@/components/ui/Divider';

const STATIC_CASE_STUDIES = [
  {
    _id: '1',
    title: 'ERP Programme Closure',
    subtitle: 'A complex ERP programme brought to a controlled, credible closure.',
    slug: { current: 'erp-programme-closure' },
    situation: 'A major ERP programme involving multiple suppliers had reached its final stages without a clear understanding of delivery status.',
    problem: [
      'Multiple suppliers.',
      'Unresolved issues.',
      'No clear closure position.',
      'Different stakeholders held different views of reality.',
      'Delivery had taken place, but clarity had not.',
    ],
    intervention: [
      'We stepped in to establish control.',
      'We reviewed delivery against scope, aligned stakeholders on what had actually been delivered, and clearly defined what remained.',
      'We separated: Completed delivery, Outstanding risks, Unresolved issues.',
      'We replaced assumption with evidence.',
    ],
    outcome: [
      'A clear, evidence-based closure position.',
      'Leadership were able to make a confident decision based on reality, not interpretation.',
      'The programme was closed in a controlled and credible way, with a defined transition into business-as-usual.',
    ],
    finalLine: 'Not a forced ending. A controlled closure.',
    publishedAt: '2024-09-01',
    featured: true,
  },
  {
    _id: '2',
    title: 'Lessons Learned & Survey Design',
    subtitle: 'From unclear feedback to structured, usable insight.',
    slug: { current: 'lessons-learned-survey-design' },
    situation: 'Stakeholder feedback was required to capture lessons learned across the programme.',
    problem: [
      'Feedback was inconsistent.',
      'Scoring was unclear.',
      'Questions were open to interpretation.',
      'The data could not be trusted to support decision-making.',
    ],
    intervention: [
      'We redesigned the approach from the ground up.',
      'We structured the survey around delivery phases, clarified scoring, and removed ambiguity from every question.',
      'We ensured that: Every response could be interpreted clearly, Every score had a consistent meaning, Every output could be analysed with confidence.',
    ],
    outcome: [
      'A structured, reliable view of programme performance.',
      'Leadership gained clear insight into what worked, what did not, and what needed to change going forward.',
    ],
    finalLine: 'Not just feedback. Clear, usable insight.',
    publishedAt: '2024-06-01',
    featured: false,
  },
  {
    _id: '3',
    title: 'Go-Live Readiness',
    subtitle: 'A complex go-live decision made with clarity and control.',
    slug: { current: 'go-live-readiness' },
    situation: 'Multiple workstreams were approaching go-live at different levels of readiness.',
    problem: [
      'No single view of readiness.',
      'Different stakeholders held different positions.',
      'Risks were not clearly understood or aligned.',
      'Go-live risked becoming a decision based on pressure, not clarity.',
    ],
    intervention: [
      'We defined what readiness actually meant.',
      'We aligned stakeholders around a "ready with conditions" position, ensuring all risks were: Visible, Understood, Owned.',
      'We brought structure to decision-making.',
    ],
    outcome: [
      'A controlled go-live decision.',
      'Known risks were accepted, managed, and transitioned into Hypercare with clear ownership.',
      'The programme moved forward with clarity, not uncertainty.',
    ],
    finalLine: 'Not perfect readiness. Controlled readiness.',
    publishedAt: '2024-03-01',
    featured: false,
  },
];

async function getCaseStudy(slug: string) {
  try {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
    });
    
    const caseStudy = await client.fetch(
      `*[_type == "caseStudy" && slug.current == $slug][0]`,
      { slug }
    );
    
    if (caseStudy) return caseStudy;
  } catch (error) {
    // Fall through to static data
  }
  
  return STATIC_CASE_STUDIES.find((study) => study.slug.current === slug);
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
  });
}

export const revalidate = 3600;

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
  return STATIC_CASE_STUDIES.map((study) => ({
    slug: study.slug.current,
  }));
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  // Find next case study
  const currentIndex = STATIC_CASE_STUDIES.findIndex(
    (study) => study.slug.current === params.slug
  );
  const nextCaseStudy = STATIC_CASE_STUDIES[currentIndex + 1];

  return (
    <main className="pt-20">
      {/* BREADCRUMB */}
      <section className="bg-[#F7F6F3] pt-8 pb-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-[13px]">
            <Link
              href="/case-studies"
              className="text-[#2F5D62] hover:underline transition-colors"
            >
              Case Studies
            </Link>
            <span className="text-[#A89F91]">/</span>
            <span className="text-[#0F1113]">{caseStudy.title}</span>
          </nav>
        </div>
      </section>

      {/* HERO AREA */}
      <section className="bg-[#0F1113] py-20">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            {/* Date */}
            <time className="text-[13px] text-[#A89F91] uppercase tracking-wider">
              {formatDate(caseStudy.publishedAt)}
            </time>

            {/* Title */}
            <h1
              className="font-display text-white leading-[1.2] mt-4"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                letterSpacing: '-0.02em',
              }}
            >
              {caseStudy.subtitle || caseStudy.title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="bg-[#F7F6F3] py-20">
        <div className="container-custom max-w-3xl">
          {/* SITUATION */}
          <AnimatedSection>
            <div className="mb-6">
              <SectionLabel>THE SITUATION</SectionLabel>
            </div>

            <p className="font-display italic text-[22px] text-[#0F1113] leading-[1.6] mb-12">
              {caseStudy.situation}
            </p>
          </AnimatedSection>

          {/* THE PROBLEM */}
          <Divider margin={64} />

          <AnimatedSection delay={100}>
            <div className="mb-8">
              <SectionLabel>THE PROBLEM</SectionLabel>
            </div>

            <ul className="space-y-4">
              {caseStudy.problem.map((item: string, index: number) => (
                <li key={index} className="text-[17px] text-[#0F1113] leading-[1.7] pl-0">
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* THE INTERVENTION */}
          <Divider margin={64} />

          <AnimatedSection delay={150}>
            <div className="mb-8">
              <SectionLabel>THE INTERVENTION</SectionLabel>
            </div>

            <ul className="space-y-6">
              {caseStudy.intervention.map((item: string, index: number) => (
                <li key={index} className="text-[16px] text-[#0F1113] leading-[1.7]">
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* THE OUTCOME */}
          <Divider margin={64} />

          <AnimatedSection delay={200}>
            <div className="mb-8">
              <SectionLabel>THE OUTCOME</SectionLabel>
            </div>

            <div className="space-y-4">
              {caseStudy.outcome.map((paragraph: string, index: number) => (
                <p key={index} className="text-[17px] text-[#0F1113] leading-[1.8]">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* FINAL LINE */}
          <Divider margin={64} />

          <AnimatedSection delay={250}>
            <blockquote className="border-l-[3px] border-[#2F5D62] pl-6">
              <p className="font-display italic text-[28px] text-[#0F1113] leading-[1.4]">
                {caseStudy.finalLine}
              </p>
            </blockquote>
          </AnimatedSection>

          {/* BOTTOM NAVIGATION */}
          <div className="mt-20 pt-8 border-t border-[#E8E6E1] flex flex-col sm:flex-row justify-between gap-6">
            <Link
              href="/case-studies"
              className="text-[14px] text-[#0F1113] hover:text-[#2F5D62] transition-colors inline-flex items-center gap-2"
            >
              <span>←</span>
              Back to Case Studies
            </Link>

            {nextCaseStudy && (
              <Link
                href={`/case-studies/${nextCaseStudy.slug.current}`}
                className="text-[14px] text-[#0F1113] hover:text-[#2F5D62] transition-colors inline-flex items-center gap-2 sm:ml-auto"
              >
                Next: {nextCaseStudy.title}
                <span>→</span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
