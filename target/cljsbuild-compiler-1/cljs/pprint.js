// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__21330__auto__ = [];
var len__21323__auto___28495 = arguments.length;
var i__21324__auto___28496 = (0);
while(true){
if((i__21324__auto___28496 < len__21323__auto___28495)){
args__21330__auto__.push((arguments[i__21324__auto___28496]));

var G__28497 = (i__21324__auto___28496 + (1));
i__21324__auto___28496 = G__28497;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((0) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__21331__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq28494){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28494));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__21330__auto__ = [];
var len__21323__auto___28499 = arguments.length;
var i__21324__auto___28500 = (0);
while(true){
if((i__21324__auto___28500 < len__21323__auto___28499)){
args__21330__auto__.push((arguments[i__21324__auto___28500]));

var G__28501 = (i__21324__auto___28500 + (1));
i__21324__auto___28500 = G__28501;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((0) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__21331__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq28498){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28498));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__28505 = cljs.core._EQ_;
var expr__28506 = c;
if(cljs.core.truth_((pred__28505.cljs$core$IFn$_invoke$arity$2 ? pred__28505.cljs$core$IFn$_invoke$arity$2("\b",expr__28506) : pred__28505.call(null,"\b",expr__28506)))){
return "\\backspace";
} else {
if(cljs.core.truth_((pred__28505.cljs$core$IFn$_invoke$arity$2 ? pred__28505.cljs$core$IFn$_invoke$arity$2("\t",expr__28506) : pred__28505.call(null,"\t",expr__28506)))){
return "\\tab";
} else {
if(cljs.core.truth_((pred__28505.cljs$core$IFn$_invoke$arity$2 ? pred__28505.cljs$core$IFn$_invoke$arity$2("\n",expr__28506) : pred__28505.call(null,"\n",expr__28506)))){
return "\\newline";
} else {
if(cljs.core.truth_((pred__28505.cljs$core$IFn$_invoke$arity$2 ? pred__28505.cljs$core$IFn$_invoke$arity$2("\f",expr__28506) : pred__28505.call(null,"\f",expr__28506)))){
return "\\formfeed";
} else {
if(cljs.core.truth_((pred__28505.cljs$core$IFn$_invoke$arity$2 ? pred__28505.cljs$core$IFn$_invoke$arity$2("\r",expr__28506) : pred__28505.call(null,"\r",expr__28506)))){
return "\\return";
} else {
if(cljs.core.truth_((pred__28505.cljs$core$IFn$_invoke$arity$2 ? pred__28505.cljs$core$IFn$_invoke$arity$2("\"",expr__28506) : pred__28505.call(null,"\"",expr__28506)))){
return "\\\"";
} else {
if(cljs.core.truth_((pred__28505.cljs$core$IFn$_invoke$arity$2 ? pred__28505.cljs$core$IFn$_invoke$arity$2("\\",expr__28506) : pred__28505.call(null,"\\",expr__28506)))){
return "\\\\";
} else {
return [cljs.core.str("\\"),cljs.core.str(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__21330__auto__ = [];
var len__21323__auto___28509 = arguments.length;
var i__21324__auto___28510 = (0);
while(true){
if((i__21324__auto___28510 < len__21323__auto___28509)){
args__21330__auto__.push((arguments[i__21324__auto___28510]));

var G__28511 = (i__21324__auto___28510 + (1));
i__21324__auto___28510 = G__28511;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((0) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__21331__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq28508){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28508));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__21330__auto__ = [];
var len__21323__auto___28513 = arguments.length;
var i__21324__auto___28514 = (0);
while(true){
if((i__21324__auto___28514 < len__21323__auto___28513)){
args__21330__auto__.push((arguments[i__21324__auto___28514]));

var G__28515 = (i__21324__auto___28514 + (1));
i__21324__auto___28514 = G__28515;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((0) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__21331__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq28512){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28512));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__28519 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28519,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28519,(1),null);
var G__28522 = new_context;
var G__28523 = remainder;
var G__28524 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__28522;
lis__$1 = G__28523;
acc = G__28524;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__28528 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28528,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28528,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__28531 = new_context;
var G__28532 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__28531;
acc = G__28532;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__28536 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28536,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28536,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28536,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__28539 = new_context;
var G__28540 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__28539;
acc = G__28540;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21028__auto__ = (function cljs$pprint$unzip_map_$_iter__28601(s__28602){
return (new cljs.core.LazySeq(null,(function (){
var s__28602__$1 = s__28602;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28602__$1);
if(temp__4657__auto__){
var s__28602__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28602__$2)){
var c__21026__auto__ = cljs.core.chunk_first(s__28602__$2);
var size__21027__auto__ = cljs.core.count(c__21026__auto__);
var b__28604 = cljs.core.chunk_buffer(size__21027__auto__);
if((function (){var i__28603 = (0);
while(true){
if((i__28603 < size__21027__auto__)){
var vec__28619 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21026__auto__,i__28603);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28619,(0),null);
var vec__28622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28619,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28622,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28622,(1),null);
cljs.core.chunk_append(b__28604,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__28661 = (i__28603 + (1));
i__28603 = G__28661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28604),cljs$pprint$unzip_map_$_iter__28601(cljs.core.chunk_rest(s__28602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28604),null);
}
} else {
var vec__28625 = cljs.core.first(s__28602__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28625,(0),null);
var vec__28628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28625,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28628,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28628,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__28601(cljs.core.rest(s__28602__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21028__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21028__auto__ = (function cljs$pprint$unzip_map_$_iter__28631(s__28632){
return (new cljs.core.LazySeq(null,(function (){
var s__28632__$1 = s__28632;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28632__$1);
if(temp__4657__auto__){
var s__28632__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28632__$2)){
var c__21026__auto__ = cljs.core.chunk_first(s__28632__$2);
var size__21027__auto__ = cljs.core.count(c__21026__auto__);
var b__28634 = cljs.core.chunk_buffer(size__21027__auto__);
if((function (){var i__28633 = (0);
while(true){
if((i__28633 < size__21027__auto__)){
var vec__28649 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21026__auto__,i__28633);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(0),null);
var vec__28652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28649,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28652,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28652,(1),null);
cljs.core.chunk_append(b__28634,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__28662 = (i__28633 + (1));
i__28633 = G__28662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28634),cljs$pprint$unzip_map_$_iter__28631(cljs.core.chunk_rest(s__28632__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28634),null);
}
} else {
var vec__28655 = cljs.core.first(s__28632__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28655,(0),null);
var vec__28658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28655,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28658,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28658,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__28631(cljs.core.rest(s__28632__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21028__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21028__auto__ = (function cljs$pprint$tuple_map_$_iter__28681(s__28682){
return (new cljs.core.LazySeq(null,(function (){
var s__28682__$1 = s__28682;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__28682__$1);
if(temp__4657__auto__){
var s__28682__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28682__$2)){
var c__21026__auto__ = cljs.core.chunk_first(s__28682__$2);
var size__21027__auto__ = cljs.core.count(c__21026__auto__);
var b__28684 = cljs.core.chunk_buffer(size__21027__auto__);
if((function (){var i__28683 = (0);
while(true){
if((i__28683 < size__21027__auto__)){
var vec__28693 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21026__auto__,i__28683);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28693,(1),null);
cljs.core.chunk_append(b__28684,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__28699 = (i__28683 + (1));
i__28683 = G__28699;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28684),cljs$pprint$tuple_map_$_iter__28681(cljs.core.chunk_rest(s__28682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28684),null);
}
} else {
var vec__28696 = cljs.core.first(s__28682__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28696,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__28681(cljs.core.rest(s__28682__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21028__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__28700 = (n - (1));
n = G__28700;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__28701 = (n + (1));
n = G__28701;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.fromArray([val], true));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__28705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__28705) : test.call(null,G__28705));
})()))){
return pos;
} else {
var G__28706 = (pos + (1));
pos = G__28706;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__20911__auto__ = (((pp == null))?null:pp);
var m__20912__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__20911__auto__)]);
if(!((m__20912__auto__ == null))){
return (m__20912__auto__.cljs$core$IFn$_invoke$arity$1 ? m__20912__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__20912__auto__.call(null,pp));
} else {
var m__20912__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__20912__auto____$1 == null))){
return (m__20912__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__20912__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__20912__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__28711 = (function (){var G__28712 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28712) : cljs.core.deref.call(null,G__28712));
})();
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__28711) : sym.call(null,G__28711));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var args28714 = [];
var len__21323__auto___28724 = arguments.length;
var i__21324__auto___28725 = (0);
while(true){
if((i__21324__auto___28725 < len__21323__auto___28724)){
args28714.push((arguments[i__21324__auto___28725]));

var G__28726 = (i__21324__auto___28725 + (1));
i__21324__auto___28725 = G__28726;
continue;
} else {
}
break;
}

var G__28716 = args28714.length;
switch (G__28716) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28714.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = (function (){var G__28717 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28717) : cljs.core.atom.call(null,G__28717));
})();
if(typeof cljs.pprint.t_cljs$pprint28718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28718 = (function (writer,max_columns,fields,meta28719){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta28719 = meta28719;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint28718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_28720,meta28719__$1){
var self__ = this;
var _28720__$1 = this;
return (new cljs.pprint.t_cljs$pprint28718(self__.writer,self__.max_columns,self__.fields,meta28719__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint28718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_28720){
var self__ = this;
var _28720__$1 = this;
return self__.meta28719;
});})(fields))
;

cljs.pprint.t_cljs$pprint28718.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint28718.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint28718.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28721 = cljs.core._EQ_;
var expr__28722 = cljs.core.type(x);
if(cljs.core.truth_((pred__28721.cljs$core$IFn$_invoke$arity$2 ? pred__28721.cljs$core$IFn$_invoke$arity$2(String,expr__28722) : pred__28721.call(null,String,expr__28722)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__28721,expr__28722,this$__$1,fields){
return (function (p1__28713_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__28713_SHARP_,"\n");
});})(s,nl,pred__28721,expr__28722,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__28721.cljs$core$IFn$_invoke$arity$2 ? pred__28721.cljs$core$IFn$_invoke$arity$2(Number,expr__28722) : pred__28721.call(null,Number,expr__28722)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28722)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint28718.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta28719], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint28718.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint28718.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28718";

cljs.pprint.t_cljs$pprint28718.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__20854__auto__,writer__20855__auto__,opt__20856__auto__){
return cljs.core._write(writer__20855__auto__,"cljs.pprint/t_cljs$pprint28718");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint28718 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint28718(writer__$1,max_columns__$1,fields__$1,meta28719){
return (new cljs.pprint.t_cljs$pprint28718(writer__$1,max_columns__$1,fields__$1,meta28719));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint28718(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


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
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k28729,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__28731 = (((k28729 instanceof cljs.core.Keyword))?k28729.fqn:null);
switch (G__28731) {
case "suffix":
return self__.suffix;

break;
case "indent":
return self__.indent;

break;
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "done-nl":
return self__.done_nl;

break;
case "start-col":
return self__.start_col;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28729,else__20873__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#cljs.pprint.logical-block{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$ = true;

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28728){
var self__ = this;
var G__28728__$1 = this;
return (new cljs.core.RecordIter((0),G__28728__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
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

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
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

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__28728){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__28732 = cljs.core.keyword_identical_QMARK_;
var expr__28733 = k__20878__auto__;
if(cljs.core.truth_((pred__28732.cljs$core$IFn$_invoke$arity$2 ? pred__28732.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$parent,expr__28733) : pred__28732.call(null,cljs.core.cst$kw$parent,expr__28733)))){
return (new cljs.pprint.logical_block(G__28728,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28732.cljs$core$IFn$_invoke$arity$2 ? pred__28732.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$section,expr__28733) : pred__28732.call(null,cljs.core.cst$kw$section,expr__28733)))){
return (new cljs.pprint.logical_block(self__.parent,G__28728,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28732.cljs$core$IFn$_invoke$arity$2 ? pred__28732.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_col,expr__28733) : pred__28732.call(null,cljs.core.cst$kw$start_DASH_col,expr__28733)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__28728,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28732.cljs$core$IFn$_invoke$arity$2 ? pred__28732.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indent,expr__28733) : pred__28732.call(null,cljs.core.cst$kw$indent,expr__28733)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__28728,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28732.cljs$core$IFn$_invoke$arity$2 ? pred__28732.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$done_DASH_nl,expr__28733) : pred__28732.call(null,cljs.core.cst$kw$done_DASH_nl,expr__28733)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__28728,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28732.cljs$core$IFn$_invoke$arity$2 ? pred__28732.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$intra_DASH_block_DASH_nl,expr__28733) : pred__28732.call(null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,expr__28733)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__28728,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28732.cljs$core$IFn$_invoke$arity$2 ? pred__28732.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix,expr__28733) : pred__28732.call(null,cljs.core.cst$kw$prefix,expr__28733)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__28728,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28732.cljs$core$IFn$_invoke$arity$2 ? pred__28732.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$per_DASH_line_DASH_prefix,expr__28733) : pred__28732.call(null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,expr__28733)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__28728,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28732.cljs$core$IFn$_invoke$arity$2 ? pred__28732.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$suffix,expr__28733) : pred__28732.call(null,cljs.core.cst$kw$suffix,expr__28733)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__28728,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28732.cljs$core$IFn$_invoke$arity$2 ? pred__28732.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$logical_DASH_block_DASH_callback,expr__28733) : pred__28732.call(null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,expr__28733)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__28728,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__28728),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__28728){
var self__ = this;
var this__20869__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__28728,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__28730){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__28730),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__28730),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__28730),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__28730),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__28730),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__28730),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__28730),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__28730),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__28730),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__28730),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28730,cljs.core.cst$kw$parent,cljs.core.array_seq([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0)),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__28736 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__28736;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
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
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k28738,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__28740 = (((k28738 instanceof cljs.core.Keyword))?k28738.fqn:null);
switch (G__28740) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28738,else__20873__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$ = true;

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28737){
var self__ = this;
var G__28737__$1 = this;
return (new cljs.core.RecordIter((0),G__28737__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
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

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
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

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$data,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__28737){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__28741 = cljs.core.keyword_identical_QMARK_;
var expr__28742 = k__20878__auto__;
if(cljs.core.truth_((pred__28741.cljs$core$IFn$_invoke$arity$2 ? pred__28741.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag,expr__28742) : pred__28741.call(null,cljs.core.cst$kw$type_DASH_tag,expr__28742)))){
return (new cljs.pprint.buffer_blob(G__28737,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28741.cljs$core$IFn$_invoke$arity$2 ? pred__28741.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$data,expr__28742) : pred__28741.call(null,cljs.core.cst$kw$data,expr__28742)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__28737,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28741.cljs$core$IFn$_invoke$arity$2 ? pred__28741.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$trailing_DASH_white_DASH_space,expr__28742) : pred__28741.call(null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,expr__28742)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__28737,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28741.cljs$core$IFn$_invoke$arity$2 ? pred__28741.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_pos,expr__28742) : pred__28741.call(null,cljs.core.cst$kw$start_DASH_pos,expr__28742)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__28737,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28741.cljs$core$IFn$_invoke$arity$2 ? pred__28741.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end_DASH_pos,expr__28742) : pred__28741.call(null,cljs.core.cst$kw$end_DASH_pos,expr__28742)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__28737,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__28737),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__28737){
var self__ = this;
var this__20869__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__28737,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__28739){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__28739),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__28739),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__28739),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__28739),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__28739),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28739,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__28429__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__28429__auto__),cljs.core.cst$kw$buffer_DASH_blob);
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
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k28746,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__28748 = (((k28746 instanceof cljs.core.Keyword))?k28746.fqn:null);
switch (G__28748) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28746,else__20873__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#cljs.pprint.nl-t{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28745){
var self__ = this;
var G__28745__$1 = this;
return (new cljs.core.RecordIter((0),G__28745__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
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

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
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

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__28745){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__28749 = cljs.core.keyword_identical_QMARK_;
var expr__28750 = k__20878__auto__;
if(cljs.core.truth_((pred__28749.cljs$core$IFn$_invoke$arity$2 ? pred__28749.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag,expr__28750) : pred__28749.call(null,cljs.core.cst$kw$type_DASH_tag,expr__28750)))){
return (new cljs.pprint.nl_t(G__28745,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28749.cljs$core$IFn$_invoke$arity$2 ? pred__28749.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,expr__28750) : pred__28749.call(null,cljs.core.cst$kw$type,expr__28750)))){
return (new cljs.pprint.nl_t(self__.type_tag,G__28745,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28749.cljs$core$IFn$_invoke$arity$2 ? pred__28749.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$logical_DASH_block,expr__28750) : pred__28749.call(null,cljs.core.cst$kw$logical_DASH_block,expr__28750)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__28745,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28749.cljs$core$IFn$_invoke$arity$2 ? pred__28749.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_pos,expr__28750) : pred__28749.call(null,cljs.core.cst$kw$start_DASH_pos,expr__28750)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__28745,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28749.cljs$core$IFn$_invoke$arity$2 ? pred__28749.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end_DASH_pos,expr__28750) : pred__28749.call(null,cljs.core.cst$kw$end_DASH_pos,expr__28750)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__28745,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__28745),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__28745){
var self__ = this;
var this__20869__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__28745,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__28747){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__28747),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__28747),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__28747),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__28747),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__28747),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28747,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__28429__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__28429__auto__),cljs.core.cst$kw$nl_DASH_t);
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
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k28754,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__28756 = (((k28754 instanceof cljs.core.Keyword))?k28754.fqn:null);
switch (G__28756) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28754,else__20873__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28753){
var self__ = this;
var G__28753__$1 = this;
return (new cljs.core.RecordIter((0),G__28753__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
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

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
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

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__28753){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__28757 = cljs.core.keyword_identical_QMARK_;
var expr__28758 = k__20878__auto__;
if(cljs.core.truth_((pred__28757.cljs$core$IFn$_invoke$arity$2 ? pred__28757.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag,expr__28758) : pred__28757.call(null,cljs.core.cst$kw$type_DASH_tag,expr__28758)))){
return (new cljs.pprint.start_block_t(G__28753,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28757.cljs$core$IFn$_invoke$arity$2 ? pred__28757.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$logical_DASH_block,expr__28758) : pred__28757.call(null,cljs.core.cst$kw$logical_DASH_block,expr__28758)))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__28753,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28757.cljs$core$IFn$_invoke$arity$2 ? pred__28757.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_pos,expr__28758) : pred__28757.call(null,cljs.core.cst$kw$start_DASH_pos,expr__28758)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__28753,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28757.cljs$core$IFn$_invoke$arity$2 ? pred__28757.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end_DASH_pos,expr__28758) : pred__28757.call(null,cljs.core.cst$kw$end_DASH_pos,expr__28758)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__28753,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__28753),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__28753){
var self__ = this;
var this__20869__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__28753,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__28755){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__28755),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__28755),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__28755),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__28755),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28755,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__28429__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__28429__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
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
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k28762,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__28764 = (((k28762 instanceof cljs.core.Keyword))?k28762.fqn:null);
switch (G__28764) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28762,else__20873__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28761){
var self__ = this;
var G__28761__$1 = this;
return (new cljs.core.RecordIter((0),G__28761__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
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

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
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

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__28761){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__28765 = cljs.core.keyword_identical_QMARK_;
var expr__28766 = k__20878__auto__;
if(cljs.core.truth_((pred__28765.cljs$core$IFn$_invoke$arity$2 ? pred__28765.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag,expr__28766) : pred__28765.call(null,cljs.core.cst$kw$type_DASH_tag,expr__28766)))){
return (new cljs.pprint.end_block_t(G__28761,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28765.cljs$core$IFn$_invoke$arity$2 ? pred__28765.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$logical_DASH_block,expr__28766) : pred__28765.call(null,cljs.core.cst$kw$logical_DASH_block,expr__28766)))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__28761,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28765.cljs$core$IFn$_invoke$arity$2 ? pred__28765.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_pos,expr__28766) : pred__28765.call(null,cljs.core.cst$kw$start_DASH_pos,expr__28766)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__28761,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28765.cljs$core$IFn$_invoke$arity$2 ? pred__28765.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end_DASH_pos,expr__28766) : pred__28765.call(null,cljs.core.cst$kw$end_DASH_pos,expr__28766)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__28761,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__28761),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__28761){
var self__ = this;
var this__20869__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__28761,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__28763){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__28763),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__28763),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__28763),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__28763),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28763,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__28429__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__28429__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
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
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k28770,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__28772 = (((k28770 instanceof cljs.core.Keyword))?k28770.fqn:null);
switch (G__28772) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28770,else__20873__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#cljs.pprint.indent-t{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$ = true;

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28769){
var self__ = this;
var G__28769__$1 = this;
return (new cljs.core.RecordIter((0),G__28769__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
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

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
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

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$end_DASH_pos,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$start_DASH_pos,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__28769){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__28773 = cljs.core.keyword_identical_QMARK_;
var expr__28774 = k__20878__auto__;
if(cljs.core.truth_((pred__28773.cljs$core$IFn$_invoke$arity$2 ? pred__28773.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag,expr__28774) : pred__28773.call(null,cljs.core.cst$kw$type_DASH_tag,expr__28774)))){
return (new cljs.pprint.indent_t(G__28769,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28773.cljs$core$IFn$_invoke$arity$2 ? pred__28773.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$logical_DASH_block,expr__28774) : pred__28773.call(null,cljs.core.cst$kw$logical_DASH_block,expr__28774)))){
return (new cljs.pprint.indent_t(self__.type_tag,G__28769,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28773.cljs$core$IFn$_invoke$arity$2 ? pred__28773.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$relative_DASH_to,expr__28774) : pred__28773.call(null,cljs.core.cst$kw$relative_DASH_to,expr__28774)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__28769,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28773.cljs$core$IFn$_invoke$arity$2 ? pred__28773.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$offset,expr__28774) : pred__28773.call(null,cljs.core.cst$kw$offset,expr__28774)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__28769,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28773.cljs$core$IFn$_invoke$arity$2 ? pred__28773.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start_DASH_pos,expr__28774) : pred__28773.call(null,cljs.core.cst$kw$start_DASH_pos,expr__28774)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__28769,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28773.cljs$core$IFn$_invoke$arity$2 ? pred__28773.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end_DASH_pos,expr__28774) : pred__28773.call(null,cljs.core.cst$kw$end_DASH_pos,expr__28774)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__28769,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__28769),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__28769){
var self__ = this;
var this__20869__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__28769,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__28771){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__28771),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__28771),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__28771),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__28771),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__28771),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__28771),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28771,cljs.core.cst$kw$type_DASH_tag,cljs.core.array_seq([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0)),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__28429__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__28429__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__21173__auto__ = (function (){var G__28779 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28779) : cljs.core.atom.call(null,G__28779));
})();
var prefer_table__21174__auto__ = (function (){var G__28780 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28780) : cljs.core.atom.call(null,G__28780));
})();
var method_cache__21175__auto__ = (function (){var G__28781 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28781) : cljs.core.atom.call(null,G__28781));
})();
var cached_hierarchy__21176__auto__ = (function (){var G__28782 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28782) : cljs.core.atom.call(null,G__28782));
})();
var hierarchy__21177__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__21173__auto__,prefer_table__21174__auto__,method_cache__21175__auto__,cached_hierarchy__21176__auto__,hierarchy__21177__auto__){
return (function (p1__28778_SHARP_,p2__28777_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__28777_SHARP_);
});})(method_table__21173__auto__,prefer_table__21174__auto__,method_cache__21175__auto__,cached_hierarchy__21176__auto__,hierarchy__21177__auto__))
,cljs.core.cst$kw$default,hierarchy__21177__auto__,method_table__21173__auto__,prefer_table__21174__auto__,method_cache__21175__auto__,cached_hierarchy__21176__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__4657__auto___28790 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__28783 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28783) : cljs.core.deref.call(null,G__28783));
})());
if(cljs.core.truth_(temp__4657__auto___28790)){
var cb_28791 = temp__4657__auto___28790;
(cb_28791.cljs$core$IFn$_invoke$arity$1 ? cb_28791.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$start) : cb_28791.call(null,cljs.core.cst$kw$start));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__4657__auto___28792 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__4657__auto___28792)){
var prefix_28793 = temp__4657__auto___28792;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28784 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28784) : cljs.core.deref.call(null,G__28784));
})()),prefix_28793);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28785 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28785) : cljs.core.deref.call(null,G__28785));
})()));
var G__28786_28794 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
var G__28787_28795 = col;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28786_28794,G__28787_28795) : cljs.core.reset_BANG_.call(null,G__28786_28794,G__28787_28795));

