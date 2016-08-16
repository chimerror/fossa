// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.point');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
/**
 * A Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.
 *   The following code creates a point at (0,0):
 *   `var myPoint = new Phaser.Point();`
 *   You can also use them as 2D Vectors and you'll find different vector related methods in this class.
 * 
 *   Parameters:
 *  * x (number) {optional} - The horizontal position of this Point.
 *  * y (number) {optional} - The vertical position of this Point.
 */
phzr.point.__GT_Point = (function phzr$point$__GT_Point(var_args){
var args27134 = [];
var len__21323__auto___27137 = arguments.length;
var i__21324__auto___27138 = (0);
while(true){
if((i__21324__auto___27138 < len__21323__auto___27137)){
args27134.push((arguments[i__21324__auto___27138]));

var G__27139 = (i__21324__auto___27138 + (1));
i__21324__auto___27138 = G__27139;
continue;
} else {
}
break;
}

var G__27136 = args27134.length;
switch (G__27136) {
case 0:
return phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27134.length)].join('')));

}
});

phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new Phaser.Point());
});

phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new Phaser.Point(phzr.impl.utils.core.clj__GT_phaser(x)));
});

phzr.point.__GT_Point.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (new Phaser.Point(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.point.__GT_Point.cljs$lang$maxFixedArity = 2;

/**
 * Adds the given x and y values to this Point.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The value to add to Point.x.
 *  * y (number) - The value to add to Point.y.
 * 
 *   Returns:  Phaser.Point - This Point object. Useful for chaining method calls.
 */
phzr.point.add = (function phzr$point$add(point,x,y){
return phzr.impl.utils.core.phaser__GT_clj(point.add(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});
/**
 * Adds the coordinates of two points together to create a new point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.add_ = (function phzr$point$add_(var_args){
var args27141 = [];
var len__21323__auto___27144 = arguments.length;
var i__21324__auto___27145 = (0);
while(true){
if((i__21324__auto___27145 < len__21323__auto___27144)){
args27141.push((arguments[i__21324__auto___27145]));

var G__27146 = (i__21324__auto___27145 + (1));
i__21324__auto___27145 = G__27146;
continue;
} else {
}
break;
}

var G__27143 = args27141.length;
switch (G__27143) {
case 2:
return phzr.point.add_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.add_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27141.length)].join('')));

}
});

phzr.point.add_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.add(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});

phzr.point.add_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.add(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.add_.cljs$lang$maxFixedArity = 3;

/**
 * Returns the angle between this Point object and another object with public x and y properties.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * a (Phaser.Point | any) - The object to get the angle from this Point to.
 *  * as-degrees (boolean) {optional} - Is the given angle in radians (false) or degrees (true)?
 * 
 *   Returns:  number - The angle between the two objects.
 */
phzr.point.angle = (function phzr$point$angle(var_args){
var args27148 = [];
var len__21323__auto___27151 = arguments.length;
var i__21324__auto___27152 = (0);
while(true){
if((i__21324__auto___27152 < len__21323__auto___27151)){
args27148.push((arguments[i__21324__auto___27152]));

var G__27153 = (i__21324__auto___27152 + (1));
i__21324__auto___27152 = G__27153;
continue;
} else {
}
break;
}

var G__27150 = args27148.length;
switch (G__27150) {
case 2:
return phzr.point.angle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.angle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27148.length)].join('')));

}
});

phzr.point.angle.cljs$core$IFn$_invoke$arity$2 = (function (point,a){
return phzr.impl.utils.core.phaser__GT_clj(point.angle(phzr.impl.utils.core.clj__GT_phaser(a)));
});

phzr.point.angle.cljs$core$IFn$_invoke$arity$3 = (function (point,a,as_degrees){
return phzr.impl.utils.core.phaser__GT_clj(point.angle(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(as_degrees)));
});

phzr.point.angle.cljs$lang$maxFixedArity = 3;

/**
 * Returns the angle between two Point objects.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 * 
 *   Returns:  number - The angle between the two Points.
 */
