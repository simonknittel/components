import { r as registerInstance, h, e as Host } from './index-8c43d675.js';

const notFoundCss = "*,*::before,*::after{box-sizing:border-box}:host{display:block;text-align:center}sk-typography.block{display:block}sk-typography:first-of-type{color:#ffcc00}h1,h2{margin-top:0;margin-bottom:0;line-height:1}h1{line-height:1}sk-link{margin-top:1rem}";

const NotFound = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.linkPreventClick = false;
    }
    render() {
        return (h(Host, null, h("sk-typography", { as: "h1", size: "112-responsive", lineHeight: "1" }, this.heading), h("sk-typography", { as: "h2", size: "24-responsive" }, this.subheading), h("sk-link", { href: this.linkHref, icon: this.linkIcon, preventClick: this.linkPreventClick }, this.linkText)));
    }
};
NotFound.style = notFoundCss;

export { NotFound as sk_not_found };