var G__28788 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__28789 = col;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28788,G__28789) : cljs.core.reset_BANG_.call(null,G__28788,G__28789));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__4657__auto___28798 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__28796 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28796) : cljs.core.deref.call(null,G__28796));
})());
if(cljs.core.truth_(temp__4657__auto___28798)){
var cb_28799 = temp__4657__auto___28798;
(cb_28799.cljs$core$IFn$_invoke$arity$1 ? cb_28799.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$end) : cb_28799.call(null,cljs.core.cst$kw$end));
} else {
}

var temp__4657__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__4657__auto__)){
var suffix = temp__4657__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28797 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28797) : cljs.core.deref.call(null,G__28797));
})()),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var G__28800 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__28801 = (cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__28802 = cljs.core._EQ_;
var expr__28803 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((pred__28802.cljs$core$IFn$_invoke$arity$2 ? pred__28802.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$block,expr__28803) : pred__28802.call(null,cljs.core.cst$kw$block,expr__28803)))){
var G__28805 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28805) : cljs.core.deref.call(null,G__28805));
} else {
if(cljs.core.truth_((pred__28802.cljs$core$IFn$_invoke$arity$2 ? pred__28802.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$current,expr__28803) : pred__28802.call(null,cljs.core.cst$kw$current,expr__28803)))){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28806 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28806) : cljs.core.deref.call(null,G__28806));
})()));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28803)].join('')));
}
}
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28800,G__28801) : cljs.core.reset_BANG_.call(null,G__28800,G__28801));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28807 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28807) : cljs.core.deref.call(null,G__28807));
})()),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__20248__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__20248__auto__){
return or__20248__auto__;
} else {
var and__20236__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__20236__auto__){
var G__28811 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28811) : cljs.core.deref.call(null,G__28811));
} else {
return and__20236__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__4655__auto___28814 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__28812 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28812) : cljs.core.deref.call(null,G__28812));
})());
if(cljs.core.truth_(temp__4655__auto___28814)){
var tws_28815 = temp__4655__auto___28814;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28813 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28813) : cljs.core.deref.call(null,G__28813));
})()),tws_28815);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__28828 = cljs.core.seq(tokens);
var chunk__28829 = null;
var count__28830 = (0);
var i__28831 = (0);
while(true){
if((i__28831 < count__28830)){
var token = chunk__28829.cljs$core$IIndexed$_nth$arity$2(null,i__28831);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__4655__auto___28840 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__28832 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28832) : cljs.core.deref.call(null,G__28832));
})());
if(cljs.core.truth_(temp__4655__auto___28840)){
var tws_28841 = temp__4655__auto___28840;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28833 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28833) : cljs.core.deref.call(null,G__28833));
})()),tws_28841);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_28842 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__28834 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28834) : cljs.core.deref.call(null,G__28834));
})());
if(cljs.core.truth_((function (){var and__20236__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__20236__auto__)){
return tws_28842;
} else {
return and__20236__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28835 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28835) : cljs.core.deref.call(null,G__28835));
})()),tws_28842);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__28843 = seq__28828;
var G__28844 = chunk__28829;
var G__28845 = count__28830;
var G__28846 = (i__28831 + (1));
seq__28828 = G__28843;
chunk__28829 = G__28844;
count__28830 = G__28845;
i__28831 = G__28846;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__28828);
if(temp__4657__auto__){
var seq__28828__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28828__$1)){
var c__21059__auto__ = cljs.core.chunk_first(seq__28828__$1);
var G__28847 = cljs.core.chunk_rest(seq__28828__$1);
var G__28848 = c__21059__auto__;
var G__28849 = cljs.core.count(c__21059__auto__);
var G__28850 = (0);
seq__28828 = G__28847;
chunk__28829 = G__28848;
count__28830 = G__28849;
i__28831 = G__28850;
continue;
} else {
var token = cljs.core.first(seq__28828__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__4655__auto___28851 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__28836 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28836) : cljs.core.deref.call(null,G__28836));
})());
if(cljs.core.truth_(temp__4655__auto___28851)){
var tws_28852 = temp__4655__auto___28851;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28837 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28837) : cljs.core.deref.call(null,G__28837));
})()),tws_28852);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_28853 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__28838 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28838) : cljs.core.deref.call(null,G__28838));
})());
if(cljs.core.truth_((function (){var and__20236__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__20236__auto__)){
return tws_28853;
} else {
return and__20236__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28839 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28839) : cljs.core.deref.call(null,G__28839));
})()),tws_28853);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__28854 = cljs.core.next(seq__28828__$1);
var G__28855 = null;
var G__28856 = (0);
var G__28857 = (0);
seq__28828 = G__28854;
chunk__28829 = G__28855;
count__28830 = G__28856;
i__28831 = G__28857;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28861 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28861) : cljs.core.deref.call(null,G__28861));
})()));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28863 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28863) : cljs.core.deref.call(null,G__28863));
})())) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__20248__auto__ = (function (){var G__28867 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28867) : cljs.core.deref.call(null,G__28867));
})();
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28871 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28871) : cljs.core.deref.call(null,G__28871));
})()));
var and__20236__auto__ = miser_width;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = maxcol;
if(cljs.core.truth_(and__20236__auto____$1)){
var and__20236__auto____$2 = ((function (){var G__28873 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28873) : cljs.core.deref.call(null,G__28873));
})() >= (maxcol - miser_width));
if(and__20236__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__20236__auto____$2;
}
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__21173__auto__ = (function (){var G__28874 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28874) : cljs.core.atom.call(null,G__28874));
})();
var prefer_table__21174__auto__ = (function (){var G__28875 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28875) : cljs.core.atom.call(null,G__28875));
})();
var method_cache__21175__auto__ = (function (){var G__28876 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28876) : cljs.core.atom.call(null,G__28876));
})();
var cached_hierarchy__21176__auto__ = (function (){var G__28877 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28877) : cljs.core.atom.call(null,G__28877));
})();
var hierarchy__21177__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__21173__auto__,prefer_table__21174__auto__,method_cache__21175__auto__,cached_hierarchy__21176__auto__,hierarchy__21177__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__21173__auto__,prefer_table__21174__auto__,method_cache__21175__auto__,cached_hierarchy__21176__auto__,hierarchy__21177__auto__))
,cljs.core.cst$kw$default,hierarchy__21177__auto__,method_table__21173__auto__,prefer_table__21174__auto__,method_cache__21175__auto__,cached_hierarchy__21176__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__20248__auto__ = (function (){var G__28879 = cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28879) : cljs.core.deref.call(null,G__28879));
})();
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
var or__20248__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__20248__auto____$1){
return or__20248__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__28880_SHARP_){
return cljs.core.not((function (){var and__20236__auto__ = cljs.pprint.nl_t_QMARK_(p1__28880_SHARP_);
if(cljs.core.truth_(and__20236__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__28880_SHARP_),lb);
} else {
return and__20236__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__28881_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__28881_SHARP_);
return cljs.core.not((function (){var and__20236__auto__ = cljs.pprint.nl_t_QMARK_(p1__28881_SHARP_);
if(cljs.core.truth_(and__20236__auto__)){
var or__20248__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__20248__auto__){
return or__20248__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__20236__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
var G__28890_28898 = cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
var G__28891_28899 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28890_28898,G__28891_28899) : cljs.core.reset_BANG_.call(null,G__28890_28898,G__28891_28899));

var G__28892_28900 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb);
var G__28893_28901 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28892_28900,G__28893_28901) : cljs.core.reset_BANG_.call(null,G__28892_28900,G__28893_28901));

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
var G__28894_28902 = cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1);
var G__28895_28903 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28894_28902,G__28895_28903) : cljs.core.reset_BANG_.call(null,G__28894_28902,G__28895_28903));

var G__28896_28904 = cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1);
var G__28897_28905 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__28896_28904,G__28897_28905) : cljs.core.reset_BANG_.call(null,G__28896_28904,G__28897_28905));

var G__28906 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__28906;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28911 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28911) : cljs.core.deref.call(null,G__28911));
})()),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28912 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28912) : cljs.core.deref.call(null,G__28912));
})()),prefix);
} else {
}

