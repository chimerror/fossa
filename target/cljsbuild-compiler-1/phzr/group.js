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
var args27412 = [];
var len__21323__auto___27415 = arguments.length;
var i__21324__auto___27416 = (0);
while(true){
if((i__21324__auto___27416 < len__21323__auto___27415)){
args27412.push((arguments[i__21324__auto___27416]));

var G__27417 = (i__21324__auto___27416 + (1));
i__21324__auto___27416 = G__27417;
continue;
} else {
}
break;
}

var G__27414 = args27412.length;
switch (G__27414) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27412.length)].join('')));

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
var args27419 = [];
var len__21323__auto___27422 = arguments.length;
var i__21324__auto___27423 = (0);
while(true){
if((i__21324__auto___27423 < len__21323__auto___27422)){
args27419.push((arguments[i__21324__auto___27423]));

var G__27424 = (i__21324__auto___27423 + (1));
i__21324__auto___27423 = G__27424;
continue;
} else {
}
break;
}

var G__27421 = args27419.length;
switch (G__27421) {
case 2:
return phzr.group.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27419.length)].join('')));

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
var args27426 = [];
var len__21323__auto___27429 = arguments.length;
var i__21324__auto___27430 = (0);
while(true){
if((i__21324__auto___27430 < len__21323__auto___27429)){
args27426.push((arguments[i__21324__auto___27430]));

var G__27431 = (i__21324__auto___27430 + (1));
i__21324__auto___27430 = G__27431;
continue;
} else {
}
break;
}

var G__27428 = args27426.length;
switch (G__27428) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27426.length)].join('')));

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
var args27433 = [];
var len__21323__auto___27436 = arguments.length;
var i__21324__auto___27437 = (0);
while(true){
if((i__21324__auto___27437 < len__21323__auto___27436)){
args27433.push((arguments[i__21324__auto___27437]));

var G__27438 = (i__21324__auto___27437 + (1));
i__21324__auto___27437 = G__27438;
continue;
} else {
}
break;
}

var G__27435 = args27433.length;
switch (G__27435) {
case 2:
return phzr.group.add_multiple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.add_multiple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27433.length)].join('')));

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
var args27440 = [];
var len__21323__auto___27443 = arguments.length;
var i__21324__auto___27444 = (0);
while(true){
if((i__21324__auto___27444 < len__21323__auto___27443)){
args27440.push((arguments[i__21324__auto___27444]));

var G__27445 = (i__21324__auto___27444 + (1));
i__21324__auto___27444 = G__27445;
continue;
} else {
}
break;
}

var G__27442 = args27440.length;
switch (G__27442) {
case 3:
return phzr.group.call_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.call_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27440.length)].join('')));

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
var args27447 = [];
var len__21323__auto___27450 = arguments.length;
var i__21324__auto___27451 = (0);
while(true){
if((i__21324__auto___27451 < len__21323__auto___27450)){
args27447.push((arguments[i__21324__auto___27451]));

var G__27452 = (i__21324__auto___27451 + (1));
i__21324__auto___27451 = G__27452;
continue;
} else {
}
break;
}

var G__27449 = args27447.length;
switch (G__27449) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27447.length)].join('')));

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
var args27454 = [];
var len__21323__auto___27457 = arguments.length;
var i__21324__auto___27458 = (0);
while(true){
if((i__21324__auto___27458 < len__21323__auto___27457)){
args27454.push((arguments[i__21324__auto___27458]));

var G__27459 = (i__21324__auto___27458 + (1));
i__21324__auto___27458 = G__27459;
continue;
} else {
}
break;
}

var G__27456 = args27454.length;
switch (G__27456) {
case 4:
return phzr.group.check_property.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.group.check_property.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27454.length)].join('')));

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
var args27461 = [];
var len__21323__auto___27464 = arguments.length;
var i__21324__auto___27465 = (0);
while(true){
if((i__21324__auto___27465 < len__21323__auto___27464)){
args27461.push((arguments[i__21324__auto___27465]));

var G__27466 = (i__21324__auto___27465 + (1));
i__21324__auto___27465 = G__27466;
continue;
} else {
}
break;
}

