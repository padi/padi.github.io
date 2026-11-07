export const topicIds = ['ruby-and-rails', 'shell', 'vim', 'testing', 'git-and-the-web', 'working-life'] as const;
export type TopicId = (typeof topicIds)[number];

export interface Topic {
  name: string;
  /** Class that draws this topic's shape. */
  shape: string;
  /** Hidden on each note: the icon's name, the line that greets the finder, and its real CSS. */
  egg: { label: string; note: string; css: string };
}

export const topics: Record<TopicId, Topic> = {
  'ruby-and-rails': {
    name: 'Ruby and Rails',
    shape: 's-ruby',
    egg: {
      label: 'View the CSS for this gem',
      note: 'You spotted it. This gem is two layers, each with its own clip-path:',
      css: `.ruby {
  background: var(--signal);
  clip-path: polygon(24% 6%, 76% 6%, 100% 38%, 50% 96%, 0 38%);
}
.ruby::before {
  background: var(--ink-red);
  clip-path: polygon(0 38%, 100% 38%, 50% 96%);
}`,
    },
  },
  shell: {
    name: 'Shell',
    shape: 's-shell',
    egg: {
      label: 'View the CSS for this prompt',
      note: 'You spotted it. This prompt is a blue box, a clipped arrow and one small bar:',
      css: `.shell {
  background: var(--cobalt);
  border-radius: 12%;
}
.shell::before {
  background: var(--sand);
  clip-path: polygon(0 0, 28% 0, 100% 50%, 28% 100%, 0 100%, 62% 50%);
}
.shell::after {
  width: 26%;
  height: 12%;
  background: var(--sand);
}`,
    },
  },
  vim: {
    name: 'Vim',
    shape: 's-vim',
    egg: {
      label: 'View the CSS for these split windows',
      note: 'You spotted it. These split windows are one bordered box and a divider:',
      css: `.vim {
  background: var(--marigold);
  border: calc(var(--sw) * 0.09) solid var(--roast);
  border-radius: 12%;
}
.vim::before {
  left: 44%;
  width: 12%;
  background: var(--roast);
}`,
    },
  },
  testing: {
    name: 'Testing',
    shape: 's-test',
    egg: {
      label: 'View the CSS for this target',
      note: 'You spotted it. This target is one circle and one gradient:',
      css: `.test {
  border-radius: 50%;
  background: radial-gradient(circle,
    var(--signal) 0 22%,
    var(--sand) 22.5% 42%,
    var(--roast) 42.5% 70%,
    transparent 70.5%);
}`,
    },
  },
  'git-and-the-web': {
    name: 'Git and the web',
    shape: 's-web',
    egg: {
      label: 'View the CSS for this branch',
      note: 'You spotted it. This branch is three gradients, one curved border and a dot:',
      css: `.web {
  background:
    radial-gradient(circle at 24% 16%, var(--cobalt) 98%, transparent),
    radial-gradient(circle at 24% 84%, var(--cobalt) 98%, transparent),
    linear-gradient(var(--roast), var(--roast)) 20.5% 50% / 12% 68% no-repeat;
}
.web::before {
  border-right: calc(var(--sw) * 0.12) solid var(--roast);
  border-bottom: calc(var(--sw) * 0.12) solid var(--roast);
  border-bottom-right-radius: 70%;
}
.web::after {
  border-radius: 50%;
  background: var(--signal);
}`,
    },
  },
  'working-life': {
    name: 'Working life',
    shape: 's-life',
    egg: {
      label: 'View the CSS for this sun',
      note: 'You spotted it. This sun is half a rounded box, sitting on a bar:',
      css: `.life::before {
  height: 42%;
  background: var(--marigold);
  border-radius: 999px 999px 0 0;
}
.life::after {
  top: 64%;
  height: 16%;
  background: var(--roast);
}`,
    },
  },
};
