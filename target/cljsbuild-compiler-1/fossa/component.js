// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('fossa.component');
goog.require('cljs.core');
goog.require('brute.entity');
fossa.component.get_singleton_entity = (function fossa$component$get_singleton_entity(system,singleton_type){
return cljs.core.first(brute.entity.get_all_entities_with_component(system,singleton_type));
});
fossa.component.get_singleton_component = (function fossa$component$get_singleton_component(var_args){
var args27005 = [];
var len__21323__auto___27008 = arguments.length;
var i__21324__auto___27009 = (0);
while(true){
if((i__21324__auto___27009 < len__21323__auto___27008)){
args27005.push((arguments[i__21324__auto___27009]));

var G__27010 = (i__21324__auto___27009 + (1));
i__21324__auto___27009 = G__27010;
continue;
} else {
}
break;
}

var G__27007 = args27005.length;
switch (G__27007) {
case 2:
return fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27005.length)].join('')));

}
});

fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$2 = (function (system,singleton_type){
return fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$3(system,singleton_type,singleton_type);
});

fossa.component.get_singleton_component.cljs$core$IFn$_invoke$arity$3 = (function (system,singleton_type,component_type){
var entity = fossa.component.get_singleton_entity(system,singleton_type);
return brute.entity.get_component(system,entity,component_type);
});

fossa.component.get_singleton_component.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.Sprite = (function (phzr_sprite,__meta,__extmap,__hash){
this.phzr_sprite = phzr_sprite;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.Sprite.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.Sprite.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27013,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27015 = (((k27013 instanceof cljs.core.Keyword))?k27013.fqn:null);
switch (G__27015) {
case "phzr-sprite":
return self__.phzr_sprite;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27013,else__20873__auto__);

}
});

fossa.component.Sprite.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.Sprite{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phzr_DASH_sprite,self__.phzr_sprite],null))], null),self__.__extmap));
});

fossa.component.Sprite.prototype.cljs$core$IIterable$ = true;

fossa.component.Sprite.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27012){
var self__ = this;
var G__27012__$1 = this;
return (new cljs.core.RecordIter((0),G__27012__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phzr_DASH_sprite], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.Sprite.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.Sprite.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.Sprite(self__.phzr_sprite,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.Sprite.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

fossa.component.Sprite.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.Sprite.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.Sprite.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phzr_DASH_sprite,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.Sprite(self__.phzr_sprite,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.Sprite.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27012){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27016 = cljs.core.keyword_identical_QMARK_;
var expr__27017 = k__20878__auto__;
if(cljs.core.truth_((pred__27016.cljs$core$IFn$_invoke$arity$2 ? pred__27016.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$phzr_DASH_sprite,expr__27017) : pred__27016.call(null,cljs.core.cst$kw$phzr_DASH_sprite,expr__27017)))){
return (new fossa.component.Sprite(G__27012,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.Sprite(self__.phzr_sprite,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27012),null));
}
});

fossa.component.Sprite.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phzr_DASH_sprite,self__.phzr_sprite],null))], null),self__.__extmap));
});

fossa.component.Sprite.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27012){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.Sprite(self__.phzr_sprite,G__27012,self__.__extmap,self__.__hash));
});

fossa.component.Sprite.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.Sprite.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$phzr_DASH_sprite], null);
});

fossa.component.Sprite.cljs$lang$type = true;

fossa.component.Sprite.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/Sprite");
});

fossa.component.Sprite.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/Sprite");
});

fossa.component.__GT_Sprite = (function fossa$component$__GT_Sprite(phzr_sprite){
return (new fossa.component.Sprite(phzr_sprite,null,null,null));
});

fossa.component.map__GT_Sprite = (function fossa$component$map__GT_Sprite(G__27014){
return (new fossa.component.Sprite(cljs.core.cst$kw$phzr_DASH_sprite.cljs$core$IFn$_invoke$arity$1(G__27014),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27014,cljs.core.cst$kw$phzr_DASH_sprite),null));
});

fossa.component.get_phzr_sprite_from_entity = (function fossa$component$get_phzr_sprite_from_entity(system,entity){
return cljs.core.cst$kw$phzr_DASH_sprite.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,entity,fossa.component.Sprite));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.Tween = (function (phzr_tween,__meta,__extmap,__hash){
this.phzr_tween = phzr_tween;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.Tween.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.Tween.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27021,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27023 = (((k27021 instanceof cljs.core.Keyword))?k27021.fqn:null);
switch (G__27023) {
case "phzr-tween":
return self__.phzr_tween;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27021,else__20873__auto__);

}
});

fossa.component.Tween.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.Tween{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phzr_DASH_tween,self__.phzr_tween],null))], null),self__.__extmap));
});

fossa.component.Tween.prototype.cljs$core$IIterable$ = true;

fossa.component.Tween.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27020){
var self__ = this;
var G__27020__$1 = this;
return (new cljs.core.RecordIter((0),G__27020__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phzr_DASH_tween], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.Tween.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.Tween.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.Tween(self__.phzr_tween,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.Tween.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

fossa.component.Tween.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.Tween.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.Tween.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phzr_DASH_tween,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.Tween(self__.phzr_tween,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.Tween.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27020){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27024 = cljs.core.keyword_identical_QMARK_;
var expr__27025 = k__20878__auto__;
if(cljs.core.truth_((pred__27024.cljs$core$IFn$_invoke$arity$2 ? pred__27024.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$phzr_DASH_tween,expr__27025) : pred__27024.call(null,cljs.core.cst$kw$phzr_DASH_tween,expr__27025)))){
return (new fossa.component.Tween(G__27020,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.Tween(self__.phzr_tween,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27020),null));
}
});

fossa.component.Tween.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phzr_DASH_tween,self__.phzr_tween],null))], null),self__.__extmap));
});

fossa.component.Tween.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27020){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.Tween(self__.phzr_tween,G__27020,self__.__extmap,self__.__hash));
});

fossa.component.Tween.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.Tween.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$phzr_DASH_tween], null);
});

fossa.component.Tween.cljs$lang$type = true;

fossa.component.Tween.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/Tween");
});

fossa.component.Tween.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/Tween");
});

fossa.component.__GT_Tween = (function fossa$component$__GT_Tween(phzr_tween){
return (new fossa.component.Tween(phzr_tween,null,null,null));
});

fossa.component.map__GT_Tween = (function fossa$component$map__GT_Tween(G__27022){
return (new fossa.component.Tween(cljs.core.cst$kw$phzr_DASH_tween.cljs$core$IFn$_invoke$arity$1(G__27022),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27022,cljs.core.cst$kw$phzr_DASH_tween),null));
});

