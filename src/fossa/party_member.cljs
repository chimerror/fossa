(ns fossa.party-member
  (:require [brute.entity :as b.entity]
            [phzr.core :as p.core]
            [phzr.game-object-factory :as p.factory]
            [phzr.loader :as p.loader]
            [phzr.math :as p.math]
            [phzr.point :as p.point]
            [phzr.pointer :as p.pointer]
            [phzr.sprite :as p.sprite]
            [fossa.component :as f.component]
            [fossa.exploration-path :as f.exploration-path]
            [fossa.group :as f.group]
            [fossa.input :as f.input]
            [fossa.rendering :as f.rendering]))

(defn preload-assets [loader]
  (doto loader
    (p.loader/spritesheet "mouse" "assets/images/mouse.png" 64 64 2)))

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
   16re9ad5e
   16rff7f00
   16rcab2d6
   16r6a3d9a
   16rd3d471
   16rb15928])

(defn create-party-member-label [system entity label-text]
  (let [factory (-> system :phzr-game :add)
        sprite (f.component/get-phzr-sprite-from-entity system entity)
        phzr-text (p.factory/text factory 0 0 label-text)]
    (p.sprite/add-child sprite phzr-text)
    (doto phzr-text
      (p.core/pset! :font "Cutive, Courier, MS Courier New, monospace")
      (p.core/pset! :fill "#ffffff")
      (p.core/pset! :word-wrap true)
      (p.core/pset! :word-wrap-width (:width sprite))
      (p.core/pset! :align "center")
      (p.core/pset! :anchor (p.point/->Point 0.5 0.5))
      (p.core/pset! :x 5)
      (p.core/pset! :y 5)))
  system)

(defn initialize-party-member-sprite [system entity i]
  (doto (f.component/get-phzr-sprite-from-entity system entity)
    (p.core/pset! :anchor (p.point/->Point 0.5 0.5))
    (p.core/pset! :tint (party-member-tints i))
    (f.input/initialize-draggable)
    (-> :input (p.core/pset! :priority-id 1)))
  system)

(defn create-party-member [system group i]
  (let [party-member (b.entity/create-entity)
        party-member-name (party-member-names i)]
    (-> system
        (b.entity/add-entity party-member)
        (f.group/create-sprite-in-group group party-member party-member-name "mouse")
        (initialize-party-member-sprite party-member i)
        (create-party-member-label party-member (first party-member-name))
        (b.entity/add-component party-member (f.component/->PartyMember false)))))

(defn create-party-members [system group]
  (loop [i 0 sys system]
    (if (= i 12)
      sys
      (recur (inc i) (create-party-member sys group i)))))

(defn create-entities [system]
  (create-party-members system (f.group/get-unassigned-members-entity system)))

(defn get-dragged-party-member [system]
  (->> (b.entity/get-all-entities-with-component system f.component/PartyMember)
       (filter #(-> (f.component/get-phzr-sprite-from-entity system %) :input :is-dragged))
       (first)))

(defn get-released-party-member [system]
  (if (f.input/blackout-expired? system :just-released-blackout)
    (->> (b.entity/get-all-entities-with-component system f.component/PartyMember)
         (filter #(-> (f.component/get-phzr-sprite-from-entity system %)
                      (f.input/just-released)))
         (first))
    nil))

(def rotate-point (p.point/->Point 360 275))
(def rotate-adjustment 2.7488935718910690836548129603696)
(defn rotate-sprite-towards-drag [sprite]
  (let [rotation (+ rotate-adjustment
                    (p.math/angle-between-points- (:world-position sprite) rotate-point))]
    (p.core/pset! sprite :rotation rotation)))

(defn handle-dragged-party-member [system]
  (if-let [dragged-party-member (get-dragged-party-member system)]
    (let [sprite (f.component/get-phzr-sprite-from-entity system dragged-party-member)
          target-exploration-path (f.exploration-path/get-exploration-path-under-sprite system sprite)]
      (p.core/pset! sprite :frame 1)
      (rotate-sprite-towards-drag sprite)
      (if target-exploration-path
        (f.exploration-path/highlight-exploration-path system target-exploration-path)
        (f.exploration-path/dehighlight-all-exploration-paths system)))
    system))

(defn handle-released-party-member [system]
  (if-let [released-party-member (get-released-party-member system)]
    (let [released-sprite (f.component/get-phzr-sprite-from-entity system released-party-member)
          original-sprite-position (-> released-sprite :input :drag-start-point)
          original-group (f.group/get-group-containing-member system released-party-member)
          unassigned-group (f.group/get-unassigned-members-entity system)
          was-assigned (not= original-group unassigned-group)
          target-path (f.exploration-path/get-exploration-path-under-sprite system released-sprite)]
      (f.exploration-path/dehighlight-all-exploration-paths system)
      (p.core/pset! released-sprite :rotation 0)
      (-> (cond
            (and target-path (not= target-path original-group))
            (f.group/move-member-to-group system released-party-member target-path)
            (and (nil? target-path) was-assigned)
            (f.group/move-member-to-group system released-party-member unassigned-group)
            :else ; Do nothing. Group will handle drawing it.
            system)
          (f.input/update-blackout-property :just-released-blackout))) ; TODO: Yech, this is ugly!
    system))

(defn redraw-unassigned-party-members [system]
  (let [party-members (b.entity/get-all-entities-with-component system f.component/PartyMember)]
    (doseq [party-member party-members]
      (let [sprite (f.component/get-phzr-sprite-from-entity system party-member)
            group (f.group/get-group-containing-member system party-member)
            unassigned-group (f.group/get-unassigned-members-entity system)]
        (when (and (not (-> sprite :input :is-dragged)) (= group unassigned-group))
          (p.core/pset! sprite :rotation 0)
          (p.core/pset! sprite :frame 0))))
    system))

(defn set-liars [system number-of-liars]
  (let [party-members (b.entity/get-all-entities-with-component system f.component/PartyMember)
        grouped-members (group-by #(:is-liar (b.entity/get-component system % f.component/PartyMember))
                                  party-members)
        liars (get grouped-members true)
        number-of-existing-liars (count liars)
        liars-needed (- number-of-liars number-of-existing-liars)]
    (if (> liars-needed 0)
      (let [new-liars (take liars-needed (shuffle (get grouped-members false)))]
        (reduce
          (fn [system new-liar] (b.entity/add-component system new-liar
                                                        (f.component/->PartyMember true)))
          system new-liars))
      system))) ; Note we never reduce the number of liars!

(defn TEMP-get-liars [system]
  (->> (b.entity/get-all-entities-with-component system f.component/PartyMember)
       (filter #(:is-liar (b.entity/get-component system % f.component/PartyMember)))
       (map #(-> (b.entity/get-component system % f.component/Sprite) :phzr-sprite :name))))

(defn process-one-game-tick [system delta]
  (-> system
      (handle-dragged-party-member)
      (handle-released-party-member)
      (redraw-unassigned-party-members)))
