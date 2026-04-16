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
      {/* HERO */}
      <section className="relative min-h-[50vh] bg-white flex items-center justify-center py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-primary-teal"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                Services
              </p>
              <div className="w-8 h-0.5 bg-primary-teal"></div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-neutral-900 leading-tight mb-6 font-bold tracking-tight">
              We support delivery where it matters most
            </h1>

            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Three areas of focus. One consistent standard.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID - Premium Card Style */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => (
              <AnimatedSection key={service._id} delay={index * 100}>
                <div className="card-feature h-full group cursor-pointer">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-teal/10 to-primary-teal/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {getIcon(service.icon || 'clipboard')}
                    </svg>
                  </div>
                  
                  <h3 className="font-display text-2xl text-neutral-900 font-semibold mb-4 group-hover:text-primary-teal transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-base text-neutral-600 leading-relaxed mb-6">
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
                    <p className="font-display italic text-base text-primary-teal font-semibold">
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

      {/* BOTTOM CTA */}
      <section className="relative bg-gradient-to-br from-primary-navy via-[#003366] to-primary-teal py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container-custom max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="w-8 h-0.5 bg-primary-gold"></div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary-gold">
                  Get in touch
                </p>
                <div className="w-8 h-0.5 bg-primary-gold"></div>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-6 leading-tight">
                Ready to discuss your programme?
              </h2>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
                Let's explore how we can bring clarity and control to your delivery challenges
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary" className="bg-white text-primary-navy hover:bg-neutral-50">
                  Start a conversation
                </Button>
                <Button href="/case-studies" variant="secondary" className="border-white text-white hover:bg-white hover:text-primary-navy">
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
