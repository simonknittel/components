'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ab12d4a5.js');

const tagCss = "*,*::before,*::after{box-sizing:border-box}:host{display:inline-block;padding:0.3rem 0.5rem 0.3rem 0.5rem;border-radius:2px;border-width:1px;border-style:solid;border-color:var(--sk-tag-border-color, rgba(34, 34, 34, 0.5));color:var(--sk-tag-color, #222)}:host::before{content:\"#\";opacity:0.5;margin-right:0.25em}sk-typography{display:inline-flex}";

const Tag = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("sk-typography", { size: "14-responsive" }, index.h("slot", null))));
  }
};
Tag.style = tagCss;

exports.sk_tag = Tag;
