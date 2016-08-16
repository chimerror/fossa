// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.sprite');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
/**
 * Sprites are the lifeblood of your game, used for nearly everything visual.
 * 
 *   At its most basic a Sprite consists of a set of coordinates and a texture that is rendered to the canvas.
 *   They also contain additional properties allowing for physics motion (via Sprite.body), input handling (via Sprite.input),
 *   events (via Sprite.events), animation (via Sprite.animations), camera culling and more. Please see the Examples for use cases.
 * 
 *   Parameters:
 *  * game (Phaser.Game) - A reference to the currently running game.
 *  * x (number) - The x coordinate (in world space) to position the Sprite at.
 *  * y (number) - The y coordinate (in world space) to position the Sprite at.
 *  * key (string | Phaser.RenderTexture | Phaser.BitmapData | PIXI.Texture) - This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 *  * frame (string | number) - If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
phzr.sprite.__GT_Sprite = (function phzr$sprite$__GT_Sprite(game,x,y,key,frame){
return (new Phaser.Sprite(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame)));
});
/**
 * Adds a child to the container.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The DisplayObject to add to the container
 * 
 *   Returns:  PIXI.DisplayObject - The child that was added.
 */
phzr.sprite.add_child = (function phzr$sprite$add_child(sprite,child){
return phzr.impl.utils.core.phaser__GT_clj(sprite.addChild(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The child to add
 *  * index (Number) - The index to place the child in
 * 
 *   Returns:  PIXI.DisplayObject - The child that was added.
 */
phzr.sprite.add_child_at = (function phzr$sprite$add_child_at(sprite,child,index){
return phzr.impl.utils.core.phaser__GT_clj(sprite.addChildAt(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(index)));
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
phzr.sprite.bring_to_top = (function phzr$sprite$bring_to_top(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.bringToTop());
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
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * rect (Phaser.Rectangle) - The Rectangle used during cropping. Pass null or no parameters to clear a previously set crop rectangle.
 *  * copy (boolean) {optional} - If false `cropRect` will be stored as a reference to the given rect. If true it will copy the rect values into a local Phaser Rectangle object stored in cropRect.
 */
phzr.sprite.crop = (function phzr$sprite$crop(var_args){
var args28136 = [];
var len__21323__auto___28139 = arguments.length;
var i__21324__auto___28140 = (0);
while(true){
if((i__21324__auto___28140 < len__21323__auto___28139)){
args28136.push((arguments[i__21324__auto___28140]));

var G__28141 = (i__21324__auto___28140 + (1));
i__21324__auto___28140 = G__28141;
continue;
} else {
}
break;
}

var G__28138 = args28136.length;
switch (G__28138) {
case 2:
return phzr.sprite.crop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.sprite.crop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28136.length)].join('')));

}
});

phzr.sprite.crop.cljs$core$IFn$_invoke$arity$2 = (function (sprite,rect){
return phzr.impl.utils.core.phaser__GT_clj(sprite.crop(phzr.impl.utils.core.clj__GT_phaser(rect)));
});

phzr.sprite.crop.cljs$core$IFn$_invoke$arity$3 = (function (sprite,rect,copy){
return phzr.impl.utils.core.phaser__GT_clj(sprite.crop(phzr.impl.utils.core.clj__GT_phaser(rect),phzr.impl.utils.core.clj__GT_phaser(copy)));
});

phzr.sprite.crop.cljs$lang$maxFixedArity = 3;

/**
 * Destroy this DisplayObject.
 *   Removes all references to transformCallbacks, its parent, the stage, filters, bounds, mask and cached Sprites.
 */
phzr.sprite.destroy = (function phzr$sprite$destroy(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.destroy());
});
/**
 * Useful function that returns a texture of the displayObject object that can then be used to create sprites
 *   This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * resolution (Number) - The resolution of the texture being generated
 *  * scale-mode (Number) - See PIXI.scaleModes for possible values
 *  * renderer (PIXI.CanvasRenderer | PIXI.WebGLRenderer) - The renderer used to generate the texture.
 * 
 *   Returns:  PIXI.Texture - a texture of the graphics object
 */
phzr.sprite.generate_texture = (function phzr$sprite$generate_texture(sprite,resolution,scale_mode,renderer){
return phzr.impl.utils.core.phaser__GT_clj(sprite.generateTexture(phzr.impl.utils.core.clj__GT_phaser(resolution),phzr.impl.utils.core.clj__GT_phaser(scale_mode),phzr.impl.utils.core.clj__GT_phaser(renderer)));
});
/**
 * Returns the bounds of the Sprite as a rectangle. The bounds calculation takes the worldTransform into account.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * matrix (Matrix) - the transformation matrix of the sprite
 * 
 *   Returns:  Rectangle - the framing rectangle
 */
phzr.sprite.get_bounds = (function phzr$sprite$get_bounds(sprite,matrix){
return phzr.impl.utils.core.phaser__GT_clj(sprite.getBounds(phzr.impl.utils.core.clj__GT_phaser(matrix)));
});
/**
 * Returns the child at the specified index
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * index (Number) - The index to get the child from
 * 
 *   Returns:  PIXI.DisplayObject - The child at the given index, if any.
 */
phzr.sprite.get_child_at = (function phzr$sprite$get_child_at(sprite,index){
return phzr.impl.utils.core.phaser__GT_clj(sprite.getChildAt(phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Returns the index position of a child DisplayObject instance
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The DisplayObject instance to identify
 * 
 *   Returns:  Number - The index position of the child display object to identify
 */
phzr.sprite.get_child_index = (function phzr$sprite$get_child_index(sprite,child){
return phzr.impl.utils.core.phaser__GT_clj(sprite.getChildIndex(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Retrieves the non-global local bounds of the displayObjectContainer as a rectangle. The calculation takes all visible children into consideration.
 * 
 *   Returns:  Rectangle - The rectangular bounding area
 */
phzr.sprite.get_local_bounds = (function phzr$sprite$get_local_bounds(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.getLocalBounds());
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
phzr.sprite.kill = (function phzr$sprite$kill(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.kill());
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
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * key (string | Phaser.RenderTexture | Phaser.BitmapData | Phaser.Video | PIXI.Texture) - This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache Image entry, or an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
 *  * frame (string | number) {optional} - If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 *  * stop-animation (boolean) {optional} - If an animation is already playing on this Sprite you can choose to stop it or let it carry on playing.
 */
phzr.sprite.load_texture = (function phzr$sprite$load_texture(var_args){
var args28143 = [];
var len__21323__auto___28146 = arguments.length;
var i__21324__auto___28147 = (0);
while(true){
if((i__21324__auto___28147 < len__21323__auto___28146)){
args28143.push((arguments[i__21324__auto___28147]));

var G__28148 = (i__21324__auto___28147 + (1));
i__21324__auto___28147 = G__28148;
continue;
} else {
}
break;
}

var G__28145 = args28143.length;
switch (G__28145) {
case 2:
return phzr.sprite.load_texture.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.sprite.load_texture.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.sprite.load_texture.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28143.length)].join('')));

}
});

phzr.sprite.load_texture.cljs$core$IFn$_invoke$arity$2 = (function (sprite,key){
return phzr.impl.utils.core.phaser__GT_clj(sprite.loadTexture(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.sprite.load_texture.cljs$core$IFn$_invoke$arity$3 = (function (sprite,key,frame){
return phzr.impl.utils.core.phaser__GT_clj(sprite.loadTexture(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame)));
});

phzr.sprite.load_texture.cljs$core$IFn$_invoke$arity$4 = (function (sprite,key,frame,stop_animation){
return phzr.impl.utils.core.phaser__GT_clj(sprite.loadTexture(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame),phzr.impl.utils.core.clj__GT_phaser(stop_animation)));
});

phzr.sprite.load_texture.cljs$lang$maxFixedArity = 4;

/**
 * Moves this Game Object down one place in its parents display list.
 *   This call has no effect if the Game Object is already at the bottom of the display list.
 * 
 *   If this Game Object hasn't been added to a custom Group then this method will move it one object down within the Game World, 
 *   because the World is the root Group from which all Game Objects descend.
 * 
 *   Returns:  PIXI.DisplayObject - This instance.
 */
phzr.sprite.move_down = (function phzr$sprite$move_down(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.moveDown());
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
phzr.sprite.move_up = (function phzr$sprite$move_up(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.moveUp());
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
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * display-object (Phaser.Sprite | Phaser.Image | Phaser.TileSprite | Phaser.Button | PIXI.DisplayObject) - The display object to check against.
 * 
 *   Returns:  boolean - True if the bounds of this Game Object intersects at any point with the bounds of the given display object.
 */
phzr.sprite.overlap = (function phzr$sprite$overlap(sprite,display_object){
return phzr.impl.utils.core.phaser__GT_clj(sprite.overlap(phzr.impl.utils.core.clj__GT_phaser(display_object)));
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
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * name (string) - The name of the animation to be played, e.g. 'fire', 'walk', 'jump'. Must have been previously created via 'AnimationManager.add'.
 *  * frame-rate (number) {optional} - The framerate to play the animation at. The speed is given in frames per second. If not provided the previously set frameRate of the Animation is used.
 *  * loop (boolean) {optional} - Should the animation be looped after playback. If not provided the previously set loop value of the Animation is used.
 *  * kill-on-complete (boolean) {optional} - If set to true when the animation completes (only happens if loop=false) the parent Sprite will be killed.
 * 
 *   Returns:  Phaser.Animation - A reference to playing Animation.
 */
phzr.sprite.play = (function phzr$sprite$play(var_args){
var args28150 = [];
var len__21323__auto___28153 = arguments.length;
var i__21324__auto___28154 = (0);
while(true){
if((i__21324__auto___28154 < len__21323__auto___28153)){
args28150.push((arguments[i__21324__auto___28154]));

var G__28155 = (i__21324__auto___28154 + (1));
i__21324__auto___28154 = G__28155;
continue;
} else {
}
break;
}

var G__28152 = args28150.length;
switch (G__28152) {
case 2:
return phzr.sprite.play.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.sprite.play.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.sprite.play.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.sprite.play.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28150.length)].join('')));

}
});

phzr.sprite.play.cljs$core$IFn$_invoke$arity$2 = (function (sprite,name){
return phzr.impl.utils.core.phaser__GT_clj(sprite.play(phzr.impl.utils.core.clj__GT_phaser(name)));
});

phzr.sprite.play.cljs$core$IFn$_invoke$arity$3 = (function (sprite,name,frame_rate){
return phzr.impl.utils.core.phaser__GT_clj(sprite.play(phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(frame_rate)));
});

phzr.sprite.play.cljs$core$IFn$_invoke$arity$4 = (function (sprite,name,frame_rate,loop){
return phzr.impl.utils.core.phaser__GT_clj(sprite.play(phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(frame_rate),phzr.impl.utils.core.clj__GT_phaser(loop)));
});

phzr.sprite.play.cljs$core$IFn$_invoke$arity$5 = (function (sprite,name,frame_rate,loop,kill_on_complete){
return phzr.impl.utils.core.phaser__GT_clj(sprite.play(phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(frame_rate),phzr.impl.utils.core.clj__GT_phaser(loop),phzr.impl.utils.core.clj__GT_phaser(kill_on_complete)));
});

phzr.sprite.play.cljs$lang$maxFixedArity = 5;

/**
 * Automatically called by World.preUpdate.
 * 
 *   Returns:  boolean - True if the Sprite was rendered, otherwise false.
 */
phzr.sprite.pre_update = (function phzr$sprite$pre_update(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.preUpdate());
});
/**
 * Removes a child from the container.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The DisplayObject to remove
 * 
 *   Returns:  PIXI.DisplayObject - The child that was removed.
 */
phzr.sprite.remove_child = (function phzr$sprite$remove_child(sprite,child){
return phzr.impl.utils.core.phaser__GT_clj(sprite.removeChild(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Removes a child from the specified index position.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * index (Number) - The index to get the child from
 * 
 *   Returns:  PIXI.DisplayObject - The child that was removed.
 */
phzr.sprite.remove_child_at = (function phzr$sprite$remove_child_at(sprite,index){
return phzr.impl.utils.core.phaser__GT_clj(sprite.removeChildAt(phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Removes all children from this container that are within the begin and end indexes.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * begin-index (Number) - The beginning position. Default value is 0.
 *  * end-index (Number) - The ending position. Default value is size of the container.
 */
phzr.sprite.remove_children = (function phzr$sprite$remove_children(sprite,begin_index,end_index){
return phzr.impl.utils.core.phaser__GT_clj(sprite.removeChildren(phzr.impl.utils.core.clj__GT_phaser(begin_index),phzr.impl.utils.core.clj__GT_phaser(end_index)));
});
/**
 * Removes the current stage reference from the container and all of its children.
 */
phzr.sprite.remove_stage_reference = (function phzr$sprite$remove_stage_reference(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.removeStageReference());
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
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * x (number) - The x coordinate (in world space) to position the Game Object at.
 *  * y (number) - The y coordinate (in world space) to position the Game Object at.
 *  * health (number) {optional} - The health to give the Game Object if it has the Health component.
 * 
 *   Returns:  PIXI.DisplayObject - This instance.
 */
phzr.sprite.reset = (function phzr$sprite$reset(var_args){
var args28157 = [];
var len__21323__auto___28160 = arguments.length;
var i__21324__auto___28161 = (0);
while(true){
if((i__21324__auto___28161 < len__21323__auto___28160)){
args28157.push((arguments[i__21324__auto___28161]));

var G__28162 = (i__21324__auto___28161 + (1));
i__21324__auto___28161 = G__28162;
continue;
} else {
}
break;
}

var G__28159 = args28157.length;
switch (G__28159) {
case 3:
return phzr.sprite.reset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.sprite.reset.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28157.length)].join('')));

}
});

phzr.sprite.reset.cljs$core$IFn$_invoke$arity$3 = (function (sprite,x,y){
return phzr.impl.utils.core.phaser__GT_clj(sprite.reset(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.sprite.reset.cljs$core$IFn$_invoke$arity$4 = (function (sprite,x,y,health){
return phzr.impl.utils.core.phaser__GT_clj(sprite.reset(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(health)));
});

phzr.sprite.reset.cljs$lang$maxFixedArity = 4;

/**
 * Resets the texture frame dimensions that the Game Object uses for rendering.
 */
phzr.sprite.reset_frame = (function phzr$sprite$reset_frame(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.resetFrame());
});
/**
 * Resizes the Frame dimensions that the Game Object uses for rendering.
 * 
 *   You shouldn't normally need to ever call this, but in the case of special texture types such as Video or BitmapData
 *   it can be useful to adjust the dimensions directly in this way.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * parent (object) - The parent texture object that caused the resize, i.e. a Phaser.Video object.
 *  * width (integer) - The new width of the texture.
 *  * height (integer) - The new height of the texture.
 */
phzr.sprite.resize_frame = (function phzr$sprite$resize_frame(sprite,parent,width,height){
return phzr.impl.utils.core.phaser__GT_clj(sprite.resizeFrame(phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height)));
});
/**
 * Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.
 * 
 *   A resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.
 * 
 *   It will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * health (number) {optional} - The health to give the Game Object. Only set if the GameObject has the Health component.
 * 
 *   Returns:  PIXI.DisplayObject - This instance.
 */
phzr.sprite.revive = (function phzr$sprite$revive(var_args){
var args28164 = [];
var len__21323__auto___28167 = arguments.length;
var i__21324__auto___28168 = (0);
while(true){
if((i__21324__auto___28168 < len__21323__auto___28167)){
args28164.push((arguments[i__21324__auto___28168]));

var G__28169 = (i__21324__auto___28168 + (1));
i__21324__auto___28168 = G__28169;
continue;
} else {
}
break;
}

var G__28166 = args28164.length;
switch (G__28166) {
case 1:
return phzr.sprite.revive.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.sprite.revive.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28164.length)].join('')));

}
});

phzr.sprite.revive.cljs$core$IFn$_invoke$arity$1 = (function (sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.revive());
});

phzr.sprite.revive.cljs$core$IFn$_invoke$arity$2 = (function (sprite,health){
return phzr.impl.utils.core.phaser__GT_clj(sprite.revive(phzr.impl.utils.core.clj__GT_phaser(health)));
});

phzr.sprite.revive.cljs$lang$maxFixedArity = 2;

/**
 * Sends this Game Object to the bottom of its parents display list.
 *   Visually this means it will render below all other children in the same Group.
 * 
 *   If this Game Object hasn't been added to a custom Group then this method will send it to the bottom of the Game World, 
 *   because the World is the root Group from which all Game Objects descend.
 * 
 *   Returns:  PIXI.DisplayObject - This instance.
 */
phzr.sprite.send_to_back = (function phzr$sprite$send_to_back(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.sendToBack());
});
/**
 * Changes the position of an existing child in the display object container
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The child DisplayObject instance for which you want to change the index number
 *  * index (Number) - The resulting index number for the child display object
 */
phzr.sprite.set_child_index = (function phzr$sprite$set_child_index(sprite,child,index){
return phzr.impl.utils.core.phaser__GT_clj(sprite.setChildIndex(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Sets the texture frame the Game Object uses for rendering.
 * 
 *   This is primarily an internal method used by `loadTexture`, but is exposed for the use of plugins and custom classes.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * frame (Phaser.Frame) - The Frame to be used by the texture.
 */
phzr.sprite.set_frame = (function phzr$sprite$set_frame(sprite,frame){
return phzr.impl.utils.core.phaser__GT_clj(sprite.setFrame(phzr.impl.utils.core.clj__GT_phaser(frame)));
});
/**
 * Sets the scaleMin and scaleMax values. These values are used to limit how far this Game Object will scale based on its parent.
 * 
 *   For example if this Game Object has a `minScale` value of 1 and its parent has a `scale` value of 0.5, the 0.5 will be ignored 
 *   and the scale value of 1 will be used, as the parents scale is lower than the minimum scale this Game Object should adhere to.
 * 
 *   By setting these values you can carefully control how Game Objects deal with responsive scaling.
 * 
 *   If only one parameter is given then that value will be used for both scaleMin and scaleMax:
 *   `setScaleMinMax(1)` = scaleMin.x, scaleMin.y, scaleMax.x and scaleMax.y all = 1
 * 
 *   If only two parameters are given the first is set as scaleMin.x and y and the second as scaleMax.x and y:
 *   `setScaleMinMax(0.5, 2)` = scaleMin.x and y = 0.5 and scaleMax.x and y = 2
 * 
 *   If you wish to set `scaleMin` with different values for x and y then either modify Game Object.scaleMin directly, 
 *   or pass `null` for the `maxX` and `maxY` parameters.
 * 
 *   Call `setScaleMinMax(null)` to clear all previously set values.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * min-x (number | null) - The minimum horizontal scale value this Game Object can scale down to.
 *  * min-y (number | null) - The minimum vertical scale value this Game Object can scale down to.
 *  * max-x (number | null) - The maximum horizontal scale value this Game Object can scale up to.
 *  * max-y (number | null) - The maximum vertical scale value this Game Object can scale up to.
 */
phzr.sprite.set_scale_min_max = (function phzr$sprite$set_scale_min_max(sprite,min_x,min_y,max_x,max_y){
return phzr.impl.utils.core.phaser__GT_clj(sprite.setScaleMinMax(phzr.impl.utils.core.clj__GT_phaser(min_x),phzr.impl.utils.core.clj__GT_phaser(min_y),phzr.impl.utils.core.clj__GT_phaser(max_x),phzr.impl.utils.core.clj__GT_phaser(max_y)));
});
/**
 * Sets the containers Stage reference. This is the Stage that this object, and all of its children, is connected to.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * stage (PIXI.Stage) - the stage that the container will have as its current stage reference
 */
phzr.sprite.set_stage_reference = (function phzr$sprite$set_stage_reference(sprite,stage){
return phzr.impl.utils.core.phaser__GT_clj(sprite.setStageReference(phzr.impl.utils.core.clj__GT_phaser(stage)));
});
/**
 * Sets the texture of the sprite
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * texture (PIXI.Texture) - The PIXI texture that is displayed by the sprite
 */
phzr.sprite.set_texture = (function phzr$sprite$set_texture(sprite,texture){
return phzr.impl.utils.core.phaser__GT_clj(sprite.setTexture(phzr.impl.utils.core.clj__GT_phaser(texture)));
});
/**
 * Swaps the position of 2 Display Objects within this container.
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - -
 *  * child-2 (PIXI.DisplayObject) - -
 */
phzr.sprite.swap_children = (function phzr$sprite$swap_children(sprite,child,child_2){
return phzr.impl.utils.core.phaser__GT_clj(sprite.swapChildren(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(child_2)));
});
/**
 * Calculates the global position of the display object
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * position (Point) - The world origin to calculate from
 * 
 *   Returns:  Point - A point object representing the position of this object
 */
phzr.sprite.to_global = (function phzr$sprite$to_global(sprite,position){
return phzr.impl.utils.core.phaser__GT_clj(sprite.toGlobal(phzr.impl.utils.core.clj__GT_phaser(position)));
});
/**
 * Calculates the local position of the display object relative to another point
 * 
 *   Parameters:
 *  * sprite (Phaser.Sprite) - Targeted instance for method
 *  * position (Point) - The world origin to calculate from
 *  * from (PIXI.DisplayObject) {optional} - The DisplayObject to calculate the global position from
 * 
 *   Returns:  Point - A point object representing the position of this object
 */
phzr.sprite.to_local = (function phzr$sprite$to_local(var_args){
var args28171 = [];
var len__21323__auto___28174 = arguments.length;
var i__21324__auto___28175 = (0);
while(true){
if((i__21324__auto___28175 < len__21323__auto___28174)){
args28171.push((arguments[i__21324__auto___28175]));

var G__28176 = (i__21324__auto___28175 + (1));
i__21324__auto___28175 = G__28176;
continue;
} else {
}
break;
}

var G__28173 = args28171.length;
switch (G__28173) {
case 2:
return phzr.sprite.to_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.sprite.to_local.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28171.length)].join('')));

}
});

phzr.sprite.to_local.cljs$core$IFn$_invoke$arity$2 = (function (sprite,position){
return phzr.impl.utils.core.phaser__GT_clj(sprite.toLocal(phzr.impl.utils.core.clj__GT_phaser(position)));
});

phzr.sprite.to_local.cljs$core$IFn$_invoke$arity$3 = (function (sprite,position,from){
return phzr.impl.utils.core.phaser__GT_clj(sprite.toLocal(phzr.impl.utils.core.clj__GT_phaser(position),phzr.impl.utils.core.clj__GT_phaser(from)));
});

phzr.sprite.to_local.cljs$lang$maxFixedArity = 3;

/**
 * Override this method in your own custom objects to handle any update requirements.
 *   It is called immediately after `preUpdate` and before `postUpdate`.
 *   Remember if this Game Object has any children you should call update on those too.
 */
phzr.sprite.update = (function phzr$sprite$update(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.update());
});
/**
 * Generates and updates the cached sprite for this object.
 */
phzr.sprite.update_cache = (function phzr$sprite$update_cache(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.updateCache());
});
/**
 * If you have set a crop rectangle on this Game Object via `crop` and since modified the `cropRect` property,
 *   or the rectangle it references, then you need to update the crop frame by calling this method.
 */
phzr.sprite.update_crop = (function phzr$sprite$update_crop(sprite){
return phzr.impl.utils.core.phaser__GT_clj(sprite.updateCrop());
});
