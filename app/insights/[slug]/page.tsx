import Link from 'next/link';
import { createClient } from '@sanity/client';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Divider from '@/components/ui/Divider';

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

async function getInsight(slug: string) {
  try {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
    });
    
    const insight = await client.fetch(
      `*[_type == "insight" && slug.current == $slug][0]`,
      { slug }
    );
    
    if (insight) return insight;
  } catch (error) {
    // Fall through to static data
  }
  
  return STATIC_INSIGHTS.find((insight) => insight.slug.current === slug);
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
  });
}

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const insight = await getInsight(params.slug);
  
  if (!insight) {
    return {
      title: 'Insight Not Found',
    };
  }

  return {
    title: insight.title,
    description: insight.summary,
  };
}

export async function generateStaticParams() {
  return STATIC_INSIGHTS.map((insight) => ({
    slug: insight.slug.current,
  }));
}

export default async function InsightPage({ params }: { params: { slug: string } }) {
  const insight = await getInsight(params.slug);

  if (!insight) {
    notFound();
  }

  // Get other insights (exclude current)
  const otherInsights = STATIC_INSIGHTS.filter(
    (item) => item.slug.current !== params.slug
  ).slice(0, 2);

  // Split body into paragraphs
  const paragraphs = insight.body.split('\n\n').filter((p: string) => p.trim());

  return (
    <main className="pt-20">
      {/* BREADCRUMB */}
      <section className="bg-[#F7F6F3] pt-8 pb-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-[13px]">
            <Link
              href="/insights"
              className="text-[#2F5D62] hover:underline transition-colors"
            >
              Insights
            </Link>
            <span className="text-[#A89F91]">/</span>
            <span className="text-[#0F1113]">{insight.title}</span>
          </nav>
        </div>
      </section>

      {/* HERO AREA */}
      <section className="bg-[#0F1113] py-20">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            {/* Date and Label */}
            <div className="flex items-center gap-3 mb-4">
              <time className="text-[13px] text-[#A89F91] uppercase tracking-wider">
                {formatDate(insight.publishedAt)}
              </time>
              <span className="text-[#A89F91]">·</span>
              <span className="text-[13px] text-[#A89F91] uppercase tracking-wider">
                INSIGHTS
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-display text-white leading-[1.2]"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                letterSpacing: '-0.02em',
              }}
            >
              {insight.title}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="bg-[#F7F6F3] py-20">
        <div className="container-custom max-w-2xl">
          {/* Summary (Lede) */}
          <AnimatedSection>
            <p className="font-display italic text-[20px] text-[#0F1113] leading-[1.6] mb-12">
              {insight.summary}
            </p>
          </AnimatedSection>

          {/* Body Paragraphs */}
          <AnimatedSection delay={150}>
            <div className="space-y-8">
              {paragraphs.map((paragraph: string, index: number) => (
                <p key={index} className="text-[17px] text-[#525250] leading-[1.85]">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Pull Quote */}
          <AnimatedSection delay={250}>
            <div className="my-16">
              <div className="h-[1px] bg-[#E8E6E1] mb-12" />
              <blockquote className="text-center px-8">
                <p className="font-display italic text-[28px] text-[#2F5D62] leading-[1.4] mb-4">
                  "{insight.quote}"
                </p>
                <cite className="text-[13px] text-[#A89F91] not-italic">
                  — The Strativa
                </cite>
              </blockquote>
              <div className="h-[1px] bg-[#E8E6E1] mt-12" />
            </div>
          </AnimatedSection>

          {/* More from Strativa */}
          {otherInsights.length > 0 && (
            <>
              <Divider margin={64} />
              
              <AnimatedSection delay={300}>
                <h3 className="text-[13px] text-[#A89F91] uppercase tracking-wider mb-8">
                  More from Strativa
                </h3>

                <div className="grid grid-cols-1 gap-6">
                  {otherInsights.map((item) => (
                    <Link
                      key={item._id}
                      href={`/insights/${item.slug.current}`}
                      className="group border border-[#E8E6E1] p-6 transition-all duration-200 hover:border-[#2F5D62]"
                    >
                      <time className="text-[11px] text-[#A89F91] uppercase tracking-wider">
                        {formatDate(item.publishedAt)}
                      </time>
                      <h4 className="font-display text-[20px] text-[#0F1113] mt-2 mb-2 group-hover:text-[#2F5D62] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[14px] text-[#525250] leading-[1.6]">
                        {item.summary}
                      </p>
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            </>
          )}

          {/* Back Link */}
          <div className="mt-16 pt-8 border-t border-[#E8E6E1]">
            <Link
              href="/insights"
              className="text-[14px] text-[#0F1113] hover:text-[#2F5D62] transition-colors inline-flex items-center gap-2"
            >
              <span>←</span>
              Back to Insights
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
