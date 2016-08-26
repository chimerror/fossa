// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26500 = arguments.length;
var i__21324__auto___26501 = (0);
while(true){
if((i__21324__auto___26501 < len__21323__auto___26500)){
args__21330__auto__.push((arguments[i__21324__auto___26501]));

var G__26502 = (i__21324__auto___26501 + (1));
i__21324__auto___26501 = G__26502;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((4) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21331__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.array_seq([rest], 0));
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq26495){
var G__26496 = cljs.core.first(seq26495);
var seq26495__$1 = cljs.core.next(seq26495);
var G__26497 = cljs.core.first(seq26495__$1);
var seq26495__$2 = cljs.core.next(seq26495__$1);
var G__26498 = cljs.core.first(seq26495__$2);
var seq26495__$3 = cljs.core.next(seq26495__$2);
var G__26499 = cljs.core.first(seq26495__$3);
var seq26495__$4 = cljs.core.next(seq26495__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__26496,G__26497,G__26498,G__26499,seq26495__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26511 = arguments.length;
var i__21324__auto___26512 = (0);
while(true){
if((i__21324__auto___26512 < len__21323__auto___26511)){
args__21330__auto__.push((arguments[i__21324__auto___26512]));

var G__26513 = (i__21324__auto___26512 + (1));
i__21324__auto___26512 = G__26513;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26462__auto__,rest__26463__auto__){
var convert_case__26464__auto__ = (function (p1__26461__26465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__26461__26465__auto__,cljs.core.array_seq([rest__26463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26462__auto__,convert_case__26464__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq26503){
var G__26504 = cljs.core.first(seq26503);
var seq26503__$1 = cljs.core.next(seq26503);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__26504,seq26503__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26514 = arguments.length;
var i__21324__auto___26515 = (0);
while(true){
if((i__21324__auto___26515 < len__21323__auto___26514)){
args__21330__auto__.push((arguments[i__21324__auto___26515]));

var G__26516 = (i__21324__auto___26515 + (1));
i__21324__auto___26515 = G__26516;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq26505){
var G__26506 = cljs.core.first(seq26505);
var seq26505__$1 = cljs.core.next(seq26505);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__26506,seq26505__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26517 = arguments.length;
var i__21324__auto___26518 = (0);
while(true){
if((i__21324__auto___26518 < len__21323__auto___26517)){
args__21330__auto__.push((arguments[i__21324__auto___26518]));

var G__26519 = (i__21324__auto___26518 + (1));
i__21324__auto___26518 = G__26519;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq26507){
var G__26508 = cljs.core.first(seq26507);
var seq26507__$1 = cljs.core.next(seq26507);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__26508,seq26507__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26520 = arguments.length;
var i__21324__auto___26521 = (0);
while(true){
if((i__21324__auto___26521 < len__21323__auto___26520)){
args__21330__auto__.push((arguments[i__21324__auto___26521]));

var G__26522 = (i__21324__auto___26521 + (1));
i__21324__auto___26521 = G__26522;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq26509){
var G__26510 = cljs.core.first(seq26509);
var seq26509__$1 = cljs.core.next(seq26509);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__26510,seq26509__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26531 = arguments.length;
var i__21324__auto___26532 = (0);
while(true){
if((i__21324__auto___26532 < len__21323__auto___26531)){
args__21330__auto__.push((arguments[i__21324__auto___26532]));

var G__26533 = (i__21324__auto___26532 + (1));
i__21324__auto___26532 = G__26533;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26462__auto__,rest__26463__auto__){
var convert_case__26464__auto__ = (function (p1__26461__26465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__26461__26465__auto__,cljs.core.array_seq([rest__26463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26462__auto__,convert_case__26464__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq26523){
var G__26524 = cljs.core.first(seq26523);
var seq26523__$1 = cljs.core.next(seq26523);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__26524,seq26523__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26534 = arguments.length;
var i__21324__auto___26535 = (0);
while(true){
if((i__21324__auto___26535 < len__21323__auto___26534)){
args__21330__auto__.push((arguments[i__21324__auto___26535]));

var G__26536 = (i__21324__auto___26535 + (1));
i__21324__auto___26535 = G__26536;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq26525){
var G__26526 = cljs.core.first(seq26525);
var seq26525__$1 = cljs.core.next(seq26525);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__26526,seq26525__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26537 = arguments.length;
var i__21324__auto___26538 = (0);
while(true){
if((i__21324__auto___26538 < len__21323__auto___26537)){
args__21330__auto__.push((arguments[i__21324__auto___26538]));

var G__26539 = (i__21324__auto___26538 + (1));
i__21324__auto___26538 = G__26539;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq26527){
var G__26528 = cljs.core.first(seq26527);
var seq26527__$1 = cljs.core.next(seq26527);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__26528,seq26527__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26540 = arguments.length;
var i__21324__auto___26541 = (0);
while(true){
if((i__21324__auto___26541 < len__21323__auto___26540)){
args__21330__auto__.push((arguments[i__21324__auto___26541]));

var G__26542 = (i__21324__auto___26541 + (1));
i__21324__auto___26541 = G__26542;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq26529){
var G__26530 = cljs.core.first(seq26529);
var seq26529__$1 = cljs.core.next(seq26529);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__26530,seq26529__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26551 = arguments.length;
var i__21324__auto___26552 = (0);
while(true){
if((i__21324__auto___26552 < len__21323__auto___26551)){
args__21330__auto__.push((arguments[i__21324__auto___26552]));

var G__26553 = (i__21324__auto___26552 + (1));
i__21324__auto___26552 = G__26553;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__26462__auto__,rest__26463__auto__){
var convert_case__26464__auto__ = (function (p1__26461__26465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__26461__26465__auto__,cljs.core.array_seq([rest__26463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26462__auto__,convert_case__26464__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq26543){
var G__26544 = cljs.core.first(seq26543);
var seq26543__$1 = cljs.core.next(seq26543);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__26544,seq26543__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26554 = arguments.length;
var i__21324__auto___26555 = (0);
while(true){
if((i__21324__auto___26555 < len__21323__auto___26554)){
args__21330__auto__.push((arguments[i__21324__auto___26555]));

var G__26556 = (i__21324__auto___26555 + (1));
i__21324__auto___26555 = G__26556;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq26545){
var G__26546 = cljs.core.first(seq26545);
var seq26545__$1 = cljs.core.next(seq26545);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__26546,seq26545__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26557 = arguments.length;
var i__21324__auto___26558 = (0);
while(true){
if((i__21324__auto___26558 < len__21323__auto___26557)){
args__21330__auto__.push((arguments[i__21324__auto___26558]));

var G__26559 = (i__21324__auto___26558 + (1));
i__21324__auto___26558 = G__26559;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq26547){
var G__26548 = cljs.core.first(seq26547);
var seq26547__$1 = cljs.core.next(seq26547);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__26548,seq26547__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26560 = arguments.length;
var i__21324__auto___26561 = (0);
while(true){
if((i__21324__auto___26561 < len__21323__auto___26560)){
args__21330__auto__.push((arguments[i__21324__auto___26561]));

var G__26562 = (i__21324__auto___26561 + (1));
i__21324__auto___26561 = G__26562;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq26549){
var G__26550 = cljs.core.first(seq26549);
var seq26549__$1 = cljs.core.next(seq26549);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__26550,seq26549__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26571 = arguments.length;
var i__21324__auto___26572 = (0);
while(true){
if((i__21324__auto___26572 < len__21323__auto___26571)){
args__21330__auto__.push((arguments[i__21324__auto___26572]));

var G__26573 = (i__21324__auto___26572 + (1));
i__21324__auto___26572 = G__26573;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__26462__auto__,rest__26463__auto__){
var convert_case__26464__auto__ = (function (p1__26461__26465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__26461__26465__auto__,cljs.core.array_seq([rest__26463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26462__auto__,convert_case__26464__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq26563){
var G__26564 = cljs.core.first(seq26563);
var seq26563__$1 = cljs.core.next(seq26563);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__26564,seq26563__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26574 = arguments.length;
var i__21324__auto___26575 = (0);
while(true){
if((i__21324__auto___26575 < len__21323__auto___26574)){
args__21330__auto__.push((arguments[i__21324__auto___26575]));

var G__26576 = (i__21324__auto___26575 + (1));
i__21324__auto___26575 = G__26576;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq26565){
var G__26566 = cljs.core.first(seq26565);
var seq26565__$1 = cljs.core.next(seq26565);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__26566,seq26565__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26577 = arguments.length;
var i__21324__auto___26578 = (0);
while(true){
if((i__21324__auto___26578 < len__21323__auto___26577)){
args__21330__auto__.push((arguments[i__21324__auto___26578]));

var G__26579 = (i__21324__auto___26578 + (1));
i__21324__auto___26578 = G__26579;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq26567){
var G__26568 = cljs.core.first(seq26567);
var seq26567__$1 = cljs.core.next(seq26567);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__26568,seq26567__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26580 = arguments.length;
var i__21324__auto___26581 = (0);
while(true){
if((i__21324__auto___26581 < len__21323__auto___26580)){
args__21330__auto__.push((arguments[i__21324__auto___26581]));

var G__26582 = (i__21324__auto___26581 + (1));
i__21324__auto___26581 = G__26582;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq26569){
var G__26570 = cljs.core.first(seq26569);
var seq26569__$1 = cljs.core.next(seq26569);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__26570,seq26569__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26591 = arguments.length;
var i__21324__auto___26592 = (0);
while(true){
if((i__21324__auto___26592 < len__21323__auto___26591)){
args__21330__auto__.push((arguments[i__21324__auto___26592]));

var G__26593 = (i__21324__auto___26592 + (1));
i__21324__auto___26592 = G__26593;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26462__auto__,rest__26463__auto__){
var convert_case__26464__auto__ = (function (p1__26461__26465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__26461__26465__auto__,cljs.core.array_seq([rest__26463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26462__auto__,convert_case__26464__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq26583){
var G__26584 = cljs.core.first(seq26583);
var seq26583__$1 = cljs.core.next(seq26583);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__26584,seq26583__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26594 = arguments.length;
var i__21324__auto___26595 = (0);
while(true){
if((i__21324__auto___26595 < len__21323__auto___26594)){
args__21330__auto__.push((arguments[i__21324__auto___26595]));

var G__26596 = (i__21324__auto___26595 + (1));
i__21324__auto___26595 = G__26596;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq26585){
var G__26586 = cljs.core.first(seq26585);
var seq26585__$1 = cljs.core.next(seq26585);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__26586,seq26585__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26597 = arguments.length;
var i__21324__auto___26598 = (0);
while(true){
if((i__21324__auto___26598 < len__21323__auto___26597)){
args__21330__auto__.push((arguments[i__21324__auto___26598]));

var G__26599 = (i__21324__auto___26598 + (1));
i__21324__auto___26598 = G__26599;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq26587){
var G__26588 = cljs.core.first(seq26587);
var seq26587__$1 = cljs.core.next(seq26587);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__26588,seq26587__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26600 = arguments.length;
var i__21324__auto___26601 = (0);
while(true){
if((i__21324__auto___26601 < len__21323__auto___26600)){
args__21330__auto__.push((arguments[i__21324__auto___26601]));

var G__26602 = (i__21324__auto___26601 + (1));
i__21324__auto___26601 = G__26602;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq26589){
var G__26590 = cljs.core.first(seq26589);
var seq26589__$1 = cljs.core.next(seq26589);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__26590,seq26589__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26611 = arguments.length;
var i__21324__auto___26612 = (0);
while(true){
if((i__21324__auto___26612 < len__21323__auto___26611)){
args__21330__auto__.push((arguments[i__21324__auto___26612]));

var G__26613 = (i__21324__auto___26612 + (1));
i__21324__auto___26612 = G__26613;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26462__auto__,rest__26463__auto__){
var convert_case__26464__auto__ = (function (p1__26461__26465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__26461__26465__auto__,cljs.core.array_seq([rest__26463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26462__auto__,convert_case__26464__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq26603){
var G__26604 = cljs.core.first(seq26603);
var seq26603__$1 = cljs.core.next(seq26603);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__26604,seq26603__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26614 = arguments.length;
var i__21324__auto___26615 = (0);
while(true){
if((i__21324__auto___26615 < len__21323__auto___26614)){
args__21330__auto__.push((arguments[i__21324__auto___26615]));

var G__26616 = (i__21324__auto___26615 + (1));
i__21324__auto___26615 = G__26616;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq26605){
var G__26606 = cljs.core.first(seq26605);
var seq26605__$1 = cljs.core.next(seq26605);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__26606,seq26605__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26617 = arguments.length;
var i__21324__auto___26618 = (0);
while(true){
if((i__21324__auto___26618 < len__21323__auto___26617)){
args__21330__auto__.push((arguments[i__21324__auto___26618]));

var G__26619 = (i__21324__auto___26618 + (1));
i__21324__auto___26618 = G__26619;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq26607){
var G__26608 = cljs.core.first(seq26607);
var seq26607__$1 = cljs.core.next(seq26607);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__26608,seq26607__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26620 = arguments.length;
var i__21324__auto___26621 = (0);
while(true){
if((i__21324__auto___26621 < len__21323__auto___26620)){
args__21330__auto__.push((arguments[i__21324__auto___26621]));

var G__26622 = (i__21324__auto___26621 + (1));
i__21324__auto___26621 = G__26622;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq26609){
var G__26610 = cljs.core.first(seq26609);
var seq26609__$1 = cljs.core.next(seq26609);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__26610,seq26609__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26631 = arguments.length;
var i__21324__auto___26632 = (0);
while(true){
if((i__21324__auto___26632 < len__21323__auto___26631)){
args__21330__auto__.push((arguments[i__21324__auto___26632]));

var G__26633 = (i__21324__auto___26632 + (1));
i__21324__auto___26632 = G__26633;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__26462__auto__,rest__26463__auto__){
var convert_case__26464__auto__ = (function (p1__26461__26465__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__26461__26465__auto__,cljs.core.array_seq([rest__26463__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__26462__auto__,convert_case__26464__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq26623){
var G__26624 = cljs.core.first(seq26623);
var seq26623__$1 = cljs.core.next(seq26623);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__26624,seq26623__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26634 = arguments.length;
var i__21324__auto___26635 = (0);
while(true){
if((i__21324__auto___26635 < len__21323__auto___26634)){
args__21330__auto__.push((arguments[i__21324__auto___26635]));

var G__26636 = (i__21324__auto___26635 + (1));
i__21324__auto___26635 = G__26636;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq26625){
var G__26626 = cljs.core.first(seq26625);
var seq26625__$1 = cljs.core.next(seq26625);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__26626,seq26625__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26637 = arguments.length;
var i__21324__auto___26638 = (0);
while(true){
if((i__21324__auto___26638 < len__21323__auto___26637)){
args__21330__auto__.push((arguments[i__21324__auto___26638]));

var G__26639 = (i__21324__auto___26638 + (1));
i__21324__auto___26638 = G__26639;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq26627){
var G__26628 = cljs.core.first(seq26627);
var seq26627__$1 = cljs.core.next(seq26627);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__26628,seq26627__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26640 = arguments.length;
var i__21324__auto___26641 = (0);
while(true){
if((i__21324__auto___26641 < len__21323__auto___26640)){
args__21330__auto__.push((arguments[i__21324__auto___26641]));

var G__26642 = (i__21324__auto___26641 + (1));
i__21324__auto___26641 = G__26642;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__26467__auto__,rest__26468__auto__){
if(!((s__26467__auto__ == null))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__26467__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__26467__auto__),cljs.core.array_seq([rest__26468__auto__], 0)));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq26629){
var G__26630 = cljs.core.first(seq26629);
var seq26629__$1 = cljs.core.next(seq26629);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__26630,seq26629__$1);
});

