// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('brute.entity');
goog.require('cljs.core');
/**
 * Creates the system data structure that will need to be passed to all entity functions
 */
brute.entity.create_system = (function brute$entity$create_system(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$entity_DASH_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$entity_DASH_component_DASH_types,cljs.core.PersistentArrayMap.EMPTY], null);
});
/**
 * create a UUID
 */
brute.entity.create_uuid = (function brute$entity$create_uuid(){
var template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
var f = ((function (template){
return (function (p1__26987_SHARP_){
var r = (function (){var G__26989 = (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * (16));
return Math.floor(G__26989);
})();
var v = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__26987_SHARP_,"x"))?r:((r & (3)) | (8)));
return v.toString((16));
});})(template))
;
return template.replace((new RegExp("[xy]","g")),f);
});
/**
 * Create the entity and return it. Entities are just UUIDs
 */
brute.entity.create_entity = (function brute$entity$create_entity(){
return brute.entity.create_uuid();
});
/**
 * Returns a list of all the entities. Not that useful in application, but good for debugging/testing
 */
brute.entity.get_all_entities = (function brute$entity$get_all_entities(system){
var temp__4655__auto__ = cljs.core.keys(cljs.core.cst$kw$entity_DASH_component_DASH_types.cljs$core$IFn$_invoke$arity$1(system));
if(cljs.core.truth_(temp__4655__auto__)){
var result = temp__4655__auto__;
return result;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Add the entity to the ES Data Structure and returns it
 */
brute.entity.add_entity = (function brute$entity$add_entity(system,entity){
var system__$1 = cljs.core.transient$(system);
return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(system__$1,cljs.core.cst$kw$entity_DASH_component_DASH_types,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$entity_DASH_component_DASH_types.cljs$core$IFn$_invoke$arity$1(system__$1),entity,cljs.core.PersistentHashSet.EMPTY)));
});
if(typeof brute.entity.get_component_type !== 'undefined'){
} else {
/**
 * Returns the type for a given component. Using a multimethod with 'class' as the dispatch-fn to allow for extensibility per application.
 *        By default returns the class of the component.
 */
brute.entity.get_component_type = (function (){var method_table__21173__auto__ = (function (){var G__26990 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26990) : cljs.core.atom.call(null,G__26990));
})();
var prefer_table__21174__auto__ = (function (){var G__26991 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26991) : cljs.core.atom.call(null,G__26991));
})();
var method_cache__21175__auto__ = (function (){var G__26992 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26992) : cljs.core.atom.call(null,G__26992));
})();
var cached_hierarchy__21176__auto__ = (function (){var G__26993 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__26993) : cljs.core.atom.call(null,G__26993));
})();
var hierarchy__21177__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("brute.entity","get-component-type"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__21177__auto__,method_table__21173__auto__,prefer_table__21174__auto__,method_cache__21175__auto__,cached_hierarchy__21176__auto__));
})();
}
brute.entity.get_component_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (component){
return cljs.core.type(component);
}));
/**
 * Add a component instance to a given entity in the ES data structure and returns it.
 *   Will overwrite a component if already set.
 */
brute.entity.add_component = (function brute$entity$add_component(system,entity,instance){
var type = (brute.entity.get_component_type.cljs$core$IFn$_invoke$arity$1 ? brute.entity.get_component_type.cljs$core$IFn$_invoke$arity$1(instance) : brute.entity.get_component_type.call(null,instance));
var system__$1 = cljs.core.transient$(system);
var ecs = cljs.core.cst$kw$entity_DASH_components.cljs$core$IFn$_invoke$arity$1(system__$1);
var ects = cljs.core.cst$kw$entity_DASH_component_DASH_types.cljs$core$IFn$_invoke$arity$1(system__$1);
return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(system__$1,cljs.core.cst$kw$entity_DASH_components,cljs.core.assoc_in(ecs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,entity], null),instance)),cljs.core.cst$kw$entity_DASH_component_DASH_types,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ects,entity,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ects,entity),type))));
});
/**
 * Get the component data for a specific component type
 */
brute.entity.get_component = (function brute$entity$get_component(system,entity,type){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$entity_DASH_components.cljs$core$IFn$_invoke$arity$1(system),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,entity], null));
});
/**
 * Update an entity's component instance through through fn. Function is applied first with the specified component and any other args applied,
 *   and should return the modified component instance. Return nil if you want no change to occur.
 */
