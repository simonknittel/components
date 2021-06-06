import { Component, Host, h, Prop } from '@stencil/core';
export class SimpleTeaser {
  render() {
    console.warn('sk-simple-teaser: This component is deprecated and will be removed in a future release.');
    return (h(Host, null,
      h("div", { class: "text" },
        h("sk-typography", { class: "heading", as: "h3" },
          this.heading,
          this.badge &&
            h("span", { class: "badge" }, this.badge)),
        h("div", { class: "tags" }, this.tags.map(item => h("sk-tag", null, item))),
        h("slot", null)),
      h("a", { href: this.href, target: this.target, rel: this.rel, class: "link" },
        h("sk-typography", null, this.linkText))));
  }
  static get is() { return "sk-simple-teaser"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["simple-teaser.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["simple-teaser.css"]
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
    "badge": {
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
      "attribute": "badge",
      "reflect": false
    },
    "tags": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<string>",
        "resolved": "string[]",
        "references": {
          "Array": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
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
    "target": {
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
      "attribute": "target",
      "reflect": false
    },
    "rel": {
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
      "attribute": "rel",
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
    }
  }; }
}
