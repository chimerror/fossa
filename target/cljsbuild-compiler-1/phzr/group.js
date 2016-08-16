// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.group');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
/**
 * A Group is a container for {@link DisplayObject display objects} including {@link Phaser.Sprite Sprites} and {@link Phaser.Image Images}.
 * 
 *   Groups form the logical tree structure of the display/scene graph where local transformations are applied to children.
 *   For instance, all children are also moved/rotated/scaled when the group is moved/rotated/scaled.
 * 
 *   In addition, Groups provides support for fast pooling and object recycling.
 * 
 *   Groups are also display objects and can be nested as children within other Groups.
 * 
 *   Parameters:
 *  * game (Phaser.Game) - A reference to the currently running game.
 *  * parent (DisplayObject | null) {optional} - The parent Group (or other {@link DisplayObject}) that this group will be added to.
 *  If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 *  * name (string) {optional} - A name for this group. Not used internally but useful for debugging.
 *  * add-to-stage (boolean) {optional} - If true this group will be added directly to the Game.Stage instead of Game.World.
 *  * enable-body (boolean) {optional} - If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 *  * physics-body-type (integer) {optional} - The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
phzr.group.__GT_Group = (function phzr$group$__GT_Group(var_args){
var args27404 = [];
var len__21323__auto___27407 = arguments.length;
var i__21324__auto___27408 = (0);
while(true){
if((i__21324__auto___27408 < len__21323__auto___27407)){
args27404.push((arguments[i__21324__auto___27408]));

var G__27409 = (i__21324__auto___27408 + (1));
i__21324__auto___27408 = G__27409;
continue;
} else {
}
break;
}

var G__27406 = args27404.length;
switch (G__27406) {
case 1:
return phzr.group.__GT_Group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.group.__GT_Group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.__GT_Group.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.__GT_Group.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.__GT_Group.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.group.__GT_Group.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27404.length)].join('')));

}
});

phzr.group.__GT_Group.cljs$core$IFn$_invoke$arity$1 = (function (game){
return (new Phaser.Group(phzr.impl.utils.core.clj__GT_phaser(game)));
});

phzr.group.__GT_Group.cljs$core$IFn$_invoke$arity$2 = (function (game,parent){
return (new Phaser.Group(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(parent)));
});

phzr.group.__GT_Group.cljs$core$IFn$_invoke$arity$3 = (function (game,parent,name){
return (new Phaser.Group(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(name)));
});

phzr.group.__GT_Group.cljs$core$IFn$_invoke$arity$4 = (function (game,parent,name,add_to_stage){
return (new Phaser.Group(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(add_to_stage)));
});

phzr.group.__GT_Group.cljs$core$IFn$_invoke$arity$5 = (function (game,parent,name,add_to_stage,enable_body){
return (new Phaser.Group(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(add_to_stage),phzr.impl.utils.core.clj__GT_phaser(enable_body)));
});

phzr.group.__GT_Group.cljs$core$IFn$_invoke$arity$6 = (function (game,parent,name,add_to_stage,enable_body,physics_body_type){
return (new Phaser.Group(phzr.impl.utils.core.clj__GT_phaser(game),phzr.impl.utils.core.clj__GT_phaser(parent),phzr.impl.utils.core.clj__GT_phaser(name),phzr.impl.utils.core.clj__GT_phaser(add_to_stage),phzr.impl.utils.core.clj__GT_phaser(enable_body),phzr.impl.utils.core.clj__GT_phaser(physics_body_type)));
});

phzr.group.__GT_Group.cljs$lang$maxFixedArity = 6;

phzr.group.const$ = (function phzr$group$const(k){
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(phzr.impl.accessors.group.group_constants,k);
if(cljs.core.truth_(temp__4657__auto__)){
var cn = temp__4657__auto__;
return (Phaser.Group[cn]);
} else {
return null;
}
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
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (DisplayObject) - The display object to add as a child.
 *  * silent (boolean) {optional} - If true the child will not dispatch the `onAddedToGroup` event.
 * 
 *   Returns:  DisplayObject - The child that was added to the group.
 */
phzr.group.add = (function phzr$group$add(var_args){
var args27411 = [];
var len__21323__auto___27414 = arguments.length;
var i__21324__auto___27415 = (0);
while(true){
if((i__21324__auto___27415 < len__21323__auto___27414)){
args27411.push((arguments[i__21324__auto___27415]));

var G__27416 = (i__21324__auto___27415 + (1));
i__21324__auto___27415 = G__27416;
continue;
} else {
}
break;
}

var G__27413 = args27411.length;
switch (G__27413) {
case 2:
return phzr.group.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27411.length)].join('')));

}
});

phzr.group.add.cljs$core$IFn$_invoke$arity$2 = (function (group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.add(phzr.impl.utils.core.clj__GT_phaser(child)));
});

