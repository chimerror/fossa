// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('camel_snake_kebab.internals.string_separator');
goog.require('cljs.core');

/**
 * @interface
 */
camel_snake_kebab.internals.string_separator.StringSeparator = function(){};

/**
 * : StringSeparator -> String -> NonEmptySeq[String]
 */
camel_snake_kebab.internals.string_separator.split = (function camel_snake_kebab$internals$string_separator$split(this$,s){
if((!((this$ == null))) && (!((this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 == null)))){
return this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2(this$,s);
} else {
var x__20911__auto__ = (((this$ == null))?null:this$);
var m__20912__auto__ = (camel_snake_kebab.internals.string_separator.split[goog.typeOf(x__20911__auto__)]);
if(!((m__20912__auto__ == null))){
return (m__20912__auto__.cljs$core$IFn$_invoke$arity$2 ? m__20912__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__20912__auto__.call(null,this$,s));
} else {
var m__20912__auto____$1 = (camel_snake_kebab.internals.string_separator.split["_"]);
if(!((m__20912__auto____$1 == null))){
return (m__20912__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__20912__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,s) : m__20912__auto____$1.call(null,this$,s));
} else {
throw cljs.core.missing_protocol("StringSeparator.split",this$);
}
}
}
});

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = true;

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.seq(s.split(this$__$1));
});

(camel_snake_kebab.internals.string_separator.StringSeparator["string"] = true);

(camel_snake_kebab.internals.string_separator.split["string"] = (function (this$,s){
return cljs.core.seq(s.split(this$));
}));
camel_snake_kebab.internals.string_separator.classify_char = (function camel_snake_kebab$internals$string_separator$classify_char(c){
var G__26225 = c;
switch (G__26225) {
case "0":
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
return cljs.core.cst$kw$number;

break;
case "-":
case "_":
case " ":
case "\t":
case "\n":
case "\u000B":
case "\f":
case "\r":
return cljs.core.cst$kw$whitespace;

break;
case "a":
case "b":
case "c":
case "d":
case "e":
case "f":
case "g":
case "h":
case "i":
case "j":
case "k":
case "l":
case "m":
case "n":
case "o":
case "p":
case "q":
case "r":
case "s":
case "t":
case "u":
case "v":
case "w":
case "x":
case "y":
case "z":
return cljs.core.cst$kw$lower;

break;
case "A":
case "B":
case "C":
case "D":
case "E":
case "F":
case "G":
case "H":
case "I":
case "J":
case "K":
case "L":
case "M":
case "N":
case "O":
case "P":
case "Q":
case "R":
case "S":
case "T":
case "U":
case "V":
case "W":
case "X":
case "Y":
case "Z":
return cljs.core.cst$kw$upper;

break;
default:
return cljs.core.cst$kw$other;

}
});
camel_snake_kebab.internals.string_separator.generic_split = (function camel_snake_kebab$internals$string_separator$generic_split(ss){
var cs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.internals.string_separator.classify_char,ss);
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var start = (0);
var current = (0);
while(true){
var next = (current + (1));
var result_PLUS_new = ((function (result,start,current,next,cs){
return (function (end){
if((end > start)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,ss.substring(start,end));
} else {
return result;
}
});})(result,start,current,next,cs))
;
if((current >= cljs.core.count(ss))){
var or__20248__auto__ = cljs.core.seq(cljs.core.persistent_BANG_(result_PLUS_new(current)));
if(or__20248__auto__){
return or__20248__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,current),cljs.core.cst$kw$whitespace)){
var G__26233 = result_PLUS_new(current);
var G__26234 = next;
var G__26235 = next;
result = G__26233;
start = G__26234;
current = G__26235;
continue;
} else {
if((function (){var vec__26230 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cs,current);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26230,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26230,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26230,(2),null);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$upper)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$upper))) || ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$number)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$number))) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$upper)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,cljs.core.cst$kw$upper)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.cst$kw$lower)));
})()){
var G__26236 = result_PLUS_new(next);
var G__26237 = next;
var G__26238 = next;
result = G__26236;
start = G__26237;
current = G__26238;
continue;
} else {
var G__26239 = result;
var G__26240 = start;
var G__26241 = next;
result = G__26239;
start = G__26240;
current = G__26241;
continue;

}
}
}
break;
}
});
camel_snake_kebab.internals.string_separator.generic_separator = (function (){
if(typeof camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {camel_snake_kebab.internals.string_separator.StringSeparator}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242 = (function (meta26243){
this.meta26243 = meta26243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26244,meta26243__$1){
var self__ = this;
var _26244__$1 = this;
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242(meta26243__$1));
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26244){
var self__ = this;
var _26244__$1 = this;
return self__.meta26243;
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = true;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return camel_snake_kebab.internals.string_separator.generic_split(s);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta26243], null);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242.cljs$lang$type = true;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242.cljs$lang$ctorStr = "camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator26242";

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242.cljs$lang$ctorPrWriter = (function (this__20854__auto__,writer__20855__auto__,opt__20856__auto__){
return cljs.core._write(writer__20855__auto__,"camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator26242");
});

camel_snake_kebab.internals.string_separator.__GT_t_camel_snake_kebab$internals$string_separator26242 = (function camel_snake_kebab$internals$string_separator$__GT_t_camel_snake_kebab$internals$string_separator26242(meta26243){
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242(meta26243));
});

}

return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator26242(cljs.core.PersistentArrayMap.EMPTY));
})()
;
