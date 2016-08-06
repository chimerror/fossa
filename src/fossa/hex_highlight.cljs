(ns fossa.hex-highlight
  (:require [brute.entity :as b.entity]
            [phzr.core :as p.core]
            [phzr.loader :as p.loader]
            [phzr.sprite :as p.sprite]
            [phzr.tween :as p.tween]
            [fossa.component :as f.component]
            [fossa.input :as f.input]
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

(defn create-hex-highlight-sprite [phzr-game i]
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

(defn create-hex-highlight [system i]
  (let [phzr-game (:phzr-game system)
        hex-highlight (b.entity/create-entity)
        sprite (create-hex-highlight-sprite phzr-game i)
        tween (create-tween phzr-game sprite)]
    (-> system
        (b.entity/add-entity hex-highlight)
        (b.entity/add-component hex-highlight (f.component/->Sprite sprite))
        (b.entity/add-component hex-highlight (f.component/->Tween tween))
        (b.entity/add-component hex-highlight (f.component/->HexHighlight)))))

(defn create-entities [system]
  (loop [i 0 sys system]
    (if (= i 6)
      sys
      (recur (inc i) (create-hex-highlight sys i)))))

(defn process-one-game-tick [system delta]
  (let [phzr-game (:phzr-game system)
        active-pointer (-> phzr-game :input :active-pointer)
        party-members (b.entity/get-all-entities-with-component system f.component/PartyMember)
        party-member-sprites (map #(b.entity/get-component system % f.component/Sprite) party-members)
        dragged-party-member (-> (first (filter #(-> % :phzr-sprite :input :is-dragged) party-member-sprites)) :phzr-sprite)
        hex-highlights (b.entity/get-all-entities-with-component system f.component/HexHighlight)]
    (doseq [hex-highlight hex-highlights]
      (let [hex-highlight-sprite (-> (b.entity/get-component system hex-highlight f.component/Sprite) :phzr-sprite)
            hex-highlight-tween (-> (b.entity/get-component system hex-highlight f.component/Tween) :phzr-tween)]
        (if (and dragged-party-member (p.sprite/overlap hex-highlight-sprite dragged-party-member))
          (cond
            (not (:is-running hex-highlight-tween)) (p.tween/start hex-highlight-tween)
            (:is-paused hex-highlight-tween) (p.tween/resume hex-highlight-tween))
          (if (and (:is-running hex-highlight-tween) (not (:is-paused hex-highlight-tween)))
            (do
              (p.tween/pause hex-highlight-tween)
              (p.core/pset! hex-highlight-sprite :alpha 0)))))))
  system)
