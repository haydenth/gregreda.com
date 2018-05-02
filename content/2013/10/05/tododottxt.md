Title: Todo.txt Review
Date: 2013-10-29
Slug: tododottxt
Icon: fa-check-square-o
Tags: organization, mac, dropbox
Abstract: I talk about my attempts to use todo.txt (the software) as a tool to organize my life.

Cool Sign at Facebook
---------------------
These signs hung around the facebook offices around the time of the IPO, I assume they are still up. This post reminds me a bit of that time.

![facebook sign](|filename|/images/facebook_sign.jpg)

The Problem and Challenges
------------------
I am wicked unorganized and frequently scatterbrained. I find that I end up spending an entire day thinking about a problem or some philosophical idea and totally forget commitments, promises, and tasks that need to be done. I just get really lost in my own head. I blame it on being an [INTJ](http://www.personalitypage.com/INTJ.html]). 

So, I wanted to find some kind of organizing tool. One of my colleagues showed me his system using [OmniFocus](http://www.omnigroup.com/omnifocus) and I was super impressed. However, it was Mac-only and I am not exclusively a Mac user (I have a linux machine at home).

* Tool needs to handle contexts and projects. For more on this and organization theory, see: [GTD](http://hamberg.no/gtd/)
* Tool needs to be easier than pen & paper (the current inefficient system)
* Tool needs to have some basic reporting so I can see what I completed
* Tool needs to sync easily between my macbook air, home linux machine, and work macbook and should run on all three systems
* Tool must have some mobile application (android or iPhone since I have both)
* Open source (and free) would be a bonus
* Connecting to JIRA (for work) would be a bonus

The Solution
-----------------
I found this cool toolset called [http://todotxt.com/](Todo.txt). It is a completely commandline based tool, hooks up to a Dropbox account for syncing, and has mobile apps on both platforms. It is a little simplistic, since it does really have much support for date-based tasks or tasks that have dependencies. The tool itself is pretty simple - put a text file in a dropbox folder and using Terminal run the todo.sh file. Here's a quick example
```
tom@santaclaus3 ~/Dropbox/todo $ ./todo.sh ls
48 (A) Fix stylesheet disaster @work +uld
25 (B) Make blogpot about organization system @home
37 (B) Reply to Bobs email @home 
21 Schedule daily loads of extracts @work +importantproject
49 send rent check @home
.... (many more not shown ) ...
```
Note that it uses a A-Z based prioritization system. (A) priorities always show up at the top, non-prioritized tasks at the bottom.

So far for three weeks now, the tool has been working pretty good. I do feel like I am less likely to forget things and it is helpful to have a tasklist always available. Every morning, before I start working, I go through my entire list of @work tasks, figure out what I need to work on that day and prioritize them to an (A) task. If I can get to (B) tasks in a day, I consider it a pleasant bonus.

Command Line Magic
--------------------
One of the most convenient tricks with this is that I can hook it up to my command line .bashrc file and have quick aliases to see my lists:
```
# todo list aliases
alias t="/home/tom/Dropbox/todo/todo.sh"
alias th="/home/tom/Dropbox/todo/todo.sh ls @home"
alias tw="/home/tom/Dropbox/todo/todo.sh ls @work"
```

So now, to see all of my "home" tasks, I just type th. Note: the coloring is different here than what shows up on the command line, but I cant copy and paste colored ASCII data.
```
tom@santaclaus3 ~/projects/tomhayden3.com $ th
25 (A) Make blogpot about organization system @home
49 (A) send rent check @home
09 Complete blogpost about amazon redshift @home +blog
45 Do problems from intro + ch1 of proof book @home +math
44 Read Intro and Chapter 1 of Proof book @home +math
04 Zarathusra Prologue +philosophy @home
03 Zarathustra chapters 1-3 @home +philosophy
--
TODO: 14 of 49 tasks shown
```
Similarly, I can type `tw` to see my work to do lists, and so on. Adding a task becomes as easy as just using the letter t:
```
tom@santaclaus3 ~/projects/tomhayden3.com/content/2013 $ t a 'Download NBA data @home +nba'
50 Download NBA data @home +nba
TODO: 50 added.
```

Problems
-------------------
I encountered a few problems with the tools and process:

* The Todo.txt iPhone application is completely broken on iOS 5. It crashes immediately upon trying to sync with Dropbox.
* I still have trouble staying focused and not deviating from the plan. I cheat on my todo list often. 