fossa.component.get_phzr_tween_from_entity = (function fossa$component$get_phzr_tween_from_entity(system,entity){
return cljs.core.cst$kw$phzr_DASH_tween.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,entity,fossa.component.Tween));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.Text = (function (phzr_text,__meta,__extmap,__hash){
this.phzr_text = phzr_text;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.Text.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.Text.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27029,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27031 = (((k27029 instanceof cljs.core.Keyword))?k27029.fqn:null);
switch (G__27031) {
case "phzr-text":
return self__.phzr_text;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27029,else__20873__auto__);

}
});

fossa.component.Text.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.Text{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phzr_DASH_text,self__.phzr_text],null))], null),self__.__extmap));
});

fossa.component.Text.prototype.cljs$core$IIterable$ = true;

fossa.component.Text.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27028){
var self__ = this;
var G__27028__$1 = this;
return (new cljs.core.RecordIter((0),G__27028__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phzr_DASH_text], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.Text.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.Text.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.Text(self__.phzr_text,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.Text.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

fossa.component.Text.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.Text.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.Text.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phzr_DASH_text,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.Text(self__.phzr_text,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.Text.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27028){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27032 = cljs.core.keyword_identical_QMARK_;
var expr__27033 = k__20878__auto__;
if(cljs.core.truth_((pred__27032.cljs$core$IFn$_invoke$arity$2 ? pred__27032.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$phzr_DASH_text,expr__27033) : pred__27032.call(null,cljs.core.cst$kw$phzr_DASH_text,expr__27033)))){
return (new fossa.component.Text(G__27028,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.Text(self__.phzr_text,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27028),null));
}
});

fossa.component.Text.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phzr_DASH_text,self__.phzr_text],null))], null),self__.__extmap));
});

fossa.component.Text.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27028){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.Text(self__.phzr_text,G__27028,self__.__extmap,self__.__hash));
});

fossa.component.Text.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.Text.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$phzr_DASH_text], null);
});

fossa.component.Text.cljs$lang$type = true;

fossa.component.Text.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/Text");
});

fossa.component.Text.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/Text");
});

fossa.component.__GT_Text = (function fossa$component$__GT_Text(phzr_text){
return (new fossa.component.Text(phzr_text,null,null,null));
});

fossa.component.map__GT_Text = (function fossa$component$map__GT_Text(G__27030){
return (new fossa.component.Text(cljs.core.cst$kw$phzr_DASH_text.cljs$core$IFn$_invoke$arity$1(G__27030),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27030,cljs.core.cst$kw$phzr_DASH_text),null));
});

fossa.component.get_phzr_text_from_entity = (function fossa$component$get_phzr_text_from_entity(system,entity){
return cljs.core.cst$kw$phzr_DASH_text.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,entity,fossa.component.Text));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.ResultsNavigation = (function (current_result,previous_text,next_text,__meta,__extmap,__hash){
this.current_result = current_result;
this.previous_text = previous_text;
this.next_text = next_text;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.ResultsNavigation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.ResultsNavigation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27037,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27039 = (((k27037 instanceof cljs.core.Keyword))?k27037.fqn:null);
switch (G__27039) {
case "current-result":
return self__.current_result;

break;
case "previous-text":
return self__.previous_text;

break;
case "next-text":
return self__.next_text;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27037,else__20873__auto__);

}
});

fossa.component.ResultsNavigation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.ResultsNavigation{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$current_DASH_result,self__.current_result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$previous_DASH_text,self__.previous_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$next_DASH_text,self__.next_text],null))], null),self__.__extmap));
});

fossa.component.ResultsNavigation.prototype.cljs$core$IIterable$ = true;

fossa.component.ResultsNavigation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27036){
var self__ = this;
var G__27036__$1 = this;
return (new cljs.core.RecordIter((0),G__27036__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$current_DASH_result,cljs.core.cst$kw$previous_DASH_text,cljs.core.cst$kw$next_DASH_text], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.ResultsNavigation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.ResultsNavigation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.ResultsNavigation(self__.current_result,self__.previous_text,self__.next_text,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.ResultsNavigation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

fossa.component.ResultsNavigation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.ResultsNavigation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.ResultsNavigation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$previous_DASH_text,null,cljs.core.cst$kw$next_DASH_text,null,cljs.core.cst$kw$current_DASH_result,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.ResultsNavigation(self__.current_result,self__.previous_text,self__.next_text,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.ResultsNavigation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27036){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27040 = cljs.core.keyword_identical_QMARK_;
var expr__27041 = k__20878__auto__;
if(cljs.core.truth_((pred__27040.cljs$core$IFn$_invoke$arity$2 ? pred__27040.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$current_DASH_result,expr__27041) : pred__27040.call(null,cljs.core.cst$kw$current_DASH_result,expr__27041)))){
return (new fossa.component.ResultsNavigation(G__27036,self__.previous_text,self__.next_text,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27040.cljs$core$IFn$_invoke$arity$2 ? pred__27040.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$previous_DASH_text,expr__27041) : pred__27040.call(null,cljs.core.cst$kw$previous_DASH_text,expr__27041)))){
return (new fossa.component.ResultsNavigation(self__.current_result,G__27036,self__.next_text,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27040.cljs$core$IFn$_invoke$arity$2 ? pred__27040.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$next_DASH_text,expr__27041) : pred__27040.call(null,cljs.core.cst$kw$next_DASH_text,expr__27041)))){
return (new fossa.component.ResultsNavigation(self__.current_result,self__.previous_text,G__27036,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.ResultsNavigation(self__.current_result,self__.previous_text,self__.next_text,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27036),null));
}
}
}
});

fossa.component.ResultsNavigation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$current_DASH_result,self__.current_result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$previous_DASH_text,self__.previous_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$next_DASH_text,self__.next_text],null))], null),self__.__extmap));
});

fossa.component.ResultsNavigation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27036){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.ResultsNavigation(self__.current_result,self__.previous_text,self__.next_text,G__27036,self__.__extmap,self__.__hash));
});

fossa.component.ResultsNavigation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.ResultsNavigation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$current_DASH_result,cljs.core.cst$sym$previous_DASH_text,cljs.core.cst$sym$next_DASH_text], null);
});

fossa.component.ResultsNavigation.cljs$lang$type = true;

fossa.component.ResultsNavigation.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/ResultsNavigation");
});

fossa.component.ResultsNavigation.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/ResultsNavigation");
});

