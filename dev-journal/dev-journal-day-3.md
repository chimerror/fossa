Day Three: Et Tu, Brute!
========================

Wednesday, August 3rd, 2016
---------------------------

I can't sleep, so I guess I'll write my journal entry.

I sat down to write a draggable component that would expand a sprite so that it could be dragged around
and dropped, which was the last real important "general" functionality that I would need to actually
begin coding up a gameplay alpha. Phaser is made to be straightforward and exposes a large amount of
functionality on the `Sprite` object itself. So to make a sprite draggable, it's actually really easy
in JavaScript:

```javascript
function createSprite() {
    var mousey = game.add.sprite(0, 0, 'mouse');
    mousey.inputEnabled = true;
    mousey.input.enableDrag(false, true); // Drag from click-point, bring sprite to top
    mousey.events.onDragStop.add(checkDestination);
}

function checkDestination(item) {
    if (item.x > somethingOrAnother) {
        item.input.disableDrag();
    } else {
        doSomethingElse();
    }
}
```

Properties like `input` and `events` refer to specific `InputHandler` and `Events` classes, which
maintains good code separation.

Similarly, the ClojureScript code is straightforward, once you're used to phzr's paradigms:

```clojure
(ns example.mousey
  (:require [phzr.core :as p.core]
            [phzr.game-object-factory :as p.factory]
            [pzhr.input-handler :as p.input]
            [phzr.signal :as p.signal]))

(defn create-sprite [game]
  (let [factory (:add game)
        mousey (p.factory/sprite factory 0 0 "mouse")]
    (doto mousey
      (p.core/pset! :input-enabled true)
      (-> :input (p.input/enable-drag true false))
      (-> :events :on-drag-stop (p.signal/add check-destination)))))

(defn check-destination [item]
  (if (> (:x item) something-or-another)
    (-> item :input (p.input/disable-drag))
    (do-something-else)))
```

Now, in trying to make my things more Clojurey, I first thought that a `Draggable` component made the most
sense. So an entity with a draggable sprite would have to have two components, a `Sprite` and a `Draggable`
component. But this introduced dependencies, since `Draggable` would need to get the sprite from `Sprite`.
It also became hard for me to see how I would be able to toggle a sprite's draggability easily. I would
need to be able to edit the phzr sprite object both during Create and Update. However, under my design,
I didn't keep track of the phzr sprite object after Create. There was no way to get it back during Update.

A darkness warshed over the chimerror...

I began to reconsider the [brute demo code](https://github.com/markmandel/brute-play-pong). If you look
at its [component definitions](https://github.com/markmandel/brute-play-pong/blob/master/desktop/src-common/brute_play_pong/component.clj),
you'll notice several of them are just empty records. I was confused by this a little. I understood the
idea that this was just reifying game concepts as types, but why bother having a record if you're not
going to put anything in it?

That's when it hit me. Components were not meant to abstract away engine concepts themselves as
future-proofing. They were meant to *wrap* engine manipulation in types that *represent* game concepts.
For example, the brute demo code defines separate records for `Paddle`, `PlayerPaddle`, and `CPUPaddle`.
I had wondered why you wouldn't just have one `Paddle` record with differing AI functions, which is a
pattern I've used elsewhere. The reason why you have separate ones is because rather than thinking in an
object-oriented fashion, I should have been thinking with ~~portals~~ functions.

The other namespaces in the brute demo code did not define entity types, but *systems* for manipulating and
managing entities and their components through functions. They have some initialization functions to set
up entities, but the heavy lifting happens in a function called `process-one-game-tick`. That function is
called every game loop. So rather than having each component be aware of what steps it should take during
each stage, you reduce it down to create and update. This gives you a set of namespaces that handle
different *aspects* of the game, whether that's engine functionality or a particular type of game entity.
The core namespace just wires it all together.

So realizing brute and entity-component systems were meant to be a sort of aspect-oriented programming,
I sat down to vastly refactor to make my code more match the brute demo code. There's now a `Sprite` and
`PartyMember` record. I placed helper functions around input into an `fossa.input` namespace. brute shot
back to the front, and I was actually using it to find entities and their components as it had been
designed to do. And at the end of the day... I had a mouse I could drag around the screen with my mouse.

Not exactly how much I had hoped to have done by day three, but I now feel like I'm on my way to grokking
both entity-component systems, game engine programming, Clojure, and different programming paradigms. I
know me writing about this feels a little arcane, but my experience has been that finding descriptions in
English of how to architect your game is very hard. There's a big jump from a basic tutorial to a list of
engine functions and specific use cases, and very little writing covering that middle section, which is
probably the most important one! It's not just a problem with game programming, it's pretty rampant.

But, onward!
