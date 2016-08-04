(ns fossa.background
  (:require [brute.entity :as b.entity]
            [phzr.loader :as p.loader]
            [fossa.component :as f.component]
            [fossa.rendering :as f.rendering]))

(defn preload-assets [loader]
  (doto loader
    (p.loader/image "background" "assets/images/background.png")))

(defn create-entities [system]
  (let [phzr-game (:phzr-game system)
        background (b.entity/create-entity)]
    (-> system
        (b.entity/add-entity background)
        (b.entity/add-component background
                                (f.component/->Sprite
                                  (f.rendering/create-phzr-sprite phzr-game "background" "background" 0 0)))
        (b.entity/add-component background (f.component/->Background)))))