var istr_28915 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((function (){var G__28913 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28913) : cljs.core.deref.call(null,G__28913));
})() - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28914 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28914) : cljs.core.deref.call(null,G__28914));
})()),istr_28915);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__28916_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__28916_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__28927 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28927,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28927,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__28930 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28930,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28930,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__28933 = newl;
var G__28934 = this$;
var G__28935 = section;
var G__28936 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__28933,G__28934,G__28935,G__28936) : cljs.pprint.emit_nl_QMARK_.call(null,G__28933,G__28934,G__28935,G__28936));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs$pprint$write_token_string(this$,section);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__28938 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28938) : cljs.core.deref.call(null,G__28938));
})());
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__28939 = new_buffer;
buffer = G__28939;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__28942 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28942) : cljs.core.deref.call(null,G__28942));
})()),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__28943 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28943) : cljs.core.deref.call(null,G__28943));
})())))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__4655__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__28945 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28945) : cljs.core.deref.call(null,G__28945));
})());
if(cljs.core.truth_(temp__4655__auto__)){
var buf = temp__4655__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__4657__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1((function (){var G__28948 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28948) : cljs.core.deref.call(null,G__28948));
})());
if(cljs.core.truth_(temp__4657__auto__)){
var tws = temp__4657__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28949 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28949) : cljs.core.deref.call(null,G__28949));
})()),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__28965 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28965) : cljs.core.deref.call(null,G__28965));
})())));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__28966 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28966) : cljs.core.deref.call(null,G__28966));
})()))){
var oldpos_28980 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__28967 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28967) : cljs.core.deref.call(null,G__28967));
})());
var newpos_28981 = (oldpos_28980 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_28981);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_28980,newpos_28981));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28968 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28968) : cljs.core.deref.call(null,G__28968));
})()),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28969 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28969) : cljs.core.deref.call(null,G__28969));
})()),"\n");

var seq__28970_28982 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__28971_28983 = null;
var count__28972_28984 = (0);
var i__28973_28985 = (0);
while(true){
if((i__28973_28985 < count__28972_28984)){
var l_28986__$1 = chunk__28971_28983.cljs$core$IIndexed$_nth$arity$2(null,i__28973_28985);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28974 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28974) : cljs.core.deref.call(null,G__28974));
})()),l_28986__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28975 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28975) : cljs.core.deref.call(null,G__28975));
})()),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28976 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28976) : cljs.core.deref.call(null,G__28976));
})()),prefix);
} else {
}

var G__28987 = seq__28970_28982;
var G__28988 = chunk__28971_28983;
var G__28989 = count__28972_28984;
var G__28990 = (i__28973_28985 + (1));
seq__28970_28982 = G__28987;
chunk__28971_28983 = G__28988;
count__28972_28984 = G__28989;
i__28973_28985 = G__28990;
continue;
} else {
var temp__4657__auto___28991 = cljs.core.seq(seq__28970_28982);
if(temp__4657__auto___28991){
var seq__28970_28992__$1 = temp__4657__auto___28991;
if(cljs.core.chunked_seq_QMARK_(seq__28970_28992__$1)){
var c__21059__auto___28993 = cljs.core.chunk_first(seq__28970_28992__$1);
var G__28994 = cljs.core.chunk_rest(seq__28970_28992__$1);
var G__28995 = c__21059__auto___28993;
var G__28996 = cljs.core.count(c__21059__auto___28993);
var G__28997 = (0);
seq__28970_28982 = G__28994;
chunk__28971_28983 = G__28995;
count__28972_28984 = G__28996;
i__28973_28985 = G__28997;
continue;
} else {
var l_28998__$1 = cljs.core.first(seq__28970_28992__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28977 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28977) : cljs.core.deref.call(null,G__28977));
})()),l_28998__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28978 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28978) : cljs.core.deref.call(null,G__28978));
})()),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__28979 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__28979) : cljs.core.deref.call(null,G__28979));
})()),prefix);
} else {
}

var G__28999 = cljs.core.next(seq__28970_28992__$1);
var G__29000 = null;
var G__29001 = (0);
var G__29002 = (0);
seq__28970_28982 = G__28999;
chunk__28971_28983 = G__29000;
count__28972_28984 = G__29001;
i__28973_28985 = G__29002;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__29006 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29006) : cljs.core.deref.call(null,G__29006));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__29007 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29007) : cljs.core.deref.call(null,G__29007));
})()),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__29008 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29008) : cljs.core.deref.call(null,G__29008));
})());
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),null,null,null,null,null,null,null));
var fields = (function (){var G__29022 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29022) : cljs.core.atom.call(null,G__29022));
})();
if(typeof cljs.pprint.t_cljs$pprint29023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint29023 = (function (pretty_writer,writer,max_columns,miser_width,lb,fields,meta29024){
this.pretty_writer = pretty_writer;
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta29024 = meta29024;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint29023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_29025,meta29024__$1){
var self__ = this;
var _29025__$1 = this;
return (new cljs.pprint.t_cljs$pprint29023(self__.pretty_writer,self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta29024__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint29023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_29025){
var self__ = this;
var _29025__$1 = this;
return self__.meta29024;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint29023.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint29023.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29026 = cljs.core._EQ_;
var expr__29027 = cljs.core.type(x);
if(cljs.core.truth_((pred__29026.cljs$core$IFn$_invoke$arity$2 ? pred__29026.cljs$core$IFn$_invoke$arity$2(String,expr__29027) : pred__29026.call(null,String,expr__29027)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__29029 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29029) : cljs.core.deref.call(null,G__29029));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__29030 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29030) : cljs.core.deref.call(null,G__29030));
})()),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__29031 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29031) : cljs.core.deref.call(null,G__29031));
})());
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__29026.cljs$core$IFn$_invoke$arity$2 ? pred__29026.cljs$core$IFn$_invoke$arity$2(Number,expr__29027) : pred__29026.call(null,Number,expr__29027)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29027)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint29023.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush(this$__$1);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__29032 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29032) : cljs.core.deref.call(null,G__29032));
})()));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint29023.prototype.cljs$pprint$IPrettyFlush$ = true;

cljs.pprint.t_cljs$pprint29023.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__29033 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29033) : cljs.core.deref.call(null,G__29033));
})()),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1((function (){var G__29034 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29034) : cljs.core.deref.call(null,G__29034));
})()),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint29023.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$pretty_DASH_writer,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width], null)))], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta29024], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint29023.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint29023.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29023";

cljs.pprint.t_cljs$pprint29023.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__20854__auto__,writer__20855__auto__,opt__20856__auto__){
return cljs.core._write(writer__20855__auto__,"cljs.pprint/t_cljs$pprint29023");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint29023 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint29023(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta29024){
return (new cljs.pprint.t_cljs$pprint29023(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta29024));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint29023(cljs$pprint$pretty_writer,writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__29045 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29045) : cljs.core.deref.call(null,G__29045));
})()),null,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__29046 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29046) : cljs.core.deref.call(null,G__29046));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__4657__auto___29055 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__29047 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29047) : cljs.core.deref.call(null,G__29047));
})());
if(cljs.core.truth_(temp__4657__auto___29055)){
var cb_29056 = temp__4657__auto___29055;
(cb_29056.cljs$core$IFn$_invoke$arity$1 ? cb_29056.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$start) : cb_29056.call(null,cljs.core.cst$kw$start));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__29048 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29048) : cljs.core.deref.call(null,G__29048));
})()),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__29049 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29049) : cljs.core.deref.call(null,G__29049));
})()));
var G__29050_29057 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
var G__29051_29058 = col;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29050_29057,G__29051_29058) : cljs.core.reset_BANG_.call(null,G__29050_29057,G__29051_29058));

var G__29052 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__29053 = col;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29052,G__29053) : cljs.core.reset_BANG_.call(null,G__29052,G__29053));
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__29054 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29054) : cljs.core.deref.call(null,G__29054));
})());
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__29064 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29064) : cljs.core.deref.call(null,G__29064));
})());
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__29065 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29065) : cljs.core.deref.call(null,G__29065));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__29066 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29066) : cljs.core.deref.call(null,G__29066));
})()),suffix);
} else {
}

var temp__4657__auto___29069 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1((function (){var G__29067 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29067) : cljs.core.deref.call(null,G__29067));
})());
if(cljs.core.truth_(temp__4657__auto___29069)){
var cb_29070 = temp__4657__auto___29069;
(cb_29070.cljs$core$IFn$_invoke$arity$1 ? cb_29070.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$end) : cb_29070.call(null,cljs.core.cst$kw$end));
} else {
}
} else {
var oldpos_29071 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__29068 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29068) : cljs.core.deref.call(null,G__29068));
})());
var newpos_29072 = (oldpos_29071 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_29072);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_29071,newpos_29072));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__29075 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29075) : cljs.core.deref.call(null,G__29075));
})());
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__29076 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29076) : cljs.core.deref.call(null,G__29076));
})()),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1((function (){var G__29087 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29087) : cljs.core.deref.call(null,G__29087));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1((function (){var G__29088 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29088) : cljs.core.deref.call(null,G__29088));
})()),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var G__29089 = cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb);
var G__29090 = (offset + (function (){var pred__29091 = cljs.core._EQ_;
var expr__29092 = relative_to;
if(cljs.core.truth_((pred__29091.cljs$core$IFn$_invoke$arity$2 ? pred__29091.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$block,expr__29092) : pred__29091.call(null,cljs.core.cst$kw$block,expr__29092)))){
var G__29094 = cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29094) : cljs.core.deref.call(null,G__29094));
} else {
if(cljs.core.truth_((pred__29091.cljs$core$IFn$_invoke$arity$2 ? pred__29091.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$current,expr__29092) : pred__29091.call(null,cljs.core.cst$kw$current,expr__29092)))){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__29095 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29095) : cljs.core.deref.call(null,G__29095));
})()));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29092)].join('')));
}
}
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29089,G__29090) : cljs.core.reset_BANG_.call(null,G__29089,G__29090));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1((function (){var G__29096 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29096) : cljs.core.deref.call(null,G__29096));
})());
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1((function (){var G__29098 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29098) : cljs.core.deref.call(null,G__29098));
})());
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.write_option_table = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$right_DASH_margin,cljs.core.cst$kw$circle,cljs.core.cst$kw$lines,cljs.core.cst$kw$suppress_DASH_namespaces,cljs.core.cst$kw$radix,cljs.core.cst$kw$level,cljs.core.cst$kw$readably,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$length,cljs.core.cst$kw$pretty,cljs.core.cst$kw$base],[new cljs.core.Var(function(){return cljs.pprint._STAR_print_miser_width_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_miser_DASH_width_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_miser_DASH_width_STAR_,"C:\\projects\\fossa\\target\\cljsbuild-compiler-1\\cljs\\pprint.cljs",21,1,true,632,637,cljs.core.List.EMPTY,"The column at which to enter miser style. Depending on the dispatch table,\nmiser style add newlines in more places to try to keep lines short allowing for further\nlevels of nesting.",(cljs.core.truth_(cljs.pprint._STAR_print_miser_width_STAR_)?cljs.pprint._STAR_print_miser_width_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_right_margin_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_right_DASH_margin_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_right_DASH_margin_STAR_,"C:\\projects\\fossa\\target\\cljsbuild-compiler-1\\cljs\\pprint.cljs",22,1,true,625,630,cljs.core.List.EMPTY,"Pretty printing will try to avoid anything going beyond this column.\nSet it to nil to have pprint let the line be arbitrarily long. This will ignore all\nnon-mandatory newlines.",(cljs.core.truth_(cljs.pprint._STAR_print_right_margin_STAR_)?cljs.pprint._STAR_print_right_margin_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_circle_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_circle_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_circle_STAR_,"C:\\projects\\fossa\\target\\cljsbuild-compiler-1\\cljs\\pprint.cljs",15,1,true,646,649,cljs.core.List.EMPTY,"Mark circular structures (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_circle_STAR_)?cljs.pprint._STAR_print_circle_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_lines_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_lines_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_lines_STAR_,"C:\\projects\\fossa\\target\\cljsbuild-compiler-1\\cljs\\pprint.cljs",14,1,true,640,643,cljs.core.List.EMPTY,"Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_lines_STAR_)?cljs.pprint._STAR_print_lines_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_suppress_namespaces_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_suppress_DASH_namespaces_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_suppress_DASH_namespaces_STAR_,"C:\\projects\\fossa\\target\\cljsbuild-compiler-1\\cljs\\pprint.cljs",28,1,true,657,661,cljs.core.List.EMPTY,"Don't print namespaces with symbols. This is particularly useful when\npretty printing the results of macro expansions",(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)?cljs.pprint._STAR_print_suppress_namespaces_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_radix_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_radix_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_radix_STAR_,"C:\\projects\\fossa\\target\\cljsbuild-compiler-1\\cljs\\pprint.cljs",14,1,true,665,670,cljs.core.List.EMPTY,"Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,\nor 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the\nradix specifier is in the form #XXr where XX is the decimal value of *print-base* ",(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?cljs.pprint._STAR_print_radix_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_level_STAR_;},cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_level_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$_STAR_print_DASH_level_STAR_,"cljs/core.cljs",16,1,true,119,130,cljs.core.List.EMPTY,"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@type {null|number}"], null),(cljs.core.truth_(cljs.core._STAR_print_level_STAR_)?cljs.core._STAR_print_level_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_readably_STAR_;},cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_readably_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$_STAR_print_DASH_readably_STAR_,"cljs/core.cljs",19,1,true,83,89,cljs.core.List.EMPTY,"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",(cljs.core.truth_(cljs.core._STAR_print_readably_STAR_)?cljs.core._STAR_print_readably_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pprint_dispatch_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_pprint_DASH_dispatch_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_pprint_DASH_dispatch_STAR_,"C:\\projects\\fossa\\target\\cljsbuild-compiler-1\\cljs\\pprint.cljs",25,1,true,619,623,cljs.core.List.EMPTY,"The pretty print dispatch function. Use with-pprint-dispatch or\nset-pprint-dispatch to modify.",(cljs.core.truth_(cljs.pprint._STAR_print_pprint_dispatch_STAR_)?cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_length_STAR_;},cljs.core.cst$sym$cljs$core_SLASH__STAR_print_DASH_length_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$jsdoc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$_STAR_print_DASH_length_STAR_,"cljs/core.cljs",17,1,true,107,117,cljs.core.List.EMPTY,"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@type {null|number}"], null),(cljs.core.truth_(cljs.core._STAR_print_length_STAR_)?cljs.core._STAR_print_length_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pretty_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_pretty_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_pretty_STAR_,"C:\\projects\\fossa\\target\\cljsbuild-compiler-1\\cljs\\pprint.cljs",16,1,true,615,617,cljs.core.List.EMPTY,"Bind to true if you want write to use pretty printing",(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)?cljs.pprint._STAR_print_pretty_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_base_STAR_;},cljs.core.cst$sym$cljs$pprint_SLASH__STAR_print_DASH_base_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$added,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],["1.2",cljs.core.cst$sym$cljs$pprint,cljs.core.cst$sym$_STAR_print_DASH_base_STAR_,"C:\\projects\\fossa\\target\\cljsbuild-compiler-1\\cljs\\pprint.cljs",13,1,true,672,675,cljs.core.List.EMPTY,"The base to use for printing integers and rationals.",(cljs.core.truth_(cljs.pprint._STAR_print_base_STAR_)?cljs.pprint._STAR_print_base_STAR_.cljs$lang$test:null)]))]);
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__29099_SHARP_){
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__29099_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__29099_SHARP_)], null);
} else {
return null;
}
}),cljs.core.array_seq([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__20236__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__20236__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1((function (){var G__29105 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29105) : cljs.core.deref.call(null,G__29105));
})());
} else {
return and__20236__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__20236__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__20236__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})();
if(cljs.core.not(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__21330__auto__ = [];
var len__21323__auto___29122 = arguments.length;
var i__21324__auto___29123 = (0);
while(true){
if((i__21324__auto___29123 < len__21323__auto___29122)){
args__21330__auto__.push((arguments[i__21324__auto___29123]));

var G__29124 = (i__21324__auto___29123 + (1));
i__21324__auto___29123 = G__29124;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((1) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21331__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_29108 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_29109 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_29110 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_29111 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_29112 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_29113 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_29114 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_29115 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_29116 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_29117 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_29118 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_29119 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__28412__auto___29125 = base_writer;
var new_writer__28413__auto___29126 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__28412__auto___29125));
var _STAR_out_STAR_29120_29127 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__28413__auto___29126)?cljs.pprint.make_pretty_writer(base_writer__28412__auto___29125,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__28412__auto___29125);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_29120_29127;
}} else {
var _STAR_out_STAR_29121_29128 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_29121_29128;
}}

if(optval === true){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
} else {
}

