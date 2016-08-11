(ns fossa.background
  (:require [brute.entity :as b.entity]
            [phzr.core :as p.core]
            [phzr.loader :as p.loader]
            [fossa.component :as f.component]
            [fossa.input :as f.input]
            [fossa.rendering :as f.rendering]))

(defn preload-assets [loader]
  (doto loader
    (p.loader/image "background" "assets/images/background.png")))

(defn create-background-sprite [phzr-game]
  (doto (f.rendering/create-phzr-sprite phzr-game "background" "background" 0 0)
    (p.core/pset! :input-enabled true)))

(defn create-entities [system]
  (let [phzr-game (:phzr-game system)
        background (b.entity/create-entity)]
    (-> system
        (b.entity/add-entity background)
        (b.entity/add-component background (f.component/->Sprite (create-background-sprite phzr-game)))
        (b.entity/add-component background (f.component/->Background)))))

(defn process-one-game-tick [system _]
  (let [background-entity (first (b.entity/get-all-entities-with-component system f.component/Background))
        background-sprite (f.component/get-phzr-sprite-from-entity system background-entity)
        exploration-results-entity (first (b.entity/get-all-entities-with-component system f.component/ExplorationResults))
        exploration-results-sprite (f.component/get-phzr-sprite-from-entity system exploration-results-entity)]
    (if (and (f.input/blackout-expired? system :just-pressed-background)
             (f.input/just-pressed background-sprite))
      (do
        (p.core/pset! exploration-results-sprite :visible false)
        (f.input/update-blackout-property system :just-pressed-background))
      system)))
