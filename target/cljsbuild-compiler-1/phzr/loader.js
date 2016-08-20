// Compiled by ClojureScript 1.9.89 {:static-fns true, :optimize-constants true}
goog.provide('phzr.loader');
goog.require('cljs.core');
goog.require('phzr.impl.utils.core');
goog.require('phzr.impl.extend');
/**
 * The Loader handles loading all external content such as Images, Sounds, Texture Atlases and data files.
 * 
 *   The loader uses a combination of tag loading (eg. Image elements) and XHR and provides progress and completion callbacks.
 * 
 *   Parallel loading (see {@link Phaser.Loader#enableParallel enableParallel}) is supported and enabled by default.
 *   Load-before behavior of parallel resources is controlled by synchronization points as discussed in {@link Phaser.Loader#withSyncPoint withSyncPoint}.
 * 
 *   Texture Atlases can be created with tools such as [Texture Packer](https://www.codeandweb.com/texturepacker/phaser) and
 *   [Shoebox](http://renderhjs.net/shoebox/)
 * 
 *   Parameters:
 *  * game (Phaser.Game) - A reference to the currently running game.
 */
phzr.loader.__GT_Loader = (function phzr$loader$__GT_Loader(game){
return (new Phaser.Loader(phzr.impl.utils.core.clj__GT_phaser(game)));
});
phzr.loader.const$ = (function phzr$loader$const(k){
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(phzr.impl.accessors.loader.loader_constants,k);
if(cljs.core.truth_(temp__4657__auto__)){
var cn = temp__4657__auto__;
return (Phaser.Loader[cn]);
} else {
return null;
}
});
/**
 * Add a synchronization point to a specific file/asset in the load queue.
 * 
 *   This has no effect on already loaded assets.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * type (string) - The type of resource to turn into a sync point (image, audio, xml, etc).
 *  * key (string) - Key of the file you want to turn into a sync point.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.add_sync_point = (function phzr$loader$add_sync_point(loader,type,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.addSyncPoint(phzr.impl.utils.core.clj__GT_phaser(type),phzr.impl.utils.core.clj__GT_phaser(key)));
});
/**
 * Adds a Texture Atlas file to the current load queue.
 * 
 *   To create the Texture Atlas you can use tools such as:
 * 
 *   [Texture Packer](https://www.codeandweb.com/texturepacker/phaser)
 *   [Shoebox](http://renderhjs.net/shoebox/)
 * 
 *   If using Texture Packer we recommend you enable 'Trim sprite names'.
 *   If your atlas software has an option to 'rotate' the resulting frames, you must disable it.
 * 
 *   You can choose to either load the data externally, by providing a URL to a json file.
 *   Or you can pass in a JSON object or String via the `atlasData` parameter.
 *   If you pass a String the data is automatically run through `JSON.parse` and then immediately added to the Phaser.Cache.
 * 
 *   If URLs are provided the files are **not** loaded immediately after calling this method, but are added to the load queue.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getImage(key)`. JSON files are automatically parsed upon load.
 *   If you need to control when the JSON is parsed then use `Loader.text` instead and parse the JSON file as needed.
 * 
 *   The URLs can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the textureURL isn't specified then the Loader will take the key and create a filename from that.
 *   For example if the key is 'player' and textureURL is null then the Loader will set the URL to be 'player.png'.
 *   The same is true for the atlasURL. If atlasURL isn't specified and no atlasData has been provided then the Loader will
 *   set the atlasURL to be the key. For example if the key is 'player' the atlasURL will be set to 'player.json'.
 * 
 *   If you do not desire this action then provide URLs and / or a data object.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the texture atlas file.
 *  * texture-url (string) {optional} - URL of the texture atlas image file. If undefined or `null` the url will be set to `<key>.png`, i.e. if `key` was 'alien' then the URL will be 'alien.png'.
 *  * atlas-url (string) {optional} - URL of the texture atlas data file. If undefined or `null` and no atlasData is given, the url will be set to `<key>.json`, i.e. if `key` was 'alien' then the URL will be 'alien.json'.
 *  * atlas-data (object) {optional} - A JSON or XML data object. You don't need this if the data is being loaded from a URL.
 *  * format (number) {optional} - The format of the data. Can be Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY (the default), Phaser.Loader.TEXTURE_ATLAS_JSON_HASH or Phaser.Loader.TEXTURE_ATLAS_XML_STARLING.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.atlas = (function phzr$loader$atlas(var_args){
var args27889 = [];
var len__21323__auto___27892 = arguments.length;
var i__21324__auto___27893 = (0);
while(true){
if((i__21324__auto___27893 < len__21323__auto___27892)){
args27889.push((arguments[i__21324__auto___27893]));

var G__27894 = (i__21324__auto___27893 + (1));
i__21324__auto___27893 = G__27894;
continue;
} else {
}
break;
}

var G__27891 = args27889.length;
switch (G__27891) {
case 2:
return phzr.loader.atlas.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.atlas.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.atlas.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.loader.atlas.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.loader.atlas.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27889.length)].join('')));

}
});

phzr.loader.atlas.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlas(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.atlas.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,texture_url){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlas(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url)));
});

phzr.loader.atlas.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,texture_url,atlas_url){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlas(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url),phzr.impl.utils.core.clj__GT_phaser(atlas_url)));
});

phzr.loader.atlas.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,texture_url,atlas_url,atlas_data){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlas(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url),phzr.impl.utils.core.clj__GT_phaser(atlas_url),phzr.impl.utils.core.clj__GT_phaser(atlas_data)));
});

phzr.loader.atlas.cljs$core$IFn$_invoke$arity$6 = (function (loader,key,texture_url,atlas_url,atlas_data,format){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlas(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url),phzr.impl.utils.core.clj__GT_phaser(atlas_url),phzr.impl.utils.core.clj__GT_phaser(atlas_data),phzr.impl.utils.core.clj__GT_phaser(format)));
});

phzr.loader.atlas.cljs$lang$maxFixedArity = 6;

/**
 * Adds a Texture Atlas file to the current load queue.
 * 
 *   Unlike `Loader.atlasJSONHash` this call expects the atlas data to be in a JSON Array format.
 * 
 *   To create the Texture Atlas you can use tools such as:
 * 
 *   [Texture Packer](https://www.codeandweb.com/texturepacker/phaser)
 *   [Shoebox](http://renderhjs.net/shoebox/)
 * 
 *   If using Texture Packer we recommend you enable 'Trim sprite names'.
 *   If your atlas software has an option to 'rotate' the resulting frames, you must disable it.
 * 
 *   You can choose to either load the data externally, by providing a URL to a json file.
 *   Or you can pass in a JSON object or String via the `atlasData` parameter.
 *   If you pass a String the data is automatically run through `JSON.parse` and then immediately added to the Phaser.Cache.
 * 
 *   If URLs are provided the files are **not** loaded immediately after calling this method, but are added to the load queue.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getImage(key)`. JSON files are automatically parsed upon load.
 *   If you need to control when the JSON is parsed then use `Loader.text` instead and parse the JSON file as needed.
 * 
 *   The URLs can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the textureURL isn't specified then the Loader will take the key and create a filename from that.
 *   For example if the key is 'player' and textureURL is null then the Loader will set the URL to be 'player.png'.
 *   The same is true for the atlasURL. If atlasURL isn't specified and no atlasData has been provided then the Loader will
 *   set the atlasURL to be the key. For example if the key is 'player' the atlasURL will be set to 'player.json'.
 * 
 *   If you do not desire this action then provide URLs and / or a data object.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the texture atlas file.
 *  * texture-url (string) {optional} - URL of the texture atlas image file. If undefined or `null` the url will be set to `<key>.png`, i.e. if `key` was 'alien' then the URL will be 'alien.png'.
 *  * atlas-url (string) {optional} - URL of the texture atlas data file. If undefined or `null` and no atlasData is given, the url will be set to `<key>.json`, i.e. if `key` was 'alien' then the URL will be 'alien.json'.
 *  * atlas-data (object) {optional} - A JSON data object. You don't need this if the data is being loaded from a URL.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.atlas_json_array = (function phzr$loader$atlas_json_array(var_args){
var args27896 = [];
var len__21323__auto___27899 = arguments.length;
var i__21324__auto___27900 = (0);
while(true){
if((i__21324__auto___27900 < len__21323__auto___27899)){
args27896.push((arguments[i__21324__auto___27900]));

var G__27901 = (i__21324__auto___27900 + (1));
i__21324__auto___27900 = G__27901;
continue;
} else {
}
break;
}

var G__27898 = args27896.length;
switch (G__27898) {
case 2:
return phzr.loader.atlas_json_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.atlas_json_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.atlas_json_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.loader.atlas_json_array.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27896.length)].join('')));

}
});

phzr.loader.atlas_json_array.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlasJSONArray(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.atlas_json_array.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,texture_url){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlasJSONArray(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url)));
});

phzr.loader.atlas_json_array.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,texture_url,atlas_url){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlasJSONArray(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url),phzr.impl.utils.core.clj__GT_phaser(atlas_url)));
});

phzr.loader.atlas_json_array.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,texture_url,atlas_url,atlas_data){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlasJSONArray(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url),phzr.impl.utils.core.clj__GT_phaser(atlas_url),phzr.impl.utils.core.clj__GT_phaser(atlas_data)));
});

phzr.loader.atlas_json_array.cljs$lang$maxFixedArity = 5;

/**
 * Adds a Texture Atlas file to the current load queue.
 * 
 *   Unlike `Loader.atlas` this call expects the atlas data to be in a JSON Hash format.
 * 
 *   To create the Texture Atlas you can use tools such as:
 * 
 *   [Texture Packer](https://www.codeandweb.com/texturepacker/phaser)
 *   [Shoebox](http://renderhjs.net/shoebox/)
 * 
 *   If using Texture Packer we recommend you enable 'Trim sprite names'.
 *   If your atlas software has an option to 'rotate' the resulting frames, you must disable it.
 * 
 *   You can choose to either load the data externally, by providing a URL to a json file.
 *   Or you can pass in a JSON object or String via the `atlasData` parameter.
 *   If you pass a String the data is automatically run through `JSON.parse` and then immediately added to the Phaser.Cache.
 * 
 *   If URLs are provided the files are **not** loaded immediately after calling this method, but are added to the load queue.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getImage(key)`. JSON files are automatically parsed upon load.
 *   If you need to control when the JSON is parsed then use `Loader.text` instead and parse the JSON file as needed.
 * 
 *   The URLs can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the textureURL isn't specified then the Loader will take the key and create a filename from that.
 *   For example if the key is 'player' and textureURL is null then the Loader will set the URL to be 'player.png'.
 *   The same is true for the atlasURL. If atlasURL isn't specified and no atlasData has been provided then the Loader will
 *   set the atlasURL to be the key. For example if the key is 'player' the atlasURL will be set to 'player.json'.
 * 
 *   If you do not desire this action then provide URLs and / or a data object.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the texture atlas file.
 *  * texture-url (string) {optional} - URL of the texture atlas image file. If undefined or `null` the url will be set to `<key>.png`, i.e. if `key` was 'alien' then the URL will be 'alien.png'.
 *  * atlas-url (string) {optional} - URL of the texture atlas data file. If undefined or `null` and no atlasData is given, the url will be set to `<key>.json`, i.e. if `key` was 'alien' then the URL will be 'alien.json'.
 *  * atlas-data (object) {optional} - A JSON data object. You don't need this if the data is being loaded from a URL.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.atlas_json_hash = (function phzr$loader$atlas_json_hash(var_args){
var args27903 = [];
var len__21323__auto___27906 = arguments.length;
var i__21324__auto___27907 = (0);
while(true){
if((i__21324__auto___27907 < len__21323__auto___27906)){
args27903.push((arguments[i__21324__auto___27907]));

var G__27908 = (i__21324__auto___27907 + (1));
i__21324__auto___27907 = G__27908;
continue;
} else {
}
break;
}

var G__27905 = args27903.length;
switch (G__27905) {
case 2:
return phzr.loader.atlas_json_hash.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.atlas_json_hash.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.atlas_json_hash.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.loader.atlas_json_hash.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27903.length)].join('')));

}
});

phzr.loader.atlas_json_hash.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlasJSONHash(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.atlas_json_hash.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,texture_url){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlasJSONHash(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url)));
});

phzr.loader.atlas_json_hash.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,texture_url,atlas_url){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlasJSONHash(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url),phzr.impl.utils.core.clj__GT_phaser(atlas_url)));
});

phzr.loader.atlas_json_hash.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,texture_url,atlas_url,atlas_data){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlasJSONHash(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url),phzr.impl.utils.core.clj__GT_phaser(atlas_url),phzr.impl.utils.core.clj__GT_phaser(atlas_data)));
});

phzr.loader.atlas_json_hash.cljs$lang$maxFixedArity = 5;

/**
 * Adds a Texture Atlas file to the current load queue.
 * 
 *   This call expects the atlas data to be in the Starling XML data format.
 * 
 *   To create the Texture Atlas you can use tools such as:
 * 
 *   [Texture Packer](https://www.codeandweb.com/texturepacker/phaser)
 *   [Shoebox](http://renderhjs.net/shoebox/)
 * 
 *   If using Texture Packer we recommend you enable 'Trim sprite names'.
 *   If your atlas software has an option to 'rotate' the resulting frames, you must disable it.
 * 
 *   You can choose to either load the data externally, by providing a URL to an xml file.
 *   Or you can pass in an XML object or String via the `atlasData` parameter.
 *   If you pass a String the data is automatically run through `Loader.parseXML` and then immediately added to the Phaser.Cache.
 * 
 *   If URLs are provided the files are **not** loaded immediately after calling this method, but are added to the load queue.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getImage(key)`. XML files are automatically parsed upon load.
 *   If you need to control when the XML is parsed then use `Loader.text` instead and parse the XML file as needed.
 * 
 *   The URLs can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the textureURL isn't specified then the Loader will take the key and create a filename from that.
 *   For example if the key is 'player' and textureURL is null then the Loader will set the URL to be 'player.png'.
 *   The same is true for the atlasURL. If atlasURL isn't specified and no atlasData has been provided then the Loader will
 *   set the atlasURL to be the key. For example if the key is 'player' the atlasURL will be set to 'player.xml'.
 * 
 *   If you do not desire this action then provide URLs and / or a data object.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the texture atlas file.
 *  * texture-url (string) {optional} - URL of the texture atlas image file. If undefined or `null` the url will be set to `<key>.png`, i.e. if `key` was 'alien' then the URL will be 'alien.png'.
 *  * atlas-url (string) {optional} - URL of the texture atlas data file. If undefined or `null` and no atlasData is given, the url will be set to `<key>.json`, i.e. if `key` was 'alien' then the URL will be 'alien.xml'.
 *  * atlas-data (object) {optional} - An XML data object. You don't need this if the data is being loaded from a URL.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.atlas_xml = (function phzr$loader$atlas_xml(var_args){
var args27910 = [];
var len__21323__auto___27913 = arguments.length;
var i__21324__auto___27914 = (0);
while(true){
if((i__21324__auto___27914 < len__21323__auto___27913)){
args27910.push((arguments[i__21324__auto___27914]));

var G__27915 = (i__21324__auto___27914 + (1));
i__21324__auto___27914 = G__27915;
continue;
} else {
}
break;
}

var G__27912 = args27910.length;
switch (G__27912) {
case 2:
return phzr.loader.atlas_xml.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.atlas_xml.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.atlas_xml.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.loader.atlas_xml.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27910.length)].join('')));

}
});

phzr.loader.atlas_xml.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlasXML(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.atlas_xml.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,texture_url){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlasXML(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url)));
});

phzr.loader.atlas_xml.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,texture_url,atlas_url){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlasXML(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url),phzr.impl.utils.core.clj__GT_phaser(atlas_url)));
});

phzr.loader.atlas_xml.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,texture_url,atlas_url,atlas_data){
return phzr.impl.utils.core.phaser__GT_clj(loader.atlasXML(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url),phzr.impl.utils.core.clj__GT_phaser(atlas_url),phzr.impl.utils.core.clj__GT_phaser(atlas_data)));
});

phzr.loader.atlas_xml.cljs$lang$maxFixedArity = 5;

/**
 * Adds an audio file to the current load queue.
 * 
 *   The file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getSound(key)`.
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   Mobile warning: There are some mobile devices (certain iPad 2 and iPad Mini revisions) that cannot play 48000 Hz audio.
 *   When they try to play the audio becomes extremely distorted and buzzes, eventually crashing the sound system.
 *   The solution is to use a lower encoding rate such as 44100 Hz.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the audio file.
 *  * urls (string | Array.<string> | Array.<object>) - Either a single string or an array of URIs or pairs of `{uri: .., type: ..}`.
 * If an array is specified then the first URI (or URI + mime pair) that is device-compatible will be selected.
 * For example: `'jump.mp3'`, `['jump.mp3', 'jump.ogg', 'jump.m4a']`, or `[{uri: 'data:<opus_resource>', type: 'opus'}, 'fallback.mp3']`.
 * BLOB and DATA URIs can be used but only support automatic detection when used in the pair form; otherwise the format must be manually checked before adding the resource.
 *  * auto-decode (boolean) {optional} - When using Web Audio the audio files can either be decoded at load time or run-time.
 * Audio files can't be played until they are decoded and, if specified, this enables immediate decoding. Decoding is a non-blocking async process, however it consumes huge amounts of CPU time on mobiles especially.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.audio = (function phzr$loader$audio(var_args){
var args27917 = [];
var len__21323__auto___27920 = arguments.length;
var i__21324__auto___27921 = (0);
while(true){
if((i__21324__auto___27921 < len__21323__auto___27920)){
args27917.push((arguments[i__21324__auto___27921]));

var G__27922 = (i__21324__auto___27921 + (1));
i__21324__auto___27921 = G__27922;
continue;
} else {
}
break;
}

var G__27919 = args27917.length;
switch (G__27919) {
case 3:
return phzr.loader.audio.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.audio.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27917.length)].join('')));

}
});

phzr.loader.audio.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,urls){
return phzr.impl.utils.core.phaser__GT_clj(loader.audio(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(urls)));
});

phzr.loader.audio.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,urls,auto_decode){
return phzr.impl.utils.core.phaser__GT_clj(loader.audio(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(urls),phzr.impl.utils.core.clj__GT_phaser(auto_decode)));
});

phzr.loader.audio.cljs$lang$maxFixedArity = 4;

/**
 * Adds an audio sprite file to the current load queue.
 * 
 *   The file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Audio Sprites are a combination of audio files and a JSON configuration.
 * 
 *   The JSON follows the format of that created by https://github.com/tonistiigi/audiosprite
 * 
 *   Retrieve the file via `Cache.getSoundData(key)`.
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the audio file.
 *  * urls (Array | string) - An array containing the URLs of the audio files, i.e.: [ 'audiosprite.mp3', 'audiosprite.ogg', 'audiosprite.m4a' ] or a single string containing just one URL.
 *  * json-url (string) {optional} - The URL of the audiosprite configuration JSON object. If you wish to pass the data directly set this parameter to null.
 *  * json-data (string | object) {optional} - A JSON object or string containing the audiosprite configuration data. This is ignored if jsonURL is not null.
 *  * auto-decode (boolean) {optional} - When using Web Audio the audio files can either be decoded at load time or run-time.
 * Audio files can't be played until they are decoded and, if specified, this enables immediate decoding. Decoding is a non-blocking async process, however it consumes huge amounts of CPU time on mobiles especially.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.audiosprite = (function phzr$loader$audiosprite(var_args){
var args27924 = [];
var len__21323__auto___27927 = arguments.length;
var i__21324__auto___27928 = (0);
while(true){
if((i__21324__auto___27928 < len__21323__auto___27927)){
args27924.push((arguments[i__21324__auto___27928]));

var G__27929 = (i__21324__auto___27928 + (1));
i__21324__auto___27928 = G__27929;
continue;
} else {
}
break;
}

var G__27926 = args27924.length;
switch (G__27926) {
case 3:
return phzr.loader.audiosprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.audiosprite.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.loader.audiosprite.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.loader.audiosprite.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27924.length)].join('')));

}
});

phzr.loader.audiosprite.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,urls){
return phzr.impl.utils.core.phaser__GT_clj(loader.audiosprite(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(urls)));
});

phzr.loader.audiosprite.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,urls,json_url){
return phzr.impl.utils.core.phaser__GT_clj(loader.audiosprite(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(urls),phzr.impl.utils.core.clj__GT_phaser(json_url)));
});

phzr.loader.audiosprite.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,urls,json_url,json_data){
return phzr.impl.utils.core.phaser__GT_clj(loader.audiosprite(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(urls),phzr.impl.utils.core.clj__GT_phaser(json_url),phzr.impl.utils.core.clj__GT_phaser(json_data)));
});

phzr.loader.audiosprite.cljs$core$IFn$_invoke$arity$6 = (function (loader,key,urls,json_url,json_data,auto_decode){
return phzr.impl.utils.core.phaser__GT_clj(loader.audiosprite(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(urls),phzr.impl.utils.core.clj__GT_phaser(json_url),phzr.impl.utils.core.clj__GT_phaser(json_data),phzr.impl.utils.core.clj__GT_phaser(auto_decode)));
});

phzr.loader.audiosprite.cljs$lang$maxFixedArity = 6;

/**
 * Adds a binary file to the current load queue.
 * 
 *   The file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getBinary(key)`.
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is 'alien'
 *   and no URL is given then the Loader will set the URL to be 'alien.bin'. It will always add `.bin` as the extension.
 *   If you do not desire this action then provide a URL.
 * 
 *   It will be loaded via xhr with a responseType of 'arraybuffer'. You can specify an optional callback to process the file after load.
 *   When the callback is called it will be passed 2 parameters: the key of the file and the file data.
 * 
 *   WARNING: If a callback is specified the data will be set to whatever it returns. Always return the data object, even if you didn't modify it.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the binary file.
 *  * url (string) {optional} - URL of the binary file. If undefined or `null` the url will be set to `<key>.bin`, i.e. if `key` was 'alien' then the URL will be 'alien.bin'.
 *  * callback (function) {optional} - Optional callback that will be passed the file after loading, so you can perform additional processing on it.
 *  * callback-context (object) {optional} - The context under which the callback will be applied. If not specified it will use the callback itself as the context.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.binary = (function phzr$loader$binary(var_args){
var args27931 = [];
var len__21323__auto___27934 = arguments.length;
var i__21324__auto___27935 = (0);
while(true){
if((i__21324__auto___27935 < len__21323__auto___27934)){
args27931.push((arguments[i__21324__auto___27935]));

var G__27936 = (i__21324__auto___27935 + (1));
i__21324__auto___27935 = G__27936;
continue;
} else {
}
break;
}

var G__27933 = args27931.length;
switch (G__27933) {
case 2:
return phzr.loader.binary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.binary.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.binary.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.loader.binary.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27931.length)].join('')));

}
});

phzr.loader.binary.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.binary(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.binary.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,url){
return phzr.impl.utils.core.phaser__GT_clj(loader.binary(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url)));
});

phzr.loader.binary.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,url,callback){
return phzr.impl.utils.core.phaser__GT_clj(loader.binary(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(callback)));
});

phzr.loader.binary.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,url,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(loader.binary(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.loader.binary.cljs$lang$maxFixedArity = 5;

/**
 * Adds Bitmap Font files to the current load queue.
 * 
 *   To create the Bitmap Font files you can use:
 * 
 *   BMFont (Windows, free): http://www.angelcode.com/products/bmfont/
 *   Glyph Designer (OS X, commercial): http://www.71squared.com/en/glyphdesigner
 *   Littera (Web-based, free): http://kvazars.com/littera/
 * 
 *   You can choose to either load the data externally, by providing a URL to an xml file.
 *   Or you can pass in an XML object or String via the `xmlData` parameter.
 *   If you pass a String the data is automatically run through `Loader.parseXML` and then immediately added to the Phaser.Cache.
 * 
 *   If URLs are provided the files are **not** loaded immediately after calling this method, but are added to the load queue.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getBitmapFont(key)`. XML files are automatically parsed upon load.
 *   If you need to control when the XML is parsed then use `Loader.text` instead and parse the XML file as needed.
 * 
 *   The URLs can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the textureURL isn't specified then the Loader will take the key and create a filename from that.
 *   For example if the key is 'megaFont' and textureURL is null then the Loader will set the URL to be 'megaFont.png'.
 *   The same is true for the xmlURL. If xmlURL isn't specified and no xmlData has been provided then the Loader will
 *   set the xmlURL to be the key. For example if the key is 'megaFont' the xmlURL will be set to 'megaFont.xml'.
 * 
 *   If you do not desire this action then provide URLs and / or a data object.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the bitmap font.
 *  * texture-url (string) - URL of the Bitmap Font texture file. If undefined or `null` the url will be set to `<key>.png`, i.e. if `key` was 'megaFont' then the URL will be 'megaFont.png'.
 *  * atlas-url (string) - URL of the Bitmap Font atlas file (xml/json).
 *  * atlas-data (object) - An optional Bitmap Font atlas in string form (stringified xml/json).
 *  * x-spacing (number) {optional} - If you'd like to add additional horizontal spacing between the characters then set the pixel value here.
 *  * y-spacing (number) {optional} - If you'd like to add additional vertical spacing between the lines then set the pixel value here.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.bitmap_font = (function phzr$loader$bitmap_font(var_args){
var args27938 = [];
var len__21323__auto___27941 = arguments.length;
var i__21324__auto___27942 = (0);
while(true){
if((i__21324__auto___27942 < len__21323__auto___27941)){
args27938.push((arguments[i__21324__auto___27942]));

var G__27943 = (i__21324__auto___27942 + (1));
i__21324__auto___27942 = G__27943;
continue;
} else {
}
break;
}

var G__27940 = args27938.length;
switch (G__27940) {
case 5:
return phzr.loader.bitmap_font.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.loader.bitmap_font.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.loader.bitmap_font.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27938.length)].join('')));

}
});

phzr.loader.bitmap_font.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,texture_url,atlas_url,atlas_data){
return phzr.impl.utils.core.phaser__GT_clj(loader.bitmapFont(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url),phzr.impl.utils.core.clj__GT_phaser(atlas_url),phzr.impl.utils.core.clj__GT_phaser(atlas_data)));
});

phzr.loader.bitmap_font.cljs$core$IFn$_invoke$arity$6 = (function (loader,key,texture_url,atlas_url,atlas_data,x_spacing){
return phzr.impl.utils.core.phaser__GT_clj(loader.bitmapFont(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url),phzr.impl.utils.core.clj__GT_phaser(atlas_url),phzr.impl.utils.core.clj__GT_phaser(atlas_data),phzr.impl.utils.core.clj__GT_phaser(x_spacing)));
});

phzr.loader.bitmap_font.cljs$core$IFn$_invoke$arity$7 = (function (loader,key,texture_url,atlas_url,atlas_data,x_spacing,y_spacing){
return phzr.impl.utils.core.phaser__GT_clj(loader.bitmapFont(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(texture_url),phzr.impl.utils.core.clj__GT_phaser(atlas_url),phzr.impl.utils.core.clj__GT_phaser(atlas_data),phzr.impl.utils.core.clj__GT_phaser(x_spacing),phzr.impl.utils.core.clj__GT_phaser(y_spacing)));
});

phzr.loader.bitmap_font.cljs$lang$maxFixedArity = 7;

/**
 * Check whether a file/asset with a specific key is queued to be loaded.
 * 
 *   To access a loaded asset use Phaser.Cache, eg. {@link Phaser.Cache#checkImageKey}
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * type (string) - The type asset you want to check.
 *  * key (string) - Key of the asset you want to check.
 * 
 *   Returns:  boolean - Return true if exists, otherwise return false.
 */
