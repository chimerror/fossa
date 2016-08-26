// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('fossa.dungeon');
goog.require('cljs.core');
goog.require('fossa.group');
goog.require('phzr.core');
goog.require('phzr.sprite');
goog.require('phzr.game_object_factory');
goog.require('brute.entity');
goog.require('fossa.input');
goog.require('fossa.exploration_path');
goog.require('fossa.component');
goog.require('phzr.world');
goog.require('phzr.point');
goog.require('cljs.pprint');
goog.require('fossa.rendering');
goog.require('fossa.party_member');
goog.require('phzr.button');
goog.require('phzr.loader');
goog.require('fossa.dialogue');
goog.require('phzr.signal');
fossa.dungeon.initial_dungeon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$paths,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$southwest,null,cljs.core.cst$kw$south,null,cljs.core.cst$kw$northeast,null,cljs.core.cst$kw$north,null], null), null),cljs.core.cst$kw$safe_DASH_path,cljs.core.cst$kw$southwest,cljs.core.cst$kw$liars,(2)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$paths,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$southeast,null,cljs.core.cst$kw$northeast,null,cljs.core.cst$kw$north,null], null), null),cljs.core.cst$kw$safe_DASH_path,cljs.core.cst$kw$north,cljs.core.cst$kw$liars,(1)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$paths,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$southwest,null,cljs.core.cst$kw$south,null,cljs.core.cst$kw$northwest,null], null), null),cljs.core.cst$kw$safe_DASH_path,cljs.core.cst$kw$northwest,cljs.core.cst$kw$liars,(4)], null)], null);
fossa.dungeon.preload_assets = (function fossa$dungeon$preload_assets(loader){
var G__30523 = loader;
phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$6(G__30523,"button","assets/images/button.png",(190),(49),(2));

phzr.loader.image.cljs$core$IFn$_invoke$arity$3(G__30523,"paper","assets/images/paper.png");

phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$6(G__30523,"square-button","assets/images/square_button.png",(49),(49),(2));

phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$6(G__30523,"direction-arrows","assets/images/direction_arrows.png",(50),(50),(6));

phzr.loader.image.cljs$core$IFn$_invoke$arity$3(G__30523,"dungeon-status","assets/images/panel.png");

return G__30523;
});
fossa.dungeon.update_dungeon_status = (function fossa$dungeon$update_dungeon_status(system){
var map__30528 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.DungeonStatus);
var map__30528__$1 = ((((!((map__30528 == null)))?((((map__30528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30528):map__30528);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30528__$1,cljs.core.cst$kw$text);
var map__30529 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.Dungeon);
var map__30529__$1 = ((((!((map__30529 == null)))?((((map__30529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30529):map__30529);
var rooms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30529__$1,cljs.core.cst$kw$rooms);
var current_room = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30529__$1,cljs.core.cst$kw$current_DASH_room);
var rooms_left = (cljs.core.count(rooms) - current_room);
var liar_count = fossa.party_member.get_liar_count(system);
phzr.core.pset_BANG_(text,cljs.core.cst$kw$text,cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Subject #2 Rank:~%TERRIBLE~%Room(s) left: ~D~%Exp. Subjects: ~D",cljs.core.array_seq([rooms_left,liar_count], 0)));

return system;
});
fossa.dungeon.initialize_dungeon = (function fossa$dungeon$initialize_dungeon(system){
var dungeon_entity = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.Dungeon));
var dungeon = brute.entity.get_component(system,dungeon_entity,fossa.component.Dungeon);
var current_room = cljs.core.cst$kw$rooms.cljs$core$IFn$_invoke$arity$1(dungeon).call(null,cljs.core.cst$kw$current_DASH_room.cljs$core$IFn$_invoke$arity$1(dungeon));
return fossa.dungeon.update_dungeon_status(fossa.party_member.set_liars(fossa.group.move_all_members_back_to_unassigned(fossa.exploration_path.update_exploration_paths(system,cljs.core.cst$kw$paths.cljs$core$IFn$_invoke$arity$1(current_room))),cljs.core.cst$kw$liars.cljs$core$IFn$_invoke$arity$1(current_room)));
});
fossa.dungeon.create_explore_button = (function fossa$dungeon$create_explore_button(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var phzr_button = phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$10(factory,(0),(0),"button",null,null,(0),(0),(1),(0));
var phzr_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),"Explore");
fossa.input.set_event_callback_BANG_(phzr_button,cljs.core.cst$kw$on_DASH_input_DASH_up,cljs.core.cst$kw$pressed_DASH_explore_DASH_button);

phzr.button.add_child(phzr_button,phzr_text);

var G__30533_30534 = phzr_text;
phzr.core.pset_BANG_(G__30533_30534,cljs.core.cst$kw$font,"Cutive, Courier, MS Courier New, monospace");

phzr.core.pset_BANG_(G__30533_30534,cljs.core.cst$kw$fill,"#000000");

phzr.core.pset_BANG_(G__30533_30534,cljs.core.cst$kw$align,"center");

phzr.core.pset_BANG_(G__30533_30534,cljs.core.cst$kw$anchor,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));

phzr.core.pset_BANG_(G__30533_30534,cljs.core.cst$kw$x,(95));

phzr.core.pset_BANG_(G__30533_30534,cljs.core.cst$kw$y,(25));


return phzr_button;
});
fossa.dungeon.create_exploration_results_sprite = (function fossa$dungeon$create_exploration_results_sprite(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var G__30536 = fossa.rendering.create_phzr_sprite(phzr_game,"exploration-results","paper",(500),(600));
phzr.core.pset_BANG_(G__30536,cljs.core.cst$kw$anchor,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));

phzr.core.pset_BANG_(G__30536,cljs.core.cst$kw$angle,(-15));

phzr.core.pset_BANG_(G__30536,cljs.core.cst$kw$input_DASH_enabled,true);

phzr.core.pset_BANG_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(G__30536),cljs.core.cst$kw$priority_DASH_id,(0));

phzr.signal.add.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_input_DASH_down.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(G__30536)),((function (G__30536,phzr_game){
return (function (sprite,_){
return phzr.core.pset_BANG_(sprite,cljs.core.cst$kw$visible,false);
});})(G__30536,phzr_game))
);

