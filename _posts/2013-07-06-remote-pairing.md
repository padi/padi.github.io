---
layout: post
title: Remote Pair Programming - @rtayag
tags: [remote, pair programming]
status: publish
date:   2013-06-07 23:59:13 +0800
type: post
category: articles
published: true
---

Last Thursday night, I had my first attempt at remote pair programming with Ramon
([@rtayag](http://twitter.com/rtayag)), a colleague of mine. I didn't have a particular
project to work on that night but I was ready to hack on anything for fun.

The project we decided to work on was personal project called [liquid_stream](https://github.com/ramontayag/liquid_stream),
something that he uses for his web app [stiltify.com](http://get.stiltify.com/pages/home).

We didn't do much pairing at all since the gem wasn't published until during the pairing session.
Good thing I had some superficial knowledge of how Shopify's [liquid template engine](https://github.com/Shopify/liquid),
so I didn't have to start from scratch. We spent most of the
session just explaining a bit of his feature requirements, how
[Shopify's gem doesn't support it out of the box](https://github.com/shopify/liquid/issues/29),
and how liquid_stream solves this.

#### The good stuff:
* **Google+ hangouts are awesome.** With a lot teleconferencing tools we used at work (usually depends on client),
  Google+ stood out since it just felt faster than Skype and it's a lot easier to setup. If we will organize an
  online event, it is likely that we will use Google+.
* **[tmate.io](http://tmate.io/) is perhaps the easiest way to connect to someone's terminal.** TL;DR: It's like
  [tmux](http://tmux.sourceforge.net/) but safer than handing out your computer's IP address. :)
* It was pretty encouraging to work with Ramon outside of the office. He's one of the few local software developers
  that can express technical detail (or anything really) with clarity, and that continues outside of work.

#### The things we could've done better:
* **Pick on a project in advance** we spent some time figuring out what to work on because we didn't announce the projects/topics to work on in advance.

* **Make sure your computer/laptop is ready for use when the actual pair session begins** -
  as if [Murphy's Law](http://en.wikipedia.org/wiki/Murphy's_law) was poking fun at me, my
  internal speakers and mic died that same night. I didn't have the luxury to troubleshoot, so I
  downloaded the Google+ Hangouts app on my iPad. Although it helped that my laptop was running less resources,
  I could've started checking if my setup was ready to go a few minutes earlier.

Oh! I almost forgot to mention:
although we weren't able to push new code during that night, I was able to merge a
[pull request](https://github.com/ramontayag/liquid_stream/pull/1) that
completes the basic feature set of the app. Awesome.

*****

#### Notes:
* Pair Programming is the software development technique in which two programmers work with one computer screen.
* Remote pair programming, simply put, is pair programming with chat.
* PHRUG - [Philippine Ruby Users Group](http://pinoyrb.org/)
