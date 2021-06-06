import { r as registerInstance, h } from './index-4992cb78.js';

const badgeCss = "*,*::before,*::after{box-sizing:border-box}:host{display:inline-flex;align-items:center}sk-typography{display:inline-flex;padding:0.1rem 0.3rem 0.1rem 0.3rem;border-radius:0.25rem;background-color:#222;font-weight:400}";

const Badge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("sk-typography", { size: "12-responsive", color: "yellow" }, h("slot", null)));
  }
};
Badge.style = badgeCss;

export { Badge as sk_badge };