fossa.component.__GT_ResultsNavigation = (function fossa$component$__GT_ResultsNavigation(current_result,previous_text,next_text){
return (new fossa.component.ResultsNavigation(current_result,previous_text,next_text,null,null,null));
});

fossa.component.map__GT_ResultsNavigation = (function fossa$component$map__GT_ResultsNavigation(G__27038){
return (new fossa.component.ResultsNavigation(cljs.core.cst$kw$current_DASH_result.cljs$core$IFn$_invoke$arity$1(G__27038),cljs.core.cst$kw$previous_DASH_text.cljs$core$IFn$_invoke$arity$1(G__27038),cljs.core.cst$kw$next_DASH_text.cljs$core$IFn$_invoke$arity$1(G__27038),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27038,cljs.core.cst$kw$current_DASH_result,cljs.core.array_seq([cljs.core.cst$kw$previous_DASH_text,cljs.core.cst$kw$next_DASH_text], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.DialogueBox = (function (group,background_sprite,textbox_sprite,textbox_text,character_sprite,__meta,__extmap,__hash){
this.group = group;
this.background_sprite = background_sprite;
this.textbox_sprite = textbox_sprite;
this.textbox_text = textbox_text;
this.character_sprite = character_sprite;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.DialogueBox.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.DialogueBox.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27045,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27047 = (((k27045 instanceof cljs.core.Keyword))?k27045.fqn:null);
switch (G__27047) {
case "group":
return self__.group;

break;
case "background-sprite":
return self__.background_sprite;

break;
case "textbox-sprite":
return self__.textbox_sprite;

break;
case "textbox-text":
return self__.textbox_text;

break;
case "character-sprite":
return self__.character_sprite;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27045,else__20873__auto__);

}
});

fossa.component.DialogueBox.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.DialogueBox{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$group,self__.group],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$background_DASH_sprite,self__.background_sprite],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$textbox_DASH_sprite,self__.textbox_sprite],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$textbox_DASH_text,self__.textbox_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$character_DASH_sprite,self__.character_sprite],null))], null),self__.__extmap));
});

fossa.component.DialogueBox.prototype.cljs$core$IIterable$ = true;

fossa.component.DialogueBox.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27044){
var self__ = this;
var G__27044__$1 = this;
return (new cljs.core.RecordIter((0),G__27044__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$group,cljs.core.cst$kw$background_DASH_sprite,cljs.core.cst$kw$textbox_DASH_sprite,cljs.core.cst$kw$textbox_DASH_text,cljs.core.cst$kw$character_DASH_sprite], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.DialogueBox.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.DialogueBox.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.DialogueBox(self__.group,self__.background_sprite,self__.textbox_sprite,self__.textbox_text,self__.character_sprite,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.DialogueBox.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

fossa.component.DialogueBox.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.DialogueBox.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.DialogueBox.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$character_DASH_sprite,null,cljs.core.cst$kw$group,null,cljs.core.cst$kw$background_DASH_sprite,null,cljs.core.cst$kw$textbox_DASH_text,null,cljs.core.cst$kw$textbox_DASH_sprite,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.DialogueBox(self__.group,self__.background_sprite,self__.textbox_sprite,self__.textbox_text,self__.character_sprite,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.DialogueBox.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27044){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27048 = cljs.core.keyword_identical_QMARK_;
var expr__27049 = k__20878__auto__;
if(cljs.core.truth_((pred__27048.cljs$core$IFn$_invoke$arity$2 ? pred__27048.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$group,expr__27049) : pred__27048.call(null,cljs.core.cst$kw$group,expr__27049)))){
return (new fossa.component.DialogueBox(G__27044,self__.background_sprite,self__.textbox_sprite,self__.textbox_text,self__.character_sprite,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27048.cljs$core$IFn$_invoke$arity$2 ? pred__27048.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$background_DASH_sprite,expr__27049) : pred__27048.call(null,cljs.core.cst$kw$background_DASH_sprite,expr__27049)))){
return (new fossa.component.DialogueBox(self__.group,G__27044,self__.textbox_sprite,self__.textbox_text,self__.character_sprite,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27048.cljs$core$IFn$_invoke$arity$2 ? pred__27048.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$textbox_DASH_sprite,expr__27049) : pred__27048.call(null,cljs.core.cst$kw$textbox_DASH_sprite,expr__27049)))){
return (new fossa.component.DialogueBox(self__.group,self__.background_sprite,G__27044,self__.textbox_text,self__.character_sprite,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27048.cljs$core$IFn$_invoke$arity$2 ? pred__27048.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$textbox_DASH_text,expr__27049) : pred__27048.call(null,cljs.core.cst$kw$textbox_DASH_text,expr__27049)))){
return (new fossa.component.DialogueBox(self__.group,self__.background_sprite,self__.textbox_sprite,G__27044,self__.character_sprite,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27048.cljs$core$IFn$_invoke$arity$2 ? pred__27048.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$character_DASH_sprite,expr__27049) : pred__27048.call(null,cljs.core.cst$kw$character_DASH_sprite,expr__27049)))){
return (new fossa.component.DialogueBox(self__.group,self__.background_sprite,self__.textbox_sprite,self__.textbox_text,G__27044,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.DialogueBox(self__.group,self__.background_sprite,self__.textbox_sprite,self__.textbox_text,self__.character_sprite,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27044),null));
}
}
}
}
}
});

fossa.component.DialogueBox.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$group,self__.group],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$background_DASH_sprite,self__.background_sprite],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$textbox_DASH_sprite,self__.textbox_sprite],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$textbox_DASH_text,self__.textbox_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$character_DASH_sprite,self__.character_sprite],null))], null),self__.__extmap));
});

fossa.component.DialogueBox.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27044){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.DialogueBox(self__.group,self__.background_sprite,self__.textbox_sprite,self__.textbox_text,self__.character_sprite,G__27044,self__.__extmap,self__.__hash));
});

fossa.component.DialogueBox.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.DialogueBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$group,cljs.core.cst$sym$background_DASH_sprite,cljs.core.cst$sym$textbox_DASH_sprite,cljs.core.cst$sym$textbox_DASH_text,cljs.core.cst$sym$character_DASH_sprite], null);
});

fossa.component.DialogueBox.cljs$lang$type = true;

fossa.component.DialogueBox.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/DialogueBox");
});

fossa.component.DialogueBox.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/DialogueBox");
});

fossa.component.__GT_DialogueBox = (function fossa$component$__GT_DialogueBox(group,background_sprite,textbox_sprite,textbox_text,character_sprite){
return (new fossa.component.DialogueBox(group,background_sprite,textbox_sprite,textbox_text,character_sprite,null,null,null));
});

