import { Component, Host, h, Prop } from '@stencil/core';
export class SimpleTeaser {
  render() {
    return (h(Host, null,
      h("div", { class: "text" },
        h("sk-typography", { class: "heading", as: "h3" },
          this.heading,
          this.badge &&
            h("sk-badge", null, this.badge)),
        h("div", { class: "tags" }, this.tags.map(item => h("sk-tag", null, item))),
        h("slot", null)),
      h("a", { href: this.href, target: this.target, rel: this.rel, class: "link" },
        h("sk-typography", { color: "yellow" }, this.linkText))));
  }
  static get is() { return "sk-slanted-teaser"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["slanted-teaser.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["slanted-teaser.css"]
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
