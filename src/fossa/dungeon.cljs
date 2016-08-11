(ns fossa.dungeon
  (:require [cljs.pprint :as c.pprint]
            [brute.entity :as b.entity]
            [phzr.button :as p.button]
            [phzr.core :as p.core]
            [phzr.game-object-factory :as p.factory]
            [phzr.loader :as p.loader]
            [phzr.point :as p.point]
            [phzr.signal :as p.signal]
            [phzr.sprite :as p.sprite]
            [fossa.component :as f.component]
            [fossa.exploration-path :as f.exploration-path]
            [fossa.group :as f.group]
            [fossa.input :as f.input]
            [fossa.party-member :as f.party-member]
            [fossa.rendering :as f.rendering]))

(def initial-dungeon
  [{:paths #{ :north :south :southwest :southeast }
    :safe-path :southwest
    :liars 2}
   {:paths #{ :north :northeast :southeast }
    :safe-path :north
    :liars 1}
   {:paths #{ :south :northwest :southwest }
    :safe-path :northwest
    :liars 4}])

(defn preload-assets [loader]
  (doto loader
    (p.loader/spritesheet "button" "assets/images/button.png" 190 49 2)
    (p.loader/image "paper" "assets/images/paper.png")
    (p.loader/spritesheet "square-button" "assets/images/square_button.png" 49 49 2)
    (p.loader/spritesheet "direction-arrows" "assets/images/direction_arrows.png" 50 50 6)))

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

(defn create-exploration-results-sprite [system]
  (let [phzr-game (:phzr-game system)]
    (doto (f.rendering/create-phzr-sprite phzr-game "exploration-results" "paper" 500 600)
      (p.core/pset! :anchor (p.point/->Point 0.5 0.5))
      (p.core/pset! :angle -15)
      (p.core/pset! :input-enabled true)
      (-> :input (p.core/pset! :priority-id 0))
      (-> :events :on-input-down (p.signal/add (fn [sprite _] (p.core/pset! sprite :visible false))))
      (p.core/pset! :visible false)
      (p.core/pset! :z 16r40))))

(def exploration-results-original-text
  (str "N - Yes: Ann, Brenda / No: Charles\n"
       "NE - Yes: Deborah / No: Edward, Frank\n"
       "SE - Yes: Gary, Harold / No: Irene\n"
       "S - Yes: James / No: Karen, Linda\n"
       "SW - No: Ann, Brenda, Charles, Deborah\n"
       "NW - Yes: Edward, Frank, Gary Harold\n"))

(defn create-exploration-results-text [system sprite]
  (let [phzr-game (:phzr-game system)
        factory (:add phzr-game)
        phzr-text (p.factory/text factory 0 0 exploration-results-original-text)]
    (p.sprite/add-child sprite phzr-text)
    (doto phzr-text
      (p.core/pset! :font "Just Me Again Down Here, MV Boli, Apple Chancery, Zapfino, cursive")
      (p.core/pset! :font-size 40)
      (p.core/pset! :fill "#000000")
      (p.core/pset! :align "left")
      (p.core/pset! :word-wrap true)
      (p.core/pset! :word-wrap-width (- (:width sprite) 150))
      (p.core/pset! :x -270)
      (p.core/pset! :y -460))))

(defn create-exploration-results-navigation [system sprite]
  (let [phzr-game (:phzr-game system)
        factory (:add phzr-game)
        previous-text (p.factory/text factory 0 0 "<Previous")
        next-text (p.factory/text factory 0 0 "Next>")]
    (doseq [text [previous-text next-text]]
    (p.sprite/add-child sprite text)
    (doto text
      (p.core/pset! :font "Just Me Again Down Here, MV Boli, Apple Chancery, Zapfino, cursive")
      (p.core/pset! :font-size 60)
      (p.core/pset! :fill "#0000ff")
      (-> :events :on-input-over (p.signal/add (fn [sprite _] (p.core/pset! sprite :fill "#ff0000"))))
      (-> :events :on-input-out (p.signal/add (fn [sprite _] (p.core/pset! sprite :fill "#0000ff"))))
      (p.core/pset! :input-enabled true)
      (-> :input (p.core/pset! :priority-id 1))
      (p.core/pset! :y -525)))
    (doto previous-text
      (p.core/pset! :align "left")
      (p.core/pset! :x -270))
    (doto next-text
      (p.core/pset! :align "right")
      (p.core/pset! :x 145))
    (f.component/->ResultsNavigation 0 previous-text next-text)))

(defn create-movement-button-icon [factory button i]
  (let [button-icon (p.factory/sprite factory 0 0 "direction-arrows" i)]
    (p.button/add-child button button-icon)))

(declare direction-abbreviation)
(defn create-movement-button-text [factory button i]
  (let [direction (f.exploration-path/directions i)
        direction-text (direction-abbreviation direction)
        button-text (p.factory/text factory 0 0 direction-text)]
    (p.button/add-child button button-text)
    (doto button-text
      (p.core/pset! :font "Cutive, Courier, MS Courier New, monospace")
      (p.core/pset! :font-size 15)
      (p.core/pset! :fill "#ffffff")
      (p.core/pset! :align "center")
      (p.core/pset! :anchor (p.point/->Point 0.5 0.5))
      (p.core/pset! :x 25)
      (p.core/pset! :y 25))))

