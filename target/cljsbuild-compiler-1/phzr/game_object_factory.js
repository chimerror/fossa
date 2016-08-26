// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.game_object_factory');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
/**
 * The GameObjectFactory is a quick way to create many common game objects
 *   using {@linkcode Phaser.Game#add `game.add`}.
 * 
 *   Created objects are _automatically added_ to the appropriate Manager, World, or manually specified parent Group.
 * 
 *   Parameters:
 *  * game (Phaser.Game) - A reference to the currently running game.
 */
phzr.game_object_factory.__GT_GameObjectFactory = (function phzr$game_object_factory$__GT_GameObjectFactory(game){
return (new Phaser.GameObjectFactory(phzr.impl.utils.core.clj__GT_phaser(game)));
});
/**
 * Creates a new Sound object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * key (string) - The Game.cache key of the sound that this object will use.
 *  * volume (number) {optional} - The volume at which the sound will be played.
 *  * loop (boolean) {optional} - Whether or not the sound will loop.
 *  * connect (boolean) {optional} - Controls if the created Sound object will connect to the master gainNode of the SoundManager when running under WebAudio.
 * 
 *   Returns:  Phaser.Sound - The newly created sound object.
 */
phzr.game_object_factory.audio = (function phzr$game_object_factory$audio(var_args){
var args26839 = [];
var len__21323__auto___26842 = arguments.length;
var i__21324__auto___26843 = (0);
while(true){
if((i__21324__auto___26843 < len__21323__auto___26842)){
args26839.push((arguments[i__21324__auto___26843]));

var G__26844 = (i__21324__auto___26843 + (1));
i__21324__auto___26843 = G__26844;
continue;
} else {
}
break;
}

var G__26841 = args26839.length;
switch (G__26841) {
case 2:
return phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26839.length)].join('')));

}
});

phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.audio(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,key,volume){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.audio(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(volume)));
});

phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,key,volume,loop){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.audio(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(volume),phzr.impl.utils.core.clj__GT_phaser(loop)));
});

phzr.game_object_factory.audio.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,key,volume,loop,connect){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.audio(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(volume),phzr.impl.utils.core.clj__GT_phaser(loop),phzr.impl.utils.core.clj__GT_phaser(connect)));
});

phzr.game_object_factory.audio.cljs$lang$maxFixedArity = 5;

/**
 * Creates a new AudioSprite object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * key (string) - The Game.cache key of the sound that this object will use.
 * 
 *   Returns:  Phaser.AudioSprite - The newly created AudioSprite object.
 */
phzr.game_object_factory.audio_sprite = (function phzr$game_object_factory$audio_sprite(game_object_factory,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.audioSprite(phzr.impl.utils.core.clj__GT_phaser(key)));
});
/**
 * Create a BitmapData object.
 * 
 *   A BitmapData object can be manipulated and drawn to like a traditional Canvas object and used to texture Sprites.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * width (number) {optional} - The width of the BitmapData in pixels.
 *  * height (number) {optional} - The height of the BitmapData in pixels.
 *  * key (string) {optional} - Asset key for the BitmapData when stored in the Cache (see addToCache parameter).
 *  * add-to-cache (boolean) {optional} - Should this BitmapData be added to the Game.Cache? If so you can retrieve it with Cache.getBitmapData(key)
 * 
 *   Returns:  Phaser.BitmapData - The newly created BitmapData object.
 */
phzr.game_object_factory.bitmap_data = (function phzr$game_object_factory$bitmap_data(var_args){
var args26846 = [];
var len__21323__auto___26849 = arguments.length;
var i__21324__auto___26850 = (0);
while(true){
if((i__21324__auto___26850 < len__21323__auto___26849)){
args26846.push((arguments[i__21324__auto___26850]));

var G__26851 = (i__21324__auto___26850 + (1));
i__21324__auto___26850 = G__26851;
continue;
} else {
}
break;
}

var G__26848 = args26846.length;
switch (G__26848) {
case 1:
return phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26846.length)].join('')));

}
});

phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.bitmapData());
});

phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,width){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.bitmapData(phzr.impl.utils.core.clj__GT_phaser(width)));
});

phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,width,height){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.bitmapData(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height)));
});

phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,width,height,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.bitmapData(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.game_object_factory.bitmap_data.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,width,height,key,add_to_cache){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.bitmapData(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(add_to_cache)));
});

phzr.game_object_factory.bitmap_data.cljs$lang$maxFixedArity = 5;

/**
 * Create a new BitmapText object.
 * 
 *   BitmapText objects work by taking a texture file and an XML file that describes the font structure.
 *   It then generates a new Sprite object for each letter of the text, proportionally spaced out and aligned to 
 *   match the font structure.
 * 
 *   BitmapText objects are less flexible than Text objects, in that they have less features such as shadows, fills and the ability 
 *   to use Web Fonts. However you trade this flexibility for pure rendering speed. You can also create visually compelling BitmapTexts by 
 *   processing the font texture in an image editor first, applying fills and any other effects required.
 * 
 *   To create multi-line text insert \r, \n or \r\n escape codes into the text string.
 * 
 *   To create a BitmapText data files you can use:
 * 
 *   BMFont (Windows, free): http://www.angelcode.com/products/bmfont/
 *   Glyph Designer (OS X, commercial): http://www.71squared.com/en/glyphdesigner
 *   Littera (Web-based, free): http://kvazars.com/littera/
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) - X coordinate to display the BitmapText object at.
 *  * y (number) - Y coordinate to display the BitmapText object at.
 *  * font (string) - The key of the BitmapText as stored in Phaser.Cache.
 *  * text (string) {optional} - The text that will be rendered. This can also be set later via BitmapText.text.
 *  * size (number) {optional} - The size the font will be rendered at in pixels.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.BitmapText - The newly created bitmapText object.
 */
