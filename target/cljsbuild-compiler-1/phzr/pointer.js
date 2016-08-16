// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.pointer');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
/**
 * A Pointer object is used by the Mouse, Touch and MSPoint managers and represents a single finger on the touch screen.
 * 
 *   Parameters:
 *  * game (Phaser.Game) - A reference to the currently running game.
 *  * id (number) - The ID of the Pointer object within the game. Each game can have up to 10 active pointers.
 */
phzr.pointer.__GT_Pointer = (function phzr$pointer$__GT_Pointer(game,id){
return (new Phaser.Pointer(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(id)));
});
phzr.pointer.const$ = (function phzr$pointer$const(k){
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(phzr.impl.accessors.pointer.pointer_constants,k);
if(cljs.core.truth_(temp__4657__auto__)){
var cn = temp__4657__auto__;
return (Phaser.Pointer[cn]);
} else {
return null;
}
});
/**
 * The Pointer is considered justPressed if the time it was pressed onto the touchscreen or clicked is less than justPressedRate.
 *   Note that calling justPressed doesn't reset the pressed status of the Pointer, it will return `true` for as long as the duration is valid.
 *   If you wish to check if the Pointer was pressed down just once then see the Sprite.events.onInputDown event.
 * 
 *   Parameters:
 *  * pointer (Phaser.Pointer) - Targeted instance for method
 *  * duration (number) {optional} - The time to check against. If none given it will use InputManager.justPressedRate.
 * 
 *   Returns:  boolean - true if the Pointer was pressed down within the duration given.
 */
phzr.pointer.just_pressed = (function phzr$pointer$just_pressed(var_args){
var args27858 = [];
var len__21323__auto___27861 = arguments.length;
var i__21324__auto___27862 = (0);
while(true){
if((i__21324__auto___27862 < len__21323__auto___27861)){
args27858.push((arguments[i__21324__auto___27862]));

var G__27863 = (i__21324__auto___27862 + (1));
i__21324__auto___27862 = G__27863;
continue;
} else {
}
break;
}

var G__27860 = args27858.length;
switch (G__27860) {
case 1:
return phzr.pointer.just_pressed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.pointer.just_pressed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27858.length)].join('')));

}
});

phzr.pointer.just_pressed.cljs$core$IFn$_invoke$arity$1 = (function (pointer){
return phzr.impl.utils.core.phaser__GT_clj(pointer.justPressed());
});

phzr.pointer.just_pressed.cljs$core$IFn$_invoke$arity$2 = (function (pointer,duration){
return phzr.impl.utils.core.phaser__GT_clj(pointer.justPressed(phzr.impl.utils.core.clj__GT_phaser(duration)));
});

phzr.pointer.just_pressed.cljs$lang$maxFixedArity = 2;

/**
 * The Pointer is considered justReleased if the time it left the touchscreen is less than justReleasedRate.
 *   Note that calling justReleased doesn't reset the pressed status of the Pointer, it will return `true` for as long as the duration is valid.
 *   If you wish to check if the Pointer was released just once then see the Sprite.events.onInputUp event.
 * 
 *   Parameters:
 *  * pointer (Phaser.Pointer) - Targeted instance for method
 *  * duration (number) {optional} - The time to check against. If none given it will use InputManager.justReleasedRate.
 * 
 *   Returns:  boolean - true if the Pointer was released within the duration given.
 */
phzr.pointer.just_released = (function phzr$pointer$just_released(var_args){
var args27865 = [];
var len__21323__auto___27868 = arguments.length;
var i__21324__auto___27869 = (0);
while(true){
if((i__21324__auto___27869 < len__21323__auto___27868)){
args27865.push((arguments[i__21324__auto___27869]));

var G__27870 = (i__21324__auto___27869 + (1));
i__21324__auto___27869 = G__27870;
continue;
} else {
}
break;
}

var G__27867 = args27865.length;
switch (G__27867) {
case 1:
return phzr.pointer.just_released.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.pointer.just_released.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27865.length)].join('')));

}
});

phzr.pointer.just_released.cljs$core$IFn$_invoke$arity$1 = (function (pointer){
return phzr.impl.utils.core.phaser__GT_clj(pointer.justReleased());
});