phzr.loader.check_key_exists = (function phzr$loader$check_key_exists(loader,type,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.checkKeyExists(phzr.impl.utils.core.clj__GT_phaser(type),phzr.impl.utils.core.clj__GT_phaser(key)));
});
/**
 * Find a file/asset with a specific key.
 * 
 *   Only assets in the download file queue will be found.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * type (string) - The type asset you want to check.
 *  * key (string) - Key of the asset you want to check.
 * 
 *   Returns:  any - Returns an object if found that has 2 properties: `index` and `file`; otherwise a non-true value is returned.
 *  The index may change and should only be used immediately following this call.
 */
phzr.loader.get_asset = (function phzr$loader$get_asset(loader,type,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.getAsset(phzr.impl.utils.core.clj__GT_phaser(type),phzr.impl.utils.core.clj__GT_phaser(key)));
});
/**
 * Get the queue-index of the file/asset with a specific key.
 * 
 *   Only assets in the download file queue will be found.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * type (string) - The type asset you want to check.
 *  * key (string) - Key of the asset you want to check.
 * 
 *   Returns:  number - The index of this key in the filelist, or -1 if not found.
 *  The index may change and should only be used immediately following this call
 */
phzr.loader.get_asset_index = (function phzr$loader$get_asset_index(loader,type,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.getAssetIndex(phzr.impl.utils.core.clj__GT_phaser(type),phzr.impl.utils.core.clj__GT_phaser(key)));
});
/**
 * Adds an Image to the current load queue.
 * 
 *   The file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.
 * 
 *   Phaser can load all common image types: png, jpg, gif and any other format the browser can natively handle.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the image via `Cache.getImage(key)`
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is 'alien'
 *   and no URL is given then the Loader will set the URL to be 'alien.png'. It will always add `.png` as the extension.
 *   If you do not desire this action then provide a URL.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of this image file.
 *  * url (string) {optional} - URL of an image file. If undefined or `null` the url will be set to `<key>.png`, i.e. if `key` was 'alien' then the URL will be 'alien.png'.
 *  * overwrite (boolean) {optional} - If an unloaded file with a matching key already exists in the queue, this entry will overwrite it.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.image = (function phzr$loader$image(var_args){
var args27945 = [];
var len__21323__auto___27948 = arguments.length;
var i__21324__auto___27949 = (0);
while(true){
if((i__21324__auto___27949 < len__21323__auto___27948)){
args27945.push((arguments[i__21324__auto___27949]));

var G__27950 = (i__21324__auto___27949 + (1));
i__21324__auto___27949 = G__27950;
continue;
} else {
}
break;
}

var G__27947 = args27945.length;
switch (G__27947) {
case 2:
return phzr.loader.image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.image.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27945.length)].join('')));

}
});

phzr.loader.image.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.image(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.image.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,url){
return phzr.impl.utils.core.phaser__GT_clj(loader.image(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url)));
});

phzr.loader.image.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,url,overwrite){
return phzr.impl.utils.core.phaser__GT_clj(loader.image(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(overwrite)));
});

phzr.loader.image.cljs$lang$maxFixedArity = 4;

/**
 * Adds a JSON file to the current load queue.
 * 
 *   The file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getJSON(key)`. JSON files are automatically parsed upon load.
 *   If you need to control when the JSON is parsed then use `Loader.text` instead and parse the text file as needed.
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is 'alien'
 *   and no URL is given then the Loader will set the URL to be 'alien.json'. It will always add `.json` as the extension.
 *   If you do not desire this action then provide a URL.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the json file.
 *  * url (string) {optional} - URL of the JSON file. If undefined or `null` the url will be set to `<key>.json`, i.e. if `key` was 'alien' then the URL will be 'alien.json'.
 *  * overwrite (boolean) {optional} - If an unloaded file with a matching key already exists in the queue, this entry will overwrite it.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.json = (function phzr$loader$json(var_args){
var args27952 = [];
var len__21323__auto___27955 = arguments.length;
var i__21324__auto___27956 = (0);
while(true){
if((i__21324__auto___27956 < len__21323__auto___27955)){
args27952.push((arguments[i__21324__auto___27956]));

var G__27957 = (i__21324__auto___27956 + (1));
i__21324__auto___27956 = G__27957;
continue;
} else {
}
break;
}

var G__27954 = args27952.length;
switch (G__27954) {
case 2:
return phzr.loader.json.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.json.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.json.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27952.length)].join('')));

}
});

phzr.loader.json.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.json(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.json.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,url){
return phzr.impl.utils.core.phaser__GT_clj(loader.json(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url)));
});

phzr.loader.json.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,url,overwrite){
return phzr.impl.utils.core.phaser__GT_clj(loader.json(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(overwrite)));
});

phzr.loader.json.cljs$lang$maxFixedArity = 4;

/**
 * Add a JSON resource pack ('packfile') to the Loader.
 * 
 *   A packfile is a JSON file that contains a list of assets to the be loaded.
 *   Please see the example 'loader/asset pack' in the Phaser Examples repository.
 * 
 *   Packs are always put before the first non-pack file that is not loaded / loading.
 * 
 *   This means that all packs added before any loading has started are added to the front
 *   of the file queue, in the order added.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   The URL of the packfile can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of this resource pack.
 *  * url (string) {optional} - URL of the Asset Pack JSON file. If you wish to pass a json object instead set this to null and pass the object as the data parameter.
 *  * data (object) {optional} - The Asset Pack JSON data. Use this to pass in a json data object rather than loading it from a URL. TODO
 *  * callback-context (object) {optional} - Some Loader operations, like Binary and Script require a context for their callbacks. Pass the context here.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.pack = (function phzr$loader$pack(var_args){
var args27959 = [];
var len__21323__auto___27962 = arguments.length;
var i__21324__auto___27963 = (0);
while(true){
if((i__21324__auto___27963 < len__21323__auto___27962)){
args27959.push((arguments[i__21324__auto___27963]));

var G__27964 = (i__21324__auto___27963 + (1));
i__21324__auto___27963 = G__27964;
continue;
} else {
}
break;
}

var G__27961 = args27959.length;
switch (G__27961) {
case 2:
return phzr.loader.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.pack.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.loader.pack.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27959.length)].join('')));

}
});

phzr.loader.pack.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.pack(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.pack.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,url){
return phzr.impl.utils.core.phaser__GT_clj(loader.pack(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url)));
});

phzr.loader.pack.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,url,data){
return phzr.impl.utils.core.phaser__GT_clj(loader.pack(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(data)));
});

phzr.loader.pack.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,url,data,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(loader.pack(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(data),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.loader.pack.cljs$lang$maxFixedArity = 5;

/**
 * Adds a physics data file to the current load queue.
 * 
 *   The data must be in `Lime + Corona` JSON format. [Physics Editor](https://www.codeandweb.com) by code'n'web exports in this format natively.
 * 
 *   You can choose to either load the data externally, by providing a URL to a json file.
 *   Or you can pass in a JSON object or String via the `data` parameter.
 *   If you pass a String the data is automatically run through `JSON.parse` and then immediately added to the Phaser.Cache.
 * 
 *   If a URL is provided the file is **not** loaded immediately after calling this method, but is added to the load queue.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getJSON(key)`. JSON files are automatically parsed upon load.
 *   If you need to control when the JSON is parsed then use `Loader.text` instead and parse the text file as needed.
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the URL isn't specified and no data is given then the Loader will take the key and create a filename from that.
 *   For example if the key is 'alien' and no URL or data is given then the Loader will set the URL to be 'alien.json'.
 *   It will always use `.json` as the extension.
 * 
 *   If you do not desire this action then provide a URL or data object.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the physics json data.
 *  * url (string) {optional} - URL of the physics data file. If undefined or `null` and no data is given the url will be set to `<key>.json`, i.e. if `key` was 'alien' then the URL will be 'alien.json'.
 *  * data (object | string) {optional} - An optional JSON data object. If given then the url is ignored and this JSON object is used for physics data instead.
 *  * format (string) {optional} - The format of the physics data.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.physics = (function phzr$loader$physics(var_args){
var args27966 = [];
var len__21323__auto___27969 = arguments.length;
var i__21324__auto___27970 = (0);
while(true){
if((i__21324__auto___27970 < len__21323__auto___27969)){
args27966.push((arguments[i__21324__auto___27970]));

var G__27971 = (i__21324__auto___27970 + (1));
i__21324__auto___27970 = G__27971;
continue;
} else {
}
break;
}

var G__27968 = args27966.length;
switch (G__27968) {
case 2:
return phzr.loader.physics.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.physics.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.physics.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.loader.physics.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27966.length)].join('')));

}
});

phzr.loader.physics.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.physics(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.physics.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,url){
return phzr.impl.utils.core.phaser__GT_clj(loader.physics(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url)));
});

phzr.loader.physics.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,url,data){
return phzr.impl.utils.core.phaser__GT_clj(loader.physics(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(data)));
});

phzr.loader.physics.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,url,data,format){
return phzr.impl.utils.core.phaser__GT_clj(loader.physics(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(data),phzr.impl.utils.core.clj__GT_phaser(format)));
});

phzr.loader.physics.cljs$lang$maxFixedArity = 5;

/**
 * Adds a JavaScript file to the current load queue.
 * 
 *   The file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.
 * 
 *   The key must be a unique String.
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is 'alien'
 *   and no URL is given then the Loader will set the URL to be 'alien.js'. It will always add `.js` as the extension.
 *   If you do not desire this action then provide a URL.
 * 
 *   Upon successful load the JavaScript is automatically turned into a script tag and executed, so be careful what you load!
 * 
 *   A callback, which will be invoked as the script tag has been created, can also be specified.
 *   The callback must return relevant `data`.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the script file.
 *  * url (string) {optional} - URL of the JavaScript file. If undefined or `null` the url will be set to `<key>.js`, i.e. if `key` was 'alien' then the URL will be 'alien.js'.
 *  * callback (function) {optional} - Optional callback that will be called after the script tag has loaded, so you can perform additional processing.
 *  * callback-context (object) {optional} - The context under which the callback will be applied. If not specified it will use the Phaser Loader as the context.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.script = (function phzr$loader$script(var_args){
var args27973 = [];
var len__21323__auto___27976 = arguments.length;
var i__21324__auto___27977 = (0);
while(true){
if((i__21324__auto___27977 < len__21323__auto___27976)){
args27973.push((arguments[i__21324__auto___27977]));

var G__27978 = (i__21324__auto___27977 + (1));
i__21324__auto___27977 = G__27978;
continue;
} else {
}
break;
}

var G__27975 = args27973.length;
switch (G__27975) {
case 2:
return phzr.loader.script.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.script.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.script.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.loader.script.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27973.length)].join('')));

}
});

phzr.loader.script.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.script(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.script.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,url){
return phzr.impl.utils.core.phaser__GT_clj(loader.script(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url)));
});

phzr.loader.script.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,url,callback){
return phzr.impl.utils.core.phaser__GT_clj(loader.script(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(callback)));
});

phzr.loader.script.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,url,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(loader.script(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.loader.script.cljs$lang$maxFixedArity = 5;

/**
 * Set a Sprite to be a 'preload' sprite by passing it to this method.
 * 
 *   A 'preload' sprite will have its width or height crop adjusted based on the percentage of the loader in real-time.
 *   This allows you to easily make loading bars for games.
 * 
 *   The sprite will automatically be made visible when calling this.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * sprite (Phaser.Sprite | Phaser.Image) - The sprite or image that will be cropped during the load.
 *  * direction (number) {optional} - A value of zero means the sprite will be cropped horizontally, a value of 1 means its will be cropped vertically.
 */