var G__27463 = args27461.length;
switch (G__27463) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27461.length)].join('')));

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
var args27468 = [];
var len__21323__auto___27471 = arguments.length;
var i__21324__auto___27472 = (0);
while(true){
if((i__21324__auto___27472 < len__21323__auto___27471)){
args27468.push((arguments[i__21324__auto___27472]));

var G__27473 = (i__21324__auto___27472 + (1));
i__21324__auto___27472 = G__27473;
continue;
} else {
}
break;
}

var G__27470 = args27468.length;
switch (G__27470) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27468.length)].join('')));

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
var args27475 = [];
var len__21323__auto___27478 = arguments.length;
var i__21324__auto___27479 = (0);
while(true){
if((i__21324__auto___27479 < len__21323__auto___27478)){
args27475.push((arguments[i__21324__auto___27479]));

var G__27480 = (i__21324__auto___27479 + (1));
i__21324__auto___27479 = G__27480;
continue;
} else {
}
break;
}

var G__27477 = args27475.length;
switch (G__27477) {
case 2:
return phzr.group.custom_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.custom_sort.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27475.length)].join('')));

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
var args27482 = [];
var len__21323__auto___27485 = arguments.length;
var i__21324__auto___27486 = (0);
while(true){
if((i__21324__auto___27486 < len__21323__auto___27485)){
args27482.push((arguments[i__21324__auto___27486]));

var G__27487 = (i__21324__auto___27486 + (1));
i__21324__auto___27486 = G__27487;
continue;
} else {
}
break;
}

var G__27484 = args27482.length;
switch (G__27484) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27482.length)].join('')));

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
var args27489 = [];
var len__21323__auto___27492 = arguments.length;
var i__21324__auto___27493 = (0);
while(true){
if((i__21324__auto___27493 < len__21323__auto___27492)){
args27489.push((arguments[i__21324__auto___27493]));

var G__27494 = (i__21324__auto___27493 + (1));
i__21324__auto___27493 = G__27494;
continue;
} else {
}
break;
}

var G__27491 = args27489.length;
switch (G__27491) {
case 2:
return phzr.group.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27489.length)].join('')));

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
var args27496 = [];
var len__21323__auto___27499 = arguments.length;
var i__21324__auto___27500 = (0);
while(true){
if((i__21324__auto___27500 < len__21323__auto___27499)){
args27496.push((arguments[i__21324__auto___27500]));

var G__27501 = (i__21324__auto___27500 + (1));
i__21324__auto___27500 = G__27501;
continue;
} else {
}
break;
}

var G__27498 = args27496.length;
switch (G__27498) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27496.length)].join('')));

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
var args27503 = [];
var len__21323__auto___27506 = arguments.length;
var i__21324__auto___27507 = (0);
while(true){
if((i__21324__auto___27507 < len__21323__auto___27506)){
args27503.push((arguments[i__21324__auto___27507]));

var G__27508 = (i__21324__auto___27507 + (1));
i__21324__auto___27507 = G__27508;
continue;
} else {
}
break;
}

var G__27505 = args27503.length;
switch (G__27505) {
case 3:
return phzr.group.for_each_alive.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.for_each_alive.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27503.length)].join('')));

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
var args27510 = [];
var len__21323__auto___27513 = arguments.length;
var i__21324__auto___27514 = (0);
while(true){
if((i__21324__auto___27514 < len__21323__auto___27513)){
args27510.push((arguments[i__21324__auto___27514]));

var G__27515 = (i__21324__auto___27514 + (1));
i__21324__auto___27514 = G__27515;
continue;
} else {
}
break;
}

