---
title: "Create your own `rake console`"
topic: ruby-and-rails
written: 2016-03-28
---

I've been working on small ruby gems lately of the same theme: ruby
wrappers to different kinds of interfaces, be it a RESTful API, SOAP API, or even shell commands.
When I dive into one, I usually find myself wanting to inspect/debug the gem via irb.

That usually required me to find the right set of command options to load the gem properly in irb or do something like this repeatedly:

```ruby
$ cd lib
$ irb
>> require 'gem_name'
=> true
>> # play around with the gem
```

I got tired of the routine that I made a rake task for it:

```ruby
desc "Open irb with this library included"
task :console do
  sh "irb -rubygems -I lib -r gem_name.rb"
end
```

Put that code snippet above in your Rakefile and you're good to go:

```sh
$ rake console
# fires up irb, with `lib` added in the `$LOAD_PATH`, and requires `gem_name.rb`
irb -rubygems -I lib -r gem_name.rb
>> # play around with the gem
```

Happy coding!
