---
title: "Pomo.sh - Stupidly Simple Pomodoro on macOS"
topic: shell
written: 2016-10-04
---

One day, I was busy at work and found myself working on a macOS
workstation that doesn't have any pomodoro app. While looking for
apps online, an interesting idea came to mind: if I just lower
my requirements for a pomodoro app just for today, it shouldn't
be that difficult to create a shell script that takes advantage of 
`sleep` and some applescript code that creates a notification
on macOS, the only thing I needed to look for was the proper
command. After a few minutes of distraction, I came up with this:

```sh
#!/bin/bash
osascript -e "display notification with title \"Start Pomodoro!\" sound name \"Hero.aiff\"" && \
  sleep 1500 && \
  osascript -e "display notification with title \"Pomodoro Break!\" sound name \"Hero.aiff\"" && \
  sleep 300 && \
# sleep 900 &&\ # Uncomment for long breaks;
  osascript -e "display notification with title \"Pomodoro Break Done!\" sound name \"Hero.aiff\""
```

You can even make it slightly better by adding a timer. I'm currently using `pv`,
which does a lot more than just measuring the time elapsed, but let's get into it, shall we?

```sh
#!/bin/bash
osascript -e "display notification with title \"Start Pomodoro!\" sound name \"Hero.aiff\"" && \
  (sleep 1500 | pv --timer) && \
  osascript -e "display notification with title \"Pomodoro Break!\" sound name \"Hero.aiff\"" && \
  (sleep 300 | pv --timer) && \
# (sleep 900 | pv --timer) &&\ # Uncomment for long breaks;
  osascript -e "display notification with title \"Pomodoro Break Done!\" sound name \"Hero.aiff\""
```

Copy this file as `pomo.sh`, make it an executable with `chmod +x pomo.sh`, and voila,
you now have a stupidly simple pomodoro timer!

I bet this can be done better but this is already a big win for such a short script!
