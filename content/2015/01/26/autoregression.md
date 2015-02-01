Title: Statistics on Auto-Regressive Data Gives Me Feels
Date: 2015-01-26
Slug: autoregression
Icon: fa-soccer-ball-o
Status: Draft
Tags: data analysis, randomness, football, weather
Abstract: I complain about a statistical thing I see a lot lately. Taking some arbitrary distribution and looking at outliers and citing a specific probability. Particularly egregious when the outlier is an aggregate of an autoregressive (time series) data set.

The Problem
---------------------------
Two articles have been making the rounds this week. 

* [The New England Patriots Prevention of Fumbles is Nearly Impossible](http://www.sharpfootballanalysis.com/blog/?p=2932). Sharp looks at the number of fumbles / total plays the Patriots had in 2010-14 and fits it to a Normal Distribution. He then argues that this is a statistical improbability (or perhaps it's the data scientist at nflproject.com) that does this.
* [Big Blizzards Have Become More Common in New York](http://fivethirtyeight.com/features/big-blizzards-have-become-more-common-in-new-york/) Sexy data dream boy Nate Silver posts about how the current run of snowstorms has a probability of occuring 0.2 percent of his simulations. He's not as dramatic in his claims of impossibility but he does cite this as an argument for increasing frequency of storms.

The shared thread is the following process:

* Take some data, in both cases something "kinda time series" - 5 year aggregates in the football case and record weather data in the Nate Silver case.
* Do something to make it more normal: either bootstrap or fit to a distribution. Usually a process that **reduces** variance
* Find an outlier 
* Sum up the density less than the outlier. Take 1 - that value. You'll get something small.
* Declare this a statistical oddity, get press everywhere.

The Data
--------------------------
Download my data sets below, if you want to play around with it:

* [Historic KNYC Weather Data](|filename|/data/export.csv)
* [Historic Snowfall Records - Central Park](http://www.erh.noaa.gov/okx/climate/records/biggestsnowstorms.html)


Bootstrapping
--------------------------
Here's the process Nate Silver does to get his number:

*I set up a simple simulation to test this. From Jan. 1, 1869, through this past Sunday, 53,350 days elapsed. Of those, 5,502, or about 10 percent, have occurred since Jan. 1, 2000. So in each simulation, I assigned each of the 10 snowiest days a 10 percent chance of having occurred since 2000. In only 0.2 percent of the simulations (out of 1 million trials) did I wind up with at least five of these days having occurred since 2000.*

So, let's first duplicate his simulation. The code is Mathematica. General idea is to make a set of 53,350 days and draw 10 "snowiest" days from there. Then count the days in the top 10% to see how often we observe 5 or more snow days in this range. We'll get a number almost exactly equal to his along with a pretty histogram:
```
DaySet=Table[i,{i,1,53350}]
SimulateSnowyDays:=Count[RandomSample[DaySet,10], x_/;x<=5502]
SimulatedData=Table[SimulateSnowyDays,{1000000}];
Histogram[SimulatedData,{1},
  PlotLabel->"Histogram of Simulated Snowy Days > 2000",
  AxesLabel->{"# of Days > 2000", "Counts"}]
1.-CDF[EmpiricalDistribution[SimulatedData],4]
```

Gives the result of 0.1912% (close to his 0.2%) and a histogram: <br>

![Distribution of Simulation](|filename|/images/nate_silver_simulation.png)

Cool. So our simulations match. We've pretty must just confirmed that "the fact that New York has had so many record-setting snowfalls recently probably isn’t just a coincidence or a fluke.", right? I'm not so sure.

What's Happening
-------------------------
We're taking a process, weather or football, for instance. Then, we're assuming this process acts randomly and independently. Then we run a simulation repeating the process, making draws using this assumption. In the case of record snowfalls, our actual 10 top snowfalls are distributed like this:

![Distribution of Records](|filename|/images/singleday.png)

He only considers the top 10, but the top 17 (full record data from the NOAA) look like:
![Distribution of Records](|filename|/images/top17.png)


In the case of annual snowfalls, it looks a lot like Nate's graph:

And then we're assuming that each datapoint is completely independent from other data points, combining them into a single set and then computing a test statistic. In the case above, it's the # of times we drew 5 record snowfalls after 2000. My complaint with this method, particularly with time series data, is that the data is almost always auto-regressive (ie the current year is a *function of* the prior year).
