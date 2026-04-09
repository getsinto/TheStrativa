import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export default function ContactCTA() {
  return (
    <section className="section-padding bg-teal text-offwhite">
      <div className="container-custom text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-6 leading-tight">
            Ready to Transform Your Vision into Reality?
          </h2>
          <p className="text-xl text-mist max-w-2xl mx-auto mb-12">
            Let's start a conversation about your challenges and explore how we can help you achieve breakthrough results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Get in Touch
            </Button>
            <Button href="/insights" variant="ghost">
              Read Our Insights
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
