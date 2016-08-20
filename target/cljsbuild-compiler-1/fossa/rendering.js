// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('fossa.rendering');
goog.require('cljs.core');
goog.require('phzr.core');
goog.require('phzr.game_object_factory');
goog.require('phzr.group');
goog.require('phzr.tween');
fossa.rendering.game_width = (768);
fossa.rendering.game_height = (576);
fossa.rendering.create_phzr_sprite = (function fossa$rendering$create_phzr_sprite(phzr_game,sprite_name,asset_key,initial_x,initial_y){
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var G__27625 = phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$4(factory,initial_x,initial_y,asset_key);
phzr.core.pset_BANG_(G__27625,cljs.core.cst$kw$name,sprite_name);

return G__27625;
});
fossa.rendering.create_phzr_sprite_in_group = (function fossa$rendering$create_phzr_sprite_in_group(group,sprite_name,asset_key,initial_x,initial_y){
var G__27627 = phzr.group.create.cljs$core$IFn$_invoke$arity$4(group,initial_x,initial_y,asset_key);
phzr.core.pset_BANG_(G__27627,cljs.core.cst$kw$name,sprite_name);

return G__27627;
});
fossa.rendering.position_within_group = (function fossa$rendering$position_within_group(group,sprite,position){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(phzr.group.get_index(group,sprite),(-1))){
} else {
throw (new Error("Assert failed: (not= (p.group/get-index group sprite) -1)"));
}

return phzr.group.xy(group,phzr.group.get_index(group,sprite),cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(position),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(position));
});
fossa.rendering.create_phzr_tween = (function fossa$rendering$create_phzr_tween(phzr_game,sprite,tween_map,duration,tween_repeat,yoyo){
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var G__27629 = phzr.game_object_factory.tween(factory,sprite);
phzr.tween.to.cljs$core$IFn$_invoke$arity$8(G__27629,tween_map,duration,null,false,(0),tween_repeat,yoyo);

return G__27629;
});
