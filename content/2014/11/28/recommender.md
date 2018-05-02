Title: Command Line (mostly awk) Collaborative Filtering
Date: 2014-11-28
Slug: awk-recommender
Icon: fa-sort-alpha-desc
Status: draft
Tags: recommendations, collaborativefiltering, linux
Abstract: I build a command-line based collaborative filtering tool that can really crank out some recommendations pretty fast. I test it using the movielens data set.

The Challenge
-----------
Everyone these days is using hadoop (or something similarly map-reducey) in order to do recommendations. Basically, you can fire up a hadoop cluster, add something on it like Mahout and then kick out some canned recommendations using whatever collaborative filtering algorithm is built in. This is kind of cool but I really want to know -- in most cases, do we really need to use "big data" tools like hadoop in order to this? How much power can we get running a collaborative filtering algorithm locally using super optimized linux command line tools?

Input
-----------
We start with data that looks like this - basically just a list of users, movies, and the ratings they assing to things:

```
user_id movie_id rating timestamp
1 6 5 887431973
1 10  3 875693118
1 12  5 878542960
1 14  5 874965706
1 17  3 875073198
1 20  4 887431883
1 23  4 875072895
1 24  3 875071713
1 27  2 876892946
1 31  3 875072144
1 33  4 878542699
...
```

Output
---------------

We want to end up with a file like this:

```
user_id movie_id expected_rating
1 2 3.444
1 3 2.33
1 4 5.00
1 5 3.12
1 6 1.99
...
```

Step 1
------------------
First, we want to take the input file and convert it into something that looks more like a matrix where each row is a user and each column is a mean / standard deviation adjusted z-score for the review. I'm not in love with the idea of using z-scores, since it makes a lot of assumptions but for this example, it should be sufficient. We can always change our methodology later.

First, our awk script:

```
{
  # on input store into a couple arrays
  # user-movie-rating
  arr[$2][$1]=$3
  # this user's total scores
  user_review_scores[$2] += $3
  # number of reviews this user has
  user_review_counts[$2]++
  # number of times this movie has been reviewed
  items[$1]++
}

# basic algorithm to go through each user and
# each item and generate a user-movie score
# based on the user's mean and sd adjusted 
# ratings
END{
  for (a in arr) {
    line = a
    sum_squares = 0
    mean_review = user_review_scores[a]/user_review_counts[a]
    for (i in arr[a]) { sum_squares += (arr[a][i] - mean_review) ** 2 }
    sd_review = sqrt(sum_squares)

    for (i in items) {
      if (arr[a][i]) {
        if (sd_review > 0 ) { line = line "," (arr[a][i] - mean_review)/sd_review }
        if (sd_review == 0) { line = line "," 0 }
      } else {
        line = line ","
      }
    }
    print line
  }
}
```

And we can run this and see the output:
```
$ cat ml-100k/u2.test | awk -F "\t" -f transform2.awk > /tmp/users.txt
$ head -2 /tmp/users.txt
780,,,,,,,,,,,,,,,,,,,,,,,0.144603, ...
781,,,,,,,0.127851,0.127851,,,,-0.0755482, ...
```

Step 2
---------------------------
This is the computationally nasty part. We want to take all of these users (one for each row) and compare every user to every other user. This is an n^2 operation, so if we have a huge input file, it gets ugly. Either way, let's see what we can do. 

Currently, we have 1,549 users in our input file

```
$ wc /tmp/users.txt
   1549    1549 1368261 /tmp/users.txt
```

and an awk script which will take all 1549 users, square it and dump the results into a text file where the output is (user1, user2, similarity). This case, we're using Pearson correlation similarty:

```
{
  # second file we're going to open
  # each line in the input has to open this independently
  # runs SO MUCH FASTER on SSD disks
  file = "/tmp/users.txt"
  split($1,group_i,",") # open file 1 csv
  while ((getline line < file) > 0) {
    split(line, group_j, ",") # open file 2 csv
    if (group_i[1] <= group_j[1]) {
      if (group_i[1] < group_j[1]) {
        n = sum1 = prodsum = sum2 = sum1sq = sum2sq = 0.0
        # here is where we compare all items in user1's vector
        # to user2's vector and generate the metrics for a 
        # correlation (see wikipedia page for defn of correlation)
        for (i=2; i<=length(group_i); i++){
          if (length(group_i[i]) != 0 && length(group_j[i]) != 0) {
          sum1 += group_i[i]
          sum1sq += (group_i[i] ** 2)
          sum2 += group_j[i]
          sum2sq += (group_j[i] ** 2)
          prodsum += group_j[i] * group_i[i]
          n++
          }
        }

        # if they have nothing in common, no correction
        if (n == 0) { correlation = 0 }
        if (n > 0) {
          numerator = prodsum - ((sum1 * sum2) / n)
          base_denom = sum1sq - ((sum1**2)/n) * (sum2sq - (sum2**2)/n)

          # min adjustment technique 
          # from: http://bit.ly/1vWVVzs
          if (n >= 50) min_adjustor = 1
          if (n < 50) min_adjustor = n / 50

          if (base_denom > 0) denom = sqrt(base_denom)

          if (denom == 0.0) { correlation = 0 }
          if (denom != 0) { correlation = (numerator / denom) * min_adjustor }
        }
        # output it all
        printf group_i[1] "," group_j[1] ",%1.5f\n", correlation
       }
    }
  }
  close(file)
}
```

We can run it with parallel (this is amazing)

```
cat /tmp/users.txt | parallel --block 10K --progress --pipe awk -f blowup.awk > /tmp/results.txt
```

And we get output that looks something like this:

```
$ cat /tmp/results.txt | grep ^1, | sort -k3,3n -t,
1,5,0.19002
1,88,0.19309
1,123,0.19797
1,13,0.20387
1,70,0.20521
1,191,0.22585
1,926,0.22807
1,82,0.23193
1,423,0.23920
1,71,0.23994
1,235,0.24361
1,405,0.25961
1,418,0.28293
1,95,0.30164
1,294,0.30988
1,742,0.32649
1,588,0.36484
```

So this gives us the folks with highest correlations to user 1.

Speed Power
-----------
