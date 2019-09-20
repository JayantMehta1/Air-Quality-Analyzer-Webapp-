webpackJsonp([1],{0:function(t,e){},Agap:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r={37:1,38:1,39:1,40:1};function i(t){(t=t||window.event).preventDefault&&t.preventDefault(),t.returnValue=!1}function a(t){if(r[t.keyCode])return i(t),!1}var s={methods:{onComplete:function(){var t=1;setInterval(function(){window.scroll(0,t),t+=3},1),window.scroll(0,1e4),window.addEventListener&&window.addEventListener("DOMMouseScroll",i,!1),document.addEventListener("wheel",i,{passive:!1}),window.onwheel=i,window.onmousewheel=document.onmousewheel=i,window.ontouchmove=i,document.onkeydown=a}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("vue-typer",{attrs:{text:"Hello. I am an AQI Index Analyser. Please enter two cities, and I'll take care of the rest.","type-delay":"60",repeat:0},on:{completed:this.onComplete}})],1)},staticRenderFns:[]};var u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top"}},[n("form",[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.cityAdd.cityOne,expression:"cityAdd.cityOne",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Type in City One"},domProps:{value:t.cityAdd.cityOne},on:{change:function(e){return t.$set(t.cityAdd,"cityOne",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.cityAdd.cityTwo,expression:"cityAdd.cityTwo",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Type in City Two"},domProps:{value:t.cityAdd.cityTwo},on:{change:function(e){return t.$set(t.cityAdd,"cityTwo",e.target.value)}}})])]),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.createNew(e)}}},[t._v("Add Cities")])])])},staticRenderFns:[]};var f={props:["transferCityData","transferAPIData"],watch:{"transferAPIData.dataOne.data.aqi":function(t,e){this.compareOne=t,this.compareOne>this.compareTwo?(this.compareTotal=(this.compareOne/this.compareTwo).toFixed(2),this.better="worse"):(this.compareTotal=(this.compareTwo/this.compareOne).toFixed(2),this.better="better")},"transferAPIData.dataTwo.data.aqi":function(t,e){this.compareTwo=t,this.compareOne>this.compareTwo?(this.compareTotal=Math.floor(this.compareOne/this.compareTwo).toFixed(2),this.better="worse"):(this.compareTotal=Math.floor(this.compareTwo/this.compareOne).toFixed(2),this.better="better")}},data:function(){return{better:"better",compareOne:this.transferAPIData.dataOne.data.aqi,compareTwo:this.transferAPIData.dataTwo.data.aqi,compareTotal:0}},updated:function(){}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row"},[n("div",{staticClass:"col float-left"},[n("h2",[t._v(t._s(t.transferCityData.cityOne.toUpperCase()))]),t._v(" "),n("h2",[t._v(t._s(t.transferAPIData.dataOne.data.aqi))])]),t._v(" "),n("div",{staticClass:"col float-right"},[n("h2",[t._v(t._s(t.transferCityData.cityTwo.toUpperCase()))]),t._v(" "),n("h2",[t._v(t._s(t.transferAPIData.dataTwo.data.aqi))])])]),t._v(" "),n("p",[t._v("The air quality in "+t._s(t.transferCityData.cityOne)+" is "+t._s(t.compareTotal)+"x "+t._s(t.better)+" than "+t._s(t.transferCityData.cityTwo))])])},staticRenderFns:[]};var p={data:function(){return{options:{scrollOverflow:!0,licenseKey:"YOUR_KEY_HEERE",menu:"#menu",anchors:["page1","page2","page3"],sectionsColor:["#41b883","#ff5f45","#0798ec"]},cityInput:{},apiData:{dataOne:{data:{aqi:""}},dataTwo:{data:{aqi:""}}}}},components:{Intro:n("VU/8")(s,c,!1,function(t){n("T4Kj")},"data-v-30e6e9f9",null).exports,CityForm:n("VU/8")({data:function(){return{cityAdd:{cityOne:"",cityTwo:""}}},methods:{createNew:function(){this.$emit("cityAdded",this.cityAdd)}}},u,!1,function(t){n("ofiK")},"data-v-3a18f476",null).exports,Results:n("VU/8")(f,d,!1,function(t){n("Agap")},"data-v-7b8e4663",null).exports},methods:{getData:function(){var t=this;this.$http.get("https://api.waqi.info/feed/"+this.cityInput.cityOne+"/?token=dba0d412969dc21c0bcfa2291bbeb7e20bb41cb2").then(function(t){return t.json()}).then(function(e){return t.apiData.dataOne=e}),this.$http.get("https://api.waqi.info/feed/"+this.cityInput.cityTwo+"/?token=dba0d412969dc21c0bcfa2291bbeb7e20bb41cb2").then(function(t){return t.json()}).then(function(e){return t.apiData.dataTwo=e})}},created:function(){$("#whole").animate({scrollTop:$("#whole").prop("1000px")},1e3)}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"whole"}},[n("intro"),t._v(" "),n("div",{attrs:{id:"secondPage"}},[n("city-form",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],on:{cityAdded:function(e){t.cityInput=e,t.getData()}}}),t._v(" "),n("results",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],attrs:{transferCityData:t.cityInput,transferAPIData:t.apiData}})],1)],1)},staticRenderFns:[]};var h=n("VU/8")(p,l,!1,function(t){n("vtsH")},"data-v-ac4453ee",null).exports,m=2;function v(t){this.state=m,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}v.reject=function(t){return new v(function(e,n){n(t)})},v.resolve=function(t){return new v(function(e,n){e(t)})},v.all=function(t){return new v(function(e,n){var o=0,r=[];function i(n){return function(i){r[n]=i,(o+=1)===t.length&&e(r)}}0===t.length&&e(r);for(var a=0;a<t.length;a+=1)v.resolve(t[a]).then(i(a),n)})},v.race=function(t){return new v(function(e,n){for(var o=0;o<t.length;o+=1)v.resolve(t[o]).then(e,n)})};var y=v.prototype;function w(t,e){t instanceof Promise?this.promise=t:this.promise=new Promise(t.bind(e)),this.context=e}y.resolve=function(t){var e=this;if(e.state===m){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var o=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(t){return void(n||e.reject(t))}e.state=0,e.value=t,e.notify()}},y.reject=function(t){if(this.state===m){if(t===this)throw new TypeError("Promise settled with itself.");this.state=1,this.value=t,this.notify()}},y.notify=function(){var t,e=this;g(function(){if(e.state!==m)for(;e.deferred.length;){var t=e.deferred.shift(),n=t[0],o=t[1],r=t[2],i=t[3];try{0===e.state?r("function"==typeof n?n.call(void 0,e.value):e.value):1===e.state&&("function"==typeof o?r(o.call(void 0,e.value)):i(e.value))}catch(t){i(t)}}},t)},y.then=function(t,e){var n=this;return new v(function(o,r){n.deferred.push([t,e,o,r]),n.notify()})},y.catch=function(t){return this.then(void 0,t)},"undefined"==typeof Promise&&(window.Promise=v),w.all=function(t,e){return new w(Promise.all(t),e)},w.resolve=function(t,e){return new w(Promise.resolve(t),e)},w.reject=function(t,e){return new w(Promise.reject(t),e)},w.race=function(t,e){return new w(Promise.race(t),e)};var b=w.prototype;b.bind=function(t){return this.context=t,this},b.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new w(this.promise.then(t,e),this.context)},b.catch=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new w(this.promise.catch(t),this.context)},b.finally=function(t){return this.then(function(e){return t.call(this),e},function(e){return t.call(this),Promise.reject(e)})};var g,T={}.hasOwnProperty,x=[].slice,O=!1,E="undefined"!=typeof window;function j(t){return t?t.replace(/^\s*|\s*$/g,""):""}function C(t){return t?t.toLowerCase():""}var P=Array.isArray;function A(t){return"string"==typeof t}function _(t){return"function"==typeof t}function D(t){return null!==t&&"object"==typeof t}function I(t){return D(t)&&Object.getPrototypeOf(t)==Object.prototype}function U(t,e,n){var o=w.resolve(t);return arguments.length<2?o:o.then(e,n)}function R(t,e,n){return _(n=n||{})&&(n=n.call(e)),H(t.bind({$vm:e,$options:n}),t,{$options:n})}function q(t,e){var n,o;if(P(t))for(n=0;n<t.length;n++)e.call(t[n],t[n],n);else if(D(t))for(o in t)T.call(t,o)&&e.call(t[o],t[o],o);return t}var k=Object.assign||function(t){return x.call(arguments,1).forEach(function(e){N(t,e)}),t};function H(t){return x.call(arguments,1).forEach(function(e){N(t,e,!0)}),t}function N(t,e,n){for(var o in e)n&&(I(e[o])||P(e[o]))?(I(e[o])&&!I(t[o])&&(t[o]={}),P(e[o])&&!P(t[o])&&(t[o]=[]),N(t[o],e[o],n)):void 0!==e[o]&&(t[o]=e[o])}function F(t,e,n){var o=function(t){var e=["+","#",".","/",";","?","&"],n=[];return{vars:n,expand:function(o){return t.replace(/\{([^{}]+)\}|([^{}]+)/g,function(t,r,i){if(r){var a=null,s=[];if(-1!==e.indexOf(r.charAt(0))&&(a=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach(function(t){var e=/([^:*]*)(?::(\d+)|(\*))?/.exec(t);s.push.apply(s,function(t,e,n,o){var r=t[n],i=[];if(L(r)&&""!==r)if("string"==typeof r||"number"==typeof r||"boolean"==typeof r)r=r.toString(),o&&"*"!==o&&(r=r.substring(0,parseInt(o,10))),i.push(M(e,r,S(e)?n:null));else if("*"===o)Array.isArray(r)?r.filter(L).forEach(function(t){i.push(M(e,t,S(e)?n:null))}):Object.keys(r).forEach(function(t){L(r[t])&&i.push(M(e,r[t],t))});else{var a=[];Array.isArray(r)?r.filter(L).forEach(function(t){a.push(M(e,t))}):Object.keys(r).forEach(function(t){L(r[t])&&(a.push(encodeURIComponent(t)),a.push(M(e,r[t].toString())))}),S(e)?i.push(encodeURIComponent(n)+"="+a.join(",")):0!==a.length&&i.push(a.join(","))}else";"===e?i.push(encodeURIComponent(n)):""!==r||"&"!==e&&"?"!==e?""===r&&i.push(""):i.push(encodeURIComponent(n)+"=");return i}(o,a,e[1],e[2]||e[3])),n.push(e[1])}),a&&"+"!==a){var c=",";return"?"===a?c="&":"#"!==a&&(c=a),(0!==s.length?a:"")+s.join(c)}return s.join(",")}return B(i)})}}}(t),r=o.expand(e);return n&&n.push.apply(n,o.vars),r}function L(t){return void 0!==t&&null!==t}function S(t){return";"===t||"&"===t||"?"===t}function M(t,e,n){return e="+"===t||"#"===t?B(e):encodeURIComponent(e),n?encodeURIComponent(n)+"="+e:e}function B(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function V(t,e){var n,o=this||{},r=t;return A(t)&&(r={url:t,params:e}),r=H({},V.options,o.$options,r),V.transforms.forEach(function(t){A(t)&&(t=V.transform[t]),_(t)&&(n=function(t,e,n){return function(o){return t.call(n,o,e)}}(t,n,o.$vm))}),n(r)}function J(t){return new w(function(e){var n=new XDomainRequest,o=function(o){var r=o.type,i=0;"load"===r?i=200:"error"===r&&(i=500),e(t.respondWith(n.responseText,{status:i}))};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl()),t.timeout&&(n.timeout=t.timeout),n.onload=o,n.onabort=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){},n.send(t.getBody())})}V.options={url:"",root:null,params:{}},V.transform={template:function(t){var e=[],n=F(t.url,t.params,e);return e.forEach(function(e){delete t.params[e]}),n},query:function(t,e){var n=Object.keys(V.options.params),o={},r=e(t);return q(t.params,function(t,e){-1===n.indexOf(e)&&(o[e]=t)}),(o=V.params(o))&&(r+=(-1==r.indexOf("?")?"?":"&")+o),r},root:function(t,e){var n,o,r=e(t);return A(t.root)&&!/^(https?:)?\//.test(r)&&(n=t.root,o="/",r=(n&&void 0===o?n.replace(/\s+$/,""):n&&o?n.replace(new RegExp("["+o+"]+$"),""):n)+"/"+r),r}},V.transforms=["template","query","root"],V.params=function(t){var e=[],n=encodeURIComponent;return e.add=function(t,e){_(e)&&(e=e()),null===e&&(e=""),this.push(n(t)+"="+n(e))},function t(e,n,o){var r,i=P(n),a=I(n);q(n,function(n,s){r=D(n)||P(n),o&&(s=o+"["+(a||r?s:"")+"]"),!o&&i?e.add(n.name,n.value):r?t(e,n,s):e.add(s,n)})}(e,t),e.join("&").replace(/%20/g,"+")},V.parse=function(t){var e=document.createElement("a");return document.documentMode&&(e.href=t,t=e.href),e.href=t,{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",port:e.port,host:e.host,hostname:e.hostname,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):""}};var W=E&&"withCredentials"in new XMLHttpRequest;function z(t){return new w(function(e){var n,o,r=t.jsonp||"callback",i=t.jsonpCallback||"_jsonp"+Math.random().toString(36).substr(2),a=null;n=function(n){var r=n.type,s=0;"load"===r&&null!==a?s=200:"error"===r&&(s=500),s&&window[i]&&(delete window[i],document.body.removeChild(o)),e(t.respondWith(a,{status:s}))},window[i]=function(t){a=JSON.stringify(t)},t.abort=function(){n({type:"abort"})},t.params[r]=i,t.timeout&&setTimeout(t.abort,t.timeout),(o=document.createElement("script")).src=t.getUrl(),o.type="text/javascript",o.async=!0,o.onload=n,o.onerror=n,document.body.appendChild(o)})}function K(t){return new w(function(e){var n=new XMLHttpRequest,o=function(o){var r=t.respondWith("response"in n?n.response:n.responseText,{status:1223===n.status?204:n.status,statusText:1223===n.status?"No Content":j(n.statusText)});q(j(n.getAllResponseHeaders()).split("\n"),function(t){r.headers.append(t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1))}),e(r)};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl(),!0),t.timeout&&(n.timeout=t.timeout),t.responseType&&"responseType"in n&&(n.responseType=t.responseType),(t.withCredentials||t.credentials)&&(n.withCredentials=!0),t.crossOrigin||t.headers.set("X-Requested-With","XMLHttpRequest"),_(t.progress)&&"GET"===t.method&&n.addEventListener("progress",t.progress),_(t.downloadProgress)&&n.addEventListener("progress",t.downloadProgress),_(t.progress)&&/^(POST|PUT)$/i.test(t.method)&&n.upload.addEventListener("progress",t.progress),_(t.uploadProgress)&&n.upload&&n.upload.addEventListener("progress",t.uploadProgress),t.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),n.onload=o,n.onabort=o,n.onerror=o,n.ontimeout=o,n.send(t.getBody())})}function X(t){var e=n(0);return new w(function(n){var o,r=t.getUrl(),i=t.getBody(),a=t.method,s={};t.headers.forEach(function(t,e){s[e]=t}),e(r,{body:i,method:a,headers:s}).then(o=function(e){var o=t.respondWith(e.body,{status:e.statusCode,statusText:j(e.statusMessage)});q(e.headers,function(t,e){o.headers.set(e,t)}),n(o)},function(t){return o(t.response)})})}function G(t){return(t.client||(E?K:X))(t)}var Y=function(t){var e=this;this.map={},q(t,function(t,n){return e.append(n,t)})};function Q(t,e){return Object.keys(t).reduce(function(t,n){return C(e)===C(n)?n:t},null)}Y.prototype.has=function(t){return null!==Q(this.map,t)},Y.prototype.get=function(t){var e=this.map[Q(this.map,t)];return e?e.join():null},Y.prototype.getAll=function(t){return this.map[Q(this.map,t)]||[]},Y.prototype.set=function(t,e){this.map[function(t){if(/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return j(t)}(Q(this.map,t)||t)]=[j(e)]},Y.prototype.append=function(t,e){var n=this.map[Q(this.map,t)];n?n.push(j(e)):this.set(t,e)},Y.prototype.delete=function(t){delete this.map[Q(this.map,t)]},Y.prototype.deleteAll=function(){this.map={}},Y.prototype.forEach=function(t,e){var n=this;q(this.map,function(o,r){q(o,function(o){return t.call(e,o,r,n)})})};var Z=function(t,e){var n=e.url,o=e.headers,r=e.status,i=e.statusText;this.url=n,this.ok=r>=200&&r<300,this.status=r||0,this.statusText=i||"",this.headers=new Y(o),this.body=t,A(t)?this.bodyText=t:"undefined"!=typeof Blob&&t instanceof Blob&&(this.bodyBlob=t,function(t){return 0===t.type.indexOf("text")||-1!==t.type.indexOf("json")}(t)&&(this.bodyText=function(t){return new w(function(e){var n=new FileReader;n.readAsText(t),n.onload=function(){e(n.result)}})}(t)))};Z.prototype.blob=function(){return U(this.bodyBlob)},Z.prototype.text=function(){return U(this.bodyText)},Z.prototype.json=function(){return U(this.text(),function(t){return JSON.parse(t)})},Object.defineProperty(Z.prototype,"data",{get:function(){return this.body},set:function(t){this.body=t}});var tt=function(t){var e;this.body=null,this.params={},k(this,t,{method:(e=t.method||"GET",e?e.toUpperCase():"")}),this.headers instanceof Y||(this.headers=new Y(this.headers))};tt.prototype.getUrl=function(){return V(this)},tt.prototype.getBody=function(){return this.body},tt.prototype.respondWith=function(t,e){return new Z(t,k(e||{},{url:this.getUrl()}))};var et={"Content-Type":"application/json;charset=utf-8"};function nt(t){var e=this||{},n=function(t){var e=[G],n=[];function o(o){for(;e.length;){var r=e.pop();if(_(r)){var i=void 0,a=void 0;if(D(i=r.call(t,o,function(t){return a=t})||a))return new w(function(e,o){n.forEach(function(e){i=U(i,function(n){return e.call(t,n)||n},o)}),U(i,e,o)},t);_(i)&&n.unshift(i)}else s="Invalid interceptor of type "+typeof r+", must be a function","undefined"!=typeof console&&O&&console.warn("[VueResource warn]: "+s)}var s}return D(t)||(t=null),o.use=function(t){e.push(t)},o}(e.$vm);return function(t){x.call(arguments,1).forEach(function(e){for(var n in e)void 0===t[n]&&(t[n]=e[n])})}(t||{},e.$options,nt.options),nt.interceptors.forEach(function(t){A(t)&&(t=nt.interceptor[t]),_(t)&&n.use(t)}),n(new tt(t)).then(function(t){return t.ok?t:w.reject(t)},function(t){var e;return t instanceof Error&&(e=t,"undefined"!=typeof console&&console.error(e)),w.reject(t)})}function ot(t,e,n,o){var r=this||{},i={};return q(n=k({},ot.actions,n),function(n,a){n=H({url:t,params:k({},e)},o,n),i[a]=function(){return(r.$http||nt)(function(t,e){var n,o=k({},t),r={};switch(e.length){case 2:r=e[0],n=e[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(o.method)?n=e[0]:r=e[0];break;case 0:break;default:throw"Expected up to 2 arguments [params, body], got "+e.length+" arguments"}return o.body=n,o.params=k({},o.params,r),o}(n,arguments))}}),i}function rt(t){var e,n,o;rt.installed||(n=(e=t).config,o=e.nextTick,g=o,O=n.debug||!n.silent,t.url=V,t.http=nt,t.resource=ot,t.Promise=w,Object.defineProperties(t.prototype,{$url:{get:function(){return R(t.url,this,this.$options.url)}},$http:{get:function(){return R(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var e=this;return function(n){return new t.Promise(n,e)}}}}))}nt.options={},nt.headers={put:et,post:et,patch:et,delete:et,common:{Accept:"application/json, text/plain, */*"},custom:{}},nt.interceptor={before:function(t){_(t.before)&&t.before.call(this,t)},method:function(t){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",t.method),t.method="POST")},jsonp:function(t){"JSONP"==t.method&&(t.client=z)},json:function(t){var e=t.headers.get("Content-Type")||"";return D(t.body)&&0===e.indexOf("application/json")&&(t.body=JSON.stringify(t.body)),function(t){return t.bodyText?U(t.text(),function(e){var n,o;if(0===(t.headers.get("Content-Type")||"").indexOf("application/json")||(o=(n=e).match(/^\s*(\[|\{)/))&&{"[":/]\s*$/,"{":/}\s*$/}[o[1]].test(n))try{t.body=JSON.parse(e)}catch(e){t.body=null}else t.body=e;return t}):t}},form:function(t){var e;e=t.body,"undefined"!=typeof FormData&&e instanceof FormData?t.headers.delete("Content-Type"):D(t.body)&&t.emulateJSON&&(t.body=V.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded"))},header:function(t){q(k({},nt.headers.common,t.crossOrigin?{}:nt.headers.custom,nt.headers[C(t.method)]),function(e,n){t.headers.has(n)||t.headers.set(n,e)})},cors:function(t){if(E){var e=V.parse(location.href),n=V.parse(t.getUrl());n.protocol===e.protocol&&n.host===e.host||(t.crossOrigin=!0,t.emulateHTTP=!1,W||(t.client=J))}}},nt.interceptors=["before","method","jsonp","json","form","header","cors"],["get","delete","head","jsonp"].forEach(function(t){nt[t]=function(e,n){return this(k(n||{},{url:e,method:t}))}}),["post","put","patch"].forEach(function(t){nt[t]=function(e,n,o){return this(k(o||{},{url:e,method:t,body:n}))}}),ot.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(rt);var it=rt,at=n("Ubyc"),st=n.n(at),ct=(n("HxPz"),n("9yT1")),ut=n.n(ct),ft=n("4t5/"),dt=n.n(ft);o.a.use(dt.a),o.a.use(ut.a),o.a.use(st.a),o.a.use(it),o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:h},template:"<App/>"})},T4Kj:function(t,e){},ofiK:function(t,e){},vtsH:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3daf19b5492979153f97.js.map