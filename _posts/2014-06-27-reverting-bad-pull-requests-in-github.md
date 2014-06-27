---
layout: post
title: Reverting Bad Pull Requests in GitHub
tags: [remote, dev]
status: publish
date:   2014-06-27 23:33:13 +0800
type: post
category: articles
published: true
---

Recently, I've accidentally merged a bad pull request in GitHub.
What I had to do was `git revert` that merge commit and then
work on a new branch that starts with reverting that revert
(see [Undoing Merges](http://git-scm.com/blog/2010/03/02/undoing-merges.html)).

If you haven't been to this kind of situation yet, and you're using
GitHub, then your life will be easier from now on since they've
released a new nifty feature: the Revert Button.

<figure>
	<a href="http://s22.postimg.org/pae4ehdn5/revert_button.png ">
    <img src="http://s22.postimg.org/pae4ehdn5/revert_button.png ">
  </a>
	<figcaption>
    <a href="http://s22.postimg.org/pae4ehdn5/revert_button.png " title="GitHub's new Revert Button">
      GitHub's new Revert Button
    </a>.
  </figcaption>
</figure>

It will create a new pull request that will revert the bad merge, skipping
the need to do this via command line.

This will be helpful if, by some chance, you've accidentally merged an unfinished pull request
while reviewing a it from a tablet.

For details, see [this GitHub help article](https://help.github.com/articles/reverting-a-pull-request).
