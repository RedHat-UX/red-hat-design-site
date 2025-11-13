import{i as t}from"./context-provider-3.1.1.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e({context:e}){return(r,n)=>{const s=new WeakMap;if("object"==typeof n)return{get(){return r.get.call(this)},set(t){return s.get(this).setValue(t),r.set.call(this,t)},init(r){return s.set(this,new t(this,{context:e,initialValue:r})),r}};{r.constructor.addInitializer(r=>{s.set(r,new t(r,{context:e}))});const i=Object.getOwnPropertyDescriptor(r,n);let o;if(void 0===i){const t=new WeakMap;o={get(){return t.get(this)},set(e){s.get(this).setValue(e),t.set(this,e)},configurable:!0,enumerable:!0}}else{const t=i.set;o={...i,set(e){s.get(this).setValue(e),t?.call(this,e)}}}return void Object.defineProperty(r,n,o)}}}export{e};