phzr.game_object_factory.bitmap_text = (function phzr$game_object_factory$bitmap_text(var_args){
var args26853 = [];
var len__21323__auto___26856 = arguments.length;
var i__21324__auto___26857 = (0);
while(true){
if((i__21324__auto___26857 < len__21323__auto___26856)){
args26853.push((arguments[i__21324__auto___26857]));

var G__26858 = (i__21324__auto___26857 + (1));
i__21324__auto___26857 = G__26858;
continue;
} else {
}
break;
}

var G__26855 = args26853.length;
switch (G__26855) {
case 4:
return phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26853.length)].join('')));

}
});

phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,font){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.bitmapText(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(font)));
});

phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,x,y,font,text){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.bitmapText(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(font),phzr.impl.utils.core.clj__GT_phaser(text)));
});

phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,x,y,font,text,size){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.bitmapText(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(font),phzr.impl.utils.core.clj__GT_phaser(text),phzr.impl.utils.core.clj__GT_phaser(size)));
});

phzr.game_object_factory.bitmap_text.cljs$core$IFn$_invoke$arity$7 = (function (game_object_factory,x,y,font,text,size,group){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.bitmapText(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(font),phzr.impl.utils.core.clj__GT_phaser(text),phzr.impl.utils.core.clj__GT_phaser(size),phzr.impl.utils.core.clj__GT_phaser(group)));
});

phzr.game_object_factory.bitmap_text.cljs$lang$maxFixedArity = 7;

/**
 * Creates a new Button object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the Button. The coordinate is relative to any parent container this button may be in.
 *  * y (number) {optional} - The y coordinate of the Button. The coordinate is relative to any parent container this button may be in.
 *  * key (string) {optional} - The image key as defined in the Game.Cache to use as the texture for this button.
 *  * callback (function) {optional} - The function to call when this button is pressed
 *  * callback-context (object) {optional} - The context in which the callback will be called (usually 'this')
 *  * over-frame (string | number) {optional} - This is the frame or frameName that will be set when this button is in an over state. Give either a number to use a frame ID or a string for a frame name.
 *  * out-frame (string | number) {optional} - This is the frame or frameName that will be set when this button is in an out state. Give either a number to use a frame ID or a string for a frame name.
 *  * down-frame (string | number) {optional} - This is the frame or frameName that will be set when this button is in a down state. Give either a number to use a frame ID or a string for a frame name.
 *  * up-frame (string | number) {optional} - This is the frame or frameName that will be set when this button is in an up state. Give either a number to use a frame ID or a string for a frame name.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Button - The newly created Button object.
 */
phzr.game_object_factory.button = (function phzr$game_object_factory$button(var_args){
var args26860 = [];
var len__21323__auto___26863 = arguments.length;
var i__21324__auto___26864 = (0);
while(true){
if((i__21324__auto___26864 < len__21323__auto___26863)){
args26860.push((arguments[i__21324__auto___26864]));

var G__26865 = (i__21324__auto___26864 + (1));
i__21324__auto___26864 = G__26865;
continue;
} else {
}
break;
}

var G__26862 = args26860.length;
switch (G__26862) {
case 1:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26860.length)].join('')));

}
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.button());
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser(x)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,x,y,key,callback){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,x,y,key,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$7 = (function (game_object_factory,x,y,key,callback,callback_context,over_frame){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(over_frame)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$8 = (function (game_object_factory,x,y,key,callback,callback_context,over_frame,out_frame){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(over_frame),phzr.impl.utils.core.clj__GT_phaser(out_frame)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$9 = (function (game_object_factory,x,y,key,callback,callback_context,over_frame,out_frame,down_frame){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(over_frame),phzr.impl.utils.core.clj__GT_phaser(out_frame),phzr.impl.utils.core.clj__GT_phaser(down_frame)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$10 = (function (game_object_factory,x,y,key,callback,callback_context,over_frame,out_frame,down_frame,up_frame){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(over_frame),phzr.impl.utils.core.clj__GT_phaser(out_frame),phzr.impl.utils.core.clj__GT_phaser(down_frame),phzr.impl.utils.core.clj__GT_phaser(up_frame)));
});

phzr.game_object_factory.button.cljs$core$IFn$_invoke$arity$11 = (function (game_object_factory,x,y,key,callback,callback_context,over_frame,out_frame,down_frame,up_frame,group){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.button(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(over_frame),phzr.impl.utils.core.clj__GT_phaser(out_frame),phzr.impl.utils.core.clj__GT_phaser(down_frame),phzr.impl.utils.core.clj__GT_phaser(up_frame),phzr.impl.utils.core.clj__GT_phaser(group)));
});

phzr.game_object_factory.button.cljs$lang$maxFixedArity = 11;

/**
 * Create a new Creature Animation object.
 * 
 *   Creature is a custom Game Object used in conjunction with the Creature Runtime libraries by Kestrel Moon Studios.
 * 
 *   It allows you to display animated Game Objects that were created with the [Creature Automated Animation Tool](http://www.kestrelmoon.com/creature/).
 * 
 *   Note 1: You can only use Phaser.Creature objects in WebGL enabled games. They do not work in Canvas mode games.
 * 
 *   Note 2: You must use a build of Phaser that includes the CreatureMeshBone.js runtime and gl-matrix.js, or have them
 *   loaded before your Phaser game boots.
 * 
 *   See the Phaser custom build process for more details.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the creature. The coordinate is relative to any parent container this creature may be in.
 *  * y (number) {optional} - The y coordinate of the creature. The coordinate is relative to any parent container this creature may be in.
 *  * key (string | PIXI.Texture) {optional} - The image used as a texture by this creature object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a PIXI.Texture.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Creature - The newly created Sprite object.
 */
phzr.game_object_factory.creature = (function phzr$game_object_factory$creature(var_args){
var args26867 = [];
var len__21323__auto___26870 = arguments.length;
var i__21324__auto___26871 = (0);
while(true){
if((i__21324__auto___26871 < len__21323__auto___26870)){
args26867.push((arguments[i__21324__auto___26871]));

var G__26872 = (i__21324__auto___26871 + (1));
i__21324__auto___26871 = G__26872;
continue;
} else {
}
break;
}

var G__26869 = args26867.length;
switch (G__26869) {
case 1:
return phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26867.length)].join('')));

}
});

phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.creature());
});

phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.creature(phzr.impl.utils.core.clj__GT_phaser(x)));
});

phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.creature(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.creature(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.game_object_factory.creature.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,x,y,key,group){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.creature(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(group)));
});

phzr.game_object_factory.creature.cljs$lang$maxFixedArity = 5;

/**
 * Create a new Emitter.
 * 
 *   A particle emitter can be used for one-time explosions or for
 *   continuous effects like rain and fire. All it really does is launch Particle objects out
 *   at set intervals, and fixes their positions and velocities accordingly.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate within the Emitter that the particles are emitted from.
 *  * y (number) {optional} - The y coordinate within the Emitter that the particles are emitted from.
 *  * max-particles (number) {optional} - The total number of particles in this emitter.
 * 
 *   Returns:  Phaser.Particles.Arcade.Emitter - The newly created emitter object.
 */
phzr.game_object_factory.emitter = (function phzr$game_object_factory$emitter(var_args){
var args26874 = [];
var len__21323__auto___26877 = arguments.length;
var i__21324__auto___26878 = (0);
while(true){
if((i__21324__auto___26878 < len__21323__auto___26877)){
args26874.push((arguments[i__21324__auto___26878]));

var G__26879 = (i__21324__auto___26878 + (1));
i__21324__auto___26878 = G__26879;
continue;
} else {
}
break;
}

var G__26876 = args26874.length;
switch (G__26876) {
case 1:
return phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26874.length)].join('')));

}
});

phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.emitter());
});

phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.emitter(phzr.impl.utils.core.clj__GT_phaser(x)));
});

phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.emitter(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.game_object_factory.emitter.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,max_particles){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.emitter(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(max_particles)));
});

phzr.game_object_factory.emitter.cljs$lang$maxFixedArity = 4;

/**
 * Adds an existing display object to the game world.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * object (any) - An instance of Phaser.Sprite, Phaser.Button or any other display object.
 * 
 *   Returns:  any - The child that was added to the World.
 */
phzr.game_object_factory.existing = (function phzr$game_object_factory$existing(game_object_factory,object){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.existing(phzr.impl.utils.core.clj__GT_phaser(object)));
});
/**
 * A WebGL shader/filter that can be applied to Sprites.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * filter (string) - The name of the filter you wish to create, for example HueRotate or SineWave.
 *  * args (any) - Whatever parameters are needed to be passed to the filter init function.
 * 
 *   Returns:  Phaser.Filter - The newly created Phaser.Filter object.
 */
phzr.game_object_factory.filter = (function phzr$game_object_factory$filter(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26884 = arguments.length;
var i__21324__auto___26885 = (0);
while(true){
if((i__21324__auto___26885 < len__21323__auto___26884)){
args__21330__auto__.push((arguments[i__21324__auto___26885]));

var G__26886 = (i__21324__auto___26885 + (1));
i__21324__auto___26885 = G__26886;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((2) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((2)),(0),null)):null);
return phzr.game_object_factory.filter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21331__auto__);
});

phzr.game_object_factory.filter.cljs$core$IFn$_invoke$arity$variadic = (function (game_object_factory,filter,args){
return phzr.impl.utils.core.phaser__GT_clj((game_object_factory[filter]).apply(game_object_factory,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [phzr.impl.utils.core.clj__GT_phaser(filter)], null),args))));
});

phzr.game_object_factory.filter.cljs$lang$maxFixedArity = (2);

phzr.game_object_factory.filter.cljs$lang$applyTo = (function (seq26881){
var G__26882 = cljs.core.first(seq26881);
var seq26881__$1 = cljs.core.next(seq26881);
var G__26883 = cljs.core.first(seq26881__$1);
var seq26881__$2 = cljs.core.next(seq26881__$1);
return phzr.game_object_factory.filter.cljs$core$IFn$_invoke$arity$variadic(G__26882,G__26883,seq26881__$2);
});

/**
 * Creates a new Graphics object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the Graphic. The coordinate is relative to any parent container this object may be in.
 *  * y (number) {optional} - The y coordinate of the Graphic. The coordinate is relative to any parent container this object may be in.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Graphics - The newly created graphics object.
 */
phzr.game_object_factory.graphics = (function phzr$game_object_factory$graphics(var_args){
var args26887 = [];
var len__21323__auto___26890 = arguments.length;
var i__21324__auto___26891 = (0);
while(true){
if((i__21324__auto___26891 < len__21323__auto___26890)){
args26887.push((arguments[i__21324__auto___26891]));

var G__26892 = (i__21324__auto___26891 + (1));
i__21324__auto___26891 = G__26892;
continue;
} else {
}
break;
}

var G__26889 = args26887.length;
switch (G__26889) {
case 1:
return phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26887.length)].join('')));

}
});

phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.graphics());
});

phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.graphics(phzr.impl.utils.core.clj__GT_phaser(x)));
});

phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.graphics(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.game_object_factory.graphics.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,group){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.graphics(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(group)));
});

phzr.game_object_factory.graphics.cljs$lang$maxFixedArity = 4;

/**
 * A Group is a container for display objects that allows for fast pooling, recycling and collision checks.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * parent (any) {optional} - The parent Group or DisplayObjectContainer that will hold this group, if any. If set to null the Group won't be added to the display list. If undefined it will be added to World by default.
 *  * name (string) {optional} - A name for this Group. Not used internally but useful for debugging.
 *  * add-to-stage (boolean) {optional} - If set to true this Group will be added directly to the Game.Stage instead of Game.World.
 *  * enable-body (boolean) {optional} - If true all Sprites created with `Group.create` or `Group.createMulitple` will have a physics body created on them. Change the body type with physicsBodyType.
 *  * physics-body-type (number) {optional} - If enableBody is true this is the type of physics body that is created on new Sprites. Phaser.Physics.ARCADE, Phaser.Physics.P2, Phaser.Physics.NINJA, etc.
 * 
 *   Returns:  Phaser.Group - The newly created Group.
 */
