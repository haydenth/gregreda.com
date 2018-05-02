Title: Dogecoin (ie bitcoin, ie tomcoin) Thoughts
Date: 2014-02-08
Slug: bitcoin
Icon: fa-money
Tags: bitcoin, secondlife
Abstract: In a moment of curious insanity, I start poking around with digital currencies -- in particular Dogecoin. 

Digital currencies right now feel like Second Life circa 2007 - full of early adopters/weirdos, all over the press, in a legally specious gray area, and maybe starting to get some traction. Of course, for Second Life, the fun police showed up and [banned gambling](http://techcrunch.com/2007/07/25/second-life-bans-gambling-following-fbi-investigation/) and had all sorts of [issues with manipulation of their digital currency](http://gwynethllewelyn.net/2013/05/17/financial-crisis-in-second-life-ended-linden-lab-launches-linden-dollar-authorized-reseller-program/). Back in 2007/08 when I was in graduate school at Michgan, we talked a bit about SecondLife and digital currencies -- the school even had some property in the virtual world (it wasn't far from a virtual penis store, the *de rigueur* of SecondLife).

![Penises Behind the Sign](|filename|/images/secondlife.jpg)

I bring this up because Bitcoin (and all the similar digital currencies) evoke a reaction in me that is like, "Well, it's only a matter of time until the government makes some decision to shut this down". I mean, thinking about all the ways this currency can be abused is mind blowing:

* Simple Tax Evasion - Suppose you buy \$1000 of bitcoins and value goes up to \$2000 and cash out. Uncle Sam has probably collected exactly \$0 in Cap Gains on any virtual currency, despite the crazy price growth. If you were doing this with say JPY-USD, then you'd surely get a 1099 from your broker.
* Petty Criminals - There are even digital currencies specifically designed for your misdemeanors! See [PotCoin](http://www.potcoin.info) or [LeafCoin](http://leafco.in/)
* Big Time Fraudsters - Just read the [court filing against the Silk Road Guy](https://www.documentcloud.org/documents/801103-172770276-ulbricht-criminal-complaint.html) - He allegedly tried to kill people with bitcoins.
* Money Laundering - Have some stolen credit cards or paypal accounts? Use them to get digital currency coins, push the coins around a bit and then sell on an exchange. The first part is probably the hardest (getting the coins, because I'm sure the person selling you doesn't want to get burned with a chargeback) but I'm sure they can get around that (selling goods bought with bad cards for bitcoins, for example)
* Clever Ponzi Schemes - [Ponz.io](http://ponzi.io/index2.html)

I'm sure there are all sorts of legal uses of bitcoins too, I don't mean to imply that it's all under-the-table-cash-only stuff. Apparently, [some retailers here in Chicago will start accepting bitcoins](http://www.chicagobusiness.com/article/20130613/NEWS08/130619907/where-you-can-shop-with-bitcoin-in-chicago).

Enter the Dogecoin (Pronounced dawg-eh-coin)
---------------------
So here we are, this coin thing sounds like fun but where to start? Mining bitcoins is pretty difficult - the coins are becoming rarer and there are people with insane mining rigs in milk crates. If you're like me, you're like "Shit, I don't know where to get a milk crate, guess I need to figure out how to do this some other way". 
![Mining Rig](|filename|/images/mining_rig.png)

Enter Dogecoin! There are still a fair amount of coins out there, the software is pretty decent for mining new ones, they don't appear to be used for criminal activity (mostly because they're pretty worthless), [there is a reddit community of seemingly nice people](http://www.reddit.com/r/dogecoin), and they have a good conceptual purpose (supporting micro payments). Actually, now that I think about it - micropayments have been something that people have tried to do (and failed) for years, mostly because of the above regulatory issues. Dogecoin seems like a relatively safe place to get started.

I won't go into too many technical issues in this post but basically, to get started (on Linux):

* Dogecoin has a github account for the wallet software <https://github.com/dogecoin/dogecoin>. This is wallet software only. 
* You can "mine" coins using sgminer, on github <https://github.com/veox/sgminer>. You have to first join a pool such as <http://pool.chunky.ms> and then just compile and run sgminer. You might have to tweak the "Intensity" parameter - 11 is the best for me. Sgminer is a fork of the popular <https://github.com/ckolivas/cgminer> which is hyper-optimized for bitcoins (as opposed to dogecoins).

I have a desktop with a Radeon 6750 at home and when this thing runs, the card hums quite loudly and the box heats up, so it's doing something. This reminds of the complete absurdity of digital currency mining: Somewhere in Illinois a powerplant is burning coal, producing eletricity, pushing it a hundred miles to me over copper wires. I then use the power to break a cryptographic hash with 500 other people, so I can get a number that has some fiat value for a currency using a picture of a meme that only exists because of some web-based culture. Welcome to the absurdity of the fossil fuel era.

Back to Second Life
--------------------------
So now I have a bunch of relatively worthless coins (the fx rate between DOGE and bitcoins right now is 0.00000160). I can [tip them to people on twitter](https://twitter.com/tipdoge) -- this is kind of a cool way to do micropayments. I have no idea how to actually extract cash - I think I would have to convert them to bitcoins first and then from bitcoins to cash. That feels painful right now, especially given the [recent problems with popular bitcoin exchanges](http://www.businessinsider.com/mtgox-halts-withdrawals-2014-2). It's probably only a matter of time until more high frequency trading firms show up, seeking to be market makers on these kind of transactions.

So, unlike SecondLife, which has a central monetary body controlling the currency, digital currencies seem like [Milton Friedman's wet dream](http://en.wikipedia.org/wiki/Friedman's_k-percent_rule) - there is enough central control (in the algorithms) to ensure fixed inflation but otherwise, almost every form of policy is moot. I can't see a way that the government cannot easily monitor or tax this stuff except at the point where the coins and turned into cash and even then, if you're a fraudster and businesses accept bitcoins, you'll just live a second life off the grid (see what I did there?)

I'm really curious to see how this stuff turns out. It is either our future currency (in 2-3 generations) or the new Second Life. It's certainly going to require some clever policy magic from the government in order to give fair tax treatment.
