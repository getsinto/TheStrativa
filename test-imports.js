// Simple validation script to check for common issues
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking project structure...\n');

// Check critical files exist
const criticalFiles = [
  'package.json',
  'next.config.ts',
  'tsconfig.json',
  'tailwind.config.ts',
  'app/layout.tsx',
  'app/page.tsx',
  'components/layout/Nav.tsx',
  'components/layout/Footer.tsx',
  'lib/fonts.ts',
  'styles/globals.css'
];

let allFilesExist = true;
criticalFiles.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allFilesExist = false;
});

console.log('\n📦 Checking package.json...');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
console.log(`✅ Name: ${pkg.name}`);
console.log(`✅ Version: ${pkg.version}`);
console.log(`✅ Next.js: ${pkg.dependencies.next}`);
console.log(`✅ React: ${pkg.dependencies.react}`);

console.log('\n🎯 Checking TypeScript config...');
const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
console.log(`✅ Target: ${tsconfig.compilerOptions.target}`);
console.log(`✅ Strict mode: ${tsconfig.compilerOptions.strict}`);
console.log(`✅ Path aliases: ${JSON.stringify(tsconfig.compilerOptions.paths)}`);

console.log('\n📁 Checking app directory structure...');
function checkDir(dir, indent = '') {
  try {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        console.log(`${indent}📂 ${item}/`);
        if (indent.length < 8) { // Limit depth
          checkDir(fullPath, indent + '  ');
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        console.log(`${indent}📄 ${item}`);
      }
    });
  } catch (err) {
    console.log(`${indent}❌ Error reading ${dir}`);
  }
}

checkDir('app');

console.log('\n✨ Structure validation complete!');
console.log('\n⚠️  Note: To run the app, you need to:');
console.log('1. Install dependencies: npm install');
console.log('2. Set up environment variables in .env.local');
console.log('3. Run development server: npm run dev');