phzr.game_object_factory.group = (function phzr$game_object_factory$group(var_args){
var args26894 = [];
var len__21323__auto___26897 = arguments.length;
var i__21324__auto___26898 = (0);
while(true){
if((i__21324__auto___26898 < len__21323__auto___26897)){
args26894.push((arguments[i__21324__auto___26898]));

var G__26899 = (i__21324__auto___26898 + (1));
i__21324__auto___26898 = G__26899;
continue;
} else {
}
break;
}

var G__26896 = args26894.length;
switch (G__26896) {
case 1:
return phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26894.length)].join('')));

}
});

phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.group());
});

phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,parent){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.group(phzr.impl.utils.core.clj__GT_phaser(parent)));
});

phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,parent,name){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.group(phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(name)));
});

phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,parent,name,add_to_stage){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.group(phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(add_to_stage)));
});

phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,parent,name,add_to_stage,enable_body){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.group(phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(add_to_stage),phzr.impl.utils.core.clj__GT_phaser(enable_body)));
});

phzr.game_object_factory.group.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,parent,name,add_to_stage,enable_body,physics_body_type){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.group(phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(add_to_stage),phzr.impl.utils.core.clj__GT_phaser(enable_body),phzr.impl.utils.core.clj__GT_phaser(physics_body_type)));
});

phzr.game_object_factory.group.cljs$lang$maxFixedArity = 6;

/**
 * Create a new `Image` object.
 * 
 *   An Image is a light-weight object you can use to display anything that doesn't need physics or animation.
 * 
 *   It can still rotate, scale, crop and receive input events. 
 *   This makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
 *  * y (number) {optional} - The y coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
 *  * key (string | Phaser.RenderTexture | Phaser.BitmapData | Phaser.Video | PIXI.Texture) {optional} - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
 *  * frame (string | number) {optional} - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Image - The newly created Image object.
 */
phzr.game_object_factory.image = (function phzr$game_object_factory$image(var_args){
var args26901 = [];
var len__21323__auto___26904 = arguments.length;
var i__21324__auto___26905 = (0);
while(true){
if((i__21324__auto___26905 < len__21323__auto___26904)){
args26901.push((arguments[i__21324__auto___26905]));

var G__26906 = (i__21324__auto___26905 + (1));
i__21324__auto___26905 = G__26906;
continue;
} else {
}
break;
}

var G__26903 = args26901.length;
switch (G__26903) {
case 1:
return phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26901.length)].join('')));

}
});

phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.image());
});

phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.image(phzr.impl.utils.core.clj__GT_phaser(x)));
});

phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.image(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.image(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,x,y,key,frame){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.image(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame)));
});

phzr.game_object_factory.image.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,x,y,key,frame,group){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.image(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame),phzr.impl.utils.core.clj__GT_phaser(group)));
});

phzr.game_object_factory.image.cljs$lang$maxFixedArity = 6;

/**
 * A Group is a container for display objects that allows for fast pooling, recycling and collision checks.
 * 
 *   A Physics Group is the same as an ordinary Group except that is has enableBody turned on by default, so any Sprites it creates
 *   are automatically given a physics body.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * physics-body-type (number) {optional} - If enableBody is true this is the type of physics body that is created on new Sprites. Phaser.Physics.ARCADE, Phaser.Physics.P2, Phaser.Physics.NINJA, etc.
 *  * parent (any) {optional} - The parent Group or DisplayObjectContainer that will hold this group, if any. If set to null the Group won't be added to the display list. If undefined it will be added to World by default.
 *  * name (string) {optional} - A name for this Group. Not used internally but useful for debugging.
 *  * add-to-stage (boolean) {optional} - If set to true this Group will be added directly to the Game.Stage instead of Game.World.
 * 
 *   Returns:  Phaser.Group - The newly created Group.
 */
phzr.game_object_factory.physics_group = (function phzr$game_object_factory$physics_group(var_args){
var args26908 = [];
var len__21323__auto___26911 = arguments.length;
var i__21324__auto___26912 = (0);
while(true){
if((i__21324__auto___26912 < len__21323__auto___26911)){
args26908.push((arguments[i__21324__auto___26912]));

var G__26913 = (i__21324__auto___26912 + (1));
i__21324__auto___26912 = G__26913;
continue;
} else {
}
break;
}

var G__26910 = args26908.length;
switch (G__26910) {
case 1:
return phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26908.length)].join('')));

}
});

phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.physicsGroup());
});

phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,physics_body_type){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.physicsGroup(phzr.impl.utils.core.clj__GT_phaser(physics_body_type)));
});

phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,physics_body_type,parent){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.physicsGroup(phzr.impl.utils.core.clj__GT_phaser(physics_body_type),phzr.impl.utils.core.clj__GT_phaser(parent)));
});

phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,physics_body_type,parent,name){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.physicsGroup(phzr.impl.utils.core.clj__GT_phaser(physics_body_type),phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(name)));
});

phzr.game_object_factory.physics_group.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,physics_body_type,parent,name,add_to_stage){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.physicsGroup(phzr.impl.utils.core.clj__GT_phaser(physics_body_type),phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(add_to_stage)));
});

phzr.game_object_factory.physics_group.cljs$lang$maxFixedArity = 5;

/**
 * Add a new Plugin into the PluginManager.
 * 
 *   The Plugin must have 2 properties: `game` and `parent`. Plugin.game is set to the game reference the PluginManager uses, and parent is set to the PluginManager.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * plugin (object | Phaser.Plugin) - The Plugin to add into the PluginManager. This can be a function or an existing object.
 *  * parameter (*) - Additional parameters that will be passed to the Plugin.init method.
 * 
 *   Returns:  Phaser.Plugin - The Plugin that was added to the manager.
 */
