import{e as t}from"./base-3.1.1.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e(e,r){return(s,n,o)=>{const i=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof n?s:o??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return t(s,n,{get(){let t=e.call(this);return void 0===t&&(t=i(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return t(s,n,{get(){return i(this)}})}}export{e};
