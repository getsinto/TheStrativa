import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const featuredProjects = [
  {
    title: 'Global Retail Transformation',
    client: 'Fortune 500 Retailer',
    description: 'Led digital transformation initiative resulting in 40% increase in online revenue and unified omnichannel experience.',
    tags: ['Strategy', 'Digital Transformation', 'E-commerce'],
    slug: 'global-retail-transformation',
  },
  {
    title: 'Healthcare Platform Modernization',
    client: 'Regional Health System',
    description: 'Redesigned patient portal and backend systems, improving patient satisfaction scores by 35% and reducing operational costs.',
    tags: ['Product Design', 'Engineering', 'Healthcare'],
    slug: 'healthcare-platform',
  },
  {
    title: 'Financial Services Innovation',
    client: 'Fintech Startup',
    description: 'Built scalable platform from ground up, enabling company to process $100M+ in transactions within first year.',
    tags: ['Platform Engineering', 'Product Strategy', 'Fintech'],
    slug: 'fintech-innovation',
  },
];

export default function FeaturedWork() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-charcoal mb-6">
            Work That Moves the Needle
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Real results for real organizations. See how we've helped our clients achieve breakthrough outcomes.
          </p>
        </AnimatedSection>

        <div className="space-y-8 mb-12">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.1}>
              <Link href={`/case-studies/${project.slug}`}>
                <div className="border-l-4 border-teal pl-8 py-6 hover:bg-mist transition-colors duration-300">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-teal bg-teal/10 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-charcoal mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-bronze font-medium mb-3">{project.client}</p>
                  <p className="text-charcoal/70 leading-relaxed max-w-3xl">
                    {project.description}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center">
          <Button href="/case-studies">View All Case Studies</Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
