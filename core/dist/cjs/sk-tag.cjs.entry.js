'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ab12d4a5.js');

const tagCss = "*,*::before,*::after{box-sizing:border-box}:host{display:inline-block}:host(:hover) .tooltip{opacity:1;transform:translateY(0)}.wrapper{position:relative;padding:0.3rem 0.5rem 0.3rem 0.5rem;border-radius:2px;border-width:1px;border-style:solid;border-color:var(--sk-tag-border-color, rgba(34, 34, 34, 0.5));color:var(--sk-tag-color, #222)}.wrapper::before{content:\"#\";opacity:0.5;margin-right:0.25em}.wrapper.has-description{cursor:help}.content{display:inline-flex;hyphens:auto}.tooltip{pointer-events:none;opacity:0;position:absolute;left:0;width:100%;bottom:calc(100% + .5rem);transform:translateY(1rem);padding:0.3rem 0.5rem 0.3rem 0.5rem;border-radius:2px;background-color:var(--sk-tag-tooltip-background-color, #222);color:var(--sk-tag-tooltip-color, #fff5cc);transition:opacity 0.25s, transform 0.25s}";

const Tag = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: `wrapper ${this.description ? 'has-description' : ''}`, lang: "en" }, index.h("sk-typography", { class: "content", size: "14-responsive" }, index.h("slot", null)), this.description ?
      index.h("sk-typography", { class: "tooltip", size: "12-responsive", innerHTML: this.description })
      : null));
  }
};
Tag.style = tagCss;

exports.sk_tag = Tag;
