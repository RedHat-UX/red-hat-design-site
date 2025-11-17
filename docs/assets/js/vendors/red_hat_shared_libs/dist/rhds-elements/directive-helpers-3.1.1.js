import{Z as e}from"./lit-html-3.1.1.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:t}=e,o=e=>null===e||"object"!=typeof e&&"function"!=typeof e,i=(e,t)=>void 0===t?void 0!==e?._$litType$:e?._$litType$===t,n=e=>null!=e?._$litType$?.h,$=e=>void 0===e.strings,A=()=>document.createComment(""),_=(e,o,i)=>{const n=e._$AA.parentNode,$=void 0===o?e._$AB:o._$AA;if(void 0===i){const o=n.insertBefore(A(),$),_=n.insertBefore(A(),$);i=new t(o,_,e,e.options)}else{const t=i._$AB.nextSibling,o=i._$AM,A=o!==e;if(A){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==o._$AU&&i._$AP(t)}if(t!==$||A){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;n.insertBefore(e,$),e=t}}}return i},r=(e,t,o=e)=>(e._$AI(t,o),e),l={},s=(e,t=l)=>e._$AH=t,f=e=>e._$AH,c=e=>{e._$AR(),e._$AA.remove()};export{c as M,i as e,$ as f,o as i,n as l,s as m,f as p,_ as s,r as v};
