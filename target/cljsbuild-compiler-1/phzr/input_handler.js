// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.input_handler');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
/**
 * The Input Handler is bound to a specific Sprite and is responsible for managing all Input events on that Sprite.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - The Sprite object to which this Input Handler belongs.
 */
phzr.input_handler.__GT_InputHandler = (function phzr$input_handler$__GT_InputHandler(sprite){
return (new Phaser.InputHandler(phzr.impl.utils.core.clj__GT_phaser(sprite)));
});
/**
 * Bounds Rect check for the sprite drag
 */
phzr.input_handler.check_bounds_rect = (function phzr$input_handler$check_bounds_rect(input_handler){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.checkBoundsRect());
});
/**
 * Parent Sprite Bounds check for the sprite drag.
 */
phzr.input_handler.check_bounds_sprite = (function phzr$input_handler$check_bounds_sprite(input_handler){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.checkBoundsSprite());
});
/**
 * Runs a pixel perfect check against the given x/y coordinates of the Sprite this InputHandler is bound to.
 *   It compares the alpha value of the pixel and if >= InputHandler.pixelPerfectAlpha it returns true.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * x (number) - The x coordinate to check.
 *  * y (number) - The y coordinate to check.
 *  * pointer (Phaser.Pointer) {optional} - The pointer to get the x/y coordinate from if not passed as the first two parameters.
 * 
 *   Returns:  boolean - true if there is the alpha of the pixel is >= InputHandler.pixelPerfectAlpha
 */
phzr.input_handler.check_pixel = (function phzr$input_handler$check_pixel(var_args){
var args28023 = [];
var len__21323__auto___28026 = arguments.length;
var i__21324__auto___28027 = (0);
while(true){
if((i__21324__auto___28027 < len__21323__auto___28026)){
args28023.push((arguments[i__21324__auto___28027]));

var G__28028 = (i__21324__auto___28027 + (1));
i__21324__auto___28027 = G__28028;
continue;
} else {
}
break;
}

var G__28025 = args28023.length;
switch (G__28025) {
case 3:
return phzr.input_handler.check_pixel.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.input_handler.check_pixel.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28023.length)].join('')));

}
});

phzr.input_handler.check_pixel.cljs$core$IFn$_invoke$arity$3 = (function (input_handler,x,y){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.checkPixel(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.input_handler.check_pixel.cljs$core$IFn$_invoke$arity$4 = (function (input_handler,x,y,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.checkPixel(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(pointer)));
});

phzr.input_handler.check_pixel.cljs$lang$maxFixedArity = 4;

/**
 * Checks if the given pointer is both down and over the Sprite this InputHandler belongs to.
 *   Use the `fastTest` flag is to quickly check just the bounding hit area even if `InputHandler.pixelPerfectOver` is `true`.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 *  * fast-test (boolean) {optional} - Force a simple hit area check even if `pixelPerfectOver` is true for this object?
 * 
 *   Returns:  boolean - True if the pointer is down, otherwise false.
 */
phzr.input_handler.check_pointer_down = (function phzr$input_handler$check_pointer_down(var_args){
var args28030 = [];
var len__21323__auto___28033 = arguments.length;
var i__21324__auto___28034 = (0);
while(true){
if((i__21324__auto___28034 < len__21323__auto___28033)){
args28030.push((arguments[i__21324__auto___28034]));

var G__28035 = (i__21324__auto___28034 + (1));
i__21324__auto___28034 = G__28035;
continue;
} else {
}
break;
}

var G__28032 = args28030.length;
switch (G__28032) {
case 2:
return phzr.input_handler.check_pointer_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.input_handler.check_pointer_down.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28030.length)].join('')));

}
});

phzr.input_handler.check_pointer_down.cljs$core$IFn$_invoke$arity$2 = (function (input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.checkPointerDown(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});

phzr.input_handler.check_pointer_down.cljs$core$IFn$_invoke$arity$3 = (function (input_handler,pointer,fast_test){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.checkPointerDown(phzr.impl.utils.core.clj__GT_phaser(pointer),phzr.impl.utils.core.clj__GT_phaser(fast_test)));
});

