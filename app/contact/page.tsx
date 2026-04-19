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
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-teal">Get in touch</span>
              <div className="w-8 h-0.5 bg-primary-teal"></div>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-neutral-900 leading-[1.1] mb-6 tracking-tight">
              Let's talk about your programme
            </h1>

            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Whether you need to start a conversation, book a call, or simply ask a question.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION - Clean Two Column */}
      <section className="bg-neutral-50 py-16 md:py-20 lg:py-24">
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
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-teal mb-3">
                      Email
                    </p>
                    <a
                      href="mailto:hello@stratoraconsulting.com"
                      className="text-lg text-neutral-900 hover:text-primary-teal font-semibold transition-colors"
                    >
                      hello@stratoraconsulting.com
                    </a>
                  </div>

                  {/* Block 2: Book a Call */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-teal mb-3">
                      Book a call
                    </p>
                    <p className="text-neutral-600 leading-relaxed mb-3">
                      Schedule a 30-minute conversation to discuss your programme and how we can help.
                    </p>
                    <a
                      href="#"
                      className="text-primary-teal hover:text-primary-teal/80 font-semibold transition-colors inline-flex items-center gap-2 group"
                    >
                      Schedule now
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  {/* Block 3: Response Time */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary-teal mb-3">
                      Response time
                    </p>
                    <p className="text-neutral-600 leading-relaxed">
                      We aim to respond to all messages within 24 hours.
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="pt-8 border-t border-neutral-200">
                    <div className="border-l-4 border-primary-teal pl-6">
                      <p className="font-display italic text-xl text-neutral-900 leading-snug">
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
