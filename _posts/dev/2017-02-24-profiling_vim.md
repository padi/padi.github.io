---
layout: single
title: Profiling Vim
tags: [quicktips, vim, til, dev]
status: publish
date:   2016-04-29 5:10:10 +0800
type: post
category: articles
published: true
---

I've been using a pretty popular dotfile repo, [YADR](https://github.com/skwp/dotfiles),
for quite some time now. I've used it for so long that I've even made contributions
to the project [here](https://github.com/skwp/dotfiles/pull/506/files) and
[there](https://github.com/skwp/dotfiles/pull/711).

But sometimes, it slows down when performing certain tasks for no apparent reason.
In particular, while making Ruby code examples for a presentation
a few days ago, I noticed that opening/saving a ruby file took
3-5 seconds! Wanting my itch to be scratched, I decided to
look for ways to profile the slowness away!

It's really easy, just pop your vim open and type this in normal mode:

    # save to ~/record.log
    :profile start ~/record.log 

    # the profile for every function and file
    :profile func *
    :profile file *

    # do the slow task next, for example:
    :w sample_ruby_file.rb

    :profile pause

    # required to quit to create ~/record.log
    :qall

Next you can now check the bottom of `~/record.log`,
under "FUNCTIONS SORTED ON SELF TIME":

    ...
    FUNCTIONS SORTED ON SELF TIME
    count  total (s)   self (s)  function
        3   0.042048   0.015790  <SNR>4_SynSet()
        1   2.495415   0.014309  <SNR>31_LoadFTPlugin()
        6   0.009933   0.004577  <SNR>227_line()
        1   0.006000   0.003480  <SNR>32_LoadIndent()
       12   0.003720   0.002310  <SNR>227_expand()
    ... and more

In my case, since `31_LoadFTPlugin` took 2 seconds, I went down the rabbit hole
of why this is slow and ended up in [vim-ruby/ftplugin issues](https://github.com/vim-ruby/vim-ruby/search?q=ftplugin+slow&type=Issues&utf8=%E2%9C%93).

Luckily, it's fixed in the latest vim-ruby. So I just had to update mine via `:PluginUpdate vim-ruby` (for Vundler users).

So next time you see a large spike in your vim setup, profile the slowness away!

BONUS: Also, if your vim's startup time is slow, you can still profile that with:

    $ vim --startuptime time_cost.txt

There you have it! Happy fiddling around with vim!
