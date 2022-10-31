"use strict";function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */}!function(e){var t,n=e.setTimeout,o=e.clearTimeout,r=e.XMLHttpRequest,i=e.XDomainRequest,a=e.ActiveXObject,s=e.EventSource,c=e.document,u=e.Promise,l=e.fetch,d=e.Response,h=e.TextDecoder,f=e.TextEncoder,p=e.AbortController;function y(){this.bitsNeeded=0,this.codePoint=0}function v(){}function g(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=v,this.onload=v,this.onerror=v,this.onreadystatechange=v,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=v}function b(e){return e.replace(/[A-Z]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+32)}))}function w(e){for(var t=Object.create(null),n=e.split("\r\n"),o=0;o<n.length;o+=1){var r=(i=n[o].split(": ")).shift(),i=i.join(": ");t[b(r)]=i}this._map=t}function m(){}function E(e){this._headers=e}function C(){}function T(){this._listeners=Object.create(null)}function _(e){n((function(){throw e}),0)}function S(e){this.type=e,this.target=void 0}function x(e,t){S.call(this,e),this.data=t.data,this.lastEventId=t.lastEventId}function A(e,t){S.call(this,e),this.status=t.status,this.statusText=t.statusText,this.headers=t.headers}function R(e,t){S.call(this,e),this.error=t.error}"undefined"==typeof window||void 0===c||"readyState"in c||null!=c.body||(c.readyState="loading",window.addEventListener("load",(function(e){c.readyState="complete"}),!1)),null==r&&null!=a&&(r=function(){return new a("Microsoft.XMLHTTP")}),null==Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),Date.now||(Date.now=function(){return(new Date).getTime()}),null==p&&(t=l,l=function(e,n){var o=n.signal;return t(e,{headers:n.headers,credentials:n.credentials,cache:n.cache}).then((function(e){var t=e.body.getReader();return o._reader=t,o._aborted&&o._reader.cancel(),{status:e.status,statusText:e.statusText,headers:e.headers,body:{getReader:function(){return t}}}}))},p=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){null!=this.signal._reader&&this.signal._reader.cancel(),this.signal._aborted=!0}}),y.prototype.decode=function(e){function t(e,t,n){if(1===n)return 128>>t<=e&&e<<t<=2047;if(2===n)return 2048>>t<=e&&e<<t<=55295||57344>>t<=e&&e<<t<=65535;if(3===n)return 65536>>t<=e&&e<<t<=1114111;throw new Error}function n(e,t){if(6===e)return 15<t>>6?3:31<t?2:1;if(12===e)return 15<t?3:2;if(18===e)return 3;throw new Error}for(var o="",r=this.bitsNeeded,i=this.codePoint,a=0;a<e.length;a+=1){var s=e[a];0!==r&&(s<128||191<s||!t(i<<6|63&s,r-6,n(r,i)))&&(r=0,i=65533,o+=String.fromCharCode(i)),0===r?(i=0<=s&&s<=127?(r=0,s):192<=s&&s<=223?(r=6,31&s):224<=s&&s<=239?(r=12,15&s):240<=s&&s<=247?(r=18,7&s):(r=0,65533),0===r||t(i,r,n(r,i))||(r=0,i=65533)):(r-=6,i=i<<6|63&s),0===r&&(i<=65535?o+=String.fromCharCode(i):o=(o+=String.fromCharCode(55296+(i-65535-1>>10)))+String.fromCharCode(56320+(i-65535-1&1023)))}return this.bitsNeeded=r,this.codePoint=i,o},null!=h&&null!=f&&function(){try{return"test"===(new h).decode((new f).encode("test"),{stream:!0})}catch(e){}return!1}()||(h=y),g.prototype.open=function(e,t){this._abort(!0);var i=this,a=this._xhr,s=1,c=0,u=(this._abort=function(e){0!==i._sendTimeout&&(o(i._sendTimeout),i._sendTimeout=0),1!==s&&2!==s&&3!==s||(s=4,a.onload=v,a.onerror=v,a.onabort=v,a.onprogress=v,a.onreadystatechange=v,a.abort(),0!==c&&(o(c),c=0),e||(i.readyState=4,i.onabort(null),i.onreadystatechange())),s=0},function(){if(1===s){var e=0,t="",n=void 0;if("contentType"in a)e=200,t="OK",n=a.contentType;else try{e=a.status,t=a.statusText,n=a.getResponseHeader("Content-Type")}catch(o){t="",n=void(e=0)}0!==e&&(s=2,i.readyState=2,i.status=e,i.statusText=t,i._contentType=n,i.onreadystatechange())}}),l=function(){if(u(),2===s||3===s){s=3;var e="";try{e=a.responseText}catch(e){}i.readyState=3,i.responseText=e,i.onprogress()}},d=function(e,t){if(null!=t&&null!=t.preventDefault||(t={preventDefault:v}),l(),1===s||2===s||3===s){if(s=4,0!==c&&(o(c),c=0),i.readyState=4,"load"===e)i.onload(t);else if("error"===e)i.onerror(t);else{if("abort"!==e)throw new TypeError;i.onabort(t)}i.onreadystatechange()}},h=function e(){c=n((function(){e()}),500),3===a.readyState&&l()};"onload"in a&&(a.onload=function(e){d("load",e)}),"onerror"in a&&(a.onerror=function(e){d("error",e)}),"onabort"in a&&(a.onabort=function(e){d("abort",e)}),"onprogress"in a&&(a.onprogress=l),"onreadystatechange"in a&&(a.onreadystatechange=function(e){null!=a&&(4===a.readyState?"onload"in a&&"onerror"in a&&"onabort"in a||d(""===a.responseText?"error":"load",e):3===a.readyState?"onprogress"in a||l():2===a.readyState&&u())}),!("contentType"in a)&&"ontimeout"in r.prototype||(t+=(-1===t.indexOf("?")?"?":"&")+"padding=true"),a.open(e,t,!0),"readyState"in a&&(c=n((function(){h()}),0))},g.prototype.abort=function(){this._abort(!1)},g.prototype.getResponseHeader=function(e){return this._contentType},g.prototype.setRequestHeader=function(e,t){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,t)},g.prototype.getAllResponseHeaders=function(){return null!=this._xhr.getAllResponseHeaders&&this._xhr.getAllResponseHeaders()||""},g.prototype.send=function(){var e;if("ontimeout"in r.prototype&&("sendAsBinary"in r.prototype||"mozAnon"in r.prototype)||null==c||null==c.readyState||"complete"===c.readyState){var t=this._xhr;"withCredentials"in t&&(t.withCredentials=this.withCredentials);try{t.send(void 0)}catch(e){throw e}}else(e=this)._sendTimeout=n((function(){e._sendTimeout=0,e.send()}),4)},w.prototype.get=function(e){return this._map[b(e)]},null!=r&&null==r.HEADERS_RECEIVED&&(r.HEADERS_RECEIVED=2),m.prototype.open=function(e,t,n,o,i,a,s){e.open("GET",i);var c,u=0;for(c in e.onprogress=function(){var t=e.responseText.slice(u);u+=t.length,n(t)},e.onerror=function(e){e.preventDefault(),o(new Error("NetworkError"))},e.onload=function(){o(null)},e.onabort=function(){o(null)},e.onreadystatechange=function(){var n,o,i,a;e.readyState===r.HEADERS_RECEIVED&&(n=e.status,o=e.statusText,i=e.getResponseHeader("Content-Type"),a=e.getAllResponseHeaders(),t(n,o,i,new w(a)))},e.withCredentials=a,s)Object.prototype.hasOwnProperty.call(s,c)&&e.setRequestHeader(c,s[c]);return e.send(),e},E.prototype.get=function(e){return this._headers.get(e)},C.prototype.open=function(e,t,n,o,r,i,a){var s=null,c=new p,d=c.signal,f=new h;return l(r,{headers:a,credentials:i?"include":"same-origin",signal:d,cache:"no-store"}).then((function(e){return s=e.body.getReader(),t(e.status,e.statusText,e.headers.get("Content-Type"),new E(e.headers)),new u((function(e,t){!function o(){s.read().then((function(t){t.done?e(void 0):(t=f.decode(t.value,{stream:!0}),n(t),o())})).catch((function(e){t(e)}))}()}))})).catch((function(e){if("AbortError"!==e.name)return e})).then((function(e){o(e)})),{abort:function(){null!=s&&s.cancel(),c.abort()}}},T.prototype.dispatchEvent=function(e){var t=(e.target=this)._listeners[e.type];if(null!=t)for(var n=t.length,o=0;o<n;o+=1){var r=t[o];try{"function"==typeof r.handleEvent?r.handleEvent(e):r.call(this,e)}catch(e){_(e)}}},T.prototype.addEventListener=function(e,t){e=String(e);for(var n=this._listeners,o=n[e],r=(null==o&&(n[e]=o=[]),!1),i=0;i<o.length;i+=1)o[i]===t&&(r=!0);r||o.push(t)},T.prototype.removeEventListener=function(e,t){e=String(e);var n=this._listeners,o=n[e];if(null!=o){for(var r=[],i=0;i<o.length;i+=1)o[i]!==t&&r.push(o[i]);0===r.length?delete n[e]:n[e]=r}},x.prototype=Object.create(S.prototype),A.prototype=Object.create(S.prototype),R.prototype=Object.create(S.prototype);var O=/^text\/event\-stream(;.*)?$/i,D=function(e,t){return e=null==e?t:parseInt(e,10),H(e=e!=e?t:e)},H=function(e){return Math.min(Math.max(e,1e3),18e6)},N=function(e,t,n){try{"function"==typeof t&&t.call(e,n)}catch(e){_(e)}};function j(e,t){function a(e,t,n,o){var r;0===P&&(200===e&&null!=n&&O.test(n)?(P=1,v=Date.now(),y=h,u.readyState=1,r=new A("open",{status:e,statusText:t,headers:o}),u.dispatchEvent(r),N(u,u.onopen,r)):(200!==e?t=t&&t.replace(/\s+/g," "):null!=n&&n.replace(/\s+/g," "),k(),r=new A("error",{status:e,statusText:t,headers:o}),u.dispatchEvent(r),N(u,u.onerror,r)))}function s(e){if(1===P){for(var t=-1,r=0;r<e.length;r+=1)(c=e.charCodeAt(r))!=="\n".charCodeAt(0)&&c!=="\r".charCodeAt(0)||(t=r);var i=(-1!==t?X:"")+e.slice(0,t+1);X=(-1===t?X:"")+e.slice(t+1),""!==e&&(v=Date.now(),b+=e.length);for(var a=0;a<i.length;a+=1){var s,c=i.charCodeAt(a);if(-1===G&&c==="\n".charCodeAt(0))G=0;else if(-1===G&&(G=0),c==="\r".charCodeAt(0)||c==="\n".charCodeAt(0)){if(0!==G&&(1===G&&(B=a+1),l=i.slice(V,B-1),s=i.slice(B+(B<a&&i.charCodeAt(B)===" ".charCodeAt(0)?1:0),a),"data"===l?L=L+"\n"+s:"id"===l?M=s:"event"===l?q=s:"retry"===l?(h=D(s,h),y=h):"heartbeatTimeout"===l&&(f=D(s,f),0!==j&&(o(j),j=n((function(){z()}),f)))),0===G){if(""!==L){p=M;var l=new x(q=""===q?"message":q,{data:L.slice(1),lastEventId:M});if(u.dispatchEvent(l),"open"===q?N(u,u.onopen,l):"message"===q?N(u,u.onmessage,l):"error"===q&&N(u,u.onerror,l),2===P)return}q=L=""}G=c==="\r".charCodeAt(0)?-1:0}else 0===G&&(V=a,G=1),1===G?c===":".charCodeAt(0)&&(B=a+1,G=2):2===G&&(G=3)}}}function c(e){1!==P&&0!==P||(P=-1,0!==j&&(o(j),j=0),j=n((function(){z()}),y),y=H(Math.min(16*h,2*y)),u.readyState=0,e=new R("error",{error:e}),u.dispatchEvent(e),N(u,u.onerror,e))}var u,l,d,h,f,p,y,v,b,w,E,_,S,j,P,L,M,q,X,G,V,B,k,z;T.call(this),t=t||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,u=this,l=e,e=t,l=String(l),t=Boolean(e.withCredentials),d=e.lastEventIdQueryParameterName||"lastEventId",h=H(1e3),f=D(e.heartbeatTimeout,45e3),p="",y=h,v=!1,b=0,w=e.headers||{},e=e.Transport,E=I&&null==e?void 0:new g(new(null!=e?e:null!=r&&"withCredentials"in r.prototype||null==i?r:i)),_=new(null!=e&&"string"!=typeof e?e:null==E?C:m),S=void 0,P=-1,X=q=M=L="",G=0,B=V=j=0,k=function(){P=2,null!=S&&(S.abort(),S=void 0),0!==j&&(o(j),j=0),u.readyState=2},z=function(){if(j=0,-1!==P)v||null==S?(e=Math.max((v||Date.now())+f-Date.now(),1),v=!1,j=n((function(){z()}),e)):(c(new Error("No activity within "+f+" milliseconds. "+(0===P?"No response received.":b+" chars received.")+" Reconnecting.")),null!=S&&(S.abort(),S=void 0));else{v=!1,b=0,j=n((function(){z()}),f),P=0,M=p,X=q=L="",B=V=0,G=0;var e=l,t=("data:"!==l.slice(0,5)&&"blob:"!==l.slice(0,5)&&""!==p&&(e=-1===(t=l.indexOf("?"))?l:l.slice(0,t+1)+l.slice(t+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,(function(e,t){return t===d?"":e})),e+=(-1===l.indexOf("?")?"?":"&")+d+"="+encodeURIComponent(p)),u.withCredentials),o={Accept:"text/event-stream"},r=u.headers;if(null!=r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(o[i]=r[i]);try{S=_.open(E,a,s,c,e,t,o)}catch(e){throw k(),e}}},u.url=l,u.readyState=0,u.withCredentials=t,u.headers=w,u._close=k,z()}var I=null!=l&&null!=d&&"body"in d.prototype;(j.prototype=Object.create(T.prototype)).CONNECTING=0,j.prototype.OPEN=1,j.prototype.CLOSED=2,j.prototype.close=function(){this._close()},j.CONNECTING=0,j.OPEN=1,j.CLOSED=2,j.prototype.withCredentials=void 0;var P=s;null==r||null!=s&&"withCredentials"in s.prototype||(P=j),d=function(e){e.EventSourcePolyfill=j,e.NativeEventSource=s,e.EventSource=P},"object"==("undefined"==typeof module?"undefined":_typeof(module))&&"object"==_typeof(module.exports)?d(exports):"function"==typeof define&&define.amd?define(["exports"],d):d(e)}("undefined"==typeof globalThis?"undefined"!=typeof window?window:"undefined"!=typeof self?self:void 0:globalThis);var app={init:function(){console.log("dsadsadsa")}};