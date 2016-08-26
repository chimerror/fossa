// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('fossa.input');
goog.require('cljs.core');
goog.require('phzr.core');
goog.require('phzr.input_handler');
goog.require('phzr.signal');
if(typeof fossa.input._STAR_events_STAR_ !== 'undefined'){
} else {
fossa.input._STAR_events_STAR_ = (function (){var G__28125 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28125) : cljs.core.atom.call(null,G__28125));
})();
}
fossa.input.clear_events_BANG_ = (function fossa$input$clear_events_BANG_(){
var G__28128 = fossa.input._STAR_events_STAR_;
var G__28129 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28128,G__28129) : cljs.core.reset_BANG_.call(null,G__28128,G__28129));
});
fossa.input.register_event = (function fossa$input$register_event(events,event_key){
var _PERCENT_ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(events,event_key,(function (p1__28130_SHARP_){
if((p1__28130_SHARP_ == null)){
return (1);
} else {
return (p1__28130_SHARP_ + (1));
}
}));
if(typeof cljs.core.get.cljs$core$IFn$_invoke$arity$2(_PERCENT_,event_key) === 'number'){
} else {
throw (new Error("Assert failed: (number? (get % event-key))"));
}

if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(_PERCENT_,event_key) > (0))){
} else {
throw (new Error("Assert failed: (> (get % event-key) 0)"));
}

return _PERCENT_;
});
fossa.input.register_event_BANG_ = (function fossa$input$register_event_BANG_(event_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fossa.input._STAR_events_STAR_,fossa.input.register_event,event_key);
});
fossa.input.set_event_callback_BANG_ = (function fossa$input$set_event_callback_BANG_(phzr_sprite,phzr_event_key,fossa_event_key){
return phzr.signal.add.cljs$core$IFn$_invoke$arity$2((function (){var G__28132 = cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(phzr_sprite);
return (phzr_event_key.cljs$core$IFn$_invoke$arity$1 ? phzr_event_key.cljs$core$IFn$_invoke$arity$1(G__28132) : phzr_event_key.call(null,G__28132));
})(),(function (){
return fossa.input.register_event_BANG_(fossa_event_key);
}));
});
fossa.input.get_and_set_BANG_ = (function fossa$input$get_and_set_BANG_(atm,new_value){
var old_value = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atm) : cljs.core.deref.call(null,atm));
while(true){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(atm,old_value,new_value))){
return old_value;
} else {
var G__28133 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atm) : cljs.core.deref.call(null,atm));
old_value = G__28133;
continue;
}
break;
}
});
fossa.input.get_events_BANG_ = (function fossa$input$get_events_BANG_(unhandled_events){
var pending_events = fossa.input.get_and_set_BANG_(fossa.input._STAR_events_STAR_,cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.array_seq([unhandled_events,pending_events], 0));
});
fossa.input.event_happened_QMARK_ = (function fossa$input$event_happened_QMARK_(events,event_key){
var event_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,event_key);
var and__20236__auto__ = event_count;
if(cljs.core.truth_(and__20236__auto__)){
return (event_count > (0));
} else {
return and__20236__auto__;
}
});
fossa.input.event_happened_in_system_QMARK_ = (function fossa$input$event_happened_in_system_QMARK_(system,event_key){
return fossa.input.event_happened_QMARK_(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(system),event_key);
});
fossa.input.consume_event = (function fossa$input$consume_event(events,event_key){
if(typeof cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,event_key) === 'number'){
} else {
throw (new Error("Assert failed: (number? (get events event-key))"));
}

if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(events,event_key) > (0))){
} else {
throw (new Error("Assert failed: (> (get events event-key) 0)"));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(events,event_key,cljs.core.dec);
});
fossa.input.consume_event_from_system = (function fossa$input$consume_event_from_system(system,event_key){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(system,cljs.core.cst$kw$events,(function (p1__28134_SHARP_){
return fossa.input.consume_event(p1__28134_SHARP_,event_key);
}));
});
fossa.input.set_drag_enabled = (function fossa$input$set_drag_enabled(input_handler,enable){
if(cljs.core.truth_(enable)){
return phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$3(input_handler,false,true);
} else {
return phzr.input_handler.disable_drag(input_handler);
}
});
fossa.input.initialize_draggable = (function fossa$input$initialize_draggable(phzr_sprite){
var G__28136 = phzr_sprite;
phzr.core.pset_BANG_(G__28136,cljs.core.cst$kw$input_DASH_enabled,true);

fossa.input.set_drag_enabled(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(G__28136),true);

return G__28136;
});
fossa.input.default_input_threshold = (500);
fossa.input.just_released = (function fossa$input$just_released(phzr_sprite){
return phzr.input_handler.just_released(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(phzr_sprite),null,fossa.input.default_input_threshold);
});
fossa.input.just_pressed = (function fossa$input$just_pressed(phzr_sprite){
return phzr.input_handler.just_pressed(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(phzr_sprite),null,fossa.input.default_input_threshold);
});
fossa.input.update_blackout_property = (function fossa$input$update_blackout_property(var_args){
var args28137 = [];
var len__21323__auto___28140 = arguments.length;
var i__21324__auto___28141 = (0);
while(true){
if((i__21324__auto___28141 < len__21323__auto___28140)){
args28137.push((arguments[i__21324__auto___28141]));

var G__28142 = (i__21324__auto___28141 + (1));
i__21324__auto___28141 = G__28142;
continue;
} else {
}
break;
}

var G__28139 = args28137.length;
switch (G__28139) {
case 2:
return fossa.input.update_blackout_property.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fossa.input.update_blackout_property.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28137.length)].join('')));

}
});

fossa.input.update_blackout_property.cljs$core$IFn$_invoke$arity$2 = (function (system,blackout_key){
return fossa.input.update_blackout_property.cljs$core$IFn$_invoke$arity$3(system,blackout_key,(0));
});

fossa.input.update_blackout_property.cljs$core$IFn$_invoke$arity$3 = (function (system,blackout_key,delay){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system,blackout_key,(delay + cljs.core.cst$kw$ms.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system))))));
});

fossa.input.update_blackout_property.cljs$lang$maxFixedArity = 3;

fossa.input.blackout_expired_QMARK_ = (function fossa$input$blackout_expired_QMARK_(system,blackout_key){
var current_time = cljs.core.cst$kw$ms.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system))));
var blackout_time = (blackout_key.cljs$core$IFn$_invoke$arity$1 ? blackout_key.cljs$core$IFn$_invoke$arity$1(system) : blackout_key.call(null,system));
return ((blackout_time == null)) || (((current_time - blackout_time) > fossa.input.default_input_threshold));
});
