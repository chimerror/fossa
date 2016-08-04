(ns fossa.party-member
  (:require [brute.entity :as b.entity]
            [phzr.loader :as p.loader]
            [fossa.component :as f.component]
            [fossa.input :as f.input]
            [fossa.rendering :as f.rendering]))

(defn preload-assets [loader]
  (doto loader
    (p.loader/spritesheet "mouse" "assets/images/mouse.png" 64 64 2)))

(defn on-drag-start [phzr-sprite _ start-x start-y]
  (println (str "Started dragging " (:name phzr-sprite) " at (" start-x ", " start-y ")!")))

(defn on-drag-stop [phzr-sprite _]
  (println (str "Stopped dragging " (:name phzr-sprite) " at (" (:x phzr-sprite) ", " (:y phzr-sprite) ")!")))

(defn get-initial-position [_]
  [344 264])

(defn create-phzr-sprite [phzr-game i]
  (let [sprite-name (str "mouse" i)
        creation-point (get-initial-position i)
        x (creation-point 0)
        y (creation-point 1)]
    (-> (f.rendering/create-phzr-sprite phzr-game sprite-name "mouse" x y)
        (f.input/initialize-draggable on-drag-start nil on-drag-stop))))

(defn create-entities [system]
  (doseq [i (range 1 13)]
    (let [phzr-game (:phzr-game system)
          party-member (b.entity/create-entity)]
      (-> system
          (b.entity/add-entity party-member)
          (b.entity/add-component party-member (f.component/->Sprite (create-phzr-sprite phzr-game i)))
          (b.entity/add-component party-member (f.component/->PartyMember)))))
  system)