fossa.component.map__GT_DialogueBox = (function fossa$component$map__GT_DialogueBox(G__27046){
return (new fossa.component.DialogueBox(cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1(G__27046),cljs.core.cst$kw$background_DASH_sprite.cljs$core$IFn$_invoke$arity$1(G__27046),cljs.core.cst$kw$textbox_DASH_sprite.cljs$core$IFn$_invoke$arity$1(G__27046),cljs.core.cst$kw$textbox_DASH_text.cljs$core$IFn$_invoke$arity$1(G__27046),cljs.core.cst$kw$character_DASH_sprite.cljs$core$IFn$_invoke$arity$1(G__27046),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27046,cljs.core.cst$kw$group,cljs.core.array_seq([cljs.core.cst$kw$background_DASH_sprite,cljs.core.cst$kw$textbox_DASH_sprite,cljs.core.cst$kw$textbox_DASH_text,cljs.core.cst$kw$character_DASH_sprite], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.Group = (function (phzr_group,members,__meta,__extmap,__hash){
this.phzr_group = phzr_group;
this.members = members;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.Group.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.Group.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27053,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27055 = (((k27053 instanceof cljs.core.Keyword))?k27053.fqn:null);
switch (G__27055) {
case "phzr-group":
return self__.phzr_group;

break;
case "members":
return self__.members;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27053,else__20873__auto__);

}
});

fossa.component.Group.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.Group{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phzr_DASH_group,self__.phzr_group],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$members,self__.members],null))], null),self__.__extmap));
});

fossa.component.Group.prototype.cljs$core$IIterable$ = true;

fossa.component.Group.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27052){
var self__ = this;
var G__27052__$1 = this;
return (new cljs.core.RecordIter((0),G__27052__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phzr_DASH_group,cljs.core.cst$kw$members], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.Group.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.Group.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.Group(self__.phzr_group,self__.members,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.Group.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

fossa.component.Group.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.Group.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.Group.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$phzr_DASH_group,null,cljs.core.cst$kw$members,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.Group(self__.phzr_group,self__.members,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.Group.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27052){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27056 = cljs.core.keyword_identical_QMARK_;
var expr__27057 = k__20878__auto__;
if(cljs.core.truth_((pred__27056.cljs$core$IFn$_invoke$arity$2 ? pred__27056.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$phzr_DASH_group,expr__27057) : pred__27056.call(null,cljs.core.cst$kw$phzr_DASH_group,expr__27057)))){
return (new fossa.component.Group(G__27052,self__.members,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27056.cljs$core$IFn$_invoke$arity$2 ? pred__27056.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$members,expr__27057) : pred__27056.call(null,cljs.core.cst$kw$members,expr__27057)))){
return (new fossa.component.Group(self__.phzr_group,G__27052,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.Group(self__.phzr_group,self__.members,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27052),null));
}
}
});

fossa.component.Group.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phzr_DASH_group,self__.phzr_group],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$members,self__.members],null))], null),self__.__extmap));
});

fossa.component.Group.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27052){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.Group(self__.phzr_group,self__.members,G__27052,self__.__extmap,self__.__hash));
});

fossa.component.Group.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.Group.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$phzr_DASH_group,cljs.core.cst$sym$members], null);
});

fossa.component.Group.cljs$lang$type = true;

fossa.component.Group.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/Group");
});

fossa.component.Group.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/Group");
});

fossa.component.__GT_Group = (function fossa$component$__GT_Group(phzr_group,members){
return (new fossa.component.Group(phzr_group,members,null,null,null));
});

fossa.component.map__GT_Group = (function fossa$component$map__GT_Group(G__27054){
return (new fossa.component.Group(cljs.core.cst$kw$phzr_DASH_group.cljs$core$IFn$_invoke$arity$1(G__27054),cljs.core.cst$kw$members.cljs$core$IFn$_invoke$arity$1(G__27054),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27054,cljs.core.cst$kw$phzr_DASH_group,cljs.core.array_seq([cljs.core.cst$kw$members], 0)),null));
});

fossa.component.get_phzr_group_from_entity = (function fossa$component$get_phzr_group_from_entity(system,entity){
return cljs.core.cst$kw$phzr_DASH_group.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,entity,fossa.component.Group));
});
fossa.component.get_group_members_from_entity = (function fossa$component$get_group_members_from_entity(system,entity){
return cljs.core.cst$kw$members.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,entity,fossa.component.Group));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.MovementButtons = (function (movement_buttons,group,__meta,__extmap,__hash){
this.movement_buttons = movement_buttons;
this.group = group;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.MovementButtons.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.MovementButtons.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27061,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27063 = (((k27061 instanceof cljs.core.Keyword))?k27061.fqn:null);
switch (G__27063) {
case "movement-buttons":
return self__.movement_buttons;

break;
case "group":
return self__.group;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27061,else__20873__auto__);

}
});

fossa.component.MovementButtons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.MovementButtons{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$movement_DASH_buttons,self__.movement_buttons],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$group,self__.group],null))], null),self__.__extmap));
});

fossa.component.MovementButtons.prototype.cljs$core$IIterable$ = true;

fossa.component.MovementButtons.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27060){
var self__ = this;
var G__27060__$1 = this;
return (new cljs.core.RecordIter((0),G__27060__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$movement_DASH_buttons,cljs.core.cst$kw$group], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.MovementButtons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.MovementButtons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.MovementButtons(self__.movement_buttons,self__.group,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.MovementButtons.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

fossa.component.MovementButtons.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.MovementButtons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.MovementButtons.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$group,null,cljs.core.cst$kw$movement_DASH_buttons,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.MovementButtons(self__.movement_buttons,self__.group,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.MovementButtons.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27060){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27064 = cljs.core.keyword_identical_QMARK_;
var expr__27065 = k__20878__auto__;
if(cljs.core.truth_((pred__27064.cljs$core$IFn$_invoke$arity$2 ? pred__27064.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$movement_DASH_buttons,expr__27065) : pred__27064.call(null,cljs.core.cst$kw$movement_DASH_buttons,expr__27065)))){
return (new fossa.component.MovementButtons(G__27060,self__.group,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27064.cljs$core$IFn$_invoke$arity$2 ? pred__27064.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$group,expr__27065) : pred__27064.call(null,cljs.core.cst$kw$group,expr__27065)))){
return (new fossa.component.MovementButtons(self__.movement_buttons,G__27060,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.MovementButtons(self__.movement_buttons,self__.group,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27060),null));
}
}
});

