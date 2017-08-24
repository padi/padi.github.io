---
layout: single
title: Use HTML/CSS/JS plugins for VueJS files
tags: [til]
status: publish
date:   2017-08-24 11:31:00 +0800
type: post
category: articles
published: true
---

Often vim plugins and configs activate for a certain `filetype`, so set
your `filetype` in the current buffer. For example, I want currently want to use
html highlighting and omni completion for `.vue`, you can do this in your `.vue` file:

{% highlight vim %}
setlocal filetype=vue.html
{% endhighlight %}

Even better, you can use `autocmd` so that you don't have to type it yourself
every time you start editing a .vue file:

{% highlight vim %}
autocmd BufRead,BufNewFile *.vue setlocal filetype=vue.html
{% endhighlight %}

Word of warning though: Some plugins will scan through the whole files that might
raise false alarms (e.g. linters). So doing something like this can cause problems:

{% highlight vim %}
setlocal filetype=vue.html.css.javascript
{% endhighlight %}

This can be useful for quick, one-off tasks like indentation.

I'll update as soon as I get better a better way of handling this,
but I really like the no-vim-plugin solution for now.
