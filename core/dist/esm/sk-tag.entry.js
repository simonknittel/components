import { r as registerInstance, h, H as Host } from './index-4992cb78.js';

const tagCss = "*,*::before,*::after{box-sizing:border-box}:host{display:inline-block;padding:0.3rem 0.5rem 0.3rem 0.5rem;border-radius:2px;border-width:1px;border-style:solid;border-color:var(--sk-tag-border-color, rgba(34, 34, 34, 0.5));color:var(--sk-tag-color, #222)}:host::before{content:\"#\";opacity:0.5;margin-right:0.25em}sk-typography{display:inline-flex}";

const Tag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("sk-typography", { size: "14-responsive" }, h("slot", null))));
  }
};
Tag.style = tagCss;

export { Tag as sk_tag };