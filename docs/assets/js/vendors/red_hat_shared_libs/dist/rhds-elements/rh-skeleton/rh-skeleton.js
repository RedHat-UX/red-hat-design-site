import{i as e,_ as t,a as s,t as o}from"../custom-element-3.1.1.js";import{x as r}from"../lit-html-3.1.1.js";import{n as i}from"../property-3.1.1.js";const l=e`.visually-hidden{border:0;clip:rect(0,0,0,0);block-size:var(--rh-length-4xs,1px);margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;inline-size:var(--rh-length-4xs,1px)}`;let p=class extends s{render(){return r`
      <span class="visually-hidden">
        
        <slot>Loading...</slot>
      </span>
    `}};p.styles=[l],t([i({reflect:!0})],p.prototype,"type",void 0),t([i({reflect:!0})],p.prototype,"size",void 0),p=t([o("rh-skeleton")],p);export{p as RhSkeleton};
