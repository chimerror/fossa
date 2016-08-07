(ns fossa.party-member
  (:require [brute.entity :as b.entity]
            [phzr.core :as p.core]
            [phzr.game-object-factory :as p.factory]
            [phzr.loader :as p.loader]
            [phzr.math :as p.math]
            [phzr.point :as p.point]
            [phzr.pointer :as p.pointer]
            [fossa.component :as f.component]
            [fossa.input :as f.input]
            [fossa.rendering :as f.rendering]))

(defn preload-assets [loader]
  (doto loader
    (p.loader/spritesheet "mouse" "assets/images/mouse.png" 64 64 2)))

(def unassigned-group-position [354 272])
(defn create-unassigned-group [phzr-game]
  (let [factory (:add phzr-game)
        stage (:stage phzr-game)]
    (doto (p.factory/group factory stage "unassigned-party-members")
      (p.core/pset! :x (unassigned-group-position 0))
      (p.core/pset! :y (unassigned-group-position 1)))))

(def party-member-names
  ["Ann"
   "Brenda"
   "Charles"
   "Deborah"
   "Edward"
   "Frank"
   "Gary"
   "Harold"
   "Irene"
   "James"
   "Karen"
   "Linda"])

(def party-member-tints
  [16ra6cee3
   16r1f78b4
   16rb2df8a
   16r33a02c
   16rfb9a99
   16re31a1c
   16rfdbf6f
   16rff7f00
   16rcab2d6
   16r6a3d9a
   16rffff99
   16rb15928])

(def group-grid-width 25)
(def group-grid-height 15)
(def group-grid-rows 3)
(def group-grid-columns 4)
(def party-member-initial-positions
  (vec
    (for [x (range 0 (* group-grid-width (inc group-grid-columns)) group-grid-width)
          y (range 0 (* group-grid-height (inc group-grid-rows)) group-grid-height)]
      [x y])))

(defn create-party-member-sprite [entity group i]
  (let [sprite-name (party-member-names i)
        sprite-tint (party-member-tints i)
        sprite-position (party-member-initial-positions i)
        initial-x (sprite-position 0)
        initial-y (sprite-position 1)]
    (doto (f.rendering/create-phzr-sprite-in-group group sprite-name "mouse" initial-x initial-y)
      (p.core/pset! :anchor (p.point/->Point 0.5 0.5))
      (p.core/pset! :tint sprite-tint)
      (f.input/initialize-draggable)
      (-> :input (p.core/pset! :priority-id 1))
      (f.rendering/set-brute-entity! entity))))

(defn create-party-member [system group i]
  (let [party-member (b.entity/create-entity)]
    (-> system
      (b.entity/add-entity party-member)
      (b.entity/add-component party-member
                                (f.component/->Sprite (create-party-member-sprite party-member group i)))
      (b.entity/add-component party-member (f.component/->PartyMember)))))

(defn create-party-members [system group]
  (loop [i 0 sys system]
    (if (= i 12)
      sys
      (recur (inc i) (create-party-member sys group i)))))

(defn create-entities [system]
  (let [phzr-game (:phzr-game system)
        unassigned-group-entity (b.entity/create-entity)
        unassigned-group (create-unassigned-group phzr-game)]
    (-> system
        (b.entity/add-entity unassigned-group-entity)
        (b.entity/add-component unassigned-group-entity (f.component/->Group unassigned-group))
        (create-party-members unassigned-group))))

(defn get-dragged-party-member [system]
  (->> (b.entity/get-all-entities-with-component system f.component/PartyMember)
       (filter #(-> (f.component/get-phzr-sprite-from-entity system %) :input :is-dragged))
       (first)))

(defn get-released-party-member [system]
  (->> (b.entity/get-all-entities-with-component system f.component/PartyMember)
       (filter #(-> (f.component/get-phzr-sprite-from-entity system %)
                    (f.input/just-released)))
       (first)))

(def rotate-point (p.point/->Point 360 275))
(def rotate-adjustment 2.7488935718910690836548129603696)
(defn rotate-sprite-towards-drag [sprite]
  (let [rotation (+ rotate-adjustment
                    (p.math/angle-between-points- (:world-position sprite) rotate-point))]
    (p.core/pset! sprite :rotation rotation)))

(defn process-one-game-tick [system delta]
  (if-let [dragged-party-member (get-dragged-party-member system)]
    (doto (f.component/get-phzr-sprite-from-entity system dragged-party-member)
      (p.core/pset! :frame 1)
      (rotate-sprite-towards-drag)))
  (if-let [released-party-member (get-released-party-member system)]
    (doto (f.component/get-phzr-sprite-from-entity system released-party-member)
      (p.core/pset! :frame 0)
      (p.core/pset! :rotation 0)))
  system)
