---
layout: single
title: Change your default terminal editor
tags: [til]
status: publish
date:   2017-08-20 10:24:00 +0800
type: post
category: articles
published: true
---

TL;DR: set BUNDLER_EDITOR, GEM_EDITOR, EDITOR, VISUAL to your favorite text editor, i.e.:

    export VISUAL='nvim -n'
    export EDITOR='nvim -n'
    export BUNDLER_EDITOR='nvim -n'
    export GEM_EDITOR='nvim -n'

The [rubygems](http://guides.rubygems.org/command-reference/#gem-open) `gem open` command will look for `$EDITOR`, `$VISUAL`, and `$GEM_EDITOR`.
The [bundler](http://bundler.io/v1.15/man/bundle-open.1.html) `bundle open` command will look for `$EDITOR`, `$VISUAL`, and `$BUNDLER_EDITOR`.
If you don't want to think about which editor will open, just set them all into one part of your rc file.

Seems for most command line tools that requires some editor at some point (e.g. `git commit`),
it will typically look for `$VISUAL` and/or `$EDITOR` as well. So setting them both seems to be a good default.

One more thing: I just learned that the `rc` in `.bashrc`, `.zshrc` files and the like means *Run Command*.
If you're into history, here's a [short historical reference](https://en.wikipedia.org/wiki/Run_commands) of the said abbreviation.
