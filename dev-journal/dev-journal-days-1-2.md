Days One and Two: A Loathsome, Offensive Brute. Yet, I Can't Look Away...
=========================================================================

Monday, August 1st, 2016 to Tuesday, August 2nd, 2016
-----------------------------------------------------

So my first task was to figure out phzr and brute. In the pre-work, I managed to implement the Phaser
tutorial, which is in JavaScript in ClojureScript. While phzr tries to make things more Clojure-like,
that tutorial had me using a lot of global atoms, which I don't think is in the spirit of functional
programming, so I was going to pull in brute to manage things in a cleaner way.

I first spun up a basic window, with just a background image and a sprite, using the patterns I had
figured out from the pre-work. After that, I began trying to understand how brute could be integrated in.
Phaser divides running a game into three stages (well, more than three, but I'm only using three):
Preload, Create, and Update. Preload is used to load assets, Create actually creates game entities, and
Update is called on every frame of the game loop.

brute is a bit more general than that. You create a system, add entities to that system, and add
components to those entities. You then define a chain of system functions (for example, rendering, input,
AI) and the system is passed through that chain. Each system function gets the entities and components it
needs and handles updating them for their particular purpose.

The [brute demo code](https://github.com/markmandel/brute-play-pong) defines most of its components as
Clojure records, as brute handles keeping track of entities. brute exposes a few methods to get all
entities with a particular type of component. For this purpose it uses the ClojureScript `type` function.
(Well, when running in ClojureScript. For Clojure, it uses the `class` function.) Internally, it uses the
type information as keys into a map.

So I realized that I would need a way to keep track of which components had actions for which stages. For
example, if I was going to have a sprite component, it should make sure to load the image asset during
Preload, and create the sprite during Create. Clojure protocols seemed the perfect abstraction. And it
would have worked, perhaps... In Clojure.

The main issue is that ClojureScript does not have as strong run-time reflection support for protocols as
Clojure, and that the use of the `type` function didn't really expose what I can do there. The
`satisfies?` function exists to check protocol satisfaction, but that works on an individual object, not
the type information as brute was using for keys. Additionally, it's really a macro and must take a known
symbol at compile time. Clojure `extends?` is what I would have wanted, but that's not available in
ClojureScript.

Day 1 was basically lost figuring all this out. I spent the first half of Day 2 continuing trying to make
it work. When deciding to cut my losses, I had the realization that I really was not representing my case
accurately. I split the Preload functions into an `Asset` protocol, and added an `get-assets` method to
the `Component` protocol. I completely ignored the brute way of getting components to just
`doseq` through all entities. I didn't want to break brute's contract, but I didn't want to completely
discard it. It's kind of still there, but it's vestigial, and I don't want to code my own version right
now. I also wanted to add some defensive coding to my processing functions, but I couldn't get it
working, and decided to just assume my components were using my protocols. After all, I didn't get into
this to write an entity-component system!

So a frustrating two days, but I'm through that. And yes, this was a little bit of rat-holing (lol), but
I've been able to cut it off way better than I've ever done in the past. Onward to actually interesting
parts!
