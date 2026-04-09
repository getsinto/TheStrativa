import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      initialValue: 'The Strativa',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Programme delivery. Digital execution. Controlled outcomes.',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'hello@thestrativa.com',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'contactNote',
      title: 'Contact Response Note',
      type: 'string',
      description: 'e.g. We aim to respond within 24 hours',
      initialValue: 'We aim to respond within 24 hours',
    }),
  ],
});
