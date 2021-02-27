import { r as registerInstance, h, e as Host } from './index-8c43d675.js';

const tagCss = "*,*::before,*::after{box-sizing:border-box}:host{display:inline-block;padding:0.4rem 0.5rem 0.3rem 0.5rem;border-radius:2px;border-width:1px;border-style:solid;border-color:var(--sk-tag-border-color, rgba(34, 34, 34, 0.5));color:var(--sk-tag-color, #222)}:host::before{content:\"#\";opacity:0.5;margin-right:0.25em}";

const Tag = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("sk-typography", null, this.text)));
    }
};
Tag.style = tagCss;

export { Tag as sk_tag };
