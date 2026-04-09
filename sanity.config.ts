import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { caseStudy } from './sanity/schemas/caseStudy';
import { insight } from './sanity/schemas/insight';
import { service } from './sanity/schemas/service';
import { teamMember } from './sanity/schemas/teamMember';
import { siteSettings } from './sanity/schemas/siteSettings';

export default defineConfig({
  name: 'thestrativa',
  title: 'The Strativa CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [
    structureTool(),
  ],
  schema: {
    types: [caseStudy, insight, service, teamMember, siteSettings],
  },
});