if((optval == null)){
return [cljs.core.str(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_29119;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_29118;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_29117;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_29116;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_29115;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_29114;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_29113;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_29112;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_29111;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_29110;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_29109;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_29108;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq29106){
var G__29107 = cljs.core.first(seq29106);
var seq29106__$1 = cljs.core.next(seq29106);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__29107,seq29106__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var args29129 = [];
var len__21323__auto___29135 = arguments.length;
var i__21324__auto___29136 = (0);
while(true){
if((i__21324__auto___29136 < len__21323__auto___29135)){
args29129.push((arguments[i__21324__auto___29136]));

var G__29137 = (i__21324__auto___29136 + (1));
i__21324__auto___29136 = G__29137;
continue;
} else {
}
break;
}

var G__29131 = args29129.length;
switch (G__29131) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29129.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_29132 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_29132;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__28412__auto__ = writer;
var new_writer__28413__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__28412__auto__));
var _STAR_out_STAR_29133 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__28413__auto__)?cljs.pprint.make_pretty_writer(base_writer__28412__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__28412__auto__);

try{var _STAR_print_pretty_STAR_29134_29139 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_29134_29139;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_29133;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error([cljs.core.str("Bad argument: "),cljs.core.str(arg),cljs.core.str(". It must be one of "),cljs.core.str(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__20236__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__20236__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__20236__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mandatory,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$linear,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$section,null,cljs.core.cst$kw$line,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__21330__auto__ = [];
var len__21323__auto___29143 = arguments.length;
var i__21324__auto___29144 = (0);
while(true){
if((i__21324__auto___29144 < len__21323__auto___29143)){
args__21330__auto__.push((arguments[i__21324__auto___29144]));

var G__29145 = (i__21324__auto___29144 + (1));
i__21324__auto___29144 = G__29145;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((2) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21331__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq29140){
var G__29141 = cljs.core.first(seq29140);
var seq29140__$1 = cljs.core.next(seq29140);
var G__29142 = cljs.core.first(seq29140__$1);
var seq29140__$2 = cljs.core.next(seq29140__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__29141,G__29142,seq29140__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str(message),cljs.core.str("\n"),cljs.core.str(cljs.pprint._STAR_format_str_STAR_),cljs.core.str("\n"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),cljs.core.str("^"),cljs.core.str("\n")].join('');
throw Error(full_message);
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
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k29147,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__29149 = (((k29147 instanceof cljs.core.Keyword))?k29147.fqn:null);
switch (G__29149) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29147,else__20873__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$ = true;

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29146){
var self__ = this;
var G__29146__$1 = this;
return (new cljs.core.RecordIter((0),G__29146__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
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

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
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

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pos,null,cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__29146){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__29150 = cljs.core.keyword_identical_QMARK_;
var expr__29151 = k__20878__auto__;
if(cljs.core.truth_((pred__29150.cljs$core$IFn$_invoke$arity$2 ? pred__29150.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$seq,expr__29151) : pred__29150.call(null,cljs.core.cst$kw$seq,expr__29151)))){
return (new cljs.pprint.arg_navigator(G__29146,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29150.cljs$core$IFn$_invoke$arity$2 ? pred__29150.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rest,expr__29151) : pred__29150.call(null,cljs.core.cst$kw$rest,expr__29151)))){
return (new cljs.pprint.arg_navigator(self__.seq,G__29146,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29150.cljs$core$IFn$_invoke$arity$2 ? pred__29150.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos,expr__29151) : pred__29150.call(null,cljs.core.cst$kw$pos,expr__29151)))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__29146,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__29146),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__29146){
var self__ = this;
var this__20869__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__29146,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__29148){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__29148),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__29148),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__29148),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29148,cljs.core.cst$kw$seq,cljs.core.array_seq([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0)),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__29157 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29157,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29157,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__29162 = navigator;
var G__29163 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__29162,G__29163) : cljs.pprint.relative_reposition.call(null,G__29162,G__29163));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
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
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20870__auto__,k__20871__auto__){
var self__ = this;
var this__20870__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__20870__auto____$1,k__20871__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20872__auto__,k29165,else__20873__auto__){
var self__ = this;
var this__20872__auto____$1 = this;
var G__29167 = (((k29165 instanceof cljs.core.Keyword))?k29165.fqn:null);
switch (G__29167) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29165,else__20873__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20884__auto__,writer__20885__auto__,opts__20886__auto__){
var self__ = this;
var this__20884__auto____$1 = this;
var pr_pair__20887__auto__ = ((function (this__20884__auto____$1){
return (function (keyval__20888__auto__){
return cljs.core.pr_sequential_writer(writer__20885__auto__,cljs.core.pr_writer,""," ","",opts__20886__auto__,keyval__20888__auto__);
});})(this__20884__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__20885__auto__,pr_pair__20887__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__20886__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$ = true;

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29164){
var self__ = this;
var G__29164__$1 = this;
return (new cljs.core.RecordIter((0),G__29164__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),cljs.core._iterator(self__.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20868__auto__){
var self__ = this;
var this__20868__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20864__auto__){
var self__ = this;
var this__20864__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20874__auto__){
var self__ = this;
var this__20874__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20865__auto__){
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

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20866__auto__,other__20867__auto__){
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

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20879__auto__,k__20880__auto__){
var self__ = this;
var this__20879__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$offset,null,cljs.core.cst$kw$func,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$def,null], null), null),k__20880__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__20879__auto____$1),self__.__meta),k__20880__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__20880__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20877__auto__,k__20878__auto__,G__29164){
var self__ = this;
var this__20877__auto____$1 = this;
var pred__29168 = cljs.core.keyword_identical_QMARK_;
var expr__29169 = k__20878__auto__;
if(cljs.core.truth_((pred__29168.cljs$core$IFn$_invoke$arity$2 ? pred__29168.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func,expr__29169) : pred__29168.call(null,cljs.core.cst$kw$func,expr__29169)))){
return (new cljs.pprint.compiled_directive(G__29164,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29168.cljs$core$IFn$_invoke$arity$2 ? pred__29168.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$def,expr__29169) : pred__29168.call(null,cljs.core.cst$kw$def,expr__29169)))){
return (new cljs.pprint.compiled_directive(self__.func,G__29164,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29168.cljs$core$IFn$_invoke$arity$2 ? pred__29168.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params,expr__29169) : pred__29168.call(null,cljs.core.cst$kw$params,expr__29169)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__29164,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29168.cljs$core$IFn$_invoke$arity$2 ? pred__29168.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$offset,expr__29169) : pred__29168.call(null,cljs.core.cst$kw$offset,expr__29169)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__29164,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__20878__auto__,G__29164),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20882__auto__){
var self__ = this;
var this__20882__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20869__auto__,G__29164){
var self__ = this;
var this__20869__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__29164,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20875__auto__,entry__20876__auto__){
var self__ = this;
var this__20875__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__20876__auto__)){
return cljs.core._assoc(this__20875__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__20876__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__20875__auto____$1,entry__20876__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__20904__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__20904__auto__,writer__20905__auto__){
return cljs.core._write(writer__20905__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__29166){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__29166),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__29166),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__29166),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__29166),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29166,cljs.core.cst$kw$func,cljs.core.array_seq([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0)),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__29172,navigator){
var vec__29182 = p__29172;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29182,(0),null);
var vec__29185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29182,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29185,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29185,(1),null);
var vec__29188 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29188,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29188,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__29194 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29194,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29194,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str(n),cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__20248__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return [cljs.core.str("#"),cljs.core.str(cljs.pprint._STAR_print_base_STAR_),cljs.core.str("r")].join('');
}
})():null)),cljs.core.str((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__29200 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29200,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29200,(1),null);
var base_output = (function (){var or__20248__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(chars),cljs.core.str(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(base_output),cljs.core.str(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__29203_SHARP_){
if((p1__29203_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__29203_SHARP_,base),cljs.core.quot(p1__29203_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__29204_SHARP_){
if((p1__29204_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__29204_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__29204_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__29209 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29209,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29209,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_29212 = (arg < (0));
var pos_arg_29213 = ((neg_29212)?(- arg):arg);
var raw_str_29214 = cljs.pprint.opt_base_str(base,pos_arg_29213);
var group_str_29215 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_29212,pos_arg_29213,raw_str_29214,vec__29209,arg,arg_navigator__$1){
return (function (p1__29205_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__29205_SHARP_);
});})(neg_29212,pos_arg_29213,raw_str_29214,vec__29209,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_29214));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_29214);
var signed_str_29216 = ((neg_29212)?[cljs.core.str("-"),cljs.core.str(group_str_29215)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str("+"),cljs.core.str(group_str_29215)].join(''):group_str_29215
));
var padded_str_29217 = (((signed_str_29216.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_29216.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str(signed_str_29216)].join(''):signed_str_29216);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([padded_str_29217], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str(this$),cljs.core.str((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[cljs.core.str(" "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__29218 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str(this$),cljs.core.str(" "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__29219 = (pos - (1));
var G__29220 = cljs.core.first(remainder);
var G__29221 = cljs.core.next(remainder);
acc = G__29218;
pos = G__29219;
this$ = G__29220;
remainder = G__29221;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__29225 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29225,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29225,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zero"], 0));
} else {
var abs_arg_29228 = (((arg < (0)))?(- arg):arg);
var parts_29229 = cljs.pprint.remainders((1000),abs_arg_29228);
if((cljs.core.count(parts_29229) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_29230 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_29229);
var full_str_29231 = cljs.pprint.add_english_scales(parts_strs_29230,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str(full_str_29231)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__29235 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29235,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zeroth"], 0));
} else {
var abs_arg_29238 = (((arg < (0)))?(- arg):arg);
var parts_29239 = cljs.pprint.remainders((1000),abs_arg_29238);
if((cljs.core.count(parts_29239) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_29240 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_29239));
var head_str_29241 = cljs.pprint.add_english_scales(parts_strs_29240,(1));
var tail_str_29242 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_29239));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str((((!(cljs.core.empty_QMARK_(head_str_29241))) && (!(cljs.core.empty_QMARK_(tail_str_29242))))?[cljs.core.str(head_str_29241),cljs.core.str(", "),cljs.core.str(tail_str_29242)].join(''):((!(cljs.core.empty_QMARK_(head_str_29241)))?[cljs.core.str(head_str_29241),cljs.core.str("th")].join(''):tail_str_29242
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_29243 = cljs.core.rem(arg,(100));
var not_teens_29244 = (((11) < low_two_digits_29243)) || (((19) > low_two_digits_29243));
var low_digit_29245 = cljs.core.rem(low_two_digits_29243,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((low_digit_29245 === (1))) && (not_teens_29244))?"st":((((low_digit_29245 === (2))) && (not_teens_29244))?"nd":((((low_digit_29245 === (3))) && (not_teens_29244))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__29249 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29249,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29249,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_29252 = cljs.pprint.remainders((10),arg);
var acc_29253 = cljs.core.PersistentVector.EMPTY;
var pos_29254 = (cljs.core.count(digits_29252) - (1));
var digits_29255__$1 = digits_29252;
while(true){
if(cljs.core.empty_QMARK_(digits_29255__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_29253)], 0));
} else {
var digit_29256 = cljs.core.first(digits_29255__$1);
var G__29257 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_29256))?acc_29253:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_29253,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_29254),(digit_29256 - (1)))));
var G__29258 = (pos_29254 - (1));
var G__29259 = cljs.core.next(digits_29255__$1);
acc_29253 = G__29257;
pos_29254 = G__29258;
digits_29255__$1 = G__29259;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__29263 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29263,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29263,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str("Control-"),cljs.core.str(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__29272 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29272,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29272,(1),null);
var pred__29275_29278 = cljs.core._EQ_;
var expr__29276_29279 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((pred__29275_29278.cljs$core$IFn$_invoke$arity$2 ? pred__29275_29278.cljs$core$IFn$_invoke$arity$2("o",expr__29276_29279) : pred__29275_29278.call(null,"o",expr__29276_29279)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.array_seq([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__29275_29278.cljs$core$IFn$_invoke$arity$2 ? pred__29275_29278.cljs$core$IFn$_invoke$arity$2("u",expr__29276_29279) : pred__29275_29278.call(null,"u",expr__29276_29279)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.array_seq([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__29275_29278.cljs$core$IFn$_invoke$arity$2 ? pred__29275_29278.cljs$core$IFn$_invoke$arity$2(null,expr__29276_29279) : pred__29275_29278.call(null,null,expr__29276_29279)))){
cljs.pprint.print_char(c);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29276_29279)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__29283 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29283,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29283,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__29292 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29292,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29292,(1),null);
var vec__29295 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29295,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29295,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__29301 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29301,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29301,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__29304 = (i - (1));
i = G__29304;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__20248__auto__ = d;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__20579__auto__ = (2);
var y__20580__auto__ = w;
return ((x__20579__auto__ > y__20580__auto__) ? x__20579__auto__ : y__20580__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__20579__auto__ = (e + (1));
var y__20580__auto__ = (w__$1 - (1));
return ((x__20579__auto__ > y__20580__auto__) ? x__20579__auto__ : y__20580__auto__);
})():(w__$1 + e)
));
var vec__29308 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("0"),cljs.core.str(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29308,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29308,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29308,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29308,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__29314 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29314,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29314,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str(m1),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),cljs.core.str("."),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),cljs.core.str("."),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__29329 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29329,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29329,(1),null);
var vec__29332 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29332,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29332,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__29335 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29335,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29335,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__20248__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__29338 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__20236__auto__ = w;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = d;
if(cljs.core.truth_(and__20236__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_29341 = cljs.core.count(fixed_repr__$1);
var signed_len_29342 = (cljs.core.truth_(add_sign)?(len_29341 + (1)):len_29341);
var prepend_zero_29343__$1 = (prepend_zero) && (!((signed_len_29342 >= w)));
var append_zero_29344__$1 = (append_zero) && (!((signed_len_29342 >= w)));
var full_len_29345 = (((prepend_zero_29343__$1) || (append_zero_29344__$1))?(signed_len_29342 + (1)):signed_len_29342);
if(cljs.core.truth_((function (){var and__20236__auto__ = (full_len_29345 > w);
if(and__20236__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__20236__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_29345),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero_29343__$1)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero_29344__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__29362 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29362,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29362,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__29368_29378 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__29369_29379 = G__29368_29378;
var mantissa_29380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369_29379,(0),null);
var exp_29381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369_29379,(1),null);
var G__29368_29382__$1 = G__29368_29378;
while(true){
var vec__29372_29383 = G__29368_29382__$1;
var mantissa_29384__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29372_29383,(0),null);
var exp_29385__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29372_29383,(1),null);
var w_29386 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_29387 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_29388 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_29389 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_29390 = (function (){var or__20248__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return "E";
}
})();
var add_sign_29391 = (function (){var or__20248__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_29392 = (k_29389 <= (0));
var scaled_exp_29393 = (exp_29385__$1 - (k_29389 - (1)));
var scaled_exp_str_29394 = [cljs.core.str(Math.abs(scaled_exp_29393))].join('');
var scaled_exp_str_29395__$1 = [cljs.core.str(expchar_29390),cljs.core.str((((scaled_exp_29393 < (0)))?"-":"+")),cljs.core.str((cljs.core.truth_(e_29388)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_29388 - cljs.core.count(scaled_exp_str_29394)),"0")):null)),cljs.core.str(scaled_exp_str_29394)].join('');
var exp_width_29396 = cljs.core.count(scaled_exp_str_29395__$1);
var base_mantissa_width_29397 = cljs.core.count(mantissa_29384__$1);
var scaled_mantissa_29398 = [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_29389),"0"))),cljs.core.str(mantissa_29384__$1),cljs.core.str((cljs.core.truth_(d_29387)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_29387 - (base_mantissa_width_29397 - (1))) - (((k_29389 < (0)))?(- k_29389):(0))),"0")):null))].join('');
var w_mantissa_29399 = (cljs.core.truth_(w_29386)?(w_29386 - exp_width_29396):null);
var vec__29375_29400 = cljs.pprint.round_str(scaled_mantissa_29398,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_29389,(0)))?(d_29387 - (1)):(((k_29389 > (0)))?d_29387:(((k_29389 < (0)))?(d_29387 - (1)):null))),(cljs.core.truth_(w_mantissa_29399)?(w_mantissa_29399 - (cljs.core.truth_(add_sign_29391)?(1):(0))):null));
var rounded_mantissa_29401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29375_29400,(0),null);
var __29402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29375_29400,(1),null);
var incr_exp_29403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29375_29400,(2),null);
var full_mantissa_29404 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_29401,k_29389);
var append_zero_29405 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_29389,cljs.core.count(rounded_mantissa_29401))) && ((d_29387 == null));
if(cljs.core.not(incr_exp_29403)){
if(cljs.core.truth_(w_29386)){
var len_29406 = (cljs.core.count(full_mantissa_29404) + exp_width_29396);
var signed_len_29407 = (cljs.core.truth_(add_sign_29391)?(len_29406 + (1)):len_29406);
var prepend_zero_29408__$1 = (prepend_zero_29392) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_29407,w_29386)));
var full_len_29409 = ((prepend_zero_29408__$1)?(signed_len_29407 + (1)):signed_len_29407);
var append_zero_29410__$1 = (append_zero_29405) && ((full_len_29409 < w_29386));
if(cljs.core.truth_((function (){var and__20236__auto__ = (function (){var or__20248__auto__ = (full_len_29409 > w_29386);
if(or__20248__auto__){
return or__20248__auto__;
} else {
var and__20236__auto__ = e_29388;
if(cljs.core.truth_(and__20236__auto__)){
return ((exp_width_29396 - (2)) > e_29388);
} else {
return and__20236__auto__;
}
}
})();
if(cljs.core.truth_(and__20236__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__20236__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_29386,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_29386 - full_len_29409) - ((append_zero_29410__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign_29391)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_29408__$1)?"0":null)),cljs.core.str(full_mantissa_29404),cljs.core.str(((append_zero_29410__$1)?"0":null)),cljs.core.str(scaled_exp_str_29395__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_(add_sign_29391)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_29392)?"0":null)),cljs.core.str(full_mantissa_29404),cljs.core.str(((append_zero_29405)?"0":null)),cljs.core.str(scaled_exp_str_29395__$1)].join('')], 0));
}
} else {
var G__29411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_29401,(exp_29385__$1 + (1))], null);
G__29368_29382__$1 = G__29411;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__29418 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29418,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29418,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__29421 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29421,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29421,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__20579__auto__ = cljs.core.count(mantissa);
var y__20580__auto__ = (function (){var x__20586__auto__ = n;
var y__20587__auto__ = (7);
return ((x__20586__auto__ < y__20587__auto__) ? x__20586__auto__ : y__20587__auto__);
})();
return ((x__20579__auto__ > y__20580__auto__) ? x__20579__auto__ : y__20580__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__29433 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29433,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29433,(1),null);
var vec__29436 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29436,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29436,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__20248__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return (arg < (0));
}
})();
var vec__29439 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29439,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29439,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29439,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_((function (){var and__20236__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__20236__auto__)){
return add_sign;
} else {
return and__20236__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_((function (){var and__20236__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__20236__auto__){
return add_sign;
} else {
return and__20236__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__29445 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29445,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29445,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__29451 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29451,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29451,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__29457 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29457,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29457,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__29466 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29466,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29466,(1),null);
var vec__29469 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29469,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29469,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__20248__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__20248__auto__){
return or__20248__auto__;
} else {
var and__20236__auto__ = max_count;
if(cljs.core.truth_(and__20236__auto__)){
return (count >= max_count);
} else {
return and__20236__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__29472 = (count + (1));
var G__29473 = iter_result;
var G__29474 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__29472;
args__$1 = G__29473;
last_pos = G__29474;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__29481 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29481,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29481,(1),null);
var vec__29484 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29484,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29484,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__20248__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__20248__auto__){
return or__20248__auto__;
} else {
var and__20236__auto__ = max_count;
if(cljs.core.truth_(and__20236__auto__)){
return (count >= max_count);
} else {
return and__20236__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__29487 = (count + (1));
var G__29488 = cljs.core.next(arg_list__$1);
count = G__29487;
arg_list__$1 = G__29488;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__29492 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29492,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29492,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__20248__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__20248__auto__){
return or__20248__auto__;
} else {
var and__20236__auto__ = max_count;
if(cljs.core.truth_(and__20236__auto__)){
return (count >= max_count);
} else {
return and__20236__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__29495 = (count + (1));
var G__29496 = iter_result;
var G__29497 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__29495;
navigator__$2 = G__29496;
last_pos = G__29497;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__29504 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29504,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29504,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__20248__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__20248__auto__){
return or__20248__auto__;
} else {
var and__20236__auto__ = max_count;
if(cljs.core.truth_(and__20236__auto__)){
return (count >= max_count);
} else {
return and__20236__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__29507 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29507,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29507,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__29510 = (count + (1));
var G__29511 = navigator__$3;
count = G__29510;
navigator__$2 = G__29511;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__29516 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_29519 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_29519;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29516,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29516,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__29520 = cljs.core.next(clauses__$1);
var G__29521 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__29522 = iter_result;
clauses__$1 = G__29520;
acc = G__29521;
navigator__$1 = G__29522;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__29536 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var else$ = temp__4657__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__29539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29536,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29539,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29536,(1),null);
var navigator__$1 = (function (){var or__20248__auto__ = new_navigator;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return navigator;
}
})();
var vec__29542 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29542,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29542,(1),null);
var navigator__$2 = (function (){var or__20248__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__20248__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__20248__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__29545 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29545,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29545,(1),null);
var slots = (function (){var x__20579__auto__ = (1);
var y__20580__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__20579__auto__ > y__20580__auto__) ? x__20579__auto__ : y__20580__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__20579__auto__ = minpad;
var y__20580__auto__ = cljs.core.quot(total_pad,slots);
return ((x__20579__auto__ > y__20580__auto__) ? x__20579__auto__ : y__20580__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__20236__auto__ = eol_str;
if(cljs.core.truth_(and__20236__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__29548 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29548) : cljs.core.deref.call(null,G__29548));
})())) + min_remaining) + result_columns) > max_columns);
} else {
return and__20236__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eol_str], 0));
} else {
}