phzr.point.angle_ = (function phzr$point$angle_(a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.angle(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});
/**
 * Math.ceil() both the x and y properties of this Point.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.ceil = (function phzr$point$ceil(point){
return phzr.impl.utils.core.phaser__GT_clj(point.ceil());
});
/**
 * Calculates centroid (or midpoint) from an array of points. If only one point is provided, that point is returned.
 * 
 *   Parameters:
 *  * points (Array.<Phaser.Point>) - The array of one or more points.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.centroid_ = (function phzr$point$centroid_(var_args){
var args27155 = [];
var len__21323__auto___27158 = arguments.length;
var i__21324__auto___27159 = (0);
while(true){
if((i__21324__auto___27159 < len__21323__auto___27158)){
args27155.push((arguments[i__21324__auto___27159]));

var G__27160 = (i__21324__auto___27159 + (1));
i__21324__auto___27159 = G__27160;
continue;
} else {
}
break;
}

var G__27157 = args27155.length;
switch (G__27157) {
case 1:
return phzr.point.centroid_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.centroid_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27155.length)].join('')));

}
});

phzr.point.centroid_.cljs$core$IFn$_invoke$arity$1 = (function (points){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.centroid(phzr.impl.utils.core.clj__GT_phaser(points)));
});

phzr.point.centroid_.cljs$core$IFn$_invoke$arity$2 = (function (points,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.centroid(phzr.impl.utils.core.clj__GT_phaser(points),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.centroid_.cljs$lang$maxFixedArity = 2;

/**
 * Clamps this Point object values to be between the given min and max.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * min (number) - The minimum value to clamp this Point to.
 *  * max (number) - The maximum value to clamp this Point to.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.clamp = (function phzr$point$clamp(point,min,max){
return phzr.impl.utils.core.phaser__GT_clj(point.clamp(phzr.impl.utils.core.clj__GT_phaser(min),phzr.impl.utils.core.clj__GT_phaser(max)));
});
/**
 * Clamps the x value of this Point to be between the given min and max.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * min (number) - The minimum value to clamp this Point to.
 *  * max (number) - The maximum value to clamp this Point to.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.clamp_x = (function phzr$point$clamp_x(point,min,max){
return phzr.impl.utils.core.phaser__GT_clj(point.clampX(phzr.impl.utils.core.clj__GT_phaser(min),phzr.impl.utils.core.clj__GT_phaser(max)));
});
/**
 * Clamps the y value of this Point to be between the given min and max
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * min (number) - The minimum value to clamp this Point to.
 *  * max (number) - The maximum value to clamp this Point to.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.clamp_y = (function phzr$point$clamp_y(point,min,max){
return phzr.impl.utils.core.phaser__GT_clj(point.clampY(phzr.impl.utils.core.clj__GT_phaser(min),phzr.impl.utils.core.clj__GT_phaser(max)));
});
/**
 * Creates a copy of the given Point.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * output (Phaser.Point) {optional} - Optional Point object. If given the values will be set into this object, otherwise a brand new Point object will be created and returned.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.clone = (function phzr$point$clone(var_args){
var args27162 = [];
var len__21323__auto___27165 = arguments.length;
var i__21324__auto___27166 = (0);
while(true){
if((i__21324__auto___27166 < len__21323__auto___27165)){
args27162.push((arguments[i__21324__auto___27166]));

var G__27167 = (i__21324__auto___27166 + (1));
i__21324__auto___27166 = G__27167;
continue;
} else {
}
break;
}

var G__27164 = args27162.length;
switch (G__27164) {
case 1:
return phzr.point.clone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.clone.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27162.length)].join('')));

}
});

phzr.point.clone.cljs$core$IFn$_invoke$arity$1 = (function (point){
return phzr.impl.utils.core.phaser__GT_clj(point.clone());
});

phzr.point.clone.cljs$core$IFn$_invoke$arity$2 = (function (point,output){
return phzr.impl.utils.core.phaser__GT_clj(point.clone(phzr.impl.utils.core.clj__GT_phaser(output)));
});

phzr.point.clone.cljs$lang$maxFixedArity = 2;

/**
 * Copies the x and y properties from any given object to this Point.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * source (any) - The object to copy from.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.copy_from = (function phzr$point$copy_from(point,source){
return phzr.impl.utils.core.phaser__GT_clj(point.copyFrom(phzr.impl.utils.core.clj__GT_phaser(source)));
});
/**
 * Copies the x and y properties from this Point to any given object.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * dest (any) - The object to copy to.
 * 
 *   Returns:  object - The dest object.
 */
phzr.point.copy_to = (function phzr$point$copy_to(point,dest){
return phzr.impl.utils.core.phaser__GT_clj(point.copyTo(phzr.impl.utils.core.clj__GT_phaser(dest)));
});
/**
 * The cross product of this and another Point object.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * a (Phaser.Point) - The Point object to get the cross product combined with this Point.
 * 
 *   Returns:  number - The result.
 */
phzr.point.cross = (function phzr$point$cross(point,a){
return phzr.impl.utils.core.phaser__GT_clj(point.cross(phzr.impl.utils.core.clj__GT_phaser(a)));
});
/**
 * Returns the distance of this Point object to the given object (can be a Circle, Point or anything with x/y properties)
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * dest (object) - The target object. Must have visible x and y properties that represent the center of the object.
 *  * round (boolean) {optional} - Round the distance to the nearest integer (default false).
 * 
 *   Returns:  number - The distance between this Point object and the destination Point object.
 */
phzr.point.distance = (function phzr$point$distance(var_args){
var args27169 = [];
var len__21323__auto___27172 = arguments.length;
var i__21324__auto___27173 = (0);
while(true){
if((i__21324__auto___27173 < len__21323__auto___27172)){
args27169.push((arguments[i__21324__auto___27173]));

var G__27174 = (i__21324__auto___27173 + (1));
i__21324__auto___27173 = G__27174;
continue;
} else {
}
break;
}

var G__27171 = args27169.length;
switch (G__27171) {
case 2:
return phzr.point.distance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.distance.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27169.length)].join('')));

}
});

