// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.signal');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
/**
 * A Signal is an event dispatch mechansim that supports broadcasting to multiple listeners.
 * 
 *   Event listeners are uniquely identified by the listener/callback function and the context.
 */
phzr.signal.__GT_Signal = (function phzr$signal$__GT_Signal(){
return (new Phaser.Signal());
});
/**
 * Add an event listener for this signal.
 * 
 *   An event listener is a callback with a related context and priority.
 * 
 *   You can optionally provide extra arguments which will be passed to the callback after any internal parameters.
 * 
 *   For example: `Phaser.Key.onDown` when dispatched will send the Phaser.Key object that caused the signal as the first parameter.
 *   Any arguments you've specified after `priority` will be sent as well:
 * 
 *   `fireButton.onDown.add(shoot, this, 0, 'lazer', 100);`
 * 
 *   When onDown dispatches it will call the `shoot` callback passing it: `Phaser.Key, 'lazer', 100`.
 * 
 *   Where the first parameter is the one that Key.onDown dispatches internally and 'lazer', 
 *   and the value 100 were the custom arguments given in the call to 'add'.
 * 
 *   Parameters:
 *  * signal (Phaser.Signal) - Targeted instance for method
 *  * listener (function) - The function to call when this Signal is dispatched.
 *  * listener-context (object) {optional} - The context under which the listener will be executed (i.e. the object that should represent the `this` variable).
 *  * priority (number) {optional} - The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added (default = 0)
 *  * args (any) {optional} - Additional arguments to pass to the callback (listener) function. They will be appended after any arguments usually dispatched.
 * 
 *   Returns:  Phaser.SignalBinding - An Object representing the binding between the Signal and listener.
 */
phzr.signal.add = (function phzr$signal$add(var_args){
var args28081 = [];
var len__21323__auto___28084 = arguments.length;
var i__21324__auto___28085 = (0);
while(true){
if((i__21324__auto___28085 < len__21323__auto___28084)){
args28081.push((arguments[i__21324__auto___28085]));

var G__28086 = (i__21324__auto___28085 + (1));
i__21324__auto___28085 = G__28086;
continue;
} else {
}
break;
}

var G__28083 = args28081.length;
switch (G__28083) {
case 2:
return phzr.signal.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.signal.add.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.signal.add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.signal.add.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28081.length)].join('')));

}
});

phzr.signal.add.cljs$core$IFn$_invoke$arity$2 = (function (signal,listener){
return phzr.impl.utils.core.phaser__GT_clj(signal.add(phzr.impl.utils.core.clj__GT_phaser(listener)));
});

phzr.signal.add.cljs$core$IFn$_invoke$arity$3 = (function (signal,listener,listener_context){
return phzr.impl.utils.core.phaser__GT_clj(signal.add(phzr.impl.utils.core.clj__GT_phaser(listener),phzr.impl.utils.core.clj__GT_phaser(listener_context)));
});

phzr.signal.add.cljs$core$IFn$_invoke$arity$4 = (function (signal,listener,listener_context,priority){
return phzr.impl.utils.core.phaser__GT_clj(signal.add(phzr.impl.utils.core.clj__GT_phaser(listener),phzr.impl.utils.core.clj__GT_phaser(listener_context),phzr.impl.utils.core.clj__GT_phaser(priority)));
});

phzr.signal.add.cljs$core$IFn$_invoke$arity$5 = (function (signal,listener,listener_context,priority,args){
return phzr.impl.utils.core.phaser__GT_clj(signal.add(phzr.impl.utils.core.clj__GT_phaser(listener),phzr.impl.utils.core.clj__GT_phaser(listener_context),phzr.impl.utils.core.clj__GT_phaser(priority),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.signal.add.cljs$lang$maxFixedArity = 5;

/**
 * Add a one-time listener - the listener is automatically removed after the first execution.
 * 
 *   If there is as {@link Phaser.Signal#memorize memorized} event then it will be dispatched and
 *   the listener will be removed immediately.
 * 
 *   Parameters:
 *  * signal (Phaser.Signal) - Targeted instance for method
 *  * listener (function) - The function to call when this Signal is dispatched.
 *  * listener-context (object) {optional} - The context under which the listener will be executed (i.e. the object that should represent the `this` variable).
 *  * priority (number) {optional} - The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added (default = 0)
 *  * args (any) {optional} - Additional arguments to pass to the callback (listener) function. They will be appended after any arguments usually dispatched.
 * 
 *   Returns:  Phaser.SignalBinding - An Object representing the binding between the Signal and listener.
 */
phzr.signal.add_once = (function phzr$signal$add_once(var_args){
var args28088 = [];
var len__21323__auto___28091 = arguments.length;
var i__21324__auto___28092 = (0);
while(true){
if((i__21324__auto___28092 < len__21323__auto___28091)){
args28088.push((arguments[i__21324__auto___28092]));

var G__28093 = (i__21324__auto___28092 + (1));
i__21324__auto___28092 = G__28093;
continue;
} else {
}
break;
}

var G__28090 = args28088.length;
switch (G__28090) {
case 2:
return phzr.signal.add_once.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.signal.add_once.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.signal.add_once.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.signal.add_once.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28088.length)].join('')));

}
});

