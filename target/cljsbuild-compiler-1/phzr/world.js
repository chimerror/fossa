// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.world');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
/**
 * 'This world is but a canvas to our imagination.' - Henry David Thoreau
 * 
 *   A game has only one world. The world is an abstract place in which all game objects live. It is not bound
 *   by stage limits and can be any size. You look into the world via cameras. All game objects live within
 *   the world at world-based coordinates. By default a world is created the same size as your Stage.
 * 
 *   Parameters:
 *  * game (Phaser.Game) - Reference to the current game instance.
 */
phzr.world.__GT_World = (function phzr$world$__GT_World(game){
return (new Phaser.World(phzr.impl.utils.core.clj__GT_phaser(game)));
});
/**
 * Adds an existing object as the top child in this group.
 * 
 *   The child is automatically added to the top of the group and is displayed on top of every previous child.
 * 
 *   If Group.enableBody is set then a physics body will be created on the object, so long as one does not already exist.
 * 
 *   Use {@link Phaser.Group#addAt addAt} to control where a child is added. Use {@link Phaser.Group#create create} to create and add a new child.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (DisplayObject) - The display object to add as a child.
 *  * silent (boolean) {optional} - If true the child will not dispatch the `onAddedToGroup` event.
 * 
 *   Returns:  DisplayObject - The child that was added to the group.
 */
phzr.world.add = (function phzr$world$add(var_args){
var args28322 = [];
var len__21323__auto___28325 = arguments.length;
var i__21324__auto___28326 = (0);
while(true){
if((i__21324__auto___28326 < len__21323__auto___28325)){
args28322.push((arguments[i__21324__auto___28326]));

var G__28327 = (i__21324__auto___28326 + (1));
i__21324__auto___28326 = G__28327;
continue;
} else {
}
break;
}

var G__28324 = args28322.length;
switch (G__28324) {
case 2:
return phzr.world.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28322.length)].join('')));

}
});

phzr.world.add.cljs$core$IFn$_invoke$arity$2 = (function (world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.add(phzr.impl.utils.core.clj__GT_phaser(child)));
});

