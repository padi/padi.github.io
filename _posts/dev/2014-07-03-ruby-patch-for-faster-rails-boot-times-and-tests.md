---
layout: post
title: Faster Rails Boot Times (and Tests)
tags: [dev, security, ruby]
status: publish
date:   2014-07-01 23:33:13 +0800
type: post
category: articles
published: false
---

I've been in a number of rails projects, but the one I'm
currently handling right now has about 200+ models --- the biggest
rails project I've seen so far.

I've been thinking of ways to make our rails app boot faster
our daily work more productive. If you're debugging and/or
running unit tests iteratively, it can be a huge pain in the ass
to load the whole development environment every single time!
In fact, I'd go as far as saying slower tests will demotivate
programmers and it will encourage less test runs.

Yes, you can [tinker your code](http://www.fngtps.com/2013/fast-test-suite-boot-times-with-ruby-on-rails/)
or your test setup (e.g. see which dependencies in your Gemfile you can require at a later time)
but that should be your last step. Consider first the tasks that will
[yield the most results with least amount of effort](http://en.wikipedia.org/wiki/Pareto_principle).

Here are the top 2 tips that will decrease your waiting time by more than 50% but will only take up to 15 minutes:

## Install railsexpress ruby patch

## Install a rails preloader gem e.g. zeus