var G__27512 = args27510.length;
switch (G__27512) {
case 3:
return phzr.group.for_each_dead.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.for_each_dead.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27510.length)].join('')));

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
var args27517 = [];
var len__21323__auto___27520 = arguments.length;
var i__21324__auto___27521 = (0);
while(true){
if((i__21324__auto___27521 < len__21323__auto___27520)){
args27517.push((arguments[i__21324__auto___27521]));

var G__27522 = (i__21324__auto___27521 + (1));
i__21324__auto___27521 = G__27522;
continue;
} else {
}
break;
}

var G__27519 = args27517.length;
switch (G__27519) {
case 3:
return phzr.group.for_each_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.group.for_each_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27517.length)].join('')));

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
var args27524 = [];
var len__21323__auto___27527 = arguments.length;
var i__21324__auto___27528 = (0);
while(true){
if((i__21324__auto___27528 < len__21323__auto___27527)){
args27524.push((arguments[i__21324__auto___27528]));

var G__27529 = (i__21324__auto___27528 + (1));
i__21324__auto___27528 = G__27529;
continue;
} else {
}
break;
}

var G__27526 = args27524.length;
switch (G__27526) {
case 1:
return phzr.group.get_first_exists.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.group.get_first_exists.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27524.length)].join('')));

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
var args27531 = [];
var len__21323__auto___27534 = arguments.length;
var i__21324__auto___27535 = (0);
while(true){
if((i__21324__auto___27535 < len__21323__auto___27534)){
args27531.push((arguments[i__21324__auto___27535]));

var G__27536 = (i__21324__auto___27535 + (1));
i__21324__auto___27535 = G__27536;
continue;
} else {
}
break;
}

var G__27533 = args27531.length;
switch (G__27533) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27531.length)].join('')));

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
var args27538 = [];
var len__21323__auto___27541 = arguments.length;
var i__21324__auto___27542 = (0);
while(true){
if((i__21324__auto___27542 < len__21323__auto___27541)){
args27538.push((arguments[i__21324__auto___27542]));

var G__27543 = (i__21324__auto___27542 + (1));
i__21324__auto___27542 = G__27543;
continue;
} else {
}
break;
}

var G__27540 = args27538.length;
switch (G__27540) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27538.length)].join('')));

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
var args27545 = [];
var len__21323__auto___27548 = arguments.length;
var i__21324__auto___27549 = (0);
while(true){
if((i__21324__auto___27549 < len__21323__auto___27548)){
args27545.push((arguments[i__21324__auto___27549]));

var G__27550 = (i__21324__auto___27549 + (1));
i__21324__auto___27549 = G__27550;
continue;
} else {
}
break;
}

var G__27547 = args27545.length;
switch (G__27547) {
case 2:
return phzr.group.move_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.move_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27545.length)].join('')));

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
var args27552 = [];
var len__21323__auto___27555 = arguments.length;
var i__21324__auto___27556 = (0);
while(true){
if((i__21324__auto___27556 < len__21323__auto___27555)){
args27552.push((arguments[i__21324__auto___27556]));

var G__27557 = (i__21324__auto___27556 + (1));
i__21324__auto___27556 = G__27557;
continue;
} else {
}
break;
}

var G__27554 = args27552.length;
switch (G__27554) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27552.length)].join('')));

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
var args27559 = [];
var len__21323__auto___27562 = arguments.length;
var i__21324__auto___27563 = (0);
while(true){
if((i__21324__auto___27563 < len__21323__auto___27562)){
args27559.push((arguments[i__21324__auto___27563]));

var G__27564 = (i__21324__auto___27563 + (1));
i__21324__auto___27563 = G__27564;
continue;
} else {
}
break;
}

