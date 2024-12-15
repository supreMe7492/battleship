(()=>{"use strict";var t={365:(t,e,r)=>{r.d(e,{A:()=>c});var n=r(601),o=r.n(n),a=r(314),i=r.n(a)()(o());i.push([t.id,"html,\nbody {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  height: 100vh;\n  background-color: rgb(6, 77, 6);\n}\n\n.gameContainer {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n  text-align: center;\n}\n.gameBoardContainer {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  gap: 2em;\n  gap: 1em;\n  justify-content: space-evenly;\n}\n.playerContainer,\n.computerContainer {\n  height: 98%;\n  width: 31%;\n  margin-top: -3em;\n  margin-left: 4em;\n}\n\n.playerBoard,\n.computerBoard {\n  display: grid;\n  margin-bottom: 15%;\n  height: 85%;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 2px;\n}\n.playerBoardCells,\n.computerBoardCells {\n  background-color: green;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.result {\n  margin-bottom: 2em;\n}\n.reset {\n  width: 55px;\n  position: relative;\n  z-index: 1;\n  left: 56em;\n  cursor: pointer;\n  bottom: 4em;\n}\n",""]);const c=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);n&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var a={},i=[],c=0;c<t.length;c++){var u=t[c],l=n.base?u[0]+n.base:u[0],s=a[l]||0,f="".concat(l," ").concat(s);a[l]=s+1;var d=r(f),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)e[d].references++,e[d].updater(p);else{var y=o(p,n);n.byIndex=c,e.splice(c,0,{identifier:f,updater:y,references:1})}i.push(f)}return i}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=r(a[i]);e[c].references--}for(var u=n(t,o),l=0;l<a.length;l++){var s=r(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=u}}},659:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0;var n=r(72),o=r.n(n),a=r(825),i=r.n(a),c=r(659),u=r.n(c),l=r(56),s=r.n(l),f=r(540),d=r.n(f),p=r(113),y=r.n(p),h=r(365),m={};function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,g(n.key),n)}}function g(t){var e=function(t){if("object"!=v(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(e)?e:e+""}m.styleTagTransform=y(),m.setAttributes=s(),m.insert=u().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),o()(h.A,m),h.A&&h.A.locals&&h.A.locals;var S=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.length=e,this.cordinates=new Set},(e=[{key:"hit",value:function(){this.length--}},{key:"isSunk",value:function(){if(0==this.length)return!0}}])&&b(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return C(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,x(n.key),n)}}function x(t){var e=function(t){if("object"!=k(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==k(e)?e:e+""}var B=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ships=[],this.sunkedShip=[],this.cordinateSet=new Set,this.hittedCordinates=new Set},(e=[{key:"createShips",value:function(){for(var t=4;t>=1;t--)for(var e=Math.ceil(4/t),r=1;r<=e;r++){var n=new S(t);this.ships.push(n)}}},{key:"shipCordinates",value:function(){var t=this;this.ships.forEach((function(e){for(var r=!1;!r;){for(var n=Math.floor(10*Math.random()),o=Math.floor(10*Math.random()),a=["horiz","vert"][Math.floor(2*Math.random())],i=new Set,c=0;c<e.length;c++)"horiz"===a?o+e.length<=10?i.add([n,o+c].toString()):i.add([n,o-c].toString()):"vert"===a&&(n+e.length<=10?i.add([n+c,o].toString()):i.add([n-c,o].toString()));if(!t.isOverlapping(i)){e.cordinates=i;var u,l=w(i);try{for(l.s();!(u=l.n()).done;){var s=u.value;t.cordinateSet.add(s)}}catch(t){l.e(t)}finally{l.f()}r=!0}}}))}},{key:"isOverlapping",value:function(t){var e,r=w(t);try{for(r.s();!(e=r.n()).done;){var n=e.value;if(this.cordinateSet.has(n))return!0}}catch(t){r.e(t)}finally{r.f()}return!1}},{key:"hitBoard",value:function(t){if(!this.hittedCordinates.has(t.toString())){if(this.shipsSunk(),this.sunkedShip.length==this.ships.length)return!0;this.isHittingShip(t),this.hittedCordinates.add(t.toString())}}},{key:"isHittingShip",value:function(t){this.ships.forEach((function(e){e.cordinates.has(t.toString())&&e.hit()}))}},{key:"shipsSunk",value:function(){var t=this;this.ships.forEach((function(e){e.isSunk()&&!t.sunkedShip.includes(e)&&t.sunkedShip.push(e)}))}},{key:"allShipShunk",value:function(){if(this.sunkedShip.length==this.ships.length)return!0}}])&&A(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,M(n.key),n)}}function M(t){var e=function(t){if("object"!=E(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==E(e)?e:e+""}var T=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.playerGameBoard=new B},(e=[{key:"playerShips",value:function(){this.playerGameBoard.createShips(),this.playerGameBoard.shipCordinates()}},{key:"attack",value:function(t,e){t.playerGameBoard.hitBoard(e)}},{key:"checkLoss",value:function(){if(this.playerGameBoard.allShipShunk())return!0}}])&&j(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function P(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return O(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function G(t){for(var e=0;e<10;e++)for(var r=0;r<10;r++){var n=document.createElement("div");n.classList.add("".concat(t.classList,"Cells")),n.dataset.cordinates="".concat(e,",").concat(r),t.append(n)}}var I=document.querySelector(".playerBoard"),q=document.querySelector(".computerBoard");G(I),G(q);var L=function(){var t=new T,e=new T,r="player",n=!0;function o(){var r=document.querySelectorAll(".playerBoardCells");t.playerShips(),e.playerShips(),t.playerGameBoard.cordinateSet.forEach((function(t){var e,n=P(r);try{for(n.s();!(e=n.n()).done;){var o=e.value;o.dataset.cordinates==t&&(o.style.backgroundColor="black")}}catch(t){n.e(t)}finally{n.f()}}))}function a(){r="player"==r?"computer":"player"}function i(){if(n&&"computer"==r){var o="".concat(Math.floor(10*Math.random()),",").concat(Math.floor(10*Math.random()));if(t.playerGameBoard.hittedCordinates.has(o))i();else{e.attack(t,o);var c,u=P(document.querySelectorAll(".playerBoardCells"));try{for(u.s();!(c=u.n()).done;){var l=c.value;l.dataset.cordinates==o&&(t.playerGameBoard.cordinateSet.has(o)?l.style.backgroundColor="red":l.style.backgroundColor="blue")}}catch(t){u.e(t)}finally{u.f()}a()}}}function c(){return e.checkLoss()||t.checkLoss()?(n=!1,"".concat(r)):void 0}return{userShips:o,playerAttack:function(o){if(n&&"player"==r){var u=o.target.dataset.cordinates;if(!e.playerGameBoard.hittedCordinates.has(u)){t.attack(e,u),e.playerGameBoard.cordinateSet.has(u)?o.target.style.backgroundColor="red":o.target.style.backgroundColor="blue";var l=c(),s=document.querySelector(".result");s.textContent="",void 0!==l&&(s.textContent="".concat(l," has won the game")),n&&(a(),i())}}},computerAttack:i,checkWinner:c,reset:function(){t.playerGameBoard=new B,e.playerGameBoard=new B,n=!0,r="player";var a=document.querySelectorAll(".playerBoardCells"),i=document.querySelectorAll(".computerBoardCells");a.forEach((function(t){t.style.backgroundColor=""})),i.forEach((function(t){t.style.backgroundColor=""})),o()}}}();L.userShips(),document.querySelectorAll(".computerBoardCells").forEach((function(t){t.addEventListener("click",(function(t){L.playerAttack(t)}))})),document.querySelector(".reset").addEventListener("click",L.reset)})();