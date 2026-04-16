import Link from 'next/link';
import { createClient } from '@sanity/client';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Insights',
  description: 'Perspectives on programme delivery, go-live readiness, and controlled outcomes from The Strativa.',
};

export const revalidate = 60; // Revalidate every 60 seconds

const STATIC_INSIGHTS = [
  {
    _id: '1',
    title: 'Why "Ready with Conditions" Is Not a Failure',
    slug: { current: 'ready-with-conditions' },
    summary: 'Perfection is rarely achievable in complex programmes. What matters is not whether issues exist — it is whether they are understood.',
    quote: 'Ready with conditions is a controlled position, not a compromise.',
    body: 'It reflects visibility, alignment, and decision-making. The alternative is not perfection — it is delay without clarity.\n\nWhen a programme reaches go-live readiness review, the question is never "are there any issues?" There are always issues. The real question is: are the issues understood, owned, and mitigated to an acceptable level?\n\nA "ready with conditions" position answers yes to that question. It is a professional, controlled stance — not a sign of failure.',
    publishedAt: '2024-11-01',
    featured: true,
  },
  {
    _id: '2',
    title: 'What Most Programmes Get Wrong About Go-Live',
    slug: { current: 'what-programmes-get-wrong-about-go-live' },
    summary: 'Go-live is not a technical milestone. It is a decision point — and most programmes treat it as the former.',
    quote: 'Go-live requires control, not optimism.',
    body: 'When programmes fail at go-live, it is rarely because systems fail. It is because readiness is unclear, ownership is absent, and risks have not been aligned across workstreams.\n\nThe technical implementation is often sound. What is missing is the controlled decision — someone in authority saying: we understand our position, we have mitigated what we can, and we are ready to proceed.\n\nWithout that, go-live becomes an event that happens to a programme, rather than a decision a programme makes.',
    publishedAt: '2024-08-01',
    featured: false,
  },
  {
    _id: '3',
    title: 'Why Data Should Never Be Left Until Late',
    slug: { current: 'why-data-should-not-be-left-late' },
    summary: 'Data is not an output of a programme. It is a foundation for every decision within it.',
    quote: 'Strong programmes treat data as part of delivery — not a final step.',
    body: 'When data preparation is deferred, the symptoms appear everywhere else. Reporting becomes unreliable. Confidence in the system drops. Go-live decisions are made on incomplete information.\n\nThe common justification is that data can be cleansed and migrated "at the end." But by then, every preceding decision has been built on assumptions that the data will eventually invalidate.\n\nStrong programmes integrate data as a running workstream — not a last-minute activity.',
    publishedAt: '2024-05-01',
    featured: false,
  },
];

async function getInsights() {
  try {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: false, // Use fresh data
    });
    
    const insights = await client.fetch(`*[_type == "insight"] | order(publishedAt desc)`);
    return insights.length > 0 ? insights : STATIC_INSIGHTS;
  } catch (error) {
    console.error('Error fetching insights:', error);
    return STATIC_INSIGHTS;
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
  });
}

export async function generateStaticParams() {
  return STATIC_INSIGHTS.map((insight) => ({
    slug: insight.slug.current,
  }));
}

export default async function InsightsPage() {
  const insights = await getInsights();

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="relative min-h-[50vh] bg-white flex items-center justify-center py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-primary-teal"></div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                Insights
              </p>
              <div className="w-8 h-0.5 bg-primary-teal"></div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-neutral-900 leading-tight mb-6 font-bold tracking-tight">
              Thinking clearly about delivery
            </h1>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Points of view from the Stratora team
            </p>
          </div>
        </div>
      </section>

      {/* INSIGHTS GRID - Premium Card Style */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16 md:py-20 lg:py-24">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight: any, index: number) => (
              <AnimatedSection key={insight._id} delay={index * 100}>
                <Link href={`/insights/${insight.slug.current}`}>
                  <article className="card-premium h-full group cursor-pointer flex flex-col">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-teal/10 to-primary-teal/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>

                    {/* Date */}
                    <time className="text-xs text-neutral-500 uppercase tracking-wider font-semibold block mb-3">
                      {formatDate(insight.publishedAt)}
                    </time>

                    {/* Title */}
                    <h2 className="font-display text-2xl text-neutral-900 mb-4 leading-tight font-semibold group-hover:text-primary-teal transition-colors">
                      {insight.title}
                    </h2>

                    {/* Summary */}
                    <p className="text-base text-neutral-600 leading-relaxed mb-4">
                      {insight.summary}
                    </p>

                    {/* Pull quote */}
                    <p className="font-display italic text-base text-primary-teal leading-relaxed mb-6 flex-1">
                      "{insight.quote}"
                    </p>

                    {/* Bottom bar */}
                    <div className="flex items-center gap-2 pt-4 border-t border-neutral-200">
                      <span className="text-sm text-primary-teal font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Read article
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-0.5 bg-primary-teal"></div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary-teal">
                  Get in touch
                </p>
                <div className="w-8 h-0.5 bg-primary-teal"></div>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-neutral-900 font-bold mb-8">
                Want to discuss your programme delivery?
              </h3>
              <Button href="/contact" variant="primary">
                Start a conversation
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
