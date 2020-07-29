import { r as registerInstance, h } from './index-8c43d675.js';

const badgeCss = "*,*::before,*::after{box-sizing:border-box}:host{display:inline-block}sk-typography{display:inline-block;padding:0.1rem 0.3rem 0.1rem 0.3rem;border-radius:0.25rem;background-color:#222;color:#ffcc00;font-size:0.8em;font-weight:400}";

const Badge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("sk-typography", null, h("slot", null)));
    }
};
Badge.style = badgeCss;

export { Badge as sk_badge };
