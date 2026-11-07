import { collection, config, fields } from '@keystatic/core';
import { topicIds, topics } from './src/data/topics';

// The editor only runs under `npm run dev`, at /keystatic. It saves to the Markdown files in this folder.
export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: "Marc's Tech Notes" } },
  collections: {
    notes: collection({
      label: 'Notes',
      path: 'src/content/notes/*',
      slugField: 'title',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'written', 'draft'],
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        topic: fields.select({
          label: 'Topic',
          options: topicIds.map((id) => ({ label: topics[id].name, value: id })),
          defaultValue: 'ruby-and-rails',
        }),
        written: fields.date({ label: 'Written', validation: { isRequired: true } }),
        revisited: fields.date({ label: 'Revisited' }),
        draft: fields.checkbox({ label: 'Draft', description: 'Drafts are not published.', defaultValue: false }),
        content: fields.markdoc({ label: 'Content', extension: 'md' }),
      },
    }),
  },
});
