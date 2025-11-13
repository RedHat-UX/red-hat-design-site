import{i as t,_ as e,a as r,c as s,t as a}from"../custom-element-3.1.1.js";import{x as o,B as n}from"../lit-html-3.1.1.js";import{n as i}from"../property-3.1.1.js";import{t as l}from"../themable-3.1.1.js";var c,d;const u=t`:host{display:block}`,m="truncate-btn",b=`${m}-container`;const h=o`
  <button class="${m}"
          aria-expanded="false"
          title="Show middle breadcrumb items"
          type="button">
    <span aria-hidden="true">&#8230;</span>
    <span class="visually-hidden">
      Show middle breadcrumb items
    </span>
  </button>`;let p=class extends r{constructor(){super(...arguments),c.add(this),this.truncate=!1}render(){const t=this.accessibleLabel?this.accessibleLabel:"Breadcrumb";return o`
      
      <nav id="container"
           part="container"
           aria-label="${t}"
           @click="${s(this,c,"m",d)}">
        
        <slot></slot>
      </nav>
    `}firstUpdated(){if(!this.truncate)return;const t=this.querySelector("ol");if(!t)return;if(t.children.length<5)return;const e=t.querySelectorAll("li:nth-child(n+2):nth-last-child(n+3)");for(const t of e)t.setAttribute("hidden","true");const r=document.createElement("li");r.className=b,n(h,r),e[0].before(r)}};c=new WeakSet,d=function(t){let e;if(this.truncate&&((r=t.target)&&r instanceof HTMLElement&&r.closest(`.${m}`))&&(e=this.querySelectorAll(":scope > ol > li"))){for(const t of e)t.removeAttribute("hidden");t.target.closest(`.${b}`)?.remove()}var r},p.styles=[u],e([i({attribute:"accessible-label"})],p.prototype,"accessibleLabel",void 0),e([i({reflect:!0})],p.prototype,"variant",void 0),e([i({reflect:!0,type:Boolean})],p.prototype,"truncate",void 0),p=e([a("rh-breadcrumb"),l],p);export{p as RhBreadcrumb};