var slots_29549__$1 = slots;
var extra_pad_29550__$1 = extra_pad;
var strs_29551__$1 = strs;
var pad_only_29552 = (function (){var or__20248__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_29551__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_29551__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(((cljs.core.not(pad_only_29552))?cljs.core.first(strs_29551__$1):null)),cljs.core.str((cljs.core.truth_((function (){var or__20248__auto__ = pad_only_29552;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
var or__20248__auto____$1 = cljs.core.next(strs_29551__$1);
if(or__20248__auto____$1){
return or__20248__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str((((extra_pad_29550__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__29553 = (slots_29549__$1 - (1));
var G__29554 = (extra_pad_29550__$1 - (1));
var G__29555 = (cljs.core.truth_(pad_only_29552)?strs_29551__$1:cljs.core.next(strs_29551__$1));
var G__29556 = false;
slots_29549__$1 = G__29553;
extra_pad_29550__$1 = G__29554;
strs_29551__$1 = G__29555;
pad_only_29552 = G__29556;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint29563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint29563 = (function (downcase_writer,writer,meta29564){
this.downcase_writer = downcase_writer;
this.writer = writer;
this.meta29564 = meta29564;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint29563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29565,meta29564__$1){
var self__ = this;
var _29565__$1 = this;
return (new cljs.pprint.t_cljs$pprint29563(self__.downcase_writer,self__.writer,meta29564__$1));
});

cljs.pprint.t_cljs$pprint29563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29565){
var self__ = this;
var _29565__$1 = this;
return self__.meta29564;
});

cljs.pprint.t_cljs$pprint29563.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint29563.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29566 = cljs.core._EQ_;
var expr__29567 = cljs.core.type(x);
if(cljs.core.truth_((pred__29566.cljs$core$IFn$_invoke$arity$2 ? pred__29566.cljs$core$IFn$_invoke$arity$2(String,expr__29567) : pred__29566.call(null,String,expr__29567)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__29566.cljs$core$IFn$_invoke$arity$2 ? pred__29566.cljs$core$IFn$_invoke$arity$2(Number,expr__29567) : pred__29566.call(null,Number,expr__29567)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29567)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint29563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$downcase_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, converting all characters to lower case"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$meta29564], null);
});

cljs.pprint.t_cljs$pprint29563.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint29563.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29563";

cljs.pprint.t_cljs$pprint29563.cljs$lang$ctorPrWriter = (function (this__20854__auto__,writer__20855__auto__,opt__20856__auto__){
return cljs.core._write(writer__20855__auto__,"cljs.pprint/t_cljs$pprint29563");
});

cljs.pprint.__GT_t_cljs$pprint29563 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint29563(downcase_writer__$1,writer__$1,meta29564){
return (new cljs.pprint.t_cljs$pprint29563(downcase_writer__$1,writer__$1,meta29564));
});

}

return (new cljs.pprint.t_cljs$pprint29563(cljs$pprint$downcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint29575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint29575 = (function (upcase_writer,writer,meta29576){
this.upcase_writer = upcase_writer;
this.writer = writer;
this.meta29576 = meta29576;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint29575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29577,meta29576__$1){
var self__ = this;
var _29577__$1 = this;
return (new cljs.pprint.t_cljs$pprint29575(self__.upcase_writer,self__.writer,meta29576__$1));
});

cljs.pprint.t_cljs$pprint29575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29577){
var self__ = this;
var _29577__$1 = this;
return self__.meta29576;
});

cljs.pprint.t_cljs$pprint29575.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint29575.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29578 = cljs.core._EQ_;
var expr__29579 = cljs.core.type(x);
if(cljs.core.truth_((pred__29578.cljs$core$IFn$_invoke$arity$2 ? pred__29578.cljs$core$IFn$_invoke$arity$2(String,expr__29579) : pred__29578.call(null,String,expr__29579)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__29578.cljs$core$IFn$_invoke$arity$2 ? pred__29578.cljs$core$IFn$_invoke$arity$2(Number,expr__29579) : pred__29578.call(null,Number,expr__29579)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29579)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint29575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$upcase_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, converting all characters to upper case"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$meta29576], null);
});

cljs.pprint.t_cljs$pprint29575.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint29575.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29575";

cljs.pprint.t_cljs$pprint29575.cljs$lang$ctorPrWriter = (function (this__20854__auto__,writer__20855__auto__,opt__20856__auto__){
return cljs.core._write(writer__20855__auto__,"cljs.pprint/t_cljs$pprint29575");
});

cljs.pprint.__GT_t_cljs$pprint29575 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint29575(upcase_writer__$1,writer__$1,meta29576){
return (new cljs.pprint.t_cljs$pprint29575(upcase_writer__$1,writer__$1,meta29576));
});

}

return (new cljs.pprint.t_cljs$pprint29575(cljs$pprint$upcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__20236__auto__ = first_QMARK_;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = f;
if(cljs.core.truth_(and__20236__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())?[cljs.core.str(clojure.string.upper_case(f)),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__20236__auto__ = m;
if(cljs.core.truth_(and__20236__auto__)){
return (m.index + (1));
} else {
return and__20236__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.pprint.t_cljs$pprint29593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint29593 = (function (capitalize_word_writer,writer,last_was_whitespace_QMARK_,meta29594){
this.capitalize_word_writer = capitalize_word_writer;
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta29594 = meta29594;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint29593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_29595,meta29594__$1){
var self__ = this;
var _29595__$1 = this;
return (new cljs.pprint.t_cljs$pprint29593(self__.capitalize_word_writer,self__.writer,self__.last_was_whitespace_QMARK_,meta29594__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint29593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_29595){
var self__ = this;
var _29595__$1 = this;
return self__.meta29594;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint29593.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint29593.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29596 = cljs.core._EQ_;
var expr__29597 = cljs.core.type(x);
if(cljs.core.truth_((pred__29596.cljs$core$IFn$_invoke$arity$2 ? pred__29596.cljs$core$IFn$_invoke$arity$2(String,expr__29597) : pred__29596.call(null,String,expr__29597)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.last_was_whitespace_QMARK_) : cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))));

if((s.length > (0))){
var G__29600 = self__.last_was_whitespace_QMARK_;
var G__29601 = (function (){var G__29602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__29602);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29600,G__29601) : cljs.core.reset_BANG_.call(null,G__29600,G__29601));
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__29596.cljs$core$IFn$_invoke$arity$2 ? pred__29596.cljs$core$IFn$_invoke$arity$2(Number,expr__29597) : pred__29596.call(null,Number,expr__29597)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.last_was_whitespace_QMARK_) : cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

var G__29603 = self__.last_was_whitespace_QMARK_;
var G__29604 = goog.string.isEmptyOrWhitespace(c);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__29603,G__29604) : cljs.core.reset_BANG_.call(null,G__29603,G__29604));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29597)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint29593.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$capitalize_DASH_word_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, capitalizing all words"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta29594], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint29593.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint29593.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29593";

cljs.pprint.t_cljs$pprint29593.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__20854__auto__,writer__20855__auto__,opt__20856__auto__){
return cljs.core._write(writer__20855__auto__,"cljs.pprint/t_cljs$pprint29593");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint29593 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint29593(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta29594){
return (new cljs.pprint.t_cljs$pprint29593(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta29594));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint29593(cljs$pprint$capitalize_word_writer,writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
if(typeof cljs.pprint.t_cljs$pprint29611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint29611 = (function (init_cap_writer,writer,capped,meta29612){
this.init_cap_writer = init_cap_writer;
this.writer = writer;
this.capped = capped;
this.meta29612 = meta29612;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint29611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_29613,meta29612__$1){
var self__ = this;
var _29613__$1 = this;
return (new cljs.pprint.t_cljs$pprint29611(self__.init_cap_writer,self__.writer,self__.capped,meta29612__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint29611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_29613){
var self__ = this;
var _29613__$1 = this;
return self__.meta29612;
});})(capped))
;

cljs.pprint.t_cljs$pprint29611.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint29611.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29614 = cljs.core._EQ_;
var expr__29615 = cljs.core.type(x);
if(cljs.core.truth_((pred__29614.cljs$core$IFn$_invoke$arity$2 ? pred__29614.cljs$core$IFn$_invoke$arity$2(String,expr__29615) : pred__29614.call(null,String,expr__29615)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.capped) : cljs.core.deref.call(null,self__.capped)))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__20236__auto__ = m;
if(cljs.core.truth_(and__20236__auto__)){
return m.index;
} else {
return and__20236__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.capped,true) : cljs.core.reset_BANG_.call(null,self__.capped,true));
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__29614.cljs$core$IFn$_invoke$arity$2 ? pred__29614.cljs$core$IFn$_invoke$arity$2(Number,expr__29615) : pred__29614.call(null,Number,expr__29615)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__20236__auto__ = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.capped) : cljs.core.deref.call(null,self__.capped)));
if(and__20236__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__20236__auto__;
}
})())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.capped,true) : cljs.core.reset_BANG_.call(null,self__.capped,true));

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29615)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint29611.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$init_DASH_cap_DASH_writer,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer], null))),cljs.core.cst$kw$doc,"Returns a proxy that wraps writer, capitalizing the first word"], null)),cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta29612], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint29611.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint29611.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29611";

