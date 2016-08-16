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
goog.require('phzr.point');
goog.require('cljs.pprint');
goog.require('fossa.rendering');
goog.require('fossa.party_member');
goog.require('phzr.button');
goog.require('phzr.loader');
goog.require('phzr.signal');
fossa.dungeon.initial_dungeon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$paths,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$southwest,null,cljs.core.cst$kw$south,null,cljs.core.cst$kw$southeast,null,cljs.core.cst$kw$north,null], null), null),cljs.core.cst$kw$safe_DASH_path,cljs.core.cst$kw$southwest,cljs.core.cst$kw$liars,(2)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$paths,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$southeast,null,cljs.core.cst$kw$northeast,null,cljs.core.cst$kw$north,null], null), null),cljs.core.cst$kw$safe_DASH_path,cljs.core.cst$kw$north,cljs.core.cst$kw$liars,(1)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$paths,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$southwest,null,cljs.core.cst$kw$south,null,cljs.core.cst$kw$northwest,null], null), null),cljs.core.cst$kw$safe_DASH_path,cljs.core.cst$kw$northwest,cljs.core.cst$kw$liars,(4)], null)], null);
fossa.dungeon.preload_assets = (function fossa$dungeon$preload_assets(loader){
var G__30274 = loader;
phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$6(G__30274,"button","assets/images/button.png",(190),(49),(2));

phzr.loader.image.cljs$core$IFn$_invoke$arity$3(G__30274,"paper","assets/images/paper.png");

phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$6(G__30274,"square-button","assets/images/square_button.png",(49),(49),(2));

phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$6(G__30274,"direction-arrows","assets/images/direction_arrows.png",(50),(50),(6));

return G__30274;
});
fossa.dungeon.initialize_dungeon = (function fossa$dungeon$initialize_dungeon(system){
var dungeon_entity = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.Dungeon));
var dungeon = brute.entity.get_component(system,dungeon_entity,fossa.component.Dungeon);
var current_room = cljs.core.cst$kw$rooms.cljs$core$IFn$_invoke$arity$1(dungeon).call(null,cljs.core.cst$kw$current_DASH_room.cljs$core$IFn$_invoke$arity$1(dungeon));
return fossa.party_member.set_liars(fossa.group.move_all_members_back_to_unassigned(fossa.exploration_path.update_exploration_paths(system,cljs.core.cst$kw$paths.cljs$core$IFn$_invoke$arity$1(current_room))),cljs.core.cst$kw$liars.cljs$core$IFn$_invoke$arity$1(current_room));
});
fossa.dungeon.create_explore_button = (function fossa$dungeon$create_explore_button(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var phzr_button = phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$10(factory,(0),(0),"button",null,null,(0),(0),(1),(0));
var phzr_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),"Explore");
phzr.button.add_child(phzr_button,phzr_text);

var G__30276_30277 = phzr_text;
phzr.core.pset_BANG_(G__30276_30277,cljs.core.cst$kw$font,"Cutive, Courier, MS Courier New, monospace");

phzr.core.pset_BANG_(G__30276_30277,cljs.core.cst$kw$fill,"#000000");

phzr.core.pset_BANG_(G__30276_30277,cljs.core.cst$kw$align,"center");

phzr.core.pset_BANG_(G__30276_30277,cljs.core.cst$kw$anchor,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));

phzr.core.pset_BANG_(G__30276_30277,cljs.core.cst$kw$x,(95));

phzr.core.pset_BANG_(G__30276_30277,cljs.core.cst$kw$y,(25));


return phzr_button;
});
fossa.dungeon.create_exploration_results_sprite = (function fossa$dungeon$create_exploration_results_sprite(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var G__30279 = fossa.rendering.create_phzr_sprite(phzr_game,"exploration-results","paper",(500),(600));
phzr.core.pset_BANG_(G__30279,cljs.core.cst$kw$anchor,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));

phzr.core.pset_BANG_(G__30279,cljs.core.cst$kw$angle,(-15));

phzr.core.pset_BANG_(G__30279,cljs.core.cst$kw$input_DASH_enabled,true);

phzr.core.pset_BANG_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(G__30279),cljs.core.cst$kw$priority_DASH_id,(0));

phzr.signal.add.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_input_DASH_down.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(G__30279)),((function (G__30279,phzr_game){
return (function (sprite,_){
return phzr.core.pset_BANG_(sprite,cljs.core.cst$kw$visible,false);
});})(G__30279,phzr_game))
);

