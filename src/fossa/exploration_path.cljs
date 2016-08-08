(ns fossa.exploration-path
  (:require [brute.entity :as b.entity]
            [phzr.core :as p.core]
            [phzr.loader :as p.loader]
            [phzr.sprite :as p.sprite]
            [phzr.tween :as p.tween]
            [fossa.component :as f.component]
            [fossa.input :as f.input]
            [fossa.group :as f.group]
            [fossa.rendering :as f.rendering]))

(defn preload-assets [loader]
  (doto loader
    (p.loader/image "hexagon" "assets/images/hexagon.png")))

(def hex-coordinates
  [[322 96]
   [441 164]
   [441 300]
   [322 368]
   [204 300]
   [204 164]])

(def hex-tints
  [16r643c3b
   16r494923
   16r294f29
   16r264c4c
   16r44426c
   16r603960])

(def hex-names
  ["north"
   "northeast"
   "southeast"
   "south"
   "southwest"
   "northwest"])

(def unhighlighted-alpha 1)
(def highlighted-alpha 0)

(defn create-exploration-path-sprite [phzr-game i]
  (let [sprite-name (str (hex-names i) " sprite")
        creation-point (hex-coordinates i)
        x (creation-point 0)
        y (creation-point 1)
        sprite-tint (hex-tints i)]
    ; Note that it's not created within the group. The group is only for party-members
    (doto (f.rendering/create-phzr-sprite phzr-game sprite-name "hexagon" x y)
      (p.core/pset! :tint sprite-tint)
      (p.core/pset! :alpha unhighlighted-alpha))))

(def tween-duration 250)
(defn create-tween [phzr-game sprite]
  (f.rendering/create-phzr-tween phzr-game sprite {:alpha highlighted-alpha} tween-duration -1 true))

(def group-offset [25 30])
(def group-coordinates (vec (map #(mapv + group-offset %) hex-coordinates)))

(defn create-exploration-path [system i]
  (let [phzr-game (:phzr-game system)
        exploration-path (b.entity/create-entity)
        sprite (create-exploration-path-sprite phzr-game i)
        tween (create-tween phzr-game sprite)
        creation-point (group-coordinates i)
        x (creation-point 0)
        y (creation-point 1)
        group-name (str (hex-names i) " group")]
    (-> system
        (b.entity/add-entity exploration-path)
        (b.entity/add-component exploration-path (f.component/->Sprite sprite))
        (b.entity/add-component exploration-path (f.component/->Tween tween))
        (b.entity/add-component exploration-path (f.group/create-group phzr-game group-name x y))
        (b.entity/add-component exploration-path (f.component/->ExplorationPath)))))

(defn create-entities [system]
  (loop [i 0 sys system]
    (if (= i 6)
      sys
      (recur (inc i) (create-exploration-path sys i)))))

(defn get-exploration-path-under-sprite [system sprite]
  (if sprite
    (->> (b.entity/get-all-entities-with-component system f.component/ExplorationPath)
         (filter #(-> (f.component/get-phzr-sprite-from-entity system %) (p.sprite/overlap sprite)))
         (first))
    nil))

(defn dehighlight-exploration-path [system target-exploration-path]
  (let [exploration-path-sprite (f.component/get-phzr-sprite-from-entity system target-exploration-path)
        exploration-path-tween (f.component/get-phzr-tween-from-entity system target-exploration-path)]
    (if (and (:is-running exploration-path-tween) (not (:is-paused exploration-path-tween)))
      (do
        (p.tween/pause exploration-path-tween)
        (p.core/pset! exploration-path-sprite :alpha unhighlighted-alpha))))
  system)

(defn dehighlight-all-exploration-paths [system]
  (doseq [exploration-path (b.entity/get-all-entities-with-component system f.component/ExplorationPath)]
      (dehighlight-exploration-path system exploration-path))
  system)

(defn highlight-exploration-path [system target-exploration-path]
  (let [exploration-path-sprite (f.component/get-phzr-sprite-from-entity system target-exploration-path)
        exploration-path-tween (f.component/get-phzr-tween-from-entity system target-exploration-path)]
    (cond
      (not (:is-running exploration-path-tween)) (p.tween/start exploration-path-tween)
      (:is-paused exploration-path-tween) (p.tween/resume exploration-path-tween)))
  (let [exploration-paths (b.entity/get-all-entities-with-component system f.component/ExplorationPath)]
    (doseq [non-highlighted-exploration-path (remove #(= target-exploration-path %) exploration-paths)]
      (dehighlight-exploration-path system non-highlighted-exploration-path)))
  system)

(defn process-one-game-tick [system delta]
  system)
