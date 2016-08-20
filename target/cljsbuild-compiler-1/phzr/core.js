// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.core');
goog.require('cljs.core');

/**
 * @interface
 */
phzr.core.IPhaserObj = function(){};

phzr.core.pset_BANG_ = (function phzr$core$pset_BANG_(this$,k,v){
if((!((this$ == null))) && (!((this$.phzr$core$IPhaserObj$pset_BANG_$arity$3 == null)))){
return this$.phzr$core$IPhaserObj$pset_BANG_$arity$3(this$,k,v);
} else {
var x__20911__auto__ = (((this$ == null))?null:this$);
var m__20912__auto__ = (phzr.core.pset_BANG_[goog.typeOf(x__20911__auto__)]);
if(!((m__20912__auto__ == null))){
return (m__20912__auto__.cljs$core$IFn$_invoke$arity$3 ? m__20912__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__20912__auto__.call(null,this$,k,v));
} else {
var m__20912__auto____$1 = (phzr.core.pset_BANG_["_"]);
if(!((m__20912__auto____$1 == null))){
return (m__20912__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__20912__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,k,v) : m__20912__auto____$1.call(null,this$,k,v));
} else {
throw cljs.core.missing_protocol("IPhaserObj.pset!",this$);
}
}
}
});

phzr.core.blend_modes = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$hue,cljs.core.cst$kw$screen,cljs.core.cst$kw$color,cljs.core.cst$kw$darken,cljs.core.cst$kw$saturation,cljs.core.cst$kw$lighten,cljs.core.cst$kw$soft_light,cljs.core.cst$kw$normal,cljs.core.cst$kw$overlay,cljs.core.cst$kw$difference,cljs.core.cst$kw$luminosity,cljs.core.cst$kw$exclusion,cljs.core.cst$kw$hard_light,cljs.core.cst$kw$color_burn,cljs.core.cst$kw$multiply,cljs.core.cst$kw$add,cljs.core.cst$kw$color_dodge],[(13),(3),(15),(5),(14),(6),(10),(0),(4),(11),(16),(12),(9),(8),(2),(1),(7)]);
phzr.core.scale_modes = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$default,(0),cljs.core.cst$kw$linear,(0),cljs.core.cst$kw$nearest,(1)], null);
phzr.core.phaser_constants = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$headless,cljs.core.cst$kw$retrofont,cljs.core.cst$kw$tilesprite,cljs.core.cst$kw$video,cljs.core.cst$kw$down,cljs.core.cst$kw$rendertexture,cljs.core.cst$kw$group,cljs.core.cst$kw$button,cljs.core.cst$kw$rope,cljs.core.cst$kw$bitmaptext,cljs.core.cst$kw$circle,cljs.core.cst$kw$bitmapdata,cljs.core.cst$kw$canvas_DASH_filter,cljs.core.cst$kw$scale_DASH_modes,cljs.core.cst$kw$webgl,cljs.core.cst$kw$up,cljs.core.cst$kw$canvas,cljs.core.cst$kw$creature,cljs.core.cst$kw$tilemaplayer,cljs.core.cst$kw$sprite,cljs.core.cst$kw$matrix,cljs.core.cst$kw$blend_DASH_modes,cljs.core.cst$kw$pointer,cljs.core.cst$kw$line,cljs.core.cst$kw$tilemap,cljs.core.cst$kw$graphics,cljs.core.cst$kw$ellipse,cljs.core.cst$kw$right,cljs.core.cst$kw$spritebatch,cljs.core.cst$kw$image,cljs.core.cst$kw$point,cljs.core.cst$kw$emitter,cljs.core.cst$kw$version,cljs.core.cst$kw$auto,cljs.core.cst$kw$rectangle,cljs.core.cst$kw$none,cljs.core.cst$kw$roundedrectangle,cljs.core.cst$kw$webgl_DASH_filter,cljs.core.cst$kw$polygon,cljs.core.cst$kw$left,cljs.core.cst$kw$text],[(3),(18),(5),(28),(4),(8),(7),(1),(20),(6),(21),(13),(14),phzr.core.scale_modes,(2),(3),(1),(27),(10),(0),(24),phzr.core.blend_modes,(19),(23),(9),(3),(16),(2),(17),(2),(25),(11),"2.4.2",(0),(22),(0),(26),(15),(12),(1),(4)]);
phzr.core.games = (function phzr$core$games(){
return Phaser.GAMES;
});
phzr.core.const$ = (function phzr$core$const(k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$games)){
return phzr.core.games();
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(phzr.core.phaser_constants,k);
}
});
