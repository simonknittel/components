import { r as registerInstance, c as createEvent, h } from './index-4992cb78.js';

const linkCss = "*,*::before,*::after{box-sizing:border-box}:host{display:inline-block;vertical-align:middle}a{display:inline-flex;align-items:center;color:inherit;text-decoration:none}a:hover{opacity:0.5}a.color-yellow{color:#ffcc00}a.color-black{color:#222}a.color-light-black{color:#444}a.color-white{color:#fff5cc}a.icon-position-right .text{margin-left:0;margin-right:0.5rem}.text{display:inline-block;margin-left:0.5rem;text-decoration:underline}";

const Link = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clicked = createEvent(this, "clicked", 7);
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
    return (h("a", { href: this.href, target: this.target, rel: this.rel, class: classArray.join(' '), onClick: this.onClick.bind(this) }, this.iconPosition !== 'right' ? this.icon : '', h("sk-typography", { class: "text" }, h("slot", null)), this.iconPosition == 'right' ? this.icon : ''));
  }
};
Link.style = linkCss;

export { Link as sk_link };
