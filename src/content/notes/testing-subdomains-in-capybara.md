---
title: "Testing Subdomains in Cabybara"
topic: testing
written: 2017-08-22
---

TL;DR: Change `Capybara.app_host` in a setup and teardown mechanism in your favorite testing framework.
You can also create a method that temporarily changes the host around a `yield`-ed block, i.e.

```ruby
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
```
