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
var args27142 = [];
var len__21323__auto___27145 = arguments.length;
var i__21324__auto___27146 = (0);
while(true){
if((i__21324__auto___27146 < len__21323__auto___27145)){
args27142.push((arguments[i__21324__auto___27146]));

var G__27147 = (i__21324__auto___27146 + (1));
i__21324__auto___27146 = G__27147;
continue;
} else {
}
break;
}

var G__27144 = args27142.length;
switch (G__27144) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27142.length)].join('')));

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
var args27149 = [];
var len__21323__auto___27152 = arguments.length;
var i__21324__auto___27153 = (0);
while(true){
if((i__21324__auto___27153 < len__21323__auto___27152)){
args27149.push((arguments[i__21324__auto___27153]));

var G__27154 = (i__21324__auto___27153 + (1));
i__21324__auto___27153 = G__27154;
continue;
} else {
}
break;
}

var G__27151 = args27149.length;
switch (G__27151) {
case 2:
return phzr.point.add_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.add_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27149.length)].join('')));

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
var args27156 = [];
var len__21323__auto___27159 = arguments.length;
var i__21324__auto___27160 = (0);
while(true){
if((i__21324__auto___27160 < len__21323__auto___27159)){
args27156.push((arguments[i__21324__auto___27160]));

var G__27161 = (i__21324__auto___27160 + (1));
i__21324__auto___27160 = G__27161;
continue;
} else {
}
break;
}

var G__27158 = args27156.length;
switch (G__27158) {
case 2:
return phzr.point.angle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.angle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27156.length)].join('')));

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
var args27163 = [];
var len__21323__auto___27166 = arguments.length;
var i__21324__auto___27167 = (0);
while(true){
if((i__21324__auto___27167 < len__21323__auto___27166)){
args27163.push((arguments[i__21324__auto___27167]));

var G__27168 = (i__21324__auto___27167 + (1));
i__21324__auto___27167 = G__27168;
continue;
} else {
}
break;
}

var G__27165 = args27163.length;
switch (G__27165) {
case 1:
return phzr.point.centroid_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.centroid_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27163.length)].join('')));

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
var args27170 = [];
var len__21323__auto___27173 = arguments.length;
var i__21324__auto___27174 = (0);
while(true){
if((i__21324__auto___27174 < len__21323__auto___27173)){
args27170.push((arguments[i__21324__auto___27174]));

var G__27175 = (i__21324__auto___27174 + (1));
i__21324__auto___27174 = G__27175;
continue;
} else {
}
break;
}

var G__27172 = args27170.length;
switch (G__27172) {
case 1:
return phzr.point.clone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.clone.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27170.length)].join('')));

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
var args27177 = [];
var len__21323__auto___27180 = arguments.length;
var i__21324__auto___27181 = (0);
while(true){
if((i__21324__auto___27181 < len__21323__auto___27180)){
args27177.push((arguments[i__21324__auto___27181]));

var G__27182 = (i__21324__auto___27181 + (1));
i__21324__auto___27181 = G__27182;
continue;
} else {
}
break;
}

var G__27179 = args27177.length;
switch (G__27179) {
case 2:
return phzr.point.distance.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.distance.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27177.length)].join('')));

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
var args27184 = [];
var len__21323__auto___27187 = arguments.length;
var i__21324__auto___27188 = (0);
while(true){
if((i__21324__auto___27188 < len__21323__auto___27187)){
args27184.push((arguments[i__21324__auto___27188]));

var G__27189 = (i__21324__auto___27188 + (1));
i__21324__auto___27188 = G__27189;
continue;
} else {
}
break;
}

var G__27186 = args27184.length;
switch (G__27186) {
case 2:
return phzr.point.distance_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.distance_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27184.length)].join('')));

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
var args27191 = [];
var len__21323__auto___27194 = arguments.length;
var i__21324__auto___27195 = (0);
while(true){
if((i__21324__auto___27195 < len__21323__auto___27194)){
args27191.push((arguments[i__21324__auto___27195]));

var G__27196 = (i__21324__auto___27195 + (1));
i__21324__auto___27195 = G__27196;
continue;
} else {
}
break;
}