phzr.game_object_factory.plugin = (function phzr$game_object_factory$plugin(game_object_factory,plugin__$1,parameter){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.plugin(phzr.impl.utils.core.clj__GT_phaser(plugin__$1),phzr.impl.utils.core.clj__GT_phaser(parameter)));
});
/**
 * A dynamic initially blank canvas to which images can be drawn.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * width (number) {optional} - the width of the RenderTexture.
 *  * height (number) {optional} - the height of the RenderTexture.
 *  * key (string) {optional} - Asset key for the RenderTexture when stored in the Cache (see addToCache parameter).
 *  * add-to-cache (boolean) {optional} - Should this RenderTexture be added to the Game.Cache? If so you can retrieve it with Cache.getTexture(key)
 * 
 *   Returns:  Phaser.RenderTexture - The newly created RenderTexture object.
 */
phzr.game_object_factory.render_texture = (function phzr$game_object_factory$render_texture(var_args){
var args26915 = [];
var len__21323__auto___26918 = arguments.length;
var i__21324__auto___26919 = (0);
while(true){
if((i__21324__auto___26919 < len__21323__auto___26918)){
args26915.push((arguments[i__21324__auto___26919]));

var G__26920 = (i__21324__auto___26919 + (1));
i__21324__auto___26919 = G__26920;
continue;
} else {
}
break;
}

var G__26917 = args26915.length;
switch (G__26917) {
case 1:
return phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26915.length)].join('')));

}
});

phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.renderTexture());
});

phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,width){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.renderTexture(phzr.impl.utils.core.clj__GT_phaser(width)));
});

phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,width,height){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.renderTexture(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height)));
});

phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,width,height,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.renderTexture(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.game_object_factory.render_texture.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,width,height,key,add_to_cache){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.renderTexture(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(add_to_cache)));
});

phzr.game_object_factory.render_texture.cljs$lang$maxFixedArity = 5;

/**
 * Create a new RetroFont object.
 * 
 *   A RetroFont can be used as a texture for an Image or Sprite and optionally add it to the Cache.
 *   A RetroFont uses a bitmap which contains fixed with characters for the font set. You use character spacing to define the set.
 *   If you need variable width character support then use a BitmapText object instead. The main difference between a RetroFont and a BitmapText
 *   is that a RetroFont creates a single texture that you can apply to a game object, where-as a BitmapText creates one Sprite object per letter of text.
 *   The texture can be asssigned or one or multiple images/sprites, but note that the text the RetroFont uses will be shared across them all,
 *   i.e. if you need each Image to have different text in it, then you need to create multiple RetroFont objects.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * font (string) - The key of the image in the Game.Cache that the RetroFont will use.
 *  * character-width (number) - The width of each character in the font set.
 *  * character-height (number) - The height of each character in the font set.
 *  * chars (string) - The characters used in the font set, in display order. You can use the TEXT_SET consts for common font set arrangements.
 *  * chars-per-row (number) - The number of characters per row in the font set.
 *  * x-spacing (number) {optional} - If the characters in the font set have horizontal spacing between them set the required amount here.
 *  * y-spacing (number) {optional} - If the characters in the font set have vertical spacing between them set the required amount here.
 *  * x-offset (number) {optional} - If the font set doesn't start at the top left of the given image, specify the X coordinate offset here.
 *  * y-offset (number) {optional} - If the font set doesn't start at the top left of the given image, specify the Y coordinate offset here.
 * 
 *   Returns:  Phaser.RetroFont - The newly created RetroFont texture which can be applied to an Image or Sprite.
 */
phzr.game_object_factory.retro_font = (function phzr$game_object_factory$retro_font(var_args){
var args26922 = [];
var len__21323__auto___26925 = arguments.length;
var i__21324__auto___26926 = (0);
while(true){
if((i__21324__auto___26926 < len__21323__auto___26925)){
args26922.push((arguments[i__21324__auto___26926]));

var G__26927 = (i__21324__auto___26926 + (1));
i__21324__auto___26926 = G__26927;
continue;
} else {
}
break;
}

var G__26924 = args26922.length;
switch (G__26924) {
case 6:
return phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26922.length)].join('')));

}
});

phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,font,character_width,character_height,chars,chars_per_row){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.retroFont(phzr.impl.utils.core.clj__GT_phaser(font),phzr.impl.utils.core.clj__GT_phaser(character_width),phzr.impl.utils.core.clj__GT_phaser(character_height),phzr.impl.utils.core.clj__GT_phaser(chars),phzr.impl.utils.core.clj__GT_phaser(chars_per_row)));
});

phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$7 = (function (game_object_factory,font,character_width,character_height,chars,chars_per_row,x_spacing){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.retroFont(phzr.impl.utils.core.clj__GT_phaser(font),phzr.impl.utils.core.clj__GT_phaser(character_width),phzr.impl.utils.core.clj__GT_phaser(character_height),phzr.impl.utils.core.clj__GT_phaser(chars),phzr.impl.utils.core.clj__GT_phaser(chars_per_row),phzr.impl.utils.core.clj__GT_phaser(x_spacing)));
});

phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$8 = (function (game_object_factory,font,character_width,character_height,chars,chars_per_row,x_spacing,y_spacing){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.retroFont(phzr.impl.utils.core.clj__GT_phaser(font),phzr.impl.utils.core.clj__GT_phaser(character_width),phzr.impl.utils.core.clj__GT_phaser(character_height),phzr.impl.utils.core.clj__GT_phaser(chars),phzr.impl.utils.core.clj__GT_phaser(chars_per_row),phzr.impl.utils.core.clj__GT_phaser(x_spacing),phzr.impl.utils.core.clj__GT_phaser(y_spacing)));
});

phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$9 = (function (game_object_factory,font,character_width,character_height,chars,chars_per_row,x_spacing,y_spacing,x_offset){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.retroFont(phzr.impl.utils.core.clj__GT_phaser(font),phzr.impl.utils.core.clj__GT_phaser(character_width),phzr.impl.utils.core.clj__GT_phaser(character_height),phzr.impl.utils.core.clj__GT_phaser(chars),phzr.impl.utils.core.clj__GT_phaser(chars_per_row),phzr.impl.utils.core.clj__GT_phaser(x_spacing),phzr.impl.utils.core.clj__GT_phaser(y_spacing),phzr.impl.utils.core.clj__GT_phaser(x_offset)));
});

phzr.game_object_factory.retro_font.cljs$core$IFn$_invoke$arity$10 = (function (game_object_factory,font,character_width,character_height,chars,chars_per_row,x_spacing,y_spacing,x_offset,y_offset){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.retroFont(phzr.impl.utils.core.clj__GT_phaser(font),phzr.impl.utils.core.clj__GT_phaser(character_width),phzr.impl.utils.core.clj__GT_phaser(character_height),phzr.impl.utils.core.clj__GT_phaser(chars),phzr.impl.utils.core.clj__GT_phaser(chars_per_row),phzr.impl.utils.core.clj__GT_phaser(x_spacing),phzr.impl.utils.core.clj__GT_phaser(y_spacing),phzr.impl.utils.core.clj__GT_phaser(x_offset),phzr.impl.utils.core.clj__GT_phaser(y_offset)));
});

phzr.game_object_factory.retro_font.cljs$lang$maxFixedArity = 10;

/**
 * Creates a new Rope object.
 * 
 *   Example usage: https://github.com/codevinsky/phaser-rope-demo/blob/master/dist/demo.js
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the Rope. The coordinate is relative to any parent container this rope may be in.
 *  * y (number) {optional} - The y coordinate of the Rope. The coordinate is relative to any parent container this rope may be in.
 *  * key (string | Phaser.RenderTexture | Phaser.BitmapData | Phaser.Video | PIXI.Texture) {optional} - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
 *  * frame (string | number) {optional} - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
 *  * points (Array) - An array of {Phaser.Point}.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Rope - The newly created Rope object.
 */
phzr.game_object_factory.rope = (function phzr$game_object_factory$rope(var_args){
var args26929 = [];
var len__21323__auto___26932 = arguments.length;
var i__21324__auto___26933 = (0);
while(true){
if((i__21324__auto___26933 < len__21323__auto___26932)){
args26929.push((arguments[i__21324__auto___26933]));

var G__26934 = (i__21324__auto___26933 + (1));
i__21324__auto___26933 = G__26934;
continue;
} else {
}
break;
}

var G__26931 = args26929.length;
switch (G__26931) {
case 2:
return phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26929.length)].join('')));

}
});

phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,points){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.rope(phzr.impl.utils.core.clj__GT_phaser(points)));
});

phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,points,x){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.rope(phzr.impl.utils.core.clj__GT_phaser(points),phzr.impl.utils.core.clj__GT_phaser(x)));
});

phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,points,x,y){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.rope(phzr.impl.utils.core.clj__GT_phaser(points),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,points,x,y,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.rope(phzr.impl.utils.core.clj__GT_phaser(points),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,points,x,y,key,frame){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.rope(phzr.impl.utils.core.clj__GT_phaser(points),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame)));
});

phzr.game_object_factory.rope.cljs$core$IFn$_invoke$arity$7 = (function (game_object_factory,points,x,y,key,frame,group){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.rope(phzr.impl.utils.core.clj__GT_phaser(points),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame),phzr.impl.utils.core.clj__GT_phaser(group)));
});

phzr.game_object_factory.rope.cljs$lang$maxFixedArity = 7;

/**
 * Creates a new Sound object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * key (string) - The Game.cache key of the sound that this object will use.
 *  * volume (number) {optional} - The volume at which the sound will be played.
 *  * loop (boolean) {optional} - Whether or not the sound will loop.
 *  * connect (boolean) {optional} - Controls if the created Sound object will connect to the master gainNode of the SoundManager when running under WebAudio.
 * 
 *   Returns:  Phaser.Sound - The newly created sound object.
 */
phzr.game_object_factory.sound = (function phzr$game_object_factory$sound(var_args){
var args26936 = [];
var len__21323__auto___26939 = arguments.length;
var i__21324__auto___26940 = (0);
while(true){
if((i__21324__auto___26940 < len__21323__auto___26939)){
args26936.push((arguments[i__21324__auto___26940]));

var G__26941 = (i__21324__auto___26940 + (1));
i__21324__auto___26940 = G__26941;
continue;
} else {
}
break;
}

var G__26938 = args26936.length;
switch (G__26938) {
case 2:
return phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26936.length)].join('')));

}
});

phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.sound(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,key,volume){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.sound(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(volume)));
});

phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,key,volume,loop){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.sound(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(volume),phzr.impl.utils.core.clj__GT_phaser(loop)));
});

phzr.game_object_factory.sound.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,key,volume,loop,connect){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.sound(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(volume),phzr.impl.utils.core.clj__GT_phaser(loop),phzr.impl.utils.core.clj__GT_phaser(connect)));
});

phzr.game_object_factory.sound.cljs$lang$maxFixedArity = 5;

/**
 * Create a new Sprite with specific position and sprite sheet key.
 * 
 *   At its most basic a Sprite consists of a set of coordinates and a texture that is used when rendered.
 *   They also contain additional properties allowing for physics motion (via Sprite.body), input handling (via Sprite.input),
 *   events (via Sprite.events), animation (via Sprite.animations), camera culling and more. Please see the Examples for use cases.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the sprite. The coordinate is relative to any parent container this sprite may be in.
 *  * y (number) {optional} - The y coordinate of the sprite. The coordinate is relative to any parent container this sprite may be in.
 *  * key (string | Phaser.RenderTexture | Phaser.BitmapData | Phaser.Video | PIXI.Texture) {optional} - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
 *  * frame (string | number) {optional} - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Sprite - The newly created Sprite object.
 */
