import Link from 'next/link';
import { createClient } from '@sanity/client';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata = {
  title: 'Insights',
  description: 'Perspectives on programme delivery, go-live readiness, and controlled outcomes from The Strativa.',
};

export const revalidate = 3600;

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
      useCdn: true,
    });
    
    const insights = await client.fetch(`*[_type == "insight"] | order(publishedAt desc)`);
    return insights.length > 0 ? insights : STATIC_INSIGHTS;
  } catch {
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
      {/* HERO - McKinsey Style */}
      <section className="relative min-h-[50vh] bg-white flex items-center justify-center py-4xl">
        <div className="container-custom max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2F5D62] mb-8">
              Insights
            </p>

            <h1 className="font-display text-[clamp(40px,6vw,64px)] text-[#0F1113] leading-[1.2] mb-6 font-semibold tracking-[-0.02em]">
              Thinking clearly about delivery.
            </h1>

            <p className="text-[18px] text-[#6B7280] leading-[1.7]">
              Points of view from the Stratora team.
            </p>
          </div>
        </div>
      </section>

      {/* INSIGHTS GRID - McKinsey Style */}
      <section className="bg-[#F8F9FA] py-4xl">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight: any, index: number) => (
              <AnimatedSection key={insight._id} delay={index * 100}>
                <Link href={`/insights/${insight.slug.current}`}>
                  <article className="group bg-white border border-[#E5E7EB] p-10 transition-all duration-200 hover:shadow-card-hover hover:border-[#2F5D62] h-full flex flex-col">
                    {/* Date */}
                    <time className="text-[12px] text-[#6B7280] uppercase tracking-wider font-semibold">
                      {formatDate(insight.publishedAt)}
                    </time>

                    {/* Title */}
                    <h2 className="font-display text-[26px] text-[#0F1113] mt-3 mb-4 leading-[1.3] font-semibold">
                      {insight.title}
                    </h2>

                    {/* Summary */}
                    <p className="text-[15px] text-[#6B7280] leading-[1.7] mb-4">
                      {insight.summary}
                    </p>

                    {/* Pull quote */}
                    <p className="font-display italic text-[17px] text-[#2F5D62] leading-[1.5] mb-6 flex-1">
                      "{insight.quote}"
                    </p>

                    {/* Bottom bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                      <span className="text-[14px] text-[#2F5D62] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                        Read article
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
