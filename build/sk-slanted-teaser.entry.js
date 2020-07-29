import { r as registerInstance, h, e as Host } from './index-8c43d675.js';

const slantedTeaserCss = "*,*::before,*::after{box-sizing:border-box}:host{display:block}.text{position:relative;padding:2rem 3.8rem 3rem 3.8rem}.text::before{content:\"\";display:block;z-index:-1;position:absolute;left:50%;top:0;transform:translateX(-50%) skew(-10deg);width:calc(100% - 1.6rem);height:100%;background-color:var(--sk-slanted-teaser-text-background-color, #ffcc00)}.heading{display:block;margin-top:0;margin-bottom:1rem}.badge{display:inline-block;margin-left:0.5rem;padding:0.1rem 0.3rem 0.1rem 0.3rem;border-radius:0.25rem;background-color:#222;color:#ffcc00;font-size:0.8em;font-weight:400}.tags{margin-bottom:0.5rem}.link{display:block;position:relative;margin-top:-1rem;padding:1rem 3.8rem;color:#ffcc00;text-align:right;text-decoration:none;transition:transform 0.2s}.link::before{content:\"\";display:block;z-index:-1;position:absolute;left:50%;top:0;transform:translateX(-50%) skew(-10deg);width:calc(100% - 1.6rem);height:100%;background-color:var(--sk-slanted-teaser-link-background-color, #222)}.link:hover{transform:translateX(0.5rem)}";

const SimpleTeaser = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "text" }, h("sk-typography", { class: "heading", as: "h3" }, this.heading, this.badge &&
            h("span", { class: "badge" }, this.badge)), h("sk-tag-list", { items: this.tags }), h("slot", null)), h("a", { href: this.href, target: this.target, rel: this.rel, class: "link" }, h("sk-typography", null, this.linkText))));
    }
};
SimpleTeaser.style = slantedTeaserCss;

export { SimpleTeaser as sk_slanted_teaser };
