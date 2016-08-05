(ns fossa.rendering
  (:require [phzr.core :as p.core]
            [phzr.game-object-factory :as p.factory]
            [phzr.group :as p.group]))

(def game-width 768)
(def game-height 576)

(defn create-phzr-sprite [phzr-game sprite-name asset-key initial-x initial-y]
  (let [factory (:add phzr-game)]
    (doto (p.factory/sprite factory initial-x initial-y asset-key)
      (p.core/pset! :name sprite-name))))

(defn create-phzr-sprite-in-group [group sprite-name asset-key initial-x initial-y]
  (doto (p.group/create group initial-x initial-y asset-key)
    (p.core/pset! :name sprite-name)))
