// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.math');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
/**
 * Find the angle of a segment from (x1, y1) -> (x2, y2).
 * 
 *   Parameters:
 *  * x-1 (number) - No description
 *  * y-1 (number) - No description
 *  * x-2 (number) - No description
 *  * y-2 (number) - No description
 * 
 *   Returns:  number - The angle, in radians.
 */
phzr.math.angle_between_ = (function phzr$math$angle_between_(x_1,y_1,x_2,y_2){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.angleBetween(phzr.impl.utils.core.clj__GT_phaser(x_1),phzr.impl.utils.core.clj__GT_phaser(y_1),phzr.impl.utils.core.clj__GT_phaser(x_2),phzr.impl.utils.core.clj__GT_phaser(y_2)));
});
/**
 * Find the angle of a segment from (point1.x, point1.y) -> (point2.x, point2.y).
 * 
 *   Parameters:
 *  * point-1 (Phaser.Point) - No description
 *  * point-2 (Phaser.Point) - No description
 * 
 *   Returns:  number - The angle, in radians.
 */
phzr.math.angle_between_points_ = (function phzr$math$angle_between_points_(point_1,point_2){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.angleBetweenPoints(phzr.impl.utils.core.clj__GT_phaser(point_1),phzr.impl.utils.core.clj__GT_phaser(point_2)));
});
/**
 * Find the angle of a segment from (point1.x, point1.y) -> (point2.x, point2.y).
 * 
 *   Parameters:
 *  * point-1 (Phaser.Point) - No description
 *  * point-2 (Phaser.Point) - No description
 * 
 *   Returns:  number - The angle, in radians.
 */
phzr.math.angle_between_points_y_ = (function phzr$math$angle_between_points_y_(point_1,point_2){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.angleBetweenPointsY(phzr.impl.utils.core.clj__GT_phaser(point_1),phzr.impl.utils.core.clj__GT_phaser(point_2)));
});
/**
 * Find the angle of a segment from (x1, y1) -> (x2, y2).
 *   Note that the difference between this method and Math.angleBetween is that this assumes the y coordinate travels
 *   down the screen.
 * 
 *   Parameters:
 *  * x-1 (number) - No description
 *  * y-1 (number) - No description
 *  * x-2 (number) - No description
 *  * y-2 (number) - No description
 * 
 *   Returns:  number - The angle, in radians.
 */
phzr.math.angle_between_y_ = (function phzr$math$angle_between_y_(x_1,y_1,x_2,y_2){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.angleBetweenY(phzr.impl.utils.core.clj__GT_phaser(x_1),phzr.impl.utils.core.clj__GT_phaser(y_1),phzr.impl.utils.core.clj__GT_phaser(x_2),phzr.impl.utils.core.clj__GT_phaser(y_2)));
});
/**
 * Averages all values passed to the function and returns the result.
 * 
 *   Returns:  number - The average of all given values.
 */
phzr.math.average_ = (function phzr$math$average_(){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.average());
});
/**
 * A Bezier Interpolation Method, mostly used by Phaser.Tween.
 * 
 *   Parameters:
 *  * v (Array) - The input array of values to interpolate between.
 *  * k (number) - The percentage of interpolation, between 0 and 1.
 * 
 *   Returns:  number - The interpolated value
 */
phzr.math.bezier_interpolation_ = (function phzr$math$bezier_interpolation_(v,k){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.bezierInterpolation(phzr.impl.utils.core.clj__GT_phaser(v),phzr.impl.utils.core.clj__GT_phaser(k)));
});
/**
 * A Catmull Rom Interpolation Method, mostly used by Phaser.Tween.
 * 
 *   Parameters:
 *  * v (Array) - The input array of values to interpolate between.
 *  * k (number) - The percentage of interpolation, between 0 and 1.
 * 
 *   Returns:  number - The interpolated value
 */
phzr.math.catmull_rom_interpolation_ = (function phzr$math$catmull_rom_interpolation_(v,k){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.catmullRomInterpolation(phzr.impl.utils.core.clj__GT_phaser(v),phzr.impl.utils.core.clj__GT_phaser(k)));
});
/**
 * 
 * 
 *   Parameters:
 *  * value (number) - The value to round.
 *  * place (number) - The place to round to.
 *  * base (number) - The base to round in... default is 10 for decimal.
 * 
 *   Returns:  number - 
 */
phzr.math.ceil_to_ = (function phzr$math$ceil_to_(value,place,base){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.ceilTo(phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(place),phzr.impl.utils.core.clj__GT_phaser(base)));
});
/**
 * Generate a random bool result based on the chance value.
 * 
 *   Returns true or false based on the chance value (default 50%). For example if you wanted a player to have a 30% chance
 *   of getting a bonus, call chanceRoll(30) - true means the chance passed, false means it failed.
 * 
 *   Parameters:
 *  * chance (number) - The chance of receiving the value. A number between 0 and 100 (effectively 0% to 100%).
 * 
 *   Returns:  boolean - True if the roll passed, or false otherwise.
 */
