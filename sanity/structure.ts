import type { StructureResolver } from 'sanity/desk';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('The Strativa CMS')
    .items([
      // Dashboard - Site Settings (pinned at top)
      S.listItem()
        .title('⚙ Site Settings')
        .icon(() => '⚙️')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      
      S.divider(),
      
      // Content Section
      S.documentTypeListItem('caseStudy')
        .title('Case Studies')
        .icon(() => '📋'),
      
      S.documentTypeListItem('insight')
        .title('Insights')
        .icon(() => '📄'),
      
      S.documentTypeListItem('service')
        .title('Services')
        .icon(() => '📋'),
      
      S.documentTypeListItem('teamMember')
        .title('Team Members')
        .icon(() => '👤'),
    ]);