phzr.group.add.cljs$core$IFn$_invoke$arity$3 = (function (group,child,silent){
return phzr.impl.utils.core.phaser__GT_clj(group.add(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.group.add.cljs$lang$maxFixedArity = 3;

/**
 * Adds the amount to the given property on all children in this group.
 * 
 *   `Group.addAll('x', 10)` will add 10 to the child.x value for each child.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * property (string) - The property to increment, for example 'body.velocity.x' or 'angle'.
 *  * amount (number) - The amount to increment the property by. If child.x = 10 then addAll('x', 40) would make child.x = 50.
 *  * check-alive (boolean) - If true the property will only be changed if the child is alive.
 *  * check-visible (boolean) - If true the property will only be changed if the child is visible.
 */
phzr.group.add_all = (function phzr$group$add_all(group,property,amount,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(group.addAll(phzr.impl.utils.core.clj__GT_phaser(property),phzr.impl.utils.core.clj__GT_phaser(amount),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});
/**
 * Adds an existing object to this group.
 * 
 *   The child is added to the group at the location specified by the index value, this allows you to control child ordering.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (DisplayObject) - The display object to add as a child.
 *  * index (integer) {optional} - The index within the group to insert the child to.
 *  * silent (boolean) {optional} - If true the child will not dispatch the `onAddedToGroup` event.
 * 
 *   Returns:  DisplayObject - The child that was added to the group.
 */
phzr.group.add_at = (function phzr$group$add_at(var_args){
var args27418 = [];
var len__21323__auto___27421 = arguments.length;
var i__21324__auto___27422 = (0);
while(true){
if((i__21324__auto___27422 < len__21323__auto___27421)){
args27418.push((arguments[i__21324__auto___27422]));

var G__27423 = (i__21324__auto___27422 + (1));
i__21324__auto___27422 = G__27423;
continue;
} else {
}
break;
}

var G__27420 = args27418.length;
switch (G__27420) {
case 2:
return phzr.group.add_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.add_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.add_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27418.length)].join('')));

}
});

phzr.group.add_at.cljs$core$IFn$_invoke$arity$2 = (function (group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.addAt(phzr.impl.utils.core.clj__GT_phaser(child)));
});

phzr.group.add_at.cljs$core$IFn$_invoke$arity$3 = (function (group,child,index){
return phzr.impl.utils.core.phaser__GT_clj(group.addAt(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(index)));
});

phzr.group.add_at.cljs$core$IFn$_invoke$arity$4 = (function (group,child,index,silent){
return phzr.impl.utils.core.phaser__GT_clj(group.addAt(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(index),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.group.add_at.cljs$lang$maxFixedArity = 4;

/**
 * Adds a child to the container.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The DisplayObject to add to the container
 * 
 *   Returns:  PIXI.DisplayObject - The child that was added.
 */
phzr.group.add_child = (function phzr$group$add_child(group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.addChild(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The child to add
 *  * index (Number) - The index to place the child in
 * 
 *   Returns:  PIXI.DisplayObject - The child that was added.
 */
phzr.group.add_child_at = (function phzr$group$add_child_at(group,child,index){
return phzr.impl.utils.core.phaser__GT_clj(group.addChildAt(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(index)));
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
 *  * group (Phaser.Group) - Targeted instance for method
 *  * children (Array.<DisplayObject> | Phaser.Group) - An array of display objects or a Phaser.Group. If a Group is given then *all* children will be moved from it.
 *  * silent (boolean) {optional} - If true the children will not dispatch the `onAddedToGroup` event.
 * 
 *   Returns:  [Array.<DisplayObject> | Phaser.Group] - The array of children or Group of children that were added to this Group.
 */
phzr.group.add_multiple = (function phzr$group$add_multiple(var_args){
var args27425 = [];
var len__21323__auto___27428 = arguments.length;
var i__21324__auto___27429 = (0);
while(true){
if((i__21324__auto___27429 < len__21323__auto___27428)){
args27425.push((arguments[i__21324__auto___27429]));

var G__27430 = (i__21324__auto___27429 + (1));
i__21324__auto___27429 = G__27430;
continue;
} else {
}
break;
}

var G__27427 = args27425.length;
switch (G__27427) {
case 2:
return phzr.group.add_multiple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.add_multiple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27425.length)].join('')));

}
});

phzr.group.add_multiple.cljs$core$IFn$_invoke$arity$2 = (function (group,children){
return phzr.impl.utils.core.phaser__GT_clj(group.addMultiple(phzr.impl.utils.core.clj__GT_phaser(children)));
});

phzr.group.add_multiple.cljs$core$IFn$_invoke$arity$3 = (function (group,children,silent){
return phzr.impl.utils.core.phaser__GT_clj(group.addMultiple(phzr.impl.utils.core.clj__GT_phaser(children),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.group.add_multiple.cljs$lang$maxFixedArity = 3;

/**
 * Adds a child of this Group into the hash array.
 *   This call will return false if the child is not a child of this Group, or is already in the hash.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (DisplayObject) - The display object to add to this Groups hash. Must be a member of this Group already and not present in the hash.
 * 
 *   Returns:  boolean - True if the child was successfully added to the hash, otherwise false.
 */
phzr.group.add_to_hash = (function phzr$group$add_to_hash(group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.addToHash(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Brings the given child to the top of this group so it renders above all other children.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (any) - The child to bring to the top of this group.
 * 
 *   Returns:  any - The child that was moved.
 */
phzr.group.bring_to_top = (function phzr$group$bring_to_top(group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.bringToTop(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Calls a function, specified by name, on all on children.
 * 
 *   The function is called for all children regardless if they are dead or alive (see callAllExists for different options).
 *   After the method parameter and context you can add as many extra parameters as you like, which will all be passed to the child.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * method (string) - Name of the function on the child to call. Deep property lookup is supported.
 *  * context (string) {optional} - A string containing the context under which the method will be executed. Set to null to default to the child.
 *  * args (any) - Additional parameters that will be passed to the method.
 */
phzr.group.call_all = (function phzr$group$call_all(var_args){
var args27432 = [];
var len__21323__auto___27435 = arguments.length;
var i__21324__auto___27436 = (0);
while(true){
if((i__21324__auto___27436 < len__21323__auto___27435)){
args27432.push((arguments[i__21324__auto___27436]));

var G__27437 = (i__21324__auto___27436 + (1));
i__21324__auto___27436 = G__27437;
continue;
} else {
}
break;
}

var G__27434 = args27432.length;
switch (G__27434) {
case 3:
return phzr.group.call_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.call_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27432.length)].join('')));

}
});

phzr.group.call_all.cljs$core$IFn$_invoke$arity$3 = (function (group,method,args){
return phzr.impl.utils.core.phaser__GT_clj(group.callAll(phzr.impl.utils.core.clj__GT_phaser(method),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.group.call_all.cljs$core$IFn$_invoke$arity$4 = (function (group,method,args,context){
return phzr.impl.utils.core.phaser__GT_clj(group.callAll(phzr.impl.utils.core.clj__GT_phaser(method),phzr.impl.utils.core.clj__GT_phaser(args),phzr.impl.utils.core.clj__GT_phaser(context)));
});

phzr.group.call_all.cljs$lang$maxFixedArity = 4;

/**
 * Calls a function, specified by name, on all children in the group who exist (or do not exist).
 * 
 *   After the existsValue parameter you can add as many parameters as you like, which will all be passed to the child callback.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * callback (string) - Name of the function on the children to call.
 *  * exists-value (boolean) - Only children with exists=existsValue will be called.
 *  * parameter (any) - Additional parameters that will be passed to the callback.
 */
phzr.group.call_all_exists = (function phzr$group$call_all_exists(group,callback,exists_value,parameter){
return phzr.impl.utils.core.phaser__GT_clj(group.callAllExists(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(exists_value),phzr.impl.utils.core.clj__GT_phaser(parameter)));
});
/**
 * Quickly check that the same property across all children of this group is equal to the given value.
 * 
 *   This call doesn't descend down children, so if you have a Group inside of this group, the property will be checked on the group but not its children.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * key (string) - The property, as a string, to be set. For example: 'body.velocity.x'
 *  * value (any) - The value that will be checked.
 *  * check-alive (boolean) {optional} - If set then only children with alive=true will be checked. This includes any Groups that are children.
 *  * check-visible (boolean) {optional} - If set then only children with visible=true will be checked. This includes any Groups that are children.
 *  * force (boolean) {optional} - If `force` is true then the property will be checked on the child regardless if it already exists or not. If true and the property doesn't exist, false will be returned.
 */
phzr.group.check_all = (function phzr$group$check_all(var_args){
var args27439 = [];
var len__21323__auto___27442 = arguments.length;
var i__21324__auto___27443 = (0);
while(true){
if((i__21324__auto___27443 < len__21323__auto___27442)){
args27439.push((arguments[i__21324__auto___27443]));

var G__27444 = (i__21324__auto___27443 + (1));
i__21324__auto___27443 = G__27444;
continue;
} else {
}
break;
}

var G__27441 = args27439.length;
switch (G__27441) {
case 3:
return phzr.group.check_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.check_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.check_all.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.group.check_all.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27439.length)].join('')));

}
});

phzr.group.check_all.cljs$core$IFn$_invoke$arity$3 = (function (group,key,value){
return phzr.impl.utils.core.phaser__GT_clj(group.checkAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value)));
});

phzr.group.check_all.cljs$core$IFn$_invoke$arity$4 = (function (group,key,value,check_alive){
return phzr.impl.utils.core.phaser__GT_clj(group.checkAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive)));
});

phzr.group.check_all.cljs$core$IFn$_invoke$arity$5 = (function (group,key,value,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(group.checkAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});

phzr.group.check_all.cljs$core$IFn$_invoke$arity$6 = (function (group,key,value,check_alive,check_visible,force){
return phzr.impl.utils.core.phaser__GT_clj(group.checkAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(force)));
});

phzr.group.check_all.cljs$lang$maxFixedArity = 6;

/**
 * Checks a property for the given value on the child.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (any) - The child to check the property value on.
 *  * key (array) - An array of strings that make up the property that will be set.
 *  * value (any) - The value that will be checked.
 *  * force (boolean) {optional} - If `force` is true then the property will be checked on the child regardless if it already exists or not. If true and the property doesn't exist, false will be returned.
 * 
 *   Returns:  boolean - True if the property was was equal to value, false if not.
 */
phzr.group.check_property = (function phzr$group$check_property(var_args){
var args27446 = [];
var len__21323__auto___27449 = arguments.length;
var i__21324__auto___27450 = (0);
while(true){
if((i__21324__auto___27450 < len__21323__auto___27449)){
args27446.push((arguments[i__21324__auto___27450]));

var G__27451 = (i__21324__auto___27450 + (1));
i__21324__auto___27450 = G__27451;
continue;
} else {
}
break;
}

var G__27448 = args27446.length;
switch (G__27448) {
case 4:
return phzr.group.check_property.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.check_property.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27446.length)].join('')));

}
});

phzr.group.check_property.cljs$core$IFn$_invoke$arity$4 = (function (group,child,key,value){
return phzr.impl.utils.core.phaser__GT_clj(group.checkProperty(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value)));
});

phzr.group.check_property.cljs$core$IFn$_invoke$arity$5 = (function (group,child,key,value,force){
return phzr.impl.utils.core.phaser__GT_clj(group.checkProperty(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(force)));
});

phzr.group.check_property.cljs$lang$maxFixedArity = 5;

/**
 * Get the number of dead children in this group.
 * 
 *   Returns:  integer - The number of children flagged as dead.
 */
phzr.group.count_dead = (function phzr$group$count_dead(group){
return phzr.impl.utils.core.phaser__GT_clj(group.countDead());
});
/**
 * Get the number of living children in this group.
 * 
 *   Returns:  integer - The number of children flagged as alive.
 */
phzr.group.count_living = (function phzr$group$count_living(group){
return phzr.impl.utils.core.phaser__GT_clj(group.countLiving());
});
/**
 * Creates a new Phaser.Sprite object and adds it to the top of this group.
 * 
 *   Use {@link Phaser.Group#classType classType} to change the type of object creaded.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * x (number) - The x coordinate to display the newly created Sprite at. The value is in relation to the group.x point.
 *  * y (number) - The y coordinate to display the newly created Sprite at. The value is in relation to the group.y point.
 *  * key (string) - The Game.cache key of the image that this Sprite will use.
 *  * frame (integer | string) {optional} - If the Sprite image contains multiple frames you can specify which one to use here.
 *  * exists (boolean) {optional} - The default exists state of the Sprite.
 * 
 *   Returns:  DisplayObject - The child that was created: will be a {@link Phaser.Sprite} unless {@link #classType} has been changed.
 */
phzr.group.create = (function phzr$group$create(var_args){
var args27453 = [];
var len__21323__auto___27456 = arguments.length;
var i__21324__auto___27457 = (0);
while(true){
if((i__21324__auto___27457 < len__21323__auto___27456)){
args27453.push((arguments[i__21324__auto___27457]));

var G__27458 = (i__21324__auto___27457 + (1));
i__21324__auto___27457 = G__27458;
continue;
} else {
}
break;
}

var G__27455 = args27453.length;
switch (G__27455) {
case 4:
return phzr.group.create.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.create.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.group.create.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27453.length)].join('')));

}
});

