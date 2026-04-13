import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Pricing',
  description: 'Simple, clear support based on what you need. Clarity, Control, Delivery, and Website Delivery options.',
};

export default function PricingPage() {
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
            <SectionLabel light>PRICING</SectionLabel>
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
            Simple, clear support based on what you need.
          </h1>

          <p
            className="text-[18px] text-white opacity-70 leading-[1.7] animate-fadeUp"
            style={{
              animationDelay: '250ms',
              animationFillMode: 'both',
            }}
          >
            We offer three levels of support depending on your situation.
            <br />
            Each is designed to bring clarity, structure, and control to your work.
          </p>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="bg-[#F7F6F3] py-[120px]">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CLARITY */}
            <AnimatedSection delay={0}>
              <div className="bg-white border border-[#E8E6E1] p-10 h-full flex flex-col">
                <div className="mb-6">
                  <SectionLabel>CLARITY</SectionLabel>
                </div>
                <h3 className="font-display text-[28px] text-[#0F1113] mb-4">
                  For when you need a clear understanding of your situation.
                </h3>
                
                <div className="mb-8">
                  <p className="text-[15px] text-[#525250] mb-4 font-medium">What this includes:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Review of your current position</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Identification of risks and issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Clear, structured next steps</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="text-[14px] text-[#A89F91] uppercase tracking-wider mb-2">Outcome:</p>
                  <p className="font-display italic text-[18px] text-[#2F5D62]">
                    You leave with clarity and direction.
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-[#E8E6E1]">
                  <p className="text-[14px] text-[#A89F91] uppercase tracking-wider mb-2">Price:</p>
                  <p className="font-display text-[32px] text-[#0F1113]">£200 – £300</p>
                  <p className="text-[15px] text-[#525250] mt-1">(typical engagement)</p>
                </div>
              </div>
            </AnimatedSection>

            {/* CONTROL */}
            <AnimatedSection delay={120}>
              <div className="bg-white border border-[#E8E6E1] p-10 h-full flex flex-col">
                <div className="mb-6">
                  <SectionLabel>CONTROL</SectionLabel>
                </div>
                <h3 className="font-display text-[28px] text-[#0F1113] mb-4">
                  For when you need structured support during delivery.
                </h3>
                
                <div className="mb-8">
                  <p className="text-[15px] text-[#525250] mb-4 font-medium">What this includes:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Progress tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Risk and issue management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Stakeholder coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Clear reporting</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="text-[14px] text-[#A89F91] uppercase tracking-wider mb-2">Outcome:</p>
                  <p className="font-display italic text-[18px] text-[#2F5D62]">
                    Delivery becomes structured and controlled.
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-[#E8E6E1]">
                  <p className="text-[14px] text-[#A89F91] uppercase tracking-wider mb-2">Price:</p>
                  <p className="font-display text-[32px] text-[#0F1113]">£200 – £300 per week</p>
                  <p className="text-[15px] text-[#525250] mt-2">or</p>
                  <p className="font-display text-[28px] text-[#0F1113] mt-1">£400 – £800</p>
                  <p className="text-[15px] text-[#525250] mt-1">for a defined piece of work</p>
                </div>
              </div>
            </AnimatedSection>

            {/* DELIVERY */}
            <AnimatedSection delay={240}>
              <div className="bg-white border border-[#E8E6E1] p-10 h-full flex flex-col">
                <div className="mb-6">
                  <SectionLabel>DELIVERY</SectionLabel>
                </div>
                <h3 className="font-display text-[28px] text-[#0F1113] mb-4">
                  For when you need full support and ownership.
                </h3>
                
                <div className="mb-8">
                  <p className="text-[15px] text-[#525250] mb-4 font-medium">What this includes:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Full coordination of delivery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Structure across all areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Decision support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Go-live or closure support</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="text-[14px] text-[#A89F91] uppercase tracking-wider mb-2">Outcome:</p>
                  <p className="font-display italic text-[18px] text-[#2F5D62]">
                    Delivery is clear, controlled, and complete.
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-[#E8E6E1]">
                  <p className="text-[14px] text-[#A89F91] uppercase tracking-wider mb-2">Price:</p>
                  <p className="font-display text-[32px] text-[#0F1113]">From £1,000</p>
                  <p className="text-[15px] text-[#525250] mt-1">per project</p>
                  <p className="text-[14px] text-[#A89F91] mt-2 italic">(final cost depends on scope and complexity)</p>
                </div>
              </div>
            </AnimatedSection>

            {/* WEBSITE DELIVERY */}
            <AnimatedSection delay={360}>
              <div className="bg-white border border-[#E8E6E1] p-10 h-full flex flex-col">
                <div className="mb-6">
                  <SectionLabel>WEBSITE DELIVERY</SectionLabel>
                </div>
                <h3 className="font-display text-[28px] text-[#0F1113] mb-4">
                  For when you need a high-quality website without complexity.
                </h3>
                
                <div className="mb-8">
                  <p className="text-[15px] text-[#525250] mb-4 font-medium">What this includes:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Clear structure and content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">Design and build coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-4 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#0F1113]">End-to-end delivery</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="text-[14px] text-[#A89F91] uppercase tracking-wider mb-2">Outcome:</p>
                  <p className="font-display italic text-[18px] text-[#2F5D62]">
                    A premium website delivered with clarity and control.
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-[#E8E6E1]">
                  <p className="text-[14px] text-[#A89F91] uppercase tracking-wider mb-2">Price:</p>
                  <p className="font-display text-[32px] text-[#0F1113]">£800 – £2,500</p>
                  <p className="text-[15px] text-[#525250] mt-1">depending on scope</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0F1113] py-[120px]">
        <div className="container-custom max-w-3xl text-center">
          <AnimatedSection>
            <p className="font-display italic text-[28px] text-white leading-[1.4] mb-12">
              If you are unsure which level you need, we will guide you.
            </p>
            <Button href="/contact" variant="primary">
              Start a Conversation
            </Button>
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