phzr.core.pset_BANG_(G__30536,cljs.core.cst$kw$visible,false);

phzr.core.pset_BANG_(G__30536,cljs.core.cst$kw$z,(64));

return G__30536;
});
fossa.dungeon.exploration_results_original_text = [cljs.core.str("N - Yes: Ann, Brenda / No: Charles\n"),cljs.core.str("NE - Yes: Deborah / No: Edward, Frank\n"),cljs.core.str("SE - Yes: Gary, Harold / No: Irene\n"),cljs.core.str("S - Yes: James / No: Karen, Linda\n"),cljs.core.str("SW - No: Ann, Brenda, Charles, Deborah\n"),cljs.core.str("NW - Yes: Edward, Frank, Gary Harold\n")].join('');
fossa.dungeon.create_exploration_results_text = (function fossa$dungeon$create_exploration_results_text(system,sprite){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var phzr_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),fossa.dungeon.exploration_results_original_text);
phzr.sprite.add_child(sprite,phzr_text);

var G__30538 = phzr_text;
phzr.core.pset_BANG_(G__30538,cljs.core.cst$kw$font,"Just Me Again Down Here, MV Boli, Apple Chancery, Zapfino, cursive");

phzr.core.pset_BANG_(G__30538,cljs.core.cst$kw$font_DASH_size,(40));

phzr.core.pset_BANG_(G__30538,cljs.core.cst$kw$fill,"#000000");

phzr.core.pset_BANG_(G__30538,cljs.core.cst$kw$align,"left");

phzr.core.pset_BANG_(G__30538,cljs.core.cst$kw$word_DASH_wrap,true);

phzr.core.pset_BANG_(G__30538,cljs.core.cst$kw$word_DASH_wrap_DASH_width,(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sprite) - (150)));

phzr.core.pset_BANG_(G__30538,cljs.core.cst$kw$x,(-270));

phzr.core.pset_BANG_(G__30538,cljs.core.cst$kw$y,(-460));

return G__30538;
});
fossa.dungeon.movement_results_original_text = "We moved SW. It was UNSAFE!!!";
fossa.dungeon.create_movement_results_text = (function fossa$dungeon$create_movement_results_text(system,sprite){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var phzr_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),fossa.dungeon.movement_results_original_text);
phzr.sprite.add_child(sprite,phzr_text);

var G__30540 = phzr_text;
phzr.core.pset_BANG_(G__30540,cljs.core.cst$kw$visible,false);

phzr.core.pset_BANG_(G__30540,cljs.core.cst$kw$font,"Just Me Again Down Here, MV Boli, Apple Chancery, Zapfino, cursive");

phzr.core.pset_BANG_(G__30540,cljs.core.cst$kw$font_DASH_size,(40));

phzr.core.pset_BANG_(G__30540,cljs.core.cst$kw$fill,"#ff0000");

phzr.core.pset_BANG_(G__30540,cljs.core.cst$kw$align,"center");

phzr.core.pset_BANG_(G__30540,cljs.core.cst$kw$word_DASH_wrap,true);

phzr.core.pset_BANG_(G__30540,cljs.core.cst$kw$word_DASH_wrap_DASH_width,(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sprite) - (150)));

phzr.core.pset_BANG_(G__30540,cljs.core.cst$kw$x,(-210));

phzr.core.pset_BANG_(G__30540,cljs.core.cst$kw$y,(-160));

return G__30540;
});
fossa.dungeon.create_exploration_results_navigation = (function fossa$dungeon$create_exploration_results_navigation(system,sprite){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var previous_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),"<Previous");
var next_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),"Next>");
var seq__30549_30557 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [previous_text,next_text], null));
var chunk__30550_30558 = null;
var count__30551_30559 = (0);
var i__30552_30560 = (0);
while(true){
if((i__30552_30560 < count__30551_30559)){
var text_30561 = chunk__30550_30558.cljs$core$IIndexed$_nth$arity$2(null,i__30552_30560);
phzr.sprite.add_child(sprite,text_30561);

var G__30553_30562 = text_30561;
phzr.core.pset_BANG_(G__30553_30562,cljs.core.cst$kw$font,"Just Me Again Down Here, MV Boli, Apple Chancery, Zapfino, cursive");

phzr.core.pset_BANG_(G__30553_30562,cljs.core.cst$kw$font_DASH_size,(60));

phzr.core.pset_BANG_(G__30553_30562,cljs.core.cst$kw$fill,"#0000ff");

phzr.signal.add.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_input_DASH_over.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(G__30553_30562)),((function (seq__30549_30557,chunk__30550_30558,count__30551_30559,i__30552_30560,G__30553_30562,text_30561,phzr_game,factory,previous_text,next_text){
return (function (sprite__$1,_){
return phzr.core.pset_BANG_(sprite__$1,cljs.core.cst$kw$fill,"#ff0000");
});})(seq__30549_30557,chunk__30550_30558,count__30551_30559,i__30552_30560,G__30553_30562,text_30561,phzr_game,factory,previous_text,next_text))
);

phzr.signal.add.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_input_DASH_out.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(G__30553_30562)),((function (seq__30549_30557,chunk__30550_30558,count__30551_30559,i__30552_30560,G__30553_30562,text_30561,phzr_game,factory,previous_text,next_text){
return (function (sprite__$1,_){
return phzr.core.pset_BANG_(sprite__$1,cljs.core.cst$kw$fill,"#0000ff");
});})(seq__30549_30557,chunk__30550_30558,count__30551_30559,i__30552_30560,G__30553_30562,text_30561,phzr_game,factory,previous_text,next_text))
);

phzr.core.pset_BANG_(G__30553_30562,cljs.core.cst$kw$input_DASH_enabled,true);

