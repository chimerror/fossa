(ns fossa.dungeon
  (:require [brute.entity :as b.entity]
            [phzr.button :as p.button]
            [phzr.core :as p.core]
            [phzr.game-object-factory :as p.factory]
            [phzr.loader :as p.loader]
            [phzr.point :as p.point]
            [fossa.component :as f.component]
            [fossa.exploration-path :as f.exploration-path]
            [fossa.group :as f.group]
            [fossa.input :as f.input]
            [fossa.party-member :as f.party-member]))

(def initial-dungeon
  [{:paths #{ :north :south :southwest :southeast }
    :correct-path :southwest
    :liars 2}
   {:paths #{ :north :northeast :southeast }
    :correct-path :north
    :liars 1}
   {:paths #{ :south :northwest :southwest }
    :correct-path :northwest
    :liars 4}])

(defn preload-assets [loader]
  (doto loader
    (p.loader/spritesheet "button" "assets/images/button.png" 190 49 2)))

(defn initialize-dungeon [system]
  (let [dungeon-entity (first (b.entity/get-all-entities-with-component system f.component/Dungeon))
        dungeon (b.entity/get-component system dungeon-entity f.component/Dungeon)
        current-room ((:rooms dungeon) (:current-room dungeon))]
    (-> system
        (f.exploration-path/update-exploration-paths (:paths current-room))
        (f.group/move-all-members-back-to-unassigned)
        (f.party-member/set-liars (:liars current-room)))))

(defn create-explore-button [system]
  (let [phzr-game (:phzr-game system)
        factory (:add phzr-game)
        phzr-button (p.factory/button factory 0 0 "button" nil nil 0 0 1 0)
        phzr-text (p.factory/text factory 0 0 "Explore")]
    (p.button/add-child phzr-button phzr-text)
    (doto phzr-text
      (p.core/pset! :font "Cutive, Courier, MS Courier New, monospace")
      (p.core/pset! :fill "#000000")
      (p.core/pset! :align "center")
      (p.core/pset! :anchor (p.point/->Point 0.5 0.5))
      (p.core/pset! :x 95)
      (p.core/pset! :y 25))
    phzr-button))

(defn create-entities [system]
  (let [dungeon (b.entity/create-entity)
        explore-button (b.entity/create-entity)
        explore-phzr-button (create-explore-button system)]
    (-> system
        (b.entity/add-entity dungeon)
        (b.entity/add-component dungeon (f.component/->Dungeon initial-dungeon 0))
        (initialize-dungeon)
        (b.entity/add-entity explore-button)
        (b.entity/add-component explore-button (f.component/->ExploreButton explore-phzr-button)))))

(defn move-to-next-room [system]
  (let [dungeon-entity (first (b.entity/get-all-entities-with-component system f.component/Dungeon))
        dungeon (b.entity/get-component system dungeon-entity f.component/Dungeon)]
    (-> system
        (b.entity/add-component dungeon-entity
                                (f.component/->Dungeon (:rooms dungeon) (inc (:current-room dungeon))))
        (initialize-dungeon))))

(defn get-explore-button-entity [system]
  (-> (b.entity/get-all-entities-with-component system f.component/ExploreButton)
      (first)))

(defn process-one-game-tick [system]
  (let [explore-button-entity (get-explore-button-entity system)
        explore-button (b.entity/get-component system explore-button-entity f.component/ExploreButton)
        unassigned-group (f.group/get-unassigned-members-entity system)
        unassigned-members (f.component/get-group-members-from-entity system unassigned-group)]
    (p.core/pset! (:phzr-button explore-button) :visible (empty? unassigned-members))
    (if (and (f.input/blackout-expired? system :just-pressed-blackout)
             (f.input/just-pressed (:phzr-button explore-button)))
      (-> system
          (f.input/update-blackout-property :just-pressed-blackout)
          (move-to-next-room))
      system))) ; TODO: Actually do exploration instead of moving on.
