// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('fossa.group');
goog.require('cljs.core');
goog.require('phzr.core');
goog.require('phzr.game_object_factory');
goog.require('brute.entity');
goog.require('fossa.component');
goog.require('phzr.point');
goog.require('fossa.rendering');
goog.require('phzr.group');
fossa.group.create_phzr_group = (function fossa$group$create_phzr_group(phzr_game,group_name,x,y){
var factory = cljs.core.cst$kw$add.cljs$core$IFn$_invoke$arity$1(phzr_game);
var world = cljs.core.cst$kw$world.cljs$core$IFn$_invoke$arity$1(phzr_game);
var G__27641 = phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$3(factory,world,group_name);
phzr.core.pset_BANG_(G__27641,cljs.core.cst$kw$x,x);

phzr.core.pset_BANG_(G__27641,cljs.core.cst$kw$y,y);

phzr.core.pset_BANG_(G__27641,cljs.core.cst$kw$z,(32));

return G__27641;
});
fossa.group.create_group = (function fossa$group$create_group(phzr_game,group_name,x,y){
return fossa.component.__GT_Group(fossa.group.create_phzr_group(phzr_game,group_name,x,y),cljs.core.PersistentVector.EMPTY);
});
fossa.group.group_grid_width = (20);
fossa.group.group_grid_height = (10);
fossa.group.group_grid_rows = (3);
fossa.group.group_grid_columns = (4);
fossa.group.group_grid_positions = cljs.core.vec((function (){var iter__21028__auto__ = (function fossa$group$iter__27642(s__27643){
return (new cljs.core.LazySeq(null,(function (){
var s__27643__$1 = s__27643;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27643__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first(xs__5205__auto__);
var iterys__21024__auto__ = ((function (s__27643__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function fossa$group$iter__27642_$_iter__27644(s__27645){
return (new cljs.core.LazySeq(null,((function (s__27643__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__27645__$1 = s__27645;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__27645__$1);
if(temp__4657__auto____$1){
var s__27645__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27645__$2)){
var c__21026__auto__ = cljs.core.chunk_first(s__27645__$2);
var size__21027__auto__ = cljs.core.count(c__21026__auto__);
var b__27647 = cljs.core.chunk_buffer(size__21027__auto__);
if((function (){var i__27646 = (0);
while(true){
if((i__27646 < size__21027__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21026__auto__,i__27646);
cljs.core.chunk_append(b__27647,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__27653 = (i__27646 + (1));
i__27646 = G__27653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27647),fossa$group$iter__27642_$_iter__27644(cljs.core.chunk_rest(s__27645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27647),null);
}
} else {
var y = cljs.core.first(s__27645__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),fossa$group$iter__27642_$_iter__27644(cljs.core.rest(s__27645__$2)));
}
} else {
return null;
}
break;
}
});})(s__27643__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__27643__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__21025__auto__ = cljs.core.seq(iterys__21024__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(fossa.group.group_grid_height * (fossa.group.group_grid_rows + (1))),fossa.group.group_grid_height)));
if(fs__21025__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__21025__auto__,fossa$group$iter__27642(cljs.core.rest(s__27643__$1)));
} else {
var G__27654 = cljs.core.rest(s__27643__$1);
s__27643__$1 = G__27654;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21028__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(fossa.group.group_grid_width * (fossa.group.group_grid_columns + (1))),fossa.group.group_grid_width));
})());
fossa.group.create_sprite_in_group = (function fossa$group$create_sprite_in_group(system,group_entity,member_entity,sprite_name,asset_key){
var group_component = brute.entity.get_component(system,group_entity,fossa.component.Group);
var phzr_group = cljs.core.cst$kw$phzr_DASH_group.cljs$core$IFn$_invoke$arity$1(group_component);
var group_members = cljs.core.cst$kw$members.cljs$core$IFn$_invoke$arity$1(group_component);
var next_members = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(group_members,member_entity);
var next_index = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(phzr_group);
var next_position = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(next_index) : fossa.group.group_grid_positions.call(null,next_index));
var next_x = (next_position.cljs$core$IFn$_invoke$arity$1 ? next_position.cljs$core$IFn$_invoke$arity$1((0)) : next_position.call(null,(0)));
var next_y = (next_position.cljs$core$IFn$_invoke$arity$1 ? next_position.cljs$core$IFn$_invoke$arity$1((1)) : next_position.call(null,(1)));
var new_sprite = fossa.rendering.create_phzr_sprite_in_group(phzr_group,sprite_name,asset_key,next_x,next_y);
return brute.entity.add_component(brute.entity.add_component(system,member_entity,fossa.component.__GT_Sprite(new_sprite)),group_entity,fossa.component.__GT_Group(phzr_group,next_members));
});
fossa.group.group_contains_some_member = (function fossa$group$group_contains_some_member(system,group_entity,member_entity){
return cljs.core.some((function (p1__27655_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(member_entity,p1__27655_SHARP_)){
return p1__27655_SHARP_;
} else {
return null;
}
}),fossa.component.get_group_members_from_entity(system,group_entity));
});
fossa.group.get_group_containing_member = (function fossa$group$get_group_containing_member(system,member_entity){
return cljs.core.some((function (p1__27656_SHARP_){
if(cljs.core.truth_(fossa.group.group_contains_some_member(system,p1__27656_SHARP_,member_entity))){
return p1__27656_SHARP_;
} else {
return null;
}
}),brute.entity.get_all_entities_with_component(system,fossa.component.Group));
});
fossa.group.move_member_to_group = (function fossa$group$move_member_to_group(system,member_entity,new_group_entity){
var new_group_component = brute.entity.get_component(system,new_group_entity,fossa.component.Group);
var new_phzr_group = cljs.core.cst$kw$phzr_DASH_group.cljs$core$IFn$_invoke$arity$1(new_group_component);
var new_group_members = cljs.core.cst$kw$members.cljs$core$IFn$_invoke$arity$1(new_group_component);
var member_sprite = fossa.component.get_phzr_sprite_from_entity(system,member_entity);
var old_group_entity = fossa.group.get_group_containing_member(system,member_entity);
var old_group_component = brute.entity.get_component(system,old_group_entity,fossa.component.Group);
var old_phzr_group = cljs.core.cst$kw$phzr_DASH_group.cljs$core$IFn$_invoke$arity$1(old_group_component);
var old_group_members = cljs.core.cst$kw$members.cljs$core$IFn$_invoke$arity$1(old_group_component);
var next_new_members = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_group_members,member_entity);
var next_old_members = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (new_group_component,new_phzr_group,new_group_members,member_sprite,old_group_entity,old_group_component,old_phzr_group,old_group_members,next_new_members){
return (function (p1__27657_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(member_entity,p1__27657_SHARP_);
});})(new_group_component,new_phzr_group,new_group_members,member_sprite,old_group_entity,old_group_component,old_phzr_group,old_group_members,next_new_members))
,old_group_members));
var next_index = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(new_phzr_group);
var next_position = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(next_index) : fossa.group.group_grid_positions.call(null,next_index));
var next_x = (next_position.cljs$core$IFn$_invoke$arity$1 ? next_position.cljs$core$IFn$_invoke$arity$1((0)) : next_position.call(null,(0)));
var next_y = (next_position.cljs$core$IFn$_invoke$arity$1 ? next_position.cljs$core$IFn$_invoke$arity$1((1)) : next_position.call(null,(1)));
phzr.group.remove_child(old_phzr_group,member_sprite);

phzr.group.add_child(new_phzr_group,member_sprite);

fossa.rendering.position_within_group(new_phzr_group,member_sprite,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2(next_x,next_y));

return brute.entity.add_component(brute.entity.add_component(system,old_group_entity,fossa.component.__GT_Group(old_phzr_group,next_old_members)),new_group_entity,fossa.component.__GT_Group(new_phzr_group,next_new_members));
});
fossa.group.unassigned_group_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(354),(272)], null);
fossa.group.create_unassigned_group = (function fossa$group$create_unassigned_group(phzr_game){
return fossa.group.create_group(phzr_game,"unassigned party members",(fossa.group.unassigned_group_position.cljs$core$IFn$_invoke$arity$1 ? fossa.group.unassigned_group_position.cljs$core$IFn$_invoke$arity$1((0)) : fossa.group.unassigned_group_position.call(null,(0))),(fossa.group.unassigned_group_position.cljs$core$IFn$_invoke$arity$1 ? fossa.group.unassigned_group_position.cljs$core$IFn$_invoke$arity$1((1)) : fossa.group.unassigned_group_position.call(null,(1))));
});
fossa.group.get_unassigned_members_entity = (function fossa$group$get_unassigned_members_entity(system){
return cljs.core.first(brute.entity.get_all_entities_with_component(system,fossa.component.UnassignedMembers));
});
fossa.group.move_all_members_back_to_unassigned = (function fossa$group$move_all_members_back_to_unassigned(system){
var party_members = brute.entity.get_all_entities_with_component(system,fossa.component.PartyMember);
var unassigned_members = fossa.group.get_unassigned_members_entity(system);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (party_members,unassigned_members){
return (function (p1__27658_SHARP_,p2__27659_SHARP_){
return fossa.group.move_member_to_group(p1__27658_SHARP_,p2__27659_SHARP_,unassigned_members);
});})(party_members,unassigned_members))
,system,party_members);
});
fossa.group.create_entities = (function fossa$group$create_entities(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var unassigned_group_entity = brute.entity.create_entity();
return brute.entity.add_component(brute.entity.add_component(brute.entity.add_entity(system,unassigned_group_entity),unassigned_group_entity,fossa.component.__GT_UnassignedMembers()),unassigned_group_entity,fossa.group.create_unassigned_group(phzr_game));
});
fossa.group.process_one_game_tick = (function fossa$group$process_one_game_tick(system,delta){
var seq__27680_27700 = cljs.core.seq(brute.entity.get_all_entities_with_component(system,fossa.component.Group));
var chunk__27681_27701 = null;
var count__27682_27702 = (0);
var i__27683_27703 = (0);
while(true){
if((i__27683_27703 < count__27682_27702)){
var group_27704 = chunk__27681_27701.cljs$core$IIndexed$_nth$arity$2(null,i__27683_27703);
var phzr_group_27705 = fossa.component.get_phzr_group_from_entity(system,group_27704);
var seq__27684_27706 = cljs.core.seq(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(phzr_group_27705));
var chunk__27687_27707 = null;
var count__27688_27708 = (0);
var i__27689_27709 = (0);
while(true){
if((i__27689_27709 < count__27688_27708)){
var child_27710 = chunk__27687_27707.cljs$core$IIndexed$_nth$arity$2(null,i__27689_27709);
var index_27711 = phzr.group.get_child_index(phzr_group_27705,child_27710);
var position_27712 = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(index_27711) : fossa.group.group_grid_positions.call(null,index_27711));
if(cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(child_27710)))){
fossa.rendering.position_within_group(phzr_group_27705,child_27710,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((position_27712.cljs$core$IFn$_invoke$arity$1 ? position_27712.cljs$core$IFn$_invoke$arity$1((0)) : position_27712.call(null,(0))),(position_27712.cljs$core$IFn$_invoke$arity$1 ? position_27712.cljs$core$IFn$_invoke$arity$1((1)) : position_27712.call(null,(1)))));

var G__27713 = seq__27684_27706;
var G__27714 = chunk__27687_27707;
var G__27715 = count__27688_27708;
var G__27716 = (i__27689_27709 + (1));
seq__27684_27706 = G__27713;
chunk__27687_27707 = G__27714;
count__27688_27708 = G__27715;
i__27689_27709 = G__27716;
continue;
} else {
var G__27717 = seq__27684_27706;
var G__27718 = chunk__27687_27707;
var G__27719 = count__27688_27708;
var G__27720 = (i__27689_27709 + (1));
seq__27684_27706 = G__27717;
chunk__27687_27707 = G__27718;
count__27688_27708 = G__27719;
i__27689_27709 = G__27720;
continue;
}
} else {
var temp__4657__auto___27721 = cljs.core.seq(seq__27684_27706);
if(temp__4657__auto___27721){
var seq__27684_27722__$1 = temp__4657__auto___27721;
if(cljs.core.chunked_seq_QMARK_(seq__27684_27722__$1)){
var c__21059__auto___27723 = cljs.core.chunk_first(seq__27684_27722__$1);
var G__27724 = cljs.core.chunk_rest(seq__27684_27722__$1);
var G__27725 = c__21059__auto___27723;
var G__27726 = cljs.core.count(c__21059__auto___27723);
var G__27727 = (0);
seq__27684_27706 = G__27724;
chunk__27687_27707 = G__27725;
count__27688_27708 = G__27726;
i__27689_27709 = G__27727;
continue;
} else {
var child_27728 = cljs.core.first(seq__27684_27722__$1);
var index_27729 = phzr.group.get_child_index(phzr_group_27705,child_27728);
var position_27730 = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(index_27729) : fossa.group.group_grid_positions.call(null,index_27729));
if(cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(child_27728)))){
fossa.rendering.position_within_group(phzr_group_27705,child_27728,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((position_27730.cljs$core$IFn$_invoke$arity$1 ? position_27730.cljs$core$IFn$_invoke$arity$1((0)) : position_27730.call(null,(0))),(position_27730.cljs$core$IFn$_invoke$arity$1 ? position_27730.cljs$core$IFn$_invoke$arity$1((1)) : position_27730.call(null,(1)))));

var G__27731 = cljs.core.next(seq__27684_27722__$1);
var G__27732 = null;
var G__27733 = (0);
var G__27734 = (0);
seq__27684_27706 = G__27731;
chunk__27687_27707 = G__27732;
count__27688_27708 = G__27733;
i__27689_27709 = G__27734;
continue;
} else {
var G__27735 = cljs.core.next(seq__27684_27722__$1);
var G__27736 = null;
var G__27737 = (0);
var G__27738 = (0);
seq__27684_27706 = G__27735;
chunk__27687_27707 = G__27736;
count__27688_27708 = G__27737;
i__27689_27709 = G__27738;
continue;
}
}
} else {
}
}
break;
}