phzr.math.chance_roll_ = (function phzr$math$chance_roll_(chance){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.chanceRoll(phzr.impl.utils.core.clj__GT_phaser(chance)));
});
/**
 * Force a value within the boundaries by clamping `x` to the range `[a, b]`.
 * 
 *   Parameters:
 *  * x (number) - No description
 *  * a (number) - No description
 *  * b (number) - No description
 * 
 *   Returns:  number - 
 */
phzr.math.clamp_ = (function phzr$math$clamp_(x,a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.clamp(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});
/**
 * Clamp `x` to the range `[a, Infinity)`.
 *   Roughly the same as `Math.max(x, a)`, except for NaN handling.
 * 
 *   Parameters:
 *  * x (number) - No description
 *  * a (number) - No description
 * 
 *   Returns:  number - 
 */
phzr.math.clamp_bottom_ = (function phzr$math$clamp_bottom_(x,a){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.clampBottom(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(a)));
});
/**
 * Convert degrees to radians.
 * 
 *   Parameters:
 *  * degrees (number) - Angle in degrees.
 * 
 *   Returns:  number - Angle in radians.
 */
phzr.math.deg_to_rad_ = (function phzr$math$deg_to_rad_(degrees){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.degToRad(phzr.impl.utils.core.clj__GT_phaser(degrees)));
});
/**
 * The (absolute) difference between two values.
 * 
 *   Parameters:
 *  * a (number) - No description
 *  * b (number) - No description
 * 
 *   Returns:  number - 
 */
phzr.math.difference_ = (function phzr$math$difference_(a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.difference(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});
/**
 * Returns the euclidian distance between the two given set of coordinates.
 * 
 *   Parameters:
 *  * x-1 (number) - No description
 *  * y-1 (number) - No description
 *  * x-2 (number) - No description
 *  * y-2 (number) - No description
 * 
 *   Returns:  number - The distance between the two sets of coordinates.
 */
phzr.math.distance_ = (function phzr$math$distance_(x_1,y_1,x_2,y_2){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.distance(phzr.impl.utils.core.clj__GT_phaser(x_1),phzr.impl.utils.core.clj__GT_phaser(y_1),phzr.impl.utils.core.clj__GT_phaser(x_2),phzr.impl.utils.core.clj__GT_phaser(y_2)));
});
/**
 * Returns the distance between the two given set of coordinates at the power given.
 * 
 *   Parameters:
 *  * x-1 (number) - No description
 *  * y-1 (number) - No description
 *  * x-2 (number) - No description
 *  * y-2 (number) - No description
 *  * pow (number) {optional} - No description
 * 
 *   Returns:  number - The distance between the two sets of coordinates.
 */
phzr.math.distance_pow_ = (function phzr$math$distance_pow_(var_args){
var args27775 = [];
var len__21323__auto___27778 = arguments.length;
var i__21324__auto___27779 = (0);
while(true){
if((i__21324__auto___27779 < len__21323__auto___27778)){
args27775.push((arguments[i__21324__auto___27779]));

var G__27780 = (i__21324__auto___27779 + (1));
i__21324__auto___27779 = G__27780;
continue;
} else {
}
break;
}

var G__27777 = args27775.length;
switch (G__27777) {
case 4:
return phzr.math.distance_pow_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.math.distance_pow_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27775.length)].join('')));

}
});

phzr.math.distance_pow_.cljs$core$IFn$_invoke$arity$4 = (function (x_1,y_1,x_2,y_2){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.distancePow(phzr.impl.utils.core.clj__GT_phaser(x_1),phzr.impl.utils.core.clj__GT_phaser(y_1),phzr.impl.utils.core.clj__GT_phaser(x_2),phzr.impl.utils.core.clj__GT_phaser(y_2)));
});

phzr.math.distance_pow_.cljs$core$IFn$_invoke$arity$5 = (function (x_1,y_1,x_2,y_2,pow){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.distancePow(phzr.impl.utils.core.clj__GT_phaser(x_1),phzr.impl.utils.core.clj__GT_phaser(y_1),phzr.impl.utils.core.clj__GT_phaser(x_2),phzr.impl.utils.core.clj__GT_phaser(y_2),phzr.impl.utils.core.clj__GT_phaser(pow)));
});

phzr.math.distance_pow_.cljs$lang$maxFixedArity = 5;

/**
 * Returns the euclidean distance squared between the two given set of
 *   coordinates (cuts out a square root operation before returning).
 * 
 *   Parameters:
 *  * x-1 (number) - No description
 *  * y-1 (number) - No description
 *  * x-2 (number) - No description
 *  * y-2 (number) - No description
 * 
 *   Returns:  number - The distance squared between the two sets of coordinates.
 */
