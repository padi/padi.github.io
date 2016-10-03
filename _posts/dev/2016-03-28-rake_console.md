---
layout: single
title: Create your own `rake console`
tags: [dev, ruby, quicktips, til]
status: publish
date:   2016-03-28 5:33:13 +0800
type: post
category: articles
published: true
---

I've been working on small ruby gems lately of the same theme: ruby
wrappers to different kinds of interfaces, be it a RESTful API, SOAP API, or even shell commands.
When I dive into one, I usually find myself wanting to inspect/debug the gem via irb.

That usually required me to find the right set of command options to load the gem properly in irb or do something like this repeatedly:

{% highlight ruby %}
$ cd lib
$ irb
>> require 'gem_name'
=> true
>> # play around with the gem
{% endhighlight %}

I got tired of the routine that I made a rake task for it:

{% highlight ruby %}
desc "Open irb with this library included"
task :console do
  sh "irb -rubygems -I lib -r gem_name.rb"
end
{% endhighlight %}

Put that code snippet above in your Rakefile and you're good to go:

{% highlight sh %}
$ rake console
# fires up irb, with `lib` added in the `$LOAD_PATH`, and requires `gem_name.rb`
irb -rubygems -I lib -r gem_name.rb
>> # play around with the gem
{% endhighlight %}

Happy coding!
