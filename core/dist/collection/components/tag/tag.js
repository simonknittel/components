import { Component, h, Prop } from '@stencil/core';
export class Tag {
  render() {
    return (h("div", { class: `wrapper ${this.description ? 'has-description' : ''}`, lang: "en" },
      h("sk-typography", { class: "content", size: "14-responsive" },
        h("slot", null)),
      this.description ?
        h("sk-typography", { class: "tooltip", size: "12-responsive", innerHTML: this.description })
        : null));
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "description",
      "reflect": false
    }
  }; }
}
