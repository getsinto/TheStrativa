import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import DeliveryWheel from '@/components/sections/DeliveryWheel';

export const metadata = {
  title: 'Clarity Where Others See Complexity',
  description: 'Stratora Consulting helps organisations deliver complex programmes with structure, control, and confidence. ERP, transformation, go-live readiness, and digital delivery.',
};


export default function HomePage() {
  return (
    <main className="pt-20">
      {/* SECTION 1 — HERO - McKinsey Style with Professional Background */}
      <section className="relative min-h-[90vh] bg-white flex items-center justify-center py-4xl overflow-hidden">
        {/* Professional gradient background - McKinsey inspired */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-white to-[#F8F9FA] opacity-60" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2F5D62] opacity-[0.03] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2F5D62] opacity-[0.02] rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="animate-fade-in-up">
              {/* Eyebrow label - McKinsey style */}
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-8">
                Programme Delivery Excellence
              </p>
              
              {/* Main headline - clean, bold */}
              <h1 className="font-display text-[clamp(48px,6vw,72px)] text-[#0F1113] leading-[1.1] mb-8 font-bold tracking-[-0.02em]">
                Clarity where others see complexity.
                <br />
                Control where others lose it.
              </h1>

              {/* Supporting text */}
              <p className="text-[20px] leading-[1.7] text-[#374151] max-w-[600px] mb-12">
                We help organisations take control of complex work bringing structure, direction, and delivery where it matters most.
              </p>

              {/* CTAs */}
              <div className="flex gap-4 flex-wrap">
                <Button href="/contact" variant="primary">
                  Start a conversation
                </Button>
                <Button href="/case-studies" variant="secondary">
                  Explore our work
                </Button>
              </div>
              
              <p className="text-[14px] text-[#6B7280] mt-6">
                No obligation. Clear direction from the first discussion.
              </p>
            </div>

            {/* Right: Hero Visual Area */}
            <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                {/* Hero Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#F8F9FA] via-white to-[#E5E7EB] rounded-lg overflow-hidden border border-[#E5E7EB] relative">
                  <img 
                    src="/images/cases/hero-consulting.jpg" 
                    alt="Professional programme delivery"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative accents */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2F5D62] opacity-5 rounded-lg -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#2F5D62] opacity-5 rounded-lg -z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-[#E5E7EB] rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-[#2F5D62] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — STATEMENT - McKinsey Quote Style */}
      <section className="bg-[#F8F9FA] py-4xl">
        <div className="container-custom max-w-wide">
          <AnimatedSection>
            <div className="border-l-4 border-[#2F5D62] pl-12">
              <p className="font-display text-[clamp(32px,4vw,48px)] text-[#0F1113] leading-[1.4] mb-6">
                Most projects do not fail because they are complex.
              </p>
              <p className="font-display text-[clamp(36px,4.5vw,54px)] text-[#2F5D62] italic leading-[1.3]">
                They fail because complexity is not controlled.
              </p>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#6B7280]">
                We exist to fix that
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 — SERVICES GRID - McKinsey Card Style */}
      <section className="bg-white py-4xl">
        <div className="container-custom max-w-container">
          <div className="mb-16">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-4">
              What we do
            </p>
            <h2 className="font-display text-[36px] text-[#0F1113] font-semibold">
              Our services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <AnimatedSection delay={0}>
              <div className="bg-white border border-[#E5E7EB] p-8 hover:shadow-card-hover hover:border-[#2F5D62] transition-all duration-200 h-full">
                <h3 className="font-display text-[20px] text-[#0F1113] font-semibold mb-4">
                  Clarity
                </h3>
                <p className="text-[15px] text-[#6B7280] leading-[1.6]">
                  We bring a clear understanding of your situation and define what needs to happen.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 2 */}
            <AnimatedSection delay={120}>
              <div className="bg-white border border-[#E5E7EB] p-8 hover:shadow-card-hover hover:border-[#2F5D62] transition-all duration-200 h-full">
                <h3 className="font-display text-[20px] text-[#0F1113] font-semibold mb-4">
                  Control
                </h3>
                <p className="text-[15px] text-[#6B7280] leading-[1.6]">
                  We structure delivery, manage risks, and keep everything visible and organised.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 3 */}
            <AnimatedSection delay={240}>
              <div className="bg-white border border-[#E5E7EB] p-8 hover:shadow-card-hover hover:border-[#2F5D62] transition-all duration-200 h-full">
                <h3 className="font-display text-[20px] text-[#0F1113] font-semibold mb-4">
                  Delivery
                </h3>
                <p className="text-[15px] text-[#6B7280] leading-[1.6]">
                  We support execution from start to finish, ensuring work progresses in a controlled way.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 4 */}
            <AnimatedSection delay={360}>
              <div className="bg-white border border-[#E5E7EB] p-8 hover:shadow-card-hover hover:border-[#2F5D62] transition-all duration-200 h-full">
                <h3 className="font-display text-[20px] text-[#0F1113] font-semibold mb-4">
                  Website Delivery
                </h3>
                <p className="text-[15px] text-[#6B7280] leading-[1.6]">
                  We deliver high-quality websites through structured coordination, without unnecessary complexity.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURED WORK - McKinsey Large Card */}
      <section className="bg-[#F8F9FA] py-4xl">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-16">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-4">
                Featured work
              </p>
              <h2 className="font-display text-[36px] text-[#0F1113] font-semibold max-w-lg">
                Work that moved things forward
              </h2>
            </div>

            {/* Featured Case Study Block */}
            <div className="bg-white border border-[#E5E7EB] grid grid-cols-1 lg:grid-cols-2 overflow-hidden hover:shadow-card-hover transition-shadow duration-300">
              {/* Image */}
              <div className="bg-gradient-to-br from-[#F8F9FA] to-[#E5E7EB] h-64 lg:h-auto relative overflow-hidden">
                {/* If you have a case study image, add it here */}
                {/* <img 
                  src="/images/cases/case-study-erp.jpg" 
                  alt="ERP Programme Closure"
                  className="w-full h-full object-cover"
                /> */}
                
                {/* Placeholder design */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 border-2 border-[#2F5D62] opacity-20 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-12">
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-6">
                  ERP Programme Closure
                </p>
                <h3 className="font-display text-[28px] text-[#0F1113] font-semibold mb-6 leading-[1.3]">
                  A complex ERP programme brought to a controlled, credible closure
                </h3>
                <p className="text-[16px] leading-[1.7] text-[#6B7280] mb-8">
                  Multiple suppliers. Unresolved issues. No clear closure position.
                </p>
                <div className="border-l-4 border-[#2F5D62] pl-6 mb-8">
                  <p className="text-[15px] italic text-[#374151]">
                    A controlled closure, not a forced ending.
                  </p>
                </div>
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#2F5D62] hover:text-[#1E3D40] transition-colors group">
                  Read case study
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/case-studies" className="text-[16px] font-semibold text-[#2F5D62] hover:text-[#1E3D40] transition-colors">
                View all case studies →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 — HOW WE WORK - McKinsey Feature Style */}
      <section className="bg-white py-4xl">
        <div className="container-custom max-w-content">
          <AnimatedSection>
            <div className="mb-16">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-4">
                How we work
              </p>
              <h2 className="font-display text-[36px] text-[#0F1113] font-semibold mb-8 leading-[1.2]">
                We focus only on what creates real value
              </h2>
              
              <p className="text-[17px] text-[#374151] leading-[1.8] mb-8">
                We do not add unnecessary work, unnecessary complexity, or unnecessary process.
                Everything we do must have a clear purpose and a clear outcome.
              </p>
            </div>

            {/* Feature boxes */}
            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-[#2F5D62] pl-8 py-2">
                <h3 className="font-display text-[24px] text-[#0F1113] font-semibold mb-6">What this means</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-6 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                    <span className="text-[16px] text-[#374151] leading-[1.7]">We do not build things "just in case"</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-6 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                    <span className="text-[16px] text-[#374151] leading-[1.7]">We do not create documents or reports that are not actively used</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-6 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                    <span className="text-[16px] text-[#374151] leading-[1.7]">We only introduce structure where it improves clarity, reduces risk, or supports delivery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F8F9FA] border border-[#E5E7EB] p-10">
                <h3 className="font-display text-[24px] text-[#0F1113] font-semibold mb-6">Our approach</h3>
                <p className="text-[16px] text-[#374151] mb-6 leading-[1.7]">Before doing any piece of work, we ask three simple questions:</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-[#2F5D62] text-[24px] leading-none font-bold">→</span>
                    <span className="text-[16px] text-[#374151] leading-[1.7]">What problem does this solve?</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#2F5D62] text-[24px] leading-none font-bold">→</span>
                    <span className="text-[16px] text-[#374151] leading-[1.7]">Who benefits from this?</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-[#2F5D62] text-[24px] leading-none font-bold">→</span>
                    <span className="text-[16px] text-[#374151] leading-[1.7]">What happens if we simplify this?</span>
                  </div>
                </div>
                <p className="text-[15px] text-[#6B7280] mt-6 italic leading-[1.7]">
                  If something is unclear, we simplify it before moving forward.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="font-display text-[24px] text-[#0F1113] font-semibold mb-6">Why this matters</h3>
              <p className="text-[17px] text-[#374151] leading-[1.8] mb-6">
                Unnecessary work slows delivery, creates confusion, and increases risk.
              </p>
              <p className="font-display italic text-[20px] text-[#2F5D62] mb-8">
                We remove that.
              </p>
              <p className="text-[16px] text-[#6B7280] mb-6">So you get:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="w-5 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                  <span className="text-[16px] text-[#374151]">faster progress</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-5 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                  <span className="text-[16px] text-[#374151]">clearer outcomes</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-5 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                  <span className="text-[16px] text-[#374151]">better control</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-[#2F5D62] pl-8 py-4">
              <p className="font-display text-[20px] text-[#0F1113] leading-[1.6]">
                We keep delivery simple, focused, and effective so effort is spent only where it matters.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 — DELIVERY WHEEL */}
      <DeliveryWheel />

      {/* SECTION 7 — CLOSING CTA - McKinsey Simple CTA */}
      <section className="bg-white py-4xl">
        <div className="container-custom max-w-content text-center">
          <AnimatedSection>
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-6">
              Get in touch
            </p>
            <h2 className="font-display text-[36px] text-[#0F1113] font-semibold mb-8 leading-[1.2]">
              Ready to take control?
            </h2>
            <p className="text-[18px] text-[#374151] max-w-[600px] mx-auto mb-12 leading-[1.7]">
              We help you move from where you are to where delivery is controlled.
            </p>
            <div className="flex justify-center mb-8">
              <Button href="/contact" variant="primary">
                Start a conversation
              </Button>
            </div>
            <p className="text-[15px] text-[#6B7280]">
              Or email us at{' '}
              <a
                href="mailto:hello@stratoraconsulting.com"
                className="text-[#2F5D62] hover:text-[#1E3D40] font-semibold transition-colors"
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