phzr.core.pset_BANG_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(G__30553_30562),cljs.core.cst$kw$priority_DASH_id,(1));

phzr.core.pset_BANG_(G__30553_30562,cljs.core.cst$kw$y,(-525));


var G__30563 = seq__30549_30557;
var G__30564 = chunk__30550_30558;
var G__30565 = count__30551_30559;
var G__30566 = (i__30552_30560 + (1));
seq__30549_30557 = G__30563;
chunk__30550_30558 = G__30564;
count__30551_30559 = G__30565;
i__30552_30560 = G__30566;
continue;
} else {
var temp__4657__auto___30567 = cljs.core.seq(seq__30549_30557);
if(temp__4657__auto___30567){
var seq__30549_30568__$1 = temp__4657__auto___30567;
if(cljs.core.chunked_seq_QMARK_(seq__30549_30568__$1)){
var c__21059__auto___30569 = cljs.core.chunk_first(seq__30549_30568__$1);
var G__30570 = cljs.core.chunk_rest(seq__30549_30568__$1);
var G__30571 = c__21059__auto___30569;
var G__30572 = cljs.core.count(c__21059__auto___30569);
var G__30573 = (0);
seq__30549_30557 = G__30570;
chunk__30550_30558 = G__30571;
count__30551_30559 = G__30572;
i__30552_30560 = G__30573;
continue;
} else {
var text_30574 = cljs.core.first(seq__30549_30568__$1);
phzr.sprite.add_child(sprite,text_30574);

var G__30554_30575 = text_30574;
phzr.core.pset_BANG_(G__30554_30575,cljs.core.cst$kw$font,"Just Me Again Down Here, MV Boli, Apple Chancery, Zapfino, cursive");

phzr.core.pset_BANG_(G__30554_30575,cljs.core.cst$kw$font_DASH_size,(60));

phzr.core.pset_BANG_(G__30554_30575,cljs.core.cst$kw$fill,"#0000ff");

phzr.signal.add.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_input_DASH_over.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(G__30554_30575)),((function (seq__30549_30557,chunk__30550_30558,count__30551_30559,i__30552_30560,G__30554_30575,text_30574,seq__30549_30568__$1,temp__4657__auto___30567,phzr_game,factory,previous_text,next_text){
return (function (sprite__$1,_){
return phzr.core.pset_BANG_(sprite__$1,cljs.core.cst$kw$fill,"#ff0000");
});})(seq__30549_30557,chunk__30550_30558,count__30551_30559,i__30552_30560,G__30554_30575,text_30574,seq__30549_30568__$1,temp__4657__auto___30567,phzr_game,factory,previous_text,next_text))
);

phzr.signal.add.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_input_DASH_out.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(G__30554_30575)),((function (seq__30549_30557,chunk__30550_30558,count__30551_30559,i__30552_30560,G__30554_30575,text_30574,seq__30549_30568__$1,temp__4657__auto___30567,phzr_game,factory,previous_text,next_text){
return (function (sprite__$1,_){
return phzr.core.pset_BANG_(sprite__$1,cljs.core.cst$kw$fill,"#0000ff");
});})(seq__30549_30557,chunk__30550_30558,count__30551_30559,i__30552_30560,G__30554_30575,text_30574,seq__30549_30568__$1,temp__4657__auto___30567,phzr_game,factory,previous_text,next_text))
);

phzr.core.pset_BANG_(G__30554_30575,cljs.core.cst$kw$input_DASH_enabled,true);

phzr.core.pset_BANG_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(G__30554_30575),cljs.core.cst$kw$priority_DASH_id,(1));

phzr.core.pset_BANG_(G__30554_30575,cljs.core.cst$kw$y,(-525));


var G__30576 = cljs.core.next(seq__30549_30568__$1);
var G__30577 = null;
var G__30578 = (0);
var G__30579 = (0);
seq__30549_30557 = G__30576;
chunk__30550_30558 = G__30577;
count__30551_30559 = G__30578;
i__30552_30560 = G__30579;
continue;
}
} else {
}
}
break;
}

var G__30555_30580 = previous_text;
fossa.input.set_event_callback_BANG_(G__30555_30580,cljs.core.cst$kw$on_DASH_input_DASH_up,cljs.core.cst$kw$pressed_DASH_previous_DASH_results);

phzr.core.pset_BANG_(G__30555_30580,cljs.core.cst$kw$align,"left");

phzr.core.pset_BANG_(G__30555_30580,cljs.core.cst$kw$x,(-270));


var G__30556_30581 = next_text;
fossa.input.set_event_callback_BANG_(G__30556_30581,cljs.core.cst$kw$on_DASH_input_DASH_up,cljs.core.cst$kw$pressed_DASH_next_DASH_results);

phzr.core.pset_BANG_(G__30556_30581,cljs.core.cst$kw$align,"right");

phzr.core.pset_BANG_(G__30556_30581,cljs.core.cst$kw$x,(145));


return fossa.component.__GT_ResultsNavigation((0),previous_text,next_text);
});
fossa.dungeon.create_results_button = (function fossa$dungeon$create_results_button(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var phzr_button = phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$10(factory,(0),(526),"button",null,null,(0),(0),(1),(0));
var phzr_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),"Results");
fossa.input.set_event_callback_BANG_(phzr_button,cljs.core.cst$kw$on_DASH_input_DASH_up,cljs.core.cst$kw$pressed_DASH_results_DASH_button);

phzr.button.add_child(phzr_button,phzr_text);

var G__30583_30584 = phzr_text;
phzr.core.pset_BANG_(G__30583_30584,cljs.core.cst$kw$font,"Cutive, Courier, MS Courier New, monospace");

phzr.core.pset_BANG_(G__30583_30584,cljs.core.cst$kw$fill,"#000000");

phzr.core.pset_BANG_(G__30583_30584,cljs.core.cst$kw$align,"center");

phzr.core.pset_BANG_(G__30583_30584,cljs.core.cst$kw$anchor,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));