var G__27193 = args27191.length;
switch (G__27193) {
case 2:
return phzr.point.divide_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.divide_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27191.length)].join('')));

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
var args27198 = [];
var len__21323__auto___27201 = arguments.length;
var i__21324__auto___27202 = (0);
while(true){
if((i__21324__auto___27202 < len__21323__auto___27201)){
args27198.push((arguments[i__21324__auto___27202]));

var G__27203 = (i__21324__auto___27202 + (1));
i__21324__auto___27202 = G__27203;
continue;
} else {
}
break;
}

var G__27200 = args27198.length;
switch (G__27200) {
case 3:
return phzr.point.interpolate_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.point.interpolate_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27198.length)].join('')));

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
var args27205 = [];
var len__21323__auto___27208 = arguments.length;
var i__21324__auto___27209 = (0);
while(true){
if((i__21324__auto___27209 < len__21323__auto___27208)){
args27205.push((arguments[i__21324__auto___27209]));

var G__27210 = (i__21324__auto___27209 + (1));
i__21324__auto___27209 = G__27210;
continue;
} else {
}
break;
}

var G__27207 = args27205.length;
switch (G__27207) {
case 2:
return phzr.point.multiply_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.multiply_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27205.length)].join('')));

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
var args27212 = [];
var len__21323__auto___27215 = arguments.length;
var i__21324__auto___27216 = (0);
while(true){
if((i__21324__auto___27216 < len__21323__auto___27215)){
args27212.push((arguments[i__21324__auto___27216]));

var G__27217 = (i__21324__auto___27216 + (1));
i__21324__auto___27216 = G__27217;
continue;
} else {
}
break;
}

var G__27214 = args27212.length;
switch (G__27214) {
case 3:
return phzr.point.multiply_add_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.point.multiply_add_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27212.length)].join('')));

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
var args27219 = [];
var len__21323__auto___27222 = arguments.length;
var i__21324__auto___27223 = (0);
while(true){
if((i__21324__auto___27223 < len__21323__auto___27222)){
args27219.push((arguments[i__21324__auto___27223]));

var G__27224 = (i__21324__auto___27223 + (1));
i__21324__auto___27223 = G__27224;
continue;
} else {
}
break;
}

var G__27221 = args27219.length;
switch (G__27221) {
case 1:
return phzr.point.negative_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.negative_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27219.length)].join('')));

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
var args27226 = [];
var len__21323__auto___27229 = arguments.length;
var i__21324__auto___27230 = (0);
while(true){
if((i__21324__auto___27230 < len__21323__auto___27229)){
args27226.push((arguments[i__21324__auto___27230]));

var G__27231 = (i__21324__auto___27230 + (1));
i__21324__auto___27230 = G__27231;
continue;
} else {
}
break;
}

var G__27228 = args27226.length;
switch (G__27228) {
case 1:
return phzr.point.normal_right_hand_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.normal_right_hand_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27226.length)].join('')));

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
var args27233 = [];
var len__21323__auto___27236 = arguments.length;
var i__21324__auto___27237 = (0);
while(true){
if((i__21324__auto___27237 < len__21323__auto___27236)){
args27233.push((arguments[i__21324__auto___27237]));

var G__27238 = (i__21324__auto___27237 + (1));
i__21324__auto___27237 = G__27238;
continue;
} else {
}
break;
}

var G__27235 = args27233.length;
switch (G__27235) {
case 1:
return phzr.point.normalize_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.normalize_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27233.length)].join('')));

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
var args27240 = [];
var len__21323__auto___27243 = arguments.length;
var i__21324__auto___27244 = (0);
while(true){
if((i__21324__auto___27244 < len__21323__auto___27243)){
args27240.push((arguments[i__21324__auto___27244]));

var G__27245 = (i__21324__auto___27244 + (1));
i__21324__auto___27244 = G__27245;
continue;
} else {
}
break;
}

var G__27242 = args27240.length;
switch (G__27242) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27240.length)].join('')));

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
var args27247 = [];
var len__21323__auto___27250 = arguments.length;
var i__21324__auto___27251 = (0);
while(true){
if((i__21324__auto___27251 < len__21323__auto___27250)){
args27247.push((arguments[i__21324__auto___27251]));

var G__27252 = (i__21324__auto___27251 + (1));
i__21324__auto___27251 = G__27252;
continue;
} else {
}
break;
}