phzr.math.distance_sq_ = (function phzr$math$distance_sq_(x_1,y_1,x_2,y_2){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.distanceSq(phzr.impl.utils.core.clj__GT_phaser(x_1),phzr.impl.utils.core.clj__GT_phaser(y_1),phzr.impl.utils.core.clj__GT_phaser(x_2),phzr.impl.utils.core.clj__GT_phaser(y_2)));
});
/**
 * 
 * 
 *   Parameters:
 *  * value (number) - the number you want to evaluate
 * 
 *   Returns:  number - 
 */
phzr.math.factorial_ = (function phzr$math$factorial_(value){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.factorial(phzr.impl.utils.core.clj__GT_phaser(value)));
});
/**
 * 
 * 
 *   Parameters:
 *  * value (number) - The value to round.
 *  * place (number) - The place to round to.
 *  * base (number) - The base to round in... default is 10 for decimal.
 * 
 *   Returns:  number - 
 */
phzr.math.floor_to_ = (function phzr$math$floor_to_(value,place,base){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.floorTo(phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(place),phzr.impl.utils.core.clj__GT_phaser(base)));
});
/**
 * 
 * 
 *   Parameters:
 *  * val (number) - No description
 *  * epsilon (number) {optional} - No description
 * 
 *   Returns:  boolean - ceiling(val-epsilon)
 */
phzr.math.fuzzy_ceil_ = (function phzr$math$fuzzy_ceil_(var_args){
var args27782 = [];
var len__21323__auto___27785 = arguments.length;
var i__21324__auto___27786 = (0);
while(true){
if((i__21324__auto___27786 < len__21323__auto___27785)){
args27782.push((arguments[i__21324__auto___27786]));

var G__27787 = (i__21324__auto___27786 + (1));
i__21324__auto___27786 = G__27787;
continue;
} else {
}
break;
}

var G__27784 = args27782.length;
switch (G__27784) {
case 1:
return phzr.math.fuzzy_ceil_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.math.fuzzy_ceil_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27782.length)].join('')));

}
});

phzr.math.fuzzy_ceil_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.fuzzyCeil(phzr.impl.utils.core.clj__GT_phaser(val)));
});

phzr.math.fuzzy_ceil_.cljs$core$IFn$_invoke$arity$2 = (function (val,epsilon){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.fuzzyCeil(phzr.impl.utils.core.clj__GT_phaser(val),phzr.impl.utils.core.clj__GT_phaser(epsilon)));
});

phzr.math.fuzzy_ceil_.cljs$lang$maxFixedArity = 2;

/**
 * Two number are fuzzyEqual if their difference is less than epsilon.
 * 
 *   Parameters:
 *  * a (number) - No description
 *  * b (number) - No description
 *  * epsilon (number) {optional} - No description
 * 
 *   Returns:  boolean - True if |a-b|<epsilon
 */
phzr.math.fuzzy_equal_ = (function phzr$math$fuzzy_equal_(var_args){
var args27789 = [];
var len__21323__auto___27792 = arguments.length;
var i__21324__auto___27793 = (0);
while(true){
if((i__21324__auto___27793 < len__21323__auto___27792)){
args27789.push((arguments[i__21324__auto___27793]));

var G__27794 = (i__21324__auto___27793 + (1));
i__21324__auto___27793 = G__27794;
continue;
} else {
}
break;
}

var G__27791 = args27789.length;
switch (G__27791) {
case 2:
return phzr.math.fuzzy_equal_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.math.fuzzy_equal_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27789.length)].join('')));

}
});

phzr.math.fuzzy_equal_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.fuzzyEqual(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});

phzr.math.fuzzy_equal_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,epsilon){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.fuzzyEqual(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(epsilon)));
});

phzr.math.fuzzy_equal_.cljs$lang$maxFixedArity = 3;

/**
 * 
 * 
 *   Parameters:
 *  * val (number) - No description
 *  * epsilon (number) {optional} - No description
 * 
 *   Returns:  boolean - floor(val-epsilon)
 */
phzr.math.fuzzy_floor_ = (function phzr$math$fuzzy_floor_(var_args){
var args27796 = [];
var len__21323__auto___27799 = arguments.length;
var i__21324__auto___27800 = (0);
while(true){
if((i__21324__auto___27800 < len__21323__auto___27799)){
args27796.push((arguments[i__21324__auto___27800]));

var G__27801 = (i__21324__auto___27800 + (1));
i__21324__auto___27800 = G__27801;
continue;
} else {
}
break;
}

var G__27798 = args27796.length;
switch (G__27798) {
case 1:
return phzr.math.fuzzy_floor_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.math.fuzzy_floor_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27796.length)].join('')));

}
});

phzr.math.fuzzy_floor_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.fuzzyFloor(phzr.impl.utils.core.clj__GT_phaser(val)));
});

phzr.math.fuzzy_floor_.cljs$core$IFn$_invoke$arity$2 = (function (val,epsilon){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.fuzzyFloor(phzr.impl.utils.core.clj__GT_phaser(val),phzr.impl.utils.core.clj__GT_phaser(epsilon)));
});

