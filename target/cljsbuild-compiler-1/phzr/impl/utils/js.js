// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.impl.utils.js');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
goog.require('clojure.string');
goog.require('goog.array');
goog.require('goog.object');
phzr.impl.utils.js.js_type = (function phzr$impl$utils$js$js_type(o){
var ty = cljs.core.type(o);
var ty__$1 = (cljs.core.truth_((function (){var and__20236__auto__ = ty;
if(cljs.core.truth_(and__20236__auto__)){
return ty.cljs$lang$type;
} else {
return and__20236__auto__;
}
})())?ty.cljs$lang$ctorStr:goog.typeOf(o));
return ty__$1;
});
phzr.impl.utils.js.js_obj_QMARK_ = (function phzr$impl$utils$js$js_obj_QMARK_(o){
return (cljs.core.type(o) === Object);
});
phzr.impl.utils.js.obj_only = (function phzr$impl$utils$js$obj_only(o,method){
if(cljs.core.truth_(phzr.impl.utils.js.js_obj_QMARK_(o))){
return null;
} else {
throw (new TypeError([cljs.core.str(phzr.impl.utils.js.js_type(o)),cljs.core.str(" does not implement '"),cljs.core.str(cljs.core.name(method)),cljs.core.str("'")].join('')));
}
});
phzr.impl.utils.js.name_kebab_touchup = (function phzr$impl$utils$js$name_kebab_touchup(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(s,/web\-gl/,"webgl"),/p\-2js/,"p2-js"),/p\-2/,"p2"),/palette\-c\-64/,"palette-c64"),/box\-2\-d/,"box-2d");
});
phzr.impl.utils.js.name__GT_kebab = cljs.core.memoize((function (s){
return phzr.impl.utils.js.name_kebab_touchup(clojure.string.lower_case(camel_snake_kebab.core.__GT_kebab_case_string(s)));
}));
phzr.impl.utils.js.camel_name_touchup = (function phzr$impl$utils$js$camel_name_touchup(s){
return s;
});
phzr.impl.utils.js.kebab__GT_name = cljs.core.memoize((function (s){
return phzr.impl.utils.js.camel_name_touchup(camel_snake_kebab.core.__GT_camelCaseString(s));
}));
phzr.impl.utils.js.js_strkey = (function phzr$impl$utils$js$js_strkey(x){
if(typeof x === 'string'){
return (phzr.impl.utils.js.kebab__GT_name.cljs$core$IFn$_invoke$arity$1 ? phzr.impl.utils.js.kebab__GT_name.cljs$core$IFn$_invoke$arity$1(x) : phzr.impl.utils.js.kebab__GT_name.call(null,x));
} else {
if((x instanceof cljs.core.Keyword)){
var G__26646 = cljs.core.name(x);
return (phzr.impl.utils.js.kebab__GT_name.cljs$core$IFn$_invoke$arity$1 ? phzr.impl.utils.js.kebab__GT_name.cljs$core$IFn$_invoke$arity$1(G__26646) : phzr.impl.utils.js.kebab__GT_name.call(null,G__26646));
} else {
return [cljs.core.str(x)].join('');

}
}
});
phzr.impl.utils.js.js_lookup = (function phzr$impl$utils$js$js_lookup(var_args){
var args26647 = [];
var len__21323__auto___26650 = arguments.length;
var i__21324__auto___26651 = (0);
while(true){
if((i__21324__auto___26651 < len__21323__auto___26650)){
args26647.push((arguments[i__21324__auto___26651]));

var G__26652 = (i__21324__auto___26651 + (1));
i__21324__auto___26651 = G__26652;
continue;
} else {
}
break;
}

var G__26649 = args26647.length;
switch (G__26649) {
case 2:
return phzr.impl.utils.js.js_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.impl.utils.js.js_lookup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26647.length)].join('')));

}
});

phzr.impl.utils.js.js_lookup.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return (o[phzr.impl.utils.js.js_strkey(k)]);
});

phzr.impl.utils.js.js_lookup.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
var s = phzr.impl.utils.js.js_strkey(k);
var temp__4655__auto__ = (o[s]);
if(cljs.core.truth_(temp__4655__auto__)){
var res = temp__4655__auto__;
return res;
} else {
return not_found;
}
});

phzr.impl.utils.js.js_lookup.cljs$lang$maxFixedArity = 3;

