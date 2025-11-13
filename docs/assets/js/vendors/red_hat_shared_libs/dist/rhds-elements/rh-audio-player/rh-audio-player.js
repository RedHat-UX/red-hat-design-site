import{c as t,b as e,i,_ as a,a as o,t as r}from"../custom-element-3.1.1.js";import{x as s,E as n}from"../lit-html-3.1.1.js";import{n as l}from"../property-3.1.1.js";import{o as d,R as h}from"../rh-menu-3.1.1.js";import{e as c}from"../class-map-3.1.1.js";import{o as p}from"../style-map-3.1.1.js";import{c as u}from"../color-palettes-3.1.1.js";import{t as m}from"../themable-3.1.1.js";import{F as f}from"../rh-tooltip-3.1.1.js";import{H as b,a as g}from"../consumer-3.1.1.js";import{L as v}from"../logger-3.1.1.js";import"../rh-avatar/rh-avatar.js";import{o as y}from"../if-defined-3.1.1.js";import"../rh-icon/rh-icon.js";import{S as x}from"../slot-controller-3.1.1.js";import{r as w}from"../state-3.1.1.js";import"../rh-surface/rh-surface.js";import"../base-3.1.1.js";import"../random-3.1.1.js";import"../roving-tabindex-controller-3.1.1.js";import"../bound-3.1.1.js";import"../directive-3.1.1.js";import"../context-provider-3.1.1.js";import"../context-3.1.1.js";import"../ScreenSizeController-3.1.1.js";import"../media-3.1.1.js";import"../unsafe-html-3.1.1.js";import"../observes-3.1.1.js";import"../internals-controller-3.1.1.js";var k,_,$,z,R,M,S,T,j,A,H,C,W,U;class q{constructor(i,a){k.add(this),this.host=i,_.set(this,"en-US"),this.language=t(this,_,"f"),$.set(this,void 0),z.set(this,new MutationObserver(()=>this.update())),R.set(this,new Map),e(this,$,new v(i),"f");for(const[e,i]of Object.entries(a))t(this,R,"f").set(e,new Map(Object.entries(i)))}hostConnected(){t(this,z,"f").observe(this.host,{childList:!0,attributes:!0,attributeFilter:["lang"]}),this.update()}hostDisconnected(){t(this,z,"f").disconnect()}update(){this.language=t(this,k,"m",M).call(this),t(this,k,"m",T).call(this),this.host.requestUpdate()}async loadTranslation(e,i=this.language,a=!1){if(e&&(a||!t(this,R,"f").has(i)))try{const t=await fetch(e).then(t=>t.json());return this.join(t,i)}catch(a){t(this,$,"f").error(`Could not load microcopy for ${i} from ${e}.`),t(this,k,"m",S).call(this)}this.update()}get(e,i=this.language){return t(this,R,"f").get(i)?.get(e)??e}set(e,i,a=this.language){return t(this,k,"m",j).call(this,a),t(this,R,"f").get(a)?.set(e,i),this.host.requestUpdate(),this}clear(e=this.language){t(this,R,"f").get(e)?.clear(),this.host.requestUpdate()}clearAll(){t(this,R,"f").clear(),this.host.requestUpdate()}delete(e,i=this.language){const a=t(this,R,"f").get(i)?.delete(e)??!1;return this.host.requestUpdate(),a}join(e,i=this.language){t(this,k,"m",j).call(this,i);const a=t(this,R,"f").get(i);for(const[t,i]of Object.entries(e))a.set(t,i);return this.host.requestUpdate(),this}toJSON(){return Object.fromEntries([...t(this,R,"f").entries()].map(([t,e])=>[t,Object.fromEntries(e)]))}}_=new WeakMap,$=new WeakMap,z=new WeakMap,R=new WeakMap,k=new WeakSet,M=function(){let t=this.host.getAttribute("lang")||this.host.closest("[lang]")?.getAttribute("lang"),e=this.host.getRootNode();for(;!t&&e instanceof ShadowRoot;)t=e.host.closest("[lang]")?.getAttribute("lang"),e=e.host.getRootNode();return t??this.language},S=function(){t(this,$,"f").log(`Using ${t(this,_,"f")} instead.`),this.language!==t(this,_,"f")&&(this.language=t(this,_,"f"),t(this,k,"m",T).call(this),this.host.requestUpdate())},T=function(){this.language=t(this,k,"m",M).call(this);for(const e of this.host.querySelectorAll?.('script[type="application/json"][data-language]')??[]){const{language:i}=e.dataset;if(i){let a={};try{a=JSON.parse(e.textContent??"{}")}catch{t(this,$,"f").error("Could not parse microcopy...",i),t(this,k,"m",S).call(this)}t(this,R,"f").set(i,new Map(Object.entries(a)))}}},j=function(e){t(this,R,"f").has(e)||t(this,R,"f").set(e,new Map)};const E=i`:host{display:inline;font-size:var(--rh-font-size-body-text-md,1rem)}:host([voice]){display:block}:host(:first-of-type),:host(:first-of-type)>:first-child{margin-block-start:0}:host(:last-of-type),:host(:last-of-type)>:last-child{margin-block-end:0}a{text-decoration:none;color:currentcolor}a[id$=text]{border-block-end:1px dotted #0000}a[id$=text]:hover{background-color:var(--_static-surface-color);border-block-end-color:var(--_static-underline-color)}a[active][id$=text]{color:var(--_static-text-color);background-color:var(--_static-highlight-color)}a:empty{display:none}h1,h2,h3,h4,h5,h6{font-size:var(--rh-font-size-body-text-md,1rem)!important;margin-block-end:0}#voice{font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)}#start{font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace)}a #start{text-decoration:underline}a:hover #start{text-decoration:none}`,L=t=>{const e=t??0;return void 0===t?"":`${Math.floor(e%3600/60).toString().padStart(2,"0")}:${Math.floor(e%60).toString().padStart(2,"0")}`},D=/(?:(?<hh>\d{2}):)?(?:(?<mm>\d{2}):)(?<ss>\d{2})(?:\.(?<ms>\d+))?/,B=t=>{if(!t)return;const e=t.match(D);if(e){const{hh:t=0,mm:i=0,ss:a=0,ms:o=0}=e.groups??{};return 3600*t+60*i+1*a+o/1e3}};let I=class extends o{constructor(){super(...arguments),A.add(this),this.active=!1,H.set(this,new b(this))}get startTime(){return this.start?B(this.start):void 0}get endTime(){return this.end?B(this.end):void 0}get downloadText(){const{textContent:t}=this,e=this.voice||"",i=(t||"").trim(),a=(e||"").trim(),o=this.end?[this.start,this.end].join(" - "):this.start,r=a.length>0?[o,a].join(": "):o;return i.length>0?[r,i].join("\n"):r}render(){const{start:e,voice:i}=this;return s`${t(this,A,"a",C)?t(this,H,"f").wrap(t(this,A,"m",W).call(this,s`
      <span id="start">${e}</span> - <span id="voice">${i}</span>`,!0)):n}${t(this,A,"m",W).call(this,s`
      
      <slot></slot>
    `)}`}};var F,N,O,P;H=new WeakMap,A=new WeakSet,C=function(){return!!this.voice&&this.voice.trim()?.length>0},W=function(e=n,i=!1){const a=[this.id,this.startTime&&`t${this.startTime}-`,this.endTime,i?"heading":"text"].filter(Boolean).join("");return s`
      <a id="${a}"
         href="#${a}"
         ?active="${this.active&&!i}"
         @click=${t(this,A,"m",U)}>${e}</a>`},U=function(){this.dispatchEvent(new Event("cueseek",{bubbles:!0}))},I.styles=[E],a([l()],I.prototype,"start",void 0),a([l()],I.prototype,"end",void 0),a([l()],I.prototype,"text",void 0),a([l({reflect:!0})],I.prototype,"voice",void 0),a([l({type:Boolean,reflect:!0})],I.prototype,"active",void 0),I=a([r("rh-cue")],I);const J=i`:host{display:flex;overflow:hidden;flex-direction:column;align-items:stretch;width:100%;min-height:1em}:host([hidden]),[hidden]{display:none!important}#outer{position:relative;width:100%;min-width:6em;flex:1 0 auto;overflow-y:visible;--_fade-color:light-dark(var(--rh-audio-player-scrolling-text-overflow-background-color,var(--rh-color-surface-lightest,#fff)),var(--rh-audio-player-scrolling-text-overflow-background-color,var(--rh-color-surface-darkest,#151515)))}#outer:dir(rtl){text-align:right}#inner{margin:0 auto;white-space:nowrap;overflow:hidden;position:absolute;top:0;bottom:0;min-height:100%}slot{display:inline-block}::slotted(*){margin:0!important}#fade{position:absolute;height:150%;content:" ";top:-25%;right:0;width:3em;box-shadow:-1em 0 1.5em 0 var(--_fade-color) inset}#fade:dir(rtl){left:0;right:unset;box-shadow:1em 0 1.5em 0 var(--_fade-color) inset}slot.scrolling.scrollable{animation:ltr var(--_animation-ms,1s) ease-out}slot.scrolling.scrollable:dir(rtl){animation:rtl var(--_animation-ms,1s) ease-out}@keyframes ltr{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes rtl{0%{transform:translate(0)}to{transform:translate(100%)}}`;let V=class extends o{constructor(){super(...arguments),F.add(this),N.set(this,!1),O.set(this,void 0)}connectedCallback(){super.connectedCallback(),e(this,O,getComputedStyle(this),"f")}firstUpdated(){const t=this.textContent?.length||0,e=Math.round(400*t);this.style.setProperty("--_animation-ms",e/1e3+"s"),this.requestUpdate()}render(){const e=t(this,O,"f")?.direction??"auto",i=t(this,N,"f"),a=t(this,F,"a",P);return s`
      <div id="outer"
           class="${c({[e]:!0})}"
           @mouseover=${this.startScrolling}
           @mouseout=${this.stopScrolling}
           @focus=${this.startScrolling}
           @blur=${this.stopScrolling}>
        <div id="inner">
          
          <slot class="${c({scrolling:i,scrollable:a})}"></slot>
        </div>${a?s`
        <span id="fade"></span>`:""}
      </div>`}stopScrolling(){e(this,N,!1,"f"),this.requestUpdate()}startScrolling(){t(this,F,"a",P)&&(e(this,N,!0,"f"),this.requestUpdate())}};var G,K;N=new WeakMap,O=new WeakMap,F=new WeakSet,P=function(){const t=this.shadowRoot?.getElementById?.("outer");return(t?.scrollWidth??0)>(t?.clientWidth??0)},V.styles=[J],V=a([r("rh-audio-player-scrolling-text-overflow"),m],V);const Q=i`:host{display:block;border-top:1px solid var(--_border-color)}:host([hidden]),[hidden]{display:none!important}[part=heading]{margin:var(--rh-space-lg,16px) 0;height:26px}::slotted([slot=heading]),slot[name=heading] *{margin-bottom:0!important;margin-top:0!important}::slotted([slot=heading]),::slotted([slot=title]),slot[name=heading] *{font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);font-weight:var(--rh-font-weight-heading-medium,500);line-height:var(--rh-line-height-heading,1.3)}::slotted([slot=title]){margin:0 0 var(--rh-space-lg,16px);padding:0}::slotted([slot=series]){letter-spacing:var(--rh-letter-spacing-body-text,.0125rem);font-size:var(--rh-font-size-body-text-xs,.75rem);font-weight:var(--rh-font-weight-heading-medium,500);margin:0 0 var(--rh-space-md,8px);padding:0}::-webkit-scrollbar{width:.5em}::-webkit-scrollbar-track{box-shadow:inset 0 0 .15em var(--_static-border-color)}::-webkit-scrollbar-thumb{background-color:var(--_static-border-color)}::-webkit-scrollbar-thumb:hover{cursor:pointer}`,X=i`:host{--rh-avatar-size:var(--rh-size-icon-05,48px)}.media-info{display:var(--_about-mediatitle-display,none)}#title{display:var(--_about-heading-display,flex)}#mediaseries{letter-spacing:var(--rh-letter-spacing-body-text,.0125rem);font-size:var(--rh-font-size-body-text-xs,.75rem);line-height:var(--rh-line-height-body-text,1.5);height:18px;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-body-text-medium,500);margin:0 0 var(--rh-space-md,8px)}#mediatitle{min-height:26px}#mediatitle>*{font-size:var(--rh-font-size-heading-xs,1.25rem);font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-heading-medium,500);line-height:var(--rh-line-height-heading,1.3);margin:0 0 var(--rh-space-lg,16px);height:26px;padding:0}[part=heading]{height:unset;min-height:26px}[part=body]{max-height:114px;overflow-y:auto;border:1px solid var(--_border-color);color:var(--_static-text-color);background-color:var(--_static-surface-color);padding:var(--_player-padding,var(--rh-space-md,8px))}div[part=body] ::slotted(:first-of-type){margin-block-start:0}::slotted([slot=profile]:nth-of-type(2)),div[part=body] ::slotted(:last-of-type){margin-block-end:0}::slotted([slot=profile]:nth-of-type(n+3)){display:none!important}[part=profile]{display:grid;gap:var(--rh-space-lg,16px);margin-block-start:var(--rh-space-lg,16px)}`;let Y=class extends o{constructor(){super(...arguments),G.set(this,new b(this)),K.set(this,void 0)}render(){const{label:e,mediaseries:i,mediatitle:a}=this,o=(this.content?.length??0)>=1,r=t(this,G,"f").wrap(a??"");return s`
      
      <rh-audio-player-scrolling-text-overflow id="title" part="heading">
        
        <slot name="heading">${e}</slot>
      </rh-audio-player-scrolling-text-overflow>${a?i?s`
      <hgroup class="media-info" part="heading">${i?s`
        <rh-audio-player-scrolling-text-overflow id="mediaseries">
          ${i}
        </rh-audio-player-scrolling-text-overflow>`:""}
        <rh-audio-player-scrolling-text-overflow id="mediatitle">
          ${r}
        </rh-audio-player-scrolling-text-overflow>
      </hgroup>`:r:""}
      
      <div part="body" ?hidden="${!o}" tabindex=0><slot></slot></div>
      
      <slot part="profile" name="profile"></slot>`}set menuLabel(t){e(this,K,t,"f"),this.requestUpdate()}get menuLabel(){return this.label||t(this,K,"f")||"About the episode"}scrollText(){const t=this.shadowRoot?.querySelectorAll("rh-audio-player-scrolling-text-overflow");for(const e of t??[])e?.startScrolling()}};var Z,tt,et,it,at,ot,rt,st;G=new WeakMap,K=new WeakMap,Y.styles=[Q,X],a([l()],Y.prototype,"label",void 0),a([l({attribute:"series"})],Y.prototype,"mediaseries",void 0),a([l({attribute:"mediatitle"})],Y.prototype,"mediatitle",void 0),a([d()],Y.prototype,"content",void 0),Y=a([r("rh-audio-player-about")],Y);const nt=i`:host,button,rh-icon,rh-tooltip,select{color:inherit}:host,div{display:flex;align-items:center}select{font-size:var(--rh-font-size-code-md,1rem);font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);appearance:none;line-height:36px;padding:2px 0;border:none;background:#0000}:dir(rtl){text-align:right}button{border:none;background:#0000;height:var(--_button-size,40px);min-width:var(--_button-size,40px);padding:0}button:focus,select:focus{outline:var(--_outline)}button[disabled],select[disabled]{filter:grayscale(1);opacity:.5;cursor:not-allowed;border:none}`;let lt=st=class extends o{constructor(){super(...arguments),Z.add(this),this.playbackRate=1,this.disabled=!1}render(){const{pbrFixed:e}=st;return s`
      <rh-tooltip>
        <div>
          <button id="stepdown"
                  class="tabbable playback-rate-step"
                  tabindex="-1"
                  aria-label="<"
                  ?disabled="${this.disabled||this.playbackRate<.5}"
                  @click="${t(this,Z,"m",ot)}">
            <rh-icon icon="caret-left" set="microns"></rh-icon>
          </button>
          <select id="playback-rate"
                  class="tabbable"
                  aria-label="${y(this.label)}"
                  ?disabled="${this.disabled}"
                  @click="${t(this,Z,"m",et)}"
                  @change="${t(this,Z,"m",et)}"
                  .value="${this.playbackRate?.toFixed(e)}">${t(this,Z,"a",tt).map(t=>s`
            <option .value="${t.toFixed(e)}"
                    ?selected=${this.playbackRate.toFixed(e)===t.toFixed(e)}>
              ${t.toFixed(e)}x
            </option>`)}
          </select>
          <button id="stepup"
                  class="tabbable playback-rate-step"
                  tabindex="-1"
                  aria-label=">"
                  ?disabled="${this.disabled||this.playbackRate>1.75}"
                  @click="${t(this,Z,"m",at)}">
            <rh-icon icon="caret-right" set="microns"></rh-icon>
          </button>
        </div>
        <span slot="content">${this.label}</span>
      </rh-tooltip>
    `}};Z=new WeakSet,tt=function(){const{pbrMax:t,pbrStep:e,pbrMin:i}=st;return[...Array(Math.round(t/e)).keys()].map(t=>t*e+i)},et=function(t){if(!this.disabled&&t.target instanceof HTMLSelectElement){const e=t.target.value?parseFloat(t.target.value):1;this.dispatchEvent(new dt(e))}},it=function(t){const{pbrMax:e,pbrStep:i,pbrMin:a}=st,o=Math.max(a,Math.min(e,t)),r=1/i;return Math.round(o*r)/r},at=function(){t(this,Z,"m",rt).call(this,this.playbackRate+st.pbrStep)},ot=function(){t(this,Z,"m",rt).call(this,this.playbackRate-st.pbrStep)},rt=function(e){if(t(this,Z,"m",it).call(this,e)){const t=new dt(e);this.dispatchEvent(t)}},lt.styles=[nt],lt.pbrMin=.25,lt.pbrMax=2,lt.pbrStep=.25,lt.pbrFixed=2,a([l({reflect:!0,type:Number,attribute:"playback-rate"})],lt.prototype,"playbackRate",void 0),a([l({reflect:!0,type:Boolean})],lt.prototype,"disabled",void 0),a([l()],lt.prototype,"label",void 0),lt=st=a([r("rh-audio-player-rate-stepper")],lt);class dt extends Event{constructor(t){super("playback-rate-select",{bubbles:!0,cancelable:!0}),this.playbackRate=t}}var ht,ct,pt;const ut=i`:host{display:block;border-top:1px solid var(--_border-color)}:host([hidden]),[hidden]{display:none!important}[part=heading]{margin:var(--rh-space-lg,16px) 0;height:26px}::slotted([slot=heading]),slot[name=heading] *{margin-bottom:0!important;margin-top:0!important}::slotted([slot=heading]),::slotted([slot=title]),slot[name=heading] *{font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);font-weight:var(--rh-font-weight-heading-medium,500);line-height:var(--rh-line-height-heading,1.3)}::slotted([slot=title]){margin:0 0 var(--rh-space-lg,16px);padding:0}::slotted([slot=series]){letter-spacing:var(--rh-letter-spacing-body-text,.0125rem);font-size:var(--rh-font-size-body-text-xs,.75rem);font-weight:var(--rh-font-weight-heading-medium,500);margin:0 0 var(--rh-space-md,8px);padding:0}::-webkit-scrollbar{width:.5em}::-webkit-scrollbar-track{box-shadow:inset 0 0 .15em var(--_static-border-color)}::-webkit-scrollbar-thumb{background-color:var(--_static-border-color)}::-webkit-scrollbar-thumb:hover{cursor:pointer}`,mt=i`[part=body]{max-height:240px;overflow-y:auto}::slotted([slot=link]){display:block}@media (min-width:576px){slot[part=links]{display:flex;align-items:stretch;justify-content:space-between;flex-wrap:wrap}}`;let ft=class extends o{constructor(){super(...arguments),ht.set(this,new b(this)),ct.set(this,new x(this,"heading",null,"link")),pt.set(this,void 0)}render(){return s`
      
      <rh-audio-player-scrolling-text-overflow part="heading">
        
        <slot name="heading">${t(this,ht,"f").wrap(this.menuLabel)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      
      <slot part="body" ?hidden="${t(this,ct,"f").isEmpty(null)}"></slot>
      
      <slot name="link" part="links"></slot>`}set menuLabel(t){e(this,pt,t,"f"),this.requestUpdate()}get menuLabel(){return this.label||t(this,pt,"f")||"Subscribe"}scrollText(){this.shadowRoot?.querySelector("rh-audio-player-scrolling-text-overflow")?.startScrolling()}};var bt,gt,vt,yt,xt,wt,kt,_t,$t;ht=new WeakMap,ct=new WeakMap,pt=new WeakMap,ft.styles=[ut,mt],a([l()],ft.prototype,"heading",void 0),a([l()],ft.prototype,"label",void 0),ft=a([r("rh-audio-player-subscribe")],ft);class zt{constructor(t,...e){this.host=t,t.addController(this)}fromAttribute(t){return(t??"").split(/[, ]/).map(t=>t.trim())}getSlotted(...t){return[]}hasSlotted(...t){const e=this.host.getAttribute(bt.attribute),i=this.host.hasAttribute(bt.anonymousAttribute),a=new Set(this.fromAttribute(e));return t.length||t.push(null),t.every(t=>null===t?i:a.has(t))}isEmpty(...t){return!this.hasSlotted(...t)}}bt=zt,zt.default=Symbol("default slot"),zt.anonymous=bt.default,zt.attribute="ssr-hint-has-slotted",zt.anonymousAttribute="ssr-hint-has-slotted-default";const Rt=i`:host{--_button-size:40px;--rh-icon-size:var(--rh-size-icon-03,32px)}#container{--_outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive)}rh-tooltip{display:flex;height:var(--_button-size);width:var(--_button-size);margin-inline:var(--_icon-margin);--_icon-margin:calc(var(--_icon-gap)/2 - var(--_icon-padding));--_icon-padding:calc((var(--_button-size) - var(--rh-icon-size))/2)}button{border:none;background:#0000;height:var(--_button-size,40px);min-width:var(--_button-size,40px);padding:0}rh-tooltip *{outline:none}button:focus,select:focus{outline:var(--_outline)}button[disabled],select[disabled]{filter:grayscale(1);opacity:.5;cursor:not-allowed;border:none}`,Mt=i`:host{display:block;border-top:1px solid var(--_border-color)}:host([hidden]),[hidden]{display:none!important}[part=heading]{margin:var(--rh-space-lg,16px) 0;height:26px}::slotted([slot=heading]),slot[name=heading] *{margin-bottom:0!important;margin-top:0!important}::slotted([slot=heading]),::slotted([slot=title]),slot[name=heading] *{font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);font-weight:var(--rh-font-weight-heading-medium,500);line-height:var(--rh-line-height-heading,1.3)}::slotted([slot=title]){margin:0 0 var(--rh-space-lg,16px);padding:0}::slotted([slot=series]){letter-spacing:var(--rh-letter-spacing-body-text,.0125rem);font-size:var(--rh-font-size-body-text-xs,.75rem);font-weight:var(--rh-font-weight-heading-medium,500);margin:0 0 var(--rh-space-md,8px);padding:0}::-webkit-scrollbar{width:.5em}::-webkit-scrollbar-track{box-shadow:inset 0 0 .15em var(--_static-border-color)}::-webkit-scrollbar-thumb{background-color:var(--_static-border-color)}::-webkit-scrollbar-thumb:hover{cursor:pointer}`,St=i`.panel-toolbar{display:flex;align-items:center;justify-content:flex-end;border:1px solid var(--_static-border-color);color:var(--_static-text-color);background-color:var(--_static-surface-color)}#download-tooltip,label{flex:0 0 auto}#download-tooltip{margin-inline-start:var(--rh-space-md,8px);--rh-icon-size:18px}#cues{display:block;max-height:240px;overflow-y:auto;border:1px solid var(--_static-border-color);padding:var(--_player-padding,var(--rh-space-md,8px));color:var(--_static-text-color);background-color:var(--_static-surface-color)}button,rh-icon{color:inherit}`;let Tt=class extends o{get downloadText(){return t(this,xt,"f").getSlotted("cues").map(t=>t.downloadText).join("\n\n")}constructor(){super(),gt.add(this),this.menuLabel="About the episode",this.downloadLabel="Download",this.autoscrollLabel="Autoscroll",vt.set(this,!0),yt.set(this,void 0),xt.set(this,new zt(this,"heading",null,"cues")),wt.set(this,new b(this)),new g(this,{offset:0})}render(){return s`
      
      <rh-audio-player-scrolling-text-overflow part="heading">
        
        <slot name="heading">${t(this,wt,"f").wrap(this.menuLabel)}</slot>
      </rh-audio-player-scrolling-text-overflow>
      
      <div class="panel-toolbar" part="toolbar">${t(this,xt,"f").isEmpty("cues")?"":s`
        <label>
          <input id="autoscroll"
                 type="checkbox"
                 ?checked="${t(this,vt,"f")}"
                 @click="${t(this,gt,"m",_t)}">
            ${this.autoscrollLabel}
        </label>
        <rh-tooltip id="download-tooltip">
          <button id="download" @click="${t(this,gt,"m",$t)}" aria-label="${this.downloadLabel}">
            <rh-icon set="ui" icon="download"></rh-icon>
          </button>
          <span slot="content">${this.downloadLabel}</span>
        </rh-tooltip>`}
      </div>
      
      <slot id="cues"></slot>
    `}setActiveCues(e=0){t(this,gt,"m",kt).call(this,e)}setDuration(i){i&&t(this,yt,"f")!==i&&(e(this,yt,i,"f"),this.requestUpdate(),t(this,gt,"m",kt).call(this))}scrollText(){this.shadowRoot?.querySelector("rh-audio-player-scrolling-text-overflow")?.startScrolling()}};var jt,At,Ht,Ct,Wt,Ut,qt,Et,Lt,Dt,Bt,It,Ft,Nt,Ot,Pt,Jt,Vt,Gt,Kt,Qt,Xt,Yt,Zt,te,ee,ie,ae,oe,re,se,ne,le,de,he,ce,pe,ue,me,fe,be,ge,ve,ye,xe,we,ke,_e,$e,ze,Re,Me,Se,Te,je,Ae,He,Ce,We,Ue,qe,Ee,Le,De,Be,Ie,Fe,Ne,Oe,Pe;vt=new WeakMap,yt=new WeakMap,xt=new WeakMap,wt=new WeakMap,gt=new WeakSet,kt=function(e){let i;t(this,xt,"f").getSlotted("cues").forEach((a,o,r)=>{if(!a.start){const t=r[o-1],e=t?.end;e&&(a.start=e||"0:00")}if(!a.end){const e=r[o+1],i=e?.start,s=L(t(this,yt,"f"));(i||s)&&(a.end=i||s)}if(e){const t=!!(a.startTime&&Math.round(a.startTime)<Math.round(e)),o=!!(a.endTime&&Math.round(a.endTime)<Math.round(e)),r=t&&!o;a.active=r,r&&(i=a)}const s=this.shadowRoot?.getElementById("cues");if(i&&t(this,vt,"f")&&s){const t=i.offsetTop+.5*i.offsetHeight-s.offsetTop-.5*s?.offsetHeight;setTimeout(()=>{s&&(s.scrollTop=t)},250)}})},_t=function(){e(this,vt,!t(this,vt,"f"),"f"),this.requestUpdate()},$t=function(){this.dispatchEvent(new Event("transcriptdownload",{bubbles:!0}))},Tt.styles=[Rt,Mt,St],a([l()],Tt.prototype,"heading",void 0),a([l()],Tt.prototype,"label",void 0),a([l({reflect:!0})],Tt.prototype,"lang",void 0),a([l()],Tt.prototype,"menuLabel",void 0),a([l()],Tt.prototype,"downloadLabel",void 0),a([l()],Tt.prototype,"autoscrollLabel",void 0),a([w()],Tt.prototype,"_autoscroll",void 0),a([w()],Tt.prototype,"_download",void 0),Tt=a([r("rh-transcript")],Tt);const Je=i`:host{--_button-size:40px;--rh-icon-size:var(--rh-size-icon-03,32px)}#container{--_outline:var(--rh-border-width-md,2px) solid var(--rh-color-border-interactive)}rh-tooltip{display:flex;height:var(--_button-size);width:var(--_button-size);margin-inline:var(--_icon-margin);--_icon-margin:calc(var(--_icon-gap)/2 - var(--_icon-padding));--_icon-padding:calc((var(--_button-size) - var(--rh-icon-size))/2)}button{border:none;background:#0000;height:var(--_button-size,40px);min-width:var(--_button-size,40px);padding:0}rh-tooltip *{outline:none}button:focus,select:focus{outline:var(--_outline)}button[disabled],select[disabled]{filter:grayscale(1);opacity:.5;cursor:not-allowed;border:none}`,Ve=i`[hidden]{display:none!important}input[type=range]{display:inline-flex;align-items:center;justify-content:center;margin:0;padding:0;color:var(--_thumb-color);background:#0000;overflow:hidden;width:100%;--_box-fill-color:var(--_progress-color);--_track-fill-color:var(--_track-color);--_thumb-height:var(--rh-length-lg,16px);--_thumb-radius:calc(var(--_thumb-height, 16px)*0.5 - 1px);--_clip-edges:0.125em;--_track-height:var(--rh-length-xs,4px);--_thumb-disabled-color:light-dark(#00000080,#ffffff80);--_track-color:light-dark(var(--rh-color-gray-30,#c7c7c7),var(--rh-color-gray-50,#707070));--_interactive-color:var(--rh-color-border-interactive);--_accent-color:var(--rh-color-accent-brand);--_outline:var(--rh-border-width-md,2px) solid var(--_interactive-color);--_thumb-color:var(--rh-audio-player-range-thumb-color,var(--_accent-color));--_progress-color:var(--rh-audio-player-range-progress-color,var(--_accent-color))}input[type=range]:focus{outline:var(--_outline)}input[type=range],input[type=range]::-webkit-slider-runnable-track,input[type=range]::-webkit-slider-thumb{height:var(--_thumb-height);-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track,input[type=range]::-webkit-slider-thumb{position:relative}input[type=range]::-webkit-slider-thumb{width:var(--_thumb-width,var(--_thumb-height));background:var(--_thumb-color,currentcolor);box-shadow:var(--box-fill);border-radius:var(--_thumb-width,var(--_thumb-height));--_clip-top:calc((var(--_thumb-height) - var(--_track-height))*0.5 - 0.5px);--_clip-bottom:calc(var(--_thumb-height) - var(--_clip-top));--_clip-further:calc(100% + 1px);--box-fill:calc(-100vmax - var(--_thumb-width, var(--_thumb-height))) 0 0 100vmax var(--_box-fill-color,currentcolor);clip-path:polygon(100% -1px,var(--_clip-edges) -1px,0 var(--_clip-top),-100vmax var(--_clip-top),-100vmax var(--_clip-bottom),0 var(--_clip-bottom),var(--_clip-edges) 100%,var(--_clip-further) var(--_clip-further))}input[type=range]:disabled::-webkit-slider-thumb{cursor:not-allowed}input[type=range]::-webkit-slider-runnable-track{border-radius:3px;background:linear-gradient(var(--_track-fill-color) 0 0) scroll no-repeat 50% /100% calc(var(--_track-height) + 1px)}input[type=range],input[type=range]::-moz-range-thumb,input[type=range]::-moz-range-track{appearance:none;height:var(--_thumb-height)}input[type=range]::-moz-range-progress,input[type=range]::-moz-range-thumb,input[type=range]::-moz-range-track{background:var(--_track-color)}input[type=range]::-moz-range-thumb{background:var(--_thumb-color,currentcolor);border:0;width:var(--_thumb-width,var(--_thumb-height));border-radius:var(--_thumb-width,var(--_thumb-height))}input[type=range]::-moz-range-track{width:100%;background:var(--_track-color)}input[type=range]::-moz-range-progress{appearance:none;background:var(--_progress-color,currentcolor)}input[type=range]::-moz-range-progress,input[type=range]::-moz-range-track{height:calc(var(--_track-height) + 1px);border-radius:var(--_track-height)}input[type=range]:disabled::-moz-range-thumb{cursor:not-allowed}input[type=range]:dir(rtl){--_box-fill-color:var(--_track-color);--_track-fill-color:var(--_progress-color)}input[disabled],input[type=range]:disabled{filter:grayscale(1);opacity:.5;cursor:not-allowed}`,Ge=i`:host{line-height:var(--rh-line-height-body-text,1.5);font-weight:var(--rh-font-weight-body-text-regular,400);font-size:var(--rh-font-size-code-md,1rem);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif)}[hidden]{display:none!important;border-radius:var(--rh-border-radius-default,3px)}rh-icon{color:inherit}#container,button{color:var(--_text-color)}#container{display:flex;flex-direction:column;align-items:stretch;background-color:initial;border-radius:var(--rh-border-radius-default,3px);width:var(--_player-width,304px);--_player-width:328px;--_poster-size:40px;--_player-padding:var(--rh-space-lg,16px);--_icon-gap:var(--rh-space-xl,24px);--_time-slider-base:159px;--_time-slider-width:159px;--_time-slider-extension:0px;--_about-mediatitle-display:none;--_about-heading-display:flex;--_box-shadow:light-dark(var(--rh-box-shadow-md,0 4px 6px 1px #15151540),none);--_secondary-opacity:var(--rh-audio-player-secondary-opacity,1);--_text-color:var(--rh-audio-player-text-color,var(--rh-color-text-primary));--_border-color:var(--rh-color-border-subtle);--_surface-color:light-dark(var(--rh-audio-player-background-color,var(--rh-color-surface-lightest,#fff)),var(--rh-audio-player-background-color,var(--rh-color-surface-darkest,#151515)));--_secondary-text-color:var(--rh-audio-player-secondary-text-color,var(--rh-color-text-secondary));--_static-border-color:var(--rh-color-border-subtle);--_static-text-color:var(--rh-color-text-primary);--_static-highlight-color:light-dark(var(--rh-color-interactive-primary-hover),var(--rh-color-surface-dark,#383838));--_static-undeline-color:var(--rh-color-border-subtle);--_static-surface-color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515));--_static-surface-focus-color:light-dark(var(--rh-color-surface-light,#e0e0e0),var(--rh-color-surface-dark,#383838));--rh-tooltip-content-padding-block-start:var(--rh-space-md,8px);--rh-tooltip-content-padding-block-end:var(--rh-space-md,8px);--rh-tooltip-content-padding-inline-start:var(--rh-space-md,8px);--rh-tooltip-content-padding-inline-end:var(--rh-space-md,8px);--rh-audio-player-scrolling-text-overflow-background-color:var(--_surface-color)}#container.mobile-safari{--_time-slider-extension:calc(var(--_button-size, 40px) + var(--_icon-gap,
        var(--rh-space-xl, 24px)))}#container.has-accent-color{--_border-color:light-dark(#00000080,#ffffff80);--_secondary-text-color:var(--rh-audio-player-secondary-text-color,var(--rh-color-text-primary));--_secondary-opacity:var(--rh-audio-player-secondary-opacity,0.75);--_static-border-color:#0000;--_static-overlay-focus-color:#50505080;--_static-overlay-color:#00000080;--_static-highlight-color:var(--rh-color-interactive-primary-hover);--_static-surface-color:var(--rh-color-surface-lightest,#fff);--_static-surface-focus-color:var(--rh-color-surface-light,#e0e0e0)}#container.show-menu{--_time-slider-base:128px}#container button:dir(rtl),#container:dir(rtl){text-align:right}#container.mediatitle{--_about-mediatitle-display:block;--_about-heading-display:none}rh-audio-player-rate-stepper{margin-inline:10px 2px;width:auto}.scrubber{color:var(--_text-color);padding:var(--_icon-padding)}#mini-playback-rate{margin-inline:auto}::slotted(rh-audio-player-about),::slotted(rh-audio-player-subscribe),::slotted(rh-audio-player-transcript){background-color:var(--_static-surface-color)}::slotted([slot=series]){letter-spacing:var(--rh-letter-spacing-body-text,.0125rem)!important;font-size:var(--rh-font-size-body-text-xs,.75rem)!important;font-weight:var(--rh-font-weight-heading-medium,500)!important;margin:0 0 var(--rh-space-md,8px)!important;padding:0!important}::slotted([slot=title]){font-size:var(--rh-font-size-body-text-xl,1.25rem)!important;font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)!important;font-weight:var(--rh-font-weight-heading-medium,500)!important;line-height:var(--rh-line-height-heading,1.3)!important;margin:0 0 var(--rh-space-lg,16px)!important;padding:0!important}#mediatitle{font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);font-weight:var(--rh-font-weight-heading-medium,500);height:26px;line-height:1}#mediaseries{font-size:var(--rh-font-size-body-text-sm,.875rem);height:18px;line-height:1;font-weight:var(--rh-font-weight-body-text-regular,400);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);letter-spacing:var(--rh-letter-spacing-body-text,.0125rem);margin:0 0 var(--rh-space-md,8px);color:var(--_secondary-text-color);opacity:var(--_secondary-opacity,1)}:host(:focus-within){z-index:2}:host(:hover){z-index:3}#media,.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;clip-path:inset(50%);border:0}#media{padding:0;border:none;display:block}#toolbar{position:relative;display:flex;align-items:center;padding-inline-end:var(--rh-space-md,8px);width:max-content}#panel,#toolbar{background-color:var(--_surface-color);border:1px solid var(--_border-color);border-radius:var(--rh-border-radius-default,3px);padding:var(--_player-padding)}#panel{width:calc(var(--_player-width) - var(--_player-padding)*2 - 2)}#panel ::slotted(*){color:var(--_text-color)!important}.has-accent-color #panel,.has-accent-color #toolbar{border:none}rh-tooltip{display:flex}rh-tooltip>*{min-height:40px}rh-tooltip>label{display:contents}#container>*{--_time-slider-width:calc(var(--_time-slider-base) + var(--_time-slider-extension, 0px))}#close-tooltip,#current,#duration,#forward-tooltip,#full-current,#full-play-tooltip,#full-title,#rewind-tooltip,#volume-tooltip{display:none}#forward,#rewind{display:grid;place-items:center}#mediaseries,#mediatitle{text-overflow:ellipsis;white-space:nowrap}::slotted([slot=series]),::slotted([slot=title]){margin:0}#poster{display:none}#poster,#poster>img{height:var(--_poster-size)}#poster>img{width:var(--_poster-size);margin-inline-end:var(--_icon-gap)}input[type=range]{margin:2px 0;display:flex}#time-tooltip{flex:0 0 var(--_time-slider-width);margin-inline:16px 0}#time,#time-tooltip{width:var(--_time-slider-width)}.spacer{width:var(--rh-space-xl,24px);height:var(--_button-size);border-inline-end:1px solid var(--_border-color);margin-inline-end:var(--rh-space-lg,16px)}.full-spacer{display:none;width:1px;flex:1 0 3px}.show-menu .spacer{width:0;border-inline-start:none;border-inline-end:none}#current{margin-inline-start:calc(var(--_icon-gap)/2)}#current,#duration,#full-current{color:var(--_secondary-text-color);opacity:var(--_secondary-opacity,1);font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);font-size:var(--rh-font-size-code-xs,.75rem);line-height:var(--rh-line-height-code,1.5)}:dir(rtl) #mute rh-icon{rotate:180deg}#volume-tooltip{width:auto;margin-inline:0 calc(var(--_icon-gap)/2)}#play-tooltip{margin:0;--_icon-gap:var(--rh-space-lg,16px);--rh-icon-size:var(--rh-size-icon-01,16px)}#full-play-tooltip{--_button-size:56px;--_icon-padding:calc((var(--_button-size) - var(--rh-icon-size))/2);--_icon-margin:calc(var(--_icon-gap)/2)}#close-tooltip,#full-play-tooltip,#menu-tooltip,#mute-tooltip{--rh-icon-size:var(--rh-size-icon-02,24px)}#menu-button{display:inline-block;position:relative;width:max-content}.expanded #menu-tooltip{display:none}.expanded #close-tooltip{display:inline-block}#close,#menu-button{height:var(--_button-size)}rh-menu{position:absolute;display:block;left:0;top:0;z-index:2}rh-menu[aria-hidden=true],rh-menu[aria-hidden=true]>*,rh-menu[inert]{z-index:-1}rh-menu::part(menu){opacity:0;pointer-events:none;z-index:10000;transition:opacity .3s cubic-bezier(.54,1.5,.38,1.11) 0s;translate:var(--_floating-content-translate);max-width:calc(100vw - 10px);max-height:calc(100vh - 10px);width:max-content;will-change:opacity;background:var(--rh-audio-player-background-color,var(--_static-surface-color));border:1px solid var(--_border-color);box-shadow:var(--_static-box-shadow)}rh-menu:not([inert])::part(menu),rh-menu[aria-hidden=false]::part(menu){opacity:1;pointer-events:all}rh-menu>button{padding:var(--rh-space-md,8px) var(--rh-space-lg,16px);display:block;text-align:left;max-width:200px;color:var(--_static-text-color);background-color:var(--_static-overlay-color);font-size:var(--rh-font-size-body-text-md,1rem);line-height:var(--rh-line-height-body-text,1.5);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif)}rh-menu>button:hover{background:var(--_static-overlay-focus-color,var(--_static-surface-focus-color))}rh-menu>button:focus{z-index:2}#container.has-accent-color rh-menu>button{color:var(--rh-color-text-primary)}#container rh-menu>button:dir(rtl){text-align:right}#full-play,#play{display:flex;align-items:center;justify-content:center;border-radius:50%;background-color:light-dark(var(--rh-color-surface-darkest,#151515),var(--rh-color-surface-lightest,#fff));color:light-dark(var(--rh-color-surface-lightest,#fff),var(--rh-color-surface-darkest,#151515))}.expanded #toolbar{border-block-end:0;border-radius:var(--rh-border-radius-default,3px) var(--rh-border-radius-default,3px) 0 0}.expanded #panel{border-block-start:0;padding-block-start:0;border-radius:0 0 var(--rh-border-radius-default,3px) var(--rh-border-radius-default,3px)}.expanded #panel slot{display:block}@media (min-width:360px){#container{--_player-width:360px;--_time-slider-base:191px}#container.show-menu{--_time-slider-base:160px}}@media (min-width:576px){#container{--_player-width:503px;--_time-slider-base:334px}#container.show-menu{--_time-slider-base:303px}#container:is(.compact,.compact-wide){--_player-width:576px;--_time-slider-base:256px;padding-inline-end:var(--_player-padding)}#container:is(.compact,.compact-wide) #volume{width:80px}#container.show-menu:is(.compact,.compact-wide){--_time-slider-base:225px}#container.mobile-safari:is(.compact,.compact-wide){--_time-slider-extension:calc(80px + var(--_button-size, 40px) + var(--_icon-gap,
            var(--rh-space-xl, 24px))*1.5)}#container.compact-wide{width:100%}#container.compact-wide.expanded #panel{padding:0}#container.compact-wide.expanded #panel slot{width:calc(var(--_player-width) - var(--_player-padding)*2);margin:0 auto}#container.compact-wide #toolbar{justify-content:center;width:auto;padding:var(--_player-padding) calc(50% - var(--_player-width)/2 - 1px)}#container.compact-wide #time,#container.compact-wide #time-tooltip{width:var(--_time-slider-width);flex:0 0 var(--_time-slider-width);margin-inline-start:var(--rh-space-md,8px)}#container.compact #toolbar{padding-inline-end:var(--_player-padding)}#container:not(.mini) #mute-tooltip{--rh-icon-size:var(--rh-size-icon-02,24px)}#container.full{--_player-width:504px;--_icon-gap:var(--rh-space-xl,24px);--_player-padding:var(--rh-space-xl,24px);--_time-slider-base:314px}#container.full #toolbar{padding-inline-end:var(--_player-padding);width:calc(var(--_player-width) - var(--_poster-size) - var(--_icon-gap)*3)}#container.full.expanded #toolbar{width:auto}#container.full #time-tooltip{margin-inline:0 calc(var(--_icon-gap)/2)}#container.full #duration,#container.full #full-current{flex:0 0 calc(var(--_time-slider-width)/2);margin:-4px 0 var(--rh-length-lg,16px)}#container.full #duration{flex:0 0 calc(var(--_time-slider-width)/2);justify-content:flex-end}#container.full #mute-tooltip{margin-inline-start:var(--_icon-margin)}#container.full #volume-tooltip{flex:0 0 80px;margin-inline-end:0}#container.full #volume{width:80px}#container.full rh-audio-player-rate-stepper{flex:0 0 auto;text-align:right;margin:0 var(--_icon-margin) 0 -6px}#container.full #menu{flex:0 0 auto}#container.full #full-title{display:block;flex:0 0 100%}#container.full #panel{padding-block-start:var(--rh-length-md,8px)}#container.full.mobile-safari{--_time-slider-extension:calc(80px + var(--_button-size, 40px) + var(--_icon-gap,
            var(--rh-space-xl, 24px)))}#container.full.mobile-safari #duration{margin-inline-end:-4px}#container.full.mediatitle{--_about-mediatitle-display:none;--_about-heading-display:flex}#container.full:not(.expanded) #toolbar{flex-wrap:wrap;height:184px}#container.full #duration:dir(rtl){justify-content:flex-start}#container.full.expanded #close-tooltip,#container.full.expanded #menu{margin:0}#container.full.expanded #full-title{flex:0 0 calc(100% - 112px);overflow:hidden;margin:0 var(--rh-length-lg,16px)}#container.full #current,#container.full.expanded #mute-tooltip,#container.full.expanded #time-tooltip,#container.full:not(.expanded) #play-tooltip,#container:not(.mini) .spacer{display:none}#container.full:not(.expanded) .full-spacer,#container:is(.compact,.compact-wide) #current{display:inline-block}#container.full:not(.expanded) #duration,#container.full:not(.expanded) #forward-tooltip,#container.full:not(.expanded) #full-current,#container.full:not(.expanded) #full-play-tooltip,#container.full:not(.expanded) #rewind-tooltip{display:flex}}@media (min-width:768px){#container.full:not(.expanded) #volume-tooltip,#container:is(.compact,.compact-wide) #volume-tooltip{display:flex}#container:is(.compact,.compact-wide){--_time-slider-base:221px;--_player-width:650px}#container.show-menu:is(.compact,.compact-wide){--_time-slider-base:190px}#container.poster:is(.compact,.compact-wide){--_player-width:714px}#container.poster:is(.compact,.compact-wide) #poster{display:inline-block}#container.full #duration{margin-inline-end:140px}#container.full.poster{--_player-width:712px;--_time-slider-base:314px}#container.full.poster:not(.expanded){--_poster-size:184px}#container.full.poster:not(.expanded) #toolbar{padding-inline-start:calc(var(--_player-padding)*2 + var(--_poster-size))}#container.full.poster:not(.expanded) #poster{position:relative;overflow:visible;display:block;height:0;flex:0 0 100%}#container.full.poster:not(.expanded) #poster>img{position:absolute;inset-inline-start:calc(-184px - var(--_player-padding))}#container.full.poster.expanded #poster{display:inline-block;padding-inline-end:var(--rh-length-lg,16px)}#container.full.poster.expanded #poster>img{margin-inline-end:0}#container.full.poster.expanded #full-title{flex:0 0 calc(100% - 168px)}}`;let Ke=Pe=class extends o{constructor(){super(...arguments),jt.add(this),this.layout="mini",this.volume=.5,this.playbackRate=1,this.expanded=!1,this.microcopy={},Ct.set(this,window.navigator.userAgent.match(/(iPhone|iPad|Mobile).*(AppleWebkit|Safari)/i)),Wt.set(this,!0),Ut.set(this,this.volume),qt.set(this,void 0),Et.set(this,new g(this)),Lt.set(this,void 0),Dt.set(this,void 0),Bt.set(this,this.offsetWidth),It.set(this,new ResizeObserver(()=>{t(this,Bt,"f")!==this.offsetWidth&&t(this,jt,"m",De).call(this)})),Ft.set(this,new q(this,{en:{...Pe.enUS},"en-US":{...Pe.enUS},...this.microcopy??{}})),Nt.set(this,new f(this,{content:()=>this.shadowRoot?.getElementById("menu"),invoker:()=>this.shadowRoot?.getElementById("menu-button")})),Ot.set(this,new Map(Object.entries({canplay:t(this,jt,"m",he).bind(this),canplaythrough:t(this,jt,"m",ce).bind(this),durationchange:t(this,jt,"m",ue).bind(this),loadedmetadata:t(this,jt,"m",be).bind(this),loadeddata:t(this,jt,"m",fe).bind(this),ended:t(this,jt,"m",me).bind(this),pause:t(this,jt,"m",ve).bind(this),play:t(this,jt,"m",ye).bind(this),playing:t(this,jt,"m",$e).bind(this),ratechange:t(this,jt,"m",xe).bind(this),seeked:t(this,jt,"m",ze).bind(this),seeking:t(this,jt,"m",Re).bind(this),timeupdate:t(this,jt,"m",Se).bind(this),volumechange:t(this,jt,"m",He).bind(this)}))),Ue.set(this,void 0),Oe.set(this,e=>{const i=this.shadowRoot?.getElementById("menu-button"),a=e.composedPath();i&&(a.includes(i)||a.some(t=>t instanceof h))||t(this,jt,"m",Fe).call(this)})}get currentTime(){return t(this,Lt,"f")?.currentTime??0}set currentTime(e){t(this,Lt,"f")&&(t(this,Lt,"f").currentTime=e)}get duration(){return t(this,jt,"a",At)}get muted(){return 0===this.volume}get paused(){return!t(this,Lt,"f")||!!t(this,Wt,"f")}get readyState(){return t(this,jt,"a",Ht)||0}async getUpdateComplete(){return Promise.all([super.getUpdateComplete(),...Array.from(this.shadowRoot?.querySelectorAll("rh-menu")??[],t=>t.updateComplete)]).then(t=>t.every(Boolean))}connectedCallback(){super.connectedCallback(),Pe.instances.add(this),this.addEventListener("cueseek",t(this,jt,"m",pe)),t(this,jt,"m",de).call(this),t(this,jt,"m",oe).call(this),e(this,qt,t(this,qt,"f")??window.getComputedStyle?.(this),"f")}disconnectedCallback(){t(this,jt,"m",le).call(this),Pe.instances.delete(this),super.disconnectedCallback()}render(){const{expanded:e,mediatitle:i,layout:a,poster:o}=this,{open:r,styles:n={}}=t(this,Nt,"f"),l=t(this,jt,"a",Kt),d=this.muted?t(this,Ft,"f").get("unmute"):t(this,Ft,"f").get("mute"),h=!t(this,Lt,"f")||t(this,jt,"a",Ht)<1||0===this.currentTime||!t(this,jt,"a",Yt),u=!t(this,Lt,"f")||t(this,jt,"a",Ht)<1||this.currentTime===this.duration||!t(this,jt,"a",Yt),m=this.paused?t(this,Ft,"f").get("play"):t(this,Ft,"f").get("pause"),f=t(this,jt,"a",Ht)<3&&this.duration<1,b=this.currentTime/this.duration,g=100*(Number.isNaN(b)?0:b),v=!!t(this,qt,"f")?.getPropertyValue("--rh-audio-player-background-color");return s`
      <div id="container"
          class="${c({[a]:!0,expanded:e,mediatitle:void 0!==i,poster:void 0!==o,"show-menu":l,"has-accent-color":v,"mobile-safari":!!t(this,Ct,"f")})}">
        <input type="hidden" value=${t(this,jt,"a",Ht)}>
        
        <slot id="media" name="media" @slotchange="${t(this,jt,"m",de)}"></slot>
        
        <div id="toolbar"
             class="${this.expanded?"expanded":""}"
             part="toolbar"
             aria-controls="media"
             aria-label="Media Controls">${o?s`
          <div id="poster"><img .src="${o}" aria-hidden="true"></div>`:""}
          <rh-tooltip id="play-tooltip">
            <button id="play"
                    aria-label="${m}"
                    class="toolbar-button"
                    ?disabled=${!t(this,Lt,"f")||f}
                    @click=${t(this,jt,"m",ke)}
                    @focus=${t(this,jt,"m",_e)}>
              <rh-icon set="ui" icon="${this.paused?"play-fill":"pause-fill"}"></rh-icon>
            </button>
            <span slot="content">${m}</span>
          </rh-tooltip>

          <div id="full-title">
            <rh-audio-player-scrolling-text-overflow id="mediaseries" ?hidden=${!this.mediaseries}>
              
              <slot name="series" @slotchange=${t(this,jt,"m",Ae)}>${this.mediaseries}</slot>
            </rh-audio-player-scrolling-text-overflow>
            <rh-audio-player-scrolling-text-overflow id="mediatitle" ?hidden=${!this.mediatitle}>
              
              <slot name="title" @slotchange=${t(this,jt,"m",Ae)}>${this.mediatitle}</slot>
            </rh-audio-player-scrolling-text-overflow>
          </div>

          <rh-tooltip id="time-tooltip">
            <input id="time"
                   class="toolbar-button"
                   aria-label="${t(this,Ft,"f").get("seek")}"
                   min="0"
                   max="100"
                   step="1"
                   type="range"
                   value="${g}"
                   ?disabled="${0===this.duration}"
                   @input=${t(this,jt,"m",Me)}>
            <span slot="content">${t(this,Ft,"f").get("seek")}</span>
          </rh-tooltip>

          <span id="current">${t(this,jt,"a",te)}</span>

          <div class="spacer"></div>

          <rh-audio-player-rate-stepper id="playback-rate"
                                        @playback-rate-select="${t(this,jt,"m",we)}"
                                        ?hidden="${t(this,jt,"a",Jt)||t(this,jt,"a",Pt)}"
                                        .disabled="${!t(this,Lt,"f")}"
                                        .playbackRate="${this.playbackRate}"
                                        .label="${t(this,Ft,"f").get("speed")}"></rh-audio-player-rate-stepper>

          ${t(this,Ct,"f")?"":s`

          <rh-tooltip id="mute-tooltip">
            <button id="mute"
                    aria-label="${d}"
                    class="toolbar-button"
                    ?disabled=${!t(this,Lt,"f")}
                    @click=${t(this,jt,"m",ge)}>
              <rh-icon set="ui" icon="${this.muted?"mute-fill":"volume-up-fill"}"></rh-icon>
            </button>
            <span slot="content">${d}</span>
          </rh-tooltip>${t(this,jt,"a",Pt)?"":s`

          <rh-tooltip id="volume-tooltip">
            <span slot="content">${t(this,Ft,"f").get("volume")}</span>
            <input id="volume"
                      class="toolbar-button"
                      aria-label="${t(this,Ft,"f").get("volume")}"
                      min=0
                      max=${t(this,Lt,"f")?100:0}
                      step=1
                      type="range"
                      value=${100*this.volume}
                      ?disabled="${!t(this,Lt,"f")}"
                      @input=${t(this,jt,"m",Ce)}>
            </rh-tooltip>
          `}
          `}${t(this,jt,"a",Jt)?s`

          <span id="full-current">${t(this,jt,"a",te)}</span>

          <span id="duration">
            <span class="sr-only">/</span>${L(this.duration)}
          </span>

          <div class="full-spacer"></div>

          <rh-audio-player-rate-stepper id="full-playback-rate"
                                        @playback-rate-select="${t(this,jt,"m",we)}"
                                        ?hidden="${this.expanded||!t(this,jt,"a",Jt)}"
                                        .disabled="${!t(this,Lt,"f")}"
                                        .playbackRate="${this.playbackRate}"
                                        .label="${t(this,Ft,"f").get("speed")}"></rh-audio-player-rate-stepper>

          <rh-tooltip id="rewind-tooltip">
            <button id="rewind"
                    aria-label="${t(this,Ft,"f").get("rewind")}"
                    class="toolbar-button"
                    ?disabled=${h}
                    @click=${()=>this.rewind()}>
              <rh-icon set="ui" icon="undo" class="scrubber"></rh-icon>
            </button>
            <span slot="content">${t(this,Ft,"f").get("rewind")}</span>
          </rh-tooltip>

          <rh-tooltip id="full-play-tooltip">
            <button id="full-play"
                    aria-label="${m}"
                    class="toolbar-button"
                    ?disabled=${!t(this,Lt,"f")||f}
                    @click=${t(this,jt,"m",ke)}
                    @focus=${t(this,jt,"m",_e)}>
              <rh-icon set="ui" icon="${this.paused?"play-fill":"pause-fill"}"></rh-icon>
            </button>
            <span slot="content">${m}</span>
          </rh-tooltip>

          <rh-tooltip id="forward-tooltip">
            <button id="forward"
                    aria-label="${t(this,Ft,"f").get("advance")}"
                    class="toolbar-button"
                    ?disabled=${u}
                    @click=${()=>this.forward()}>
              <rh-icon set="ui" icon="redo" class="scrubber"></rh-icon>
            </button>
            <span slot="content">${t(this,Ft,"f").get("advance")}</span>
          </rh-tooltip>`:""}${t(this,jt,"a",Kt)?s`

          <rh-tooltip id="menu-tooltip"
                      slot="button"
                      position="${t(this,jt,"a",Qt)?"left":"top"}">
            <button id="menu-button"
                    class="toolbar-button"
                    aria-label="${t(this,Ft,"f").get("menu")}"
                    aria-controls="menu"
                    aria-haspopup="true"
                    @click="${t(this,jt,"m",Te)}">
              <rh-icon set="ui" icon="ellipsis-horizontal-fill"></rh-icon>
            </button>
            <span slot="content">${t(this,Ft,"f").get("menu")}</span>
          </rh-tooltip>

          <rh-menu id="menu"
                   aria-labelledby="menu-button"
                   ?inert="${!t(this,jt,"a",Qt)}"
                   style="${p(n)}"
                   class="${c({open:r})}"
                   .getItems="${e=>t(this,jt,"m",re).call(this,e)}"
                   @keydown="${t(this,jt,"m",Ee)}"
                   @focusout="${t(this,jt,"m",Le)}">${t(this,jt,"a",Gt).map(e=>e.panel?s`
            <button id="${e.id}-menu-item"
                    aria-label="${e.panel.menuLabel}"
                    aria-controls="panel"
                    @click="${()=>t(this,jt,"m",We).call(this,e.panel)}">
              ${e.panel.menuLabel}
            </button>`:"")}
            <rh-audio-player-rate-stepper id="mini-playback-rate"
                                          @playback-rate-select="${t(this,jt,"m",we)}"
                                          ?hidden="${!t(this,jt,"a",Pt)}"
                                          .disabled="${!t(this,Lt,"f")}"
                                          .playbackRate="${this.playbackRate}"
                                          .label="${t(this,Ft,"f").get("speed")}"></rh-audio-player-rate-stepper>
          </rh-menu>`:""}
          <rh-tooltip id="close-tooltip">
            <button id="close"
                    aria-label="${t(this,Ft,"f").get("close")}"
                    class="toolbar-button"
                    ?disabled="${!t(this,Lt,"f")}"
                    aria-controls="panel"
                    @click="${t(this,jt,"m",We)}"
                    @keydown="${t(this,jt,"m",qe)}">
              <rh-icon set="ui" icon="close"></rh-icon>
            </button>
            <span slot="content">${t(this,Ft,"f").get("close")}</span>
          </rh-tooltip>
          <div class="full-spacer"></div>
        </div>

        
        <div id="panel"
             role="dialog"
             aria-live="polite"
             aria-labelledby="about-menu-item"
             part="panel"
             ?hidden="${!this.expanded||!t(this,jt,"a",Kt)}">
          
          <slot id="about-slot"
                name="about"
                part="about"
                @slotchange=${t(this,jt,"m",je)}>
            <rh-audio-player-about></rh-audio-player-about>
          </slot>
          
          <slot id="subscribe-slot"
                name="subscribe"
                part="subscribe"
                @slotchange=${t(this,jt,"m",je)}>
          </slot>
          
          <slot id="transcribe-slot"
                name="transcript"
                part="transcript"
                @slotchange=${t(this,jt,"m",je)}
                @transcriptdownload=${t(this,jt,"m",Ne)}>
          </slot>
        </div>
      </div>
    `}async firstUpdated(){await this.updateComplete,t(this,jt,"m",Ie).call(this)}updated(e){e.has("volume")&&t(this,Lt,"f")&&this.volume!==t(this,Lt,"f").volume&&(t(this,Lt,"f").volume=this.volume),e.has("lang")&&t(this,jt,"m",oe).call(this)}mute(){t(this,Lt,"f")&&(e(this,Ut,Math.max(.1,t(this,Lt,"f")?.volume),"f"),t(this,Lt,"f").volume=0)}unmute(){t(this,Lt,"f")&&(t(this,Lt,"f").volume=Math.max(t(this,Ut,"f"),.1))}pause(){return t(this,Lt,"f")?.pause?.()}async play(){return await(t(this,Lt,"f")?.play?.())}seek(e){if(t(this,Lt,"f")?.setAttribute("seekable","seekable"),t(this,Lt,"f")){const i=t(this,jt,"a",Yt)?Math.max(t(this,jt,"a",Zt),Math.min(e,t(this,jt,"a",Yt))):-1;i>=0&&(t(this,Lt,"f").currentTime=i,this.requestUpdate())}}seekFromCurrentTime(e=0){const i=(t(this,Lt,"f")?.currentTime||0)+e;this.seek(i)}rewind(t=15){this.seekFromCurrentTime(-t)}forward(t=15){this.seekFromCurrentTime(t)}};Ct=new WeakMap,Wt=new WeakMap,Ut=new WeakMap,qt=new WeakMap,Et=new WeakMap,Lt=new WeakMap,Dt=new WeakMap,Bt=new WeakMap,It=new WeakMap,Ft=new WeakMap,Nt=new WeakMap,Ot=new WeakMap,Ue=new WeakMap,Oe=new WeakMap,jt=new WeakSet,At=function(){return t(this,Lt,"f")?.duration??0},Ht=function(){return t(this,Lt,"f")?.readyState??0},Pt=function(){return!t(this,jt,"a",Jt)&&!t(this,jt,"a",Vt)},Jt=function(){return"full"===this.layout},Vt=function(){return!!this.layout?.startsWith("compact")},Gt=function(){return[{id:"about",panel:t(this,jt,"a",ie)},{id:"subscribe",panel:t(this,jt,"a",ae)},{id:"transcript",panel:t(this,jt,"a",ee)}].filter(t=>!!t.panel)},Kt=function(){return t(this,jt,"a",Gt).length>1||!!this.mediaseries||!!this.mediatitle||(this._abouts?.length??0)>0},Qt=function(){return t(this,Nt,"f").open},Xt=function(i){i?(t(this,jt,"m",Be).call(this),e(this,Bt,this.offsetWidth,"f"),t(this,It,"f").observe(this)):(t(this,jt,"m",Fe).call(this),t(this,It,"f").unobserve(this))},Yt=function(){return!!((t(this,Lt,"f")?.seekable?.end?.length||-1)>0&&t(this,Lt,"f")?.seekable?.end(0))&&t(this,Lt,"f")?.seekable?.end(0)},Zt=function(){return t(this,Lt,"f")?.seekable?.start(0)?t(this,Lt,"f")?.seekable?.start(0):0},te=function(){return L(this.currentTime||0)},ee=function(){{const[t]=this._transcripts??[];return t??this.shadowRoot?.querySelector("rh-transcript")}},ie=function(){{const[t=this.shadowRoot?.querySelector?.("rh-audio-player-about")]=this._abouts??[];return t}},ae=function(){return this._subscribe?.[0]},oe=async function(e=t(this,Ft,"f").language){const i=new URL(`./i18n/${e}.json`,import.meta.url);await t(this,Ft,"f").loadTranslation(i,e),t(this,jt,"m",se).call(this),t(this,jt,"m",ne).call(this)},re=function(e){const i="mini-playback-rate";return t(this,jt,"a",Pt)?[...e.filter(t=>t.id!==i),...this.shadowRoot?.getElementById(i)?.shadowRoot?.querySelectorAll(".tabbable")??[]]:e},se=async function(){await this.updateComplete,t(this,Ft,"f").update(),t(this,jt,"a",ie)&&(t(this,jt,"a",ie).menuLabel=t(this,Ft,"f").get("about")),t(this,jt,"a",ae)&&(t(this,jt,"a",ae).menuLabel=t(this,Ft,"f").get("subscribe")),t(this,jt,"a",ee)&&(t(this,jt,"a",ee).menuLabel=t(this,Ft,"f").get("transcript"))},ne=async function(){await this.updateComplete,t(this,Ft,"f").update(),t(this,jt,"a",ee)&&(t(this,jt,"a",ee).autoscrollLabel=t(this,Ft,"f").get("autoscroll"),t(this,jt,"a",ee).downloadLabel=t(this,Ft,"f").get("download"))},le=function(){for(const[e,i]of t(this,Ot,"f"))t(this,Dt,"f")?.removeEventListener(e,i)},de=function(i){if(i&&(t(this,jt,"m",le).call(this),e(this,Dt,this.querySelector("audio")??void 0,"f")),e(this,Lt,this.querySelector("audio")??void 0,"f"),t(this,Lt,"f")){t(this,Lt,"f").removeAttribute("controls"),t(this,Lt,"f").setAttribute("seekable","seekable"),this.volume=t(this,Lt,"f").volume||.5;for(const[e,i]of t(this,Ot,"f"))t(this,Lt,"f").addEventListener(e,i)}},he=function(){this.volume=t(this,Lt,"f")?.volume||.5},ce=function(){this.requestUpdate()},pe=function(e){const i=e.target,a=i?.startTime;a&&this.seek(a),t(this,jt,"m",Se).call(this)},ue=function(){this.requestUpdate(),t(this,jt,"a",ee)?.setDuration(this.duration)},me=function(){e(this,Wt,!0,"f")},fe=function(){this.requestUpdate()},be=function(){this.requestUpdate()},ge=function(){return this.muted?this.unmute():this.mute()},ve=function(){e(this,Wt,!0,"f"),this.requestUpdate()},ye=function(){e(this,Wt,!1,"f"),this.requestUpdate()},xe=function(){t(this,Lt,"f")&&this.playbackRate===t(this,Lt,"f").playbackRate||(this.playbackRate=t(this,Lt,"f")?.playbackRate||1)},we=function(e){e instanceof dt&&t(this,Lt,"f")&&(this.playbackRate=e.playbackRate,t(this,Lt,"f").playbackRate=e.playbackRate)},ke=async function(e){const i=e?.target,a=i?.parentElement?.closest("rh-tooltip");for(const t of Pe.instances)t!==this&&t.pause();t(this,Wt,"f")?this.play():this.pause(),setTimeout(()=>a?.show(),10)},_e=function(){for(const t of["mediaseries","mediatitle"]){const e=this.shadowRoot?.querySelector(`#${t}`);e?.startScrolling()}},$e=function(){e(this,Wt,!1,"f"),this.requestUpdate()},ze=function(){this.requestUpdate()},Re=function(){this.requestUpdate()},Me=function(e){if(t(this,jt,"a",Yt)){const t=parseFloat(e.target.value)??0,i=this.duration*(t/100);this.seek(i)}},Se=function(){t(this,jt,"a",ee)?.setActiveCues(this.currentTime),this.requestUpdate()},Te=function(i){i.preventDefault(),e(this,jt,!t(this,jt,"a",Qt),"a",Xt),i.stopPropagation()},je=function(){t(this,jt,"m",se).call(this),t(this,jt,"m",ne).call(this),t(this,jt,"m",Ae).call(this)},Ae=function(){const e=this._mediatitle?.[0]?.textContent??"",i=this._mediaseries?.[0]?.textContent??"";e.length>0&&(this.mediatitle||(this.mediatitle=e)),i.length>0&&(this.mediaseries||(this.mediaseries=i)),t(this,jt,"a",ie)&&this.mediaseries&&(t(this,jt,"a",ie).mediaseries=this.mediaseries),t(this,jt,"a",ie)&&this.mediatitle&&(t(this,jt,"a",ie).mediatitle=this.mediatitle)},He=function(){if(t(this,Lt,"f")){const{volume:i}=t(this,Lt,"f");i>0&&e(this,Ut,t(this,Lt,"f").volume,"f"),this.volume=Math.max(0,Math.min(10,t(this,Lt,"f").volume))}},Ce=function(e){const i=parseFloat(e.target.value||"-1");t(this,Lt,"f")&&(t(this,Lt,"f").volume=Math.max(0,Math.min(10,i/100)))},We=function(e){const i=[t(this,jt,"a",ie),t(this,jt,"a",ae),t(this,jt,"a",ee)];i.forEach(t=>t?.toggleAttribute("hidden",e!==t)),this.expanded=!!e&&i.includes(e);const a=this.expanded?this.shadowRoot?.getElementById("close"):this.shadowRoot?.getElementById("menu-button");setTimeout(()=>{setTimeout(()=>{a?.focus(),e===t(this,jt,"a",ee)&&t(this,jt,"a",ee)?.setActiveCues(this.currentTime)},1),setTimeout(()=>{e?.scrollText&&e.scrollText()},1e3)},1)},qe=async function(e){"Escape"===e.key&&t(this,jt,"m",We).call(this)},Ee=async function(e){"Escape"===e.key&&(await t(this,jt,"m",Fe).call(this),this.shadowRoot?.querySelector("#menu-button")?.focus())},Le=function(e){const{relatedTarget:i}=e;i instanceof HTMLElement&&i.closest("rh-menu")!==this.shadowRoot?.getElementById("menu")&&setTimeout(()=>t(this,jt,"m",Fe).call(this),300)},De=async function(){await this.updateComplete;const e={mainAxis:0,alignmentAxis:0};await t(this,Nt,"f").show({offset:e,placement:"bottom-start"})},Be=async function(){const e=this.shadowRoot?.getElementById("menu"),i=this.shadowRoot?.getElementById("menu-button");e&&i&&(await t(this,jt,"m",De).call(this),await this.updateComplete,t(this,Ue,"f")&&e.activateItem(t(this,Ue,"f")),window.addEventListener("click",t(this,Oe,"f")))},Ie=function(){const t=this.shadowRoot?.getElementById("menu");e(this,Ue,t?.activeItem,"f");for(const e of t?.querySelectorAll("[tabindex]")??[])e.tabIndex=-1},Fe=async function(){t(this,jt,"m",Ie).call(this),window.removeEventListener("click",t(this,Oe,"f")),await t(this,Nt,"f").hide()},Ne=function(){const e=t(this,jt,"a",ee)?.downloadText,i=t(this,jt,"a",ee)?.label,a=document.createElement("a"),o=[this.mediaseries,this.mediatitle,i].join(" "),r=(this.mediatitle||this.mediaseries||i||"transcript").replace(/[^\w^\d^-]/g,""),s=`${o}\n${e}`;a.setAttribute("href",`data:text/plain;charset=UTF-8,${encodeURIComponent(s)}`),a.setAttribute("download",`${r}.txt`),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},Ke.styles=[Je,Ge,Ve],Ke.instances=new Set,Ke.enUS={play:"Play",pause:"Pause",seek:"Seek",rewind:"Rewind 15 seconds",advance:"Advance 15 seconds",speed:"Speed",mute:"Mute",unmute:"Unmute",volume:"Volume",menu:"More options",close:"Close",about:"About the episode",subscribe:"Subscribe",transcript:"Transcript",autoscroll:"Autoscroll",download:"Download"},a([l({reflect:!0})],Ke.prototype,"mediaseries",void 0),a([l({reflect:!0})],Ke.prototype,"mediatitle",void 0),a([l({reflect:!0})],Ke.prototype,"layout",void 0),a([l({reflect:!0})],Ke.prototype,"poster",void 0),a([l({reflect:!0,type:Number})],Ke.prototype,"volume",void 0),a([l({reflect:!0,type:Number})],Ke.prototype,"playbackRate",void 0),a([l({reflect:!0,type:Boolean})],Ke.prototype,"expanded",void 0),a([l({reflect:!0})],Ke.prototype,"lang",void 0),a([l({attribute:!1})],Ke.prototype,"microcopy",void 0),a([l({reflect:!0,attribute:"color-palette"})],Ke.prototype,"colorPalette",void 0),a([d({slot:"series"})],Ke.prototype,"_mediaseries",void 0),a([d({slot:"title"})],Ke.prototype,"_mediatitle",void 0),a([d({slot:"transcript",selector:"rh-transcript"})],Ke.prototype,"_transcripts",void 0),a([d({slot:"about",selector:"rh-audio-player-about"})],Ke.prototype,"_abouts",void 0),a([d({slot:"subscribe",selector:"rh-audio-player-subscribe"})],Ke.prototype,"_subscribe",void 0),Ke=Pe=a([r("rh-audio-player"),u,m],Ke);export{Ke as RhAudioPlayer};
