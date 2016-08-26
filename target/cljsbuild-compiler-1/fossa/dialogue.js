// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('fossa.dialogue');
goog.require('cljs.core');
goog.require('fossa.group');
goog.require('phzr.core');
goog.require('phzr.sprite');
goog.require('phzr.game_object_factory');
goog.require('brute.entity');
goog.require('fossa.input');
goog.require('fossa.component');
goog.require('phzr.world');
goog.require('phzr.loader');
fossa.dialogue.preload_assets = (function fossa$dialogue$preload_assets(loader){
var G__30497 = loader;
phzr.loader.image.cljs$core$IFn$_invoke$arity$3(G__30497,"panel","assets/images/panel.png");

phzr.loader.image.cljs$core$IFn$_invoke$arity$3(G__30497,"dialogue-background","assets/images/dialogue_background.png");

phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$6(G__30497,"main-character","assets/images/main_character.png",(384),(384),(3));

return G__30497;
});
fossa.dialogue.textbox_test_text = "Jim quickly realized that the beautiful gowns are expensive. Jim quickly realized that the beautiful gowns are expensive.";
fossa.dialogue.dialogues = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$introduction,cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame,(0),cljs.core.cst$kw$text,"Hello, The scientists refer to me as Subject #2..."], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame,(2),cljs.core.cst$kw$text,"But I prefer to be called Mary-Ann!"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame,(1),cljs.core.cst$kw$text,"My fellow subjects and I have been put in an odd maze of the scientists\u2019 design..."], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame,(0),cljs.core.cst$kw$text,"...And it\u2019s up to me to lead them all out!"], null)),cljs.core.cst$kw$wrong_DASH_path,cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame,(1),cljs.core.cst$kw$text,"Oh, dear, that was the wrong path..."], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame,(0),cljs.core.cst$kw$text,"Now, let's focus on the next room!"], null)),cljs.core.cst$kw$right_DASH_path,cljs.core.list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame,(2),cljs.core.cst$kw$text,"Yes! This seems to be the right way!"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frame,(0),cljs.core.cst$kw$text,"But, I'd better stay focused..."], null))], null);
fossa.dialogue.create_entities = (function fossa$dialogue$create_entities(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var dialogue_box_entity = brute.entity.create_entity();
var group = fossa.group.create_phzr_group(phzr_game,"dialogue box",(0),(0));
var background_sprite = phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$6(factory,(0),(0),"dialogue-background",(0),group);
var character_sprite = phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$6(factory,(384),(192),"main-character",(0),group);
var textbox_sprite = phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$6(factory,(9),(400),"panel",(0),group);
var textbox_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),fossa.dialogue.textbox_test_text);
var G__30502_30506 = background_sprite;
phzr.core.pset_BANG_(G__30502_30506,cljs.core.cst$kw$input_DASH_enabled,true);

phzr.core.pset_BANG_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(G__30502_30506),cljs.core.cst$kw$priority_DASH_id,(2));

fossa.input.set_event_callback_BANG_(G__30502_30506,cljs.core.cst$kw$on_DASH_input_DASH_up,cljs.core.cst$kw$pressed_DASH_dialogue);

phzr.core.pset_BANG_(G__30502_30506,cljs.core.cst$kw$tint,(16777215));

phzr.core.pset_BANG_(G__30502_30506,cljs.core.cst$kw$alpha,0.95);


phzr.sprite.add_child(textbox_sprite,textbox_text);

var G__30503_30507 = textbox_text;
phzr.core.pset_BANG_(G__30503_30507,cljs.core.cst$kw$font,"Cutive, Courier, MS Courier New, monospace");

phzr.core.pset_BANG_(G__30503_30507,cljs.core.cst$kw$fill,"#000000");

phzr.core.pset_BANG_(G__30503_30507,cljs.core.cst$kw$align,"left");

phzr.core.pset_BANG_(G__30503_30507,cljs.core.cst$kw$word_DASH_wrap,true);

phzr.core.pset_BANG_(G__30503_30507,cljs.core.cst$kw$word_DASH_wrap_DASH_width,(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(textbox_sprite) - (100)));

phzr.core.pset_BANG_(G__30503_30507,cljs.core.cst$kw$x,(40));

phzr.core.pset_BANG_(G__30503_30507,cljs.core.cst$kw$y,(15));


phzr.core.pset_BANG_(group,cljs.core.cst$kw$visible,false);

var G__30504 = brute.entity.add_component(brute.entity.add_entity(system,dialogue_box_entity),dialogue_box_entity,fossa.component.__GT_DialogueBox(group,background_sprite,textbox_sprite,textbox_text,character_sprite));
var G__30505 = cljs.core.cst$kw$introduction;
return (fossa.dialogue.start_dialogue.cljs$core$IFn$_invoke$arity$2 ? fossa.dialogue.start_dialogue.cljs$core$IFn$_invoke$arity$2(G__30504,G__30505) : fossa.dialogue.start_dialogue.call(null,G__30504,G__30505));
});
fossa.dialogue.advance_dialogue = (function fossa$dialogue$advance_dialogue(system){
var map__30514 = system;
var map__30514__$1 = ((((!((map__30514 == null)))?((((map__30514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30514):map__30514);
var sys = map__30514__$1;
var active_dialogue = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30514__$1,cljs.core.cst$kw$active_DASH_dialogue);
var map__30515 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(sys,fossa.component.DialogueBox);
var map__30515__$1 = ((((!((map__30515 == null)))?((((map__30515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30515):map__30515);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30515__$1,cljs.core.cst$kw$group);
var textbox_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30515__$1,cljs.core.cst$kw$textbox_DASH_text);
var character_sprite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30515__$1,cljs.core.cst$kw$character_DASH_sprite);
var map__30516 = cljs.core.peek(active_dialogue);
var map__30516__$1 = ((((!((map__30516 == null)))?((((map__30516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30516):map__30516);
var dialogue = map__30516__$1;
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30516__$1,cljs.core.cst$kw$frame);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30516__$1,cljs.core.cst$kw$text);
var next_dialogues = (((dialogue == null))?null:cljs.core.pop(active_dialogue));
if((dialogue == null)){
phzr.core.pset_BANG_(group,cljs.core.cst$kw$visible,false);

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sys,cljs.core.cst$kw$active_DASH_dialogue);
} else {
phzr.core.pset_BANG_(character_sprite,cljs.core.cst$kw$frame,frame);

phzr.core.pset_BANG_(textbox_text,cljs.core.cst$kw$text,text);

phzr.core.pset_BANG_(group,cljs.core.cst$kw$visible,true);

phzr.world.bring_to_top(cljs.core.cst$kw$world.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(sys)),group);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sys,cljs.core.cst$kw$active_DASH_dialogue,next_dialogues);
}
});
fossa.dialogue.start_dialogue = (function fossa$dialogue$start_dialogue(system,dialogue_key){
return fossa.dialogue.advance_dialogue(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system,cljs.core.cst$kw$active_DASH_dialogue,cljs.core.get.cljs$core$IFn$_invoke$arity$2(fossa.dialogue.dialogues,dialogue_key)));
});
fossa.dialogue.process_one_game_tick = (function fossa$dialogue$process_one_game_tick(system){
if(cljs.core.truth_(fossa.input.event_happened_in_system_QMARK_(system,cljs.core.cst$kw$pressed_DASH_dialogue))){
return fossa.dialogue.advance_dialogue(fossa.input.consume_event_from_system(system,cljs.core.cst$kw$pressed_DASH_dialogue));
} else {
return system;
}
});
