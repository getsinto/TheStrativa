// Import insights to Sanity with Portable Text format
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '52h1havb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skSjoaiEXGvUCtYJtjt5kCSzpopAhMOKRcfC2raT2OI3C8O90WFSZ7dAOht4dpIRDNy16S2AZHV6IkcZgo4knCqXrfjm1pfXTERy7FJmAXCnBE3NvoUhEMUnb73UfUjsnrgTmcXhIXx4VuPLlGoTjliLSapR43bHdle7v9py8ZcE4uflT423',
  useCdn: false,
});

// Helper to convert plain text to Portable Text blocks
function textToPortableText(text) {
  const paragraphs = text.split('\n\n').filter(p => p.trim());
  return paragraphs.map(paragraph => ({
    _type: 'block',
    _key: Math.random().toString(36).substr(2, 9),
    style: 'normal',
    children: [
      {
        _type: 'span',
        _key: Math.random().toString(36).substr(2, 9),
        text: paragraph.trim(),
        marks: []
      }
    ],
    markDefs: []
  }));
}

const insights = [
  {
    _type: 'insight',
    title: 'Ready with Conditions',
    slug: { _type: 'slug', current: 'ready-with-conditions' },
    excerpt: 'Go-live readiness is rarely binary. Most programmes reach a point where they are "ready with conditions" — not perfect, but controlled. Understanding this distinction is critical to making credible go-live decisions.',
    body: textToPortableText(`Go-live readiness is rarely binary.

Most programmes reach a point where they are "ready with conditions" — not perfect, but controlled.

The difference matters.

What "Ready with Conditions" Means:

It means all critical functionality is delivered and tested, known risks are documented, understood, and owned, mitigation plans are in place, and leadership has made an informed decision to proceed.

It does not mean everything is perfect, all issues are resolved, or there is zero risk.

Why This Matters:

Waiting for "perfect readiness" often means delayed go-lives, increased costs, lost business value, and stakeholder frustration.

"Ready with conditions" allows programmes to move forward with clarity and control, rather than waiting for an impossible standard.

How to Define It:

Define what "ready" actually means for your programme. Identify and document all known risks. Assign clear ownership for each risk. Create mitigation plans. Get leadership sign-off on the position.

This is how controlled go-lives happen.`),
    publishedAt: '2024-08-15',
    featured: true
  },
  {
    _type: 'insight',
    title: 'What Programmes Get Wrong About Go-Live',
    slug: { _type: 'slug', current: 'what-programmes-get-wrong-about-go-live' },
    excerpt: 'Most programmes treat go-live as a single event. It is not. Go-live is a transition — and without clear structure around that transition, programmes fail to deliver the value they promised.',
    body: textToPortableText(`Most programmes treat go-live as a single event.

It is not.

Go-live is a transition — and without clear structure around that transition, programmes fail to deliver the value they promised.

The Common Mistake:

Programmes focus on technical readiness, testing completion, and training delivery. They miss operational readiness, support structure, hypercare planning, and business continuity.

What Actually Matters:

Go-live is not about flipping a switch. It is about clear transition planning — who does what, when, and how. Defined support structure — how issues are escalated and resolved. Hypercare ownership — who is accountable for stabilisation. Business continuity — how operations continue during transition.

Without these, go-live becomes chaos.

How to Get It Right:

Define go-live as a transition period, not a single date. Plan Hypercare before go-live, not after. Assign clear ownership for support and stabilisation. Create escalation paths that actually work. Measure success beyond "did we go live".

This is how programmes deliver value, not just deployment.`),
    publishedAt: '2024-07-20',
    featured: false
  },
  {
    _type: 'insight',
    title: 'Why Data Should Not Be Left Late',
    slug: { _type: 'slug', current: 'why-data-should-not-be-left-late' },
    excerpt: 'Data migration is often treated as a technical task to be completed near go-live. This is a mistake. Data quality, mapping, and validation should be addressed early — or programmes pay the price later.',
    body: textToPortableText(`Data migration is often treated as a technical task to be completed near go-live.

This is a mistake.

Data quality, mapping, and validation should be addressed early — or programmes pay the price later.

Why Programmes Leave Data Late:

Common reasons include "We'll deal with it closer to go-live", "The technical team will handle it", and "We need to focus on functionality first". All of these are wrong.

What Happens When Data Is Left Late:

Poor data quality is discovered too late to fix. Mapping issues cause delays. Testing is incomplete because data is not ready. Go-live is delayed or compromised. Business operations are disrupted.

The Right Approach:

Data should be addressed early. Define data requirements — what data is needed, in what format. Assess data quality — identify gaps and issues early. Create mapping rules — document how data will be transformed. Test early and often — use real data in testing environments. Plan cutover carefully — define how and when data will be migrated.

The Result:

When data is addressed early, issues are identified and resolved before go-live. Testing is more realistic and effective. Go-live is smoother and less risky. Business operations continue without disruption.

Data is not a technical task. It is a programme risk that must be managed from the start.`),
    publishedAt: '2024-05-10',
    featured: false
  }
];

async function importInsights() {
  console.log('Starting insights import to Sanity...\n');

  try {
    console.log('Importing Insights...');
    for (const insight of insights) {
      const result = await client.create(insight);
      console.log(`✓ Created insight: ${insight.title}`);
    }

    console.log('\n✅ All insights imported successfully!');
    console.log('\nNext steps:');
    console.log('1. Visit https://strativa.netlify.app/studio to see your insights');
    console.log('2. Visit https://strativa.netlify.app/insights to see them on your website');
    console.log('3. Wait 10 seconds and refresh if needed');

  } catch (error) {
    console.error('❌ Error importing insights:', error.message);
    if (error.message.includes('already exists')) {
      console.error('\nThe insights already exist in Sanity!');
      console.error('Visit https://strativa.netlify.app/studio to see them.');
    }
  }
}

importInsights();
