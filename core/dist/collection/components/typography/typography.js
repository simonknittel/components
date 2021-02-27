import { Component, h, Prop, Host } from '@stencil/core';
export class Typography {
  constructor() {
    this.as = 'span';
    this.size = '16-responsive';
    this.color = 'inherit';
    this.lineHeight = '1.5';
  }
  // @Watch('size')
  // watchSize(newValue: string) {
  //   if (['12-responsive', '14-responsive', '16-responsive', '24-responsive', '32-responsive', '112-responsive', '', undefined, null].indexOf(newValue) === -1) {
  //     console.warn(`sk-typography (size): Unknown value: ${newValue} - Allowed values: 12-responsive, 16-responsive (default), 24-responsive, 32-responsive and 112-responsive`)
  //   }
  // }
  // @Watch('color')
  // watchColor(newValue: string) {
  //   if (['inherit', 'yellow', 'black', '', undefined, null].indexOf(newValue) === -1) {
  //     console.warn(`sk-typography (color): Unknown value: ${newValue} - Allowed values: inherit (default), yellow and black`)
  //   }
  // }
  // @Watch('lineHeight')
  // watchLineHeight(newValue: string) {
  //   console.log('validateLineHeight', newValue)
  //   if (['1', '1.2', '1.5', '', undefined, null].indexOf(newValue) === -1) {
  //     console.warn(`sk-typography (lineHeight): Unknown value: ${newValue} - Allowed values: 1, 1.2 and 1.5 (default)`)
  //   }
  // }
  render() {
    const classArray = [];
    if (['1', '1.2', '1.5', '', undefined, null].indexOf(this.lineHeight) === -1) {
      console.warn(`sk-typography (lineHeight): Unknown value: ${this.lineHeight} - Allowed values: 1, 1.2 and 1.5 (default)`);
    }
    else {
      classArray.push('line-height-' + this.lineHeight.replace('.', ''));
    }
    if (['inherit', 'yellow', 'black', 'light-black', 'white', '', undefined, null].indexOf(this.color) === -1) {
      console.warn(`sk-typography (color): Unknown value: ${this.color} - Allowed values: inherit (default), yellow, black, light-black and white`);
    }
    else {
      classArray.push('color-' + this.color);
    }
    if (['12-responsive', '14-responsive', '16-responsive', '24-responsive', '32-responsive', '112-responsive', '', undefined, null].indexOf(this.size) === -1) {
      console.warn(`sk-typography (size): Unknown value: ${this.size} - Allowed values: 12-responsive, 16-responsive (default), 24-responsive, 32-responsive and 112-responsive`);
    }
    else {
      classArray.push('size-' + this.size);
    }
    const classes = classArray.join(' ');
    switch (this.as) {
      case 'h1':
        return (h(Host, { class: "block" },
          h("h1", { class: classes },
            h("slot", null))));
      case 'h2':
        return (h(Host, { class: "block" },
          h("h2", { class: classes },
            h("slot", null))));
      case 'h3':
        return (h(Host, { class: "block" },
          h("h3", { class: classes },
            h("slot", null))));
      case 'p':
        return (h(Host, { class: "block" },
          h("p", { class: classes },
            h("slot", null))));
      default:
        return h(Host, null,
          h("span", { class: classes },
            h("slot", null)));
    }
  }
  static get is() { return "sk-typography"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["typography.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["typography.css"]
  }; }
  static get properties() { return {
    "as": {
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
      "attribute": "as",
      "reflect": false,
      "defaultValue": "'span'"
    },
    "size": {
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
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'16-responsive'"
    },
    "color": {
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
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'inherit'"
    },
    "lineHeight": {
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
      "attribute": "line-height",
      "reflect": false,
      "defaultValue": "'1.5'"
    }
  }; }
}
