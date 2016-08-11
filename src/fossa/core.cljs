(ns fossa.core
  (:require [brute.entity :as b.entity]
            [brute.system :as b.system]
            [phzr.core :as p.core]
            [phzr.game :as p.game]
            [WebFont :as wf]
            [fossa.background :as f.background]
            [fossa.dungeon :as f.dungeon]
            [fossa.exploration-path :as f.exploration-path]
            [fossa.group :as f.group]
            [fossa.party-member :as f.party-member]
            [fossa.rendering :as f.rendering]))

(enable-console-print!)

(defonce *system* (atom nil))

(defn preload-assets [phzr-game]
    (-> (:load phzr-game)
        (f.background/preload-assets)
        (f.exploration-path/preload-assets)
        (f.party-member/preload-assets)
        (f.dungeon/preload-assets)))

(defn create-game! [_]
    (-> @*system*
        (doto (-> :phzr-game :input (p.core/pset! :max-pointers 1)))
        (f.background/create-entities)
        (f.group/create-entities)
        (f.exploration-path/create-entities)
        (f.party-member/create-entities)
        (f.dungeon/create-entities)
        (as-> s (reset! *system* s))))

(defn update-game! [game]
  (let [system @*system*
        delta (-> game :time :physics-elapsed-ms)]
    (-> system
        (b.system/process-one-game-tick delta)
        (as-> s (reset! *system* s)))))

(defn get-new-phzr-game-object []
  (p.game/->Game
    f.rendering/game-width
    f.rendering/game-height
    (p.core/phaser-constants :auto)
    "phzr-game"
    {"preload" preload-assets
     "create" create-game!
     "update" update-game!}))

(defn initialize-game! []
  (when-let [curr-game (:phzr-game @*system*)]
    (p.game/destroy curr-game))
  (-> (b.entity/create-system)
      (assoc :phzr-game (get-new-phzr-game-object))
      (b.system/add-system-fn f.background/process-one-game-tick)
      (b.system/add-system-fn f.exploration-path/process-one-game-tick)
      (b.system/add-system-fn f.party-member/process-one-game-tick)
      (b.system/add-system-fn f.group/process-one-game-tick)
      (b.system/add-system-fn f.dungeon/process-one-game-tick)
      (as-> s (reset! *system* s))))

(wf/load
  (clj->js
    {:google {:families ["Cutive", "Just Me Again Down Here"]}
     :active initialize-game!
     :inactive initialize-game!}))

(defn on-js-reload [])
