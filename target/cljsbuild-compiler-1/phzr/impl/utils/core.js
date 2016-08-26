// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.impl.utils.core');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
phzr.impl.utils.core.name__GT_kebab_keyword = cljs.core.memoize((function (s){
return camel_snake_kebab.core.__GT_kebab_case_keyword(s);
}));
phzr.impl.utils.core.js__GT_clj_STAR_ = (function phzr$impl$utils$core$js__GT_clj_STAR_(x){
var keyfn = phzr.impl.utils.core.name__GT_kebab_keyword;
var f = ((function (keyfn){
return (function phzr$impl$utils$core$js__GT_clj_STAR__$_thisfn(x__$1){
if(((!((x__$1 == null)))?(((false) || (x__$1.cljs$core$IEncodeClojure$))?true:(((!x__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,x__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IEncodeClojure,x__$1))){
return cljs.core._js__GT_clj(x__$1,null);
} else {
if(cljs.core.seq_QMARK_(x__$1)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(phzr$impl$utils$core$js__GT_clj_STAR__$_thisfn,x__$1));
} else {
if(cljs.core.coll_QMARK_(x__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(x__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(phzr$impl$utils$core$js__GT_clj_STAR__$_thisfn),x__$1);
} else {
if(cljs.core.array_QMARK_(x__$1)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (keyfn){
return (function (p1__26829_SHARP_,p2__26830_SHARP_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(p1__26829_SHARP_,phzr$impl$utils$core$js__GT_clj_STAR__$_thisfn(p2__26830_SHARP_));
});})(keyfn))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),x__$1));
} else {
if((cljs.core.type(x__$1) === Object)){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (keyfn){
return (function (r,k){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(r,(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(k) : keyfn.call(null,k)),phzr$impl$utils$core$js__GT_clj_STAR__$_thisfn((x__$1[k])));
});})(keyfn))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.js_keys(x__$1)));
} else {
return x__$1;

}
}
}
}
}
});})(keyfn))
;
return f(x);
});
phzr.impl.utils.core.clj__GT_phaser = (function phzr$impl$utils$core$clj__GT_phaser(x){
return cljs.core.clj__GT_js(x);
});
phzr.impl.utils.core.phaser__GT_clj = (function phzr$impl$utils$core$phaser__GT_clj(x){
return phzr.impl.utils.core.js__GT_clj_STAR_(x);
});
