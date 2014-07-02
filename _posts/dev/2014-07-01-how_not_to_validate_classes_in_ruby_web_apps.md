---
layout: post
title: How NOT to Validate Classes in Ruby Web Apps
tags: [dev, security, ruby]
status: publish
date:   2014-07-01 23:33:13 +0800
type: post
category: articles
published: true
---

If you're a rails developer, you've probably seen code that looks like this:

{% highlight ruby %}
class SomeModel < ActiveRecord::Base
  validates :email, presence: true, format: REGEXP_FROM_GOOGLE
  validates :username, presence: true, format: /^\D\w*$/
end
{% endhighlight %}

What usually happens here is whenever you don't know the regex for pretty common
attributes like email, you'll most likely rely on the first few results from google
to replace `REGEXP_FROM_GOOGLE`. For example: [this](http://www.regular-expressions.info/email.html) came up as my first search result for
the term 'email regex'. Here's a sample taken from that page:

{% highlight ruby %}
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
{% endhighlight %}

This is good for most languages, *except* in ruby. Let's see why:

{% highlight sh %}
# setup
> email_regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

> "some invalid email" =~ email_regex
=> nil # That's expected, since it's not an email.

> "some_valid@email.com" =~ email_regex
=> 0 # Hurrah, it matches!

> "something@email.com\n<script>dangerous script</script>" =~ email_regex
=> 0 # Whoops! This should not match!
{% endhighlight %}

2 things are at play here:

1. A lot of people use *line* anchors `^` and `$` to enclose their regex,
   which is* used in a lot of rails tutorials/blogs/code samples.
   Usually, in other languages, the same `email_regex` will not accept
   `"something@email.com\n<script>dangerous script</script>"`. However...

2. Ruby regexes default to multiline mode.

And the latter reason is what trips most people up, including me.

To avoid this, you should just replace the line anchors `^` and `$` with
string anchors `\A` and `\z`.

Fortunately, according to the most recent [rails security guide on regexes](http://guides.rubyonrails.org/security.html#regular-expressions),
rails will now raise an exception when you use `^` and `$` in ActiveRecord's format validator (validates_format_of).

Unfortunately, not everyone has read that part of the ralis documentation guide yet,
and not everyone is using the latest rails. Maybe other ORMs haven't even caught up with
ActiveRecord yet. It will take some time before people will notice this issue.

It's good to know that some good books like
[Hartl's Rails Tutorial](http://www.railstutorial.org/book/modeling_users#sec-format_validation)
have already adopted new regex examples. Hopefully, there
will be less incoming rails developers that will use less secure regexps.
