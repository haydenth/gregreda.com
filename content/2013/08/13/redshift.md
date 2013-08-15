Title: Amazon RedShift
Date: 2013-08-13
Slug: redshift
Icon: icon-gears
Abstract: As a data person, I take a look at Amazon Redshift and investigate its magical powers (or lack thereof)

A common practical problem that we encounter in the world of data analysis is the following:

* We have more data than we can easily parse in a transactional db (such as mysql)
* We do not have facebook scale petabytes of data, but we have somewhere less than a terabyte or around a terabyte
* We want to be able to query this with relative ease.

A common example, I have a dataset of all NFL related tweets from June 2012-August 2013. I've been collecting it via the twitter API and storing them in MySQL for safe keeping. It's basically unqueryable now because I have too many rows (16 million). I could load this into Amazon S3 + hive, where it is queryable but then I have to wait 20 minutes to even get a simple table sum.  

Also, suppose I wanted to build a larger data warehouse for all my NFL related stuff. I can continue to use to MySQL but I won't be able to use any of the cool twitter related data. I'd like a warehouse that has some features of transactional databases and some features of offline data warehouses. *I want the best of both worlds*

facebook peregrine & cloudera impala
-------------------------
When I worked for facebook, they had a great internal tool called [Peregrine](http://xrds.acm.org/article.cfm?aid=2331056), which fit some of these needs - it was real-time streaming querying of data in hive. You could query ENORMOUS tables quickly and at relatively low cost. The only downside was that you couldnt do any JOINS - so you had to do the computation offline first and then pipe the results into a peregrine queryable table. I miss that tool.

My understanding is that cloudera has something similar called [Impala](http://www.quora.com/Cloudera-Impala/How-does-Cloudera-Impala-compare-to-Facebook-Peregrine) but I have no experience using that, so I can't really speak to its awesomeness. 

But in general, both tools fill a niche of "we need fast query access to our big data tables"

Enter Amazon Redshift
--------------------------------

First things first, we can go to Amazon Web Services and turn this thing on.

OK. It took about 10 minutes but eventually, it tells me that my cluster is turned on. Awesome.


