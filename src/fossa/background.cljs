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
    (p.core/pset! :input-enabled true)
    (f.input/set-event-callback! :on-input-up :pressed-background)))

(defn create-entities [system]
  (let [phzr-game (:phzr-game system)
        background (b.entity/create-entity)]
    (-> system
        (b.entity/add-entity background)
        (b.entity/add-component background (f.component/->Sprite (create-background-sprite phzr-game)))
        (b.entity/add-component background (f.component/->Background)))))

(defn process-one-game-tick [system _]
  (let [{:keys [phzr-sprite]} (f.component/get-singleton-component system f.component/ExplorationResults f.component/Sprite)
        event-happened? (f.input/event-happened-in-system? system :pressed-background)]
      (if event-happened?
        (do
          (p.core/pset! phzr-sprite :visible false)
          (f.input/consume-event-from-system system :pressed-background))
      system)))
