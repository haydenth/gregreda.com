Title: 2013 Fantasy Dashboard & Defensive Predictions
Date: 2013-08-31
Slug: 2013-fantasy
Icon: icon-bar-chart
Abstract: I provide a link and talk about my 2013 fantasy dashboard, which is public this year. Also, I talk about a defensive model that goes into the dashboard, predicting point estimates of team defensive performance.

Sweet New Dashboard
---------------------
First, I'd like to announce the release of my [2013 fantasy football dashboard](/static/html/fantasy_2013/). It's public this year, in javascript and full of all sorts of interesting data. I included data obtained from:

* Statistics obtained via NFL.com
* Mock Draft data collected from a certain mock draft site, which gives us a draft distribution per player and an average ranking
* Rankings by the top 3 sources, CBS, ESPN, and FFC and the ADP (Average Draft Position, which is just the average ranking and a [mediocre measure](http://www.footballoutsiders.com/stat-analysis/2013/2013-kubiak-vs-adp-underrated)
* A sparkline of upcoming defensive matchups (see below)

I really wanted to include some of football outsider's KUBIAK data but I am pretty sure it is copyrighted and I want to respect their copyright. Bummer because it's probably the best set of predictions out there.

Defensive Points Against per Game (PAPG) Predictions
---------------------
So I needed a quick and dirty way to predict which teams were going to have good defensive performances this year and which were not. I could have really gone deep into player and coordinator level data but I don't do this for a living, so I didn't have time. In the short term, I put together a (mediocre) model which seems to capture at least the approxmate rank ordering okay.  Here are the picks.
```
   team predicted.fit predicted.lwr predicted.upr
     SF      18.32589      17.19841      19.45336
    PIT      19.46592      18.49606      20.43578
    SEA      19.72042      18.61981      20.82104
     GB      20.60593      19.88312      21.32873
    MIA      20.62056      20.20545      21.03568
    BAL      20.70957      19.91464      21.50449
    CHI      20.88071      20.13641      21.62501
    CLE      21.21339      20.75442      21.67236
    CIN      21.30532      20.71994      21.89070
    HOU      21.36536      20.54220      22.18852
    ATL      21.58513      20.72699      22.44326
     KC      21.91856      21.21568      22.62144
    NYJ      21.96500      21.45735      22.47265
     NE      21.96581      21.28860      22.64301
    WAS      22.10506      21.46445      22.74566
    ARI      22.15112      21.37068      22.93156
    NYG      22.56559      22.02549      23.10569
     NO      22.63798      21.80729      23.46866
    MIN      22.73069      21.98883      23.47255
    STL      22.75580      22.08969      23.42192
     SD      22.90059      22.06447      23.73671
    DET      23.08472      22.36155      23.80788
    TEN      23.15544      22.23376      24.07712
    DAL      23.15567      22.43295      23.87838
    CAR      23.20896      22.50117      23.91676
    PHI      23.38832      22.61614      24.16051
    DEN      23.55729      22.40624      24.70834
    IND      23.88955      23.18984      24.58927
    JAC      24.36472      23.35697      25.37247
     TB      24.71455      23.44008      25.98902
    OAK      24.73461      23.82956      25.63965
    BUF      25.17504      24.24984      26.10025
```

These are only point estimates. Margins of error are relatively large but hey, this is a really hard problem and my $R^2 = 0.1586$ sucks but it's better than random! Predictive inputs into the model:

* Current pre-season average PAPG
* Previous 3 seasons average PAPG

If I had infinite time, I could include all sorts of awesome stuff like defensive coordinators, player transactions, offensive matchups, and so on. I don't have that kind of time, so it is at least enough to get us started on an approximate ranking of team defenses. When I look at the top teams drafted in NFL mock drafts, I get:
```
+-----------------------+-----------+----------+
| player_name           | AVG(pick) | count(1) |
+-----------------------+-----------+----------+
| Seattle Defense       |   94.4698 |    24470 |
| San Francisco Defense |  102.1096 |    24440 |
| Houston Defense       |  109.7391 |    24412 |
| Chicago Defense       |  112.3020 |    24398 |
| Cincinnati Defense    |  118.7876 |    24354 |
| Denver Defense        |  121.3694 |    24196 |
| New England Defense   |  130.2573 |    23468 |
| Baltimore Defense     |  135.8904 |    22451 |
+-----------------------+-----------+----------+
```

So it's.. close. Compared the model, Pittsburgh seems to be excluded from the mock draft picks (it wasn't picked in about half the mock drafts) but the model likes them. Same for Green Bay. We'll see how this plays out this year.
