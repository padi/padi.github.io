---
title: Rubymotion Review
---

RubyMotion is a new flavor of the Ruby programming language that runs on iOS. Created by the MacRuby creator and former Apple employee, Laurent Sansonetti, RubyMotion preserves the iOS SDK without needing to go deep into Objective-C. Any iOS documentation and examples that are written in Objective-C are translatable into RubyMotion.

I’ve tried a number of ways to create iOS apps before, including [Corona](http://www.coronalabs.com/) — another layer of APIs on top of iOS SDK, and [Rhodes](https://github.com/rhomobile/rhodes) — an HTML hybrid framework. RubyMotion is different because it is a Ruby reimplementation written in Objective-C with a static compiler that transforms RubyMotion code into machine code optimized for iOS.

![RubyMotion compiles into machine code for iOS](/images/rubymotion-compile-250x80.jpg){:class="img-responsive"}

I will say that RubyMotion is among the best alternatives to develop apps in iOS and may be idea for your circumstances. Let’s look at some of my observations while I was playing with it.

# The Good Parts:
1. RubyMotion AND Objective-C Libraries: Coming from Ruby, I expected that many Ruby developers will eventually create gems for RubyMotion, and in only just a couple of months, they were able to create a lot. But what I did not expect was that you can basically use all the libraries from Cocoapods, the equivalent of RubyGems in Objective-C, and write them in Ruby!
2. Command line + Text editor Workflow: if you’re a fan of this workflow, you’ll probably love this more than using the massive tool that is XCode. Most of the tasks that you’ll ever need will be available in the command line. via motion command and rake tasks. Create a new app? Type `motion create newapp`. Build/run the app? Type `rake` or `rake simulator`. How about running it on a device? Type `rake device`. It’s just that simple.
3. Transfer your Ruby knowledge to iOS: this is something I was able to use earlier in my playing with RubyMotion. This is specially useful when you write domain/business logic, which is most probably in a PORO (Plain Old Ruby Object) in RubyMotion, e.g. Need to match a string against some regular expression? You don’t need to know Objective-C regex, you can just use Ruby regex.
4. Interactive Shell: this is very reminiscent of Google Chrome’s Developer Tools or Firefox’s Firebug. When you run a RubyMotion app, you will get a irb-like shell for RubyMotion. While running the app in the iOS Simulator, hold `⌘` while clicking a UI element in the simulator and you’ll be able to manipulate that element via `self`. The first thing I did with this feature was to rotate a few elements to awkward degrees. Awesome. ![Select a UI element and change its attributes in an instant.](/images/Interactive-Shell.png)
5. Testing: If you’ve been watching the Ruby community (which is highly probable if you’re reading this), you know that testing is an integral part of its culture. RubyMotion uses [MacBacon](https://github.com/alloy/MacBacon), a fork of Bacon, which is a smaller RSpec clone. Here’s an example:
```ruby
describe "RubyMotion App" do
  before do
    @app = UIApplication.sharedApplication
  end

  it "has one window" do
    @app.windows.size.should == 1
  end
end
```
6. Debugging Tool (new) – just a few days ago, while I’m in the middle of fiddling with RubyMotion, the RubyMotion team released their debugging feature which is covered in detail [here](http://www.rubymotion.com/developer-center/articles/debugging/). Simply `rake simulator debug=1` or `rake device debug=1`.

# The Bad Parts
I expect the dust to settle down for most of the issues, but these are the ones I’ve encountered as of this writing:

1. Not the same as Ruby: Being a statically-typed reimplementation of Ruby on top of the Objective-C runtime, RubyMotion carries over some unwanted consequences such as not being able to use the normal rubygems. In general, just keep in mind that RubyMotion is not the same as Ruby. Do not be surprised if you cannot use Bindings, or eval.
2. But still Ruby: There are tradeoffs you will have to deal with when using RubyMotion over Objective-C. Some examples are not being able to contribute to a Cocoapods project, the inability to declare a variable’s type in advance, etc. Just be aware that there are costs in choosing RubyMotion (aside from money) but for the most part, the benefits outweigh them anyway.
3. Documentation: The documentation written for RubyMotion is shallow. RubyMotion will reward you quickly with simple tasks, but once you get to the point where you want to customize something, you will probably spend a lot of time figuring out where to find the resources needed. You will end up searching from the Apple developers’ website itself. Therefore…
4. RubyMotion is not an excuse not to learn reading Objective-C. At some point you will need to read Objective-C code especially if you want to dig deeper into Apple’s iOS SDK documentation or if you are trying to find solutions to your bugs in stackoverflow.
5. If you use some XCode features such as the Interface Builder, you won’t be able to use it out of the box with RubyMotion. It is possible to use it, but coming from zero experience, XCode was just a pain point that got in the way. For now, my preferred way is to use a [DSL similar to CSS](https://github.com/rubymotion/teacup).

# Recommendation:
RubyMotion offers iOS developers the benefits of using Ruby. It also offers Ruby developers an option to transfer their knowledge in Ruby and apply them in creating iOS apps. With a one-time fee of $199 (with one-year software updates and support), it’s worth the money.

As of the moment, I recommend people to use RubyMotion if they belong to these categories:

1. You have a team that is already knowledgeable in Ruby and want to leverage that to quickly create apps in iOS, instead of everyone trying to learn everything from scratch. Writing your first few apps in RubyMotion will definitely help everyone to get up to speed.
2. You’re an iOS developer who wants to get to the next level of productivity that Ruby provides, e.g. testing, mixins, shorter lines of code, DSLs, etc.

For beginners who don’t know Ruby nor iOS SDK, I would probably recommend against using RubyMotion and instead going straight into the traditional way of creating iOS apps. There is no perfectly smooth path when it comes to learning something new, whether it be traditional iOS development or using RubyMotion. When a beginner encounters hiccups, he’ll need all the help he can search from Google, which will probably include solutions mostly written in Objective-C.

With that said, I suggest that you check out [RubyMotion](http://www.rubymotion.com/). Give it a shot and I’m pretty sure you won’t regret it.

Easter Egg: If you’ve already installed RubyMotion, try running`/Library/RubyMotion/bin/sim` from the console.