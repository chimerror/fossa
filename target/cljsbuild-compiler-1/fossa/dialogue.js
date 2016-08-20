// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('fossa.dialogue');
goog.require('cljs.core');
goog.require('fossa.group');
goog.require('phzr.core');
goog.require('phzr.sprite');
goog.require('phzr.game_object_factory');
goog.require('phzr.pointer');
goog.require('brute.entity');
goog.require('fossa.input');
goog.require('fossa.component');
goog.require('phzr.loader');
fossa.dialogue.preload_assets = (function fossa$dialogue$preload_assets(loader){
var G__30451 = loader;
phzr.loader.image.cljs$core$IFn$_invoke$arity$3(G__30451,"panel","assets/images/panel.png");

phzr.loader.image.cljs$core$IFn$_invoke$arity$3(G__30451,"dialogue-background","assets/images/dialogue_background.png");

phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$6(G__30451,"main-character","assets/images/main_character.png",(384),(384),(3));

return G__30451;
});
fossa.dialogue.textbox_test_text = "Jim quickly realized that the beautiful gowns are expensive. Jim quickly realized that the beautiful gowns are expensive.";
fossa.dialogue.dialogues = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$introduction,cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame,(0),cljs.core.cst$kw$text,"Hello, The scientists refer to me as Subject #2..."], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame,(2),cljs.core.cst$kw$text,"But I prefer to be called Mary-Ann!"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame,(1),cljs.core.cst$kw$text,"My fellow subjects and I have been put in an odd maze of the scientists\u2019 design..."], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame,(0),cljs.core.cst$kw$text,"...And it\u2019s up to me to lead them all out!"], null))], null);
fossa.dialogue.create_entities = (function fossa$dialogue$create_entities(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var dialogue_box_entity = brute.entity.create_entity();
var group = fossa.group.create_phzr_group(phzr_game,"dialogue box",(0),(0));
var background_sprite = phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$6(factory,(0),(0),"dialogue-background",(0),group);
var character_sprite = phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$6(factory,(384),(192),"main-character",(0),group);
var textbox_sprite = phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$6(factory,(9),(400),"panel",(0),group);
var textbox_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),fossa.dialogue.textbox_test_text);
var G__30454_30456 = background_sprite;
phzr.core.pset_BANG_(G__30454_30456,cljs.core.cst$kw$input_DASH_enabled,true);

phzr.core.pset_BANG_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(G__30454_30456),cljs.core.cst$kw$priority_DASH_id,(2));

phzr.core.pset_BANG_(G__30454_30456,cljs.core.cst$kw$tint,(16777215));

phzr.core.pset_BANG_(G__30454_30456,cljs.core.cst$kw$alpha,0.95);


phzr.sprite.add_child(textbox_sprite,textbox_text);

var G__30455_30457 = textbox_text;
phzr.core.pset_BANG_(G__30455_30457,cljs.core.cst$kw$font,"Cutive, Courier, MS Courier New, monospace");

phzr.core.pset_BANG_(G__30455_30457,cljs.core.cst$kw$fill,"#000000");

phzr.core.pset_BANG_(G__30455_30457,cljs.core.cst$kw$align,"left");

phzr.core.pset_BANG_(G__30455_30457,cljs.core.cst$kw$word_DASH_wrap,true);

phzr.core.pset_BANG_(G__30455_30457,cljs.core.cst$kw$word_DASH_wrap_DASH_width,(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(textbox_sprite) - (100)));

phzr.core.pset_BANG_(G__30455_30457,cljs.core.cst$kw$x,(40));

phzr.core.pset_BANG_(G__30455_30457,cljs.core.cst$kw$y,(15));


phzr.core.pset_BANG_(group,cljs.core.cst$kw$visible,false);

return brute.entity.add_component(brute.entity.add_entity(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system,cljs.core.cst$kw$active_DASH_dialogue,cljs.core.cst$kw$introduction.cljs$core$IFn$_invoke$arity$1(fossa.dialogue.dialogues)),dialogue_box_entity),dialogue_box_entity,fossa.component.__GT_DialogueBox(group,background_sprite,textbox_sprite,textbox_text,character_sprite));
});
fossa.dialogue.advance_dialogue = (function fossa$dialogue$advance_dialogue(system){
var map__30464 = system;
var map__30464__$1 = ((((!((map__30464 == null)))?((((map__30464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30464):map__30464);
var sys = map__30464__$1;
var active_dialogue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30464__$1,cljs.core.cst$kw$active_DASH_dialogue);
var map__30465 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(sys,fossa.component.DialogueBox);
var map__30465__$1 = ((((!((map__30465 == null)))?((((map__30465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30465):map__30465);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30465__$1,cljs.core.cst$kw$group);
var textbox_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30465__$1,cljs.core.cst$kw$textbox_DASH_text);
var character_sprite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30465__$1,cljs.core.cst$kw$character_DASH_sprite);
var map__30466 = cljs.core.peek(active_dialogue);
var map__30466__$1 = ((((!((map__30466 == null)))?((((map__30466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30466):map__30466);
var dialogue = map__30466__$1;
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30466__$1,cljs.core.cst$kw$frame);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30466__$1,cljs.core.cst$kw$text);
var next_dialogues = (((dialogue == null))?null:cljs.core.pop(active_dialogue));
if((dialogue == null)){
phzr.core.pset_BANG_(group,cljs.core.cst$kw$visible,false);

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sys,cljs.core.cst$kw$active_DASH_dialogue);
} else {
phzr.core.pset_BANG_(character_sprite,cljs.core.cst$kw$frame,frame);

phzr.core.pset_BANG_(textbox_text,cljs.core.cst$kw$text,text);

phzr.core.pset_BANG_(group,cljs.core.cst$kw$visible,true);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sys,cljs.core.cst$kw$active_DASH_dialogue,next_dialogues);
}
});
fossa.dialogue.process_one_game_tick = (function fossa$dialogue$process_one_game_tick(system){
var input_handler = cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system));
var active_pointer = cljs.core.cst$kw$active_DASH_pointer.cljs$core$IFn$_invoke$arity$1(input_handler);
if(cljs.core.truth_((function (){var and__20236__auto__ = cljs.core.cst$kw$active_DASH_dialogue.cljs$core$IFn$_invoke$arity$1(system);
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = fossa.input.blackout_expired_QMARK_(system,cljs.core.cst$kw$clicked_DASH_dialogue);
if(cljs.core.truth_(and__20236__auto____$1)){
var and__20236__auto____$2 = active_pointer;
if(cljs.core.truth_(and__20236__auto____$2)){
return phzr.pointer.just_released.cljs$core$IFn$_invoke$arity$2(active_pointer,fossa.input.default_input_threshold);
} else {
return and__20236__auto____$2;
}
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return fossa.dialogue.advance_dialogue(fossa.input.update_blackout_property(system,cljs.core.cst$kw$clicked_DASH_dialogue));
} else {
return system;
}
});
