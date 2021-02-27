'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ab12d4a5.js');

const notFoundCss = "*,*::before,*::after{box-sizing:border-box}:host{display:block;text-align:center}sk-typography.block{display:block}sk-typography:first-of-type{color:#ffcc00}h1,h2{margin-top:0;margin-bottom:0;line-height:1}h1{line-height:1}sk-link{margin-top:1rem}";

const NotFound = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.linkPreventClick = false;
  }
  render() {
    return (index.h(index.Host, null, index.h("sk-typography", { as: "h1", size: "112-responsive", lineHeight: "1" }, this.heading), index.h("sk-typography", { as: "h2", size: "24-responsive" }, this.subheading), index.h("sk-link", { href: this.linkHref, icon: this.linkIcon, preventClick: this.linkPreventClick }, this.linkText)));
  }
};
NotFound.style = notFoundCss;

exports.sk_not_found = NotFound;
