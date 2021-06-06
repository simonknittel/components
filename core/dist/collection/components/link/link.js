import { Component, Prop, h, Event } from '@stencil/core';
export class Link {
  constructor() {
    this.iconPosition = 'left';
    this.color = 'inherit';
    this.preventClick = false;
  }
  onClick(e) {
    if (this.preventClick)
      e.preventDefault(); // TODO: For some reason not cancelable from Vue
    this.clicked.emit(e);
  }
  render() {
    const classArray = [];
    if (['left', 'right', '', undefined, null].indexOf(this.iconPosition) === -1) {
      console.warn(`sk-link (iconPosition): Unknown value: ${this.iconPosition} - Allowed values: left (default) and right`);
    }
    else {
      classArray.push('icon-position-' + this.iconPosition);
    }
    if (['inherit', 'yellow', 'black', 'light-black', 'white', '', undefined, null].indexOf(this.color) === -1) {
      console.warn(`sk-link (color): Unknown value: ${this.color} - Allowed values: inherit (default), yellow, black, light-black and white`);
    }
    else {
      classArray.push('color-' + this.color);
    }
    return (h("a", { href: this.href, target: this.target, rel: this.rel, class: classArray.join(' '), onClick: this.onClick.bind(this) },
      this.iconPosition !== 'right' ? this.icon : '',
      h("sk-typography", { class: "text" },
        h("slot", null)),
      this.iconPosition == 'right' ? this.icon : ''));
  }
  static get is() { return "sk-link"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["link.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["link.css"]
  }; }
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
    "iconPosition": {
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
      "attribute": "icon-position",
      "reflect": false,
      "defaultValue": "'left'"
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
    "preventClick": {
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
      "attribute": "prevent-click",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "clicked",
      "name": "clicked",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "MouseEvent",
        "resolved": "MouseEvent",
        "references": {
          "MouseEvent": {
            "location": "global"
          }
        }
      }
    }]; }
}
