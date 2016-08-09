Days Four through Eight: Start Draggin' My Mouse Around
=======================================================

I didn't stop working, but I've been heads down on getting input working, so I've been deprioritizing
the dev journals. It's also turned out much harder to get input working.

Thursday, August 4th, 2016
--------------------------

Most of this day was spent continuing the refactoring I had started yesterday, actually pulling out
code into their specific files. I also began to create a sprite that is going to be used on the hexes to
highlight when the player is about to drop a party member on that direction.

It was a hard day to work, I had a short day since I had appointments and D&D in the evening. I was
pretty distracted.

Friday, August 5th, 2016
------------------------

This was similarly a slow day, I didn't really get much done besides creating a group within Phaser to
hold all of the party members that had not been assigned. It may have been the day when I *actually*
did the work I said I did on Thursday. I don't know, I'm only going from the git logs.

Saturday, August 6th, 2016 - Monday, August 8th, 2016 (Morning)
---------------------------------------------------------------

These ended up being very productive days! Basically my problem was that I was trying to use Phaser's
event handling system, which depends on callbacks. I didn't see a good way to tie that in with the
constant looping method of brute. Phaser callbacks can take additional information, so it would in
theory be possible to pass my system object to my callbacks. However, since these callbacks could
possibly update the system object, that would introduce an unpredictability of when the object would be
updated.

The system object *is* saved in an atom, so in theory, it would have been referentially OK to modify it
whenever. However, I had gone out of my way to make sure that atom was only modified in one place,
core.cljs. This means that most of my "update" functions worked on a copy of the system. This is the
whole point of ClojureScript's strict requirements on limited mutability (and is why I like it!).

The atom does mean that querying the system object would never be inconsistent, but most of my
functions never query *it*, but a *copy* instead. This means that an update from a callback could
possibly invalidate work going on in another function. It would be possible to coordinate, but it would
introduce a lot of complexity, and that's never good!

I instead moved away from Phaser's system and moved towards using the update functions that brute
expects. It ended up working, but it has some downsides. For example, to see if a sprite has been
dropped, you can call the `justReleased` method on it. The time that it considers a sprite "just"
released is configurable. However, this is a raw time in milliseconds, not a number of frames. So if
a party member has been dropped, there is a window of time it'll continue to be considered "dropped".

This bit me in the tail when my positioning code was not up to snuff yet. I determine if a party member
is dropped on an exploration path if their sprite overlaps the hex sprite. I then wanted to align
the party member within a group on that sprite, making the party members on a path well-organized,
so that's what I did in my update function. However, with the position being off, sometimes, that
would move the sprite to a position where it overlapped a different path.

Since `justReleased` still thought the sprite was "just" released, it moved it to that different path.
Which could have done the same thing, and so on. I could modify the threshold for "just", since it was
after all at a hefty 500ms (just over 30 frames at 60 fps) but at a low enough number that could lead
to drops not being recognized, because a long frame could mean that `justReleased` returned false
before the function can get to it.

In the end, I didn't really "fix" this problem. I made the groupings on the hexes much closer, so they
were unlikely to overlap another sprite. I also had the update function only add the sprite to the
group and let the *group* handle positioning it. This made positioning much more reliable, and had
the added effect of groups automatically realigning themselves if a party member was taken out from
the middle of the list. But, in theory, this bug still exists.

This balance between frame-based updates and time-based updates is always a tricky thing. If you've
ever played an old game on a fast computer and had it be *too* fast to win, this is the reason why.
That code was written based on frames, which was fine when frames were longer. But with faster
computers, the frames become too short, and you lead to impossibly short times. This famously
happened with Space Quest IV, where an action bit is impossible to win on later computers. I also
understand a similar thing happened in one of the puzzles in The 7th Guest, but in that case, the
*AI* in a turn-based game (basically othello/reversi) had more frames to think, and became a much
stronger player as a result. The AI was stronger, so you had to be a much better player than when
the game originally came out to beat that puzzle.

