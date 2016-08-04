(ns fossa.core
  (:require [brute.entity :as b.entity]
            [brute.system :as b.system]
            [phzr.core :as p.core]
            [phzr.game :as p.game]
            [phzr.game-object-factory :as p.factory]
            [phzr.loader :as p.loader]
            [fossa.component :as f.component]
            [fossa.party-member :as f.party-member]))

(enable-console-print!)

(defonce *system* (atom nil))

(defn preload-game [phzr-game]
  (let [loader (:load phzr-game)]
    (doto loader
      (p.loader/image "background" "assets/images/background.png")
      (p.loader/image "mouse" "assets/images/mouse.png"))))

(defn create-phzr-sprite! [phzr-game sprite-name asset-key initial-x initial-y]
  (let [factory (:add phzr-game)]
    (doto (p.factory/sprite factory initial-x initial-y asset-key)
      (p.core/pset! :name sprite-name))))

(defn create-entities [system]
  (let [phzr-game (:phzr-game system)
        party-member (b.entity/create-entity)
        background (b.entity/create-entity)]
    (-> system
        (b.entity/add-entity background)
        (b.entity/add-component background
                                (f.component/->Sprite (create-phzr-sprite! phzr-game "hexes" "background" 0 0)))
        (b.entity/add-entity party-member)
        (b.entity/add-component party-member
                                (f.component/->Sprite (create-phzr-sprite! phzr-game "mousey" "mouse" 344 264)))
        (b.entity/add-component party-member (f.component/->PartyMember)))))

(defn create-game! [_]
  (let [system @*system*]
    (-> system
        (create-entities)
        (f.party-member/initialize)
        (as-> s (reset! *system* s)))))

(defn update-game! [game]
  (let [system @*system*
        delta (-> game :time :physics-elapsed-ms)]
    (-> system
        (b.system/process-one-game-tick delta)
        (as-> s (reset! *system* s)))))

(def game-width 768)
(def game-height 576)
(defn get-new-phzr-game-object []
  (p.game/->Game
    game-width
    game-height
    (p.core/phaser-constants :auto)
    "phzr-game"
    {"preload" preload-game
     "create" create-game!
     "update" update-game!}))

(defn initialize-game! []
  (when-let [curr-game (:phzr-game @*system*)]
    (p.game/destroy curr-game))
  (-> (b.entity/create-system)
      (assoc :phzr-game (get-new-phzr-game-object))
      (as-> s (reset! *system* s))))

(initialize-game!)

(defn on-js-reload [])