fossa.component.MovementButtons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$movement_DASH_buttons,self__.movement_buttons],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$group,self__.group],null))], null),self__.__extmap));
});

fossa.component.MovementButtons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27060){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.MovementButtons(self__.movement_buttons,self__.group,G__27060,self__.__extmap,self__.__hash));
});

fossa.component.MovementButtons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.MovementButtons.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$movement_DASH_buttons,cljs.core.cst$sym$group], null);
});

fossa.component.MovementButtons.cljs$lang$type = true;

fossa.component.MovementButtons.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/MovementButtons");
});

fossa.component.MovementButtons.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/MovementButtons");
});

fossa.component.__GT_MovementButtons = (function fossa$component$__GT_MovementButtons(movement_buttons,group){
return (new fossa.component.MovementButtons(movement_buttons,group,null,null,null));
});

fossa.component.map__GT_MovementButtons = (function fossa$component$map__GT_MovementButtons(G__27062){
return (new fossa.component.MovementButtons(cljs.core.cst$kw$movement_DASH_buttons.cljs$core$IFn$_invoke$arity$1(G__27062),cljs.core.cst$kw$group.cljs$core$IFn$_invoke$arity$1(G__27062),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27062,cljs.core.cst$kw$movement_DASH_buttons,cljs.core.array_seq([cljs.core.cst$kw$group], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.Background = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.Background.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.Background.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27069,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27071 = k27069;
switch (G__27071) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27069,else__20873__auto__);

}
});

fossa.component.Background.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.Background{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

fossa.component.Background.prototype.cljs$core$IIterable$ = true;

fossa.component.Background.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27068){
var self__ = this;
var G__27068__$1 = this;
return (new cljs.core.RecordIter((0),G__27068__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

fossa.component.Background.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.Background.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.Background(self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.Background.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

fossa.component.Background.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.Background.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.Background.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.Background(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.Background.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27068){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27072 = cljs.core.keyword_identical_QMARK_;
var expr__27073 = k__20878__auto__;
return (new fossa.component.Background(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27068),null));
});

fossa.component.Background.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

fossa.component.Background.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27068){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.Background(G__27068,self__.__extmap,self__.__hash));
});

fossa.component.Background.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.Background.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

fossa.component.Background.cljs$lang$type = true;

fossa.component.Background.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/Background");
});

fossa.component.Background.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/Background");
});

fossa.component.__GT_Background = (function fossa$component$__GT_Background(){
return (new fossa.component.Background(null,null,null));
});

fossa.component.map__GT_Background = (function fossa$component$map__GT_Background(G__27070){
return (new fossa.component.Background(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__27070),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.ExplorationPath = (function (direction,active,__meta,__extmap,__hash){
this.direction = direction;
this.active = active;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.ExplorationPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.ExplorationPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27077,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27079 = (((k27077 instanceof cljs.core.Keyword))?k27077.fqn:null);
switch (G__27079) {
case "direction":
return self__.direction;

break;
case "active":
return self__.active;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27077,else__20873__auto__);

}
});

fossa.component.ExplorationPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.ExplorationPath{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$direction,self__.direction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$active,self__.active],null))], null),self__.__extmap));
});

fossa.component.ExplorationPath.prototype.cljs$core$IIterable$ = true;

fossa.component.ExplorationPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27076){
var self__ = this;
var G__27076__$1 = this;
return (new cljs.core.RecordIter((0),G__27076__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$direction,cljs.core.cst$kw$active], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.ExplorationPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.ExplorationPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.ExplorationPath(self__.direction,self__.active,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.ExplorationPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

fossa.component.ExplorationPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.ExplorationPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.ExplorationPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$active,null,cljs.core.cst$kw$direction,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.ExplorationPath(self__.direction,self__.active,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.ExplorationPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27076){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27080 = cljs.core.keyword_identical_QMARK_;
var expr__27081 = k__20878__auto__;
if(cljs.core.truth_((pred__27080.cljs$core$IFn$_invoke$arity$2 ? pred__27080.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$direction,expr__27081) : pred__27080.call(null,cljs.core.cst$kw$direction,expr__27081)))){
return (new fossa.component.ExplorationPath(G__27076,self__.active,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27080.cljs$core$IFn$_invoke$arity$2 ? pred__27080.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$active,expr__27081) : pred__27080.call(null,cljs.core.cst$kw$active,expr__27081)))){
return (new fossa.component.ExplorationPath(self__.direction,G__27076,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.ExplorationPath(self__.direction,self__.active,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27076),null));
}
}
});

fossa.component.ExplorationPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$direction,self__.direction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$active,self__.active],null))], null),self__.__extmap));
});

fossa.component.ExplorationPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27076){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.ExplorationPath(self__.direction,self__.active,G__27076,self__.__extmap,self__.__hash));
});

fossa.component.ExplorationPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.ExplorationPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$direction,cljs.core.cst$sym$active], null);
});

fossa.component.ExplorationPath.cljs$lang$type = true;

fossa.component.ExplorationPath.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/ExplorationPath");
});

fossa.component.ExplorationPath.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/ExplorationPath");
});

fossa.component.__GT_ExplorationPath = (function fossa$component$__GT_ExplorationPath(direction,active){
return (new fossa.component.ExplorationPath(direction,active,null,null,null));
});

fossa.component.map__GT_ExplorationPath = (function fossa$component$map__GT_ExplorationPath(G__27078){
return (new fossa.component.ExplorationPath(cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(G__27078),cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(G__27078),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27078,cljs.core.cst$kw$direction,cljs.core.array_seq([cljs.core.cst$kw$active], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.PartyMember = (function (member_name,is_liar,__meta,__extmap,__hash){
this.member_name = member_name;
this.is_liar = is_liar;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.PartyMember.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.PartyMember.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27085,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27087 = (((k27085 instanceof cljs.core.Keyword))?k27085.fqn:null);
switch (G__27087) {
case "member-name":
return self__.member_name;

break;
case "is-liar":
return self__.is_liar;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27085,else__20873__auto__);

}
});

fossa.component.PartyMember.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.PartyMember{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$member_DASH_name,self__.member_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$is_DASH_liar,self__.is_liar],null))], null),self__.__extmap));
});

fossa.component.PartyMember.prototype.cljs$core$IIterable$ = true;

