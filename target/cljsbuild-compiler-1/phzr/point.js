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
var args27150 = [];
var len__21323__auto___27153 = arguments.length;
var i__21324__auto___27154 = (0);
while(true){
if((i__21324__auto___27154 < len__21323__auto___27153)){
args27150.push((arguments[i__21324__auto___27154]));

var G__27155 = (i__21324__auto___27154 + (1));
i__21324__auto___27154 = G__27155;
continue;
} else {
}
break;
}

var G__27152 = args27150.length;
switch (G__27152) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27150.length)].join('')));

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
var args27157 = [];
var len__21323__auto___27160 = arguments.length;
var i__21324__auto___27161 = (0);
while(true){
if((i__21324__auto___27161 < len__21323__auto___27160)){
args27157.push((arguments[i__21324__auto___27161]));

var G__27162 = (i__21324__auto___27161 + (1));
i__21324__auto___27161 = G__27162;
continue;
} else {
}
break;
}

var G__27159 = args27157.length;
switch (G__27159) {
case 2:
return phzr.point.add_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.add_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27157.length)].join('')));

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
var args27164 = [];
var len__21323__auto___27167 = arguments.length;
var i__21324__auto___27168 = (0);
while(true){
if((i__21324__auto___27168 < len__21323__auto___27167)){
args27164.push((arguments[i__21324__auto___27168]));

var G__27169 = (i__21324__auto___27168 + (1));
i__21324__auto___27168 = G__27169;
continue;
} else {
}
break;
}

var G__27166 = args27164.length;
switch (G__27166) {
case 2:
return phzr.point.angle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.angle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27164.length)].join('')));

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
var args27171 = [];
var len__21323__auto___27174 = arguments.length;
var i__21324__auto___27175 = (0);
while(true){
if((i__21324__auto___27175 < len__21323__auto___27174)){
args27171.push((arguments[i__21324__auto___27175]));

var G__27176 = (i__21324__auto___27175 + (1));
i__21324__auto___27175 = G__27176;
continue;
} else {
}
break;
}

var G__27173 = args27171.length;
switch (G__27173) {
case 1:
return phzr.point.centroid_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.centroid_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27171.length)].join('')));

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
var args27178 = [];
var len__21323__auto___27181 = arguments.length;
var i__21324__auto___27182 = (0);
while(true){
if((i__21324__auto___27182 < len__21323__auto___27181)){
args27178.push((arguments[i__21324__auto___27182]));

var G__27183 = (i__21324__auto___27182 + (1));
i__21324__auto___27182 = G__27183;
continue;
} else {
}
break;
}

var G__27180 = args27178.length;
switch (G__27180) {
case 1:
return phzr.point.clone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.clone.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27178.length)].join('')));

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
var args27185 = [];
var len__21323__auto___27188 = arguments.length;
var i__21324__auto___27189 = (0);
while(true){
if((i__21324__auto___27189 < len__21323__auto___27188)){
args27185.push((arguments[i__21324__auto___27189]));

var G__27190 = (i__21324__auto___27189 + (1));
i__21324__auto___27189 = G__27190;
continue;
} else {
}
break;
}

var G__27187 = args27185.length;
switch (G__27187) {
case 2:
return phzr.point.distance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.distance.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27185.length)].join('')));

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
var args27192 = [];
var len__21323__auto___27195 = arguments.length;
var i__21324__auto___27196 = (0);
while(true){
if((i__21324__auto___27196 < len__21323__auto___27195)){
args27192.push((arguments[i__21324__auto___27196]));

var G__27197 = (i__21324__auto___27196 + (1));
i__21324__auto___27196 = G__27197;
continue;
} else {
}
break;
}

var G__27194 = args27192.length;
switch (G__27194) {
case 2:
return phzr.point.distance_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.distance_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27192.length)].join('')));

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
var args27199 = [];
var len__21323__auto___27202 = arguments.length;
var i__21324__auto___27203 = (0);
while(true){
if((i__21324__auto___27203 < len__21323__auto___27202)){
args27199.push((arguments[i__21324__auto___27203]));

var G__27204 = (i__21324__auto___27203 + (1));
i__21324__auto___27203 = G__27204;
continue;
} else {
}
break;
}

