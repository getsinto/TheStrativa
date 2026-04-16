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
      {/* HERO - McKinsey Style */}
      <section className="relative bg-white py-16 md:py-20 lg:py-24 pt-32">
        <div className="container-custom max-w-content text-center">
          <div className="animate-fade-in-up">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-8">
              Get in touch
            </p>

            <h1 className="font-display text-[clamp(40px,6vw,56px)] text-[#0F1113] leading-[1.2] mb-6 font-bold tracking-[-0.02em]">
              Let's talk about your programme
            </h1>

            <p className="text-[18px] text-[#6B7280] max-w-[600px] mx-auto">
              Whether you need to start a conversation, book a call, or simply ask a question.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION - McKinsey Two Column */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* LEFT — FORM */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* RIGHT — CONTACT INFO */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={150}>
                <div className="space-y-10">
                  {/* Block 1: Email */}
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-3">
                      Email
                    </p>
                    <a
                      href="mailto:hello@stratoraconsulting.com"
                      className="text-[17px] text-[#0F1113] hover:text-[#2F5D62] font-semibold transition-colors"
                    >
                      hello@stratoraconsulting.com
                    </a>
                  </div>

                  {/* Block 2: Book a Call */}
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-3">
                      Book a call
                    </p>
                    <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-3">
                      Schedule a 30-minute conversation to discuss your programme and how we can help.
                    </p>
                    <a
                      href="#"
                      className="text-[16px] text-[#2F5D62] hover:text-[#1E3D40] font-semibold transition-colors inline-flex items-center gap-2 group"
                    >
                      Schedule now
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Block 3: Response Time */}
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-3">
                      Response time
                    </p>
                    <p className="text-[15px] text-[#6B7280] leading-[1.7]">
                      We aim to respond to all messages within 24 hours.
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="pt-8 border-t border-[#E5E7EB]">
                    <div className="border-l-4 border-[#2F5D62] pl-6">
                      <p className="font-display italic text-[18px] text-[#0F1113] leading-[1.5]">
                        Every complex programme starts with a conversation.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