phzr.input_handler.check_pointer_down.cljs$lang$maxFixedArity = 3;

/**
 * Checks if the given pointer is over the Sprite this InputHandler belongs to.
 *   Use the `fastTest` flag is to quickly check just the bounding hit area even if `InputHandler.pixelPerfectOver` is `true`.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 *  * fast-test (boolean) {optional} - Force a simple hit area check even if `pixelPerfectOver` is true for this object?
 * 
 *   Returns:  boolean - 
 */
phzr.input_handler.check_pointer_over = (function phzr$input_handler$check_pointer_over(var_args){
var args28037 = [];
var len__21323__auto___28040 = arguments.length;
var i__21324__auto___28041 = (0);
while(true){
if((i__21324__auto___28041 < len__21323__auto___28040)){
args28037.push((arguments[i__21324__auto___28041]));

var G__28042 = (i__21324__auto___28041 + (1));
i__21324__auto___28041 = G__28042;
continue;
} else {
}
break;
}

var G__28039 = args28037.length;
switch (G__28039) {
case 2:
return phzr.input_handler.check_pointer_over.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.input_handler.check_pointer_over.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28037.length)].join('')));

}
});

phzr.input_handler.check_pointer_over.cljs$core$IFn$_invoke$arity$2 = (function (input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.checkPointerOver(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});

phzr.input_handler.check_pointer_over.cljs$core$IFn$_invoke$arity$3 = (function (input_handler,pointer,fast_test){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.checkPointerOver(phzr.impl.utils.core.clj__GT_phaser(pointer),phzr.impl.utils.core.clj__GT_phaser(fast_test)));
});

phzr.input_handler.check_pointer_over.cljs$lang$maxFixedArity = 3;

/**
 * Clean up memory.
 */
phzr.input_handler.destroy = (function phzr$input_handler$destroy(input_handler){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.destroy());
});
/**
 * Stops this sprite from being able to be dragged. If it is currently the target of an active drag it will be stopped immediately. Also disables any set callbacks.
 */
phzr.input_handler.disable_drag = (function phzr$input_handler$disable_drag(input_handler){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.disableDrag());
});
/**
 * Stops the sprite from snapping to a grid during drag or release.
 */
phzr.input_handler.disable_snap = (function phzr$input_handler$disable_snap(input_handler){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.disableSnap());
});
/**
 * If the pointer is currently over this Sprite this returns how long it has been there for in milliseconds.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 * 
 *   Returns:  number - The number of milliseconds the pointer has been pressed down on the Sprite, or -1 if not over.
 */
phzr.input_handler.down_duration = (function phzr$input_handler$down_duration(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.downDuration(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * Allow this Sprite to be dragged by any valid pointer.
 * 
 *   When the drag begins the Sprite.events.onDragStart event will be dispatched.
 * 
 *   When the drag completes by way of the user letting go of the pointer that was dragging the sprite, the Sprite.events.onDragStop event is dispatched.
 * 
 *   For the duration of the drag the Sprite.events.onDragUpdate event is dispatched. This event is only dispatched when the pointer actually
 *   changes position and moves. The event sends 5 parameters: `sprite`, `pointer`, `dragX`, `dragY` and `snapPoint`.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * lock-center (boolean) {optional} - If false the Sprite will drag from where you click it minus the dragOffset. If true it will center itself to the tip of the mouse pointer.
 *  * bring-to-top (boolean) {optional} - If true the Sprite will be bought to the top of the rendering list in its current Group.
 *  * pixel-perfect (boolean) {optional} - If true it will use a pixel perfect test to see if you clicked the Sprite. False uses the bounding box.
 *  * alpha-threshold (boolean) {optional} - If using pixel perfect collision this specifies the alpha level from 0 to 255 above which a collision is processed.
 *  * bounds-rect (Phaser.Rectangle) {optional} - If you want to restrict the drag of this sprite to a specific Rectangle, pass the Phaser.Rectangle here, otherwise it's free to drag anywhere.
 *  * bounds-sprite (Phaser.Sprite) {optional} - If you want to restrict the drag of this sprite to within the bounding box of another sprite, pass it here.
 */
phzr.input_handler.enable_drag = (function phzr$input_handler$enable_drag(var_args){
var args28044 = [];
var len__21323__auto___28047 = arguments.length;
var i__21324__auto___28048 = (0);
while(true){
if((i__21324__auto___28048 < len__21323__auto___28047)){
args28044.push((arguments[i__21324__auto___28048]));

var G__28049 = (i__21324__auto___28048 + (1));
i__21324__auto___28048 = G__28049;
continue;
} else {
}
break;
}

var G__28046 = args28044.length;
switch (G__28046) {
case 1:
return phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28044.length)].join('')));

}
});

phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$1 = (function (input_handler){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.enableDrag());
});

phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$2 = (function (input_handler,lock_center){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.enableDrag(phzr.impl.utils.core.clj__GT_phaser(lock_center)));
});

phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$3 = (function (input_handler,lock_center,bring_to_top){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.enableDrag(phzr.impl.utils.core.clj__GT_phaser(lock_center),phzr.impl.utils.core.clj__GT_phaser(bring_to_top)));
});

phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$4 = (function (input_handler,lock_center,bring_to_top,pixel_perfect){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.enableDrag(phzr.impl.utils.core.clj__GT_phaser(lock_center),phzr.impl.utils.core.clj__GT_phaser(bring_to_top),phzr.impl.utils.core.clj__GT_phaser(pixel_perfect)));
});

phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$5 = (function (input_handler,lock_center,bring_to_top,pixel_perfect,alpha_threshold){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.enableDrag(phzr.impl.utils.core.clj__GT_phaser(lock_center),phzr.impl.utils.core.clj__GT_phaser(bring_to_top),phzr.impl.utils.core.clj__GT_phaser(pixel_perfect),phzr.impl.utils.core.clj__GT_phaser(alpha_threshold)));
});

phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$6 = (function (input_handler,lock_center,bring_to_top,pixel_perfect,alpha_threshold,bounds_rect){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.enableDrag(phzr.impl.utils.core.clj__GT_phaser(lock_center),phzr.impl.utils.core.clj__GT_phaser(bring_to_top),phzr.impl.utils.core.clj__GT_phaser(pixel_perfect),phzr.impl.utils.core.clj__GT_phaser(alpha_threshold),phzr.impl.utils.core.clj__GT_phaser(bounds_rect)));
});

phzr.input_handler.enable_drag.cljs$core$IFn$_invoke$arity$7 = (function (input_handler,lock_center,bring_to_top,pixel_perfect,alpha_threshold,bounds_rect,bounds_sprite){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.enableDrag(phzr.impl.utils.core.clj__GT_phaser(lock_center),phzr.impl.utils.core.clj__GT_phaser(bring_to_top),phzr.impl.utils.core.clj__GT_phaser(pixel_perfect),phzr.impl.utils.core.clj__GT_phaser(alpha_threshold),phzr.impl.utils.core.clj__GT_phaser(bounds_rect),phzr.impl.utils.core.clj__GT_phaser(bounds_sprite)));
});

phzr.input_handler.enable_drag.cljs$lang$maxFixedArity = 7;

/**
 * Make this Sprite snap to the given grid either during drag or when it's released.
 *   For example 16x16 as the snapX and snapY would make the sprite snap to every 16 pixels.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * snap-x (number) - The width of the grid cell to snap to.
 *  * snap-y (number) - The height of the grid cell to snap to.
 *  * on-drag (boolean) {optional} - If true the sprite will snap to the grid while being dragged.
 *  * on-release (boolean) {optional} - If true the sprite will snap to the grid when released.
 *  * snap-offset-x (number) {optional} - Used to offset the top-left starting point of the snap grid.
 *  * snap-offset-y (number) {optional} - Used to offset the top-left starting point of the snap grid.
 */
