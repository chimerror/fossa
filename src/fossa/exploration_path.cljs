(ns fossa.exploration-path
  (:require [brute.entity :as b.entity]
            [phzr.core :as p.core]
            [phzr.loader :as p.loader]
            [phzr.sprite :as p.sprite]
            [phzr.tween :as p.tween]
            [fossa.component :as f.component]
            [fossa.input :as f.input]
            [fossa.party-member :as f.party-member]
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

(defn create-exploration-path-sprite [phzr-game i]
  (let [sprite-name (str "hex" i)
        creation-point (hex-coordinates i)
        x (creation-point 0)
        y (creation-point 1)
        sprite-tint (hex-tints i)]
    (doto (f.rendering/create-phzr-sprite phzr-game sprite-name "hexagon" x y)
      (p.core/pset! :tint sprite-tint)
      (p.core/pset! :alpha 0))))

(defn create-tween [phzr-game sprite]
  (f.rendering/create-phzr-tween phzr-game sprite {:alpha 1} 1000 -1 true))

(defn create-exploration-path [system i]
  (let [phzr-game (:phzr-game system)
        exploration-path (b.entity/create-entity)
        sprite (create-exploration-path-sprite phzr-game i)
        tween (create-tween phzr-game sprite)]
    (-> system
        (b.entity/add-entity exploration-path)
        (b.entity/add-component exploration-path (f.component/->Sprite sprite))
        (b.entity/add-component exploration-path (f.component/->Tween tween))
        (b.entity/add-component exploration-path (f.component/->ExplorationPath)))))

(defn create-entities [system]
  (loop [i 0 sys system]
    (if (= i 6)
      sys
      (recur (inc i) (create-exploration-path sys i)))))

(defn process-one-game-tick [system delta]
  (let [phzr-game (:phzr-game system)
        dragged-party-member-sprite (->> (f.party-member/get-dragged-party-member system)
                                         (f.component/get-phzr-sprite-from-entity system))
        exploration-paths (b.entity/get-all-entities-with-component system f.component/ExplorationPath)]
    (doseq [exploration-path exploration-paths]
      (let [exploration-path-sprite (f.component/get-phzr-sprite-from-entity system exploration-path)
            exploration-path-tween (f.component/get-phzr-tween-from-entity system exploration-path)]
        (if (and dragged-party-member-sprite
                 (p.sprite/overlap exploration-path-sprite dragged-party-member-sprite))
          (cond
            (not (:is-running exploration-path-tween)) (p.tween/start exploration-path-tween)
            (:is-paused exploration-path-tween) (p.tween/resume exploration-path-tween))
          (if (and (:is-running exploration-path-tween) (not (:is-paused exploration-path-tween)))
            (do
              (p.tween/pause exploration-path-tween)
              (p.core/pset! exploration-path-sprite :alpha 0)))))))
  system)