phzr.impl.utils.js.js_assoc = (function phzr$impl$utils$js$js_assoc(var_args){
var args26654 = [];
var len__21323__auto___26661 = arguments.length;
var i__21324__auto___26662 = (0);
while(true){
if((i__21324__auto___26662 < len__21323__auto___26661)){
args26654.push((arguments[i__21324__auto___26662]));

var G__26663 = (i__21324__auto___26662 + (1));
i__21324__auto___26662 = G__26663;
continue;
} else {
}
break;
}

var G__26660 = args26654.length;
switch (G__26660) {
case 3:
return phzr.impl.utils.js.js_assoc.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__21342__auto__ = (new cljs.core.IndexedSeq(args26654.slice((3)),(0),null));
return phzr.impl.utils.js.js_assoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21342__auto__);

}
});

phzr.impl.utils.js.js_assoc.cljs$core$IFn$_invoke$arity$3 = (function (o,k,v){
(o[phzr.impl.utils.js.js_strkey(k)] = v);

return o;
});

phzr.impl.utils.js.js_assoc.cljs$core$IFn$_invoke$arity$variadic = (function (o,k,v,more){
while(true){
phzr.impl.utils.js.js_assoc.cljs$core$IFn$_invoke$arity$3(o,k,v);

if(cljs.core.truth_(more)){
var G__26665 = o;
var G__26666 = cljs.core.first(more);
var G__26667 = cljs.core.second(more);
var G__26668 = cljs.core.nnext(more);
o = G__26665;
k = G__26666;
v = G__26667;
more = G__26668;
continue;
} else {
return o;
}
break;
}
});

phzr.impl.utils.js.js_assoc.cljs$lang$applyTo = (function (seq26655){
var G__26656 = cljs.core.first(seq26655);
var seq26655__$1 = cljs.core.next(seq26655);
var G__26657 = cljs.core.first(seq26655__$1);
var seq26655__$2 = cljs.core.next(seq26655__$1);
var G__26658 = cljs.core.first(seq26655__$2);
var seq26655__$3 = cljs.core.next(seq26655__$2);
return phzr.impl.utils.js.js_assoc.cljs$core$IFn$_invoke$arity$variadic(G__26656,G__26657,G__26658,seq26655__$3);
});

phzr.impl.utils.js.js_assoc.cljs$lang$maxFixedArity = (3);

phzr.impl.utils.js.js_dissoc = (function phzr$impl$utils$js$js_dissoc(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26672 = arguments.length;
var i__21324__auto___26673 = (0);
while(true){
if((i__21324__auto___26673 < len__21323__auto___26672)){
args__21330__auto__.push((arguments[i__21324__auto___26673]));

var G__26674 = (i__21324__auto___26673 + (1));
i__21324__auto___26673 = G__26674;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((2) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((2)),(0),null)):null);
return phzr.impl.utils.js.js_dissoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21331__auto__);
});

phzr.impl.utils.js.js_dissoc.cljs$core$IFn$_invoke$arity$variadic = (function (o,k,more){
while(true){
delete o[phzr.impl.utils.js.js_strkey(k)];

if(cljs.core.truth_(more)){
var G__26675 = o;
var G__26676 = cljs.core.first(more);
var G__26677 = cljs.core.next(more);
o = G__26675;
k = G__26676;
more = G__26677;
continue;
} else {
return o;
}
break;
}
});

phzr.impl.utils.js.js_dissoc.cljs$lang$maxFixedArity = (2);

phzr.impl.utils.js.js_dissoc.cljs$lang$applyTo = (function (seq26669){
var G__26670 = cljs.core.first(seq26669);
var seq26669__$1 = cljs.core.next(seq26669);
var G__26671 = cljs.core.first(seq26669__$1);
var seq26669__$2 = cljs.core.next(seq26669__$1);
return phzr.impl.utils.js.js_dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26670,G__26671,seq26669__$2);
});

phzr.impl.utils.js.js_copy = (function phzr$impl$utils$js$js_copy(o){
var t = goog.typeOf(o);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"array")){
return goog.array.clone(o);
} else {
return goog.object.clone(o);

}
});
phzr.impl.utils.js.js_conj_object = (function phzr$impl$utils$js$js_conj_object(parent,p__26678){
var vec__26682 = p__26678;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26682,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26682,(1),null);
var o = goog.object.clone(parent);
return phzr.impl.utils.js.js_assoc.cljs$core$IFn$_invoke$arity$3(o,k,v);
});
