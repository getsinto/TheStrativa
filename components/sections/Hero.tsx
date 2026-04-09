'use client';

import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-dark via-teal to-teal-light text-offwhite">
      <div className="container-custom text-center">
        <div className="animate-fadeUp">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
            Strategy Meets
            <br />
            Execution
          </h1>
          <p className="text-xl md:text-2xl text-mist max-w-3xl mx-auto mb-12 leading-relaxed">
            We partner with ambitious organizations to transform vision into reality through strategic consulting and digital innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Start a Conversation
            </Button>
            <Button href="/case-studies" variant="ghost">
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeIn">
        <div className="w-6 h-10 border-2 border-offwhite rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-offwhite rounded-full mt-2 animate-bounceY" />
        </div>
      </div>
    </section>
  );
}