var G__27739 = seq__27680_27700;
var G__27740 = chunk__27681_27701;
var G__27741 = count__27682_27702;
var G__27742 = (i__27683_27703 + (1));
seq__27680_27700 = G__27739;
chunk__27681_27701 = G__27740;
count__27682_27702 = G__27741;
i__27683_27703 = G__27742;
continue;
} else {
var temp__4657__auto___27743 = cljs.core.seq(seq__27680_27700);
if(temp__4657__auto___27743){
var seq__27680_27744__$1 = temp__4657__auto___27743;
if(cljs.core.chunked_seq_QMARK_(seq__27680_27744__$1)){
var c__21059__auto___27745 = cljs.core.chunk_first(seq__27680_27744__$1);
var G__27746 = cljs.core.chunk_rest(seq__27680_27744__$1);
var G__27747 = c__21059__auto___27745;
var G__27748 = cljs.core.count(c__21059__auto___27745);
var G__27749 = (0);
seq__27680_27700 = G__27746;
chunk__27681_27701 = G__27747;
count__27682_27702 = G__27748;
i__27683_27703 = G__27749;
continue;
} else {
var group_27750 = cljs.core.first(seq__27680_27744__$1);
var phzr_group_27751 = fossa.component.get_phzr_group_from_entity(system,group_27750);
var seq__27692_27752 = cljs.core.seq(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(phzr_group_27751));
var chunk__27695_27753 = null;
var count__27696_27754 = (0);
var i__27697_27755 = (0);
while(true){
if((i__27697_27755 < count__27696_27754)){
var child_27756 = chunk__27695_27753.cljs$core$IIndexed$_nth$arity$2(null,i__27697_27755);
var index_27757 = phzr.group.get_child_index(phzr_group_27751,child_27756);
var position_27758 = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(index_27757) : fossa.group.group_grid_positions.call(null,index_27757));
if(cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(child_27756)))){
fossa.rendering.position_within_group(phzr_group_27751,child_27756,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((position_27758.cljs$core$IFn$_invoke$arity$1 ? position_27758.cljs$core$IFn$_invoke$arity$1((0)) : position_27758.call(null,(0))),(position_27758.cljs$core$IFn$_invoke$arity$1 ? position_27758.cljs$core$IFn$_invoke$arity$1((1)) : position_27758.call(null,(1)))));

var G__27759 = seq__27692_27752;
var G__27760 = chunk__27695_27753;
var G__27761 = count__27696_27754;
var G__27762 = (i__27697_27755 + (1));
seq__27692_27752 = G__27759;
chunk__27695_27753 = G__27760;
count__27696_27754 = G__27761;
i__27697_27755 = G__27762;
continue;
} else {
var G__27763 = seq__27692_27752;
var G__27764 = chunk__27695_27753;
var G__27765 = count__27696_27754;
var G__27766 = (i__27697_27755 + (1));
seq__27692_27752 = G__27763;
chunk__27695_27753 = G__27764;
count__27696_27754 = G__27765;
i__27697_27755 = G__27766;
continue;
}
} else {
var temp__4657__auto___27767__$1 = cljs.core.seq(seq__27692_27752);
if(temp__4657__auto___27767__$1){
var seq__27692_27768__$1 = temp__4657__auto___27767__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27692_27768__$1)){
var c__21059__auto___27769 = cljs.core.chunk_first(seq__27692_27768__$1);
var G__27770 = cljs.core.chunk_rest(seq__27692_27768__$1);
var G__27771 = c__21059__auto___27769;
var G__27772 = cljs.core.count(c__21059__auto___27769);
var G__27773 = (0);
seq__27692_27752 = G__27770;
chunk__27695_27753 = G__27771;
count__27696_27754 = G__27772;
i__27697_27755 = G__27773;
continue;
} else {
var child_27774 = cljs.core.first(seq__27692_27768__$1);
var index_27775 = phzr.group.get_child_index(phzr_group_27751,child_27774);
var position_27776 = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(index_27775) : fossa.group.group_grid_positions.call(null,index_27775));
if(cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(child_27774)))){
fossa.rendering.position_within_group(phzr_group_27751,child_27774,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((position_27776.cljs$core$IFn$_invoke$arity$1 ? position_27776.cljs$core$IFn$_invoke$arity$1((0)) : position_27776.call(null,(0))),(position_27776.cljs$core$IFn$_invoke$arity$1 ? position_27776.cljs$core$IFn$_invoke$arity$1((1)) : position_27776.call(null,(1)))));

var G__27777 = cljs.core.next(seq__27692_27768__$1);
var G__27778 = null;
var G__27779 = (0);
var G__27780 = (0);
seq__27692_27752 = G__27777;
chunk__27695_27753 = G__27778;
count__27696_27754 = G__27779;
i__27697_27755 = G__27780;
continue;
} else {
var G__27781 = cljs.core.next(seq__27692_27768__$1);
var G__27782 = null;
var G__27783 = (0);
var G__27784 = (0);
seq__27692_27752 = G__27781;
chunk__27695_27753 = G__27782;
count__27696_27754 = G__27783;
i__27697_27755 = G__27784;
continue;
}
}
} else {
}
}
break;
}

var G__27785 = cljs.core.next(seq__27680_27744__$1);
var G__27786 = null;
var G__27787 = (0);
var G__27788 = (0);
seq__27680_27700 = G__27785;
chunk__27681_27701 = G__27786;
count__27682_27702 = G__27787;
i__27683_27703 = G__27788;
continue;
}
} else {
}
}
break;
}

return system;
});
