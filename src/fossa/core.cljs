(ns fossa.core
  (:require [brute.entity :as b.entity]
            [brute.system :as b.system]
            [phzr.core :as p.core]
            [phzr.game :as p.game]
            [phzr.game-object-factory :as p.factory]
            [phzr.loader :as p.loader]
            [phzr.world :as p.world]))

(enable-console-print!)

(defonce *system* (atom nil))

(defprotocol Asset
  (asset-type [this] "Returns a string describing the asset type")
  (asset-key [this] "Returns a key to be used to access the asset.")
  (preload-asset [this system loader] "Called during the preload stage"))

(defrecord Image [asset-key path]
  Asset
  (asset-type [_] "image")
  (asset-key [_] asset-key)
  (preload-asset [_ _ loader]
    (p.loader/image loader asset-key path)))

(defprotocol Component
  (get-assets [this system] "Returns a seq of assets necessary for this component")
  (create-component [this system] "Called during the create stage")
  (update-component [this system] "Called during the update stage"))

(defrecord Sprite [initial-x initial-y asset-key image-path]
  Component
  (get-assets [_ _] [(->Image asset-key image-path)])
  (create-component [_ system]
    (let [factory (-> system :game :add)]
      (p.factory/sprite factory initial-x initial-y asset-key)))
  (update-component [_ system] system))

(defn preload-assets! [game]
  (let [system @*system*
        loader (-> system :game :load)]
    (doseq [entity (b.entity/get-all-entities system)]
      (doseq [component (b.entity/get-all-components-on-entity system entity)]
        (doseq [asset (get-assets component system)]
            (preload-asset asset system loader))))
    (reset! *system* system)))

(defn create-entity-components! [game]
  (let [system @*system*]
    (doseq [entity (b.entity/get-all-entities system)]
      (doseq [component (b.entity/get-all-components-on-entity system entity)]
        (create-component component system)))
    (reset! *system* system)))

(defn update-entity-components! [game]
  (let [system @*system*]
    (doseq [entity (b.entity/get-all-entities system)]
      (doseq [component (b.entity/get-all-components-on-entity system entity)]
        (update-component component system)))
    (reset! *system* system)))

(def game-width 768)
(def game-height 576)
(defn get-new-game-object []
  (p.game/->Game
    game-width
    game-height
    (p.core/phaser-constants :auto)
    "phzr-game"
    {"preload" preload-assets!
     "create" create-entity-components!
     "update" update-entity-components!}))

(defn define-entities [system]
  (let [mouse (b.entity/create-entity)
        background (b.entity/create-entity)]
    (-> system
        (b.entity/add-entity background)
        (b.entity/add-component background (->Sprite 0 0 "background" "assets/images/background.png"))
        (b.entity/add-entity mouse)
        (b.entity/add-component mouse (->Sprite 344 264 "mouse" "assets/images/mouse.png")))))

(defn create-system! []
  (when-let [curr-game (:game @*system*)]
    (p.game/destroy curr-game))
  (-> (b.entity/create-system)
      (assoc :game (get-new-game-object))
      (define-entities)
      (as-> s (reset! *system* s))))

(create-system!)

(defn on-js-reload [])
