(ns fossa.input
  (:require [phzr.core :as p.core]
            [phzr.input-handler :as p.input-handler]
            [phzr.signal :as p.signal]))

(defn set-drag-enabled [input-handler enable]
  (if enable
    (p.input-handler/enable-drag input-handler false true) ; Drag from click-point, bring sprite to top
    (p.input-handler/disable-drag input-handler)))

(defn set-input-events [events on-input-down on-input-out on-input-over on-input-up]
  (when on-input-down (p.signal/add (:on-input-down events) on-input-down))
  (when on-input-out (p.signal/add (:on-input-out events) on-input-out))
  (when on-input-over (p.signal/add (:on-input-over events) on-input-over))
  (when on-input-up (p.signal/add (:on-input-up events) on-input-up)))

(defn initialize-pointer-aware [phzr-sprite on-input-down on-input-out on-input-over on-input-up]
  (doto phzr-sprite
    (p.core/pset! :input-enabled true)
    (-> :events (set-input-events on-input-down on-input-out on-input-over on-input-up))))

(defn set-drag-events [events on-drag-start on-drag-update on-drag-stop]
  (when on-drag-start (p.signal/add (:on-drag-start events) on-drag-start))
  (when on-drag-update (p.signal/add (:on-drag-update events) on-drag-update))
  (when on-drag-stop (p.signal/add (:on-drag-stop events) on-drag-stop)))

(defn initialize-draggable [phzr-sprite on-drag-start on-drag-update on-drag-stop]
  (doto phzr-sprite
    (p.core/pset! :input-enabled true)
    (-> :input (set-drag-enabled true))
    (-> :events (set-drag-events on-drag-start on-drag-update on-drag-stop))))