phzr.math.fuzzy_floor_.cljs$lang$maxFixedArity = 2;

/**
 * `a` is fuzzyGreaterThan `b` if it is more than b - epsilon.
 * 
 *   Parameters:
 *  * a (number) - No description
 *  * b (number) - No description
 *  * epsilon (number) {optional} - No description
 * 
 *   Returns:  boolean - True if a>b+epsilon
 */
phzr.math.fuzzy_greater_than_ = (function phzr$math$fuzzy_greater_than_(var_args){
var args27803 = [];
var len__21323__auto___27806 = arguments.length;
var i__21324__auto___27807 = (0);
while(true){
if((i__21324__auto___27807 < len__21323__auto___27806)){
args27803.push((arguments[i__21324__auto___27807]));

var G__27808 = (i__21324__auto___27807 + (1));
i__21324__auto___27807 = G__27808;
continue;
} else {
}
break;
}

var G__27805 = args27803.length;
switch (G__27805) {
case 2:
return phzr.math.fuzzy_greater_than_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.math.fuzzy_greater_than_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27803.length)].join('')));

}
});

phzr.math.fuzzy_greater_than_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.fuzzyGreaterThan(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});

phzr.math.fuzzy_greater_than_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,epsilon){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.fuzzyGreaterThan(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(epsilon)));
});

phzr.math.fuzzy_greater_than_.cljs$lang$maxFixedArity = 3;

/**
 * `a` is fuzzyLessThan `b` if it is less than b + epsilon.
 * 
 *   Parameters:
 *  * a (number) - No description
 *  * b (number) - No description
 *  * epsilon (number) {optional} - No description
 * 
 *   Returns:  boolean - True if a<b+epsilon
 */
phzr.math.fuzzy_less_than_ = (function phzr$math$fuzzy_less_than_(var_args){
var args27810 = [];
var len__21323__auto___27813 = arguments.length;
var i__21324__auto___27814 = (0);
while(true){
if((i__21324__auto___27814 < len__21323__auto___27813)){
args27810.push((arguments[i__21324__auto___27814]));

var G__27815 = (i__21324__auto___27814 + (1));
i__21324__auto___27814 = G__27815;
continue;
} else {
}
break;
}

var G__27812 = args27810.length;
switch (G__27812) {
case 2:
return phzr.math.fuzzy_less_than_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.math.fuzzy_less_than_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27810.length)].join('')));

}
});

phzr.math.fuzzy_less_than_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.fuzzyLessThan(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});

phzr.math.fuzzy_less_than_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,epsilon){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.fuzzyLessThan(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(epsilon)));
});

phzr.math.fuzzy_less_than_.cljs$lang$maxFixedArity = 3;

/**
 * Returns true if the number given is even.
 * 
 *   Parameters:
 *  * n (integer) - The number to check.
 * 
 *   Returns:  boolean - True if the given number is even. False if the given number is odd.
 */
phzr.math.is_even_ = (function phzr$math$is_even_(n){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.isEven(phzr.impl.utils.core.clj__GT_phaser(n)));
});
/**
 * Returns true if the number given is odd.
 * 
 *   Parameters:
 *  * n (integer) - The number to check.
 * 
 *   Returns:  boolean - True if the given number is odd. False if the given number is even.
 */
phzr.math.is_odd_ = (function phzr$math$is_odd_(n){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.isOdd(phzr.impl.utils.core.clj__GT_phaser(n)));
});
/**
 * Calculates a linear (interpolation) value over t.
 * 
 *   Parameters:
 *  * p-0 (number) - No description
 *  * p-1 (number) - No description
 *  * t (number) - No description
 * 
 *   Returns:  number - 
 */
phzr.math.linear_ = (function phzr$math$linear_(p_0,p_1,t){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.linear(phzr.impl.utils.core.clj__GT_phaser(p_0),phzr.impl.utils.core.clj__GT_phaser(p_1),phzr.impl.utils.core.clj__GT_phaser(t)));
});
/**
 * A Linear Interpolation Method, mostly used by Phaser.Tween.
 * 
 *   Parameters:
 *  * v (Array) - The input array of values to interpolate between.
 *  * k (number) - The percentage of interpolation, between 0 and 1.
 * 
 *   Returns:  number - The interpolated value
 */
phzr.math.linear_interpolation_ = (function phzr$math$linear_interpolation_(v,k){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.linearInterpolation(phzr.impl.utils.core.clj__GT_phaser(v),phzr.impl.utils.core.clj__GT_phaser(k)));
});
/**
 * Linear mapping from range <a1, a2> to range <b1, b2>
 * 
 *   Parameters:
 *  * x (number) - the value to map
 *  * a-1 (number) - first endpoint of the range <a1, a2>
 *  * a-2 (number) - final endpoint of the range <a1, a2>
 *  * b-1 (number) - first endpoint of the range <b1, b2>
 *  * b-2 (number) - final endpoint of the range  <b1, b2>
 * 
 *   Returns:  number - 
 */
