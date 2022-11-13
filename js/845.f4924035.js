(self["webpackChunkpredevcamp"]=self["webpackChunkpredevcamp"]||[]).push([[845],{5787:function(t,e,n){var s=n(7976),r=TypeError;t.exports=function(t,e){if(s(e,t))return t;throw r("Incorrect invocation")}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1060:function(t,e,n){var s=n(1702),r=Error,i=s("".replace),o=function(t){return String(r(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!r.prepareStackTrace)while(e--)t=i(t,a,"");return t}},9587:function(t,e,n){var s=n(614),r=n(111),i=n(7674);t.exports=function(t,e,n){var o,a;return i&&s(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},6277:function(t,e,n){var s=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:s(t)}},1340:function(t,e,n){var s=n(648),r=String;t.exports=function(t){if("Symbol"===s(t))throw TypeError("Cannot convert a Symbol value to a string");return r(t)}},2801:function(t,e,n){"use strict";var s=n(2109),r=n(7854),i=n(5005),o=n(9114),a=n(3070).f,c=n(2597),h=n(5787),u=n(9587),l=n(6277),d=n(3678),f=n(1060),g=n(9781),p=n(1913),m="DOMException",y=i("Error"),v=i(m),w=function(){h(this,E);var t=arguments.length,e=l(t<1?void 0:arguments[0]),n=l(t<2?void 0:arguments[1],"Error"),s=new v(e,n),r=y(e);return r.name=m,a(s,"stack",o(1,f(r.stack,1))),u(s,this,w),s},E=w.prototype=v.prototype,T="stack"in y(m),b="stack"in new v(1,2),I=v&&g&&Object.getOwnPropertyDescriptor(r,m),C=!!I&&!(I.writable&&I.configurable),S=T&&!C&&!b;s({global:!0,constructor:!0,forced:p||S},{DOMException:S?w:v});var _=i(m),A=_.prototype;if(A.constructor!==_)for(var D in p||a(A,"constructor",o(1,_)),d)if(c(d,D)){var N=d[D],k=N.s;c(_,k)||a(_,k,o(6,N.c))}},8845:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return qd}});var s=n(3396);const r={class:"animalPage"},i={class:"container mx-auto mt-4"},o={key:0,class:"row"},a={class:"col ho"};function c(t,e,n,c,h,u){const l=(0,s.up)("Navbar"),d=(0,s.up)("card-animal");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(l),(0,s._)("main",i,[null!=h.animals?((0,s.wg)(),(0,s.iD)("div",o,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.animals,(t=>((0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(d,{title:t.name,type:t.type,detail:t.description,image:t.image},null,8,["title","type","detail","image"])])))),256))])):(0,s.kq)("",!0)])])}var h=n(4631),u=n(7139);const l={class:"card mb-3",style:{width:"32rem"}},d={class:"row g-0"},f={class:"col-md-4"},g=["src"],p={class:"card-body col-md-8"},m={class:"card-title"},y={class:"card-subtitle mb-2 text-muted"},v={class:"card-text"};function w(t,e,n,r,i,o){return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",d,[(0,s._)("div",f,[(0,s._)("img",{src:n.image,width:"50%",height:"200",class:"card-img-top",alt:"..."},null,8,g)]),(0,s._)("div",p,[(0,s._)("h5",m,(0,u.zw)(n.title),1),(0,s._)("h6",y,(0,u.zw)(n.type),1),(0,s._)("p",v,(0,u.zw)(n.detail),1)])])])}var E={data(){return{animal:null}},props:{title:String,type:String,detail:String,image:String}},T=n(89);const b=(0,T.Z)(E,[["render",w],["__scopeId","data-v-601e04f4"]]);var I=b,C=n(1020);n(3408),n(4590),n(7658),n(2801);
/**
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
 */
const S=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&s+1<t.length&&56320===(64512&t.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++s)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},_=function(t){const e=[];let n=0,s=0;while(n<t.length){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")},A={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const e=t[r],i=r+1<t.length,o=i?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,h=e>>2,u=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),s.push(n[h],n[u],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(S(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],i=r<t.length,o=i?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const h=r<t.length,u=h?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==u)throw Error();const l=e<<2|o>>4;if(s.push(l),64!==c){const t=o<<4&240|c>>2;if(s.push(t),64!==u){const t=c<<6&192|u;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},D=function(t){const e=S(t);return A.encodeByteArray(e,!0)},N=function(t){return D(t).replace(/\./g,"")},k=function(t){try{return A.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */function R(){return"object"===typeof indexedDB}function L(){return new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function O(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */const x=()=>O().__FIREBASE_DEFAULTS__,M=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/418/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},V=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&k(t[1]);return e&&JSON.parse(e)},P=()=>{try{return x()||M()||V()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},U=t=>{var e,n;return null===(n=null===(e=P())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},F=t=>{const e=U(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},B=()=>{var t;return null===(t=P())||void 0===t?void 0:t.config};
/**
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
 */
class q{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */function j(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[N(JSON.stringify(n)),N(JSON.stringify(o)),a].join(".")}
/**
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
 */const K="FirebaseError";class H extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=K,Object.setPrototypeOf(this,H.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,z.prototype.create)}}class z{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],i=r?$(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`,a=new H(s,o,n);return a}}function $(t,e){return t.replace(G,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}const G=/\{\$([^}]+)}/g;
/**
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
 */function Q(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const n=t[r],i=e[r];if(W(n)&&W(i)){if(!Q(n,i))return!1}else if(n!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function W(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */
/**
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
 */
function X(t){return t&&t._delegate?t._delegate:t}class Y{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const J="[DEFAULT]";
/**
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
 */class Z{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new q;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),s=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(s)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(et(t))try{this.getOrInitializeService({instanceIdentifier:J})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:s});n.resolve(t)}catch(e){}}}}clearInstance(t=J){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=J){return this.instances.has(t)}getOptions(t=J){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&i.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(sd){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:tt(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(sd){}return n||null}normalizeInstanceIdentifier(t=J){return this.component?this.component.multipleInstances?t:J:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function tt(t){return t===J?void 0:t}function et(t){return"EAGER"===t.instantiationMode}
/**
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
 */class nt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Z(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */
const st=[];var rt;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(rt||(rt={}));const it={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},ot=rt.INFO,at={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},ct=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),r=at[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${s}]  ${t.name}:`,...n)};class ht{constructor(t){this.name=t,this._logLevel=ot,this._logHandler=ct,this._userLogHandler=null,st.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?it[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...t),this._logHandler(this,rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...t),this._logHandler(this,rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...t),this._logHandler(this,rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...t),this._logHandler(this,rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...t),this._logHandler(this,rt.ERROR,...t)}}const ut=(t,e)=>e.some((e=>t instanceof e));let lt,dt;function ft(){return lt||(lt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gt(){return dt||(dt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pt=new WeakMap,mt=new WeakMap,yt=new WeakMap,vt=new WeakMap,wt=new WeakMap;function Et(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(_t(t.result)),s()},i=()=>{n(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&pt.set(e,t)})).catch((()=>{})),wt.set(e,t),e}function Tt(t){if(mt.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),s()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));mt.set(t,e)}let bt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return mt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||yt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _t(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function It(t){bt=t(bt)}function Ct(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?gt().includes(t)?function(...e){return t.apply(At(this),e),_t(pt.get(this))}:function(...e){return _t(t.apply(At(this),e))}:function(e,...n){const s=t.call(At(this),e,...n);return yt.set(s,e.sort?e.sort():[e]),_t(s)}}function St(t){return"function"===typeof t?Ct(t):(t instanceof IDBTransaction&&Tt(t),ut(t,ft())?new Proxy(t,bt):t)}function _t(t){if(t instanceof IDBRequest)return Et(t);if(vt.has(t))return vt.get(t);const e=St(t);return e!==t&&(vt.set(t,e),wt.set(e,t)),e}const At=t=>wt.get(t);function Dt(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=_t(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(_t(o.result),t.oldVersion,t.newVersion,_t(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Nt=["get","getKey","getAll","getAllKeys","count"],kt=["put","add","delete","clear"],Rt=new Map;function Lt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(Rt.get(e))return Rt.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=kt.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!Nt.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return Rt.set(e,i),i}It((t=>({...t,get:(e,n,s)=>Lt(e,n)||t.get(e,n,s),has:(e,n)=>!!Lt(e,n)||t.has(e,n)})));
/**
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
 */
class Ot{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(xt(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function xt(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const Mt="@firebase/app",Vt="0.8.4",Pt=new ht("@firebase/app"),Ut="@firebase/app-compat",Ft="@firebase/analytics-compat",Bt="@firebase/analytics",qt="@firebase/app-check-compat",jt="@firebase/app-check",Kt="@firebase/auth",Ht="@firebase/auth-compat",zt="@firebase/database",$t="@firebase/database-compat",Gt="@firebase/functions",Qt="@firebase/functions-compat",Wt="@firebase/installations",Xt="@firebase/installations-compat",Yt="@firebase/messaging",Jt="@firebase/messaging-compat",Zt="@firebase/performance",te="@firebase/performance-compat",ee="@firebase/remote-config",ne="@firebase/remote-config-compat",se="@firebase/storage",re="@firebase/storage-compat",ie="@firebase/firestore",oe="@firebase/firestore-compat",ae="firebase",ce="9.14.0",he="[DEFAULT]",ue={[Mt]:"fire-core",[Ut]:"fire-core-compat",[Bt]:"fire-analytics",[Ft]:"fire-analytics-compat",[jt]:"fire-app-check",[qt]:"fire-app-check-compat",[Kt]:"fire-auth",[Ht]:"fire-auth-compat",[zt]:"fire-rtdb",[$t]:"fire-rtdb-compat",[Gt]:"fire-fn",[Qt]:"fire-fn-compat",[Wt]:"fire-iid",[Xt]:"fire-iid-compat",[Yt]:"fire-fcm",[Jt]:"fire-fcm-compat",[Zt]:"fire-perf",[te]:"fire-perf-compat",[ee]:"fire-rc",[ne]:"fire-rc-compat",[se]:"fire-gcs",[re]:"fire-gcs-compat",[ie]:"fire-fst",[oe]:"fire-fst-compat","fire-js":"fire-js",[ae]:"fire-js-all"},le=new Map,de=new Map;function fe(t,e){try{t.container.addComponent(e)}catch(n){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ge(t){const e=t.name;if(de.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;de.set(e,t);for(const n of le.values())fe(n,t);return!0}function pe(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ye=new z("app","Firebase",me);
/**
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
 */
class ve{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Y("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ye.create("app-deleted",{appName:this._name})}}
/**
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
 */const we=ce;function Ee(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const s=Object.assign({name:he,automaticDataCollectionEnabled:!1},e),r=s.name;if("string"!==typeof r||!r)throw ye.create("bad-app-name",{appName:String(r)});if(n||(n=B()),!n)throw ye.create("no-options");const i=le.get(r);if(i){if(Q(n,i.options)&&Q(s,i.config))return i;throw ye.create("duplicate-app",{appName:r})}const o=new nt(r);for(const c of de.values())o.addComponent(c);const a=new ve(n,s,o);return le.set(r,a),a}function Te(t=he){const e=le.get(t);if(!e&&t===he)return Ee();if(!e)throw ye.create("no-app",{appName:t});return e}function be(t,e,n){var s;let r=null!==(s=ue[t])&&void 0!==s?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${r}" with version "${e}":`];return i&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Pt.warn(t.join(" "))}ge(new Y(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
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
 */
const Ie="firebase-heartbeat-database",Ce=1,Se="firebase-heartbeat-store";let _e=null;function Ae(){return _e||(_e=Dt(Ie,Ce,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Se)}}}).catch((t=>{throw ye.create("idb-open",{originalErrorMessage:t.message})}))),_e}async function De(t){var e;try{const e=await Ae();return e.transaction(Se).objectStore(Se).get(ke(t))}catch(n){if(n instanceof H)Pt.warn(n.message);else{const t=ye.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});Pt.warn(t.message)}}}async function Ne(t,e){var n;try{const n=await Ae(),s=n.transaction(Se,"readwrite"),r=s.objectStore(Se);return await r.put(e,ke(t)),s.done}catch(s){if(s instanceof H)Pt.warn(s.message);else{const t=ye.create("idb-set",{originalErrorMessage:null===(n=s)||void 0===n?void 0:n.message});Pt.warn(t.message)}}}function ke(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const Re=1024,Le=2592e6;class Oe{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ve(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=xe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=xe(),{heartbeatsToSend:e,unsentEntries:n}=Me(this._heartbeatsCache.heartbeats),s=N(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xe(){const t=new Date;return t.toISOString().substring(0,10)}function Me(t,e=Re){const n=[];let s=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Pe(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Pe(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ve{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!R()&&L().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await De(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ne(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ne(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Pe(t){return N(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function Ue(t){ge(new Y("platform-logger",(t=>new Ot(t)),"PRIVATE")),ge(new Y("heartbeat",(t=>new Oe(t)),"PRIVATE")),be(Mt,Vt,t),be(Mt,Vt,"esm2017"),be("fire-js","")}Ue("");n(541);var Fe,Be="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},qe={},je=je||{},Ke=Be||self;function He(){}function ze(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function $e(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function Ge(t){return Object.prototype.hasOwnProperty.call(t,Qe)&&t[Qe]||(t[Qe]=++We)}var Qe="closure_uid_"+(1e9*Math.random()>>>0),We=0;function Xe(t,e,n){return t.call.apply(t.bind,arguments)}function Ye(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Je=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xe:Ye,Je.apply(null,arguments)}function Ze(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function tn(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function en(){this.s=this.s,this.o=this.o}var nn=0;en.prototype.s=!1,en.prototype.na=function(){this.s||(this.s=!0,this.M(),0==nn)||Ge(this)},en.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const sn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function rn(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function on(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(ze(e)){const n=t.length||0,s=e.length||0;t.length=n+s;for(let r=0;r<s;r++)t[n+r]=e[r]}else t.push(e)}}function an(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}an.prototype.h=function(){this.defaultPrevented=!0};var cn=function(){if(!Ke.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ke.addEventListener("test",He,e),Ke.removeEventListener("test",He,e)}catch(n){}return t}();function hn(t){return/^[\s\xa0]*$/.test(t)}var un=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ln(t,e){return t<e?-1:t>e?1:0}function dn(){var t=Ke.navigator;return t&&(t=t.userAgent)?t:""}function fn(t){return-1!=dn().indexOf(t)}function gn(t){return gn[" "](t),t}function pn(t){var e=Dn;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}gn[" "]=He;var mn,yn=fn("Opera"),vn=fn("Trident")||fn("MSIE"),wn=fn("Edge"),En=wn||vn,Tn=fn("Gecko")&&!(-1!=dn().toLowerCase().indexOf("webkit")&&!fn("Edge"))&&!(fn("Trident")||fn("MSIE"))&&!fn("Edge"),bn=-1!=dn().toLowerCase().indexOf("webkit")&&!fn("Edge");function In(){var t=Ke.document;return t?t.documentMode:void 0}t:{var Cn="",Sn=function(){var t=dn();return Tn?/rv:([^\);]+)(\)|;)/.exec(t):wn?/Edge\/([\d\.]+)/.exec(t):vn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):bn?/WebKit\/(\S+)/.exec(t):yn?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Sn&&(Cn=Sn?Sn[1]:""),vn){var _n=In();if(null!=_n&&_n>parseFloat(Cn)){mn=String(_n);break t}}mn=Cn}var An,Dn={};function Nn(){return pn((function(){let t=0;const e=un(String(mn)).split("."),n=un("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=ln(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||ln(0==r[2].length,0==i[2].length)||ln(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(Ke.document&&vn){var kn=In();An=kn||(parseInt(mn,10)||void 0)}else An=void 0;var Rn=An;function Ln(t,e){if(an.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tn){t:{try{gn(e.nodeName);var r=!0;break t}catch(i){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:On[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ln.X.h.call(this)}}tn(Ln,an);var On={2:"touch",3:"pen",4:"mouse"};Ln.prototype.h=function(){Ln.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xn="closure_listenable_"+(1e6*Math.random()|0),Mn=0;function Vn(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Mn,this.ba=this.ea=!1}function Pn(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Un(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Fn(t){const e={};for(const n in t)e[n]=t[n];return e}const Bn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qn(t,e){let n,s;for(let r=1;r<arguments.length;r++){for(n in s=arguments[r],s)t[n]=s[n];for(let e=0;e<Bn.length;e++)n=Bn[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function jn(t){this.src=t,this.g={},this.h=0}function Kn(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=sn(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Pn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Hn(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}jn.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Hn(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Vn(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};var zn="closure_lm_"+(1e6*Math.random()|0),$n={};function Gn(t,e,n,s,r){if(s&&s.once)return Xn(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Gn(t,e[i],n,s,r);return null}return n=ss(n),t&&t[xn]?t.N(e,n,$e(s)?!!s.capture:!!s,r):Qn(t,e,n,!1,s,r)}function Qn(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=$e(r)?!!r.capture:!!r,a=es(t);if(a||(t[zn]=a=new jn(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Wn(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)cn||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Zn(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function Wn(){function t(n){return e.call(t.src,t.listener,n)}const e=ts;return t}function Xn(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Xn(t,e[i],n,s,r);return null}return n=ss(n),t&&t[xn]?t.O(e,n,$e(s)?!!s.capture:!!s,r):Qn(t,e,n,!0,s,r)}function Yn(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Yn(t,e[i],n,s,r);else s=$e(s)?!!s.capture:!!s,n=ss(n),t&&t[xn]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Hn(i,n,s,r),-1<n&&(Pn(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=es(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hn(e,n,s,r)),(n=-1<t?e[t]:null)&&Jn(n))}function Jn(t){if("number"!==typeof t&&t&&!t.ba){var e=t.src;if(e&&e[xn])Kn(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Zn(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=es(e))?(Kn(n,t),0==n.h&&(n.src=null,e[zn]=null)):Pn(t)}}}function Zn(t){return t in $n?$n[t]:$n[t]="on"+t}function ts(t,e){if(t.ba)t=!0;else{e=new Ln(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Jn(t),t=n.call(s,e)}return t}function es(t){return t=t[zn],t instanceof jn?t:null}var ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function ss(t){return"function"===typeof t?t:(t[ns]||(t[ns]=function(e){return t.handleEvent(e)}),t[ns])}function rs(){en.call(this),this.i=new jn(this),this.P=this,this.I=null}function is(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new an(e,t);else if(e instanceof an)e.target=e.target||t;else{var r=e;e=new an(s,t),qn(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=os(o,s,!0,e)&&r}if(o=e.g=t,r=os(o,s,!0,e)&&r,r=os(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=os(o,s,!1,e)&&r}function os(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Kn(t.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}tn(rs,en),rs.prototype[xn]=!0,rs.prototype.removeEventListener=function(t,e,n,s){Yn(this,t,e,n,s)},rs.prototype.M=function(){if(rs.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Pn(n[s]);delete e.g[t],e.h--}}this.I=null},rs.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},rs.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var as=Ke.JSON.stringify;function cs(){var t=ys;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class hs{constructor(){this.h=this.g=null}add(t,e){const n=ls.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var us,ls=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new ds),(t=>t.reset()));class ds{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function fs(t){Ke.setTimeout((()=>{throw t}),0)}function gs(t,e){us||ps(),ms||(us(),ms=!0),ys.add(t,e)}function ps(){var t=Ke.Promise.resolve(void 0);us=function(){t.then(vs)}}var ms=!1,ys=new hs;function vs(){for(var t;t=cs();){try{t.h.call(t.g)}catch(n){fs(n)}var e=ls;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ms=!1}function ws(t,e){rs.call(this),this.h=t||1,this.g=e||Ke,this.j=Je(this.lb,this),this.l=Date.now()}function Es(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Ts(t,e,n){if("function"===typeof t)n&&(t=Je(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Je(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ke.setTimeout(t,e||0)}function bs(t){t.g=Ts((()=>{t.g=null,t.i&&(t.i=!1,bs(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}tn(ws,rs),Fe=ws.prototype,Fe.ca=!1,Fe.R=null,Fe.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),is(this,"tick"),this.ca&&(Es(this),this.start()))}},Fe.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Fe.M=function(){ws.X.M.call(this),Es(this),delete this.g};class Is extends en{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:bs(this)}M(){super.M(),this.g&&(Ke.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(t){en.call(this),this.h=t,this.g={}}tn(Cs,en);var Ss=[];function _s(t,e,n,s){Array.isArray(n)||(n&&(Ss[0]=n.toString()),n=Ss);for(var r=0;r<n.length;r++){var i=Gn(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function As(t){Un(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Jn(t)}),t),t.g={}}function Ds(){this.g=!0}function Ns(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function ks(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Rs(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Os(t,n)+(s?" "+s:"")}))}function Ls(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Os(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return as(n)}catch(a){return e}}Cs.prototype.M=function(){Cs.X.M.call(this),As(this)},Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ds.prototype.Aa=function(){this.g=!1},Ds.prototype.info=function(){};var xs={},Ms=null;function Vs(){return Ms=Ms||new rs}function Ps(t){an.call(this,xs.Pa,t)}function Us(t){const e=Vs();is(e,new Ps(e))}function Fs(t,e){an.call(this,xs.STAT_EVENT,t),this.stat=e}function Bs(t){const e=Vs();is(e,new Fs(e,t))}function qs(t,e){an.call(this,xs.Qa,t),this.size=e}function js(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return Ke.setTimeout((function(){t()}),e)}xs.Pa="serverreachability",tn(Ps,an),xs.STAT_EVENT="statevent",tn(Fs,an),xs.Qa="timingevent",tn(qs,an);var Ks={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Hs={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function zs(){}function $s(t){return t.h||(t.h=t.i())}function Gs(){}zs.prototype.h=null;var Qs,Ws={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Xs(){an.call(this,"d")}function Ys(){an.call(this,"c")}function Js(){}function Zs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Cs(this),this.O=er,t=En?125:void 0,this.T=new ws(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new tr}function tr(){this.i=null,this.g="",this.h=!1}tn(Xs,an),tn(Ys,an),tn(Js,zs),Js.prototype.g=function(){return new XMLHttpRequest},Js.prototype.i=function(){return{}},Qs=new Js;var er=45e3,nr={},sr={};function rr(t,e,n){t.K=1,t.v=_r(Tr(e)),t.s=n,t.P=!0,ir(t,null)}function ir(t,e){t.F=Date.now(),hr(t),t.A=Tr(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Fr(n.i,"t",s),t.C=0,n=t.l.H,t.h=new tr,t.g=Ki(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Is(Je(t.La,t,t.g),t.N)),_s(t.S,t.g,"readystatechange",t.ib),e=t.H?Fn(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Us(),Ns(t.j,t.u,t.A,t.m,t.U,t.s)}function or(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function ar(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=cr(t,n),s==sr){4==e&&(t.o=4,Bs(14),r=!1),Rs(t.j,t.m,null,"[Incomplete Response]");break}if(s==nr){t.o=4,Bs(15),Rs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Rs(t.j,t.m,s,null),gr(t,s)}or(t)&&s!=sr&&s!=nr&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Bs(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mi(e),e.K=!0,Bs(11))):(Rs(t.j,t.m,n,"[Invalid Chunked Response]"),fr(t),dr(t))}function cr(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?sr:(n=Number(e.substring(n,s)),isNaN(n)?nr:(s+=1,s+n>e.length?sr:(e=e.substr(s,n),t.C=s+n,e)))}function hr(t){t.V=Date.now()+t.O,ur(t,t.O)}function ur(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=js(Je(t.gb,t),e)}function lr(t){t.B&&(Ke.clearTimeout(t.B),t.B=null)}function dr(t){0==t.l.G||t.I||Ui(t.l,t)}function fr(t){lr(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Es(t.T),As(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gr(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Gr(n.h,t)))if(!t.J&&Gr(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(h){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Pi(n),_i(n)}xi(n),Bs(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=js(Je(n.cb,n),6e3));if(1>=$r(n.h)&&n.ja){try{n.ja()}catch(h){}n.ja=void 0}}else Bi(n,11)}else if((t.J||n.g==t)&&Pi(n),!hn(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let h=r[e];if(n.T=h[0],h=h[1],2==n.G)if("c"==h[0]){n.I=h[1],n.ka=h[2];const e=h[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=h[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const u=h[5];null!=u&&"number"===typeof u&&0<u&&(s=1.5*u,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Qr(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,Sr(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ji(s,s.H?s.ka:null,s.V),o.J){Wr(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(lr(a),hr(a)),s.g=o}else Oi(s);0<n.i.length&&Di(n)}else"stop"!=h[0]&&"close"!=h[0]||Bi(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Bi(n,7):Si(n):"noop"!=h[0]&&n.l&&n.l.wa(h),n.A=0)}Us(4)}catch(h){}}function pr(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(ze(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function mr(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(ze(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function yr(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ze(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=mr(t),s=pr(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}Fe=Zs.prototype,Fe.setTimeout=function(t){this.O=t},Fe.ib=function(t){t=t.target;const e=this.L;e&&3==wi(t)?e.l():this.La(t)},Fe.La=function(t){try{if(t==this.g)t:{const u=wi(this.g);var e=this.g.Ea();const l=this.g.aa();if(!(3>u)&&(3!=u||En||this.g&&(this.h.h||this.g.fa()||Ei(this.g)))){this.I||4!=u||7==e||Us(8==e||0>=l?3:2),lr(this);var n=this.g.aa();this.Y=n;e:if(or(this)){var s=Ei(this.g);t="";var r=s.length,i=4==wi(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){fr(this),dr(this);var o="";break e}this.h.i=new Ke.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,ks(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hn(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,Bs(12),fr(this),dr(this);break t}Rs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gr(this,n)}this.P?(ar(this,u,o),En&&this.i&&3==u&&(_s(this.S,this.T,"tick",this.hb),this.T.start())):(Rs(this.j,this.m,o,null),gr(this,o)),4==u&&fr(this),this.i&&!this.I&&(4==u?Ui(this.l,this):(this.i=!1,hr(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Bs(12)):(this.o=0,Bs(13)),fr(this),dr(this)}}}catch(u){}},Fe.hb=function(){if(this.g){var t=wi(this.g),e=this.g.fa();this.C<e.length&&(lr(this),ar(this,t,e),this.i&&4!=t&&hr(this))}},Fe.cancel=function(){this.I=!0,fr(this)},Fe.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Ls(this.j,this.A),2!=this.K&&(Us(),Bs(17)),fr(this),this.o=2,dr(this)):ur(this,this.V-t)};var vr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wr(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Er(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Er){this.h=void 0!==e?e:t.h,br(this,t.j),this.s=t.s,this.g=t.g,Ir(this,t.m),this.l=t.l,e=t.i;var n=new Mr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Cr(this,n),this.o=t.o}else t&&(n=String(t).match(vr))?(this.h=!!e,br(this,n[1]||"",!0),this.s=Ar(n[2]||""),this.g=Ar(n[3]||"",!0),Ir(this,n[4]),this.l=Ar(n[5]||"",!0),Cr(this,n[6]||"",!0),this.o=Ar(n[7]||"")):(this.h=!!e,this.i=new Mr(null,this.h))}function Tr(t){return new Er(t)}function br(t,e,n){t.j=n?Ar(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ir(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cr(t,e,n){e instanceof Mr?(t.i=e,qr(t.i,t.h)):(n||(e=Dr(e,Or)),t.i=new Mr(e,t.h))}function Sr(t,e,n){t.i.set(e,n)}function _r(t){return Sr(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ar(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Dr(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Nr),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Nr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Er.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Dr(e,kr,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Dr(e,kr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Dr(n,"/"==n.charAt(0)?Lr:Rr,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Dr(n,xr)),t.join("")};var kr=/[#\/\?@]/g,Rr=/[#\?:]/g,Lr=/[#\?]/g,Or=/[#\?@]/g,xr=/#/g;function Mr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vr(t){t.g||(t.g=new Map,t.h=0,t.i&&wr(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Pr(t,e){Vr(t),e=Br(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ur(t,e){return Vr(t),e=Br(t,e),t.g.has(e)}function Fr(t,e,n){Pr(t,e),0<n.length&&(t.i=null,t.g.set(Br(t,e),rn(n)),t.h+=n.length)}function Br(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qr(t,e){e&&!t.j&&(Vr(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Pr(this,e),Fr(this,n,t))}),t)),t.j=e}Fe=Mr.prototype,Fe.add=function(t,e){Vr(this),this.i=null,t=Br(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Fe.forEach=function(t,e){Vr(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},Fe.oa=function(){Vr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let t=0;t<r.length;t++)n.push(e[s])}return n},Fe.W=function(t){Vr(this);let e=[];if("string"===typeof t)Ur(this,t)&&(e=e.concat(this.g.get(Br(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Fe.set=function(t,e){return Vr(this),this.i=null,t=Br(this,t),Ur(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Fe.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e},Fe.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};var jr=class{constructor(t,e){this.h=t,this.g=e}};function Kr(t){this.l=t||Hr,Ke.PerformanceNavigationTiming?(t=Ke.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(Ke.g&&Ke.g.Ga&&Ke.g.Ga()&&Ke.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hr=10;function zr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function $r(t){return t.h?1:t.g?t.g.size:0}function Gr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Qr(t,e){t.g?t.g.add(e):t.h=e}function Wr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Xr(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return rn(t.i)}function Yr(){}function Jr(){this.g=new Yr}function Zr(t,e,n){const s=n||"";try{yr(t,(function(t,n){let r=t;$e(t)&&(r=as(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function ti(t,e){const n=new Ds;if(Ke.Image){const s=new Image;s.onload=Ze(ei,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ze(ei,n,s,"TestLoadImage: error",!1,e),s.onabort=Ze(ei,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ze(ei,n,s,"TestLoadImage: timeout",!1,e),Ke.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function ei(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(i){}}function ni(t){this.l=t.ac||null,this.j=t.jb||!1}function si(t,e){rs.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ri,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Kr.prototype.cancel=function(){if(this.i=Xr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Yr.prototype.stringify=function(t){return Ke.JSON.stringify(t,void 0)},Yr.prototype.parse=function(t){return Ke.JSON.parse(t,void 0)},tn(ni,zs),ni.prototype.g=function(){return new si(this.l,this.j)},ni.prototype.i=function(t){return function(){return t}}({}),tn(si,rs);var ri=0;function ii(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function oi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ai(t)}function ai(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Fe=si.prototype,Fe.open=function(t,e){if(this.readyState!=ri)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ai(this)},Fe.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ke).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Fe.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,oi(this)),this.readyState=ri},Fe.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof Ke.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ii(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Fe.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?oi(this):ai(this),3==this.readyState&&ii(this)}},Fe.Va=function(t){this.g&&(this.response=this.responseText=t,oi(this))},Fe.Ua=function(t){this.g&&(this.response=t,oi(this))},Fe.ga=function(){this.g&&oi(this)},Fe.setRequestHeader=function(t,e){this.v.append(t,e)},Fe.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Fe.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(si.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ci=Ke.JSON.parse;function hi(t){rs.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ui,this.K=this.L=!1}tn(hi,rs);var ui="",li=/^https?$/i,di=["POST","PUT"];function fi(t){return vn&&Nn()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function gi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,pi(t),yi(t)}function pi(t){t.D||(t.D=!0,is(t,"complete"),is(t,"error"))}function mi(t){if(t.h&&"undefined"!=typeof je&&(!t.C[1]||4!=wi(t)||2!=t.aa()))if(t.v&&4==wi(t))Ts(t.Ha,0,t);else if(is(t,"readystatechange"),4==wi(t)){t.h=!1;try{const c=t.aa();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===c){var r=String(t.H).match(vr)[1]||null;if(!r&&Ke.self&&Ke.self.location){var i=Ke.self.location.protocol;r=i.substr(0,i.length-1)}s=!li.test(r?r.toLowerCase():"")}n=s}if(n)is(t,"complete"),is(t,"success");else{t.m=6;try{var o=2<wi(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.aa()+"]",pi(t)}}finally{yi(t)}}}function yi(t,e){if(t.g){vi(t);const s=t.g,r=t.C[0]?He:null;t.g=null,t.C=null,e||is(t,"ready");try{s.onreadystatechange=r}catch(n){}}}function vi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ke.clearTimeout(t.A),t.A=null)}function wi(t){return t.g?t.g.readyState:0}function Ei(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ui:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(io){return null}}function Ti(t){let e="";return Un(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function bi(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Ti(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Sr(t,e,n))}function Ii(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ci(t){this.Ca=0,this.i=[],this.j=new Ds,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ii("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ii("baseRetryDelayMs",5e3,t),this.bb=Ii("retryDelaySeedMs",1e4,t),this.$a=Ii("forwardChannelMaxRetries",2,t),this.ta=Ii("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Kr(t&&t.concurrentRequestLimit),this.Fa=new Jr,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Si(t){if(Ai(t),3==t.G){var e=t.U++,n=Tr(t.F);Sr(n,"SID",t.I),Sr(n,"RID",e),Sr(n,"TYPE","terminate"),Ri(t,n),e=new Zs(t,t.j,e,void 0),e.K=2,e.v=_r(Tr(n)),n=!1,Ke.navigator&&Ke.navigator.sendBeacon&&(n=Ke.navigator.sendBeacon(e.v.toString(),"")),!n&&Ke.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ki(e.l,null),e.g.da(e.v)),e.F=Date.now(),hr(e)}qi(t)}function _i(t){t.g&&(Mi(t),t.g.cancel(),t.g=null)}function Ai(t){_i(t),t.u&&(Ke.clearTimeout(t.u),t.u=null),Pi(t),t.h.cancel(),t.m&&("number"===typeof t.m&&Ke.clearTimeout(t.m),t.m=null)}function Di(t){zr(t.h)||t.m||(t.m=!0,gs(t.Ja,t),t.C=0)}function Ni(t,e){return!($r(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.C>=(t.Za?0:t.$a))&&(t.m=js(Je(t.Ja,t,e),Fi(t,t.C)),t.C++,!0))}function ki(t,e){var n;n=e?e.m:t.U++;const s=Tr(t.F);Sr(s,"SID",t.I),Sr(s,"RID",n),Sr(s,"AID",t.T),Ri(t,s),t.o&&t.s&&bi(s,t.o,t.s),n=new Zs(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Li(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Qr(t.h,n),rr(n,s,e)}function Ri(t,e){t.ia&&Un(t.ia,(function(t,n){Sr(e,n,t)})),t.l&&yr({},(function(t,n){Sr(e,n,t)}))}function Li(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Je(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].h;const c=r[a].g;if(n-=e,0>n)e=Math.max(0,r[a].h-100),o=!1;else try{Zr(c,t,"req"+n+"_")}catch(i){s&&s(c)}}if(o){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function Oi(t){t.g||t.u||(t.Z=1,gs(t.Ia,t),t.A=0)}function xi(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=js(Je(t.Ia,t),Fi(t,t.A)),t.A++,!0)}function Mi(t){null!=t.B&&(Ke.clearTimeout(t.B),t.B=null)}function Vi(t){t.g=new Zs(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Tr(t.sa);Sr(e,"RID","rpc"),Sr(e,"SID",t.I),Sr(e,"CI",t.L?"0":"1"),Sr(e,"AID",t.T),Sr(e,"TYPE","xmlhttp"),Ri(t,e),t.o&&t.s&&bi(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=_r(Tr(e)),n.s=null,n.P=!0,ir(n,t)}function Pi(t){null!=t.v&&(Ke.clearTimeout(t.v),t.v=null)}function Ui(t,e){var n=null;if(t.g==e){Pi(t),Mi(t),t.g=null;var s=2}else{if(!Gr(t.h,e))return;n=e.D,Wr(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Vs(),is(s,new qs(s,n)),Di(t)}else Oi(t);else if(r=e.o,3==r||0==r&&0<t.pa||!(1==s&&Ni(t,e)||2==s&&xi(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Bi(t,5);break;case 4:Bi(t,10);break;case 3:Bi(t,6);break;default:Bi(t,2)}}function Fi(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Bi(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=Je(t.kb,t);n||(n=new Er("//www.google.com/images/cleardot.gif"),Ke.location&&"http"==Ke.location.protocol||br(n,"https"),_r(n)),ti(n.toString(),s)}else Bs(2);t.G=0,t.l&&t.l.va(e),qi(t),Ai(t)}function qi(t){if(t.G=0,t.la=[],t.l){const e=Xr(t.h);0==e.length&&0==t.i.length||(on(t.la,e),on(t.la,t.i),t.h.i.length=0,rn(t.i),t.i.length=0),t.l.ua()}}function ji(t,e,n){var s=n instanceof Er?Tr(n):new Er(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),Ir(s,s.m);else{var r=Ke.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Er(null,void 0);s&&br(i,s),e&&(i.g=e),r&&Ir(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Sr(s,n,e),Sr(s,"VER",t.ma),Ri(t,s),s}function Ki(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new hi(new ni({jb:!0})):new hi(t.ra),e.Ka(t.H),e}function Hi(){}function zi(){if(vn&&!(10<=Number(Rn)))throw Error("Environmental error: no available transport.")}function $i(t,e){rs.call(this),this.g=new Ci(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!hn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!hn(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Wi(this)}function Gi(t){Xs.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Qi(){Ys.call(this),this.status=1}function Wi(t){this.g=t}Fe=hi.prototype,Fe.Ka=function(t){this.L=t},Fe.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qs.g(),this.C=this.u?$s(this.u):$s(Qs),this.g.onreadystatechange=Je(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void gi(this,i)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!==typeof s.keys||"function"!==typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=Ke.FormData&&t instanceof Ke.FormData,!(0<=sn(di,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vi(this),0<this.B&&((this.K=fi(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.qa,this)):this.A=Ts(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){gi(this,i)}},Fe.qa=function(){"undefined"!=typeof je&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,is(this,"timeout"),this.abort(8))},Fe.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,is(this,"complete"),is(this,"abort"),yi(this))},Fe.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yi(this,!0)),hi.X.M.call(this)},Fe.Ha=function(){this.s||(this.F||this.v||this.l?mi(this):this.fb())},Fe.fb=function(){mi(this)},Fe.aa=function(){try{return 2<wi(this)?this.g.status:-1}catch(t){return-1}},Fe.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Fe.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ci(e)}},Fe.Ea=function(){return this.m},Fe.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},Fe=Ci.prototype,Fe.ma=8,Fe.G=1,Fe.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Zs(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Fn(i),qn(i,this.S)):i=this.S),null!==this.o||this.N||(r.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Li(this,r,e),n=Tr(this.F),Sr(n,"RID",t),Sr(n,"CVER",22),this.D&&Sr(n,"X-HTTP-Session-Id",this.D),Ri(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Ti(i)))+"&"+e:this.o&&bi(n,this.o,i)),Qr(this.h,r),this.Ya&&Sr(n,"TYPE","init"),this.O?(Sr(n,"$req",e),Sr(n,"SID","null"),r.Z=!0,rr(r,n,null)):rr(r,n,e),this.G=2}}else 3==this.G&&(t?ki(this,t):0==this.i.length||zr(this.h)||ki(this))},Fe.Ia=function(){if(this.u=null,Vi(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=js(Je(this.eb,this),t)}},Fe.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Bs(10),_i(this),Vi(this))},Fe.cb=function(){null!=this.v&&(this.v=null,_i(this),xi(this),Bs(19))},Fe.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Bs(2)):(this.j.info("Failed to ping google.com"),Bs(1))},Fe=Hi.prototype,Fe.xa=function(){},Fe.wa=function(){},Fe.va=function(){},Fe.ua=function(){},Fe.Ra=function(){},zi.prototype.g=function(t,e){return new $i(t,e)},tn($i,rs),$i.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Bs(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ji(t,null,t.V),Di(t)},$i.prototype.close=function(){Si(this.g)},$i.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=as(t),t=n);e.i.push(new jr(e.ab++,t)),3==e.G&&Di(e)},$i.prototype.M=function(){this.g.l=null,delete this.j,Si(this.g),delete this.g,$i.X.M.call(this)},tn(Gi,Xs),tn(Qi,Ys),tn(Wi,Hi),Wi.prototype.xa=function(){is(this.g,"a")},Wi.prototype.wa=function(t){is(this.g,new Gi(t))},Wi.prototype.va=function(t){is(this.g,new Qi)},Wi.prototype.ua=function(){is(this.g,"b")},zi.prototype.createWebChannel=zi.prototype.g,$i.prototype.send=$i.prototype.u,$i.prototype.open=$i.prototype.m,$i.prototype.close=$i.prototype.close,Ks.NO_ERROR=0,Ks.TIMEOUT=8,Ks.HTTP_ERROR=6,Hs.COMPLETE="complete",Gs.EventType=Ws,Ws.OPEN="a",Ws.CLOSE="b",Ws.ERROR="c",Ws.MESSAGE="d",rs.prototype.listen=rs.prototype.N,hi.prototype.listenOnce=hi.prototype.O,hi.prototype.getLastError=hi.prototype.Oa,hi.prototype.getLastErrorCode=hi.prototype.Ea,hi.prototype.getStatus=hi.prototype.aa,hi.prototype.getResponseJson=hi.prototype.Sa,hi.prototype.getResponseText=hi.prototype.fa,hi.prototype.send=hi.prototype.da,hi.prototype.setWithCredentials=hi.prototype.Ka;var Xi=qe.createWebChannelTransport=function(){return new zi},Yi=qe.getStatEventTarget=function(){return Vs()},Ji=qe.ErrorCode=Ks,Zi=qe.EventType=Hs,to=qe.Event=xs,eo=qe.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},no=qe.FetchXmlHttpFactory=ni,so=qe.WebChannel=Gs,ro=qe.XhrIo=hi;const io="@firebase/firestore";
/**
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
 */class oo{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}oo.UNAUTHENTICATED=new oo(null),oo.GOOGLE_CREDENTIALS=new oo("google-credentials-uid"),oo.FIRST_PARTY=new oo("first-party-uid"),oo.MOCK_USER=new oo("mock-user");
/**
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
 */
let ao="9.14.0";
/**
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
 */const co=new ht("@firebase/firestore");function ho(){return co.logLevel}function uo(t,...e){if(co.logLevel<=rt.DEBUG){const n=e.map(go);co.debug(`Firestore (${ao}): ${t}`,...n)}}function lo(t,...e){if(co.logLevel<=rt.ERROR){const n=e.map(go);co.error(`Firestore (${ao}): ${t}`,...n)}}function fo(t,...e){if(co.logLevel<=rt.WARN){const n=e.map(go);co.warn(`Firestore (${ao}): ${t}`,...n)}}function go(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
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
 */var e}
/**
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
 */function po(t="Unexpected state"){const e=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: `+t;throw lo(e),new Error(e)}function mo(t,e){t||po()}function yo(t,e){return t}
/**
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
 */const vo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class wo extends H{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Eo{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class To{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class bo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(oo.UNAUTHENTICATED)))}shutdown(){}}class Io{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Co{constructor(t){this.t=t,this.currentUser=oo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Eo;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Eo,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{uo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(uo("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Eo)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(uo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(mo("string"==typeof e.accessToken),new To(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return mo(null===t||"string"==typeof t),new oo(t)}}class So{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=oo.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(mo(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class _o{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}getToken(){return Promise.resolve(new So(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(oo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ao{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Do{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&uo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,uo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{uo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):uo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(mo("string"==typeof t.token),this.A=t.token,new Ao(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function No(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
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
 */class ko{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=No(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function Ro(t,e){return t<e?-1:t>e?1:0}function Lo(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
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
 */
class Oo{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new wo(vo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new wo(vo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new wo(vo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new wo(vo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Oo.fromMillis(Date.now())}static fromDate(t){return Oo.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Oo(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ro(this.nanoseconds,t.nanoseconds):Ro(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class xo{constructor(t){this.timestamp=t}static fromTimestamp(t){return new xo(t)}static min(){return new xo(new Oo(0,0))}static max(){return new xo(new Oo(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class Mo{constructor(t,e,n){void 0===e?e=0:e>t.length&&po(),void 0===n?n=t.length-e:n>t.length-e&&po(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Mo.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Mo?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Vo extends Mo{construct(t,e,n){return new Vo(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new wo(vo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Vo(e)}static emptyPath(){return new Vo([])}}const Po=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Uo extends Mo{construct(t,e,n){return new Uo(t,e,n)}static isValidIdentifier(t){return Po.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Uo.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Uo(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new wo(vo.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new wo(vo.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new wo(vo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new wo(vo.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Uo(e)}static emptyPath(){return new Uo([])}}
/**
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
 */class Fo{constructor(t){this.path=t}static fromPath(t){return new Fo(Vo.fromString(t))}static fromName(t){return new Fo(Vo.fromString(t).popFirst(5))}static empty(){return new Fo(Vo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Vo.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Vo.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Fo(new Vo(t.slice()))}}
/**
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
 */class Bo{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}Bo.UNKNOWN_ID=-1;function qo(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=xo.fromTimestamp(1e9===s?new Oo(n+1,0):new Oo(n,s));return new Ko(r,Fo.empty(),e)}function jo(t){return new Ko(t.readTime,t.key,-1)}class Ko{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ko(xo.min(),Fo.empty(),-1)}static max(){return new Ko(xo.max(),Fo.empty(),-1)}}function Ho(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Fo.comparator(t.documentKey,e.documentKey),0!==n?n:Ro(t.largestBatchId,e.largestBatchId))}
/**
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
 */const zo="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $o{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
 */async function Go(t){if(t.code!==vo.FAILED_PRECONDITION||t.message!==zo)throw t;uo("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Qo{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&po(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Qo(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Qo?e:Qo.resolve(e)}catch(t){return Qo.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Qo.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Qo.reject(e)}static resolve(t){return new Qo(((e,n)=>{e(t)}))}static reject(t){return new Qo(((e,n)=>{n(t)}))}static waitFor(t){return new Qo(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=Qo.resolve(!1);for(const n of t)e=e.next((t=>t?Qo.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Qo(((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===r&&n(i)}),(t=>s(t)))}}))}static doWhile(t,e){return new Qo(((n,s)=>{const r=()=>{!0===t()?e().next((()=>{r()}),s):n()};r()}))}}
/**
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
 */function Wo(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */
class Xo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
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
 */function Yo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */Xo.at=-1;class ta{constructor(t,e){this.comparator=t,this.root=e||na.EMPTY}insert(t,e){return new ta(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,na.BLACK,null,null))}remove(t){return new ta(this.comparator,this.root.remove(t,this.comparator).copy(null,null,na.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ea(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ea(this.root,t,this.comparator,!1)}getReverseIterator(){return new ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ea(this.root,t,this.comparator,!0)}}class ea{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class na{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:na.RED,this.left=null!=s?s:na.EMPTY,this.right=null!=r?r:na.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new na(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return na.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return na.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,na.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,na.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw po();if(this.right.isRed())throw po();const t=this.left.check();if(t!==this.right.check())throw po();return t+(this.isRed()?0:1)}}na.EMPTY=null,na.RED=!0,na.BLACK=!1,na.EMPTY=new class{constructor(){this.size=0}get key(){throw po()}get value(){throw po()}get color(){throw po()}get left(){throw po()}get right(){throw po()}copy(t,e,n,s,r){return this}insert(t,e,n){return new na(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class sa{constructor(t){this.comparator=t,this.data=new ta(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ra(this.data.getIterator())}getIteratorFrom(t){return new ra(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof sa))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new sa(this.comparator);return e.data=t,e}}class ra{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class ia{constructor(t){this.fields=t,t.sort(Uo.comparator)}static empty(){return new ia([])}unionWith(t){let e=new sa(Uo.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ia(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Lo(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */
/**
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
 */
class oa{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new oa(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new oa(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ro(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}oa.EMPTY_BYTE_STRING=new oa("");const aa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ca(t){if(mo(!!t),"string"==typeof t){let e=0;const n=aa.exec(t);if(mo(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ha(t.seconds),nanos:ha(t.nanos)}}function ha(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ua(t){return"string"==typeof t?oa.fromBase64String(t):oa.fromUint8Array(t)}
/**
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
 */function la(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function da(t){const e=t.mapValue.fields.__previous_value__;return la(e)?da(e):e}function fa(t){const e=ca(t.mapValue.fields.__local_write_time__.timestampValue);return new Oo(e.seconds,e.nanos)}
/**
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
 */class ga{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class pa{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new pa("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof pa&&t.projectId===this.projectId&&t.database===this.database}}function ma(t){return null==t}function ya(t){return 0===t&&1/t==-1/0}
/**
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
 */
const va={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wa(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?la(t)?4:La(t)?9007199254740991:10:po()}function Ea(t,e){if(t===e)return!0;const n=wa(t);if(n!==wa(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fa(t).isEqual(fa(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ca(t.timestampValue),s=ca(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ua(t.bytesValue).isEqual(ua(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ha(t.geoPointValue.latitude)===ha(e.geoPointValue.latitude)&&ha(t.geoPointValue.longitude)===ha(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ha(t.integerValue)===ha(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ha(t.doubleValue),s=ha(e.doubleValue);return n===s?ya(n)===ya(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Lo(t.arrayValue.values||[],e.arrayValue.values||[],Ea);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Yo(n)!==Yo(s))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===s[r]||!Ea(n[r],s[r])))return!1;return!0}(t,e);default:return po()}}function Ta(t,e){return void 0!==(t.values||[]).find((t=>Ea(t,e)))}function ba(t,e){if(t===e)return 0;const n=wa(t),s=wa(e);if(n!==s)return Ro(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ro(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ha(t.integerValue||t.doubleValue),s=ha(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Ia(t.timestampValue,e.timestampValue);case 4:return Ia(fa(t),fa(e));case 5:return Ro(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ua(t),s=ua(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let r=0;r<n.length&&r<s.length;r++){const t=Ro(n[r],s[r]);if(0!==t)return t}return Ro(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ro(ha(t.latitude),ha(e.latitude));return 0!==n?n:Ro(ha(t.longitude),ha(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const t=ba(n[r],s[r]);if(t)return t}return Ro(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===va.mapValue&&e===va.mapValue)return 0;if(t===va.mapValue)return 1;if(e===va.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let o=0;o<s.length&&o<i.length;++o){const t=Ro(s[o],i[o]);if(0!==t)return t;const e=ba(n[s[o]],r[i[o]]);if(0!==e)return e}return Ro(s.length,i.length)}(t.mapValue,e.mapValue);default:throw po()}}function Ia(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ro(t,e);const n=ca(t),s=ca(e),r=Ro(n.seconds,s.seconds);return 0!==r?r:Ro(n.nanos,s.nanos)}function Ca(t){return Sa(t)}function Sa(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ca(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ua(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Fo.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Sa(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${Sa(t.fields[r])}`;return n+"}"}(t.mapValue):po();var e,n}function _a(t){return!!t&&"integerValue"in t}function Aa(t){return!!t&&"arrayValue"in t}function Da(t){return!!t&&"nullValue"in t}function Na(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ka(t){return!!t&&"mapValue"in t}function Ra(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jo(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ra(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ra(t.arrayValue.values[n]);return e}return Object.assign({},t)}function La(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class Oa{constructor(t){this.value=t}static empty(){return new Oa({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ka(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ra(e)}setAll(t){let e=Uo.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=Ra(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());ka(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ea(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];ka(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Jo(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new Oa(Ra(this.value))}}
/**
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
 */
class xa{constructor(t,e,n,s,r,i){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=r,this.documentState=i}static newInvalidDocument(t){return new xa(t,0,xo.min(),xo.min(),Oa.empty(),0)}static newFoundDocument(t,e,n){return new xa(t,1,e,xo.min(),n,0)}static newNoDocument(t,e){return new xa(t,2,e,xo.min(),Oa.empty(),0)}static newUnknownDocument(t,e){return new xa(t,3,e,xo.min(),Oa.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Oa.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Oa.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=xo.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof xa&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xa(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Ma{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ht=null}}function Va(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Ma(t,e,n,s,r,i,o)}function Pa(t){const e=yo(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Ca(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ma(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ca(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ca(t))).join(",")),e.ht=t}return e.ht}function Ua(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Ca(e.value)}`;var e})).join(", ")}]`),ma(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ca(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ca(t))).join(",")),`Target(${e})`}function Fa(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ja(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!Ea(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tc(t.startAt,e.startAt)&&tc(t.endAt,e.endAt)}function Ba(t){return Fo.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class qa extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new ja(t,e,n):"array-contains"===e?new $a(t,n):"in"===e?new Ga(t,n):"not-in"===e?new Qa(t,n):"array-contains-any"===e?new Wa(t,n):new qa(t,e,n)}static lt(t,e,n){return"in"===e?new Ka(t,n):new Ha(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(ba(e,this.value)):null!==e&&wa(this.value)===wa(e)&&this.ft(ba(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return po()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ja extends qa{constructor(t,e,n){super(t,e,n),this.key=Fo.fromName(n.referenceValue)}matches(t){const e=Fo.comparator(t.key,this.key);return this.ft(e)}}class Ka extends qa{constructor(t,e){super(t,"in",e),this.keys=za("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ha extends qa{constructor(t,e){super(t,"not-in",e),this.keys=za("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function za(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Fo.fromName(t.referenceValue)))}class $a extends qa{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Aa(e)&&Ta(e.arrayValue,this.value)}}class Ga extends qa{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ta(this.value.arrayValue,e)}}class Qa extends qa{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ta(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ta(this.value.arrayValue,e)}}class Wa extends qa{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Aa(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ta(this.value.arrayValue,t)))}}class Xa{constructor(t,e){this.position=t,this.inclusive=e}}class Ya{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ja(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Za(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?Fo.comparator(Fo.fromName(o.referenceValue),n.key):ba(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function tc(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ea(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class ec{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function nc(t,e,n,s,r,i,o,a){return new ec(t,e,n,s,r,i,o,a)}function sc(t){return new ec(t)}function rc(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ic(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function oc(t){for(const e of t.filters)if(e.dt())return e.field;return null}function ac(t){return null!==t.collectionGroup}function cc(t){const e=yo(t);if(null===e._t){e._t=[];const t=oc(e),n=ic(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new Ya(t)),e._t.push(new Ya(Uo.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ya(Uo.keyField(),t))}}}return e._t}function hc(t){const e=yo(t);if(!e.wt)if("F"===e.limitType)e.wt=Va(e.path,e.collectionGroup,cc(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of cc(e)){const e="desc"===r.dir?"asc":"desc";t.push(new Ya(r.field,e))}const n=e.endAt?new Xa(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Xa(e.startAt.position,e.startAt.inclusive):null;e.wt=Va(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function uc(t,e,n){return new ec(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return Fa(hc(t),hc(e))&&t.limitType===e.limitType}function dc(t){return`${Pa(hc(t))}|lt:${t.limitType}`}function fc(t){return`Query(target=${Ua(hc(t))}; limitType=${t.limitType})`}function gc(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Fo.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Za(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,cc(t),e))&&!(t.endAt&&!function(t,e,n){const s=Za(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,cc(t),e))}(t,e)}function pc(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function mc(t){return(e,n)=>{let s=!1;for(const r of cc(t)){const t=yc(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function yc(t,e,n){const s=t.field.isKeyField()?Fo.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?ba(s,r):po()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return po()}}
/**
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
 */function vc(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ya(e)?"-0":e}}function wc(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ec{constructor(){this._=void 0}}function Tc(t,e,n){return t instanceof Cc?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Sc?_c(t,e):t instanceof Ac?Dc(t,e):function(t,e){const n=Ic(t,e),s=kc(n)+kc(t.yt);return _a(n)&&_a(t.yt)?wc(s):vc(t.It,s)}(t,e)}function bc(t,e,n){return t instanceof Sc?_c(t,e):t instanceof Ac?Dc(t,e):n}function Ic(t,e){return t instanceof Nc?_a(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Cc extends Ec{}class Sc extends Ec{constructor(t){super(),this.elements=t}}function _c(t,e){const n=Rc(e);for(const s of t.elements)n.some((t=>Ea(t,s)))||n.push(s);return{arrayValue:{values:n}}}class Ac extends Ec{constructor(t){super(),this.elements=t}}function Dc(t,e){let n=Rc(e);for(const s of t.elements)n=n.filter((t=>!Ea(t,s)));return{arrayValue:{values:n}}}class Nc extends Ec{constructor(t,e){super(),this.It=t,this.yt=e}}function kc(t){return ha(t.integerValue||t.doubleValue)}function Rc(t){return Aa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */function Lc(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Sc&&e instanceof Sc||t instanceof Ac&&e instanceof Ac?Lo(t.elements,e.elements,Ea):t instanceof Nc&&e instanceof Nc?Ea(t.yt,e.yt):t instanceof Cc&&e instanceof Cc}(t.transform,e.transform)}class Oc{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Oc}static exists(t){return new Oc(void 0,t)}static updateTime(t){return new Oc(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Mc{}function Vc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new zc(t.key,Oc.none()):new Bc(t.key,t.data,Oc.none());{const n=t.data,s=Oa.empty();let r=new sa(Uo.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new qc(t.key,s,new ia(r.toArray()),Oc.none())}}function Pc(t,e,n){t instanceof Bc?function(t,e,n){const s=t.value.clone(),r=Kc(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof qc?function(t,e,n){if(!xc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Kc(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(jc(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Uc(t,e,n,s){return t instanceof Bc?function(t,e,n,s){if(!xc(t.precondition,e))return n;const r=t.value.clone(),i=Hc(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof qc?function(t,e,n,s){if(!xc(t.precondition,e))return n;const r=Hc(t.fieldTransforms,s,e),i=e.data;return i.setAll(jc(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return xc(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Fc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Lo(t,e,((t,e)=>Lc(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bc extends Mc{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qc extends Mc{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function jc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Kc(t,e,n){const s=new Map;mo(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,bc(o,a,n[r]))}return s}function Hc(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,Tc(t,i,e))}return s}class zc extends Mc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */
class $c{constructor(t){this.count=t}}
/**
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
 */var Gc,Qc;function Wc(t){if(void 0===t)return lo("GRPC error has no .code"),vo.UNKNOWN;switch(t){case Gc.OK:return vo.OK;case Gc.CANCELLED:return vo.CANCELLED;case Gc.UNKNOWN:return vo.UNKNOWN;case Gc.DEADLINE_EXCEEDED:return vo.DEADLINE_EXCEEDED;case Gc.RESOURCE_EXHAUSTED:return vo.RESOURCE_EXHAUSTED;case Gc.INTERNAL:return vo.INTERNAL;case Gc.UNAVAILABLE:return vo.UNAVAILABLE;case Gc.UNAUTHENTICATED:return vo.UNAUTHENTICATED;case Gc.INVALID_ARGUMENT:return vo.INVALID_ARGUMENT;case Gc.NOT_FOUND:return vo.NOT_FOUND;case Gc.ALREADY_EXISTS:return vo.ALREADY_EXISTS;case Gc.PERMISSION_DENIED:return vo.PERMISSION_DENIED;case Gc.FAILED_PRECONDITION:return vo.FAILED_PRECONDITION;case Gc.ABORTED:return vo.ABORTED;case Gc.OUT_OF_RANGE:return vo.OUT_OF_RANGE;case Gc.UNIMPLEMENTED:return vo.UNIMPLEMENTED;case Gc.DATA_LOSS:return vo.DATA_LOSS;default:return po()}}(Qc=Gc||(Gc={}))[Qc.OK=0]="OK",Qc[Qc.CANCELLED=1]="CANCELLED",Qc[Qc.UNKNOWN=2]="UNKNOWN",Qc[Qc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qc[Qc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qc[Qc.NOT_FOUND=5]="NOT_FOUND",Qc[Qc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qc[Qc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qc[Qc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qc[Qc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qc[Qc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qc[Qc.ABORTED=10]="ABORTED",Qc[Qc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qc[Qc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qc[Qc.INTERNAL=13]="INTERNAL",Qc[Qc.UNAVAILABLE=14]="UNAVAILABLE",Qc[Qc.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Xc{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,r]of n)if(this.equalsFn(s,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return void(s[r]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Jo(this.inner,((e,n)=>{for(const[s,r]of n)t(s,r)}))}isEmpty(){return Zo(this.inner)}size(){return this.innerSize}}
/**
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
 */const Yc=new ta(Fo.comparator);function Jc(){return Yc}const Zc=new ta(Fo.comparator);function th(...t){let e=Zc;for(const n of t)e=e.insert(n.key,n);return e}function eh(t){let e=Zc;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function nh(){return rh()}function sh(){return rh()}function rh(){return new Xc((t=>t.toString()),((t,e)=>t.isEqual(e)))}new ta(Fo.comparator);const ih=new sa(Fo.comparator);function oh(...t){let e=ih;for(const n of t)e=e.add(n);return e}const ah=new sa(Ro);function ch(){return ah}
/**
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
 */class hh{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,uh.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new hh(xo.min(),s,ch(),Jc(),oh())}}class uh{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new uh(n,e,oh(),oh(),oh())}}
/**
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
 */class lh{constructor(t,e,n,s){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=s}}class dh{constructor(t,e){this.targetId=t,this.At=e}}class fh{constructor(t,e,n=oa.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class gh{constructor(){this.Rt=0,this.bt=yh(),this.Pt=oa.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=oh(),e=oh(),n=oh();return this.bt.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:po()}})),new uh(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=yh()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Ot(t){this.Vt=!0,this.bt=this.bt.remove(t)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class ph{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Jc(),this.qt=mh(),this.Kt=new sa(Ro)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:po()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,s=this.Xt(e);if(s){const t=s.target;if(Ba(t))if(0===n){const n=new Fo(t.path);this.jt(e,n,xa.newNoDocument(n,xo.min()))}else mo(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,s)=>{const r=this.Xt(s);if(r){if(n.current&&Ba(r.target)){const e=new Fo(r.target.path);null!==this.Ut.get(e)||this.ee(s,e)||this.jt(s,e,xa.newNoDocument(e,t))}n.Dt&&(e.set(s,n.xt()),n.Nt())}}));let n=oh();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const s=new hh(t,e,this.Kt,this.Ut,n);return this.Ut=Jc(),this.qt=mh(),this.Kt=new sa(Ro),s}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const s=this.zt(t);this.ee(t,e)?s.kt(e,1):s.Ot(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Mt(t){this.zt(t).Mt()}zt(t){let e=this.Lt.get(t);return e||(e=new gh,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new sa(Ro),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||uo("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new gh),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function mh(){return new ta(Fo.comparator)}function yh(){return new ta(Fo.comparator)}
/**
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
 */const vh=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),wh=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Eh{constructor(t,e){this.databaseId=t,this.gt=e}}function Th(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bh(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Ih(t){return mo(!!t),xo.fromTimestamp(function(t){const e=ca(t);return new Oo(e.seconds,e.nanos)}(t))}function Ch(t,e){return function(t){return new Vo(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Sh(t){const e=Vo.fromString(t);return mo(Kh(e)),e}function _h(t,e){const n=Sh(e);if(n.get(1)!==t.databaseId.projectId)throw new wo(vo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new wo(vo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Fo(kh(n))}function Ah(t,e){return Ch(t.databaseId,e)}function Dh(t){const e=Sh(t);return 4===e.length?Vo.emptyPath():kh(e)}function Nh(t){return new Vo(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kh(t){return mo(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Rh(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:po()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.gt?(mo(void 0===e||"string"==typeof e),oa.fromBase64String(e||"")):(mo(void 0===e||e instanceof Uint8Array),oa.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?vo.UNKNOWN:Wc(t.code);return new wo(e,t.message||"")}(o);n=new fh(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=_h(t,s.document.name),i=Ih(s.document.updateTime),o=new Oa({mapValue:{fields:s.document.fields}}),a=xa.newFoundDocument(r,i,o),c=s.targetIds||[],h=s.removedTargetIds||[];n=new lh(c,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=_h(t,s.document),i=s.readTime?Ih(s.readTime):xo.min(),o=xa.newNoDocument(r,i),a=s.removedTargetIds||[];n=new lh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=_h(t,s.document),i=s.removedTargetIds||[];n=new lh([],i,r,null)}else{if(!("filter"in e))return po();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new $c(s),i=t.targetId;n=new dh(i,r)}}return n}function Lh(t,e){return{documents:[Ah(t,e.path)]}}function Oh(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Ah(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ah(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Na(t.value))return{unaryFilter:{field:Fh(t.field),op:"IS_NAN"}};if(Da(t.value))return{unaryFilter:{field:Fh(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Na(t.value))return{unaryFilter:{field:Fh(t.field),op:"IS_NOT_NAN"}};if(Da(t.value))return{unaryFilter:{field:Fh(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fh(t.field),op:Uh(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Fh(t.field),direction:Ph(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.gt||ma(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function xh(t){let e=Dh(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){mo(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Vh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Ya(Bh(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ma(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Xa(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new Xa(n,e)}(n.endAt)),nc(e,r,o,i,a,"F",c,h)}function Mh(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return po()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Vh(t){return t?void 0!==t.unaryFilter?[jh(t)]:void 0!==t.fieldFilter?[qh(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Vh(t))).reduce(((t,e)=>t.concat(e))):po():[]}function Ph(t){return vh[t]}function Uh(t){return wh[t]}function Fh(t){return{fieldPath:t.canonicalString()}}function Bh(t){return Uo.fromServerFormat(t.fieldPath)}function qh(t){return qa.create(Bh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return po()}}(t.fieldFilter.op),t.fieldFilter.value)}function jh(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bh(t.unaryFilter.field);return qa.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Bh(t.unaryFilter.field);return qa.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bh(t.unaryFilter.field);return qa.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Bh(t.unaryFilter.field);return qa.create(r,"!=",{nullValue:"NULL_VALUE"});default:return po()}}function Kh(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */const Hh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zh=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$h=zh;
/**
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
 */
/**
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
 */
class Gh{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Pc(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Uc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Uc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=sh();return this.mutations.forEach((s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=Vc(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(xo.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),oh())}isEqual(t){return this.batchId===t.batchId&&Lo(this.mutations,t.mutations,((t,e)=>Fc(t,e)))&&Lo(this.baseMutations,t.baseMutations,((t,e)=>Fc(t,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */
class Qh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class Wh{constructor(t,e,n,s,r=xo.min(),i=xo.min(),o=oa.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new Wh(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Wh(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Wh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
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
 */class Xh{constructor(t){this.re=t}}function Yh(t){const e=xh({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?uc(e,e.limit,"L"):e}
/**
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
 */class Jh{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(ha(t.integerValue));else if("doubleValue"in t){const n=ha(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),ya(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(ua(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?La(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):po()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const s of Object.keys(n))this._e(s,e),this.ae(n[s],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const s of n)this.ae(s,e)}ge(t,e){this.le(e,37),Fo.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}Jh.Te=new Jh;
/**
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
 */
class Zh{constructor(){this.Ye=new tu}addToCollectionParentIndex(t,e){return this.Ye.add(e),Qo.resolve()}getCollectionParents(t,e){return Qo.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return Qo.resolve()}deleteFieldIndex(t,e){return Qo.resolve()}getDocumentsMatchingTarget(t,e){return Qo.resolve(null)}getIndexType(t,e){return Qo.resolve(0)}getFieldIndexes(t,e){return Qo.resolve([])}getNextCollectionGroupToUpdate(t){return Qo.resolve(null)}getMinOffset(t,e){return Qo.resolve(Ko.min())}getMinOffsetFromCollectionGroup(t,e){return Qo.resolve(Ko.min())}updateCollectionGroup(t,e,n){return Qo.resolve()}updateIndexEntries(t,e){return Qo.resolve()}}class tu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new sa(Vo.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new sa(Vo.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class eu{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new eu(t,eu.DEFAULT_COLLECTION_PERCENTILE,eu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */eu.DEFAULT_COLLECTION_PERCENTILE=10,eu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,eu.DEFAULT=new eu(41943040,eu.DEFAULT_COLLECTION_PERCENTILE,eu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),eu.DISABLED=new eu(-1,0,0);
/**
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
 */
class nu{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new nu(0)}static vn(){return new nu(-1)}}
/**
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
 */
/**
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
 */
class su{constructor(){this.changes=new Xc((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xa.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Qo.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
 * @license
 * Copyright 2022 Google LLC
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
 */
class ru{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class iu{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Uc(n.mutation,t,ia.empty(),Oo.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,oh()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=oh()){const s=nh();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=th();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=nh();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,oh())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let r=Jc();const i=rh(),o=rh();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof qc)?r=r.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),Uc(o.mutation,e,o.mutation.getFieldMask(),Oo.now()))})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new ru(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=rh();let s=new ta(((t,e)=>t-e)),r=oh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||ia.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||oh()).add(t);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,h=sh();c.forEach((t=>{if(!r.has(t)){const s=Vc(e.get(t),n.get(t));null!==s&&h.set(t,s),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,h))}return Qo.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Fo.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ac(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):Qo.resolve(nh());let o=-1,a=r;return i.next((e=>Qo.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Qo.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,oh()))).next((t=>({batchId:o,changes:eh(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Fo(e)).next((t=>{let e=th();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let r=th();return this.indexManager.getCollectionParents(t,s).next((i=>Qo.forEach(i,(i=>{const o=function(t,e){return new ec(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,xa.newInvalidDocument(n)))}));let n=th();return s.forEach(((s,r)=>{const i=t.get(s);void 0!==i&&Uc(i.mutation,r,ia.empty(),Oo.now()),gc(e,r)&&(n=n.insert(s,r))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Qo.resolve(xa.newInvalidDocument(e))}}
/**
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
 */class ou{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return Qo.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Ih(n.createTime)}),Qo.resolve()}getNamedQuery(t,e){return Qo.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Yh(t.bundledQuery),readTime:Ih(t.readTime)}}(e)),Qo.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class au{constructor(){this.overlays=new ta(Fo.comparator),this.es=new Map}getOverlay(t,e){return Qo.resolve(this.overlays.get(e))}getOverlays(t,e){const n=nh();return Qo.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ue(t,e,s)})),Qo.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.es.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),Qo.resolve()}getOverlaysForCollection(t,e,n){const s=nh(),r=e.length+1,i=new Fo(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Qo.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new ta(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=nh(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=nh(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return Qo.resolve(o)}ue(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Qh(e,n));let r=this.es.get(e);void 0===r&&(r=oh(),this.es.set(e,r)),this.es.set(e,r.add(n.key))}}
/**
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
 */class cu{constructor(){this.ns=new sa(hu.ss),this.rs=new sa(hu.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new hu(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new hu(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new Fo(new Vo([])),n=new hu(e,t),s=new hu(e,t+1),r=[];return this.rs.forEachInRange([n,s],(t=>{this.cs(t),r.push(t.key)})),r}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new Fo(new Vo([])),n=new hu(e,t),s=new hu(e,t+1);let r=oh();return this.rs.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new hu(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class hu{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return Fo.comparator(t.key,e.key)||Ro(t._s,e._s)}static os(t,e){return Ro(t._s,e._s)||Fo.comparator(t.key,e.key)}}
/**
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
 */class uu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new sa(hu.ss)}checkEmpty(t){return Qo.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Gh(r,e,n,s);this.mutationQueue.push(i);for(const o of s)this.gs=this.gs.add(new hu(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Qo.resolve(i)}lookupMutationBatch(t,e){return Qo.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ps(n),r=s<0?0:s;return Qo.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Qo.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Qo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new hu(e,0),s=new hu(e,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,s],(t=>{const e=this.ys(t._s);r.push(e)})),Qo.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new sa(Ro);return e.forEach((t=>{const e=new hu(t,0),s=new hu(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],(t=>{n=n.add(t._s)}))})),Qo.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;Fo.isDocumentKey(r)||(r=r.child(""));const i=new hu(new Fo(r),0);let o=new sa(Ro);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)}),i),Qo.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){mo(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Qo.forEach(e.mutations,(s=>{const r=new hu(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new hu(e,0),s=this.gs.firstAfterOrEqual(n);return Qo.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Qo.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class lu{constructor(t){this.Es=t,this.docs=new ta(Fo.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Qo.resolve(n?n.document.mutableCopy():xa.newInvalidDocument(e))}getEntries(t,e){let n=Jc();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():xa.newInvalidDocument(t))})),Qo.resolve(n)}getAllFromCollection(t,e,n){let s=Jc();const r=new Fo(e.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Ho(jo(r),n)<=0||(s=s.insert(r.key,r.mutableCopy()))}return Qo.resolve(s)}getAllFromCollectionGroup(t,e,n,s){po()}As(t,e){return Qo.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new du(this)}getSize(t){return Qo.resolve(this.size)}}class du extends su{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)})),Qo.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
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
 */class fu{constructor(t){this.persistence=t,this.Rs=new Xc((t=>Pa(t)),Fa),this.lastRemoteSnapshotVersion=xo.min(),this.highestTargetId=0,this.bs=0,this.Ps=new cu,this.targetCount=0,this.vs=nu.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),Qo.resolve()}getLastRemoteSnapshotVersion(t){return Qo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Qo.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),Qo.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),Qo.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new nu(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,Qo.resolve()}updateTargetData(t,e){return this.Dn(e),Qo.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,Qo.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Rs.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Qo.waitFor(r).next((()=>s))}getTargetCount(t){return Qo.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return Qo.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),Qo.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),Qo.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),Qo.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return Qo.resolve(n)}containsKey(t,e){return Qo.resolve(this.Ps.containsKey(e))}}
/**
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
 */class gu{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new Xo(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new fu(this),this.indexManager=new Zh,this.remoteDocumentCache=function(t){return new lu(t)}((t=>this.referenceDelegate.xs(t))),this.It=new Xh(e),this.Ns=new ou(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new au,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new uu(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){uo("MemoryPersistence","Starting transaction:",t);const s=new pu(this.Ss.next());return this.referenceDelegate.ks(),n(s).next((t=>this.referenceDelegate.Os(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ms(t,e){return Qo.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class pu extends $o{constructor(t){super(),this.currentSequenceNumber=t}}class mu{constructor(t){this.persistence=t,this.Fs=new cu,this.$s=null}static Bs(t){return new mu(t)}get Ls(){if(this.$s)return this.$s;throw po()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),Qo.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),Qo.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),Qo.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Qo.forEach(this.Ls,(n=>{const s=Fo.fromPath(n);return this.Us(t,s).next((t=>{t||e.removeEntry(s,xo.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return Qo.or([()=>Qo.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
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
 */
/**
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
 */
class yu{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}static Ci(t,e){let n=oh(),s=oh();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new yu(t,e.fromCache,n,s)}}
/**
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
 */class vu{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next((r=>r||this.Oi(t,e,s,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(rc(e))return Qo.resolve(null);let n=hc(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=uc(e,null,"F"),n=hc(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const r=oh(...s);return this.Ni.getDocuments(t,r).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Fi(e,s);return this.$i(e,i,r,n.readTime)?this.ki(t,uc(e,null,"F")):this.Bi(t,i,e,n)}))))})))))}Oi(t,e,n,s){return rc(e)||s.isEqual(xo.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((r=>{const i=this.Fi(e,r);return this.$i(e,i,n,s)?this.Mi(t,e):(ho()<=rt.DEBUG&&uo("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fc(e)),this.Bi(t,i,e,qo(s,-1)))}))}Fi(t,e){let n=new sa(mc(t));return e.forEach(((e,s)=>{gc(t,s)&&(n=n.add(s))})),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mi(t,e){return ho()<=rt.DEBUG&&uo("QueryEngine","Using full collection scan to execute query:",fc(e)),this.Ni.getDocumentsMatchingQuery(t,e,Ko.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class wu{constructor(t,e,n,s){this.persistence=t,this.Li=e,this.It=s,this.Ui=new ta(Ro),this.qi=new Xc((t=>Pa(t)),Fa),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new iu(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function Eu(t,e,n,s){return new wu(t,e,n,s)}async function Tu(t,e){const n=yo(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((r=>(s=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=oh();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function bu(t){const e=yo(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Iu(t,e){const n=yo(t),s=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const o=[];e.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,i.addedDocuments,a))));let h=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?h=h.withResumeToken(oa.EMPTY_BYTE_STRING,xo.min()).withLastLimboFreeSnapshotVersion(xo.min()):i.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(i.resumeToken,s)),r=r.insert(a,h),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,h,i)&&o.push(n.Cs.updateTargetData(t,h))}));let a=Jc(),c=oh();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Cu(t,i,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!s.isEqual(xo.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Qo.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=r,t)))}function Cu(t,e,n){let s=oh(),r=oh();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Jc();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(xo.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):uo("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Wi:s,zi:r}}))}function Su(t,e){const n=yo(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Cs.getTargetData(t,e).next((r=>r?(s=r,Qo.resolve(s)):n.Cs.allocateTargetId(t).next((r=>(s=new Wh(e,r,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ui.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function _u(t,e,n){const s=yo(t),r=s.Ui.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(t=>s.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Wo(t))throw t;uo("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ui=s.Ui.remove(e),s.qi.delete(r.target)}function Au(t,e,n){const s=yo(t);let r=xo.min(),i=oh();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=yo(t),r=s.qi.get(n);return void 0!==r?Qo.resolve(s.Ui.get(r)):s.Cs.getTargetData(e,n)}(s,t,hc(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>s.Li.getDocumentsMatchingQuery(t,e,n?r:xo.min(),n?i:oh()))).next((t=>(Du(s,pc(e),t),{documents:t,Hi:i})))))}function Du(t,e,n){let s=t.Ki.get(e)||xo.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ki.set(e,s)}class Nu{constructor(){this.activeTargetIds=ch()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ku{constructor(){this.Lr=new Nu,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new Nu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class Ru{qr(t){}shutdown(){}}
/**
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
 */class Lu{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){uo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){uo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const Ou={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class xu{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
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
 */class Mu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,s,r){const i=this.ho(t,e);uo("RestConnection","Sending: ",i,n);const o={};return this.lo(o,s,r),this.fo(t,i,o,n).then((t=>(uo("RestConnection","Received: ",t),t)),(e=>{throw fo("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}_o(t,e,n,s,r,i){return this.ao(t,e,n,s,r)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+ao,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=Ou[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,s){return new Promise(((r,i)=>{const o=new ro;o.setWithCredentials(!0),o.listenOnce(Zi.COMPLETE,(()=>{var e;try{switch(o.getLastErrorCode()){case Ji.NO_ERROR:const n=o.getResponseJson();uo("Connection","XHR received:",JSON.stringify(n)),r(n);break;case Ji.TIMEOUT:uo("Connection",'RPC "'+t+'" timed out'),i(new wo(vo.DEADLINE_EXCEEDED,"Request time out"));break;case Ji.HTTP_ERROR:const s=o.getStatus();if(uo("Connection",'RPC "'+t+'" failed with status:',s,"response text:",o.getResponseText()),s>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const n=null===(e=t)||void 0===e?void 0:e.error;if(n&&n.status&&n.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(vo).indexOf(e)>=0?e:vo.UNKNOWN}(n.status);i(new wo(t,n.message))}else i(new wo(vo.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new wo(vo.UNAVAILABLE,"Connection failed."));break;default:po()}}finally{uo("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Xi(),i=Yi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new no({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");uo("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let h=!1,u=!1;const l=new xu({Hr:t=>{u?uo("Connection","Not sending because WebChannel is closed:",t):(h||(uo("Connection","Opening WebChannel transport."),c.open(),h=!0),uo("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,so.EventType.OPEN,(()=>{u||uo("Connection","WebChannel transport opened.")})),d(c,so.EventType.CLOSE,(()=>{u||(u=!0,uo("Connection","WebChannel transport closed"),l.io())})),d(c,so.EventType.ERROR,(t=>{u||(u=!0,fo("Connection","WebChannel transport errored:",t),l.io(new wo(vo.UNAVAILABLE,"The operation could not be completed")))})),d(c,so.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];mo(!!n);const s=n,r=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(r){uo("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Gc[t];if(void 0!==e)return Wc(e)}(t),n=r.message;void 0===e&&(e=vo.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),u=!0,l.io(new wo(e,n)),c.close()}else uo("Connection","WebChannel received:",n),l.ro(n)}})),d(i,to.STAT_EVENT,(t=>{t.stat===eo.PROXY?uo("Connection","Detected buffering proxy"):t.stat===eo.NOPROXY&&uo("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.so()}),0),l}}
/**
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
 */
/**
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
 */function Vu(){return"undefined"!=typeof document?document:null}
/**
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
 */function Pu(t){return new Eh(t,!0)}class Uu{constructor(t,e,n=1e3,s=1.5,r=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),s=Math.max(0,e-n);s>0&&uo("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
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
 */class Fu{constructor(t,e,n,s,r,i,o,a){this.Hs=t,this.vo=n,this.Vo=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Uu(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===vo.RESOURCE_EXHAUSTED?(lo(e.toString()),lo("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===vo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new wo(vo.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return uo("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(uo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Bu extends Fu{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.It=r}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=Rh(this.It,t),n=function(t){if(!("targetChange"in t))return xo.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?xo.min():e.readTime?Ih(e.readTime):xo.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=Nh(this.It),e.addTarget=function(t,e){let n;const s=e.target;return n=Ba(s)?{documents:Lh(t,s)}:{query:Oh(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=bh(t,e.resumeToken):e.snapshotVersion.compareTo(xo.min())>0&&(n.readTime=Th(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=Mh(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=Nh(this.It),e.removeTarget=t,this.Bo(e)}}
/**
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
 */
class qu extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.It=s,this.nu=!1}su(){if(this.nu)throw new wo(vo.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.ao(t,e,n,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===vo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new wo(vo.UNKNOWN,t.toString())}))}_o(t,e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection._o(t,e,n,r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===vo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new wo(vo.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class ju{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(lo(e),this.ou=!1):uo("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
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
 */class Ku{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr((t=>{n.enqueueAndForget((async()=>{Ju(this)&&(uo("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=yo(t);e._u.add(4),await zu(e),e.gu.set("Unknown"),e._u.delete(4),await Hu(e)}(this))}))})),this.gu=new ju(n,s)}}async function Hu(t){if(Ju(t))for(const e of t.wu)await e(!0)}async function zu(t){for(const e of t.wu)await e(!1)}function $u(t,e){const n=yo(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Yu(n)?Xu(n):ol(n).ko()&&Qu(n,e))}function Gu(t,e){const n=yo(t),s=ol(n);n.du.delete(e),s.ko()&&Wu(n,e),0===n.du.size&&(s.ko()?s.Fo():Ju(n)&&n.gu.set("Unknown"))}function Qu(t,e){t.yu.Mt(e.targetId),ol(t).zo(e)}function Wu(t,e){t.yu.Mt(e),ol(t).Ho(e)}function Xu(t){t.yu=new ph({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),ol(t).start(),t.gu.uu()}function Yu(t){return Ju(t)&&!ol(t).No()&&t.du.size>0}function Ju(t){return 0===yo(t)._u.size}function Zu(t){t.yu=void 0}async function tl(t){t.du.forEach(((e,n)=>{Qu(t,e)}))}async function el(t,e){Zu(t),Yu(t)?(t.gu.hu(e),Xu(t)):t.gu.set("Unknown")}async function nl(t,e,n){if(t.gu.set("Online"),e instanceof fh&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.du.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.du.delete(s),t.yu.removeTarget(s))}(t,e)}catch(n){uo("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await sl(t,n)}else if(e instanceof lh?t.yu.Gt(e):e instanceof dh?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(xo.min()))try{const e=await bu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.du.get(s);r&&t.du.set(s,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(oa.EMPTY_BYTE_STRING,n.snapshotVersion)),Wu(t,e);const s=new Wh(n.target,e,1,n.sequenceNumber);Qu(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){uo("RemoteStore","Failed to raise snapshot:",e),await sl(t,e)}}async function sl(t,e,n){if(!Wo(e))throw e;t._u.add(1),await zu(t),t.gu.set("Offline"),n||(n=()=>bu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{uo("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Hu(t)}))}async function rl(t,e){const n=yo(t);n.asyncQueue.verifyOperationInProgress(),uo("RemoteStore","RemoteStore received new credentials");const s=Ju(n);n._u.add(3),await zu(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Hu(n)}async function il(t,e){const n=yo(t);e?(n._u.delete(2),await Hu(n)):e||(n._u.add(2),await zu(n),n.gu.set("Unknown"))}function ol(t){return t.pu||(t.pu=function(t,e,n){const s=yo(t);return s.su(),new Bu(e,s.connection,s.authCredentials,s.appCheckCredentials,s.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(t.datastore,t.asyncQueue,{Yr:tl.bind(null,t),Zr:el.bind(null,t),Wo:nl.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),Yu(t)?Xu(t):t.gu.set("Unknown")):(await t.pu.stop(),Zu(t))}))),t.pu}
/**
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
 */
class al{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new Eo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new al(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new wo(vo.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cl(t,e){if(lo("AsyncQueue",`${e}: ${t}`),Wo(t))return new wo(vo.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class hl{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Fo.comparator(e.key,n.key):(t,e)=>Fo.comparator(t.key,e.key),this.keyedMap=th(),this.sortedSet=new ta(this.comparator)}static emptySet(t){return new hl(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof hl))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new hl;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class ul{constructor(){this.Tu=new ta(Fo.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):po():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ll{constructor(t,e,n,s,r,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new ll(t,e,hl.emptySet(e),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&lc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
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
 */class dl{constructor(){this.Au=void 0,this.listeners=[]}}class fl{constructor(){this.queries=new Xc((t=>dc(t)),lc),this.onlineState="Unknown",this.Ru=new Set}}async function gl(t,e){const n=yo(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new dl),r)try{i.Au=await n.onListen(s)}catch(t){const n=cl(t,`Initialization of query '${fc(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&vl(n)}async function pl(t,e){const n=yo(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function ml(t,e){const n=yo(t);let s=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(r)&&(s=!0);e.Au=r}}s&&vl(n)}function yl(t,e,n){const s=yo(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function vl(t){t.Ru.forEach((t=>{t.next()}))}class wl{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ll(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=ll.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
/**
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
 */
/**
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
 */
class El{constructor(t){this.key=t}}class Tl{constructor(t){this.key=t}}class bl{constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=oh(),this.mutatedKeys=oh(),this.Gu=mc(t),this.Qu=new hl(this.Gu)}get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new ul,s=e?e.Qu:this.Qu;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const h=s.get(t),u=gc(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Gu(u,a)>0||c&&this.Gu(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(i=i.add(u),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Qu:i,zu:n,$i:o,mutatedKeys:r}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Eu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return po()}};return n(t)-n(e)}
/**
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
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const i=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==r.length||a?{snapshot:new ll(this.query,t.Qu,s,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ul,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=oh(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new Tl(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new El(n))})),e}tc(t){this.Uu=t.Hi,this.Ku=oh();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return ll.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Il{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Cl{constructor(t){this.key=t,this.nc=!1}}class Sl{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new Xc((t=>dc(t)),lc),this.rc=new Map,this.oc=new Set,this.uc=new ta(Fo.comparator),this.cc=new Map,this.ac=new cu,this.hc={},this.lc=new Map,this.fc=nu.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function _l(t,e){const n=Bl(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const t=await Su(n.localStore,hc(e));n.isPrimaryClient&&$u(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await Al(n,e,s,"current"===i,t.resumeToken)}return r}async function Al(t,e,n,s,r){t._c=(e,n,s)=>async function(t,e,n,s){let r=e.view.Wu(n);r.$i&&(r=await Au(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,r))));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return xl(t,e.targetId,o.Xu),o.snapshot}(t,e,n,s);const i=await Au(t.localStore,e,!0),o=new bl(e,i.Hi),a=o.Wu(i.documents),c=uh.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,r),h=o.applyChanges(a,t.isPrimaryClient,c);xl(t,n,h.Xu);const u=new Il(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),h.snapshot}async function Dl(t,e){const n=yo(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter((t=>!lc(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _u(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Gu(n.remoteStore,s.targetId),Ll(n,s.targetId)})).catch(Go)):(Ll(n,s.targetId),await _u(n.localStore,s.targetId,!0))}async function Nl(t,e){const n=yo(t);try{const t=await Iu(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.cc.get(e);s&&(mo(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.nc=!0:t.modifiedDocuments.size>0?mo(s.nc):t.removedDocuments.size>0&&(mo(s.nc),s.nc=!1))})),await Pl(n,t,e)}catch(t){await Go(t)}}function kl(t,e,n){const s=yo(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ic.forEach(((n,s)=>{const r=s.view.bu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=yo(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.bu(e)&&(s=!0)})),s&&vl(n)}(s.eventManager,e),t.length&&s.sc.Wo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Rl(t,e,n){const s=yo(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let t=new ta(Fo.comparator);t=t.insert(i,xa.newNoDocument(i,xo.min()));const n=oh().add(i),r=new hh(xo.min(),new Map,new sa(Ro),t,n);await Nl(s,r),s.uc=s.uc.remove(i),s.cc.delete(e),Vl(s)}else await _u(s.localStore,e,!1).then((()=>Ll(s,e,n))).catch(Go)}function Ll(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||Ol(t,e)}))}function Ol(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(Gu(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Vl(t))}function xl(t,e,n){for(const s of n)s instanceof El?(t.ac.addReference(s.key,e),Ml(t,s)):s instanceof Tl?(uo("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Ol(t,s.key)):po()}function Ml(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(uo("SyncEngine","New document in limbo: "+n),t.oc.add(s),Vl(t))}function Vl(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Fo(Vo.fromString(e)),s=t.fc.next();t.cc.set(s,new Cl(n)),t.uc=t.uc.insert(n,s),$u(t.remoteStore,new Wh(hc(sc(n.path)),s,2,Xo.at))}}async function Pl(t,e,n){const s=yo(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach(((t,a)=>{o.push(s._c(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=yu.Ci(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.sc.Wo(r),await async function(t,e){const n=yo(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Qo.forEach(e,(e=>Qo.forEach(e.Si,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Qo.forEach(e.Di,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Wo(t))throw t;uo("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.Ui.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.Ui=n.Ui.insert(t,r)}}}(s.localStore,i))}async function Ul(t,e){const n=yo(t);if(!n.currentUser.isEqual(e)){uo("SyncEngine","User change. New user:",e.toKey());const t=await Tu(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new wo(vo.CANCELLED,e))}))})),t.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Pl(n,t.ji)}}function Fl(t,e){const n=yo(t),s=n.cc.get(e);if(s&&s.nc)return oh().add(s.key);{let t=oh();const s=n.rc.get(e);if(!s)return t;for(const e of s){const s=n.ic.get(e);t=t.unionWith(s.view.ju)}return t}}function Bl(t){const e=yo(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rl.bind(null,e),e.sc.Wo=ml.bind(null,e.eventManager),e.sc.wc=yl.bind(null,e.eventManager),e}class ql{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Pu(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Eu(this.persistence,new vu,t.initialUser,this.It)}yc(t){return new gu(mu.Bs,this.It)}gc(t){return new ku}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>kl(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ul.bind(null,this.syncEngine),await il(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new fl}createDatastore(t){const e=Pu(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Mu(s));var s;return function(t,e,n,s){return new qu(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>kl(this.syncEngine,t,0),i=Lu.C()?new Lu:new Ru,new Ku(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new Sl(t,e,n,s,r,i);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=yo(t);uo("RemoteStore","RemoteStore shutting down."),e._u.add(5),await zu(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
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
 */function Kl(t,e,n){if(!n)throw new wo(vo.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hl(t,e,n,s){if(!0===e&&!0===s)throw new wo(vo.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zl(t){if(Fo.isDocumentKey(t))throw new wo(vo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $l(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":po()}function Gl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new wo(vo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$l(t);throw new wo(vo.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
const Ql=new Map;class Wl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new wo(vo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new wo(vo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Hl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class Xl{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new wo(vo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new wo(vo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new bo;switch(t.type){case"gapi":const e=t.client;return new _o(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new wo(vo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ql.get(t);e&&(uo("ComponentProvider","Removing Datastore"),Ql.delete(t),e.terminate())}(this),Promise.resolve()}}function Yl(t,e,n,s={}){var r;const i=(t=Gl(t,Xl))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&fo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=oo.MOCK_USER;else{e=j(s.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new wo(vo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new oo(i)}t._authCredentials=new Io(new To(e,n))}}
/**
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
 */class Jl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new td(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jl(this.firestore,t,this._key)}}class Zl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Zl(this.firestore,t,this._query)}}class td extends Zl{constructor(t,e,n){super(t,e,sc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jl(this.firestore,null,new Fo(t))}withConverter(t){return new td(this.firestore,t,this._path)}}function ed(t,e,...n){if(t=X(t),Kl("collection","path",e),t instanceof Xl){const s=Vo.fromString(e,...n);return zl(s),new td(t,null,s)}{if(!(t instanceof Jl||t instanceof td))throw new wo(vo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Vo.fromString(e,...n));return zl(s),new td(t.firestore,null,s)}}
/**
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
 */
/**
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
 */
class nd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):lo("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
 */
/**
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
 */
class sd{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=oo.UNAUTHENTICATED,this.clientId=ko.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{uo("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(uo("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new wo(vo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Eo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=cl(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function rd(t,e){t.asyncQueue.verifyOperationInProgress(),uo("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Tu(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function id(t,e){t.asyncQueue.verifyOperationInProgress();const n=await od(t);uo("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>rl(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>rl(e.remoteStore,n))),t.onlineComponents=e}async function od(t){return t.offlineComponents||(uo("FirestoreClient","Using default OfflineComponentProvider"),await rd(t,new ql)),t.offlineComponents}async function ad(t){return t.onlineComponents||(uo("FirestoreClient","Using default OnlineComponentProvider"),await id(t,new jl)),t.onlineComponents}async function cd(t){const e=await ad(t),n=e.eventManager;return n.onListen=_l.bind(null,e.syncEngine),n.onUnlisten=Dl.bind(null,e.syncEngine),n}function hd(t,e,n={}){const s=new Eo;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,r){const i=new nd({next:n=>{e.enqueueAndForget((()=>pl(t,o))),n.fromCache&&"server"===s.source?r.reject(new wo(vo.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new wl(n,i,{includeMetadataChanges:!0,Nu:!0});return gl(t,o)}(await cd(t),t.asyncQueue,e,n,s))),s.promise}class ud{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Uu(this,"async_queue_retry"),this.Wc=()=>{const t=Vu();t&&uo("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=Vu();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.Uc){this.Uc=!0,this.Qc=t||!1;const e=Vu();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.Uc)return new Promise((()=>{}));const e=new Eo;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(tn){if(!Wo(tn))throw tn;uo("AsyncQueue","Operation failed with retryable error: "+tn)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw lo("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const s=al.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.qc.push(s),s}zc(){this.Kc&&po()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.qc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.qc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.qc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.qc.indexOf(t);this.qc.splice(e,1)}}class ld extends Xl{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new ud,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gd(this),this._firestoreClient.terminate()}}function dd(t,e){const n="object"==typeof t?t:Te(),s="string"==typeof t?t:e||"(default)",r=pe(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const t=F("firestore");t&&Yl(r,...t)}return r}function fd(t){return t._firestoreClient||gd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function gd(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new ga(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}
/**
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
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new sd(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
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
 */
/**
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
 */
class pd{constructor(t){this._byteString=t}static fromBase64String(t){try{return new pd(oa.fromBase64String(t))}catch(t){throw new wo(vo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new pd(oa.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class md{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new wo(vo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Uo(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */
class yd{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new wo(vo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new wo(vo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ro(this._lat,t._lat)||Ro(this._long,t._long)}}
/**
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
 */const vd=new RegExp("[~\\*/\\[\\]]");function wd(t,e,n){if(e.search(vd)>=0)throw Ed(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new md(...e.split("."))._internalPath}catch(s){throw Ed(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ed(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new wo(vo.INVALID_ARGUMENT,a+t+c)}
/**
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
 */
class Td{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Jl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new bd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Id("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class bd extends Td{data(){return super.data()}}function Id(t,e){return"string"==typeof e?wd(t,e):e instanceof md?e._internalPath:e._delegate._internalPath}
/**
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
 */function Cd(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new wo(vo.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
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
 */
class Sd{convertValue(t,e="none"){switch(wa(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ha(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ua(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw po()}}convertObject(t,e){const n={};return Jo(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new yd(ha(t.latitude),ha(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=da(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(fa(t));default:return null}}convertTimestamp(t){const e=ca(t);return new Oo(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Vo.fromString(t);mo(Kh(n));const s=new pa(n.get(1),n.get(3)),r=new Fo(n.popFirst(5));return s.isEqual(e)||lo(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
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
 */
/**
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
 */
class _d{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ad extends Td{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Dd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Id("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Dd extends Ad{data(t={}){return super.data(t)}}class Nd{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new _d(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Dd(this._firestore,this._userDataWriter,n.key,n,new _d(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new wo(vo.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new Dd(t._firestore,t._userDataWriter,n.doc.key,n.doc,new _d(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Dd(t._firestore,t._userDataWriter,e.doc.key,e.doc,new _d(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:kd(e.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function kd(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return po()}}class Rd extends Sd{constructor(t){super(),this.firestore=t}convertBytes(t){return new pd(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Jl(this.firestore,null,e)}}function Ld(t){t=Gl(t,Zl);const e=Gl(t.firestore,ld),n=fd(e),s=new Rd(e);return Cd(t._query),hd(n,t._query).then((n=>new Nd(e,s,t,n)))}!function(t,e=!0){!function(t){ao=t}(we),ge(new Y("firestore",((t,{instanceIdentifier:n,options:s})=>{const r=t.getProvider("app").getImmediate(),i=new ld(new Co(t.getProvider("auth-internal")),new Do(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new wo(vo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pa(t.options.projectId,e)}
/**
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
 */(r,n),r);return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i}),"PUBLIC").setMultipleInstances(!0)),be(io,"3.7.3",t),be(io,"3.7.3","esm2017")}();var Od="firebase",xd="9.14.0";
/**
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
 */
be(Od,xd,"app");const Md={apiKey:"AIzaSyBoTwXU84Yum4YluMbOLijrh4cCtTnTS3Y",authDomain:"ku-d29cc.firebaseapp.com",projectId:"ku-d29cc",storageBucket:"ku-d29cc.appspot.com",messagingSenderId:"1076753040628",appId:"1:1076753040628:web:ae8952052c7b7abd158aa1"},Vd=Ee(Md),Pd=dd(Vd),Ud=(0,C.Q_)("animals",{state:()=>({animals:[]}),getters:{getAnimals:t=>t.animals},actions:{async fetchData(){const t=await Ld(ed(Pd,"animals"));this.animals=t.docs.map((t=>t.data())),console.log(t.docs.map((t=>t.data())))}}});var Fd={data(){return{animals:[]}},components:{CardAnimal:I,Navbar:h.Z},name:"Animal",comments:{Navbar:h.Z},async mounted(){await Ud().fetchData(),this.animals=Ud().getAnimals}};const Bd=(0,T.Z)(Fd,[["render",c],["__scopeId","data-v-551f7a33"]]);var qd=Bd}}]);
//# sourceMappingURL=845.f4924035.js.map