import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';

export default function StatementBlock() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-custom">
        <AnimatedSection>
          <SectionLabel>Our Philosophy</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-charcoal leading-tight max-w-5xl">
            We believe that lasting impact comes from the intersection of{' '}
            <span className="text-teal">strategic thinking</span>,{' '}
            <span className="text-teal">technical excellence</span>, and{' '}
            <span className="text-teal">human-centered design</span>.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-16 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-charcoal">
              Strategic Clarity
            </h3>
            <p className="text-charcoal/70 leading-relaxed">
              We cut through complexity to identify what truly matters, aligning your organization around a clear path forward.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-charcoal">
              Execution Excellence
            </h3>
            <p className="text-charcoal/70 leading-relaxed">
              Strategy without execution is just conversation. We roll up our sleeves and deliver tangible results.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-display font-semibold mb-4 text-charcoal">
              Sustainable Growth
            </h3>
            <p className="text-charcoal/70 leading-relaxed">
              We build capabilities within your team, ensuring that our impact extends long after our engagement ends.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
