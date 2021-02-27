import { Component, Host, h, Prop } from '@stencil/core';
export class NotFound {
  constructor() {
    this.linkPreventClick = false;
  }
  render() {
    return (h(Host, null,
      h("sk-typography", { as: "h1", size: "112-responsive", lineHeight: "1" }, this.heading),
      h("sk-typography", { as: "h2", size: "24-responsive" }, this.subheading),
      h("sk-link", { href: this.linkHref, icon: this.linkIcon, preventClick: this.linkPreventClick }, this.linkText)));
  }
  static get is() { return "sk-not-found"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["not-found.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["not-found.css"]
  }; }
  static get properties() { return {
    "heading": {
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
      "attribute": "heading",
      "reflect": false
    },
    "subheading": {
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
      "attribute": "subheading",
      "reflect": false
    },
    "linkHref": {
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
      "attribute": "link-href",
      "reflect": false
    },
    "linkText": {
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
      "attribute": "link-text",
      "reflect": false
    },
    "linkIcon": {
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
      "attribute": "link-icon",
      "reflect": false
    },
    "linkPreventClick": {
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
      "attribute": "link-prevent-click",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
