---
layout: single
title: Migrating Your Capybara Driver from PhantomJS to Headless ChromeDriver
tags: [dev]
status: publish
date:   2017-08-22 9:25:10 +0800
type: post
category: articles
published: true
---

Newsflash: [Vitaly Slobodin, the PhantomJS maintainer, is stepping down](https://groups.google.com/forum/#!topic/phantomjs/9aI5d-LDuNE),
since [Google Chrome version 59 will ship with its own headless option](https://news.ycombinator.com/item?id=14101233).
This means you're going to have to move all your capybara tests from PhantomJS into ChromeDriver.

If you're coming from [poltergeist](https://github.com/teampoltergeist/poltergeist),
which runs PhantomJS, you'lll have to install [selenium-webdriver](https://github.com/seleniumhq/selenium),

{% highlight ruby %}
# Gemfile
group :test do
  gem 'selenium-webdriver'
end
{% endhighlight %}

Then you'll have to install the latest `chromedriver`

    brew install chromedriver

Then register selenium-webdriver as your capybara driver, with chrome as the browser.

{% highlight ruby %}
Capybara.register_driver :headless_chrome do |app|
  capabilities = Selenium::WebDriver::Remote::Capabilities.chrome(
    chromeOptions: { args: %w[headless disable-gpu] }
  )

  Capybara::Selenium::Driver.new(
    app,
    browser: :chrome,
    desired_capabilities: capabilities
  )
end

Capybara.default_driver = :headless_chromium
{% endhighlight %}

For more `chromeOptions`: check the [headless chrome documentation](https://developers.google.com/web/updates/2017/04/headless-chrome#cli).
`disable-gpu` is temporarily required to run headless, but it may not be necessary in the future.
