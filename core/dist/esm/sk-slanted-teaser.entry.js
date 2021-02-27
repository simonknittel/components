import { r as registerInstance, h, H as Host } from './index-4992cb78.js';

const slantedTeaserCss = "*,*::before,*::after{box-sizing:border-box}:host{display:block}.text{position:relative;height:calc(100% - 1.75rem);padding:2rem 3.8rem 3.5rem 3.8rem}.text::before{content:\"\";display:block;z-index:-1;position:absolute;left:50%;top:0;transform:translateX(-50%) skew(-10deg);width:calc(100% - 1.6rem);height:100%;border-radius:0.3rem;background-color:var(--sk-slanted-teaser-text-background-color, #ffcc00)}.heading{display:block;margin-top:0;margin-bottom:0.5rem}sk-badge{position:relative;top:-0.1rem;margin-left:0.5rem}.tags{margin-bottom:0.5rem}sk-tag{margin-right:0.5rem;margin-bottom:0.5rem}.link{display:block;position:relative;margin-top:-1.75rem;padding:1rem 3.8rem;text-align:right;text-decoration:none;transition:transform 0.2s}.link::before{content:\"\";display:block;z-index:-1;position:absolute;left:50%;top:0;transform:translateX(-50%) skew(-10deg);width:calc(100% - 1.6rem);height:100%;border-radius:0.3rem;background-color:var(--sk-slanted-teaser-link-background-color, #222)}.link:hover{transform:translateX(0.5rem)}";

const SimpleTeaser = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "text" }, h("sk-typography", { class: "heading", as: "h3" }, this.heading, this.badge &&
      h("sk-badge", null, this.badge)), h("div", { class: "tags" }, this.tags.map(item => h("sk-tag", null, item))), h("slot", null)), h("a", { href: this.href, target: this.target, rel: this.rel, class: "link" }, h("sk-typography", { color: "yellow" }, this.linkText))));
  }
};
SimpleTeaser.style = slantedTeaserCss;

export { SimpleTeaser as sk_slanted_teaser };
