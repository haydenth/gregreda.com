Title: Amazon RedShift
Date: 2013-08-23
Slug: redshift
Status: Draft
Icon: icon-gears
Abstract: As a data person, I take a look at Amazon Redshift and investigate its magical powers (or lack thereof). It's pretty baller but still too expensive for my use.

A common practical problem that we encounter in the world of data analysis is the following:

* We have more data than we can easily parse in a transactional db (such as mysql)
* We do not have facebook scale petabytes of data, but we have somewhere less than a terabyte or around a terabyte
* We want to be able to query this with relative ease.

A common example: I have a dataset of all NFL related tweets from June 2012-August 2013. I've been collecting it via the twitter API and storing them in MySQL for safe keeping. It's basically unqueryable now because I have too many rows (16 million). I could load this into Amazon S3 + hive, where it is queryable but then I have to wait 20 minutes to even get a simple table sum.

Also, suppose I wanted to build a larger data warehouse for all my NFL related stuff. I can continue to use to MySQL but I won't be able to use any of the cool twitter related data. I'd like a warehouse that has some features of transactional databases and some features of offline data warehouses. __I want the best of both worlds__.

Enter Amazon Redshift
--------------------------------

First things first, we can go to Amazon Web Services and turn this thing on.

OK. It took about 10 minutes but eventually, it tells me that my cluster is turned on. Awesome. Now, we need to connect to this particular postgres instance - I have psql installed already, so this should be easy.
```
psql -h 
```