phzr.loader.set_preload_sprite = (function phzr$loader$set_preload_sprite(var_args){
var args27980 = [];
var len__21323__auto___27983 = arguments.length;
var i__21324__auto___27984 = (0);
while(true){
if((i__21324__auto___27984 < len__21323__auto___27983)){
args27980.push((arguments[i__21324__auto___27984]));

var G__27985 = (i__21324__auto___27984 + (1));
i__21324__auto___27984 = G__27985;
continue;
} else {
}
break;
}

var G__27982 = args27980.length;
switch (G__27982) {
case 2:
return phzr.loader.set_preload_sprite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.set_preload_sprite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27980.length)].join('')));

}
});

phzr.loader.set_preload_sprite.cljs$core$IFn$_invoke$arity$2 = (function (loader,sprite){
return phzr.impl.utils.core.phaser__GT_clj(loader.setPreloadSprite(phzr.impl.utils.core.clj__GT_phaser(sprite)));
});

phzr.loader.set_preload_sprite.cljs$core$IFn$_invoke$arity$3 = (function (loader,sprite,direction){
return phzr.impl.utils.core.phaser__GT_clj(loader.setPreloadSprite(phzr.impl.utils.core.clj__GT_phaser(sprite),phzr.impl.utils.core.clj__GT_phaser(direction)));
});

