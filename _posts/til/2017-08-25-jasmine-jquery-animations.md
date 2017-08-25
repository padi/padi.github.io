---
layout: single
title: Testing jQuery animations in Jasmine
tags: [til]
status: publish
date:   2017-08-25 2:42:00 +0800
type: post
category: articles
published: true
---

The simplest, and fastest way is to simply ignore the animations with setting `jQuery.fx.off = true`
and checking for whatever the final result is:

{% highlight javascript %}
describe('container', function () {
  var container;

  beforeEach(function() {
    jQuery.fx.off = true; // don't wait for animations
    container = $('#some-container-with-animation');
  });

  afterEach(function() {
    jQuery.fx.off = false;
  });

  it('toggling a container with jQuery animation', function () {
    container.toggle('fast');
    expect(container).toBeHidden();
  });
});
{% endhighlight %}

In the examle, we're not testing the animation per se, but we're testing that the `container`
has been hidden.
