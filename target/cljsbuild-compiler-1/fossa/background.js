// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('fossa.background');
goog.require('cljs.core');
goog.require('phzr.core');
goog.require('brute.entity');
goog.require('fossa.input');
goog.require('fossa.component');
goog.require('fossa.rendering');
goog.require('phzr.loader');
fossa.background.preload_assets = (function fossa$background$preload_assets(loader){
var G__30718 = loader;
phzr.loader.image.cljs$core$IFn$_invoke$arity$3(G__30718,"background","assets/images/background.png");

return G__30718;
});
fossa.background.create_background_sprite = (function fossa$background$create_background_sprite(phzr_game){
var G__30720 = fossa.rendering.create_phzr_sprite(phzr_game,"background","background",(0),(0));
phzr.core.pset_BANG_(G__30720,cljs.core.cst$kw$input_DASH_enabled,true);

fossa.input.set_event_callback_BANG_(G__30720,cljs.core.cst$kw$on_DASH_input_DASH_up,cljs.core.cst$kw$pressed_DASH_background);

return G__30720;
});
fossa.background.create_entities = (function fossa$background$create_entities(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var background = brute.entity.create_entity();
return brute.entity.add_component(brute.entity.add_component(brute.entity.add_entity(system,background),background,fossa.component.__GT_Sprite(fossa.background.create_background_sprite(phzr_game))),background,fossa.component.__GT_Background());
});
fossa.background.process_one_game_tick = (function fossa$background$process_one_game_tick(system,_){
var map__30723 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$3(system,fossa.component.ExplorationResults,fossa.component.Sprite);
var map__30723__$1 = ((((!((map__30723 == null)))?((((map__30723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30723):map__30723);
var phzr_sprite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30723__$1,cljs.core.cst$kw$phzr_DASH_sprite);
var event_happened_QMARK_ = fossa.input.event_happened_in_system_QMARK_(system,cljs.core.cst$kw$pressed_DASH_background);
if(cljs.core.truth_(event_happened_QMARK_)){
phzr.core.pset_BANG_(phzr_sprite,cljs.core.cst$kw$visible,false);

return fossa.input.consume_event_from_system(system,cljs.core.cst$kw$pressed_DASH_background);
} else {
return system;
}
});
