---
title: "Download files from flaky websites using wget"
topic: shell
written: 2017-04-19
---

I hate slow donwloads. Moreso if I'm download big files (e.g. copying over a huge database from AWS S3.
It hasn't occurred to me until recently that I can use `wget` for that puprose.

    get -O name_of_big_file.format -c https://amazonurl.com/name_of_big_file.format

Also, if you can't be bothered constructing a wget command for each you download, you can use the
[CurlWget](https://chrome.google.com/webstore/detail/curlwget/jmocjfidanebdlinpbcdkcmgdifblncg?hl=en) plugin for Google Chrome.