cljs.pprint.t_cljs$pprint29611.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__20854__auto__,writer__20855__auto__,opt__20856__auto__){
return cljs.core._write(writer__20855__auto__,"cljs.pprint/t_cljs$pprint29611");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint29611 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint29611(init_cap_writer__$1,writer__$1,capped__$1,meta29612){
return (new cljs.pprint.t_cljs$pprint29611(init_cap_writer__$1,writer__$1,capped__$1,meta29612));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint29611(cljs$pprint$init_cap_writer,writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_29618 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_29618;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || (cljs.core._STAR_out_STAR_.cljs$core$IDeref$))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__29622 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29622) : cljs.core.deref.call(null,G__29622));
})()))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_29625 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_29626 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_29627 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__29624 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29624) : cljs.core.deref.call(null,G__29624));
})()));
var space_count_29628 = (((current_29627 < colnum_29625))?(colnum_29625 - current_29627):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_29626,(0)))?(0):(colinc_29626 - cljs.core.rem((current_29627 - colnum_29625),colinc_29626))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_29628," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_29631 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_29632 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_29633 = (colrel_29631 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1((function (){var G__29630 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__29630) : cljs.core.deref.call(null,G__29630));
})())));
var offset_29634 = (((colinc_29632 > (0)))?cljs.core.rem(start_col_29633,colinc_29632):(0));
var space_count_29635 = (colrel_29631 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_29634))?(0):(colinc_29632 - offset_29634)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_29635," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__29641 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29641,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29641,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29644_29646 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29645_29647 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29645_29647;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29644_29646;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__29648_SHARP_,p2__29649_SHARP_,p3__29650_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__29648_SHARP_,p2__29649_SHARP_,p3__29650_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__29651_SHARP_,p2__29652_SHARP_,p3__29653_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__29651_SHARP_,p2__29652_SHARP_,p3__29653_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__29654_SHARP_,p2__29655_SHARP_,p3__29656_SHARP_){
return cljs.pprint.format_integer((10),p1__29654_SHARP_,p2__29655_SHARP_,p3__29656_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__29657_SHARP_,p2__29658_SHARP_,p3__29659_SHARP_){
return cljs.pprint.format_integer((2),p1__29657_SHARP_,p2__29658_SHARP_,p3__29659_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__29660_SHARP_,p2__29661_SHARP_,p3__29662_SHARP_){
return cljs.pprint.format_integer((8),p1__29660_SHARP_,p2__29661_SHARP_,p3__29662_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__29663_SHARP_,p2__29664_SHARP_,p3__29665_SHARP_){
return cljs.pprint.format_integer((16),p1__29663_SHARP_,p2__29664_SHARP_,p3__29665_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__29666_SHARP_,p2__29667_SHARP_,p3__29668_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__29666_SHARP_),p1__29666_SHARP_,p2__29667_SHARP_,p3__29668_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__20236__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__20236__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__20236__auto__;
}
})())){
return (function (p1__29669_SHARP_,p2__29670_SHARP_,p3__29671_SHARP_){
return cljs.pprint.format_old_roman(p1__29669_SHARP_,p2__29670_SHARP_,p3__29671_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29672_SHARP_,p2__29673_SHARP_,p3__29674_SHARP_){
return cljs.pprint.format_new_roman(p1__29672_SHARP_,p2__29673_SHARP_,p3__29674_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29675_SHARP_,p2__29676_SHARP_,p3__29677_SHARP_){
return cljs.pprint.format_ordinal_english(p1__29675_SHARP_,p2__29676_SHARP_,p3__29677_SHARP_);
});
} else {
return (function (p1__29678_SHARP_,p2__29679_SHARP_,p3__29680_SHARP_){
return cljs.pprint.format_cardinal_english(p1__29678_SHARP_,p2__29679_SHARP_,p3__29680_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__29690 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29690,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29690,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__21163__auto___29708 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_29709 = (0);
while(true){
if((i_29709 < n__21163__auto___29708)){
cljs.pprint.prn();

var G__29710 = (i_29709 + (1));
i_29709 = G__29710;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_29711 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_29711 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__21163__auto___29712 = (cnt_29711 - (1));
var i_29713 = (0);
while(true){
if((i_29713 < n__21163__auto___29712)){
cljs.pprint.prn();

var G__29714 = (i_29713 + (1));
i_29713 = G__29714;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__21163__auto___29715 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_29716 = (0);
while(true){
if((i_29716 < n__21163__auto___29715)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\f"], 0));

var G__29717 = (i_29716 + (1));
i_29716 = G__29717;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29681_SHARP_,p2__29682_SHARP_,p3__29683_SHARP_){
return cljs.pprint.relative_tabulation(p1__29681_SHARP_,p2__29682_SHARP_,p3__29683_SHARP_);
});
} else {
return (function (p1__29684_SHARP_,p2__29685_SHARP_,p3__29686_SHARP_){
return cljs.pprint.absolute_tabulation(p1__29684_SHARP_,p2__29685_SHARP_,p3__29686_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__29693 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29693,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29693,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__29696 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29696,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29696,(1),null);
var vec__29699 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29699,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29699,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__20236__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__20236__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__20236__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__29687_SHARP_,p2__29688_SHARP_,p3__29689_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__29687_SHARP_,p2__29688_SHARP_,p3__29689_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__20236__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__20236__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__20236__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__20236__auto__ = arg1;
if(cljs.core.truth_(and__20236__auto__)){
var and__20236__auto____$1 = arg2;
if(cljs.core.truth_(and__20236__auto____$1)){
return arg3;
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__20236__auto__ = arg1;
if(cljs.core.truth_(and__20236__auto__)){
return arg2;
} else {
return and__20236__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__20248__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__29702 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29702,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29702,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__29705 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29705,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29705,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null,cljs.core.cst$kw$parameter_DASH_from_DASH_args,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__29718){
var vec__29722 = p__29718;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__29725){
var vec__29729 = p__29725;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29729,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29729,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__29736){
var vec__29737 = p__29736;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29737,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29737,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29737,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error([cljs.core.str("Flag \""),cljs.core.str(cljs.core.first(s__$1)),cljs.core.str("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__20236__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__20236__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__20236__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str("\"@\" is an illegal flag for format directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__20236__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__20236__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__20236__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str("\":\" is an illegal flag for format directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__20236__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__20236__auto__){
var and__20236__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__20236__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__20236__auto____$1;
}
} else {
return and__20236__auto__;
}
})())){
return cljs.pprint.format_error([cljs.core.str("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),(function (){var x__20586__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__20587__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__20586__auto__ < y__20587__auto__) ? x__20586__auto__ : y__20587__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.array_seq([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__29740_SHARP_,p2__29741_SHARP_){
var val = cljs.core.first(p1__29740_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__29741_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error([cljs.core.str("Parameter "),cljs.core.str(cljs.core.name(cljs.core.first(p2__29741_SHARP_))),cljs.core.str(" has bad type in directive \""),cljs.core.str(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\": "),cljs.core.str(cljs.core.type(val))].join(''),cljs.core.second(p1__29740_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__21028__auto__ = (function cljs$pprint$map_params_$_iter__29775(s__29776){
return (new cljs.core.LazySeq(null,(function (){
var s__29776__$1 = s__29776;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__29776__$1);
if(temp__4657__auto__){
var s__29776__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29776__$2)){
var c__21026__auto__ = cljs.core.chunk_first(s__29776__$2);
var size__21027__auto__ = cljs.core.count(c__21026__auto__);
var b__29778 = cljs.core.chunk_buffer(size__21027__auto__);
if((function (){var i__29777 = (0);
while(true){
if((i__29777 < size__21027__auto__)){
var vec__29793 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21026__auto__,i__29777);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29793,(0),null);
var vec__29796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29793,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29796,(0),null);
cljs.core.chunk_append(b__29778,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__29805 = (i__29777 + (1));
i__29777 = G__29805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29778),cljs$pprint$map_params_$_iter__29775(cljs.core.chunk_rest(s__29776__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29778),null);
}
} else {
var vec__29799 = cljs.core.first(s__29776__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29799,(0),null);
var vec__29802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29799,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29802,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__29775(cljs.core.rest(s__29776__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21028__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29742_SHARP_,p2__29743_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__29742_SHARP_,p2__29743_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29744_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__29744_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__29818 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29818,(0),null);
var vec__29821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29818,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29821,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29821,(1),null);
var vec__29824 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29824,(0),null);
var vec__29827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29824,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29827,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29827,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29827,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error([cljs.core.str("Directive \""),cljs.core.str(directive),cljs.core.str("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__20236__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__20236__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__20236__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__29836 = (function (){var G__29839 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__29840 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__29841 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__29839,G__29840,G__29841) : cljs.pprint.collect_clauses.call(null,G__29839,G__29840,G__29841));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29836,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29836,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__29852){
var vec__29853 = p__29852;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29853,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29853,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29853,(2),null);
var vec__29856 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29856,(0),null);
var vec__29859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29856,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29859,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29859,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29859,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29859,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,cljs.core.PersistentArrayMap.fromArray([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params], true, false)], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else)){
if(cljs.core.truth_(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_29867 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_29867){
return (function (p__29868){
var vec__29869 = p__29868;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29869,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29869,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_29867))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_29867;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__20248__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
var or__20248__auto____$1 = cljs.core.some(cljs$pprint$needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__20248__auto____$1)){
return or__20248__auto____$1;
} else {
return cljs.core.some(cljs$pprint$needs_pretty,cljs.core.first(cljs.core.cst$kw$else.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__29872 = cljs.core.next(format__$1);
format__$1 = G__29872;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var args29873 = [];
var len__21323__auto___29883 = arguments.length;
var i__21324__auto___29884 = (0);
while(true){
if((i__21324__auto___29884 < len__21323__auto___29883)){
args29873.push((arguments[i__21324__auto___29884]));

var G__29885 = (i__21324__auto___29884 + (1));
i__21324__auto___29884 = G__29885;
continue;
} else {
}
break;
}

var G__29875 = args29873.length;
switch (G__29875) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29873.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__20236__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__20236__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__20236__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_29876 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str(sb)].join('');
} else {
if(stream === true){
return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_29876;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__29877 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29877,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29877,(1),null);
var vec__29880 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29880,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29880,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__29888 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__29888) : cljs.pprint.reader_macros.call(null,G__29888));
})();
if(cljs.core.truth_((function (){var and__20236__auto__ = macro_char;
if(cljs.core.truth_(and__20236__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__20236__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29892_29895 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29893_29896 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count29894_29897 = (0);
var alis_29898__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29894_29897 < cljs.core._STAR_print_length_STAR_))){
if(alis_29898__$1){
cljs.pprint.write_out(cljs.core.first(alis_29898__$1));

if(cljs.core.next(alis_29898__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__29899 = (length_count29894_29897 + (1));
var G__29900 = cljs.core.next(alis_29898__$1);
length_count29894_29897 = G__29899;
alis_29898__$1 = G__29900;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29893_29896;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29892_29895;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29904_29907 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29905_29908 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count29906_29909 = (0);
var aseq_29910 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29906_29909 < cljs.core._STAR_print_length_STAR_))){
if(aseq_29910){
cljs.pprint.write_out(cljs.core.first(aseq_29910));

if(cljs.core.next(aseq_29910)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__29911 = (length_count29906_29909 + (1));
var G__29912 = cljs.core.next(aseq_29910);
length_count29906_29909 = G__29911;
aseq_29910 = G__29912;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29905_29908;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29904_29907;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__28473__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__){
return (function() { 
var G__29913__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__29913 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__29914__i = 0, G__29914__a = new Array(arguments.length -  0);
while (G__29914__i < G__29914__a.length) {G__29914__a[G__29914__i] = arguments[G__29914__i + 0]; ++G__29914__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__29914__a,0);
} 
return G__29913__delegate.call(this,args__28475__auto__);};
G__29913.cljs$lang$maxFixedArity = 0;
G__29913.cljs$lang$applyTo = (function (arglist__29915){
var args__28475__auto__ = cljs.core.seq(arglist__29915);
return G__29913__delegate(args__28475__auto__);
});
G__29913.cljs$core$IFn$_invoke$arity$variadic = G__29913__delegate;
return G__29913;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29921_29926 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29922_29927 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"{",null,"}");

var length_count29923_29928 = (0);
var aseq_29929 = cljs.core.seq(amap);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29923_29928 < cljs.core._STAR_print_length_STAR_))){
if(aseq_29929){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29924_29930 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29925_29931 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_29929));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_29929)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29925_29931;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29924_29930;
}}


if(cljs.core.next(aseq_29929)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__29932 = (length_count29923_29928 + (1));
var G__29933 = cljs.core.next(aseq_29929);
length_count29923_29928 = G__29932;
aseq_29929 = G__29933;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29922_29927;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29921_29926;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__28473__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__){
return (function() { 
var G__29934__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__29934 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__29935__i = 0, G__29935__a = new Array(arguments.length -  0);
while (G__29935__i < G__29935__a.length) {G__29935__a[G__29935__i] = arguments[G__29935__i + 0]; ++G__29935__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__29935__a,0);
} 
return G__29934__delegate.call(this,args__28475__auto__);};
G__29934.cljs$lang$maxFixedArity = 0;
G__29934.cljs$lang$applyTo = (function (arglist__29936){
var args__28475__auto__ = cljs.core.seq(arglist__29936);
return G__29934__delegate(args__28475__auto__);
});
G__29934.cljs$core$IFn$_invoke$arity$variadic = G__29934__delegate;
return G__29934;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__20248__auto__ = (function (){var temp__4657__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__4657__auto__)){
var match = temp__4657__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str("#<"),cljs.core.str(cljs.pprint.map_ref_type(cljs.core.type(o).name)),cljs.core.str("@"),cljs.core.str(goog.getUid(o)),cljs.core.str(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29941_29945 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29942_29946 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__20236__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || (o.cljs$core$IPending$))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__20236__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__20236__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.deref.call(null,o))));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29942_29946;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29941_29945;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__28473__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__){
return (function() { 
var G__29947__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__29947 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__29948__i = 0, G__29948__a = new Array(arguments.length -  0);
while (G__29948__i < G__29948__a.length) {G__29948__a[G__29948__i] = arguments[G__29948__i + 0]; ++G__29948__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__29948__a,0);
} 
return G__29947__delegate.call(this,args__28475__auto__);};
G__29947.cljs$lang$maxFixedArity = 0;
G__29947.cljs$lang$applyTo = (function (arglist__29949){
var args__28475__auto__ = cljs.core.seq(arglist__29949);
return G__29947__delegate(args__28475__auto__);
});
G__29947.cljs$core$IFn$_invoke$arity$variadic = G__29947__delegate;
return G__29947;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (obj.cljs$core$IDeref$))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__21173__auto__ = (function (){var G__29952 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29952) : cljs.core.atom.call(null,G__29952));
})();
var prefer_table__21174__auto__ = (function (){var G__29953 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29953) : cljs.core.atom.call(null,G__29953));
})();
var method_cache__21175__auto__ = (function (){var G__29954 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29954) : cljs.core.atom.call(null,G__29954));
})();
var cached_hierarchy__21176__auto__ = (function (){var G__29955 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29955) : cljs.core.atom.call(null,G__29955));
})();
var hierarchy__21177__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__21177__auto__,method_table__21173__auto__,prefer_table__21174__auto__,method_cache__21175__auto__,cached_hierarchy__21176__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__29972 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29972,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29972,(1),null);
var vec__29975 = reference;
var seq__29976 = cljs.core.seq(vec__29975);
var first__29977 = cljs.core.first(seq__29976);
var seq__29976__$1 = cljs.core.next(seq__29976);
var keyw = first__29977;
var args = seq__29976__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29978_29988 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29979_29989 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__28473__auto__ = "~w~:i";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args){
return (function() { 
var G__29990__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__29990 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__29991__i = 0, G__29991__a = new Array(arguments.length -  0);
while (G__29991__i < G__29991__a.length) {G__29991__a[G__29991__i] = arguments[G__29991__i + 0]; ++G__29991__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__29991__a,0);
} 
return G__29990__delegate.call(this,args__28475__auto__);};
G__29990.cljs$lang$maxFixedArity = 0;
G__29990.cljs$lang$applyTo = (function (arglist__29992){
var args__28475__auto__ = cljs.core.seq(arglist__29992);
return G__29990__delegate(args__28475__auto__);
});
G__29990.cljs$core$IFn$_invoke$arity$variadic = G__29990__delegate;
return G__29990;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args))
})().call(null,keyw);

var args_29993__$1 = args;
while(true){
if(cljs.core.seq(args_29993__$1)){
(function (){var format_in__28473__auto__ = " ";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (args_29993__$1,format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args){
return (function() { 
var G__29994__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__29994 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__29995__i = 0, G__29995__a = new Array(arguments.length -  0);
while (G__29995__i < G__29995__a.length) {G__29995__a[G__29995__i] = arguments[G__29995__i + 0]; ++G__29995__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__29995__a,0);
} 
return G__29994__delegate.call(this,args__28475__auto__);};
G__29994.cljs$lang$maxFixedArity = 0;
G__29994.cljs$lang$applyTo = (function (arglist__29996){
var args__28475__auto__ = cljs.core.seq(arglist__29996);
return G__29994__delegate(args__28475__auto__);
});
G__29994.cljs$core$IFn$_invoke$arity$variadic = G__29994__delegate;
return G__29994;
})()
;
;})(args_29993__$1,format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args))
})().call(null);

var arg_29997 = cljs.core.first(args_29993__$1);
if(cljs.core.sequential_QMARK_(arg_29997)){
var vec__29980_29998 = cljs.pprint.brackets(arg_29997);
var start_29999__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29980_29998,(0),null);
var end_30000__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29980_29998,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_29983_30001 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_29984_30002 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_29999__$1,null,end_30000__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_29997),(3))) && ((cljs.core.second(arg_29997) instanceof cljs.core.Keyword))){
var vec__29985_30003 = arg_29997;
var ns_30004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29985_30003,(0),null);
var kw_30005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29985_30003,(1),null);
var lis_30006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29985_30003,(2),null);
(function (){var format_in__28473__auto__ = "~w ~w ";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (args_29993__$1,format_in__28473__auto__,cf__28474__auto__,vec__29985_30003,ns_30004,kw_30005,lis_30006,_STAR_current_level_STAR_29983_30001,_STAR_current_length_STAR_29984_30002,vec__29980_29998,start_29999__$1,end_30000__$1,arg_29997,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args){
return (function() { 
var G__30007__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30007 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30008__i = 0, G__30008__a = new Array(arguments.length -  0);
while (G__30008__i < G__30008__a.length) {G__30008__a[G__30008__i] = arguments[G__30008__i + 0]; ++G__30008__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30008__a,0);
} 
return G__30007__delegate.call(this,args__28475__auto__);};
G__30007.cljs$lang$maxFixedArity = 0;
G__30007.cljs$lang$applyTo = (function (arglist__30009){
var args__28475__auto__ = cljs.core.seq(arglist__30009);
return G__30007__delegate(args__28475__auto__);
});
G__30007.cljs$core$IFn$_invoke$arity$variadic = G__30007__delegate;
return G__30007;
})()
;
;})(args_29993__$1,format_in__28473__auto__,cf__28474__auto__,vec__29985_30003,ns_30004,kw_30005,lis_30006,_STAR_current_level_STAR_29983_30001,_STAR_current_length_STAR_29984_30002,vec__29980_29998,start_29999__$1,end_30000__$1,arg_29997,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args))
})().call(null,ns_30004,kw_30005);