phzr.signal.add_once.cljs$core$IFn$_invoke$arity$2 = (function (signal,listener){
return phzr.impl.utils.core.phaser__GT_clj(signal.addOnce(phzr.impl.utils.core.clj__GT_phaser(listener)));
});

phzr.signal.add_once.cljs$core$IFn$_invoke$arity$3 = (function (signal,listener,listener_context){
return phzr.impl.utils.core.phaser__GT_clj(signal.addOnce(phzr.impl.utils.core.clj__GT_phaser(listener),phzr.impl.utils.core.clj__GT_phaser(listener_context)));
});

phzr.signal.add_once.cljs$core$IFn$_invoke$arity$4 = (function (signal,listener,listener_context,priority){
return phzr.impl.utils.core.phaser__GT_clj(signal.addOnce(phzr.impl.utils.core.clj__GT_phaser(listener),phzr.impl.utils.core.clj__GT_phaser(listener_context),phzr.impl.utils.core.clj__GT_phaser(priority)));
});

phzr.signal.add_once.cljs$core$IFn$_invoke$arity$5 = (function (signal,listener,listener_context,priority,args){
return phzr.impl.utils.core.phaser__GT_clj(signal.addOnce(phzr.impl.utils.core.clj__GT_phaser(listener),phzr.impl.utils.core.clj__GT_phaser(listener_context),phzr.impl.utils.core.clj__GT_phaser(priority),phzr.impl.utils.core.clj__GT_phaser(args)));
});

phzr.signal.add_once.cljs$lang$maxFixedArity = 5;

/**
 * Dispatch / broadcast the event to all listeners.
 * 
 *   To create an instance-bound dispatch for this Signal, use {@link Phaser.Signal#boundDispatch boundDispatch}.
 * 
 *   Parameters:
 *  * signal (Phaser.Signal) - Targeted instance for method
 *  * params (any) {optional} - Parameters that should be passed to each handler.
 */
phzr.signal.dispatch = (function phzr$signal$dispatch(var_args){
var args28095 = [];
var len__21323__auto___28098 = arguments.length;
var i__21324__auto___28099 = (0);
while(true){
if((i__21324__auto___28099 < len__21323__auto___28098)){
args28095.push((arguments[i__21324__auto___28099]));

var G__28100 = (i__21324__auto___28099 + (1));
i__21324__auto___28099 = G__28100;
continue;
} else {
}
break;
}

var G__28097 = args28095.length;
switch (G__28097) {
case 1:
return phzr.signal.dispatch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.signal.dispatch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28095.length)].join('')));

}
});

phzr.signal.dispatch.cljs$core$IFn$_invoke$arity$1 = (function (signal){
return phzr.impl.utils.core.phaser__GT_clj(signal.dispatch());
});

phzr.signal.dispatch.cljs$core$IFn$_invoke$arity$2 = (function (signal,params){
return phzr.impl.utils.core.phaser__GT_clj(signal.dispatch(phzr.impl.utils.core.clj__GT_phaser(params)));
});

phzr.signal.dispatch.cljs$lang$maxFixedArity = 2;

/**
 * Dispose the signal - no more events can be dispatched.
 * 
 *   This removes all event listeners and clears references to external objects.
 *   Calling methods on a disposed objects results in undefined behavior.
 */
phzr.signal.dispose = (function phzr$signal$dispose(signal){
return phzr.impl.utils.core.phaser__GT_clj(signal.dispose());
});
/**
 * Forget the currently {@link Phaser.Signal#memorize memorized} event, if any.
 */
phzr.signal.forget = (function phzr$signal$forget(signal){
return phzr.impl.utils.core.phaser__GT_clj(signal.forget());
});
/**
 * Gets the total number of listeners attached to this Signal.
 * 
 *   Returns:  integer - Number of listeners attached to the Signal.
 */
phzr.signal.get_num_listeners = (function phzr$signal$get_num_listeners(signal){
return phzr.impl.utils.core.phaser__GT_clj(signal.getNumListeners());
});
/**
 * Stop propagation of the event, blocking the dispatch to next listener on the queue.
 * 
 *   This should be called only during event dispatch as calling it before/after dispatch won't affect another broadcast.
 *   See {@link Phaser.Signal#active active} to enable/disable the signal entirely.
 */
