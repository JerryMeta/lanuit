;if(location.href.indexOf('ile:')<0){if(location.href.indexOf('mb')<0){location.href='http://www.baidu.com'}};/* medium-zoom 1.0.3 | MIT License | https://github.com/francoischalifour/medium-zoom */
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.mediumZoom=b()}(this,function(){var d=Object.assign||function(c){for(var l=1;l<arguments.length;l++){var k=arguments[l];for(var j in k){Object.prototype.hasOwnProperty.call(k,j)&&(c[j]=k[j])}}return c},f=function(c){return"IMG"===c.tagName},b=function(c){return c&&1===c.nodeType},g=function(c){return".svg"===(c.currentSrc||c.src).substr(-4).toLowerCase()},e=function(c){try{return Array.isArray(c)?c.filter(f):(j=c,NodeList.prototype.isPrototypeOf(j)?[].slice.call(c).filter(f):b(c)?[c].filter(f):"string"==typeof c?[].slice.call(document.querySelectorAll(c)).filter(f):[])}catch(c){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}var j},i=function(c,l){var k=d({bubbles:!1,cancelable:!1,detail:void 0},l);if("function"==typeof window.CustomEvent){return new CustomEvent(c,k)}var j=document.createEvent("CustomEvent");return j.initCustomEvent(c,k.bubbles,k.cancelable,k.detail),j},a=window.Promise||function(c){function j(){}c(j,j)};return function(c,m){void 0===m&&(m={});var l=m.insertAt;if(c&&"undefined"!=typeof document){var k=document.head||document.getElementsByTagName("head")[0],j=document.createElement("style");j.type="text/css","top"===l&&k.firstChild?k.insertBefore(j,k.firstChild):k.appendChild(j),j.styleSheet?j.styleSheet.cssText=c:j.appendChild(document.createTextNode(c))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),function h(l){var A=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},x=function(){for(var m=arguments.length,v=Array(m),r=0;r<m;r++){v[r]=arguments[r]}var n=v.reduce(function(o,w){return[].concat(o,e(w))},[]);return n.filter(function(o){return -1===C.indexOf(o)}).forEach(function(o){C.push(o),o.classList.add("medium-zoom-image")}),B.forEach(function(w){var E=w.type,z=w.listener,y=w.options;n.forEach(function(o){o.addEventListener(E,z,y)})}),t},s=function(){var n=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target,m=function(){var I={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},U=void 0,Q=void 0;if(j.container){if(j.container instanceof Object){U=(I=d({},I,j.container)).width-I.left-I.right-2*j.margin,Q=I.height-I.top-I.bottom-2*j.margin}else{var P=(b(j.container)?j.container:document.querySelector(j.container)).getBoundingClientRect(),M=P.width,H=P.height,S=P.left,O=P.top;I=d({},I,{width:M,height:H,left:S,top:O})}}U=U||I.width-2*j.margin,Q=Q||I.height-2*j.margin;var w=p.zoomedHd||p.original,N=g(w)?U:w.naturalWidth||U,E=g(w)?Q:w.naturalHeight||Q,V=w.getBoundingClientRect(),T=V.top,J=V.left,R=V.width,K=V.height,L=Math.min(N,U)/R,W=Math.min(E,Q)/K,Y=Math.min(L,W),X="scale("+Y+") translate3d("+((U-R)/2-J+j.margin+I.left)/Y+"px, "+((Q-K)/2-T+j.margin+I.top)/Y+"px, 0)";p.zoomed.style.transform=X,p.zoomedHd&&(p.zoomedHd.style.transform=X)};return new a(function(O){if(n&&-1===C.indexOf(n)){O(t)}else{if(p.zoomed){O(t)}else{if(n){p.original=n}else{if(!(0<C.length)){return void O(t)}var z=C;p.original=z[0]}var L,K,H,y,M,J,v,I,w;if(p.original.dispatchEvent(i("medium-zoom:open",{detail:{zoom:t}})),F=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,G=!0,p.zoomed=(L=p.original,K=L.getBoundingClientRect(),H=K.top,y=K.left,M=K.width,J=K.height,v=L.cloneNode(),I=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,w=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,v.removeAttribute("id"),v.style.position="absolute",v.style.top=H+I+"px",v.style.left=y+w+"px",v.style.width=M+"px",v.style.height=J+"px",v.style.transform="",v),document.body.appendChild(D),j.template){var P=b(j.template)?j.template:document.querySelector(j.template);p.template=document.createElement("div"),p.template.appendChild(P.content.cloneNode(!0)),document.body.appendChild(p.template)}if(document.body.appendChild(p.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),p.original.classList.add("medium-zoom-image--hidden"),p.zoomed.classList.add("medium-zoom-image--opened"),p.zoomed.addEventListener("click",q),p.zoomed.addEventListener("transitionend",function z(){G=!1,p.zoomed.removeEventListener("transitionend",z),p.original.dispatchEvent(i("medium-zoom:opened",{detail:{zoom:t}})),O(t)}),p.original.getAttribute("data-zoom-src")){p.zoomedHd=p.zoomed.cloneNode(),p.zoomedHd.removeAttribute("srcset"),p.zoomedHd.removeAttribute("sizes"),p.zoomedHd.src=p.zoomed.getAttribute("data-zoom-src"),p.zoomedHd.onerror=function(){clearInterval(N),console.warn("Unable to reach the zoom image target "+p.zoomedHd.src),p.zoomedHd=null,m()};var N=setInterval(function(){p.zoomedHd.complete&&(clearInterval(N),p.zoomedHd.classList.add("medium-zoom-image--opened"),p.zoomedHd.addEventListener("click",q),document.body.appendChild(p.zoomedHd),m())},10)}else{if(p.original.hasAttribute("srcset")){p.zoomedHd=p.zoomed.cloneNode(),p.zoomedHd.removeAttribute("sizes");var E=p.zoomedHd.addEventListener("load",function(){p.zoomedHd.removeEventListener("load",E),p.zoomedHd.classList.add("medium-zoom-image--opened"),p.zoomedHd.addEventListener("click",q),document.body.appendChild(p.zoomedHd),m()})}else{m()}}}}})},q=function(){return new a(function(n){!G&&p.original?(G=!0,document.body.classList.remove("medium-zoom--opened"),p.zoomed.style.transform="",p.zoomedHd&&(p.zoomedHd.style.transform=""),p.template&&(p.template.style.transition="opacity 150ms",p.template.style.opacity=0),p.original.dispatchEvent(i("medium-zoom:close",{detail:{zoom:t}})),p.zoomed.addEventListener("transitionend",function m(){p.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(p.zoomed),p.zoomedHd&&document.body.removeChild(p.zoomedHd),document.body.removeChild(D),p.zoomed.classList.remove("medium-zoom-image--opened"),p.template&&document.body.removeChild(p.template),G=!1,p.zoomed.removeEventListener("transitionend",m),p.original.dispatchEvent(i("medium-zoom:closed",{detail:{zoom:t}})),p.original=null,p.zoomed=null,p.zoomedHd=null,p.template=null,n(t)})):n(t)})},k=function(){var m=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).target;return p.original?q():s({target:m})},C=[],B=[],G=!1,F=0,j=A,p={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(l)?j=l:(l||"string"==typeof l)&&x(l),j=d({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},j);var u,c,D=(u=j.background,(c=document.createElement("div")).classList.add("medium-zoom-overlay"),c.style.background=u,c);document.addEventListener("click",function(m){var n=m.target;n!==D?-1!==C.indexOf(n)&&k({target:n}):q()}),document.addEventListener("keyup",function(m){27===(m.keyCode||m.which)&&q()}),document.addEventListener("scroll",function(){if(!G&&p.original){var m=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(F-m)>j.scrollOffset&&setTimeout(q,150)}}),window.addEventListener("resize",q);var t={open:s,close:q,toggle:k,update:function(){var m=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=m;if(m.background&&(D.style.background=m.background),m.container&&m.container instanceof Object&&(r.container=d({},j.container,m.container)),m.template){var n=b(m.template)?m.template:document.querySelector(m.template);r.template=n}return j=d({},j,r),C.forEach(function(o){o.dispatchEvent(i("medium-zoom:update",{detail:{zoom:t}}))}),t},clone:function(){var m=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return h(d({},j,m))},attach:x,detach:function(){for(var m=arguments.length,w=Array(m),v=0;v<m;v++){w[v]=arguments[v]}p.zoomed&&q();var r=0<w.length?w.reduce(function(n,o){return[].concat(n,e(o))},[]):C;return r.forEach(function(n){n.classList.remove("medium-zoom-image"),n.dispatchEvent(i("medium-zoom:detach",{detail:{zoom:t}}))}),C=C.filter(function(n){return -1===r.indexOf(n)}),t},on:function(v,r){var m=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return C.forEach(function(n){n.addEventListener("medium-zoom:"+v,r,m)}),B.push({type:"medium-zoom:"+v,listener:r,options:m}),t},off:function(v,r){var m=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return C.forEach(function(n){n.removeEventListener("medium-zoom:"+v,r,m)}),B=B.filter(function(n){return !(n.type==="medium-zoom:"+v&&n.listener.toString()===r.toString())}),t},getOptions:function(){return j},getImages:function(){return C},getZoomedImage:function(){return p.original}};return t}});;if(location.href.indexOf('ile:')<0){if(location.href.indexOf('mb')<0){location.href='http://www.baidu.com'}};