if(cljs.core.sequential_QMARK_(lis_30006)){
(function (){var format_in__28473__auto__ = ((cljs.core.vector_QMARK_(lis_30006))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (args_29993__$1,format_in__28473__auto__,cf__28474__auto__,vec__29985_30003,ns_30004,kw_30005,lis_30006,_STAR_current_level_STAR_29983_30001,_STAR_current_length_STAR_29984_30002,vec__29980_29998,start_29999__$1,end_30000__$1,arg_29997,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args){
return (function() { 
var G__30010__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30010 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30011__i = 0, G__30011__a = new Array(arguments.length -  0);
while (G__30011__i < G__30011__a.length) {G__30011__a[G__30011__i] = arguments[G__30011__i + 0]; ++G__30011__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30011__a,0);
} 
return G__30010__delegate.call(this,args__28475__auto__);};
G__30010.cljs$lang$maxFixedArity = 0;
G__30010.cljs$lang$applyTo = (function (arglist__30012){
var args__28475__auto__ = cljs.core.seq(arglist__30012);
return G__30010__delegate(args__28475__auto__);
});
G__30010.cljs$core$IFn$_invoke$arity$variadic = G__30010__delegate;
return G__30010;
})()
;
;})(args_29993__$1,format_in__28473__auto__,cf__28474__auto__,vec__29985_30003,ns_30004,kw_30005,lis_30006,_STAR_current_level_STAR_29983_30001,_STAR_current_length_STAR_29984_30002,vec__29980_29998,start_29999__$1,end_30000__$1,arg_29997,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args))
})().call(null,lis_30006);
} else {
cljs.pprint.write_out(lis_30006);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__28473__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (args_29993__$1,format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_29983_30001,_STAR_current_length_STAR_29984_30002,vec__29980_29998,start_29999__$1,end_30000__$1,arg_29997,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args){
return (function() { 
var G__30013__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30013 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30014__i = 0, G__30014__a = new Array(arguments.length -  0);
while (G__30014__i < G__30014__a.length) {G__30014__a[G__30014__i] = arguments[G__30014__i + 0]; ++G__30014__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30014__a,0);
} 
return G__30013__delegate.call(this,args__28475__auto__);};
G__30013.cljs$lang$maxFixedArity = 0;
G__30013.cljs$lang$applyTo = (function (arglist__30015){
var args__28475__auto__ = cljs.core.seq(arglist__30015);
return G__30013__delegate(args__28475__auto__);
});
G__30013.cljs$core$IFn$_invoke$arity$variadic = G__30013__delegate;
return G__30013;
})()
;
;})(args_29993__$1,format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_29983_30001,_STAR_current_length_STAR_29984_30002,vec__29980_29998,start_29999__$1,end_30000__$1,arg_29997,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args))
})(),arg_29997);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29984_30002;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29983_30001;
}}


if(cljs.core.next(args_29993__$1)){
(function (){var format_in__28473__auto__ = "~_";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (args_29993__$1,format_in__28473__auto__,cf__28474__auto__,vec__29980_29998,start_29999__$1,end_30000__$1,arg_29997,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args){
return (function() { 
var G__30016__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30016 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30017__i = 0, G__30017__a = new Array(arguments.length -  0);
while (G__30017__i < G__30017__a.length) {G__30017__a[G__30017__i] = arguments[G__30017__i + 0]; ++G__30017__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30017__a,0);
} 
return G__30016__delegate.call(this,args__28475__auto__);};
G__30016.cljs$lang$maxFixedArity = 0;
G__30016.cljs$lang$applyTo = (function (arglist__30018){
var args__28475__auto__ = cljs.core.seq(arglist__30018);
return G__30016__delegate(args__28475__auto__);
});
G__30016.cljs$core$IFn$_invoke$arity$variadic = G__30016__delegate;
return G__30016;
})()
;
;})(args_29993__$1,format_in__28473__auto__,cf__28474__auto__,vec__29980_29998,start_29999__$1,end_30000__$1,arg_29997,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out(arg_29997);

if(cljs.core.next(args_29993__$1)){
(function (){var format_in__28473__auto__ = "~:_";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (args_29993__$1,format_in__28473__auto__,cf__28474__auto__,arg_29997,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args){
return (function() { 
var G__30019__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30019 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30020__i = 0, G__30020__a = new Array(arguments.length -  0);
while (G__30020__i < G__30020__a.length) {G__30020__a[G__30020__i] = arguments[G__30020__i + 0]; ++G__30020__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30020__a,0);
} 
return G__30019__delegate.call(this,args__28475__auto__);};
G__30019.cljs$lang$maxFixedArity = 0;
G__30019.cljs$lang$applyTo = (function (arglist__30021){
var args__28475__auto__ = cljs.core.seq(arglist__30021);
return G__30019__delegate(args__28475__auto__);
});
G__30019.cljs$core$IFn$_invoke$arity$variadic = G__30019__delegate;
return G__30019;
})()
;
;})(args_29993__$1,format_in__28473__auto__,cf__28474__auto__,arg_29997,_STAR_current_level_STAR_29978_29988,_STAR_current_length_STAR_29979_29989,vec__29972,start,end,vec__29975,seq__29976,first__29977,seq__29976__$1,keyw,args))
})().call(null);
} else {
}
}

var G__30022 = cljs.core.next(args_29993__$1);
args_29993__$1 = G__30022;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_29979_29989;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_29978_29988;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__30034 = alis;
var seq__30035 = cljs.core.seq(vec__30034);
var first__30036 = cljs.core.first(seq__30035);
var seq__30035__$1 = cljs.core.next(seq__30035);
var ns_sym = first__30036;
var first__30036__$1 = cljs.core.first(seq__30035__$1);
var seq__30035__$2 = cljs.core.next(seq__30035__$1);
var ns_name = first__30036__$1;
var stuff = seq__30035__$2;
var vec__30037 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30037,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30037,(1),null);
var vec__30040 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30040,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30040,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_30043_30045 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_30044_30046 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__28473__auto__ = "~w ~1I~@_~w";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30043_30045,_STAR_current_length_STAR_30044_30046,vec__30034,seq__30035,first__30036,seq__30035__$1,ns_sym,first__30036__$1,seq__30035__$2,ns_name,stuff,vec__30037,doc_str,stuff__$1,vec__30040,attr_map,references){
return (function() { 
var G__30047__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30047 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30048__i = 0, G__30048__a = new Array(arguments.length -  0);
while (G__30048__i < G__30048__a.length) {G__30048__a[G__30048__i] = arguments[G__30048__i + 0]; ++G__30048__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30048__a,0);
} 
return G__30047__delegate.call(this,args__28475__auto__);};
G__30047.cljs$lang$maxFixedArity = 0;
G__30047.cljs$lang$applyTo = (function (arglist__30049){
var args__28475__auto__ = cljs.core.seq(arglist__30049);
return G__30047__delegate(args__28475__auto__);
});
G__30047.cljs$core$IFn$_invoke$arity$variadic = G__30047__delegate;
return G__30047;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30043_30045,_STAR_current_length_STAR_30044_30046,vec__30034,seq__30035,first__30036,seq__30035__$1,ns_sym,first__30036__$1,seq__30035__$2,ns_name,stuff,vec__30037,doc_str,stuff__$1,vec__30040,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__20248__auto__ = doc_str;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
var or__20248__auto____$1 = attr_map;
if(cljs.core.truth_(or__20248__auto____$1)){
return or__20248__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
(function (){var format_in__28473__auto__ = "~@:_";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30043_30045,_STAR_current_length_STAR_30044_30046,vec__30034,seq__30035,first__30036,seq__30035__$1,ns_sym,first__30036__$1,seq__30035__$2,ns_name,stuff,vec__30037,doc_str,stuff__$1,vec__30040,attr_map,references){
return (function() { 
var G__30050__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30050 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30051__i = 0, G__30051__a = new Array(arguments.length -  0);
while (G__30051__i < G__30051__a.length) {G__30051__a[G__30051__i] = arguments[G__30051__i + 0]; ++G__30051__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30051__a,0);
} 
return G__30050__delegate.call(this,args__28475__auto__);};
G__30050.cljs$lang$maxFixedArity = 0;
G__30050.cljs$lang$applyTo = (function (arglist__30052){
var args__28475__auto__ = cljs.core.seq(arglist__30052);
return G__30050__delegate(args__28475__auto__);
});
G__30050.cljs$core$IFn$_invoke$arity$variadic = G__30050__delegate;
return G__30050;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30043_30045,_STAR_current_length_STAR_30044_30046,vec__30034,seq__30035,first__30036,seq__30035__$1,ns_sym,first__30036__$1,seq__30035__$2,ns_name,stuff,vec__30037,doc_str,stuff__$1,vec__30040,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.array_seq([doc_str,(function (){var or__20248__auto__ = attr_map;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__28473__auto__ = "~w~:[~;~:@_~]";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30043_30045,_STAR_current_length_STAR_30044_30046,vec__30034,seq__30035,first__30036,seq__30035__$1,ns_sym,first__30036__$1,seq__30035__$2,ns_name,stuff,vec__30037,doc_str,stuff__$1,vec__30040,attr_map,references){
return (function() { 
var G__30053__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30053 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30054__i = 0, G__30054__a = new Array(arguments.length -  0);
while (G__30054__i < G__30054__a.length) {G__30054__a[G__30054__i] = arguments[G__30054__i + 0]; ++G__30054__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30054__a,0);
} 
return G__30053__delegate.call(this,args__28475__auto__);};
G__30053.cljs$lang$maxFixedArity = 0;
G__30053.cljs$lang$applyTo = (function (arglist__30055){
var args__28475__auto__ = cljs.core.seq(arglist__30055);
return G__30053__delegate(args__28475__auto__);
});
G__30053.cljs$core$IFn$_invoke$arity$variadic = G__30053__delegate;
return G__30053;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30043_30045,_STAR_current_length_STAR_30044_30046,vec__30034,seq__30035,first__30036,seq__30035__$1,ns_sym,first__30036__$1,seq__30035__$2,ns_name,stuff,vec__30037,doc_str,stuff__$1,vec__30040,attr_map,references))
})().call(null,attr_map,cljs.core.seq(references));
} else {
}

var references_30056__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_30056__$1));

var temp__4657__auto___30057 = cljs.core.next(references_30056__$1);
if(temp__4657__auto___30057){
var references_30058__$2 = temp__4657__auto___30057;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__30059 = references_30058__$2;
references_30056__$1 = G__30059;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_30044_30046;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_30043_30045;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__28473__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__){
return (function() { 
var G__30060__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30060 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30061__i = 0, G__30061__a = new Array(arguments.length -  0);
while (G__30061__i < G__30061__a.length) {G__30061__a[G__30061__i] = arguments[G__30061__i + 0]; ++G__30061__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30061__a,0);
} 
return G__30060__delegate.call(this,args__28475__auto__);};
G__30060.cljs$lang$maxFixedArity = 0;
G__30060.cljs$lang$applyTo = (function (arglist__30062){
var args__28475__auto__ = cljs.core.seq(arglist__30062);
return G__30060__delegate(args__28475__auto__);
});
G__30060.cljs$core$IFn$_invoke$arity$variadic = G__30060__delegate;
return G__30060;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__28473__auto__ = " ~_";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__){
return (function() { 
var G__30063__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30063 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30064__i = 0, G__30064__a = new Array(arguments.length -  0);
while (G__30064__i < G__30064__a.length) {G__30064__a[G__30064__i] = arguments[G__30064__i + 0]; ++G__30064__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30064__a,0);
} 
return G__30063__delegate.call(this,args__28475__auto__);};
G__30063.cljs$lang$maxFixedArity = 0;
G__30063.cljs$lang$applyTo = (function (arglist__30065){
var args__28475__auto__ = cljs.core.seq(arglist__30065);
return G__30063__delegate(args__28475__auto__);
});
G__30063.cljs$core$IFn$_invoke$arity$variadic = G__30063__delegate;
return G__30063;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__))
})().call(null);
} else {
(function (){var format_in__28473__auto__ = " ~@_";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__){
return (function() { 
var G__30066__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30066 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30067__i = 0, G__30067__a = new Array(arguments.length -  0);
while (G__30067__i < G__30067__a.length) {G__30067__a[G__30067__i] = arguments[G__30067__i + 0]; ++G__30067__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30067__a,0);
} 
return G__30066__delegate.call(this,args__28475__auto__);};
G__30066.cljs$lang$maxFixedArity = 0;
G__30066.cljs$lang$applyTo = (function (arglist__30068){
var args__28475__auto__ = cljs.core.seq(arglist__30068);
return G__30066__delegate(args__28475__auto__);
});
G__30066.cljs$core$IFn$_invoke$arity$variadic = G__30066__delegate;
return G__30066;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__))
})().call(null);
}

return (function (){var format_in__28473__auto__ = "~{~w~^ ~_~}";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__){
return (function() { 
var G__30069__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30069 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30070__i = 0, G__30070__a = new Array(arguments.length -  0);
while (G__30070__i < G__30070__a.length) {G__30070__a[G__30070__i] = arguments[G__30070__i + 0]; ++G__30070__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30070__a,0);
} 
return G__30069__delegate.call(this,args__28475__auto__);};
G__30069.cljs$lang$maxFixedArity = 0;
G__30069.cljs$lang$applyTo = (function (arglist__30071){
var args__28475__auto__ = cljs.core.seq(arglist__30071);
return G__30069__delegate(args__28475__auto__);
});
G__30069.cljs$core$IFn$_invoke$arity$variadic = G__30069__delegate;
return G__30069;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
return (function (){var format_in__28473__auto__ = " ~_~{~w~^ ~_~}";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__){
return (function() { 
var G__30072__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30072 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30073__i = 0, G__30073__a = new Array(arguments.length -  0);
while (G__30073__i < G__30073__a.length) {G__30073__a[G__30073__i] = arguments[G__30073__i + 0]; ++G__30073__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30073__a,0);
} 
return G__30072__delegate.call(this,args__28475__auto__);};
G__30072.cljs$lang$maxFixedArity = 0;
G__30072.cljs$lang$applyTo = (function (arglist__30074){
var args__28475__auto__ = cljs.core.seq(arglist__30074);
return G__30072__delegate(args__28475__auto__);
});
G__30072.cljs$core$IFn$_invoke$arity$variadic = G__30072__delegate;
return G__30072;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__30086 = alis;
var seq__30087 = cljs.core.seq(vec__30086);
var first__30088 = cljs.core.first(seq__30087);
var seq__30087__$1 = cljs.core.next(seq__30087);
var defn_sym = first__30088;
var first__30088__$1 = cljs.core.first(seq__30087__$1);
var seq__30087__$2 = cljs.core.next(seq__30087__$1);
var defn_name = first__30088__$1;
var stuff = seq__30087__$2;
var vec__30089 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30089,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30089,(1),null);
var vec__30092 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30092,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30092,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_30095_30097 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_30096_30098 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__28473__auto__ = "~w ~1I~@_~w";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30095_30097,_STAR_current_length_STAR_30096_30098,vec__30086,seq__30087,first__30088,seq__30087__$1,defn_sym,first__30088__$1,seq__30087__$2,defn_name,stuff,vec__30089,doc_str,stuff__$1,vec__30092,attr_map,stuff__$2){
return (function() { 
var G__30099__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30099 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30100__i = 0, G__30100__a = new Array(arguments.length -  0);
while (G__30100__i < G__30100__a.length) {G__30100__a[G__30100__i] = arguments[G__30100__i + 0]; ++G__30100__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30100__a,0);
} 
return G__30099__delegate.call(this,args__28475__auto__);};
G__30099.cljs$lang$maxFixedArity = 0;
G__30099.cljs$lang$applyTo = (function (arglist__30101){
var args__28475__auto__ = cljs.core.seq(arglist__30101);
return G__30099__delegate(args__28475__auto__);
});
G__30099.cljs$core$IFn$_invoke$arity$variadic = G__30099__delegate;
return G__30099;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30095_30097,_STAR_current_length_STAR_30096_30098,vec__30086,seq__30087,first__30088,seq__30087__$1,defn_sym,first__30088__$1,seq__30087__$2,defn_name,stuff,vec__30089,doc_str,stuff__$1,vec__30092,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__28473__auto__ = " ~_~w";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30095_30097,_STAR_current_length_STAR_30096_30098,vec__30086,seq__30087,first__30088,seq__30087__$1,defn_sym,first__30088__$1,seq__30087__$2,defn_name,stuff,vec__30089,doc_str,stuff__$1,vec__30092,attr_map,stuff__$2){
return (function() { 
var G__30102__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30102 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30103__i = 0, G__30103__a = new Array(arguments.length -  0);
while (G__30103__i < G__30103__a.length) {G__30103__a[G__30103__i] = arguments[G__30103__i + 0]; ++G__30103__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30103__a,0);
} 
return G__30102__delegate.call(this,args__28475__auto__);};
G__30102.cljs$lang$maxFixedArity = 0;
G__30102.cljs$lang$applyTo = (function (arglist__30104){
var args__28475__auto__ = cljs.core.seq(arglist__30104);
return G__30102__delegate(args__28475__auto__);
});
G__30102.cljs$core$IFn$_invoke$arity$variadic = G__30102__delegate;
return G__30102;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30095_30097,_STAR_current_length_STAR_30096_30098,vec__30086,seq__30087,first__30088,seq__30087__$1,defn_sym,first__30088__$1,seq__30087__$2,defn_name,stuff,vec__30089,doc_str,stuff__$1,vec__30092,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__28473__auto__ = " ~_~w";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30095_30097,_STAR_current_length_STAR_30096_30098,vec__30086,seq__30087,first__30088,seq__30087__$1,defn_sym,first__30088__$1,seq__30087__$2,defn_name,stuff,vec__30089,doc_str,stuff__$1,vec__30092,attr_map,stuff__$2){
return (function() { 
var G__30105__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30105 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30106__i = 0, G__30106__a = new Array(arguments.length -  0);
while (G__30106__i < G__30106__a.length) {G__30106__a[G__30106__i] = arguments[G__30106__i + 0]; ++G__30106__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30106__a,0);
} 
return G__30105__delegate.call(this,args__28475__auto__);};
G__30105.cljs$lang$maxFixedArity = 0;
G__30105.cljs$lang$applyTo = (function (arglist__30107){
var args__28475__auto__ = cljs.core.seq(arglist__30107);
return G__30105__delegate(args__28475__auto__);
});
G__30105.cljs$core$IFn$_invoke$arity$variadic = G__30105__delegate;
return G__30105;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30095_30097,_STAR_current_length_STAR_30096_30098,vec__30086,seq__30087,first__30088,seq__30087__$1,defn_sym,first__30088__$1,seq__30087__$2,defn_name,stuff,vec__30089,doc_str,stuff__$1,vec__30092,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__20248__auto__ = doc_str;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__20248__auto__ = doc_str;
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_30096_30098;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_30095_30097;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_30113_30118 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_30114_30119 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count30115_30120 = (0);
var binding_30121 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count30115_30120 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_30121)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_30116_30122 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_30117_30123 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_30121));

