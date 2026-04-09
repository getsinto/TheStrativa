// Import all content to Sanity automatically
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '52h1havb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skSjoaiEXGvUCtYJtjt5kCSzpopAhMOKRcfC2raT2OI3C8O90WFSZ7dAOht4dpIRDNy16S2AZHV6IkcZgo4knCqXrfjm1pfXTERy7FJmAXCnBE3NvoUhEMUnb73UfUjsnrgTmcXhIXx4VuPLlGoTjliLSapR43bHdle7v9py8ZcE4uflT423',
  useCdn: false,
});

const services = [
  {
    _type: 'service',
    title: 'Programme Delivery & Coordination',
    slug: { _type: 'slug', current: 'programme-delivery-coordination' },
    order: 1,
    summary: 'We bring structure and control to complex programmes.',
    description: 'Where there is unclear ownership, inconsistent reporting, and fragmented delivery, we introduce clear structure, defined accountability, and coordinated execution.',
    bullets: [
      'Programme tracking and reporting',
      'RAID management',
      'Stakeholder coordination',
      'Delivery oversight'
    ],
    outcome: 'Programmes that move forward with control, not confusion.'
  },
  {
    _type: 'service',
    title: 'Go-Live Readiness & Closure',
    slug: { _type: 'slug', current: 'go-live-readiness-closure' },
    order: 2,
    summary: 'We define what readiness actually means.',
    description: 'Not assumptions, not optimism, not incomplete views. We provide clear visibility, understood risks, and controlled decisions at every go-live point.',
    bullets: [
      'Go-live readiness assessment',
      'Hypercare planning',
      'Closure reporting',
      'Lessons learned facilitation'
    ],
    outcome: 'Go-live decisions that are credible, not forced.'
  },
  {
    _type: 'service',
    title: 'Website Delivery & Coordination',
    slug: { _type: 'slug', current: 'website-delivery-coordination' },
    order: 3,
    summary: 'Premium digital delivery without the complexity.',
    description: 'We combine structured delivery, design expertise, and coordination — connecting clients with trusted developers and designers globally, and managing the full process end-to-end.',
    bullets: [
      'Requirements definition and structure',
      'Design and UX guidance',
      'Developer coordination and management',
      'Quality assurance and alignment'
    ],
    outcome: 'A premium website delivered with clarity, not chaos.'
  }
];

const caseStudies = [
  {
    _type: 'caseStudy',
    title: 'ERP Programme Closure',
    subtitle: 'A complex ERP programme brought to a controlled, credible closure.',
    slug: { _type: 'slug', current: 'erp-programme-closure' },
    situation: 'A major ERP programme involving multiple suppliers had reached its final stages without a clear understanding of delivery status.',
    problem: [
      'Multiple suppliers.',
      'Unresolved issues.',
      'No clear closure position.',
      'Different stakeholders held different views of reality.',
      'Delivery had taken place, but clarity had not.'
    ],
    intervention: [
      'We stepped in to establish control.',
      'We reviewed delivery against scope, aligned stakeholders on what had actually been delivered, and clearly defined what remained.',
      'We separated: Completed delivery, Outstanding risks, Unresolved issues.',
      'We replaced assumption with evidence.'
    ],
    outcome: [
      'A clear, evidence-based closure position.',
      'Leadership were able to make a confident decision based on reality, not interpretation.',
      'The programme was closed in a controlled and credible way, with a defined transition into business-as-usual.'
    ],
    finalLine: 'Not a forced ending. A controlled closure.',
    publishedAt: '2024-09-01',
    featured: true
  },
  {
    _type: 'caseStudy',
    title: 'Lessons Learned & Survey Design',
    subtitle: 'From unclear feedback to structured, usable insight.',
    slug: { _type: 'slug', current: 'lessons-learned-survey-design' },
    situation: 'Stakeholder feedback was required to capture lessons learned across the programme.',
    problem: [
      'Feedback was inconsistent.',
      'Scoring was unclear.',
      'Questions were open to interpretation.',
      'The data could not be trusted to support decision-making.'
    ],
    intervention: [
      'We redesigned the approach from the ground up.',
      'We structured the survey around delivery phases, clarified scoring, and removed ambiguity from every question.',
      'We ensured that: Every response could be interpreted clearly, Every score had a consistent meaning, Every output could be analysed with confidence.'
    ],
    outcome: [
      'A structured, reliable view of programme performance.',
      'Leadership gained clear insight into what worked, what did not, and what needed to change going forward.'
    ],
    finalLine: 'Not just feedback. Clear, usable insight.',
    publishedAt: '2024-06-01',
    featured: false
  },
  {
    _type: 'caseStudy',
    title: 'Go-Live Readiness',
    subtitle: 'A complex go-live decision made with clarity and control.',
    slug: { _type: 'slug', current: 'go-live-readiness' },
    situation: 'Multiple workstreams were approaching go-live at different levels of readiness.',
    problem: [
      'No single view of readiness.',
      'Different stakeholders held different positions.',
      'Risks were not clearly understood or aligned.',
      'Go-live risked becoming a decision based on pressure, not clarity.'
    ],
    intervention: [
      'We defined what readiness actually meant.',
      'We aligned stakeholders around a "ready with conditions" position, ensuring all risks were: Visible, Understood, Owned.',
      'We brought structure to decision-making.'
    ],
    outcome: [
      'A controlled go-live decision.',
      'Known risks were accepted, managed, and transitioned into Hypercare with clear ownership.',
      'The programme moved forward with clarity, not uncertainty.'
    ],
    finalLine: 'Not perfect readiness. Controlled readiness.',
    publishedAt: '2024-03-01',
    featured: false
  }
];

async function importContent() {
  console.log('Starting content import to Sanity...\n');

  try {
    // Import Services
    console.log('Importing Services...');
    for (const service of services) {
      const result = await client.create(service);
      console.log(`✓ Created service: ${service.title}`);
    }

    // Import Case Studies
    console.log('\nImporting Case Studies...');
    for (const caseStudy of caseStudies) {
      const result = await client.create(caseStudy);
      console.log(`✓ Created case study: ${caseStudy.title}`);
    }

    console.log('\n✅ All content imported successfully!');
    console.log('\nNext steps:');
    console.log('1. Visit https://strativa.netlify.app/studio to see your content');
    console.log('2. Visit https://strativa.netlify.app to see it on your website');
    console.log('3. Wait 10 seconds and refresh if needed');

  } catch (error) {
    console.error('❌ Error importing content:', error.message);
    console.error('\nIf you see "already exists" errors, that means the content is already in Sanity!');
  }
}

importContent();
