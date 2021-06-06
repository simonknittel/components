import { Component, h, Prop, getAssetPath } from '@stencil/core';
export class SocialLink {
  constructor() {
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
      }, title: this.titleAttr },
      h("span", { class: "icon" },
        h("svg", { viewBox: "0 0 " + viewbox[this.icon] },
          h("use", { xlinkHref: getAssetPath(`./assets/${this.icon}-brands.svg`) + '#id' }))),
      h("sk-typography", { class: "text" }, this.text)));
  }
  static get is() { return "sk-social-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["social-link.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["social-link.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "href": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "href",
      "reflect": false
    },
    "text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text",
      "reflect": false
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon",
      "reflect": false
    },
    "compact": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "compact",
      "reflect": false,
      "defaultValue": "false"
    },
    "compactOnSmall": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "compact-on-small",
      "reflect": false,
      "defaultValue": "false"
    },
    "titleAttr": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "title-attr",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
}