phzr.core.pset_BANG_(G__30279,cljs.core.cst$kw$visible,false);

phzr.core.pset_BANG_(G__30279,cljs.core.cst$kw$z,(64));

return G__30279;
});
fossa.dungeon.exploration_results_original_text = [cljs.core.str("N - Yes: Ann, Brenda / No: Charles\n"),cljs.core.str("NE - Yes: Deborah / No: Edward, Frank\n"),cljs.core.str("SE - Yes: Gary, Harold / No: Irene\n"),cljs.core.str("S - Yes: James / No: Karen, Linda\n"),cljs.core.str("SW - No: Ann, Brenda, Charles, Deborah\n"),cljs.core.str("NW - Yes: Edward, Frank, Gary Harold\n")].join('');
fossa.dungeon.create_exploration_results_text = (function fossa$dungeon$create_exploration_results_text(system,sprite){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var phzr_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),fossa.dungeon.exploration_results_original_text);
phzr.sprite.add_child(sprite,phzr_text);

var G__30281 = phzr_text;
phzr.core.pset_BANG_(G__30281,cljs.core.cst$kw$font,"Just Me Again Down Here, MV Boli, Apple Chancery, Zapfino, cursive");

phzr.core.pset_BANG_(G__30281,cljs.core.cst$kw$font_DASH_size,(40));

phzr.core.pset_BANG_(G__30281,cljs.core.cst$kw$fill,"#000000");

phzr.core.pset_BANG_(G__30281,cljs.core.cst$kw$align,"left");

phzr.core.pset_BANG_(G__30281,cljs.core.cst$kw$word_DASH_wrap,true);

phzr.core.pset_BANG_(G__30281,cljs.core.cst$kw$word_DASH_wrap_DASH_width,(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sprite) - (150)));

phzr.core.pset_BANG_(G__30281,cljs.core.cst$kw$x,(-270));

phzr.core.pset_BANG_(G__30281,cljs.core.cst$kw$y,(-460));

return G__30281;
});
fossa.dungeon.create_exploration_results_navigation = (function fossa$dungeon$create_exploration_results_navigation(system,sprite){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var previous_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),"<Previous");
var next_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),"Next>");
var seq__30290_30298 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [previous_text,next_text], null));
var chunk__30291_30299 = null;
var count__30292_30300 = (0);
var i__30293_30301 = (0);
while(true){
if((i__30293_30301 < count__30292_30300)){
var text_30302 = chunk__30291_30299.cljs$core$IIndexed$_nth$arity$2(null,i__30293_30301);
phzr.sprite.add_child(sprite,text_30302);

var G__30294_30303 = text_30302;
phzr.core.pset_BANG_(G__30294_30303,cljs.core.cst$kw$font,"Just Me Again Down Here, MV Boli, Apple Chancery, Zapfino, cursive");

phzr.core.pset_BANG_(G__30294_30303,cljs.core.cst$kw$font_DASH_size,(60));

phzr.core.pset_BANG_(G__30294_30303,cljs.core.cst$kw$fill,"#0000ff");

phzr.signal.add.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_input_DASH_over.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(G__30294_30303)),((function (seq__30290_30298,chunk__30291_30299,count__30292_30300,i__30293_30301,G__30294_30303,text_30302,phzr_game,factory,previous_text,next_text){
return (function (sprite__$1,_){
return phzr.core.pset_BANG_(sprite__$1,cljs.core.cst$kw$fill,"#ff0000");
});})(seq__30290_30298,chunk__30291_30299,count__30292_30300,i__30293_30301,G__30294_30303,text_30302,phzr_game,factory,previous_text,next_text))
);

phzr.signal.add.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_input_DASH_out.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(G__30294_30303)),((function (seq__30290_30298,chunk__30291_30299,count__30292_30300,i__30293_30301,G__30294_30303,text_30302,phzr_game,factory,previous_text,next_text){
return (function (sprite__$1,_){
return phzr.core.pset_BANG_(sprite__$1,cljs.core.cst$kw$fill,"#0000ff");
});})(seq__30290_30298,chunk__30291_30299,count__30292_30300,i__30293_30301,G__30294_30303,text_30302,phzr_game,factory,previous_text,next_text))
);

phzr.core.pset_BANG_(G__30294_30303,cljs.core.cst$kw$input_DASH_enabled,true);

phzr.core.pset_BANG_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(G__30294_30303),cljs.core.cst$kw$priority_DASH_id,(1));

