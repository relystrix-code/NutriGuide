/*! For license information please see app~c5111582.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunknutriguide=self.webpackChunknutriguide||[]).push([[896],{669:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return n};var t,n={},e=Object.prototype,a=e.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{h({},"")}catch(t){h=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof w?n:w,a=Object.create(o.prototype),c=new N(r||[]);return i(a,"_invoke",{value:O(t,e,c)}),a}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function k(){}var L={};h(L,u,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(T([])));x&&x!==e&&a.call(x,u)&&(L=x);var S=k.prototype=w.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(n){h(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function e(o,i,c,u){var s=p(t[o],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==r(h)&&a.call(h,"__await")?n.resolve(h.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(a,a):a()}})}function O(n,e,r){var o=d;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=G(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var s=p(n,e,r);if("normal"===s.type){if(o=r.done?m:y,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function G(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,G(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=p(o,n.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function I(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(n){if(n||""===n){var e=n[u];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(a.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(r(n)+" is not iterable")}return b.prototype=k,i(S,"constructor",{value:k,configurable:!0}),i(k,"constructor",{value:b,configurable:!0}),b.displayName=h(k,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,h(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},j(_.prototype),h(_.prototype,s,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new _(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(S),h(S,l,"Generator"),h(S,u,(function(){return this})),h(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=T,N.prototype={constructor:N,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!n)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function r(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;I(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:T(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function a(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))}}e.d(n,{A:()=>c});const c={render:function(){var t=this;return i(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        <section class="consultation">\n          <h1>Tanya Ahli Nutrisi Sekarang!</h1>\n          <p>\n            Punya pertanyaan tentang pola makan atau nutrisi? Hubungi ahli kami melalui WhatsApp\n            untuk mendapatkan jawaban cepat dan terpercaya.\n          </p>\n          <div class="consultants">\n            '.concat(t.renderConsultantCard("./images/consultations/profile-2.webp","Chika, S.Gz, M.P.H","Senin - Jumat, 09.00 - 17.00 WIB"),"\n            ").concat(t.renderConsultantCard("./images/consultations/profile-1.webp","Zayyan, S.Gz, M.Gz","Senin - Jumat, 09.00 - 17.00 WIB"),"\n            ").concat(t.renderConsultantCard("./images/consultations/profile-3.webp","Bella, S.Gz, M.Gz","Senin - Jumat, 09.00 - 17.00 WIB"),'\n          </div>\n        </section>\n        <section class="faq">\n          <h2>FAQ</h2>\n          <div class="faq-item">\n            ').concat(t.renderFaqItem("Apakah ngemil di antara waktu makan itu sehat?","Ngemil dapat sehat jika dilakukan dengan memilih makanan yang bernutrisi dan tidak berlebihan."),'\n          </div>\n          <div class="faq-item">\n            ').concat(t.renderFaqItem("Apa itu pola makan seimbang?","Pola makan seimbang adalah konsumsi makanan dengan proporsi yang tepat dari semua kelompok makanan untuk memenuhi kebutuhan tubuh."),'\n          </div>\n          <div class="faq-item">\n            ').concat(t.renderFaqItem("Bagaimana cara menjaga berat badan ideal?","Berat badan ideal dapat dijaga dengan mengatur pola makan sehat, rutin olahraga, dan cukup istirahat."),'\n          </div>\n          <div class="faq-item">\n            ').concat(t.renderFaqItem("Apakah benar harus makan 3 kali sehari agar nutrisi kita cukup?","Tidak harus makan 3 kali sehari, tetapi penting untuk memastikan kebutuhan nutrisi harian terpenuhi."),'\n          </div>\n          <div class="faq-item">\n            ').concat(t.renderFaqItem("Berapa banyak air yang harus saya minum setiap hari?","Kebutuhan air harian bervariasi tergantung pada usia, berat badan, aktivitas, dan lingkungan. Umumnya, dianjurkan minum sekitar 8 gelas (2 liter) per hari."),"\n          </div>\n        </section>\n    "));case 1:case"end":return n.stop()}}),n)})))()},renderConsultantCard:function(t,n,e){return'\n      <a href="https://www.whatsapp.com/" target="_blank" class="consultant-card">\n        <div>\n          <img src="'.concat(t,'" alt="').concat(n,'">\n          <h3>').concat(n,"</h3>\n          <p>Jam Konsultasi: ").concat(e,"</p>\n        </div>\n      </a>\n    ")},renderFaqItem:function(t,n){return'\n      <button class="faq-question">\n        '.concat(t,'\n        <span class="toggle-icon">+</span>\n      </button>\n      <div class="faq-answer">\n        <p>').concat(n,"</p>\n      </div>\n    ")},afterRender:function(){return i(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=document.querySelectorAll(".faq-question"))&&n.forEach((function(t){t.addEventListener("click",(function(){t.classList.toggle("active");var n=t.nextElementSibling;n&&(n.style.display="block"===n.style.display?"none":"block")}))})),console.log("Consultation Page rendered");case 3:case"end":return t.stop()}}),t)})))()}}},831:(t,n,e)=>{e.d(n,{A:()=>u});var r=e(572);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(){a=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{h({},"")}catch(t){h=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof w?n:w,a=Object.create(o.prototype),c=new N(r||[]);return i(a,"_invoke",{value:O(t,e,c)}),a}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function k(){}var L={};h(L,u,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(T([])));x&&x!==e&&r.call(x,u)&&(L=x);var S=k.prototype=w.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(n){h(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function e(a,i,c,u){var s=p(t[a],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==o(h)&&r.call(h,"__await")?n.resolve(h.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return a=a?a.then(o,o):o()}})}function O(n,e,r){var o=d;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=G(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var s=p(n,e,r);if("normal"===s.type){if(o=r.done?m:y,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function G(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,G(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=p(o,n.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function I(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(n){if(n||""===n){var e=n[u];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,i=function e(){for(;++a<n.length;)if(r.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(o(n)+" is not iterable")}return b.prototype=k,i(S,"constructor",{value:k,configurable:!0}),i(k,"constructor",{value:b,configurable:!0}),b.displayName=h(k,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,h(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},j(_.prototype),h(_.prototype,s,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new _(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(S),h(S,l,"Generator"),h(S,u,(function(){return this})),h(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=T,N.prototype={constructor:N,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;I(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:T(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function i(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function c(t){i(a,r,o,c,u,"next",t)}function u(t){i(a,r,o,c,u,"throw",t)}c(void 0)}))}}const u={render:function(){return c(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n      <section class="hero-home">\n        <div class="hero-content-home">\n          <h1>\n            Wujudkan Pola Hidup Sehat Mulai dari Sekarang dengan <span>NutriGuide</span>\n          </h1>\n          <p>\n            <span>NutriGuide</span> hadir sebagai solusi modern untuk membantu Anda mengelola\n            asupan nutrisi harian dengan mudah dan praktis. Bersama <span>NutriGuide</span>,\n            wujudkan hidup sehat dan berkualitas mulai dari hari ini!\n          </p>\n          <img src="./images/heroes/home-page.webp" alt="Hero Image">\n        </div>\n      </section>\n      <div class="check-nutrition">\n        <h2>Cek Gizi</h2>\n        <div class="nutrition-content">\n          <div class="nutrition-text">\n            <p>\n              Yuk, <span>check gizi</span> kamu sekarang dan temukan informasi penting\n              tentang kesehatan tubuhmu!\n            </p>\n            <button id="check-nutrition-btn" class="btn-check">Cek Gizi Sekarang!</button>\n          </div>\n          <img src="./images/features/home-check.webp" alt="Image Gizi">\n        </div>\n      </div>\n      <section class="artikel-section">\n        <h2>Artikel</h2>\n        <div class="artikel-grid" id="artikel-grid"></div>\n        <a href="#/articles" class="read-more-link">Selengkapnya ></a>\n      </section>\n    ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return c(a().mark((function t(){var n,e,o,i,c,u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=document.getElementById("main-header"),e=document.getElementById("main-footer"),n&&(n.style.display=""),e&&(e.style.display=""),(o=document.getElementById("check-nutrition-btn"))&&o.addEventListener("click",(function(){window.location.hash="#/check"})),t.prev=6,t.next=9,r.A.AllArticles();case 9:if(i=t.sent,c=i.data.articles.slice(0,5),u=document.getElementById("artikel-grid"),c&&0!==c.length){t.next=15;break}return u.innerHTML="<p>Tidak ada artikel tersedia.</p>",t.abrupt("return");case 15:u.innerHTML=c.map((function(t){return'\n          <a href="#/articles/'.concat(t.id,'">\n            <div class="artikel-card">\n              <img src="').concat(t.picture,'" alt="').concat(t.title,'">\n              <h3>').concat(t.title,"</h3>\n              <p>").concat(t.category," | ").concat(new Date(t.date).toLocaleDateString("id-ID"),"</p>\n            </div>\n          </a>\n        ")})).join(""),t.next=23;break;case 18:t.prev=18,t.t0=t.catch(6),console.error("Gagal memuat artikel:",t.t0),document.getElementById("artikel-grid").innerHTML="<p>Gagal memuat artikel.</p>";case 23:case"end":return t.stop()}}),t,null,[[6,18]])})))()}}},759:(t,n,e)=>{function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return n};var t,n={},e=Object.prototype,a=e.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{h({},"")}catch(t){h=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof w?n:w,a=Object.create(o.prototype),c=new N(r||[]);return i(a,"_invoke",{value:O(t,e,c)}),a}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function k(){}var L={};h(L,u,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(T([])));x&&x!==e&&a.call(x,u)&&(L=x);var S=k.prototype=w.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(n){h(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){function e(o,i,c,u){var s=p(t[o],t,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==r(h)&&a.call(h,"__await")?n.resolve(h.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(a,a):a()}})}function O(n,e,r){var o=d;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var u=G(c,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var s=p(n,e,r);if("normal"===s.type){if(o=r.done?m:y,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=m,r.method="throw",r.arg=s.arg)}}}function G(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,G(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=p(o,n.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function I(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(n){if(n||""===n){var e=n[u];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(a.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(r(n)+" is not iterable")}return b.prototype=k,i(S,"constructor",{value:k,configurable:!0}),i(k,"constructor",{value:b,configurable:!0}),b.displayName=h(k,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,h(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},j(_.prototype),h(_.prototype,s,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new _(f(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(S),h(S,l,"Generator"),h(S,u,(function(){return this})),h(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=T,N.prototype={constructor:N,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!n)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function r(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),g},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),I(e),g}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;I(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:T(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function a(t,n,e,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))}}e.d(n,{A:()=>c});const c={render:function(){return i(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",'\n      <div class="login-wrapper">\n        <section class="container-login">\n          <div class="left-section">\n            <h1>Selamat Datang<br>di <span>NutriGuide!</span></h1>\n            <img src="./images/heroes/signup-login.webp" alt="Login Image">\n          </div>\n          <div class="right-section">\n            <h2>Masuk</h2>\n            <form id="login-form">\n              <div class="input-group">\n                <input type="email" id="email" placeholder="Email" required>\n              </div>\n              <div class="input-group">\n                <input type="password" id="password" placeholder="Kata Sandi" required>\n              </div>\n              <button class="button-login" type="submit">Masuk</button>\n              <p class="register">Belum punya akun? <a href="#">Daftar Sekarang</a></p>\n            </form>\n          </div>\n        </section>\n      </div>\n    ');case 1:case"end":return t.stop()}}),t)})))()},afterRender:function(){return i(o().mark((function t(){var n,e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Login Page rendered"),n=document.getElementById("main-header"),e=document.getElementById("main-footer"),n&&(n.style.display="none"),e&&(e.style.display="none"),document.getElementById("login-form").addEventListener("submit",(function(t){t.preventDefault();var n=document.getElementById("email").value,e=document.getElementById("password").value;n&&e?window.location.hash="/home":alert("Email dan kata sandi harus diisi!")})),document.querySelector(".register a").addEventListener("click",(function(t){t.preventDefault(),window.location.hash="/signup"}));case 9:case"end":return t.stop()}}),t)})))()}}}}]);
//# sourceMappingURL=app~c5111582.bundle.js.map