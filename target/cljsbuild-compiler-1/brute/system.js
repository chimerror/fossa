// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('brute.system');
goog.require('cljs.core');
/**
 * Add a function that represents a system, e.g. Physics, Rendering, etc.
 *   This needs to be in the structure: (fn [system delta]) where 'delta' is the number of milliseconds
 *   since the last game tick. This will also need to return the system in the state you want passed to the
 *   next system-fn, and ultimately out of process-one-game-tick.
 *   This will then be called directly when `process-one-game-tick` is called
 */
brute.system.add_system_fn = (function brute$system$add_system_fn(system,system_fn){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system,cljs.core.cst$kw$system_DASH_fns,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$system_DASH_fns.cljs$core$IFn$_invoke$arity$1(system),system_fn));
});
/**
 * The function that does the actual throttling.
 */
brute.system.throttled_fn = (function brute$system$throttled_fn(system_fn,atom,threshhold,system,delta){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(atom,cljs.core._PLUS_,delta);

if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)) >= threshhold)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(atom,cljs.core._,threshhold);

return (system_fn.cljs$core$IFn$_invoke$arity$2 ? system_fn.cljs$core$IFn$_invoke$arity$2(v,delta) : system_fn.call(null,v,delta));
}),system,cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var G__27855 = ((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)) / threshhold);
return Math.floor(G__27855);
})()));
} else {
return system;
}
});
/**
 * Same as `add-system-fn`, but will only execute the `system-fn` after `threshold` milliseconds has been equalled or passed.
 */
brute.system.add_throttled_system_fn = (function brute$system$add_throttled_system_fn(system,system_fn,threshold){
return brute.system.add_system_fn(system,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(brute.system.throttled_fn,system_fn,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),threshold));
});
/**
 * Optional convenience function that calls each of the system functions that have been added in turn, with the provided delta.
 */
brute.system.process_one_game_tick = (function brute$system$process_one_game_tick(system,delta){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sys,sys_fn){
return (sys_fn.cljs$core$IFn$_invoke$arity$2 ? sys_fn.cljs$core$IFn$_invoke$arity$2(sys,delta) : sys_fn.call(null,sys,delta));
}),system,cljs.core.cst$kw$system_DASH_fns.cljs$core$IFn$_invoke$arity$1(system));
});
