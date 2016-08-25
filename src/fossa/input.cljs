(ns fossa.input
  (:require [phzr.core :as p.core]
            [phzr.input-handler :as p.input-handler]
            [phzr.signal :as p.signal]))

(defonce *events* (atom {}))

(defn clear-events! []
  (reset! *events* {}))

(defn register-event [events event-key]
  {:post [(number? (get % event-key)), (> (get % event-key) 0)]}
  (update events event-key #(if (nil? %) 1 (inc %))))

(defn register-event! [event-key]
  (swap! *events* register-event event-key))

(defn set-event-callback! [phzr-sprite phzr-event-key fossa-event-key]
  (p.signal/add (-> phzr-sprite :events phzr-event-key) (fn [] (register-event! fossa-event-key))))

(defn get-and-set! [atm new-value]
  (loop [old-value @atm]
    (if (compare-and-set! atm old-value new-value)
      old-value
      (recur @atm))))

(defn get-events! [unhandled-events]
  (let [pending-events (get-and-set! *events* {})]
    (merge-with + unhandled-events pending-events)))

(defn event-happened? [events event-key]
  (let [event-count (get events event-key)]
    (and event-count (> event-count 0))))

(defn event-happened-in-system? [system event-key]
  (event-happened? (:events system) event-key))

(defn consume-event [events event-key]
  {:pre [(number? (get events event-key)), (> (get events event-key) 0)]}
  (update events event-key dec))

(defn consume-event-from-system [system event-key]
  (update system :events #(consume-event % event-key)))

(defn set-drag-enabled [input-handler enable]
  (if enable
    (p.input-handler/enable-drag input-handler false true) ; Drag from click-point, bring sprite to top
    (p.input-handler/disable-drag input-handler)))

(defn initialize-draggable [phzr-sprite]
  (doto phzr-sprite
    (p.core/pset! :input-enabled true)
    (-> :input (set-drag-enabled true))))

(def default-input-threshold 500)
(defn just-released [phzr-sprite]
  (-> phzr-sprite :input (p.input-handler/just-released nil default-input-threshold))) ; Use main pointer

(defn just-pressed [phzr-sprite]
  (-> phzr-sprite :input (p.input-handler/just-pressed nil default-input-threshold))) ; Use main pointer

(defn update-blackout-property
  ([system blackout-key] (update-blackout-property system blackout-key 0))
  ([system blackout-key delay]
  (assoc system blackout-key (+ delay (-> system :phzr-game :time :events :ms)))))

(defn blackout-expired? [system blackout-key]
  (let [current-time (-> system :phzr-game :time :events :ms)
        blackout-time (blackout-key system)]
    (or (nil? blackout-time) (> (- current-time blackout-time) default-input-threshold))))