phzr.game_object_factory.sprite = (function phzr$game_object_factory$sprite(var_args){
var args26943 = [];
var len__21323__auto___26946 = arguments.length;
var i__21324__auto___26947 = (0);
while(true){
if((i__21324__auto___26947 < len__21323__auto___26946)){
args26943.push((arguments[i__21324__auto___26947]));

var G__26948 = (i__21324__auto___26947 + (1));
i__21324__auto___26947 = G__26948;
continue;
} else {
}
break;
}

var G__26945 = args26943.length;
switch (G__26945) {
case 1:
return phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26943.length)].join('')));

}
});

phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.sprite());
});

phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.sprite(phzr.impl.utils.core.clj__GT_phaser(x)));
});

phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.sprite(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.sprite(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,x,y,key,frame){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.sprite(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame)));
});

phzr.game_object_factory.sprite.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,x,y,key,frame,group){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.sprite(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame),phzr.impl.utils.core.clj__GT_phaser(group)));
});

phzr.game_object_factory.sprite.cljs$lang$maxFixedArity = 6;

/**
 * A SpriteBatch is a really fast version of a Phaser Group built solely for speed.
 *   Use when you need a lot of sprites or particles all sharing the same texture.
 *   The speed gains are specifically for WebGL. In Canvas mode you won't see any real difference.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * parent (Phaser.Group | null) - The parent Group that will hold this Sprite Batch. Set to `undefined` or `null` to add directly to game.world.
 *  * name (string) {optional} - A name for this Sprite Batch. Not used internally but useful for debugging.
 *  * add-to-stage (boolean) {optional} - If set to true this Sprite Batch will be added directly to the Game.Stage instead of the parent.
 * 
 *   Returns:  Phaser.SpriteBatch - The newly created Sprite Batch.
 */
phzr.game_object_factory.sprite_batch = (function phzr$game_object_factory$sprite_batch(var_args){
var args26950 = [];
var len__21323__auto___26953 = arguments.length;
var i__21324__auto___26954 = (0);
while(true){
if((i__21324__auto___26954 < len__21323__auto___26953)){
args26950.push((arguments[i__21324__auto___26954]));

var G__26955 = (i__21324__auto___26954 + (1));
i__21324__auto___26954 = G__26955;
continue;
} else {
}
break;
}

var G__26952 = args26950.length;
switch (G__26952) {
case 2:
return phzr.game_object_factory.sprite_batch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.sprite_batch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.sprite_batch.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26950.length)].join('')));

}
});

phzr.game_object_factory.sprite_batch.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,parent){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.spriteBatch(phzr.impl.utils.core.clj__GT_phaser(parent)));
});

phzr.game_object_factory.sprite_batch.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,parent,name){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.spriteBatch(phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(name)));
});

phzr.game_object_factory.sprite_batch.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,parent,name,add_to_stage){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.spriteBatch(phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(add_to_stage)));
});

phzr.game_object_factory.sprite_batch.cljs$lang$maxFixedArity = 4;

/**
 * Creates a new Text object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) {optional} - The x coordinate of the Text. The coordinate is relative to any parent container this text may be in.
 *  * y (number) {optional} - The y coordinate of the Text. The coordinate is relative to any parent container this text may be in.
 *  * text (string) {optional} - The text string that will be displayed.
 *  * style (object) {optional} - The style object containing style attributes like font, font size , etc.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.Text - The newly created text object.
 */
phzr.game_object_factory.text = (function phzr$game_object_factory$text(var_args){
var args26957 = [];
var len__21323__auto___26960 = arguments.length;
var i__21324__auto___26961 = (0);
while(true){
if((i__21324__auto___26961 < len__21323__auto___26960)){
args26957.push((arguments[i__21324__auto___26961]));

var G__26962 = (i__21324__auto___26961 + (1));
i__21324__auto___26961 = G__26962;
continue;
} else {
}
break;
}

var G__26959 = args26957.length;
switch (G__26959) {
case 1:
return phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26957.length)].join('')));

}
});

phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.text());
});

phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,x){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.text(phzr.impl.utils.core.clj__GT_phaser(x)));
});

phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,x,y){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.text(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,x,y,text){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.text(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(text)));
});

phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,x,y,text,style){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.text(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(text),phzr.impl.utils.core.clj__GT_phaser(style)));
});

phzr.game_object_factory.text.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,x,y,text,style,group){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.text(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(text),phzr.impl.utils.core.clj__GT_phaser(style),phzr.impl.utils.core.clj__GT_phaser(group)));
});

phzr.game_object_factory.text.cljs$lang$maxFixedArity = 6;

/**
 * Creates a new TileSprite object.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * x (number) - The x coordinate of the TileSprite. The coordinate is relative to any parent container this TileSprite may be in.
 *  * y (number) - The y coordinate of the TileSprite. The coordinate is relative to any parent container this TileSprite may be in.
 *  * width (number) - The width of the TileSprite.
 *  * height (number) - The height of the TileSprite.
 *  * key (string | Phaser.RenderTexture | Phaser.BitmapData | Phaser.Video | PIXI.Texture) - The image used as a texture by this display object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a RenderTexture, BitmapData, Video or PIXI.Texture.
 *  * frame (string | number) {optional} - If a Texture Atlas or Sprite Sheet is used this allows you to specify the frame to be used. Use either an integer for a Frame ID or a string for a frame name.
 *  * group (Phaser.Group) {optional} - Optional Group to add the object to. If not specified it will be added to the World group.
 * 
 *   Returns:  Phaser.TileSprite - The newly created TileSprite object.
 */
phzr.game_object_factory.tile_sprite = (function phzr$game_object_factory$tile_sprite(var_args){
var args26964 = [];
var len__21323__auto___26967 = arguments.length;
var i__21324__auto___26968 = (0);
while(true){
if((i__21324__auto___26968 < len__21323__auto___26967)){
args26964.push((arguments[i__21324__auto___26968]));

var G__26969 = (i__21324__auto___26968 + (1));
i__21324__auto___26968 = G__26969;
continue;
} else {
}
break;
}

var G__26966 = args26964.length;
switch (G__26966) {
case 6:
return phzr.game_object_factory.tile_sprite.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.game_object_factory.tile_sprite.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.game_object_factory.tile_sprite.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26964.length)].join('')));

}
});