phzr.input_handler.enable_snap = (function phzr$input_handler$enable_snap(var_args){
var args28051 = [];
var len__21323__auto___28054 = arguments.length;
var i__21324__auto___28055 = (0);
while(true){
if((i__21324__auto___28055 < len__21323__auto___28054)){
args28051.push((arguments[i__21324__auto___28055]));

var G__28056 = (i__21324__auto___28055 + (1));
i__21324__auto___28055 = G__28056;
continue;
} else {
}
break;
}

var G__28053 = args28051.length;
switch (G__28053) {
case 3:
return phzr.input_handler.enable_snap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.input_handler.enable_snap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.input_handler.enable_snap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.input_handler.enable_snap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.input_handler.enable_snap.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28051.length)].join('')));

}
});

phzr.input_handler.enable_snap.cljs$core$IFn$_invoke$arity$3 = (function (input_handler,snap_x,snap_y){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.enableSnap(phzr.impl.utils.core.clj__GT_phaser(snap_x),phzr.impl.utils.core.clj__GT_phaser(snap_y)));
});

phzr.input_handler.enable_snap.cljs$core$IFn$_invoke$arity$4 = (function (input_handler,snap_x,snap_y,on_drag){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.enableSnap(phzr.impl.utils.core.clj__GT_phaser(snap_x),phzr.impl.utils.core.clj__GT_phaser(snap_y),phzr.impl.utils.core.clj__GT_phaser(on_drag)));
});

phzr.input_handler.enable_snap.cljs$core$IFn$_invoke$arity$5 = (function (input_handler,snap_x,snap_y,on_drag,on_release){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.enableSnap(phzr.impl.utils.core.clj__GT_phaser(snap_x),phzr.impl.utils.core.clj__GT_phaser(snap_y),phzr.impl.utils.core.clj__GT_phaser(on_drag),phzr.impl.utils.core.clj__GT_phaser(on_release)));
});

phzr.input_handler.enable_snap.cljs$core$IFn$_invoke$arity$6 = (function (input_handler,snap_x,snap_y,on_drag,on_release,snap_offset_x){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.enableSnap(phzr.impl.utils.core.clj__GT_phaser(snap_x),phzr.impl.utils.core.clj__GT_phaser(snap_y),phzr.impl.utils.core.clj__GT_phaser(on_drag),phzr.impl.utils.core.clj__GT_phaser(on_release),phzr.impl.utils.core.clj__GT_phaser(snap_offset_x)));
});

phzr.input_handler.enable_snap.cljs$core$IFn$_invoke$arity$7 = (function (input_handler,snap_x,snap_y,on_drag,on_release,snap_offset_x,snap_offset_y){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.enableSnap(phzr.impl.utils.core.clj__GT_phaser(snap_x),phzr.impl.utils.core.clj__GT_phaser(snap_y),phzr.impl.utils.core.clj__GT_phaser(on_drag),phzr.impl.utils.core.clj__GT_phaser(on_release),phzr.impl.utils.core.clj__GT_phaser(snap_offset_x),phzr.impl.utils.core.clj__GT_phaser(snap_offset_y)));
});

phzr.input_handler.enable_snap.cljs$lang$maxFixedArity = 7;

/**
 * Warning: EXPERIMENTAL
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * x (number) - No description
 */
phzr.input_handler.global_to_local_x = (function phzr$input_handler$global_to_local_x(input_handler,x){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.globalToLocalX(phzr.impl.utils.core.clj__GT_phaser(x)));
});
/**
 * Warning: EXPERIMENTAL
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * y (number) - No description
 */
phzr.input_handler.global_to_local_y = (function phzr$input_handler$global_to_local_y(input_handler,y){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.globalToLocalY(phzr.impl.utils.core.clj__GT_phaser(y)));
});
/**
 * Is this object using pixel perfect checking?
 * 
 *   Returns:  boolean - True if the this InputHandler has either `pixelPerfectClick` or `pixelPerfectOver` set to `true`.
 */
