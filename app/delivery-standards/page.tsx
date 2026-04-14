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
      {/* HERO - McKinsey Style */}
      <section className="relative min-h-[50vh] bg-white flex items-center justify-center py-4xl">
        <div className="container-custom max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-8">
              Delivery Standards
            </p>

            <h1 className="font-display text-[clamp(40px,6vw,64px)] text-[#0F1113] leading-[1.2] mb-6 font-semibold tracking-[-0.02em]">
              Stratora Consulting Delivery Standard
            </h1>

            <p className="text-[24px] text-[#2F5D62] font-display font-semibold">
              Clarity. Structure. Delivery.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION - McKinsey Style */}
      <section className="bg-[#F8F9FA] py-4xl">
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
      <section className="bg-white py-4xl">
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
      <section className="bg-[#F8F9FA] py-4xl">
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
      <section className="bg-white py-4xl">
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
      <section className="bg-[#F8F9FA] py-4xl">
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
      <section className="bg-white py-4xl">
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
      <section className="bg-[#F8F9FA] py-4xl">
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
      <section className="bg-white py-4xl">
        <div className="container-custom max-w-3xl text-center">
          <AnimatedSection>
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-8">
              Our commitment
            </p>
            <blockquote className="font-display text-[32px] text-[#0F1113] leading-[1.4] mb-12 font-semibold">
              We do not aim to impress. We aim to bring clarity, create structure, and deliver with control.
            </blockquote>
            <Button href="/contact" variant="primary">
              Start a conversation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
