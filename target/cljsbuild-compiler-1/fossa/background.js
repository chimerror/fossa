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
var G__30437 = loader;
phzr.loader.image.cljs$core$IFn$_invoke$arity$3(G__30437,"background","assets/images/background.png");

return G__30437;
});
fossa.background.create_background_sprite = (function fossa$background$create_background_sprite(phzr_game){
var G__30439 = fossa.rendering.create_phzr_sprite(phzr_game,"background","background",(0),(0));
phzr.core.pset_BANG_(G__30439,cljs.core.cst$kw$input_DASH_enabled,true);

return G__30439;
});
fossa.background.create_entities = (function fossa$background$create_entities(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var background = brute.entity.create_entity();
return brute.entity.add_component(brute.entity.add_component(brute.entity.add_entity(system,background),background,fossa.component.__GT_Sprite(fossa.background.create_background_sprite(phzr_game))),background,fossa.component.__GT_Background());
});
fossa.background.process_one_game_tick = (function fossa$background$process_one_game_tick(system,_){
var background_sprite = cljs.core.cst$kw$phzr_DASH_sprite.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$3(system,fossa.component.Background,fossa.component.Sprite));
var exploration_results_entity = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.ExplorationResults));
var exploration_results_sprite = fossa.component.get_phzr_sprite_from_entity(system,exploration_results_entity);
if(cljs.core.truth_((function (){var and__20236__auto__ = fossa.input.blackout_expired_QMARK_(system,cljs.core.cst$kw$just_DASH_pressed_DASH_background);
if(cljs.core.truth_(and__20236__auto__)){
return fossa.input.just_pressed(background_sprite);
} else {
return and__20236__auto__;
}
})())){
phzr.core.pset_BANG_(exploration_results_sprite,cljs.core.cst$kw$visible,false);

return fossa.input.update_blackout_property(system,cljs.core.cst$kw$just_DASH_pressed_DASH_background);
} else {
return system;
}
});
