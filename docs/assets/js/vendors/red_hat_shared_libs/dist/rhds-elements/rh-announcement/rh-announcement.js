import{i as t,_ as e,a as i,c as n,t as a}from"../custom-element-3.1.1.js";import{x as r}from"../lit-html-3.1.1.js";import{n as s}from"../property-3.1.1.js";import{e as o}from"../class-map-3.1.1.js";import{S as l}from"../slot-controller-3.1.1.js";import{c}from"../color-palettes-3.1.1.js";import{t as d}from"../themable-3.1.1.js";import"../rh-button/rh-button.js";import"../directive-3.1.1.js";import"../logger-3.1.1.js";import"../query-3.1.1.js";import"../base-3.1.1.js";import"../if-defined-3.1.1.js";import"../internals-controller-3.1.1.js";var p,m,h;const g=t`:host{--_rh-cta-white-space:normal;display:flex}.empty{display:none!important}#row{grid-column:2}#header-actions{grid-column:3;justify-self:end}#close-button{inset-block-start:calc(var(--rh-space-md, 8px)*-1);inset-inline-end:calc(var(--rh-space-md, 8px)*-1);position:relative}#close-button::part(button){block-size:var(--rh-length-lg,16px);inline-size:var(--rh-length-lg,16px);padding:var(--rh-space-lg,16px)}#body{padding-inline-start:var(--rh-space-lg,16px)}#body ::slotted(p){margin-block:0!important}#image{align-items:center;display:flex;justify-content:center}#container{background:var(--rh-color-surface);color:var(--rh-color-text-primary);container:announcement/inline-size;display:grid;font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);grid-template-columns:1fr auto 1fr;inline-size:100%;line-height:var(--rh-line-height-body-text,1.5);padding:var(--rh-space-lg,16px);text-align:center}#container.block-start #content,#container.inline-start #content{text-align:start}#container.inline-start #row{display:flex}#container.inline-start #image{align-items:flex-start;flex:1}#container.inline-start #cta{padding-inline-start:var(--rh-space-lg,16px)}@container announcement (min-width: 768px){:host{--_rh-cta-white-space:nowrap}#row{display:flex;justify-content:center;margin-inline:auto;max-inline-size:1170px}#content{align-items:center;display:flex}#body{padding-inline:var(--rh-space-lg,16px);text-align:start}#body ::slotted(p){font-size:var(--rh-font-size-body-text-lg,1.125rem)!important}#container.inline-start #image{align-items:center}#container.inline-start #cta{padding-inline-start:0}#cta,#image{flex-shrink:0;min-inline-size:max-content}}@container announcement (min-width: 992px){#body{padding-inline:var(--rh-space-2xl,32px)}}@container announcement (max-width: 767px){#content{font-size:var(--rh-font-size-body-text-md,1rem)}#container:not(.inline-start) #body{padding-block:var(--rh-space-lg,16px) var(--rh-space-md,8px);padding-inline-end:var(--rh-space-lg,16px)}#container.block-start #row{display:block}#container.block-start #image{justify-content:flex-start}#container.block-start #body{padding-inline-start:0}}`;class b extends Event{constructor(){super("close",{bubbles:!0,cancelable:!0})}}let f=class extends i{constructor(){super(...arguments),p.add(this),this.dismissable=!1,m.set(this,new l(this,"image",null,"cta"))}render(){const{dismissable:t}=this,e="inline-start"===this.imagePosition,i="block-start"===this.imagePosition;return r`
      <div id="container"
           class="${o({dismissable:t,"inline-start":e,"block-start":i,empty:n(this,m,"f").isEmpty(null)})}">
        
        <div id="row" part="row">
          
          <div id="image"
               part="image"
               class="${o({empty:!n(this,m,"f").hasSlotted("image")})}">
            
            <slot name="image"></slot>
          </div>
          <div id="content">
            <div id="body" class="${o({empty:n(this,m,"f").isEmpty(null)})}">
              
              <slot></slot>
            </div>
            <div id="cta" class="${o({empty:!n(this,m,"f").hasSlotted("cta")})}">
              
              <slot name="cta"></slot>
            </div>
          </div>
        </div>
        <div id="header-actions"
             ?hidden="${!this.dismissable}"
             ?inert="${!this.dismissable}">
          <rh-button id="close-button"
                  label="Close"
                  confirm
                  variant="close"
                  @click=${n(this,p,"m",h)}></rh-button>
        </div>
      </div>
    `}};m=new WeakMap,p=new WeakSet,h=function(){const t=new b;this.dispatchEvent(t)&&this.remove()},f.styles=[g],e([s({reflect:!0,attribute:"color-palette"})],f.prototype,"colorPalette",void 0),e([s({reflect:!0,type:Boolean})],f.prototype,"dismissable",void 0),e([s({reflect:!0,attribute:"image-position"})],f.prototype,"imagePosition",void 0),f=e([a("rh-announcement"),c,d],f);export{b as AnnouncementCloseEvent,f as RhAnnouncement};
