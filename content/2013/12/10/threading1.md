Title: Python Threading (Part 1)
Date: 2013-12-10
Slug: threading-one
Icon: fa-code
Tags: python, code, threading
Abstract: I give some code examples of how to do magic with threading python

What is Threading / Why You Should Care
---------------------
In most languages, you operate in a pretty linear fashion - do x, then do y, then z, etc.  Sometimes, there are cases where this might not be the most efficient -- imagine you want to crawl a bunch of websites or something and you don't care what order they are done in and the tasks operate most independently of eachother. In this case, you might want to consider using threads and spawning off child "threads" for each individual thing you want to do.
```
            +
            |
            |+------> +->
            |       +    +
       main |       |    |
     thread |       |    |child threads
            |       |    |
            |       |    |
            |       |    |
            |<----+ v <--+
            |
            v
```
Personally, I usually end up using threading when I need to do:

* Crawling multiple websites on many domains - ie I want to scrape a bunch of sites that are not hosted in the same place.
* Doing computation that can be done independently; usually, I end up using threading when I am doing de-duping or processes that do not need to work together.

Example / Technique 1
----------------------
This is probably the most common example you see of people using the threading module. Basically, define a function and then call that function in some kind of loop using threading.Thread. 
```
import threading

def seagull_sound():
  print 'caw!'

for i in range(0, 10):
  thread = threading.Thread(target=seagull_sound)
  thread.start()
```

When I run this:
```
Toms-MacBook-Air-2:Desktop tom$ python caw.py
caw!
 caw!
 caw!
caw!
 caw!
caw!
caw!
caw!
caw!
 caw!
```

Note that it acts kind of weird with extra spaces - I'm pretty sure this is due to my terminal being confused by output coming from 10 streams simultanesouly.

So when we ran this, it created 10 threads and basically all off them will output 'caw!' in (relative) concurrency. Technically, I suppose this isn't true concurrency because of python's locking system and you'd need the multiprocessing module but I don't really want to get lost in the weeds here.

Example / Technique 2
-----------------------
I favor this implementation of threading over the one above. Instead of creating a thread object over some functions, you can just create a class which inherits from thread.Thread and reimplements the run() function:
```
import threading

class SeaGull(threading.Thread):
  def __init__(self):
    ''' re-implement the constructor '''
    threading.Thread.__init__(self)

  def run(self):
    ''' make the sound of a seagull '''
    print 'caw!'

for i in range(0, 10):
  SeaGull().start()  # call threading's start() method
```
Then, when I run this:
```
Toms-MacBook-Air-2:Desktop tom$ python caw2.py
caw!caw!

caw!
caw!
 caw!
caw!
 caw!
caw!
caw!
caw!
```

We can see the output is basically the same - it just attempts to hammer out all the print statements at the same time. I prefer the latter of the two options, having your object exist as an extension of the thread module is a slick implementation.

Passing Data to your Thread
-------------------
The above examples using seagulls are pretty dumb. Suppose you want to output the seagull sound and also print a number for which thread is making the sound. We can make a small modification to our code to support this:
```
import threading

class SeaGull(threading.Thread):
  def __init__(self, thread_no):
    ''' re-implement the constructor '''
    threading.Thread.__init__(self)
    self._thread_no = thread_no

  def run(self):
    ''' make the sound of a seagull '''
    print '[%d] caw!' % self._thread_no

for i in range(0, 10):
  SeaGull(i).start() # note that we're passing in i now
```

And when we run this:
```
Toms-MacBook-Air-2:Desktop tom$ python caw2.py
[0] caw!
 [1] caw!
[2] caw!
 [3] caw!
[4] caw!
 [5] caw!
[6] caw!
[7] caw!
[8] caw!
[9] caw!
```

What you can't/shouldn't do
--------------------
I put this section last because you're probably not going to read it and instead make some mistakes yourself. That's cool too. In general, I find the below items to be "code smells" for when you are mis-using threading or potentially doing something stupid:

* You ask yourself - I want all my threads to talk to eachother. There are ways to have threads communicate but if you're doing a lot of it, it might be easier to solve this problem in another way.
* You want to pass in a huge list of parameters into my thread. This is always generally a code smell, threads should be pretty simple and independent.
* You want to run an insane number of threads. Use your best judgement.
* You're trying to do some kind of map-reduce-like thing where you can parallelize some data processing (there are better modules for this, such as MRJob or even the multiprocessing python module)
