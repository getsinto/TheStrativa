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
      {/* SECTION 1 — HERO - Modern Professional McKinsey Style */}
      <section className="relative min-h-[85vh] bg-white flex items-center justify-center py-20 lg:py-24 overflow-hidden">
        {/* Professional gradient background - McKinsey inspired */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-white to-[#F8F9FA] opacity-80" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F5D62] opacity-[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2F5D62] opacity-[0.015] rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Content - 7 columns */}
            <div className="lg:col-span-7 animate-fade-in-up">
              {/* Eyebrow label - McKinsey style */}
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-[#2F5D62]" />
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#2F5D62]">
                  Programme Delivery Excellence
                </p>
              </div>
              
              {/* Main headline - clean, bold */}
              <h1 className="font-display text-[clamp(42px,5.5vw,68px)] text-[#0F1113] leading-[1.05] mb-6 font-bold tracking-[-0.02em]">
                Clarity where others see complexity.
                <br />
                <span className="text-[#2F5D62]">Control</span> where others lose it.
              </h1>

              {/* Supporting text */}
              <p className="text-[19px] leading-[1.65] text-[#4B5563] max-w-[560px] mb-10 font-light">
                We help organisations take control of complex work bringing structure, direction, and delivery where it matters most.
              </p>

              {/* CTAs */}
              <div className="flex gap-4 flex-wrap items-center">
                <Button href="/contact" variant="primary">
                  Start a conversation
                </Button>
                <Button href="/case-studies" variant="secondary">
                  Explore our work
                </Button>
              </div>
              
              {/* Trust indicator */}
              <div className="mt-8 flex items-center gap-3 text-[13px] text-[#6B7280]">
                <svg className="w-5 h-5 text-[#2F5D62]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No obligation. Clear direction from the first discussion.</span>
              </div>
            </div>

            {/* Right: Hero Image - 5 columns */}
            <div className="lg:col-span-5 hidden lg:block animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <div className="relative">
                {/* Hero Image with modern styling */}
                <div className="relative rounded-2xl overflow-hidden shadow-premium">
                  <div className="aspect-[4/5] bg-gradient-to-br from-[#F8F9FA] via-white to-[#E5E7EB]">
                    <img 
                      src="/images/cases/hero-consulting.jpg" 
                      alt="Professional programme delivery"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/8 to-transparent pointer-events-none" />
                </div>
                
                {/* Floating accent card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-premium p-6 border border-[#E5E7EB] max-w-[200px] hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#2F5D62]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#2F5D62]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[24px] font-bold text-[#0F1113]">100%</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-[#6B7280] leading-tight">
                    Controlled delivery from start to finish
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2F5D62] opacity-5 rounded-2xl -z-10 blur-xl animate-pulse" style={{ animationDuration: '3s' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - subtle */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40 hover:opacity-100 transition-opacity">
          <div className="w-5 h-8 border-2 border-[#2F5D62] rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#2F5D62] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — STATEMENT - Premium Quote Style */}
      <section className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-50 py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Decorative accent line at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-teal to-primary-gold"></div>
        
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            {/* Premium quote block */}
            <div className="relative">
              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-teal to-primary-gold"></div>
              
              <div className="pl-12 md:pl-16">
                <p className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 leading-tight mb-6 font-medium">
                  Most projects do not fail because they are complex.
                </p>
                <p className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient italic leading-tight font-semibold">
                  They fail because complexity is not controlled.
                </p>
              </div>
            </div>
            
            {/* Bottom tagline */}
            <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-neutral-200 rounded-full shadow-sm">
                <div className="w-2 h-2 rounded-full bg-primary-teal animate-pulse"></div>
                <p className="text-sm font-semibold uppercase tracking-wider text-neutral-600">
                  We exist to fix that
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 — SERVICES GRID - Premium Card Style */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-7xl">
          {/* Section Header */}
          <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary-teal"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                What we do
              </p>
              <div className="w-8 h-0.5 bg-primary-teal"></div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-neutral-900 font-bold mb-4">
              Our services
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Four core capabilities that bring clarity, control, and delivery to complex programmes
            </p>
          </div>

          {/* Premium Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Clarity */}
            <AnimatedSection delay={0}>
              <div className="card-feature h-full group cursor-pointer">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-teal/10 to-primary-teal/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                
                <h3 className="font-display text-2xl text-neutral-900 font-semibold mb-4 group-hover:text-primary-teal transition-colors">
                  Clarity
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  We bring a clear understanding of your situation and define what needs to happen.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 2 - Control */}
            <AnimatedSection delay={100}>
              <div className="card-feature h-full group cursor-pointer">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-teal/10 to-primary-teal/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <h3 className="font-display text-2xl text-neutral-900 font-semibold mb-4 group-hover:text-primary-teal transition-colors">
                  Control
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  We structure delivery, manage risks, and keep everything visible and organised.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 3 - Delivery */}
            <AnimatedSection delay={200}>
              <div className="card-feature h-full group cursor-pointer">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-teal/10 to-primary-teal/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="font-display text-2xl text-neutral-900 font-semibold mb-4 group-hover:text-primary-teal transition-colors">
                  Delivery
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  We support execution from start to finish, ensuring work progresses in a controlled way.
                </p>
              </div>
            </AnimatedSection>

            {/* Card 4 - Website Delivery */}
            <AnimatedSection delay={300}>
              <div className="card-feature h-full group cursor-pointer">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-teal/10 to-primary-teal/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                
                <h3 className="font-display text-2xl text-neutral-900 font-semibold mb-4 group-hover:text-primary-teal transition-colors">
                  Website Delivery
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  We deliver high-quality websites through structured coordination, without unnecessary complexity.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURED WORK - Premium Large Card */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-7xl">
          <AnimatedSection>
            {/* Section Header */}
            <div className="mb-20">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-primary-teal"></div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                  Featured work
                </p>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-neutral-900 font-bold max-w-2xl">
                Work that moved things forward
              </h2>
            </div>

            {/* Premium Featured Case Study Card */}
            <div className="card-premium grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden p-0 group cursor-pointer">
              {/* Image - 2 columns */}
              <div className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 min-h-[300px] lg:min-h-[500px]">
                <img 
                  src="/images/cases/case.jpg" 
                  alt="ERP Programme Closure"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content - 3 columns */}
              <div className="lg:col-span-3 p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                {/* Category badge */}
                <div className="inline-flex items-center gap-2 mb-6 w-fit">
                  <div className="w-2 h-2 rounded-full bg-primary-teal"></div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                    ERP Programme Closure
                  </p>
                </div>
                
                <h3 className="font-display text-3xl md:text-4xl text-neutral-900 font-bold mb-6 leading-tight group-hover:text-gradient transition-colors">
                  A complex ERP programme brought to a controlled, credible closure
                </h3>
                
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Multiple suppliers. Unresolved issues. No clear closure position.
                </p>
                
                {/* Quote block */}
                <div className="relative pl-6 mb-10">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-teal to-primary-gold"></div>
                  <p className="text-lg italic text-neutral-700 font-medium">
                    A controlled closure, not a forced ending.
                  </p>
                </div>
                
                {/* CTA Link */}
                <Link href="/case-studies" className="inline-flex items-center gap-3 text-base font-semibold text-primary-teal hover:text-primary-navy transition-colors group/link w-fit">
                  <span>Read case study</span>
                  <svg className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* View all link */}
            <div className="text-center mt-12">
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-base font-semibold text-primary-teal hover:text-primary-navy transition-colors group">
                <span>View all case studies</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* CTA Section */}
            <div className="mt-24 pt-16 border-t border-neutral-200">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-8 h-0.5 bg-primary-teal"></div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                    Get in touch
                  </p>
                  <div className="w-8 h-0.5 bg-primary-teal"></div>
                </div>
                
                <h3 className="font-display text-3xl md:text-4xl text-neutral-900 font-bold mb-6">
                  Ready to discuss your next project?
                </h3>
                
                <p className="text-lg text-neutral-600 mb-10">
                  Let's explore how we can bring clarity and control to your delivery challenges
                </p>
                
                <Button href="/contact" variant="primary">
                  Start a conversation
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 — HOW WE WORK - Premium Feature Style */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-5xl">
          <AnimatedSection>
            {/* Section Header */}
            <div className="mb-20 text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-primary-teal"></div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                  How we work
                </p>
                <div className="w-8 h-0.5 bg-primary-teal"></div>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-neutral-900 font-bold mb-6">
                We focus only on what creates real value
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                We do not add unnecessary work, unnecessary complexity, or unnecessary process. 
                Everything we do must have a clear purpose and a clear outcome.
              </p>
            </div>

            {/* Feature boxes */}
            <div className="space-y-10 mb-16">
              {/* What this means */}
              <div className="card-premium">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-teal/10 to-primary-teal/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-neutral-900 font-semibold mb-4">
                      What this means
                    </h3>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-teal mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                    <span className="text-base text-neutral-700 leading-relaxed">
                      We do not build things "just in case"
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-teal mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                    <span className="text-base text-neutral-700 leading-relaxed">
                      We do not create documents or reports that are not actively used
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-teal mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                    <span className="text-base text-neutral-700 leading-relaxed">
                      We only introduce structure where it improves clarity, reduces risk, or supports delivery
                    </span>
                  </li>
                </ul>
              </div>

              {/* Our approach */}
              <div className="card-feature">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-teal/10 to-primary-teal/5 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-neutral-900 font-semibold mb-2">
                      Our approach
                    </h3>
                    <p className="text-base text-neutral-600">
                      Before doing any piece of work, we ask three simple questions:
                    </p>
                  </div>
                </div>
                
                <div className="space-y-5 mt-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-primary-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-teal group-hover:text-white transition-colors">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <span className="text-base text-neutral-700 leading-relaxed pt-1">
                      What problem does this solve?
                    </span>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-primary-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-teal group-hover:text-white transition-colors">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <span className="text-base text-neutral-700 leading-relaxed pt-1">
                      Who benefits from this?
                    </span>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-primary-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-teal group-hover:text-white transition-colors">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <span className="text-base text-neutral-700 leading-relaxed pt-1">
                      What happens if we simplify this?
                    </span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <p className="text-sm italic text-neutral-600">
                    If something is unclear, we simplify it before moving forward.
                  </p>
                </div>
              </div>
            </div>

            {/* Why this matters */}
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="font-display text-3xl text-neutral-900 font-semibold mb-6">
                Why this matters
              </h3>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Unnecessary work slows delivery, creates confusion, and increases risk.
              </p>
              <p className="font-display text-2xl text-gradient italic mb-10 font-semibold">
                We remove that.
              </p>
              
              {/* Benefits grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200">
                  <div className="w-10 h-10 rounded-lg bg-primary-teal/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-base font-semibold text-neutral-900">Faster progress</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200">
                  <div className="w-10 h-10 rounded-lg bg-primary-teal/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-base font-semibold text-neutral-900">Clearer outcomes</p>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200">
                  <div className="w-10 h-10 rounded-lg bg-primary-teal/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-base font-semibold text-neutral-900">Better control</p>
                </div>
              </div>
            </div>

            {/* Final statement */}
            <div className="mt-16 pt-12 border-t border-neutral-200">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-teal to-primary-gold"></div>
                <p className="font-display text-xl md:text-2xl text-neutral-900 leading-relaxed">
                  We keep delivery simple, focused, and effective so effort is spent only where it matters.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 — DELIVERY WHEEL */}
      <DeliveryWheel />

      {/* SECTION 7 — CLOSING CTA - Premium Simple CTA */}
      <section className="relative bg-gradient-to-br from-primary-navy via-[#003366] to-primary-teal py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container-custom max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="w-8 h-0.5 bg-primary-gold"></div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary-gold">
                  Get in touch
                </p>
                <div className="w-8 h-0.5 bg-primary-gold"></div>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
                Ready to take control?
              </h2>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
                We help you move from where you are to where delivery is controlled.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button href="/contact" variant="primary" className="bg-white text-primary-navy hover:bg-neutral-50">
                  Start a conversation
                </Button>
                <Button href="/case-studies" variant="secondary" className="border-white text-white hover:bg-white hover:text-primary-navy">
                  View our work
                </Button>
              </div>
              
              {/* Contact info */}
              <div className="pt-8 border-t border-white/20">
                <p className="text-sm text-white/70 mb-3">
                  Or email us directly
                </p>
                <a
                  href="mailto:hello@stratoraconsulting.com"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-primary-gold transition-colors group"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@stratoraconsulting.com</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      </section>
    </main>
  );
}
