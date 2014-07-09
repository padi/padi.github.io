---
layout: post
title: Fix Slow Terminal Loading Time
tags: [dev, security, ruby]
status: publish
date:   2014-07-09 23:33:13 +0800
type: post
category: articles
published: true
---

Occasionally, my terminal becomes slow because I'm running out of memory.
What I usually do close the most memory consuming tasks from the Mac OS X's
Activity Monitor.

This time though, my terminal has become ridiculously slow
without my system memory nor CPU maxing out. I resisted fixing it because I
was still working but I finally got fed up when it starting taking
5-10 seconds after each new shell session/tab.

Luckily, I wasn't the only one who experienced the same thing in the past.
As [OSX Daily points out](http://osxdaily.com/2010/05/06/speed-up-a-slow-terminal-by-clearing-log-files/),
the terminal looks for *.asl (Apple System Log) files from `private/var/log/asl/` folder.
The short term solution is to delete those files from time to time.

{% highlight sh %}
# Do not skip this step
cd /private/var/log/asl

# Check all the Apply System Log files first
# you can optionally look into how large these files are
# or look inside if you want to investigate further
ls *.asl

# Safely delete .asl files
sudo rm *.asl
{% endhighlight %}

You can also do this in a one-liner command, but a little exercise of
caution wouldn't hurt. You don't want to accidentally autocomplete
into different directory and delete files that you really don't want to delete!

*Remember: always be on guard whenever you do something destructive in your terminal.*

