import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata = {
  title: 'About',
  description: 'The Strativa is a delivery-focused partnership led by Olusegun Olamide and Hiram Kanwal, combining programme expertise with digital capability.',
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
      {/* SECTION 1 — PAGE HERO */}
      <section className="relative min-h-[60vh] bg-[#0F1113] flex items-center justify-center overflow-hidden">
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 max-w-4xl">
          <div
            className="mb-8 animate-fadeUp"
            style={{ animationDelay: '0ms', animationFillMode: 'both' }}
          >
            <SectionLabel light>ABOUT STRATIVA</SectionLabel>
          </div>

          <h1
            className="font-display text-white leading-[1.2] mb-8 animate-fadeUp"
            style={{
              fontSize: 'clamp(44px, 7vw, 72px)',
              letterSpacing: '-0.02em',
              animationDelay: '100ms',
              animationFillMode: 'both',
            }}
          >
            We exist to bring control to complex delivery.
          </h1>

          <p
            className="text-[18px] leading-[1.7] max-w-2xl animate-fadeUp"
            style={{
              color: 'rgba(247, 246, 243, 0.65)',
              animationDelay: '250ms',
              animationFillMode: 'both',
            }}
          >
            We support organisations in managing and delivering programmes where structure is unclear, ownership is fragmented, and outcomes are at risk.
          </p>
        </div>
      </section>

      {/* SECTION 2 — WHO WE ARE */}
      <section className="bg-[#F7F6F3] py-[120px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16">
            {/* Left Column - Sticky */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <AnimatedSection>
                <div className="mb-6">
                  <SectionLabel>WHO WE ARE</SectionLabel>
                </div>
                <h2 className="font-display text-[38px] text-[#0F1113] leading-[1.2]">
                  A delivery partnership built on two disciplines.
                </h2>
              </AnimatedSection>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-6">
              <AnimatedSection delay={150}>
                <div className="space-y-8">
                  <p className="text-[17px] text-[#0F1113] leading-[1.8] opacity-85">
                    We combine programme delivery expertise with design and digital capability. This is not a common combination — and it is why we are able to support outcomes that other consultancies cannot.
                  </p>
                  <p className="text-[17px] text-[#0F1113] leading-[1.8] opacity-85">
                    We operate across both transformation programmes and digital execution without losing structure, control, or focus.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT MAKES US DIFFERENT */}
      <section className="bg-[#0F1113] py-[120px]">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-6">
              <SectionLabel light>DIFFERENTIATION</SectionLabel>
            </div>
            <h2 className="font-display text-[38px] text-white leading-[1.2] mb-6">
              We focus on how delivery actually happens.
            </h2>
            <p className="text-[17px] leading-[1.7] max-w-3xl mb-16" style={{ color: 'rgba(247, 246, 243, 0.65)' }}>
              Not how it is planned. Not how it is presented. But how it is executed under real conditions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column */}
              <AnimatedSection delay={100}>
                <div className="mb-6">
                  <SectionLabel light>We work where:</SectionLabel>
                </div>
                <ul className="space-y-4">
                  {workWhereItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F5D62] flex-shrink-0" />
                      <span className="text-[16px] text-white leading-[2]">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* Right Column */}
              <AnimatedSection delay={200}>
                <div className="mb-6">
                  <SectionLabel light>We introduce:</SectionLabel>
                </div>
                <ul className="space-y-4">
                  {weIntroduceItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2F5D62] flex-shrink-0" />
                      <span className="text-[16px] text-white leading-[2]">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 — HOW WE WORK */}
      <section className="bg-[#F7F6F3] py-[120px]">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-6">
              <SectionLabel>APPROACH</SectionLabel>
            </div>
            <h2 className="font-display text-[38px] text-[#0F1113] leading-[1.2] mb-16">
              Three non-negotiable principles.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {principles.map((principle, index) => (
                <AnimatedSection key={principle.title} delay={index * 120}>
                  <div className="border-t-[3px] border-[#2F5D62] pt-8">
                    <h3 className="font-display text-[26px] text-[#0F1113] mb-4">
                      {principle.title}
                    </h3>
                    <p className="text-[15px] text-[#525250] leading-[1.75]">
                      {principle.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 — LEADERSHIP */}
      <section className="bg-[#F7F6F3] pt-20 pb-[120px]">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-6">
              <SectionLabel>LEADERSHIP</SectionLabel>
            </div>
            <h2 className="font-display text-[38px] text-[#0F1113] leading-[1.2] mb-16">
              The partnership.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.map((leader, index) => (
                <AnimatedSection key={leader.name} delay={index * 150}>
                  <div className="border border-[#E8E6E1] p-12">
                    {/* Monogram */}
                    <div className="w-20 h-20 rounded-full border border-[#E8E6E1] flex items-center justify-center mb-6">
                      <span className="font-display text-[28px] text-[#2F5D62]">
                        {leader.initial}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-display text-[24px] text-[#0F1113]">
                      {leader.name}
                    </h3>

                    {/* Role */}
                    <p className="text-[13px] text-[#2F5D62] uppercase tracking-widest mt-1">
                      {leader.role}
                    </p>

                    {/* Divider */}
                    <div className="h-[1px] bg-[#E8E6E1] my-6" />

                    {/* Description */}
                    <p className="text-[15px] text-[#525250] leading-[1.7]">
                      {leader.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 — CLOSING STATEMENT */}
      <section className="bg-[#0F1113] py-[100px]">
        <div className="container-custom max-w-4xl text-center">
          <AnimatedSection>
            <blockquote
              className="font-display italic text-white leading-[1.3] mb-8"
              style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}
            >
              "We do not aim to make programmes look good. We aim to make them work."
            </blockquote>
            <p className="text-[13px] text-[#A89F91] tracking-[0.1em] uppercase">
              DELIVERY PARTNERSHIP · THESTRATIVA.COM
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
