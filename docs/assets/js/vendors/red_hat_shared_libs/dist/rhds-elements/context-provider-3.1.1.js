import{s as t}from"./context-3.1.1.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,s=!1){const e=s||!Object.is(t,this.o);this.o=t,e&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:s}]of this.subscriptions)t(this.o,s)},void 0!==t&&(this.value=t)}addCallback(t,s,e){if(!e)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:s});const{disposer:o}=this.subscriptions.get(t);t(this.value,o)}clearCallbacks(){this.subscriptions.clear()}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends Event{constructor(t,s){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=s}}class o extends s{constructor(s,e,o){super(void 0!==e.context?e.initialValue:o),this.onContextRequest=t=>{if(t.context!==this.context)return;const s=t.contextTarget??t.composedPath()[0];s!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,s,t.subscribe))},this.onProviderRequest=s=>{if(s.context!==this.context)return;if((s.contextTarget??s.composedPath()[0])===this.host)return;const e=new Set;for(const[s,{consumerHost:o}]of this.subscriptions)e.has(s)||(e.add(s),o.dispatchEvent(new t(this.context,o,s,!0)));s.stopPropagation()},this.host=s,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new e(this.context,this.host))}}export{o as i};
