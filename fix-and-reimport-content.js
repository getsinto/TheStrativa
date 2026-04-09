// Fix and reimport content with correct schema fields
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

// Correct Insights data matching the schema
const insights = [
  {
    _type: 'insight',
    title: 'Ready with Conditions',
    slug: { _type: 'slug', current: 'ready-with-conditions' },
    summary: 'Go-live readiness is rarely binary. Most programmes reach a point where they are "ready with conditions" — not perfect, but controlled. Understanding this distinction is critical to making credible go-live decisions.',
    quote: 'Ready with conditions is a controlled position, not a compromise.',
    body: textToPortableText(`Go-live readiness is rarely binary. Most programmes reach a point where they are "ready with conditions" — not perfect, but controlled. The difference matters.

What "Ready with Conditions" Means: It means all critical functionality is delivered and tested, known risks are documented, understood, and owned, mitigation plans are in place, and leadership has made an informed decision to proceed.

It does not mean everything is perfect, all issues are resolved, or there is zero risk.

Why This Matters: Waiting for "perfect readiness" often means delayed go-lives, increased costs, lost business value, and stakeholder frustration. "Ready with conditions" allows programmes to move forward with clarity and control, rather than waiting for an impossible standard.

How to Define It: Define what "ready" actually means for your programme. Identify and document all known risks. Assign clear ownership for each risk. Create mitigation plans. Get leadership sign-off on the position. This is how controlled go-lives happen.`),
    publishedAt: '2024-08-15T00:00:00Z',
    featured: true
  },
  {
    _type: 'insight',
    title: 'What Programmes Get Wrong About Go-Live',
    slug: { _type: 'slug', current: 'what-programmes-get-wrong-about-go-live' },
    summary: 'Most programmes treat go-live as a single event. It is not. Go-live is a transition — and without clear structure around that transition, programmes fail to deliver the value they promised.',
    quote: 'Go-live requires control, not optimism.',
    body: textToPortableText(`Most programmes treat go-live as a single event. It is not. Go-live is a transition — and without clear structure around that transition, programmes fail to deliver the value they promised.

The Common Mistake: Programmes focus on technical readiness, testing completion, and training delivery. They miss operational readiness, support structure, hypercare planning, and business continuity.

What Actually Matters: Go-live is not about flipping a switch. It is about clear transition planning, defined support structure, hypercare ownership, and business continuity. Without these, go-live becomes chaos.

How to Get It Right: Define go-live as a transition period, not a single date. Plan Hypercare before go-live, not after. Assign clear ownership for support and stabilisation. Create escalation paths that actually work. Measure success beyond "did we go live". This is how programmes deliver value, not just deployment.`),
    publishedAt: '2024-07-20T00:00:00Z',
    featured: false
  },
  {
    _type: 'insight',
    title: 'Why Data Should Not Be Left Late',
    slug: { _type: 'slug', current: 'why-data-should-not-be-left-late' },
    summary: 'Data migration is often treated as a technical task to be completed near go-live. This is a mistake. Data quality, mapping, and validation should be addressed early — or programmes pay the price later.',
    quote: 'Strong programmes treat data as part of delivery — not a final step.',
    body: textToPortableText(`Data migration is often treated as a technical task to be completed near go-live. This is a mistake. Data quality, mapping, and validation should be addressed early — or programmes pay the price later.

Why Programmes Leave Data Late: Common reasons include "We'll deal with it closer to go-live", "The technical team will handle it", and "We need to focus on functionality first". All of these are wrong.

What Happens When Data Is Left Late: Poor data quality is discovered too late to fix. Mapping issues cause delays. Testing is incomplete because data is not ready. Go-live is delayed or compromised. Business operations are disrupted.

The Right Approach: Data should be addressed early. Define data requirements, assess data quality, create mapping rules, test early and often, and plan cutover carefully.

The Result: When data is addressed early, issues are identified and resolved before go-live. Testing is more realistic and effective. Go-live is smoother and less risky. Business operations continue without disruption. Data is not a technical task. It is a programme risk that must be managed from the start.`),
    publishedAt: '2024-05-10T00:00:00Z',
    featured: false
  }
];