phzr.world.add.cljs$core$IFn$_invoke$arity$3 = (function (world,child,silent){
return phzr.impl.utils.core.phaser__GT_clj(world.add(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.world.add.cljs$lang$maxFixedArity = 3;

/**
 * Adds the amount to the given property on all children in this group.
 * 
 *   `Group.addAll('x', 10)` will add 10 to the child.x value for each child.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * property (string) - The property to increment, for example 'body.velocity.x' or 'angle'.
 *  * amount (number) - The amount to increment the property by. If child.x = 10 then addAll('x', 40) would make child.x = 50.
 *  * check-alive (boolean) - If true the property will only be changed if the child is alive.
 *  * check-visible (boolean) - If true the property will only be changed if the child is visible.
 */
phzr.world.add_all = (function phzr$world$add_all(world,property,amount,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(world.addAll(phzr.impl.utils.core.clj__GT_phaser(property),phzr.impl.utils.core.clj__GT_phaser(amount),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});
/**
 * Adds an existing object to this group.
 * 
 *   The child is added to the group at the location specified by the index value, this allows you to control child ordering.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (DisplayObject) - The display object to add as a child.
 *  * index (integer) {optional} - The index within the group to insert the child to.
 *  * silent (boolean) {optional} - If true the child will not dispatch the `onAddedToGroup` event.
 * 
 *   Returns:  DisplayObject - The child that was added to the group.
 */
phzr.world.add_at = (function phzr$world$add_at(var_args){
var args28329 = [];
var len__21323__auto___28332 = arguments.length;
var i__21324__auto___28333 = (0);
while(true){
if((i__21324__auto___28333 < len__21323__auto___28332)){
args28329.push((arguments[i__21324__auto___28333]));

var G__28334 = (i__21324__auto___28333 + (1));
i__21324__auto___28333 = G__28334;
continue;
} else {
}
break;
}

var G__28331 = args28329.length;
switch (G__28331) {
case 2:
return phzr.world.add_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.add_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.add_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28329.length)].join('')));

}
});

phzr.world.add_at.cljs$core$IFn$_invoke$arity$2 = (function (world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.addAt(phzr.impl.utils.core.clj__GT_phaser(child)));
});

phzr.world.add_at.cljs$core$IFn$_invoke$arity$3 = (function (world,child,index){
return phzr.impl.utils.core.phaser__GT_clj(world.addAt(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(index)));
});

phzr.world.add_at.cljs$core$IFn$_invoke$arity$4 = (function (world,child,index,silent){
return phzr.impl.utils.core.phaser__GT_clj(world.addAt(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(index),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.world.add_at.cljs$lang$maxFixedArity = 4;

/**
 * Adds a child to the container.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The DisplayObject to add to the container
 * 
 *   Returns:  PIXI.DisplayObject - The child that was added.
 */
phzr.world.add_child = (function phzr$world$add_child(world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.addChild(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The child to add
 *  * index (Number) - The index to place the child in
 * 
 *   Returns:  PIXI.DisplayObject - The child that was added.
 */
phzr.world.add_child_at = (function phzr$world$add_child_at(world,child,index){
return phzr.impl.utils.core.phaser__GT_clj(world.addChildAt(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Adds an array of existing Display Objects to this Group.
 * 
 *   The Display Objects are automatically added to the top of this Group, and will render on-top of everything already in this Group.
 * 
 *   As well as an array you can also pass another Group as the first argument. In this case all of the children from that
 *   Group will be removed from it and added into this Group.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * children (Array.<DisplayObject> | Phaser.Group) - An array of display objects or a Phaser.Group. If a Group is given then *all* children will be moved from it.
 *  * silent (boolean) {optional} - If true the children will not dispatch the `onAddedToGroup` event.
 * 
 *   Returns:  [Array.<DisplayObject> | Phaser.Group] - The array of children or Group of children that were added to this Group.
 */
phzr.world.add_multiple = (function phzr$world$add_multiple(var_args){
var args28336 = [];
var len__21323__auto___28339 = arguments.length;
var i__21324__auto___28340 = (0);
while(true){
if((i__21324__auto___28340 < len__21323__auto___28339)){
args28336.push((arguments[i__21324__auto___28340]));

var G__28341 = (i__21324__auto___28340 + (1));
i__21324__auto___28340 = G__28341;
continue;
} else {
}
break;
}

var G__28338 = args28336.length;
switch (G__28338) {
case 2:
return phzr.world.add_multiple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.add_multiple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28336.length)].join('')));

}
});

phzr.world.add_multiple.cljs$core$IFn$_invoke$arity$2 = (function (world,children){
return phzr.impl.utils.core.phaser__GT_clj(world.addMultiple(phzr.impl.utils.core.clj__GT_phaser(children)));
});

phzr.world.add_multiple.cljs$core$IFn$_invoke$arity$3 = (function (world,children,silent){
return phzr.impl.utils.core.phaser__GT_clj(world.addMultiple(phzr.impl.utils.core.clj__GT_phaser(children),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.world.add_multiple.cljs$lang$maxFixedArity = 3;

/**
 * Adds a child of this Group into the hash array.
 *   This call will return false if the child is not a child of this Group, or is already in the hash.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (DisplayObject) - The display object to add to this Groups hash. Must be a member of this Group already and not present in the hash.
 * 
 *   Returns:  boolean - True if the child was successfully added to the hash, otherwise false.
 */
phzr.world.add_to_hash = (function phzr$world$add_to_hash(world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.addToHash(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Brings the given child to the top of this group so it renders above all other children.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (any) - The child to bring to the top of this group.
 * 
 *   Returns:  any - The child that was moved.
 */
phzr.world.bring_to_top = (function phzr$world$bring_to_top(world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.bringToTop(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Calls a function, specified by name, on all on children.
 * 
 *   The function is called for all children regardless if they are dead or alive (see callAllExists for different options).
 *   After the method parameter and context you can add as many extra parameters as you like, which will all be passed to the child.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * method (string) - Name of the function on the child to call. Deep property lookup is supported.
 *  * context (string) {optional} - A string containing the context under which the method will be executed. Set to null to default to the child.
 *  * args (any) - Additional parameters that will be passed to the method.
 */
phzr.world.call_all = (function phzr$world$call_all(var_args){
var args28343 = [];
var len__21323__auto___28346 = arguments.length;
var i__21324__auto___28347 = (0);
while(true){
if((i__21324__auto___28347 < len__21323__auto___28346)){
args28343.push((arguments[i__21324__auto___28347]));

var G__28348 = (i__21324__auto___28347 + (1));
i__21324__auto___28347 = G__28348;
continue;
} else {
}
break;
}

var G__28345 = args28343.length;
switch (G__28345) {
case 3:
return phzr.world.call_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.call_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28343.length)].join('')));

}
});

phzr.world.call_all.cljs$core$IFn$_invoke$arity$3 = (function (world,method,args){
return phzr.impl.utils.core.phaser__GT_clj(world.callAll(phzr.impl.utils.core.clj__GT_phaser(method),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.world.call_all.cljs$core$IFn$_invoke$arity$4 = (function (world,method,args,context){
return phzr.impl.utils.core.phaser__GT_clj(world.callAll(phzr.impl.utils.core.clj__GT_phaser(method),phzr.impl.utils.core.clj__GT_phaser(args),phzr.impl.utils.core.clj__GT_phaser(context)));
});

phzr.world.call_all.cljs$lang$maxFixedArity = 4;

/**
 * Calls a function, specified by name, on all children in the group who exist (or do not exist).
 * 
 *   After the existsValue parameter you can add as many parameters as you like, which will all be passed to the child callback.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * callback (string) - Name of the function on the children to call.
 *  * exists-value (boolean) - Only children with exists=existsValue will be called.
 *  * parameter (any) - Additional parameters that will be passed to the callback.
 */
phzr.world.call_all_exists = (function phzr$world$call_all_exists(world,callback,exists_value,parameter){
return phzr.impl.utils.core.phaser__GT_clj(world.callAllExists(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(exists_value),phzr.impl.utils.core.clj__GT_phaser(parameter)));
});
/**
 * Quickly check that the same property across all children of this group is equal to the given value.
 * 
 *   This call doesn't descend down children, so if you have a Group inside of this group, the property will be checked on the group but not its children.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * key (string) - The property, as a string, to be set. For example: 'body.velocity.x'
 *  * value (any) - The value that will be checked.
 *  * check-alive (boolean) {optional} - If set then only children with alive=true will be checked. This includes any Groups that are children.
 *  * check-visible (boolean) {optional} - If set then only children with visible=true will be checked. This includes any Groups that are children.
 *  * force (boolean) {optional} - If `force` is true then the property will be checked on the child regardless if it already exists or not. If true and the property doesn't exist, false will be returned.
 */
phzr.world.check_all = (function phzr$world$check_all(var_args){
var args28350 = [];
var len__21323__auto___28353 = arguments.length;
var i__21324__auto___28354 = (0);
while(true){
if((i__21324__auto___28354 < len__21323__auto___28353)){
args28350.push((arguments[i__21324__auto___28354]));

var G__28355 = (i__21324__auto___28354 + (1));
i__21324__auto___28354 = G__28355;
continue;
} else {
}
break;
}

var G__28352 = args28350.length;
switch (G__28352) {
case 3:
return phzr.world.check_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.check_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.world.check_all.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.world.check_all.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28350.length)].join('')));

}
});

phzr.world.check_all.cljs$core$IFn$_invoke$arity$3 = (function (world,key,value){
return phzr.impl.utils.core.phaser__GT_clj(world.checkAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value)));
});

phzr.world.check_all.cljs$core$IFn$_invoke$arity$4 = (function (world,key,value,check_alive){
return phzr.impl.utils.core.phaser__GT_clj(world.checkAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive)));
});

phzr.world.check_all.cljs$core$IFn$_invoke$arity$5 = (function (world,key,value,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(world.checkAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});

phzr.world.check_all.cljs$core$IFn$_invoke$arity$6 = (function (world,key,value,check_alive,check_visible,force){
return phzr.impl.utils.core.phaser__GT_clj(world.checkAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(force)));
});

phzr.world.check_all.cljs$lang$maxFixedArity = 6;

/**
 * Checks a property for the given value on the child.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (any) - The child to check the property value on.
 *  * key (array) - An array of strings that make up the property that will be set.
 *  * value (any) - The value that will be checked.
 *  * force (boolean) {optional} - If `force` is true then the property will be checked on the child regardless if it already exists or not. If true and the property doesn't exist, false will be returned.
 * 
 *   Returns:  boolean - True if the property was was equal to value, false if not.
 */
phzr.world.check_property = (function phzr$world$check_property(var_args){
var args28357 = [];
var len__21323__auto___28360 = arguments.length;
var i__21324__auto___28361 = (0);
while(true){
if((i__21324__auto___28361 < len__21323__auto___28360)){
args28357.push((arguments[i__21324__auto___28361]));

var G__28362 = (i__21324__auto___28361 + (1));
i__21324__auto___28361 = G__28362;
continue;
} else {
}
break;
}

var G__28359 = args28357.length;
switch (G__28359) {
case 4:
return phzr.world.check_property.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.world.check_property.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28357.length)].join('')));

}
});

phzr.world.check_property.cljs$core$IFn$_invoke$arity$4 = (function (world,child,key,value){
return phzr.impl.utils.core.phaser__GT_clj(world.checkProperty(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value)));
});

phzr.world.check_property.cljs$core$IFn$_invoke$arity$5 = (function (world,child,key,value,force){
return phzr.impl.utils.core.phaser__GT_clj(world.checkProperty(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(force)));
});

phzr.world.check_property.cljs$lang$maxFixedArity = 5;

/**
 * Get the number of dead children in this group.
 * 
 *   Returns:  integer - The number of children flagged as dead.
 */
phzr.world.count_dead = (function phzr$world$count_dead(world){
return phzr.impl.utils.core.phaser__GT_clj(world.countDead());
});
/**
 * Get the number of living children in this group.
 * 
 *   Returns:  integer - The number of children flagged as alive.
 */
phzr.world.count_living = (function phzr$world$count_living(world){
return phzr.impl.utils.core.phaser__GT_clj(world.countLiving());
});
/**
 * Creates a new Phaser.Sprite object and adds it to the top of this group.
 * 
 *   Use {@link Phaser.Group#classType classType} to change the type of object creaded.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * x (number) - The x coordinate to display the newly created Sprite at. The value is in relation to the group.x point.
 *  * y (number) - The y coordinate to display the newly created Sprite at. The value is in relation to the group.y point.
 *  * key (string) - The Game.cache key of the image that this Sprite will use.
 *  * frame (integer | string) {optional} - If the Sprite image contains multiple frames you can specify which one to use here.
 *  * exists (boolean) {optional} - The default exists state of the Sprite.
 * 
 *   Returns:  DisplayObject - The child that was created: will be a {@link Phaser.Sprite} unless {@link #classType} has been changed.
 */
phzr.world.create = (function phzr$world$create(var_args){
var args28364 = [];
var len__21323__auto___28367 = arguments.length;
var i__21324__auto___28368 = (0);
while(true){
if((i__21324__auto___28368 < len__21323__auto___28367)){
args28364.push((arguments[i__21324__auto___28368]));

var G__28369 = (i__21324__auto___28368 + (1));
i__21324__auto___28368 = G__28369;
continue;
} else {
}
break;
}

var G__28366 = args28364.length;
switch (G__28366) {
case 4:
return phzr.world.create.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.world.create.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.world.create.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28364.length)].join('')));

}
});

phzr.world.create.cljs$core$IFn$_invoke$arity$4 = (function (world,x,y,key){
return phzr.impl.utils.core.phaser__GT_clj(world.create(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.world.create.cljs$core$IFn$_invoke$arity$5 = (function (world,x,y,key,frame){
return phzr.impl.utils.core.phaser__GT_clj(world.create(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame)));
});

phzr.world.create.cljs$core$IFn$_invoke$arity$6 = (function (world,x,y,key,frame,exists){
return phzr.impl.utils.core.phaser__GT_clj(world.create(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame),phzr.impl.utils.core.clj__GT_phaser(exists)));
});

phzr.world.create.cljs$lang$maxFixedArity = 6;

/**
 * Creates multiple Phaser.Sprite objects and adds them to the top of this group.
 * 
 *   Useful if you need to quickly generate a pool of identical sprites, such as bullets.
 * 
 *   By default the sprites will be set to not exist and will be positioned at 0, 0 (relative to the group.x/y).
 *   Use {@link Phaser.Group#classType classType} to change the type of object created.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * quantity (integer) - The number of Sprites to create.
 *  * key (string) - The Game.cache key of the image that this Sprite will use.
 *  * frame (integer | string) {optional} - If the Sprite image contains multiple frames you can specify which one to use here.
 *  * exists (boolean) {optional} - The default exists state of the Sprite.
 */
phzr.world.create_multiple = (function phzr$world$create_multiple(var_args){
var args28371 = [];
var len__21323__auto___28374 = arguments.length;
var i__21324__auto___28375 = (0);
while(true){
if((i__21324__auto___28375 < len__21323__auto___28374)){
args28371.push((arguments[i__21324__auto___28375]));

var G__28376 = (i__21324__auto___28375 + (1));
i__21324__auto___28375 = G__28376;
continue;
} else {
}
break;
}

var G__28373 = args28371.length;
switch (G__28373) {
case 3:
return phzr.world.create_multiple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.create_multiple.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.world.create_multiple.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28371.length)].join('')));

}
});

phzr.world.create_multiple.cljs$core$IFn$_invoke$arity$3 = (function (world,quantity,key){
return phzr.impl.utils.core.phaser__GT_clj(world.createMultiple(phzr.impl.utils.core.clj__GT_phaser(quantity),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.world.create_multiple.cljs$core$IFn$_invoke$arity$4 = (function (world,quantity,key,frame){
return phzr.impl.utils.core.phaser__GT_clj(world.createMultiple(phzr.impl.utils.core.clj__GT_phaser(quantity),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame)));
});

phzr.world.create_multiple.cljs$core$IFn$_invoke$arity$5 = (function (world,quantity,key,frame,exists){
return phzr.impl.utils.core.phaser__GT_clj(world.createMultiple(phzr.impl.utils.core.clj__GT_phaser(quantity),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame),phzr.impl.utils.core.clj__GT_phaser(exists)));
});

phzr.world.create_multiple.cljs$lang$maxFixedArity = 5;

/**
 * Sort the children in the group according to custom sort function.
 * 
 *   The `sortHandler` is provided the two parameters: the two children involved in the comparison (a and b).
 *   It should return -1 if `a > b`, 1 if `a < b` or 0 if `a === b`.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * sort-handler (function) - The custom sort function.
 *  * context (object) {optional} - The context in which the sortHandler is called.
 */
phzr.world.custom_sort = (function phzr$world$custom_sort(var_args){
var args28378 = [];
var len__21323__auto___28381 = arguments.length;
var i__21324__auto___28382 = (0);
while(true){
if((i__21324__auto___28382 < len__21323__auto___28381)){
args28378.push((arguments[i__21324__auto___28382]));

var G__28383 = (i__21324__auto___28382 + (1));
i__21324__auto___28382 = G__28383;
continue;
} else {
}
break;
}

var G__28380 = args28378.length;
switch (G__28380) {
case 2:
return phzr.world.custom_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.custom_sort.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28378.length)].join('')));

}
});