phzr.core.pset_BANG_(G__30294_30303,cljs.core.cst$kw$y,(-525));


var G__30304 = seq__30290_30298;
var G__30305 = chunk__30291_30299;
var G__30306 = count__30292_30300;
var G__30307 = (i__30293_30301 + (1));
seq__30290_30298 = G__30304;
chunk__30291_30299 = G__30305;
count__30292_30300 = G__30306;
i__30293_30301 = G__30307;
continue;
} else {
var temp__4657__auto___30308 = cljs.core.seq(seq__30290_30298);
if(temp__4657__auto___30308){
var seq__30290_30309__$1 = temp__4657__auto___30308;
if(cljs.core.chunked_seq_QMARK_(seq__30290_30309__$1)){
var c__21059__auto___30310 = cljs.core.chunk_first(seq__30290_30309__$1);
var G__30311 = cljs.core.chunk_rest(seq__30290_30309__$1);
var G__30312 = c__21059__auto___30310;
var G__30313 = cljs.core.count(c__21059__auto___30310);
var G__30314 = (0);
seq__30290_30298 = G__30311;
chunk__30291_30299 = G__30312;
count__30292_30300 = G__30313;
i__30293_30301 = G__30314;
continue;
} else {
var text_30315 = cljs.core.first(seq__30290_30309__$1);
phzr.sprite.add_child(sprite,text_30315);

var G__30295_30316 = text_30315;
phzr.core.pset_BANG_(G__30295_30316,cljs.core.cst$kw$font,"Just Me Again Down Here, MV Boli, Apple Chancery, Zapfino, cursive");

phzr.core.pset_BANG_(G__30295_30316,cljs.core.cst$kw$font_DASH_size,(60));

phzr.core.pset_BANG_(G__30295_30316,cljs.core.cst$kw$fill,"#0000ff");

phzr.signal.add.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_input_DASH_over.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(G__30295_30316)),((function (seq__30290_30298,chunk__30291_30299,count__30292_30300,i__30293_30301,G__30295_30316,text_30315,seq__30290_30309__$1,temp__4657__auto___30308,phzr_game,factory,previous_text,next_text){
return (function (sprite__$1,_){
return phzr.core.pset_BANG_(sprite__$1,cljs.core.cst$kw$fill,"#ff0000");
});})(seq__30290_30298,chunk__30291_30299,count__30292_30300,i__30293_30301,G__30295_30316,text_30315,seq__30290_30309__$1,temp__4657__auto___30308,phzr_game,factory,previous_text,next_text))
);

phzr.signal.add.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$on_DASH_input_DASH_out.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(G__30295_30316)),((function (seq__30290_30298,chunk__30291_30299,count__30292_30300,i__30293_30301,G__30295_30316,text_30315,seq__30290_30309__$1,temp__4657__auto___30308,phzr_game,factory,previous_text,next_text){
return (function (sprite__$1,_){
return phzr.core.pset_BANG_(sprite__$1,cljs.core.cst$kw$fill,"#0000ff");
});})(seq__30290_30298,chunk__30291_30299,count__30292_30300,i__30293_30301,G__30295_30316,text_30315,seq__30290_30309__$1,temp__4657__auto___30308,phzr_game,factory,previous_text,next_text))
);

phzr.core.pset_BANG_(G__30295_30316,cljs.core.cst$kw$input_DASH_enabled,true);

phzr.core.pset_BANG_(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(G__30295_30316),cljs.core.cst$kw$priority_DASH_id,(1));

phzr.core.pset_BANG_(G__30295_30316,cljs.core.cst$kw$y,(-525));


var G__30317 = cljs.core.next(seq__30290_30309__$1);
var G__30318 = null;
var G__30319 = (0);
var G__30320 = (0);
seq__30290_30298 = G__30317;
chunk__30291_30299 = G__30318;
count__30292_30300 = G__30319;
i__30293_30301 = G__30320;
continue;
}
} else {
}
}
break;
}

var G__30296_30321 = previous_text;
phzr.core.pset_BANG_(G__30296_30321,cljs.core.cst$kw$align,"left");

phzr.core.pset_BANG_(G__30296_30321,cljs.core.cst$kw$x,(-270));


var G__30297_30322 = next_text;
phzr.core.pset_BANG_(G__30297_30322,cljs.core.cst$kw$align,"right");

phzr.core.pset_BANG_(G__30297_30322,cljs.core.cst$kw$x,(145));


