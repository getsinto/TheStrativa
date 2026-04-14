import Link from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Stratora Consulting | Programme Delivery Excellence',
  description: 'We bring clarity and control to complex programmes. ERP implementation, transformation delivery, and go-live readiness for ambitious organisations.',
};

export default function HomePage() {
  return (
    <main>
      {/* HERO — Editorial Style */}
      <section className="bg-white py-4xl">
        <div className="max-w-content mx-auto px-md">
          <div className="animate-fade-in-up">
            {/* Label */}
            <p className="text-label text-steel uppercase mb-lg">
              Programme Delivery Excellence
            </p>
            
            {/* Headline */}
            <h1 className="font-display text-hero text-navy mb-xl">
              Clarity where others see complexity
            </h1>
            
            {/* Supporting text */}
            <p className="text-body-lg text-charcoal mb-2xl max-w-wide">
              We help organisations take control of complex programmes—bringing structure, direction, and delivery where it matters most.
            </p>
            
            {/* Single CTA */}
            <Button href="/contact" variant="primary">
              Start a conversation
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-3xl">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-navy rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* STATEMENT BLOCK */}
      <section className="bg-gray-100 py-4xl">
        <div className="max-w-wide mx-auto px-md">
          <AnimatedSection>
            <div className="border-l-4 border-navy pl-xl">
              <p className="font-display text-h1 text-charcoal leading-tight mb-md">
                Most projects do not fail because they are complex.
              </p>
              <p className="font-display text-h1 text-navy italic">
                They fail because complexity is not controlled.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES — Modular Cards */}
      <section className="bg-white py-4xl">
        <div className="max-w-container mx-auto px-md">
          <AnimatedSection>
            {/* Section header */}
            <div className="mb-3xl">
              <p className="text-label text-steel uppercase mb-md">What we do</p>
              <h2 className="font-display text-h1 text-navy max-w-content">
                We focus on three areas of delivery
              </h2>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              {/* Service 1 */}
              <div className="bg-white border border-gray-200 p-xl hover:shadow-card-hover hover:border-navy transition-all duration-200">
                <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-lg">
                  <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-h3 text-navy mb-md">Clarity</h3>
                <p className="text-body text-steel">
                  We bring a clear understanding of your situation and define what needs to happen.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white border border-gray-200 p-xl hover:shadow-card-hover hover:border-navy transition-all duration-200">
                <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-lg">
                  <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-display text-h3 text-navy mb-md">Control</h3>
                <p className="text-body text-steel">
                  We structure delivery, manage risks, and keep everything visible and organised.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white border border-gray-200 p-xl hover:shadow-card-hover hover:border-navy transition-all duration-200">
                <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-lg">
                  <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-h3 text-navy mb-md">Delivery</h3>
                <p className="text-body text-steel">
                  We support execution from start to finish, ensuring work progresses in a controlled way.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURED WORK — Large Format */}
      <section className="bg-gray-100 py-4xl">
        <div className="max-w-container mx-auto px-md">
          <AnimatedSection>
            {/* Section header */}
            <div className="mb-3xl">
              <p className="text-label text-steel uppercase mb-md">Featured work</p>
              <h2 className="font-display text-h1 text-navy">
                Recent engagements
              </h2>
            </div>

            {/* Featured case study */}
            <div className="bg-white border border-gray-200 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
              {/* Image */}
              <div className="bg-gradient-to-br from-navy/5 to-navy/10 h-64 lg:h-auto relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-navy/20 rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div className="p-2xl">
                <p className="text-label text-steel uppercase mb-md">
                  ERP Programme Closure
                </p>
                <h3 className="font-display text-h2 text-navy mb-lg">
                  From chaos to controlled closure
                </h3>
                <p className="text-body text-charcoal mb-xl">
                  Multiple suppliers. Unresolved issues. No clear closure position. We brought structure, visibility, and a credible path to completion.
                </p>
                <Link 
                  href="/case-studies/erp-programme-closure"
                  className="inline-flex items-center gap-2 text-body text-navy hover:text-teal transition-colors group"
                >
                  Read case study
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* View all link */}
            <div className="mt-xl text-center">
              <Link 
                href="/case-studies"
                className="text-body text-navy hover:text-teal transition-colors"
              >
                View all case studies →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATISTICS BLOCK */}
      <section className="bg-white py-4xl">
        <div className="max-w-container mx-auto px-md">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Stat 1 */}
              <div className="text-center pt-xl md:pt-0">
                <p className="font-display text-[72px] text-navy font-bold mb-sm">15+</p>
                <p className="text-label text-steel uppercase">Years Combined Experience</p>
              </div>

              {/* Stat 2 */}
              <div className="text-center pt-xl md:pt-0">
                <p className="font-display text-[72px] text-navy font-bold mb-sm">£50M+</p>
                <p className="text-label text-steel uppercase">Programme Value Delivered</p>
              </div>

              {/* Stat 3 */}
              <div className="text-center pt-xl md:pt-0">
                <p className="font-display text-[72px] text-navy font-bold mb-sm">100%</p>
                <p className="text-label text-steel uppercase">Client Satisfaction</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="bg-gray-100 py-4xl">
        <div className="max-w-container mx-auto px-md">
          <AnimatedSection>
            {/* Section header */}
            <div className="mb-3xl">
              <p className="text-label text-steel uppercase mb-md">Insights</p>
              <h2 className="font-display text-h1 text-navy">
                Latest thinking
              </h2>
            </div>

            {/* Insights grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              {/* Insight 1 */}
              <article className="bg-white border border-gray-200 overflow-hidden hover:shadow-card-hover transition-shadow">
                <div className="bg-navy/5 h-48" />
                <div className="p-lg">
                  <p className="text-label text-steel uppercase mb-sm">Programme Delivery</p>
                  <h3 className="font-display text-h3 text-navy mb-md">
                    Why most ERP programmes fail
                  </h3>
                  <p className="text-body-sm text-steel mb-md">
                    It's not the technology. It's the lack of structure and control.
                  </p>
                  <Link href="/insights/why-erp-programmes-fail" className="text-body-sm text-navy hover:text-teal">
                    Read more →
                  </Link>
                </div>
              </article>

              {/* Insight 2 */}
              <article className="bg-white border border-gray-200 overflow-hidden hover:shadow-card-hover transition-shadow">
                <div className="bg-navy/5 h-48" />
                <div className="p-lg">
                  <p className="text-label text-steel uppercase mb-sm">Go-Live Readiness</p>
                  <h3 className="font-display text-h3 text-navy mb-md">
                    The go-live checklist
                  </h3>
                  <p className="text-body-sm text-steel mb-md">
                    What you need in place before pressing the button.
                  </p>
                  <Link href="/insights/go-live-checklist" className="text-body-sm text-navy hover:text-teal">
                    Read more →
                  </Link>
                </div>
              </article>

              {/* Insight 3 */}
              <article className="bg-white border border-gray-200 overflow-hidden hover:shadow-card-hover transition-shadow">
                <div className="bg-navy/5 h-48" />
                <div className="p-lg">
                  <p className="text-label text-steel uppercase mb-sm">Transformation</p>
                  <h3 className="font-display text-h3 text-navy mb-md">
                    Control without bureaucracy
                  </h3>
                  <p className="text-body-sm text-steel mb-md">
                    How to maintain control without slowing delivery.
                  </p>
                  <Link href="/insights/control-without-bureaucracy" className="text-body-sm text-navy hover:text-teal">
                    Read more →
                  </Link>
                </div>
              </article>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA SECTION — Simple & Centered */}
      <section className="bg-white py-4xl">
        <div className="max-w-content mx-auto px-md text-center">
          <AnimatedSection>
            <h2 className="font-display text-h1 text-navy mb-xl">
              Ready to take control?
            </h2>
            <p className="text-body-lg text-charcoal mb-2xl">
              Let's discuss how we can bring clarity and structure to your programme.
            </p>
            <Button href="/contact" variant="primary">
              Start a conversation
            </Button>
            <p className="text-body-sm text-steel mt-lg">
              Or email us at{' '}
              <a href="mailto:hello@stratoraconsulting.com" className="text-navy hover:text-teal">
                hello@stratoraconsulting.com
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
