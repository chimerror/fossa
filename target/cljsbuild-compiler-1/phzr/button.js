// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.button');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
/**
 * Create a new `Button` object. A Button is a special type of Sprite that is set-up to handle Pointer events automatically.
 * 
 *   The four states a Button responds to are:
 * 
 *   * 'Over' - when the Pointer moves over the Button. This is also commonly known as 'hover'.
 *   * 'Out' - when the Pointer that was previously over the Button moves out of it.
 *   * 'Down' - when the Pointer is pressed down on the Button. I.e. touched on a touch enabled device or clicked with the mouse.
 *   * 'Up' - when the Pointer that was pressed down on the Button is released again.
 * 
 *   A different texture/frame and activation sound can be specified for any of the states.
 * 
 *   Frames can be specified as either an integer (the frame ID) or a string (the frame name); the same values that can be used with a Sprite constructor.
 * 
 *   Parameters:
 *  * game (Phaser.Game) - Current game instance.
 *  * x (number) {optional} - X position of the Button.
 *  * y (number) {optional} - Y position of the Button.
 *  * key (string) {optional} - The image key (in the Game.Cache) to use as the texture for this Button.
 *  * callback (function) {optional} - The function to call when this Button is pressed.
 *  * callback-context (object) {optional} - The context in which the callback will be called (usually 'this').
 *  * over-frame (string | integer) {optional} - The frame / frameName when the button is in the Over state.
 *  * out-frame (string | integer) {optional} - The frame / frameName when the button is in the Out state.
 *  * down-frame (string | integer) {optional} - The frame / frameName when the button is in the Down state.
 *  * up-frame (string | integer) {optional} - The frame / frameName when the button is in the Up state.
 */
phzr.button.__GT_Button = (function phzr$button$__GT_Button(var_args){
var args28311 = [];
var len__21323__auto___28314 = arguments.length;
var i__21324__auto___28315 = (0);
while(true){
if((i__21324__auto___28315 < len__21323__auto___28314)){
args28311.push((arguments[i__21324__auto___28315]));

var G__28316 = (i__21324__auto___28315 + (1));
i__21324__auto___28315 = G__28316;
continue;
} else {
}
break;
}

var G__28313 = args28311.length;
switch (G__28313) {
case 1:
return phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28311.length)].join('')));

}
});

phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$1 = (function (game){
return (new Phaser.Button(phzr.impl.utils.core.clj__GT_phaser(game)));
});

phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$2 = (function (game,x){
return (new Phaser.Button(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(x)));
});

phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$3 = (function (game,x,y){
return (new Phaser.Button(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$4 = (function (game,x,y,key){
return (new Phaser.Button(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$5 = (function (game,x,y,key,callback){
return (new Phaser.Button(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback)));
});

phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$6 = (function (game,x,y,key,callback,callback_context){
return (new Phaser.Button(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$7 = (function (game,x,y,key,callback,callback_context,over_frame){
return (new Phaser.Button(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(over_frame)));
});

phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$8 = (function (game,x,y,key,callback,callback_context,over_frame,out_frame){
return (new Phaser.Button(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(over_frame),phzr.impl.utils.core.clj__GT_phaser(out_frame)));
});

phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$9 = (function (game,x,y,key,callback,callback_context,over_frame,out_frame,down_frame){
return (new Phaser.Button(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(over_frame),phzr.impl.utils.core.clj__GT_phaser(out_frame),phzr.impl.utils.core.clj__GT_phaser(down_frame)));
});

phzr.button.__GT_Button.cljs$core$IFn$_invoke$arity$10 = (function (game,x,y,key,callback,callback_context,over_frame,out_frame,down_frame,up_frame){
return (new Phaser.Button(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(over_frame),phzr.impl.utils.core.clj__GT_phaser(out_frame),phzr.impl.utils.core.clj__GT_phaser(down_frame),phzr.impl.utils.core.clj__GT_phaser(up_frame)));
});

phzr.button.__GT_Button.cljs$lang$maxFixedArity = 10;

/**
 * Adds a child to the container.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The DisplayObject to add to the container
 * 
 *   Returns:  PIXI.DisplayObject - The child that was added.
 */
phzr.button.add_child = (function phzr$button$add_child(button,child){
return phzr.impl.utils.core.phaser__GT_clj(button.addChild(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The child to add
 *  * index (Number) - The index to place the child in
 * 
 *   Returns:  PIXI.DisplayObject - The child that was added.
 */
phzr.button.add_child_at = (function phzr$button$add_child_at(button,child,index){
return phzr.impl.utils.core.phaser__GT_clj(button.addChildAt(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Brings this Game Object to the top of its parents display list.
 *   Visually this means it will render over the top of any old child in the same Group.
 * 
 *   If this Game Object hasn't been added to a custom Group then this method will bring it to the top of the Game World, 
 *   because the World is the root Group from which all Game Objects descend.
 * 
 *   Returns:  PIXI.DisplayObject - This instance.
 */
phzr.button.bring_to_top = (function phzr$button$bring_to_top(button){
return phzr.impl.utils.core.phaser__GT_clj(button.bringToTop());
});
/**
 * Clears all of the frames set on this Button.
 */
phzr.button.clear_frames = (function phzr$button$clear_frames(button){
return phzr.impl.utils.core.phaser__GT_clj(button.clearFrames());
});
/**
 * Crop allows you to crop the texture being used to display this Game Object.
 *   Setting a crop rectangle modifies the core texture frame. The Game Object width and height properties will be adjusted accordingly.
 * 
 *   Cropping takes place from the top-left and can be modified in real-time either by providing an updated rectangle object to this method,
 *   or by modifying `cropRect` property directly and then calling `updateCrop`.
 * 
 *   The rectangle object given to this method can be either a `Phaser.Rectangle` or any other object 
 *   so long as it has public `x`, `y`, `width`, `height`, `right` and `bottom` properties.
 * 
 *   A reference to the rectangle is stored in `cropRect` unless the `copy` parameter is `true`, 
 *   in which case the values are duplicated to a local object.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * rect (Phaser.Rectangle) - The Rectangle used during cropping. Pass null or no parameters to clear a previously set crop rectangle.
 *  * copy (boolean) {optional} - If false `cropRect` will be stored as a reference to the given rect. If true it will copy the rect values into a local Phaser Rectangle object stored in cropRect.
 */
phzr.button.crop = (function phzr$button$crop(var_args){
var args28318 = [];
var len__21323__auto___28321 = arguments.length;
var i__21324__auto___28322 = (0);
while(true){
if((i__21324__auto___28322 < len__21323__auto___28321)){
args28318.push((arguments[i__21324__auto___28322]));

var G__28323 = (i__21324__auto___28322 + (1));
i__21324__auto___28322 = G__28323;
continue;
} else {
}
break;
}

var G__28320 = args28318.length;
switch (G__28320) {
case 2:
return phzr.button.crop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.button.crop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28318.length)].join('')));

}
});

phzr.button.crop.cljs$core$IFn$_invoke$arity$2 = (function (button,rect){
return phzr.impl.utils.core.phaser__GT_clj(button.crop(phzr.impl.utils.core.clj__GT_phaser(rect)));
});

phzr.button.crop.cljs$core$IFn$_invoke$arity$3 = (function (button,rect,copy){
return phzr.impl.utils.core.phaser__GT_clj(button.crop(phzr.impl.utils.core.clj__GT_phaser(rect),phzr.impl.utils.core.clj__GT_phaser(copy)));
});

phzr.button.crop.cljs$lang$maxFixedArity = 3;

/**
 * Destroy this DisplayObject.
 *   Removes all references to transformCallbacks, its parent, the stage, filters, bounds, mask and cached Sprites.
 */
phzr.button.destroy = (function phzr$button$destroy(button){
return phzr.impl.utils.core.phaser__GT_clj(button.destroy());
});
/**
 * Useful function that returns a texture of the displayObject object that can then be used to create sprites
 *   This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * resolution (Number) - The resolution of the texture being generated
 *  * scale-mode (Number) - See PIXI.scaleModes for possible values
 *  * renderer (PIXI.CanvasRenderer | PIXI.WebGLRenderer) - The renderer used to generate the texture.
 * 
 *   Returns:  PIXI.Texture - a texture of the graphics object
 */
phzr.button.generate_texture = (function phzr$button$generate_texture(button,resolution,scale_mode,renderer){
return phzr.impl.utils.core.phaser__GT_clj(button.generateTexture(phzr.impl.utils.core.clj__GT_phaser(resolution),phzr.impl.utils.core.clj__GT_phaser(scale_mode),phzr.impl.utils.core.clj__GT_phaser(renderer)));
});
/**
 * Returns the bounds of the Sprite as a rectangle. The bounds calculation takes the worldTransform into account.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * matrix (Matrix) - the transformation matrix of the sprite
 * 
 *   Returns:  Rectangle - the framing rectangle
 */
phzr.button.get_bounds = (function phzr$button$get_bounds(button,matrix){
return phzr.impl.utils.core.phaser__GT_clj(button.getBounds(phzr.impl.utils.core.clj__GT_phaser(matrix)));
});
/**
 * Returns the child at the specified index
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * index (Number) - The index to get the child from
 * 
 *   Returns:  PIXI.DisplayObject - The child at the given index, if any.
 */
phzr.button.get_child_at = (function phzr$button$get_child_at(button,index){
return phzr.impl.utils.core.phaser__GT_clj(button.getChildAt(phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Returns the index position of a child DisplayObject instance
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The DisplayObject instance to identify
 * 
 *   Returns:  Number - The index position of the child display object to identify
 */
phzr.button.get_child_index = (function phzr$button$get_child_index(button,child){
return phzr.impl.utils.core.phaser__GT_clj(button.getChildIndex(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Retrieves the non-global local bounds of the displayObjectContainer as a rectangle. The calculation takes all visible children into consideration.
 * 
 *   Returns:  Rectangle - The rectangular bounding area
 */
phzr.button.get_local_bounds = (function phzr$button$get_local_bounds(button){
return phzr.impl.utils.core.phaser__GT_clj(button.getLocalBounds());
});
/**
 * Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.
 * 
 *   It will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.
 * 
 *   Note that killing a Game Object is a way for you to quickly recycle it in an object pool, 
 *   it doesn't destroy the object or free it up from memory.
 * 
 *   If you don't need this Game Object any more you should call `destroy` instead.
 * 
 *   Returns:  PIXI.DisplayObject - This instance.
 */
phzr.button.kill = (function phzr$button$kill(button){
return phzr.impl.utils.core.phaser__GT_clj(button.kill());
});
/**
 * Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.
 * 
 *   If your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the `frame` or `frameName` properties instead.
 * 
 *   You should only use `loadTexture` if you want to replace the base texture entirely.
 * 
 *   Calling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * key (string | Phaser.RenderTexture | Phaser.BitmapData | Phaser.Video | PIXI.Texture) - This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache Image entry, or an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
 *  * frame (string | number) {optional} - If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 *  * stop-animation (boolean) {optional} - If an animation is already playing on this Sprite you can choose to stop it or let it carry on playing.
 */
phzr.button.load_texture = (function phzr$button$load_texture(var_args){
var args28325 = [];
var len__21323__auto___28328 = arguments.length;
var i__21324__auto___28329 = (0);
while(true){
if((i__21324__auto___28329 < len__21323__auto___28328)){
args28325.push((arguments[i__21324__auto___28329]));

var G__28330 = (i__21324__auto___28329 + (1));
i__21324__auto___28329 = G__28330;
continue;
} else {
}
break;
}

var G__28327 = args28325.length;
switch (G__28327) {
case 2:
return phzr.button.load_texture.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.button.load_texture.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.button.load_texture.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28325.length)].join('')));

}
});

phzr.button.load_texture.cljs$core$IFn$_invoke$arity$2 = (function (button,key){
return phzr.impl.utils.core.phaser__GT_clj(button.loadTexture(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.button.load_texture.cljs$core$IFn$_invoke$arity$3 = (function (button,key,frame){
return phzr.impl.utils.core.phaser__GT_clj(button.loadTexture(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame)));
});

phzr.button.load_texture.cljs$core$IFn$_invoke$arity$4 = (function (button,key,frame,stop_animation){
return phzr.impl.utils.core.phaser__GT_clj(button.loadTexture(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame),phzr.impl.utils.core.clj__GT_phaser(stop_animation)));
});

phzr.button.load_texture.cljs$lang$maxFixedArity = 4;

/**
 * Moves this Game Object down one place in its parents display list.
 *   This call has no effect if the Game Object is already at the bottom of the display list.
 * 
 *   If this Game Object hasn't been added to a custom Group then this method will move it one object down within the Game World, 
 *   because the World is the root Group from which all Game Objects descend.
 * 
 *   Returns:  PIXI.DisplayObject - This instance.
 */
phzr.button.move_down = (function phzr$button$move_down(button){
return phzr.impl.utils.core.phaser__GT_clj(button.moveDown());
});
/**
 * Moves this Game Object up one place in its parents display list.
 *   This call has no effect if the Game Object is already at the top of the display list.
 * 
 *   If this Game Object hasn't been added to a custom Group then this method will move it one object up within the Game World, 
 *   because the World is the root Group from which all Game Objects descend.
 * 
 *   Returns:  PIXI.DisplayObject - This instance.
 */
phzr.button.move_up = (function phzr$button$move_up(button){
return phzr.impl.utils.core.phaser__GT_clj(button.moveUp());
});
/**
 * Checks to see if the bounds of this Game Object overlaps with the bounds of the given Display Object, 
 *   which can be a Sprite, Image, TileSprite or anything that extends those such as Button or provides a `getBounds` method and result.
 * 
 *   This check ignores the `hitArea` property if set and runs a `getBounds` comparison on both objects to determine the result.
 * 
 *   Therefore it's relatively expensive to use in large quantities, i.e. with lots of Sprites at a high frequency.
 *   It should be fine for low-volume testing where physics isn't required.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * display-object (Phaser.Sprite | Phaser.Image | Phaser.TileSprite | Phaser.Button | PIXI.DisplayObject) - The display object to check against.
 * 
 *   Returns:  boolean - True if the bounds of this Game Object intersects at any point with the bounds of the given display object.
 */
phzr.button.overlap = (function phzr$button$overlap(button,display_object){
return phzr.impl.utils.core.phaser__GT_clj(button.overlap(phzr.impl.utils.core.clj__GT_phaser(display_object)));
});
/**
 * Plays an Animation.
 * 
 *   The animation should have previously been created via `animations.add`.
 * 
 *   If the animation is already playing calling this again won't do anything.
 *   If you need to reset an already running animation do so directly on the Animation object itself or via `AnimationManager.stop`.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * name (string) - The name of the animation to be played, e.g. 'fire', 'walk', 'jump'. Must have been previously created via 'AnimationManager.add'.
 *  * frame-rate (number) {optional} - The framerate to play the animation at. The speed is given in frames per second. If not provided the previously set frameRate of the Animation is used.
 *  * loop (boolean) {optional} - Should the animation be looped after playback. If not provided the previously set loop value of the Animation is used.
 *  * kill-on-complete (boolean) {optional} - If set to true when the animation completes (only happens if loop=false) the parent Sprite will be killed.
 * 
 *   Returns:  Phaser.Animation - A reference to playing Animation.
 */
phzr.button.play = (function phzr$button$play(var_args){
var args28332 = [];
var len__21323__auto___28335 = arguments.length;
var i__21324__auto___28336 = (0);
while(true){
if((i__21324__auto___28336 < len__21323__auto___28335)){
args28332.push((arguments[i__21324__auto___28336]));

var G__28337 = (i__21324__auto___28336 + (1));
i__21324__auto___28336 = G__28337;
continue;
} else {
}
break;
}

var G__28334 = args28332.length;
switch (G__28334) {
case 2:
return phzr.button.play.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.button.play.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.button.play.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.button.play.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28332.length)].join('')));

}
});

phzr.button.play.cljs$core$IFn$_invoke$arity$2 = (function (button,name){
return phzr.impl.utils.core.phaser__GT_clj(button.play(phzr.impl.utils.core.clj__GT_phaser(name)));
});

phzr.button.play.cljs$core$IFn$_invoke$arity$3 = (function (button,name,frame_rate){
return phzr.impl.utils.core.phaser__GT_clj(button.play(phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(frame_rate)));
});

phzr.button.play.cljs$core$IFn$_invoke$arity$4 = (function (button,name,frame_rate,loop){
return phzr.impl.utils.core.phaser__GT_clj(button.play(phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(frame_rate),phzr.impl.utils.core.clj__GT_phaser(loop)));
});

phzr.button.play.cljs$core$IFn$_invoke$arity$5 = (function (button,name,frame_rate,loop,kill_on_complete){
return phzr.impl.utils.core.phaser__GT_clj(button.play(phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(frame_rate),phzr.impl.utils.core.clj__GT_phaser(loop),phzr.impl.utils.core.clj__GT_phaser(kill_on_complete)));
});

phzr.button.play.cljs$lang$maxFixedArity = 5;

/**
 * Automatically called by World.preUpdate.
 */
phzr.button.pre_update = (function phzr$button$pre_update(button){
return phzr.impl.utils.core.phaser__GT_clj(button.preUpdate());
});
/**
 * Removes a child from the container.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The DisplayObject to remove
 * 
 *   Returns:  PIXI.DisplayObject - The child that was removed.
 */
phzr.button.remove_child = (function phzr$button$remove_child(button,child){
return phzr.impl.utils.core.phaser__GT_clj(button.removeChild(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Removes a child from the specified index position.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * index (Number) - The index to get the child from
 * 
 *   Returns:  PIXI.DisplayObject - The child that was removed.
 */
phzr.button.remove_child_at = (function phzr$button$remove_child_at(button,index){
return phzr.impl.utils.core.phaser__GT_clj(button.removeChildAt(phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Removes all children from this container that are within the begin and end indexes.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * begin-index (Number) - The beginning position. Default value is 0.
 *  * end-index (Number) - The ending position. Default value is size of the container.
 */
phzr.button.remove_children = (function phzr$button$remove_children(button,begin_index,end_index){
return phzr.impl.utils.core.phaser__GT_clj(button.removeChildren(phzr.impl.utils.core.clj__GT_phaser(begin_index),phzr.impl.utils.core.clj__GT_phaser(end_index)));
});
/**
 * Removes the current stage reference from the container and all of its children.
 */
phzr.button.remove_stage_reference = (function phzr$button$remove_stage_reference(button){
return phzr.impl.utils.core.phaser__GT_clj(button.removeStageReference());
});
/**
 * Resets the Game Object.
 * 
 *   This moves the Game Object to the given x/y world coordinates and sets `fresh`, `exists`, 
 *   `visible` and `renderable` to true.
 * 
 *   If this Game Object has the LifeSpan component it will also set `alive` to true and `health` to the given value.
 * 
 *   If this Game Object has a Physics Body it will reset the Body.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * x (number) - The x coordinate (in world space) to position the Game Object at.
 *  * y (number) - The y coordinate (in world space) to position the Game Object at.
 *  * health (number) {optional} - The health to give the Game Object if it has the Health component.
 * 
 *   Returns:  PIXI.DisplayObject - This instance.
 */
phzr.button.reset = (function phzr$button$reset(var_args){
var args28339 = [];
var len__21323__auto___28342 = arguments.length;
var i__21324__auto___28343 = (0);
while(true){
if((i__21324__auto___28343 < len__21323__auto___28342)){
args28339.push((arguments[i__21324__auto___28343]));

var G__28344 = (i__21324__auto___28343 + (1));
i__21324__auto___28343 = G__28344;
continue;
} else {
}
break;
}

var G__28341 = args28339.length;
switch (G__28341) {
case 3:
return phzr.button.reset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.button.reset.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28339.length)].join('')));

}
});

phzr.button.reset.cljs$core$IFn$_invoke$arity$3 = (function (button,x,y){
return phzr.impl.utils.core.phaser__GT_clj(button.reset(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.button.reset.cljs$core$IFn$_invoke$arity$4 = (function (button,x,y,health){
return phzr.impl.utils.core.phaser__GT_clj(button.reset(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(health)));
});

phzr.button.reset.cljs$lang$maxFixedArity = 4;

/**
 * Resets the texture frame dimensions that the Game Object uses for rendering.
 */
phzr.button.reset_frame = (function phzr$button$reset_frame(button){
return phzr.impl.utils.core.phaser__GT_clj(button.resetFrame());
});
/**
 * Resizes the Frame dimensions that the Game Object uses for rendering.
 * 
 *   You shouldn't normally need to ever call this, but in the case of special texture types such as Video or BitmapData
 *   it can be useful to adjust the dimensions directly in this way.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * parent (object) - The parent texture object that caused the resize, i.e. a Phaser.Video object.
 *  * width (integer) - The new width of the texture.
 *  * height (integer) - The new height of the texture.
 */
phzr.button.resize_frame = (function phzr$button$resize_frame(button,parent,width,height){
return phzr.impl.utils.core.phaser__GT_clj(button.resizeFrame(phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height)));
});
/**
 * Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.
 * 
 *   A resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.
 * 
 *   It will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * health (number) {optional} - The health to give the Game Object. Only set if the GameObject has the Health component.
 * 
 *   Returns:  PIXI.DisplayObject - This instance.
 */
phzr.button.revive = (function phzr$button$revive(var_args){
var args28346 = [];
var len__21323__auto___28349 = arguments.length;
var i__21324__auto___28350 = (0);
while(true){
if((i__21324__auto___28350 < len__21323__auto___28349)){
args28346.push((arguments[i__21324__auto___28350]));

var G__28351 = (i__21324__auto___28350 + (1));
i__21324__auto___28350 = G__28351;
continue;
} else {
}
break;
}

var G__28348 = args28346.length;
switch (G__28348) {
case 1:
return phzr.button.revive.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.button.revive.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28346.length)].join('')));

}
});

phzr.button.revive.cljs$core$IFn$_invoke$arity$1 = (function (button){
return phzr.impl.utils.core.phaser__GT_clj(button.revive());
});

phzr.button.revive.cljs$core$IFn$_invoke$arity$2 = (function (button,health){
return phzr.impl.utils.core.phaser__GT_clj(button.revive(phzr.impl.utils.core.clj__GT_phaser(health)));
});

phzr.button.revive.cljs$lang$maxFixedArity = 2;

/**
 * Sends this Game Object to the bottom of its parents display list.
 *   Visually this means it will render below all other children in the same Group.
 * 
 *   If this Game Object hasn't been added to a custom Group then this method will send it to the bottom of the Game World, 
 *   because the World is the root Group from which all Game Objects descend.
 * 
 *   Returns:  PIXI.DisplayObject - This instance.
 */
phzr.button.send_to_back = (function phzr$button$send_to_back(button){
return phzr.impl.utils.core.phaser__GT_clj(button.sendToBack());
});
/**
 * Changes the position of an existing child in the display object container
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The child DisplayObject instance for which you want to change the index number
 *  * index (Number) - The resulting index number for the child display object
 */
phzr.button.set_child_index = (function phzr$button$set_child_index(button,child,index){
return phzr.impl.utils.core.phaser__GT_clj(button.setChildIndex(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * The Sound to be played when a Pointer presses down on this Button.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * sound (Phaser.Sound | Phaser.AudioSprite) - The Sound that will be played.
 *  * marker (string) {optional} - A Sound Marker that will be used in the playback.
 */
phzr.button.set_down_sound = (function phzr$button$set_down_sound(var_args){
var args28353 = [];
var len__21323__auto___28356 = arguments.length;
var i__21324__auto___28357 = (0);
while(true){
if((i__21324__auto___28357 < len__21323__auto___28356)){
args28353.push((arguments[i__21324__auto___28357]));

var G__28358 = (i__21324__auto___28357 + (1));
i__21324__auto___28357 = G__28358;
continue;
} else {
}
break;
}

var G__28355 = args28353.length;
switch (G__28355) {
case 2:
return phzr.button.set_down_sound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.button.set_down_sound.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28353.length)].join('')));

}
});

phzr.button.set_down_sound.cljs$core$IFn$_invoke$arity$2 = (function (button,sound){
return phzr.impl.utils.core.phaser__GT_clj(button.setDownSound(phzr.impl.utils.core.clj__GT_phaser(sound)));
});

phzr.button.set_down_sound.cljs$core$IFn$_invoke$arity$3 = (function (button,sound,marker){
return phzr.impl.utils.core.phaser__GT_clj(button.setDownSound(phzr.impl.utils.core.clj__GT_phaser(sound),phzr.impl.utils.core.clj__GT_phaser(marker)));
});

phzr.button.set_down_sound.cljs$lang$maxFixedArity = 3;

/**
 * Sets the texture frame the Game Object uses for rendering.
 * 
 *   This is primarily an internal method used by `loadTexture`, but is exposed for the use of plugins and custom classes.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * frame (Phaser.Frame) - The Frame to be used by the texture.
 */
phzr.button.set_frame = (function phzr$button$set_frame(button,frame){
return phzr.impl.utils.core.phaser__GT_clj(button.setFrame(phzr.impl.utils.core.clj__GT_phaser(frame)));
});
/**
 * Used to manually set the frames that will be used for the different states of the Button.
 * 
 *   Frames can be specified as either an integer (the frame ID) or a string (the frame name); these are the same values that can be used with a Sprite constructor.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * over-frame (string | integer) {optional} - The frame / frameName when the button is in the Over state.
 *  * out-frame (string | integer) {optional} - The frame / frameName when the button is in the Out state.
 *  * down-frame (string | integer) {optional} - The frame / frameName when the button is in the Down state.
 *  * up-frame (string | integer) {optional} - The frame / frameName when the button is in the Up state.
 */
phzr.button.set_frames = (function phzr$button$set_frames(var_args){
var args28360 = [];
var len__21323__auto___28363 = arguments.length;
var i__21324__auto___28364 = (0);
while(true){
if((i__21324__auto___28364 < len__21323__auto___28363)){
args28360.push((arguments[i__21324__auto___28364]));

var G__28365 = (i__21324__auto___28364 + (1));
i__21324__auto___28364 = G__28365;
continue;
} else {
}
break;
}

var G__28362 = args28360.length;
switch (G__28362) {
case 1:
return phzr.button.set_frames.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.button.set_frames.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.button.set_frames.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.button.set_frames.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.button.set_frames.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28360.length)].join('')));

}
});

phzr.button.set_frames.cljs$core$IFn$_invoke$arity$1 = (function (button){
return phzr.impl.utils.core.phaser__GT_clj(button.setFrames());
});

phzr.button.set_frames.cljs$core$IFn$_invoke$arity$2 = (function (button,over_frame){
return phzr.impl.utils.core.phaser__GT_clj(button.setFrames(phzr.impl.utils.core.clj__GT_phaser(over_frame)));
});

phzr.button.set_frames.cljs$core$IFn$_invoke$arity$3 = (function (button,over_frame,out_frame){
return phzr.impl.utils.core.phaser__GT_clj(button.setFrames(phzr.impl.utils.core.clj__GT_phaser(over_frame),phzr.impl.utils.core.clj__GT_phaser(out_frame)));
});

phzr.button.set_frames.cljs$core$IFn$_invoke$arity$4 = (function (button,over_frame,out_frame,down_frame){
return phzr.impl.utils.core.phaser__GT_clj(button.setFrames(phzr.impl.utils.core.clj__GT_phaser(over_frame),phzr.impl.utils.core.clj__GT_phaser(out_frame),phzr.impl.utils.core.clj__GT_phaser(down_frame)));
});

phzr.button.set_frames.cljs$core$IFn$_invoke$arity$5 = (function (button,over_frame,out_frame,down_frame,up_frame){
return phzr.impl.utils.core.phaser__GT_clj(button.setFrames(phzr.impl.utils.core.clj__GT_phaser(over_frame),phzr.impl.utils.core.clj__GT_phaser(out_frame),phzr.impl.utils.core.clj__GT_phaser(down_frame),phzr.impl.utils.core.clj__GT_phaser(up_frame)));
});

phzr.button.set_frames.cljs$lang$maxFixedArity = 5;

/**
 * The Sound to be played when a Pointer moves out of this Button.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * sound (Phaser.Sound | Phaser.AudioSprite) - The Sound that will be played.
 *  * marker (string) {optional} - A Sound Marker that will be used in the playback.
 */
phzr.button.set_out_sound = (function phzr$button$set_out_sound(var_args){
var args28367 = [];
var len__21323__auto___28370 = arguments.length;
var i__21324__auto___28371 = (0);
while(true){
if((i__21324__auto___28371 < len__21323__auto___28370)){
args28367.push((arguments[i__21324__auto___28371]));

var G__28372 = (i__21324__auto___28371 + (1));
i__21324__auto___28371 = G__28372;
continue;
} else {
}
break;
}

var G__28369 = args28367.length;
switch (G__28369) {
case 2:
return phzr.button.set_out_sound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.button.set_out_sound.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28367.length)].join('')));

}
});

phzr.button.set_out_sound.cljs$core$IFn$_invoke$arity$2 = (function (button,sound){
return phzr.impl.utils.core.phaser__GT_clj(button.setOutSound(phzr.impl.utils.core.clj__GT_phaser(sound)));
});

phzr.button.set_out_sound.cljs$core$IFn$_invoke$arity$3 = (function (button,sound,marker){
return phzr.impl.utils.core.phaser__GT_clj(button.setOutSound(phzr.impl.utils.core.clj__GT_phaser(sound),phzr.impl.utils.core.clj__GT_phaser(marker)));
});

phzr.button.set_out_sound.cljs$lang$maxFixedArity = 3;

/**
 * The Sound to be played when a Pointer moves over this Button.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * sound (Phaser.Sound | Phaser.AudioSprite) - The Sound that will be played.
 *  * marker (string) {optional} - A Sound Marker that will be used in the playback.
 */
phzr.button.set_over_sound = (function phzr$button$set_over_sound(var_args){
var args28374 = [];
var len__21323__auto___28377 = arguments.length;
var i__21324__auto___28378 = (0);
while(true){
if((i__21324__auto___28378 < len__21323__auto___28377)){
args28374.push((arguments[i__21324__auto___28378]));

var G__28379 = (i__21324__auto___28378 + (1));
i__21324__auto___28378 = G__28379;
continue;
} else {
}
break;
}

var G__28376 = args28374.length;
switch (G__28376) {
case 2:
return phzr.button.set_over_sound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.button.set_over_sound.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28374.length)].join('')));

}
});

phzr.button.set_over_sound.cljs$core$IFn$_invoke$arity$2 = (function (button,sound){
return phzr.impl.utils.core.phaser__GT_clj(button.setOverSound(phzr.impl.utils.core.clj__GT_phaser(sound)));
});

phzr.button.set_over_sound.cljs$core$IFn$_invoke$arity$3 = (function (button,sound,marker){
return phzr.impl.utils.core.phaser__GT_clj(button.setOverSound(phzr.impl.utils.core.clj__GT_phaser(sound),phzr.impl.utils.core.clj__GT_phaser(marker)));
});

phzr.button.set_over_sound.cljs$lang$maxFixedArity = 3;

/**
 * Sets the sounds to be played whenever this Button is interacted with. Sounds can be either full Sound objects, or markers pointing to a section of a Sound object.
 *   The most common forms of sounds are 'hover' effects and 'click' effects, which is why the order of the parameters is overSound then downSound.
 * 
 *   Call this function with no parameters to reset all sounds on this Button.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * over-sound (Phaser.Sound | Phaser.AudioSprite) {optional} - Over Button Sound.
 *  * over-marker (string) {optional} - Over Button Sound Marker.
 *  * down-sound (Phaser.Sound | Phaser.AudioSprite) {optional} - Down Button Sound.
 *  * down-marker (string) {optional} - Down Button Sound Marker.
 *  * out-sound (Phaser.Sound | Phaser.AudioSprite) {optional} - Out Button Sound.
 *  * out-marker (string) {optional} - Out Button Sound Marker.
 *  * up-sound (Phaser.Sound | Phaser.AudioSprite) {optional} - Up Button Sound.
 *  * up-marker (string) {optional} - Up Button Sound Marker.
 */
phzr.button.set_sounds = (function phzr$button$set_sounds(var_args){
var args28381 = [];
var len__21323__auto___28384 = arguments.length;
var i__21324__auto___28385 = (0);
while(true){
if((i__21324__auto___28385 < len__21323__auto___28384)){
args28381.push((arguments[i__21324__auto___28385]));

var G__28386 = (i__21324__auto___28385 + (1));
i__21324__auto___28385 = G__28386;
continue;
} else {
}
break;
}

var G__28383 = args28381.length;
switch (G__28383) {
case 1:
return phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28381.length)].join('')));

}
});

phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$1 = (function (button){
return phzr.impl.utils.core.phaser__GT_clj(button.setSounds());
});

phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$2 = (function (button,over_sound){
return phzr.impl.utils.core.phaser__GT_clj(button.setSounds(phzr.impl.utils.core.clj__GT_phaser(over_sound)));
});

phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$3 = (function (button,over_sound,over_marker){
return phzr.impl.utils.core.phaser__GT_clj(button.setSounds(phzr.impl.utils.core.clj__GT_phaser(over_sound),phzr.impl.utils.core.clj__GT_phaser(over_marker)));
});

phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$4 = (function (button,over_sound,over_marker,down_sound){
return phzr.impl.utils.core.phaser__GT_clj(button.setSounds(phzr.impl.utils.core.clj__GT_phaser(over_sound),phzr.impl.utils.core.clj__GT_phaser(over_marker),phzr.impl.utils.core.clj__GT_phaser(down_sound)));
});

phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$5 = (function (button,over_sound,over_marker,down_sound,down_marker){
return phzr.impl.utils.core.phaser__GT_clj(button.setSounds(phzr.impl.utils.core.clj__GT_phaser(over_sound),phzr.impl.utils.core.clj__GT_phaser(over_marker),phzr.impl.utils.core.clj__GT_phaser(down_sound),phzr.impl.utils.core.clj__GT_phaser(down_marker)));
});

phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$6 = (function (button,over_sound,over_marker,down_sound,down_marker,out_sound){
return phzr.impl.utils.core.phaser__GT_clj(button.setSounds(phzr.impl.utils.core.clj__GT_phaser(over_sound),phzr.impl.utils.core.clj__GT_phaser(over_marker),phzr.impl.utils.core.clj__GT_phaser(down_sound),phzr.impl.utils.core.clj__GT_phaser(down_marker),phzr.impl.utils.core.clj__GT_phaser(out_sound)));
});

phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$7 = (function (button,over_sound,over_marker,down_sound,down_marker,out_sound,out_marker){
return phzr.impl.utils.core.phaser__GT_clj(button.setSounds(phzr.impl.utils.core.clj__GT_phaser(over_sound),phzr.impl.utils.core.clj__GT_phaser(over_marker),phzr.impl.utils.core.clj__GT_phaser(down_sound),phzr.impl.utils.core.clj__GT_phaser(down_marker),phzr.impl.utils.core.clj__GT_phaser(out_sound),phzr.impl.utils.core.clj__GT_phaser(out_marker)));
});

phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$8 = (function (button,over_sound,over_marker,down_sound,down_marker,out_sound,out_marker,up_sound){
return phzr.impl.utils.core.phaser__GT_clj(button.setSounds(phzr.impl.utils.core.clj__GT_phaser(over_sound),phzr.impl.utils.core.clj__GT_phaser(over_marker),phzr.impl.utils.core.clj__GT_phaser(down_sound),phzr.impl.utils.core.clj__GT_phaser(down_marker),phzr.impl.utils.core.clj__GT_phaser(out_sound),phzr.impl.utils.core.clj__GT_phaser(out_marker),phzr.impl.utils.core.clj__GT_phaser(up_sound)));
});

phzr.button.set_sounds.cljs$core$IFn$_invoke$arity$9 = (function (button,over_sound,over_marker,down_sound,down_marker,out_sound,out_marker,up_sound,up_marker){
return phzr.impl.utils.core.phaser__GT_clj(button.setSounds(phzr.impl.utils.core.clj__GT_phaser(over_sound),phzr.impl.utils.core.clj__GT_phaser(over_marker),phzr.impl.utils.core.clj__GT_phaser(down_sound),phzr.impl.utils.core.clj__GT_phaser(down_marker),phzr.impl.utils.core.clj__GT_phaser(out_sound),phzr.impl.utils.core.clj__GT_phaser(out_marker),phzr.impl.utils.core.clj__GT_phaser(up_sound),phzr.impl.utils.core.clj__GT_phaser(up_marker)));
});

phzr.button.set_sounds.cljs$lang$maxFixedArity = 9;

/**
 * Sets the containers Stage reference. This is the Stage that this object, and all of its children, is connected to.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * stage (PIXI.Stage) - the stage that the container will have as its current stage reference
 */
phzr.button.set_stage_reference = (function phzr$button$set_stage_reference(button,stage){
return phzr.impl.utils.core.phaser__GT_clj(button.setStageReference(phzr.impl.utils.core.clj__GT_phaser(stage)));
});
/**
 * Sets the texture of the sprite
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * texture (PIXI.Texture) - The PIXI texture that is displayed by the sprite
 */
phzr.button.set_texture = (function phzr$button$set_texture(button,texture){
return phzr.impl.utils.core.phaser__GT_clj(button.setTexture(phzr.impl.utils.core.clj__GT_phaser(texture)));
});
/**
 * The Sound to be played when a Pointer has pressed down and is released from this Button.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * sound (Phaser.Sound | Phaser.AudioSprite) - The Sound that will be played.
 *  * marker (string) {optional} - A Sound Marker that will be used in the playback.
 */
phzr.button.set_up_sound = (function phzr$button$set_up_sound(var_args){
var args28388 = [];
var len__21323__auto___28391 = arguments.length;
var i__21324__auto___28392 = (0);
while(true){
if((i__21324__auto___28392 < len__21323__auto___28391)){
args28388.push((arguments[i__21324__auto___28392]));

var G__28393 = (i__21324__auto___28392 + (1));
i__21324__auto___28392 = G__28393;
continue;
} else {
}
break;
}

var G__28390 = args28388.length;
switch (G__28390) {
case 2:
return phzr.button.set_up_sound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.button.set_up_sound.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28388.length)].join('')));

}
});