return fossa.component.__GT_ResultsNavigation((0),previous_text,next_text);
});
fossa.dungeon.create_results_button = (function fossa$dungeon$create_results_button(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var phzr_button = phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$10(factory,(0),(526),"button",null,null,(0),(0),(1),(0));
var phzr_text = phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4(factory,(0),(0),"Results");
phzr.button.add_child(phzr_button,phzr_text);

var G__30324_30325 = phzr_text;
phzr.core.pset_BANG_(G__30324_30325,cljs.core.cst$kw$font,"Cutive, Courier, MS Courier New, monospace");

phzr.core.pset_BANG_(G__30324_30325,cljs.core.cst$kw$fill,"#000000");

phzr.core.pset_BANG_(G__30324_30325,cljs.core.cst$kw$align,"center");

phzr.core.pset_BANG_(G__30324_30325,cljs.core.cst$kw$anchor,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));

phzr.core.pset_BANG_(G__30324_30325,cljs.core.cst$kw$x,(95));

phzr.core.pset_BANG_(G__30324_30325,cljs.core.cst$kw$y,(25));


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

var G__30327 = button_text;
phzr.core.pset_BANG_(G__30327,cljs.core.cst$kw$font,"Cutive, Courier, MS Courier New, monospace");

phzr.core.pset_BANG_(G__30327,cljs.core.cst$kw$font_DASH_size,(15));

phzr.core.pset_BANG_(G__30327,cljs.core.cst$kw$fill,"#ffffff");

phzr.core.pset_BANG_(G__30327,cljs.core.cst$kw$align,"center");

phzr.core.pset_BANG_(G__30327,cljs.core.cst$kw$anchor,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));

phzr.core.pset_BANG_(G__30327,cljs.core.cst$kw$x,(25));

phzr.core.pset_BANG_(G__30327,cljs.core.cst$kw$y,(25));

return G__30327;
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
return (function (p1__30328_SHARP_,p2__30329_SHARP_){
return fossa.dungeon.create_movement_button(p1__30328_SHARP_,p2__30329_SHARP_,factory,group);
});})(phzr_game,factory,group))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.cljs$core$IFn$_invoke$arity$1((6)));
var entity = brute.entity.create_entity();
phzr.core.pset_BANG_(group,cljs.core.cst$kw$z,(48));

