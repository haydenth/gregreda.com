Title: 1 out of 16,233 odds for Pats Fumbles is BS
Date: 2015-01-24
Slug: patriots
Icon: fa-soccer-ball-o
Tags: football, patriots, data analysis
Abstract: I break down an analysis that claimed the Patriots have a 1 in 16,233.77 likelyhood of observing the number of fumbles they had in 2010-2014. Another blogger declared this as "impossible" - I attempt to show the core assumption is flawed.

The Problem
---------------------------
First, go read this article by Warren Sharp: [The New England Patriots Prevention of Fumbles is Nearly Impossible](http://www.sharpfootballanalysis.com/blog/?p=2932). Sharp looks at the number of fumbles / total plays the Patriots had in 2010-14 and fits it to a Normal Distribution. He then argues that this is a statistical improbability (or perhaps it's the data scientist at nflproject.com) that does this.

For those not aware or reading this years from now - this is in regard to an event called [Deflategate](http://en.wikipedia.org/wiki/DeflateGate) or as I know it "ballghazi". I'll let the reader decide which name is best.

Final note: I have no skin in this game - I am a lions fan / sufferer. Just a statistics nerd.

**I claim the following: Fitting this data to a normal distribution is non-sense. **

The Data
--------------------------
Download my data sets below, if you want to play around with it:

* [2010-2014 (Team, Season) Fumble Data](|filename|/data/export.csv)

You should be able to roll that up to the aggregates.

If you find any issues, email me.

Normal Distribution is Wrong
--------------------------
Let's recall their claim:
*"Based on the assumption that fumbles per play follow a normal distribution, you’d expect to see, according to random fluctuation, the results that the Patriots have gotten over this period, once in 16,233.77 instances”*

We can take a look at their data, which is all NFL teams 2010-2014 total number of *lost* fumbles divided by total number of *plays*. We can replicate Sharp's data with a plot that matches his and initially makes NE look *really bad*

![Lost Fumbles](|filename|/images/lostfumbles.png)

And a data table:
<table class='Output'>
  <tr>
<th>Team</th>
<th>Games 2010-14</th>
<th>Total Offensive Plays</th>
<th>Total LOST fumbles</th>
<th>Fumbles / Plays</th>
</tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>NE</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5470.</span></td>
  <td style='text-align: center;'><span>30.</span></td>
  <td style='text-align: center;'><span>182.333</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>NO</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5425.</span></td>
  <td style='text-align: center;'><span>39.</span></td>
  <td style='text-align: center;'><span>139.103</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>HOU</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5316.</span></td>
  <td style='text-align: center;'><span>39.</span></td>
  <td style='text-align: center;'><span>136.308</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>ATL</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5250.</span></td>
  <td style='text-align: center;'><span>39.</span></td>
  <td style='text-align: center;'><span>134.615</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>GB</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5105.</span></td>
  <td style='text-align: center;'><span>39.</span></td>
  <td style='text-align: center;'><span>130.897</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>BAL</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5207.</span></td>
  <td style='text-align: center;'><span>41.</span></td>
  <td style='text-align: center;'><span>127.</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>CLE</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5037.</span></td>
  <td style='text-align: center;'><span>41.</span></td>
  <td style='text-align: center;'><span>122.854</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>JAC</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5023.</span></td>
  <td style='text-align: center;'><span>43.</span></td>
  <td style='text-align: center;'><span>116.814</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>SF</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>4877.</span></td>
  <td style='text-align: center;'><span>43.</span></td>
  <td style='text-align: center;'><span>113.419</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>SEA</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>4935.</span></td>
  <td style='text-align: center;'><span>45.</span></td>
  <td style='text-align: center;'><span>109.667</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>MIN</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>4984.</span></td>
  <td style='text-align: center;'><span>46.</span></td>
  <td style='text-align: center;'><span>108.348</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>CHI</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>4931.</span></td>
  <td style='text-align: center;'><span>47.</span></td>
  <td style='text-align: center;'><span>104.915</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>STL</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>4993.</span></td>
  <td style='text-align: center;'><span>48.</span></td>
  <td style='text-align: center;'><span>104.021</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>IND</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5277.</span></td>
  <td style='text-align: center;'><span>51.</span></td>
  <td style='text-align: center;'><span>103.471</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>SD</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5144.</span></td>
  <td style='text-align: center;'><span>50.</span></td>
  <td style='text-align: center;'><span>102.88</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>CAR</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5008.</span></td>
  <td style='text-align: center;'><span>49.</span></td>
  <td style='text-align: center;'><span>102.204</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>CIN</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5192.</span></td>
  <td style='text-align: center;'><span>51.</span></td>
  <td style='text-align: center;'><span>101.804</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>OAK</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5081.</span></td>
  <td style='text-align: center;'><span>51.</span></td>
  <td style='text-align: center;'><span>99.627</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>DET</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5429.</span></td>
  <td style='text-align: center;'><span>55.</span></td>
  <td style='text-align: center;'><span>98.709</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>DAL</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5072.</span></td>
  <td style='text-align: center;'><span>52.</span></td>
  <td style='text-align: center;'><span>97.538</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>ARI</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>4972.</span></td>
  <td style='text-align: center;'><span>52.</span></td>
  <td style='text-align: center;'><span>95.615</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>MIA</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5052.</span></td>
  <td style='text-align: center;'><span>53.</span></td>
  <td style='text-align: center;'><span>95.321</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>KC</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5091.</span></td>
  <td style='text-align: center;'><span>54.</span></td>
  <td style='text-align: center;'><span>94.278</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>NYJ</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5223.</span></td>
  <td style='text-align: center;'><span>57.</span></td>
  <td style='text-align: center;'><span>91.632</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>TEN</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>4799.</span></td>
  <td style='text-align: center;'><span>53.</span></td>
  <td style='text-align: center;'><span>90.547</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>WAS</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5141.</span></td>
  <td style='text-align: center;'><span>57.</span></td>
  <td style='text-align: center;'><span>90.193</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>PIT</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5122.</span></td>
  <td style='text-align: center;'><span>59.</span></td>
  <td style='text-align: center;'><span>86.814</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>NYG</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5105.</span></td>
  <td style='text-align: center;'><span>60.</span></td>
  <td style='text-align: center;'><span>85.083</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>TB</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>4847.</span></td>
  <td style='text-align: center;'><span>57.</span></td>
  <td style='text-align: center;'><span>85.035</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>BUF</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5065.</span></td>
  <td style='text-align: center;'><span>62.</span></td>
  <td style='text-align: center;'><span>81.694</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>DEN</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5348.</span></td>
  <td style='text-align: center;'><span>67.</span></td>
  <td style='text-align: center;'><span>79.821</span></td>
 </tr>
 <tr style='vertical-align: baseline;'>
  <td style='text-align: center;'><span>PHI</span></td>
  <td style='text-align: center;'><span>80</span></td>
  <td style='text-align: center;'><span>5335.</span></td>
  <td style='text-align: center;'><span>72.</span></td>
  <td style='text-align: center;'><span>74.097</span></td>
 </tr>
</table>

So this looks bad. Let's checkout the histogram of plays per lost fumble, Sharp's metric.

![Distribution of PPLF](|filename|/images/pplf.png)

You can guess which bar is the Patriots. So at this point, their big claim (and the one that was repeated everywhere on blogs, etc):

*"Based on the assumption that fumbles per play follow a normal distribution, you’d expect to see, according to random fluctuation, the results that the Patriots have gotten over this period, once in 16,233.77 instances”*

Cool. So let's fit this to a normal distribution by taking the mean (103.365) and the standard deviation of this data set (17.2877) without the Patriots. Then, we can say, what the total density less than or equal to the Patriots value of 182.33:

```
Mean[Drop[fppWithLost[[All, 5]], 1]]
StandardDeviation[Drop[fppWithLost[[All, 5]], 1]]
AccountingForm[1 - CDF[NormalDistribution[103.365, 17.2877], 182.33]]

103.365
17.2877
0.00000246554
```

Apologies for the ugly Mathematica code.

We'll get 0.00000246554. Not an exact match but apprxomiately close to Sharps. Does this mean that the Patriots are at an impossible level? Well, let's eyeball that histogram with this distribution overlaid:

![Distribution of PPLF](|filename|/images/pplfdist.png)

Huh. Doesn't really look like a great fit. Maybe it's the bin size we're using on the histogram?

Oh. Well, we can do a test of normality [Kolmogorov Smirnov](http://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Smirnov_test):

```
DistributionFitTest[fppWithLost[[All, 5]], Automatic, 
  "HypothesisTestData"]["TestDataTable", "KolmogorovSmirnov"]

Statistic P-Value
Kolmogorov-Smirnov  0.173157  0.0163527
```

p-value is pretty small, looks like we can reject the null hypothesis (that the hypothesized normal and the observed values are drawn from the same distribution). Looks like we can't use normal and I'd **reject the assumption that fumbles per play follow a normal distribution**. 

**Rant** Even if you don't trust the above frequentist test - using a normal distribution here should give you some concerns. 

  1. It makes a lot of assumptions about tails - especially with values less than zero. 
  2. 31 (32 - NE) samples doesn't strike me as enough to really build up a comprehensive distribution.

In fact, I tried a few other distributions (Poisson, in particular) and nothing is a great fit. However, this is a great case for bootstrapping. In another post I'm writing now, I'm going to claim the odds of the Patriots plays/fumble number is closer to 10% - unspectacular and not a convincing case for cheating.
