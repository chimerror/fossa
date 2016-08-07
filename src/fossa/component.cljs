(ns fossa.component
  (:require [brute.entity :as b.entity]))

; Rendering components
(defrecord Group [phzr-group])
(defn get-phzr-group-from-entity [system entity]
  (-> (b.entity/get-component system entity Group)
      :phzr-group))

(defrecord Sprite [phzr-sprite])
(defn get-phzr-sprite-from-entity [system entity]
  (-> (b.entity/get-component system entity Sprite)
      :phzr-sprite))

(defrecord Tween [phzr-tween])
(defn get-phzr-tween-from-entity [system entity]
  (-> (b.entity/get-component system entity Tween)
      :phzr-tween))

; Game components
(defrecord Background[])
(defrecord HexHighlight [])
(defrecord PartyMember [])