phzr.loader.set_preload_sprite.cljs$lang$maxFixedArity = 3;

/**
 * Adds a fragment shader file to the current load queue.
 * 
 *   The file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getShader(key)`.
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is 'blur'
 *   and no URL is given then the Loader will set the URL to be 'blur.frag'. It will always add `.frag` as the extension.
 *   If you do not desire this action then provide a URL.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the fragment file.
 *  * url (string) {optional} - URL of the fragment file. If undefined or `null` the url will be set to `<key>.frag`, i.e. if `key` was 'blur' then the URL will be 'blur.frag'.
 *  * overwrite (boolean) {optional} - If an unloaded file with a matching key already exists in the queue, this entry will overwrite it.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.shader = (function phzr$loader$shader(var_args){
var args27987 = [];
var len__21323__auto___27990 = arguments.length;
var i__21324__auto___27991 = (0);
while(true){
if((i__21324__auto___27991 < len__21323__auto___27990)){
args27987.push((arguments[i__21324__auto___27991]));

var G__27992 = (i__21324__auto___27991 + (1));
i__21324__auto___27991 = G__27992;
continue;
} else {
}
break;
}

var G__27989 = args27987.length;
switch (G__27989) {
case 2:
return phzr.loader.shader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.shader.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.shader.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27987.length)].join('')));

}
});

phzr.loader.shader.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.shader(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.shader.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,url){
return phzr.impl.utils.core.phaser__GT_clj(loader.shader(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url)));
});

phzr.loader.shader.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,url,overwrite){
return phzr.impl.utils.core.phaser__GT_clj(loader.shader(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(overwrite)));
});

phzr.loader.shader.cljs$lang$maxFixedArity = 4;

/**
 * Adds a Sprite Sheet to the current load queue.
 * 
 *   The file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.
 * 
 *   To clarify the terminology that Phaser uses: A Sprite Sheet is an image containing frames, usually of an animation, that are all equal
 *   dimensions and often in sequence. For example if the frame size is 32x32 then every frame in the sprite sheet will be that size. 
 *   Sometimes (outside of Phaser) the term 'sprite sheet' is used to refer to a texture atlas.
 *   A Texture Atlas works by packing together images as best it can, using whatever frame sizes it likes, often with cropping and trimming
 *   the frames in the process. Software such as Texture Packer, Flash CC or Shoebox all generate texture atlases, not sprite sheets.
 *   If you've got an atlas then use `Loader.atlas` instead.
 * 
 *   The key must be a unique String. It is used to add the image to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getImage(key)`. Sprite sheets, being image based, live in the same Cache as all other Images.
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is 'alien'
 *   and no URL is given then the Loader will set the URL to be 'alien.png'. It will always add `.png` as the extension.
 *   If you do not desire this action then provide a URL.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the sheet file.
 *  * url (string) - URL of the sprite sheet file. If undefined or `null` the url will be set to `<key>.png`, i.e. if `key` was 'alien' then the URL will be 'alien.png'.
 *  * frame-width (number) - Width in pixels of a single frame in the sprite sheet.
 *  * frame-height (number) - Height in pixels of a single frame in the sprite sheet.
 *  * frame-max (number) {optional} - How many frames in this sprite sheet. If not specified it will divide the whole image into frames.
 *  * margin (number) {optional} - If the frames have been drawn with a margin, specify the amount here.
 *  * spacing (number) {optional} - If the frames have been drawn with spacing between them, specify the amount here.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.spritesheet = (function phzr$loader$spritesheet(var_args){
var args27994 = [];
var len__21323__auto___27997 = arguments.length;
var i__21324__auto___27998 = (0);
while(true){
if((i__21324__auto___27998 < len__21323__auto___27997)){
args27994.push((arguments[i__21324__auto___27998]));

var G__27999 = (i__21324__auto___27998 + (1));
i__21324__auto___27998 = G__27999;
continue;
} else {
}
break;
}

var G__27996 = args27994.length;
switch (G__27996) {
case 5:
return phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27994.length)].join('')));

}
});

phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,url,frame_width,frame_height){
return phzr.impl.utils.core.phaser__GT_clj(loader.spritesheet(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(frame_width),phzr.impl.utils.core.clj__GT_phaser(frame_height)));
});

phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$6 = (function (loader,key,url,frame_width,frame_height,frame_max){
return phzr.impl.utils.core.phaser__GT_clj(loader.spritesheet(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(frame_width),phzr.impl.utils.core.clj__GT_phaser(frame_height),phzr.impl.utils.core.clj__GT_phaser(frame_max)));
});

phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$7 = (function (loader,key,url,frame_width,frame_height,frame_max,margin){
return phzr.impl.utils.core.phaser__GT_clj(loader.spritesheet(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(frame_width),phzr.impl.utils.core.clj__GT_phaser(frame_height),phzr.impl.utils.core.clj__GT_phaser(frame_max),phzr.impl.utils.core.clj__GT_phaser(margin)));
});

phzr.loader.spritesheet.cljs$core$IFn$_invoke$arity$8 = (function (loader,key,url,frame_width,frame_height,frame_max,margin,spacing){
return phzr.impl.utils.core.phaser__GT_clj(loader.spritesheet(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(frame_width),phzr.impl.utils.core.clj__GT_phaser(frame_height),phzr.impl.utils.core.clj__GT_phaser(frame_max),phzr.impl.utils.core.clj__GT_phaser(margin),phzr.impl.utils.core.clj__GT_phaser(spacing)));
});

phzr.loader.spritesheet.cljs$lang$maxFixedArity = 8;

/**
 * Start loading the assets. Normally you don't need to call this yourself as the StateManager will do so.
 */
