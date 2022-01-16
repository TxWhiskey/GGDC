var Ar=Object.defineProperty;var An=Object.getOwnPropertySymbols;var Cr=Object.prototype.hasOwnProperty,$r=Object.prototype.propertyIsEnumerable;var Cn=(n,e,t)=>e in n?Ar(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ve=(n,e)=>{for(var t in e||(e={}))Cr.call(e,t)&&Cn(n,t,e[t]);if(An)for(var t of An(e))$r.call(e,t)&&Cn(n,t,e[t]);return n};function H(){}function he(n,e){for(const t in e)n[t]=e[t];return n}function $n(n){return n()}function On(){return Object.create(null)}function We(n){n.forEach($n)}function Or(n){return typeof n=="function"}function U(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let mt;function Pn(n,e){return mt||(mt=document.createElement("a")),mt.href=e,n===mt.href}function Pr(n){return Object.keys(n).length===0}function Nr(n,...e){if(n==null)return H;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function yf(n,e,t){n.$$.on_destroy.push(Nr(e,t))}function V(n,e,t,i){if(n){const r=Nn(n,e,t,i);return n[0](r)}}function Nn(n,e,t,i){return n[1]&&i?he(t.ctx.slice(),n[1](i(e))):t.ctx}function W(n,e,t,i){if(n[2]&&i){const r=n[2](i(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)s[l]=e.dirty[l]|r[l];return s}return e.dirty|r}return e.dirty}function q(n,e,t,i,r,s){if(r){const o=Nn(e,t,i,s);n.p(o,r)}}function G(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function xr(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function xn(n,e){const t={};e=new Set(e);for(const i in n)!e.has(i)&&i[0]!=="$"&&(t[i]=n[i]);return t}function vf(n,e,t){return n.set(t),e}let _t=!1;function Lr(){_t=!0}function Dr(){_t=!1}function Mr(n,e,t,i){for(;n<e;){const r=n+(e-n>>1);t(r)<=i?n=r+1:e=r}return n}function Ur(n){if(n.hydrate_init)return;n.hydrate_init=!0;let e=n.childNodes;if(n.nodeName==="HEAD"){const a=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&a.push(u)}e=a}const t=new Int32Array(e.length+1),i=new Int32Array(e.length);t[0]=-1;let r=0;for(let a=0;a<e.length;a++){const c=e[a].claim_order,u=(r>0&&e[t[r]].claim_order<=c?r+1:Mr(1,r,g=>e[t[g]].claim_order,c))-1;i[a]=t[u]+1;const f=u+1;t[f]=a,r=Math.max(f,r)}const s=[],o=[];let l=e.length-1;for(let a=t[r]+1;a!=0;a=i[a-1]){for(s.push(e[a-1]);l>=a;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);s.reverse(),o.sort((a,c)=>a.claim_order-c.claim_order);for(let a=0,c=0;a<o.length;a++){for(;c<s.length&&o[a].claim_order>=s[c].claim_order;)c++;const u=c<s.length?s[c]:null;n.insertBefore(o[a],u)}}function bt(n,e){if(_t){for(Ur(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;e!==n.actual_end_child?(e.claim_order!==void 0||e.parentNode!==n)&&n.insertBefore(e,n.actual_end_child):n.actual_end_child=e.nextSibling}else(e.parentNode!==n||e.nextSibling!==null)&&n.appendChild(e)}function zr(n,e,t){n.insertBefore(e,t||null)}function b(n,e,t){_t&&!t?bt(n,e):(e.parentNode!==n||e.nextSibling!=t)&&n.insertBefore(e,t||null)}function h(n){n.parentNode.removeChild(n)}function Ne(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function A(n){return document.createElement(n)}function Br(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function ve(n){return document.createTextNode(n)}function qe(){return ve(" ")}function k(){return ve("")}function If(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function Ef(n){return function(e){return e.preventDefault(),n.call(this,e)}}function R(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function L(n){return Array.from(n.childNodes)}function Ln(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function Dn(n,e,t,i,r=!1){Ln(n);const s=(()=>{for(let o=n.claim_info.last_index;o<n.length;o++){const l=n[o];if(e(l)){const a=t(l);return a===void 0?n.splice(o,1):n[o]=a,r||(n.claim_info.last_index=o),l}}for(let o=n.claim_info.last_index-1;o>=0;o--){const l=n[o];if(e(l)){const a=t(l);return a===void 0?n.splice(o,1):n[o]=a,r?a===void 0&&n.claim_info.last_index--:n.claim_info.last_index=o,l}}return i()})();return s.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,s}function Mn(n,e,t,i){return Dn(n,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];t[l.name]||s.push(l.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function N(n,e,t){return Mn(n,e,t,A)}function Tf(n,e,t){return Mn(n,e,t,Br)}function Ge(n,e){return Dn(n,t=>t.nodeType===3,t=>{const i=""+e;if(t.data.startsWith(i)){if(t.data.length!==i.length)return t.splitText(i.length)}else t.data=i},()=>ve(e),!0)}function Ke(n){return Ge(n," ")}function Un(n,e,t){for(let i=t;i<n.length;i+=1){const r=n[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return n.length}function Fr(n){const e=Un(n,"HTML_TAG_START",0),t=Un(n,"HTML_TAG_END",e);if(e===t)return new qt;Ln(n);const i=n.splice(e,t+1);h(i[0]),h(i[i.length-1]);const r=i.slice(1,i.length-1);for(const s of r)s.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1;return new qt(r)}function wt(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function Rf(n,e){n.value=e==null?"":e}function jr(n,e,t,i){n.style.setProperty(e,t,i?"important":"")}function Sf(n,e){for(let t=0;t<n.options.length;t+=1){const i=n.options[t];if(i.__value===e){i.selected=!0;return}}n.selectedIndex=-1}function Af(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}function Cf(n,e,t){n.classList[t?"add":"remove"](e)}function Hr(n,e,t=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t,!1,e),i}function $f(n,e=document.body){return Array.from(e.querySelectorAll(n))}class Vr{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,i=null){this.e||(this.e=A(t.nodeName),this.t=t,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)zr(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(h)}}class qt extends Vr{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}}let Je;function Xe(n){Je=n}function xe(){if(!Je)throw new Error("Function called outside component initialization");return Je}function zn(n){xe().$$.on_mount.push(n)}function Of(n){xe().$$.after_update.push(n)}function Wr(n){xe().$$.on_destroy.push(n)}function Bn(){const n=xe();return(e,t)=>{const i=n.$$.callbacks[e];if(i){const r=Hr(e,t);i.slice().forEach(s=>{s.call(n,r)})}}}function qr(n,e){xe().$$.context.set(n,e)}function Gr(n){return xe().$$.context.get(n)}const Ze=[],Ye=[],kt=[],Gt=[],Fn=Promise.resolve();let Kt=!1;function jn(){Kt||(Kt=!0,Fn.then(Hn))}function Pf(){return jn(),Fn}function Jt(n){kt.push(n)}function Nf(n){Gt.push(n)}const Xt=new Set;let yt=0;function Hn(){const n=Je;do{for(;yt<Ze.length;){const e=Ze[yt];yt++,Xe(e),Kr(e.$$)}for(Xe(null),Ze.length=0,yt=0;Ye.length;)Ye.pop()();for(let e=0;e<kt.length;e+=1){const t=kt[e];Xt.has(t)||(Xt.add(t),t())}kt.length=0}while(Ze.length);for(;Gt.length;)Gt.pop()();Kt=!1,Xt.clear(),Xe(n)}function Kr(n){if(n.fragment!==null){n.update(),We(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Jt)}}const vt=new Set;let Ie;function z(){Ie={r:0,c:[],p:Ie}}function B(){Ie.r||We(Ie.c),Ie=Ie.p}function d(n,e){n&&n.i&&(vt.delete(n),n.i(e))}function m(n,e,t,i){if(n&&n.o){if(vt.has(n))return;vt.add(n),Ie.c.push(()=>{vt.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}const xf=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Le(n,e){const t={},i={},r={$$scope:1};let s=n.length;for(;s--;){const o=n[s],l=e[s];if(l){for(const a in o)a in l||(i[a]=1);for(const a in l)r[a]||(t[a]=l[a],r[a]=1);n[s]=l}else for(const a in o)r[a]=1}for(const o in i)o in t||(t[o]=void 0);return t}function De(n){return typeof n=="object"&&n!==null?n:{}}function Lf(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function O(n){n&&n.c()}function X(n,e){n&&n.l(e)}function C(n,e,t,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:l}=n.$$;r&&r.m(e,t),i||Jt(()=>{const a=s.map($n).filter(Or);o?o.push(...a):We(a),n.$$.on_mount=[]}),l.forEach(Jt)}function $(n,e){const t=n.$$;t.fragment!==null&&(We(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Jr(n,e){n.$$.dirty[0]===-1&&(Ze.push(n),jn(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function F(n,e,t,i,r,s,o,l=[-1]){const a=Je;Xe(n);const c=n.$$={fragment:null,ctx:null,props:s,update:H,not_equal:r,bound:On(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:On(),dirty:l,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(f,g,...p)=>{const y=p.length?p[0]:g;return c.ctx&&r(c.ctx[f],c.ctx[f]=y)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](y),u&&Jr(n,f)),g}):[],c.update(),u=!0,We(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){Lr();const f=L(e.target);c.fragment&&c.fragment.l(f),f.forEach(h)}else c.fragment&&c.fragment.c();e.intro&&d(n.$$.fragment),C(n,e.target,e.anchor,e.customElement),Dr(),Hn()}Xe(a)}class j{$destroy(){$(this,1),this.$destroy=H}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Pr(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Me=[];function Df(n,e=H){let t;const i=new Set;function r(l){if(U(n,l)&&(n=l,t)){const a=!Me.length;for(const c of i)c[1](),Me.push(c,n);if(a){for(let c=0;c<Me.length;c+=2)Me[c][0](Me[c+1]);Me.length=0}}}function s(l){r(l(n))}function o(l,a=H){const c=[l,a];return i.add(c),i.size===1&&(t=e(r)||H),l(n),()=>{i.delete(c),i.size===0&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)==55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)==56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Zr=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],l=n[t++],a=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,l=o?n[r+1]:0,a=r+2<n.length,c=a?n[r+2]:0,u=s>>2,f=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,p=c&63;a||(p=64,o||(g=64)),i.push(t[u],t[f],t[g],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||l==null||c==null||f==null)throw Error();const g=s<<2|l>>4;if(i.push(g),c!==64){const p=l<<4&240|c>>2;if(i.push(p),f!==64){const y=c<<6&192|f;i.push(y)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Qr=function(n){try{return Yr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ts(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())}function ns(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function is(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rs(){const n=ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="FirebaseError";class Ee extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=ss,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qe.prototype.create)}}class Qe{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?os(s,i):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Ee(r,l,i)}}function os(n,e){return n.replace(as,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const as=/\{\$([^}]+)}/g;function ls(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function It(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(Vn(s)&&Vn(o)){if(!It(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function Vn(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function tt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function nt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function cs(n,e){const t=new us(n,e);return t.subscribe.bind(t)}class us{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");fs(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Zt),r.error===void 0&&(r.error=Zt),r.complete===void 0&&(r.complete=Zt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fs(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n){return n&&n._delegate?n._delegate:n}class Ue{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new es;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ps(e))try{this.getOrInitializeService({instanceIdentifier:Te})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Te){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Te){return this.instances.has(e)}getOptions(e=Te){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ds(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Te){return this.component?this.component.multipleInstances?e:Te:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ds(n){return n===Te?void 0:n}function ps(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hs(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const ms={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},_s=D.INFO,bs={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},ws=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=bs[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wn{constructor(e){this.name=e,this._logLevel=_s,this._logHandler=ws,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ms[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ys(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ys(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yt="@firebase/app",qn="0.7.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Wn("@firebase/app"),vs="@firebase/app-compat",Is="@firebase/analytics-compat",Es="@firebase/analytics",Ts="@firebase/app-check-compat",Rs="@firebase/app-check",Ss="@firebase/auth",As="@firebase/auth-compat",Cs="@firebase/database",$s="@firebase/database-compat",Os="@firebase/functions",Ps="@firebase/functions-compat",Ns="@firebase/installations",xs="@firebase/installations-compat",Ls="@firebase/messaging",Ds="@firebase/messaging-compat",Ms="@firebase/performance",Us="@firebase/performance-compat",zs="@firebase/remote-config",Bs="@firebase/remote-config-compat",Fs="@firebase/storage",js="@firebase/storage-compat",Hs="@firebase/firestore",Vs="@firebase/firestore-compat",Ws="firebase",qs="9.6.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="[DEFAULT]",Gs={[Yt]:"fire-core",[vs]:"fire-core-compat",[Es]:"fire-analytics",[Is]:"fire-analytics-compat",[Rs]:"fire-app-check",[Ts]:"fire-app-check-compat",[Ss]:"fire-auth",[As]:"fire-auth-compat",[Cs]:"fire-rtdb",[$s]:"fire-rtdb-compat",[Os]:"fire-fn",[Ps]:"fire-fn-compat",[Ns]:"fire-iid",[xs]:"fire-iid-compat",[Ls]:"fire-fcm",[Ds]:"fire-fcm-compat",[Ms]:"fire-perf",[Us]:"fire-perf-compat",[zs]:"fire-rc",[Bs]:"fire-rc-compat",[Fs]:"fire-gcs",[js]:"fire-gcs-compat",[Hs]:"fire-fst",[Vs]:"fire-fst-compat","fire-js":"fire-js",[Ws]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new Map,en=new Map;function Ks(n,e){try{n.container.addComponent(e)}catch(t){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function it(n){const e=n.name;if(en.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;en.set(e,n);for(const t of Et.values())Ks(t,n);return!0}function tn(n,e){return n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Tt=new Qe("app","Firebase",Js);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=qs;function Mf(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Gn,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw Tt.create("bad-app-name",{appName:String(i)});const r=Et.get(i);if(r){if(It(n,r.options)&&It(t,r.config))return r;throw Tt.create("duplicate-app",{appName:i})}const s=new gs(i);for(const l of en.values())s.addComponent(l);const o=new Xs(n,t,s);return Et.set(i,o),o}function Kn(n=Gn){const e=Et.get(n);if(!e)throw Tt.create("no-app",{appName:n});return e}function Re(n,e,t){var i;let r=(i=Gs[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${r}" with version "${e}":`];s&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(l.join(" "));return}it(new Ue(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n){it(new Ue("platform-logger",e=>new ks(e),"PRIVATE")),Re(Yt,qn,n),Re(Yt,qn,"esm2017"),Re("fire-js","")}Zs("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function nn(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Jn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ys=Jn,Xn=new Qe("auth","Firebase",Jn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new Wn("@firebase/auth");function Rt(n,...e){Zn.logLevel<=D.ERROR&&Zn.error(`Auth (${rt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(n,...e){throw rn(n,...e)}function ce(n,...e){return rn(n,...e)}function Qs(n,e,t){const i=Object.assign(Object.assign({},Ys()),{[e]:t});return new Qe("auth","Firebase",i).create(e,{appName:n.name})}function rn(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Xn.create(n,...e)}function I(n,e,...t){if(!n)throw rn(e,...t)}function de(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Rt(e),new Error(e)}function pe(n,e){n||de(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new Map;function ge(n){pe(n instanceof Function,"Expected a class definition");let e=Yn.get(n);return e?(pe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yn.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(n,e){const t=tn(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(It(s,e!=null?e:{}))return r;ae(r,"already-initialized")}return t.initialize({options:e})}function to(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ge);(e==null?void 0:e.errorMap)&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function no(){return Qn()==="http:"||Qn()==="https:"}function Qn(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(no()||ns()||"connection"in navigator)?navigator.onLine:!0}function ro(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.shortDelay=e,this.longDelay=t,pe(t>e,"Short delay should be less than long delay!"),this.isMobile=ts()||is()}get(){return io()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(n,e){pe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;de("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;de("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;de("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new st(3e4,6e4);function St(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ot(n,e,t,i,r={}){return ti(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const l=et(Object.assign({key:n.config.apiKey},o)).slice(1),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/json",n.languageCode&&(a["X-Firebase-Locale"]=n.languageCode),ei.fetch()(ni(n,n.config.apiHost,t,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function ti(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},so),e);try{const r=new ao(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw an(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw an(n,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw an(n,"email-already-in-use",o);const u=i[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Qs(n,u,c);ae(n,u)}}catch(r){if(r instanceof Ee)throw r;ae(n,"network-request-failed")}}async function At(n,e,t,i,r={}){const s=await ot(n,e,t,i,r);return"mfaPendingCredential"in s&&ae(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ni(n,e,t,i){const r=`${e}${t}?${i}`;return n.config.emulator?on(n.config,r):`${n.config.apiScheme}://${r}`}class ao{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ce(this.auth,"timeout")),oo.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function an(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=ce(n,e,i);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(n,e){return ot(n,"POST","/v1/accounts:delete",e)}async function co(n,e){return ot(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uo(n,e=!1){const t=le(n),i=await t.getIdToken(e),r=cn(i);I(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:at(ln(r.auth_time)),issuedAtTime:at(ln(r.iat)),expirationTime:at(ln(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ln(n){return Number(n)*1e3}function cn(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Rt("JWT malformed, contained fewer than 3 sections"),null;try{const r=Qr(t);return r?JSON.parse(r):(Rt("Failed to decode base64 JWT payload"),null)}catch(r){return Rt("Caught error parsing JWT payload as JSON",r),null}}function fo(n){const e=cn(n);return I(e,"internal-error"),I(typeof e.exp!="undefined","internal-error"),I(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ee&&ho(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ho({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=at(this.lastLoginAt),this.creationTime=at(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(n){var e;const t=n.auth,i=await n.getIdToken(),r=await lt(n,co(t,{idToken:i}));I(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?_o(s.providerUserInfo):[],l=mo(n.providerData,o),a=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(l==null?void 0:l.length),u=a?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ii(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function go(n){const e=le(n);await Ct(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mo(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function _o(n){return n.map(e=>{var{providerId:t}=e,i=nn(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(n,e){const t=await ti(n,{},async()=>{const i=et({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=ni(n,r,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",ei.fetch()(o,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken!="undefined","internal-error"),I(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):fo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await bo(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new ct;return i&&(I(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(I(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(I(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ct,this.toJSON())}_performRefresh(){return de("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,e){I(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Se{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=nn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new po(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new ii(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await lt(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uo(this,e)}reload(){return go(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ct(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lt(this,lo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,l,a,c,u;const f=(i=t.displayName)!==null&&i!==void 0?i:void 0,g=(r=t.email)!==null&&r!==void 0?r:void 0,p=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(l=t.tenantId)!==null&&l!==void 0?l:void 0,T=(a=t._redirectEventId)!==null&&a!==void 0?a:void 0,E=(c=t.createdAt)!==null&&c!==void 0?c:void 0,S=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:x,isAnonymous:Z,providerData:Y,stsTokenManager:oe}=t;I(K&&oe,e,"internal-error");const re=ct.fromJSON(this.name,oe);I(typeof K=="string",e,"internal-error"),me(f,e.name),me(g,e.name),I(typeof x=="boolean",e,"internal-error"),I(typeof Z=="boolean",e,"internal-error"),me(p,e.name),me(y,e.name),me(P,e.name),me(T,e.name),me(E,e.name),me(S,e.name);const v=new Se({uid:K,auth:e,email:g,emailVerified:x,displayName:f,isAnonymous:Z,photoURL:y,phoneNumber:p,tenantId:P,stsTokenManager:re,createdAt:E,lastLoginAt:S});return Y&&Array.isArray(Y)&&(v.providerData=Y.map(ie=>Object.assign({},ie))),T&&(v._redirectEventId=T),v}static async _fromIdTokenResponse(e,t,i=!1){const r=new ct;r.updateFromServerResponse(t);const s=new Se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ct(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ri.type="NONE";const si=ri;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n,e,t){return`firebase:${n}:${e}:${t}`}class ze{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=$t(this.userKey,r.apiKey,s),this.fullPersistenceKey=$t("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ze(ge(si),e,i);const r=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||ge(si);const o=$t(i,e.config.apiKey,e.name);let l=null;for(const c of t)try{const u=await c._get(o);if(u){const f=Se._fromJSON(e,u);c!==s&&(l=f),s=c;break}}catch{}const a=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new ze(s,e,i):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ze(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ci(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ai(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fi(e))return"Blackberry";if(hi(e))return"Webos";if(un(e))return"Safari";if((e.includes("chrome/")||li(e))&&!e.includes("edge/"))return"Chrome";if(ui(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ai(n=ee()){return/firefox\//i.test(n)}function un(n=ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function li(n=ee()){return/crios\//i.test(n)}function ci(n=ee()){return/iemobile/i.test(n)}function ui(n=ee()){return/android/i.test(n)}function fi(n=ee()){return/blackberry/i.test(n)}function hi(n=ee()){return/webos/i.test(n)}function Ot(n=ee()){return/iphone|ipad|ipod/i.test(n)}function wo(n=ee()){var e;return Ot(n)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function ko(){return rs()&&document.documentMode===10}function di(n=ee()){return Ot(n)||ui(n)||hi(n)||fi(n)||/windows phone/i.test(n)||ci(n)}function yo(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n,e=[]){let t;switch(n){case"Browser":t=oi(ee());break;case"Worker":t=`${oi(ee())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${rt}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gi(this),this.idTokenSubscription=new gi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ge(t)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await ze.create(this,e),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,s=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ct(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ro()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?le(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ge(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qe("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ge(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await ze.create(this,[ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,i,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function fn(n){return le(n)}class gi{constructor(e){this.auth=e,this.observer=null,this.addObserver=cs(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return de("not implemented")}_getIdTokenResponse(e){return de("not implemented")}_linkToIdToken(e,t){return de("not implemented")}_getReauthenticationResolver(e){return de("not implemented")}}async function Io(n,e){return ot(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(n,e){return At(n,"POST","/v1/accounts:signInWithPassword",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}async function Ro(n,e){return At(n,"POST","/v1/accounts:signInWithEmailLink",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends hn{constructor(e,t,i,r=null){super("password",i);this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ut(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ut(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Eo(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return To(e,{email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Io(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ro(e,{idToken:t,email:this._email,oobCode:this._password});default:ae(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(n,e){return At(n,"POST","/v1/accounts:signInWithIdp",St(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="http://localhost";class Ae extends hn{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new Ae(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ae("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=nn(t,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Ae(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Be(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Be(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Be(e,t)}buildRequest(){const e={requestUri:So,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=et(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Co(n){const e=tt(nt(n)).link,t=e?tt(nt(e)).deep_link_id:null,i=tt(nt(n)).deep_link_id;return(i?tt(nt(i)).link:null)||i||t||e||n}class dn{constructor(e){var t,i,r,s,o,l;const a=tt(nt(e)),c=(t=a.apiKey)!==null&&t!==void 0?t:null,u=(i=a.oobCode)!==null&&i!==void 0?i:null,f=Ao((r=a.mode)!==null&&r!==void 0?r:null);I(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Co(e);try{return new dn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(){this.providerId=Fe.PROVIDER_ID}static credential(e,t){return ut._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=dn.parseLink(t);return I(i,"argument-error"),ut._fromEmailAndCode(e,i.code,i.tenantId)}}Fe.PROVIDER_ID="password";Fe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends mi{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends ft{constructor(){super("facebook.com")}static credential(e){return Ae._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _e.credential(e.oauthAccessToken)}catch{return null}}}_e.FACEBOOK_SIGN_IN_METHOD="facebook.com";_e.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends ft{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return Ae._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return be.credential(t,i)}catch{return null}}}be.GOOGLE_SIGN_IN_METHOD="google.com";be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends ft{constructor(){super("github.com")}static credential(e){return Ae._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return we.credential(e.oauthAccessToken)}catch{return null}}}we.GITHUB_SIGN_IN_METHOD="github.com";we.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends ft{constructor(){super("twitter.com")}static credential(e,t){return Ae._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ke.credential(t,i)}catch{return null}}}ke.TWITTER_SIGN_IN_METHOD="twitter.com";ke.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await Se._fromIdTokenResponse(e,i,r),o=_i(i);return new je({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=_i(i);return new je({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function _i(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Ee{constructor(e,t,i,r){var s;super(t.code,t.message);this.operationType=i,this.user=r,Object.setPrototypeOf(this,Pt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Pt(e,t,i,r)}}function bi(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pt._fromErrorAndOperation(n,s,e,i):s})}async function $o(n,e,t=!1){const i=await lt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return je._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n,e,t=!1){const{auth:i}=n,r="reauthenticate";try{const s=await lt(n,bi(i,r,e,n),t);I(s.idToken,i,"internal-error");const o=cn(s.idToken);I(o,i,"internal-error");const{sub:l}=o;return I(n.uid===l,i,"user-mismatch"),je._forOperation(n,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ae(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(n,e,t=!1){const i="signIn",r=await bi(n,i,e),s=await je._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function Po(n,e){return wi(fn(n),e)}function Uf(n,e,t){return Po(le(n),Fe.credential(e,t))}function zf(n){return le(n).signOut()}const Nt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Nt,"1"),this.storage.removeItem(Nt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(){const n=ee();return un(n)||Ot(n)}const xo=1e3,Lo=10;class yi extends ki{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=No()&&yo(),this.fallbackToPolling=di(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);ko()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Lo):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},xo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yi.type="LOCAL";const Do=yi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends ki{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vi.type="SESSION";const Ii=vi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new xt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o==null?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(o).map(async c=>c(t.origin,s)),a=await Mo(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:a})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=pn("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return window}function zo(n){ue().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){return typeof ue().WorkerGlobalScope!="undefined"&&typeof ue().importScripts=="function"}async function Bo(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fo(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jo(){return Ei()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="firebaseLocalStorageDb",Ho=1,Lt="firebaseLocalStorage",Ri="fbase_key";class ht{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dt(n,e){return n.transaction([Lt],e?"readwrite":"readonly").objectStore(Lt)}function Vo(){const n=indexedDB.deleteDatabase(Ti);return new ht(n).toPromise()}function gn(){const n=indexedDB.open(Ti,Ho);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Lt,{keyPath:Ri})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Lt)?e(i):(i.close(),await Vo(),e(await gn()))})})}async function Si(n,e,t){const i=Dt(n,!0).put({[Ri]:e,value:t});return new ht(i).toPromise()}async function Wo(n,e){const t=Dt(n,!1).get(e),i=await new ht(t).toPromise();return i===void 0?null:i.value}function Ai(n,e){const t=Dt(n,!0).delete(e);return new ht(t).toPromise()}const qo=800,Go=3;class Ci{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Go)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ei()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xt._getInstance(jo()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Bo(),!this.activeServiceWorker)return;this.sender=new Uo(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fo()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gn();return await Si(e,Nt,"1"),await Ai(e,Nt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Si(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Wo(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ai(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Dt(r,!1).getAll();return new ht(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ci.type="LOCAL";const Ko=Ci;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Xo(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=ce("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",Jo().appendChild(i)})}function Zo(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new st(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n,e){return e?ge(e):(I(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends hn{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Be(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Be(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Be(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qo(n){return wi(n.auth,new mn(n),n.bypassAuthState)}function ea(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),Oo(t,new mn(n),n.bypassAuthState)}async function ta(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),$o(t,new mn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qo;case"linkViaPopup":case"linkViaRedirect":return ta;case"reauthViaPopup":case"reauthViaRedirect":return ea;default:ae(this.auth,"internal-error")}}resolve(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new st(2e3,1e4);class He extends $i{constructor(e,t,i,r,s){super(e,t,r,s);this.provider=i,this.authWindow=null,this.pollId=null,He.currentPopupAction&&He.currentPopupAction.cancel(),He.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){pe(this.filter.length===1,"Popup operations only handle one event");const e=pn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,He.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,na.get())};e()}}He.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="pendingRedirect",_n=new Map;class ra extends $i{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i);this.eventId=null}async execute(){let e=_n.get(this.auth._key());if(!e){try{const i=await sa(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}_n.set(this.auth._key(),e)}return this.bypassAuthState||_n.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sa(n,e){const t=aa(e),i=oa(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function oa(n){return ge(n._redirectPersistence)}function aa(n){return $t(ia,n.config.apiKey,n.name)}async function la(n,e,t=!1){const i=fn(n),r=Yo(i,e),o=await new ra(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=10*60*1e3;class ua{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fa(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Pi(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ce(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ca&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oi(e))}saveEventToCache(e){this.cachedEventUids.add(Oi(e)),this.lastProcessedEventTime=Date.now()}}function Oi(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pi({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fa(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pi(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(n,e={}){return ot(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pa=/^https?/;async function ga(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ha(n);for(const t of e)try{if(ma(t))return}catch{}ae(n,"unauthorized-domain")}function ma(n){const e=sn(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!pa.test(t))return!1;if(da.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new st(3e4,6e4);function Ni(){const n=ue().___jsl;if(n==null?void 0:n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ba(n){return new Promise((e,t)=>{var i,r,s;function o(){Ni(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ni(),t(ce(n,"network-request-failed"))},timeout:_a.get()})}if((r=(i=ue().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0?void 0:r.Iframe)e(gapi.iframes.getContext());else if((s=ue().gapi)===null||s===void 0?void 0:s.load)o();else{const l=Zo("iframefcb");return ue()[l]=()=>{gapi.load?o():t(ce(n,"network-request-failed"))},Xo(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>t(a))}}).catch(e=>{throw Mt=null,e})}let Mt=null;function wa(n){return Mt=Mt||ba(n),Mt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new st(5e3,15e3),ya="__/auth/iframe",va="emulator/auth/iframe",Ia={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ea=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ta(n){const e=n.config;I(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?on(e,va):`https://${n.config.authDomain}/${ya}`,i={apiKey:e.apiKey,appName:n.name,v:rt},r=Ea.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${et(i).slice(1)}`}async function Ra(n){const e=await wa(n),t=ue().gapi;return I(t,n,"internal-error"),e.open({where:document.body,url:Ta(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ia,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=ce(n,"network-request-failed"),l=ue().setTimeout(()=>{s(o)},ka.get());function a(){ue().clearTimeout(l),r(i)}i.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Aa=500,Ca=600,$a="_blank",Oa="http://localhost";class xi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pa(n,e,t,i=Aa,r=Ca){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Sa),{width:i.toString(),height:r.toString(),top:s,left:o}),c=ee().toLowerCase();t&&(l=li(c)?$a:t),ai(c)&&(e=e||Oa,a.scrollbars="yes");const u=Object.entries(a).reduce((g,[p,y])=>`${g}${p}=${y},`,"");if(wo(c)&&l!=="_self")return Na(e||"",l),new xi(null);const f=window.open(e||"",l,u);I(f,n,"popup-blocked");try{f.focus()}catch{}return new xi(f)}function Na(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="__/auth/handler",La="emulator/auth/handler";function Li(n,e,t,i,r,s){I(n.config.authDomain,n,"auth-domain-config-required"),I(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:rt,eventId:r};if(e instanceof mi){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ls(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,c]of Object.entries(s||{}))o[a]=c}if(e instanceof ft){const a=e.getScopes().filter(c=>c!=="");a.length>0&&(o.scopes=a.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${Da(n)}?${et(l).slice(1)}`}function Da({config:n}){return n.emulator?on(n,La):`https://${n.authDomain}/${xa}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="webStorageSupport";class Ma{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ii,this._completeRedirectFn=la}async _openPopup(e,t,i,r){var s;pe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Li(e,t,i,sn(),r);return Pa(e,o,pn())}async _openRedirect(e,t,i,r){return await this._originValidation(e),zo(Li(e,t,i,sn(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(pe(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Ra(e),i=new ua(e);return t.register("authEvent",r=>(I(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bn,{type:bn},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[bn];o!==void 0&&t(!!o),ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ga(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return di()||un()||Ot()}}const Ua=Ma;var Di="@firebase/auth",Mi="0.19.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var r;e(((r=i)===null||r===void 0?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Fa(n){it(new Ue("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(o=>{I(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),I(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const l={apiKey:r,authDomain:s,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pi(n)},a=new vo(o,l);return to(a,t),a})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),it(new Ue("auth-internal",e=>{const t=fn(e.getProvider("auth").getImmediate());return(i=>new za(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(Di,Mi,Ba(n)),Re(Di,Mi,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(n=Kn()){const e=tn(n,"auth");return e.isInitialized()?e.getImmediate():eo(n,{popupRedirectResolver:Ua,persistence:[Ko,Do,Ii]})}Fa("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="firebasestorage.googleapis.com",zi="storageBucket",ja=2*60*1e3,Ha=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J extends Ee{constructor(e,t){super(wn(e),`Firebase Storage: ${t} (${wn(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,J.prototype)}_codeEquals(e){return wn(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function wn(n){return"storage/"+n}function kn(){const n="An unknown error occurred, please check the error payload for server response.";return new J("unknown",n)}function Va(n){return new J("object-not-found","Object '"+n+"' does not exist.")}function Wa(n){return new J("quota-exceeded","Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qa(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new J("unauthenticated",n)}function Ga(){return new J("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Ka(n){return new J("unauthorized","User does not have permission to access '"+n+"'.")}function Ja(){return new J("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Xa(){return new J("canceled","User canceled the upload/download.")}function Za(n){return new J("invalid-url","Invalid URL '"+n+"'.")}function Ya(n){return new J("invalid-default-bucket","Invalid default bucket '"+n+"'.")}function Qa(){return new J("no-default-bucket","No default bucket found. Did you set the '"+zi+"' property when initializing the app?")}function el(){return new J("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function tl(){return new J("no-download-url","The given file does not have any download URLs.")}function yn(n){return new J("invalid-argument",n)}function Bi(){return new J("app-deleted","The Firebase app was deleted.")}function nl(n){return new J("invalid-root-operation","The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function dt(n,e){return new J("invalid-format","String does not match format '"+n+"': "+e)}function pt(n){throw new J("internal-error","Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=se.makeFromUrl(e,t)}catch{return new se(e,"")}if(i.path==="")return i;throw Ya(e)}static makeFromUrl(e,t){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const u="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",p=new RegExp(`^https?://${f}/${u}/b/${r}/o${g}`,"i"),y={bucket:1,path:3},P=t===Ui?"(?:storage.googleapis.com|storage.cloud.google.com)":t,T="([^?#]*)",E=new RegExp(`^https?://${P}/${r}/${T}`,"i"),K=[{regex:l,indices:a,postModify:s},{regex:p,indices:y,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<K.length;x++){const Z=K[x],Y=Z.regex.exec(e);if(Y){const oe=Y[Z.indices.bucket];let re=Y[Z.indices.path];re||(re=""),i=new se(oe,re),Z.postModify(i);break}}if(i==null)throw Za(e);return i}}class il{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n,e,t){let i=1,r=null,s=null,o=!1,l=0;function a(){return l===2}let c=!1;function u(...T){c||(c=!0,e.apply(null,T))}function f(T){r=setTimeout(()=>{r=null,n(p,a())},T)}function g(){s&&clearTimeout(s)}function p(T,...E){if(c){g();return}if(T){g(),u.call(null,T,...E);return}if(a()||o){g(),u.call(null,T,...E);return}i<64&&(i*=2);let K;l===1?(l=2,K=0):K=(i+Math.random())*1e3,f(K)}let y=!1;function P(T){y||(y=!0,g(),!c&&(r!==null?(T||(l=2),clearTimeout(r),f(0)):T||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},t),P}function sl(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(n){return n!==void 0}function al(n){return typeof n=="object"&&!Array.isArray(n)}function vn(n){return typeof n=="string"||n instanceof String}function Fi(n){return In()&&n instanceof Blob}function In(){return typeof Blob!="undefined"}function ji(n,e,t,i){if(i<e)throw yn(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw yn(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Hi(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const r=e(i)+"="+e(n[i]);t=t+r+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ce||(Ce={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t,i,r,s,o,l,a,c,u,f){this.url_=e,this.method_=t,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,p)=>{this.resolve_=g,this.reject_=p,this.start_()})}start_(){const e=(i,r)=>{if(r){i(!1,new Ut(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Ce.NO_ERROR,a=s.getStatus();if(!l||this.isRetryStatusCode_(a)){const u=s.getErrorCode()===Ce.ABORT;i(!1,new Ut(!1,null,u));return}const c=this.successCodes_.indexOf(a)!==-1;i(!0,new Ut(c,s))})},t=(i,r)=>{const s=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());ol(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=kn();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(r.canceled){const a=this.appDelete_?Bi():Xa();o(a)}else{const a=Ja();o(a)}};this.canceled_?t(!1,new Ut(!1,null,!0)):this.backoffId_=rl(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&sl(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return t||r||s}}class Ut{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function cl(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function ul(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function fl(n,e){e&&(n["X-Firebase-GMPID"]=e)}function hl(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function dl(n,e,t,i,r,s){const o=Hi(n.urlParams),l=n.url+o,a=Object.assign({},n.headers);return fl(a,e),cl(a,t),ul(a,s),hl(a,i),new ll(l,n.method,a,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function gl(...n){const e=pl();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(In())return new Blob(n);throw new J("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function ml(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n){return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Tn{constructor(e,t){this.data=e,this.contentType=t||null}}function bl(n,e){switch(n){case fe.RAW:return new Tn(Vi(e));case fe.BASE64:case fe.BASE64URL:return new Tn(Wi(n,e));case fe.DATA_URL:return new Tn(kl(e),yl(e))}throw kn()}function Vi(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)==55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)==56320))e.push(239,191,189);else{const s=i,o=n.charCodeAt(++t);i=65536|(s&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)==56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function wl(n){let e;try{e=decodeURIComponent(n)}catch{throw dt(fe.DATA_URL,"Malformed data URL.")}return Vi(e)}function Wi(n,e){switch(n){case fe.BASE64:{const r=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(r||s)throw dt(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case fe.BASE64URL:{const r=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(r||s)throw dt(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=_l(e)}catch{throw dt(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}class qi{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw dt(fe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=vl(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-";base64".length):i),this.rest=e.substring(e.indexOf(",")+1)}}function kl(n){const e=new qi(n);return e.base64?Wi(fe.BASE64,e.rest):wl(e.rest)}function yl(n){return new qi(n).contentType}function vl(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t){let i=0,r="";Fi(e)?(this.data_=e,i=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Fi(this.data_)){const i=this.data_,r=ml(i,e,t);return r===null?null:new ye(r)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new ye(i,!0)}}static getBlob(...e){if(In()){const t=e.map(i=>i instanceof ye?i.data_:i);return new ye(gl.apply(null,t))}else{const t=e.map(o=>vn(o)?bl(fe.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const r=new Uint8Array(i);let s=0;return t.forEach(o=>{for(let l=0;l<o.length;l++)r[s++]=o[l]}),new ye(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){let e;try{e=JSON.parse(n)}catch{return null}return al(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function El(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Ki(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n,e){return e}class ne{constructor(e,t,i,r){this.server=e,this.local=t||e,this.writable=!!i,this.xform=r||Tl}}let zt=null;function Rl(n){return!vn(n)||n.length<2?n:Ki(n)}function Ji(){if(zt)return zt;const n=[];n.push(new ne("bucket")),n.push(new ne("generation")),n.push(new ne("metageneration")),n.push(new ne("name","fullPath",!0));function e(s,o){return Rl(o)}const t=new ne("name");t.xform=e,n.push(t);function i(s,o){return o!==void 0?Number(o):o}const r=new ne("size");return r.xform=i,n.push(r),n.push(new ne("timeCreated")),n.push(new ne("updated")),n.push(new ne("md5Hash",null,!0)),n.push(new ne("cacheControl",null,!0)),n.push(new ne("contentDisposition",null,!0)),n.push(new ne("contentEncoding",null,!0)),n.push(new ne("contentLanguage",null,!0)),n.push(new ne("contentType",null,!0)),n.push(new ne("metadata","customMetadata",!0)),zt=n,zt}function Sl(n,e){function t(){const i=n.bucket,r=n.fullPath,s=new se(i,r);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function Al(n,e,t){const i={};i.type="file";const r=t.length;for(let s=0;s<r;s++){const o=t[s];i[o.local]=o.xform(i,e[o.server])}return Sl(i,n),i}function Xi(n,e,t){const i=Gi(e);return i===null?null:Al(n,i,t)}function Cl(n,e,t,i){const r=Gi(e);if(r===null||!vn(r.downloadTokens))return null;const s=r.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=n.bucket,f=n.fullPath,g="/b/"+o(u)+"/o/"+o(f),p=En(g,t,i),y=Hi({alt:"media",token:c});return p+y})[0]}function $l(n,e){const t={},i=e.length;for(let r=0;r<i;r++){const s=e[r];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class Zi{constructor(e,t,i,r){this.url=e,this.method=t,this.handler=i,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n){if(!n)throw kn()}function Ol(n,e){function t(i,r){const s=Xi(n,r,e);return Yi(s!==null),s}return t}function Pl(n,e){function t(i,r){const s=Xi(n,r,e);return Yi(s!==null),Cl(s,r,n.host,n._protocol)}return t}function Qi(n){function e(t,i){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=Ga():r=qa():t.getStatus()===402?r=Wa(n.bucket):t.getStatus()===403?r=Ka(n.path):r=i,r.serverResponse=i.serverResponse,r}return e}function Nl(n){const e=Qi(n);function t(i,r){let s=e(i,r);return i.getStatus()===404&&(s=Va(n.path)),s.serverResponse=r.serverResponse,s}return t}function xl(n,e,t){const i=e.fullServerUrl(),r=En(i,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,l=new Zi(r,s,Pl(n,t),o);return l.errorHandler=Nl(e),l}function Ll(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Dl(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=Ll(null,e)),i}function Ml(n,e,t,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let K="";for(let x=0;x<2;x++)K=K+Math.random().toString().slice(2);return K}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const c=Dl(e,i,r),u=$l(c,t),f="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,g=`\r
--`+a+"--",p=ye.getBlob(f,i,g);if(p===null)throw el();const y={name:c.fullPath},P=En(s,n.host,n._protocol),T="POST",E=n.maxUploadRetryTime,S=new Zi(P,T,Ol(n,t),E);return S.urlParams=y,S.headers=o,S.body=p.uploadData(),S.errorHandler=Qi(e),S}class Ul{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ce.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ce.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ce.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,r){if(this.sent_)throw pt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zl extends Ul{initXhr(){this.xhr_.responseType="text"}}function er(){return new zl}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){this._service=e,t instanceof se?this._location=t:this._location=se.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new $e(e,t)}get root(){const e=new se(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ki(this._location.path)}get storage(){return this._service}get parent(){const e=Il(this._location.path);if(e===null)return null;const t=new se(this._location.bucket,e);return new $e(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw nl(e)}}function Bl(n,e,t){n._throwIfRoot("uploadBytes");const i=Ml(n.storage,n._location,Ji(),new ye(e,!0),t);return n.storage.makeRequestWithTokens(i,er).then(r=>({metadata:r,ref:n}))}function Fl(n){n._throwIfRoot("getDownloadURL");const e=xl(n.storage,n._location,Ji());return n.storage.makeRequestWithTokens(e,er).then(t=>{if(t===null)throw tl();return t})}function jl(n,e){const t=El(n._location.path,e),i=new se(n._location.bucket,t);return new $e(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(n){return/^[A-Za-z]+:\/\//.test(n)}function Vl(n,e){return new $e(n,e)}function tr(n,e){if(n instanceof Rn){const t=n;if(t._bucket==null)throw Qa();const i=new $e(t,t._bucket);return e!=null?tr(i,e):i}else return e!==void 0?jl(n,e):n}function Wl(n,e){if(e&&Hl(e)){if(n instanceof Rn)return Vl(n,e);throw yn("To use ref(service, url), the first argument must be a Storage instance.")}else return tr(n,e)}function nr(n,e){const t=e==null?void 0:e[zi];return t==null?null:se.makeFromBucketSpec(t,n)}class Rn{constructor(e,t,i,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=Ui,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ja,this._maxUploadRetryTime=Ha,this._requests=new Set,r!=null?this._bucket=se.makeFromBucketSpec(r,this._host):this._bucket=nr(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=se.makeFromBucketSpec(this._url,e):this._bucket=nr(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ji("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ji("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $e(this,e)}_makeRequest(e,t,i,r){if(this._deleted)return new il(Bi());{const s=dl(e,this._appId,i,r,t,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,r).getPromise()}}const ir="@firebase/storage",rr="0.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="storage";function Ff(n,e,t){return n=le(n),Bl(n,e,t)}function jf(n){return n=le(n),Fl(n)}function Hf(n,e){return n=le(n),Wl(n,e)}function Vf(n=Kn(),e){return n=le(n),tn(n,sr).getImmediate({identifier:e})}function ql(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new Rn(t,i,r,e,rt)}function Gl(){it(new Ue(sr,ql,"PUBLIC").setMultipleInstances(!0)),Re(ir,rr,""),Re(ir,rr,"esm2017")}Gl();var Bt,Kl=new Uint8Array(16);function Jl(){if(!Bt&&(Bt=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Bt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Bt(Kl)}var Xl=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Zl(n){return typeof n=="string"&&Xl.test(n)}var Q=[];for(var Sn=0;Sn<256;++Sn)Q.push((Sn+256).toString(16).substr(1));function Yl(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(Q[n[e+0]]+Q[n[e+1]]+Q[n[e+2]]+Q[n[e+3]]+"-"+Q[n[e+4]]+Q[n[e+5]]+"-"+Q[n[e+6]]+Q[n[e+7]]+"-"+Q[n[e+8]]+Q[n[e+9]]+"-"+Q[n[e+10]]+Q[n[e+11]]+Q[n[e+12]]+Q[n[e+13]]+Q[n[e+14]]+Q[n[e+15]]).toLowerCase();if(!Zl(t))throw TypeError("Stringified UUID is invalid");return t}function Wf(n,e,t){n=n||{};var i=n.random||(n.rng||Jl)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){t=t||0;for(var r=0;r<16;++r)e[t+r]=i[r];return e}return Yl(i)}const Ql=["Activate","AddUndo","BeforeAddUndo","BeforeExecCommand","BeforeGetContent","BeforeRenderUI","BeforeSetContent","BeforePaste","Blur","Change","ClearUndos","Click","ContextMenu","Copy","Cut","Dblclick","Deactivate","Dirty","Drag","DragDrop","DragEnd","DragGesture","DragOver","Drop","ExecCommand","Focus","FocusIn","FocusOut","GetContent","Hide","Init","KeyDown","KeyPress","KeyUp","LoadContent","MouseDown","MouseEnter","MouseLeave","MouseMove","MouseOut","MouseOver","MouseUp","NodeChange","ObjectResizeStart","ObjectResized","ObjectSelected","Paste","PostProcess","PostRender","PreProcess","ProgressState","Redo","Remove","Reset","ResizeEditor","SaveContent","SelectionChange","SetAttrib","SetContent","Show","Submit","Undo","VisualAid"],ec=(n,e)=>{Ql.forEach(t=>{n.on(t,i=>{e(t.toLowerCase(),{eventName:t,event:i,editor:n})})})};function tc(n){let e;return{c(){e=A("textarea"),this.h()},l(t){e=N(t,"TEXTAREA",{id:!0,style:!0}),L(e).forEach(h),this.h()},h(){R(e,"id",n[0]),jr(e,"visibility","hidden")},m(t,i){b(t,e,i),n[17](e)},p(t,i){i&1&&R(e,"id",t[0])},d(t){t&&h(e),n[17](null)}}}function nc(n){let e;return{c(){e=A("div"),this.h()},l(t){e=N(t,"DIV",{id:!0}),L(e).forEach(h),this.h()},h(){R(e,"id",n[0])},m(t,i){b(t,e,i),n[16](e)},p(t,i){i&1&&R(e,"id",t[0])},d(t){t&&h(e),n[16](null)}}}function ic(n){let e;function t(s,o){return s[1]?nc:tc}let i=t(n),r=i(n);return{c(){e=A("div"),r.c(),this.h()},l(s){e=N(s,"DIV",{class:!0});var o=L(e);r.l(o),o.forEach(h),this.h()},h(){R(e,"class",n[2])},m(s,o){b(s,e,o),r.m(e,null),n[18](e)},p(s,[o]){i===(i=t(s))&&r?r.p(s,o):(r.d(1),r=i(s),r&&(r.c(),r.m(e,null))),o&4&&R(e,"class",s[2])},i:H,o:H,d(s){s&&h(e),r.d(),n[18](null)}}}const or=n=>n+"_"+Math.floor(Math.random()*1e9)+String(Date.now()),rc=()=>{let n={listeners:[],scriptId:or("tiny-script"),scriptLoaded:!1,injected:!1};const e=(i,r,s,o)=>{n.injected=!0;const l=r.createElement("script");l.referrerPolicy="origin",l.type="application/javascript",l.src=s,l.onload=()=>{o()},r.head&&r.head.appendChild(l)};return{load:(i,r,s)=>{n.scriptLoaded?s():(n.listeners.push(s),n.injected||e(n.scriptId,i,r,()=>{n.listeners.forEach(o=>o()),n.scriptLoaded=!0}))}}};let sc=rc();function oc(n,e,t){let{id:i=or("tinymce-svelte")}=e,{inline:r=void 0}=e,{disabled:s=!1}=e,{apiKey:o="no-api-key"}=e,{channel:l="5"}=e,{scriptSrc:a=void 0}=e,{conf:c={}}=e,{modelEvents:u="change input undo redo"}=e,{value:f=""}=e,{text:g=""}=e,{cssClass:p="tinymce-wrapper"}=e,y,P,T,E="",S=s;const K=Bn(),x=()=>{const ie=(()=>typeof window!="undefined"?window:global)();return ie&&ie.tinymce?ie.tinymce:null},Z=()=>{const v=Object.assign(Object.assign({},c),{target:P,inline:r!==void 0?r:c.inline!==void 0?c.inline:!1,readonly:s,setup:ie=>{t(13,T=ie),ie.on("init",()=>{ie.setContent(f),ie.on(u,()=>{t(14,E=ie.getContent()),E!==f&&(t(5,f=E),t(6,g=ie.getContent({format:"text"})))})}),ec(ie,K),typeof c.setup=="function"&&c.setup(ie)}});t(4,P.style.visibility="",P),x().init(v)};zn(()=>{if(x()!==null)Z();else{const v=a||`https://cdn.tiny.cloud/1/${o}/tinymce/${l}/tinymce.min.js`;sc.load(y.ownerDocument,v,()=>{Z()})}}),Wr(()=>{var v;T&&((v=x())===null||v===void 0||v.remove(T))});function Y(v){Ye[v?"unshift":"push"](()=>{P=v,t(4,P)})}function oe(v){Ye[v?"unshift":"push"](()=>{P=v,t(4,P)})}function re(v){Ye[v?"unshift":"push"](()=>{y=v,t(3,y)})}return n.$$set=v=>{"id"in v&&t(0,i=v.id),"inline"in v&&t(1,r=v.inline),"disabled"in v&&t(7,s=v.disabled),"apiKey"in v&&t(8,o=v.apiKey),"channel"in v&&t(9,l=v.channel),"scriptSrc"in v&&t(10,a=v.scriptSrc),"conf"in v&&t(11,c=v.conf),"modelEvents"in v&&t(12,u=v.modelEvents),"value"in v&&t(5,f=v.value),"text"in v&&t(6,g=v.text),"cssClass"in v&&t(2,p=v.cssClass)},n.$$.update=()=>{n.$$.dirty&57504&&(T&&E!==f&&(T.setContent(f),t(6,g=T.getContent({format:"text"}))),T&&s!==S&&(t(15,S=s),T.setMode(s?"readonly":"design")))},[i,r,p,y,P,f,g,s,o,l,a,c,u,T,E,S,Y,oe,re]}class qf extends j{constructor(e){super();F(this,e,oc,ic,U,{id:0,inline:1,disabled:7,apiKey:8,channel:9,scriptSrc:10,conf:11,modelEvents:12,value:5,text:6,cssClass:2})}}function ar(n,e,t){const i=n.slice();return i[18]=e[t],i}function lr(n,e,t){const i=n.slice();return i[18]=e[t],i}function cr(n,e,t){const i=n.slice();return i[10]=e[t],i}function ur(n,e,t){const i=n.slice();return i[13]=e[t],i[15]=t,i}function fr(n,e,t){const i=n.slice();return i[16]=e[t],i[15]=t,i}function hr(n,e,t){const i=n.slice();return i[7]=e[t],i}function ac(n){let e,t,i,r;const s=[fc,uc,cc],o=[];function l(a,c){return a[0]==="table"?0:a[0]==="list"?1:2}return e=l(n),t=o[e]=s[e](n),{c(){t.c(),i=k()},l(a){t.l(a),i=k()},m(a,c){o[e].m(a,c),b(a,i,c),r=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(z(),m(o[u],1,1,()=>{o[u]=null}),B(),t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),d(t,1),t.m(i.parentNode,i))},i(a){r||(d(t),r=!0)},o(a){m(t),r=!1},d(a){o[e].d(a),a&&h(i)}}}function lc(n){let e,t,i=n[1],r=[];for(let o=0;o<i.length;o+=1)r[o]=br(hr(n,i,o));const s=o=>m(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=k()},l(o){for(let l=0;l<r.length;l+=1)r[l].l(o);e=k()},m(o,l){for(let a=0;a<r.length;a+=1)r[a].m(o,l);b(o,e,l),t=!0},p(o,l){if(l&34){i=o[1];let a;for(a=0;a<i.length;a+=1){const c=hr(o,i,a);r[a]?(r[a].p(c,l),d(r[a],1)):(r[a]=br(c),r[a].c(),d(r[a],1),r[a].m(e.parentNode,e))}for(z(),a=i.length;a<r.length;a+=1)s(a);B()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)d(r[l]);t=!0}},o(o){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)m(r[l]);t=!1},d(o){Ne(r,o),o&&h(e)}}}function cc(n){let e,t,i;const r=[n[6]];var s=n[5][n[0]];function o(l){let a={$$slots:{default:[pc]},$$scope:{ctx:l}};for(let c=0;c<r.length;c+=1)a=he(a,r[c]);return{props:a}}return s&&(e=new s(o(n))),{c(){e&&O(e.$$.fragment),t=k()},l(l){e&&X(e.$$.fragment,l),t=k()},m(l,a){e&&C(e,l,a),b(l,t,a),i=!0},p(l,a){const c=a&64?Le(r,[De(l[6])]):{};if(a&8388706&&(c.$$scope={dirty:a,ctx:l}),s!==(s=l[5][l[0]])){if(e){z();const u=e;m(u.$$.fragment,1,0,()=>{$(u,1)}),B()}s?(e=new s(o(l)),O(e.$$.fragment),d(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){i||(e&&d(e.$$.fragment,l),i=!0)},o(l){e&&m(e.$$.fragment,l),i=!1},d(l){l&&h(t),e&&$(e,l)}}}function uc(n){let e,t,i,r;const s=[mc,gc],o=[];function l(a,c){return a[4]?0:1}return e=l(n),t=o[e]=s[e](n),{c(){t.c(),i=k()},l(a){t.l(a),i=k()},m(a,c){o[e].m(a,c),b(a,i,c),r=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(z(),m(o[u],1,1,()=>{o[u]=null}),B(),t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),d(t,1),t.m(i.parentNode,i))},i(a){r||(d(t),r=!0)},o(a){m(t),r=!1},d(a){o[e].d(a),a&&h(i)}}}function fc(n){let e,t,i;var r=n[5].table;function s(o){return{props:{$$slots:{default:[Sc]},$$scope:{ctx:o}}}}return r&&(e=new r(s(n))),{c(){e&&O(e.$$.fragment),t=k()},l(o){e&&X(e.$$.fragment,o),t=k()},m(o,l){e&&C(e,o,l),b(o,t,l),i=!0},p(o,l){const a={};if(l&8388716&&(a.$$scope={dirty:l,ctx:o}),r!==(r=o[5].table)){if(e){z();const c=e;m(c.$$.fragment,1,0,()=>{$(c,1)}),B()}r?(e=new r(s(o)),O(e.$$.fragment),d(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else r&&e.$set(a)},i(o){i||(e&&d(e.$$.fragment,o),i=!0)},o(o){e&&m(e.$$.fragment,o),i=!1},d(o){o&&h(t),e&&$(e,o)}}}function hc(n){let e=n[6].raw+"",t;return{c(){t=ve(e)},l(i){t=Ge(i,e)},m(i,r){b(i,t,r)},p(i,r){r&64&&e!==(e=i[6].raw+"")&&wt(t,e)},i:H,o:H,d(i){i&&h(t)}}}function dc(n){let e,t;return e=new Oe({props:{tokens:n[1],renderers:n[5]}}),{c(){O(e.$$.fragment)},l(i){X(e.$$.fragment,i)},m(i,r){C(e,i,r),t=!0},p(i,r){const s={};r&2&&(s.tokens=i[1]),r&32&&(s.renderers=i[5]),e.$set(s)},i(i){t||(d(e.$$.fragment,i),t=!0)},o(i){m(e.$$.fragment,i),t=!1},d(i){$(e,i)}}}function pc(n){let e,t,i,r;const s=[dc,hc],o=[];function l(a,c){return a[1]?0:1}return e=l(n),t=o[e]=s[e](n),{c(){t.c(),i=k()},l(a){t.l(a),i=k()},m(a,c){o[e].m(a,c),b(a,i,c),r=!0},p(a,c){let u=e;e=l(a),e===u?o[e].p(a,c):(z(),m(o[u],1,1,()=>{o[u]=null}),B(),t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),d(t,1),t.m(i.parentNode,i))},i(a){r||(d(t),r=!0)},o(a){m(t),r=!1},d(a){o[e].d(a),a&&h(i)}}}function gc(n){let e,t,i;const r=[{ordered:n[4]},n[6]];var s=n[5].list;function o(l){let a={$$slots:{default:[bc]},$$scope:{ctx:l}};for(let c=0;c<r.length;c+=1)a=he(a,r[c]);return{props:a}}return s&&(e=new s(o(n))),{c(){e&&O(e.$$.fragment),t=k()},l(l){e&&X(e.$$.fragment,l),t=k()},m(l,a){e&&C(e,l,a),b(l,t,a),i=!0},p(l,a){const c=a&80?Le(r,[a&16&&{ordered:l[4]},a&64&&De(l[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:l}),s!==(s=l[5].list)){if(e){z();const u=e;m(u.$$.fragment,1,0,()=>{$(u,1)}),B()}s?(e=new s(o(l)),O(e.$$.fragment),d(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){i||(e&&d(e.$$.fragment,l),i=!0)},o(l){e&&m(e.$$.fragment,l),i=!1},d(l){l&&h(t),e&&$(e,l)}}}function mc(n){let e,t,i;const r=[{ordered:n[4]},n[6]];var s=n[5].list;function o(l){let a={$$slots:{default:[kc]},$$scope:{ctx:l}};for(let c=0;c<r.length;c+=1)a=he(a,r[c]);return{props:a}}return s&&(e=new s(o(n))),{c(){e&&O(e.$$.fragment),t=k()},l(l){e&&X(e.$$.fragment,l),t=k()},m(l,a){e&&C(e,l,a),b(l,t,a),i=!0},p(l,a){const c=a&80?Le(r,[a&16&&{ordered:l[4]},a&64&&De(l[6])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:l}),s!==(s=l[5].list)){if(e){z();const u=e;m(u.$$.fragment,1,0,()=>{$(u,1)}),B()}s?(e=new s(o(l)),O(e.$$.fragment),d(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){i||(e&&d(e.$$.fragment,l),i=!0)},o(l){e&&m(e.$$.fragment,l),i=!1},d(l){l&&h(t),e&&$(e,l)}}}function _c(n){let e,t,i;return e=new Oe({props:{tokens:n[18].tokens,renderers:n[5]}}),{c(){O(e.$$.fragment),t=qe()},l(r){X(e.$$.fragment,r),t=Ke(r)},m(r,s){C(e,r,s),b(r,t,s),i=!0},p(r,s){const o={};s&64&&(o.tokens=r[18].tokens),s&32&&(o.renderers=r[5]),e.$set(o)},i(r){i||(d(e.$$.fragment,r),i=!0)},o(r){m(e.$$.fragment,r),i=!1},d(r){$(e,r),r&&h(t)}}}function dr(n){let e,t,i;const r=[n[18]];var s=n[5].unorderedlistitem||n[5].listitem;function o(l){let a={$$slots:{default:[_c]},$$scope:{ctx:l}};for(let c=0;c<r.length;c+=1)a=he(a,r[c]);return{props:a}}return s&&(e=new s(o(n))),{c(){e&&O(e.$$.fragment),t=k()},l(l){e&&X(e.$$.fragment,l),t=k()},m(l,a){e&&C(e,l,a),b(l,t,a),i=!0},p(l,a){const c=a&64?Le(r,[De(l[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:l}),s!==(s=l[5].unorderedlistitem||l[5].listitem)){if(e){z();const u=e;m(u.$$.fragment,1,0,()=>{$(u,1)}),B()}s?(e=new s(o(l)),O(e.$$.fragment),d(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){i||(e&&d(e.$$.fragment,l),i=!0)},o(l){e&&m(e.$$.fragment,l),i=!1},d(l){l&&h(t),e&&$(e,l)}}}function bc(n){let e,t,i=n[6].items,r=[];for(let o=0;o<i.length;o+=1)r[o]=dr(ar(n,i,o));const s=o=>m(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=k()},l(o){for(let l=0;l<r.length;l+=1)r[l].l(o);e=k()},m(o,l){for(let a=0;a<r.length;a+=1)r[a].m(o,l);b(o,e,l),t=!0},p(o,l){if(l&96){i=o[6].items;let a;for(a=0;a<i.length;a+=1){const c=ar(o,i,a);r[a]?(r[a].p(c,l),d(r[a],1)):(r[a]=dr(c),r[a].c(),d(r[a],1),r[a].m(e.parentNode,e))}for(z(),a=i.length;a<r.length;a+=1)s(a);B()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)d(r[l]);t=!0}},o(o){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)m(r[l]);t=!1},d(o){Ne(r,o),o&&h(e)}}}function wc(n){let e,t,i;return e=new Oe({props:{tokens:n[18].tokens,renderers:n[5]}}),{c(){O(e.$$.fragment),t=qe()},l(r){X(e.$$.fragment,r),t=Ke(r)},m(r,s){C(e,r,s),b(r,t,s),i=!0},p(r,s){const o={};s&64&&(o.tokens=r[18].tokens),s&32&&(o.renderers=r[5]),e.$set(o)},i(r){i||(d(e.$$.fragment,r),i=!0)},o(r){m(e.$$.fragment,r),i=!1},d(r){$(e,r),r&&h(t)}}}function pr(n){let e,t,i;const r=[n[18]];var s=n[5].orderedlistitem||n[5].listitem;function o(l){let a={$$slots:{default:[wc]},$$scope:{ctx:l}};for(let c=0;c<r.length;c+=1)a=he(a,r[c]);return{props:a}}return s&&(e=new s(o(n))),{c(){e&&O(e.$$.fragment),t=k()},l(l){e&&X(e.$$.fragment,l),t=k()},m(l,a){e&&C(e,l,a),b(l,t,a),i=!0},p(l,a){const c=a&64?Le(r,[De(l[18])]):{};if(a&8388704&&(c.$$scope={dirty:a,ctx:l}),s!==(s=l[5].orderedlistitem||l[5].listitem)){if(e){z();const u=e;m(u.$$.fragment,1,0,()=>{$(u,1)}),B()}s?(e=new s(o(l)),O(e.$$.fragment),d(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(l){i||(e&&d(e.$$.fragment,l),i=!0)},o(l){e&&m(e.$$.fragment,l),i=!1},d(l){l&&h(t),e&&$(e,l)}}}function kc(n){let e,t,i=n[6].items,r=[];for(let o=0;o<i.length;o+=1)r[o]=pr(lr(n,i,o));const s=o=>m(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=k()},l(o){for(let l=0;l<r.length;l+=1)r[l].l(o);e=k()},m(o,l){for(let a=0;a<r.length;a+=1)r[a].m(o,l);b(o,e,l),t=!0},p(o,l){if(l&96){i=o[6].items;let a;for(a=0;a<i.length;a+=1){const c=lr(o,i,a);r[a]?(r[a].p(c,l),d(r[a],1)):(r[a]=pr(c),r[a].c(),d(r[a],1),r[a].m(e.parentNode,e))}for(z(),a=i.length;a<r.length;a+=1)s(a);B()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)d(r[l]);t=!0}},o(o){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)m(r[l]);t=!1},d(o){Ne(r,o),o&&h(e)}}}function yc(n){let e,t,i;return e=new Oe({props:{tokens:n[16].tokens,renderers:n[5]}}),{c(){O(e.$$.fragment),t=qe()},l(r){X(e.$$.fragment,r),t=Ke(r)},m(r,s){C(e,r,s),b(r,t,s),i=!0},p(r,s){const o={};s&4&&(o.tokens=r[16].tokens),s&32&&(o.renderers=r[5]),e.$set(o)},i(r){i||(d(e.$$.fragment,r),i=!0)},o(r){m(e.$$.fragment,r),i=!1},d(r){$(e,r),r&&h(t)}}}function gr(n){let e,t,i;var r=n[5].tablecell;function s(o){return{props:{header:!0,align:o[6].align[o[15]]||"center",$$slots:{default:[yc]},$$scope:{ctx:o}}}}return r&&(e=new r(s(n))),{c(){e&&O(e.$$.fragment),t=k()},l(o){e&&X(e.$$.fragment,o),t=k()},m(o,l){e&&C(e,o,l),b(o,t,l),i=!0},p(o,l){const a={};if(l&64&&(a.align=o[6].align[o[15]]||"center"),l&8388644&&(a.$$scope={dirty:l,ctx:o}),r!==(r=o[5].tablecell)){if(e){z();const c=e;m(c.$$.fragment,1,0,()=>{$(c,1)}),B()}r?(e=new r(s(o)),O(e.$$.fragment),d(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else r&&e.$set(a)},i(o){i||(e&&d(e.$$.fragment,o),i=!0)},o(o){e&&m(e.$$.fragment,o),i=!1},d(o){o&&h(t),e&&$(e,o)}}}function vc(n){let e,t,i=n[2],r=[];for(let o=0;o<i.length;o+=1)r[o]=gr(fr(n,i,o));const s=o=>m(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=k()},l(o){for(let l=0;l<r.length;l+=1)r[l].l(o);e=k()},m(o,l){for(let a=0;a<r.length;a+=1)r[a].m(o,l);b(o,e,l),t=!0},p(o,l){if(l&100){i=o[2];let a;for(a=0;a<i.length;a+=1){const c=fr(o,i,a);r[a]?(r[a].p(c,l),d(r[a],1)):(r[a]=gr(c),r[a].c(),d(r[a],1),r[a].m(e.parentNode,e))}for(z(),a=i.length;a<r.length;a+=1)s(a);B()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)d(r[l]);t=!0}},o(o){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)m(r[l]);t=!1},d(o){Ne(r,o),o&&h(e)}}}function Ic(n){let e,t,i;var r=n[5].tablerow;function s(o){return{props:{$$slots:{default:[vc]},$$scope:{ctx:o}}}}return r&&(e=new r(s(n))),{c(){e&&O(e.$$.fragment),t=k()},l(o){e&&X(e.$$.fragment,o),t=k()},m(o,l){e&&C(e,o,l),b(o,t,l),i=!0},p(o,l){const a={};if(l&8388708&&(a.$$scope={dirty:l,ctx:o}),r!==(r=o[5].tablerow)){if(e){z();const c=e;m(c.$$.fragment,1,0,()=>{$(c,1)}),B()}r?(e=new r(s(o)),O(e.$$.fragment),d(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else r&&e.$set(a)},i(o){i||(e&&d(e.$$.fragment,o),i=!0)},o(o){e&&m(e.$$.fragment,o),i=!1},d(o){o&&h(t),e&&$(e,o)}}}function Ec(n){let e,t;return e=new Oe({props:{tokens:n[13].tokens,renderers:n[5]}}),{c(){O(e.$$.fragment)},l(i){X(e.$$.fragment,i)},m(i,r){C(e,i,r),t=!0},p(i,r){const s={};r&8&&(s.tokens=i[13].tokens),r&32&&(s.renderers=i[5]),e.$set(s)},i(i){t||(d(e.$$.fragment,i),t=!0)},o(i){m(e.$$.fragment,i),t=!1},d(i){$(e,i)}}}function mr(n){let e,t,i;var r=n[5].tablecell;function s(o){return{props:{header:!1,align:o[6].align[o[15]]||"center",$$slots:{default:[Ec]},$$scope:{ctx:o}}}}return r&&(e=new r(s(n))),{c(){e&&O(e.$$.fragment),t=k()},l(o){e&&X(e.$$.fragment,o),t=k()},m(o,l){e&&C(e,o,l),b(o,t,l),i=!0},p(o,l){const a={};if(l&64&&(a.align=o[6].align[o[15]]||"center"),l&8388648&&(a.$$scope={dirty:l,ctx:o}),r!==(r=o[5].tablecell)){if(e){z();const c=e;m(c.$$.fragment,1,0,()=>{$(c,1)}),B()}r?(e=new r(s(o)),O(e.$$.fragment),d(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else r&&e.$set(a)},i(o){i||(e&&d(e.$$.fragment,o),i=!0)},o(o){e&&m(e.$$.fragment,o),i=!1},d(o){o&&h(t),e&&$(e,o)}}}function Tc(n){let e,t,i=n[10],r=[];for(let o=0;o<i.length;o+=1)r[o]=mr(ur(n,i,o));const s=o=>m(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=qe()},l(o){for(let l=0;l<r.length;l+=1)r[l].l(o);e=Ke(o)},m(o,l){for(let a=0;a<r.length;a+=1)r[a].m(o,l);b(o,e,l),t=!0},p(o,l){if(l&104){i=o[10];let a;for(a=0;a<i.length;a+=1){const c=ur(o,i,a);r[a]?(r[a].p(c,l),d(r[a],1)):(r[a]=mr(c),r[a].c(),d(r[a],1),r[a].m(e.parentNode,e))}for(z(),a=i.length;a<r.length;a+=1)s(a);B()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)d(r[l]);t=!0}},o(o){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)m(r[l]);t=!1},d(o){Ne(r,o),o&&h(e)}}}function _r(n){let e,t,i;var r=n[5].tablerow;function s(o){return{props:{$$slots:{default:[Tc]},$$scope:{ctx:o}}}}return r&&(e=new r(s(n))),{c(){e&&O(e.$$.fragment),t=k()},l(o){e&&X(e.$$.fragment,o),t=k()},m(o,l){e&&C(e,o,l),b(o,t,l),i=!0},p(o,l){const a={};if(l&8388712&&(a.$$scope={dirty:l,ctx:o}),r!==(r=o[5].tablerow)){if(e){z();const c=e;m(c.$$.fragment,1,0,()=>{$(c,1)}),B()}r?(e=new r(s(o)),O(e.$$.fragment),d(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else r&&e.$set(a)},i(o){i||(e&&d(e.$$.fragment,o),i=!0)},o(o){e&&m(e.$$.fragment,o),i=!1},d(o){o&&h(t),e&&$(e,o)}}}function Rc(n){let e,t,i=n[3],r=[];for(let o=0;o<i.length;o+=1)r[o]=_r(cr(n,i,o));const s=o=>m(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=k()},l(o){for(let l=0;l<r.length;l+=1)r[l].l(o);e=k()},m(o,l){for(let a=0;a<r.length;a+=1)r[a].m(o,l);b(o,e,l),t=!0},p(o,l){if(l&104){i=o[3];let a;for(a=0;a<i.length;a+=1){const c=cr(o,i,a);r[a]?(r[a].p(c,l),d(r[a],1)):(r[a]=_r(c),r[a].c(),d(r[a],1),r[a].m(e.parentNode,e))}for(z(),a=i.length;a<r.length;a+=1)s(a);B()}},i(o){if(!t){for(let l=0;l<i.length;l+=1)d(r[l]);t=!0}},o(o){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)m(r[l]);t=!1},d(o){Ne(r,o),o&&h(e)}}}function Sc(n){let e,t,i,r,s;var o=n[5].tablehead;function l(u){return{props:{$$slots:{default:[Ic]},$$scope:{ctx:u}}}}o&&(e=new o(l(n)));var a=n[5].tablebody;function c(u){return{props:{$$slots:{default:[Rc]},$$scope:{ctx:u}}}}return a&&(i=new a(c(n))),{c(){e&&O(e.$$.fragment),t=qe(),i&&O(i.$$.fragment),r=k()},l(u){e&&X(e.$$.fragment,u),t=Ke(u),i&&X(i.$$.fragment,u),r=k()},m(u,f){e&&C(e,u,f),b(u,t,f),i&&C(i,u,f),b(u,r,f),s=!0},p(u,f){const g={};if(f&8388708&&(g.$$scope={dirty:f,ctx:u}),o!==(o=u[5].tablehead)){if(e){z();const y=e;m(y.$$.fragment,1,0,()=>{$(y,1)}),B()}o?(e=new o(l(u)),O(e.$$.fragment),d(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}else o&&e.$set(g);const p={};if(f&8388712&&(p.$$scope={dirty:f,ctx:u}),a!==(a=u[5].tablebody)){if(i){z();const y=i;m(y.$$.fragment,1,0,()=>{$(y,1)}),B()}a?(i=new a(c(u)),O(i.$$.fragment),d(i.$$.fragment,1),C(i,r.parentNode,r)):i=null}else a&&i.$set(p)},i(u){s||(e&&d(e.$$.fragment,u),i&&d(i.$$.fragment,u),s=!0)},o(u){e&&m(e.$$.fragment,u),i&&m(i.$$.fragment,u),s=!1},d(u){e&&$(e,u),u&&h(t),u&&h(r),i&&$(i,u)}}}function br(n){let e,t;const i=[n[7],{renderers:n[5]}];let r={};for(let s=0;s<i.length;s+=1)r=he(r,i[s]);return e=new Oe({props:r}),{c(){O(e.$$.fragment)},l(s){X(e.$$.fragment,s)},m(s,o){C(e,s,o),t=!0},p(s,o){const l=o&34?Le(i,[o&2&&De(s[7]),o&32&&{renderers:s[5]}]):{};e.$set(l)},i(s){t||(d(e.$$.fragment,s),t=!0)},o(s){m(e.$$.fragment,s),t=!1},d(s){$(e,s)}}}function Ac(n){let e,t,i,r;const s=[lc,ac],o=[];function l(a,c){return a[0]?a[5][a[0]]?1:-1:0}return~(e=l(n))&&(t=o[e]=s[e](n)),{c(){t&&t.c(),i=k()},l(a){t&&t.l(a),i=k()},m(a,c){~e&&o[e].m(a,c),b(a,i,c),r=!0},p(a,[c]){let u=e;e=l(a),e===u?~e&&o[e].p(a,c):(t&&(z(),m(o[u],1,1,()=>{o[u]=null}),B()),~e?(t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),d(t,1),t.m(i.parentNode,i)):t=null)},i(a){r||(d(t),r=!0)},o(a){m(t),r=!1},d(a){~e&&o[e].d(a),a&&h(i)}}}function Cc(n,e,t){const i=["type","tokens","header","rows","ordered","renderers"];let r=xn(e,i),{type:s=void 0}=e,{tokens:o=void 0}=e,{header:l=void 0}=e,{rows:a=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return n.$$set=f=>{e=he(he({},e),xr(f)),t(6,r=xn(e,i)),"type"in f&&t(0,s=f.type),"tokens"in f&&t(1,o=f.tokens),"header"in f&&t(2,l=f.header),"rows"in f&&t(3,a=f.rows),"ordered"in f&&t(4,c=f.ordered),"renderers"in f&&t(5,u=f.renderers)},[s,o,l,a,c,u,r]}class Oe extends j{constructor(e){super();F(this,e,Cc,Ac,U,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}}function $c(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Ft=$c();const Oc=/[&<>"']/,Pc=/[&<>"']/g,Nc=/[<>"']|&(?!#?\w+;)/,xc=/[<>"']|&(?!#?\w+;)/g,Lc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wr=n=>Lc[n];function te(n,e){if(e){if(Oc.test(n))return n.replace(Pc,wr)}else if(Nc.test(n))return n.replace(xc,wr);return n}const Dc=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function kr(n){return n.replace(Dc,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Mc=/(^|[^\[])\^/g;function M(n,e){n=n.source||n,e=e||"";const t={replace:(i,r)=>(r=r.source||r,r=r.replace(Mc,"$1"),n=n.replace(i,r),t),getRegex:()=>new RegExp(n,e)};return t}const Uc=/[^\w:]/g,zc=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function yr(n,e,t){if(n){let i;try{i=decodeURIComponent(kr(t)).replace(Uc,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}e&&!zc.test(t)&&(t=Hc(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const jt={},Bc=/^[^:]+:\/*[^/]*$/,Fc=/^([^:]+:)[\s\S]*$/,jc=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Hc(n,e){jt[" "+n]||(Bc.test(n)?jt[" "+n]=n+"/":jt[" "+n]=Vt(n,"/",!0)),n=jt[" "+n];const t=n.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:n.replace(Fc,"$1")+e:e.charAt(0)==="/"?t?e:n.replace(jc,"$1")+e:n+e}const Ht={exec:function(){}};function Pe(n){let e=1,t,i;for(;e<arguments.length;e++){t=arguments[e];for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}function vr(n,e){const t=n.replace(/\|/g,(s,o,l)=>{let a=!1,c=o;for(;--c>=0&&l[c]==="\\";)a=!a;return a?"|":" |"}),i=t.split(/ \|/);let r=0;if(i[0].trim()||i.shift(),i[i.length-1].trim()||i.pop(),i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(/\\\|/g,"|");return i}function Vt(n,e,t){const i=n.length;if(i===0)return"";let r=0;for(;r<i;){const s=n.charAt(i-r-1);if(s===e&&!t)r++;else if(s!==e&&t)r++;else break}return n.substr(0,i-r)}function Vc(n,e){if(n.indexOf(e[1])===-1)return-1;const t=n.length;let i=0,r=0;for(;r<t;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])i++;else if(n[r]===e[1]&&(i--,i<0))return r;return-1}function Ir(n,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=n),e>>=1,n+=n;return t+n}function Er(n,e,t,i){const r=e.href,s=e.title?te(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){i.state.inLink=!0;const l={type:"link",raw:t,href:r,title:s,text:o,tokens:i.inlineTokens(o,[])};return i.state.inLink=!1,l}else return{type:"image",raw:t,href:r,title:s,text:te(o)}}function Wc(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const i=t[1];return e.split(`
`).map(r=>{const s=r.match(/^\s+/);if(s===null)return r;const[o]=s;return o.length>=i.length?r.slice(i.length):r}).join(`
`)}class qc{constructor(e){this.options=e||Ft}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const i=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Vt(i,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const i=t[0],r=Wc(i,t[3]||"");return{type:"code",raw:i,lang:t[2]?t[2].trim():t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let i=t[2].trim();if(/#$/.test(i)){const s=Vt(i,"#");(this.options.pedantic||!s||/ $/.test(s))&&(i=s.trim())}const r={type:"heading",raw:t[0],depth:t[1].length,text:i,tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const i=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(i,[]),text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i,r,s,o,l,a,c,u,f,g,p,y,P=t[1].trim();const T=P.length>1,E={type:"list",raw:"",ordered:T,start:T?+P.slice(0,-1):"",loose:!1,items:[]};P=T?`\\d{1,9}\\${P.slice(-1)}`:`\\${P}`,this.options.pedantic&&(P=T?P:"[*+-]");const S=new RegExp(`^( {0,3}${P})((?: [^\\n]*)?(?:\\n|$))`);for(;e&&(y=!1,!(!(t=S.exec(e))||this.rules.block.hr.test(e)));){if(i=t[0],e=e.substring(i.length),u=t[2].split(`
`,1)[0],f=e.split(`
`,1)[0],this.options.pedantic?(o=2,p=u.trimLeft()):(o=t[2].search(/[^ ]/),o=o>4?1:o,p=u.slice(o),o+=t[1].length),a=!1,!u&&/^ *$/.test(f)&&(i+=f+`
`,e=e.substring(f.length+1),y=!0),!y){const x=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(g=e.split(`
`,1)[0],u=g,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!x.test(u));){if(u.search(/[^ ]/)>=o||!u.trim())p+=`
`+u.slice(o);else if(!a)p+=`
`+u;else break;!a&&!u.trim()&&(a=!0),i+=g+`
`,e=e.substring(g.length+1)}}E.loose||(c?E.loose=!0:/\n *\n *$/.test(i)&&(c=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(p),r&&(s=r[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),E.items.push({type:"list_item",raw:i,task:!!r,checked:s,loose:!1,text:p}),E.raw+=i}E.items[E.items.length-1].raw=i.trimRight(),E.items[E.items.length-1].text=p.trimRight(),E.raw=E.raw.trimRight();const K=E.items.length;for(l=0;l<K;l++){this.lexer.state.top=!1,E.items[l].tokens=this.lexer.blockTokens(E.items[l].text,[]);const x=E.items[l].tokens.filter(Y=>Y.type==="space"),Z=x.every(Y=>{const oe=Y.raw.split("");let re=0;for(const v of oe)if(v===`
`&&(re+=1),re>1)return!0;return!1});!E.loose&&x.length&&Z&&(E.loose=!0,E.items[l].loose=!0)}return E}}html(e){const t=this.rules.block.html.exec(e);if(t){const i={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(i.type="paragraph",i.text=this.options.sanitizer?this.options.sanitizer(t[0]):te(t[0]),i.tokens=[],this.lexer.inline(i.text,i.tokens)),i}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const i=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:i,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const i={type:"table",header:vr(t[1]).map(r=>({text:r})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){i.raw=t[0];let r=i.align.length,s,o,l,a;for(s=0;s<r;s++)/^ *-+: *$/.test(i.align[s])?i.align[s]="right":/^ *:-+: *$/.test(i.align[s])?i.align[s]="center":/^ *:-+ *$/.test(i.align[s])?i.align[s]="left":i.align[s]=null;for(r=i.rows.length,s=0;s<r;s++)i.rows[s]=vr(i.rows[s],i.header.length).map(c=>({text:c}));for(r=i.header.length,o=0;o<r;o++)i.header[o].tokens=[],this.lexer.inlineTokens(i.header[o].text,i.header[o].tokens);for(r=i.rows.length,o=0;o<r;o++)for(a=i.rows[o],l=0;l<a.length;l++)a[l].tokens=[],this.lexer.inlineTokens(a[l].text,a[l].tokens);return i}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const i={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const i={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}text(e){const t=this.rules.block.text.exec(e);if(t){const i={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:te(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):te(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const i=t[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const o=Vt(i.slice(0,-1),"\\");if((i.length-o.length)%2==0)return}else{const o=Vc(t[2],"()");if(o>-1){const a=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let r=t[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);o&&(r=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(i)?r=r.slice(1):r=r.slice(1,-1)),Er(t,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let r=(i[2]||i[1]).replace(/\s+/g," ");if(r=t[r.toLowerCase()],!r||!r.href){const s=i[0].charAt(0);return{type:"text",raw:s,text:s}}return Er(i,r,i[0],this.lexer)}}emStrong(e,t,i=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r||r[3]&&i.match(/[\p{L}\p{N}]/u))return;const s=r[1]||r[2]||"";if(!s||s&&(i===""||this.rules.inline.punctuation.exec(i))){const o=r[0].length-1;let l,a,c=o,u=0;const f=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+o);(r=f.exec(t))!=null;){if(l=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!l)continue;if(a=l.length,r[3]||r[4]){c+=a;continue}else if((r[5]||r[6])&&o%3&&!((o+a)%3)){u+=a;continue}if(c-=a,c>0)continue;if(a=Math.min(a,a+c+u),Math.min(o,a)%2){const p=e.slice(1,o+r.index+a);return{type:"em",raw:e.slice(0,o+r.index+a+1),text:p,tokens:this.lexer.inlineTokens(p,[])}}const g=e.slice(2,o+r.index+a-1);return{type:"strong",raw:e.slice(0,o+r.index+a+1),text:g,tokens:this.lexer.inlineTokens(g,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let i=t[2].replace(/\n/g," ");const r=/[^ ]/.test(i),s=/^ /.test(i)&&/ $/.test(i);return r&&s&&(i=i.substring(1,i.length-1)),i=te(i,!0),{type:"codespan",raw:t[0],text:i}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const i=this.rules.inline.autolink.exec(e);if(i){let r,s;return i[2]==="@"?(r=te(this.options.mangle?t(i[1]):i[1]),s="mailto:"+r):(r=te(i[1]),s=r),{type:"link",raw:i[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(e,t){let i;if(i=this.rules.inline.url.exec(e)){let r,s;if(i[2]==="@")r=te(this.options.mangle?t(i[0]):i[0]),s="mailto:"+r;else{let o;do o=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(o!==i[0]);r=te(i[0]),i[1]==="www."?s="http://"+r:s=r}return{type:"link",raw:i[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e,t){const i=this.rules.inline.text.exec(e);if(i){let r;return this.lexer.state.inRawBlock?r=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):te(i[0]):i[0]:r=te(this.options.smartypants?t(i[0]):i[0]),{type:"text",raw:i[0],text:r}}}}const w={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:Ht,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};w._label=/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;w._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;w.def=M(w.def).replace("label",w._label).replace("title",w._title).getRegex();w.bullet=/(?:[*+-]|\d{1,9}[.)])/;w.listItemStart=M(/^( *)(bull) */).replace("bull",w.bullet).getRegex();w.list=M(w.list).replace(/bull/g,w.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+w.def.source+")").getRegex();w._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";w._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;w.html=M(w.html,"i").replace("comment",w._comment).replace("tag",w._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();w.paragraph=M(w._paragraph).replace("hr",w.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",w._tag).getRegex();w.blockquote=M(w.blockquote).replace("paragraph",w.paragraph).getRegex();w.normal=Pe({},w);w.gfm=Pe({},w.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});w.gfm.table=M(w.gfm.table).replace("hr",w.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",w._tag).getRegex();w.gfm.paragraph=M(w._paragraph).replace("hr",w.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",w.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",w._tag).getRegex();w.pedantic=Pe({},w.normal,{html:M(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",w._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ht,paragraph:M(w.normal._paragraph).replace("hr",w.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",w.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const _={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ht,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ht,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};_._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";_.punctuation=M(_.punctuation).replace(/punctuation/g,_._punctuation).getRegex();_.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;_.escapedEmSt=/\\\*|\\_/g;_._comment=M(w._comment).replace("(?:-->|$)","-->").getRegex();_.emStrong.lDelim=M(_.emStrong.lDelim).replace(/punct/g,_._punctuation).getRegex();_.emStrong.rDelimAst=M(_.emStrong.rDelimAst,"g").replace(/punct/g,_._punctuation).getRegex();_.emStrong.rDelimUnd=M(_.emStrong.rDelimUnd,"g").replace(/punct/g,_._punctuation).getRegex();_._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;_._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;_._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;_.autolink=M(_.autolink).replace("scheme",_._scheme).replace("email",_._email).getRegex();_._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;_.tag=M(_.tag).replace("comment",_._comment).replace("attribute",_._attribute).getRegex();_._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;_._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;_._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;_.link=M(_.link).replace("label",_._label).replace("href",_._href).replace("title",_._title).getRegex();_.reflink=M(_.reflink).replace("label",_._label).getRegex();_.reflinkSearch=M(_.reflinkSearch,"g").replace("reflink",_.reflink).replace("nolink",_.nolink).getRegex();_.normal=Pe({},_);_.pedantic=Pe({},_.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:M(/^!?\[(label)\]\((.*?)\)/).replace("label",_._label).getRegex(),reflink:M(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",_._label).getRegex()});_.gfm=Pe({},_.normal,{escape:M(_.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});_.gfm.url=M(_.gfm.url,"i").replace("email",_.gfm._extended_email).getRegex();_.breaks=Pe({},_.gfm,{br:M(_.br).replace("{2,}","*").getRegex(),text:M(_.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Gc(n){return n.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Tr(n){let e="",t,i;const r=n.length;for(t=0;t<r;t++)i=n.charCodeAt(t),Math.random()>.5&&(i="x"+i.toString(16)),e+="&#"+i+";";return e}class gt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ft,this.options.tokenizer=this.options.tokenizer||new qc,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:w.normal,inline:_.normal};this.options.pedantic?(t.block=w.pedantic,t.inline=_.pedantic):this.options.gfm&&(t.block=w.gfm,this.options.breaks?t.inline=_.breaks:t.inline=_.gfm),this.tokenizer.rules=t}static get rules(){return{block:w,inline:_}}static lex(e,t){return new gt(t).lex(e)}static lexInline(e,t){return new gt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic&&(e=e.replace(/^ +$/gm,""));let i,r,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(i=l.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const a=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},a),typeof c=="number"&&c>=0&&(l=Math.min(l,c))}),l<1/0&&l>=0&&(s=e.substring(0,l+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){r=t[t.length-1],o&&r.type==="paragraph"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i),o=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&r.type==="text"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let i,r,s,o=e,l,a,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,l.index)+"["+Ir("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,l.index)+"["+Ir("a",l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,l.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(a||(c=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(i=u.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),r=t[t.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(i=this.tokenizer.emStrong(e,o,c)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.autolink(e,Tr)){e=e.substring(i.raw.length),t.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e,Tr))){e=e.substring(i.raw.length),t.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let g;this.options.extensions.startInline.forEach(function(p){g=p.call({lexer:this},f),typeof g=="number"&&g>=0&&(u=Math.min(u,g))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(i=this.tokenizer.inlineText(s,Gc)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(c=i.raw.slice(-1)),a=!0,r=t[t.length-1],r&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Kc{constructor(e){this.options=e||Ft}code(e,t,i){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,r);s!=null&&s!==e&&(i=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+te(r,!0)+'">'+(i?e:te(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:te(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
`+e+`</blockquote>
`}html(e){return e}heading(e,t,i,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(i)+'">'+e+"</h"+t+`>
`:"<h"+t+">"+e+"</h"+t+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,i){const r=t?"ol":"ul",s=t&&i!==1?' start="'+i+'"':"";return"<"+r+s+`>
`+e+"</"+r+`>
`}listitem(e){return"<li>"+e+`</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+`</p>
`}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
`+e+`</tr>
`}tablecell(e,t){const i=t.header?"th":"td";return(t.align?"<"+i+' align="'+t.align+'">':"<"+i+">")+e+"</"+i+`>
`}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,i){if(e=yr(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let r='<a href="'+te(e)+'"';return t&&(r+=' title="'+t+'"'),r+=">"+i+"</a>",r}image(e,t,i){if(e=yr(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let r='<img src="'+e+'" alt="'+i+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r}text(e){return e}}class Jc{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,i){return""+i}image(e,t,i){return""+i}br(){return""}}class Rr{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let i=e,r=0;if(this.seen.hasOwnProperty(i)){r=this.seen[e];do r++,i=e+"-"+r;while(this.seen.hasOwnProperty(i))}return t||(this.seen[e]=r,this.seen[i]=0),i}slug(e,t={}){const i=this.serialize(e);return this.getNextSafeSlug(i,t.dryrun)}}class Wt{constructor(e){this.options=e||Ft,this.options.renderer=this.options.renderer||new Kc,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Jc,this.slugger=new Rr}static parse(e,t){return new Wt(t).parse(e)}static parseInline(e,t){return new Wt(t).parseInline(e)}parse(e,t=!0){let i="",r,s,o,l,a,c,u,f,g,p,y,P,T,E,S,K,x,Z,Y;const oe=e.length;for(r=0;r<oe;r++){if(p=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(Y=this.options.extensions.renderers[p.type].call({parser:this},p),Y!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){i+=Y||"";continue}switch(p.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{i+=this.renderer.heading(this.parseInline(p.tokens),p.depth,kr(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{i+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(f="",u="",l=p.header.length,s=0;s<l;s++)u+=this.renderer.tablecell(this.parseInline(p.header[s].tokens),{header:!0,align:p.align[s]});for(f+=this.renderer.tablerow(u),g="",l=p.rows.length,s=0;s<l;s++){for(c=p.rows[s],u="",a=c.length,o=0;o<a;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:p.align[o]});g+=this.renderer.tablerow(u)}i+=this.renderer.table(f,g);continue}case"blockquote":{g=this.parse(p.tokens),i+=this.renderer.blockquote(g);continue}case"list":{for(y=p.ordered,P=p.start,T=p.loose,l=p.items.length,g="",s=0;s<l;s++)S=p.items[s],K=S.checked,x=S.task,E="",S.task&&(Z=this.renderer.checkbox(K),T?S.tokens.length>0&&S.tokens[0].type==="paragraph"?(S.tokens[0].text=Z+" "+S.tokens[0].text,S.tokens[0].tokens&&S.tokens[0].tokens.length>0&&S.tokens[0].tokens[0].type==="text"&&(S.tokens[0].tokens[0].text=Z+" "+S.tokens[0].tokens[0].text)):S.tokens.unshift({type:"text",text:Z}):E+=Z),E+=this.parse(S.tokens,T),g+=this.renderer.listitem(E,x,K);i+=this.renderer.list(g,y,P);continue}case"html":{i+=this.renderer.html(p.text);continue}case"paragraph":{i+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(g=p.tokens?this.parseInline(p.tokens):p.text;r+1<oe&&e[r+1].type==="text";)p=e[++r],g+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);i+=t?this.renderer.paragraph(g):g;continue}default:{const re='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error(re);return}else throw new Error(re)}}}return i}parseInline(e,t){t=t||this.renderer;let i="",r,s,o;const l=e.length;for(r=0;r<l;r++){if(s=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(o=this.options.extensions.renderers[s.type].call({parser:this},s),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){i+=o||"";continue}switch(s.type){case"escape":{i+=t.text(s.text);break}case"html":{i+=t.html(s.text);break}case"link":{i+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{i+=t.image(s.href,s.title,s.text);break}case"strong":{i+=t.strong(this.parseInline(s.tokens,t));break}case"em":{i+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{i+=t.codespan(s.text);break}case"br":{i+=t.br();break}case"del":{i+=t.del(this.parseInline(s.tokens,t));break}case"text":{i+=t.text(s.text);break}default:{const a='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(a);return}else throw new Error(a)}}}return i}}Wt.parse;gt.lex;const Sr={};function Xc(n){let e;return{c(){e=ve(n[1])},l(t){e=Ge(t,n[1])},m(t,i){b(t,e,i)},p(t,i){i&2&&wt(e,t[1])},i:H,o:H,d(t){t&&h(e)}}}function Zc(n){let e,t;const i=n[5].default,r=V(i,n,n[4],null);return{c(){e=A("h6"),r&&r.c(),this.h()},l(s){e=N(s,"H6",{id:!0});var o=L(e);r&&r.l(o),o.forEach(h),this.h()},h(){R(e,"id",n[2])},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&16)&&q(r,i,s,s[4],t?W(i,s[4],o,null):G(s[4]),null),(!t||o&4)&&R(e,"id",s[2])},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function Yc(n){let e,t;const i=n[5].default,r=V(i,n,n[4],null);return{c(){e=A("h5"),r&&r.c(),this.h()},l(s){e=N(s,"H5",{id:!0});var o=L(e);r&&r.l(o),o.forEach(h),this.h()},h(){R(e,"id",n[2])},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&16)&&q(r,i,s,s[4],t?W(i,s[4],o,null):G(s[4]),null),(!t||o&4)&&R(e,"id",s[2])},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function Qc(n){let e,t;const i=n[5].default,r=V(i,n,n[4],null);return{c(){e=A("h4"),r&&r.c(),this.h()},l(s){e=N(s,"H4",{id:!0});var o=L(e);r&&r.l(o),o.forEach(h),this.h()},h(){R(e,"id",n[2])},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&16)&&q(r,i,s,s[4],t?W(i,s[4],o,null):G(s[4]),null),(!t||o&4)&&R(e,"id",s[2])},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function eu(n){let e,t;const i=n[5].default,r=V(i,n,n[4],null);return{c(){e=A("h3"),r&&r.c(),this.h()},l(s){e=N(s,"H3",{id:!0});var o=L(e);r&&r.l(o),o.forEach(h),this.h()},h(){R(e,"id",n[2])},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&16)&&q(r,i,s,s[4],t?W(i,s[4],o,null):G(s[4]),null),(!t||o&4)&&R(e,"id",s[2])},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function tu(n){let e,t;const i=n[5].default,r=V(i,n,n[4],null);return{c(){e=A("h2"),r&&r.c(),this.h()},l(s){e=N(s,"H2",{id:!0});var o=L(e);r&&r.l(o),o.forEach(h),this.h()},h(){R(e,"id",n[2])},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&16)&&q(r,i,s,s[4],t?W(i,s[4],o,null):G(s[4]),null),(!t||o&4)&&R(e,"id",s[2])},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function nu(n){let e,t;const i=n[5].default,r=V(i,n,n[4],null);return{c(){e=A("h1"),r&&r.c(),this.h()},l(s){e=N(s,"H1",{id:!0});var o=L(e);r&&r.l(o),o.forEach(h),this.h()},h(){R(e,"id",n[2])},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&16)&&q(r,i,s,s[4],t?W(i,s[4],o,null):G(s[4]),null),(!t||o&4)&&R(e,"id",s[2])},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function iu(n){let e,t,i,r;const s=[nu,tu,eu,Qc,Yc,Zc,Xc],o=[];function l(a,c){return a[0]===1?0:a[0]===2?1:a[0]===3?2:a[0]===4?3:a[0]===5?4:a[0]===6?5:6}return e=l(n),t=o[e]=s[e](n),{c(){t.c(),i=k()},l(a){t.l(a),i=k()},m(a,c){o[e].m(a,c),b(a,i,c),r=!0},p(a,[c]){let u=e;e=l(a),e===u?o[e].p(a,c):(z(),m(o[u],1,1,()=>{o[u]=null}),B(),t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),d(t,1),t.m(i.parentNode,i))},i(a){r||(d(t),r=!0)},o(a){m(t),r=!1},d(a){o[e].d(a),a&&h(i)}}}function ru(n,e,t){let i,{$$slots:r={},$$scope:s}=e,{depth:o}=e,{raw:l}=e,{text:a}=e;const{slug:c,getOptions:u}=Gr(Sr),f=u();return n.$$set=g=>{"depth"in g&&t(0,o=g.depth),"raw"in g&&t(1,l=g.raw),"text"in g&&t(3,a=g.text),"$$scope"in g&&t(4,s=g.$$scope)},n.$$.update=()=>{n.$$.dirty&8&&t(2,i=f.headerIds?f.headerPrefix+c(a):void 0)},[o,l,i,a,s,r]}class su extends j{constructor(e){super();F(this,e,ru,iu,U,{depth:0,raw:1,text:3})}}function ou(n){let e,t;const i=n[1].default,r=V(i,n,n[0],null);return{c(){e=A("p"),r&&r.c()},l(s){e=N(s,"P",{});var o=L(e);r&&r.l(o),o.forEach(h)},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&q(r,i,s,s[0],t?W(i,s[0],o,null):G(s[0]),null)},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function au(n,e,t){let{$$slots:i={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,i]}class lu extends j{constructor(e){super();F(this,e,au,ou,U,{})}}function cu(n){let e;const t=n[3].default,i=V(t,n,n[2],null);return{c(){i&&i.c()},l(r){i&&i.l(r)},m(r,s){i&&i.m(r,s),e=!0},p(r,[s]){i&&i.p&&(!e||s&4)&&q(i,t,r,r[2],e?W(t,r[2],s,null):G(r[2]),null)},i(r){e||(d(i,r),e=!0)},o(r){m(i,r),e=!1},d(r){i&&i.d(r)}}}function uu(n,e,t){let{$$slots:i={},$$scope:r}=e,{text:s}=e,{raw:o}=e;return n.$$set=l=>{"text"in l&&t(0,s=l.text),"raw"in l&&t(1,o=l.raw),"$$scope"in l&&t(2,r=l.$$scope)},[s,o,r,i]}class fu extends j{constructor(e){super();F(this,e,uu,cu,U,{text:0,raw:1})}}function hu(n){let e,t;return{c(){e=A("img"),this.h()},l(i){e=N(i,"IMG",{src:!0,title:!0,alt:!0}),this.h()},h(){Pn(e.src,t=n[0])||R(e,"src",t),R(e,"title",n[1]),R(e,"alt",n[2])},m(i,r){b(i,e,r)},p(i,[r]){r&1&&!Pn(e.src,t=i[0])&&R(e,"src",t),r&2&&R(e,"title",i[1]),r&4&&R(e,"alt",i[2])},i:H,o:H,d(i){i&&h(e)}}}function du(n,e,t){let{href:i=""}=e,{title:r=void 0}=e,{text:s=""}=e;return n.$$set=o=>{"href"in o&&t(0,i=o.href),"title"in o&&t(1,r=o.title),"text"in o&&t(2,s=o.text)},[i,r,s]}class pu extends j{constructor(e){super();F(this,e,du,hu,U,{href:0,title:1,text:2})}}function gu(n){let e,t;const i=n[3].default,r=V(i,n,n[2],null);return{c(){e=A("a"),r&&r.c(),this.h()},l(s){e=N(s,"A",{href:!0,title:!0});var o=L(e);r&&r.l(o),o.forEach(h),this.h()},h(){R(e,"href",n[0]),R(e,"title",n[1])},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&4)&&q(r,i,s,s[2],t?W(i,s[2],o,null):G(s[2]),null),(!t||o&1)&&R(e,"href",s[0]),(!t||o&2)&&R(e,"title",s[1])},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function mu(n,e,t){let{$$slots:i={},$$scope:r}=e,{href:s=""}=e,{title:o=void 0}=e;return n.$$set=l=>{"href"in l&&t(0,s=l.href),"title"in l&&t(1,o=l.title),"$$scope"in l&&t(2,r=l.$$scope)},[s,o,r,i]}class _u extends j{constructor(e){super();F(this,e,mu,gu,U,{href:0,title:1})}}function bu(n){let e,t;const i=n[1].default,r=V(i,n,n[0],null);return{c(){e=A("em"),r&&r.c()},l(s){e=N(s,"EM",{});var o=L(e);r&&r.l(o),o.forEach(h)},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&q(r,i,s,s[0],t?W(i,s[0],o,null):G(s[0]),null)},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function wu(n,e,t){let{$$slots:i={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,i]}class ku extends j{constructor(e){super();F(this,e,wu,bu,U,{})}}function yu(n){let e,t;const i=n[1].default,r=V(i,n,n[0],null);return{c(){e=A("del"),r&&r.c()},l(s){e=N(s,"DEL",{});var o=L(e);r&&r.l(o),o.forEach(h)},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&q(r,i,s,s[0],t?W(i,s[0],o,null):G(s[0]),null)},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function vu(n,e,t){let{$$slots:i={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,i]}class Iu extends j{constructor(e){super();F(this,e,vu,yu,U,{})}}function Eu(n){let e,t=n[0].replace(/`/g,"")+"",i;return{c(){e=A("code"),i=ve(t)},l(r){e=N(r,"CODE",{});var s=L(e);i=Ge(s,t),s.forEach(h)},m(r,s){b(r,e,s),bt(e,i)},p(r,[s]){s&1&&t!==(t=r[0].replace(/`/g,"")+"")&&wt(i,t)},i:H,o:H,d(r){r&&h(e)}}}function Tu(n,e,t){let{raw:i}=e;return n.$$set=r=>{"raw"in r&&t(0,i=r.raw)},[i]}class Ru extends j{constructor(e){super();F(this,e,Tu,Eu,U,{raw:0})}}function Su(n){let e,t;const i=n[1].default,r=V(i,n,n[0],null);return{c(){e=A("strong"),r&&r.c()},l(s){e=N(s,"STRONG",{});var o=L(e);r&&r.l(o),o.forEach(h)},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&q(r,i,s,s[0],t?W(i,s[0],o,null):G(s[0]),null)},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function Au(n,e,t){let{$$slots:i={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,i]}class Cu extends j{constructor(e){super();F(this,e,Au,Su,U,{})}}function $u(n){let e,t;const i=n[1].default,r=V(i,n,n[0],null);return{c(){e=A("table"),r&&r.c()},l(s){e=N(s,"TABLE",{});var o=L(e);r&&r.l(o),o.forEach(h)},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&q(r,i,s,s[0],t?W(i,s[0],o,null):G(s[0]),null)},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function Ou(n,e,t){let{$$slots:i={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,i]}class Pu extends j{constructor(e){super();F(this,e,Ou,$u,U,{})}}function Nu(n){let e,t;const i=n[1].default,r=V(i,n,n[0],null);return{c(){e=A("thead"),r&&r.c()},l(s){e=N(s,"THEAD",{});var o=L(e);r&&r.l(o),o.forEach(h)},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&q(r,i,s,s[0],t?W(i,s[0],o,null):G(s[0]),null)},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function xu(n,e,t){let{$$slots:i={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,i]}class Lu extends j{constructor(e){super();F(this,e,xu,Nu,U,{})}}function Du(n){let e,t;const i=n[1].default,r=V(i,n,n[0],null);return{c(){e=A("tbody"),r&&r.c()},l(s){e=N(s,"TBODY",{});var o=L(e);r&&r.l(o),o.forEach(h)},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&q(r,i,s,s[0],t?W(i,s[0],o,null):G(s[0]),null)},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function Mu(n,e,t){let{$$slots:i={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,i]}class Uu extends j{constructor(e){super();F(this,e,Mu,Du,U,{})}}function zu(n){let e,t;const i=n[1].default,r=V(i,n,n[0],null);return{c(){e=A("tr"),r&&r.c()},l(s){e=N(s,"TR",{});var o=L(e);r&&r.l(o),o.forEach(h)},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&q(r,i,s,s[0],t?W(i,s[0],o,null):G(s[0]),null)},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function Bu(n,e,t){let{$$slots:i={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,i]}class Fu extends j{constructor(e){super();F(this,e,Bu,zu,U,{})}}function ju(n){let e,t;const i=n[3].default,r=V(i,n,n[2],null);return{c(){e=A("td"),r&&r.c(),this.h()},l(s){e=N(s,"TD",{align:!0});var o=L(e);r&&r.l(o),o.forEach(h),this.h()},h(){R(e,"align",n[1])},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&4)&&q(r,i,s,s[2],t?W(i,s[2],o,null):G(s[2]),null),(!t||o&2)&&R(e,"align",s[1])},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function Hu(n){let e,t;const i=n[3].default,r=V(i,n,n[2],null);return{c(){e=A("th"),r&&r.c(),this.h()},l(s){e=N(s,"TH",{align:!0});var o=L(e);r&&r.l(o),o.forEach(h),this.h()},h(){R(e,"align",n[1])},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&4)&&q(r,i,s,s[2],t?W(i,s[2],o,null):G(s[2]),null),(!t||o&2)&&R(e,"align",s[1])},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function Vu(n){let e,t,i,r;const s=[Hu,ju],o=[];function l(a,c){return a[0]?0:1}return e=l(n),t=o[e]=s[e](n),{c(){t.c(),i=k()},l(a){t.l(a),i=k()},m(a,c){o[e].m(a,c),b(a,i,c),r=!0},p(a,[c]){let u=e;e=l(a),e===u?o[e].p(a,c):(z(),m(o[u],1,1,()=>{o[u]=null}),B(),t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),d(t,1),t.m(i.parentNode,i))},i(a){r||(d(t),r=!0)},o(a){m(t),r=!1},d(a){o[e].d(a),a&&h(i)}}}function Wu(n,e,t){let{$$slots:i={},$$scope:r}=e,{header:s}=e,{align:o}=e;return n.$$set=l=>{"header"in l&&t(0,s=l.header),"align"in l&&t(1,o=l.align),"$$scope"in l&&t(2,r=l.$$scope)},[s,o,r,i]}class qu extends j{constructor(e){super();F(this,e,Wu,Vu,U,{header:0,align:1})}}function Gu(n){let e,t;const i=n[3].default,r=V(i,n,n[2],null);return{c(){e=A("ul"),r&&r.c()},l(s){e=N(s,"UL",{});var o=L(e);r&&r.l(o),o.forEach(h)},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&4)&&q(r,i,s,s[2],t?W(i,s[2],o,null):G(s[2]),null)},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function Ku(n){let e,t;const i=n[3].default,r=V(i,n,n[2],null);return{c(){e=A("ol"),r&&r.c(),this.h()},l(s){e=N(s,"OL",{start:!0});var o=L(e);r&&r.l(o),o.forEach(h),this.h()},h(){R(e,"start",n[1])},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,o){r&&r.p&&(!t||o&4)&&q(r,i,s,s[2],t?W(i,s[2],o,null):G(s[2]),null),(!t||o&2)&&R(e,"start",s[1])},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function Ju(n){let e,t,i,r;const s=[Ku,Gu],o=[];function l(a,c){return a[0]?0:1}return e=l(n),t=o[e]=s[e](n),{c(){t.c(),i=k()},l(a){t.l(a),i=k()},m(a,c){o[e].m(a,c),b(a,i,c),r=!0},p(a,[c]){let u=e;e=l(a),e===u?o[e].p(a,c):(z(),m(o[u],1,1,()=>{o[u]=null}),B(),t=o[e],t?t.p(a,c):(t=o[e]=s[e](a),t.c()),d(t,1),t.m(i.parentNode,i))},i(a){r||(d(t),r=!0)},o(a){m(t),r=!1},d(a){o[e].d(a),a&&h(i)}}}function Xu(n,e,t){let{$$slots:i={},$$scope:r}=e,{ordered:s}=e,{start:o}=e;return n.$$set=l=>{"ordered"in l&&t(0,s=l.ordered),"start"in l&&t(1,o=l.start),"$$scope"in l&&t(2,r=l.$$scope)},[s,o,r,i]}class Zu extends j{constructor(e){super();F(this,e,Xu,Ju,U,{ordered:0,start:1})}}function Yu(n){let e,t;const i=n[1].default,r=V(i,n,n[0],null);return{c(){e=A("li"),r&&r.c()},l(s){e=N(s,"LI",{});var o=L(e);r&&r.l(o),o.forEach(h)},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&q(r,i,s,s[0],t?W(i,s[0],o,null):G(s[0]),null)},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function Qu(n,e,t){let{$$slots:i={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,i]}class ef extends j{constructor(e){super();F(this,e,Qu,Yu,U,{})}}function tf(n){let e;return{c(){e=A("hr")},l(t){e=N(t,"HR",{})},m(t,i){b(t,e,i)},p:H,i:H,o:H,d(t){t&&h(e)}}}class nf extends j{constructor(e){super();F(this,e,null,tf,U,{})}}function rf(n){let e,t;return{c(){e=new qt,t=k(),this.h()},l(i){e=Fr(i),t=k(),this.h()},h(){e.a=t},m(i,r){e.m(n[0],i,r),b(i,t,r)},p(i,[r]){r&1&&e.p(i[0])},i:H,o:H,d(i){i&&h(t),i&&e.d()}}}function sf(n,e,t){let{text:i}=e;return n.$$set=r=>{"text"in r&&t(0,i=r.text)},[i]}class of extends j{constructor(e){super();F(this,e,sf,rf,U,{text:0})}}function af(n){let e,t;const i=n[1].default,r=V(i,n,n[0],null);return{c(){e=A("blockquote"),r&&r.c()},l(s){e=N(s,"BLOCKQUOTE",{});var o=L(e);r&&r.l(o),o.forEach(h)},m(s,o){b(s,e,o),r&&r.m(e,null),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&q(r,i,s,s[0],t?W(i,s[0],o,null):G(s[0]),null)},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function lf(n,e,t){let{$$slots:i={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,i]}class cf extends j{constructor(e){super();F(this,e,lf,af,U,{})}}function uf(n){let e,t,i;return{c(){e=A("pre"),t=A("code"),i=ve(n[1]),this.h()},l(r){e=N(r,"PRE",{class:!0});var s=L(e);t=N(s,"CODE",{});var o=L(t);i=Ge(o,n[1]),o.forEach(h),s.forEach(h),this.h()},h(){R(e,"class",n[0])},m(r,s){b(r,e,s),bt(e,t),bt(t,i)},p(r,[s]){s&2&&wt(i,r[1]),s&1&&R(e,"class",r[0])},i:H,o:H,d(r){r&&h(e)}}}function ff(n,e,t){let{lang:i}=e,{text:r}=e;return n.$$set=s=>{"lang"in s&&t(0,i=s.lang),"text"in s&&t(1,r=s.text)},[i,r]}class hf extends j{constructor(e){super();F(this,e,ff,uf,U,{lang:0,text:1})}}function df(n){let e,t;const i=n[1].default,r=V(i,n,n[0],null);return{c(){e=A("br"),r&&r.c()},l(s){e=N(s,"BR",{}),r&&r.l(s)},m(s,o){b(s,e,o),r&&r.m(s,o),t=!0},p(s,[o]){r&&r.p&&(!t||o&1)&&q(r,i,s,s[0],t?W(i,s[0],o,null):G(s[0]),null)},i(s){t||(d(r,s),t=!0)},o(s){m(r,s),t=!1},d(s){s&&h(e),r&&r.d(s)}}}function pf(n,e,t){let{$$slots:i={},$$scope:r}=e;return n.$$set=s=>{"$$scope"in s&&t(0,r=s.$$scope)},[r,i]}class gf extends j{constructor(e){super();F(this,e,pf,df,U,{})}}const mf={heading:su,paragraph:lu,text:fu,image:pu,link:_u,em:ku,strong:Cu,codespan:Ru,del:Iu,table:Pu,tablehead:Lu,tablebody:Uu,tablerow:Fu,tablecell:qu,list:Zu,orderedlistitem:null,unorderedlistitem:null,listitem:ef,hr:nf,html:of,blockquote:cf,code:hf,br:gf},_f={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function bf(n){let e,t;return e=new Oe({props:{tokens:n[0],renderers:n[1]}}),{c(){O(e.$$.fragment)},l(i){X(e.$$.fragment,i)},m(i,r){C(e,i,r),t=!0},p(i,[r]){const s={};r&1&&(s.tokens=i[0]),r&2&&(s.renderers=i[1]),e.$set(s)},i(i){t||(d(e.$$.fragment,i),t=!0)},o(i){m(e.$$.fragment,i),t=!1},d(i){$(e,i)}}}function wf(n,e,t){let i,r,s,{source:o=""}=e,{renderers:l={}}=e,{options:a={}}=e,{isInline:c=!1}=e;const u=Bn();let f,g,p;return qr(Sr,{slug:y=>i?i.slug(y):"",getOptions:()=>r}),zn(()=>{t(7,p=!0)}),n.$$set=y=>{"source"in y&&t(2,o=y.source),"renderers"in y&&t(3,l=y.renderers),"options"in y&&t(4,a=y.options),"isInline"in y&&t(5,c=y.isInline)},n.$$.update=()=>{n.$$.dirty&4&&(i=o?new Rr:void 0),n.$$.dirty&16&&t(8,r=Ve(Ve({},_f),a)),n.$$.dirty&357&&(t(6,g=new gt(r)),t(0,f=c?g.inlineTokens(o):g.lex(o)),u("parsed",{tokens:f})),n.$$.dirty&8&&t(1,s=Ve(Ve({},mf),l)),n.$$.dirty&129&&p&&u("parsed",{tokens:f})},[f,s,o,l,a,c,g,p,r]}class Gf extends j{constructor(e){super();F(this,e,wf,bf,U,{source:2,renderers:3,options:4,isInline:5})}}export{Ff as $,$ as A,he as B,Df as C,Pf as D,Br as E,Tf as F,Cf as G,bt as H,If as I,H as J,We as K,yf as L,Bn as M,V as N,$f as O,q as P,G as Q,W as R,j as S,xf as T,Gr as U,Pn as V,jr as W,Rf as X,Ne as Y,Vf as Z,Hf as _,L as a,jf as a0,Mf as a1,Bf as a2,Af as a3,Jt as a4,Sf as a5,Ef as a6,zf as a7,Uf as a8,Wf as a9,vf as aa,Nf as ab,qf as ac,Ye as ad,Lf as ae,Gf as af,R as b,N as c,h as d,A as e,b as f,Ge as g,wt as h,F as i,qe as j,k,Ke as l,z as m,m as n,B as o,d as p,qr as q,Of as r,U as s,ve as t,zn as u,O as v,X as w,C as x,Le as y,De as z};