phzr.input_handler.is_pixel_perfect = (function phzr$input_handler$is_pixel_perfect(input_handler){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.isPixelPerfect());
});
/**
 * Returns true if the pointer has left the Sprite within the specified delay time (defaults to 500ms, half a second)
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 *  * delay (number) - The time below which the pointer is considered as just out.
 * 
 *   Returns:  boolean - 
 */
phzr.input_handler.just_out = (function phzr$input_handler$just_out(input_handler,pointer,delay){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.justOut(phzr.impl.utils.core.clj__GT_phaser(pointer),phzr.impl.utils.core.clj__GT_phaser(delay)));
});
/**
 * Returns true if the pointer has entered the Sprite within the specified delay time (defaults to 500ms, half a second)
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 *  * delay (number) - The time below which the pointer is considered as just over.
 * 
 *   Returns:  boolean - 
 */
phzr.input_handler.just_over = (function phzr$input_handler$just_over(input_handler,pointer,delay){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.justOver(phzr.impl.utils.core.clj__GT_phaser(pointer),phzr.impl.utils.core.clj__GT_phaser(delay)));
});
/**
 * Returns true if the pointer has touched or clicked on the Sprite within the specified delay time (defaults to 500ms, half a second)
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 *  * delay (number) - The time below which the pointer is considered as just over.
 * 
 *   Returns:  boolean - 
 */
phzr.input_handler.just_pressed = (function phzr$input_handler$just_pressed(input_handler,pointer,delay){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.justPressed(phzr.impl.utils.core.clj__GT_phaser(pointer),phzr.impl.utils.core.clj__GT_phaser(delay)));
});
/**
 * Returns true if the pointer was touching this Sprite, but has been released within the specified delay time (defaults to 500ms, half a second)
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 *  * delay (number) - The time below which the pointer is considered as just out.
 * 
 *   Returns:  boolean - 
 */
phzr.input_handler.just_released = (function phzr$input_handler$just_released(input_handler,pointer,delay){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.justReleased(phzr.impl.utils.core.clj__GT_phaser(pointer),phzr.impl.utils.core.clj__GT_phaser(delay)));
});
/**
 * If the pointer is currently over this Sprite this returns how long it has been there for in milliseconds.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 * 
 *   Returns:  number - The number of milliseconds the pointer has been over the Sprite, or -1 if not over.
 */
