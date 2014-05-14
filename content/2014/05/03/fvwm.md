Title: FVWM Old School Linux Window Manager
Date: 2014-05-03
Slug: fvwm
Icon: fa-windows
Abstract: I talk about an experiment I've been running with using fvwm, an old school windows manager for linux. If you're not a linux user, don't bother reading this.

This blog post makes me feel a little bit like: *"Oh look, I have a sweet work environment! Going to go surf twitter for a while now!"*. There is a webcomic out there that I am looking for about this - first frame was someone who was exclaiming "Finally, I've got the perfect work environment" but can't find anything to write. The next few frames were famous people who wrote great works in their basements, under fire, etc. If anyone can find that comic, comment please.

Knuth's Example
-----------------------------
I've been a Linux user since around 2002-03, back in the day of Redhat 7. Since then, my home computer has alternated between a Mac Laptop and a Linux Desktop. I've used all the window managers, GNOME, Xfce, KDE, etc. ![knuth dogs desktop](|filename|/images/knuth-small.jpg)

The only one that I've ever stuck with for any period of time (and am using now) is fvwm. It's simple, completely customizeable but really a pain-in-the-ass to configure. Like learning vi, it's probably taken me at least a year of tinkering to get to a relatively stable environment that I understand.

The reason I started using fvwm was I stumbled upon [Donald Knuth's fvwm configs](http://www-cs-faculty.stanford.edu/~uno/programs/.fvwm2rc). Here's an alleged screenshot of his desktop to the right and [the higher resolution version on his site](http://www-cs-faculty.stanford.edu/~uno/screen.jpeg). It's pretty simple, just a few terminal windows open, a clock, and four desktops he can switch between. It's well known that he doesn't do email or probably even have his computer plugged into the Internet, so there is no browser or anything (jealous!).

Upon actually looking at his fvwm configuration, it doesn't match the screenshot. For example, some of the stuff, such as the lightning bolt icon to close the window, which are in his fvwm aren't in the screen. I won't hold it against the guy who wrote the book on algorithms, literally.

I like the idea, my workflow is a little bit different but for the most part, I want to either be writing code or writing a blog post/article. 

My Setup
--------------------------------
So, I basically wanted the same layout as Knuth, so I stole his fvwm and smashed it up a bit. I added 3 desktops and added hotkeys to move between them (Control + Left and Control + Right).
```
Key Right A 4 GotoDesk 0 0
Key Left A 4 GotoDesk 0 1
```

I also wanted to keep the OS X thing of Command + W to close a single window. Also, needed a way to automatically lock the screen. You can get that with:
```
Key W A 4 Close
Key Escape A 4 Exec exec xscreensaver-command -lock
Key F12 A 4 Quit
```
And startup dropbox and xscreensaver:
```
Exec exec xscreensaver -silent &
Exec exec dropbox start &
```
The one thing I still haven't figure out that I would replicate is the Control + [ and Control + ] to toggle between windows. I don't recall if this is an iTerm 2 thing or a Mac Default but I really liked the quick window switching that way.

I also wanted to nicer fonts, window title bars that were colored in a nice way, and a display of CPU/bandwidth usage on the right hand side of my desktop, with a clock. There's quite a bit there, but you can view my [.fvwm config file](https://github.com/haydenth/dotfiles/blob/master/.fvwm/.fvwm2rc). Part of them are ripped straight from Knuth's config since they work great.

![my fvwm desktop](|filename|/images/desktop-small.png)
