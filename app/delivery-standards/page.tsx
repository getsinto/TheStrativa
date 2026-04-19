import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Divider from '@/components/ui/Divider';
import Button from '@/components/ui/Button';
import DeliveryWheel from '@/components/sections/DeliveryWheel';

export const metadata = {
  title: 'Delivery Standards',
  description: 'Stratora Consulting Delivery Standard: Clarity. Structure. Delivery. Everything is defined, visible, and controlled.',
};

export default function DeliveryStandardsPage() {
  return (
    <main className="pt-20">
      {/* HERO - Sophisticated & Clean */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A5F5F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container-custom max-w-4xl py-16 md:py-20 lg:py-24 relative text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-primary-teal"></div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-teal">Delivery Standards</span>
              <div className="w-8 h-0.5 bg-primary-teal"></div>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-neutral-900 leading-[1.1] mb-6 tracking-tight">
              Stratora Consulting Delivery Standard
            </h1>

            <p className="text-2xl text-primary-teal font-display font-semibold">
              Clarity. Structure. Delivery.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION - McKinsey Style */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                Introduction
              </p>
            </div>
            <p className="text-[20px] text-[#0F1113] leading-[1.8] mb-6 font-semibold">
              We work with organisations where delivery is complex, unclear, or at risk.
            </p>
            <p className="text-[17px] text-[#6B7280] leading-[1.8]">
              Our role is to bring clarity, structure, and control.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW WE WORK - McKinsey Style */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                How we work
              </p>
            </div>
            <p className="font-display italic text-[28px] text-[#0F1113] leading-[1.4] font-semibold">
              Everything is defined. Everything is visible. Everything is controlled.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT YOU CAN EXPECT - McKinsey Style */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                What you can expect
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-5 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                <span className="text-[17px] text-[#0F1113]">Clear communication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                <span className="text-[17px] text-[#0F1113]">Early visibility of risk</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                <span className="text-[17px] text-[#0F1113]">Structured delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                <span className="text-[17px] text-[#0F1113]">Confident decision-making</span>
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* OUR STANDARDS - McKinsey Style */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                Our standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center border border-[#E5E7EB] p-8 hover:shadow-card-hover transition-shadow duration-200">
                <h3 className="font-display text-[28px] text-[#0F1113] mb-4 font-semibold">Clarity</h3>
                <p className="text-[15px] text-[#6B7280]">
                  Everything must be understood.
                </p>
              </div>
              <div className="text-center border border-[#E5E7EB] p-8 hover:shadow-card-hover transition-shadow duration-200">
                <h3 className="font-display text-[28px] text-[#0F1113] mb-4 font-semibold">Structure</h3>
                <p className="text-[15px] text-[#6B7280]">
                  Everything must be organised.
                </p>
              </div>
              <div className="text-center border border-[#E5E7EB] p-8 hover:shadow-card-hover transition-shadow duration-200">
                <h3 className="font-display text-[28px] text-[#0F1113] mb-4 font-semibold">Control</h3>
                <p className="text-[15px] text-[#6B7280]">
                  Everything must be managed.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* RISK MANAGEMENT - McKinsey Style */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                Risk management
              </p>
            </div>
            <p className="text-[17px] text-[#0F1113] leading-[1.8] mb-4">
              We identify risks early, assign ownership, and define actions.
            </p>
            <p className="font-display italic text-[20px] text-[#2F5D62] font-semibold">
              There are no hidden risks.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* GO-LIVE APPROACH - McKinsey Style */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                Go-live approach
              </p>
            </div>
            <p className="text-[17px] text-[#0F1113] leading-[1.8] mb-4 font-semibold">
              We do not aim for perfection. We aim for control.
            </p>
            <p className="text-[17px] text-[#6B7280] leading-[1.8]">
              Go-live decisions are based on clarity and alignment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CLOSURE APPROACH - McKinsey Style */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                Closure approach
              </p>
            </div>
            <p className="text-[17px] text-[#0F1113] leading-[1.8]">
              We ensure delivery is clearly understood, outstanding items are visible, and lessons are captured.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* DELIVERY WHEEL */}
      <DeliveryWheel />

      {/* FINAL STATEMENT - McKinsey Style */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-3xl text-center">
          <AnimatedSection>
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-8">
              Our commitment
            </p>
            <blockquote className="font-display text-[32px] text-[#0F1113] leading-[1.4] mb-12 font-semibold">
              We do not aim to impress. We aim to bring clarity, create structure, and deliver with control.
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA - Clean Professional */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 md:py-20 lg:py-24 overflow-hidden">
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
                Ready to work to this standard?
              </h2>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Let's discuss how we can bring these standards to your programme
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button href="/contact" variant="primary" className="bg-white text-neutral-900 hover:bg-neutral-100">
                  Start a conversation
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
