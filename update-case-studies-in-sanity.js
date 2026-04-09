// Update case studies in Sanity to use the correct field structure
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '52h1havb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'skSjoaiEXGvUCtYJtjt5kCSzpopAhMOKRcfC2raT2OI3C8O90WFSZ7dAOht4dpIRDNy16S2AZHV6IkcZgo4knCqXrfjm1pfXTERy7FJmAXCnBE3NvoUhEMUnb73UfUjsnrgTmcXhIXx4VuPLlGoTjliLSapR43bHdle7v9py8ZcE4uflT423',
  useCdn: false,
});

async function updateCaseStudies() {
  console.log('Fetching existing case studies from Sanity...\n');

  try {
    // Get all case studies
    const caseStudies = await client.fetch(`*[_type == "caseStudy"]`);
    
    console.log(`Found ${caseStudies.length} case studies\n`);

    for (const study of caseStudies) {
      console.log(`Checking: ${study.title}`);
      
      // Check if it has the old format (challenge/approach)
      if (study.challenge && !study.situation) {
        console.log(`  → Needs update (has challenge field)`);
        
        // Parse challenge into situation and problem
        const challengeParts = study.challenge.split('.').map(s => s.trim()).filter(s => s);
        const situation = challengeParts[0] + '.';
        const problem = challengeParts.slice(1).map(p => p + '.');
        
        // Parse approach into intervention array
        const intervention = Array.isArray(study.approach) ? study.approach : [study.approach];
        
        // Parse outcome into array
        const outcomeParts = study.outcome.split('.').map(s => s.trim()).filter(s => s);
        const outcome = outcomeParts.map(p => p + '.');
        const finalLine = outcome.pop() || 'Not a forced ending. A controlled closure.';
        
        // Update the document
        await client
          .patch(study._id)
          .set({
            situation: situation,
            problem: problem,
            intervention: intervention,
            outcome: outcome,
            finalLine: finalLine.replace(/\.$/, '')
          })
          .commit();
        
        console.log(`  ✓ Updated successfully`);
      } else if (study.situation && study.problem) {
        console.log(`  ✓ Already in correct format`);
      } else {
        console.log(`  ⚠ Unknown format`);
      }
    }

    console.log('\n✅ All case studies checked and updated!');
    console.log('\nNext steps:');
    console.log('1. Visit https://strativa.netlify.app/case-studies');
    console.log('2. Content should now display correctly!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

updateCaseStudies();
