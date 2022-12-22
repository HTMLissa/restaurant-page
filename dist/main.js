(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(636),t.b),d=i()(o()),u=s()(l);d.push([e.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* Stylesheet */\n\nbody {\n  font-family: "Ruda", sans-serif;\n}\n\n#content {\n  background: url('+u+');\n  background-size: cover;\n}\n\n.nav {\n  width: 100vw;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  text-transform: uppercase;\n  font-weight: 800;\n  background-color: rgba(252, 149, 76, 0.7);\n  position: fixed;\n  color: white;\n}\n\n.nav-ul {\n  display: flex;\n}\n\n.nav-ul li {\n  margin-left: 80px;\n  transition: 0.4sec all ease-in-out;\n  cursor: pointer;\n}\n\n.nav-ul li:hover {\n  color: #ffeccf;\n}\n\n#header-logo {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  text-align: center;\n}\n\n#welcome-section {\n  height: 100vh;\n  display: grid;\n  place-content: center;\n}\n\nh1 {\n  font-size: 4rem;\n  color: white;\n  font-family: "Dancing Script", cursive;\n  text-align: center;\n  color: #ffeccf;\n}\n\nh1 span {\n  font-family: "Chau Philomene One", sans-serif;\n  text-transform: uppercase;\n  color: white;\n}\n\n.footer {\n  height: 30px;\n  background-color: #31572c;\n  display: flex;\n  align-items: center;\n}\n\n.footer p {\n  margin-left: 20px;\n  font-size: 0.5rem;\n  color: #1a2f17;\n}\n\n/* ABOUT US */\n\n.main-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-content-container {\n  width: 80%;\n  min-height: 100vh;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n\n#about-us-article {\n  width: 70%;\n  line-height: 2.5rem;\n  text-transform: uppercase;\n  margin-top: 200px;\n}\n\n#about-us-span {\n  font-family: "Dancing Script", cursive;\n  font-size: 3.3rem;\n  text-transform: lowercase;\n  color: green;\n}\n\n/* MENU */\n\n/* LOCATION */\n#location-container {\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n}\n\n#location-container p:first-child {\n  font-family: "Dancing Script", cursive;\n  font-size: 3.3rem;\n  color: green;\n}\n\n#location-container p:nth-child(2) {\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 1.5rem;\n}\n\n/* CHEESE OF THE WEEK */\n#cheese-recommendation-container {\n  display: flex;\n  flex-direction: column;\n}\n\n#come-try {\n  margin-top: 100px;\n  font-family: "Dancing Script", cursive;\n  font-size: 4rem;\n  color: rgba(252, 149, 76, 1);\n}\n\n#cheese-recommendation-container h2 {\n  font-family: "Chau Philomene One", sans-serif;\n  font-size: 3rem;\n  text-transform: uppercase;\n  color: rgb(0, 0, 0);\n}\n\n#cheese-img {\n  border-radius: 8px;\n  margin-top: 20px;\n}\n\n#artist-info {\n  font-size: 0.3rem;\n  margin-top: 5px;\n  color: white;\n}\n',""]);const p=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},636:(e,n,t)=>{e.exports=t.p+"0ef180aed3b0876dc327.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"f719cd14794d30dab7de.svg",b=t.p+"e7f1e255a38de461aca5.svg",g=t.p+"f87bca702d50dd1b841a.jpg";(()=>{const e=document.querySelector("#content"),n=document.createElement("header");n.setAttribute("class","header"),n.setAttribute("id","index-header"),e.appendChild(n);const t=document.createElement("div");t.setAttribute("class","nav"),n.appendChild(t);const r=new Image;r.src=h,r.setAttribute("alt","gouda logo"),r.setAttribute("id","header-logo"),r.setAttribute("width","180px"),t.appendChild(r);const o=document.createElement("div");o.setAttribute("class","nav-left"),t.appendChild(o);const a=document.createElement("div");a.setAttribute("class","nav-right"),t.appendChild(a);const i=document.createElement("ul");i.setAttribute("class","nav-ul"),i.setAttribute("id","nav-ul-left"),o.appendChild(i);const c=document.createElement("ul");c.setAttribute("class","nav-ul"),c.setAttribute("id","nav-ul-right"),a.appendChild(c);const s=document.createElement("li"),l=document.createElement("li");s.innerHTML="about us",l.innerHTML="menu",s.setAttribute("class","about-us-btn"),l.setAttribute("class","menu-btn"),i.appendChild(s),i.appendChild(l);const d=document.createElement("li"),u=document.createElement("li");d.innerHTML="location",u.innerHTML="cheese of the week",d.setAttribute("class","location-btn"),u.setAttribute("class","cheese-of-week-btn"),c.appendChild(d),c.appendChild(u);const p=document.createElement("main");p.setAttribute("class","main"),p.setAttribute("id","index-main"),e.appendChild(p);const m=document.createElement("section");m.setAttribute("id","welcome-section"),p.appendChild(m);const f=document.createElement("h1");f.innerHTML="Welcome to <br /><span>Gouda</span>",m.appendChild(f);const b=document.createElement("footer");b.setAttribute("class","footer"),b.setAttribute("id","index-footer"),e.appendChild(b);const g=document.createElement("p"),v=document.createElement("p");g.innerHTML="Made by HTMLissa, 2022",v.innerHTML="Photo by Cody Pulliam on Unsplash",b.appendChild(g),b.appendChild(v)})(),console.log("switched"),document.querySelector(".about-us-btn").addEventListener("click",(()=>{const e=document.querySelector("main");e.innerHTML="";const n=document.createElement("div");n.setAttribute("class","main-content-container"),e.classList.add("main-section"),e.appendChild(n);const t=document.createElement("p");t.setAttribute("id","about-us-article"),t.innerHTML='<span id="about-us-span">Our story begins in</span> <br> rubber cheese bocconcini boursin. Swiss cheddar fondue cheese and wine cottage\n  cheese who moved my cheese fromage stilton. Who moved my cheese\n  mozzarella smelly cheese mascarpone pecorino jarlsberg caerphilly\n  fromage frais. When the cheese comes out everybody\'s happy fromage\n  cheese triangles feta babybel bavarian bergkase cheesy feet fromage\n  frais. Boursin macaroni cheese.',n.appendChild(t)})),document.querySelector(".menu-btn").addEventListener("click",(()=>{const e=document.querySelector("main");e.innerHTML="",e.classList.add("main-section");const n=document.createElement("div");n.setAttribute("class","main-content-container"),e.appendChild(n);const t=document.createElement("div");t.setAttribute("class","menu-wrapper"),n.appendChild(t);const r=new Image;r.src=b,r.setAttribute("alt","menu"),r.setAttribute("id","gouda-menu"),t.appendChild(r)})),document.querySelector(".location-btn").addEventListener("click",(()=>{const e=document.createElement("div"),n=document.querySelector("main");n.innerHTML="",n.classList.add("main-section"),e.setAttribute("class","main-content-container"),e.setAttribute("id","location-container"),n.appendChild(e);const t=document.createElement("p"),r=document.createElement("p");t.textContent="You can find us at:",r.innerHTML="1234 Lorem Ipsum Street <br />\n  12345 Lorem Ipsum, LI",e.appendChild(t),e.appendChild(r)})),document.querySelector(".cheese-of-week-btn").addEventListener("click",(()=>{const e=document.createElement("div"),n=document.querySelector("main");n.innerHTML="",n.classList.add("main-section"),e.setAttribute("class","main-content-container"),e.setAttribute("id","cheese-recommendation-container"),n.appendChild(e);const t=document.createElement("p"),r=document.createElement("h2"),o=new Image,a=document.createElement("p");t.textContent="Come try our",t.setAttribute("id","come-try"),r.textContent="Camembert",o.src=g,o.setAttribute("alt","camembert"),o.setAttribute("id","cheese-img"),o.setAttribute("width","300px"),a.textContent="Photo by Adana Eisagholian on Unsplash",a.setAttribute("id","artist-info"),e.appendChild(t),e.appendChild(r),e.appendChild(o),e.appendChild(a)}))})()})();