// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.game');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
/**
 * This is where the magic happens. The Game object is the heart of your game,
 *   providing quick access to common functions and handling the boot process.
 * 
 *   'Hell, there are no rules here - we're trying to accomplish something.'
 *                                                      Thomas A. Edison
 * 
 *   Parameters:
 *  * width (number | string) {optional} - The width of your game in game pixels. If given as a string the value must be between 0 and 100 and will be used as the percentage width of the parent container, or the browser window if no parent is given.
 *  * height (number | string) {optional} - The height of your game in game pixels. If given as a string the value must be between 0 and 100 and will be used as the percentage height of the parent container, or the browser window if no parent is given.
 *  * renderer (number) {optional} - Which renderer to use: Phaser.AUTO will auto-detect, Phaser.WEBGL, Phaser.CANVAS or Phaser.HEADLESS (no rendering at all).
 *  * parent (string | HTMLElement) {optional} - The DOM element into which this games canvas will be injected. Either a DOM ID (string) or the element itself.
 *  * state (object) {optional} - The default state object. A object consisting of Phaser.State functions (preload, create, update, render) or null.
 *  * transparent (boolean) {optional} - Use a transparent canvas background or not.
 *  * antialias (boolean) {optional} - Draw all image textures anti-aliased or not. The default is for smooth textures, but disable if your game features pixel art.
 *  * physics-config (object) {optional} - A physics configuration object to pass to the Physics world on creation.
 */
phzr.game.__GT_Game = (function phzr$game$__GT_Game(var_args){
var args30427 = [];
var len__21323__auto___30430 = arguments.length;
var i__21324__auto___30431 = (0);
while(true){
if((i__21324__auto___30431 < len__21323__auto___30430)){
args30427.push((arguments[i__21324__auto___30431]));

var G__30432 = (i__21324__auto___30431 + (1));
i__21324__auto___30431 = G__30432;
continue;
} else {
}
break;
}

var G__30429 = args30427.length;
switch (G__30429) {
case 0:
return phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30427.length)].join('')));

}
});

phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new Phaser.Game());
});

phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$1 = (function (width){
return (new Phaser.Game(phzr.impl.utils.core.clj__GT_phaser(width)));
});

phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return (new Phaser.Game(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height)));
});

phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$3 = (function (width,height,renderer){
return (new Phaser.Game(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(renderer)));
});

phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$4 = (function (width,height,renderer,parent){
return (new Phaser.Game(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(renderer),phzr.impl.utils.core.clj__GT_phaser(parent)));
});

phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$5 = (function (width,height,renderer,parent,state){
return (new Phaser.Game(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(renderer),phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(state)));
});

phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$6 = (function (width,height,renderer,parent,state,transparent){
return (new Phaser.Game(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(renderer),phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(state),phzr.impl.utils.core.clj__GT_phaser(transparent)));
});

phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$7 = (function (width,height,renderer,parent,state,transparent,antialias){
return (new Phaser.Game(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(renderer),phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(state),phzr.impl.utils.core.clj__GT_phaser(transparent),phzr.impl.utils.core.clj__GT_phaser(antialias)));
});

phzr.game.__GT_Game.cljs$core$IFn$_invoke$arity$8 = (function (width,height,renderer,parent,state,transparent,antialias,physics_config){
return (new Phaser.Game(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(renderer),phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(state),phzr.impl.utils.core.clj__GT_phaser(transparent),phzr.impl.utils.core.clj__GT_phaser(antialias),phzr.impl.utils.core.clj__GT_phaser(physics_config)));
});

phzr.game.__GT_Game.cljs$lang$maxFixedArity = 8;

/**
 * Nukes the entire game from orbit.
 */
phzr.game.destroy = (function phzr$game$destroy(game){
return phzr.impl.utils.core.phaser__GT_clj(game.destroy());
});
/**
 * Disables core game loop stepping.
 */
phzr.game.disable_step = (function phzr$game$disable_step(game){
return phzr.impl.utils.core.phaser__GT_clj(game.disableStep());
});
/**
 * Enable core game loop stepping. When enabled you must call game.step() directly (perhaps via a DOM button?)
 *   Calling step will advance the game loop by one frame. This is extremely useful for hard to track down errors!
 */
phzr.game.enable_step = (function phzr$game$enable_step(game){
return phzr.impl.utils.core.phaser__GT_clj(game.enableStep());
});
/**
 * When stepping is enabled you must call this function directly (perhaps via a DOM button?) to advance the game loop by one frame.
 *   This is extremely useful to hard to track down errors! Use the internal stepCount property to monitor progress.
 */
phzr.game.step = (function phzr$game$step(game){
return phzr.impl.utils.core.phaser__GT_clj(game.step());
});