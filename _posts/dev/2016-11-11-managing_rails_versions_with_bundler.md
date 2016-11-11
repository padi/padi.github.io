---
layout: single
title: Managing Rails Versions (with Bundler)
tags: [quicktips, til, dev]
status: publish
date:   2016-11-11 5:10:10 +0800
type: post
category: articles
published: false
---

The first ruby version manager I used, rvm, used gemsets in order to manage multiple rails versions.
Upon switching to rbenv, I did not rely on gemsets and often generated rails versions via:

```ruby
gem list rails # check for locally installed gems with the keyword 'rails', including versions installed
rails _version_ new testapp
```

If you don't use multiple rails versions frequently, this shouldn't be much of an issue and line above
should suffice. But recently, I've been creating multiple new rails apps for practice
and verifying rails' default behavior (for debugging) that I decided to look for a better workflow.
