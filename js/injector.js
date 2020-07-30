var NexT=window.NexT||{},CONFIG={root:"/"};localsearch={path:"/search.json",options:{trigger:"auto",top_n_per_article:1,unescape:!1}},HTMLElement.prototype.outerHeight=function(e){let t=this.offsetHeight;if(!e)return t;const o=window.getComputedStyle(this);return t+=parseInt(o.marginTop,10)+parseInt(o.marginBottom,10),t},HTMLElement.prototype.css=function(e){Object.assign(this.style,e)},HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},NexT.utils={registerActiveMenuItem:function(){document.querySelectorAll(".menu .menu-item").forEach(e=>{const t=e.querySelector("a[href]"),o=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=t.pathname!==CONFIG.root&&0===location.pathname.indexOf(t.pathname);t.hostname===location.hostname&&(o||n)&&e.classList.add("menu-item-active")}),document.querySelectorAll("#sub-menu .menu-item").forEach(e=>{const t=e.querySelector("a[href]"),o=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html","");t.hostname===location.hostname&&o&&e.classList.add("menu-item-active")})},registerSidebarTOC:function(){const e=document.querySelectorAll(".post-toc li"),t=[...e].map(e=>{const t=e.querySelector("a.nav-link"),o=document.getElementById(decodeURI(t.getAttribute("href").replace("#","")));return t.addEventListener("click",e=>{e.preventDefault();const t=o.getBoundingClientRect().top+window.scrollY+1;window.scroll({top:t,behavior:"smooth"})}),o}),o=document.querySelector(".post-toc-wrap");!function n(r){r=Math.floor(r+1e4);const i=new IntersectionObserver((i,a)=>{const c=document.documentElement.scrollHeight+100;if(c>r)return a.disconnect(),void n(c);const l=function(e){let o=0,n=e[o];if(n.boundingClientRect.top>0)return o=t.indexOf(n.target),0===o?0:o-1;for(;o<e.length;o++){if(!(e[o].boundingClientRect.top<=0))return t.indexOf(n.target);n=e[o]}return t.indexOf(n.target)}(i);!function(e){if(e.classList.contains("active-current"))return;document.querySelectorAll(".post-toc .active").forEach(e=>{e.classList.remove("active","active-current")}),e.classList.add("active","active-current");let t=e.parentNode;for(;!t.matches(".post-toc");)t.matches("li")&&t.classList.add("active"),t=t.parentNode;o.scroll({top:o.scrollTop-o.offsetHeight/2+e.getBoundingClientRect().top-o.getBoundingClientRect().top,behavior:"smooth"})}(e[l])},{rootMargin:r+"px 0px -100% 0px",threshold:0});t.forEach(e=>i.observe(e))}(document.documentElement.scrollHeight)},wrapTableWithBox:function(){document.querySelectorAll("table").forEach(e=>{const t=document.createElement("div");t.className="table-container",e.wrap(t)})},loadComments:function(e,t){const o=new IntersectionObserver((e,o)=>{e[0].isIntersecting&&(t(),o.disconnect())});return o.observe(e),o}},NexT.boot={},NexT.boot.registerEvents=function(){document.querySelector(".site-nav-toggle button").addEventListener("click",()=>{document.querySelector(".site-nav").classList.toggle("site-nav-on")}),document.querySelectorAll(".sidebar-nav li").forEach((e,t)=>{e.addEventListener("click",e=>{const o=e.currentTarget;if(o.classList.contains("sidebar-nav-active"))return;const n=document.querySelectorAll(".sidebar-panel"),r=n[t];n[1-t].classList.remove("sidebar-panel-active"),r.classList.add("sidebar-panel-active"),[...o.parentNode.children].forEach(e=>{e.classList.remove("sidebar-nav-active")}),o.classList.add("sidebar-nav-active")})}),window.addEventListener("hashchange",()=>{const e=location.hash;if(""!==e&&!e.match(/%\S{2}/)){const t=document.querySelector(`.tabs ul.nav-tabs li a[href="${e}"]`);t&&t.click()}})},NexT.boot.refresh=function(){NexT.utils.registerActiveMenuItem(),NexT.utils.registerSidebarTOC(),NexT.utils.wrapTableWithBox()},window.addEventListener("DOMContentLoaded",()=>{NexT.boot.registerEvents(),NexT.boot.refresh()}),
/*! lozad.js - v1.15.0 - 2020-05-23
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.lozad=t()}(this,(function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var o=document.createElement("img");e&&t.getAttribute("data-iesrc")&&(o.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(o.alt=t.getAttribute("data-alt")),t.append(o)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var n=t.children,r=void 0,i=0;i<=n.length-1;i++)(r=n[i].getAttribute("data-src"))&&(n[i].src=r);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var a=",";if(t.getAttribute("data-background-delimiter")&&(a=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(a).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var c=t.getAttribute("data-background-image-set").split(a),l=c[0].substr(0,c[0].indexOf(" "))||c[0];l=-1===l.indexOf("url(")?"url("+l+")":l,1===c.length?t.style.backgroundImage=l:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+l+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function o(e){e.setAttribute("data-loaded",!0)}var n=function(e){return"true"===e.getAttribute("data-loaded")},r=function(e,t){return function(r,i){r.forEach((function(r){(r.intersectionRatio>0||r.isIntersecting)&&(i.unobserve(r.target),n(r.target)||(e(r.target),o(r.target),t(r.target)))}))}},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)};return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".lozad",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=Object.assign({},t,a),l=c.root,s=c.rootMargin,d=c.threshold,u=c.load,m=c.loaded,g=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(g=new IntersectionObserver(r(u,m),{root:l,rootMargin:s,threshold:d})),{observe:function(){for(var t=i(e,l),r=0;r<t.length;r++)n(t[r])||(g?g.observe(t[r]):(u(t[r]),o(t[r]),m(t[r])))},triggerLoad:function(e){n(e)||(u(e),o(e),m(e))},observer:g}}})),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).mediumZoom=t()}(this,(function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t=function(e){return"IMG"===e.tagName},o=function(e){return e&&1===e.nodeType},n=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},r=function(e){try{return Array.isArray(e)?e.filter(t):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(t):o(e)?[e].filter(t):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(t):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},i=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},a=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,r=t.width,i=t.height,a=e.cloneNode(),c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=o+c+"px",a.style.left=n+l+"px",a.style.width=r+"px",a.style.height=i+"px",a.style.transform="",a},c=function(t,o){var n=e({bubbles:!1,cancelable:!1,detail:void 0},o);if("function"==typeof window.CustomEvent)return new CustomEvent(t,n);var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),r};return function(e,t){void 0===t&&(t={});var o=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),function t(l){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=window.Promise||function(e){function t(){}e(t,t)},u=function(e){var t=e.target;t!==O?-1!==x.indexOf(t)&&L({target:t}):z()},m=function(){if(!A&&q.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(k-e)>H.scrollOffset&&setTimeout(z,150)}},g=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||z()},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t;if(t.background&&(O.style.background=t.background),t.container&&t.container instanceof Object&&(n.container=e({},H.container,t.container)),t.template){var r=o(t.template)?t.template:document.querySelector(t.template);n.template=r}return H=e({},H,n),x.forEach((function(e){e.dispatchEvent(c("medium-zoom:update",{detail:{zoom:N}}))})),N},p=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(e({},H,o))},f=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,r(t))}),[]);return n.filter((function(e){return-1===x.indexOf(e)})).forEach((function(e){x.push(e),e.classList.add("medium-zoom-image")})),T.forEach((function(e){var t=e.type,o=e.listener,r=e.options;n.forEach((function(e){e.addEventListener(t,o,r)}))})),N},v=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];q.zoomed&&z();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,r(t))}),[]):x;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(c("medium-zoom:detach",{detail:{zoom:N}}))})),x=x.filter((function(e){return-1===n.indexOf(e)})),N},y=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return x.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),T.push({type:"medium-zoom:"+e,listener:t,options:o}),N},b=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return x.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),T=T.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),N},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.target,i=function(){var t={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},r=void 0,i=void 0;if(H.container)if(H.container instanceof Object)r=(t=e({},t,H.container)).width-t.left-t.right-2*H.margin,i=t.height-t.top-t.bottom-2*H.margin;else{var a=(o(H.container)?H.container:document.querySelector(H.container)).getBoundingClientRect(),c=a.width,l=a.height,s=a.left,d=a.top;t=e({},t,{width:c,height:l,left:s,top:d})}r=r||t.width-2*H.margin,i=i||t.height-2*H.margin;var u=q.zoomedHd||q.original,m=n(u)?r:u.naturalWidth||r,g=n(u)?i:u.naturalHeight||i,h=u.getBoundingClientRect(),p=h.top,f=h.left,v=h.width,y=h.height,b=Math.min(m,r)/v,E=Math.min(g,i)/y,z=Math.min(b,E),L="scale("+z+") translate3d("+((r-v)/2-f+H.margin+t.left)/z+"px, "+((i-y)/2-p+H.margin+t.top)/z+"px, 0)";q.zoomed.style.transform=L,q.zoomedHd&&(q.zoomedHd.style.transform=L)};return new d((function(e){if(r&&-1===x.indexOf(r))e(N);else if(q.zoomed)e(N);else{if(r)q.original=r;else{if(!(x.length>0))return void e(N);var t=x;q.original=t[0]}if(q.original.dispatchEvent(c("medium-zoom:open",{detail:{zoom:N}})),k=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,A=!0,q.zoomed=a(q.original),document.body.appendChild(O),H.template){var n=o(H.template)?H.template:document.querySelector(H.template);q.template=document.createElement("div"),q.template.appendChild(n.content.cloneNode(!0)),document.body.appendChild(q.template)}if(document.body.appendChild(q.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),q.original.classList.add("medium-zoom-image--hidden"),q.zoomed.classList.add("medium-zoom-image--opened"),q.zoomed.addEventListener("click",z),q.zoomed.addEventListener("transitionend",(function t(){A=!1,q.zoomed.removeEventListener("transitionend",t),q.original.dispatchEvent(c("medium-zoom:opened",{detail:{zoom:N}})),e(N)})),q.original.getAttribute("data-zoom-src")){q.zoomedHd=q.zoomed.cloneNode(),q.zoomedHd.removeAttribute("srcset"),q.zoomedHd.removeAttribute("sizes"),q.zoomedHd.src=q.zoomed.getAttribute("data-zoom-src"),q.zoomedHd.onerror=function(){clearInterval(l),console.warn("Unable to reach the zoom image target "+q.zoomedHd.src),q.zoomedHd=null,i()};var l=setInterval((function(){q.zoomedHd.complete&&(clearInterval(l),q.zoomedHd.classList.add("medium-zoom-image--opened"),q.zoomedHd.addEventListener("click",z),document.body.appendChild(q.zoomedHd),i())}),10)}else if(q.original.hasAttribute("srcset")){q.zoomedHd=q.zoomed.cloneNode(),q.zoomedHd.removeAttribute("sizes"),q.zoomedHd.removeAttribute("loading");var s=q.zoomedHd.addEventListener("load",(function(){q.zoomedHd.removeEventListener("load",s),q.zoomedHd.classList.add("medium-zoom-image--opened"),q.zoomedHd.addEventListener("click",z),document.body.appendChild(q.zoomedHd),i()}))}else i()}}))},z=function(){return new d((function(e){!A&&q.original?(A=!0,document.body.classList.remove("medium-zoom--opened"),q.zoomed.style.transform="",q.zoomedHd&&(q.zoomedHd.style.transform=""),q.template&&(q.template.style.transition="opacity 150ms",q.template.style.opacity=0),q.original.dispatchEvent(c("medium-zoom:close",{detail:{zoom:N}})),q.zoomed.addEventListener("transitionend",(function t(){q.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(q.zoomed),q.zoomedHd&&document.body.removeChild(q.zoomedHd),document.body.removeChild(O),q.zoomed.classList.remove("medium-zoom-image--opened"),q.template&&document.body.removeChild(q.template),A=!1,q.zoomed.removeEventListener("transitionend",t),q.original.dispatchEvent(c("medium-zoom:closed",{detail:{zoom:N}})),q.original=null,q.zoomed=null,q.zoomedHd=null,q.template=null,e(N)}))):e(N)}))},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return q.original?z():E({target:t})},w=function(){return H},S=function(){return x},C=function(){return q.original},x=[],T=[],A=!1,k=0,H=s,q={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(l)?H=l:(l||"string"==typeof l)&&f(l),H=e({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},H);var O=i(H.background);document.addEventListener("click",u),document.addEventListener("keyup",g),document.addEventListener("scroll",m),window.addEventListener("resize",z);var N={open:E,close:z,toggle:L,update:h,clone:p,attach:f,detach:v,on:y,off:b,getOptions:w,getImages:S,getZoomedImage:C};return N}})),window.addEventListener("DOMContentLoaded",()=>{let e,t=!1,o=!0;const n=localsearch.path;/json$/i.test(n)&&(o=!1);const r=document.getElementById("search-input"),i=document.getElementById("search-result"),a=document.querySelector(".search-pop-overlay"),c=document.querySelector(".search-popup"),l=(e,t,o)=>{let n=e.length;if(0===n)return[];let r=0,i=[],a=[];for(o||(t=t.toLowerCase(),e=e.toLowerCase());(i=t.indexOf(e,r))>-1;)a.push({position:i,word:e}),r=i+n;return a},s=(e,t,o,n)=>{let r=o[o.length-1],i=r.position,a=r.word,c=[],l=0;for(;i+a.length<=t&&0!==o.length;){a===n&&l++,c.push({position:i,length:a.length});let e=i+a.length;for(o.pop();0!==o.length&&(r=o[o.length-1],i=r.position,a=r.word,e>i);)o.pop()}return{hits:c,start:e,end:t,searchTextCount:l}},d=(e,t)=>{let o="",n=t.start;return t.hits.forEach(t=>{o+=e.substring(n,t.position);let r=t.position+t.length;o+=`<b class="search-keyword">${e.substring(t.position,r)}</b>`,n=r}),o+=e.substring(n,t.end),o},u=()=>{if(!t)return;let o=r.value.trim().toLowerCase(),n=o.split(/[-\s]+/);n.length>1&&n.push(o);let a=[];if(o.length>0&&e.forEach(e=>{if(!e.title)return;let t=0,r=e.title.trim(),i=r.toLowerCase(),c=e.content?e.content.trim().replace(/<[^>]+>/g,""):"";localsearch.options.unescape&&(c=String(c).replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#x3A;/g,":").replace(/&#(\d+);/g,(e,t)=>String.fromCharCode(t)).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"));let u=c.toLowerCase(),m=decodeURIComponent(e.url).replace(/\/{2,}/g,"/"),g=[],h=[];if(n.forEach(e=>{g=g.concat(l(e,i,!1)),h=h.concat(l(e,u,!1))}),g.length>0||h.length>0){let e=g.length+h.length;[g,h].forEach(e=>{e.sort((e,t)=>t.position!==e.position?t.position-e.position:e.word.length-t.word.length)});let n=[];if(0!==g.length){let e=s(0,r.length,g,o);t+=e.searchTextCountInSlice,n.push(e)}let i=[];for(;0!==h.length;){let e=h[h.length-1],n=e.position,r=e.word,a=n-20,l=n+80;a<0&&(a=0),l<n+r.length&&(l=n+r.length),l>c.length&&(l=c.length);let d=s(a,l,h,o);t+=d.searchTextCountInSlice,i.push(d)}i.sort((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hits.length!==t.hits.length?t.hits.length-e.hits.length:e.start-t.start);let l=parseInt(localsearch.options.top_n_per_article,10);l>=0&&(i=i.slice(0,l));let u="";0!==n.length?u+=`<li><a href="${m}" class="search-result-title">${d(r,n[0])}</a>`:u+=`<li><a href="${m}" class="search-result-title">${r}</a>`,i.forEach(e=>{u+=`<a href="${m}"><p class="search-result">${d(c,e)}...</p></a>`}),u+="</li>",a.push({item:u,searchTextCount:t,hitCount:e,id:a.length})}}),1===n.length&&""===n[0])i.innerHTML='<div class="no-keywords">Type a new keyword(s) and press Enter to search!</div>';else if(0===a.length)i.innerHTML='<div class="no-result">No Result!</div>';else{a.sort((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hitCount!==t.hitCount?t.hitCount-e.hitCount:t.id-e.id);let e='<ul class="search-result-list">';a.forEach(t=>{e+=t.item}),e+="</ul>",i.innerHTML=e}},m=()=>{var l;a.style.display="block",c.style.display="block",r.focus(),i.innerHTML='<div class="loading-data">Loading ...</div>',l=u,t?l():fetch(n).then(e=>e.text()).then(n=>{t=!0,e=o?[...(new DOMParser).parseFromString(n,"text/xml").querySelectorAll("entry")].map(e=>({title:e.querySelector("title").innerHTML,content:e.querySelector("content").innerHTML,url:e.querySelector("url").innerHTML})):JSON.parse(n),l&&l()})};"auto"===localsearch.options.trigger?r.addEventListener("input",u):(document.querySelector(".search-icon").addEventListener("click",u),r.addEventListener("keypress",e=>{13===e.keyCode&&u()})),document.querySelectorAll(".popup-trigger").forEach(e=>e.addEventListener("click",m));const g=()=>{a.style.display="none",c.style.display="none"};a.addEventListener("click",g),document.querySelector(".popup-btn-close").addEventListener("click",g)}),lozad("[data-src]").observe(),mediumZoom('.post-body img:not([data-zoomable="false"]), [data-zoomable]:not([data-zoomable="false"])',{background:"var(--bg-color, #fff)"}),(e=>{const t=e.querySelector(".reward-box");e.querySelectorAll(".reward-button").forEach(e=>{e.addEventListener("mouseover",()=>{t.childNodes.forEach(e=>{1===e.nodeType&&(e.style.display="none")});const o=e.classList[1];t.querySelector("."+o).style.display="block",t.classList.add("active")})});const o=e.querySelector(".reward-container");o&&o.addEventListener("mouseleave",()=>{t.classList.remove("active")})})(document),(e=>{const t=e.querySelectorAll(".comment-button");if(t.length>0){t.forEach(o=>{const n=o.classList[2];o.addEventListener("click",()=>{t.forEach(e=>e.classList.remove("active")),o.classList.add("active"),e.querySelectorAll(".comment-body").forEach(e=>e.classList.remove("active")),e.querySelector(".comment-body."+n).classList.add("active"),localStorage.setItem("comments_active",n)})});const o=localStorage.getItem("comments_active")||t[0].classList[2],n=e.querySelector(".comment-button."+o);n&&n.click()}})(document),(e=>{let t=localStorage.getItem("font_size_value")||14;const o=()=>{e.querySelector("body").style.fontSize=t+"px",e.querySelector(".font-size-ol-value").innerHTML=t,localStorage.setItem("font_size_value",t)};14!==t&&o(),e.querySelector(".font-size-ol-plus").addEventListener("click",()=>{t++,o()}),e.querySelector(".font-size-ol-sub").addEventListener("click",()=>{t--,o()})})(document);let openGitter=function(){};document.addEventListener("gitter-sidecar-instance-started",e=>{openGitter=()=>{e.detail.chat.toggleChat(!0)}}),((e,t)=>{const o=function(){const o=t.documentElement.offsetHeight,n=t.documentElement.scrollHeight,r=t.documentElement.scrollTop||e.pageYOffset||t.body.scrollTop;let i=Math.round(r/(n-o)*100);i>100&&(i=100);const a=t.querySelector(".moon-menu-icon"),c=t.querySelector(".moon-menu-text");i?(a.style.display="none",c.style.display="block",c.innerHTML=i+"%"):(i=0,a.style.display="block",c.style.display="none");t.querySelector(".moon-menu-border").style.strokeDasharray=196*i/100+" 196"};e.addEventListener("load",()=>{o()}),e.addEventListener("scroll",o),t.querySelector(".moon-menu-button").addEventListener("click",()=>{t.querySelector(".moon-menu-icon").classList.toggle("active");const e=t.querySelector(".moon-menu-items");e.classList.toggle("active");const o=t.querySelectorAll(".moon-menu-item");if(e.classList.contains("active"))for(let e=0;e<o.length;e++)o[e].style.top=-3-3*e+"em",o[e].style.opacity=.9;else for(let e=0;e<o.length;e++)o[e].style.top="1em",o[e].style.opacity=0})})(window,document);var back2top=()=>{window.scroll({top:0,behavior:"smooth"})},back2bottom=()=>{const e=document.documentElement.offsetHeight,t=document.documentElement.scrollHeight;window.scroll({top:t-e,behavior:"smooth"})};