phzr.world.custom_sort.cljs$core$IFn$_invoke$arity$2 = (function (world,sort_handler){
return phzr.impl.utils.core.phaser__GT_clj(world.customSort(phzr.impl.utils.core.clj__GT_phaser(sort_handler)));
});

phzr.world.custom_sort.cljs$core$IFn$_invoke$arity$3 = (function (world,sort_handler,context){
return phzr.impl.utils.core.phaser__GT_clj(world.customSort(phzr.impl.utils.core.clj__GT_phaser(sort_handler),phzr.impl.utils.core.clj__GT_phaser(context)));
});

phzr.world.custom_sort.cljs$lang$maxFixedArity = 3;

/**
 * Destroys this group.
 * 
 *   Removes all children, then removes this group from its parent and nulls references.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * destroy-children (boolean) {optional} - If true `destroy` will be invoked on each removed child.
 *  * soft (boolean) {optional} - A 'soft destroy' (set to true) doesn't remove this group from its parent or null the game reference. Set to false and it does.
 */
phzr.world.destroy = (function phzr$world$destroy(var_args){
var args28385 = [];
var len__21323__auto___28388 = arguments.length;
var i__21324__auto___28389 = (0);
while(true){
if((i__21324__auto___28389 < len__21323__auto___28388)){
args28385.push((arguments[i__21324__auto___28389]));

var G__28390 = (i__21324__auto___28389 + (1));
i__21324__auto___28389 = G__28390;
continue;
} else {
}
break;
}

var G__28387 = args28385.length;
switch (G__28387) {
case 1:
return phzr.world.destroy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.world.destroy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.destroy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28385.length)].join('')));

}
});

phzr.world.destroy.cljs$core$IFn$_invoke$arity$1 = (function (world){
return phzr.impl.utils.core.phaser__GT_clj(world.destroy());
});

phzr.world.destroy.cljs$core$IFn$_invoke$arity$2 = (function (world,destroy_children){
return phzr.impl.utils.core.phaser__GT_clj(world.destroy(phzr.impl.utils.core.clj__GT_phaser(destroy_children)));
});

phzr.world.destroy.cljs$core$IFn$_invoke$arity$3 = (function (world,destroy_children,soft){
return phzr.impl.utils.core.phaser__GT_clj(world.destroy(phzr.impl.utils.core.clj__GT_phaser(destroy_children),phzr.impl.utils.core.clj__GT_phaser(soft)));
});

phzr.world.destroy.cljs$lang$maxFixedArity = 3;

/**
 * Divides the given property by the amount on all children in this group.
 * 
 *   `Group.divideAll('x', 2)` will half the child.x value for each child.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * property (string) - The property to divide, for example 'body.velocity.x' or 'angle'.
 *  * amount (number) - The amount to divide the property by. If child.x = 100 then divideAll('x', 2) would make child.x = 50.
 *  * check-alive (boolean) - If true the property will only be changed if the child is alive.
 *  * check-visible (boolean) - If true the property will only be changed if the child is visible.
 */
phzr.world.divide_all = (function phzr$world$divide_all(world,property,amount,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(world.divideAll(phzr.impl.utils.core.clj__GT_phaser(property),phzr.impl.utils.core.clj__GT_phaser(amount),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});
/**
 * Find children matching a certain predicate.
 * 
 *   For example:
 * 
 *    var healthyList = Group.filter(function(child, index, children) {
 *        return child.health > 10 ? true : false;
 *    }, true);
 *    healthyList.callAll('attack');
 * 
 *   Note: Currently this will skip any children which are Groups themselves.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * predicate (function) - The function that each child will be evaluated against. Each child of the group will be passed to it as its first parameter, the index as the second, and the entire child array as the third
 *  * check-exists (boolean) {optional} - If true, only existing can be selected; otherwise all children can be selected and will be passed to the predicate.
 * 
 *   Returns:  Phaser.ArraySet - Returns an array list containing all the children that the predicate returned true for
 */
phzr.world.filter = (function phzr$world$filter(var_args){
var args28392 = [];
var len__21323__auto___28395 = arguments.length;
var i__21324__auto___28396 = (0);
while(true){
if((i__21324__auto___28396 < len__21323__auto___28395)){
args28392.push((arguments[i__21324__auto___28396]));

var G__28397 = (i__21324__auto___28396 + (1));
i__21324__auto___28396 = G__28397;
continue;
} else {
}
break;
}

var G__28394 = args28392.length;
switch (G__28394) {
case 2:
return phzr.world.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28392.length)].join('')));

}
});

phzr.world.filter.cljs$core$IFn$_invoke$arity$2 = (function (world,predicate){
return phzr.impl.utils.core.phaser__GT_clj(world.filter(phzr.impl.utils.core.clj__GT_phaser(predicate)));
});

phzr.world.filter.cljs$core$IFn$_invoke$arity$3 = (function (world,predicate,check_exists){
return phzr.impl.utils.core.phaser__GT_clj(world.filter(phzr.impl.utils.core.clj__GT_phaser(predicate),phzr.impl.utils.core.clj__GT_phaser(check_exists)));
});

phzr.world.filter.cljs$lang$maxFixedArity = 3;

/**
 * Call a function on each child in this group.
 * 
 *   Additional arguments for the callback can be specified after the `checkExists` parameter. For example,
 * 
 *    Group.forEach(awardBonusGold, this, true, 100, 500)
 * 
 *   would invoke `awardBonusGold` function with the parameters `(child, 100, 500)`.
 * 
 *   Note: This check will skip any children which are Groups themselves.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * callback (function) - The function that will be called for each applicable child. The child will be passed as the first argument.
 *  * callback-context (object) - The context in which the function should be called (usually 'this').
 *  * check-exists (boolean) {optional} - If set only children matching for which `exists` is true will be passed to the callback, otherwise all children will be passed.
 *  * args (any) {optional} - Additional arguments to pass to the callback function, after the child item.
 */
phzr.world.for_each = (function phzr$world$for_each(var_args){
var args28399 = [];
var len__21323__auto___28402 = arguments.length;
var i__21324__auto___28403 = (0);
while(true){
if((i__21324__auto___28403 < len__21323__auto___28402)){
args28399.push((arguments[i__21324__auto___28403]));

var G__28404 = (i__21324__auto___28403 + (1));
i__21324__auto___28403 = G__28404;
continue;
} else {
}
break;
}

var G__28401 = args28399.length;
switch (G__28401) {
case 3:
return phzr.world.for_each.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.for_each.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.world.for_each.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28399.length)].join('')));

}
});

