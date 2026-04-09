import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';

const services = [
  {
    title: 'Strategy & Transformation',
    description: 'Navigate complexity and drive organizational change with clarity and confidence.',
    offerings: ['Digital Strategy', 'Business Model Innovation', 'Change Management', 'Operating Model Design'],
  },
  {
    title: 'Product & Experience',
    description: 'Create digital products and experiences that users love and businesses depend on.',
    offerings: ['Product Strategy', 'UX/UI Design', 'Design Systems', 'User Research'],
  },
  {
    title: 'Technology & Engineering',
    description: 'Build scalable, secure, and maintainable technology solutions that power growth.',
    offerings: ['Platform Engineering', 'Cloud Architecture', 'API Development', 'Technical Due Diligence'],
  },
  {
    title: 'Data & Intelligence',
    description: 'Turn data into actionable insights that drive better decisions and outcomes.',
    offerings: ['Data Strategy', 'Analytics & BI', 'Machine Learning', 'Data Governance'],
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-mist">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-charcoal mb-6">
            Services Built for Impact
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            We offer integrated services across strategy, design, and technology to help you achieve your most ambitious goals.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="bg-offwhite p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-display font-semibold text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.offerings.map((offering) => (
                    <li key={offering} className="text-sm text-charcoal/60 flex items-center">
                      <span className="w-1.5 h-1.5 bg-teal rounded-full mr-3" />
                      {offering}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center">
          <Button href="/services">Explore All Services</Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
