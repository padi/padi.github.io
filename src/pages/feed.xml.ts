import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { site } from '../data/site';
import { getNotes, noteHref, noteSummary } from '../lib/notes';

export async function GET(context: APIContext) {
  const origin = String(context.site).replace(/\/$/, '');
  const notes = await getNotes();
  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    items: notes.slice(0, 20).map((note) => ({
      title: note.data.title,
      pubDate: note.data.written,
      link: noteHref(note),
      description: noteSummary(note),
      // Feed readers need absolute links and images.
      content: (note.rendered?.html ?? '').replace(/(href|src)="\//g, `$1="${origin}/`),
    })),
  });
}