phzr.core.pset_BANG_(G__30583_30584,cljs.core.cst$kw$x,(95));

phzr.core.pset_BANG_(G__30583_30584,cljs.core.cst$kw$y,(25));


return phzr_button;
});
fossa.dungeon.create_movement_button_icon = (function fossa$dungeon$create_movement_button_icon(factory,button,i){
var button_icon = phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$5(factory,(0),(0),"direction-arrows",i);
return phzr.button.add_child(button,button_icon);
});
fossa.dungeon.create_movement_button_text = (function fossa$dungeon$create_movement_button_text(factory,button,i){
var direction = (fossa.exploration_path.directions.cljs$core$IFn$_invoke$arity$1 ? fossa.exploration_path.directions.cljs$core$IFn$_invoke$arity$1(i) : fossa.exploration_path.directions.call(null,i));
var direction_text = (fossa.dungeon.direction_abbreviation.cljs$core$IFn$_invoke$arity$1 ? fossa.dungeon.direction_abbreviation.cljs$core$IFn$_invoke$arity$1(direction) : fossa.dungeon.direction_abbreviation.call(null,direction));
var button_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),direction_text);
phzr.button.add_child(button,button_text);

var G__30586 = button_text;
phzr.core.pset_BANG_(G__30586,cljs.core.cst$kw$font,"Cutive, Courier, MS Courier New, monospace");

phzr.core.pset_BANG_(G__30586,cljs.core.cst$kw$font_DASH_size,(15));

phzr.core.pset_BANG_(G__30586,cljs.core.cst$kw$fill,"#ffffff");

phzr.core.pset_BANG_(G__30586,cljs.core.cst$kw$align,"center");

phzr.core.pset_BANG_(G__30586,cljs.core.cst$kw$anchor,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));

phzr.core.pset_BANG_(G__30586,cljs.core.cst$kw$x,(25));

phzr.core.pset_BANG_(G__30586,cljs.core.cst$kw$y,(25));

return G__30586;
});
fossa.dungeon.movement_buttons_coordinates = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(25)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(75)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(100)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(75)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(25)], null)], null);
fossa.dungeon.create_movement_button = (function fossa$dungeon$create_movement_button(button_map,i,factory,group){
var direction = (fossa.exploration_path.directions.cljs$core$IFn$_invoke$arity$1 ? fossa.exploration_path.directions.cljs$core$IFn$_invoke$arity$1(i) : fossa.exploration_path.directions.call(null,i));
var tint = (fossa.exploration_path.hex_tints.cljs$core$IFn$_invoke$arity$1 ? fossa.exploration_path.hex_tints.cljs$core$IFn$_invoke$arity$1(i) : fossa.exploration_path.hex_tints.call(null,i));
var coordinates = (fossa.dungeon.movement_buttons_coordinates.cljs$core$IFn$_invoke$arity$1 ? fossa.dungeon.movement_buttons_coordinates.cljs$core$IFn$_invoke$arity$1(i) : fossa.dungeon.movement_buttons_coordinates.call(null,i));
var button = phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$11(factory,(0),(0),"square-button",null,null,(0),(0),(1),(0),group);
fossa.dungeon.create_movement_button_icon(factory,button,i);

fossa.dungeon.create_movement_button_text(factory,button,i);

phzr.core.pset_BANG_(button,cljs.core.cst$kw$tint,tint);

phzr.core.pset_BANG_(button,cljs.core.cst$kw$x,(coordinates.cljs$core$IFn$_invoke$arity$1 ? coordinates.cljs$core$IFn$_invoke$arity$1((0)) : coordinates.call(null,(0))));

phzr.core.pset_BANG_(button,cljs.core.cst$kw$y,(coordinates.cljs$core$IFn$_invoke$arity$1 ? coordinates.cljs$core$IFn$_invoke$arity$1((1)) : coordinates.call(null,(1))));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(button_map,direction,button);
});
fossa.dungeon.create_movement_buttons = (function fossa$dungeon$create_movement_buttons(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var group = fossa.group.create_phzr_group(phzr_game,"movement buttons",(600),(415));
var button_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (phzr_game,factory,group){
return (function (p1__30587_SHARP_,p2__30588_SHARP_){
return fossa.dungeon.create_movement_button(p1__30587_SHARP_,p2__30588_SHARP_,factory,group);
});})(phzr_game,factory,group))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
var entity = brute.entity.create_entity();
phzr.core.pset_BANG_(group,cljs.core.cst$kw$z,(48));

return brute.entity.add_component(brute.entity.add_entity(system,entity),entity,fossa.component.__GT_MovementButtons(button_map,group));
});
fossa.dungeon.dungeon_status_original_text = "Subject #2 Rank:\nTERRIBLE\nRoom(s) left: 10\nExp. Subjects: 10";
fossa.dungeon.create_dungeon_status = (function fossa$dungeon$create_dungeon_status(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var sprite = fossa.rendering.create_phzr_sprite(phzr_game,"dungeon-status","dungeon-status",(890),(80));
var text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),fossa.dungeon.dungeon_status_original_text);
var dungeon_status = brute.entity.create_entity();
var G__30591_30593 = sprite;
phzr.core.pset_BANG_(G__30591_30593,cljs.core.cst$kw$anchor,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));

phzr.core.pset_BANG_(G__30591_30593,cljs.core.cst$kw$visible,true);

phzr.core.pset_BANG_(G__30591_30593,cljs.core.cst$kw$z,(48));

phzr.sprite.add_child(G__30591_30593,text);


var G__30592_30594 = text;
phzr.core.pset_BANG_(G__30592_30594,cljs.core.cst$kw$font,"Cutive, Courier, MS Courier New, monospace");

phzr.core.pset_BANG_(G__30592_30594,cljs.core.cst$kw$font_DASH_size,(20));

phzr.core.pset_BANG_(G__30592_30594,cljs.core.cst$kw$fill,"#000000");

phzr.core.pset_BANG_(G__30592_30594,cljs.core.cst$kw$align,"left");

