/*! For license information please see app.bundle.js.LICENSE.txt */
(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new G(n||[]);return i(a,"_invoke",{value:S(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function x(){}var E={};f(E,u,(function(){return this}));var L=Object.getPrototypeOf,_=L&&L(L(B([])));_&&_!==o&&a.call(_,u)&&(E=_);var k=x.prototype=w.prototype=Object.create(E);function P(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,r){function n(o,i,c,u){var s=p(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function S(t,e,n){var o=d;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function T(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,T(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function B(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=x,i(k,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},P(j.prototype),f(j.prototype,s,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new j(h(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},P(k),f(k,l,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=B,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:B(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}var o,a=0,i=document.getElementById("navbar"),c=document.getElementById("numberPagination"),u=1;function s(t,e){localStorage.setItem(t,e)}function l(t,e){return localStorage.getItem(t)||e}function f(t){s("currentPage",t)}function h(t,e,r){return p.apply(this,arguments)}function p(){return(p=n(e().mark((function t(r,n,o){var a,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://suitmedia-backend.suitdev.com/api/ideas?page[number]=".concat(r,"&page[size]=").concat(n,"&append[]=small_image&append[]=medium_image&sort=").concat(o),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:if((a=t.sent).ok){t.next=6;break}throw new Error("HTTP error! Status: ".concat(a.status));case 6:return t.next=8,a.json();case 8:return i=t.sent,t.abrupt("return",i);case 12:t.prev=12,t.t0=t.catch(0),console.error("Error:",t.t0.message);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function d(){return y.apply(this,arguments)}function y(){return y=n(e().mark((function t(){var r,o,a,i,p;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:p=function(){return(p=n(e().mark((function t(){var n,i,l,p,y;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u,i=r.value,l=o.value,a.innerText=i,p="new"===l?"-published_at":"published_at",s("sortPage",i),s("sortPublish",l),f(n),t.next=10,h(n,i,p);case 10:y=t.sent,document.getElementById("list-card").innerHTML=y.data.map((function(t){return console.log(t.medium_image[0].url),'\n            <div class="aspect-[9/11] bg-white rounded-lg shadow-lg overflow-hidden">\n                <img src="'.concat(t.medium_image[0].url,'" alt="').concat(t.title,'" class="w-full aspect-video" loading="lazy">\n                <p class="text-base text-slate-400 mt-5 px-5">').concat(t.published_at,'</p>\n                <p class="text-lg line-clamp-3 my-5 px-5">').concat(t.title,"</p>\n            </div>\n            ")})).join(""),e=y.meta.links,c.innerHTML=e.map((function(t){return'\n        <button class="mr-1 p-4 '.concat(t.active?"bg-orange-400 text-white rounded-lg":"bg-white text-black",'"\n                data-url="').concat(t.url,'"\n                ').concat(t.active?"disabled":"",">\n            ").concat(t.label,"\n        </button>\n        ")})).join(""),c.querySelectorAll("button").forEach((function(t){t.addEventListener("click",(function(){var e=t.getAttribute("data-url");e&&(f(u=new URLSearchParams(e).get("page[number]")),d())}))}));case 14:case"end":return t.stop()}var e}),t)})))).apply(this,arguments)},i=function(){return p.apply(this,arguments)},r=document.getElementById("sortPage"),o=document.getElementById("sortDate"),a=document.getElementById("show"),r.value=l("sortPage","10"),o.value=l("sortPublish","new"),u=l("currentPage",1),r.addEventListener("change",n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(u=1),t.next=4,i();case 4:case"end":return t.stop()}}),t)})))),o.addEventListener("change",n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(u=1),t.next=4,i();case 4:case"end":return t.stop()}}),t)})))),i();case 11:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}document.addEventListener("scroll",(function(){var t=document.getElementById("parralax-text1"),e=document.getElementById("parralax-text2");console.log(t);var r=window.scrollY*(t.getAttribute("data-speed")||1),n=window.scrollY*(e.getAttribute("data-speed")||1);t.style.transform="translateY(".concat(.7*r,"px)"),e.style.transform="translateY(".concat(1*n,"px)")})),window.addEventListener("scroll",(function(){var t=window.pageYOffset||document.documentElement.scrollTop;i.style.opacity=.7,i.style.top=t>a?"-100px":"0",a=t,o&&clearTimeout(o),o=setTimeout((function(){i.style.opacity=1}),200)})),d()})();
//# sourceMappingURL=app.bundle.js.map