(def movement-buttons-coordinates
  [[50 0]
   [100 25]
   [100 75]
   [50 100]
   [0 75]
   [0 25]])

(defn create-movement-button [button-map i factory group]
  (let [direction (f.exploration-path/directions i)
        tint (f.exploration-path/hex-tints i)
        coordinates (movement-buttons-coordinates i)
        button (p.factory/button factory 0 0 "square-button" nil nil 0 0 1 0 group)]
    (create-movement-button-icon factory button i)
    (create-movement-button-text factory button i)
    (p.core/pset! button :tint tint)
    (p.core/pset! button :x (coordinates 0))
    (p.core/pset! button :y (coordinates 1))
    (assoc button-map direction button)))

(defn create-movement-buttons [system]
  (let [phzr-game (:phzr-game system)
        factory (:add phzr-game)
        group (f.group/create-phzr-group phzr-game "movement buttons" 600 415)
        button-map (reduce #(create-movement-button %1 %2 factory group) {} (range 6))
        entity (b.entity/create-entity)]
    (-> system
        (b.entity/add-entity entity)
        (b.entity/add-component entity (f.component/->MovementButtons button-map group)))))

(defn create-entities [system]
  (let [dungeon (b.entity/create-entity)
        explore-button (b.entity/create-entity)
        explore-phzr-button (create-explore-button system)
        exploration-results (b.entity/create-entity)
        exploration-results-sprite (create-exploration-results-sprite system)
        exploration-results-text (create-exploration-results-text system exploration-results-sprite)
        results-navigation (create-exploration-results-navigation system exploration-results-sprite)]
    (-> system
        (b.entity/add-entity dungeon)
        (b.entity/add-component dungeon (f.component/->Dungeon initial-dungeon 0))
        (initialize-dungeon)
        (b.entity/add-entity explore-button)
        (b.entity/add-component explore-button (f.component/->ExploreButton explore-phzr-button))
        (b.entity/add-entity exploration-results)
        (b.entity/add-component exploration-results (f.component/->Sprite exploration-results-sprite))
        (b.entity/add-component exploration-results (f.component/->Text exploration-results-text))
        (b.entity/add-component exploration-results results-navigation)
        (b.entity/add-component exploration-results (f.component/->ExplorationResults []))
        (create-movement-buttons))))

(defn move-to-next-room [system direction]
  (let [dungeon-entity (first (b.entity/get-all-entities-with-component system f.component/Dungeon))
        dungeon (b.entity/get-component system dungeon-entity f.component/Dungeon)]
    (-> system
        (b.entity/add-component dungeon-entity
                                (f.component/->Dungeon (:rooms dungeon) (inc (:current-room dungeon))))
        (initialize-dungeon))))

(defn get-explore-button-entity [system]
  (-> (b.entity/get-all-entities-with-component system f.component/ExploreButton)
      (first)))

(def liar-truth-percentage .25)
(defn get-answer [party-member is-it-safe?]
  (cond
    (not (:is-liar party-member)) is-it-safe?
    is-it-safe? false ; Always lie if it's safe
    :else (> (rand) liar-truth-percentage))) ; Otherwise, small chance of telling the truth (false)

(defn explore-path [system result-map direction explorers safe-path]
  (let [explorers-components (map #(b.entity/get-component system % f.component/PartyMember) explorers)
        is-it-safe? (= direction safe-path)
        grouped-members (group-by #(get-answer % is-it-safe?) explorers-components)]
    (assoc result-map direction grouped-members)))

(defn explore-paths [system paths safe-path]
  (let [exploration-paths (map #(f.exploration-path/get-exploration-path-by-direction system %) paths)]
  (->> (zipmap paths (map #(f.component/get-group-members-from-entity system %) exploration-paths))
       (reduce #(explore-path system %1 (get %2 0) (get %2 1) safe-path) {}))))

(def direction-abbreviation
  {:north "N"
   :northeast "NE"
   :southeast "SE"
   :south "S"
   :southwest "SW"
   :northwest "NW"})

(defn get-direction-result [[direction answers]]
  (let [yes-answers (map :member-name (get answers true))
        no-answers (map :member-name (get answers false))]
    (c.pprint/cl-format
      nil
      "~A- Yes:~[ no one~*~:;~{ ~A~}~]/ No:~[ no one~*~:;~{ ~A~}~]~%"
      (get direction-abbreviation direction)
      (count yes-answers)
      yes-answers
      (count no-answers)
      no-answers)))

(defn get-exploration-text [results-map]
  (let [lines (map get-direction-result results-map)]
    (apply str lines)))

(defn update-results-navigation [system]
  (let [results-navigation (first (b.entity/get-all-entities-with-component system f.component/ResultsNavigation))
        {:keys [current-result previous-text next-text]} (b.entity/get-component system results-navigation f.component/ResultsNavigation)
        exploration-results-entity (first (b.entity/get-all-entities-with-component system f.component/ExplorationResults))
        exploration-results (:previous-results (b.entity/get-component system exploration-results-entity f.component/ExplorationResults))
        exploration-results-text (f.component/get-phzr-text-from-entity system exploration-results-entity)
        new-text (get-exploration-text (get exploration-results current-result))]
    (p.core/pset! previous-text :visible (not= current-result 0))
    (p.core/pset! next-text :visible (not= current-result (dec (count exploration-results))))
    (p.core/pset! exploration-results-text :text new-text)
    system))

(defn get-current-dungeon-room [system]
  (let [{:keys [rooms current-room]} (f.component/get-singleton-component system f.component/Dungeon)]
    (rooms current-room)))

(defn do-exploration [system]
  (let [current-room (get-current-dungeon-room system)
        exploration-results-map (explore-paths system (:paths current-room) (:safe-path current-room))
        exploration-results-string (get-exploration-text exploration-results-map)
        exploration-results-entity (first (b.entity/get-all-entities-with-component system f.component/ExplorationResults))
        exploration-results-component (b.entity/get-component system exploration-results-entity f.component/ExplorationResults)
        previous-results (:previous-results exploration-results-component)
        exploration-results-sprite (f.component/get-phzr-sprite-from-entity system exploration-results-entity)
        exploration-results-text (f.component/get-phzr-text-from-entity system exploration-results-entity)
        results-navigation-entity (first (b.entity/get-all-entities-with-component system f.component/ResultsNavigation))
        {:keys [previous-text next-text]} (b.entity/get-component system results-navigation-entity f.component/ResultsNavigation)]
    (p.core/pset! exploration-results-text :text exploration-results-string)
    (p.core/pset! exploration-results-sprite :visible true)
    (-> system
        (b.entity/add-component exploration-results-entity
          (f.component/->ExplorationResults (conj previous-results exploration-results-map)))
        (b.entity/add-component results-navigation-entity
                                (f.component/->ResultsNavigation (count previous-results) previous-text next-text))
        (update-results-navigation))))

(defn handle-explore-button [system]
  (let [explore-button-entity (get-explore-button-entity system)
        explore-button (b.entity/get-component system explore-button-entity f.component/ExploreButton)
        unassigned-group (f.group/get-unassigned-members-entity system)
        unassigned-members (f.component/get-group-members-from-entity system unassigned-group)
        exploration-results-entity (first (b.entity/get-all-entities-with-component system f.component/ExplorationResults))
        exploration-results-sprite (f.component/get-phzr-sprite-from-entity system exploration-results-entity)]
    (p.core/pset! (:phzr-button explore-button) :visible (and (empty? unassigned-members)
                                                              (not (:visible exploration-results-sprite))))
    (if (and (f.input/blackout-expired? system :just-pressed-blackout)
             (f.input/just-pressed (:phzr-button explore-button)))
      (-> system
          (f.input/update-blackout-property :just-pressed-blackout)
          (do-exploration))
      system)))

(defn handle-results-navigation [system]
  (let [results-navigation-entity (first (b.entity/get-all-entities-with-component system f.component/ResultsNavigation))
        {:keys [current-result previous-text next-text]} (b.entity/get-component system results-navigation-entity f.component/ResultsNavigation)
        previous-pressed (f.input/just-pressed previous-text)
        next-pressed (f.input/just-pressed next-text)
        exploration-results-entity (first (b.entity/get-all-entities-with-component system f.component/ExplorationResults))
        exploration-results-count (count (:previous-results (b.entity/get-component system exploration-results-entity f.component/ExplorationResults)))]
    (if (and (f.input/blackout-expired? system :just-pressed-results-nav)
             (or previous-pressed next-pressed))
      (let [updated-result (if previous-pressed
                             (max (dec current-result) 0)
                             (min (inc current-result) (dec exploration-results-count)))]
      (-> system
          (f.input/update-blackout-property :just-pressed-results-nav)
          (b.entity/add-component results-navigation-entity
                                  (f.component/->ResultsNavigation updated-result previous-text next-text))
          (update-results-navigation)))
      system)))

(defn handle-movement-buttons [system]
  (let [phzr-game (:phzr-game system)
        {:keys [movement-buttons]} (f.component/get-singleton-component system f.component/MovementButtons)
        direction-pressed (get (first (filter #(f.input/just-pressed (get % 1)) movement-buttons)) 0)
        {:keys [paths safe-path]} (get-current-dungeon-room system)]
    (doseq [[direction button] movement-buttons]
      (p.core/pset! button :visible (paths direction)))
    (if (and (f.input/blackout-expired? system :just-pressed-movement-button) direction-pressed)
      (-> system
          (f.input/update-blackout-property :just-pressed-movement-button)
          (move-to-next-room direction-pressed))
      system)))

(defn process-one-game-tick [system]
  (-> system
      (handle-explore-button)
      (handle-results-navigation)
      (handle-movement-buttons)))
