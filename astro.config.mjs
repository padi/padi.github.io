// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import redirects from './src/data/redirects.json' with { type: 'json' };

// The Keystatic editor needs a server, so it only loads under `astro dev`. Production stays fully static.
const isDev = process.argv.includes('dev');
const editor = isDev
  ? [(await import('@astrojs/react')).default(), (await import('@keystatic/astro')).default()]
  : [];

/** Code colours picked from the site palette; each is at least 7:1 on Roast. */
const roastTheme = {
  name: 'roast',
  type: /** @type {const} */ ('dark'),
  colors: { 'editor.background': '#2A1A12', 'editor.foreground': '#F2E5CF' },
  settings: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#CDB491' } },
    { scope: ['keyword', 'storage', 'keyword.control', 'keyword.operator.new'], settings: { foreground: '#F2A900' } },
    { scope: ['string', 'string.quoted', 'string.template'], settings: { foreground: '#E8D5B7' } },
    { scope: ['entity.name.function', 'support.function', 'entity.name.class', 'entity.name.type', 'support.class'], settings: { foreground: '#AEBEFF' } },
    { scope: ['constant', 'constant.numeric', 'constant.language', 'variable.other.constant', 'variable.other.symbol'], settings: { foreground: '#FFB4A0' } },
  ],
};

/**
 * Colours the leading `$` of shell prompts, as in the mockups.
 * @type {import('shiki').ShikiTransformer}
 */
const shellPrompt = {
  name: 'shell-prompt',
  tokens(lines) {
    if (!['bash', 'sh', 'shell', 'zsh', 'console'].includes(this.options.lang)) return;
    for (const line of lines) {
      const first = line[0];
      if (!first || !/^\$(\s|$)/.test(first.content)) continue;
      const rest = first.content.slice(1);
      line.splice(0, 1, { ...first, content: '$', color: '#F2A900' }, ...(rest ? [{ ...first, content: rest, offset: first.offset + 1 }] : []));
    }
  },
};

export default defineConfig({
  site: 'https://padi.github.io',
  trailingSlash: isDev ? 'ignore' : 'always',
  redirects,
  integrations: [
    ...editor,
    sitemap({
      filter: (page) => !Object.keys(redirects).some((from) => page === `https://padi.github.io${from}`),
    }),
  ],
  markdown: {
    shikiConfig: { theme: roastTheme, transformers: [shellPrompt], wrap: false },
  },
});
