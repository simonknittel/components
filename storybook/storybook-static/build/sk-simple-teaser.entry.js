import { r as registerInstance, h, e as Host } from './index-8c43d675.js';

const simpleTeaserCss = "*,*::before,*::after{box-sizing:border-box}:host{display:block;overflow:hidden;position:relative;border-radius:1rem;border:1px solid rgba(34, 34, 34, 0.5)}.text{padding:1rem 1rem 4.3rem 1rem}.heading{display:block;margin-top:0;margin-bottom:1rem}.badge{display:inline-block;margin-left:0.5rem;padding:0.1rem 0.3rem 0.1rem 0.3rem;border-radius:0.25rem;background-color:#222;color:#ffcc00;font-size:0.8em;font-weight:400}.tags{margin-bottom:0.5rem}.link{display:block;position:absolute;left:0;right:0;bottom:0;margin-right:0;padding:1rem;border-radius:0;border-top:1px solid rgba(34, 34, 34, 0.5);text-decoration:none;text-align:right;color:#222}.link:hover{background-color:#222;color:#ffcc00}";

const SimpleTeaser = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "text" }, h("sk-typography", { class: "heading", as: "h3" }, this.heading, this.badge &&
            h("span", { class: "badge" }, this.badge)), h("sk-tag-list", { items: this.tags }), h("slot", null)), h("a", { href: this.href, target: this.target, rel: this.rel, class: "link" }, h("sk-typography", null, this.linkText))));
    }
};
SimpleTeaser.style = simpleTeaserCss;

export { SimpleTeaser as sk_simple_teaser };