fossa.component.PartyMember.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27084){
var self__ = this;
var G__27084__$1 = this;
return (new cljs.core.RecordIter((0),G__27084__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$member_DASH_name,cljs.core.cst$kw$is_DASH_liar], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.PartyMember.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.PartyMember.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.PartyMember(self__.member_name,self__.is_liar,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.PartyMember.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

fossa.component.PartyMember.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.PartyMember.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.PartyMember.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$is_DASH_liar,null,cljs.core.cst$kw$member_DASH_name,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.PartyMember(self__.member_name,self__.is_liar,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.PartyMember.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27084){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27088 = cljs.core.keyword_identical_QMARK_;
var expr__27089 = k__20878__auto__;
if(cljs.core.truth_((pred__27088.cljs$core$IFn$_invoke$arity$2 ? pred__27088.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$member_DASH_name,expr__27089) : pred__27088.call(null,cljs.core.cst$kw$member_DASH_name,expr__27089)))){
return (new fossa.component.PartyMember(G__27084,self__.is_liar,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27088.cljs$core$IFn$_invoke$arity$2 ? pred__27088.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$is_DASH_liar,expr__27089) : pred__27088.call(null,cljs.core.cst$kw$is_DASH_liar,expr__27089)))){
return (new fossa.component.PartyMember(self__.member_name,G__27084,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.PartyMember(self__.member_name,self__.is_liar,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27084),null));
}
}
});

fossa.component.PartyMember.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$member_DASH_name,self__.member_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$is_DASH_liar,self__.is_liar],null))], null),self__.__extmap));
});

fossa.component.PartyMember.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27084){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.PartyMember(self__.member_name,self__.is_liar,G__27084,self__.__extmap,self__.__hash));
});

fossa.component.PartyMember.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.PartyMember.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$member_DASH_name,cljs.core.cst$sym$is_DASH_liar], null);
});

fossa.component.PartyMember.cljs$lang$type = true;

fossa.component.PartyMember.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/PartyMember");
});

fossa.component.PartyMember.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/PartyMember");
});

fossa.component.__GT_PartyMember = (function fossa$component$__GT_PartyMember(member_name,is_liar){
return (new fossa.component.PartyMember(member_name,is_liar,null,null,null));
});

fossa.component.map__GT_PartyMember = (function fossa$component$map__GT_PartyMember(G__27086){
return (new fossa.component.PartyMember(cljs.core.cst$kw$member_DASH_name.cljs$core$IFn$_invoke$arity$1(G__27086),cljs.core.cst$kw$is_DASH_liar.cljs$core$IFn$_invoke$arity$1(G__27086),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27086,cljs.core.cst$kw$member_DASH_name,cljs.core.array_seq([cljs.core.cst$kw$is_DASH_liar], 0)),null));
});

fossa.component.get_member_name_from_entity = (function fossa$component$get_member_name_from_entity(system,entity){
return cljs.core.cst$kw$member_DASH_name.cljs$core$IFn$_invoke$arity$1(brute.entity.get_component(system,entity,fossa.component.PartyMember));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.UnassignedMembers = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.UnassignedMembers.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.UnassignedMembers.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27093,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27095 = k27093;
switch (G__27095) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27093,else__20873__auto__);

}
});

fossa.component.UnassignedMembers.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.UnassignedMembers{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

fossa.component.UnassignedMembers.prototype.cljs$core$IIterable$ = true;

fossa.component.UnassignedMembers.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27092){
var self__ = this;
var G__27092__$1 = this;
return (new cljs.core.RecordIter((0),G__27092__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator(self__.__extmap)));
});

fossa.component.UnassignedMembers.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.UnassignedMembers.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.UnassignedMembers(self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.UnassignedMembers.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

fossa.component.UnassignedMembers.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.UnassignedMembers.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.UnassignedMembers.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.UnassignedMembers(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.UnassignedMembers.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27092){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27096 = cljs.core.keyword_identical_QMARK_;
var expr__27097 = k__20878__auto__;
return (new fossa.component.UnassignedMembers(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27092),null));
});

fossa.component.UnassignedMembers.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

fossa.component.UnassignedMembers.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27092){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.UnassignedMembers(G__27092,self__.__extmap,self__.__hash));
});

fossa.component.UnassignedMembers.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.UnassignedMembers.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

fossa.component.UnassignedMembers.cljs$lang$type = true;

fossa.component.UnassignedMembers.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/UnassignedMembers");
});

fossa.component.UnassignedMembers.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/UnassignedMembers");
});

fossa.component.__GT_UnassignedMembers = (function fossa$component$__GT_UnassignedMembers(){
return (new fossa.component.UnassignedMembers(null,null,null));
});

fossa.component.map__GT_UnassignedMembers = (function fossa$component$map__GT_UnassignedMembers(G__27094){
return (new fossa.component.UnassignedMembers(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__27094),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.Dungeon = (function (rooms,current_room,__meta,__extmap,__hash){
this.rooms = rooms;
this.current_room = current_room;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.Dungeon.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.Dungeon.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27101,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27103 = (((k27101 instanceof cljs.core.Keyword))?k27101.fqn:null);
switch (G__27103) {
case "rooms":
return self__.rooms;

break;
case "current-room":
return self__.current_room;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27101,else__20873__auto__);

}
});

fossa.component.Dungeon.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.Dungeon{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rooms,self__.rooms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$current_DASH_room,self__.current_room],null))], null),self__.__extmap));
});

fossa.component.Dungeon.prototype.cljs$core$IIterable$ = true;

fossa.component.Dungeon.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27100){
var self__ = this;
var G__27100__$1 = this;
return (new cljs.core.RecordIter((0),G__27100__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rooms,cljs.core.cst$kw$current_DASH_room], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.Dungeon.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.Dungeon.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.Dungeon(self__.rooms,self__.current_room,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.Dungeon.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

fossa.component.Dungeon.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.Dungeon.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.Dungeon.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rooms,null,cljs.core.cst$kw$current_DASH_room,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.Dungeon(self__.rooms,self__.current_room,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.Dungeon.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27100){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27104 = cljs.core.keyword_identical_QMARK_;
var expr__27105 = k__20878__auto__;
if(cljs.core.truth_((pred__27104.cljs$core$IFn$_invoke$arity$2 ? pred__27104.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rooms,expr__27105) : pred__27104.call(null,cljs.core.cst$kw$rooms,expr__27105)))){
return (new fossa.component.Dungeon(G__27100,self__.current_room,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27104.cljs$core$IFn$_invoke$arity$2 ? pred__27104.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$current_DASH_room,expr__27105) : pred__27104.call(null,cljs.core.cst$kw$current_DASH_room,expr__27105)))){
return (new fossa.component.Dungeon(self__.rooms,G__27100,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.Dungeon(self__.rooms,self__.current_room,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27100),null));
}
}
});

