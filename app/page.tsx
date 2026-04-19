import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import DeliveryWheel from '@/components/sections/DeliveryWheel';

export const metadata = {
  title: 'Clarity Where Others See Complexity',
  description: 'Stratora Consulting helps organisations deliver complex programmes with structure, control, and confidence. ERP, transformation, go-live readiness, and digital delivery.',
};

export default function HomePage() {
  return (
    <main className="pt-20 bg-white">
      {/* HERO SECTION - Sophisticated & Clean */}
      <section className="relative overflow-hidden bg-white">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A5F5F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container-custom max-w-7xl py-20 md:py-28 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Small badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-teal/5 rounded-full border border-primary-teal/10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-teal"></div>
                <span className="text-xs font-medium text-primary-teal uppercase tracking-wider">Programme Delivery Excellence</span>
              </div>

              {/* Main heading */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-neutral-900 tracking-tight">
                <span className="relative inline-block">
                  Clarity
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="#0A5F5F" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                {' '}where others see complexity
              </h1>

              {/* Description */}
              <p className="text-xl text-neutral-600 leading-relaxed max-w-xl">
                We help organisations take control of complex work—bringing structure, direction, and delivery where it matters most.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button href="/contact" variant="primary">
                  Start a conversation
                </Button>
                <Button href="/case-studies" variant="secondary">
                  View our work
                </Button>
              </div>

              {/* Trust badge */}
              <div className="flex items-start gap-3 pt-6 border-t border-neutral-200">
                <svg className="w-5 h-5 text-primary-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-neutral-600">
                  No obligation. Clear direction from the first discussion.
                </p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative hidden lg:block">
              {/* Main image container */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
                <img 
                  src="/images/cases/hero-consulting.jpg" 
                  alt="Professional programme delivery"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent"></div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-neutral-100 max-w-[220px]">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-teal/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-neutral-900">100%</div>
                </div>
                <p className="text-sm text-neutral-600 leading-snug">
                  Controlled delivery from start to finish
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-teal/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT SECTION - Bold Typography */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-custom max-w-5xl">
          <AnimatedSection>
            <div className="space-y-8">
              <blockquote className="space-y-6">
                <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-neutral-900">
                  Most projects do not fail because they are complex.
                </p>
                <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-primary-teal italic font-semibold">
                  They fail because complexity is not controlled.
                </p>
              </blockquote>
              
              <div className="pt-8">
                <p className="text-lg text-neutral-600 italic">— We exist to fix that</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES SECTION - Clean Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-primary-teal"></div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-teal">What we do</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mb-6">
              Our services
            </h2>
            <p className="text-xl text-neutral-600">
              Four core capabilities that bring clarity, control, and delivery to complex programmes
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Clarity',
                description: 'We bring a clear understanding of your situation and define what needs to happen.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                )
              },
              {
                title: 'Control',
                description: 'We structure delivery, manage risks, and keep everything visible and organised.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                )
              },
              {
                title: 'Delivery',
                description: 'We support execution from start to finish, ensuring work progresses in a controlled way.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                )
              },
              {
                title: 'Website Delivery',
                description: 'We deliver high-quality websites through structured coordination, without unnecessary complexity.',
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                )
              }
            ].map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div className="group h-full p-8 rounded-2xl bg-white border border-neutral-200 hover:border-primary-teal hover:shadow-lg transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary-teal/10 flex items-center justify-center mb-6 group-hover:bg-primary-teal/20 transition-colors">
                    <svg className="w-6 h-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {service.icon}
                    </svg>
                  </div>
                  
                  <h3 className="font-display text-2xl text-neutral-900 mb-4 group-hover:text-primary-teal transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK SECTION */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-custom max-w-7xl">
          <AnimatedSection>
            {/* Header */}
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-primary-teal"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-teal">Featured work</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-neutral-900">
                Work that moved things forward
              </h2>
            </div>

            {/* Featured Case Study Card */}
            <Link href="/case-studies">
              <div className="group grid lg:grid-cols-5 gap-0 bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:border-primary-teal hover:shadow-xl transition-all duration-500">
                {/* Image */}
                <div className="lg:col-span-2 relative overflow-hidden bg-neutral-100 min-h-[300px] lg:min-h-[500px]">
                  <img 
                    src="/images/cases/case.jpg" 
                    alt="ERP Programme Closure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-6 w-fit">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-teal"></div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-teal">
                      ERP Programme Closure
                    </span>
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-4xl text-neutral-900 mb-6 leading-tight">
                    A complex ERP programme brought to a controlled, credible closure
                  </h3>
                  
                  <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                    Multiple suppliers. Unresolved issues. No clear closure position.
                  </p>
                  
                  <div className="inline-flex items-center gap-3 text-primary-teal font-semibold group-hover:gap-4 transition-all">
                    <span>Read case study</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* View All Link */}
            <div className="text-center mt-12">
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-teal font-medium transition-colors group">
                <span>View all case studies</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom max-w-6xl">
          <AnimatedSection>
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-primary-teal"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-teal">How we work</span>
                <div className="w-8 h-0.5 bg-primary-teal"></div>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mb-6">
                We focus only on what creates real value
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed">
                We do not add unnecessary work, unnecessary complexity, or unnecessary process. Everything we do must have a clear purpose and a clear outcome.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* What this means */}
              <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
                <h3 className="font-display text-2xl text-neutral-900 mb-6">What this means</h3>
                <ul className="space-y-4">
                  {[
                    'We do not build things "just in case"',
                    'We do not create documents or reports that are not actively used',
                    'We only introduce structure where it improves clarity, reduces risk, or supports delivery'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our approach */}
              <div className="p-8 rounded-2xl bg-primary-teal/5 border border-primary-teal/20">
                <h3 className="font-display text-2xl text-neutral-900 mb-4">Our approach</h3>
                <p className="text-neutral-600 mb-6">Before doing any piece of work, we ask three simple questions:</p>
                <ol className="space-y-4">
                  {[
                    'What problem does this solve?',
                    'Who benefits from this?',
                    'What happens if we simplify this?'
                  ].map((question, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-teal text-white flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </span>
                      <span className="text-neutral-700 pt-1">{question}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Bottom statement */}
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xl text-neutral-600 mb-4">
                Unnecessary work slows delivery, creates confusion, and increases risk.
              </p>
              <p className="font-display text-3xl text-primary-teal italic font-semibold">
                We remove that.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* DELIVERY WHEEL */}
      <DeliveryWheel />

      {/* FINAL CTA SECTION */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container-custom max-w-4xl relative">
          <AnimatedSection>
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-gold"></div>
                <span className="text-xs font-medium text-white uppercase tracking-wider">Get in touch</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Ready to take control?
              </h2>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                We help you move from where you are to where delivery is controlled.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button href="/contact" variant="primary" className="bg-white text-neutral-900 hover:bg-neutral-100">
                  Start a conversation
                </Button>
                <Button href="/case-studies" variant="secondary" className="border-white/30 text-white hover:bg-white/10">
                  View our work
                </Button>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-white/60 mb-2">Or email us directly</p>
                <a
                  href="mailto:hello@stratoraconsulting.com"
                  className="inline-flex items-center gap-2 text-lg font-medium text-white hover:text-primary-gold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@stratoraconsulting.com</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
