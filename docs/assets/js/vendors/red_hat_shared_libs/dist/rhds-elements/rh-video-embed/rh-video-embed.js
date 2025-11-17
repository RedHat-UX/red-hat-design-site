import{i as t,a as e,_ as i,c as o,b as s,t as a}from"../custom-element-3.1.1.js";import{x as n}from"../lit-html-3.1.1.js";import{n as r}from"../property-3.1.1.js";import{r as l}from"../state-3.1.1.js";import{e as c}from"../class-map-3.1.1.js";import{S as d}from"../slot-controller-3.1.1.js";import"../rh-button/rh-button.js";import"../rh-surface/rh-surface.js";import{t as p}from"../themable-3.1.1.js";import"../directive-3.1.1.js";import"../query-3.1.1.js";import"../base-3.1.1.js";import"../if-defined-3.1.1.js";import"../internals-controller-3.1.1.js";import"../color-palettes-3.1.1.js";import"../logger-3.1.1.js";var h,u,m,f,y,v,b,g,k,w,x;const _=t`:host{display:flex}:host([hidden]),[hidden]{display:none!important}#consent,#video{display:inline-flex;align-items:center;flex-direction:column}#video{justify-content:stretch;position:relative}::slotted([slot=thumbnail]),::slotted(iframe),figure{max-width:100%}::slotted([slot=thumbnail]){display:block}::slotted(iframe){width:100%;height:100%;position:absolute;inset-block-start:0;inset-inline-start:0;border:0}figure{--_video-focus-border-color:var(--rh-color-border-interactive);--_video-play-btn-bkg-color:light-dark(rgb(31 31 31/var(--rh-opacity-50,50%)),rgb(255 255 255/var(--rh-opacity-20,20%)));--_video-play-btn-interactive-bkg-color:light-dark(rgb(21 21 21/var(--rh-opacity-80,80%)),rgb(255 255 255/var(--rh-opacity-50,50%)));display:flex;flex-direction:column;margin:0}figcaption{margin-block-start:var(--rh-space-lg,16px)}figcaption ::slotted(p){margin-block-start:0!important}::slotted([slot=caption]){color:var(--rh-color-text-secondary);font-size:var(--rh-font-size-body-text-sm,.875rem)!important;line-height:var(--rh-line-height-body-text,1.5)}#consent,#watermark{position:absolute;inset:0}#consent{justify-content:center;container:consent/inline-size}#consent-body{display:flex;flex-direction:column;align-items:center;position:relative;text-align:center;z-index:5}#consent-message,::slotted([slot=consent-message]){font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-heading-xs,1.25rem);line-height:var(--rh-line-height-heading,1.3)}#consent-message,::slotted([slot=consent-message]:last-of-type){margin-block-end:var(--rh-space-lg,16px)}@container consent (min-width: 576px){#consent-message,::slotted([slot=consent-message]:last-of-type){margin-block-end:var(--rh-space-xl,24px)}#consent-body{padding:var(--rh-space-xl,24px)}#consent-message{font-size:var(--rh-font-size-heading-sm,1.5rem)}}#play{cursor:pointer;display:block;height:100%;inset:0;position:absolute;width:100%}#play:focus-within{border-radius:var(--rh-border-radius-default,3px);outline:var(--rh-border-width-lg,3px) solid var(--_video-focus-border-color);outline-offset:var(--rh-border-width-md,2px)}#play::part(button){background-color:var(--_video-play-btn-bkg-color,var(--rh-color-surface-darkest,#151515));inset-block:calc(50% - var(--rh-length-2xl, 32px)) 0;inset-inline:50% 0;position:absolute;outline:none;transform:translate(-50%);width:var(--rh-length-4xl,64px)}#play:active::part(button),#play:focus::part(button),#play:hover::part(button){background-color:var(--_video-play-btn-interactive-bkg-color)}#play::part(icon){color:var(--rh-color-surface)}#play[hidden],:is(.video,.consent) ::slotted([slot=thumbnail]){opacity:0;pointer-events:none}.visually-hidden{position:fixed;inset-block-start:0;inset-inline-start:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}#autoplay{position:absolute;inset:0;opacity:0;transition:opacity .2s ease-in}.video #autoplay{opacity:1}`;class C extends Event{constructor(){super("consent-click",{bubbles:!0,cancelable:!0})}}class j extends Event{constructor(){super("request-play",{bubbles:!0,cancelable:!0})}}class E extends Event{constructor(){super("play",{bubbles:!0,cancelable:!0})}}let S=class extends e{constructor(){super(...arguments),h.add(this),this.requireConsent=!1,this.consented=!1,this._consentClicked=!1,this._playClicked=!1,this._playStarted=!1,u.set(this,new d(this,"caption","thumbnail",null)),m.set(this,void 0)}get consentButton(){return this.shadowRoot?.querySelector("#consent-button")}get consentClicked(){return this._consentClicked}get focusableElement(){let t;return t=o(this,h,"a",f)?this.consentButton:this.playClicked?this.iframeElement:this.playButton,t}get iframeElement(){return o(this,m,"f")}get playButton(){return this.shadowRoot?.querySelector("#play")}get playClicked(){return this._playClicked}get playStarted(){return this._playStarted}firstUpdated(){s(this,m,o(this,h,"m",y).call(this),"f")}render(){const{playClicked:t}=this,e=o(this,u,"f").hasSlotted("caption"),i=o(this,u,"f").hasSlotted("thumbnail"),s=o(this,m,"f")&&o(this,m,"f").title?`${o(this,m,"f").title} (play video)`:"Play video",a=o(this,h,"a",f),r=!!t||!i,l=a?"consent":r?"video":"thumbnail";return n`
      
      <figure part="figure" class="${c({video:r,consent:a})}">
        
        <div part="video" id="video">
          <div aria-hidden="${"thumbnail"!==l}">
            
            <slot id="thumbnail" name="thumbnail"></slot>
          </div>
          
          <slot></slot>
          <div id="autoplay"><slot name="autoplay"></slot></div>
          ${o(this,h,"a",f)?n`
            <rh-surface id="consent" color-palette="darker">
              <svg id="watermark" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1136 639">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle" width="1136" height="639" transform="translate(150 212)" fill="#212427"/>
                  </clipPath>
                  <clipPath id="clip-path-2">
                    <rect id="Rectangle_1" data-name="Rectangle 1" width="1000.925" height="756.901" fill="none"/>
                  </clipPath>
                </defs>
                <g id="Mask_Group_1" data-name="Mask Group 1" transform="translate(-150 -212)" clip-path="url(#clip-path)">
                  <g id="Group_2000" data-name="Group 2000" transform="translate(50.847 23.483)" opacity="0.2">
                    <g id="Group_1999" data-name="Group 1999" clip-path="url(#clip-path-2)">
                      <path id="Path_3" data-name="Path 3" d="M667.591,436.2c65.743-.063,160.93-13.755,160.857-91.955-.005-6.1-.173-12.042-1.645-17.992L787.482,156.147c-9.114-37.392-17.046-54.39-82.815-87.2C653.636,42.937,542.528-.032,509.656,0c-30.6.026-39.626,39.7-75.9,39.731-35.126.032-61.218-29.408-94.094-29.376-31.72.032-52.114,21.576-67.935,65.8,0,0-44.093,124.706-49.749,142.834a33.047,33.047,0,0,0-1.156,10.213c.047,48.45,191.011,207.231,446.766,207m171.085-60.229c9.114,43.058,9.114,47.589,9.119,53.255.074,73.68-82.641,114.546-191.432,114.645-245.953.226-461.415-143.507-461.5-238.71a97,97,0,0,1,7.889-38.543C114.352,271.234-.1,287.2,0,388.072.148,553.538,392.488,757.185,703.022,756.9c238.021-.216,297.977-107.934,297.9-192.935-.068-66.884-57.932-142.75-162.245-187.994" transform="translate(0.004 0)"/>
                    </g>
                  </g>
                </g>
              </svg>
              
              <div part="consent-body" id="consent-body">
                
                <slot name="consent-message">
                  <p id="consent-message">View this video by opting in to “Advertising Cookies.”</p>
                </slot>
                <rh-button
                  id="consent-button"
                  variant="tertiary"
                  @click="${o(this,h,"m",b)}"
                  @keyup="${o(this,h,"m",g)}"><slot name="consent-button-text">Update preferences</slot></rh-button>
              </div>
            </rh-surface>
          `:""}
          
          <rh-button part="play"
                     id="play"
                     variant="play"
                     ?hidden="${"thumbnail"!==l}"
                     @click="${o(this,h,"m",k)}"
                     @keyup="${o(this,h,"m",w)}">
            <span class="visually-hidden"><slot name="play-button-text">${s}</slot></span>
          </rh-button>
        </div>
        
        <figcaption part="caption" ?hidden="${!e}"><slot name="caption"></slot></figcaption>
      </figure>
    `}};u=new WeakMap,m=new WeakMap,h=new WeakSet,f=function(){return this.requireConsent&&!this.consented},y=function(){const t=this.querySelector("template"),e=t?document.importNode(t.content,!0):void 0;return e?e.querySelector("iframe")?.cloneNode(!0):void 0},v=function(){if(o(this,m,"f")){const t=new URL(o(this,m,"f").getAttribute("src")||"");t.searchParams.append("autoplay","1"),t.searchParams.append("rel","0"),o(this,m,"f").src=t.href,o(this,m,"f").classList.add("rh-yt-iframe"),o(this,m,"f").allow="autoplay",o(this,m,"f").slot="autoplay"}o(this,h,"m",x).call(this)},b=function(){this._consentClicked=!0,this.dispatchEvent(new C)},g=function(t){switch(t.key){case" ":case"Enter":this._consentClicked=!0,this.dispatchEvent(new C)}},k=function(){this.playClicked||(this._playClicked=!0,this.dispatchEvent(new j),o(this,h,"m",v).call(this))},w=function(t){switch(t.key){case" ":case"Enter":this.playClicked||(this._playClicked=!0,this.dispatchEvent(new j),o(this,h,"m",v).call(this))}},x=function(){!o(this,h,"a",f)&&this.playClicked&&this.iframeElement&&(this.appendChild(this.iframeElement),this.iframeElement?.focus(),this._playStarted=!0,this.dispatchEvent(new E))},S.styles=[_],S.shadowRootOptions={...e.shadowRootOptions,delegatesFocus:!0},i([r({type:Boolean,attribute:"require-consent"})],S.prototype,"requireConsent",void 0),i([r({type:Boolean})],S.prototype,"consented",void 0),i([l()],S.prototype,"_consentClicked",void 0),i([l()],S.prototype,"_playClicked",void 0),i([l()],S.prototype,"_playStarted",void 0),S=i([a("rh-video-embed"),p],S);export{C as ConsentClickEvent,S as RhVideoEmbed,j as VideoClickEvent,E as VideoPlayEvent};
