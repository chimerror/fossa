(ns fossa.core
  (:require [brute.entity :as b.entity]
            [brute.system :as b.system]
            [phzr.core :as p.core]
            [phzr.game :as p.game]
            [fossa.background :as f.background]
            [fossa.hex-highlight :as f.hex-highlight]
            [fossa.party-member :as f.party-member]
            [fossa.rendering :as f.rendering]))

(enable-console-print!)

(defonce *system* (atom nil))

(defn preload-assets [phzr-game]
    (-> (:load phzr-game)
        (f.background/preload-assets)
        (f.hex-highlight/preload-assets)
        (f.party-member/preload-assets)))

(defn create-game! [_]
    (-> @*system*
        (doto (-> :phzr-game :input (p.core/pset! :max-pointers 1)))
        (f.background/create-entities)
        (f.hex-highlight/create-entities)
        (f.party-member/create-entities)
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
      (b.system/add-system-fn f.hex-highlight/process-one-game-tick)
      (as-> s (reset! *system* s))))

(initialize-game!)

(defn on-js-reload [])
