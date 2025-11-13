import{i as r,_ as e,a as o,t,c as a,b as i}from"../custom-element-3.1.1.js";import{x as s}from"../lit-html-3.1.1.js";import{e as l}from"../class-map-3.1.1.js";import{g as n}from"../random-3.1.1.js";export{RhFooterUniversal}from"./rh-footer-universal.js";import"../rh-icon/rh-icon.js";import"../rh-accordion/rh-accordion.js";import{n as d}from"../property-3.1.1.js";import{o as c}from"../if-defined-3.1.1.js";import{S as h}from"../slot-controller-3.1.1.js";import{S as p}from"../ScreenSizeController-3.1.1.js";import"../directive-3.1.1.js";import"../color-palettes-3.1.1.js";import"../logger-3.1.1.js";import"../state-3.1.1.js";import"../unsafe-html-3.1.1.js";import"../observes-3.1.1.js";import"../internals-controller-3.1.1.js";import"../provide-3.1.1.js";import"../context-provider-3.1.1.js";import"../context-3.1.1.js";import"../themable-3.1.1.js";import"../core-3.1.1.js";import"../consumer-3.1.1.js";import"../consume-3.1.1.js";import"../media-3.1.1.js";const m=r`:host{display:block;--rh-icon-size:var(--rh-footer--social-icon--size,var(--rh-size-icon-02,24px))}[hidden]{display:none!important}::slotted(a),a{color:var(--_icon-color)!important}::slotted(a:is(:hover,:focus-within)),a:is(:hover,:focus-within){color:var(--_icon-color-hover)!important}`;let g=class extends o{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return s`
      <a href="${c(this.href)}" aria-label="${c(this.accessibleLabel)}">
        
        <slot>${this.icon?s`<rh-icon set="social" icon="${this.icon}"></rh-icon>`:""}</slot>
      </a>
    `}updated(){let r;if(r=this.querySelector("a")){const e=r.cloneNode(!0);e.querySelectorAll("[_rendered]").forEach(r=>r.remove()),e.innerHTML=`<rh-icon icon="${this.icon??""}" set="social" loading="eager">${e.innerHTML}</rh-icon>`,e.setAttribute("aria-label",e.textContent||""),r.parentNode?.replaceChild(e,r)}}};var f;g.styles=m,e([d()],g.prototype,"icon",void 0),e([d()],g.prototype,"href",void 0),e([d({attribute:"accessible-label"})],g.prototype,"accessibleLabel",void 0),g=e([t("rh-footer-social-link")],g);const b=r`:host{display:flex;flex-direction:column;gap:.625em}[part]{display:contents}::slotted(:is(h1,h2,h3,h4,h5)){font-weight:500;font-size:.875em;margin-top:0;margin-bottom:0}:host([header-hidden]) .header ::slotted(*){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}`;let y=class extends o{constructor(){super(...arguments),this.headerHidden=!1,f.set(this,new MutationObserver(()=>this.updateAccessibility())),this.slots=new h(this,"header")}connectedCallback(){super.connectedCallback(),this.updateAccessibility(),a(this,f,"f").observe(this,{childList:!0})}updateAccessibility(){const r=this.querySelector('[slot="header"]'),e=this.querySelector("ul");r&&e&&(r.id||(r.id=n("rh-footer-links")),e.setAttribute("aria-labelledby",r.id))}render(){return s`
      <div part="header" class="header">
        <slot name="header"></slot>
      </div>
      <div part="default" class="default">
        <slot name="panel"></slot>
        <slot></slot>
      </div>
    `}};f=new WeakMap,y.styles=b,e([d({type:Boolean,attribute:"header-hidden",reflect:!0})],y.prototype,"headerHidden",void 0),y=e([t("rh-footer-links")],y);const v=r`:host{display:block;position:relative}:host(:not(:last-of-type,:first-of-type)):after{content:"";display:block;height:1px;width:100%;margin-block-start:var(--rh-space-2xl,32px);background:var(--_border-color)}::slotted(*){color:var(--rh-color-text-primary-on-dark,#fff);font-size:var(--rh-font-size-body-text-sm,.875rem);text-decoration:none;max-width:650px}::slotted(:is(h1,h2,h3,h4,h5)){font-weight:var(--rh-font-weight-heading-medium,500)!important;font-size:var(--rh-font-size-body-text-sm,.875rem)!important;margin-block:0 var(--rh-space-lg,16px)!important;color:var(--rh-color-text-primary-on-dark,#fff)!important}::slotted(:last-child){margin-block-end:0!important}.content ::slotted(*){color:var(--rh-color-text-secondary-on-dark,#c7c7c7);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-weight:var(--rh-font-weight-body-text-regular,400)}`;let u=class extends o{render(){return s`
      <div class="base" part="base">
        <div class="header" part="header">
          <slot name="header"></slot>
        </div>
        <div class="content" part="content">
          <slot></slot>
        </div>
      </div>
    `}};var x,k,w,j;u.styles=v,u=e([t("rh-footer-block")],u);const M=r`:host{color:var(--rh-color-white,#fff);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);line-height:var(--rh-line-height-body-text,1.5);font-weight:var(--_font-weight);font-size:medium;display:flex;flex-direction:column;color-scheme:only dark!important}@media (scripting:none){:host{min-height:var(--rh-footer-nojs-min-height,750px)}}::slotted(rh-footer-universal),:host{--_fallback-animation:nothing-doing!important;--_fallback-opacity:1!important;overflow-y:initial}.global-base,footer{--_icon-color:var(--rh-footer-icon-color,var(--rh-color-gray-40,#a3a3a3));--_icon-color-hover:var(--rh-footer-icon-color-hover,var(--rh-color-gray-30,#c7c7c7));--_border-color:var(--rh-footer-border-color,var(--rh-color-border-subtle-on-dark,#707070));--_accent-color:var(--rh-footer-accent-color,var(--rh-color-accent-brand-on-light,#e00));--_section-side-gap:var(--rh-footer-section-side-gap,var(--rh-space-lg,16px));--_accordion-background:var(--rh-color-white,#fff);--_logo-width:var(--rh-size-icon-04,40px);--_font-weight:var(--rh-font-weight-body-text-regular,400)}*{box-sizing:border-box}::slotted(:is(h1,h2,h3,h4,h5,h6)){font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)!important;line-height:var(--rh-line-height-heading,1.3)!important}:host([debug]) :not(.spacer,.base,a,svg){min-height:var(--rh-length-xl,24px);position:relative;outline:var(--rh-length-3xs,2px) dotted red}:host([debug]) :not(.spacer,.base,a,svg):after{content:attr(part);display:block;position:absolute;color:#fff;background-color:#2f4f4f;padding:var(--rh-space-xs,4px);top:0;right:0;font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace);font-size:var(--rh-font-size-code-xs,.75rem)}.section{padding:var(--rh-space-2xl,32px) var(--_section-side-gap)}.header{background-color:var(--rh-color-surface-darker,#1f1f1f);display:flex;flex-wrap:wrap;gap:var(--rh-space-2xl,32px);align-items:center;position:relative}.header:after{display:none;content:"";background-color:var(--_border-color);height:var(--rh-length-4xs,1px);position:absolute;bottom:0;width:calc(100% - var(--_section-side-gap)*2);left:var(--_section-side-gap)}.header-primary{flex:1 1 auto}.header-secondary{flex:0 1 auto}.main{background-color:var(--rh-color-surface-darker,#1f1f1f);display:grid;gap:var(--rh-space-2xl,32px);padding-top:0}.main-secondary{display:grid;gap:var(--pf-global--spacer--xl,32px);place-items:baseline;place-content:start}.global-base{--rh-footer-link-font-size:var(--rh-font-size-body-text-xs,0.75rem);line-height:100%;background-color:var(--rh-color-surface-darkest,#151515);display:grid;grid-template-columns:1fr;grid-template-areas:"logo" "primary" "spacer" "secondary" "tertiary";gap:var(--rh-space-2xl,32px) var(--rh-space-xl,24px)}.global-logo{grid-area:logo;width:var(--_logo-width)}.global-logo-image{fill:var(--_icon-color)}.global-logo-image:is(:hover,:focus-within){fill:var(--_icon-color-hover)}.global-primary{grid-area:primary}.global-secondary{grid-area:secondary;color:var(--rh-color-text-secondary);display:flex;flex-direction:column;gap:var(--rh-space-lg,16px);justify-content:space-between}.global-tertiary{grid-area:tertiary;display:grid;justify-content:start;align-items:start}.global-links-primary,.global-links-secondary{display:flex;flex-direction:column;gap:var(--rh-space-md,8px) var(--rh-space-xl,24px)}:is(.global-primary,.global-secondary,.global-tertiary) ::slotted(*){font-size:var(--rh-font-size-body-text-xs,.75rem)!important}.logo{line-height:0px}.social-links{display:flex;margin-inline-start:0;padding-inline-start:0}.social-links rh-footer-links,.social-links slot::slotted(rh-footer-links){display:flex;flex-direction:row;gap:var(--rh-space-xl,24px)}:is(.links,.global-links-primary,.global-links-secondary) ::slotted(ul){padding:0;margin:0;display:contents}.isMobile .links{--rh-footer-link-header-font-size:var(--rh-font-size-body-text-lg,1.125rem)}.isMobile .links ::slotted(ul){--rh-footer-link-font-size:1em;display:grid;grid-template-columns:1fr;gap:calc(var(--rh-space-2xl, 32px)/2)}#global-heading,#heading{position:absolute;left:-9999999px;width:0;height:0;overflow:hidden;display:flex}[part=base]:not(.isMobile) .links{display:grid;grid-template-columns:repeat(1fr,25%);grid-template-rows:repeat(1,min-content auto);grid-auto-columns:minmax(0,1fr);gap:var(--rh-space-lg,16px) var(--rh-space-2xl,32px);grid-auto-flow:column}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):first-of-type){grid-column:1/2;grid-row:1/2}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(2)){grid-column:2/3;grid-row:1/2}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(3)){grid-column:3/4;grid-row:1/2}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(4)){grid-column:4/5;grid-row:1/2}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(5)){grid-column:1/2;grid-row:3/4}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(6)){grid-column:2/3;grid-row:3/4}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(7)){grid-column:3/4;grid-row:3/4}[part=base]:not(.isMobile) .links ::slotted(:is(h2,h3,h4,h5,h6):nth-of-type(8)){grid-column:4/5;grid-row:3/4}[part=base]:not(.isMobile) .links ::slotted(:is(ul:first-of-type)){grid-column:1/2;grid-row:2/3}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(2))){grid-column:2/3;grid-row:2/3}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(3))){grid-column:3/4;grid-row:2/3}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(4))){grid-column:4/5;grid-row:2/3}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(5))){grid-column:1/2;grid-row:4/5}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(6))){grid-column:2/3;grid-row:4/5}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(7))){grid-column:3/4;grid-row:4/5}[part=base]:not(.isMobile) .links ::slotted(:is(ul:nth-of-type(8))){grid-column:4/5;grid-row:4/5}[part=base]:not(.isMobile) .links ::slotted(ul){gap:var(--rh-footer-links-gap,var(--rh-space-lg,16px));display:flex;flex-direction:column}#footer-logo{width:var(--_logo-width)}:is(.links,.global-links-primary,.global-links-secondary) ::slotted(:is(h1,h2,h3,h4,h5)){font-weight:var(--rh-font-weight-heading-medium,500)!important;margin-block:0!important;margin-block-start:var(--_link-header-margin,0)!important;font-size:var(--rh-footer-link-header-font-size,var(--rh-font-size-body-text-sm,.875rem))!important;color:var(--rh-color-text-primary)!important}::slotted(rh-footer-copyright){grid-column:-1/1}@media screen and (min-width:768px){.global-base{grid-template-columns:4fr 4fr 4fr;grid-template-areas:"logo      logo      logo" "primary   primary   primary" "spacer    spacer    spacer" "secondary secondary secondary"}.global-base:is(.hasTertiary){grid-template-columns:4fr 4fr 4fr;grid-template-areas:"logo      logo      logo" "primary   primary   primary" "spacer    spacer    spacer" "secondary secondary tertiary"}}@media screen and (min-width:992px){.global-base:not(.nothing){grid-template-columns:auto 10fr 2fr;grid-template-rows:max-content max-content;grid-template-areas:"logo primary  tertiary" "logo secondary tertiary";gap:24px 32px}.global-primary{display:flex}}.spacer{grid-area:spacer;border-bottom:1px solid var(--_border-color)}@media screen and (min-width:992px){.spacer{display:none}.global-tertiary{display:grid;justify-content:flex-end;align-items:center}}@media screen and (min-width:320px){.global-links-primary,.global-links-secondary{display:grid;grid-template-columns:1fr 1fr}}@media screen and (min-width:768px){.global-links-primary,.global-links-secondary{display:grid;grid-template-columns:1fr 1fr 1fr}.hasTertiary .global-links-secondary{display:grid;grid-template-columns:1fr 1fr}}@media screen and (min-width:992px){.global-links-primary{display:flex;flex-flow:row wrap;align-items:center}:not(.hasTertiary) .global-links-secondary{display:flex;flex-flow:row wrap;gap:8px 24px}}@media screen and (max-width:992px){.global-logo{grid-area:logo}.global-primary{grid-area:primary}}@media screen and (min-width:992px){.header:after{display:block}.main{padding-top:var(--rh-space-2xl,32px);padding-bottom:var(--rh-space-4xl,64px)}}@media screen and (min-width:992px) and (max-width:1368px){.header,.main{display:grid;grid-template-columns:8fr 4fr}}@media screen and (min-width:1368px){.header,.main{display:grid;grid-template-columns:8fr 4fr}}@media screen and (min-width:768px){.isMobile .links ::slotted(ul){grid-template-columns:1fr 1fr}}`;function _(r){return!!r.match(/^H[1-6]$/i)}let z=j=class extends o{constructor(){super(...arguments),x.add(this),k.set(this,!1),this.screenSize=new p(this,"md",{onChange:r=>{i(this,k,!r,"f")}})}static getImportURL(r){const e=new URL(r,import.meta.url);return"file:"===e.protocol?new URL(r,window.location.href):e}connectedCallback(){super.connectedCallback(),i(this,k,!this.screenSize.matches.has("md"),"f"),this.updateAccessibility()}render(){return s`
      
      <footer class="base ${l({isMobile:a(this,k,"f")})}" part="base">
        <h2 id="heading"><slot name="heading">Red Hat footer</slot></h2>
        
        <slot name="base">
          
          <div class="section header" part="section header">
            
            <slot name="header">
              
              <div class="header-primary" part="header-primary">
                
                <slot name="header-primary">
                  
                  <div class="logo" part="logo">
                    
                    <slot name="logo">
                      <a href="/">
                        <img alt="Red Hat" src="https://static.redhat.com/libs/redhat/brand-assets/2/corp/logo--on-dark.svg"/>
                      </a>
                    </slot>
                  </div>
                </slot>
              </div>
              
              <div class="header-secondary" part="header-secondary">
                
                <slot name="header-secondary">
                  <div class="social-links">
                    
                    <rh-footer-links class="social-links-item"
                                     part="social-links"
                                     role="list"
                                     aria-label="Red Hat social media links">
                      
                      <slot name="social-links"></slot>
                    </rh-footer-links>
                  </div>
                </slot>
              </div>
            </slot>
          </div>
          
          <div class="section main" part="section main">
            
            <slot name="main">
              
              <div class="main-primary" part="main-primary">
                
                <slot name="main-primary">
                  
                  <div class="links" part="links">
                    ${a(this,x,"m",w).call(this,a(this,k,"f"))}
                  </div>
                </slot>
              </div>
              
              <div class="main-secondary" part="main-secondary">
                
                <slot name="main-secondary"></slot>
              </div>
            </slot>
          </div>
          
          <slot name="universal"></slot>
        </slot>
      </footer>
    `}updateAccessibility(){for(const r of this.querySelectorAll?.(j.LISTS_SELECTOR)??[])if(!r.hasAttribute("aria-labelledby")){const e=_(r.previousElementSibling?.tagName??"")?r.previousElementSibling:null;if(!e)return;e.id||(e.id=n("rh-footer")),r.setAttribute("aria-labelledby",e.id)}}};k=new WeakMap,x=new WeakSet,w=function(r=!1){const e=Array.from(this.querySelectorAll?.(":scope > [slot^=links]")??[]);return e.forEach((e,o)=>e.setAttribute("slot",r?`links-${o}`:"links")),r&&e?s`

      <rh-accordion on="dark" color-palette="darkest">${e.map((r,e)=>{switch(_(r.tagName)?"header":"panel"){case"header":return s`
              
              <rh-accordion-header part="links-accordion-header">
                <slot name="links-${e}"></slot>
              </rh-accordion-header>`;case"panel":return s`
              
              <rh-accordion-panel part="links-accordion-panel">
                <slot name="links-${e}"></slot>
              </rh-accordion-panel>`}})}
      </rh-accordion>
    `:s`
      
      <slot name="links"></slot>
      `},z.version="{{version}}",z.styles=[M],z.LISTS_SELECTOR=":is([slot^=links],[slot=footer-links-primary],[slot=footer-links-secondary]):is(ul)",z=j=e([t("rh-footer")],z);export{z as RhFooter};
