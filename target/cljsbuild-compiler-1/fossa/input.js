// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('fossa.input');
goog.require('cljs.core');
goog.require('phzr.core');
goog.require('phzr.input_handler');
goog.require('phzr.signal');
fossa.input.set_drag_enabled = (function fossa$input$set_drag_enabled(input_handler,enable){
if(cljs.core.truth_(enable)){
return phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$3(input_handler,false,true);
} else {
return phzr.input_handler.disable_drag(input_handler);
}
});
fossa.input.initialize_draggable = (function fossa$input$initialize_draggable(phzr_sprite){
var G__28133 = phzr_sprite;
phzr.core.pset_BANG_(G__28133,cljs.core.cst$kw$input_DASH_enabled,true);

fossa.input.set_drag_enabled(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(G__28133),true);

return G__28133;
});
fossa.input.default_input_threshold = (500);
fossa.input.just_released = (function fossa$input$just_released(phzr_sprite){
return phzr.input_handler.just_released(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(phzr_sprite),null,fossa.input.default_input_threshold);
});
fossa.input.just_pressed = (function fossa$input$just_pressed(phzr_sprite){
return phzr.input_handler.just_pressed(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(phzr_sprite),null,fossa.input.default_input_threshold);
});
fossa.input.update_blackout_property = (function fossa$input$update_blackout_property(system,blackout_key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system,blackout_key,cljs.core.cst$kw$ms.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system)))));
});
fossa.input.blackout_expired_QMARK_ = (function fossa$input$blackout_expired_QMARK_(system,blackout_key){
var current_time = cljs.core.cst$kw$ms.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system))));
var blackout_time = (blackout_key.cljs$core$IFn$_invoke$arity$1 ? blackout_key.cljs$core$IFn$_invoke$arity$1(system) : blackout_key.call(null,system));
return ((blackout_time == null)) || (((current_time - blackout_time) > fossa.input.default_input_threshold));
});
