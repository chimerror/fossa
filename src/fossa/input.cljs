(ns fossa.input
  (:require [phzr.core :as p.core]
            [phzr.input-handler :as p.input-handler]
            [phzr.signal :as p.signal]))

(defn set-drag-enabled [input-handler enable]
  (if enable
    (p.input-handler/enable-drag input-handler false true) ; Drag from click-point, bring sprite to top
    (p.input-handler/disable-drag input-handler)))

(defn set-drag-events [events on-drag-start on-drag-update on-drag-stop]
  (when on-drag-start (p.signal/add (:on-drag-start events) on-drag-start))
  (when on-drag-update (p.signal/add (:on-drag-update events) on-drag-update))
  (when on-drag-stop (p.signal/add (:on-drag-stop events) on-drag-stop)))

(defn initialize-draggable [phzr-sprite on-drag-start on-drag-update on-drag-stop]
  (doto phzr-sprite
    (p.core/pset! :input-enabled true)
    (-> :input (set-drag-enabled true))
    (-> :events (set-drag-events on-drag-start on-drag-update on-drag-stop))))
