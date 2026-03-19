---
layout: single
title: "Hyperfine: Your Benchmarking One-liner"
tags: [dev, til, performance]
status: publish
date: 2026-03-19 11:46:00 +0800
type: post
category: articles
published: true
---

If you were ever curious how long a command takes, do this in your terminal:

`time [the thing you wanted to test]` , for example:

```bash
$ time sleep 1
sleep 1  0.00s user 0.00s system 0% cpu 1.013 total
```

I already know that and even wrote some casual (but painstakingly hard to read)
benchmarking bash scripts, but I wanted to know if there a non-bash ways to reliably
test a command or script a few times, find the mean, outliers, etc.

Enter `hyperfine`:

```bash
$ hyperfine --warmup 1 --runs 5 "sleep 1"
Benchmark 1: sleep 1
  Time (mean ± σ):      1.016 s ±  0.003 s    [User: 0.002 s, System: 0.004 s]
  Range (min … max):    1.013 s …  1.020 s    5 runs
```

And it does basically how it reads: execute the command 1 times as warmup, and runs
5 times,takes the mean and outlier times.

And installation can be done in many ways e.g.

```bash
# Using cargo
cargo install hyperfine

# Using mise and lock version to mise config
mise use -g cargo:hyperfine@latest

# Using apt
sudo apt install hyperfine

# Using nix flakes
nix profile add nixpkgs#hyperfine
```

That's it!

P.S. I've been loving [mise-en-place](https://mise.jdx.dev/) and has completely
replaced [asdf](https://asdf-vm.com/)
as an all-around version manager for me. Try it out too!