var G__27201 = args27199.length;
switch (G__27201) {
case 2:
return phzr.point.divide_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.divide_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27199.length)].join('')));

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
var args27206 = [];
var len__21323__auto___27209 = arguments.length;
var i__21324__auto___27210 = (0);
while(true){
if((i__21324__auto___27210 < len__21323__auto___27209)){
args27206.push((arguments[i__21324__auto___27210]));

var G__27211 = (i__21324__auto___27210 + (1));
i__21324__auto___27210 = G__27211;
continue;
} else {
}
break;
}

var G__27208 = args27206.length;
switch (G__27208) {
case 3:
return phzr.point.interpolate_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.point.interpolate_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27206.length)].join('')));

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
var args27213 = [];
var len__21323__auto___27216 = arguments.length;
var i__21324__auto___27217 = (0);
while(true){
if((i__21324__auto___27217 < len__21323__auto___27216)){
args27213.push((arguments[i__21324__auto___27217]));

var G__27218 = (i__21324__auto___27217 + (1));
i__21324__auto___27217 = G__27218;
continue;
} else {
}
break;
}

var G__27215 = args27213.length;
switch (G__27215) {
case 2:
return phzr.point.multiply_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.multiply_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27213.length)].join('')));

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
var args27220 = [];
var len__21323__auto___27223 = arguments.length;
var i__21324__auto___27224 = (0);
while(true){
if((i__21324__auto___27224 < len__21323__auto___27223)){
args27220.push((arguments[i__21324__auto___27224]));

var G__27225 = (i__21324__auto___27224 + (1));
i__21324__auto___27224 = G__27225;
continue;
} else {
}
break;
}

var G__27222 = args27220.length;
switch (G__27222) {
case 3:
return phzr.point.multiply_add_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.point.multiply_add_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27220.length)].join('')));

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
var args27227 = [];
var len__21323__auto___27230 = arguments.length;
var i__21324__auto___27231 = (0);
while(true){
if((i__21324__auto___27231 < len__21323__auto___27230)){
args27227.push((arguments[i__21324__auto___27231]));

var G__27232 = (i__21324__auto___27231 + (1));
i__21324__auto___27231 = G__27232;
continue;
} else {
}
break;
}

var G__27229 = args27227.length;
switch (G__27229) {
case 1:
return phzr.point.negative_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.negative_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27227.length)].join('')));

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
var args27234 = [];
var len__21323__auto___27237 = arguments.length;
var i__21324__auto___27238 = (0);
while(true){
if((i__21324__auto___27238 < len__21323__auto___27237)){
args27234.push((arguments[i__21324__auto___27238]));

var G__27239 = (i__21324__auto___27238 + (1));
i__21324__auto___27238 = G__27239;
continue;
} else {
}
break;
}

var G__27236 = args27234.length;
switch (G__27236) {
case 1:
return phzr.point.normal_right_hand_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.normal_right_hand_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27234.length)].join('')));

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
var args27241 = [];
var len__21323__auto___27244 = arguments.length;
var i__21324__auto___27245 = (0);
while(true){
if((i__21324__auto___27245 < len__21323__auto___27244)){
args27241.push((arguments[i__21324__auto___27245]));

var G__27246 = (i__21324__auto___27245 + (1));
i__21324__auto___27245 = G__27246;
continue;
} else {
}
break;
}

var G__27243 = args27241.length;
switch (G__27243) {
case 1:
return phzr.point.normalize_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.normalize_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27241.length)].join('')));

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
var args27248 = [];
var len__21323__auto___27251 = arguments.length;
var i__21324__auto___27252 = (0);
while(true){
if((i__21324__auto___27252 < len__21323__auto___27251)){
args27248.push((arguments[i__21324__auto___27252]));

var G__27253 = (i__21324__auto___27252 + (1));
i__21324__auto___27252 = G__27253;
continue;
} else {
}
break;
}

var G__27250 = args27248.length;
switch (G__27250) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27248.length)].join('')));

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
var args27255 = [];
var len__21323__auto___27258 = arguments.length;
var i__21324__auto___27259 = (0);
while(true){
if((i__21324__auto___27259 < len__21323__auto___27258)){
args27255.push((arguments[i__21324__auto___27259]));

var G__27260 = (i__21324__auto___27259 + (1));
i__21324__auto___27259 = G__27260;
continue;
} else {
}
break;
}