phzr.core.pset_BANG_(G__30592_30594,cljs.core.cst$kw$anchor,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));

phzr.core.pset_BANG_(G__30592_30594,cljs.core.cst$kw$word_DASH_wrap,true);

phzr.core.pset_BANG_(G__30592_30594,cljs.core.cst$kw$word_DASH_wrap_DASH_width,(250));

phzr.core.pset_BANG_(G__30592_30594,cljs.core.cst$kw$x,(-230));

phzr.core.pset_BANG_(G__30592_30594,cljs.core.cst$kw$y,(-10));


return brute.entity.add_component(brute.entity.add_entity(system,dungeon_status),dungeon_status,fossa.component.__GT_DungeonStatus(sprite,text));
});
fossa.dungeon.create_entities = (function fossa$dungeon$create_entities(system){
var dungeon = brute.entity.create_entity();
var explore_button = brute.entity.create_entity();
var explore_phzr_button = fossa.dungeon.create_explore_button(system);
var exploration_results = brute.entity.create_entity();
var exploration_results_sprite = fossa.dungeon.create_exploration_results_sprite(system);
var exploration_results_text = fossa.dungeon.create_exploration_results_text(system,exploration_results_sprite);
var movement_results = brute.entity.create_entity();
var movement_results_text = fossa.dungeon.create_movement_results_text(system,exploration_results_sprite);
var results_navigation = fossa.dungeon.create_exploration_results_navigation(system,exploration_results_sprite);
var results_button_entity = brute.entity.create_entity();
var results_button = fossa.dungeon.create_results_button(system);
return fossa.dungeon.initialize_dungeon(fossa.dungeon.create_dungeon_status(fossa.dungeon.create_movement_buttons(brute.entity.add_component(brute.entity.add_entity(brute.entity.add_component(brute.entity.add_entity(brute.entity.add_component(brute.entity.add_component(brute.entity.add_component(brute.entity.add_component(brute.entity.add_entity(brute.entity.add_component(brute.entity.add_entity(brute.entity.add_component(brute.entity.add_entity(system,dungeon),dungeon,fossa.component.__GT_Dungeon(fossa.dungeon.initial_dungeon,(0))),explore_button),explore_button,fossa.component.__GT_ExploreButton(explore_phzr_button)),exploration_results),exploration_results,fossa.component.__GT_Sprite(exploration_results_sprite)),exploration_results,fossa.component.__GT_Text(exploration_results_text)),exploration_results,results_navigation),exploration_results,fossa.component.__GT_ExplorationResults(cljs.core.PersistentVector.EMPTY)),movement_results),movement_results,fossa.component.__GT_MovementResults(cljs.core.PersistentArrayMap.EMPTY,movement_results_text)),results_button_entity),results_button_entity,fossa.component.__GT_ResultsButton(results_button)))));
});
fossa.dungeon.liar_truth_percentage = 0.25;
fossa.dungeon.get_answer = (function fossa$dungeon$get_answer(party_member,is_it_safe_QMARK_){
if(cljs.core.not(cljs.core.cst$kw$is_DASH_liar.cljs$core$IFn$_invoke$arity$1(party_member))){
return is_it_safe_QMARK_;
} else {
if(cljs.core.truth_(is_it_safe_QMARK_)){
return false;
} else {
return (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > fossa.dungeon.liar_truth_percentage);

}
}
});
fossa.dungeon.explore_path = (function fossa$dungeon$explore_path(system,result_map,direction,explorers,safe_path){
var explorers_components = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30595_SHARP_){
return brute.entity.get_component(system,p1__30595_SHARP_,fossa.component.PartyMember);
}),explorers);
var is_it_safe_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,safe_path);
var grouped_members = cljs.core.group_by(((function (explorers_components,is_it_safe_QMARK_){
return (function (p1__30596_SHARP_){
return fossa.dungeon.get_answer(p1__30596_SHARP_,is_it_safe_QMARK_);
});})(explorers_components,is_it_safe_QMARK_))
,explorers_components);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result_map,direction,grouped_members);
});
fossa.dungeon.explore_paths = (function fossa$dungeon$explore_paths(system,paths,safe_path){
var exploration_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30597_SHARP_){
return fossa.exploration_path.get_exploration_path_by_direction(system,p1__30597_SHARP_);
}),paths);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exploration_paths){
return (function (p1__30599_SHARP_,p2__30600_SHARP_){
return fossa.dungeon.explore_path(system,p1__30599_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2__30600_SHARP_,(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2__30600_SHARP_,(1)),safe_path);
});})(exploration_paths))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.zipmap(paths,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (exploration_paths){
return (function (p1__30598_SHARP_){
return fossa.component.get_group_members_from_entity(system,p1__30598_SHARP_);
});})(exploration_paths))
,exploration_paths)));
});
fossa.dungeon.direction_abbreviation = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$north,"N",cljs.core.cst$kw$northeast,"NE",cljs.core.cst$kw$southeast,"SE",cljs.core.cst$kw$south,"S",cljs.core.cst$kw$southwest,"SW",cljs.core.cst$kw$northwest,"NW"], null);
fossa.dungeon.get_direction_result = (function fossa$dungeon$get_direction_result(p__30601){
var vec__30605 = p__30601;
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30605,(0),null);
var answers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30605,(1),null);
var yes_answers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$member_DASH_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(answers,true));
var no_answers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$member_DASH_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(answers,false));
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~A- Yes:~[ no one~*~:;~{ ~A~}~]/ No:~[ no one~*~:;~{ ~A~}~]~%",cljs.core.array_seq([cljs.core.get.cljs$core$IFn$_invoke$arity$2(fossa.dungeon.direction_abbreviation,direction),cljs.core.count(yes_answers),yes_answers,cljs.core.count(no_answers),no_answers], 0));
});
fossa.dungeon.get_exploration_text = (function fossa$dungeon$get_exploration_text(results_map){
var lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(fossa.dungeon.get_direction_result,results_map);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lines);
});
fossa.dungeon.update_movement_text = (function fossa$dungeon$update_movement_text(system){
var map__30615 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.ResultsNavigation);
var map__30615__$1 = ((((!((map__30615 == null)))?((((map__30615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30615):map__30615);
var current_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30615__$1,cljs.core.cst$kw$current_DASH_result);
var map__30616 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.MovementResults);
var map__30616__$1 = ((((!((map__30616 == null)))?((((map__30616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30616):map__30616);
var previous_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30616__$1,cljs.core.cst$kw$previous_DASH_results);
var movement_results_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30616__$1,cljs.core.cst$kw$movement_DASH_results_DASH_text);
var temp__4655__auto___30622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(previous_results,current_result);
if(cljs.core.truth_(temp__4655__auto___30622)){
var map__30619_30623 = temp__4655__auto___30622;
var map__30619_30624__$1 = ((((!((map__30619_30623 == null)))?((((map__30619_30623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30619_30623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30619_30623):map__30619_30623);
var direction_30625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30619_30624__$1,cljs.core.cst$kw$direction);
var was_safe_QMARK__30626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30619_30624__$1,cljs.core.cst$kw$was_DASH_safe_QMARK_);
var G__30621_30627 = movement_results_text;
phzr.core.pset_BANG_(G__30621_30627,cljs.core.cst$kw$fill,(cljs.core.truth_(was_safe_QMARK__30626)?"#009900":"#ff0000"));

phzr.core.pset_BANG_(G__30621_30627,cljs.core.cst$kw$text,cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"- We moved ~A. It was ~:[UNSAFE!!!~;safe.~] -",cljs.core.array_seq([cljs.core.get.cljs$core$IFn$_invoke$arity$2(fossa.dungeon.direction_abbreviation,direction_30625),was_safe_QMARK__30626], 0)));

phzr.core.pset_BANG_(G__30621_30627,cljs.core.cst$kw$visible,true);

} else {
phzr.core.pset_BANG_(movement_results_text,cljs.core.cst$kw$visible,false);
}

return system;
});
fossa.dungeon.update_results_navigation = (function fossa$dungeon$update_results_navigation(system){
var results_navigation = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.ResultsNavigation));
var map__30630 = brute.entity.get_component(system,results_navigation,fossa.component.ResultsNavigation);
var map__30630__$1 = ((((!((map__30630 == null)))?((((map__30630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30630):map__30630);
var current_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30630__$1,cljs.core.cst$kw$current_DASH_result);
var previous_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30630__$1,cljs.core.cst$kw$previous_DASH_text);
var next_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30630__$1,cljs.core.cst$kw$next_DASH_text);
var exploration_results_entity = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.ExplorationResults));
var exploration_results = cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,exploration_results_entity,fossa.component.ExplorationResults));
var exploration_results_text = fossa.component.get_phzr_text_from_entity(system,exploration_results_entity);
var new_exploration_text = fossa.dungeon.get_exploration_text(cljs.core.get.cljs$core$IFn$_invoke$arity$2(exploration_results,current_result));
phzr.core.pset_BANG_(previous_text,cljs.core.cst$kw$visible,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_result,(0)));

phzr.core.pset_BANG_(next_text,cljs.core.cst$kw$visible,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_result,(cljs.core.count(exploration_results) - (1))));

phzr.core.pset_BANG_(exploration_results_text,cljs.core.cst$kw$text,new_exploration_text);

return fossa.dungeon.update_movement_text(system);
});
fossa.dungeon.get_current_dungeon_room = (function fossa$dungeon$get_current_dungeon_room(system){
var map__30634 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.Dungeon);
var map__30634__$1 = ((((!((map__30634 == null)))?((((map__30634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30634):map__30634);
var rooms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30634__$1,cljs.core.cst$kw$rooms);
var current_room = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30634__$1,cljs.core.cst$kw$current_DASH_room);
return (rooms.cljs$core$IFn$_invoke$arity$1 ? rooms.cljs$core$IFn$_invoke$arity$1(current_room) : rooms.call(null,current_room));
});
fossa.dungeon.do_exploration = (function fossa$dungeon$do_exploration(system){
var current_room = fossa.dungeon.get_current_dungeon_room(system);
var exploration_results_map = fossa.dungeon.explore_paths(system,cljs.core.cst$kw$paths.cljs$core$IFn$_invoke$arity$1(current_room),cljs.core.cst$kw$safe_DASH_path.cljs$core$IFn$_invoke$arity$1(current_room));
var exploration_results_string = fossa.dungeon.get_exploration_text(exploration_results_map);
var exploration_results_entity = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.ExplorationResults));
var exploration_results_component = brute.entity.get_component(system,exploration_results_entity,fossa.component.ExplorationResults);
var previous_results = cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(exploration_results_component);
var exploration_results_sprite = fossa.component.get_phzr_sprite_from_entity(system,exploration_results_entity);
var exploration_results_text = fossa.component.get_phzr_text_from_entity(system,exploration_results_entity);
var results_navigation_entity = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.ResultsNavigation));
var map__30638 = brute.entity.get_component(system,results_navigation_entity,fossa.component.ResultsNavigation);
var map__30638__$1 = ((((!((map__30638 == null)))?((((map__30638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30638):map__30638);
var previous_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30638__$1,cljs.core.cst$kw$previous_DASH_text);
var next_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30638__$1,cljs.core.cst$kw$next_DASH_text);
phzr.core.pset_BANG_(exploration_results_text,cljs.core.cst$kw$text,exploration_results_string);

phzr.core.pset_BANG_(exploration_results_sprite,cljs.core.cst$kw$visible,true);

phzr.world.bring_to_top(cljs.core.cst$kw$world.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system)),exploration_results_sprite);

return fossa.dungeon.update_results_navigation(brute.entity.add_component(brute.entity.add_component(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system,cljs.core.cst$kw$explored_DASH_this_DASH_turn,true),exploration_results_entity,fossa.component.__GT_ExplorationResults(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(previous_results,exploration_results_map))),results_navigation_entity,fossa.component.__GT_ResultsNavigation(cljs.core.count(previous_results),previous_text,next_text)));
});
fossa.dungeon.handle_explore_button = (function fossa$dungeon$handle_explore_button(system){
var explore_button = cljs.core.cst$kw$phzr_DASH_button.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.ExploreButton));
var unassigned_members = cljs.core.cst$kw$members.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$3(system,fossa.component.UnassignedMembers,fossa.component.Group));
var exploration_results_sprite = cljs.core.cst$kw$phzr_DASH_sprite.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$3(system,fossa.component.ExplorationResults,fossa.component.Sprite));
phzr.core.pset_BANG_(explore_button,cljs.core.cst$kw$visible,(cljs.core.empty_QMARK_(unassigned_members)) && (cljs.core.not(cljs.core.cst$kw$visible.cljs$core$IFn$_invoke$arity$1(exploration_results_sprite))));