phzr.math.map_linear_ = (function phzr$math$map_linear_(x,a_1,a_2,b_1,b_2){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.mapLinear(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(a_1),phzr.impl.utils.core.clj__GT_phaser(a_2),phzr.impl.utils.core.clj__GT_phaser(b_1),phzr.impl.utils.core.clj__GT_phaser(b_2)));
});
/**
 * Variation of Math.max that can be passed either an array of numbers or the numbers as parameters.
 * 
 *   Prefer the standard `Math.max` function when appropriate.
 * 
 *   Returns:  number - The largest value from those given.
 */
phzr.math.max_ = (function phzr$math$max_(){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.max());
});
/**
 * Adds the given amount to the value, but never lets the value go over the specified maximum.
 * 
 *   Parameters:
 *  * value (number) - The value to add the amount to.
 *  * amount (number) - The amount to add to the value.
 *  * max (number) - The maximum the value is allowed to be.
 * 
 *   Returns:  number - 
 */
phzr.math.max_add_ = (function phzr$math$max_add_(value,amount,max){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.maxAdd(phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(amount),phzr.impl.utils.core.clj__GT_phaser(max)));
});
/**
 * Variation of Math.max that can be passed a property and either an array of objects or the objects as parameters.
 *   It will find the largest matching property value from the given objects.
 * 
 *   Returns:  number - The largest value from those given.
 */
phzr.math.max_property_ = (function phzr$math$max_property_(){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.maxProperty());
});
/**
 * Variation of Math.min that can be passed either an array of numbers or the numbers as parameters.
 * 
 *   Prefer the standard `Math.min` function when appropriate.
 * 
 *   Returns:  number - The lowest value from those given.
 */
phzr.math.min_ = (function phzr$math$min_(){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.min());
});
/**
 * Variation of Math.min that can be passed a property and either an array of objects or the objects as parameters.
 *   It will find the lowest matching property value from the given objects.
 * 
 *   Returns:  number - The lowest value from those given.
 */
phzr.math.min_property_ = (function phzr$math$min_property_(){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.minProperty());
});
/**
 * Subtracts the given amount from the value, but never lets the value go below the specified minimum.
 * 
 *   Parameters:
 *  * value (number) - The base value.
 *  * amount (number) - The amount to subtract from the base value.
 *  * min (number) - The minimum the value is allowed to be.
 * 
 *   Returns:  number - The new value.
 */
phzr.math.min_sub_ = (function phzr$math$min_sub_(value,amount,min){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.minSub(phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(amount),phzr.impl.utils.core.clj__GT_phaser(min)));
});
/**
 * Normalizes an angle to the [0,2pi) range.
 * 
 *   Parameters:
 *  * angle-rad (number) - The angle to normalize, in radians.
 * 
 *   Returns:  number - Returns the angle, fit within the [0,2pi] range, in radians.
 */
phzr.math.normalize_angle_ = (function phzr$math$normalize_angle_(angle_rad){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.normalizeAngle(phzr.impl.utils.core.clj__GT_phaser(angle_rad)));
});
/**
 * Work out what percentage value `a` is of value `b` using the given base.
 * 
 *   Parameters:
 *  * a (number) - The value to work out the percentage for.
 *  * b (number) - The value you wish to get the percentage of.
 *  * base (number) {optional} - The base value.
 * 
 *   Returns:  number - The percentage a is of b, between 0 and 1.
 */
phzr.math.percent_ = (function phzr$math$percent_(var_args){
var args27817 = [];
var len__21323__auto___27820 = arguments.length;
var i__21324__auto___27821 = (0);
while(true){
if((i__21324__auto___27821 < len__21323__auto___27820)){
args27817.push((arguments[i__21324__auto___27821]));

var G__27822 = (i__21324__auto___27821 + (1));
i__21324__auto___27821 = G__27822;
continue;
} else {
}
break;
}

var G__27819 = args27817.length;
switch (G__27819) {
case 2:
return phzr.math.percent_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.math.percent_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27817.length)].join('')));

}
});

phzr.math.percent_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.percent(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b)));
});

phzr.math.percent_.cljs$core$IFn$_invoke$arity$3 = (function (a,b,base){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.percent(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(base)));
});

phzr.math.percent_.cljs$lang$maxFixedArity = 3;

/**
 * Convert degrees to radians.
 * 
 *   Parameters:
 *  * radians (number) - Angle in radians.
 * 
 *   Returns:  number - Angle in degrees
 */
phzr.math.rad_to_deg_ = (function phzr$math$rad_to_deg_(radians){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.radToDeg(phzr.impl.utils.core.clj__GT_phaser(radians)));
});
/**
 * Reverses an angle.
 * 
 *   Parameters:
 *  * angle-rad (number) - The angle to reverse, in radians.
 * 
 *   Returns:  number - Returns the reverse angle, in radians.
 */
