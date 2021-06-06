import { r as registerInstance, h, H as Host } from './index-4992cb78.js';

const typographyCss = ":host{display:block}:host>*{margin-top:0;margin-bottom:0;font-family:\"Open Sans\", sans-serif}.size-12-responsive{font-size:0.55rem}@media (min-width: 600px){.size-12-responsive{font-size:0.75rem}}.size-14-responsive{font-size:0.675rem}@media (min-width: 600px){.size-14-responsive{font-size:0.875rem}}.size-16-responsive{font-size:0.8rem}@media (min-width: 600px){.size-16-responsive{font-size:1rem}}.size-24-responsive{font-size:1.5rem}.size-32-responsive{font-size:2rem}.size-112-responsive{font-size:7rem}.color-inherit{color:inherit}.color-yellow{color:#ffcc00}.color-black{color:#222}.color-light-black{color:#444}.color-white{color:#fff5cc}.line-height-1,.line-height-12,.line-height-15{display:inline-block}.line-height-1{line-height:1}.line-height-12{line-height:1.2}.line-height-15{line-height:1.5}";

const Typography = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
        return (h(Host, { class: "block" }, h("h1", { class: classes }, h("slot", null))));
      case 'h2':
        return (h(Host, { class: "block" }, h("h2", { class: classes }, h("slot", null))));
      case 'h3':
        return (h(Host, { class: "block" }, h("h3", { class: classes }, h("slot", null))));
      case 'p':
        return (h(Host, { class: "block" }, h("p", { class: classes }, h("slot", null))));
      default:
        return h(Host, null, h("span", { class: classes }, h("slot", null)));
    }
  }
};
Typography.style = typographyCss;

export { Typography as sk_typography };