return brute.entity.add_component(brute.entity.add_entity(system,entity),entity,fossa.component.__GT_MovementButtons(button_map,group));
});
fossa.dungeon.create_entities = (function fossa$dungeon$create_entities(system){
var dungeon = brute.entity.create_entity();
var explore_button = brute.entity.create_entity();
var explore_phzr_button = fossa.dungeon.create_explore_button(system);
var exploration_results = brute.entity.create_entity();
var exploration_results_sprite = fossa.dungeon.create_exploration_results_sprite(system);
var exploration_results_text = fossa.dungeon.create_exploration_results_text(system,exploration_results_sprite);
var movement_results = brute.entity.create_entity();
var results_navigation = fossa.dungeon.create_exploration_results_navigation(system,exploration_results_sprite);
var results_button_entity = brute.entity.create_entity();
var results_button = fossa.dungeon.create_results_button(system);
return fossa.dungeon.create_movement_buttons(brute.entity.add_component(brute.entity.add_entity(brute.entity.add_component(brute.entity.add_entity(brute.entity.add_component(brute.entity.add_component(brute.entity.add_component(brute.entity.add_component(brute.entity.add_entity(brute.entity.add_component(brute.entity.add_entity(fossa.dungeon.initialize_dungeon(brute.entity.add_component(brute.entity.add_entity(system,dungeon),dungeon,fossa.component.__GT_Dungeon(fossa.dungeon.initial_dungeon,(0)))),explore_button),explore_button,fossa.component.__GT_ExploreButton(explore_phzr_button)),exploration_results),exploration_results,fossa.component.__GT_Sprite(exploration_results_sprite)),exploration_results,fossa.component.__GT_Text(exploration_results_text)),exploration_results,results_navigation),exploration_results,fossa.component.__GT_ExplorationResults(cljs.core.PersistentVector.EMPTY)),movement_results),movement_results,fossa.component.__GT_MovementResults(cljs.core.PersistentArrayMap.EMPTY)),results_button_entity),results_button_entity,fossa.component.__GT_ResultsButton(results_button)));
});
fossa.dungeon.get_explore_button_entity = (function fossa$dungeon$get_explore_button_entity(system){
return cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.ExploreButton));
});
fossa.dungeon.liar_truth_percentage = .25;
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
var explorers_components = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30330_SHARP_){
return brute.entity.get_component(system,p1__30330_SHARP_,fossa.component.PartyMember);
}),explorers);
var is_it_safe_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,safe_path);
var grouped_members = cljs.core.group_by(((function (explorers_components,is_it_safe_QMARK_){
return (function (p1__30331_SHARP_){
return fossa.dungeon.get_answer(p1__30331_SHARP_,is_it_safe_QMARK_);
});})(explorers_components,is_it_safe_QMARK_))
,explorers_components);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result_map,direction,grouped_members);
});
fossa.dungeon.explore_paths = (function fossa$dungeon$explore_paths(system,paths,safe_path){
var exploration_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30332_SHARP_){
return fossa.exploration_path.get_exploration_path_by_direction(system,p1__30332_SHARP_);
}),paths);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exploration_paths){
return (function (p1__30334_SHARP_,p2__30335_SHARP_){
return fossa.dungeon.explore_path(system,p1__30334_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2__30335_SHARP_,(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2__30335_SHARP_,(1)),safe_path);
});})(exploration_paths))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.zipmap(paths,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (exploration_paths){
return (function (p1__30333_SHARP_){
return fossa.component.get_group_members_from_entity(system,p1__30333_SHARP_);
});})(exploration_paths))
,exploration_paths)));
});
fossa.dungeon.direction_abbreviation = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$north,"N",cljs.core.cst$kw$northeast,"NE",cljs.core.cst$kw$southeast,"SE",cljs.core.cst$kw$south,"S",cljs.core.cst$kw$southwest,"SW",cljs.core.cst$kw$northwest,"NW"], null);
fossa.dungeon.get_direction_result = (function fossa$dungeon$get_direction_result(p__30336){
var vec__30340 = p__30336;
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30340,(0),null);
var answers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30340,(1),null);
var yes_answers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$member_DASH_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(answers,true));
var no_answers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$member_DASH_name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(answers,false));
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~A- Yes:~[ no one~*~:;~{ ~A~}~]/ No:~[ no one~*~:;~{ ~A~}~]~%",cljs.core.array_seq([cljs.core.get.cljs$core$IFn$_invoke$arity$2(fossa.dungeon.direction_abbreviation,direction),cljs.core.count(yes_answers),yes_answers,cljs.core.count(no_answers),no_answers], 0));
});
fossa.dungeon.get_exploration_text = (function fossa$dungeon$get_exploration_text(results_map){
var lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(fossa.dungeon.get_direction_result,results_map);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,lines);
});
fossa.dungeon.update_results_navigation = (function fossa$dungeon$update_results_navigation(system){
var results_navigation = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.ResultsNavigation));
var map__30345 = brute.entity.get_component(system,results_navigation,fossa.component.ResultsNavigation);
var map__30345__$1 = ((((!((map__30345 == null)))?((((map__30345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30345):map__30345);
var current_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30345__$1,cljs.core.cst$kw$current_DASH_result);
var previous_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30345__$1,cljs.core.cst$kw$previous_DASH_text);
var next_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30345__$1,cljs.core.cst$kw$next_DASH_text);
var exploration_results_entity = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.ExplorationResults));
var exploration_results = cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,exploration_results_entity,fossa.component.ExplorationResults));
var exploration_results_text = fossa.component.get_phzr_text_from_entity(system,exploration_results_entity);
var new_text = fossa.dungeon.get_exploration_text(cljs.core.get.cljs$core$IFn$_invoke$arity$2(exploration_results,current_result));
phzr.core.pset_BANG_(previous_text,cljs.core.cst$kw$visible,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_result,(0)));

phzr.core.pset_BANG_(next_text,cljs.core.cst$kw$visible,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_result,(cljs.core.count(exploration_results) - (1))));

phzr.core.pset_BANG_(exploration_results_text,cljs.core.cst$kw$text,new_text);

