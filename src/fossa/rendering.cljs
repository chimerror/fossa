(ns fossa.rendering
  (:require [phzr.core :as p.core]
            [phzr.game-object-factory :as p.factory]
            [phzr.group :as p.group]
            [phzr.tween :as p.tween]))

(def game-width 768)
(def game-height 576)

(defn create-phzr-sprite [phzr-game sprite-name asset-key initial-x initial-y]
  (let [factory (:add phzr-game)]
    (doto (p.factory/sprite factory initial-x initial-y asset-key)
      (p.core/pset! :name sprite-name))))

(defn create-phzr-sprite-in-group [group sprite-name asset-key initial-x initial-y]
  (doto (p.group/create group initial-x initial-y asset-key)
    (p.core/pset! :name sprite-name)))

(defn position-within-group [group sprite position]
  {:pre [(not= (p.group/get-index group sprite) -1)]}
     (p.group/xy group (p.group/get-index group sprite) (:x position) (:y position)))

(defn create-phzr-tween [phzr-game sprite tween-map duration tween-repeat yoyo]
  (let [factory (:add phzr-game)]
    (doto (p.factory/tween factory sprite)
      (p.tween/to tween-map duration nil false 0 tween-repeat yoyo)))) ; No easing, no auto-start, no delay
