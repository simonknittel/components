import{r,h as o}from"./p-8d66a717.js";const t=class{constructor(o){r(this,o)}render(){return o("div",{class:"wrapper "+(this.description?"has-description":""),lang:"en"},o("sk-typography",{class:"content",size:"14-responsive"},o("slot",null)),this.description?o("sk-typography",{class:"tooltip",size:"12-responsive",innerHTML:this.description}):null)}};t.style='*,*::before,*::after{box-sizing:border-box}:host{display:inline-block}:host(:hover) .tooltip{opacity:1;transform:translateY(0)}.wrapper{position:relative;padding:0.3rem 0.5rem 0.3rem 0.5rem;border-radius:2px;border-width:1px;border-style:solid;border-color:var(--sk-tag-border-color, rgba(34, 34, 34, 0.5));color:var(--sk-tag-color, #222)}.wrapper::before{content:"#";opacity:0.5;margin-right:0.25em}.wrapper.has-description{cursor:help}.content{display:inline-flex;hyphens:auto}.tooltip{pointer-events:none;opacity:0;position:absolute;left:0;width:100%;bottom:calc(100% + .5rem);transform:translateY(1rem);padding:0.3rem 0.5rem 0.3rem 0.5rem;border-radius:2px;background-color:var(--sk-tag-tooltip-background-color, #222);color:var(--sk-tag-tooltip-color, #fff5cc);transition:opacity 0.25s, transform 0.25s}';export{t as sk_tag}