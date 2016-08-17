Fossa Postmortem
=================

This is my postmortem for Fossa, which was an attempt to make a game for the [August 2016 Lisp Game
Jam](https://itch.io/jam/august-2016-lisp-game-jam) on itch.io. I'm basically going to review what
my plan was, what I actually got done, and what I've learned from it.

You can see my finished code [on GitHub](https://github.com/foobardog/fossa), and see how far I got
during the jam on the [GitHub Pages Site](https://foobardog.github.io/fossa/). I still do intend on
finishing the game in some state, so I may update it further!

What I Intended to Do
---------------------

The game jam itself was a nominally 10-day jam from August 1st to August 11th (so actually 11 days,
and I used all 11). The rules allowed me to start from a basic engine, and allowed to use free
assets if I marked what I had used. I was also permitted to use game libraries as I saw fit.

I chose to use the [Phaser](http://phaser.io/) JavaScript library, which had ClojureScript bindings
through a library called [phzr](https://github.com/dparis/phzr).  I also chose to use an
entity-component library named [brute](https://github.com/markmandel/brute) to organize my code.
ClojureScript was definitely my preference for choice of language, I've used its sibling Clojure in
the past and enjoyed it. Phaser, phzr, and brute were wholly new to me. I also used a Leiningen
extension called [figwheel](https://github.com/bhauman/lein-figwheel) that served as a test web
server, and built my changes automatically.

My game idea was new, but based on a riddle I had seen in a [TED-Ed
video](https://www.youtube.com/watch?v=nSbvlktToSY). In that riddle, you are an explorer trying to
escape from a temple. There are too many ways to explore by yourself, but luckily you have eight
teammates. Unluckily, two of them have been cursed by the temple, and will lie to attempt to lead
you the wrong way. You can't tell who's a liar beforehand, you'll need to figure out a way to
determine the right path.

My intention was to extend the riddle to multiple iterations, adding more liars as the player got
closer to the exit or made mistakes. I decided to change up the flavor slightly, making it about
grad students exploring a space-time anomaly. If the player survived, they would be able to find out
how exactly the space-time anomaly was created. The characters were going to be rats, because rats
are cute!

So in the end, this would be a browser-based game with mouse-based controls (and possibly keyboard
controls if I got far enough). I intended to create the art, sounds, and music myself along with the
code.

What I Actually Did
-------------------

At the end of the jam, I had just started really making progress on the gameplay portion. The code
at the end of the jam allowed the player to send out the party members to explore, showed the
results of their explorations (with liars possibly lying), and let the party then move through
a hard-coded 3-room dungeon I made for testing. There were no penalties applied to the player yet
for incorrect choices. I got part of the way through coding up a dialogue system when I realized
I was out of time.

What Went Well
--------------

My focus on this project was overall very good, it consumed most of my time. Despite not finishing,
I got much further along on this game jam than any I've tried in the past. There's an honest seed
for a game there that got done. Also, despite my difficulties in deciding how to organize my code,
as well as working with Phaser, I know have a much clearer idea, and what I have is definitely
something I can use to make the process faster in the future.

In particular, the advice to prioritize things between "now", "soon", "later" was very helpful.
I would need them was great advice, because it let me become much harsher about putting things
further back in the backlog. I think the vast majority of the stuff I put in the "soon" category on
the first day, I never got to, and had I tried to get to them, I would have not made as much
progress. It also made it easier for me to push the small rendering bugs I ran into back there,
especially as I was going to replace the art any way.

The instant feedback of figwheel to display my code changes was a mixed blessing, but for the most
part a benefit. It definitely gave me a system to do debugging without actually *using* a debugger,
so I was able to do all my work in vim and the command-line, using no IDE at all! However, editing
features of an IDE like Cursive would have probably been helpful just to speed up coding.

What Went Poorly
----------------

I did not get into really doing gameplay code until the last three days of the jam, and I didn't get
to any asset work at all, which was something that really interested me. My main issue was figuring
out how best to use phzr and brute together, as well as understanding input.

In particular, I struggled with integrating Phaser's event system, which was based on callbacks with
brute, which ran every frame. Phaser definitely intends for its users to use its callback-based
system. While it offers some functions that can be used to poll, (for example, `justPressed`), these
take in a threshold of milliseconds, and will continue to return success throughout that threshold.
I eventually introduced some "blackout" properties on my game state that kept track of when the last
time I had performed a change based on input. Only after enough time had passed since the last
blackout would I perform another change. This seemed to work well enough, but introduced boilerplate
code I was not very happy about. I think in the future I may use ClojureScript's concurrency
features along with the callbacks.

I additionally had a great deal of trouble with positioning sprites. Phaser uses the very common
Cartesian coordinate system, but allows sprites to be placed in groups, as well as be the child of
other sprites. Within the group, the origin of the coordinate system is moved to the location in the
group. This meant that if tried to use the world coordinates, the sprite would not end up where
I expected. This also led to problems with how input worked. Dropped sprites would be moved to be
over another hex and then considered "dropped" on that hex because of the threshold. The ability to
change the "anchor" of a sprite or group made it even worse. In retrospect, it was not that hard of
a problem, but I did not have an easy time working with it, and Phaser's documentation does not
really describe the system in-depth.

Phaser also has z-level sorting of sprites, but it seems like it will automatically "update" the
z scores at times (probably the results of calls I made...). This led to party members, for example,
appearing behind hexes, or on top of the results dialog. This came to a head with the group issues
mentioned earlier, because I had added my party member sprites to a separate "stage" group that is
always above the "world" group, where I had added everything else. I strongly feel that this needs
to be better explained within the Phaser documentation.

The last little hurdle that I think is worth mentioning is that Phaser's default units for rotation
are radians rather than the more familiar degrees. I later found out there's a way to use degrees,
but I spent a lot of time trying to get the mice to rotate towards their eventual destination. This
is probably more of a problem of me diving too deep into a problem, though.

What I Learned
--------------

Going through all of this really did help cement a lot of the things that I had really not gathered
from going through the Phaser tutorials. Basically, all of the challenges I faced with that probably
will not be repeated, and I will find its actions much more predictable than I did.

I additionally found out a few lessons about organizing game code. The first, and most important, is
to let objects handle their own rendering/positioning, rather than doing it as part of an update
loop. That is, when a party member was moved from one hex to another, I had been trying to do the
positioning update right then and there. It was vastly easier to just move it to the group and then
have the group "fix" its members, and it looked better in the end. It also handled taking members
out of the middle of the group better.

The next is the basic way an entity-component system works with immutability. I had made small games
in Clojure before, and knew the necessity of passing a state object to functions. I did not really
get how this "pipeline" method of working and threading state through could be made easier, through
returning an "updated" version of the state object. I really did not "get" the `->` and `->>`
threading operators until they become so necessary to avoid writing messy code.

But in a wider sense, reasoning about what would happen on update became easier as I divided up
responsibility between namespaces. I now understand that namespaces in Clojure(Script) are somewhat
like the equivalent of classes in object-oriented programming languages, just that they are
(ideally) limited to functionality rather than also keeping track of data as with a class. So this
makes them very much like static-only classes in C#, my normal language.

So all together, if one namespace (system) determines it needs to update an entity, it can delegate
the update to a different namespace, and get back the new state object, not needing to know the gory
details, and move on. This made a very neat and clean pipeline. The tricky thing is that the
phzr/Phaser objects are instead "mutable" rather than immutable. So that became an additional
"pipeline" where a phzr object was passed off to a method, that returned the same object after it
was updated. Working with those could definitely be cleaner...

Expanding on working with phzr objects, my original intention was to go very deep into splitting out
object into entity components. I would have entities that had separate gameplay components and phzr
object components. For example, an entity would have an `ExplorationGroup` component for the
game-level data, and a `Group` component for the phzr object. That was probably an abstraction too
far. I eventually needed to do one check on the game-level data, and then another call to get the
phzr object to update it, and was doing this constantly, leading to repetitive code. I started just
including the phzr object as a property of the game-level component, which made for much shorter
code, especially when I figured out how to use map destructuring.

The last thing I feel like I learned is to strongly consider when you actually *need* to have things
participate as an entity. Many of the components I made ended up being singletons. This added
repetitive code because I would use brute's functions to get all the entities with a specific
component, and then immediately pass it to `first`. I didn't write up a function wrapping that up
until very late. Comparatively, I did *not* place the phzr game object in an entity and just
accessed it through a normal property on the state object. That probably would have made more sense
in the long run for the singletons. Basically, if you may have multiple "instances" of an object,
using the entity system makes sense. But if you know you're going to have only one, ever, make your
life easier and make it visible at the top as a property.

So to sum up:

* Understand the ins and outs of your engine
* Delegate very specific code to namespaces handling certain "systems"
* Tie your systems into a pipeline that operate on the game state
* Don't divide things up into components until you're sure you want to
* Don't divide things up into entities until you're sure you want to

What I'm Going to Do Next
-------------------------

I do want to finish up the game, though it's going to have vastly different flavor than I originally
intended, simply because I don't think it's worth me to dive down too deep into making this the most
perfect game I had originally intended. It's just not a story or gameplay experience I care *that*
much about. I'll also probably do some work to pull out the more common code into a template so
I can make a Phaser game all that much quicker.

And then, make more even more games!