phzr.loader.start = (function phzr$loader$start(loader){
return phzr.impl.utils.core.phaser__GT_clj(loader.start());
});
/**
 * Adds a Text file to the current load queue.
 * 
 *   The file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getText(key)`
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is 'alien'
 *   and no URL is given then the Loader will set the URL to be 'alien.txt'. It will always add `.txt` as the extension.
 *   If you do not desire this action then provide a URL.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the text file.
 *  * url (string) {optional} - URL of the text file. If undefined or `null` the url will be set to `<key>.txt`, i.e. if `key` was 'alien' then the URL will be 'alien.txt'.
 *  * overwrite (boolean) {optional} - If an unloaded file with a matching key already exists in the queue, this entry will overwrite it.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.text = (function phzr$loader$text(var_args){
var args28001 = [];
var len__21323__auto___28004 = arguments.length;
var i__21324__auto___28005 = (0);
while(true){
if((i__21324__auto___28005 < len__21323__auto___28004)){
args28001.push((arguments[i__21324__auto___28005]));

var G__28006 = (i__21324__auto___28005 + (1));
i__21324__auto___28005 = G__28006;
continue;
} else {
}
break;
}

var G__28003 = args28001.length;
switch (G__28003) {
case 2:
return phzr.loader.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.text.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.text.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28001.length)].join('')));

}
});

phzr.loader.text.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.text(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.text.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,url){
return phzr.impl.utils.core.phaser__GT_clj(loader.text(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url)));
});

phzr.loader.text.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,url,overwrite){
return phzr.impl.utils.core.phaser__GT_clj(loader.text(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(overwrite)));
});

phzr.loader.text.cljs$lang$maxFixedArity = 4;

/**
 * Adds a Tile Map data file to the current load queue.
 * 
 *   You can choose to either load the data externally, by providing a URL to a json file.
 *   Or you can pass in a JSON object or String via the `data` parameter.
 *   If you pass a String the data is automatically run through `JSON.parse` and then immediately added to the Phaser.Cache.
 * 
 *   If a URL is provided the file is **not** loaded immediately after calling this method, but is added to the load queue.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getTilemapData(key)`. JSON files are automatically parsed upon load.
 *   If you need to control when the JSON is parsed then use `Loader.text` instead and parse the text file as needed.
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the URL isn't specified and no data is given then the Loader will take the key and create a filename from that.
 *   For example if the key is 'level1' and no URL or data is given then the Loader will set the URL to be 'level1.json'.
 *   If you set the format to be Tilemap.CSV it will set the URL to be 'level1.csv' instead.
 * 
 *   If you do not desire this action then provide a URL or data object.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the tilemap data.
 *  * url (string) {optional} - URL of the tile map file. If undefined or `null` and no data is given the url will be set to `<key>.json`, i.e. if `key` was 'level1' then the URL will be 'level1.json'.
 *  * data (object | string) {optional} - An optional JSON data object. If given then the url is ignored and this JSON object is used for map data instead.
 *  * format (number) {optional} - The format of the map data. Either Phaser.Tilemap.CSV or Phaser.Tilemap.TILED_JSON.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.tilemap = (function phzr$loader$tilemap(var_args){
var args28008 = [];
var len__21323__auto___28011 = arguments.length;
var i__21324__auto___28012 = (0);
while(true){
if((i__21324__auto___28012 < len__21323__auto___28011)){
args28008.push((arguments[i__21324__auto___28012]));

var G__28013 = (i__21324__auto___28012 + (1));
i__21324__auto___28012 = G__28013;
continue;
} else {
}
break;
}

var G__28010 = args28008.length;
switch (G__28010) {
case 2:
return phzr.loader.tilemap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.tilemap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.tilemap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.loader.tilemap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28008.length)].join('')));

}
});

phzr.loader.tilemap.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.tilemap(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.tilemap.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,url){
return phzr.impl.utils.core.phaser__GT_clj(loader.tilemap(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url)));
});

phzr.loader.tilemap.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,url,data){
return phzr.impl.utils.core.phaser__GT_clj(loader.tilemap(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(data)));
});

phzr.loader.tilemap.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,url,data,format){
return phzr.impl.utils.core.phaser__GT_clj(loader.tilemap(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(data),phzr.impl.utils.core.clj__GT_phaser(format)));
});

phzr.loader.tilemap.cljs$lang$maxFixedArity = 5;

/**
 * Adds a video file to the current load queue.
 * 
 *   The file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getVideo(key)`.
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   You don't need to preload a video in order to play it in your game. See `Video.createVideoFromURL` for details.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the video file.
 *  * urls (string | Array.<string> | Array.<object>) - Either a single string or an array of URIs or pairs of `{uri: .., type: ..}`.
 * If an array is specified then the first URI (or URI + mime pair) that is device-compatible will be selected.
 * For example: `'boom.mp4'`, `['boom.mp4', 'boom.ogg', 'boom.webm']`, or `[{uri: 'data:<opus_resource>', type: 'opus'}, 'fallback.mp4']`.
 * BLOB and DATA URIs can be used but only support automatic detection when used in the pair form; otherwise the format must be manually checked before adding the resource.
 *  * load-event (string) {optional} - This sets the Video source event to listen for before the load is considered complete.
 * 'canplaythrough' implies the video has downloaded enough, and bandwidth is high enough that it can be played to completion.
 * 'canplay' implies the video has downloaded enough to start playing, but not necessarily to finish.
 * 'loadeddata' just makes sure that the video meta data and first frame have downloaded. Phaser uses this value automatically if the
 * browser is detected as being Firefox and no `loadEvent` is given, otherwise it defaults to `canplaythrough`.
 *  * as-blob (boolean) {optional} - Video files can either be loaded via the creation of a video element which has its src property set.
 * Or they can be loaded via xhr, stored as binary data in memory and then converted to a Blob. This isn't supported in IE9 or Android 2.
 * If you need to have the same video playing at different times across multiple Sprites then you need to load it as a Blob.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.video = (function phzr$loader$video(var_args){
var args28015 = [];
var len__21323__auto___28018 = arguments.length;
var i__21324__auto___28019 = (0);
while(true){
if((i__21324__auto___28019 < len__21323__auto___28018)){
args28015.push((arguments[i__21324__auto___28019]));

var G__28020 = (i__21324__auto___28019 + (1));
i__21324__auto___28019 = G__28020;
continue;
} else {
}
break;
}

var G__28017 = args28015.length;
switch (G__28017) {
case 3:
return phzr.loader.video.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.video.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return phzr.loader.video.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28015.length)].join('')));

}
});

phzr.loader.video.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,urls){
return phzr.impl.utils.core.phaser__GT_clj(loader.video(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(urls)));
});

phzr.loader.video.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,urls,load_event){
return phzr.impl.utils.core.phaser__GT_clj(loader.video(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(urls),phzr.impl.utils.core.clj__GT_phaser(load_event)));
});

phzr.loader.video.cljs$core$IFn$_invoke$arity$5 = (function (loader,key,urls,load_event,as_blob){
return phzr.impl.utils.core.phaser__GT_clj(loader.video(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(urls),phzr.impl.utils.core.clj__GT_phaser(load_event),phzr.impl.utils.core.clj__GT_phaser(as_blob)));
});

phzr.loader.video.cljs$lang$maxFixedArity = 5;

/**
 * Add a synchronization point to the assets/files added within the supplied callback.
 * 
 *   A synchronization point denotes that an asset _must_ be completely loaded before
 *   subsequent assets can be loaded. An asset marked as a sync-point does not need to wait
 *   for previous assets to load (unless they are sync-points). Resources, such as packs, may still
 *   be downloaded around sync-points, as long as they do not finalize loading.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * callback (function) - The callback is invoked and is supplied with a single argument: the loader.
 *  * callback-context (object) {optional} - Context for the callback.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.with_sync_points = (function phzr$loader$with_sync_points(var_args){
var args28022 = [];
var len__21323__auto___28025 = arguments.length;
var i__21324__auto___28026 = (0);
while(true){
if((i__21324__auto___28026 < len__21323__auto___28025)){
args28022.push((arguments[i__21324__auto___28026]));

var G__28027 = (i__21324__auto___28026 + (1));
i__21324__auto___28026 = G__28027;
continue;
} else {
}
break;
}

var G__28024 = args28022.length;
switch (G__28024) {
case 2:
return phzr.loader.with_sync_points.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.with_sync_points.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28022.length)].join('')));

}
});

phzr.loader.with_sync_points.cljs$core$IFn$_invoke$arity$2 = (function (loader,callback){
return phzr.impl.utils.core.phaser__GT_clj(loader.withSyncPoints(phzr.impl.utils.core.clj__GT_phaser(callback)));
});

phzr.loader.with_sync_points.cljs$core$IFn$_invoke$arity$3 = (function (loader,callback,callback_context){
return phzr.impl.utils.core.phaser__GT_clj(loader.withSyncPoints(phzr.impl.utils.core.clj__GT_phaser(callback),phzr.impl.utils.core.clj__GT_phaser(callback_context)));
});

phzr.loader.with_sync_points.cljs$lang$maxFixedArity = 3;

/**
 * Adds an XML file to the current load queue.
 * 
 *   The file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.
 * 
 *   The key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.
 * 
 *   Retrieve the file via `Cache.getXML(key)`.
 * 
 *   The URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.
 * 
 *   If the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is 'alien'
 *   and no URL is given then the Loader will set the URL to be 'alien.xml'. It will always add `.xml` as the extension.
 *   If you do not desire this action then provide a URL.
 * 
 *   Parameters:
 *  * loader (Phaser.Loader) - Targeted instance for method
 *  * key (string) - Unique asset key of the xml file.
 *  * url (string) {optional} - URL of the XML file. If undefined or `null` the url will be set to `<key>.xml`, i.e. if `key` was 'alien' then the URL will be 'alien.xml'.
 *  * overwrite (boolean) {optional} - If an unloaded file with a matching key already exists in the queue, this entry will overwrite it.
 * 
 *   Returns:  Phaser.Loader - This Loader instance.
 */
