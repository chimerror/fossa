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
var G__27625 = phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$3(factory,world,group_name);
phzr.core.pset_BANG_(G__27625,cljs.core.cst$kw$x,x);

phzr.core.pset_BANG_(G__27625,cljs.core.cst$kw$y,y);

phzr.core.pset_BANG_(G__27625,cljs.core.cst$kw$z,(32));

return G__27625;
});
fossa.group.create_group = (function fossa$group$create_group(phzr_game,group_name,x,y){
return fossa.component.__GT_Group(fossa.group.create_phzr_group(phzr_game,group_name,x,y),cljs.core.PersistentVector.EMPTY);
});
fossa.group.group_grid_width = (20);
fossa.group.group_grid_height = (10);
fossa.group.group_grid_rows = (3);
fossa.group.group_grid_columns = (4);
fossa.group.group_grid_positions = cljs.core.vec((function (){var iter__21028__auto__ = (function fossa$group$iter__27626(s__27627){
return (new cljs.core.LazySeq(null,(function (){
var s__27627__$1 = s__27627;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__27627__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first(xs__5205__auto__);
var iterys__21024__auto__ = ((function (s__27627__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function fossa$group$iter__27626_$_iter__27628(s__27629){
return (new cljs.core.LazySeq(null,((function (s__27627__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__27629__$1 = s__27629;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__27629__$1);
if(temp__4657__auto____$1){
var s__27629__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27629__$2)){
var c__21026__auto__ = cljs.core.chunk_first(s__27629__$2);
var size__21027__auto__ = cljs.core.count(c__21026__auto__);
var b__27631 = cljs.core.chunk_buffer(size__21027__auto__);
if((function (){var i__27630 = (0);
while(true){
if((i__27630 < size__21027__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21026__auto__,i__27630);
cljs.core.chunk_append(b__27631,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__27637 = (i__27630 + (1));
i__27630 = G__27637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27631),fossa$group$iter__27626_$_iter__27628(cljs.core.chunk_rest(s__27629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27631),null);
}
} else {
var y = cljs.core.first(s__27629__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),fossa$group$iter__27626_$_iter__27628(cljs.core.rest(s__27629__$2)));
}
} else {
return null;
}
break;
}
});})(s__27627__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__27627__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__21025__auto__ = cljs.core.seq(iterys__21024__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(fossa.group.group_grid_height * (fossa.group.group_grid_rows + (1))),fossa.group.group_grid_height)));
if(fs__21025__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__21025__auto__,fossa$group$iter__27626(cljs.core.rest(s__27627__$1)));
} else {
var G__27638 = cljs.core.rest(s__27627__$1);
s__27627__$1 = G__27638;
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
return cljs.core.some((function (p1__27639_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(member_entity,p1__27639_SHARP_)){
return p1__27639_SHARP_;
} else {
return null;
}
}),fossa.component.get_group_members_from_entity(system,group_entity));
});
fossa.group.get_group_containing_member = (function fossa$group$get_group_containing_member(system,member_entity){
return cljs.core.some((function (p1__27640_SHARP_){
if(cljs.core.truth_(fossa.group.group_contains_some_member(system,p1__27640_SHARP_,member_entity))){
return p1__27640_SHARP_;
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
return (function (p1__27641_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(member_entity,p1__27641_SHARP_);
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
return (function (p1__27642_SHARP_,p2__27643_SHARP_){
return fossa.group.move_member_to_group(p1__27642_SHARP_,p2__27643_SHARP_,unassigned_members);
});})(party_members,unassigned_members))
,system,party_members);
});
fossa.group.create_entities = (function fossa$group$create_entities(system){
var phzr_game = cljs.core.cst$kw$phzr_DASH_game.cljs$core$IFn$_invoke$arity$1(system);
var unassigned_group_entity = brute.entity.create_entity();
return brute.entity.add_component(brute.entity.add_component(brute.entity.add_entity(system,unassigned_group_entity),unassigned_group_entity,fossa.component.__GT_UnassignedMembers()),unassigned_group_entity,fossa.group.create_unassigned_group(phzr_game));
});
fossa.group.process_one_game_tick = (function fossa$group$process_one_game_tick(system,delta){
var seq__27664_27684 = cljs.core.seq(brute.entity.get_all_entities_with_component(system,fossa.component.Group));
var chunk__27665_27685 = null;
var count__27666_27686 = (0);
var i__27667_27687 = (0);
while(true){
if((i__27667_27687 < count__27666_27686)){
var group_27688 = chunk__27665_27685.cljs$core$IIndexed$_nth$arity$2(null,i__27667_27687);
var phzr_group_27689 = fossa.component.get_phzr_group_from_entity(system,group_27688);
var seq__27668_27690 = cljs.core.seq(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(phzr_group_27689));
var chunk__27671_27691 = null;
var count__27672_27692 = (0);
var i__27673_27693 = (0);
while(true){
if((i__27673_27693 < count__27672_27692)){
var child_27694 = chunk__27671_27691.cljs$core$IIndexed$_nth$arity$2(null,i__27673_27693);
var index_27695 = phzr.group.get_child_index(phzr_group_27689,child_27694);
var position_27696 = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(index_27695) : fossa.group.group_grid_positions.call(null,index_27695));
if(cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(child_27694)))){
fossa.rendering.position_within_group(phzr_group_27689,child_27694,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((position_27696.cljs$core$IFn$_invoke$arity$1 ? position_27696.cljs$core$IFn$_invoke$arity$1((0)) : position_27696.call(null,(0))),(position_27696.cljs$core$IFn$_invoke$arity$1 ? position_27696.cljs$core$IFn$_invoke$arity$1((1)) : position_27696.call(null,(1)))));

var G__27697 = seq__27668_27690;
var G__27698 = chunk__27671_27691;
var G__27699 = count__27672_27692;
var G__27700 = (i__27673_27693 + (1));
seq__27668_27690 = G__27697;
chunk__27671_27691 = G__27698;
count__27672_27692 = G__27699;
i__27673_27693 = G__27700;
continue;
} else {
var G__27701 = seq__27668_27690;
var G__27702 = chunk__27671_27691;
var G__27703 = count__27672_27692;
var G__27704 = (i__27673_27693 + (1));
seq__27668_27690 = G__27701;
chunk__27671_27691 = G__27702;
count__27672_27692 = G__27703;
i__27673_27693 = G__27704;
continue;
}
} else {
var temp__4657__auto___27705 = cljs.core.seq(seq__27668_27690);
if(temp__4657__auto___27705){
var seq__27668_27706__$1 = temp__4657__auto___27705;
if(cljs.core.chunked_seq_QMARK_(seq__27668_27706__$1)){
var c__21059__auto___27707 = cljs.core.chunk_first(seq__27668_27706__$1);
var G__27708 = cljs.core.chunk_rest(seq__27668_27706__$1);
var G__27709 = c__21059__auto___27707;
var G__27710 = cljs.core.count(c__21059__auto___27707);
var G__27711 = (0);
seq__27668_27690 = G__27708;
chunk__27671_27691 = G__27709;
count__27672_27692 = G__27710;
i__27673_27693 = G__27711;
continue;
} else {
var child_27712 = cljs.core.first(seq__27668_27706__$1);
var index_27713 = phzr.group.get_child_index(phzr_group_27689,child_27712);
var position_27714 = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(index_27713) : fossa.group.group_grid_positions.call(null,index_27713));
if(cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(child_27712)))){
fossa.rendering.position_within_group(phzr_group_27689,child_27712,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((position_27714.cljs$core$IFn$_invoke$arity$1 ? position_27714.cljs$core$IFn$_invoke$arity$1((0)) : position_27714.call(null,(0))),(position_27714.cljs$core$IFn$_invoke$arity$1 ? position_27714.cljs$core$IFn$_invoke$arity$1((1)) : position_27714.call(null,(1)))));

var G__27715 = cljs.core.next(seq__27668_27706__$1);
var G__27716 = null;
var G__27717 = (0);
var G__27718 = (0);
seq__27668_27690 = G__27715;
chunk__27671_27691 = G__27716;
count__27672_27692 = G__27717;
i__27673_27693 = G__27718;
continue;
} else {
var G__27719 = cljs.core.next(seq__27668_27706__$1);
var G__27720 = null;
var G__27721 = (0);
var G__27722 = (0);
seq__27668_27690 = G__27719;
chunk__27671_27691 = G__27720;
count__27672_27692 = G__27721;
i__27673_27693 = G__27722;
continue;
}
}
} else {
}
}
break;
}

var G__27723 = seq__27664_27684;
var G__27724 = chunk__27665_27685;
var G__27725 = count__27666_27686;
var G__27726 = (i__27667_27687 + (1));
seq__27664_27684 = G__27723;
chunk__27665_27685 = G__27724;
count__27666_27686 = G__27725;
i__27667_27687 = G__27726;
continue;
} else {
var temp__4657__auto___27727 = cljs.core.seq(seq__27664_27684);
if(temp__4657__auto___27727){
var seq__27664_27728__$1 = temp__4657__auto___27727;
if(cljs.core.chunked_seq_QMARK_(seq__27664_27728__$1)){
var c__21059__auto___27729 = cljs.core.chunk_first(seq__27664_27728__$1);
var G__27730 = cljs.core.chunk_rest(seq__27664_27728__$1);
var G__27731 = c__21059__auto___27729;
var G__27732 = cljs.core.count(c__21059__auto___27729);
var G__27733 = (0);
seq__27664_27684 = G__27730;
chunk__27665_27685 = G__27731;
count__27666_27686 = G__27732;
i__27667_27687 = G__27733;
continue;
} else {
var group_27734 = cljs.core.first(seq__27664_27728__$1);
var phzr_group_27735 = fossa.component.get_phzr_group_from_entity(system,group_27734);
var seq__27676_27736 = cljs.core.seq(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(phzr_group_27735));
var chunk__27679_27737 = null;
var count__27680_27738 = (0);
var i__27681_27739 = (0);
while(true){
if((i__27681_27739 < count__27680_27738)){
var child_27740 = chunk__27679_27737.cljs$core$IIndexed$_nth$arity$2(null,i__27681_27739);
var index_27741 = phzr.group.get_child_index(phzr_group_27735,child_27740);
var position_27742 = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(index_27741) : fossa.group.group_grid_positions.call(null,index_27741));
if(cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(child_27740)))){
fossa.rendering.position_within_group(phzr_group_27735,child_27740,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((position_27742.cljs$core$IFn$_invoke$arity$1 ? position_27742.cljs$core$IFn$_invoke$arity$1((0)) : position_27742.call(null,(0))),(position_27742.cljs$core$IFn$_invoke$arity$1 ? position_27742.cljs$core$IFn$_invoke$arity$1((1)) : position_27742.call(null,(1)))));

var G__27743 = seq__27676_27736;
var G__27744 = chunk__27679_27737;
var G__27745 = count__27680_27738;
var G__27746 = (i__27681_27739 + (1));
seq__27676_27736 = G__27743;
chunk__27679_27737 = G__27744;
count__27680_27738 = G__27745;
i__27681_27739 = G__27746;
continue;
} else {
var G__27747 = seq__27676_27736;
var G__27748 = chunk__27679_27737;
var G__27749 = count__27680_27738;
var G__27750 = (i__27681_27739 + (1));
seq__27676_27736 = G__27747;
chunk__27679_27737 = G__27748;
count__27680_27738 = G__27749;
i__27681_27739 = G__27750;
continue;
}
} else {
var temp__4657__auto___27751__$1 = cljs.core.seq(seq__27676_27736);
if(temp__4657__auto___27751__$1){
var seq__27676_27752__$1 = temp__4657__auto___27751__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27676_27752__$1)){
var c__21059__auto___27753 = cljs.core.chunk_first(seq__27676_27752__$1);
var G__27754 = cljs.core.chunk_rest(seq__27676_27752__$1);
var G__27755 = c__21059__auto___27753;
var G__27756 = cljs.core.count(c__21059__auto___27753);
var G__27757 = (0);
seq__27676_27736 = G__27754;
chunk__27679_27737 = G__27755;
count__27680_27738 = G__27756;
i__27681_27739 = G__27757;
continue;
} else {
var child_27758 = cljs.core.first(seq__27676_27752__$1);
var index_27759 = phzr.group.get_child_index(phzr_group_27735,child_27758);
var position_27760 = (fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1 ? fossa.group.group_grid_positions.cljs$core$IFn$_invoke$arity$1(index_27759) : fossa.group.group_grid_positions.call(null,index_27759));
if(cljs.core.not(cljs.core.cst$kw$is_DASH_dragged.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$1(child_27758)))){
fossa.rendering.position_within_group(phzr_group_27735,child_27758,phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((position_27760.cljs$core$IFn$_invoke$arity$1 ? position_27760.cljs$core$IFn$_invoke$arity$1((0)) : position_27760.call(null,(0))),(position_27760.cljs$core$IFn$_invoke$arity$1 ? position_27760.cljs$core$IFn$_invoke$arity$1((1)) : position_27760.call(null,(1)))));

var G__27761 = cljs.core.next(seq__27676_27752__$1);
var G__27762 = null;
var G__27763 = (0);
var G__27764 = (0);
seq__27676_27736 = G__27761;
chunk__27679_27737 = G__27762;
count__27680_27738 = G__27763;
i__27681_27739 = G__27764;
continue;
} else {
var G__27765 = cljs.core.next(seq__27676_27752__$1);
var G__27766 = null;
var G__27767 = (0);
var G__27768 = (0);
seq__27676_27736 = G__27765;
chunk__27679_27737 = G__27766;
count__27680_27738 = G__27767;
i__27681_27739 = G__27768;
continue;
}
}
} else {
}
}
break;
}

var G__27769 = cljs.core.next(seq__27664_27728__$1);
var G__27770 = null;
var G__27771 = (0);
var G__27772 = (0);
seq__27664_27684 = G__27769;
chunk__27665_27685 = G__27770;
count__27666_27686 = G__27771;
i__27667_27687 = G__27772;
continue;
}
} else {
}
}
break;
}

return system;
});
