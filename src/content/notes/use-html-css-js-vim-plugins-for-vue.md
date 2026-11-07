---
title: "Use HTML/CSS/JS plugins for VueJS files"
topic: vim
written: 2017-08-24
---

Often vim plugins and configs activate for a certain `filetype`, so set
your `filetype` in the current buffer. For example, I want currently want to use
html highlighting and omni completion for `.vue`, you can do this in your `.vue` file:

```vim
setlocal filetype=vue.html
```

Even better, you can use `autocmd` so that you don't have to type it yourself
every time you start editing a .vue file:

```vim
autocmd BufRead,BufNewFile *.vue setlocal filetype=vue.html
```

Word of warning though: Some plugins will scan through the whole files that might
raise false alarms (e.g. linters). So doing something like this can cause problems:

```vim
setlocal filetype=vue.html.css.javascript
```

This can be useful for quick, one-off tasks like indentation.

I'll update as soon as I get better a better way of handling this,
but I really like the no-vim-plugin solution for now.