phzr.group.create.cljs$core$IFn$_invoke$arity$4 = (function (group,x,y,key){
return phzr.impl.utils.core.phaser__GT_clj(group.create(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.group.create.cljs$core$IFn$_invoke$arity$5 = (function (group,x,y,key,frame){
return phzr.impl.utils.core.phaser__GT_clj(group.create(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame)));
});

phzr.group.create.cljs$core$IFn$_invoke$arity$6 = (function (group,x,y,key,frame,exists){
return phzr.impl.utils.core.phaser__GT_clj(group.create(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame),phzr.impl.utils.core.clj__GT_phaser(exists)));
});

phzr.group.create.cljs$lang$maxFixedArity = 6;

/**
 * Creates multiple Phaser.Sprite objects and adds them to the top of this group.
 * 
 *   Useful if you need to quickly generate a pool of identical sprites, such as bullets.
 * 
 *   By default the sprites will be set to not exist and will be positioned at 0, 0 (relative to the group.x/y).
 *   Use {@link Phaser.Group#classType classType} to change the type of object created.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * quantity (integer) - The number of Sprites to create.
 *  * key (string) - The Game.cache key of the image that this Sprite will use.
 *  * frame (integer | string) {optional} - If the Sprite image contains multiple frames you can specify which one to use here.
 *  * exists (boolean) {optional} - The default exists state of the Sprite.
 */
phzr.group.create_multiple = (function phzr$group$create_multiple(var_args){
var args27460 = [];
var len__21323__auto___27463 = arguments.length;
var i__21324__auto___27464 = (0);
while(true){
if((i__21324__auto___27464 < len__21323__auto___27463)){
args27460.push((arguments[i__21324__auto___27464]));

var G__27465 = (i__21324__auto___27464 + (1));
i__21324__auto___27464 = G__27465;
continue;
} else {
}
break;
}

var G__27462 = args27460.length;
switch (G__27462) {
case 3:
return phzr.group.create_multiple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.create_multiple.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.create_multiple.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27460.length)].join('')));

}
});

phzr.group.create_multiple.cljs$core$IFn$_invoke$arity$3 = (function (group,quantity,key){
return phzr.impl.utils.core.phaser__GT_clj(group.createMultiple(phzr.impl.utils.core.clj__GT_phaser(quantity),phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.group.create_multiple.cljs$core$IFn$_invoke$arity$4 = (function (group,quantity,key,frame){
return phzr.impl.utils.core.phaser__GT_clj(group.createMultiple(phzr.impl.utils.core.clj__GT_phaser(quantity),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame)));
});

phzr.group.create_multiple.cljs$core$IFn$_invoke$arity$5 = (function (group,quantity,key,frame,exists){
return phzr.impl.utils.core.phaser__GT_clj(group.createMultiple(phzr.impl.utils.core.clj__GT_phaser(quantity),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(frame),phzr.impl.utils.core.clj__GT_phaser(exists)));
});

phzr.group.create_multiple.cljs$lang$maxFixedArity = 5;

/**
 * Sort the children in the group according to custom sort function.
 * 
 *   The `sortHandler` is provided the two parameters: the two children involved in the comparison (a and b).
 *   It should return -1 if `a > b`, 1 if `a < b` or 0 if `a === b`.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * sort-handler (function) - The custom sort function.
 *  * context (object) {optional} - The context in which the sortHandler is called.
 */
phzr.group.custom_sort = (function phzr$group$custom_sort(var_args){
var args27467 = [];
var len__21323__auto___27470 = arguments.length;
var i__21324__auto___27471 = (0);
while(true){
if((i__21324__auto___27471 < len__21323__auto___27470)){
args27467.push((arguments[i__21324__auto___27471]));

var G__27472 = (i__21324__auto___27471 + (1));
i__21324__auto___27471 = G__27472;
continue;
} else {
}
break;
}

var G__27469 = args27467.length;
switch (G__27469) {
case 2:
return phzr.group.custom_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.custom_sort.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27467.length)].join('')));

}
});

phzr.group.custom_sort.cljs$core$IFn$_invoke$arity$2 = (function (group,sort_handler){
return phzr.impl.utils.core.phaser__GT_clj(group.customSort(phzr.impl.utils.core.clj__GT_phaser(sort_handler)));
});

phzr.group.custom_sort.cljs$core$IFn$_invoke$arity$3 = (function (group,sort_handler,context){
return phzr.impl.utils.core.phaser__GT_clj(group.customSort(phzr.impl.utils.core.clj__GT_phaser(sort_handler),phzr.impl.utils.core.clj__GT_phaser(context)));
});

phzr.group.custom_sort.cljs$lang$maxFixedArity = 3;

/**
 * Destroys this group.
 * 
 *   Removes all children, then removes this group from its parent and nulls references.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * destroy-children (boolean) {optional} - If true `destroy` will be invoked on each removed child.
 *  * soft (boolean) {optional} - A 'soft destroy' (set to true) doesn't remove this group from its parent or null the game reference. Set to false and it does.
 */
phzr.group.destroy = (function phzr$group$destroy(var_args){
var args27474 = [];
var len__21323__auto___27477 = arguments.length;
var i__21324__auto___27478 = (0);
while(true){
if((i__21324__auto___27478 < len__21323__auto___27477)){
args27474.push((arguments[i__21324__auto___27478]));

var G__27479 = (i__21324__auto___27478 + (1));
i__21324__auto___27478 = G__27479;
continue;
} else {
}
break;
}

var G__27476 = args27474.length;
switch (G__27476) {
case 1:
return phzr.group.destroy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.group.destroy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.destroy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27474.length)].join('')));

}
});

phzr.group.destroy.cljs$core$IFn$_invoke$arity$1 = (function (group){
return phzr.impl.utils.core.phaser__GT_clj(group.destroy());
});

phzr.group.destroy.cljs$core$IFn$_invoke$arity$2 = (function (group,destroy_children){
return phzr.impl.utils.core.phaser__GT_clj(group.destroy(phzr.impl.utils.core.clj__GT_phaser(destroy_children)));
});

phzr.group.destroy.cljs$core$IFn$_invoke$arity$3 = (function (group,destroy_children,soft){
return phzr.impl.utils.core.phaser__GT_clj(group.destroy(phzr.impl.utils.core.clj__GT_phaser(destroy_children),phzr.impl.utils.core.clj__GT_phaser(soft)));
});

phzr.group.destroy.cljs$lang$maxFixedArity = 3;

/**
 * Divides the given property by the amount on all children in this group.
 * 
 *   `Group.divideAll('x', 2)` will half the child.x value for each child.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * property (string) - The property to divide, for example 'body.velocity.x' or 'angle'.
 *  * amount (number) - The amount to divide the property by. If child.x = 100 then divideAll('x', 2) would make child.x = 50.
 *  * check-alive (boolean) - If true the property will only be changed if the child is alive.
 *  * check-visible (boolean) - If true the property will only be changed if the child is visible.
 */
phzr.group.divide_all = (function phzr$group$divide_all(group,property,amount,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(group.divideAll(phzr.impl.utils.core.clj__GT_phaser(property),phzr.impl.utils.core.clj__GT_phaser(amount),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
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
 *  * group (Phaser.Group) - Targeted instance for method
 *  * predicate (function) - The function that each child will be evaluated against. Each child of the group will be passed to it as its first parameter, the index as the second, and the entire child array as the third
 *  * check-exists (boolean) {optional} - If true, only existing can be selected; otherwise all children can be selected and will be passed to the predicate.
 * 
 *   Returns:  Phaser.ArraySet - Returns an array list containing all the children that the predicate returned true for
 */
phzr.group.filter = (function phzr$group$filter(var_args){
var args27481 = [];
var len__21323__auto___27484 = arguments.length;
var i__21324__auto___27485 = (0);
while(true){
if((i__21324__auto___27485 < len__21323__auto___27484)){
args27481.push((arguments[i__21324__auto___27485]));

var G__27486 = (i__21324__auto___27485 + (1));
i__21324__auto___27485 = G__27486;
continue;
} else {
}
break;
}

var G__27483 = args27481.length;
switch (G__27483) {
case 2:
return phzr.group.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27481.length)].join('')));

}
});

phzr.group.filter.cljs$core$IFn$_invoke$arity$2 = (function (group,predicate){
return phzr.impl.utils.core.phaser__GT_clj(group.filter(phzr.impl.utils.core.clj__GT_phaser(predicate)));
});

phzr.group.filter.cljs$core$IFn$_invoke$arity$3 = (function (group,predicate,check_exists){
return phzr.impl.utils.core.phaser__GT_clj(group.filter(phzr.impl.utils.core.clj__GT_phaser(predicate),phzr.impl.utils.core.clj__GT_phaser(check_exists)));
});

phzr.group.filter.cljs$lang$maxFixedArity = 3;

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
 *  * group (Phaser.Group) - Targeted instance for method
 *  * callback (function) - The function that will be called for each applicable child. The child will be passed as the first argument.
 *  * callback-context (object) - The context in which the function should be called (usually 'this').
 *  * check-exists (boolean) {optional} - If set only children matching for which `exists` is true will be passed to the callback, otherwise all children will be passed.
 *  * args (any) {optional} - Additional arguments to pass to the callback function, after the child item.
 */
