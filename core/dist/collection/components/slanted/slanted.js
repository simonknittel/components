import { Component, Host, h } from '@stencil/core';
export class Slanted {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "sk-slanted"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["slanted.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["slanted.css"]
  }; }
}
