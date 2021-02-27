'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ab12d4a5.js');

const badgeCss = "*,*::before,*::after{box-sizing:border-box}:host{display:inline-flex;align-items:center}sk-typography{display:inline-flex;padding:0.1rem 0.3rem 0.1rem 0.3rem;border-radius:0.25rem;background-color:#222;font-weight:400}";

const Badge = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("sk-typography", { size: "12-responsive", color: "yellow" }, index.h("slot", null)));
  }
};
Badge.style = badgeCss;

exports.sk_badge = Badge;
