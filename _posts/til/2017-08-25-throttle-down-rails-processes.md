---
layout: single
title: Throttle Down Rails Processes
tags: [til]
status: publish
date:   2017-08-25 10:37:00 +0800
type: post
category: articles
published: true
---

TL;DR: You can use [renice](http://man7.org/linux/man-pages/man1/renice.1.html).
For each process named `process{n}`, you can write something like

```
#!/bin/sh
renice +15 -p `ps ax | grep -E 'process1|process2|...|processn' | grep -v grep | awk '{print $1}' | tr 'n' ' '`
```

For your typical rails app, write a file named `renice-rails` with the
following content:

```
#!/bin/sh
# filename: renice-rails
renice +15 -p `ps ax | grep -E 'ruby|node' | grep -v grep | awk '{print $1}' | tr 'n' ' '`
```

As for my case, [listen or rb-fsevent gem is eating my CPU](https://github.com/rails/rails/issues/26158),
which is still an open Rails issue, you could try:

```
#!/bin/sh
# filename: renice-rails
renice +15 -p `ps ax | grep 'rb-fsevent' | grep -v grep | awk '{print $1}' | tr 'n' ' '`
```

Add it somewhere in your `$PATH` folders, `chmod +x renice-rails`, run `renice-rails`
and you're off to a good day of writing code!

Reference: [OS X: throttle application CPU utilization](https://tinyapps.org/blog/mac/201107230700_throttle_process_os_x.html)