fossa.component.Dungeon.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rooms,self__.rooms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$current_DASH_room,self__.current_room],null))], null),self__.__extmap));
});

fossa.component.Dungeon.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27100){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.Dungeon(self__.rooms,self__.current_room,G__27100,self__.__extmap,self__.__hash));
});

fossa.component.Dungeon.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.Dungeon.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rooms,cljs.core.cst$sym$current_DASH_room], null);
});

fossa.component.Dungeon.cljs$lang$type = true;

fossa.component.Dungeon.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/Dungeon");
});

fossa.component.Dungeon.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/Dungeon");
});

fossa.component.__GT_Dungeon = (function fossa$component$__GT_Dungeon(rooms,current_room){
return (new fossa.component.Dungeon(rooms,current_room,null,null,null));
});

fossa.component.map__GT_Dungeon = (function fossa$component$map__GT_Dungeon(G__27102){
return (new fossa.component.Dungeon(cljs.core.cst$kw$rooms.cljs$core$IFn$_invoke$arity$1(G__27102),cljs.core.cst$kw$current_DASH_room.cljs$core$IFn$_invoke$arity$1(G__27102),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27102,cljs.core.cst$kw$rooms,cljs.core.array_seq([cljs.core.cst$kw$current_DASH_room], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.ExploreButton = (function (phzr_button,__meta,__extmap,__hash){
this.phzr_button = phzr_button;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.ExploreButton.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.ExploreButton.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27109,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27111 = (((k27109 instanceof cljs.core.Keyword))?k27109.fqn:null);
switch (G__27111) {
case "phzr-button":
return self__.phzr_button;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27109,else__20873__auto__);

}
});

fossa.component.ExploreButton.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.ExploreButton{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phzr_DASH_button,self__.phzr_button],null))], null),self__.__extmap));
});

fossa.component.ExploreButton.prototype.cljs$core$IIterable$ = true;

fossa.component.ExploreButton.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27108){
var self__ = this;
var G__27108__$1 = this;
return (new cljs.core.RecordIter((0),G__27108__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phzr_DASH_button], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.ExploreButton.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.ExploreButton.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.ExploreButton(self__.phzr_button,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.ExploreButton.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

fossa.component.ExploreButton.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.ExploreButton.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.ExploreButton.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phzr_DASH_button,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.ExploreButton(self__.phzr_button,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.ExploreButton.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27108){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27112 = cljs.core.keyword_identical_QMARK_;
var expr__27113 = k__20878__auto__;
if(cljs.core.truth_((pred__27112.cljs$core$IFn$_invoke$arity$2 ? pred__27112.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$phzr_DASH_button,expr__27113) : pred__27112.call(null,cljs.core.cst$kw$phzr_DASH_button,expr__27113)))){
return (new fossa.component.ExploreButton(G__27108,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.ExploreButton(self__.phzr_button,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27108),null));
}
});

fossa.component.ExploreButton.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phzr_DASH_button,self__.phzr_button],null))], null),self__.__extmap));
});

fossa.component.ExploreButton.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27108){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.ExploreButton(self__.phzr_button,G__27108,self__.__extmap,self__.__hash));
});

fossa.component.ExploreButton.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.ExploreButton.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$phzr_DASH_button], null);
});

fossa.component.ExploreButton.cljs$lang$type = true;

fossa.component.ExploreButton.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/ExploreButton");
});

fossa.component.ExploreButton.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/ExploreButton");
});

fossa.component.__GT_ExploreButton = (function fossa$component$__GT_ExploreButton(phzr_button){
return (new fossa.component.ExploreButton(phzr_button,null,null,null));
});

fossa.component.map__GT_ExploreButton = (function fossa$component$map__GT_ExploreButton(G__27110){
return (new fossa.component.ExploreButton(cljs.core.cst$kw$phzr_DASH_button.cljs$core$IFn$_invoke$arity$1(G__27110),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27110,cljs.core.cst$kw$phzr_DASH_button),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.ExplorationResults = (function (previous_results,__meta,__extmap,__hash){
this.previous_results = previous_results;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.ExplorationResults.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.ExplorationResults.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27117,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27119 = (((k27117 instanceof cljs.core.Keyword))?k27117.fqn:null);
switch (G__27119) {
case "previous-results":
return self__.previous_results;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27117,else__20873__auto__);

}
});

fossa.component.ExplorationResults.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.ExplorationResults{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$previous_DASH_results,self__.previous_results],null))], null),self__.__extmap));
});

fossa.component.ExplorationResults.prototype.cljs$core$IIterable$ = true;

fossa.component.ExplorationResults.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27116){
var self__ = this;
var G__27116__$1 = this;
return (new cljs.core.RecordIter((0),G__27116__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$previous_DASH_results], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.ExplorationResults.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.ExplorationResults.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.ExplorationResults(self__.previous_results,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.ExplorationResults.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

fossa.component.ExplorationResults.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.ExplorationResults.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.ExplorationResults.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$previous_DASH_results,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.ExplorationResults(self__.previous_results,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.ExplorationResults.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27116){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27120 = cljs.core.keyword_identical_QMARK_;
var expr__27121 = k__20878__auto__;
if(cljs.core.truth_((pred__27120.cljs$core$IFn$_invoke$arity$2 ? pred__27120.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$previous_DASH_results,expr__27121) : pred__27120.call(null,cljs.core.cst$kw$previous_DASH_results,expr__27121)))){
return (new fossa.component.ExplorationResults(G__27116,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.ExplorationResults(self__.previous_results,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27116),null));
}
});

fossa.component.ExplorationResults.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$previous_DASH_results,self__.previous_results],null))], null),self__.__extmap));
});

fossa.component.ExplorationResults.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27116){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.ExplorationResults(self__.previous_results,G__27116,self__.__extmap,self__.__hash));
});

fossa.component.ExplorationResults.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.ExplorationResults.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$previous_DASH_results], null);
});

fossa.component.ExplorationResults.cljs$lang$type = true;

fossa.component.ExplorationResults.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/ExplorationResults");
});

fossa.component.ExplorationResults.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/ExplorationResults");
});

fossa.component.__GT_ExplorationResults = (function fossa$component$__GT_ExplorationResults(previous_results){
return (new fossa.component.ExplorationResults(previous_results,null,null,null));
});

