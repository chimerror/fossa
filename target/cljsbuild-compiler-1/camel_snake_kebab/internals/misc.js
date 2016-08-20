// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26311 = arguments.length;
var i__21324__auto___26312 = (0);
while(true){
if((i__21324__auto___26312 < len__21323__auto___26311)){
args__21330__auto__.push((arguments[i__21324__auto___26312]));

var G__26313 = (i__21324__auto___26312 + (1));
i__21324__auto___26312 = G__26313;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((4) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21331__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__26305){
var map__26306 = p__26305;
var map__26306__$1 = ((((!((map__26306 == null)))?((((map__26306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26306):map__26306);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26306__$1,cljs.core.cst$kw$separator,camel_snake_kebab.internals.string_separator.generic_separator);
var vec__26308 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__26309 = cljs.core.seq(vec__26308);
var first__26310 = cljs.core.first(seq__26309);
var seq__26309__$1 = cljs.core.next(seq__26309);
var first = first__26310;
var rest = seq__26309__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq26300){
var G__26301 = cljs.core.first(seq26300);
var seq26300__$1 = cljs.core.next(seq26300);
var G__26302 = cljs.core.first(seq26300__$1);
var seq26300__$2 = cljs.core.next(seq26300__$1);
var G__26303 = cljs.core.first(seq26300__$2);
var seq26300__$3 = cljs.core.next(seq26300__$2);
var G__26304 = cljs.core.first(seq26300__$3);
var seq26300__$4 = cljs.core.next(seq26300__$3);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__26301,G__26302,G__26303,G__26304,seq26300__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__20248__auto__ = (function (){var G__26317 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__26317) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__26317));
})();
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return clojure.string.capitalize(s);
}
});
