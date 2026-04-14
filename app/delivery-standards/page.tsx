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
      {/* HERO */}
      <section className="relative min-h-[50vh] bg-[#0F1113] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 text-center max-w-4xl">
          <div className="mb-8 flex justify-center animate-fadeUp" style={{ animationDelay: '0ms', animationFillMode: 'both' }}>
            <SectionLabel light>DELIVERY STANDARDS</SectionLabel>
          </div>

          <h1
            className="font-display text-white leading-[1.2] mb-6 animate-fadeUp"
            style={{
              fontSize: 'clamp(40px, 6vw, 64px)',
              letterSpacing: '-0.02em',
              animationDelay: '100ms',
              animationFillMode: 'both',
            }}
          >
            Stratora Consulting Delivery Standard
          </h1>

          <p
            className="text-[24px] text-white font-display animate-fadeUp"
            style={{
              animationDelay: '250ms',
              animationFillMode: 'both',
            }}
          >
            Clarity. Structure. Delivery.
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#F7F6F3] py-[120px]">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8">
              <SectionLabel>INTRODUCTION</SectionLabel>
            </div>
            <p className="text-[20px] text-[#0F1113] leading-[1.8] mb-6">
              We work with organisations where delivery is complex, unclear, or at risk.
            </p>
            <p className="text-[17px] text-[#525250] leading-[1.8]">
              Our role is to bring clarity, structure, and control.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-[#EEECEA] py-[120px]">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8">
              <SectionLabel>HOW WE WORK</SectionLabel>
            </div>
            <p className="font-display italic text-[28px] text-[#0F1113] leading-[1.4]">
              Everything is defined. Everything is visible. Everything is controlled.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WHAT YOU CAN EXPECT */}
      <section className="bg-[#F7F6F3] py-[120px]">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8">
              <SectionLabel>WHAT YOU CAN EXPECT</SectionLabel>
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

      {/* OUR STANDARDS */}
      <section className="bg-[#0F1113] py-[120px]">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="mb-12 flex justify-center">
              <SectionLabel light>OUR STANDARDS</SectionLabel>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-display text-[28px] text-white mb-4">Clarity</h3>
                <p className="text-[15px] text-white opacity-70">
                  Everything must be understood.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display text-[28px] text-white mb-4">Structure</h3>
                <p className="text-[15px] text-white opacity-70">
                  Everything must be organised.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display text-[28px] text-white mb-4">Control</h3>
                <p className="text-[15px] text-white opacity-70">
                  Everything must be managed.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* RISK MANAGEMENT */}
      <section className="bg-[#F7F6F3] py-[120px]">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8">
              <SectionLabel>RISK MANAGEMENT</SectionLabel>
            </div>
            <p className="text-[17px] text-[#0F1113] leading-[1.8] mb-4">
              We identify risks early, assign ownership, and define actions.
            </p>
            <p className="font-display italic text-[20px] text-[#2F5D62]">
              There are no hidden risks.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* GO-LIVE APPROACH */}
      <section className="bg-[#EEECEA] py-[120px]">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8">
              <SectionLabel>GO-LIVE APPROACH</SectionLabel>
            </div>
            <p className="text-[17px] text-[#0F1113] leading-[1.8] mb-4">
              We do not aim for perfection. We aim for control.
            </p>
            <p className="text-[17px] text-[#525250] leading-[1.8]">
              Go-live decisions are based on clarity and alignment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CLOSURE APPROACH */}
      <section className="bg-[#F7F6F3] py-[120px]">
        <div className="container-custom max-w-3xl">
          <AnimatedSection>
            <div className="mb-8">
              <SectionLabel>CLOSURE APPROACH</SectionLabel>
            </div>
            <p className="text-[17px] text-[#0F1113] leading-[1.8]">
              We ensure delivery is clearly understood, outstanding items are visible, and lessons are captured.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* DELIVERY WHEEL */}
      <DeliveryWheel />

      {/* FINAL STATEMENT */}
      <section className="bg-[#0F1113] py-[120px]">
        <div className="container-custom max-w-3xl text-center">
          <AnimatedSection>
            <blockquote className="font-display italic text-[32px] text-white leading-[1.4] mb-12">
              We do not aim to impress. We aim to bring clarity, create structure, and deliver with control.
            </blockquote>
            <Button href="/contact" variant="primary">
              Start a Conversation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