fossa.component.map__GT_ExplorationResults = (function fossa$component$map__GT_ExplorationResults(G__27118){
return (new fossa.component.ExplorationResults(cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(G__27118),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27118,cljs.core.cst$kw$previous_DASH_results),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.MovementResults = (function (previous_results,__meta,__extmap,__hash){
this.previous_results = previous_results;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.MovementResults.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.MovementResults.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27125,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27127 = (((k27125 instanceof cljs.core.Keyword))?k27125.fqn:null);
switch (G__27127) {
case "previous-results":
return self__.previous_results;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27125,else__20873__auto__);

}
});

fossa.component.MovementResults.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.MovementResults{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$previous_DASH_results,self__.previous_results],null))], null),self__.__extmap));
});

fossa.component.MovementResults.prototype.cljs$core$IIterable$ = true;

fossa.component.MovementResults.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27124){
var self__ = this;
var G__27124__$1 = this;
return (new cljs.core.RecordIter((0),G__27124__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$previous_DASH_results], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.MovementResults.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.MovementResults.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.MovementResults(self__.previous_results,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.MovementResults.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

fossa.component.MovementResults.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.MovementResults.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.MovementResults.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$previous_DASH_results,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.MovementResults(self__.previous_results,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.MovementResults.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27124){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27128 = cljs.core.keyword_identical_QMARK_;
var expr__27129 = k__20878__auto__;
if(cljs.core.truth_((pred__27128.cljs$core$IFn$_invoke$arity$2 ? pred__27128.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$previous_DASH_results,expr__27129) : pred__27128.call(null,cljs.core.cst$kw$previous_DASH_results,expr__27129)))){
return (new fossa.component.MovementResults(G__27124,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.MovementResults(self__.previous_results,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27124),null));
}
});

fossa.component.MovementResults.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$previous_DASH_results,self__.previous_results],null))], null),self__.__extmap));
});

fossa.component.MovementResults.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27124){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.MovementResults(self__.previous_results,G__27124,self__.__extmap,self__.__hash));
});

fossa.component.MovementResults.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.MovementResults.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$previous_DASH_results], null);
});

fossa.component.MovementResults.cljs$lang$type = true;

fossa.component.MovementResults.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/MovementResults");
});

fossa.component.MovementResults.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/MovementResults");
});

fossa.component.__GT_MovementResults = (function fossa$component$__GT_MovementResults(previous_results){
return (new fossa.component.MovementResults(previous_results,null,null,null));
});

fossa.component.map__GT_MovementResults = (function fossa$component$map__GT_MovementResults(G__27126){
return (new fossa.component.MovementResults(cljs.core.cst$kw$previous_DASH_results.cljs$core$IFn$_invoke$arity$1(G__27126),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27126,cljs.core.cst$kw$previous_DASH_results),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fossa.component.ResultsButton = (function (phzr_button,__meta,__extmap,__hash){
this.phzr_button = phzr_button;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
fossa.component.ResultsButton.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

fossa.component.ResultsButton.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k27133,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__27135 = (((k27133 instanceof cljs.core.Keyword))?k27133.fqn:null);
switch (G__27135) {
case "phzr-button":
return self__.phzr_button;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27133,else__20873__auto__);

}
});

fossa.component.ResultsButton.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#fossa.component.ResultsButton{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phzr_DASH_button,self__.phzr_button],null))], null),self__.__extmap));
});

fossa.component.ResultsButton.prototype.cljs$core$IIterable$ = true;

fossa.component.ResultsButton.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27132){
var self__ = this;
var G__27132__$1 = this;
return (new cljs.core.RecordIter((0),G__27132__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$phzr_DASH_button], null),cljs.core._iterator(self__.__extmap)));
});

fossa.component.ResultsButton.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

fossa.component.ResultsButton.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new fossa.component.ResultsButton(self__.phzr_button,self__.__meta,self__.__extmap,self__.__hash));
});

fossa.component.ResultsButton.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

fossa.component.ResultsButton.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
var self__ = this;
var this__20865__auto____$1 = this;
var h__20683__auto__ = self__.__hash;
if(!((h__20683__auto__ == null))){
return h__20683__auto__;
} else {
var h__20683__auto____$1 = cljs.core.hash_imap(this__20865__auto____$1);
self__.__hash = h__20683__auto____$1;

return h__20683__auto____$1;
}
});

fossa.component.ResultsButton.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
var self__ = this;
var this__20866__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20236__auto__ = other__20867__auto__;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = (this__20866__auto____$1.constructor === other__20867__auto__.constructor);
if(and__20236__auto____$1){
return cljs.core.equiv_map(this__20866__auto____$1,other__20867__auto__);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return true;
} else {
return false;
}
});

fossa.component.ResultsButton.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phzr_DASH_button,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new fossa.component.ResultsButton(self__.phzr_button,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

fossa.component.ResultsButton.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__27132){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__27136 = cljs.core.keyword_identical_QMARK_;
var expr__27137 = k__20878__auto__;
if(cljs.core.truth_((pred__27136.cljs$core$IFn$_invoke$arity$2 ? pred__27136.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$phzr_DASH_button,expr__27137) : pred__27136.call(null,cljs.core.cst$kw$phzr_DASH_button,expr__27137)))){
return (new fossa.component.ResultsButton(G__27132,self__.__meta,self__.__extmap,null));
} else {
return (new fossa.component.ResultsButton(self__.phzr_button,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__27132),null));
}
});

fossa.component.ResultsButton.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$phzr_DASH_button,self__.phzr_button],null))], null),self__.__extmap));
});

fossa.component.ResultsButton.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__27132){
var self__ = this;
var this__20869__auto____$1 = this;
return (new fossa.component.ResultsButton(self__.phzr_button,G__27132,self__.__extmap,self__.__hash));
});

fossa.component.ResultsButton.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

fossa.component.ResultsButton.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$phzr_DASH_button], null);
});

fossa.component.ResultsButton.cljs$lang$type = true;

fossa.component.ResultsButton.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"fossa.component/ResultsButton");
});

fossa.component.ResultsButton.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"fossa.component/ResultsButton");
});

fossa.component.__GT_ResultsButton = (function fossa$component$__GT_ResultsButton(phzr_button){
return (new fossa.component.ResultsButton(phzr_button,null,null,null));
});

fossa.component.map__GT_ResultsButton = (function fossa$component$map__GT_ResultsButton(G__27134){
return (new fossa.component.ResultsButton(cljs.core.cst$kw$phzr_DASH_button.cljs$core$IFn$_invoke$arity$1(G__27134),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27134,cljs.core.cst$kw$phzr_DASH_button),null));
});