phzr.button.set_up_sound.cljs$core$IFn$_invoke$arity$2 = (function (button,sound){
return phzr.impl.utils.core.phaser__GT_clj(button.setUpSound(phzr.impl.utils.core.clj__GT_phaser(sound)));
});

phzr.button.set_up_sound.cljs$core$IFn$_invoke$arity$3 = (function (button,sound,marker){
return phzr.impl.utils.core.phaser__GT_clj(button.setUpSound(phzr.impl.utils.core.clj__GT_phaser(sound),phzr.impl.utils.core.clj__GT_phaser(marker)));
});

phzr.button.set_up_sound.cljs$lang$maxFixedArity = 3;

/**
 * Swaps the position of 2 Display Objects within this container.
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - -
 *  * child-2 (PIXI.DisplayObject) - -
 */
phzr.button.swap_children = (function phzr$button$swap_children(button,child,child_2){
return phzr.impl.utils.core.phaser__GT_clj(button.swapChildren(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(child_2)));
});
/**
 * Calculates the global position of the display object
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * position (Point) - The world origin to calculate from
 * 
 *   Returns:  Point - A point object representing the position of this object
 */
phzr.button.to_global = (function phzr$button$to_global(button,position){
return phzr.impl.utils.core.phaser__GT_clj(button.toGlobal(phzr.impl.utils.core.clj__GT_phaser(position)));
});
/**
 * Calculates the local position of the display object relative to another point
 * 
 *   Parameters:
 *  * button (Phaser.Button) - Targeted instance for method
 *  * position (Point) - The world origin to calculate from
 *  * from (PIXI.DisplayObject) {optional} - The DisplayObject to calculate the global position from
 * 
 *   Returns:  Point - A point object representing the position of this object
 */
