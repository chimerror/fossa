// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('fossa.core');
goog.require('cljs.core');
goog.require('fossa.group');
goog.require('phzr.core');
goog.require('brute.system');
goog.require('brute.entity');
goog.require('fossa.exploration_path');
goog.require('fossa.dungeon');
goog.require('fossa.rendering');
goog.require('fossa.party_member');
goog.require('fossa.background');
goog.require('phzr.game');
cljs.core.enable_console_print_BANG_();
if(typeof fossa.core._STAR_system_STAR_ !== 'undefined'){
} else {
fossa.core._STAR_system_STAR_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
fossa.core.preload_assets = (function fossa$core$preload_assets(phzr_game){
return fossa.dungeon.preload_assets(fossa.party_member.preload_assets(fossa.exploration_path.preload_assets(fossa.background.preload_assets(cljs.core.cst$kw$load.cljs$core$IFn$_invoke$arity$1(phzr_game)))));
});
fossa.core.create_game_BANG_ = (function fossa$core$create_game_BANG_(_){
var s = fossa.dungeon.create_entities(fossa.party_member.create_entities(fossa.exploration_path.create_entities(fossa.group.create_entities(fossa.background.create_entities((function (){var G__30443 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fossa.core._STAR_system_STAR_) : cljs.core.deref.call(null,fossa.core._STAR_system_STAR_));
phzr.core.pset_BANG_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(G__30443)),cljs.core.cst$kw$max_DASH_pointers,(1));

return G__30443;
})())))));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(fossa.core._STAR_system_STAR_,s) : cljs.core.reset_BANG_.call(null,fossa.core._STAR_system_STAR_,s));
});
fossa.core.update_game_BANG_ = (function fossa$core$update_game_BANG_(game){
var system = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fossa.core._STAR_system_STAR_) : cljs.core.deref.call(null,fossa.core._STAR_system_STAR_));
var delta = cljs.core.cst$kw$physics_DASH_elapsed_DASH_ms.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$time.cljs$core$IFn$_invoke$arity$1(game));
var s = brute.system.process_one_game_tick(system,delta);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(fossa.core._STAR_system_STAR_,s) : cljs.core.reset_BANG_.call(null,fossa.core._STAR_system_STAR_,s));
});
fossa.core.get_new_phzr_game_object = (function fossa$core$get_new_phzr_game_object(){
return phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$5(fossa.rendering.game_width,fossa.rendering.game_height,(phzr.core.phaser_constants.cljs$core$IFn$_invoke$arity$1 ? phzr.core.phaser_constants.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$auto) : phzr.core.phaser_constants.call(null,cljs.core.cst$kw$auto)),"phzr-game",new cljs.core.PersistentArrayMap(null, 3, ["preload",fossa.core.preload_assets,"create",fossa.core.create_game_BANG_,"update",fossa.core.update_game_BANG_], null));
});
fossa.core.initialize_game_BANG_ = (function fossa$core$initialize_game_BANG_(){
var temp__4657__auto___30444 = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fossa.core._STAR_system_STAR_) : cljs.core.deref.call(null,fossa.core._STAR_system_STAR_)));
if(cljs.core.truth_(temp__4657__auto___30444)){
var curr_game_30445 = temp__4657__auto___30444;
phzr.game.destroy(curr_game_30445);
} else {
}

var s = brute.system.add_system_fn(brute.system.add_system_fn(brute.system.add_system_fn(brute.system.add_system_fn(brute.system.add_system_fn(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(brute.entity.create_system(),cljs.core.cst$kw$phzr_DASH_game,fossa.core.get_new_phzr_game_object()),fossa.background.process_one_game_tick),fossa.exploration_path.process_one_game_tick),fossa.party_member.process_one_game_tick),fossa.group.process_one_game_tick),fossa.dungeon.process_one_game_tick);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(fossa.core._STAR_system_STAR_,s) : cljs.core.reset_BANG_.call(null,fossa.core._STAR_system_STAR_,s));
});
var G__30446_30447 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$google,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$families,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cutive","Just Me Again Down Here"], null)], null),cljs.core.cst$kw$active,fossa.core.initialize_game_BANG_,cljs.core.cst$kw$inactive,fossa.core.initialize_game_BANG_], null));
(WebFont.load.cljs$core$IFn$_invoke$arity$1 ? WebFont.load.cljs$core$IFn$_invoke$arity$1(G__30446_30447) : WebFont.load.call(null,G__30446_30447));
fossa.core.on_js_reload = (function fossa$core$on_js_reload(){
return null;
});