phzr.math.reverse_angle_ = (function phzr$math$reverse_angle_(angle_rad){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.reverseAngle(phzr.impl.utils.core.clj__GT_phaser(angle_rad)));
});
/**
 * Round to the next whole number _away_ from zero.
 * 
 *   Parameters:
 *  * value (number) - Any number.
 * 
 *   Returns:  integer - The rounded value of that number.
 */
phzr.math.round_away_from_zero_ = (function phzr$math$round_away_from_zero_(value){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.roundAwayFromZero(phzr.impl.utils.core.clj__GT_phaser(value)));
});
/**
 * Round to some place comparative to a `base`, default is 10 for decimal place.
 *   The `place` is represented by the power applied to `base` to get that place.
 * 
 *    e.g. 2000/7 ~= 285.714285714285714285714 ~= (bin)100011101.1011011011011011
 * 
 *    roundTo(2000/7,3) === 0
 *    roundTo(2000/7,2) == 300
 *    roundTo(2000/7,1) == 290
 *    roundTo(2000/7,0) == 286
 *    roundTo(2000/7,-1) == 285.7
 *    roundTo(2000/7,-2) == 285.71
 *    roundTo(2000/7,-3) == 285.714
 *    roundTo(2000/7,-4) == 285.7143
 *    roundTo(2000/7,-5) == 285.71429
 * 
 *    roundTo(2000/7,3,2)  == 288       -- 100100000
 *    roundTo(2000/7,2,2)  == 284       -- 100011100
 *    roundTo(2000/7,1,2)  == 286       -- 100011110
 *    roundTo(2000/7,0,2)  == 286       -- 100011110
 *    roundTo(2000/7,-1,2) == 285.5     -- 100011101.1
 *    roundTo(2000/7,-2,2) == 285.75    -- 100011101.11
 *    roundTo(2000/7,-3,2) == 285.75    -- 100011101.11
 *    roundTo(2000/7,-4,2) == 285.6875  -- 100011101.1011
 *    roundTo(2000/7,-5,2) == 285.71875 -- 100011101.10111
 * 
 *   Note what occurs when we round to the 3rd space (8ths place), 100100000, this is to be assumed
 *   because we are rounding 100011.1011011011011011 which rounds up.
 * 
 *   Parameters:
 *  * value (number) - The value to round.
 *  * place (number) - The place to round to.
 *  * base (number) - The base to round in... default is 10 for decimal.
 * 
 *   Returns:  number - 
 */
phzr.math.round_to_ = (function phzr$math$round_to_(value,place,base){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.roundTo(phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(place),phzr.impl.utils.core.clj__GT_phaser(base)));
});
/**
 * 
 * 
 *   Parameters:
 *  * n (number) - No description
 * 
 *   Returns:  number - n mod 1
 */
phzr.math.shear_ = (function phzr$math$shear_(n){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.shear(phzr.impl.utils.core.clj__GT_phaser(n)));
});
/**
 * A value representing the sign of the value: -1 for negative, +1 for positive, 0 if value is 0.
 * 
 *   This works differently from `Math.sign` for values of NaN and -0, etc.
 * 
 *   Parameters:
 *  * x (number) - No description
 * 
 *   Returns:  integer - An integer in {-1, 0, 1}
 */
phzr.math.sign_ = (function phzr$math$sign_(x){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.sign(phzr.impl.utils.core.clj__GT_phaser(x)));
});
/**
 * Generate a sine and cosine table simultaneously and extremely quickly.
 *   The parameters allow you to specify the length, amplitude and frequency of the wave.
 *   This generator is fast enough to be used in real-time.
 *   Code based on research by Franky of scene.at
 * 
 *   Parameters:
 *  * length (number) - The length of the wave
 *  * sin-amplitude (number) - The amplitude to apply to the sine table (default 1.0) if you need values between say -+ 125 then give 125 as the value
 *  * cos-amplitude (number) - The amplitude to apply to the cosine table (default 1.0) if you need values between say -+ 125 then give 125 as the value
 *  * frequency (number) - The frequency of the sine and cosine table data
 * 
 *   Returns:  Object - Returns the table data.
 */
phzr.math.sin_cos_generator_ = (function phzr$math$sin_cos_generator_(length,sin_amplitude,cos_amplitude,frequency){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.sinCosGenerator(phzr.impl.utils.core.clj__GT_phaser(length),phzr.impl.utils.core.clj__GT_phaser(sin_amplitude),phzr.impl.utils.core.clj__GT_phaser(cos_amplitude),phzr.impl.utils.core.clj__GT_phaser(frequency)));
});
/**
 * Smootherstep function as detailed at http://en.wikipedia.org/wiki/Smoothstep
 * 
 *   Parameters:
 *  * x (number) - No description
 *  * min (number) - No description
 *  * max (number) - No description
 * 
 *   Returns:  number - 
 */
