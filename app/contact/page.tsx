import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with The Strativa. We aim to respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[40vh] bg-[#0F1113] flex items-center justify-center overflow-hidden">
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 max-w-4xl">
          <div
            className="mb-6 flex justify-center animate-fadeUp"
            style={{ animationDelay: '0ms', animationFillMode: 'both' }}
          >
            <SectionLabel light>GET IN TOUCH</SectionLabel>
          </div>

          <h1
            className="font-display text-white leading-[1.2] mb-6 text-center animate-fadeUp"
            style={{
              fontSize: '48px',
              letterSpacing: '-0.02em',
              animationDelay: '100ms',
              animationFillMode: 'both',
            }}
          >
            Let's talk about your programme.
          </h1>

          <p
            className="text-[18px] text-white opacity-65 text-center animate-fadeUp"
            style={{
              animationDelay: '250ms',
              animationFillMode: 'both',
            }}
          >
            Whether you need to start a conversation, book a call, or simply ask a question.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-[#F7F6F3] py-[100px]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* RIGHT — CONTACT INFO (shows first on mobile) */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <AnimatedSection delay={150}>
                <div className="space-y-12">
                  {/* Block 1: Get in Touch */}
                  <div>
                    <div className="mb-4">
                      <SectionLabel>GET IN TOUCH</SectionLabel>
                    </div>
                    <a
                      href="mailto:hello@thestrativa.com"
                      className="text-[17px] text-[#2F5D62] hover:underline transition-all"
                    >
                      hello@thestrativa.com
                    </a>
                  </div>

                  {/* Block 2: Book a Call */}
                  <div>
                    <div className="mb-4">
                      <SectionLabel>BOOK A CALL</SectionLabel>
                    </div>
                    <a
                      href="#"
                      className="text-[17px] text-[#2F5D62] hover:underline transition-all block mb-2"
                    >
                      Schedule a 30-minute conversation
                    </a>
                    <p className="text-[14px] text-[#525250] leading-[1.7]">
                      We'll discuss your programme and how we can help.
                    </p>
                  </div>

                  {/* Block 3: Response Time */}
                  <div>
                    <div className="mb-4">
                      <SectionLabel>RESPONSE TIME</SectionLabel>
                    </div>
                    <p className="text-[15px] text-[#525250] leading-[1.7]">
                      We aim to respond to all messages within 24 hours.
                    </p>
                  </div>

                  {/* Decorative rule and quote */}
                  <div className="pt-8 border-t border-[#E8E6E1]">
                    <p className="font-display italic text-[20px] text-[#0F1113] leading-[1.5]">
                      "Every complex programme starts with a conversation."
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* LEFT — FORM */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <AnimatedSection>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
