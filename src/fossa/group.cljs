(ns fossa.group
  (:require [brute.entity :as b.entity]
            [phzr.core :as p.core]
            [phzr.game-object-factory :as p.factory]
            [phzr.group :as p.group]
            [phzr.point :as p.point]
            [fossa.component :as f.component]
            [fossa.rendering :as f.rendering]))

(defn create-phzr-group [phzr-game group-name x y]
  (let [factory (:add phzr-game)
        stage (:stage phzr-game)]
    (doto (p.factory/group factory stage group-name)
      (p.core/pset! :x x)
      (p.core/pset! :y y))))

(defn create-group [phzr-game group-name x y]
  (f.component/->Group (create-phzr-group phzr-game group-name x y) []))

(def group-grid-width 20)
(def group-grid-height 10)
(def group-grid-rows 3)
(def group-grid-columns 4)
(def group-grid-positions
  (vec
    (for [x (range 0 (* group-grid-width (inc group-grid-columns)) group-grid-width)
          y (range 0 (* group-grid-height (inc group-grid-rows)) group-grid-height)]
      [x y])))

(defn create-sprite-in-group [system group-entity member-entity sprite-name asset-key]
  (let [group-component (b.entity/get-component system group-entity f.component/Group)
        phzr-group (:phzr-group group-component)
        group-members (:members group-component)
        next-members (conj group-members member-entity)
        next-index (:length phzr-group)
        next-position (group-grid-positions next-index)
        next-x (next-position 0)
        next-y (next-position 1)
        new-sprite (f.rendering/create-phzr-sprite-in-group
                     phzr-group sprite-name asset-key next-x next-y)]
    (-> system
        (b.entity/add-component member-entity (f.component/->Sprite new-sprite))
        (b.entity/add-component group-entity (f.component/->Group phzr-group next-members)))))

(defn group-contains-some-member [system group-entity member-entity]
  (some #(when (= member-entity %) %) (f.component/get-group-members-from-entity system group-entity)))

(defn get-group-containing-member [system member-entity]
  (->> (b.entity/get-all-entities-with-component system f.component/Group)
       (some #(when (group-contains-some-member system % member-entity) %))))

(defn move-member-to-group [system member-entity new-group-entity]
  (let [new-group-component (b.entity/get-component system new-group-entity f.component/Group)
        new-phzr-group (:phzr-group new-group-component)
        new-group-members (:members new-group-component)
        member-sprite (f.component/get-phzr-sprite-from-entity system member-entity)
        old-group-entity (get-group-containing-member system member-entity)
        old-group-component (b.entity/get-component system old-group-entity f.component/Group)
        old-phzr-group (:phzr-group old-group-component)
        old-group-members (:members old-group-component)
        next-new-members (conj new-group-members member-entity)
        next-old-members (vec (remove #(= member-entity %) old-group-members))
        next-index (:length new-phzr-group)
        next-position (group-grid-positions next-index)
        next-x (next-position 0)
        next-y (next-position 1)]
    ;(println member-entity " moves from " old-group-entity " to " new-group-entity " at " next-x ", " next-y)
    (p.group/remove-child old-phzr-group member-sprite)
    (p.group/add-child new-phzr-group member-sprite)
    (f.rendering/position-within-group new-phzr-group member-sprite (p.point/->Point next-x next-y))
    (-> system
        (b.entity/add-component old-group-entity (f.component/->Group old-phzr-group next-old-members))
        (b.entity/add-component new-group-entity (f.component/->Group new-phzr-group next-new-members)))))

(def unassigned-group-position [354 272])
(defn create-unassigned-group [phzr-game]
  (create-group
    phzr-game
    "unassigned party members"
    (unassigned-group-position 0)
    (unassigned-group-position 1)))

(defn get-unassigned-members-entity [system]
  (-> (b.entity/get-all-entities-with-component system f.component/UnassignedMembers)
      (first)))

(defn create-entities [system]
  (let [phzr-game (:phzr-game system)
        unassigned-group-entity (b.entity/create-entity)]
    (-> system
        (b.entity/add-entity unassigned-group-entity)
        (b.entity/add-component unassigned-group-entity (f.component/->UnassignedMembers))
        (b.entity/add-component unassigned-group-entity (create-unassigned-group phzr-game)))))

(defn process-one-game-tick [system delta]
  (doseq [group (b.entity/get-all-entities-with-component system f.component/Group)]
    (let [phzr-group (f.component/get-phzr-group-from-entity system group)]
        (doseq [child (:children phzr-group)
                :let [index (p.group/get-child-index phzr-group child)
                      position (group-grid-positions index)]
                :when (not (-> child :input :is-dragged))]
        (f.rendering/position-within-group phzr-group child (p.point/->Point (position 0) (position 1))))))
  system)
