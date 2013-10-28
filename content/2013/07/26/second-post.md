Title: New Website (tomhayden3.com v3)
Date: 2013-07-26
Slug: new-website
Icon: fa-undo
Abstract: I introduce my new website, born through shame about my old one. I talk about how I built it and some of the challenges I encountered.

Every ten years or so, I feel the urge to re-do my website.  Mostly, this is due to my old website being an embarassment - see screenshot below.

![The old site](|filename|/images/oldsite.png)

The old site was alright. It was super blocky and had a picture of a dinosaur in the corner. I think I originally made it sometime around 2003-2004 when I was at Michigan State. It was all terrible PHP with a Wordpress backend that would occasionally get hacked and post a bunch of spam posts about Viagra. I'd have to manually delete all the comments from the database every few months.  I even memorized the SQL to do it:

```
DELETE FROM wp_comments WHERE comment_approved = 0
```

While it was an improvement over v1 (Tommy Hayden's Homepage on Geocities - no screenshots available), my coworkers told me it's an embarassment. So, new website time! I had a few requirements this time:

* I needed some kind of non-wordpress blogging system that wouldn't be hacked every few months
* I need it to look like it was built by an adult and not a child or spam engine, so I could reference it in future job applications
* I wanted it to be statically hosted on S3 - I pay Dreamhost for PHP hosting
* I wanted to have [Google's Code Prettifier](https://code.google.com/p/google-code-prettify/)
* I want a way to easily include math characters via some kind of LaTeX plugin

It seemed like I could accomplish most of these feats by using some of my colleague [Greg Reda](http://www.gregreda.com)'s site, which he so kindly posted to GitHub. 
