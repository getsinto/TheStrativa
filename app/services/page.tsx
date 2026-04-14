import { createClient } from '@sanity/client';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'Services',
  description: 'The Strativa offers Programme Delivery & Coordination, Go-Live Readiness & Closure, and Website Delivery & Coordination.',
};

export const revalidate = 3600;

const STATIC_SERVICES = [
  {
    _id: '1',
    title: 'Programme Delivery & Coordination',
    summary: 'We bring structure and control to complex programmes.',
    description: 'Where there is unclear ownership, inconsistent reporting, and fragmented delivery, we introduce clear structure, defined accountability, and coordinated execution.',
    bullets: [
      'Programme tracking and reporting',
      'RAID management',
      'Stakeholder coordination',
      'Delivery oversight',
    ],
    outcome: 'Programmes that move forward with control, not confusion.',
    order: 1,
  },
  {
    _id: '2',
    title: 'Go-Live Readiness & Closure',
    summary: 'We define what readiness actually means.',
    description: 'Not assumptions, not optimism, not incomplete views. We provide clear visibility, understood risks, and controlled decisions at every go-live point.',
    bullets: [
      'Go-live readiness assessment',
      'Hypercare planning',
      'Closure reporting',
      'Lessons learned facilitation',
    ],
    outcome: 'Go-live decisions that are credible, not forced.',
    order: 2,
  },
  {
    _id: '3',
    title: 'Website Delivery & Coordination',
    summary: 'Premium digital delivery without the complexity.',
    description: 'We combine structured delivery, design expertise, and coordination — connecting clients with trusted developers and designers globally, and managing the full process end-to-end.',
    bullets: [
      'Requirements definition and structure',
      'Design and UX guidance',
      'Developer coordination and management',
      'Quality assurance and alignment',
    ],
    outcome: 'A premium website delivered with clarity, not chaos.',
    order: 3,
  },
];

async function getServices() {
  try {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
    });
    
    const services = await client.fetch(`*[_type == "service"] | order(order asc)`);
    return services.length > 0 ? services : STATIC_SERVICES;
  } catch {
    return STATIC_SERVICES;
  }
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="pt-20">
      {/* HERO - McKinsey Style */}
      <section className="relative min-h-[50vh] bg-white flex items-center justify-center py-4xl">
        <div className="container-custom max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-8">
              Services
            </p>

            <h1 className="font-display text-[clamp(40px,6vw,64px)] text-[#0F1113] leading-[1.2] mb-6 font-semibold tracking-[-0.02em]">
              We support delivery where it matters most.
            </h1>

            <p className="text-[18px] text-[#6B7280] leading-[1.7]">
              Three areas of focus. One consistent standard.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE SECTIONS - McKinsey Style */}
      {services.map((service: any, index: number) => {
        const isEven = index % 2 === 0;
        const bgColor = isEven ? '#FFFFFF' : '#F8F9FA';
        const displayNumber = `0${service.order || index + 1}`;

        return (
          <section key={service._id} className="py-4xl" style={{ backgroundColor: bgColor }}>
            <div className="container-custom">
              <div className={`grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content Column */}
                <div className={`lg:col-span-6 relative ${!isEven ? 'lg:col-start-5' : ''}`}>
                  <AnimatedSection>
                    {/* Large decorative number behind content */}
                    <div
                      className="absolute -top-8 -left-4 font-display text-[#E8E6E1] leading-none pointer-events-none hidden lg:block"
                      style={{ fontSize: '120px', zIndex: 0 }}
                    >
                      {displayNumber}
                    </div>

                    <div className="relative z-10">
                      {/* Service Title as Label */}
                      <div className="mb-6">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62]">
                          {service.title}
                        </p>
                      </div>

                      {/* Summary */}
                      <h2 className="font-display text-[36px] text-[#0F1113] leading-[1.2] mb-6 font-semibold">
                        {service.summary}
                      </h2>

                      {/* Description */}
                      <p className="text-[17px] text-[#6B7280] leading-[1.8] mb-8">
                        {service.description}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-3 mb-10">
                        {service.bullets.map((bullet: string, bulletIndex: number) => (
                          <li key={bulletIndex} className="flex items-start gap-3">
                            <span className="w-5 h-[2px] bg-[#2F5D62] mt-2.5 flex-shrink-0" />
                            <span className="text-[15px] text-[#0F1113]">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Outcome Block */}
                      <div className="border-l-4 border-[#2F5D62] pl-5">
                        <p className="text-[12px] text-[#6B7280] uppercase tracking-widest mb-2 font-semibold">
                          Outcome
                        </p>
                        <p className="font-display italic text-[20px] text-[#0F1113] font-semibold">
                          {service.outcome}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Decorative Column */}
                <div className={`lg:col-span-4 hidden lg:flex items-center justify-center ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <AnimatedSection delay={150}>
                    <div className="relative">
                      {/* Large number */}
                      <div
                        className="font-display text-[#E8E6E1] leading-none text-center"
                        style={{ fontSize: '120px' }}
                      >
                        {displayNumber}
                      </div>
                      {/* Decorative square */}
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-[#E8E6E1] pointer-events-none"
                        style={{ zIndex: -1 }}
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* BOTTOM CTA - McKinsey Style */}
      <section className="bg-white py-4xl">
        <div className="container-custom max-w-3xl text-center">
          <AnimatedSection>
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-6">
              Get in touch
            </p>
            <h2 className="font-display text-[#0F1113] text-[40px] leading-[1.3] mb-12 font-semibold">
              Ready to discuss your programme?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button href="/contact" variant="primary">
                Start a conversation
              </Button>
              <Link
                href="/case-studies"
                className="text-[#2F5D62] hover:text-[#1E3D40] transition-colors duration-200 flex items-center gap-2 font-semibold"
              >
                Or view our case studies
                <span>→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
