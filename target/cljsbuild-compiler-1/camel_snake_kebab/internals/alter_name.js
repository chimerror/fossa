// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.alter_name');
goog.require('cljs.core');

/**
 * @interface
 */
camel_snake_kebab.internals.alter_name.AlterName = function(){};

/**
 * Alters the name of this with f.
 */
camel_snake_kebab.internals.alter_name.alter_name = (function camel_snake_kebab$internals$alter_name$alter_name(this$,f){
if((!((this$ == null))) && (!((this$.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2 == null)))){
return this$.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2(this$,f);
} else {
var x__20911__auto__ = (((this$ == null))?null:this$);
var m__20912__auto__ = (camel_snake_kebab.internals.alter_name.alter_name[goog.typeOf(x__20911__auto__)]);
if(!((m__20912__auto__ == null))){
return (m__20912__auto__.cljs$core$IFn$_invoke$arity$2 ? m__20912__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__20912__auto__.call(null,this$,f));
} else {
var m__20912__auto____$1 = (camel_snake_kebab.internals.alter_name.alter_name["_"]);
if(!((m__20912__auto____$1 == null))){
return (m__20912__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__20912__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,f) : m__20912__auto____$1.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("AlterName.alter-name",this$);
}
}
}
});

(camel_snake_kebab.internals.alter_name.AlterName["string"] = true);

(camel_snake_kebab.internals.alter_name.alter_name["string"] = (function (this$,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(this$) : f.call(null,this$));
}));

cljs.core.Keyword.prototype.camel_snake_kebab$internals$alter_name$AlterName$ = true;

cljs.core.Keyword.prototype.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2 = (function (this$,f){
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.namespace(this$__$1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Namespaced keywords are not supported",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input,this$__$1], null));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__26320 = cljs.core.name(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26320) : f.call(null,G__26320));
})());
}
});

cljs.core.Symbol.prototype.camel_snake_kebab$internals$alter_name$AlterName$ = true;

cljs.core.Symbol.prototype.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2 = (function (this$,f){
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.namespace(this$__$1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Namespaced symbols are not supported",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input,this$__$1], null));
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__26321 = cljs.core.name(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26321) : f.call(null,G__26321));
})());
}
});
