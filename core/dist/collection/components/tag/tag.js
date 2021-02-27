import { Component, Host, h } from '@stencil/core';
export class Tag {
  render() {
    return (h(Host, null,
      h("sk-typography", { size: "14-responsive" },
        h("slot", null))));
  }
  static get is() { return "sk-tag"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["tag.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["tag.css"]
  }; }
}