phzr.group.for_each = (function phzr$group$for_each(var_args){
var args27488 = [];
var len__21323__auto___27491 = arguments.length;
var i__21324__auto___27492 = (0);
while(true){
if((i__21324__auto___27492 < len__21323__auto___27491)){
args27488.push((arguments[i__21324__auto___27492]));

var G__27493 = (i__21324__auto___27492 + (1));
i__21324__auto___27492 = G__27493;
continue;
} else {
}
break;
}

var G__27490 = args27488.length;
switch (G__27490) {
case 3:
return phzr.group.for_each.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.for_each.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.for_each.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27488.length)].join('')));

}
});

phzr.group.for_each.cljs$core$IFn$_invoke$arity$3 = (function (group,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(group.forEach(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.group.for_each.cljs$core$IFn$_invoke$arity$4 = (function (group,callback,callback_context,check_exists){
return phzr.impl.utils.core.phaser__GT_clj(group.forEach(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(check_exists)));
});

phzr.group.for_each.cljs$core$IFn$_invoke$arity$5 = (function (group,callback,callback_context,check_exists,args){
return phzr.impl.utils.core.phaser__GT_clj(group.forEach(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(check_exists),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.group.for_each.cljs$lang$maxFixedArity = 5;

/**
 * Call a function on each alive child in this group.
 * 
 *   See {@link Phaser.Group#forEach forEach} for details.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * callback (function) - The function that will be called for each applicable child. The child will be passed as the first argument.
 *  * callback-context (object) - The context in which the function should be called (usually 'this').
 *  * args (any) {optional} - Additional arguments to pass to the callback function, after the child item.
 */
phzr.group.for_each_alive = (function phzr$group$for_each_alive(var_args){
var args27495 = [];
var len__21323__auto___27498 = arguments.length;
var i__21324__auto___27499 = (0);
while(true){
if((i__21324__auto___27499 < len__21323__auto___27498)){
args27495.push((arguments[i__21324__auto___27499]));

var G__27500 = (i__21324__auto___27499 + (1));
i__21324__auto___27499 = G__27500;
continue;
} else {
}
break;
}

var G__27497 = args27495.length;
switch (G__27497) {
case 3:
return phzr.group.for_each_alive.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.for_each_alive.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27495.length)].join('')));

}
});

phzr.group.for_each_alive.cljs$core$IFn$_invoke$arity$3 = (function (group,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(group.forEachAlive(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.group.for_each_alive.cljs$core$IFn$_invoke$arity$4 = (function (group,callback,callback_context,args){
return phzr.impl.utils.core.phaser__GT_clj(group.forEachAlive(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.group.for_each_alive.cljs$lang$maxFixedArity = 4;

/**
 * Call a function on each dead child in this group.
 * 
 *   See {@link Phaser.Group#forEach forEach} for details.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * callback (function) - The function that will be called for each applicable child. The child will be passed as the first argument.
 *  * callback-context (object) - The context in which the function should be called (usually 'this').
 *  * args (any) {optional} - Additional arguments to pass to the callback function, after the child item.
 */
phzr.group.for_each_dead = (function phzr$group$for_each_dead(var_args){
var args27502 = [];
var len__21323__auto___27505 = arguments.length;
var i__21324__auto___27506 = (0);
while(true){
if((i__21324__auto___27506 < len__21323__auto___27505)){
args27502.push((arguments[i__21324__auto___27506]));

var G__27507 = (i__21324__auto___27506 + (1));
i__21324__auto___27506 = G__27507;
continue;
} else {
}
break;
}

var G__27504 = args27502.length;
switch (G__27504) {
case 3:
return phzr.group.for_each_dead.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.for_each_dead.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27502.length)].join('')));

}
});

phzr.group.for_each_dead.cljs$core$IFn$_invoke$arity$3 = (function (group,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(group.forEachDead(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.group.for_each_dead.cljs$core$IFn$_invoke$arity$4 = (function (group,callback,callback_context,args){
return phzr.impl.utils.core.phaser__GT_clj(group.forEachDead(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.group.for_each_dead.cljs$lang$maxFixedArity = 4;

/**
 * Call a function on each existing child in this group.
 * 
 *   See {@link Phaser.Group#forEach forEach} for details.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * callback (function) - The function that will be called for each applicable child. The child will be passed as the first argument.
 *  * callback-context (object) - The context in which the function should be called (usually 'this').
 *  * args (any) {optional} - Additional arguments to pass to the callback function, after the child item.
 */
phzr.group.for_each_exists = (function phzr$group$for_each_exists(var_args){
var args27509 = [];
var len__21323__auto___27512 = arguments.length;
var i__21324__auto___27513 = (0);
while(true){
if((i__21324__auto___27513 < len__21323__auto___27512)){
args27509.push((arguments[i__21324__auto___27513]));

var G__27514 = (i__21324__auto___27513 + (1));
i__21324__auto___27513 = G__27514;
continue;
} else {
}
break;
}

var G__27511 = args27509.length;
switch (G__27511) {
case 3:
return phzr.group.for_each_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.for_each_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27509.length)].join('')));

}
});

phzr.group.for_each_exists.cljs$core$IFn$_invoke$arity$3 = (function (group,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(group.forEachExists(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.group.for_each_exists.cljs$core$IFn$_invoke$arity$4 = (function (group,callback,callback_context,args){
return phzr.impl.utils.core.phaser__GT_clj(group.forEachExists(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.group.for_each_exists.cljs$lang$maxFixedArity = 4;

/**
 * Useful function that returns a texture of the displayObject object that can then be used to create sprites
 *   This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * resolution (Number) - The resolution of the texture being generated
 *  * scale-mode (Number) - See PIXI.scaleModes for possible values
 *  * renderer (PIXI.CanvasRenderer | PIXI.WebGLRenderer) - The renderer used to generate the texture.
 * 
 *   Returns:  PIXI.Texture - a texture of the graphics object
 */
phzr.group.generate_texture = (function phzr$group$generate_texture(group,resolution,scale_mode,renderer){
return phzr.impl.utils.core.phaser__GT_clj(group.generateTexture(phzr.impl.utils.core.clj__GT_phaser(resolution),phzr.impl.utils.core.clj__GT_phaser(scale_mode),phzr.impl.utils.core.clj__GT_phaser(renderer)));
});
/**
 * Returns the child found at the given index within this group.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * index (integer) - The index to return the child from.
 * 
 *   Returns:  [DisplayObject | integer] - The child that was found at the given index, or -1 for an invalid index.
 */
phzr.group.get_at = (function phzr$group$get_at(group,index){
return phzr.impl.utils.core.phaser__GT_clj(group.getAt(phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Returns the child at the bottom of this group.
 * 
 *   The bottom child the child being displayed (rendered) below every other child.
 * 
 *   Returns:  any - The child at the bottom of the Group.
 */
phzr.group.get_bottom = (function phzr$group$get_bottom(group){
return phzr.impl.utils.core.phaser__GT_clj(group.getBottom());
});
/**
 * Retrieves the bounds of the displayObjectContainer as a rectangle. The bounds calculation takes all visible children into consideration.
 * 
 *   Returns:  Rectangle - The rectangular bounding area
 */
phzr.group.get_bounds = (function phzr$group$get_bounds(group){
return phzr.impl.utils.core.phaser__GT_clj(group.getBounds());
});
/**
 * Returns the child at the specified index
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * index (Number) - The index to get the child from
 * 
 *   Returns:  PIXI.DisplayObject - The child at the given index, if any.
 */
phzr.group.get_child_at = (function phzr$group$get_child_at(group,index){
return phzr.impl.utils.core.phaser__GT_clj(group.getChildAt(phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Returns the index position of a child DisplayObject instance
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The DisplayObject instance to identify
 * 
 *   Returns:  Number - The index position of the child display object to identify
 */
phzr.group.get_child_index = (function phzr$group$get_child_index(group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.getChildIndex(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Get the first child that is alive (`child.alive === true`).
 * 
 *   This is handy for checking if everything has been wiped out, or choosing a squad leader, etc.
 * 
 *   Returns:  any - The first alive child, or null if none found.
 */
phzr.group.get_first_alive = (function phzr$group$get_first_alive(group){
return phzr.impl.utils.core.phaser__GT_clj(group.getFirstAlive());
});
/**
 * Get the first child that is dead (`child.alive === false`).
 * 
 *   This is handy for checking if everything has been wiped out, or choosing a squad leader, etc.
 * 
 *   Returns:  any - The first dead child, or null if none found.
 */
phzr.group.get_first_dead = (function phzr$group$get_first_dead(group){
return phzr.impl.utils.core.phaser__GT_clj(group.getFirstDead());
});
/**
 * Get the first display object that exists, or doesn't exist.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * exists (boolean) {optional} - If true, find the first existing child; otherwise find the first non-existing child.
 * 
 *   Returns:  any - The first child, or null if none found.
 */
phzr.group.get_first_exists = (function phzr$group$get_first_exists(var_args){
var args27516 = [];
var len__21323__auto___27519 = arguments.length;
var i__21324__auto___27520 = (0);
while(true){
if((i__21324__auto___27520 < len__21323__auto___27519)){
args27516.push((arguments[i__21324__auto___27520]));

var G__27521 = (i__21324__auto___27520 + (1));
i__21324__auto___27520 = G__27521;
continue;
} else {
}
break;
}

var G__27518 = args27516.length;
switch (G__27518) {
case 1:
return phzr.group.get_first_exists.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.group.get_first_exists.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27516.length)].join('')));

}
});

phzr.group.get_first_exists.cljs$core$IFn$_invoke$arity$1 = (function (group){
return phzr.impl.utils.core.phaser__GT_clj(group.getFirstExists());
});

phzr.group.get_first_exists.cljs$core$IFn$_invoke$arity$2 = (function (group,exists){
return phzr.impl.utils.core.phaser__GT_clj(group.getFirstExists(phzr.impl.utils.core.clj__GT_phaser(exists)));
});

phzr.group.get_first_exists.cljs$lang$maxFixedArity = 2;

/**
 * Get the index position of the given child in this group, which should match the child's `z` property.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (any) - The child to get the index for.
 * 
 *   Returns:  integer - The index of the child or -1 if it's not a member of this group.
 */
phzr.group.get_index = (function phzr$group$get_index(group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.getIndex(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Retrieves the non-global local bounds of the displayObjectContainer as a rectangle. The calculation takes all visible children into consideration.
 * 
 *   Returns:  Rectangle - The rectangular bounding area
 */
phzr.group.get_local_bounds = (function phzr$group$get_local_bounds(group){
return phzr.impl.utils.core.phaser__GT_clj(group.getLocalBounds());
});
/**
 * Returns a random child from the group.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * start-index (integer) {optional} - Offset from the front of the front of the group (lowest child).
 *  * length (integer) {optional} - Restriction on the number of values you want to randomly select from.
 * 
 *   Returns:  any - A random child of this Group.
 */
phzr.group.get_random = (function phzr$group$get_random(var_args){
var args27523 = [];
var len__21323__auto___27526 = arguments.length;
var i__21324__auto___27527 = (0);
while(true){
if((i__21324__auto___27527 < len__21323__auto___27526)){
args27523.push((arguments[i__21324__auto___27527]));

var G__27528 = (i__21324__auto___27527 + (1));
i__21324__auto___27527 = G__27528;
continue;
} else {
}
break;
}

var G__27525 = args27523.length;
switch (G__27525) {
case 1:
return phzr.group.get_random.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.group.get_random.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.get_random.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27523.length)].join('')));

}
});

phzr.group.get_random.cljs$core$IFn$_invoke$arity$1 = (function (group){
return phzr.impl.utils.core.phaser__GT_clj(group.getRandom());
});

phzr.group.get_random.cljs$core$IFn$_invoke$arity$2 = (function (group,start_index){
return phzr.impl.utils.core.phaser__GT_clj(group.getRandom(phzr.impl.utils.core.clj__GT_phaser(start_index)));
});

phzr.group.get_random.cljs$core$IFn$_invoke$arity$3 = (function (group,start_index,length){
return phzr.impl.utils.core.phaser__GT_clj(group.getRandom(phzr.impl.utils.core.clj__GT_phaser(start_index),phzr.impl.utils.core.clj__GT_phaser(length)));
});

phzr.group.get_random.cljs$lang$maxFixedArity = 3;

/**
 * Return the child at the top of this group.
 * 
 *   The top child is the child displayed (rendered) above every other child.
 * 
 *   Returns:  any - The child at the top of the Group.
 */
phzr.group.get_top = (function phzr$group$get_top(group){
return phzr.impl.utils.core.phaser__GT_clj(group.getTop());
});
/**
 * Checks if the child has the given property.
 * 
 *   Will scan up to 4 levels deep only.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (any) - The child to check for the existance of the property on.
 *  * key (Array.<string>) - An array of strings that make up the property.
 * 
 *   Returns:  boolean - True if the child has the property, otherwise false.
 */
phzr.group.has_property = (function phzr$group$has_property(group,child,key){
return phzr.impl.utils.core.phaser__GT_clj(group.hasProperty(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key)));
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
 *  * group (Phaser.Group) - Targeted instance for method
 *  * key (string) - The child property to check, i.e. 'exists', 'alive', 'health'
 *  * value (any) - A child matches if `child[key] === value` is true.
 *  * return-type (integer) - How to iterate the children and what to return.
 *  * callback (function) {optional} - Optional function that will be called on each matching child. The matched child is supplied as the first argument.
 *  * callback-context (object) {optional} - The context in which the function should be called (usually 'this').
 *  * args (Array.<any>) {optional} - The arguments supplied to to the callback; the first array index (argument) will be replaced with the matched child.
 * 
 *   Returns:  any - Returns either an integer (for RETURN_TOTAL), the first matched child (for RETURN_CHILD), or null.
 */
phzr.group.iterate = (function phzr$group$iterate(var_args){
var args27530 = [];
var len__21323__auto___27533 = arguments.length;
var i__21324__auto___27534 = (0);
while(true){
if((i__21324__auto___27534 < len__21323__auto___27533)){
args27530.push((arguments[i__21324__auto___27534]));

var G__27535 = (i__21324__auto___27534 + (1));
i__21324__auto___27534 = G__27535;
continue;
} else {
}
break;
}

var G__27532 = args27530.length;
switch (G__27532) {
case 4:
return phzr.group.iterate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.iterate.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.group.iterate.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.group.iterate.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27530.length)].join('')));

}
});

phzr.group.iterate.cljs$core$IFn$_invoke$arity$4 = (function (group,key,value,return_type){
return phzr.impl.utils.core.phaser__GT_clj(group.iterate(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(return_type)));
});

phzr.group.iterate.cljs$core$IFn$_invoke$arity$5 = (function (group,key,value,return_type,callback){
return phzr.impl.utils.core.phaser__GT_clj(group.iterate(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(return_type),phzr.impl.utils.core.clj__GT_phaser(callback)));
});

phzr.group.iterate.cljs$core$IFn$_invoke$arity$6 = (function (group,key,value,return_type,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(group.iterate(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(return_type),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.group.iterate.cljs$core$IFn$_invoke$arity$7 = (function (group,key,value,return_type,callback,callback_context,args){
return phzr.impl.utils.core.phaser__GT_clj(group.iterate(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(return_type),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.group.iterate.cljs$lang$maxFixedArity = 7;

/**
 * Moves all children from this Group to the Group given.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * group (Phaser.Group) - The new Group to which the children will be moved to.
 *  * silent (boolean) {optional} - If true the children will not dispatch the `onAddedToGroup` event for the new Group.
 * 
 *   Returns:  Phaser.Group - The Group to which all the children were moved.
 */
phzr.group.move_all = (function phzr$group$move_all(var_args){
var args27537 = [];
var len__21323__auto___27540 = arguments.length;
var i__21324__auto___27541 = (0);
while(true){
if((i__21324__auto___27541 < len__21323__auto___27540)){
args27537.push((arguments[i__21324__auto___27541]));

var G__27542 = (i__21324__auto___27541 + (1));
i__21324__auto___27541 = G__27542;
continue;
} else {
}
break;
}

var G__27539 = args27537.length;
switch (G__27539) {
case 2:
return phzr.group.move_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.move_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27537.length)].join('')));

}
});

phzr.group.move_all.cljs$core$IFn$_invoke$arity$2 = (function (group,group__$1){
return phzr.impl.utils.core.phaser__GT_clj(group__$1.moveAll(phzr.impl.utils.core.clj__GT_phaser(group__$1)));
});

phzr.group.move_all.cljs$core$IFn$_invoke$arity$3 = (function (group,group__$1,silent){
return phzr.impl.utils.core.phaser__GT_clj(group__$1.moveAll(phzr.impl.utils.core.clj__GT_phaser(group__$1),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.group.move_all.cljs$lang$maxFixedArity = 3;

/**
 * Moves the given child down one place in this group unless it's already at the bottom.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (any) - The child to move down in the group.
 * 
 *   Returns:  any - The child that was moved.
 */
phzr.group.move_down = (function phzr$group$move_down(group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.moveDown(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Moves the given child up one place in this group unless it's already at the top.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (any) - The child to move up in the group.
 * 
 *   Returns:  any - The child that was moved.
 */
phzr.group.move_up = (function phzr$group$move_up(group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.moveUp(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Multiplies the given property by the amount on all children in this group.
 * 
 *   `Group.multiplyAll('x', 2)` will x2 the child.x value for each child.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * property (string) - The property to multiply, for example 'body.velocity.x' or 'angle'.
 *  * amount (number) - The amount to multiply the property by. If child.x = 10 then multiplyAll('x', 2) would make child.x = 20.
 *  * check-alive (boolean) - If true the property will only be changed if the child is alive.
 *  * check-visible (boolean) - If true the property will only be changed if the child is visible.
 */
phzr.group.multiply_all = (function phzr$group$multiply_all(group,property,amount,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(group.multiplyAll(phzr.impl.utils.core.clj__GT_phaser(property),phzr.impl.utils.core.clj__GT_phaser(amount),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});
/**
 * Advances the group cursor to the next (higher) object in the group.
 * 
 *   If the cursor is at the end of the group (top child) it is moved the start of the group (bottom child).
 * 
 *   Returns:  any - The child the cursor now points to.
 */
phzr.group.next = (function phzr$group$next(group){
return phzr.impl.utils.core.phaser__GT_clj(group.next());
});
/**
 * Moves the group cursor to the previous (lower) child in the group.
 * 
 *   If the cursor is at the start of the group (bottom child) it is moved to the end (top child).
 * 
 *   Returns:  any - The child the cursor now points to.
 */
phzr.group.previous = (function phzr$group$previous(group){
return phzr.impl.utils.core.phaser__GT_clj(group.previous());
});
/**
 * Removes the given child from this group.
 * 
 *   This will dispatch an `onRemovedFromGroup` event from the child (if it has one), and optionally destroy the child.
 * 
 *   If the group cursor was referring to the removed child it is updated to refer to the next child.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (any) - The child to remove.
 *  * destroy (boolean) {optional} - If true `destroy` will be invoked on the removed child.
 *  * silent (boolean) {optional} - If true the the child will not dispatch the `onRemovedFromGroup` event.
 * 
 *   Returns:  boolean - true if the child was removed from this group, otherwise false.
 */
phzr.group.remove = (function phzr$group$remove(var_args){
var args27544 = [];
var len__21323__auto___27547 = arguments.length;
var i__21324__auto___27548 = (0);
while(true){
if((i__21324__auto___27548 < len__21323__auto___27547)){
args27544.push((arguments[i__21324__auto___27548]));

var G__27549 = (i__21324__auto___27548 + (1));
i__21324__auto___27548 = G__27549;
continue;
} else {
}
break;
}

var G__27546 = args27544.length;
switch (G__27546) {
case 2:
return phzr.group.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.remove.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.remove.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27544.length)].join('')));

}
});

phzr.group.remove.cljs$core$IFn$_invoke$arity$2 = (function (group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.remove(phzr.impl.utils.core.clj__GT_phaser(child)));
});

phzr.group.remove.cljs$core$IFn$_invoke$arity$3 = (function (group,child,destroy){
return phzr.impl.utils.core.phaser__GT_clj(group.remove(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(destroy)));
});

phzr.group.remove.cljs$core$IFn$_invoke$arity$4 = (function (group,child,destroy,silent){
return phzr.impl.utils.core.phaser__GT_clj(group.remove(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(destroy),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.group.remove.cljs$lang$maxFixedArity = 4;

/**
 * Removes all children from this group, but does not remove the group from its parent.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * destroy (boolean) {optional} - If true `destroy` will be invoked on each removed child.
 *  * silent (boolean) {optional} - If true the children will not dispatch their `onRemovedFromGroup` events.
 */
phzr.group.remove_all = (function phzr$group$remove_all(var_args){
var args27551 = [];
var len__21323__auto___27554 = arguments.length;
var i__21324__auto___27555 = (0);
while(true){
if((i__21324__auto___27555 < len__21323__auto___27554)){
args27551.push((arguments[i__21324__auto___27555]));

var G__27556 = (i__21324__auto___27555 + (1));
i__21324__auto___27555 = G__27556;
continue;
} else {
}
break;
}

var G__27553 = args27551.length;
switch (G__27553) {
case 1:
return phzr.group.remove_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.group.remove_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.remove_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27551.length)].join('')));

}
});

phzr.group.remove_all.cljs$core$IFn$_invoke$arity$1 = (function (group){
return phzr.impl.utils.core.phaser__GT_clj(group.removeAll());
});

phzr.group.remove_all.cljs$core$IFn$_invoke$arity$2 = (function (group,destroy){
return phzr.impl.utils.core.phaser__GT_clj(group.removeAll(phzr.impl.utils.core.clj__GT_phaser(destroy)));
});

phzr.group.remove_all.cljs$core$IFn$_invoke$arity$3 = (function (group,destroy,silent){
return phzr.impl.utils.core.phaser__GT_clj(group.removeAll(phzr.impl.utils.core.clj__GT_phaser(destroy),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.group.remove_all.cljs$lang$maxFixedArity = 3;

/**
 * Removes all children from this group whose index falls beteen the given startIndex and endIndex values.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * start-index (integer) - The index to start removing children from.
 *  * end-index (integer) {optional} - The index to stop removing children at. Must be higher than startIndex. If undefined this method will remove all children between startIndex and the end of the group.
 *  * destroy (boolean) {optional} - If true `destroy` will be invoked on each removed child.
 *  * silent (boolean) {optional} - If true the children will not dispatch their `onRemovedFromGroup` events.
 */
phzr.group.remove_between = (function phzr$group$remove_between(var_args){
var args27558 = [];
var len__21323__auto___27561 = arguments.length;
var i__21324__auto___27562 = (0);
while(true){
if((i__21324__auto___27562 < len__21323__auto___27561)){
args27558.push((arguments[i__21324__auto___27562]));

var G__27563 = (i__21324__auto___27562 + (1));
i__21324__auto___27562 = G__27563;
continue;
} else {
}
break;
}

var G__27560 = args27558.length;
switch (G__27560) {
case 2:
return phzr.group.remove_between.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.remove_between.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.remove_between.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.remove_between.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27558.length)].join('')));

}
});

phzr.group.remove_between.cljs$core$IFn$_invoke$arity$2 = (function (group,start_index){
return phzr.impl.utils.core.phaser__GT_clj(group.removeBetween(phzr.impl.utils.core.clj__GT_phaser(start_index)));
});

phzr.group.remove_between.cljs$core$IFn$_invoke$arity$3 = (function (group,start_index,end_index){
return phzr.impl.utils.core.phaser__GT_clj(group.removeBetween(phzr.impl.utils.core.clj__GT_phaser(start_index),phzr.impl.utils.core.clj__GT_phaser(end_index)));
});

phzr.group.remove_between.cljs$core$IFn$_invoke$arity$4 = (function (group,start_index,end_index,destroy){
return phzr.impl.utils.core.phaser__GT_clj(group.removeBetween(phzr.impl.utils.core.clj__GT_phaser(start_index),phzr.impl.utils.core.clj__GT_phaser(end_index),phzr.impl.utils.core.clj__GT_phaser(destroy)));
});

phzr.group.remove_between.cljs$core$IFn$_invoke$arity$5 = (function (group,start_index,end_index,destroy,silent){
return phzr.impl.utils.core.phaser__GT_clj(group.removeBetween(phzr.impl.utils.core.clj__GT_phaser(start_index),phzr.impl.utils.core.clj__GT_phaser(end_index),phzr.impl.utils.core.clj__GT_phaser(destroy),phzr.impl.utils.core.clj__GT_phaser(silent)));
});

phzr.group.remove_between.cljs$lang$maxFixedArity = 5;

/**
 * Removes a child from the container.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The DisplayObject to remove
 * 
 *   Returns:  PIXI.DisplayObject - The child that was removed.
 */
phzr.group.remove_child = (function phzr$group$remove_child(group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.removeChild(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Removes a child from the specified index position.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * index (Number) - The index to get the child from
 * 
 *   Returns:  PIXI.DisplayObject - The child that was removed.
 */
phzr.group.remove_child_at = (function phzr$group$remove_child_at(group,index){
return phzr.impl.utils.core.phaser__GT_clj(group.removeChildAt(phzr.impl.utils.core.clj__GT_phaser(index)));
});
/**
 * Removes all children from this container that are within the begin and end indexes.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * begin-index (Number) - The beginning position. Default value is 0.
 *  * end-index (Number) - The ending position. Default value is size of the container.
 */
phzr.group.remove_children = (function phzr$group$remove_children(group,begin_index,end_index){
return phzr.impl.utils.core.phaser__GT_clj(group.removeChildren(phzr.impl.utils.core.clj__GT_phaser(begin_index),phzr.impl.utils.core.clj__GT_phaser(end_index)));
});
/**
 * Removes a child of this Group from the hash array.
 *   This call will return false if the child is not in the hash.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (DisplayObject) - The display object to remove from this Groups hash. Must be a member of this Group and in the hash.
 * 
 *   Returns:  boolean - True if the child was successfully removed from the hash, otherwise false.
 */
phzr.group.remove_from_hash = (function phzr$group$remove_from_hash(group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.removeFromHash(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Removes the current stage reference from the container and all of its children.
 */
phzr.group.remove_stage_reference = (function phzr$group$remove_stage_reference(group){
return phzr.impl.utils.core.phaser__GT_clj(group.removeStageReference());
});
/**
 * Replaces a child of this group with the given newChild. The newChild cannot be a member of this group.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * old-child (any) - The child in this group that will be replaced.
 *  * new-child (any) - The child to be inserted into this group.
 * 
 *   Returns:  any - Returns the oldChild that was replaced within this group.
 */
phzr.group.replace = (function phzr$group$replace(group,old_child,new_child){
return phzr.impl.utils.core.phaser__GT_clj(group.replace(phzr.impl.utils.core.clj__GT_phaser(old_child),phzr.impl.utils.core.clj__GT_phaser(new_child)));
});
/**
 * Sets the group cursor to the first child in the group.
 * 
 *   If the optional index parameter is given it sets the cursor to the object at that index instead.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * index (integer) {optional} - Set the cursor to point to a specific index.
 * 
 *   Returns:  any - The child the cursor now points to.
 */
phzr.group.reset_cursor = (function phzr$group$reset_cursor(var_args){
var args27565 = [];
var len__21323__auto___27568 = arguments.length;
var i__21324__auto___27569 = (0);
while(true){
if((i__21324__auto___27569 < len__21323__auto___27568)){
args27565.push((arguments[i__21324__auto___27569]));

var G__27570 = (i__21324__auto___27569 + (1));
i__21324__auto___27569 = G__27570;
continue;
} else {
}
break;
}

var G__27567 = args27565.length;
switch (G__27567) {
case 1:
return phzr.group.reset_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.group.reset_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27565.length)].join('')));

}
});

phzr.group.reset_cursor.cljs$core$IFn$_invoke$arity$1 = (function (group){
return phzr.impl.utils.core.phaser__GT_clj(group.resetCursor());
});

phzr.group.reset_cursor.cljs$core$IFn$_invoke$arity$2 = (function (group,index){
return phzr.impl.utils.core.phaser__GT_clj(group.resetCursor(phzr.impl.utils.core.clj__GT_phaser(index)));
});

phzr.group.reset_cursor.cljs$lang$maxFixedArity = 2;

/**
 * Reverses all children in this group.
 * 
 *   This operaation applies only to immediate children and does not propagate to subgroups.
 */
phzr.group.reverse = (function phzr$group$reverse(group){
return phzr.impl.utils.core.phaser__GT_clj(group.reverse());
});
/**
 * Sends the given child to the bottom of this group so it renders below all other children.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (any) - The child to send to the bottom of this group.
 * 
 *   Returns:  any - The child that was moved.
 */
phzr.group.send_to_back = (function phzr$group$send_to_back(group,child){
return phzr.impl.utils.core.phaser__GT_clj(group.sendToBack(phzr.impl.utils.core.clj__GT_phaser(child)));
});
/**
 * Quickly set a property on a single child of this group to a new value.
 * 
 *   The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
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
phzr.group.set = (function phzr$group$set(var_args){
var args27572 = [];
var len__21323__auto___27575 = arguments.length;
var i__21324__auto___27576 = (0);
while(true){
if((i__21324__auto___27576 < len__21323__auto___27575)){
args27572.push((arguments[i__21324__auto___27576]));

var G__27577 = (i__21324__auto___27576 + (1));
i__21324__auto___27576 = G__27577;
continue;
} else {
}
break;
}

var G__27574 = args27572.length;
switch (G__27574) {
case 4:
return phzr.group.set.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.set.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.group.set.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.group.set.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.group.set.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27572.length)].join('')));

}
});

phzr.group.set.cljs$core$IFn$_invoke$arity$4 = (function (group,child,key,value){
return phzr.impl.utils.core.phaser__GT_clj(group.set(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value)));
});

phzr.group.set.cljs$core$IFn$_invoke$arity$5 = (function (group,child,key,value,check_alive){
return phzr.impl.utils.core.phaser__GT_clj(group.set(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive)));
});

phzr.group.set.cljs$core$IFn$_invoke$arity$6 = (function (group,child,key,value,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(group.set(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});

phzr.group.set.cljs$core$IFn$_invoke$arity$7 = (function (group,child,key,value,check_alive,check_visible,operation){
return phzr.impl.utils.core.phaser__GT_clj(group.set(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(operation)));
});

phzr.group.set.cljs$core$IFn$_invoke$arity$8 = (function (group,child,key,value,check_alive,check_visible,operation,force){
return phzr.impl.utils.core.phaser__GT_clj(group.set(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(operation),phzr.impl.utils.core.clj__GT_phaser(force)));
});

phzr.group.set.cljs$lang$maxFixedArity = 8;

/**
 * Quickly set the same property across all children of this group to a new value.
 * 
 *   This call doesn't descend down children, so if you have a Group inside of this group, the property will be set on the group but not its children.
 *   If you need that ability please see `Group.setAllChildren`.
 * 
 *   The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * key (string) - The property, as a string, to be set. For example: 'body.velocity.x'
 *  * value (any) - The value that will be set.
 *  * check-alive (boolean) {optional} - If set then only children with alive=true will be updated. This includes any Groups that are children.
 *  * check-visible (boolean) {optional} - If set then only children with visible=true will be updated. This includes any Groups that are children.
 *  * operation (integer) {optional} - Controls how the value is assigned. A value of 0 replaces the value with the new one. A value of 1 adds it, 2 subtracts it, 3 multiplies it and 4 divides it.
 *  * force (boolean) {optional} - If `force` is true then the property will be set on the child regardless if it already exists or not. If false and the property doesn't exist, nothing will be set.
 */
phzr.group.set_all = (function phzr$group$set_all(var_args){
var args27579 = [];
var len__21323__auto___27582 = arguments.length;
var i__21324__auto___27583 = (0);
while(true){
if((i__21324__auto___27583 < len__21323__auto___27582)){
args27579.push((arguments[i__21324__auto___27583]));

var G__27584 = (i__21324__auto___27583 + (1));
i__21324__auto___27583 = G__27584;
continue;
} else {
}
break;
}

var G__27581 = args27579.length;
switch (G__27581) {
case 3:
return phzr.group.set_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.set_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.set_all.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.group.set_all.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.group.set_all.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27579.length)].join('')));

}
});

phzr.group.set_all.cljs$core$IFn$_invoke$arity$3 = (function (group,key,value){
return phzr.impl.utils.core.phaser__GT_clj(group.setAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value)));
});

phzr.group.set_all.cljs$core$IFn$_invoke$arity$4 = (function (group,key,value,check_alive){
return phzr.impl.utils.core.phaser__GT_clj(group.setAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive)));
});

phzr.group.set_all.cljs$core$IFn$_invoke$arity$5 = (function (group,key,value,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(group.setAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});

phzr.group.set_all.cljs$core$IFn$_invoke$arity$6 = (function (group,key,value,check_alive,check_visible,operation){
return phzr.impl.utils.core.phaser__GT_clj(group.setAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(operation)));
});

phzr.group.set_all.cljs$core$IFn$_invoke$arity$7 = (function (group,key,value,check_alive,check_visible,operation,force){
return phzr.impl.utils.core.phaser__GT_clj(group.setAll(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(operation),phzr.impl.utils.core.clj__GT_phaser(force)));
});

phzr.group.set_all.cljs$lang$maxFixedArity = 7;

/**
 * Quickly set the same property across all children of this group, and any child Groups, to a new value.
 * 
 *   If this group contains other Groups then the same property is set across their children as well, iterating down until it reaches the bottom.
 *   Unlike with `setAll` the property is NOT set on child Groups itself.
 * 
 *   The operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * key (string) - The property, as a string, to be set. For example: 'body.velocity.x'
 *  * value (any) - The value that will be set.
 *  * check-alive (boolean) {optional} - If set then only children with alive=true will be updated. This includes any Groups that are children.
 *  * check-visible (boolean) {optional} - If set then only children with visible=true will be updated. This includes any Groups that are children.
 *  * operation (integer) {optional} - Controls how the value is assigned. A value of 0 replaces the value with the new one. A value of 1 adds it, 2 subtracts it, 3 multiplies it and 4 divides it.
 *  * force (boolean) {optional} - If `force` is true then the property will be set on the child regardless if it already exists or not. If false and the property doesn't exist, nothing will be set.
 */
phzr.group.set_all_children = (function phzr$group$set_all_children(var_args){
var args27586 = [];
var len__21323__auto___27589 = arguments.length;
var i__21324__auto___27590 = (0);
while(true){
if((i__21324__auto___27590 < len__21323__auto___27589)){
args27586.push((arguments[i__21324__auto___27590]));

var G__27591 = (i__21324__auto___27590 + (1));
i__21324__auto___27590 = G__27591;
continue;
} else {
}
break;
}

var G__27588 = args27586.length;
switch (G__27588) {
case 3:
return phzr.group.set_all_children.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.set_all_children.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.set_all_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.group.set_all_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.group.set_all_children.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27586.length)].join('')));

}
});

phzr.group.set_all_children.cljs$core$IFn$_invoke$arity$3 = (function (group,key,value){
return phzr.impl.utils.core.phaser__GT_clj(group.setAllChildren(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value)));
});

phzr.group.set_all_children.cljs$core$IFn$_invoke$arity$4 = (function (group,key,value,check_alive){
return phzr.impl.utils.core.phaser__GT_clj(group.setAllChildren(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive)));
});

phzr.group.set_all_children.cljs$core$IFn$_invoke$arity$5 = (function (group,key,value,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(group.setAllChildren(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});

phzr.group.set_all_children.cljs$core$IFn$_invoke$arity$6 = (function (group,key,value,check_alive,check_visible,operation){
return phzr.impl.utils.core.phaser__GT_clj(group.setAllChildren(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(operation)));
});

phzr.group.set_all_children.cljs$core$IFn$_invoke$arity$7 = (function (group,key,value,check_alive,check_visible,operation,force){
return phzr.impl.utils.core.phaser__GT_clj(group.setAllChildren(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible),phzr.impl.utils.core.clj__GT_phaser(operation),phzr.impl.utils.core.clj__GT_phaser(force)));
});

phzr.group.set_all_children.cljs$lang$maxFixedArity = 7;

/**
 * Changes the position of an existing child in the display object container
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - The child DisplayObject instance for which you want to change the index number
 *  * index (Number) - The resulting index number for the child display object
 */
phzr.group.set_child_index = (function phzr$group$set_child_index(group,child,index){
return phzr.impl.utils.core.phaser__GT_clj(group.setChildIndex(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(index)));
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
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (any) - The child to set the property value on.
 *  * key (array) - An array of strings that make up the property that will be set.
 *  * value (any) - The value that will be set.
 *  * operation (integer) {optional} - Controls how the value is assigned. A value of 0 replaces the value with the new one. A value of 1 adds it, 2 subtracts it, 3 multiplies it and 4 divides it.
 *  * force (boolean) {optional} - If `force` is true then the property will be set on the child regardless if it already exists or not. If false and the property doesn't exist, nothing will be set.
 * 
 *   Returns:  boolean - True if the property was set, false if not.
 */
phzr.group.set_property = (function phzr$group$set_property(var_args){
var args27593 = [];
var len__21323__auto___27596 = arguments.length;
var i__21324__auto___27597 = (0);
while(true){
if((i__21324__auto___27597 < len__21323__auto___27596)){
args27593.push((arguments[i__21324__auto___27597]));

var G__27598 = (i__21324__auto___27597 + (1));
i__21324__auto___27597 = G__27598;
continue;
} else {
}
break;
}

var G__27595 = args27593.length;
switch (G__27595) {
case 4:
return phzr.group.set_property.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.set_property.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.group.set_property.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27593.length)].join('')));

}
});

phzr.group.set_property.cljs$core$IFn$_invoke$arity$4 = (function (group,child,key,value){
return phzr.impl.utils.core.phaser__GT_clj(group.setProperty(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value)));
});

phzr.group.set_property.cljs$core$IFn$_invoke$arity$5 = (function (group,child,key,value,operation){
return phzr.impl.utils.core.phaser__GT_clj(group.setProperty(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(operation)));
});

phzr.group.set_property.cljs$core$IFn$_invoke$arity$6 = (function (group,child,key,value,operation,force){
return phzr.impl.utils.core.phaser__GT_clj(group.setProperty(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(operation),phzr.impl.utils.core.clj__GT_phaser(force)));
});

phzr.group.set_property.cljs$lang$maxFixedArity = 6;

/**
 * Sets the containers Stage reference. This is the Stage that this object, and all of its children, is connected to.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * stage (PIXI.Stage) - the stage that the container will have as its current stage reference
 */
phzr.group.set_stage_reference = (function phzr$group$set_stage_reference(group,stage){
return phzr.impl.utils.core.phaser__GT_clj(group.setStageReference(phzr.impl.utils.core.clj__GT_phaser(stage)));
});
/**
 * Sort the children in the group according to a particular key and ordering.
 * 
 *   Call this function to sort the group according to a particular key value and order.
 *   For example to depth sort Sprites for Zelda-style game you might call `group.sort('y', Phaser.Group.SORT_ASCENDING)` at the bottom of your `State.update()`.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * key (string) {optional} - The name of the property to sort on. Defaults to the objects z-depth value.
 *  * order (integer) {optional} - Order ascending ({@link Phaser.Group.SORT_ASCENDING SORT_ASCENDING}) or descending ({@link Phaser.Group.SORT_DESCENDING SORT_DESCENDING}).
 */
phzr.group.sort = (function phzr$group$sort(var_args){
var args27600 = [];
var len__21323__auto___27603 = arguments.length;
var i__21324__auto___27604 = (0);
while(true){
if((i__21324__auto___27604 < len__21323__auto___27603)){
args27600.push((arguments[i__21324__auto___27604]));

var G__27605 = (i__21324__auto___27604 + (1));
i__21324__auto___27604 = G__27605;
continue;
} else {
}
break;
}

var G__27602 = args27600.length;
switch (G__27602) {
case 1:
return phzr.group.sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.group.sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.sort.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27600.length)].join('')));

}
});

phzr.group.sort.cljs$core$IFn$_invoke$arity$1 = (function (group){
return phzr.impl.utils.core.phaser__GT_clj(group.sort());
});

phzr.group.sort.cljs$core$IFn$_invoke$arity$2 = (function (group,key){
return phzr.impl.utils.core.phaser__GT_clj(group.sort(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.group.sort.cljs$core$IFn$_invoke$arity$3 = (function (group,key,order){
return phzr.impl.utils.core.phaser__GT_clj(group.sort(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(order)));
});

phzr.group.sort.cljs$lang$maxFixedArity = 3;

/**
 * Subtracts the amount from the given property on all children in this group.
 * 
 *   `Group.subAll('x', 10)` will minus 10 from the child.x value for each child.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * property (string) - The property to decrement, for example 'body.velocity.x' or 'angle'.
 *  * amount (number) - The amount to subtract from the property. If child.x = 50 then subAll('x', 40) would make child.x = 10.
 *  * check-alive (boolean) - If true the property will only be changed if the child is alive.
 *  * check-visible (boolean) - If true the property will only be changed if the child is visible.
 */
phzr.group.sub_all = (function phzr$group$sub_all(group,property,amount,check_alive,check_visible){
return phzr.impl.utils.core.phaser__GT_clj(group.subAll(phzr.impl.utils.core.clj__GT_phaser(property),phzr.impl.utils.core.clj__GT_phaser(amount),phzr.impl.utils.core.clj__GT_phaser(check_alive),phzr.impl.utils.core.clj__GT_phaser(check_visible)));
});
/**
 * Swaps the position of two children in this group.
 * 
 *   Both children must be in this group, a child cannot be swapped with itself, and unparented children cannot be swapped.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child-1 (any) - The first child to swap.
 *  * child-2 (any) - The second child to swap.
 */
phzr.group.swap = (function phzr$group$swap(group,child_1,child_2){
return phzr.impl.utils.core.phaser__GT_clj(group.swap(phzr.impl.utils.core.clj__GT_phaser(child_1),phzr.impl.utils.core.clj__GT_phaser(child_2)));
});
/**
 * Swaps the position of 2 Display Objects within this container.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * child (PIXI.DisplayObject) - -
 *  * child-2 (PIXI.DisplayObject) - -
 */
phzr.group.swap_children = (function phzr$group$swap_children(group,child,child_2){
return phzr.impl.utils.core.phaser__GT_clj(group.swapChildren(phzr.impl.utils.core.clj__GT_phaser(child),phzr.impl.utils.core.clj__GT_phaser(child_2)));
});
/**
 * Calculates the global position of the display object
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * position (Point) - The world origin to calculate from
 * 
 *   Returns:  Point - A point object representing the position of this object
 */
phzr.group.to_global = (function phzr$group$to_global(group,position){
return phzr.impl.utils.core.phaser__GT_clj(group.toGlobal(phzr.impl.utils.core.clj__GT_phaser(position)));
});
/**
 * Calculates the local position of the display object relative to another point
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * position (Point) - The world origin to calculate from
 *  * from (PIXI.DisplayObject) {optional} - The DisplayObject to calculate the global position from
 * 
 *   Returns:  Point - A point object representing the position of this object
 */
phzr.group.to_local = (function phzr$group$to_local(var_args){
var args27607 = [];
var len__21323__auto___27610 = arguments.length;
var i__21324__auto___27611 = (0);
while(true){
if((i__21324__auto___27611 < len__21323__auto___27610)){
args27607.push((arguments[i__21324__auto___27611]));

var G__27612 = (i__21324__auto___27611 + (1));
i__21324__auto___27611 = G__27612;
continue;
} else {
}
break;
}

var G__27609 = args27607.length;
switch (G__27609) {
case 2:
return phzr.group.to_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.to_local.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27607.length)].join('')));

}
});

phzr.group.to_local.cljs$core$IFn$_invoke$arity$2 = (function (group,position){
return phzr.impl.utils.core.phaser__GT_clj(group.toLocal(phzr.impl.utils.core.clj__GT_phaser(position)));
});

phzr.group.to_local.cljs$core$IFn$_invoke$arity$3 = (function (group,position,from){
return phzr.impl.utils.core.phaser__GT_clj(group.toLocal(phzr.impl.utils.core.clj__GT_phaser(position),phzr.impl.utils.core.clj__GT_phaser(from)));
});

phzr.group.to_local.cljs$lang$maxFixedArity = 3;

/**
 * Generates and updates the cached sprite for this object.
 */
phzr.group.update_cache = (function phzr$group$update_cache(group){
return phzr.impl.utils.core.phaser__GT_clj(group.updateCache());
});
/**
 * Positions the child found at the given index within this group to the given x and y coordinates.
 * 
 *   Parameters:
 *  * group (Phaser.Group) - Targeted instance for method
 *  * index (integer) - The index of the child in the group to set the position of.
 *  * x (number) - The new x position of the child.
 *  * y (number) - The new y position of the child.
 */
phzr.group.xy = (function phzr$group$xy(group,index,x,y){
return phzr.impl.utils.core.phaser__GT_clj(group.xy(phzr.impl.utils.core.clj__GT_phaser(index),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});
