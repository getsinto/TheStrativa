import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Clarity Where Others See Complexity',
  description: 'The Strativa helps organisations deliver complex programmes with structure, control, and confidence. ERP, transformation, go-live readiness, and digital delivery.',
};

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[100svh] bg-[#0F1113] flex items-center justify-center overflow-hidden">
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 text-center">
          {/* Logo + STRATIVA */}
          <div
            className="flex flex-col items-center justify-center gap-4 mb-12 animate-fadeUp"
            style={{ animationDelay: '0ms', animationFillMode: 'both' }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4C12 4 9 6 9 9C9 11 10 12 12 13C10 14 8 15 8 18C8 21 11 24 16 24C21 24 24 21 24 18C24 15 22 14 20 13C22 12 23 11 23 9C23 6 20 4 16 4Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span
              className="font-display text-[18px] tracking-[0.3em] text-white font-medium"
              style={{ letterSpacing: '0.3em' }}
            >
              STRATIVA
            </span>
          </div>

          {/* Horizontal rule */}
          <div
            className="w-10 h-[1px] bg-[#2F5D62] mx-auto mb-12 animate-fadeUp"
            style={{ animationDelay: '0ms', animationFillMode: 'both' }}
          />

          {/* H1 */}
          <h1
            className="font-display text-white leading-[1.1] mb-8 animate-fadeUp"
            style={{
              fontSize: 'clamp(52px, 8vw, 88px)',
              letterSpacing: '-0.02em',
              animationDelay: '100ms',
              animationFillMode: 'both',
            }}
          >
            Clarity where others see complexity.
            <br />
            Control where others lose it.
          </h1>

          {/* Subtext */}
          <p
            className="text-[18px] font-light leading-[1.7] max-w-[560px] mx-auto mb-12 animate-fadeUp"
            style={{
              color: 'rgba(247, 246, 243, 0.72)',
              animationDelay: '250ms',
              animationFillMode: 'both',
            }}
          >
            We help organisations take control of complex programmes — bringing structure, direction, and delivery where it matters most.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col items-center gap-4 animate-fadeUp"
            style={{ animationDelay: '400ms', animationFillMode: 'both' }}
          >
            <div className="flex gap-4 justify-center flex-wrap">
              <Button href="/contact" variant="primary">
                Start a conversation →
              </Button>
              <Button
                href="/case-studies"
                variant="secondary"
                className="border-white text-white hover:bg-white hover:text-[#0F1113]"
              >
                Explore Our Work
              </Button>
            </div>
            <p className="text-[14px] text-white opacity-50 mt-2">
              No obligation. Clear direction from the first discussion.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-40"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* SECTION 2 — STATEMENT */}
      <section className="bg-[#F7F6F3] py-[140px]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <p
              className="font-display text-center leading-[1.5] mb-8"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Most programmes do not fail because they are complex.
            </p>
            <p
              className="font-display italic text-[#2F5D62] text-center leading-[1.4] mb-10"
              style={{ fontSize: 'clamp(32px, 4.5vw, 54px)' }}
            >
              They fail because complexity is not controlled.
            </p>

            <div className="w-16 h-[1px] bg-[#A89F91] mx-auto my-10" />

            <p className="text-[15px] text-[#A89F91] uppercase tracking-[0.08em] text-center">
              We exist to fix that.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 — SERVICES GRID */}
      <section className="bg-[#F7F6F3] pb-[140px]">
        <div className="container-custom max-w-5xl">
          <div className="mb-12">
            <SectionLabel>WHAT WE DO</SectionLabel>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-[#E8E6E1]">
            {/* Card 1 */}
            <AnimatedSection delay={0} className="md:pr-6">
              <div className="pt-10 border-t border-[#0F1113]">
                <h3 className="font-display text-[22px] text-[#0F1113] font-medium">
                  Programme Delivery & Coordination
                </h3>
                <p className="text-[14px] text-[#A89F91] mt-2">Structure and governance.</p>
                <p className="text-[16px] text-[#0F1113] opacity-72 mt-6 leading-[1.7]">
                  We bring structure, ownership, and control to complex programmes — turning fragmented delivery into coordinated execution.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection delay={120} className="md:px-6">
              <div className="pt-10 border-t border-[#0F1113]">
                <h3 className="font-display text-[22px] text-[#0F1113] font-medium">
                  Go-Live Readiness & Closure
                </h3>
                <p className="text-[14px] text-[#A89F91] mt-2">Readiness and transition.</p>
                <p className="text-[16px] text-[#0F1113] opacity-72 mt-6 leading-[1.7]">
                  We define readiness clearly — ensuring go-live decisions are controlled, understood, and credible.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection delay={240} className="md:pl-6">
              <div className="pt-10 border-t border-[#0F1113]">
                <h3 className="font-display text-[22px] text-[#0F1113] font-medium">
                  Website Delivery & Coordination
                </h3>
                <p className="text-[14px] text-[#A89F91] mt-2">Premium digital delivery.</p>
                <p className="text-[16px] text-[#0F1113] opacity-72 mt-6 leading-[1.7]">
                  We deliver high-quality websites through structured coordination — without the complexity of managing multiple parties.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURED WORK */}
      <section className="bg-[#0F1113] py-[140px]">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-8">
              <SectionLabel light>FEATURED WORK</SectionLabel>
            </div>
            <h2 className="font-display text-[42px] text-white max-w-lg mb-12">
              Work that moved things forward.
            </h2>

            {/* Featured Case Study Block */}
            <div className="bg-[#161616] border border-[#262626] grid grid-cols-1 lg:grid-cols-5 overflow-hidden">
              {/* Image placeholder - CSS art */}
              <div
                className="lg:col-span-2 h-64 lg:h-auto relative"
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #0F1113 50%, #1a1a1a 100%)',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(45deg, transparent 30%, rgba(47, 93, 98, 0.1) 50%, transparent 70%),
                      linear-gradient(-45deg, transparent 30%, rgba(47, 93, 98, 0.15) 50%, transparent 70%)
                    `,
                  }}
                />
                <div
                  className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#2F5D62] opacity-20"
                  style={{ transform: 'rotate(15deg)' }}
                />
                <div
                  className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-[#2F5D62] opacity-30"
                  style={{ transform: 'rotate(-10deg)' }}
                />
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <p className="text-xs uppercase tracking-widest text-[#2F5D62] mb-4">
                  ERP PROGRAMME CLOSURE
                </p>
                <h3 className="font-display italic text-[28px] text-white mb-6 leading-[1.3]">
                  A complex ERP programme brought to a controlled, credible closure.
                </h3>
                <p className="text-[15px] leading-[1.7] mb-6" style={{ color: 'rgba(247, 246, 243, 0.65)' }}>
                  Multiple suppliers. Unresolved issues. No clear closure position.
                </p>
                <div className="border-l-2 border-[#2F5D62] pl-4 mb-6">
                  <p className="text-[14px] italic text-[#A89F91]">
                    Result: A controlled closure, not a forced ending.
                  </p>
                </div>
                <Button href="/case-studies" variant="ghost" className="text-white">
                  View Case Study →
                </Button>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-[14px] text-[#2F5D62] hover:gap-3 transition-all duration-200"
              >
                View all case studies
                <span>→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 — HOW WE WORK */}
      <section className="bg-[#F7F6F3] py-[140px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="mb-6">
                  <SectionLabel>APPROACH</SectionLabel>
                </div>
                <h2 className="font-display text-[38px] text-[#0F1113] leading-[1.2] mb-6">
                  We do not add complexity. We remove it.
                </h2>
                <p className="text-[16px] text-[#525250]">
                  Three principles guide every engagement.
                </p>
              </AnimatedSection>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={150}>
                <div className="space-y-8">
                  {/* Principle 1 */}
                  <div className="flex gap-6 pb-8 border-b border-[#E8E6E1]">
                    <div className="font-display text-[72px] text-[#E8E6E1] leading-none">
                      01
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-display text-[22px] text-[#0F1113] mb-3">
                        Clarity
                      </h3>
                      <p className="text-[15px] text-[#525250] leading-[1.7]">
                        Everything is defined — ownership, structure, and expectations. Nothing is left ambiguous.
                      </p>
                    </div>
                  </div>

                  {/* Principle 2 */}
                  <div className="flex gap-6 pb-8 border-b border-[#E8E6E1]">
                    <div className="font-display text-[72px] text-[#E8E6E1] leading-none">
                      02
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-display text-[22px] text-[#0F1113] mb-3">
                        Structure
                      </h3>
                      <p className="text-[15px] text-[#525250] leading-[1.7]">
                        Governance and coordination create control. Without structure, delivery is luck.
                      </p>
                    </div>
                  </div>

                  {/* Principle 3 */}
                  <div className="flex gap-6 pb-8">
                    <div className="font-display text-[72px] text-[#E8E6E1] leading-none">
                      03
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="font-display text-[22px] text-[#0F1113] mb-3">
                        Delivery
                      </h3>
                      <p className="text-[15px] text-[#525250] leading-[1.7]">
                        Progress is measured, managed, and achieved. Not hoped for.
                      </p>
                    </div>
                  </div>

                  {/* Pull quote */}
                  <blockquote className="font-display italic text-[24px] text-[#2F5D62] pt-8">
                    "Clarity is what turns complexity into delivery."
                  </blockquote>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CLOSING CTA */}
      <section className="bg-[#0F1113] py-[140px]">
        <div className="container-custom max-w-2xl text-center">
          <AnimatedSection>
            <div className="mb-8 flex justify-center">
              <SectionLabel light>GET IN TOUCH</SectionLabel>
            </div>
            <h2 className="font-display text-[40px] text-white leading-[1.3] mb-6">
              If you are dealing with complexity, uncertainty, or lack of control.
            </h2>
            <p
              className="text-[18px] text-white max-w-lg mx-auto mb-12 leading-[1.7]"
              style={{ opacity: 0.65 }}
            >
              We are here to help you move from where you are to where delivery is controlled.
            </p>
            <div className="flex justify-center">
              <Button href="/contact" variant="primary">
                Start a Conversation
              </Button>
            </div>
            <p className="text-[14px] text-[#A89F91] mt-6">
              Or email us at{' '}
              <a
                href="mailto:hello@thestrativa.com"
                className="hover:text-[#2F5D62] transition-colors"
              >
                hello@thestrativa.com
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
