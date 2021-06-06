import { r as registerInstance, h, g as getAssetPath } from './index-b18d8697.js';

const socialLinkCss = "*,*::before,*::after{box-sizing:border-box}:host{display:inline-block;vertical-align:middle}a{display:inline-flex;align-items:center;padding:1rem;color:#ffcc00;border-radius:2px;text-decoration:none}a.compact,a.compact-on-small{padding:0}a.compact .text,a.compact-on-small .text{display:none}.icon{display:inline-block;vertical-align:middle;width:2rem;height:2rem;padding:0.25rem;border-radius:2px;background-color:#ffcc00;color:#222}.icon svg{width:100%;height:100%}.text{margin-left:0.5rem}@media (min-width: 600px){a:hover:not(.compact){background-color:#ffcc00;color:#222}a:hover .icon{background-color:#222;color:#ffcc00}a.compact-on-small{padding:1rem}a.compact-on-small .text{display:inline-block}}";

const SocialLink = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.compact = false;
    this.compactOnSmall = false;
    this.titleAttr = '';
  }
  render() {
    const viewbox = {
      'github': '496 512',
      'twitter': '512 512',
      'patreon': '512 512',
      'stack-overflow': '384 512',
      'xing': '384 512',
      'linkedin-in': '448 512'
    };
    return (h("a", { href: this.href, target: "_blank", rel: "noopener", class: {
        compact: this.compact,
        'compact-on-small': this.compactOnSmall,
      }, title: this.titleAttr }, h("span", { class: "icon" }, h("svg", { viewBox: "0 0 " + viewbox[this.icon] }, h("use", { xlinkHref: getAssetPath(`./assets/${this.icon}-brands.svg`) + '#id' }))), h("sk-typography", { class: "text" }, this.text)));
  }
  static get assetsDirs() { return ["assets"]; }
};
SocialLink.style = socialLinkCss;

export { SocialLink as sk_social_link };
