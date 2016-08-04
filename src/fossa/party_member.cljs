(ns fossa.party-member
  (:require [brute.entity :as b.entity]
            [fossa.component :as f.component]
            [fossa.input :as f.input]))

(defn on-drag-start [phzr-sprite _ start-x start-y]
  (println (str "Started dragging " (:name phzr-sprite) " at (" start-x ", " start-y ")!")))

(defn on-drag-stop [phzr-sprite _]
  (println (str "Stopped dragging " (:name phzr-sprite) " at (" (:x phzr-sprite) ", " (:y phzr-sprite) ")!")))

(defn initialize [system]
  (doseq [party-member (b.entity/get-all-entities-with-component system f.component/PartyMember)]
    (doto (:phzr-sprite (b.entity/get-component system party-member f.component/Sprite))
      (f.input/initialize-draggable on-drag-start nil on-drag-stop)))
  system)