phzr.pointer.just_released.cljs$core$IFn$_invoke$arity$2 = (function (pointer,duration){
return phzr.impl.utils.core.phaser__GT_clj(pointer.justReleased(phzr.impl.utils.core.clj__GT_phaser(duration)));
});

phzr.pointer.just_released.cljs$lang$maxFixedArity = 2;

/**
 * Called when the Pointer leaves the target area.
 * 
 *   Parameters:
 *  * pointer (Phaser.Pointer) - Targeted instance for method
 *  * event (MouseEvent | PointerEvent | TouchEvent) - The event passed up from the input handler.
 */
phzr.pointer.leave = (function phzr$pointer$leave(pointer,event){
return phzr.impl.utils.core.phaser__GT_clj(pointer.leave(phzr.impl.utils.core.clj__GT_phaser(event)));
});
/**
 * Called when the Pointer is moved.
 * 
 *   Parameters:
 *  * pointer (Phaser.Pointer) - Targeted instance for method
 *  * event (MouseEvent | PointerEvent | TouchEvent) - The event passed up from the input handler.
 *  * from-click (boolean) {optional} - Was this called from the click event?
 */
phzr.pointer.move = (function phzr$pointer$move(var_args){
var args27872 = [];
var len__21323__auto___27875 = arguments.length;
var i__21324__auto___27876 = (0);
while(true){
if((i__21324__auto___27876 < len__21323__auto___27875)){
args27872.push((arguments[i__21324__auto___27876]));

var G__27877 = (i__21324__auto___27876 + (1));
i__21324__auto___27876 = G__27877;
continue;
} else {
}
break;
}

var G__27874 = args27872.length;
switch (G__27874) {
case 2:
return phzr.pointer.move.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.pointer.move.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27872.length)].join('')));

}
});

phzr.pointer.move.cljs$core$IFn$_invoke$arity$2 = (function (pointer,event){
return phzr.impl.utils.core.phaser__GT_clj(pointer.move(phzr.impl.utils.core.clj__GT_phaser(event)));
});

phzr.pointer.move.cljs$core$IFn$_invoke$arity$3 = (function (pointer,event,from_click){
return phzr.impl.utils.core.phaser__GT_clj(pointer.move(phzr.impl.utils.core.clj__GT_phaser(event),phzr.impl.utils.core.clj__GT_phaser(from_click)));
});

phzr.pointer.move.cljs$lang$maxFixedArity = 3;

/**
 * Resets the Pointer properties. Called by InputManager.reset when you perform a State change.
 */
phzr.pointer.reset = (function phzr$pointer$reset(pointer){
return phzr.impl.utils.core.phaser__GT_clj(pointer.reset());
});
/**
 * Resets the movementX and movementY properties. Use in your update handler after retrieving the values.
 */
phzr.pointer.reset_movement = (function phzr$pointer$reset_movement(pointer){
return phzr.impl.utils.core.phaser__GT_clj(pointer.resetMovement());
});
/**
 * Called when the Pointer is pressed onto the touchscreen.
 * 
 *   Parameters:
 *  * pointer (Phaser.Pointer) - Targeted instance for method
 *  * event (any) - The DOM event from the browser.
 */
phzr.pointer.start = (function phzr$pointer$start(pointer,event){
return phzr.impl.utils.core.phaser__GT_clj(pointer.start(phzr.impl.utils.core.clj__GT_phaser(event)));
});
/**
 * Called when the Pointer leaves the touchscreen.
 * 
 *   Parameters:
 *  * pointer (Phaser.Pointer) - Targeted instance for method
 *  * event (MouseEvent | PointerEvent | TouchEvent) - The event passed up from the input handler.
 */
phzr.pointer.stop = (function phzr$pointer$stop(pointer,event){
return phzr.impl.utils.core.phaser__GT_clj(pointer.stop(phzr.impl.utils.core.clj__GT_phaser(event)));
});
/**
 * Called by the Input Manager.
 */
phzr.pointer.update = (function phzr$pointer$update(pointer){
return phzr.impl.utils.core.phaser__GT_clj(pointer.update());
});