phzr.world.for_each.cljs$core$IFn$_invoke$arity$3 = (function (world,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(world.forEach(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.world.for_each.cljs$core$IFn$_invoke$arity$4 = (function (world,callback,callback_context,check_exists){
return phzr.impl.utils.core.phaser__GT_clj(world.forEach(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(check_exists)));
});

phzr.world.for_each.cljs$core$IFn$_invoke$arity$5 = (function (world,callback,callback_context,check_exists,args){
return phzr.impl.utils.core.phaser__GT_clj(world.forEach(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(check_exists),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.world.for_each.cljs$lang$maxFixedArity = 5;

/**
 * Call a function on each alive child in this group.
 * 
 *   See {@link Phaser.Group#forEach forEach} for details.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * callback (function) - The function that will be called for each applicable child. The child will be passed as the first argument.
 *  * callback-context (object) - The context in which the function should be called (usually 'this').
 *  * args (any) {optional} - Additional arguments to pass to the callback function, after the child item.
 */
phzr.world.for_each_alive = (function phzr$world$for_each_alive(var_args){
var args28406 = [];
var len__21323__auto___28409 = arguments.length;
var i__21324__auto___28410 = (0);
while(true){
if((i__21324__auto___28410 < len__21323__auto___28409)){
args28406.push((arguments[i__21324__auto___28410]));

var G__28411 = (i__21324__auto___28410 + (1));
i__21324__auto___28410 = G__28411;
continue;
} else {
}
break;
}

var G__28408 = args28406.length;
switch (G__28408) {
case 3:
return phzr.world.for_each_alive.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.for_each_alive.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28406.length)].join('')));

}
});

phzr.world.for_each_alive.cljs$core$IFn$_invoke$arity$3 = (function (world,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(world.forEachAlive(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.world.for_each_alive.cljs$core$IFn$_invoke$arity$4 = (function (world,callback,callback_context,args){
return phzr.impl.utils.core.phaser__GT_clj(world.forEachAlive(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.world.for_each_alive.cljs$lang$maxFixedArity = 4;

/**
 * Call a function on each dead child in this group.
 * 
 *   See {@link Phaser.Group#forEach forEach} for details.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * callback (function) - The function that will be called for each applicable child. The child will be passed as the first argument.
 *  * callback-context (object) - The context in which the function should be called (usually 'this').
 *  * args (any) {optional} - Additional arguments to pass to the callback function, after the child item.
 */
phzr.world.for_each_dead = (function phzr$world$for_each_dead(var_args){
var args28413 = [];
var len__21323__auto___28416 = arguments.length;
var i__21324__auto___28417 = (0);
while(true){
if((i__21324__auto___28417 < len__21323__auto___28416)){
args28413.push((arguments[i__21324__auto___28417]));

var G__28418 = (i__21324__auto___28417 + (1));
i__21324__auto___28417 = G__28418;
continue;
} else {
}
break;
}

var G__28415 = args28413.length;
switch (G__28415) {
case 3:
return phzr.world.for_each_dead.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.for_each_dead.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28413.length)].join('')));

}
});

phzr.world.for_each_dead.cljs$core$IFn$_invoke$arity$3 = (function (world,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(world.forEachDead(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.world.for_each_dead.cljs$core$IFn$_invoke$arity$4 = (function (world,callback,callback_context,args){
return phzr.impl.utils.core.phaser__GT_clj(world.forEachDead(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.world.for_each_dead.cljs$lang$maxFixedArity = 4;

/**
 * Call a function on each existing child in this group.
 * 
 *   See {@link Phaser.Group#forEach forEach} for details.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * callback (function) - The function that will be called for each applicable child. The child will be passed as the first argument.
 *  * callback-context (object) - The context in which the function should be called (usually 'this').
 *  * args (any) {optional} - Additional arguments to pass to the callback function, after the child item.
 */
phzr.world.for_each_exists = (function phzr$world$for_each_exists(var_args){
var args28420 = [];
var len__21323__auto___28423 = arguments.length;
var i__21324__auto___28424 = (0);
while(true){
if((i__21324__auto___28424 < len__21323__auto___28423)){
args28420.push((arguments[i__21324__auto___28424]));

var G__28425 = (i__21324__auto___28424 + (1));
i__21324__auto___28424 = G__28425;
continue;
} else {
}
break;
}

var G__28422 = args28420.length;
switch (G__28422) {
case 3:
return phzr.world.for_each_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.for_each_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28420.length)].join('')));

}
});

phzr.world.for_each_exists.cljs$core$IFn$_invoke$arity$3 = (function (world,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(world.forEachExists(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.world.for_each_exists.cljs$core$IFn$_invoke$arity$4 = (function (world,callback,callback_context,args){
return phzr.impl.utils.core.phaser__GT_clj(world.forEachExists(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.world.for_each_exists.cljs$lang$maxFixedArity = 4;

/**
 * Useful function that returns a texture of the displayObject object that can then be used to create sprites
 *   This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * resolution (Number) - The resolution of the texture being generated
 *  * scale-mode (Number) - See PIXI.scaleModes for possible values
 *  * renderer (PIXI.CanvasRenderer | PIXI.WebGLRenderer) - The renderer used to generate the texture.
 * 
 *   Returns:  PIXI.Texture - a texture of the graphics object
 */
phzr.world.generate_texture = (function phzr$world$generate_texture(world,resolution,scale_mode,renderer){
return phzr.impl.utils.core.phaser__GT_clj(world.generateTexture(phzr.impl.utils.core.clj__GT_phaser(resolution),phzr.impl.utils.core.clj__GT_phaser(scale_mode),phzr.impl.utils.core.clj__GT_phaser(renderer)));
});
/**
 * Returns the child found at the given index within this group.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * index (integer) - The index to return the child from.
 * 
 *   Returns:  [DisplayObject | integer] - The child that was found at the given index, or -1 for an invalid index.
 */
phzr.world.get_at = (function phzr$world$get_at(world,index){
return phzr.impl.utils.core.phaser__GT_clj(world.getAt(phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Returns the child at the bottom of this group.
 * 
 *   The bottom child the child being displayed (rendered) below every other child.
 * 
 *   Returns:  any - The child at the bottom of the Group.
 */
phzr.world.get_bottom = (function phzr$world$get_bottom(world){
return phzr.impl.utils.core.phaser__GT_clj(world.getBottom());
});
/**
 * Retrieves the bounds of the displayObjectContainer as a rectangle. The bounds calculation takes all visible children into consideration.
 * 
 *   Returns:  Rectangle - The rectangular bounding area
 */
phzr.world.get_bounds = (function phzr$world$get_bounds(world){
return phzr.impl.utils.core.phaser__GT_clj(world.getBounds());
});
/**
 * Returns the child at the specified index
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * index (Number) - The index to get the child from
 * 
 *   Returns:  PIXI.DisplayObject - The child at the given index, if any.
 */
phzr.world.get_child_at = (function phzr$world$get_child_at(world,index){
return phzr.impl.utils.core.phaser__GT_clj(world.getChildAt(phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Returns the index position of a child DisplayObject instance
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The DisplayObject instance to identify
 * 
 *   Returns:  Number - The index position of the child display object to identify
 */
phzr.world.get_child_index = (function phzr$world$get_child_index(world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.getChildIndex(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Get the first child that is alive (`child.alive === true`).
 * 
 *   This is handy for checking if everything has been wiped out, or choosing a squad leader, etc.
 * 
 *   Returns:  any - The first alive child, or null if none found.
 */
phzr.world.get_first_alive = (function phzr$world$get_first_alive(world){
return phzr.impl.utils.core.phaser__GT_clj(world.getFirstAlive());
});
/**
 * Get the first child that is dead (`child.alive === false`).
 * 
 *   This is handy for checking if everything has been wiped out, or choosing a squad leader, etc.
 * 
 *   Returns:  any - The first dead child, or null if none found.
 */
phzr.world.get_first_dead = (function phzr$world$get_first_dead(world){
return phzr.impl.utils.core.phaser__GT_clj(world.getFirstDead());
});
/**
 * Get the first display object that exists, or doesn't exist.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * exists (boolean) {optional} - If true, find the first existing child; otherwise find the first non-existing child.
 * 
 *   Returns:  any - The first child, or null if none found.
 */
phzr.world.get_first_exists = (function phzr$world$get_first_exists(var_args){
var args28427 = [];
var len__21323__auto___28430 = arguments.length;
var i__21324__auto___28431 = (0);
while(true){
if((i__21324__auto___28431 < len__21323__auto___28430)){
args28427.push((arguments[i__21324__auto___28431]));

var G__28432 = (i__21324__auto___28431 + (1));
i__21324__auto___28431 = G__28432;
continue;
} else {
}
break;
}

var G__28429 = args28427.length;
switch (G__28429) {
case 1:
return phzr.world.get_first_exists.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.world.get_first_exists.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28427.length)].join('')));

}
});

phzr.world.get_first_exists.cljs$core$IFn$_invoke$arity$1 = (function (world){
return phzr.impl.utils.core.phaser__GT_clj(world.getFirstExists());
});

phzr.world.get_first_exists.cljs$core$IFn$_invoke$arity$2 = (function (world,exists){
return phzr.impl.utils.core.phaser__GT_clj(world.getFirstExists(phzr.impl.utils.core.clj__GT_phaser(exists)));
});

phzr.world.get_first_exists.cljs$lang$maxFixedArity = 2;

/**
 * Get the index position of the given child in this group, which should match the child's `z` property.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (any) - The child to get the index for.
 * 
 *   Returns:  integer - The index of the child or -1 if it's not a member of this group.
 */
phzr.world.get_index = (function phzr$world$get_index(world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.getIndex(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Retrieves the non-global local bounds of the displayObjectContainer as a rectangle. The calculation takes all visible children into consideration.
 * 
 *   Returns:  Rectangle - The rectangular bounding area
 */
phzr.world.get_local_bounds = (function phzr$world$get_local_bounds(world){
return phzr.impl.utils.core.phaser__GT_clj(world.getLocalBounds());
});
/**
 * Returns a random child from the group.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * start-index (integer) {optional} - Offset from the front of the front of the group (lowest child).
 *  * length (integer) {optional} - Restriction on the number of values you want to randomly select from.
 * 
 *   Returns:  any - A random child of this Group.
 */
phzr.world.get_random = (function phzr$world$get_random(var_args){
var args28434 = [];
var len__21323__auto___28437 = arguments.length;
var i__21324__auto___28438 = (0);
while(true){
if((i__21324__auto___28438 < len__21323__auto___28437)){
args28434.push((arguments[i__21324__auto___28438]));

var G__28439 = (i__21324__auto___28438 + (1));
i__21324__auto___28438 = G__28439;
continue;
} else {
}
break;
}

var G__28436 = args28434.length;
switch (G__28436) {
case 1:
return phzr.world.get_random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.world.get_random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.get_random.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28434.length)].join('')));

}
});

phzr.world.get_random.cljs$core$IFn$_invoke$arity$1 = (function (world){
return phzr.impl.utils.core.phaser__GT_clj(world.getRandom());
});

phzr.world.get_random.cljs$core$IFn$_invoke$arity$2 = (function (world,start_index){
return phzr.impl.utils.core.phaser__GT_clj(world.getRandom(phzr.impl.utils.core.clj__GT_phaser(start_index)));
});

phzr.world.get_random.cljs$core$IFn$_invoke$arity$3 = (function (world,start_index,length){
return phzr.impl.utils.core.phaser__GT_clj(world.getRandom(phzr.impl.utils.core.clj__GT_phaser(start_index),phzr.impl.utils.core.clj__GT_phaser(length)));
});

phzr.world.get_random.cljs$lang$maxFixedArity = 3;

/**
 * Return the child at the top of this group.
 * 
 *   The top child is the child displayed (rendered) above every other child.
 * 
 *   Returns:  any - The child at the top of the Group.
 */
phzr.world.get_top = (function phzr$world$get_top(world){
return phzr.impl.utils.core.phaser__GT_clj(world.getTop());
});
/**
 * Checks if the child has the given property.
 * 
 *   Will scan up to 4 levels deep only.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (any) - The child to check for the existance of the property on.
 *  * key (Array.<string>) - An array of strings that make up the property.
 * 
 *   Returns:  boolean - True if the child has the property, otherwise false.
 */
phzr.world.has_property = (function phzr$world$has_property(world,child,key){
return phzr.impl.utils.core.phaser__GT_clj(world.hasProperty(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key)));
});
/**
 * Iterates over the children of the group performing one of several actions for matched children.
 * 
 *   A child is considered a match when it has a property, named `key`, whose value is equal to `value`
 *   according to a strict equality comparison.
 * 
 *   The result depends on the `returnType`:
 * 
 *   - {@link Phaser.Group.RETURN_TOTAL RETURN_TOTAL}:
 *    The callback, if any, is applied to all matching children. The number of matched children is returned.
 *   - {@link Phaser.Group.RETURN_NONE RETURN_NONE}:
 *    The callback, if any, is applied to all matching children. No value is returned.
 *   - {@link Phaser.Group.RETURN_CHILD RETURN_CHILD}:
 *    The callback, if any, is applied to the *first* matching child and the *first* matched child is returned.
 *    If there is no matching child then null is returned.
 * 
 *   If `args` is specified it must be an array. The matched child will be assigned to the first
 *   element and the entire array will be applied to the callback function.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * key (string) - The child property to check, i.e. 'exists', 'alive', 'health'
 *  * value (any) - A child matches if `child[key] === value` is true.
 *  * return-type (integer) - How to iterate the children and what to return.
 *  * callback (function) {optional} - Optional function that will be called on each matching child. The matched child is supplied as the first argument.
 *  * callback-context (object) {optional} - The context in which the function should be called (usually 'this').
 *  * args (Array.<any>) {optional} - The arguments supplied to to the callback; the first array index (argument) will be replaced with the matched child.
 * 
 *   Returns:  any - Returns either an integer (for RETURN_TOTAL), the first matched child (for RETURN_CHILD), or null.
 */
phzr.world.iterate = (function phzr$world$iterate(var_args){
var args28441 = [];
var len__21323__auto___28444 = arguments.length;
var i__21324__auto___28445 = (0);
while(true){
if((i__21324__auto___28445 < len__21323__auto___28444)){
args28441.push((arguments[i__21324__auto___28445]));

var G__28446 = (i__21324__auto___28445 + (1));
i__21324__auto___28445 = G__28446;
continue;
} else {
}
break;
}

var G__28443 = args28441.length;
switch (G__28443) {
case 4:
return phzr.world.iterate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.world.iterate.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.world.iterate.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.world.iterate.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28441.length)].join('')));

}
});

phzr.world.iterate.cljs$core$IFn$_invoke$arity$4 = (function (world,key,value,return_type){
return phzr.impl.utils.core.phaser__GT_clj(world.iterate(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(return_type)));
});

phzr.world.iterate.cljs$core$IFn$_invoke$arity$5 = (function (world,key,value,return_type,callback){
return phzr.impl.utils.core.phaser__GT_clj(world.iterate(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(return_type),phzr.impl.utils.core.clj__GT_phaser(callback)));
});

phzr.world.iterate.cljs$core$IFn$_invoke$arity$6 = (function (world,key,value,return_type,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(world.iterate(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(return_type),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.world.iterate.cljs$core$IFn$_invoke$arity$7 = (function (world,key,value,return_type,callback,callback_context,args){
return phzr.impl.utils.core.phaser__GT_clj(world.iterate(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(return_type),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.world.iterate.cljs$lang$maxFixedArity = 7;

/**
 * Moves all children from this Group to the Group given.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * group (Phaser.Group) - The new Group to which the children will be moved to.
 *  * silent (boolean) {optional} - If true the children will not dispatch the `onAddedToGroup` event for the new Group.
 * 
 *   Returns:  Phaser.Group - The Group to which all the children were moved.
 */
phzr.world.move_all = (function phzr$world$move_all(var_args){
var args28448 = [];
var len__21323__auto___28451 = arguments.length;
var i__21324__auto___28452 = (0);
while(true){
if((i__21324__auto___28452 < len__21323__auto___28451)){
args28448.push((arguments[i__21324__auto___28452]));

var G__28453 = (i__21324__auto___28452 + (1));
i__21324__auto___28452 = G__28453;
continue;
} else {
}
break;
}

var G__28450 = args28448.length;
switch (G__28450) {
case 2:
return phzr.world.move_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.move_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28448.length)].join('')));

}
});

phzr.world.move_all.cljs$core$IFn$_invoke$arity$2 = (function (world,group){
return phzr.impl.utils.core.phaser__GT_clj(world.moveAll(phzr.impl.utils.core.clj__GT_phaser(group)));
});

phzr.world.move_all.cljs$core$IFn$_invoke$arity$3 = (function (world,group,silent){
return phzr.impl.utils.core.phaser__GT_clj(world.moveAll(phzr.impl.utils.core.clj__GT_phaser(group),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.world.move_all.cljs$lang$maxFixedArity = 3;

/**
 * Moves the given child down one place in this group unless it's already at the bottom.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (any) - The child to move down in the group.
 * 
 *   Returns:  any - The child that was moved.
 */
phzr.world.move_down = (function phzr$world$move_down(world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.moveDown(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Moves the given child up one place in this group unless it's already at the top.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (any) - The child to move up in the group.
 * 
 *   Returns:  any - The child that was moved.
 */
phzr.world.move_up = (function phzr$world$move_up(world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.moveUp(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Multiplies the given property by the amount on all children in this group.
 * 
 *   `Group.multiplyAll('x', 2)` will x2 the child.x value for each child.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * property (string) - The property to multiply, for example 'body.velocity.x' or 'angle'.
 *  * amount (number) - The amount to multiply the property by. If child.x = 10 then multiplyAll('x', 2) would make child.x = 20.
 *  * check-alive (boolean) - If true the property will only be changed if the child is alive.
 *  * check-visible (boolean) - If true the property will only be changed if the child is visible.
 */
phzr.world.multiply_all = (function phzr$world$multiply_all(world,property,amount,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(world.multiplyAll(phzr.impl.utils.core.clj__GT_phaser(property),phzr.impl.utils.core.clj__GT_phaser(amount),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});
/**
 * Advances the group cursor to the next (higher) object in the group.
 * 
 *   If the cursor is at the end of the group (top child) it is moved the start of the group (bottom child).
 * 
 *   Returns:  any - The child the cursor now points to.
 */
phzr.world.next = (function phzr$world$next(world){
return phzr.impl.utils.core.phaser__GT_clj(world.next());
});
/**
 * Moves the group cursor to the previous (lower) child in the group.
 * 
 *   If the cursor is at the start of the group (bottom child) it is moved to the end (top child).
 * 
 *   Returns:  any - The child the cursor now points to.
 */
phzr.world.previous = (function phzr$world$previous(world){
return phzr.impl.utils.core.phaser__GT_clj(world.previous());
});
/**
 * Removes the given child from this group.
 * 
 *   This will dispatch an `onRemovedFromGroup` event from the child (if it has one), and optionally destroy the child.
 * 
 *   If the group cursor was referring to the removed child it is updated to refer to the next child.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (any) - The child to remove.
 *  * destroy (boolean) {optional} - If true `destroy` will be invoked on the removed child.
 *  * silent (boolean) {optional} - If true the the child will not dispatch the `onRemovedFromGroup` event.
 * 
 *   Returns:  boolean - true if the child was removed from this group, otherwise false.
 */
phzr.world.remove = (function phzr$world$remove(var_args){
var args28455 = [];
var len__21323__auto___28458 = arguments.length;
var i__21324__auto___28459 = (0);
while(true){
if((i__21324__auto___28459 < len__21323__auto___28458)){
args28455.push((arguments[i__21324__auto___28459]));

var G__28460 = (i__21324__auto___28459 + (1));
i__21324__auto___28459 = G__28460;
continue;
} else {
}
break;
}

var G__28457 = args28455.length;
switch (G__28457) {
case 2:
return phzr.world.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.remove.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.remove.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28455.length)].join('')));

}
});

phzr.world.remove.cljs$core$IFn$_invoke$arity$2 = (function (world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.remove(phzr.impl.utils.core.clj__GT_phaser(child)));
});

phzr.world.remove.cljs$core$IFn$_invoke$arity$3 = (function (world,child,destroy){
return phzr.impl.utils.core.phaser__GT_clj(world.remove(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(destroy)));
});

phzr.world.remove.cljs$core$IFn$_invoke$arity$4 = (function (world,child,destroy,silent){
return phzr.impl.utils.core.phaser__GT_clj(world.remove(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(destroy),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.world.remove.cljs$lang$maxFixedArity = 4;

/**
 * Removes all children from this group, but does not remove the group from its parent.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * destroy (boolean) {optional} - If true `destroy` will be invoked on each removed child.
 *  * silent (boolean) {optional} - If true the children will not dispatch their `onRemovedFromGroup` events.
 */
phzr.world.remove_all = (function phzr$world$remove_all(var_args){
var args28462 = [];
var len__21323__auto___28465 = arguments.length;
var i__21324__auto___28466 = (0);
while(true){
if((i__21324__auto___28466 < len__21323__auto___28465)){
args28462.push((arguments[i__21324__auto___28466]));

var G__28467 = (i__21324__auto___28466 + (1));
i__21324__auto___28466 = G__28467;
continue;
} else {
}
break;
}

var G__28464 = args28462.length;
switch (G__28464) {
case 1:
return phzr.world.remove_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.world.remove_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.remove_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28462.length)].join('')));

}
});

phzr.world.remove_all.cljs$core$IFn$_invoke$arity$1 = (function (world){
return phzr.impl.utils.core.phaser__GT_clj(world.removeAll());
});

phzr.world.remove_all.cljs$core$IFn$_invoke$arity$2 = (function (world,destroy){
return phzr.impl.utils.core.phaser__GT_clj(world.removeAll(phzr.impl.utils.core.clj__GT_phaser(destroy)));
});

phzr.world.remove_all.cljs$core$IFn$_invoke$arity$3 = (function (world,destroy,silent){
return phzr.impl.utils.core.phaser__GT_clj(world.removeAll(phzr.impl.utils.core.clj__GT_phaser(destroy),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.world.remove_all.cljs$lang$maxFixedArity = 3;

/**
 * Removes all children from this group whose index falls beteen the given startIndex and endIndex values.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * start-index (integer) - The index to start removing children from.
 *  * end-index (integer) {optional} - The index to stop removing children at. Must be higher than startIndex. If undefined this method will remove all children between startIndex and the end of the group.
 *  * destroy (boolean) {optional} - If true `destroy` will be invoked on each removed child.
 *  * silent (boolean) {optional} - If true the children will not dispatch their `onRemovedFromGroup` events.
 */
phzr.world.remove_between = (function phzr$world$remove_between(var_args){
var args28469 = [];
var len__21323__auto___28472 = arguments.length;
var i__21324__auto___28473 = (0);
while(true){
if((i__21324__auto___28473 < len__21323__auto___28472)){
args28469.push((arguments[i__21324__auto___28473]));

var G__28474 = (i__21324__auto___28473 + (1));
i__21324__auto___28473 = G__28474;
continue;
} else {
}
break;
}

var G__28471 = args28469.length;
switch (G__28471) {
case 2:
return phzr.world.remove_between.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.remove_between.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.remove_between.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.world.remove_between.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28469.length)].join('')));

}
});

phzr.world.remove_between.cljs$core$IFn$_invoke$arity$2 = (function (world,start_index){
return phzr.impl.utils.core.phaser__GT_clj(world.removeBetween(phzr.impl.utils.core.clj__GT_phaser(start_index)));
});

phzr.world.remove_between.cljs$core$IFn$_invoke$arity$3 = (function (world,start_index,end_index){
return phzr.impl.utils.core.phaser__GT_clj(world.removeBetween(phzr.impl.utils.core.clj__GT_phaser(start_index),phzr.impl.utils.core.clj__GT_phaser(end_index)));
});

phzr.world.remove_between.cljs$core$IFn$_invoke$arity$4 = (function (world,start_index,end_index,destroy){
return phzr.impl.utils.core.phaser__GT_clj(world.removeBetween(phzr.impl.utils.core.clj__GT_phaser(start_index),phzr.impl.utils.core.clj__GT_phaser(end_index),phzr.impl.utils.core.clj__GT_phaser(destroy)));
});

phzr.world.remove_between.cljs$core$IFn$_invoke$arity$5 = (function (world,start_index,end_index,destroy,silent){
return phzr.impl.utils.core.phaser__GT_clj(world.removeBetween(phzr.impl.utils.core.clj__GT_phaser(start_index),phzr.impl.utils.core.clj__GT_phaser(end_index),phzr.impl.utils.core.clj__GT_phaser(destroy),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.world.remove_between.cljs$lang$maxFixedArity = 5;

/**
 * Removes a child from the container.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The DisplayObject to remove
 * 
 *   Returns:  PIXI.DisplayObject - The child that was removed.
 */
phzr.world.remove_child = (function phzr$world$remove_child(world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.removeChild(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Removes a child from the specified index position.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * index (Number) - The index to get the child from
 * 
 *   Returns:  PIXI.DisplayObject - The child that was removed.
 */
phzr.world.remove_child_at = (function phzr$world$remove_child_at(world,index){
return phzr.impl.utils.core.phaser__GT_clj(world.removeChildAt(phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Removes all children from this container that are within the begin and end indexes.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * begin-index (Number) - The beginning position. Default value is 0.
 *  * end-index (Number) - The ending position. Default value is size of the container.
 */
phzr.world.remove_children = (function phzr$world$remove_children(world,begin_index,end_index){
return phzr.impl.utils.core.phaser__GT_clj(world.removeChildren(phzr.impl.utils.core.clj__GT_phaser(begin_index),phzr.impl.utils.core.clj__GT_phaser(end_index)));
});
/**
 * Removes a child of this Group from the hash array.
 *   This call will return false if the child is not in the hash.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (DisplayObject) - The display object to remove from this Groups hash. Must be a member of this Group and in the hash.
 * 
 *   Returns:  boolean - True if the child was successfully removed from the hash, otherwise false.
 */
phzr.world.remove_from_hash = (function phzr$world$remove_from_hash(world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.removeFromHash(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Removes the current stage reference from the container and all of its children.
 */
phzr.world.remove_stage_reference = (function phzr$world$remove_stage_reference(world){
return phzr.impl.utils.core.phaser__GT_clj(world.removeStageReference());
});
/**
 * Replaces a child of this group with the given newChild. The newChild cannot be a member of this group.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * old-child (any) - The child in this group that will be replaced.
 *  * new-child (any) - The child to be inserted into this group.
 * 
 *   Returns:  any - Returns the oldChild that was replaced within this group.
 */
phzr.world.replace = (function phzr$world$replace(world,old_child,new_child){
return phzr.impl.utils.core.phaser__GT_clj(world.replace(phzr.impl.utils.core.clj__GT_phaser(old_child),phzr.impl.utils.core.clj__GT_phaser(new_child)));
});
/**
 * Sets the group cursor to the first child in the group.
 * 
 *   If the optional index parameter is given it sets the cursor to the object at that index instead.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * index (integer) {optional} - Set the cursor to point to a specific index.
 * 
 *   Returns:  any - The child the cursor now points to.
 */
phzr.world.reset_cursor = (function phzr$world$reset_cursor(var_args){
var args28476 = [];
var len__21323__auto___28479 = arguments.length;
var i__21324__auto___28480 = (0);
while(true){
if((i__21324__auto___28480 < len__21323__auto___28479)){
args28476.push((arguments[i__21324__auto___28480]));

var G__28481 = (i__21324__auto___28480 + (1));
i__21324__auto___28480 = G__28481;
continue;
} else {
}
break;
}

var G__28478 = args28476.length;
switch (G__28478) {
case 1:
return phzr.world.reset_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.world.reset_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28476.length)].join('')));

}
});

phzr.world.reset_cursor.cljs$core$IFn$_invoke$arity$1 = (function (world){
return phzr.impl.utils.core.phaser__GT_clj(world.resetCursor());
});

phzr.world.reset_cursor.cljs$core$IFn$_invoke$arity$2 = (function (world,index){
return phzr.impl.utils.core.phaser__GT_clj(world.resetCursor(phzr.impl.utils.core.clj__GT_phaser(index)));
});

phzr.world.reset_cursor.cljs$lang$maxFixedArity = 2;

/**
 * Updates the size of this world. Note that this doesn't modify the world x/y coordinates, just the width and height.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * width (number) - New width of the game world in pixels.
 *  * height (number) - New height of the game world in pixels.
 */
phzr.world.resize = (function phzr$world$resize(world,width,height){
return phzr.impl.utils.core.phaser__GT_clj(world.resize(phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height)));
});
/**
 * Reverses all children in this group.
 * 
 *   This operaation applies only to immediate children and does not propagate to subgroups.
 */
phzr.world.reverse = (function phzr$world$reverse(world){
return phzr.impl.utils.core.phaser__GT_clj(world.reverse());
});
/**
 * Sends the given child to the bottom of this group so it renders below all other children.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (any) - The child to send to the bottom of this group.
 * 
 *   Returns:  any - The child that was moved.
 */
phzr.world.send_to_back = (function phzr$world$send_to_back(world,child){
return phzr.impl.utils.core.phaser__GT_clj(world.sendToBack(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Quickly set a property on a single child of this group to a new value.
 * 
 *   The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (Phaser.Sprite) - The child to set the property on.
 *  * key (string) - The property, as a string, to be set. For example: 'body.velocity.x'
 *  * value (any) - The value that will be set.
 *  * check-alive (boolean) {optional} - If set then the child will only be updated if alive=true.
 *  * check-visible (boolean) {optional} - If set then the child will only be updated if visible=true.
 *  * operation (integer) {optional} - Controls how the value is assigned. A value of 0 replaces the value with the new one. A value of 1 adds it, 2 subtracts it, 3 multiplies it and 4 divides it.
 *  * force (boolean) {optional} - If `force` is true then the property will be set on the child regardless if it already exists or not. If false and the property doesn't exist, nothing will be set.
 * 
 *   Returns:  boolean - True if the property was set, false if not.
 */
phzr.world.set = (function phzr$world$set(var_args){
var args28483 = [];
var len__21323__auto___28486 = arguments.length;
var i__21324__auto___28487 = (0);
while(true){
if((i__21324__auto___28487 < len__21323__auto___28486)){
args28483.push((arguments[i__21324__auto___28487]));

var G__28488 = (i__21324__auto___28487 + (1));
i__21324__auto___28487 = G__28488;
continue;
} else {
}
break;
}

var G__28485 = args28483.length;
switch (G__28485) {
case 4:
return phzr.world.set.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.world.set.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.world.set.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.world.set.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.world.set.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28483.length)].join('')));

}
});

phzr.world.set.cljs$core$IFn$_invoke$arity$4 = (function (world,child,key,value){
return phzr.impl.utils.core.phaser__GT_clj(world.set(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value)));
});

phzr.world.set.cljs$core$IFn$_invoke$arity$5 = (function (world,child,key,value,check_alive){
return phzr.impl.utils.core.phaser__GT_clj(world.set(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive)));
});

phzr.world.set.cljs$core$IFn$_invoke$arity$6 = (function (world,child,key,value,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(world.set(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});

phzr.world.set.cljs$core$IFn$_invoke$arity$7 = (function (world,child,key,value,check_alive,check_visible,operation){
return phzr.impl.utils.core.phaser__GT_clj(world.set(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(operation)));
});

phzr.world.set.cljs$core$IFn$_invoke$arity$8 = (function (world,child,key,value,check_alive,check_visible,operation,force){
return phzr.impl.utils.core.phaser__GT_clj(world.set(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(operation),phzr.impl.utils.core.clj__GT_phaser(force)));
});

phzr.world.set.cljs$lang$maxFixedArity = 8;

/**
 * Quickly set the same property across all children of this group to a new value.
 * 
 *   This call doesn't descend down children, so if you have a Group inside of this group, the property will be set on the group but not its children.
 *   If you need that ability please see `Group.setAllChildren`.
 * 
 *   The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * key (string) - The property, as a string, to be set. For example: 'body.velocity.x'
 *  * value (any) - The value that will be set.
 *  * check-alive (boolean) {optional} - If set then only children with alive=true will be updated. This includes any Groups that are children.
 *  * check-visible (boolean) {optional} - If set then only children with visible=true will be updated. This includes any Groups that are children.
 *  * operation (integer) {optional} - Controls how the value is assigned. A value of 0 replaces the value with the new one. A value of 1 adds it, 2 subtracts it, 3 multiplies it and 4 divides it.
 *  * force (boolean) {optional} - If `force` is true then the property will be set on the child regardless if it already exists or not. If false and the property doesn't exist, nothing will be set.
 */
phzr.world.set_all = (function phzr$world$set_all(var_args){
var args28490 = [];
var len__21323__auto___28493 = arguments.length;
var i__21324__auto___28494 = (0);
while(true){
if((i__21324__auto___28494 < len__21323__auto___28493)){
args28490.push((arguments[i__21324__auto___28494]));

var G__28495 = (i__21324__auto___28494 + (1));
i__21324__auto___28494 = G__28495;
continue;
} else {
}
break;
}

var G__28492 = args28490.length;
switch (G__28492) {
case 3:
return phzr.world.set_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.set_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.world.set_all.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.world.set_all.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.world.set_all.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28490.length)].join('')));

}
});

phzr.world.set_all.cljs$core$IFn$_invoke$arity$3 = (function (world,key,value){
return phzr.impl.utils.core.phaser__GT_clj(world.setAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value)));
});

phzr.world.set_all.cljs$core$IFn$_invoke$arity$4 = (function (world,key,value,check_alive){
return phzr.impl.utils.core.phaser__GT_clj(world.setAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive)));
});

phzr.world.set_all.cljs$core$IFn$_invoke$arity$5 = (function (world,key,value,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(world.setAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});

phzr.world.set_all.cljs$core$IFn$_invoke$arity$6 = (function (world,key,value,check_alive,check_visible,operation){
return phzr.impl.utils.core.phaser__GT_clj(world.setAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(operation)));
});

phzr.world.set_all.cljs$core$IFn$_invoke$arity$7 = (function (world,key,value,check_alive,check_visible,operation,force){
return phzr.impl.utils.core.phaser__GT_clj(world.setAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(operation),phzr.impl.utils.core.clj__GT_phaser(force)));
});

phzr.world.set_all.cljs$lang$maxFixedArity = 7;

/**
 * Quickly set the same property across all children of this group, and any child Groups, to a new value.
 * 
 *   If this group contains other Groups then the same property is set across their children as well, iterating down until it reaches the bottom.
 *   Unlike with `setAll` the property is NOT set on child Groups itself.
 * 
 *   The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * key (string) - The property, as a string, to be set. For example: 'body.velocity.x'
 *  * value (any) - The value that will be set.
 *  * check-alive (boolean) {optional} - If set then only children with alive=true will be updated. This includes any Groups that are children.
 *  * check-visible (boolean) {optional} - If set then only children with visible=true will be updated. This includes any Groups that are children.
 *  * operation (integer) {optional} - Controls how the value is assigned. A value of 0 replaces the value with the new one. A value of 1 adds it, 2 subtracts it, 3 multiplies it and 4 divides it.
 *  * force (boolean) {optional} - If `force` is true then the property will be set on the child regardless if it already exists or not. If false and the property doesn't exist, nothing will be set.
 */
phzr.world.set_all_children = (function phzr$world$set_all_children(var_args){
var args28497 = [];
var len__21323__auto___28500 = arguments.length;
var i__21324__auto___28501 = (0);
while(true){
if((i__21324__auto___28501 < len__21323__auto___28500)){
args28497.push((arguments[i__21324__auto___28501]));

var G__28502 = (i__21324__auto___28501 + (1));
i__21324__auto___28501 = G__28502;
continue;
} else {
}
break;
}

var G__28499 = args28497.length;
switch (G__28499) {
case 3:
return phzr.world.set_all_children.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.set_all_children.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.world.set_all_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.world.set_all_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.world.set_all_children.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28497.length)].join('')));

}
});

phzr.world.set_all_children.cljs$core$IFn$_invoke$arity$3 = (function (world,key,value){
return phzr.impl.utils.core.phaser__GT_clj(world.setAllChildren(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value)));
});

phzr.world.set_all_children.cljs$core$IFn$_invoke$arity$4 = (function (world,key,value,check_alive){
return phzr.impl.utils.core.phaser__GT_clj(world.setAllChildren(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive)));
});

phzr.world.set_all_children.cljs$core$IFn$_invoke$arity$5 = (function (world,key,value,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(world.setAllChildren(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});

phzr.world.set_all_children.cljs$core$IFn$_invoke$arity$6 = (function (world,key,value,check_alive,check_visible,operation){
return phzr.impl.utils.core.phaser__GT_clj(world.setAllChildren(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(operation)));
});

phzr.world.set_all_children.cljs$core$IFn$_invoke$arity$7 = (function (world,key,value,check_alive,check_visible,operation,force){
return phzr.impl.utils.core.phaser__GT_clj(world.setAllChildren(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(operation),phzr.impl.utils.core.clj__GT_phaser(force)));
});

phzr.world.set_all_children.cljs$lang$maxFixedArity = 7;

/**
 * Updates the size of this world and sets World.x/y to the given values
 *   The Camera bounds and Physics bounds (if set) are also updated to match the new World bounds.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * x (number) - Top left most corner of the world.
 *  * y (number) - Top left most corner of the world.
 *  * width (number) - New width of the game world in pixels.
 *  * height (number) - New height of the game world in pixels.
 */
phzr.world.set_bounds = (function phzr$world$set_bounds(world,x,y,width,height){
return phzr.impl.utils.core.phaser__GT_clj(world.setBounds(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(width),phzr.impl.utils.core.clj__GT_phaser(height)));
});
/**
 * Changes the position of an existing child in the display object container
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The child DisplayObject instance for which you want to change the index number
 *  * index (Number) - The resulting index number for the child display object
 */
phzr.world.set_child_index = (function phzr$world$set_child_index(world,child,index){
return phzr.impl.utils.core.phaser__GT_clj(world.setChildIndex(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Sets a property to the given value on the child. The operation parameter controls how the value is set.
 * 
 *   The operations are:
 *   - 0: set the existing value to the given value; if force is `true` a new property will be created if needed
 *   - 1: will add the given value to the value already present.
 *   - 2: will subtract the given value from the value already present.
 *   - 3: will multiply the value already present by the given value.
 *   - 4: will divide the value already present by the given value.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (any) - The child to set the property value on.
 *  * key (array) - An array of strings that make up the property that will be set.
 *  * value (any) - The value that will be set.
 *  * operation (integer) {optional} - Controls how the value is assigned. A value of 0 replaces the value with the new one. A value of 1 adds it, 2 subtracts it, 3 multiplies it and 4 divides it.
 *  * force (boolean) {optional} - If `force` is true then the property will be set on the child regardless if it already exists or not. If false and the property doesn't exist, nothing will be set.
 * 
 *   Returns:  boolean - True if the property was set, false if not.
 */
phzr.world.set_property = (function phzr$world$set_property(var_args){
var args28504 = [];
var len__21323__auto___28507 = arguments.length;
var i__21324__auto___28508 = (0);
while(true){
if((i__21324__auto___28508 < len__21323__auto___28507)){
args28504.push((arguments[i__21324__auto___28508]));

var G__28509 = (i__21324__auto___28508 + (1));
i__21324__auto___28508 = G__28509;
continue;
} else {
}
break;
}

var G__28506 = args28504.length;
switch (G__28506) {
case 4:
return phzr.world.set_property.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.world.set_property.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.world.set_property.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28504.length)].join('')));

}
});

phzr.world.set_property.cljs$core$IFn$_invoke$arity$4 = (function (world,child,key,value){
return phzr.impl.utils.core.phaser__GT_clj(world.setProperty(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value)));
});

phzr.world.set_property.cljs$core$IFn$_invoke$arity$5 = (function (world,child,key,value,operation){
return phzr.impl.utils.core.phaser__GT_clj(world.setProperty(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(operation)));
});

phzr.world.set_property.cljs$core$IFn$_invoke$arity$6 = (function (world,child,key,value,operation,force){
return phzr.impl.utils.core.phaser__GT_clj(world.setProperty(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(operation),phzr.impl.utils.core.clj__GT_phaser(force)));
});

phzr.world.set_property.cljs$lang$maxFixedArity = 6;

/**
 * Sets the containers Stage reference. This is the Stage that this object, and all of its children, is connected to.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * stage (PIXI.Stage) - the stage that the container will have as its current stage reference
 */
phzr.world.set_stage_reference = (function phzr$world$set_stage_reference(world,stage){
return phzr.impl.utils.core.phaser__GT_clj(world.setStageReference(phzr.impl.utils.core.clj__GT_phaser(stage)));
});
/**
 * Destroyer of worlds.
 */
phzr.world.shutdown = (function phzr$world$shutdown(world){
return phzr.impl.utils.core.phaser__GT_clj(world.shutdown());
});
/**
 * Sort the children in the group according to a particular key and ordering.
 * 
 *   Call this function to sort the group according to a particular key value and order.
 *   For example to depth sort Sprites for Zelda-style game you might call `group.sort('y', Phaser.Group.SORT_ASCENDING)` at the bottom of your `State.update()`.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * key (string) {optional} - The name of the property to sort on. Defaults to the objects z-depth value.
 *  * order (integer) {optional} - Order ascending ({@link Phaser.Group.SORT_ASCENDING SORT_ASCENDING}) or descending ({@link Phaser.Group.SORT_DESCENDING SORT_DESCENDING}).
 */
phzr.world.sort = (function phzr$world$sort(var_args){
var args28511 = [];
var len__21323__auto___28514 = arguments.length;
var i__21324__auto___28515 = (0);
while(true){
if((i__21324__auto___28515 < len__21323__auto___28514)){
args28511.push((arguments[i__21324__auto___28515]));

var G__28516 = (i__21324__auto___28515 + (1));
i__21324__auto___28515 = G__28516;
continue;
} else {
}
break;
}

var G__28513 = args28511.length;
switch (G__28513) {
case 1:
return phzr.world.sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.world.sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.sort.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28511.length)].join('')));

}
});

phzr.world.sort.cljs$core$IFn$_invoke$arity$1 = (function (world){
return phzr.impl.utils.core.phaser__GT_clj(world.sort());
});

phzr.world.sort.cljs$core$IFn$_invoke$arity$2 = (function (world,key){
return phzr.impl.utils.core.phaser__GT_clj(world.sort(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.world.sort.cljs$core$IFn$_invoke$arity$3 = (function (world,key,order){
return phzr.impl.utils.core.phaser__GT_clj(world.sort(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(order)));
});

phzr.world.sort.cljs$lang$maxFixedArity = 3;

/**
 * Subtracts the amount from the given property on all children in this group.
 * 
 *   `Group.subAll('x', 10)` will minus 10 from the child.x value for each child.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * property (string) - The property to decrement, for example 'body.velocity.x' or 'angle'.
 *  * amount (number) - The amount to subtract from the property. If child.x = 50 then subAll('x', 40) would make child.x = 10.
 *  * check-alive (boolean) - If true the property will only be changed if the child is alive.
 *  * check-visible (boolean) - If true the property will only be changed if the child is visible.
 */
phzr.world.sub_all = (function phzr$world$sub_all(world,property,amount,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(world.subAll(phzr.impl.utils.core.clj__GT_phaser(property),phzr.impl.utils.core.clj__GT_phaser(amount),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});
/**
 * Swaps the position of two children in this group.
 * 
 *   Both children must be in this group, a child cannot be swapped with itself, and unparented children cannot be swapped.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child-1 (any) - The first child to swap.
 *  * child-2 (any) - The second child to swap.
 */
phzr.world.swap = (function phzr$world$swap(world,child_1,child_2){
return phzr.impl.utils.core.phaser__GT_clj(world.swap(phzr.impl.utils.core.clj__GT_phaser(child_1),phzr.impl.utils.core.clj__GT_phaser(child_2)));
});
/**
 * Swaps the position of 2 Display Objects within this container.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - -
 *  * child-2 (PIXI.DisplayObject) - -
 */
phzr.world.swap_children = (function phzr$world$swap_children(world,child,child_2){
return phzr.impl.utils.core.phaser__GT_clj(world.swapChildren(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(child_2)));
});
/**
 * Calculates the global position of the display object
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * position (Point) - The world origin to calculate from
 * 
 *   Returns:  Point - A point object representing the position of this object
 */
phzr.world.to_global = (function phzr$world$to_global(world,position){
return phzr.impl.utils.core.phaser__GT_clj(world.toGlobal(phzr.impl.utils.core.clj__GT_phaser(position)));
});
/**
 * Calculates the local position of the display object relative to another point
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * position (Point) - The world origin to calculate from
 *  * from (PIXI.DisplayObject) {optional} - The DisplayObject to calculate the global position from
 * 
 *   Returns:  Point - A point object representing the position of this object
 */
phzr.world.to_local = (function phzr$world$to_local(var_args){
var args28518 = [];
var len__21323__auto___28521 = arguments.length;
var i__21324__auto___28522 = (0);
while(true){
if((i__21324__auto___28522 < len__21323__auto___28521)){
args28518.push((arguments[i__21324__auto___28522]));

var G__28523 = (i__21324__auto___28522 + (1));
i__21324__auto___28522 = G__28523;
continue;
} else {
}
break;
}

var G__28520 = args28518.length;
switch (G__28520) {
case 2:
return phzr.world.to_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.to_local.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28518.length)].join('')));

}
});

phzr.world.to_local.cljs$core$IFn$_invoke$arity$2 = (function (world,position){
return phzr.impl.utils.core.phaser__GT_clj(world.toLocal(phzr.impl.utils.core.clj__GT_phaser(position)));
});

phzr.world.to_local.cljs$core$IFn$_invoke$arity$3 = (function (world,position,from){
return phzr.impl.utils.core.phaser__GT_clj(world.toLocal(phzr.impl.utils.core.clj__GT_phaser(position),phzr.impl.utils.core.clj__GT_phaser(from)));
});

phzr.world.to_local.cljs$lang$maxFixedArity = 3;

/**
 * Generates and updates the cached sprite for this object.
 */
phzr.world.update_cache = (function phzr$world$update_cache(world){
return phzr.impl.utils.core.phaser__GT_clj(world.updateCache());
});
/**
 * This will take the given game object and check if its x/y coordinates fall outside of the world bounds.
 *   If they do it will reposition the object to the opposite side of the world, creating a wrap-around effect.
 *   If sprite has a P2 body then the body (sprite.body) should be passed as first parameter to the function.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * sprite (Phaser.Sprite | Phaser.Image | Phaser.TileSprite | Phaser.Text) - The object you wish to wrap around the world bounds.
 *  * padding (number) {optional} - Extra padding added equally to the sprite.x and y coordinates before checking if within the world bounds. Ignored if useBounds is true.
 *  * use-bounds (boolean) {optional} - If useBounds is false wrap checks the object.x/y coordinates. If true it does a more accurate bounds check, which is more expensive.
 *  * horizontal (boolean) {optional} - If horizontal is false, wrap will not wrap the object.x coordinates horizontally.
 *  * vertical (boolean) {optional} - If vertical is false, wrap will not wrap the object.y coordinates vertically.
 */
phzr.world.wrap = (function phzr$world$wrap(var_args){
var args28525 = [];
var len__21323__auto___28528 = arguments.length;
var i__21324__auto___28529 = (0);
while(true){
if((i__21324__auto___28529 < len__21323__auto___28528)){
args28525.push((arguments[i__21324__auto___28529]));

var G__28530 = (i__21324__auto___28529 + (1));
i__21324__auto___28529 = G__28530;
continue;
} else {
}
break;
}

var G__28527 = args28525.length;
switch (G__28527) {
case 2:
return phzr.world.wrap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.world.wrap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.world.wrap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.world.wrap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.world.wrap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28525.length)].join('')));

}
});

phzr.world.wrap.cljs$core$IFn$_invoke$arity$2 = (function (world,sprite){
return phzr.impl.utils.core.phaser__GT_clj(world.wrap(phzr.impl.utils.core.clj__GT_phaser(sprite)));
});

phzr.world.wrap.cljs$core$IFn$_invoke$arity$3 = (function (world,sprite,padding){
return phzr.impl.utils.core.phaser__GT_clj(world.wrap(phzr.impl.utils.core.clj__GT_phaser(sprite),phzr.impl.utils.core.clj__GT_phaser(padding)));
});

phzr.world.wrap.cljs$core$IFn$_invoke$arity$4 = (function (world,sprite,padding,use_bounds){
return phzr.impl.utils.core.phaser__GT_clj(world.wrap(phzr.impl.utils.core.clj__GT_phaser(sprite),phzr.impl.utils.core.clj__GT_phaser(padding),phzr.impl.utils.core.clj__GT_phaser(use_bounds)));
});

phzr.world.wrap.cljs$core$IFn$_invoke$arity$5 = (function (world,sprite,padding,use_bounds,horizontal){
return phzr.impl.utils.core.phaser__GT_clj(world.wrap(phzr.impl.utils.core.clj__GT_phaser(sprite),phzr.impl.utils.core.clj__GT_phaser(padding),phzr.impl.utils.core.clj__GT_phaser(use_bounds),phzr.impl.utils.core.clj__GT_phaser(horizontal)));
});

phzr.world.wrap.cljs$core$IFn$_invoke$arity$6 = (function (world,sprite,padding,use_bounds,horizontal,vertical){
return phzr.impl.utils.core.phaser__GT_clj(world.wrap(phzr.impl.utils.core.clj__GT_phaser(sprite),phzr.impl.utils.core.clj__GT_phaser(padding),phzr.impl.utils.core.clj__GT_phaser(use_bounds),phzr.impl.utils.core.clj__GT_phaser(horizontal),phzr.impl.utils.core.clj__GT_phaser(vertical)));
});

phzr.world.wrap.cljs$lang$maxFixedArity = 6;

/**
 * Positions the child found at the given index within this group to the given x and y coordinates.
 * 
 *   Parameters:
 *  * world (Phaser.World) - Targeted instance for method
 *  * index (integer) - The index of the child in the group to set the position of.
 *  * x (number) - The new x position of the child.
 *  * y (number) - The new y position of the child.
 */
phzr.world.xy = (function phzr$world$xy(world,index,x,y){
return phzr.impl.utils.core.phaser__GT_clj(world.xy(phzr.impl.utils.core.clj__GT_phaser(index),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});
