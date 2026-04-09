// Test Sanity connection
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '52h1havb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

async function testConnection() {
  try {
    console.log('Testing Sanity connection...');
    console.log('Project ID:', '52h1havb');
    console.log('Dataset:', 'production');
    
    const services = await client.fetch(`*[_type == "service"] | order(order asc)`);
    
    console.log('\n✅ Connection successful!');
    console.log(`Found ${services.length} service(s):\n`);
    
    services.forEach((service, index) => {
      console.log(`Service ${index + 1}:`);
      console.log(`  Title: ${service.title}`);
      console.log(`  Order: ${service.order}`);
      console.log(`  Summary: ${service.summary || 'MISSING'}`);
      console.log(`  Description: ${service.description || 'MISSING'}`);
      console.log(`  Bullets: ${service.bullets ? service.bullets.length + ' items' : 'MISSING'}`);
      console.log(`  Outcome: ${service.outcome || 'MISSING'}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  }
}

testConnection();
