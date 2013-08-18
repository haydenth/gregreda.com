Title: NFL - Do Preseason Outcomes Matter?
Date: 2013-08-13
Slug: preseason
Icon: icon-bar-chart
Abstract: I look at NFL data from 2001-2012 and try to guess whether the preseason matters at all.

Quick Note
-------------
I want to quickly concede that I do believe the pre-season matters for all sorts of reasons, such as player development, and so on. In fact, when you look to predict single player outcomes, preseason performances matters a little bit (controlling for a bunch of variables). I'll make a post about this soonish.

The Data
--------------
So, you can download the data for yourself - it's 2001-2012 regular season and preseason outcomes data. I did some basic QA on it to make sure the totals match and picked random records and they look okay. 

Download it here

Here's a quick snapshot of what we're dealing with:

Wins 
---------------
First question is - does winning a preseason game matter? Do teams that win more preseason games also tend to win more regular season games?  Well, we can look at a quick table:
```
    record counts mean_regular_season_wins sd_reg_wins
       0-4     24                 7.416667    2.827146
       1-3     84                 7.142857    3.062178
       2-2    133                 8.578947    3.067944
       3-1     91                 8.098901    2.902317
       4-0     20                 7.850000    3.616847
```

Well, that's nice. It's nicely approximately normally distributed too, at least in terms of counts. An interesting observation here - teams that go 2-2 tend to have more regular season wins but given how big the standard deviations are (about three games), the effect seems relatively weak. We can confirm this by looking at the correlations between the two sets
```
> cor.test(s$pre_wins, s$wins)

  Pearson's product-moment correlation

data:  s$pre_wins and s$wins 
t = 1.7912, df = 350, p-value = 0.07413
alternative hypothesis: true correlation is not equal to 0 
95 percent confidence interval:
 -0.009317053  0.197866951 
sample estimates:
       cor 
0.09530699 
```

So the correlation is low and the p-value is meh. At least linearly, winning a pre-season game doesn't appear to help much. OK - so wins don't really matter - what about 
