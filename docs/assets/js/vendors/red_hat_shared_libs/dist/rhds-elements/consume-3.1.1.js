import{a as t}from"./context-3.1.1.js";
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c({context:c,subscribe:e}){return(i,n)=>{"object"==typeof n?n.addInitializer(function(){new t(this,{context:c,callback:t=>{i.set.call(this,t)},subscribe:e})}):i.constructor.addInitializer(i=>{new t(i,{context:c,callback:t=>{i[n]=t},subscribe:e})})}}export{c};