phzr.input_handler.over_duration = (function phzr$input_handler$over_duration(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.overDuration(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * If the Pointer is down this returns true. Please note that it only checks if the Pointer is down, not if it's down over any specific Sprite.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (number) - The index of the pointer to check. You can get this from Phaser.Pointer.id.
 * 
 *   Returns:  boolean - - True if the given pointer is down, otherwise false.
 */
phzr.input_handler.pointer_down = (function phzr$input_handler$pointer_down(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerDown(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * Is this sprite being dragged by the mouse or not?
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 * 
 *   Returns:  boolean - True if the pointer is dragging an object, otherwise false.
 */
phzr.input_handler.pointer_dragged = (function phzr$input_handler$pointer_dragged(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerDragged(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * Is the Pointer outside of this Sprite?
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * index (number) {optional} - The ID number of a Pointer to check. If you don't provide a number it will check all Pointers.
 * 
 *   Returns:  boolean - True if the given pointer (if a index was given, or any pointer if not) is out of this object.
 */
phzr.input_handler.pointer_out = (function phzr$input_handler$pointer_out(var_args){
var args28058 = [];
var len__21323__auto___28061 = arguments.length;
var i__21324__auto___28062 = (0);
while(true){
if((i__21324__auto___28062 < len__21323__auto___28061)){
args28058.push((arguments[i__21324__auto___28062]));

var G__28063 = (i__21324__auto___28062 + (1));
i__21324__auto___28062 = G__28063;
continue;
} else {
}
break;
}

var G__28060 = args28058.length;
switch (G__28060) {
case 1:
return phzr.input_handler.pointer_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.input_handler.pointer_out.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28058.length)].join('')));

}
});

phzr.input_handler.pointer_out.cljs$core$IFn$_invoke$arity$1 = (function (input_handler){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerOut());
});

phzr.input_handler.pointer_out.cljs$core$IFn$_invoke$arity$2 = (function (input_handler,index){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerOut(phzr.impl.utils.core.clj__GT_phaser(index)));
});

phzr.input_handler.pointer_out.cljs$lang$maxFixedArity = 2;

/**
 * Is the Pointer over this Sprite?
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * index (number) {optional} - The ID number of a Pointer to check. If you don't provide a number it will check all Pointers.
 * 
 *   Returns:  boolean - - True if the given pointer (if a index was given, or any pointer if not) is over this object.
 */
phzr.input_handler.pointer_over = (function phzr$input_handler$pointer_over(var_args){
var args28065 = [];
var len__21323__auto___28068 = arguments.length;
var i__21324__auto___28069 = (0);
while(true){
if((i__21324__auto___28069 < len__21323__auto___28068)){
args28065.push((arguments[i__21324__auto___28069]));

var G__28070 = (i__21324__auto___28069 + (1));
i__21324__auto___28069 = G__28070;
continue;
} else {
}
break;
}

var G__28067 = args28065.length;
switch (G__28067) {
case 1:
return phzr.input_handler.pointer_over.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.input_handler.pointer_over.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28065.length)].join('')));

}
});

phzr.input_handler.pointer_over.cljs$core$IFn$_invoke$arity$1 = (function (input_handler){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerOver());
});

phzr.input_handler.pointer_over.cljs$core$IFn$_invoke$arity$2 = (function (input_handler,index){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerOver(phzr.impl.utils.core.clj__GT_phaser(index)));
});

phzr.input_handler.pointer_over.cljs$lang$maxFixedArity = 2;

/**
 * A timestamp representing when the Pointer first touched the touchscreen.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (number) - The index of the pointer to check. You can get this from Phaser.Pointer.id.
 * 
 *   Returns:  number - 
 */
