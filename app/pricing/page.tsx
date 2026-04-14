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
      {/* HERO - McKinsey Style */}
      <section className="relative min-h-[50vh] bg-white flex items-center justify-center py-4xl">
        <div className="container-custom max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-8">
              Pricing
            </p>

            <h1 className="font-display text-[clamp(40px,6vw,64px)] text-[#0F1113] leading-[1.2] mb-6 font-semibold tracking-[-0.02em]">
              Simple, clear support based on what you need.
            </h1>

            <p className="text-[18px] text-[#6B7280] leading-[1.7] max-w-[700px] mx-auto">
              We offer three levels of support depending on your situation.
              Each is designed to bring clarity, structure, and control to your work.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING TIERS - McKinsey Style */}
      <section className="bg-[#F8F9FA] py-4xl">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CLARITY */}
            <AnimatedSection delay={0}>
              <div className="bg-white border border-[#E5E7EB] p-10 h-full flex flex-col hover:shadow-card-hover transition-shadow duration-200">
                <div className="mb-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                    Clarity
                  </p>
                </div>
                <h3 className="font-display text-[28px] text-[#0F1113] mb-4 font-semibold">
                  For when you need a clear understanding of your situation.
                </h3>
                
                <div className="mb-8">
                  <p className="text-[15px] text-[#6B7280] mb-4 font-medium">What this includes:</p>
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
                  <p className="text-[14px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Outcome:</p>
                  <p className="font-display italic text-[18px] text-[#2F5D62] font-semibold">
                    You leave with clarity and direction.
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-[#E5E7EB]">
                  <p className="text-[14px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Price:</p>
                  <p className="font-display text-[32px] text-[#0F1113] font-semibold">£200 – £300</p>
                  <p className="text-[15px] text-[#6B7280] mt-1">(typical engagement)</p>
                </div>
              </div>
            </AnimatedSection>

            {/* CONTROL */}
            <AnimatedSection delay={120}>
              <div className="bg-white border border-[#E5E7EB] p-10 h-full flex flex-col hover:shadow-card-hover transition-shadow duration-200">
                <div className="mb-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                    Control
                  </p>
                </div>
                <h3 className="font-display text-[28px] text-[#0F1113] mb-4 font-semibold">
                  For when you need structured support during delivery.
                </h3>
                
                <div className="mb-8">
                  <p className="text-[15px] text-[#6B7280] mb-4 font-medium">What this includes:</p>
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
                  <p className="text-[14px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Outcome:</p>
                  <p className="font-display italic text-[18px] text-[#2F5D62] font-semibold">
                    Delivery becomes structured and controlled.
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-[#E5E7EB]">
                  <p className="text-[14px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Price:</p>
                  <p className="font-display text-[32px] text-[#0F1113] font-semibold">£200 – £300 per week</p>
                  <p className="text-[15px] text-[#6B7280] mt-2">or</p>
                  <p className="font-display text-[28px] text-[#0F1113] mt-1 font-semibold">£400 – £800</p>
                  <p className="text-[15px] text-[#6B7280] mt-1">for a defined piece of work</p>
                </div>
              </div>
            </AnimatedSection>

            {/* DELIVERY */}
            <AnimatedSection delay={240}>
              <div className="bg-white border border-[#E5E7EB] p-10 h-full flex flex-col hover:shadow-card-hover transition-shadow duration-200">
                <div className="mb-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                    Delivery
                  </p>
                </div>
                <h3 className="font-display text-[28px] text-[#0F1113] mb-4 font-semibold">
                  For when you need full support and ownership.
                </h3>
                
                <div className="mb-8">
                  <p className="text-[15px] text-[#6B7280] mb-4 font-medium">What this includes:</p>
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
                  <p className="text-[14px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Outcome:</p>
                  <p className="font-display italic text-[18px] text-[#2F5D62] font-semibold">
                    Delivery is clear, controlled, and complete.
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-[#E5E7EB]">
                  <p className="text-[14px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Price:</p>
                  <p className="font-display text-[32px] text-[#0F1113] font-semibold">From £1,000</p>
                  <p className="text-[15px] text-[#6B7280] mt-1">per project</p>
                  <p className="text-[14px] text-[#6B7280] mt-2 italic">(final cost depends on scope and complexity)</p>
                </div>
              </div>
            </AnimatedSection>

            {/* WEBSITE DELIVERY */}
            <AnimatedSection delay={360}>
              <div className="bg-white border border-[#E5E7EB] p-10 h-full flex flex-col hover:shadow-card-hover transition-shadow duration-200">
                <div className="mb-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                    Website Delivery
                  </p>
                </div>
                <h3 className="font-display text-[28px] text-[#0F1113] mb-4 font-semibold">
                  For when you need a high-quality website without complexity.
                </h3>
                
                <div className="mb-8">
                  <p className="text-[15px] text-[#6B7280] mb-4 font-medium">What this includes:</p>
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
                  <p className="text-[14px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Outcome:</p>
                  <p className="font-display italic text-[18px] text-[#2F5D62] font-semibold">
                    A premium website delivered with clarity and control.
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-[#E5E7EB]">
                  <p className="text-[14px] text-[#6B7280] uppercase tracking-wider mb-2 font-semibold">Price:</p>
                  <p className="font-display text-[32px] text-[#0F1113] font-semibold">£800 – £2,500</p>
                  <p className="text-[15px] text-[#6B7280] mt-1">depending on scope</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FINAL CTA - McKinsey Style */}
      <section className="bg-white py-4xl">
        <div className="container-custom max-w-3xl text-center">
          <AnimatedSection>
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-6">
              Get in touch
            </p>
            <p className="font-display text-[28px] text-[#0F1113] leading-[1.4] mb-12 font-semibold">
              If you are unsure which level you need, we will guide you.
            </p>
            <Button href="/contact" variant="primary">
              Start a conversation
            </Button>
            <p className="text-[14px] text-[#6B7280] mt-6">
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