phzr.game_object_factory.tile_sprite.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,x,y,width,height,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.tileSprite(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.game_object_factory.tile_sprite.cljs$core$IFn$_invoke$arity$7 = (function (game_object_factory,x,y,width,height,key,frame){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.tileSprite(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame)));
});

phzr.game_object_factory.tile_sprite.cljs$core$IFn$_invoke$arity$8 = (function (game_object_factory,x,y,width,height,key,frame,group){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.tileSprite(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame),phzr.impl.utils.core.clj__GT_phaser(group)));
});

phzr.game_object_factory.tile_sprite.cljs$lang$maxFixedArity = 8;

/**
 * Creates a new Phaser.Tilemap object.
 * 
 *   The map can either be populated with data from a Tiled JSON file or from a CSV file.
 *   To do this pass the Cache key as the first parameter. When using Tiled data you need only provide the key.
 *   When using CSV data you must provide the key and the tileWidth and tileHeight parameters.
 *   If creating a blank tilemap to be populated later, you can either specify no parameters at all and then use `Tilemap.create` or pass the map and tile dimensions here.
 *   Note that all Tilemaps use a base tile size to calculate dimensions from, but that a TilemapLayer may have its own unique tile size that overrides it.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * key (string) {optional} - The key of the tilemap data as stored in the Cache. If you're creating a blank map either leave this parameter out or pass `null`.
 *  * tile-width (number) {optional} - The pixel width of a single map tile. If using CSV data you must specify this. Not required if using Tiled map data.
 *  * tile-height (number) {optional} - The pixel height of a single map tile. If using CSV data you must specify this. Not required if using Tiled map data.
 *  * width (number) {optional} - The width of the map in tiles. If this map is created from Tiled or CSV data you don't need to specify this.
 *  * height (number) {optional} - The height of the map in tiles. If this map is created from Tiled or CSV data you don't need to specify this.
 * 
 *   Returns:  Phaser.Tilemap - The newly created tilemap object.
 */
phzr.game_object_factory.tilemap = (function phzr$game_object_factory$tilemap(var_args){
var args26971 = [];
var len__21323__auto___26974 = arguments.length;
var i__21324__auto___26975 = (0);
while(true){
if((i__21324__auto___26975 < len__21323__auto___26974)){
args26971.push((arguments[i__21324__auto___26975]));

var G__26976 = (i__21324__auto___26975 + (1));
i__21324__auto___26975 = G__26976;
continue;
} else {
}
break;
}

var G__26973 = args26971.length;
switch (G__26973) {
case 1:
return phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26971.length)].join('')));

}
});

phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.tilemap());
});

phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.tilemap(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,key,tile_width){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.tilemap(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(tile_width)));
});

phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$4 = (function (game_object_factory,key,tile_width,tile_height){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.tilemap(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(tile_width),phzr.impl.utils.core.clj__GT_phaser(tile_height)));
});

phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$5 = (function (game_object_factory,key,tile_width,tile_height,width){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.tilemap(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(tile_width),phzr.impl.utils.core.clj__GT_phaser(tile_height),phzr.impl.utils.core.clj__GT_phaser(width)));
});

phzr.game_object_factory.tilemap.cljs$core$IFn$_invoke$arity$6 = (function (game_object_factory,key,tile_width,tile_height,width,height){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.tilemap(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(tile_width),phzr.impl.utils.core.clj__GT_phaser(tile_height),phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height)));
});

phzr.game_object_factory.tilemap.cljs$lang$maxFixedArity = 6;

/**
 * Create a tween on a specific object.
 * 
 *   The object can be any JavaScript object or Phaser object such as Sprite.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * object (object) - Object the tween will be run on.
 * 
 *   Returns:  Phaser.Tween - The newly created Phaser.Tween object.
 */
phzr.game_object_factory.tween = (function phzr$game_object_factory$tween(game_object_factory,object){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.tween(phzr.impl.utils.core.clj__GT_phaser(object)));
});
/**
 * Create a Video object.
 * 
 *   This will return a Phaser.Video object which you can pass to a Sprite to be used as a texture.
 * 
 *   Parameters:
 *  * game-object-factory (Phaser.GameObjectFactory) - Targeted instance for method
 *  * key (string | null) {optional} - The key of the video file in the Phaser.Cache that this Video object will play. Set to `null` or leave undefined if you wish to use a webcam as the source. See `startMediaStream` to start webcam capture.
 *  * url (string | null) {optional} - If the video hasn't been loaded then you can provide a full URL to the file here (make sure to set key to null)
 * 
 *   Returns:  Phaser.Video - The newly created Video object.
 */
phzr.game_object_factory.video = (function phzr$game_object_factory$video(var_args){
var args26978 = [];
var len__21323__auto___26981 = arguments.length;
var i__21324__auto___26982 = (0);
while(true){
if((i__21324__auto___26982 < len__21323__auto___26981)){
args26978.push((arguments[i__21324__auto___26982]));

var G__26983 = (i__21324__auto___26982 + (1));
i__21324__auto___26982 = G__26983;
continue;
} else {
}
break;
}

var G__26980 = args26978.length;
switch (G__26980) {
case 1:
return phzr.game_object_factory.video.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.game_object_factory.video.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.game_object_factory.video.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26978.length)].join('')));

}
});

phzr.game_object_factory.video.cljs$core$IFn$_invoke$arity$1 = (function (game_object_factory){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.video());
});

phzr.game_object_factory.video.cljs$core$IFn$_invoke$arity$2 = (function (game_object_factory,key){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.video(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.game_object_factory.video.cljs$core$IFn$_invoke$arity$3 = (function (game_object_factory,key,url){
return phzr.impl.utils.core.phaser__GT_clj(game_object_factory.video(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url)));
});

phzr.game_object_factory.video.cljs$lang$maxFixedArity = 3;

