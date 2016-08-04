(ns fossa.hex-highlight
  (:require [brute.entity :as b.entity]
            [phzr.loader :as p.loader]
            [fossa.component :as f.component]
            [fossa.rendering :as f.rendering]))

(defn preload-assets [loader]
  (doto loader
    (p.loader/image "hexagon" "assets/images/hexagon.png")))

(defn get-hex-coordinates [i]
  (case i
    1 [322 96]
    2 [441 164]
    3 [441 300]
    4 [322 368]
    5 [204 300]
    6 [204 164]
    [0 0]))

(defn create-entities [system]
  (doseq [i (range 1 7)]
    (let [phzr-game (:phzr-game system)
          hex-highlight (b.entity/create-entity)
          sprite-name (str "hex" i)
          creation-point (get-hex-coordinates i)
          x (creation-point 0)
          y (creation-point 1)]
      (-> system
          (b.entity/add-entity hex-highlight)
          (b.entity/add-component hex-highlight
                                  (f.component/->Sprite
                                    (f.rendering/create-phzr-sprite phzr-game sprite-name "hexagon" x y)))
          (b.entity/add-component hex-highlight (f.component/->HexHighlight)))))
  system)