phzr.math.smootherstep_ = (function phzr$math$smootherstep_(x,min,max){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.smootherstep(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(min),phzr.impl.utils.core.clj__GT_phaser(max)));
});
/**
 * Smoothstep function as detailed at http://en.wikipedia.org/wiki/Smoothstep
 * 
 *   Parameters:
 *  * x (number) - No description
 *  * min (number) - No description
 *  * max (number) - No description
 * 
 *   Returns:  number - 
 */
phzr.math.smoothstep_ = (function phzr$math$smoothstep_(x,min,max){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.smoothstep(phzr.impl.utils.core.clj__GT_phaser(x),phzr.impl.utils.core.clj__GT_phaser(min),phzr.impl.utils.core.clj__GT_phaser(max)));
});
/**
 * Snap a value to nearest grid slice, using rounding.
 * 
 *   Example: if you have an interval gap of 5 and a position of 12... you will snap to 10 whereas 14 will snap to 15.
 * 
 *   Parameters:
 *  * input (number) - The value to snap.
 *  * gap (number) - The interval gap of the grid.
 *  * start (number) {optional} - Optional starting offset for gap.
 * 
 *   Returns:  number - 
 */
phzr.math.snap_to_ = (function phzr$math$snap_to_(var_args){
var args27824 = [];
var len__21323__auto___27827 = arguments.length;
var i__21324__auto___27828 = (0);
while(true){
if((i__21324__auto___27828 < len__21323__auto___27827)){
args27824.push((arguments[i__21324__auto___27828]));

var G__27829 = (i__21324__auto___27828 + (1));
i__21324__auto___27828 = G__27829;
continue;
} else {
}
break;
}

var G__27826 = args27824.length;
switch (G__27826) {
case 2:
return phzr.math.snap_to_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.math.snap_to_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27824.length)].join('')));

}
});

phzr.math.snap_to_.cljs$core$IFn$_invoke$arity$2 = (function (input,gap){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.snapTo(phzr.impl.utils.core.clj__GT_phaser(input),phzr.impl.utils.core.clj__GT_phaser(gap)));
});

phzr.math.snap_to_.cljs$core$IFn$_invoke$arity$3 = (function (input,gap,start){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.snapTo(phzr.impl.utils.core.clj__GT_phaser(input),phzr.impl.utils.core.clj__GT_phaser(gap),phzr.impl.utils.core.clj__GT_phaser(start)));
});

phzr.math.snap_to_.cljs$lang$maxFixedArity = 3;

/**
 * Snap a value to nearest grid slice, using ceil.
 * 
 *   Example: if you have an interval gap of 5 and a position of 12... you will snap to 15.
 *   As will 14 will snap to 15... but 16 will snap to 20.
 * 
 *   Parameters:
 *  * input (number) - The value to snap.
 *  * gap (number) - The interval gap of the grid.
 *  * start (number) {optional} - Optional starting offset for gap.
 * 
 *   Returns:  number - 
 */
phzr.math.snap_to_ceil_ = (function phzr$math$snap_to_ceil_(var_args){
var args27831 = [];
var len__21323__auto___27834 = arguments.length;
var i__21324__auto___27835 = (0);
while(true){
if((i__21324__auto___27835 < len__21323__auto___27834)){
args27831.push((arguments[i__21324__auto___27835]));

var G__27836 = (i__21324__auto___27835 + (1));
i__21324__auto___27835 = G__27836;
continue;
} else {
}
break;
}

var G__27833 = args27831.length;
switch (G__27833) {
case 2:
return phzr.math.snap_to_ceil_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.math.snap_to_ceil_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27831.length)].join('')));

}
});

phzr.math.snap_to_ceil_.cljs$core$IFn$_invoke$arity$2 = (function (input,gap){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.snapToCeil(phzr.impl.utils.core.clj__GT_phaser(input),phzr.impl.utils.core.clj__GT_phaser(gap)));
});

phzr.math.snap_to_ceil_.cljs$core$IFn$_invoke$arity$3 = (function (input,gap,start){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.snapToCeil(phzr.impl.utils.core.clj__GT_phaser(input),phzr.impl.utils.core.clj__GT_phaser(gap),phzr.impl.utils.core.clj__GT_phaser(start)));
});

phzr.math.snap_to_ceil_.cljs$lang$maxFixedArity = 3;

/**
 * Snap a value to nearest grid slice, using floor.
 * 
 *   Example: if you have an interval gap of 5 and a position of 12... you will snap to 10. 
 *   As will 14 snap to 10... but 16 will snap to 15.
 * 
 *   Parameters:
 *  * input (number) - The value to snap.
 *  * gap (number) - The interval gap of the grid.
 *  * start (number) {optional} - Optional starting offset for gap.
 * 
 *   Returns:  number - 
 */
