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

(def default-release-threshold 500)
(defn just-released [phzr-sprite]
  (-> phzr-sprite :input (p.input-handler/just-released nil default-release-threshold))) ; Use main pointer

(def default-pressed-threshold 500)
(defn just-pressed [phzr-sprite]
  (-> phzr-sprite :input (p.input-handler/just-pressed nil default-pressed-threshold))) ; Use main pointer