phzr.loader.xml = (function phzr$loader$xml(var_args){
var args28029 = [];
var len__21323__auto___28032 = arguments.length;
var i__21324__auto___28033 = (0);
while(true){
if((i__21324__auto___28033 < len__21323__auto___28032)){
args28029.push((arguments[i__21324__auto___28033]));

var G__28034 = (i__21324__auto___28033 + (1));
i__21324__auto___28033 = G__28034;
continue;
} else {
}
break;
}

var G__28031 = args28029.length;
switch (G__28031) {
case 2:
return phzr.loader.xml.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return phzr.loader.xml.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return phzr.loader.xml.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28029.length)].join('')));

}
});

phzr.loader.xml.cljs$core$IFn$_invoke$arity$2 = (function (loader,key){
return phzr.impl.utils.core.phaser__GT_clj(loader.xml(phzr.impl.utils.core.clj__GT_phaser(key)));
});

phzr.loader.xml.cljs$core$IFn$_invoke$arity$3 = (function (loader,key,url){
return phzr.impl.utils.core.phaser__GT_clj(loader.xml(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url)));
});

phzr.loader.xml.cljs$core$IFn$_invoke$arity$4 = (function (loader,key,url,overwrite){
return phzr.impl.utils.core.phaser__GT_clj(loader.xml(phzr.impl.utils.core.clj__GT_phaser(key),phzr.impl.utils.core.clj__GT_phaser(url),phzr.impl.utils.core.clj__GT_phaser(overwrite)));
});

phzr.loader.xml.cljs$lang$maxFixedArity = 4;