var G__27561 = args27559.length;
switch (G__27561) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27559.length)].join('')));

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
var args27566 = [];
var len__21323__auto___27569 = arguments.length;
var i__21324__auto___27570 = (0);
while(true){
if((i__21324__auto___27570 < len__21323__auto___27569)){
args27566.push((arguments[i__21324__auto___27570]));

var G__27571 = (i__21324__auto___27570 + (1));
i__21324__auto___27570 = G__27571;
continue;
} else {
}
break;
}

var G__27568 = args27566.length;
switch (G__27568) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27566.length)].join('')));

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
var args27573 = [];
var len__21323__auto___27576 = arguments.length;
var i__21324__auto___27577 = (0);
while(true){
if((i__21324__auto___27577 < len__21323__auto___27576)){
args27573.push((arguments[i__21324__auto___27577]));

var G__27578 = (i__21324__auto___27577 + (1));
i__21324__auto___27577 = G__27578;
continue;
} else {
}
break;
}

var G__27575 = args27573.length;
switch (G__27575) {
case 1:
return phzr.group.reset_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.group.reset_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27573.length)].join('')));

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
var args27580 = [];
var len__21323__auto___27583 = arguments.length;
var i__21324__auto___27584 = (0);
while(true){
if((i__21324__auto___27584 < len__21323__auto___27583)){
args27580.push((arguments[i__21324__auto___27584]));

var G__27585 = (i__21324__auto___27584 + (1));
i__21324__auto___27584 = G__27585;
continue;
} else {
}
break;
}

var G__27582 = args27580.length;
switch (G__27582) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27580.length)].join('')));

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
var args27587 = [];
var len__21323__auto___27590 = arguments.length;
var i__21324__auto___27591 = (0);
while(true){
if((i__21324__auto___27591 < len__21323__auto___27590)){
args27587.push((arguments[i__21324__auto___27591]));

var G__27592 = (i__21324__auto___27591 + (1));
i__21324__auto___27591 = G__27592;
continue;
} else {
}
break;
}

var G__27589 = args27587.length;
switch (G__27589) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27587.length)].join('')));

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
var args27594 = [];
var len__21323__auto___27597 = arguments.length;
var i__21324__auto___27598 = (0);
while(true){
if((i__21324__auto___27598 < len__21323__auto___27597)){
args27594.push((arguments[i__21324__auto___27598]));

var G__27599 = (i__21324__auto___27598 + (1));
i__21324__auto___27598 = G__27599;
continue;
} else {
}
break;
}

var G__27596 = args27594.length;
switch (G__27596) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27594.length)].join('')));

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
var args27601 = [];
var len__21323__auto___27604 = arguments.length;
var i__21324__auto___27605 = (0);
while(true){
if((i__21324__auto___27605 < len__21323__auto___27604)){
args27601.push((arguments[i__21324__auto___27605]));

var G__27606 = (i__21324__auto___27605 + (1));
i__21324__auto___27605 = G__27606;
continue;
} else {
}
break;
}

var G__27603 = args27601.length;
switch (G__27603) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27601.length)].join('')));

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
var args27608 = [];
var len__21323__auto___27611 = arguments.length;
var i__21324__auto___27612 = (0);
while(true){
if((i__21324__auto___27612 < len__21323__auto___27611)){
args27608.push((arguments[i__21324__auto___27612]));

var G__27613 = (i__21324__auto___27612 + (1));
i__21324__auto___27612 = G__27613;
continue;
} else {
}
break;
}

var G__27610 = args27608.length;
switch (G__27610) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27608.length)].join('')));

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
var args27615 = [];
var len__21323__auto___27618 = arguments.length;
var i__21324__auto___27619 = (0);
while(true){
if((i__21324__auto___27619 < len__21323__auto___27618)){
args27615.push((arguments[i__21324__auto___27619]));

var G__27620 = (i__21324__auto___27619 + (1));
i__21324__auto___27619 = G__27620;
continue;
} else {
}
break;
}

var G__27617 = args27615.length;
switch (G__27617) {
case 2:
return phzr.group.to_local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.group.to_local.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27615.length)].join('')));

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
