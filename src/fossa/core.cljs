(ns fossa.core
  (:require [brute.entity :as b.entity]
            [brute.system :as b.system]
            [phzr.core :as p.core]
            [phzr.game :as p.game]
            [phzr.game-object-factory :as p.factory]
            [phzr.loader :as p.loader]
            [phzr.world :as p.world]))

(enable-console-print!)

(defonce *phzr-game* (atom nil))
(defonce *systems-state* (atom nil))

(defn- preload-game [game]
  (let [loader (:load game)]
    (doto loader
      (p.loader/image "background" "assets/images/background.png")
      (p.loader/image "mouse" "assets/images/mouse.png"))))

(defn- create-game [game]
  (let [factory (:add game)
        world (:world game)]
    (p.factory/sprite factory 0 0 "background")
    (p.factory/sprite factory 344 264 "mouse")))

(defn- update-game [game])

(defn init-page! []
  (when-let [current-game @*phzr-game*]
    (p.game/destroy current-game))
  (reset! *phzr-game* (p.game/->Game 768 576 (p.core/phaser-constants :auto) "phzr-game"
                                     {"preload" preload-game
                                      "create" create-game
                                      "update" update-game})))

(init-page!)

(defn on-js-reload [])