// Correct Case Studies data matching the schema
const caseStudies = [
  {
    _type: 'caseStudy',
    title: 'ERP Programme Closure',
    slug: { _type: 'slug', current: 'erp-programme-closure' },
    challenge: 'A major ERP programme involving multiple suppliers had reached its final stages without a clear understanding of delivery status. Multiple suppliers. Unresolved issues. No clear closure position. Different stakeholders held different views of reality. Delivery had taken place, but clarity had not.',
    approach: [
      'We stepped in to establish control.',
      'We reviewed delivery against scope, aligned stakeholders on what had actually been delivered, and clearly defined what remained.',
      'We separated: Completed delivery, Outstanding risks, Unresolved issues.',
      'We replaced assumption with evidence.'
    ],
    outcome: 'A clear, evidence-based closure position. Leadership were able to make a confident decision based on reality, not interpretation. The programme was closed in a controlled and credible way, with a defined transition into business-as-usual. Not a forced ending. A controlled closure.',
    publishedAt: '2024-09-01T00:00:00Z',
    featured: true
  },
  {
    _type: 'caseStudy',
    title: 'Lessons Learned & Survey Design',
    slug: { _type: 'slug', current: 'lessons-learned-survey-design' },
    challenge: 'Stakeholder feedback was required to capture lessons learned across the programme. Feedback was inconsistent. Scoring was unclear. Questions were open to interpretation. The data could not be trusted to support decision-making.',
    approach: [
      'We redesigned the approach from the ground up.',
      'We structured the survey around delivery phases, clarified scoring, and removed ambiguity from every question.',
      'We ensured that: Every response could be interpreted clearly, Every score had a consistent meaning, Every output could be analysed with confidence.'
    ],
    outcome: 'A structured, reliable view of programme performance. Leadership gained clear insight into what worked, what did not, and what needed to change going forward. Not just feedback. Clear, usable insight.',
    publishedAt: '2024-06-01T00:00:00Z',
    featured: false
  },
  {
    _type: 'caseStudy',
    title: 'Go-Live Readiness',
    slug: { _type: 'slug', current: 'go-live-readiness' },
    challenge: 'Multiple workstreams were approaching go-live at different levels of readiness. No single view of readiness. Different stakeholders held different positions. Risks were not clearly understood or aligned. Go-live risked becoming a decision based on pressure, not clarity.',
    approach: [
      'We defined what readiness actually meant.',
      'We aligned stakeholders around a "ready with conditions" position, ensuring all risks were: Visible, Understood, Owned.',
      'We brought structure to decision-making.'
    ],
    outcome: 'A controlled go-live decision. Known risks were accepted, managed, and transitioned into Hypercare with clear ownership. The programme moved forward with clarity, not uncertainty. Not perfect readiness. Controlled readiness.',
    publishedAt: '2024-03-01T00:00:00Z',
    featured: false
  }
];

async function fixContent() {
  console.log('Fixing and reimporting content...\n');

  try {
    // Delete old insights
    console.log('Deleting old insights...');
    const oldInsights = await client.fetch(`*[_type == "insight"]._id`);
    for (const id of oldInsights) {
      await client.delete(id);
      console.log(`✓ Deleted old insight: ${id}`);
    }

    // Delete old case studies
    console.log('\nDeleting old case studies...');
    const oldCaseStudies = await client.fetch(`*[_type == "caseStudy"]._id`);
    for (const id of oldCaseStudies) {
      await client.delete(id);
      console.log(`✓ Deleted old case study: ${id}`);
    }

    // Import correct insights
    console.log('\nImporting correct insights...');
    for (const insight of insights) {
      await client.create(insight);
      console.log(`✓ Created insight: ${insight.title}`);
    }

    // Import correct case studies
    console.log('\nImporting correct case studies...');
    for (const caseStudy of caseStudies) {
      await client.create(caseStudy);
      console.log(`✓ Created case study: ${caseStudy.title}`);
    }

    console.log('\n✅ All content fixed and reimported successfully!');
    console.log('\nNext steps:');
    console.log('1. Visit https://strativa.netlify.app/studio to verify');
    console.log('2. Visit https://strativa.netlify.app to see it live');
    console.log('3. All fields should now be properly filled!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

fixContent();