phzr.button.to_local = (function phzr$button$to_local(var_args){
var args28395 = [];
var len__21323__auto___28398 = arguments.length;
var i__21324__auto___28399 = (0);
while(true){
if((i__21324__auto___28399 < len__21323__auto___28398)){
args28395.push((arguments[i__21324__auto___28399]));

var G__28400 = (i__21324__auto___28399 + (1));
i__21324__auto___28399 = G__28400;
continue;
} else {
}
break;
}

var G__28397 = args28395.length;
switch (G__28397) {
case 2:
return phzr.button.to_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.button.to_local.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28395.length)].join('')));

}
});

phzr.button.to_local.cljs$core$IFn$_invoke$arity$2 = (function (button,position){
return phzr.impl.utils.core.phaser__GT_clj(button.toLocal(phzr.impl.utils.core.clj__GT_phaser(position)));
});

phzr.button.to_local.cljs$core$IFn$_invoke$arity$3 = (function (button,position,from){
return phzr.impl.utils.core.phaser__GT_clj(button.toLocal(phzr.impl.utils.core.clj__GT_phaser(position),phzr.impl.utils.core.clj__GT_phaser(from)));
});

phzr.button.to_local.cljs$lang$maxFixedArity = 3;

/**
 * Override this method in your own custom objects to handle any update requirements.
 *   It is called immediately after `preUpdate` and before `postUpdate`.
 *   Remember if this Game Object has any children you should call update on those too.
 */
phzr.button.update = (function phzr$button$update(button){
return phzr.impl.utils.core.phaser__GT_clj(button.update());
});
/**
 * Generates and updates the cached sprite for this object.
 */
phzr.button.update_cache = (function phzr$button$update_cache(button){
return phzr.impl.utils.core.phaser__GT_clj(button.updateCache());
});
/**
 * If you have set a crop rectangle on this Game Object via `crop` and since modified the `cropRect` property,
 *   or the rectangle it references, then you need to update the crop frame by calling this method.
 */
phzr.button.update_crop = (function phzr$button$update_crop(button){
return phzr.impl.utils.core.phaser__GT_clj(button.updateCrop());
});
