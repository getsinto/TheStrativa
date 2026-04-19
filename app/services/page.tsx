import { createClient } from '@sanity/client';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import DeliveryWheel from '@/components/sections/DeliveryWheel';

export const metadata = {
  title: 'Services',
  description: 'Stratora Consulting offers Programme Delivery & Coordination, Go-Live Readiness & Closure, and Website Delivery & Coordination.',
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
    icon: 'clipboard',
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
    icon: 'rocket',
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
    icon: 'globe',
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

const getIcon = (iconName: string) => {
  const icons: any = {
    clipboard: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
    rocket: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
    globe: <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
  };
  return icons[iconName] || icons.clipboard;
};

export default async function ServicesPage() {
  const services = await getServices();

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
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-teal">Services</span>
              <div className="w-8 h-0.5 bg-primary-teal"></div>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-neutral-900 leading-tight mb-6 tracking-tight">
              We support delivery where it matters most
            </h1>

            <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Three areas of focus. One consistent standard.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID - Clean Professional Cards */}
      <section className="bg-neutral-50 py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => (
              <AnimatedSection key={service._id} delay={index * 100}>
                <div className="h-full p-8 rounded-2xl bg-white border border-neutral-200 hover:border-primary-teal hover:shadow-lg transition-all duration-300 group">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary-teal/10 flex items-center justify-center mb-6 group-hover:bg-primary-teal/20 transition-colors">
                    <svg className="w-6 h-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {getIcon(service.icon || 'clipboard')}
                    </svg>
                  </div>
                  
                  <h3 className="font-display text-2xl text-neutral-900 mb-4 group-hover:text-primary-teal transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6">
                    {service.bullets.map((bullet: string, bulletIndex: number) => (
                      <li key={bulletIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-teal mt-2 flex-shrink-0" />
                        <span className="text-sm text-neutral-600">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Outcome */}
                  <div className="pt-4 border-t border-neutral-200">
                    <p className="font-display italic text-primary-teal">
                      {service.outcome}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY MODEL */}
      <DeliveryWheel />

      {/* BOTTOM CTA - Clean Professional */}
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
                Ready to discuss your programme?
              </h2>
              
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Let's explore how we can bring clarity and control to your delivery challenges
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