if(cljs.core.truth_(fossa.input.event_happened_in_system_QMARK_(system,cljs.core.cst$kw$pressed_DASH_explore_DASH_button))){
return fossa.dungeon.do_exploration(fossa.input.consume_event_from_system(system,cljs.core.cst$kw$pressed_DASH_explore_DASH_button));
} else {
return system;
}
});
fossa.dungeon.handle_results_navigation = (function fossa$dungeon$handle_results_navigation(system){
var results_navigation_entity = fossa.component.get_singleton_entity(system,fossa.component.ResultsNavigation);
var map__30642 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.ResultsNavigation);
var map__30642__$1 = ((((!((map__30642 == null)))?((((map__30642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30642):map__30642);
var result_navigation_component = map__30642__$1;
var current_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30642__$1,cljs.core.cst$kw$current_DASH_result);
var previous_pressed_QMARK_ = fossa.input.event_happened_in_system_QMARK_(system,cljs.core.cst$kw$pressed_DASH_previous_DASH_results);
var next_pressed_QMARK_ = fossa.input.event_happened_in_system_QMARK_(system,cljs.core.cst$kw$pressed_DASH_next_DASH_results);
var exploration_results_count = cljs.core.count(cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.ExplorationResults)));
if(cljs.core.truth_((function (){var or__20248__auto__ = previous_pressed_QMARK_;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return next_pressed_QMARK_;
}
})())){
var updated_result = (cljs.core.truth_(previous_pressed_QMARK_)?(function (){var x__20579__auto__ = (current_result - (1));
var y__20580__auto__ = (0);
return ((x__20579__auto__ > y__20580__auto__) ? x__20579__auto__ : y__20580__auto__);
})():(function (){var x__20586__auto__ = (current_result + (1));
var y__20587__auto__ = (exploration_results_count - (1));
return ((x__20586__auto__ < y__20587__auto__) ? x__20586__auto__ : y__20587__auto__);
})());
return fossa.dungeon.update_results_navigation(brute.entity.add_component((function (){var sys = system;
if(cljs.core.truth_(previous_pressed_QMARK_)){
return fossa.input.consume_event_from_system(sys,cljs.core.cst$kw$pressed_DASH_previous_DASH_results);
} else {
return fossa.input.consume_event_from_system(sys,cljs.core.cst$kw$pressed_DASH_next_DASH_results);
}
})(),results_navigation_entity,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result_navigation_component,cljs.core.cst$kw$current_DASH_result,updated_result)));
} else {
return system;
}
});
fossa.dungeon.handle_results_button = (function fossa$dungeon$handle_results_button(system){
var map__30646 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.ResultsButton);
var map__30646__$1 = ((((!((map__30646 == null)))?((((map__30646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30646):map__30646);
var phzr_button = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30646__$1,cljs.core.cst$kw$phzr_DASH_button);
var exploration_results_count = cljs.core.count(cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.ExplorationResults)));
var exploration_results_sprite = cljs.core.cst$kw$phzr_DASH_sprite.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$3(system,fossa.component.ExplorationResults,fossa.component.Sprite));
var results_navigation_entity = fossa.component.get_singleton_entity(system,fossa.component.ResultsNavigation);
var results_navigation_component = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.ResultsNavigation);
phzr.core.pset_BANG_(phzr_button,cljs.core.cst$kw$visible,(cljs.core.not(cljs.core.cst$kw$visible.cljs$core$IFn$_invoke$arity$1(exploration_results_sprite))) && ((exploration_results_count > (0))));

if(cljs.core.truth_(fossa.input.event_happened_in_system_QMARK_(system,cljs.core.cst$kw$pressed_DASH_results_DASH_button))){
var sys = fossa.dungeon.update_results_navigation(brute.entity.add_component(fossa.input.consume_event_from_system(system,cljs.core.cst$kw$pressed_DASH_results_DASH_button),results_navigation_entity,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(results_navigation_component,cljs.core.cst$kw$current_DASH_result,(exploration_results_count - (1)))));
phzr.core.pset_BANG_(exploration_results_sprite,cljs.core.cst$kw$visible,true);

phzr.world.bring_to_top(cljs.core.cst$kw$world.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(sys)),exploration_results_sprite);

return sys;
} else {
return system;
}
});
fossa.dungeon.move_to_next_room = (function fossa$dungeon$move_to_next_room(system,direction){
var dungeon = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.Dungeon);
var dungeon_entity = fossa.component.get_singleton_entity(system,fossa.component.Dungeon);
var map__30650 = fossa.dungeon.get_current_dungeon_room(system);
var map__30650__$1 = ((((!((map__30650 == null)))?((((map__30650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30650):map__30650);
var safe_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30650__$1,cljs.core.cst$kw$safe_DASH_path);
var movement_results_entity = fossa.component.get_singleton_entity(system,fossa.component.MovementResults);
var movement_results_component = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.MovementResults);
var previous_results = cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(movement_results_component);
var current_exploration = (cljs.core.count(cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.ExplorationResults))) - (1));
var move_is_safe_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,safe_path);
var new_previous_results = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(previous_results,current_exploration,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$was_DASH_safe_QMARK_,move_is_safe_QMARK_], null));
return fossa.dialogue.start_dialogue(fossa.dungeon.initialize_dungeon(brute.entity.add_component(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(brute.entity.add_component(system,movement_results_entity,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(movement_results_component,cljs.core.cst$kw$previous_DASH_results,new_previous_results)),cljs.core.cst$kw$explored_DASH_this_DASH_turn,false),dungeon_entity,fossa.component.__GT_Dungeon(cljs.core.cst$kw$rooms.cljs$core$IFn$_invoke$arity$1(dungeon),(cljs.core.cst$kw$current_DASH_room.cljs$core$IFn$_invoke$arity$1(dungeon) + (1))))),((move_is_safe_QMARK_)?cljs.core.cst$kw$right_DASH_path:cljs.core.cst$kw$wrong_DASH_path));
});
fossa.dungeon.handle_movement_buttons = (function fossa$dungeon$handle_movement_buttons(system){
var exploration_results_sprite = cljs.core.cst$kw$phzr_DASH_sprite.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$3(system,fossa.component.ExplorationResults,fossa.component.Sprite));
var map__30667 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.MovementButtons);
var map__30667__$1 = ((((!((map__30667 == null)))?((((map__30667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30667):map__30667);
var movement_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30667__$1,cljs.core.cst$kw$movement_DASH_buttons);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30667__$1,cljs.core.cst$kw$group);
var direction_pressed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (exploration_results_sprite,map__30667,map__30667__$1,movement_buttons,group){
return (function (p1__30652_SHARP_){
return fossa.input.just_pressed(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__30652_SHARP_,(1)));
});})(exploration_results_sprite,map__30667,map__30667__$1,movement_buttons,group))
,movement_buttons)),(0));
var map__30668 = fossa.dungeon.get_current_dungeon_room(system);
var map__30668__$1 = ((((!((map__30668 == null)))?((((map__30668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30668):map__30668);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30668__$1,cljs.core.cst$kw$paths);
phzr.core.pset_BANG_(group,cljs.core.cst$kw$visible,(function (){var and__20236__auto__ = cljs.core.not(cljs.core.cst$kw$visible.cljs$core$IFn$_invoke$arity$1(exploration_results_sprite));
if(and__20236__auto__){
return cljs.core.cst$kw$explored_DASH_this_DASH_turn.cljs$core$IFn$_invoke$arity$1(system);
} else {
return and__20236__auto__;
}
})());

var seq__30671_30681 = cljs.core.seq(movement_buttons);
var chunk__30672_30682 = null;
var count__30673_30683 = (0);
var i__30674_30684 = (0);
while(true){
if((i__30674_30684 < count__30673_30683)){
var vec__30675_30685 = chunk__30672_30682.cljs$core$IIndexed$_nth$arity$2(null,i__30674_30684);
var direction_30686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30675_30685,(0),null);
var button_30687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30675_30685,(1),null);
phzr.core.pset_BANG_(button_30687,cljs.core.cst$kw$visible,(paths.cljs$core$IFn$_invoke$arity$1 ? paths.cljs$core$IFn$_invoke$arity$1(direction_30686) : paths.call(null,direction_30686)));

var G__30688 = seq__30671_30681;
var G__30689 = chunk__30672_30682;
var G__30690 = count__30673_30683;
var G__30691 = (i__30674_30684 + (1));
seq__30671_30681 = G__30688;
chunk__30672_30682 = G__30689;
count__30673_30683 = G__30690;
i__30674_30684 = G__30691;
continue;
} else {
var temp__4657__auto___30692 = cljs.core.seq(seq__30671_30681);
if(temp__4657__auto___30692){
var seq__30671_30693__$1 = temp__4657__auto___30692;
if(cljs.core.chunked_seq_QMARK_(seq__30671_30693__$1)){
var c__21059__auto___30694 = cljs.core.chunk_first(seq__30671_30693__$1);
var G__30695 = cljs.core.chunk_rest(seq__30671_30693__$1);
var G__30696 = c__21059__auto___30694;
var G__30697 = cljs.core.count(c__21059__auto___30694);
var G__30698 = (0);
seq__30671_30681 = G__30695;
chunk__30672_30682 = G__30696;
count__30673_30683 = G__30697;
i__30674_30684 = G__30698;
continue;
} else {
var vec__30678_30699 = cljs.core.first(seq__30671_30693__$1);
var direction_30700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30678_30699,(0),null);
var button_30701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30678_30699,(1),null);
phzr.core.pset_BANG_(button_30701,cljs.core.cst$kw$visible,(paths.cljs$core$IFn$_invoke$arity$1 ? paths.cljs$core$IFn$_invoke$arity$1(direction_30700) : paths.call(null,direction_30700)));

var G__30702 = cljs.core.next(seq__30671_30693__$1);
var G__30703 = null;
var G__30704 = (0);
var G__30705 = (0);
seq__30671_30681 = G__30702;
chunk__30672_30682 = G__30703;
count__30673_30683 = G__30704;
i__30674_30684 = G__30705;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_((function (){var and__20236__auto__ = fossa.input.blackout_expired_QMARK_(system,cljs.core.cst$kw$just_DASH_pressed_DASH_movement_DASH_button);
if(cljs.core.truth_(and__20236__auto__)){
return direction_pressed;
} else {
return and__20236__auto__;
}
})())){
return fossa.dungeon.move_to_next_room(fossa.input.update_blackout_property.cljs$core$IFn$_invoke$arity$2(system,cljs.core.cst$kw$just_DASH_pressed_DASH_movement_DASH_button),direction_pressed);
} else {
return system;
}
});
fossa.dungeon.process_one_game_tick = (function fossa$dungeon$process_one_game_tick(system){
return fossa.dungeon.handle_movement_buttons(fossa.dungeon.handle_results_navigation(fossa.dungeon.handle_explore_button(fossa.dungeon.handle_results_button(system))));
});