phzr.point.distance.cljs$core$IFn$_invoke$arity$2 = (function (point,dest){
return phzr.impl.utils.core.phaser__GT_clj(point.distance(phzr.impl.utils.core.clj__GT_phaser(dest)));
});

phzr.point.distance.cljs$core$IFn$_invoke$arity$3 = (function (point,dest,round){
return phzr.impl.utils.core.phaser__GT_clj(point.distance(phzr.impl.utils.core.clj__GT_phaser(dest),phzr.impl.utils.core.clj__GT_phaser(round)));
});

phzr.point.distance.cljs$lang$maxFixedArity = 3;

/**
 * Returns the euclidian distance of this Point object to the given object (can be a Circle, Point or anything with x/y properties).
 * 
 *   Parameters:
 *  * a (object) - The target object. Must have visible x and y properties that represent the center of the object.
 *  * b (object) - The target object. Must have visible x and y properties that represent the center of the object.
 *  * round (boolean) {optional} - Round the distance to the nearest integer.
 * 
 *   Returns:  number - The distance between this Point object and the destination Point object.
 */
phzr.point.distance_ = (function phzr$point$distance_(var_args){
var args27176 = [];
var len__21323__auto___27179 = arguments.length;
var i__21324__auto___27180 = (0);
while(true){
if((i__21324__auto___27180 < len__21323__auto___27179)){
args27176.push((arguments[i__21324__auto___27180]));

var G__27181 = (i__21324__auto___27180 + (1));
i__21324__auto___27180 = G__27181;
continue;
} else {
}
break;
}

var G__27178 = args27176.length;
switch (G__27178) {
case 2:
return phzr.point.distance_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.distance_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27176.length)].join('')));

}
});

phzr.point.distance_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.distance(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});

phzr.point.distance_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,round){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.distance(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(round)));
});

phzr.point.distance_.cljs$lang$maxFixedArity = 3;

/**
 * Divides Point.x and Point.y by the given x and y values.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The value to divide Point.x by.
 *  * y (number) - The value to divide Point.x by.
 * 
 *   Returns:  Phaser.Point - This Point object. Useful for chaining method calls.
 */