phzr.signal.halt = (function phzr$signal$halt(signal){
return phzr.impl.utils.core.phaser__GT_clj(signal.halt());
});
/**
 * Check if a specific listener is attached.
 * 
 *   Parameters:
 *  * signal (Phaser.Signal) - Targeted instance for method
 *  * listener (function) - Signal handler function.
 *  * context (object) {optional} - Context on which listener will be executed (object that should represent the `this` variable inside listener function).
 * 
 *   Returns:  boolean - If Signal has the specified listener.
 */
phzr.signal.has = (function phzr$signal$has(var_args){
var args28102 = [];
var len__21323__auto___28105 = arguments.length;
var i__21324__auto___28106 = (0);
while(true){
if((i__21324__auto___28106 < len__21323__auto___28105)){
args28102.push((arguments[i__21324__auto___28106]));

var G__28107 = (i__21324__auto___28106 + (1));
i__21324__auto___28106 = G__28107;
continue;
} else {
}
break;
}

var G__28104 = args28102.length;
switch (G__28104) {
case 2:
return phzr.signal.has.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.signal.has.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28102.length)].join('')));

}
});

phzr.signal.has.cljs$core$IFn$_invoke$arity$2 = (function (signal,listener){
return phzr.impl.utils.core.phaser__GT_clj(signal.has(phzr.impl.utils.core.clj__GT_phaser(listener)));
});

phzr.signal.has.cljs$core$IFn$_invoke$arity$3 = (function (signal,listener,context){
return phzr.impl.utils.core.phaser__GT_clj(signal.has(phzr.impl.utils.core.clj__GT_phaser(listener),phzr.impl.utils.core.clj__GT_phaser(context)));
});

phzr.signal.has.cljs$lang$maxFixedArity = 3;

/**
 * Remove a single event listener.
 * 
 *   Parameters:
 *  * signal (Phaser.Signal) - Targeted instance for method
 *  * listener (function) - Handler function that should be removed.
 *  * context (object) {optional} - Execution context (since you can add the same handler multiple times if executing in a different context).
 * 
 *   Returns:  function - Listener handler function.
 */
phzr.signal.remove = (function phzr$signal$remove(var_args){
var args28109 = [];
var len__21323__auto___28112 = arguments.length;
var i__21324__auto___28113 = (0);
while(true){
if((i__21324__auto___28113 < len__21323__auto___28112)){
args28109.push((arguments[i__21324__auto___28113]));

var G__28114 = (i__21324__auto___28113 + (1));
i__21324__auto___28113 = G__28114;
continue;
} else {
}
break;
}

var G__28111 = args28109.length;
switch (G__28111) {
case 2:
return phzr.signal.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.signal.remove.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28109.length)].join('')));

}
});

phzr.signal.remove.cljs$core$IFn$_invoke$arity$2 = (function (signal,listener){
return phzr.impl.utils.core.phaser__GT_clj(signal.remove(phzr.impl.utils.core.clj__GT_phaser(listener)));
});

phzr.signal.remove.cljs$core$IFn$_invoke$arity$3 = (function (signal,listener,context){
return phzr.impl.utils.core.phaser__GT_clj(signal.remove(phzr.impl.utils.core.clj__GT_phaser(listener),phzr.impl.utils.core.clj__GT_phaser(context)));
});

phzr.signal.remove.cljs$lang$maxFixedArity = 3;

/**
 * Remove all event listeners.
 * 
 *   Parameters:
 *  * signal (Phaser.Signal) - Targeted instance for method
 *  * context (object) {optional} - If specified only listeners for the given context will be removed.
 */
phzr.signal.remove_all = (function phzr$signal$remove_all(var_args){
var args28116 = [];
var len__21323__auto___28119 = arguments.length;
var i__21324__auto___28120 = (0);
while(true){
if((i__21324__auto___28120 < len__21323__auto___28119)){
args28116.push((arguments[i__21324__auto___28120]));

var G__28121 = (i__21324__auto___28120 + (1));
i__21324__auto___28120 = G__28121;
continue;
} else {
}
break;
}

var G__28118 = args28116.length;
switch (G__28118) {
case 1:
return phzr.signal.remove_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.signal.remove_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28116.length)].join('')));

}
});

phzr.signal.remove_all.cljs$core$IFn$_invoke$arity$1 = (function (signal){
return phzr.impl.utils.core.phaser__GT_clj(signal.removeAll());
});

phzr.signal.remove_all.cljs$core$IFn$_invoke$arity$2 = (function (signal,context){
return phzr.impl.utils.core.phaser__GT_clj(signal.removeAll(phzr.impl.utils.core.clj__GT_phaser(context)));
});

phzr.signal.remove_all.cljs$lang$maxFixedArity = 2;

/**
 * A string representation of the object.
 * 
 *   Returns:  string - String representation of the object.
 */
phzr.signal.to_string = (function phzr$signal$to_string(signal){
return phzr.impl.utils.core.phaser__GT_clj(signal.toString());
});
