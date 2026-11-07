import { getCollection, type CollectionEntry } from 'astro:content';
import { topics } from '../data/topics';

export type Note = CollectionEntry<'notes'>;

/** Published notes, newest first. Drafts are never built. */
export async function getNotes(): Promise<Note[]> {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  return notes.sort(
    (a, b) => b.data.written.getTime() - a.data.written.getTime() || a.data.title.localeCompare(b.data.title),
  );
}

export const noteHref = (note: Note) => `/notes/${note.id}/`;
export const topicHref = (topicId: string) => `/topics/${topicId}/`;

const year = (date: Date) => date.getUTCFullYear();
const monthYear = (date: Date) =>
  date.toLocaleDateString('en', { month: 'long', year: 'numeric', timeZone: 'UTC' });

/** "Ruby and Rails, 2017, revisited 2026" */
export function noteMeta(note: Note, { showTopic = true } = {}) {
  const parts = [String(year(note.data.written))];
  if (showTopic) parts.unshift(topics[note.data.topic].name);
  if (note.data.revisited) parts.push(`revisited ${year(note.data.revisited)}`);
  return parts.join(', ');
}

/** "Written in September 2017. Revisited in 2026." */
export function noteAge(note: Note) {
  const written = `Written in ${monthYear(note.data.written)}.`;
  return note.data.revisited ? `${written} Revisited in ${year(note.data.revisited)}.` : written;
}

/** First paragraph as plain text, for meta descriptions. */
export function noteSummary(note: Note, limit = 160) {
  const paragraph = (note.body ?? '')
    .split(/\n\s*\n/)
    .find((block) => /^[A-Za-z"'“`*]/.test(block.trim()) && !block.trim().startsWith('```'));
  const text = (paragraph ?? note.data.title)
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[`*_>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > limit ? `${text.slice(0, limit - 1).replace(/\s+\S*$/, '')}…` : text;
}