phzr.point.divide = (function phzr$point$divide(point,x,y){
return phzr.impl.utils.core.phaser__GT_clj(point.divide(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});
/**
 * Divides the coordinates of two points to create a new point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.divide_ = (function phzr$point$divide_(var_args){
var args27183 = [];
var len__21323__auto___27186 = arguments.length;
var i__21324__auto___27187 = (0);
while(true){
if((i__21324__auto___27187 < len__21323__auto___27186)){
args27183.push((arguments[i__21324__auto___27187]));

var G__27188 = (i__21324__auto___27187 + (1));
i__21324__auto___27187 = G__27188;
continue;
} else {
}
break;
}

var G__27185 = args27183.length;
switch (G__27185) {
case 2:
return phzr.point.divide_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.divide_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27183.length)].join('')));

}
});

phzr.point.divide_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.divide(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});

phzr.point.divide_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.divide(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.divide_.cljs$lang$maxFixedArity = 3;

/**
 * The dot product of this and another Point object.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * a (Phaser.Point) - The Point object to get the dot product combined with this Point.
 * 
 *   Returns:  number - The result.
 */
phzr.point.dot = (function phzr$point$dot(point,a){
return phzr.impl.utils.core.phaser__GT_clj(point.dot(phzr.impl.utils.core.clj__GT_phaser(a)));
});
/**
 * Determines whether the given objects x/y values are equal to this Point object.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * a (Phaser.Point | any) - The object to compare with this Point.
 * 
 *   Returns:  boolean - A value of true if the x and y points are equal, otherwise false.
 */
phzr.point.equals = (function phzr$point$equals(point,a){
return phzr.impl.utils.core.phaser__GT_clj(point.equals(phzr.impl.utils.core.clj__GT_phaser(a)));
});
/**
 * Determines whether the two given Point objects are equal. They are considered equal if they have the same x and y values.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 * 
 *   Returns:  boolean - A value of true if the Points are equal, otherwise false.
 */
phzr.point.equals_ = (function phzr$point$equals_(a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.equals(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});
/**
 * Math.floor() both the x and y properties of this Point.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.floor = (function phzr$point$floor(point){
return phzr.impl.utils.core.phaser__GT_clj(point.floor());
});
/**
 * Calculates the length of the Point object.
 * 
 *   Returns:  number - The length of the Point.
 */
phzr.point.get_magnitude = (function phzr$point$get_magnitude(point){
return phzr.impl.utils.core.phaser__GT_clj(point.getMagnitude());
});
/**
 * Calculates the length squared of the Point object.
 * 
 *   Returns:  number - The length ^ 2 of the Point.
 */
phzr.point.get_magnitude_sq = (function phzr$point$get_magnitude_sq(point){
return phzr.impl.utils.core.phaser__GT_clj(point.getMagnitudeSq());
});
/**
 * Interpolates the two given Points, based on the `f` value (between 0 and 1) and returns a new Point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * f (number) - The level of interpolation between the two points. Indicates where the new point will be, along the line between pt1 and pt2. If f=1, pt1 is returned; if f=0, pt2 is returned.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.interpolate_ = (function phzr$point$interpolate_(var_args){
var args27190 = [];
var len__21323__auto___27193 = arguments.length;
var i__21324__auto___27194 = (0);
while(true){
if((i__21324__auto___27194 < len__21323__auto___27193)){
args27190.push((arguments[i__21324__auto___27194]));

var G__27195 = (i__21324__auto___27194 + (1));
i__21324__auto___27194 = G__27195;
continue;
} else {
}
break;
}

var G__27192 = args27190.length;
switch (G__27192) {
case 3:
return phzr.point.interpolate_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.point.interpolate_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27190.length)].join('')));

}
});

phzr.point.interpolate_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,f){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.interpolate(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(f)));
});

phzr.point.interpolate_.cljs$core$IFn$_invoke$arity$4 = (function (a,b,f,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.interpolate(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(f),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.interpolate_.cljs$lang$maxFixedArity = 4;

/**
 * Inverts the x and y values of this Point
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.invert = (function phzr$point$invert(point){
return phzr.impl.utils.core.phaser__GT_clj(point.invert());
});
/**
 * Determine if this point is at 0,0.
 * 
 *   Returns:  boolean - True if this Point is 0,0, otherwise false.
 */
phzr.point.is_zero = (function phzr$point$is_zero(point){
return phzr.impl.utils.core.phaser__GT_clj(point.isZero());
});
/**
 * Multiplies Point.x and Point.y by the given x and y values. Sometimes known as `Scale`.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The value to multiply Point.x by.
 *  * y (number) - The value to multiply Point.x by.
 * 
 *   Returns:  Phaser.Point - This Point object. Useful for chaining method calls.
 */
phzr.point.multiply = (function phzr$point$multiply(point,x,y){
return phzr.impl.utils.core.phaser__GT_clj(point.multiply(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});
/**
 * Multiplies the coordinates of two points to create a new point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.multiply_ = (function phzr$point$multiply_(var_args){
var args27197 = [];
var len__21323__auto___27200 = arguments.length;
var i__21324__auto___27201 = (0);
while(true){
if((i__21324__auto___27201 < len__21323__auto___27200)){
args27197.push((arguments[i__21324__auto___27201]));

var G__27202 = (i__21324__auto___27201 + (1));
i__21324__auto___27201 = G__27202;
continue;
} else {
}
break;
}

var G__27199 = args27197.length;
switch (G__27199) {
case 2:
return phzr.point.multiply_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.multiply_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27197.length)].join('')));

}
});

phzr.point.multiply_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.multiply(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});

phzr.point.multiply_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.multiply(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.multiply_.cljs$lang$maxFixedArity = 3;

/**
 * Adds two 2D Points together and multiplies the result by the given scalar.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * s (number) - The scaling value.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.multiply_add_ = (function phzr$point$multiply_add_(var_args){
var args27204 = [];
var len__21323__auto___27207 = arguments.length;
var i__21324__auto___27208 = (0);
while(true){
if((i__21324__auto___27208 < len__21323__auto___27207)){
args27204.push((arguments[i__21324__auto___27208]));

var G__27209 = (i__21324__auto___27208 + (1));
i__21324__auto___27208 = G__27209;
continue;
} else {
}
break;
}

var G__27206 = args27204.length;
switch (G__27206) {
case 3:
return phzr.point.multiply_add_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.point.multiply_add_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27204.length)].join('')));

}
});

phzr.point.multiply_add_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,s){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.multiplyAdd(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(s)));
});

phzr.point.multiply_add_.cljs$core$IFn$_invoke$arity$4 = (function (a,b,s,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.multiplyAdd(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(s),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.multiply_add_.cljs$lang$maxFixedArity = 4;

/**
 * Creates a negative Point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.negative_ = (function phzr$point$negative_(var_args){
var args27211 = [];
var len__21323__auto___27214 = arguments.length;
var i__21324__auto___27215 = (0);
while(true){
if((i__21324__auto___27215 < len__21323__auto___27214)){
args27211.push((arguments[i__21324__auto___27215]));

var G__27216 = (i__21324__auto___27215 + (1));
i__21324__auto___27215 = G__27216;
continue;
} else {
}
break;
}

var G__27213 = args27211.length;
switch (G__27213) {
case 1:
return phzr.point.negative_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.negative_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27211.length)].join('')));

}
});

phzr.point.negative_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.negative(phzr.impl.utils.core.clj__GT_phaser(a)));
});

phzr.point.negative_.cljs$core$IFn$_invoke$arity$2 = (function (a,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.negative(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.negative_.cljs$lang$maxFixedArity = 2;

/**
 * Right-hand normalize (make unit length) this Point.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.normal_right_hand = (function phzr$point$normal_right_hand(point){
return phzr.impl.utils.core.phaser__GT_clj(point.normalRightHand());
});
/**
 * Right-hand normalize (make unit length) a Point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.normal_right_hand_ = (function phzr$point$normal_right_hand_(var_args){
var args27218 = [];
var len__21323__auto___27221 = arguments.length;
var i__21324__auto___27222 = (0);
while(true){
if((i__21324__auto___27222 < len__21323__auto___27221)){
args27218.push((arguments[i__21324__auto___27222]));

var G__27223 = (i__21324__auto___27222 + (1));
i__21324__auto___27222 = G__27223;
continue;
} else {
}
break;
}

var G__27220 = args27218.length;
switch (G__27220) {
case 1:
return phzr.point.normal_right_hand_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.normal_right_hand_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27218.length)].join('')));

}
});

phzr.point.normal_right_hand_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.normalRightHand(phzr.impl.utils.core.clj__GT_phaser(a)));
});

phzr.point.normal_right_hand_.cljs$core$IFn$_invoke$arity$2 = (function (a,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.normalRightHand(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.normal_right_hand_.cljs$lang$maxFixedArity = 2;

/**
 * Alters the Point object so that its length is 1, but it retains the same direction.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.normalize = (function phzr$point$normalize(point){
return phzr.impl.utils.core.phaser__GT_clj(point.normalize());
});
/**
 * Normalize (make unit length) a Point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.normalize_ = (function phzr$point$normalize_(var_args){
var args27225 = [];
var len__21323__auto___27228 = arguments.length;
var i__21324__auto___27229 = (0);
while(true){
if((i__21324__auto___27229 < len__21323__auto___27228)){
args27225.push((arguments[i__21324__auto___27229]));

var G__27230 = (i__21324__auto___27229 + (1));
i__21324__auto___27229 = G__27230;
continue;
} else {
}
break;
}

var G__27227 = args27225.length;
switch (G__27227) {
case 1:
return phzr.point.normalize_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.normalize_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27225.length)].join('')));

}
});

phzr.point.normalize_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.normalize(phzr.impl.utils.core.clj__GT_phaser(a)));
});

phzr.point.normalize_.cljs$core$IFn$_invoke$arity$2 = (function (a,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.normalize(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.normalize_.cljs$lang$maxFixedArity = 2;

/**
 * Parses an object for x and/or y properties and returns a new Phaser.Point with matching values.
 *   If the object doesn't contain those properties a Point with x/y of zero will be returned.
 * 
 *   Parameters:
 *  * obj (object) - The object to parse.
 *  * x-prop (string) {optional} - The property used to set the Point.x value.
 *  * y-prop (string) {optional} - The property used to set the Point.y value.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.parse_ = (function phzr$point$parse_(var_args){
var args27232 = [];
var len__21323__auto___27235 = arguments.length;
var i__21324__auto___27236 = (0);
while(true){
if((i__21324__auto___27236 < len__21323__auto___27235)){
args27232.push((arguments[i__21324__auto___27236]));

var G__27237 = (i__21324__auto___27236 + (1));
i__21324__auto___27236 = G__27237;
continue;
} else {
}
break;
}

var G__27234 = args27232.length;
switch (G__27234) {
case 1:
return phzr.point.parse_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.parse_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.parse_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27232.length)].join('')));

}
});

phzr.point.parse_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.parse(phzr.impl.utils.core.clj__GT_phaser(obj)));
});

phzr.point.parse_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x_prop){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.parse(phzr.impl.utils.core.clj__GT_phaser(obj),phzr.impl.utils.core.clj__GT_phaser(x_prop)));
});

phzr.point.parse_.cljs$core$IFn$_invoke$arity$3 = (function (obj,x_prop,y_prop){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.parse(phzr.impl.utils.core.clj__GT_phaser(obj),phzr.impl.utils.core.clj__GT_phaser(x_prop),phzr.impl.utils.core.clj__GT_phaser(y_prop)));
});

phzr.point.parse_.cljs$lang$maxFixedArity = 3;

/**
 * Make this Point perpendicular (90 degrees rotation)
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.perp = (function phzr$point$perp(point){
return phzr.impl.utils.core.phaser__GT_clj(point.perp());
});
/**
 * Return a perpendicular vector (90 degrees rotation)
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.perp_ = (function phzr$point$perp_(var_args){
var args27239 = [];
var len__21323__auto___27242 = arguments.length;
var i__21324__auto___27243 = (0);
while(true){
if((i__21324__auto___27243 < len__21323__auto___27242)){
args27239.push((arguments[i__21324__auto___27243]));

var G__27244 = (i__21324__auto___27243 + (1));
i__21324__auto___27243 = G__27244;
continue;
} else {
}
break;
}

var G__27241 = args27239.length;
switch (G__27241) {
case 1:
return phzr.point.perp_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.perp_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27239.length)].join('')));

}
});

phzr.point.perp_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.perp(phzr.impl.utils.core.clj__GT_phaser(a)));
});

phzr.point.perp_.cljs$core$IFn$_invoke$arity$2 = (function (a,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.perp(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.perp_.cljs$lang$maxFixedArity = 2;

/**
 * Project two Points onto another Point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.project_ = (function phzr$point$project_(var_args){
var args27246 = [];
var len__21323__auto___27249 = arguments.length;
var i__21324__auto___27250 = (0);
while(true){
if((i__21324__auto___27250 < len__21323__auto___27249)){
args27246.push((arguments[i__21324__auto___27250]));

var G__27251 = (i__21324__auto___27250 + (1));
i__21324__auto___27250 = G__27251;
continue;
} else {
}
break;
}

var G__27248 = args27246.length;
switch (G__27248) {
case 2:
return phzr.point.project_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.project_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27246.length)].join('')));

}
});

phzr.point.project_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.project(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});

phzr.point.project_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.project(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.project_.cljs$lang$maxFixedArity = 3;

/**
 * Project two Points onto a Point of unit length.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.project_unit_ = (function phzr$point$project_unit_(var_args){
var args27253 = [];
var len__21323__auto___27256 = arguments.length;
var i__21324__auto___27257 = (0);
while(true){
if((i__21324__auto___27257 < len__21323__auto___27256)){
args27253.push((arguments[i__21324__auto___27257]));

var G__27258 = (i__21324__auto___27257 + (1));
i__21324__auto___27257 = G__27258;
continue;
} else {
}
break;
}

var G__27255 = args27253.length;
switch (G__27255) {
case 2:
return phzr.point.project_unit_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.project_unit_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27253.length)].join('')));

}
});

phzr.point.project_unit_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.projectUnit(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});

phzr.point.project_unit_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.projectUnit(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.project_unit_.cljs$lang$maxFixedArity = 3;

/**
 * Rotates this Point around the x/y coordinates given to the desired angle.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The x coordinate of the anchor point.
 *  * y (number) - The y coordinate of the anchor point.
 *  * angle (number) - The angle in radians (unless asDegrees is true) to rotate the Point to.
 *  * as-degrees (boolean) {optional} - Is the given angle in radians (false) or degrees (true)?
 *  * distance (number) {optional} - An optional distance constraint between the Point and the anchor.
 * 
 *   Returns:  Phaser.Point - The modified point object.
 */
phzr.point.rotate = (function phzr$point$rotate(var_args){
var args27260 = [];
var len__21323__auto___27263 = arguments.length;
var i__21324__auto___27264 = (0);
while(true){
if((i__21324__auto___27264 < len__21323__auto___27263)){
args27260.push((arguments[i__21324__auto___27264]));

var G__27265 = (i__21324__auto___27264 + (1));
i__21324__auto___27264 = G__27265;
continue;
} else {
}
break;
}

var G__27262 = args27260.length;
switch (G__27262) {
case 4:
return phzr.point.rotate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.point.rotate.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.point.rotate.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27260.length)].join('')));

}
});

phzr.point.rotate.cljs$core$IFn$_invoke$arity$4 = (function (point,x,y,angle){
return phzr.impl.utils.core.phaser__GT_clj(point.rotate(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(angle)));
});

phzr.point.rotate.cljs$core$IFn$_invoke$arity$5 = (function (point,x,y,angle,as_degrees){
return phzr.impl.utils.core.phaser__GT_clj(point.rotate(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(angle),phzr.impl.utils.core.clj__GT_phaser(as_degrees)));
});

phzr.point.rotate.cljs$core$IFn$_invoke$arity$6 = (function (point,x,y,angle,as_degrees,distance){
return phzr.impl.utils.core.phaser__GT_clj(point.rotate(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(angle),phzr.impl.utils.core.clj__GT_phaser(as_degrees),phzr.impl.utils.core.clj__GT_phaser(distance)));
});

phzr.point.rotate.cljs$lang$maxFixedArity = 6;

/**
 * Rotates a Point object, or any object with exposed x/y properties, around the given coordinates by
 *   the angle specified. If the angle between the point and coordinates was 45 deg and the angle argument
 *   is 45 deg then the resulting angle will be 90 deg, as the angle argument is added to the current angle.
 * 
 *   The distance allows you to specify a distance constraint for the rotation between the point and the 
 *   coordinates. If none is given the distance between the two is calculated and used.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The Point object to rotate.
 *  * x (number) - The x coordinate of the anchor point
 *  * y (number) - The y coordinate of the anchor point
 *  * angle (number) - The angle in radians (unless asDegrees is true) to rotate the Point by.
 *  * as-degrees (boolean) {optional} - Is the given angle in radians (false) or degrees (true)?
 *  * distance (number) {optional} - An optional distance constraint between the Point and the anchor.
 * 
 *   Returns:  Phaser.Point - The modified point object.
 */
phzr.point.rotate_ = (function phzr$point$rotate_(var_args){
var args27267 = [];
var len__21323__auto___27270 = arguments.length;
var i__21324__auto___27271 = (0);
while(true){
if((i__21324__auto___27271 < len__21323__auto___27270)){
args27267.push((arguments[i__21324__auto___27271]));

var G__27272 = (i__21324__auto___27271 + (1));
i__21324__auto___27271 = G__27272;
continue;
} else {
}
break;
}

var G__27269 = args27267.length;
switch (G__27269) {
case 4:
return phzr.point.rotate_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.point.rotate_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.point.rotate_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27267.length)].join('')));

}
});