var G__27249 = args27247.length;
switch (G__27249) {
case 1:
return phzr.point.perp_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.perp_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27247.length)].join('')));

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
var args27254 = [];
var len__21323__auto___27257 = arguments.length;
var i__21324__auto___27258 = (0);
while(true){
if((i__21324__auto___27258 < len__21323__auto___27257)){
args27254.push((arguments[i__21324__auto___27258]));

var G__27259 = (i__21324__auto___27258 + (1));
i__21324__auto___27258 = G__27259;
continue;
} else {
}
break;
}

var G__27256 = args27254.length;
switch (G__27256) {
case 2:
return phzr.point.project_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.project_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27254.length)].join('')));

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
var args27261 = [];
var len__21323__auto___27264 = arguments.length;
var i__21324__auto___27265 = (0);
while(true){
if((i__21324__auto___27265 < len__21323__auto___27264)){
args27261.push((arguments[i__21324__auto___27265]));

var G__27266 = (i__21324__auto___27265 + (1));
i__21324__auto___27265 = G__27266;
continue;
} else {
}
break;
}

var G__27263 = args27261.length;
switch (G__27263) {
case 2:
return phzr.point.project_unit_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.project_unit_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27261.length)].join('')));

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
var args27268 = [];
var len__21323__auto___27271 = arguments.length;
var i__21324__auto___27272 = (0);
while(true){
if((i__21324__auto___27272 < len__21323__auto___27271)){
args27268.push((arguments[i__21324__auto___27272]));

var G__27273 = (i__21324__auto___27272 + (1));
i__21324__auto___27272 = G__27273;
continue;
} else {
}
break;
}

var G__27270 = args27268.length;
switch (G__27270) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27268.length)].join('')));

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
var args27275 = [];
var len__21323__auto___27278 = arguments.length;
var i__21324__auto___27279 = (0);
while(true){
if((i__21324__auto___27279 < len__21323__auto___27278)){
args27275.push((arguments[i__21324__auto___27279]));

var G__27280 = (i__21324__auto___27279 + (1));
i__21324__auto___27279 = G__27280;
continue;
} else {
}
break;
}

var G__27277 = args27275.length;
switch (G__27277) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27275.length)].join('')));

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
var args27282 = [];
var len__21323__auto___27285 = arguments.length;
var i__21324__auto___27286 = (0);
while(true){
if((i__21324__auto___27286 < len__21323__auto___27285)){
args27282.push((arguments[i__21324__auto___27286]));

var G__27287 = (i__21324__auto___27286 + (1));
i__21324__auto___27286 = G__27287;
continue;
} else {
}
break;
}

var G__27284 = args27282.length;
switch (G__27284) {
case 1:
return phzr.point.rperp_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.point.rperp_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27282.length)].join('')));

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
var args27289 = [];
var len__21323__auto___27292 = arguments.length;
var i__21324__auto___27293 = (0);
while(true){
if((i__21324__auto___27293 < len__21323__auto___27292)){
args27289.push((arguments[i__21324__auto___27293]));

var G__27294 = (i__21324__auto___27293 + (1));
i__21324__auto___27293 = G__27294;
continue;
} else {
}
break;
}

var G__27291 = args27289.length;
switch (G__27291) {
case 2:
return phzr.point.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.set.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27289.length)].join('')));

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
var args27296 = [];
var len__21323__auto___27299 = arguments.length;
var i__21324__auto___27300 = (0);
while(true){
if((i__21324__auto___27300 < len__21323__auto___27299)){
args27296.push((arguments[i__21324__auto___27300]));

var G__27301 = (i__21324__auto___27300 + (1));
i__21324__auto___27300 = G__27301;
continue;
} else {
}
break;
}

var G__27298 = args27296.length;
switch (G__27298) {
case 2:
return phzr.point.set_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.set_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27296.length)].join('')));

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
var args27303 = [];
var len__21323__auto___27306 = arguments.length;
var i__21324__auto___27307 = (0);
while(true){
if((i__21324__auto___27307 < len__21323__auto___27306)){
args27303.push((arguments[i__21324__auto___27307]));

var G__27308 = (i__21324__auto___27307 + (1));
i__21324__auto___27307 = G__27308;
continue;
} else {
}
break;
}

var G__27305 = args27303.length;
switch (G__27305) {
case 2:
return phzr.point.subtract_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.point.subtract_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27303.length)].join('')));

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