phzr.input_handler.pointer_time_down = (function phzr$input_handler$pointer_time_down(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerTimeDown(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * A timestamp representing when the Pointer left the touchscreen.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 * 
 *   Returns:  number - 
 */
phzr.input_handler.pointer_time_out = (function phzr$input_handler$pointer_time_out(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerTimeOut(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * A timestamp representing when the Pointer first touched the touchscreen.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 * 
 *   Returns:  number - 
 */
phzr.input_handler.pointer_time_over = (function phzr$input_handler$pointer_time_over(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerTimeOver(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * A timestamp representing when the Pointer left the touchscreen.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 * 
 *   Returns:  number - 
 */
phzr.input_handler.pointer_time_up = (function phzr$input_handler$pointer_time_up(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerTimeUp(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * If the Pointer is up this returns true. Please note that it only checks if the Pointer is up, not if it's up over any specific Sprite.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (number) - The index of the pointer to check. You can get this from Phaser.Pointer.id.
 * 
 *   Returns:  boolean - - True if the given pointer is up, otherwise false.
 */
phzr.input_handler.pointer_up = (function phzr$input_handler$pointer_up(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerUp(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * The x coordinate of the Input pointer, relative to the top-left of the parent Sprite.
 *   This value is only set when the pointer is over this Sprite.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (number) - The index of the pointer to check. You can get this from Phaser.Pointer.id.
 * 
 *   Returns:  number - The x coordinate of the Input pointer.
 */
phzr.input_handler.pointer_x = (function phzr$input_handler$pointer_x(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerX(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * The y coordinate of the Input pointer, relative to the top-left of the parent Sprite
 *   This value is only set when the pointer is over this Sprite.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (number) - The index of the pointer to check. You can get this from Phaser.Pointer.id.
 * 
 *   Returns:  number - The y coordinate of the Input pointer.
 */
phzr.input_handler.pointer_y = (function phzr$input_handler$pointer_y(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.pointerY(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * Resets the Input Handler and disables it.
 */
phzr.input_handler.reset = (function phzr$input_handler$reset(input_handler){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.reset());
});
/**
 * Restricts this sprite to drag movement only on the given axis. Note: If both are set to false the sprite will never move!
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * allow-horizontal (boolean) {optional} - To enable the sprite to be dragged horizontally set to true, otherwise false.
 *  * allow-vertical (boolean) {optional} - To enable the sprite to be dragged vertically set to true, otherwise false.
 */
phzr.input_handler.set_drag_lock = (function phzr$input_handler$set_drag_lock(var_args){
var args28072 = [];
var len__21323__auto___28075 = arguments.length;
var i__21324__auto___28076 = (0);
while(true){
if((i__21324__auto___28076 < len__21323__auto___28075)){
args28072.push((arguments[i__21324__auto___28076]));

var G__28077 = (i__21324__auto___28076 + (1));
i__21324__auto___28076 = G__28077;
continue;
} else {
}
break;
}

var G__28074 = args28072.length;
switch (G__28074) {
case 1:
return phzr.input_handler.set_drag_lock.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.input_handler.set_drag_lock.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.input_handler.set_drag_lock.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28072.length)].join('')));

}
});

phzr.input_handler.set_drag_lock.cljs$core$IFn$_invoke$arity$1 = (function (input_handler){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.setDragLock());
});

phzr.input_handler.set_drag_lock.cljs$core$IFn$_invoke$arity$2 = (function (input_handler,allow_horizontal){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.setDragLock(phzr.impl.utils.core.clj__GT_phaser(allow_horizontal)));
});

phzr.input_handler.set_drag_lock.cljs$core$IFn$_invoke$arity$3 = (function (input_handler,allow_horizontal,allow_vertical){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.setDragLock(phzr.impl.utils.core.clj__GT_phaser(allow_horizontal),phzr.impl.utils.core.clj__GT_phaser(allow_vertical)));
});

phzr.input_handler.set_drag_lock.cljs$lang$maxFixedArity = 3;

/**
 * Starts the Input Handler running. This is called automatically when you enable input on a Sprite, or can be called directly if you need to set a specific priority.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * priority (number) - Higher priority sprites take click priority over low-priority sprites when they are stacked on-top of each other.
 *  * use-hand-cursor (boolean) - If true the Sprite will show the hand cursor on mouse-over (doesn't apply to mobile browsers)
 * 
 *   Returns:  Phaser.Sprite - The Sprite object to which the Input Handler is bound.
 */
phzr.input_handler.start = (function phzr$input_handler$start(input_handler,priority,use_hand_cursor){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.start(phzr.impl.utils.core.clj__GT_phaser(priority),phzr.impl.utils.core.clj__GT_phaser(use_hand_cursor)));
});
/**
 * Called by Pointer when drag starts on this Sprite. Should not usually be called directly.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 */
phzr.input_handler.start_drag = (function phzr$input_handler$start_drag(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.startDrag(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * Stops the Input Handler from running.
 */
phzr.input_handler.stop = (function phzr$input_handler$stop(input_handler){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.stop());
});
/**
 * Called by Pointer when drag is stopped on this Sprite. Should not usually be called directly.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 */
phzr.input_handler.stop_drag = (function phzr$input_handler$stop_drag(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.stopDrag(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
/**
 * Updates the Pointer drag on this Sprite.
 * 
 *   Parameters:
 *  * input-handler (Phaser.InputHandler) - Targeted instance for method
 *  * pointer (Phaser.Pointer) - No description
 * 
 *   Returns:  boolean - 
 */
phzr.input_handler.update_drag = (function phzr$input_handler$update_drag(input_handler,pointer){
return phzr.impl.utils.core.phaser__GT_clj(input_handler.updateDrag(phzr.impl.utils.core.clj__GT_phaser(pointer)));
});
