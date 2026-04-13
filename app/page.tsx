import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import DeliveryModelCircle from '@/components/sections/DeliveryModelCircle';

export const metadata = {
  title: 'Clarity Where Others See Complexity',
  description: 'Stratora Consulting helps organisations deliver complex programmes with structure, control, and confidence. ERP, transformation, go-live readiness, and digital delivery.',
};

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[100svh] bg-[#0F1113] flex items-center justify-center overflow-hidden pb-20">
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
            <div className="flex flex-col items-center">
              <span className="font-display text-[14px] tracking-[0.25em] text-white font-medium uppercase leading-tight">
                STRATORA
              </span>
              <span className="font-display text-[11px] tracking-[0.25em] text-white opacity-70 font-normal uppercase leading-tight">
                CONSULTING
              </span>
            </div>
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
            className="text-[18px] font-light leading-[1.7] max-w-[480px] mx-auto mb-12 animate-fadeUp"
            style={{
              color: 'rgba(247, 246, 243, 0.72)',
              animationDelay: '250ms',
              animationFillMode: 'both',
            }}
          >
            We help organisations take control of complex work bringing structure, direction, and delivery where it matters most.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col items-center gap-4 mb-16 animate-fadeUp"
            style={{ animationDelay: '400ms', animationFillMode: 'both' }}
          >
            <div className="flex gap-4 justify-center flex-wrap">
              <Button href="/contact" variant="primary">
                Start a conversation →
              </Button>
              <Button
                href="/case-studies"
                variant="secondary"
                className="border border-white text-white hover:bg-white hover:text-[#0F1113] px-8 py-3"
              >
                Explore Our Work
              </Button>
            </div>
            <p className="text-[14px] text-white opacity-50 mt-2">
              No obligation. Clear direction from the first discussion.
            </p>
          </div>
        </div>

        {/* Scroll indicator - positioned at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
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
      <section className="bg-[#F7F6F3] py-[160px]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <p
              className="font-display text-center leading-[1.5] mb-8"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              Most projects do not fail because they are complex.
            </p>
            <p
              className="font-display italic text-[#2F5D62] text-center leading-[1.4] mb-16"
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
      <section className="bg-[#F7F6F3] pb-[160px]">
        <div className="container-custom max-w-5xl">
          <div className="mb-12">
            <SectionLabel>WHAT WE DO</SectionLabel>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-0 md:divide-x md:divide-[#E8E6E1]">
            {/* Card 1 */}
            <AnimatedSection delay={0} className="md:pr-6">
              <div className="pt-10 border-t border-[#0F1113]">
                <h3 className="font-display text-[22px] text-[#0F1113] font-medium">
                  Clarity
                </h3>
                <p className="text-[16px] text-[#0F1113] opacity-72 mt-6 leading-[1.7]">
                  We bring a clear understanding of your situation and define what needs to happen.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection delay={120} className="md:px-6">
              <div className="pt-10 border-t border-[#0F1113]">
                <h3 className="font-display text-[22px] text-[#0F1113] font-medium">
                  Control
                </h3>
                <p className="text-[16px] text-[#0F1113] opacity-72 mt-6 leading-[1.7]">
                  We structure delivery, manage risks, and keep everything visible and organised.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection delay={240} className="md:px-6">
              <div className="pt-10 border-t border-[#0F1113]">
                <h3 className="font-display text-[22px] text-[#0F1113] font-medium">
                  Delivery
                </h3>
                <p className="text-[16px] text-[#0F1113] opacity-72 mt-6 leading-[1.7]">
                  We support execution from start to finish, ensuring work progresses in a controlled way.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 4 */}
            <AnimatedSection delay={360} className="md:pl-6">
              <div className="pt-10 border-t border-[#0F1113]">
                <h3 className="font-display text-[22px] text-[#0F1113] font-medium">
                  Website Delivery
                </h3>
                <p className="text-[16px] text-[#0F1113] opacity-72 mt-6 leading-[1.7]">
                  We deliver high-quality websites through structured coordination, without unnecessary complexity.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURED WORK */}
      <section className="bg-[#0F1113] py-[160px]">
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
                <div className="border-l-2 border-[#2F5D62] pl-4 mb-6 mt-8">
                  <p className="text-[14px] italic text-[#A89F91]">
                    A controlled closure, not a forced ending.
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
      <section className="bg-[#F7F6F3] py-[160px]">
        <div className="container-custom max-w-5xl">
          <AnimatedSection>
            <div className="mb-12">
              <SectionLabel>HOW WE WORK</SectionLabel>
            </div>
            
            <h2 className="font-display text-[38px] text-[#0F1113] leading-[1.2] mb-8">
              We focus only on what creates real value.
            </h2>
            
            <p className="text-[17px] text-[#0F1113] leading-[1.8] mb-12">
              We do not add unnecessary work, unnecessary complexity, or unnecessary process.
              <br />
              Everything we do must have a clear purpose and a clear outcome.
            </p>

            <div className="bg-white border border-[#E8E6E1] p-10 mb-12">
              <h3 className="font-display text-[24px] text-[#0F1113] mb-6">What this means:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                  <span className="text-[16px] text-[#0F1113]">We do not build things "just in case".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                  <span className="text-[16px] text-[#0F1113]">We do not create documents or reports that are not actively used.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                  <span className="text-[16px] text-[#0F1113]">We only introduce structure where it improves clarity, reduces risk, or supports delivery.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0F1113] text-white p-10 mb-12">
              <h3 className="font-display text-[24px] mb-6">Our approach:</h3>
              <p className="text-[16px] opacity-90 mb-6">Before doing any piece of work, we ask three simple questions:</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#2F5D62] text-[20px]">→</span>
                  <span className="text-[16px]">What problem does this solve?</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#2F5D62] text-[20px]">→</span>
                  <span className="text-[16px]">Who benefits from this?</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#2F5D62] text-[20px]">→</span>
                  <span className="text-[16px]">What happens if we simplify this?</span>
                </div>
              </div>
              <p className="text-[15px] opacity-70 mt-6 italic">
                If something is unclear, we simplify it before moving forward.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="font-display text-[24px] text-[#0F1113] mb-6">Why this matters:</h3>
              <p className="text-[17px] text-[#0F1113] leading-[1.8] mb-6">
                Unnecessary work slows delivery, creates confusion, and increases risk.
              </p>
              <p className="font-display italic text-[20px] text-[#2F5D62] mb-6">
                We remove that.
              </p>
              <p className="text-[16px] text-[#525250] mb-4">So you get:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                  <span className="text-[16px] text-[#0F1113]">faster progress</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                  <span className="text-[16px] text-[#0F1113]">clearer outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                  <span className="text-[16px] text-[#0F1113]">better control</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-[#2F5D62] pl-6 py-2">
              <p className="font-display text-[20px] text-[#0F1113] leading-[1.6]">
                We keep delivery simple, focused, and effective so effort is spent only where it matters.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 — DELIVERY MODEL CIRCLE */}
      <DeliveryModelCircle />

      {/* SECTION 7 — CLOSING CTA */}
      <section className="bg-[#F7F6F3] py-[160px]">
        <div className="container-custom max-w-2xl text-center">
          <AnimatedSection>
            <div className="mb-8 flex justify-center">
              <SectionLabel>GET IN TOUCH</SectionLabel>
            </div>
            <p
              className="text-[18px] text-[#0F1113] max-w-lg mx-auto mb-12 leading-[1.7]"
            >
              We help you move from where you are to where delivery is controlled.
            </p>
            <div className="flex justify-center">
              <Button href="/contact" variant="primary">
                Start a Conversation
              </Button>
            </div>
            <p className="text-[14px] text-[#A89F91] mt-6">
              Or email us at{' '}
              <a
                href="mailto:hello@stratoraconsulting.com"
                className="hover:text-[#2F5D62] transition-colors"
              >
                hello@stratoraconsulting.com
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
