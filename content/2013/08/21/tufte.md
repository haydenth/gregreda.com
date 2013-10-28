Title: Tufte Data Viz Talk Review / Thoughts
Date: 2013-08-21
Slug: tufte
Icon: fa-thumbs-up
Abstract: I went to a one-day data visualization conference put on by Edward Tufte in Chicago. I quickly collect my thoughts and review the conference. I recommend it to data nerds and managers. Design folks might not enjoy it as much because they will be familiar with the content.

[My employer](http://www.grubhub.com) was kind enough to send me to one of [Edward Tufte's one-day data visualization courses](http://www.edwardtufte.com/tufte/courses). I wasn't sure what I'd get out of it but I was a little freaked out at reading some of the [bad reviews](http://eagereyes.org/criticism/edward-tufte-one-day-course).

I don't have much experience with data visualization, besides a little experience with ggplot2. I can do basic plots but I know next to nothing of the theory or general ideas about visualization. I consider myself a data guy and definitely not a designer. But I do have a general interest in becoming a better designer and a general love for good design. In high school, I worked at a map store and I used to spend hours gazing at the awesome design of some maps.

Itinerary
-------------
The basic plan for the 1 day course is:

* 8am: Doors Open
* 8am-10am: Drink Coffee, Read your books, meet the man himself.
* 10am-1:15pm: First round of conference talk, get really hungry.
* 1:15pm-2:30pm: Lunch on your own
* 2:45pm-4:00pm: Second round of talk, this was more informal

Also, you get a nice set of four of his books, which are insanely high quality and will have a new home on my coffee table. 

Topics
-------------
Tufte covered the following high level topics in the sessions:

* Good (not totally obvious!) examples of data presentation.
* His ideas (and Bezos' ideas) about how to conduct a data driven meeting or presentation.
* His disdain for powerpoint - I'll touch on this later.
* Tips for being critical and things to watch out for when you're a data consumer, particularly looking out for cherry picking.
* Tips for dealing with criticism and people's motives. (Trust their motives despite your emotional response - this is generally great business advice)
* Tips for being a data presenter (Show up early, end early)
* Tips for collecting data and validating it. (Go to the physical locale of your data generation, if you can)
* His dislike for proprietary formats (Preaching to the choir, here!)
* Some experimental ideas about using HD formats for data visualization. I don't know if his ideas here are fully realized but it was an interesting (and relatively brief) thought experiment into the future.

He certainly covered a lot of ground - from Powerpoint to psychology.

What I walked away with
------------------
I walked away from the talk with a single idea that he didn't express but he sort-of did through his thoughts on various data viz things. At one point, he mentioned what his favorite fiction and non-fiction data visualizations were - he cited Pixar as an example of good fiction data viz. Towards the of the first half, he talked about using HD video and videos of waves as a way to visualize data. He also spent some time talking about going out into the "real world" more often to observe reality. Combined with his anti Powerpoint sentitment (which I agree with), I walked away with a continuum model of data representation:

```
|---low bandwidth ---------- mid bandwidth --------- high information content----------reality--|
    powerpoint
    pie charts
      powerpoint with pie charts
            line charts / bar plots
                   newspaper articles
                         box scores
                            articles w/sparklines
                                   |------- variety of other GOOD vis ----|
                                                             HD video waves?
                                                                                        outside
              
```
He tells us, the human eye/brain can parse about 20 megabytes per second. Yet, in most corporate settings, we're underutilizing what is one of our most valuable assets. We do this in many ways - poorly organized meetings and abuse of powerpoint. In some ways, his talk was a plea to the corporate and government types: make decisions only after consuming high density content that tells the complete story and demand that your underlings produce this type of good reporting. Have confidence in you and other's ability to interpret complex data presented visually.

Random side note: This is completely contrary to a course I took on government writing in Grad School. Learnings in that class were: everything should be bullet points, avoid sentences, simple graphics. I tend to write like that now - keep it short and make your point. He was arguing quite the opposite, which is why I am glad his target demographic here are managers and government officials. However, there is quite a long way to go.

A continuum model like this is common more generically - a model will live somewhere along a continuum between barely representing reality and a complete model of reality. I had never considered this in the context of presentation or human bandwidth. So to that end, I found this talk eye opening on a theoretical level. Practically and technically, I have yet to see this manifest but any good practical application starts with good theory! 

Who Should Go
------------------
If you're a data analyst or a data worker of some kind - you will enjoy this. More importantly, I think you need to __send your managers__. We live in a world where manager demand bullet points and pie charts - simple information that tells the (often wrong) story.  The "Unknown unknowns" remain unexplored and bad decisions are made on relatively good but poorly presented content. For most managers who are asking "there is too much data, what do?" or "How do I make the right decision, given the firehose of data and pie charts?" - this is the talk for you.

However, if you're a designer, you might find some of this to be old hat. If I was at a talk on regression, for example, and the speaker spent considerable time talking about overfitting or simpson's paradox, I might get annoyed. I suspect this is what has lead to a lot of the bad reviews I've seen online - designers complaining that it wasn't telling them anything new. My response? This conference isn't for you, it's for your manager - so send them.
