import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Pricing',
  description: 'Simple, clear support based on what you need. Clarity, Control, Delivery, and Website Delivery options.',
};

const pricingTiers = [
  {
    id: 'clarity',
    name: 'Clarity',
    tagline: 'For when you need a clear understanding of your situation',
    price: '£200 – £300',
    priceNote: '(typical engagement)',
    icon: 'eye',
    includes: [
      'Review of your current position',
      'Identification of risks and issues',
      'Clear, structured next steps',
    ],
    outcome: 'You leave with clarity and direction',
  },
  {
    id: 'control',
    name: 'Control',
    tagline: 'For when you need structured support during delivery',
    price: '£200 – £300 per week',
    priceNote: 'or £400 – £800 for a defined piece of work',
    icon: 'shield',
    includes: [
      'Progress tracking',
      'Risk and issue management',
      'Stakeholder coordination',
      'Clear reporting',
    ],
    outcome: 'Delivery becomes structured and controlled',
  },
  {
    id: 'delivery',
    name: 'Delivery',
    tagline: 'For when you need full support and ownership',
    price: 'From £1,000',
    priceNote: 'per project (final cost depends on scope and complexity)',
    icon: 'check',
    includes: [
      'Full coordination of delivery',
      'Structure across all areas',
      'Decision support',
      'Go-live or closure support',
    ],
    outcome: 'Delivery is clear, controlled, and complete',
  },
  {
    id: 'website',
    name: 'Website Delivery',
    tagline: 'For when you need a high-quality website without complexity',
    price: '£800 – £2,500',
    priceNote: 'depending on scope',
    icon: 'globe',
    includes: [
      'Clear structure and content',
      'Design and build coordination',
      'End-to-end delivery',
    ],
    outcome: 'A premium website delivered with clarity and control',
  },
];

const getIcon = (iconName: string) => {
  const icons: any = {
    eye: <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />,
    shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    check: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    globe: <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
  };
  return icons[iconName] || icons.eye;
};

export default function PricingPage() {
  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="relative min-h-[50vh] bg-white flex items-center justify-center py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-primary-teal"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                Pricing
              </p>
              <div className="w-8 h-0.5 bg-primary-teal"></div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-neutral-900 leading-tight mb-6 font-bold tracking-tight">
              Simple, clear support based on what you need
            </h1>

            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              We offer four levels of support depending on your situation. Each is designed to bring clarity, structure, and control to your work.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING TIERS - Premium Card Style */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingTiers.map((tier, index) => (
              <AnimatedSection key={tier.id} delay={index * 100}>
                <div className="card-premium h-full flex flex-col group cursor-pointer">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-teal/10 to-primary-teal/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      {getIcon(tier.icon)}
                    </svg>
                  </div>

                  <h3 className="font-display text-3xl text-neutral-900 font-semibold mb-3 group-hover:text-primary-teal transition-colors">
                    {tier.name}
                  </h3>
                  
                  <p className="text-base text-neutral-600 leading-relaxed mb-6">
                    {tier.tagline}
                  </p>

                  {/* Includes */}
                  <div className="mb-6 flex-1">
                    <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                      What this includes:
                    </p>
                    <ul className="space-y-2">
                      {tier.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-teal mt-2 flex-shrink-0" />
                          <span className="text-sm text-neutral-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="mb-6 pt-4 border-t border-neutral-200">
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      Outcome:
                    </p>
                    <p className="font-display italic text-lg text-primary-teal font-semibold">
                      {tier.outcome}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pt-6 border-t border-neutral-200">
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      Price:
                    </p>
                    <p className="font-display text-3xl text-neutral-900 font-bold mb-1">
                      {tier.price}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {tier.priceNote}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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
                If you are unsure which level you need, we will guide you
              </h2>
              
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
                Let's have a conversation about your specific situation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button href="/contact" variant="primary" className="bg-white text-primary-navy hover:bg-neutral-50">
                  Start a conversation
                </Button>
              </div>

              <p className="text-sm text-white/70">
                Or email us at{' '}
                <a
                  href="mailto:hello@stratoraconsulting.com"
                  className="text-primary-gold hover:text-white font-semibold transition-colors"
                >
                  hello@stratoraconsulting.com
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
