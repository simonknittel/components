import { r as registerInstance, h, H as Host } from './index-4992cb78.js';

const tagCss = "*,*::before,*::after{box-sizing:border-box}:host{display:inline-block;position:relative;padding:0.3rem 0.5rem 0.3rem 0.5rem;border-radius:2px;border-width:1px;border-style:solid;border-color:var(--sk-tag-border-color, rgba(34, 34, 34, 0.5));color:var(--sk-tag-color, #222)}:host::before{content:\"#\";opacity:0.5;margin-right:0.25em}:host(:hover){cursor:help}:host(:hover) .tooltip{opacity:1;transform:translateY(0)}sk-typography{display:inline-flex}.tooltip{pointer-events:none;opacity:0;position:absolute;left:0;width:100%;bottom:calc(100% + .5rem);transform:translateY(1rem);padding:0.3rem 0.5rem 0.3rem 0.5rem;border-radius:2px;background-color:var(--sk-tag-tooltip-background-color, #222);color:var(--sk-tag-tooltip-color, #fff5cc);transition:opacity 0.25s, transform 0.25s}";

const Tag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("sk-typography", { size: "14-responsive" }, h("slot", null)), h("sk-typography", { class: "tooltip", size: "12-responsive" }, this.description)));
  }
};
Tag.style = tagCss;

export { Tag as sk_tag };
