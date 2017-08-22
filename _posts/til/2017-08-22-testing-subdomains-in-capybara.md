---
layout: single
title: Testing Subdomains in Cabybara
tags: [til]
status: publish
date:   2017-08-22 3:47:00 +0800
type: post
category: articles
published: true
---

TL;DR: Change `Capybara.app_host` in a setup and teardown mechanism in your favorite testing framework.
You can also temporarily change the host in a block, i.e.

{% highlight ruby %}
# test/application_system_test_case.rb
Capybara.configure do |config|
  config.always_include_port = true
end

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  def using_app_host(host)
    original_host = Capybara.app_host
    Capybara.app_host = host
    yield
  ensure
    Capybara.app_host = original_host
  end
end

class LoginToSubdomain < ApplicationSystemTestCase
  test 'login to subdomain' do
    # *.lvh.me just goes back to localhost
    # `config.always_include_port = true` will ensure port is included in requests
    using_app_host('http://something.lvh.me:43000') do
      visit '/login' # visits to http://something.lvh.me:43000/login
    end
  end
end
{% endhighlight %}
