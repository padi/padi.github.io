---
layout: post
title: A Sane way of Slowly Adopting Code Conventions
tags: [dev, shell, quicktips, til]
status: publish
date:   2016-04-29 5:10:10 +0800
type: post
category: articles
published: true
---

Legacy ruby projects are often littered with code that just doesn't
follow any kind of code convention. Each developer that had a hand in a certain
codebase can quickly give up an just go on with their own style. Even I
am guilty of not spending time to follow any sort of coding convention
even though I know that we should for consistency, & readability.

In my opinion, just like refactoring, in order to reduce the scope of things
that I need to change, aim to correct coding convention violations while
working on features. In particular, only change the files that you touched
a.k.a [The Boy Scout Rule](http://programmer.97things.oreilly.com/wiki/index.php/The_Boy_Scout_Rule).

I usually follow [bbatsov's Ruby Style Guide](http://github.com/bbatsov/ruby-style-guide) and conveniently,
[Rubocop](http://github.com/bbatsov/rubocop) enforces this by default. So, if you're
following any sort of git feature branching model, you can automatically enforce
(most of) the style guide changes by checking out to the feature branch and use this script:

    git diff origin/master --name-status | awk '{print $2}' | xargs rubocop --auto-correct


That roughly transates to: get all changed files in the current feature branch and run each file through rubocop, autocorrecting (modifying) the files if possible.

I recommend saving the changes in a separate commit for easier code reviews.

You can also configure [Rubocop](http://github.com/bbatsov/rubocop) to follow your own
coding style guidelines.
