import { Component, h } from '@stencil/core';
export class Badge {
  render() {
    return (h("sk-typography", { size: "12-responsive", color: "yellow" },
      h("slot", null)));
  }
  static get is() { return "sk-badge"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["badge.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["badge.css"]
  }; }
}
