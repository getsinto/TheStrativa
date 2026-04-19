import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import DeliveryWheel from '@/components/sections/DeliveryWheel';
import Button from '@/components/ui/Button';

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
      {/* SECTION 1 — PAGE HERO - Sophisticated & Clean */}
      <section className="relative bg-white overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A5F5F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="container-custom max-w-4xl py-16 md:py-20 lg:py-24 relative text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-primary-teal"></div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-teal">About Stratora Consulting</span>
              <div className="w-8 h-0.5 bg-primary-teal"></div>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-neutral-900 leading-[1.1] mb-8 tracking-tight">
              We exist to bring control to complex delivery
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              We support organisations in managing and delivering programmes where structure is unclear, ownership is fragmented, and outcomes are at risk.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — LEADERSHIP - Clean Professional Cards */}
      <section className="bg-neutral-50 py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-7xl">
          <AnimatedSection>
            {/* Section Header */}
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-primary-teal"></div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-teal">
                  Leadership
                </p>
                <div className="w-8 h-0.5 bg-primary-teal"></div>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mb-4">
                The partnership
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Two disciplines. One delivery standard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.map((leader, index) => (
                <AnimatedSection key={leader.name} delay={index * 150}>
                  <div className="h-full p-8 rounded-2xl bg-white border border-neutral-200 hover:border-primary-teal hover:shadow-lg transition-all duration-300 group">
                    {/* Icon Circle */}
                    <div className="w-16 h-16 rounded-xl bg-primary-teal/10 flex items-center justify-center mb-6 group-hover:bg-primary-teal/20 transition-colors">
                      <span className="font-display text-2xl text-primary-teal font-semibold">
                        {leader.initial}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-neutral-900 mb-2 group-hover:text-primary-teal transition-colors">
                      {leader.name}
                    </h3>

                    <p className="text-xs text-primary-teal uppercase tracking-wider font-semibold mb-6">
                      {leader.role}
                    </p>

                    <div className="h-px bg-neutral-200 my-6" />

                    <p className="text-base text-neutral-600 leading-relaxed">
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
      <section className="bg-white py-16 md:py-20 lg:py-24">
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
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-20 lg:py-24">
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

      {/* SECTION 5 — HOW WE WORK - Clean Principles */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-7xl">
          <AnimatedSection>
            {/* Section Header */}
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-primary-teal"></div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary-teal">
                  Approach
                </p>
                <div className="w-8 h-0.5 bg-primary-teal"></div>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mb-4">
                Three non-negotiable principles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((principle, index) => (
                <AnimatedSection key={principle.title} delay={index * 120}>
                  <div className="h-full p-8 rounded-2xl bg-white border border-neutral-200 hover:border-primary-teal hover:shadow-lg transition-all duration-300 group">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary-teal/10 flex items-center justify-center mb-6 group-hover:bg-primary-teal/20 transition-colors">
                      <svg className="w-6 h-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />}
                        {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />}
                        {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                      </svg>
                    </div>
                    
                    <h3 className="font-display text-2xl text-neutral-900 mb-4 group-hover:text-primary-teal transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
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
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-20 lg:py-24">
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
                Ready to bring control to your delivery?
              </h2>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Let's discuss how we can help your programme succeed
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button href="/contact" variant="primary" className="bg-white text-neutral-900 hover:bg-neutral-100">
                  Start a conversation
                </Button>
                <Button href="/case-studies" variant="secondary" className="border-white/30 text-white hover:bg-white/10">
                  View our work
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
