import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

interface FlagshipCaseStudyProps {
  caseStudy: any;
  nextCaseStudy: any;
  formatDate: (date: string) => string;
}

export default function FlagshipCaseStudy({ caseStudy, nextCaseStudy, formatDate }: FlagshipCaseStudyProps) {
  return (
    <main className="pt-20">
      {/* BREADCRUMB */}
      <section className="bg-[#F7F6F3] pt-8 pb-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-[13px]">
            <Link href="/case-studies" className="text-[#2F5D62] hover:underline transition-colors">
              Case Studies
            </Link>
            <span className="text-[#A89F91]">/</span>
            <span className="text-[#0F1113]">{caseStudy.title}</span>
          </nav>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#0F1113] py-24">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <time className="text-[13px] text-[#A89F91] uppercase tracking-wider">
              {formatDate(caseStudy.publishedAt)}
            </time>
            <h1 className="font-display text-white leading-[1.2] mt-6 mb-6" style={{ fontSize: 'clamp(40px, 6vw, 64px)', letterSpacing: '-0.02em' }}>
              {caseStudy.title}
            </h1>
            <p className="text-[20px] text-white opacity-80 leading-[1.6]">{caseStudy.subtitle}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* THE REALITY */}
      <section className="bg-[#F7F6F3] py-24">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-10"><SectionLabel>THE REALITY</SectionLabel></div>
            <div className="space-y-6 mb-10">
              {caseStudy.sections.reality.intro.split('\n\n').map((para: string, i: number) => (
                <p key={i} className="text-[18px] text-[#0F1113] leading-[1.8]">{para}</p>
              ))}
            </div>
            <ul className="space-y-4 mb-12">
              {caseStudy.sections.reality.points.map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                  <span className="text-[17px] text-[#0F1113]">{point}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white border-l-4 border-[#2F5D62] p-8">
              {caseStudy.sections.reality.conclusion.split('\n').map((line: string, i: number) => (
                <p key={i} className="font-display text-[26px] text-[#2F5D62] leading-[1.4]">{line}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* THE PRESSURE */}
      <section className="bg-[#EEECEA] py-24">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-10"><SectionLabel>THE PRESSURE</SectionLabel></div>
            <p className="text-[18px] text-[#0F1113] leading-[1.8] mb-10">{caseStudy.sections.pressure.intro}</p>
            <ul className="space-y-4 mb-12">
              {caseStudy.sections.pressure.points.map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                  <span className="text-[17px] text-[#0F1113]">{point}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              {caseStudy.sections.pressure.conclusion.split('\n').map((line: string, i: number) => (
                <p key={i} className="text-[18px] text-[#525250] leading-[1.7]">{line}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* THE TURNING POINT */}
      <section className="bg-[#0F1113] py-32">
        <div className="container-custom max-w-3xl text-center">
          <AnimatedSection>
            <div className="mb-12 flex justify-center"><SectionLabel light>THE TURNING POINT</SectionLabel></div>
            <div className="mb-16">
              {caseStudy.sections.turningPoint.statement.split('\n').map((line: string, i: number) => (
                <p key={i} className="font-display text-[36px] text-[#2F5D62] leading-[1.3] mb-2">{line}</p>
              ))}
            </div>
            <div className="space-y-4">
              {caseStudy.sections.turningPoint.subtext.split('\n\n').map((line: string, i: number) => (
                <p key={i} className="text-[19px] text-white opacity-80 leading-[1.7]">{line}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT WE DID */}
      <section className="bg-[#F7F6F3] py-24">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-10"><SectionLabel>WHAT WE DID</SectionLabel></div>
            <p className="font-display text-[28px] text-[#0F1113] leading-[1.4] mb-16">
              We did not add more work.<br />We created control.
            </p>
            <div className="space-y-12 mb-16">
              {caseStudy.sections.whatWeDid.steps.map((step: any, i: number) => (
                <div key={i} className="bg-white border border-[#E8E6E1] p-8">
                  <h3 className="font-display text-[22px] text-[#0F1113] mb-6">Step {i + 1} - {step.title}</h3>
                  <ul className="space-y-3">
                    {step.points.map((point: string, j: number) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-4 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                        <span className="text-[16px] text-[#0F1113]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-[#0F1113] text-white p-10 text-center">
              {caseStudy.sections.whatWeDid.conclusion.split('\n').map((line: string, i: number) => (
                <p key={i} className="font-display text-[24px] leading-[1.5] mb-2">{line}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* THE RESULT */}
      <section className="bg-[#EEECEA] py-24">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-10"><SectionLabel>THE RESULT</SectionLabel></div>
            <p className="font-display text-[28px] text-[#0F1113] leading-[1.4] mb-10">{caseStudy.sections.result.intro}</p>
            <ul className="space-y-4 mb-12">
              {caseStudy.sections.result.points.map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                  <span className="text-[17px] text-[#0F1113]">{point}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-2 mb-12">
              {caseStudy.sections.result.details.split('\n').map((line: string, i: number) => (
                <p key={i} className="text-[18px] text-[#525250] leading-[1.7]">{line}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL OUTCOME */}
      <section className="bg-[#0F1113] py-32">
        <div className="container-custom max-w-3xl text-center">
          <AnimatedSection>
            <div className="mb-12 flex justify-center"><SectionLabel light>FINAL OUTCOME</SectionLabel></div>
            <div className="mb-16">
              {caseStudy.sections.finalOutcome.statement.split('\n').map((line: string, i: number) => (
                <p key={i} className="font-display text-[36px] text-[#2F5D62] leading-[1.3] mb-2">{line}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="bg-[#F7F6F3] py-24">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-10"><SectionLabel>WHY THIS MATTERS</SectionLabel></div>
            <div className="space-y-6 mb-10">
              {caseStudy.sections.whyMatters.intro.split('\n\n').map((para: string, i: number) => (
                <p key={i} className="text-[18px] text-[#0F1113] leading-[1.8]">{para}</p>
              ))}
            </div>
            <ul className="space-y-4 mb-12">
              {caseStudy.sections.whyMatters.points.map((point: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                  <span className="text-[17px] text-[#0F1113]">{point}</span>
                </li>
              ))}
            </ul>
            <p className="font-display italic text-[24px] text-[#2F5D62] mb-16">{caseStudy.sections.whyMatters.conclusion}</p>
            <div className="bg-[#0F1113] text-white p-12 text-center">
              <p className="text-[20px] leading-[1.7] mb-8">If your delivery feels unclear, fragmented, or out of control</p>
              <p className="font-display text-[28px] leading-[1.4] mb-8">We will bring it back into clarity, structure, and control.</p>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest bg-[#2F5D62] text-white transition-all duration-200 hover:bg-[#1E3D40]">
                Start a conversation →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
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
