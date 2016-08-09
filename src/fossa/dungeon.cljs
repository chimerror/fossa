(ns fossa.dungeon
  (:require [brute.entity :as b.entity]
            [fossa.component :as f.component]
            [fossa.exploration-path :as f.exploration-path]))

(def initial-dungeon
  [{:paths #{ :north :south :southwest :southeast }
    :correct-path :southwest
    :liars 0}
   {:paths #{ :north :northeast :southeast }
    :correct-path :north
    :liars 2}
   {:paths #{ :south :northwest :southwest }
    :correct-path :northwest
    :liars 4}])

(defn initialize-dungeon [system]
  (let [dungeon-entity (first (b.entity/get-all-entities-with-component system f.component/Dungeon))
        dungeon (b.entity/get-component system dungeon-entity f.component/Dungeon)
        current-room ((:rooms dungeon) (:current-room dungeon))]
    (f.exploration-path/update-exploration-paths system (:paths current-room))))

(defn create-entities [system]
  (let [dungeon (b.entity/create-entity)]
    (-> system
        (b.entity/add-entity dungeon)
        (b.entity/add-component dungeon (f.component/->Dungeon initial-dungeon 0))
        (initialize-dungeon))))

(defn move-to-next-room [system]
  (let [dungeon-entity (first (b.entity/get-all-entities-with-component system f.component/Dungeon))
        dungeon (b.entity/get-component system dungeon-entity f.component/Dungeon)]
    (-> system
        (b.entity/add-component dungeon-entity
                                (f.component/->Dungeon (:rooms dungeon) (inc (:current-room dungeon))))
        (initialize-dungeon))))
