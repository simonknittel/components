'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ab12d4a5.js');

const simpleTeaserCss = "*,*::before,*::after{box-sizing:border-box}:host{display:block;overflow:hidden;position:relative;border-radius:1rem;border:1px solid rgba(34, 34, 34, 0.5)}.text{padding:1rem 1rem 4.3rem 1rem}.heading{display:block;margin-top:0;margin-bottom:1rem}.badge{display:inline-block;margin-left:0.5rem;padding:0.1rem 0.3rem 0.1rem 0.3rem;border-radius:0.25rem;background-color:#222;color:#ffcc00;font-size:0.8em;font-weight:400}.tags{margin-bottom:0.5rem}sk-tag{margin-right:0.5rem;margin-bottom:0.5rem}.link{display:block;position:absolute;left:0;right:0;bottom:0;margin-right:0;padding:1rem;border-radius:0;border-top:1px solid rgba(34, 34, 34, 0.5);text-decoration:none;text-align:right;color:#222}.link:hover{background-color:#222;color:#ffcc00}";

const SimpleTeaser = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    console.warn('sk-simple-teaser: This component is deprecated and will be removed in a future release.');
    return (index.h(index.Host, null, index.h("div", { class: "text" }, index.h("sk-typography", { class: "heading", as: "h3" }, this.heading, this.badge &&
      index.h("span", { class: "badge" }, this.badge)), index.h("div", { class: "tags" }, this.tags.map(item => index.h("sk-tag", null, item))), index.h("slot", null)), index.h("a", { href: this.href, target: this.target, rel: this.rel, class: "link" }, index.h("sk-typography", null, this.linkText))));
  }
};
SimpleTeaser.style = simpleTeaserCss;

exports.sk_simple_teaser = SimpleTeaser;
