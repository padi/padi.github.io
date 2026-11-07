export const site = {
  title: "Marc's Tech Notes",
  author: 'Marc Rendl',
  description:
    "Marc Rendl's notes from over 10 years of making and maintaining web apps, mostly with Ruby on Rails, JavaScript and Shopify.",
  hireLine: "I'm open for Ruby, Rails and Shopify projects.",
  /** Where every "Let's talk" link goes. Change to a mailto: link once the contact email is chosen. */
  talkHref: '/about/#talk',
};

export const nav = [
  { label: 'Notes', href: '/notes/' },
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Now', href: '/now/' },
  { label: 'Elsewhere', href: '/elsewhere/' },
];

export const profiles = [
  { label: 'GitHub', href: 'https://github.com/padi' },
  { label: 'X', href: 'https://x.com/marcrendl' },
  { label: 'CSSBattle', href: 'https://cssbattle.dev/player/mri' },
  { label: 'Monkeytype', href: 'https://monkeytype.com/profile/m14o' },
];

/** Posts picked by hand for the Elsewhere page. Add { text, date: 'YYYY-MM-DD', url } to show one. */
export const xPosts: { text: string; date: string; url: string }[] = [];