The other issue at play here is the high mutability of JavaScript and therefore Phaser versus the
low mutability of ClojureScript. Even when using phzr, most of the heavy lifting is done on mutable
objects. ClojureScript handles that idea through the `doto` special form, which performs a set of
actions on a presumably mutable object and then returns it. It basically makes ClojureScript act like
an iterative programming language for a bit. However, I confused it with the `->` and `->>` special
forms which allow *threading* an immutable object through multiple calls. That is, the result of the
first call is fed into the second, which is fed into the third, and so on. It's syntactic sugar for
the normal Lisp pattern of nested calls. However, it ends up looking very similar to `doto`, and
I got burnt in a few cases.

ClojureScript also has several different special forms for iteration like `for` and `doseq`. Similarly,
some of these act in a lazy manner, while others act in an immediate manner. Additionally, both of
those are more oriented towards working on mutable objects. For proper *threading* of immutable objects,
You pretty much *must* use `loop` and `recur`, which are special forms to make recursion easier. But
these also burnt me. Not really the fault of the language, just something I need to get more used to!

At the end of all of this, I was able to drag and drop party members onto exploration paths to add them
to groups. It was a frustrating process (I was also working on this on days 4 and 5), but it worked! I
could move on to gameplay!

Monday, August 8th, 2016 (Afternoon)
------------------------------------

Starting on gameplay, I wanted to first check if I could write a little label on my party members so I
could know which ones were which, since I could not remember them by color. This was also a good
chance to begin working on bringing fonts, which I knew I would need eventually. Bringing in fonts was
actually harder than I thought, but not for any good reason.

I picked out a nice [font on Google Fonts](https://www.google.com/fonts/specimen/Cutive) that
looked like a typewriter font from the era the game is set in. (The equivalent of the 1970s, if you're
wondering.) It is a web font, which has the great benefit that the user doesn't have to install it on
their computer, nor do I need to have it saved with my game files. The app will download the font at
the time it needs it. This is often used on webpages. The downside is that if downloading the font
takes too long, you could have a period that text without the font is displayed, and then it "flashes"
to the downloaded font. It's annoying on a web page, but in a game like this, it's worse. If the font
is not downloaded when you start to create text in Phaser, it'll fall back to another font but you'd
have to "update" that text, which is not done "automatically" like it would be on a web page. However,
there are solutions.

Google and Typekit have a [Web Font Loader](https://github.com/typekit/webfontloader) JavaScript library
that can be used to load web fonts from common font websites and let code know when they've been
downloaded. Since it's by Google, it even hooks in well with the Google Closure Library that
ClojureScript depends on. The Web Font Loader is available on Google's CDN, which is generally the
preferred way to get it. So I tried to add it as a foreign library in my project.clj file through that
URL.

However, this seemed to clash with [Figwheel](https://github.com/bhauman/lein-figwheel), which is sort
of a helper for ClojureScript coding that builds the ClojureScript code for you, serves it to you
through a local web server, and watches for file updates so it can rebuild the code automatically. This
really decreases the length of the code-compile-run cycle. I can just make edits to my ClojureScript
source, and in under a minute, I'll see the updated code running in my browser.

For whatever reason, Figwheel was treating the URL to Google's CDN as a local file to be watched, and
would crash because Windows knew that wasn't a local file and pushed back. In the end, I just
downloaded it, and checked it in to my source tree, which is not preferable. Ideally, you avoid keeping
your own copy of an external dependency in your source for many reasons, like dealing with updates to
that dependency and legal code redistribution reasons. But, I was already far behind, I didn't need to
get bogged down in debugging Figwheel.

Either way, I got the font loaded, wrote the label on the party members, and now, you can drag and drop
party members onto hexes. I finished out the day by starting to implement a method for defining the
dungeon that the players will traverse through, the first real gameplay code. I'm very hopeful I'll
have a full gameplay alpha by the end of Tuesday! Longer than I expected, though. There's no way I'll
get in a lot of the nice assets I wanted to add *and* get gameplay nailed down. But... I learned a
bunch, and we'll see what I can do over the next two days. I guess there's technically three, counting
the 11th, but I don't think it's in the spirit of the jam to do major work on the 11th. I'll probably
consider this a beta, and work on integrating the assets after the Jam is over, basically making a
"deluxe" edition.

Whew! A lot to write, and I am probably over-explaining some things to fellow programmers, but I've
been linking non-programmers to these journals, so I am assuming very little previous knowledge. Plus,
I'm not editing these journals, so I bet I could whittle them down.

Excelsior!