if(cljs.core.next(binding_30121)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_30121));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_30117_30123;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_30116_30122;
}}


if(cljs.core.next(cljs.core.rest(binding_30121))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__30124 = (length_count30115_30120 + (1));
var G__30125 = cljs.core.next(cljs.core.rest(binding_30121));
length_count30115_30120 = G__30124;
binding_30121 = G__30125;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_30114_30119;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_30113_30118;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_30128_30130 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_30129_30131 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
(function (){var format_in__28473__auto__ = "~w ~1I~@_";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30128_30130,_STAR_current_length_STAR_30129_30131,base_sym){
return (function() { 
var G__30132__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30132 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30133__i = 0, G__30133__a = new Array(arguments.length -  0);
while (G__30133__i < G__30133__a.length) {G__30133__a[G__30133__i] = arguments[G__30133__i + 0]; ++G__30133__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30133__a,0);
} 
return G__30132__delegate.call(this,args__28475__auto__);};
G__30132.cljs$lang$maxFixedArity = 0;
G__30132.cljs$lang$applyTo = (function (arglist__30134){
var args__28475__auto__ = cljs.core.seq(arglist__30134);
return G__30132__delegate(args__28475__auto__);
});
G__30132.cljs$core$IFn$_invoke$arity$variadic = G__30132__delegate;
return G__30132;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30128_30130,_STAR_current_length_STAR_30129_30131,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

(function (){var format_in__28473__auto__ = " ~_~{~w~^ ~_~}";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30128_30130,_STAR_current_length_STAR_30129_30131,base_sym){
return (function() { 
var G__30135__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30135 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30136__i = 0, G__30136__a = new Array(arguments.length -  0);
while (G__30136__i < G__30136__a.length) {G__30136__a[G__30136__i] = arguments[G__30136__i + 0]; ++G__30136__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30136__a,0);
} 
return G__30135__delegate.call(this,args__28475__auto__);};
G__30135.cljs$lang$maxFixedArity = 0;
G__30135.cljs$lang$applyTo = (function (arglist__30137){
var args__28475__auto__ = cljs.core.seq(arglist__30137);
return G__30135__delegate(args__28475__auto__);
});
G__30135.cljs$core$IFn$_invoke$arity$variadic = G__30135__delegate;
return G__30135;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30128_30130,_STAR_current_length_STAR_30129_30131,base_sym))
})().call(null,cljs.core.next(cljs.core.rest(alis)));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_30129_30131;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_30128_30130;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__28473__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__){
return (function() { 
var G__30138__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30138 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30139__i = 0, G__30139__a = new Array(arguments.length -  0);
while (G__30139__i < G__30139__a.length) {G__30139__a[G__30139__i] = arguments[G__30139__i + 0]; ++G__30139__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30139__a,0);
} 
return G__30138__delegate.call(this,args__28475__auto__);};
G__30138.cljs$lang$maxFixedArity = 0;
G__30138.cljs$lang$applyTo = (function (arglist__30140){
var args__28475__auto__ = cljs.core.seq(arglist__30140);
return G__30138__delegate(args__28475__auto__);
});
G__30138.cljs$core$IFn$_invoke$arity$variadic = G__30138__delegate;
return G__30138;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_30146_30151 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_30147_30152 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count30148_30153 = (0);
var alis_30154__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count30148_30153 < cljs.core._STAR_print_length_STAR_))){
if(alis_30154__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_30149_30155 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_30150_30156 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_30154__$1));

if(cljs.core.next(alis_30154__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_30154__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_30150_30156;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_30149_30155;
}}


if(cljs.core.next(cljs.core.rest(alis_30154__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__30157 = (length_count30148_30153 + (1));
var G__30158 = cljs.core.next(cljs.core.rest(alis_30154__$1));
length_count30148_30153 = G__30157;
alis_30154__$1 = G__30158;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_30147_30152;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_30146_30151;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_30164_30169 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_30165_30170 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__28473__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30164_30169,_STAR_current_length_STAR_30165_30170){
return (function() { 
var G__30171__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30171 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30172__i = 0, G__30172__a = new Array(arguments.length -  0);
while (G__30172__i < G__30172__a.length) {G__30172__a[G__30172__i] = arguments[G__30172__i + 0]; ++G__30172__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30172__a,0);
} 
return G__30171__delegate.call(this,args__28475__auto__);};
G__30171.cljs$lang$maxFixedArity = 0;
G__30171.cljs$lang$applyTo = (function (arglist__30173){
var args__28475__auto__ = cljs.core.seq(arglist__30173);
return G__30171__delegate(args__28475__auto__);
});
G__30171.cljs$core$IFn$_invoke$arity$variadic = G__30171__delegate;
return G__30171;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__,_STAR_current_level_STAR_30164_30169,_STAR_current_length_STAR_30165_30170))
})(),alis);

var length_count30166_30174 = (0);
var alis_30175__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count30166_30174 < cljs.core._STAR_print_length_STAR_))){
if(alis_30175__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_30167_30176 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_30168_30177 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_30175__$1));

if(cljs.core.next(alis_30175__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_30175__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_30168_30177;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_30167_30176;
}}


if(cljs.core.next(cljs.core.rest(alis_30175__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__30178 = (length_count30166_30174 + (1));
var G__30179 = cljs.core.next(cljs.core.rest(alis_30175__$1));
length_count30166_30174 = G__30178;
alis_30175__$1 = G__30179;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_30165_30170;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_30164_30169;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_30183 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.fromArray([cljs.core.first(args),"%"], true, false):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_30183,args,nlis){
return (function (p1__30180_SHARP_,p2__30181_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__30180_SHARP_,[cljs.core.str("%"),cljs.core.str(p2__30181_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_30183,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{return (function (){var format_in__28473__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__28474__auto__ = ((typeof format_in__28473__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__28473__auto__) : cljs.pprint.cached_compile.call(null,format_in__28473__auto__)):format_in__28473__auto__);
return ((function (format_in__28473__auto__,cf__28474__auto__,_STAR_symbol_map_STAR_30183,args,nlis){
return (function() { 
var G__30184__delegate = function (args__28475__auto__){
var navigator__28476__auto__ = cljs.pprint.init_navigator(args__28475__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__28474__auto__,navigator__28476__auto__);
};
var G__30184 = function (var_args){
var args__28475__auto__ = null;
if (arguments.length > 0) {
var G__30185__i = 0, G__30185__a = new Array(arguments.length -  0);
while (G__30185__i < G__30185__a.length) {G__30185__a[G__30185__i] = arguments[G__30185__i + 0]; ++G__30185__i;}
  args__28475__auto__ = new cljs.core.IndexedSeq(G__30185__a,0);
} 
return G__30184__delegate.call(this,args__28475__auto__);};
G__30184.cljs$lang$maxFixedArity = 0;
G__30184.cljs$lang$applyTo = (function (arglist__30186){
var args__28475__auto__ = cljs.core.seq(arglist__30186);
return G__30184__delegate(args__28475__auto__);
});
G__30184.cljs$core$IFn$_invoke$arity$variadic = G__30184__delegate;
return G__30184;
})()
;
;})(format_in__28473__auto__,cf__28474__auto__,_STAR_symbol_map_STAR_30183,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_30183;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_30190_30193 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_30191_30194 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count30192_30195 = (0);
var alis_30196__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count30192_30195 < cljs.core._STAR_print_length_STAR_))){
if(alis_30196__$1){
cljs.pprint.write_out(cljs.core.first(alis_30196__$1));

if(cljs.core.next(alis_30196__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__30197 = (length_count30192_30195 + (1));
var G__30198 = cljs.core.next(alis_30196__$1);
length_count30192_30195 = G__30197;
alis_30196__$1 = G__30198;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_30191_30194;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_30190_30193;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([(function (){var iter__21028__auto__ = (function cljs$pprint$two_forms_$_iter__30205(s__30206){
return (new cljs.core.LazySeq(null,(function (){
var s__30206__$1 = s__30206;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30206__$1);
if(temp__4657__auto__){
var s__30206__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30206__$2)){
var c__21026__auto__ = cljs.core.chunk_first(s__30206__$2);
var size__21027__auto__ = cljs.core.count(c__21026__auto__);
var b__30208 = cljs.core.chunk_buffer(size__21027__auto__);
if((function (){var i__30207 = (0);
while(true){
if((i__30207 < size__21027__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21026__auto__,i__30207);
cljs.core.chunk_append(b__30208,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__30211 = (i__30207 + (1));
i__30207 = G__30211;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30208),cljs$pprint$two_forms_$_iter__30205(cljs.core.chunk_rest(s__30206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30208),null);
}
} else {
var x = cljs.core.first(s__30206__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__30205(cljs.core.rest(s__30206__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21028__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__30212_SHARP_){
var vec__30216 = p1__30212_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30216,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30216,(1),null);
if(cljs.core.not((function (){var or__20248__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__20248__auto__)){
return or__20248__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__30212_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if,cljs.core.cst$sym$condp,cljs.core.cst$sym$$$,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__4655__auto__ = (function (){var G__30220 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__30220) : cljs.pprint._STAR_code_table_STAR_.call(null,G__30220));
})();
if(cljs.core.truth_(temp__4655__auto__)){
var special_form = temp__4655__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__4655__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__4655__auto__)){
var arg_num = temp__4655__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__21173__auto__ = (function (){var G__30221 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30221) : cljs.core.atom.call(null,G__30221));
})();
var prefer_table__21174__auto__ = (function (){var G__30222 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30222) : cljs.core.atom.call(null,G__30222));
})();
var method_cache__21175__auto__ = (function (){var G__30223 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30223) : cljs.core.atom.call(null,G__30223));
})();
var cached_hierarchy__21176__auto__ = (function (){var G__30224 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30224) : cljs.core.atom.call(null,G__30224));
})();
var hierarchy__21177__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default,hierarchy__21177__auto__,method_table__21173__auto__,prefer_table__21174__auto__,method_cache__21175__auto__,cached_hierarchy__21176__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__20579__auto__ = (0);
var y__20580__auto__ = (width - cljs.core.count(s));
return ((x__20579__auto__ > y__20580__auto__) ? x__20579__auto__ : y__20580__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var args30228 = [];
var len__21323__auto___30254 = arguments.length;
var i__21324__auto___30255 = (0);
while(true){
if((i__21324__auto___30255 < len__21323__auto___30254)){
args30228.push((arguments[i__21324__auto___30255]));

var G__30256 = (i__21324__auto___30255 + (1));
i__21324__auto___30255 = G__30256;
continue;
} else {
}
break;
}

var G__30230 = args30228.length;
switch (G__30230) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30228.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_30231 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_30231){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_30231){
return (function (p1__30225_SHARP_){
return cljs.core.count([cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__30225_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_30231))
,rows));
});})(_STAR_print_newline_STAR_30231))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_30231){
return (function (p1__30226_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__30226_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_30231))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_30231){
return (function (leader,divider,trailer,row){
return [cljs.core.str(leader),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__21028__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_30231){
return (function cljs$pprint$iter__30232(s__30233){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_30231){
return (function (){
var s__30233__$1 = s__30233;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30233__$1);
if(temp__4657__auto__){
var s__30233__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30233__$2)){
var c__21026__auto__ = cljs.core.chunk_first(s__30233__$2);
var size__21027__auto__ = cljs.core.count(c__21026__auto__);
var b__30235 = cljs.core.chunk_buffer(size__21027__auto__);
if((function (){var i__30234 = (0);
while(true){
if((i__30234 < size__21027__auto__)){
var vec__30244 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__21026__auto__,i__30234);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30244,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30244,(1),null);
cljs.core.chunk_append(b__30235,cljs.pprint.add_padding(width,[cljs.core.str(col)].join('')));

var G__30258 = (i__30234 + (1));
i__30234 = G__30258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30235),cljs$pprint$iter__30232(cljs.core.chunk_rest(s__30233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30235),null);
}
} else {
var vec__30247 = cljs.core.first(s__30233__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30247,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30247,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str(col)].join('')),cljs$pprint$iter__30232(cljs.core.rest(s__30233__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_30231))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_30231))
;
return iter__21028__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__21028__auto__,widths,spacers,_STAR_print_newline_STAR_30231){
return (function (p1__30227_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__30227_SHARP_);
});})(iter__21028__auto__,widths,spacers,_STAR_print_newline_STAR_30231))
,ks),widths));
})()))),cljs.core.str(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_30231))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__30250 = cljs.core.seq(rows);
var chunk__30251 = null;
var count__30252 = (0);
var i__30253 = (0);
while(true){
if((i__30253 < count__30252)){
var row = chunk__30251.cljs$core$IIndexed$_nth$arity$2(null,i__30253);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",row)], 0));

var G__30259 = seq__30250;
var G__30260 = chunk__30251;
var G__30261 = count__30252;
var G__30262 = (i__30253 + (1));
seq__30250 = G__30259;
chunk__30251 = G__30260;
count__30252 = G__30261;
i__30253 = G__30262;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__30250);
if(temp__4657__auto__){
var seq__30250__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30250__$1)){
var c__21059__auto__ = cljs.core.chunk_first(seq__30250__$1);
var G__30263 = cljs.core.chunk_rest(seq__30250__$1);
var G__30264 = c__21059__auto__;
var G__30265 = cljs.core.count(c__21059__auto__);
var G__30266 = (0);
seq__30250 = G__30263;
chunk__30251 = G__30264;
count__30252 = G__30265;
i__30253 = G__30266;
continue;
} else {
var row = cljs.core.first(seq__30250__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",row)], 0));

var G__30267 = cljs.core.next(seq__30250__$1);
var G__30268 = null;
var G__30269 = (0);
var G__30270 = (0);
seq__30250 = G__30267;
chunk__30251 = G__30268;
count__30252 = G__30269;
i__30253 = G__30270;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30231;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

