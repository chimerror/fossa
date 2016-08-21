(ns fossa.input
  (:require [phzr.core :as p.core]
            [phzr.input-handler :as p.input-handler]
            [phzr.signal :as p.signal]))

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
