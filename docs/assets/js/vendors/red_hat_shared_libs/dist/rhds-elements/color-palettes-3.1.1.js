import{i as t,b as e,c as r}from"./custom-element-3.1.1.js";import"./lit-html-3.1.1.js";import{L as o}from"./logger-3.1.1.js";
/**
 * Do not edit directly, this file was auto-generated.
 *
 * @license Copyright (c) 2022 Red Hat UX MIT License
 */var s,l,a,c,h=t`
:host { color-scheme: inherit; }
:host([color-palette^="dark"]) { color-scheme: only dark; }
:host([color-palette^="light"]) { color-scheme: only light; }
:host([color-palette="lightest"]) { --rh-color-surface: var(--rh-color-surface-lightest, #ffffff); }
:host([color-palette="lighter"]) { --rh-color-surface: var(--rh-color-surface-lighter, #f2f2f2); }
:host([color-palette="light"]) { --rh-color-surface: var(--rh-color-surface-light, #e0e0e0); }
:host([color-palette="dark"]) { --rh-color-surface: var(--rh-color-surface-dark, #383838); }
:host([color-palette="darker"]) { --rh-color-surface: var(--rh-color-surface-darker, #1f1f1f); }
:host([color-palette="darkest"]) { --rh-color-surface: var(--rh-color-surface-darkest, #151515); }`;const i=Object.freeze(["light","lighter","lightest","dark","darker","darkest"]);class f{constructor(t,h){s.set(this,void 0),l.set(this,void 0),a.set(this,void 0),c.set(this,void 0),e(this,s,t,"f"),e(this,l,new Set(h),"f"),e(this,a,r(this,s,"f").colorPalette,"f"),r(this,s,"f").addController(this),e(this,c,new o(t),"f")}hostUpdate(){const{colorPalette:t}=r(this,s,"f");t&&!r(this,l,"f").has(t)?(r(this,c,"f").warn(`color-palette="${t}" is not allowed`),r(this,s,"f").colorPalette=r(this,a,"f")):e(this,a,t,"f")}}function n(t,e=i){const{attribute:r,reflect:o}=t.properties?.colorPalette??t.getPropertyOptions("colorPalette")??{};if("color-palette"!==r||!o)throw new Error("@colorPalettes requires the `color-palette` attribute.");t.addInitializer(t=>new f(t,[...e]));const s=Array.isArray(t.styles)?t.styles:t.styles?[t.styles]:[];t.styles=[h,...s]}function p(...t){return t.every(t=>"string"==typeof t)?function(e){return n(e,t)}:n(...t)}s=new WeakMap,l=new WeakMap,a=new WeakMap,c=new WeakMap;export{p as c};
