import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import DeliveryWheel from '@/components/sections/DeliveryWheel';

export const metadata = {
  title: 'About',
  description: 'Stratora Consulting is a delivery-focused partnership led by Olusegun Olamide and Hiram Kanwal, combining programme expertise with digital capability.',
};

export const revalidate = 3600;

const workWhereItems = [
  'Plans break down',
  'Dependencies collide',
  'Decisions become unclear',
  'Accountability disappears',
];

const weIntroduceItems = [
  'Clear structure and defined ownership',
  'Controlled coordination',
  'Visible progress',
  'Managed resolution',
];

const principles = [
  {
    title: 'Clarity',
    description: 'Everything must be understood. Ownership, structure, expectations — nothing is left undefined. If it is not clear, it cannot be controlled.',
  },
  {
    title: 'Structure',
    description: 'Everything must be organised. Governance and coordination are not optional — they are the mechanism through which control is achieved.',
  },
  {
    title: 'Control',
    description: 'Everything must be managed. Visibility, accountability, and action from start to delivery. No assumption without verification.',
  },
];

const leaders = [
  {
    initial: 'O.O',
    name: 'Olusegun Olamide',
    role: 'DELIVERY & PROGRAMME LEAD',
    description: 'Specialises in ERP programme delivery, governance, RAID management, and controlled closure. Brings rigour and structure to complex multi-supplier environments.',
  },
  {
    initial: 'H.K',
    name: 'Hiram Kanwal',
    role: 'DESIGN & DIGITAL LEAD',
    description: 'Specialises in digital execution, design coordination, web delivery, and user experience. Manages the full digital delivery process with precision.',
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* SECTION 1 — PAGE HERO - McKinsey Style */}
      <section className="relative bg-white py-4xl">
        <div className="container-custom max-w-content">
          <div className="animate-fade-in-up">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-8">
              About Stratora Consulting
            </p>

            <h1 className="font-display text-[clamp(48px,6vw,72px)] text-[#0F1113] leading-[1.1] mb-8 font-bold tracking-[-0.02em]">
              We exist to bring control to complex delivery
            </h1>

            <p className="text-[20px] leading-[1.7] text-[#374151] max-w-[700px]">
              We support organisations in managing and delivering programmes where structure is unclear, ownership is fragmented, and outcomes are at risk.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LEADERSHIP - McKinsey Card Style */}
      <section className="bg-[#F8F9FA] py-4xl">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-16">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-4">
                Leadership
              </p>
              <h2 className="font-display text-[36px] text-[#0F1113] font-semibold leading-[1.2]">
                The partnership
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.map((leader, index) => (
                <AnimatedSection key={leader.name} delay={index * 150}>
                  <div className="bg-white border border-[#E5E7EB] p-10 hover:shadow-card-hover transition-shadow duration-200">
                    <div className="w-16 h-16 rounded-full border-2 border-[#2F5D62] flex items-center justify-center mb-6">
                      <span className="font-display text-[24px] text-[#2F5D62] font-semibold">
                        {leader.initial}
                      </span>
                    </div>

                    <h3 className="font-display text-[24px] text-[#0F1113] font-semibold mb-2">
                      {leader.name}
                    </h3>

                    <p className="text-[12px] text-[#2F5D62] uppercase tracking-[0.1em] font-semibold mb-6">
                      {leader.role}
                    </p>

                    <div className="h-[1px] bg-[#E5E7EB] my-6" />

                    <p className="text-[15px] text-[#6B7280] leading-[1.7]">
                      {leader.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 — WHO WE ARE - McKinsey Two Column */}
      <section className="bg-white py-4xl">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <AnimatedSection>
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-4">
                  Who we are
                </p>
                <h2 className="font-display text-[36px] text-[#0F1113] font-semibold leading-[1.2]">
                  A delivery partnership built on two disciplines
                </h2>
              </AnimatedSection>
            </div>

            <div>
              <AnimatedSection delay={150}>
                <div className="space-y-6">
                  <p className="text-[17px] text-[#374151] leading-[1.8]">
                    We combine programme delivery expertise with design and digital capability. This is not a common combination — and it is why we are able to support outcomes that other consultancies cannot.
                  </p>
                  <p className="text-[17px] text-[#374151] leading-[1.8]">
                    We operate across both transformation programmes and digital execution without losing structure, control, or focus.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHAT MAKES US DIFFERENT - McKinsey Feature */}
      <section className="bg-[#F8F9FA] py-4xl">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-16">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-4">
                Differentiation
              </p>
              <h2 className="font-display text-[36px] text-[#0F1113] font-semibold leading-[1.2] mb-6">
                We focus on how delivery actually happens
              </h2>
              <p className="text-[17px] leading-[1.7] text-[#374151] max-w-3xl">
                Not how it is planned. Not how it is presented. But how it is executed under real conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimatedSection delay={100}>
                <div className="border-l-4 border-[#2F5D62] pl-8">
                  <h3 className="font-display text-[20px] text-[#0F1113] font-semibold mb-6">
                    We work where:
                  </h3>
                  <ul className="space-y-4">
                    {workWhereItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="w-6 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                        <span className="text-[16px] text-[#374151] leading-[1.7]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="border-l-4 border-[#2F5D62] pl-8">
                  <h3 className="font-display text-[20px] text-[#0F1113] font-semibold mb-6">
                    We introduce:
                  </h3>
                  <ul className="space-y-4">
                    {weIntroduceItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="w-6 h-[2px] bg-[#2F5D62] mt-3 flex-shrink-0" />
                        <span className="text-[16px] text-[#374151] leading-[1.7]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 — HOW WE WORK - McKinsey Principles */}
      <section className="bg-white py-4xl">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-16">
              <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-4">
                Approach
              </p>
              <h2 className="font-display text-[36px] text-[#0F1113] font-semibold leading-[1.2]">
                Three non-negotiable principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <AnimatedSection key={principle.title} delay={index * 120}>
                  <div className="border-t-4 border-[#2F5D62] pt-6">
                    <h3 className="font-display text-[24px] text-[#0F1113] font-semibold mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-[15px] text-[#6B7280] leading-[1.7]">
                      {principle.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 — DELIVERY WHEEL */}
      <DeliveryWheel />

      {/* SECTION 7 — CLOSING STATEMENT - McKinsey Quote */}
      <section className="bg-[#F8F9FA] py-4xl">
        <div className="container-custom max-w-wide text-center">
          <AnimatedSection>
            <div className="border-l-4 border-[#2F5D62] pl-12 text-left max-w-3xl mx-auto">
              <blockquote className="font-display italic text-[#0F1113] leading-[1.3] mb-8 text-[clamp(28px,4vw,42px)]">
                We do not aim to make programmes look good. We aim to make them work.
              </blockquote>
              <p className="text-[13px] text-[#6B7280] tracking-[0.1em] uppercase font-semibold">
                Delivery Partnership · stratoraconsulting.com
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
