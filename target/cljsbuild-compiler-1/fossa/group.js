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
var G__27633 = phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$3(factory,world,group_name);
phzr.core.pset_BANG_(G__27633,cljs.core.cst$kw$x,x);

phzr.core.pset_BANG_(G__27633,cljs.core.cst$kw$y,y);

phzr.core.pset_BANG_(G__27633,cljs.core.cst$kw$z,(32));

return G__27633;
});
fossa.group.create_group = (function fossa$group$create_group(phzr_game,group_name,x,y){
return fossa.component.__GT_Group(fossa.group.create_phzr_group(phzr_game,group_name,x,y),cljs.core.PersistentVector.EMPTY);
});
fossa.group.group_grid_width = (20);
fossa.group.group_grid_height = (10);
fossa.group.group_grid_rows = (3);
fossa.group.group_grid_columns = (4);
fossa.group.group_grid_positions = cljs.core.vec((function (){var iter__21028__auto__ = (function fossa$group$iter__27634(s__27635){
return (new cljs.core.LazySeq(null,(function (){
var s__27635__$1 = s__27635;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27635__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first(xs__5205__auto__);
var iterys__21024__auto__ = ((function (s__27635__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function fossa$group$iter__27634_$_iter__27636(s__27637){
return (new cljs.core.LazySeq(null,((function (s__27635__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__27637__$1 = s__27637;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__27637__$1);
if(temp__4657__auto____$1){
var s__27637__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27637__$2)){
var c__21026__auto__ = cljs.core.chunk_first(s__27637__$2);
var size__21027__auto__ = cljs.core.count(c__21026__auto__);
var b__27639 = cljs.core.chunk_buffer(size__21027__auto__);
if((function (){var i__27638 = (0);
while(true){
if((i__27638 < size__21027__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21026__auto__,i__27638);
cljs.core.chunk_append(b__27639,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__27645 = (i__27638 + (1));
i__27638 = G__27645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27639),fossa$group$iter__27634_$_iter__27636(cljs.core.chunk_rest(s__27637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27639),null);
}
} else {
var y = cljs.core.first(s__27637__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),fossa$group$iter__27634_$_iter__27636(cljs.core.rest(s__27637__$2)));
}
} else {
return null;
}
break;
}
});})(s__27635__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__27635__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__21025__auto__ = cljs.core.seq(iterys__21024__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(fossa.group.group_grid_height * (fossa.group.group_grid_rows + (1))),fossa.group.group_grid_height)));
if(fs__21025__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__21025__auto__,fossa$group$iter__27634(cljs.core.rest(s__27635__$1)));
} else {
var G__27646 = cljs.core.rest(s__27635__$1);
s__27635__$1 = G__27646;
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
return cljs.core.some((function (p1__27647_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(member_entity,p1__27647_SHARP_)){
return p1__27647_SHARP_;
} else {
return null;
}
}),fossa.component.get_group_members_from_entity(system,group_entity));
});
fossa.group.get_group_containing_member = (function fossa$group$get_group_containing_member(system,member_entity){
return cljs.core.some((function (p1__27648_SHARP_){
if(cljs.core.truth_(fossa.group.group_contains_some_member(system,p1__27648_SHARP_,member_entity))){
return p1__27648_SHARP_;
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
return (function (p1__27649_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(member_entity,p1__27649_SHARP_);
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
return (function (p1__27650_SHARP_,p2__27651_SHARP_){
return fossa.group.move_member_to_group(p1__27650_SHARP_,p2__27651_SHARP_,unassigned_members);
});})(party_members,unassigned_members))
,system,party_members);
});
fossa.group.create_entities = (function fossa$group$create_entities(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var unassigned_group_entity = brute.entity.create_entity();
return brute.entity.add_component(brute.entity.add_component(brute.entity.add_entity(system,unassigned_group_entity),unassigned_group_entity,fossa.component.__GT_UnassignedMembers()),unassigned_group_entity,fossa.group.create_unassigned_group(phzr_game));
});
fossa.group.process_one_game_tick = (function fossa$group$process_one_game_tick(system,delta){
var seq__27672_27692 = cljs.core.seq(brute.entity.get_all_entities_with_component(system,fossa.component.Group));
var chunk__27673_27693 = null;
var count__27674_27694 = (0);
var i__27675_27695 = (0);
while(true){
if((i__27675_27695 < count__27674_27694)){
var group_27696 = chunk__27673_27693.cljs$core$IIndexed$_nth$arity$2(null,i__27675_27695);
var phzr_group_27697 = fossa.component.get_phzr_group_from_entity(system,group_27696);
var seq__27676_27698 = cljs.core.seq(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(phzr_group_27697));
var chunk__27679_27699 = null;
var count__27680_27700 = (0);
var i__27681_27701 = (0);
while(true){
if((i__27681_27701 < count__27680_27700)){
var child_27702 = chunk__27679_27699.cljs$core$IIndexed$_nth$arity$2(null,i__27681_27701);
var index_27703 = phzr.group.get_child_index(phzr_group_27697,child_27702);
var position_27704 = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(index_27703) : fossa.group.group_grid_positions.call(null,index_27703));
if(cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(child_27702)))){
fossa.rendering.position_within_group(phzr_group_27697,child_27702,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((position_27704.cljs$core$IFn$_invoke$arity$1 ? position_27704.cljs$core$IFn$_invoke$arity$1((0)) : position_27704.call(null,(0))),(position_27704.cljs$core$IFn$_invoke$arity$1 ? position_27704.cljs$core$IFn$_invoke$arity$1((1)) : position_27704.call(null,(1)))));

var G__27705 = seq__27676_27698;
var G__27706 = chunk__27679_27699;
var G__27707 = count__27680_27700;
var G__27708 = (i__27681_27701 + (1));
seq__27676_27698 = G__27705;
chunk__27679_27699 = G__27706;
count__27680_27700 = G__27707;
i__27681_27701 = G__27708;
continue;
} else {
var G__27709 = seq__27676_27698;
var G__27710 = chunk__27679_27699;
var G__27711 = count__27680_27700;
var G__27712 = (i__27681_27701 + (1));
seq__27676_27698 = G__27709;
chunk__27679_27699 = G__27710;
count__27680_27700 = G__27711;
i__27681_27701 = G__27712;
continue;
}
} else {
var temp__4657__auto___27713 = cljs.core.seq(seq__27676_27698);
if(temp__4657__auto___27713){
var seq__27676_27714__$1 = temp__4657__auto___27713;
if(cljs.core.chunked_seq_QMARK_(seq__27676_27714__$1)){
var c__21059__auto___27715 = cljs.core.chunk_first(seq__27676_27714__$1);
var G__27716 = cljs.core.chunk_rest(seq__27676_27714__$1);
var G__27717 = c__21059__auto___27715;
var G__27718 = cljs.core.count(c__21059__auto___27715);
var G__27719 = (0);
seq__27676_27698 = G__27716;
chunk__27679_27699 = G__27717;
count__27680_27700 = G__27718;
i__27681_27701 = G__27719;
continue;
} else {
var child_27720 = cljs.core.first(seq__27676_27714__$1);
var index_27721 = phzr.group.get_child_index(phzr_group_27697,child_27720);
var position_27722 = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(index_27721) : fossa.group.group_grid_positions.call(null,index_27721));
if(cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(child_27720)))){
fossa.rendering.position_within_group(phzr_group_27697,child_27720,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((position_27722.cljs$core$IFn$_invoke$arity$1 ? position_27722.cljs$core$IFn$_invoke$arity$1((0)) : position_27722.call(null,(0))),(position_27722.cljs$core$IFn$_invoke$arity$1 ? position_27722.cljs$core$IFn$_invoke$arity$1((1)) : position_27722.call(null,(1)))));

var G__27723 = cljs.core.next(seq__27676_27714__$1);
var G__27724 = null;
var G__27725 = (0);
var G__27726 = (0);
seq__27676_27698 = G__27723;
chunk__27679_27699 = G__27724;
count__27680_27700 = G__27725;
i__27681_27701 = G__27726;
continue;
} else {
var G__27727 = cljs.core.next(seq__27676_27714__$1);
var G__27728 = null;
var G__27729 = (0);
var G__27730 = (0);
seq__27676_27698 = G__27727;
chunk__27679_27699 = G__27728;
count__27680_27700 = G__27729;
i__27681_27701 = G__27730;
continue;
}
}
} else {
}
}
break;
}

var G__27731 = seq__27672_27692;
var G__27732 = chunk__27673_27693;
var G__27733 = count__27674_27694;
var G__27734 = (i__27675_27695 + (1));
seq__27672_27692 = G__27731;
chunk__27673_27693 = G__27732;
count__27674_27694 = G__27733;
i__27675_27695 = G__27734;
continue;
} else {
var temp__4657__auto___27735 = cljs.core.seq(seq__27672_27692);
if(temp__4657__auto___27735){
var seq__27672_27736__$1 = temp__4657__auto___27735;
if(cljs.core.chunked_seq_QMARK_(seq__27672_27736__$1)){
var c__21059__auto___27737 = cljs.core.chunk_first(seq__27672_27736__$1);
var G__27738 = cljs.core.chunk_rest(seq__27672_27736__$1);
var G__27739 = c__21059__auto___27737;
var G__27740 = cljs.core.count(c__21059__auto___27737);
var G__27741 = (0);
seq__27672_27692 = G__27738;
chunk__27673_27693 = G__27739;
count__27674_27694 = G__27740;
i__27675_27695 = G__27741;
continue;
} else {
var group_27742 = cljs.core.first(seq__27672_27736__$1);
var phzr_group_27743 = fossa.component.get_phzr_group_from_entity(system,group_27742);
var seq__27684_27744 = cljs.core.seq(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(phzr_group_27743));
var chunk__27687_27745 = null;
var count__27688_27746 = (0);
var i__27689_27747 = (0);
while(true){
if((i__27689_27747 < count__27688_27746)){
var child_27748 = chunk__27687_27745.cljs$core$IIndexed$_nth$arity$2(null,i__27689_27747);
var index_27749 = phzr.group.get_child_index(phzr_group_27743,child_27748);
var position_27750 = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(index_27749) : fossa.group.group_grid_positions.call(null,index_27749));
if(cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(child_27748)))){
fossa.rendering.position_within_group(phzr_group_27743,child_27748,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((position_27750.cljs$core$IFn$_invoke$arity$1 ? position_27750.cljs$core$IFn$_invoke$arity$1((0)) : position_27750.call(null,(0))),(position_27750.cljs$core$IFn$_invoke$arity$1 ? position_27750.cljs$core$IFn$_invoke$arity$1((1)) : position_27750.call(null,(1)))));

var G__27751 = seq__27684_27744;
var G__27752 = chunk__27687_27745;
var G__27753 = count__27688_27746;
var G__27754 = (i__27689_27747 + (1));
seq__27684_27744 = G__27751;
chunk__27687_27745 = G__27752;
count__27688_27746 = G__27753;
i__27689_27747 = G__27754;
continue;
} else {
var G__27755 = seq__27684_27744;
var G__27756 = chunk__27687_27745;
var G__27757 = count__27688_27746;
var G__27758 = (i__27689_27747 + (1));
seq__27684_27744 = G__27755;
chunk__27687_27745 = G__27756;
count__27688_27746 = G__27757;
i__27689_27747 = G__27758;
continue;
}
} else {
var temp__4657__auto___27759__$1 = cljs.core.seq(seq__27684_27744);
if(temp__4657__auto___27759__$1){
var seq__27684_27760__$1 = temp__4657__auto___27759__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27684_27760__$1)){
var c__21059__auto___27761 = cljs.core.chunk_first(seq__27684_27760__$1);
var G__27762 = cljs.core.chunk_rest(seq__27684_27760__$1);
var G__27763 = c__21059__auto___27761;
var G__27764 = cljs.core.count(c__21059__auto___27761);
var G__27765 = (0);
seq__27684_27744 = G__27762;
chunk__27687_27745 = G__27763;
count__27688_27746 = G__27764;
i__27689_27747 = G__27765;
continue;
} else {
var child_27766 = cljs.core.first(seq__27684_27760__$1);
var index_27767 = phzr.group.get_child_index(phzr_group_27743,child_27766);
var position_27768 = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(index_27767) : fossa.group.group_grid_positions.call(null,index_27767));
if(cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(child_27766)))){
fossa.rendering.position_within_group(phzr_group_27743,child_27766,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((position_27768.cljs$core$IFn$_invoke$arity$1 ? position_27768.cljs$core$IFn$_invoke$arity$1((0)) : position_27768.call(null,(0))),(position_27768.cljs$core$IFn$_invoke$arity$1 ? position_27768.cljs$core$IFn$_invoke$arity$1((1)) : position_27768.call(null,(1)))));

var G__27769 = cljs.core.next(seq__27684_27760__$1);
var G__27770 = null;
var G__27771 = (0);
var G__27772 = (0);
seq__27684_27744 = G__27769;
chunk__27687_27745 = G__27770;
count__27688_27746 = G__27771;
i__27689_27747 = G__27772;
continue;
} else {
var G__27773 = cljs.core.next(seq__27684_27760__$1);
var G__27774 = null;
var G__27775 = (0);
var G__27776 = (0);
seq__27684_27744 = G__27773;
chunk__27687_27745 = G__27774;
count__27688_27746 = G__27775;
i__27689_27747 = G__27776;
continue;
}
}
} else {
}
}
break;
}

var G__27777 = cljs.core.next(seq__27672_27736__$1);
var G__27778 = null;
var G__27779 = (0);
var G__27780 = (0);
seq__27672_27692 = G__27777;
chunk__27673_27693 = G__27778;
count__27674_27694 = G__27779;
i__27675_27695 = G__27780;
continue;
}
} else {
}
}
break;
}

return system;
});