return system;
});
fossa.dungeon.get_current_dungeon_room = (function fossa$dungeon$get_current_dungeon_room(system){
var map__30349 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.Dungeon);
var map__30349__$1 = ((((!((map__30349 == null)))?((((map__30349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30349):map__30349);
var rooms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30349__$1,cljs.core.cst$kw$rooms);
var current_room = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30349__$1,cljs.core.cst$kw$current_DASH_room);
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
var map__30353 = brute.entity.get_component(system,results_navigation_entity,fossa.component.ResultsNavigation);
var map__30353__$1 = ((((!((map__30353 == null)))?((((map__30353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30353):map__30353);
var previous_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30353__$1,cljs.core.cst$kw$previous_DASH_text);
var next_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30353__$1,cljs.core.cst$kw$next_DASH_text);
phzr.core.pset_BANG_(exploration_results_text,cljs.core.cst$kw$text,exploration_results_string);

phzr.core.pset_BANG_(exploration_results_sprite,cljs.core.cst$kw$visible,true);

return fossa.dungeon.update_results_navigation(brute.entity.add_component(brute.entity.add_component(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(system,cljs.core.cst$kw$explored_DASH_this_DASH_turn,true),exploration_results_entity,fossa.component.__GT_ExplorationResults(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(previous_results,exploration_results_map))),results_navigation_entity,fossa.component.__GT_ResultsNavigation(cljs.core.count(previous_results),previous_text,next_text)));
});
fossa.dungeon.handle_explore_button = (function fossa$dungeon$handle_explore_button(system){
var explore_button_entity = fossa.dungeon.get_explore_button_entity(system);
var explore_button = brute.entity.get_component(system,explore_button_entity,fossa.component.ExploreButton);
var unassigned_group = fossa.group.get_unassigned_members_entity(system);
var unassigned_members = fossa.component.get_group_members_from_entity(system,unassigned_group);
var exploration_results_entity = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.ExplorationResults));
var exploration_results_sprite = fossa.component.get_phzr_sprite_from_entity(system,exploration_results_entity);
phzr.core.pset_BANG_(cljs.core.cst$kw$phzr_DASH_button.cljs$core$IFn$_invoke$arity$1(explore_button),cljs.core.cst$kw$visible,(cljs.core.empty_QMARK_(unassigned_members)) && (cljs.core.not(cljs.core.cst$kw$visible.cljs$core$IFn$_invoke$arity$1(exploration_results_sprite))));

if(cljs.core.truth_((function (){var and__20236__auto__ = fossa.input.blackout_expired_QMARK_(system,cljs.core.cst$kw$just_DASH_pressed_DASH_blackout);
if(cljs.core.truth_(and__20236__auto__)){
return fossa.input.just_pressed(cljs.core.cst$kw$phzr_DASH_button.cljs$core$IFn$_invoke$arity$1(explore_button));
} else {
return and__20236__auto__;
}
})())){
return fossa.dungeon.do_exploration(fossa.input.update_blackout_property(system,cljs.core.cst$kw$just_DASH_pressed_DASH_blackout));
} else {
return system;
}
});
fossa.dungeon.handle_results_navigation = (function fossa$dungeon$handle_results_navigation(system){
var results_navigation_entity = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.ResultsNavigation));
var map__30357 = brute.entity.get_component(system,results_navigation_entity,fossa.component.ResultsNavigation);
var map__30357__$1 = ((((!((map__30357 == null)))?((((map__30357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30357):map__30357);
var current_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30357__$1,cljs.core.cst$kw$current_DASH_result);
var previous_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30357__$1,cljs.core.cst$kw$previous_DASH_text);
var next_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30357__$1,cljs.core.cst$kw$next_DASH_text);
var previous_pressed = fossa.input.just_pressed(previous_text);
var next_pressed = fossa.input.just_pressed(next_text);
var exploration_results_entity = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.ExplorationResults));
var exploration_results_count = cljs.core.count(cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,exploration_results_entity,fossa.component.ExplorationResults)));
if(cljs.core.truth_((function (){var and__20236__auto__ = fossa.input.blackout_expired_QMARK_(system,cljs.core.cst$kw$just_DASH_pressed_DASH_results_DASH_nav);
if(cljs.core.truth_(and__20236__auto__)){
var or__20248__auto__ = previous_pressed;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return next_pressed;
}
} else {
return and__20236__auto__;
}
})())){
var updated_result = (cljs.core.truth_(previous_pressed)?(function (){var x__20579__auto__ = (current_result - (1));
var y__20580__auto__ = (0);
return ((x__20579__auto__ > y__20580__auto__) ? x__20579__auto__ : y__20580__auto__);
})():(function (){var x__20586__auto__ = (current_result + (1));
var y__20587__auto__ = (exploration_results_count - (1));
return ((x__20586__auto__ < y__20587__auto__) ? x__20586__auto__ : y__20587__auto__);
})());
return fossa.dungeon.update_results_navigation(brute.entity.add_component(fossa.input.update_blackout_property(system,cljs.core.cst$kw$just_DASH_pressed_DASH_results_DASH_nav),results_navigation_entity,fossa.component.__GT_ResultsNavigation(updated_result,previous_text,next_text)));
} else {
return system;
}
});
fossa.dungeon.handle_results_button = (function fossa$dungeon$handle_results_button(system){
var map__30363 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.ResultsButton);
var map__30363__$1 = ((((!((map__30363 == null)))?((((map__30363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30363):map__30363);
var phzr_button = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30363__$1,cljs.core.cst$kw$phzr_DASH_button);
var exploration_result_count = cljs.core.count(cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.ExplorationResults)));
var exploration_results_sprite = cljs.core.cst$kw$phzr_DASH_sprite.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$3(system,fossa.component.ExplorationResults,fossa.component.Sprite));
var results_navigation_entity = cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.ResultsNavigation));
var map__30364 = brute.entity.get_component(system,results_navigation_entity,fossa.component.ResultsNavigation);
var map__30364__$1 = ((((!((map__30364 == null)))?((((map__30364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30364):map__30364);
var results_navigation = map__30364__$1;
var current_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30364__$1,cljs.core.cst$kw$current_DASH_result);
phzr.core.pset_BANG_(phzr_button,cljs.core.cst$kw$visible,(cljs.core.not(cljs.core.cst$kw$visible.cljs$core$IFn$_invoke$arity$1(exploration_results_sprite))) && ((exploration_result_count > (0))));

if(cljs.core.truth_((function (){var and__20236__auto__ = fossa.input.blackout_expired_QMARK_(system,cljs.core.cst$kw$just_DASH_pressed_DASH_results_DASH_button);
if(cljs.core.truth_(and__20236__auto__)){
return fossa.input.just_pressed(phzr_button);
} else {
return and__20236__auto__;
}
})())){
return fossa.dungeon.update_results_navigation(brute.entity.add_component((function (){var sys = fossa.input.update_blackout_property(system,cljs.core.cst$kw$just_DASH_pressed_DASH_results_DASH_button);
phzr.core.pset_BANG_(exploration_results_sprite,cljs.core.cst$kw$visible,true);

return sys;
})(),results_navigation_entity,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(results_navigation,cljs.core.cst$kw$current_DASH_result,(exploration_result_count - (1)))));
} else {
return system;
}
});
fossa.dungeon.move_to_next_room = (function fossa$dungeon$move_to_next_room(system,direction){
var dungeon = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.Dungeon);
var dungeon_entity = fossa.component.get_singleton_entity(system,fossa.component.Dungeon);
var map__30369 = fossa.dungeon.get_current_dungeon_room(system);
var map__30369__$1 = ((((!((map__30369 == null)))?((((map__30369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30369):map__30369);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30369__$1,cljs.core.cst$kw$paths);
var safe_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30369__$1,cljs.core.cst$kw$safe_DASH_path);
var movement_results_entity = fossa.component.get_singleton_entity(system,fossa.component.MovementResults);
var movement_results = cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.MovementResults));
var current_exploration = (cljs.core.count(cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.ExplorationResults))) - (1));
var move_is_safe_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,safe_path);
var new_results = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(movement_results,current_exploration,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$was_DASH_safe_QMARK_,move_is_safe_QMARK_], null));
return fossa.dungeon.initialize_dungeon(brute.entity.add_component(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(brute.entity.add_component(system,movement_results_entity,fossa.component.__GT_MovementResults(new_results)),cljs.core.cst$kw$explored_DASH_this_DASH_turn,false),dungeon_entity,fossa.component.__GT_Dungeon(cljs.core.cst$kw$rooms.cljs$core$IFn$_invoke$arity$1(dungeon),(cljs.core.cst$kw$current_DASH_room.cljs$core$IFn$_invoke$arity$1(dungeon) + (1)))));
});
fossa.dungeon.handle_movement_buttons = (function fossa$dungeon$handle_movement_buttons(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var exploration_results_sprite = cljs.core.cst$kw$phzr_DASH_sprite.cljs$core$IFn$_invoke$arity$1(fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$3(system,fossa.component.ExplorationResults,fossa.component.Sprite));
var map__30386 = fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2(system,fossa.component.MovementButtons);
var map__30386__$1 = ((((!((map__30386 == null)))?((((map__30386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30386):map__30386);
var movement_buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30386__$1,cljs.core.cst$kw$movement_DASH_buttons);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30386__$1,cljs.core.cst$kw$group);
var direction_pressed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (phzr_game,exploration_results_sprite,map__30386,map__30386__$1,movement_buttons,group){
return (function (p1__30371_SHARP_){
return fossa.input.just_pressed(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__30371_SHARP_,(1)));
});})(phzr_game,exploration_results_sprite,map__30386,map__30386__$1,movement_buttons,group))
,movement_buttons)),(0));
var map__30387 = fossa.dungeon.get_current_dungeon_room(system);
var map__30387__$1 = ((((!((map__30387 == null)))?((((map__30387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30387):map__30387);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30387__$1,cljs.core.cst$kw$paths);
var safe_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30387__$1,cljs.core.cst$kw$safe_DASH_path);
phzr.core.pset_BANG_(group,cljs.core.cst$kw$visible,(function (){var and__20236__auto__ = cljs.core.not(cljs.core.cst$kw$visible.cljs$core$IFn$_invoke$arity$1(exploration_results_sprite));
if(and__20236__auto__){
return cljs.core.cst$kw$explored_DASH_this_DASH_turn.cljs$core$IFn$_invoke$arity$1(system);
} else {
return and__20236__auto__;
}
})());

var seq__30390_30400 = cljs.core.seq(movement_buttons);
var chunk__30391_30401 = null;
var count__30392_30402 = (0);
var i__30393_30403 = (0);
while(true){
if((i__30393_30403 < count__30392_30402)){
var vec__30394_30404 = chunk__30391_30401.cljs$core$IIndexed$_nth$arity$2(null,i__30393_30403);
var direction_30405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394_30404,(0),null);
var button_30406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394_30404,(1),null);
phzr.core.pset_BANG_(button_30406,cljs.core.cst$kw$visible,(paths.cljs$core$IFn$_invoke$arity$1 ? paths.cljs$core$IFn$_invoke$arity$1(direction_30405) : paths.call(null,direction_30405)));

var G__30407 = seq__30390_30400;
var G__30408 = chunk__30391_30401;
var G__30409 = count__30392_30402;
var G__30410 = (i__30393_30403 + (1));
seq__30390_30400 = G__30407;
chunk__30391_30401 = G__30408;
count__30392_30402 = G__30409;
i__30393_30403 = G__30410;
continue;
} else {
var temp__4657__auto___30411 = cljs.core.seq(seq__30390_30400);
if(temp__4657__auto___30411){
var seq__30390_30412__$1 = temp__4657__auto___30411;
if(cljs.core.chunked_seq_QMARK_(seq__30390_30412__$1)){
var c__21059__auto___30413 = cljs.core.chunk_first(seq__30390_30412__$1);
var G__30414 = cljs.core.chunk_rest(seq__30390_30412__$1);
var G__30415 = c__21059__auto___30413;
var G__30416 = cljs.core.count(c__21059__auto___30413);
var G__30417 = (0);
seq__30390_30400 = G__30414;
chunk__30391_30401 = G__30415;
count__30392_30402 = G__30416;
i__30393_30403 = G__30417;
continue;
} else {
var vec__30397_30418 = cljs.core.first(seq__30390_30412__$1);
var direction_30419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30397_30418,(0),null);
var button_30420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30397_30418,(1),null);
phzr.core.pset_BANG_(button_30420,cljs.core.cst$kw$visible,(paths.cljs$core$IFn$_invoke$arity$1 ? paths.cljs$core$IFn$_invoke$arity$1(direction_30419) : paths.call(null,direction_30419)));

var G__30421 = cljs.core.next(seq__30390_30412__$1);
var G__30422 = null;
var G__30423 = (0);
var G__30424 = (0);
seq__30390_30400 = G__30421;
chunk__30391_30401 = G__30422;
count__30392_30402 = G__30423;
i__30393_30403 = G__30424;
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
return fossa.dungeon.move_to_next_room(fossa.input.update_blackout_property(system,cljs.core.cst$kw$just_DASH_pressed_DASH_movement_DASH_button),direction_pressed);
} else {
return system;
}
});
fossa.dungeon.process_one_game_tick = (function fossa$dungeon$process_one_game_tick(system){
return fossa.dungeon.handle_movement_buttons(fossa.dungeon.handle_results_navigation(fossa.dungeon.handle_explore_button(fossa.dungeon.handle_results_button(system))));
});
