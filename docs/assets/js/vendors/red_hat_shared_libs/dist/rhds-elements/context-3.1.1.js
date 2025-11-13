import"./custom-element-3.1.1.js";import"./lit-html-3.1.1.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class t extends Event{constructor(t,e,s,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=s,this.subscribe=i??!1}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class e{constructor(t,e,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new t(this.context,this.host,this.t,this.subscribe))}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s{constructor(){this.pendingContextRequests=new Map,this.onContextProvider=e=>{const s=this.pendingContextRequests.get(e.context);if(void 0===s)return;this.pendingContextRequests.delete(e.context);const{requests:i}=s;for(const{elementRef:s,callbackRef:n}of i){const i=s.deref(),c=n.deref();void 0===i||void 0===c||i.dispatchEvent(new t(e.context,i,c,!0))}},this.onContextRequest=t=>{if(!0!==t.subscribe)return;const e=t.contextTarget??t.composedPath()[0],s=t.callback;let i=this.pendingContextRequests.get(t.context);void 0===i&&this.pendingContextRequests.set(t.context,i={callbacks:new WeakMap,requests:[]});let n=i.callbacks.get(e);void 0===n&&i.callbacks.set(e,n=new WeakSet),n.has(s)||(n.add(s),i.requests.push({elementRef:new WeakRef(e),callbackRef:new WeakRef(s)}))}}attach(t){t.addEventListener("context-request",this.onContextRequest),t.addEventListener("context-provider",this.onContextProvider)}detach(t){t.removeEventListener("context-request",this.onContextRequest),t.removeEventListener("context-provider",this.onContextProvider)}}let i;function n(...t){return i??(i=function(){const t=new s;return t.attach(document.body),t}()),function(t){return t}(...t)}export{e as a,n as c,t as s};
