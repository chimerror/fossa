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
var args28096 = [];
var len__21323__auto___28099 = arguments.length;
var i__21324__auto___28100 = (0);
while(true){
if((i__21324__auto___28100 < len__21323__auto___28099)){
args28096.push((arguments[i__21324__auto___28100]));

var G__28101 = (i__21324__auto___28100 + (1));
i__21324__auto___28100 = G__28101;
continue;
} else {
}
break;
}

var G__28098 = args28096.length;
switch (G__28098) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28096.length)].join('')));

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
var args28103 = [];
var len__21323__auto___28106 = arguments.length;
var i__21324__auto___28107 = (0);
while(true){
if((i__21324__auto___28107 < len__21323__auto___28106)){
args28103.push((arguments[i__21324__auto___28107]));

var G__28108 = (i__21324__auto___28107 + (1));
i__21324__auto___28107 = G__28108;
continue;
} else {
}
break;
}

var G__28105 = args28103.length;
switch (G__28105) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28103.length)].join('')));

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
var args28110 = [];
var len__21323__auto___28113 = arguments.length;
var i__21324__auto___28114 = (0);
while(true){
if((i__21324__auto___28114 < len__21323__auto___28113)){
args28110.push((arguments[i__21324__auto___28114]));

var G__28115 = (i__21324__auto___28114 + (1));
i__21324__auto___28114 = G__28115;
continue;
} else {
}
break;
}

var G__28112 = args28110.length;
switch (G__28112) {
case 1:
return phzr.signal.dispatch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.signal.dispatch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28110.length)].join('')));

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
var args28117 = [];
var len__21323__auto___28120 = arguments.length;
var i__21324__auto___28121 = (0);
while(true){
if((i__21324__auto___28121 < len__21323__auto___28120)){
args28117.push((arguments[i__21324__auto___28121]));

var G__28122 = (i__21324__auto___28121 + (1));
i__21324__auto___28121 = G__28122;
continue;
} else {
}
break;
}

var G__28119 = args28117.length;
switch (G__28119) {
case 2:
return phzr.signal.has.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.signal.has.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28117.length)].join('')));

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
var args28124 = [];
var len__21323__auto___28127 = arguments.length;
var i__21324__auto___28128 = (0);
while(true){
if((i__21324__auto___28128 < len__21323__auto___28127)){
args28124.push((arguments[i__21324__auto___28128]));

var G__28129 = (i__21324__auto___28128 + (1));
i__21324__auto___28128 = G__28129;
continue;
} else {
}
break;
}

var G__28126 = args28124.length;
switch (G__28126) {
case 2:
return phzr.signal.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.signal.remove.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28124.length)].join('')));

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
var args28131 = [];
var len__21323__auto___28134 = arguments.length;
var i__21324__auto___28135 = (0);
while(true){
if((i__21324__auto___28135 < len__21323__auto___28134)){
args28131.push((arguments[i__21324__auto___28135]));

var G__28136 = (i__21324__auto___28135 + (1));
i__21324__auto___28135 = G__28136;
continue;
} else {
}
break;
}

var G__28133 = args28131.length;
switch (G__28133) {
case 1:
return phzr.signal.remove_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return phzr.signal.remove_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28131.length)].join('')));

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