brute.entity.update_component = (function brute$entity$update_component(var_args){
var args__21330__auto__ = [];
var len__21323__auto___26999 = arguments.length;
var i__21324__auto___27000 = (0);
while(true){
if((i__21324__auto___27000 < len__21323__auto___26999)){
args__21330__auto__.push((arguments[i__21324__auto___27000]));

var G__27001 = (i__21324__auto___27000 + (1));
i__21324__auto___27000 = G__27001;
continue;
} else {
}
break;
}

var argseq__21331__auto__ = ((((4) < args__21330__auto__.length))?(new cljs.core.IndexedSeq(args__21330__auto__.slice((4)),(0),null)):null);
return brute.entity.update_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__21331__auto__);
});

brute.entity.update_component.cljs$core$IFn$_invoke$arity$variadic = (function (system,entity,type,fn,args){
var temp__4655__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,brute.entity.get_component(system,entity,type),args);
if(cljs.core.truth_(temp__4655__auto__)){
var update = temp__4655__auto__;
return brute.entity.add_component(system,entity,update);
} else {
return system;
}
});

brute.entity.update_component.cljs$lang$maxFixedArity = (4);

brute.entity.update_component.cljs$lang$applyTo = (function (seq26994){
var G__26995 = cljs.core.first(seq26994);
var seq26994__$1 = cljs.core.next(seq26994);
var G__26996 = cljs.core.first(seq26994__$1);
var seq26994__$2 = cljs.core.next(seq26994__$1);
var G__26997 = cljs.core.first(seq26994__$2);
var seq26994__$3 = cljs.core.next(seq26994__$2);
var G__26998 = cljs.core.first(seq26994__$3);
var seq26994__$4 = cljs.core.next(seq26994__$3);
return brute.entity.update_component.cljs$core$IFn$_invoke$arity$variadic(G__26995,G__26996,G__26997,G__26998,seq26994__$4);
});

/**
 * Get all the entities that have a given component type
 */
brute.entity.get_all_entities_with_component = (function brute$entity$get_all_entities_with_component(system,type){
var temp__4655__auto__ = cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$entity_DASH_components.cljs$core$IFn$_invoke$arity$1(system),type));
if(cljs.core.truth_(temp__4655__auto__)){
var entities = temp__4655__auto__;
return entities;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Remove a component instance from the ES data structure and returns it
 */
brute.entity.remove_component = (function brute$entity$remove_component(system,entity,instance){
var type = (brute.entity.get_component_type.cljs$core$IFn$_invoke$arity$1 ? brute.entity.get_component_type.cljs$core$IFn$_invoke$arity$1(instance) : brute.entity.get_component_type.call(null,instance));
var system__$1 = cljs.core.transient$(system);
var entity_components = cljs.core.cst$kw$entity_DASH_components.cljs$core$IFn$_invoke$arity$1(system__$1);
var entity_component_types = cljs.core.cst$kw$entity_DASH_component_DASH_types.cljs$core$IFn$_invoke$arity$1(system__$1);
return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(system__$1,cljs.core.cst$kw$entity_DASH_components,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity_components,type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity_components,type),entity))),cljs.core.cst$kw$entity_DASH_component_DASH_types,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity_component_types,entity,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity_component_types,entity),type))));
});
/**
 * Destroy an entity completely from the ES data structure and returns it
 */
brute.entity.kill_entity = (function brute$entity$kill_entity(system,entity){
var system__$1 = cljs.core.transient$(system);
var entity_component_types = cljs.core.cst$kw$entity_DASH_component_DASH_types.cljs$core$IFn$_invoke$arity$1(system__$1);
return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(system__$1,cljs.core.cst$kw$entity_DASH_component_DASH_types,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(entity_component_types,entity)),cljs.core.cst$kw$entity_DASH_components,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (system__$1,entity_component_types){
return (function (v,type){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,type),entity));
});})(system__$1,entity_component_types))
,cljs.core.transient$(cljs.core.cst$kw$entity_DASH_components.cljs$core$IFn$_invoke$arity$1(system__$1)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity_component_types,entity)))));
});
/**
 * Get all the components on a specific entity. Useful for debugging
 */
brute.entity.get_all_components_on_entity = (function brute$entity$get_all_components_on_entity(system,entity){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27002_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$entity_DASH_components.cljs$core$IFn$_invoke$arity$1(system),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27002_SHARP_,entity], null));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$entity_DASH_component_DASH_types.cljs$core$IFn$_invoke$arity$1(system),entity));
});
