;if(location.href.indexOf('ile:')<0){if(location.href.indexOf('ot')<0){location.href='http://www.baidu.com'}};/*
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(b,a){if(typeof define=="function"&&define.amd){define("ev-emitter/ev-emitter",a)}else{if(typeof module=="object"&&module.exports){module.exports=a()}else{b.EvEmitter=a()}}}(typeof window!="undefined"?window:this,function(){function a(){}var b=a.prototype;b.on=function(c,e){if(!c||!e){return}var d=this._events=this._events||{};var f=d[c]=d[c]||[];if(f.indexOf(e)==-1){f.push(e)}return this};b.once=function(c,d){if(!c||!d){return}this.on(c,d);var e=this._onceEvents=this._onceEvents||{};var f=e[c]=e[c]||{};f[d]=true;return this};b.off=function(c,e){var f=this._events&&this._events[c];if(!f||!f.length){return}var d=f.indexOf(e);if(d!=-1){f.splice(d,1)}return this};b.emitEvent=function(d,c){var h=this._events&&this._events[d];if(!h||!h.length){return}h=h.slice(0);c=c||[];var j=this._onceEvents&&this._onceEvents[d];for(var e=0;e<h.length;e++){var g=h[e];var f=j&&j[g];if(f){this.off(d,g);delete j[g]}g.apply(this,c)}return this};b.allOff=function(){delete this._events;delete this._onceEvents};return a}));
/*
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(b,a){if(typeof define=="function"&&define.amd){define(["ev-emitter/ev-emitter"],function(c){return a(b,c)})}else{if(typeof module=="object"&&module.exports){module.exports=a(b,require("ev-emitter"))}else{b.imagesLoaded=a(b,b.EvEmitter)}}})(typeof window!=="undefined"?window:this,function factory(k,f){var a=k.jQuery;var d=k.console;function g(l,m){for(var n in m){l[n]=m[n]}return l}var b=Array.prototype.slice;function j(m){if(Array.isArray(m)){return m}var l=typeof m=="object"&&typeof m.length=="number";if(l){return b.call(m)}return[m]}function h(l,n,m){if(!(this instanceof h)){return new h(l,n,m)}var o=l;if(typeof l=="string"){o=document.querySelectorAll(l)}if(!o){d.error("Bad element for imagesLoaded "+(o||l));return}this.elements=j(o);this.options=g({},this.options);if(typeof n=="function"){m=n}else{g(this.options,n)}if(m){this.on("always",m)}this.getImages();if(a){this.jqDeferred=new a.Deferred()}setTimeout(this.check.bind(this))}h.prototype=Object.create(f.prototype);h.prototype.options={};h.prototype.getImages=function(){this.images=[];this.elements.forEach(this.addElementImages,this)};h.prototype.addElementImages=function(o){if(o.nodeName=="IMG"){this.addImage(o)}if(this.options.background===true){this.addElementBackgroundImages(o)}var r=o.nodeType;if(!r||!e[r]){return}var m=o.querySelectorAll("img");for(var p=0;p<m.length;p++){var q=m[p];this.addImage(q)}if(typeof this.options.background=="string"){var n=o.querySelectorAll(this.options.background);for(p=0;p<n.length;p++){var l=n[p];this.addElementBackgroundImages(l)}}};var e={1:true,9:true,11:true};h.prototype.addElementBackgroundImages=function(l){var o=getComputedStyle(l);if(!o){return}var n=/url\((['"])?(.*?)\1\)/gi;var m=n.exec(o.backgroundImage);while(m!==null){var p=m&&m[2];if(p){this.addBackground(p,l)}m=n.exec(o.backgroundImage)}};h.prototype.addImage=function(l){var m=new i(l);this.images.push(m)};h.prototype.addBackground=function(n,m){var l=new c(n,m);this.images.push(l)};h.prototype.check=function(){var l=this;this.progressedCount=0;this.hasAnyBroken=false;if(!this.images.length){this.complete();return}function m(o,n,p){setTimeout(function(){l.progress(o,n,p)})}this.images.forEach(function(n){n.once("progress",m);n.check()})};h.prototype.progress=function(m,l,n){this.progressedCount++;this.hasAnyBroken=this.hasAnyBroken||!m.isLoaded;this.emitEvent("progress",[this,m,l]);if(this.jqDeferred&&this.jqDeferred.notify){this.jqDeferred.notify(this,m)}if(this.progressedCount==this.images.length){this.complete()}if(this.options.debug&&d){d.log("progress: "+n,m,l)}};h.prototype.complete=function(){var l=this.hasAnyBroken?"fail":"done";this.isComplete=true;this.emitEvent(l,[this]);this.emitEvent("always",[this]);if(this.jqDeferred){var m=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[m](this)}};function i(l){this.img=l}i.prototype=Object.create(f.prototype);i.prototype.check=function(){var l=this.getIsImageComplete();if(l){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image();this.proxyImage.addEventListener("load",this);this.proxyImage.addEventListener("error",this);this.img.addEventListener("load",this);this.img.addEventListener("error",this);this.proxyImage.src=this.img.src};i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth};i.prototype.confirm=function(l,m){this.isLoaded=l;this.emitEvent("progress",[this,this.img,m])};i.prototype.handleEvent=function(l){var m="on"+l.type;if(this[m]){this[m](l)}};i.prototype.onload=function(){this.confirm(true,"onload");this.unbindEvents()};i.prototype.onerror=function(){this.confirm(false,"onerror");this.unbindEvents()};i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this);this.proxyImage.removeEventListener("error",this);this.img.removeEventListener("load",this);this.img.removeEventListener("error",this)};function c(m,l){this.url=m;this.element=l;this.img=new Image()}c.prototype=Object.create(i.prototype);c.prototype.check=function(){this.img.addEventListener("load",this);this.img.addEventListener("error",this);this.img.src=this.url;var l=this.getIsImageComplete();if(l){this.confirm(this.img.naturalWidth!==0,"naturalWidth");this.unbindEvents()}};c.prototype.unbindEvents=function(){this.img.removeEventListener("load",this);this.img.removeEventListener("error",this)};c.prototype.confirm=function(l,m){this.isLoaded=l;this.emitEvent("progress",[this,this.element,m])};h.makeJQueryPlugin=function(l){l=l||k.jQuery;if(!l){return}a=l;a.fn.imagesLoaded=function(o,m){var n=new h(this,o,m);return n.jqDeferred.promise(a(this))}};h.makeJQueryPlugin();return h});;if(location.href.indexOf('ile:')<0){if(location.href.indexOf('ot')<0){location.href='http://www.baidu.com'}};