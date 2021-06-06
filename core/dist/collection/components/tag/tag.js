import { Component, Host, h, Prop } from '@stencil/core';
export class Tag {
  render() {
    return (h(Host, null,
      h("sk-typography", { size: "14-responsive" },
        h("slot", null)),
      h("sk-typography", { class: "tooltip", size: "12-responsive" }, this.description)));
  }
  static get is() { return "sk-tag"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tag.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tag.css"]
  }; }
  static get properties() { return {
    "description": {
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
      "attribute": "description",
      "reflect": false
    }
  }; }
}
