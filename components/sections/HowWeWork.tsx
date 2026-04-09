import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

const phases = [
  {
    number: '01',
    title: 'Discovery & Alignment',
    description: 'We start by deeply understanding your context, challenges, and aspirations. Through stakeholder interviews and research, we align on objectives and success metrics.',
  },
  {
    number: '02',
    title: 'Strategy & Design',
    description: 'We develop a clear strategic roadmap and design solutions that balance user needs, business goals, and technical feasibility.',
  },
  {
    number: '03',
    title: 'Build & Iterate',
    description: 'We work in rapid cycles, building, testing, and refining. Our agile approach ensures we stay responsive to feedback and changing conditions.',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description: "We don't just deliver and disappear. We support you through launch, measure impact, and help you scale what works.",
  },
];

export default function HowWeWork() {
  return (
    <section className="section-padding bg-charcoal text-offwhite">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel className="text-bronze">Our Approach</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            How We Work
          </h2>
          <p className="text-xl text-mist max-w-3xl mx-auto">
            A collaborative, iterative process designed to deliver value early and often.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <AnimatedSection key={phase.number} delay={index * 0.1}>
              <div className="relative">
                <div className="text-6xl font-display font-bold text-teal/20 mb-4">
                  {phase.number}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {phase.title}
                </h3>
                <p className="text-mist leading-relaxed text-sm">
                  {phase.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
