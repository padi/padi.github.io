---
layout: single
title: Kill All Spring Processes
tags: [dev, til]
status: publish
date:   2017-09-14 12:03:10 +0800
type: post
category: articles
published: true
---

If you're an active Rails user in multiple projects like me, you'll
probably would've noticed that at some point, you forgot to turn off
[spring](https://github.com/rails/spring) in those projects. I wouldn't
blame you if you haven't noticed, because it supposed to just work in the
background. `ps aux | grep spring | grep -v spring` now to check which
spring processes are running:


{% highlight bash %}
$ ps aux | grep spring | grep -v spring
marc             22355   0.0  0.2  2476536  18636 s001  S    11:53AM   0:00.35 spring server | sample-rails-app | started 59 secs ago
marc             22356   0.0  0.2  2476537  18636 s001  S    11:54AM   0:00.35 spring server | sample-rails-app-2 | started 13 secs ago
{% endhighlight %}

Turning them all off is nothing fancy, really. It's just a one-liner in bash:

In a Rails project, I put this code in `scripts/kill_spring` file

{% highlight bash %}
!/usr/bin/env bash
ps aux | grep spring | grep -v 'grep' | awk '{print $2}' | xargs kill
{% endhighlight %}

Save the file, `chmod +x scripts/kill_spring` and now all it takes to kill them all is `scripts/kill_spring`.

You can also choose to add this somewhere in `PATH` as well so you could execute from anywhere in the terminal.
