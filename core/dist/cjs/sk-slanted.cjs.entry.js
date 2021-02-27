'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ab12d4a5.js');

const slantedCss = "*,*::before,*::after{box-sizing:border-box}:host{display:block;position:relative;padding:1.5rem 3.8rem;background-color:var(--sk-slanted-background-color, #222);color:var(--sk-slanted-color, #ffcc00)}@media (min-width: 1280px){:host{background-color:transparent;padding-left:3rem;padding-right:3rem}:host::before{content:\"\";display:block;z-index:-1;position:absolute;left:50%;top:0;transform:translateX(-50%) skew(-10deg);width:calc(100% - 1.6rem);height:100%;border-radius:0.3rem;background-color:var(--sk-slanted-background-color, #222)}}";

const Slanted = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
Slanted.style = slantedCss;

exports.sk_slanted = Slanted;