phzr.point.rotate_.cljs$core$IFn$_invoke$arity$4 = (function (a,x,y,angle){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.rotate(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(angle)));
});

phzr.point.rotate_.cljs$core$IFn$_invoke$arity$5 = (function (a,x,y,angle,as_degrees){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.rotate(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(angle),phzr.impl.utils.core.clj__GT_phaser(as_degrees)));
});

phzr.point.rotate_.cljs$core$IFn$_invoke$arity$6 = (function (a,x,y,angle,as_degrees,distance){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.rotate(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y),phzr.impl.utils.core.clj__GT_phaser(angle),phzr.impl.utils.core.clj__GT_phaser(as_degrees),phzr.impl.utils.core.clj__GT_phaser(distance)));
});

phzr.point.rotate_.cljs$lang$maxFixedArity = 6;

/**
 * Make this Point perpendicular (-90 degrees rotation)
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.rperp = (function phzr$point$rperp(point){
return phzr.impl.utils.core.phaser__GT_clj(point.rperp());
});
/**
 * Return a perpendicular vector (-90 degrees rotation)
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.rperp_ = (function phzr$point$rperp_(var_args){
var args27274 = [];
var len__21323__auto___27277 = arguments.length;
var i__21324__auto___27278 = (0);
while(true){
if((i__21324__auto___27278 < len__21323__auto___27277)){
args27274.push((arguments[i__21324__auto___27278]));

var G__27279 = (i__21324__auto___27278 + (1));
i__21324__auto___27278 = G__27279;
continue;
} else {
}
break;
}

var G__27276 = args27274.length;
switch (G__27276) {
case 1:
return phzr.point.rperp_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.rperp_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27274.length)].join('')));

}
});

phzr.point.rperp_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.rperp(phzr.impl.utils.core.clj__GT_phaser(a)));
});

phzr.point.rperp_.cljs$core$IFn$_invoke$arity$2 = (function (a,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.rperp(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.rperp_.cljs$lang$maxFixedArity = 2;

/**
 * Sets the `x` and `y` values of this Point object to the given values.
 *   If you omit the `y` value then the `x` value will be applied to both, for example:
 *   `Point.set(2)` is the same as `Point.set(2, 2)`
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The horizontal value of this point.
 *  * y (number) {optional} - The vertical value of this point. If not given the x value will be used in its place.
 * 
 *   Returns:  Phaser.Point - This Point object. Useful for chaining method calls.
 */