var G__27257 = args27255.length;
switch (G__27257) {
case 1:
return phzr.point.perp_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.perp_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27255.length)].join('')));

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
var args27262 = [];
var len__21323__auto___27265 = arguments.length;
var i__21324__auto___27266 = (0);
while(true){
if((i__21324__auto___27266 < len__21323__auto___27265)){
args27262.push((arguments[i__21324__auto___27266]));

var G__27267 = (i__21324__auto___27266 + (1));
i__21324__auto___27266 = G__27267;
continue;
} else {
}
break;
}

var G__27264 = args27262.length;
switch (G__27264) {
case 2:
return phzr.point.project_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.project_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27262.length)].join('')));

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
var args27269 = [];
var len__21323__auto___27272 = arguments.length;
var i__21324__auto___27273 = (0);
while(true){
if((i__21324__auto___27273 < len__21323__auto___27272)){
args27269.push((arguments[i__21324__auto___27273]));

var G__27274 = (i__21324__auto___27273 + (1));
i__21324__auto___27273 = G__27274;
continue;
} else {
}
break;
}

var G__27271 = args27269.length;
switch (G__27271) {
case 2:
return phzr.point.project_unit_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.project_unit_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27269.length)].join('')));

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
var args27276 = [];
var len__21323__auto___27279 = arguments.length;
var i__21324__auto___27280 = (0);
while(true){
if((i__21324__auto___27280 < len__21323__auto___27279)){
args27276.push((arguments[i__21324__auto___27280]));

var G__27281 = (i__21324__auto___27280 + (1));
i__21324__auto___27280 = G__27281;
continue;
} else {
}
break;
}

var G__27278 = args27276.length;
switch (G__27278) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27276.length)].join('')));

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
var args27283 = [];
var len__21323__auto___27286 = arguments.length;
var i__21324__auto___27287 = (0);
while(true){
if((i__21324__auto___27287 < len__21323__auto___27286)){
args27283.push((arguments[i__21324__auto___27287]));

var G__27288 = (i__21324__auto___27287 + (1));
i__21324__auto___27287 = G__27288;
continue;
} else {
}
break;
}

var G__27285 = args27283.length;
switch (G__27285) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27283.length)].join('')));

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
var args27290 = [];
var len__21323__auto___27293 = arguments.length;
var i__21324__auto___27294 = (0);
while(true){
if((i__21324__auto___27294 < len__21323__auto___27293)){
args27290.push((arguments[i__21324__auto___27294]));

var G__27295 = (i__21324__auto___27294 + (1));
i__21324__auto___27294 = G__27295;
continue;
} else {
}
break;
}

var G__27292 = args27290.length;
switch (G__27292) {
case 1:
return phzr.point.rperp_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.rperp_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27290.length)].join('')));

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
var args27297 = [];
var len__21323__auto___27300 = arguments.length;
var i__21324__auto___27301 = (0);
while(true){
if((i__21324__auto___27301 < len__21323__auto___27300)){
args27297.push((arguments[i__21324__auto___27301]));

var G__27302 = (i__21324__auto___27301 + (1));
i__21324__auto___27301 = G__27302;
continue;
} else {
}
break;
}

var G__27299 = args27297.length;
switch (G__27299) {
case 2:
return phzr.point.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27297.length)].join('')));

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
var args27304 = [];
var len__21323__auto___27307 = arguments.length;
var i__21324__auto___27308 = (0);
while(true){
if((i__21324__auto___27308 < len__21323__auto___27307)){
args27304.push((arguments[i__21324__auto___27308]));

var G__27309 = (i__21324__auto___27308 + (1));
i__21324__auto___27308 = G__27309;
continue;
} else {
}
break;
}

var G__27306 = args27304.length;
switch (G__27306) {
case 2:
return phzr.point.set_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.set_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27304.length)].join('')));

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
var args27311 = [];
var len__21323__auto___27314 = arguments.length;
var i__21324__auto___27315 = (0);
while(true){
if((i__21324__auto___27315 < len__21323__auto___27314)){
args27311.push((arguments[i__21324__auto___27315]));

var G__27316 = (i__21324__auto___27315 + (1));
i__21324__auto___27315 = G__27316;
continue;
} else {
}
break;
}

var G__27313 = args27311.length;
switch (G__27313) {
case 2:
return phzr.point.subtract_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.subtract_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27311.length)].join('')));

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