phzr.math.snap_to_floor_ = (function phzr$math$snap_to_floor_(var_args){
var args27838 = [];
var len__21323__auto___27841 = arguments.length;
var i__21324__auto___27842 = (0);
while(true){
if((i__21324__auto___27842 < len__21323__auto___27841)){
args27838.push((arguments[i__21324__auto___27842]));

var G__27843 = (i__21324__auto___27842 + (1));
i__21324__auto___27842 = G__27843;
continue;
} else {
}
break;
}

var G__27840 = args27838.length;
switch (G__27840) {
case 2:
return phzr.math.snap_to_floor_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.math.snap_to_floor_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27838.length)].join('')));

}
});

phzr.math.snap_to_floor_.cljs$core$IFn$_invoke$arity$2 = (function (input,gap){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.snapToFloor(phzr.impl.utils.core.clj__GT_phaser(input),phzr.impl.utils.core.clj__GT_phaser(gap)));
});

phzr.math.snap_to_floor_.cljs$core$IFn$_invoke$arity$3 = (function (input,gap,start){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.snapToFloor(phzr.impl.utils.core.clj__GT_phaser(input),phzr.impl.utils.core.clj__GT_phaser(gap),phzr.impl.utils.core.clj__GT_phaser(start)));
});

phzr.math.snap_to_floor_.cljs$lang$maxFixedArity = 3;

/**
 * Checks if two values are within the given tolerance of each other.
 * 
 *   Parameters:
 *  * a (number) - The first number to check
 *  * b (number) - The second number to check
 *  * tolerance (number) - The tolerance. Anything equal to or less than this is considered within the range.
 * 
 *   Returns:  boolean - True if a is <= tolerance of b.
 */
phzr.math.within_ = (function phzr$math$within_(a,b,tolerance){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.within(phzr.impl.utils.core.clj__GT_phaser(a),phzr.impl.utils.core.clj__GT_phaser(b),phzr.impl.utils.core.clj__GT_phaser(tolerance)));
});
/**
 * Ensures that the value always stays between min and max, by wrapping the value around.
 * 
 *   If `max` is not larger than `min` the result is 0.
 * 
 *   Parameters:
 *  * value (number) - The value to wrap.
 *  * min (number) - The minimum the value is allowed to be.
 *  * max (number) - The maximum the value is allowed to be, should be larger than `min`.
 * 
 *   Returns:  number - The wrapped value.
 */
phzr.math.wrap_ = (function phzr$math$wrap_(value,min,max){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.wrap(phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(min),phzr.impl.utils.core.clj__GT_phaser(max)));
});
/**
 * Keeps an angle value between -180 and +180; or -PI and PI if radians.
 * 
 *   Parameters:
 *  * angle (number) - The angle value to wrap
 *  * radians (boolean) {optional} - Set to `true` if the angle is given in radians, otherwise degrees is expected.
 * 
 *   Returns:  number - The new angle value; will be the same as the input angle if it was within bounds.
 */
phzr.math.wrap_angle_ = (function phzr$math$wrap_angle_(var_args){
var args27845 = [];
var len__21323__auto___27848 = arguments.length;
var i__21324__auto___27849 = (0);
while(true){
if((i__21324__auto___27849 < len__21323__auto___27848)){
args27845.push((arguments[i__21324__auto___27849]));

var G__27850 = (i__21324__auto___27849 + (1));
i__21324__auto___27849 = G__27850;
continue;
} else {
}
break;
}

var G__27847 = args27845.length;
switch (G__27847) {
case 1:
return phzr.math.wrap_angle_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.math.wrap_angle_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27845.length)].join('')));

}
});

phzr.math.wrap_angle_.cljs$core$IFn$_invoke$arity$1 = (function (angle){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.wrapAngle(phzr.impl.utils.core.clj__GT_phaser(angle)));
});

phzr.math.wrap_angle_.cljs$core$IFn$_invoke$arity$2 = (function (angle,radians){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.wrapAngle(phzr.impl.utils.core.clj__GT_phaser(angle),phzr.impl.utils.core.clj__GT_phaser(radians)));
});

phzr.math.wrap_angle_.cljs$lang$maxFixedArity = 2;

/**
 * Adds value to amount and ensures that the result always stays between 0 and max, by wrapping the value around.
 * 
 *   Values _must_ be positive integers, and are passed through Math.abs. See {@link Phaser.Math#wrap} for an alternative.
 * 
 *   Parameters:
 *  * value (number) - The value to add the amount to.
 *  * amount (number) - The amount to add to the value.
 *  * max (number) - The maximum the value is allowed to be.
 * 
 *   Returns:  number - The wrapped value.
 */
phzr.math.wrap_value_ = (function phzr$math$wrap_value_(value,amount,max){
return phzr.impl.utils.core.phaser__GT_clj(Phaser.Math.wrapValue(phzr.impl.utils.core.clj__GT_phaser(value),phzr.impl.utils.core.clj__GT_phaser(amount),phzr.impl.utils.core.clj__GT_phaser(max)));
});