phzr.point.set = (function phzr$point$set(var_args){
var args27281 = [];
var len__21323__auto___27284 = arguments.length;
var i__21324__auto___27285 = (0);
while(true){
if((i__21324__auto___27285 < len__21323__auto___27284)){
args27281.push((arguments[i__21324__auto___27285]));

var G__27286 = (i__21324__auto___27285 + (1));
i__21324__auto___27285 = G__27286;
continue;
} else {
}
break;
}

var G__27283 = args27281.length;
switch (G__27283) {
case 2:
return phzr.point.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27281.length)].join('')));

}
});

phzr.point.set.cljs$core$IFn$_invoke$arity$2 = (function (point,x){
return phzr.impl.utils.core.phaser__GT_clj(point.set(phzr.impl.utils.core.clj__GT_phaser(x)));
});

phzr.point.set.cljs$core$IFn$_invoke$arity$3 = (function (point,x,y){
return phzr.impl.utils.core.phaser__GT_clj(point.set(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.point.set.cljs$lang$maxFixedArity = 3;

/**
 * Alters the length of the Point without changing the direction.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * magnitude (number) - The desired magnitude of the resulting Point.
 * 
 *   Returns:  Phaser.Point - This Point object.
 */
phzr.point.set_magnitude = (function phzr$point$set_magnitude(point,magnitude){
return phzr.impl.utils.core.phaser__GT_clj(point.setMagnitude(phzr.impl.utils.core.clj__GT_phaser(magnitude)));
});
/**
 * Sets the `x` and `y` values of this Point object to the given values.
 *   If you omit the `y` value then the `x` value will be applied to both, for example:
 *   `Point.setTo(2)` is the same as `Point.setTo(2, 2)`
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The horizontal value of this point.
 *  * y (number) {optional} - The vertical value of this point. If not given the x value will be used in its place.
 * 
 *   Returns:  Phaser.Point - This Point object. Useful for chaining method calls.
 */
phzr.point.set_to = (function phzr$point$set_to(var_args){
var args27288 = [];
var len__21323__auto___27291 = arguments.length;
var i__21324__auto___27292 = (0);
while(true){
if((i__21324__auto___27292 < len__21323__auto___27291)){
args27288.push((arguments[i__21324__auto___27292]));

var G__27293 = (i__21324__auto___27292 + (1));
i__21324__auto___27292 = G__27293;
continue;
} else {
}
break;
}

var G__27290 = args27288.length;
switch (G__27290) {
case 2:
return phzr.point.set_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.set_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27288.length)].join('')));

}
});

phzr.point.set_to.cljs$core$IFn$_invoke$arity$2 = (function (point,x){
return phzr.impl.utils.core.phaser__GT_clj(point.setTo(phzr.impl.utils.core.clj__GT_phaser(x)));
});

phzr.point.set_to.cljs$core$IFn$_invoke$arity$3 = (function (point,x,y){
return phzr.impl.utils.core.phaser__GT_clj(point.setTo(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});

phzr.point.set_to.cljs$lang$maxFixedArity = 3;

/**
 * Subtracts the given x and y values from this Point.
 * 
 *   Parameters:
 *  * point (Phaser.Point) - Targeted instance for method
 *  * x (number) - The value to subtract from Point.x.
 *  * y (number) - The value to subtract from Point.y.
 * 
 *   Returns:  Phaser.Point - This Point object. Useful for chaining method calls.
 */
phzr.point.subtract = (function phzr$point$subtract(point,x,y){
return phzr.impl.utils.core.phaser__GT_clj(point.subtract(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(y)));
});
/**
 * Subtracts the coordinates of two points to create a new point.
 * 
 *   Parameters:
 *  * a (Phaser.Point) - The first Point object.
 *  * b (Phaser.Point) - The second Point object.
 *  * out (Phaser.Point) {optional} - Optional Point to store the value in, if not supplied a new Point object will be created.
 * 
 *   Returns:  Phaser.Point - The new Point object.
 */
phzr.point.subtract_ = (function phzr$point$subtract_(var_args){
var args27295 = [];
var len__21323__auto___27298 = arguments.length;
var i__21324__auto___27299 = (0);
while(true){
if((i__21324__auto___27299 < len__21323__auto___27298)){
args27295.push((arguments[i__21324__auto___27299]));

var G__27300 = (i__21324__auto___27299 + (1));
i__21324__auto___27299 = G__27300;
continue;
} else {
}
break;
}

var G__27297 = args27295.length;
switch (G__27297) {
case 2:
return phzr.point.subtract_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.subtract_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27295.length)].join('')));

}
});

phzr.point.subtract_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.subtract(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});

phzr.point.subtract_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,out){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Point.subtract(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(out)));
});

phzr.point.subtract_.cljs$lang$maxFixedArity = 3;

/**
 * Returns a string representation of this object.
 * 
 *   Returns:  string - A string representation of the instance.
 */
phzr.point.to_string = (function phzr$point$to_string(point){
return phzr.impl.utils.core.phaser__GT_clj(point.toString());
});
