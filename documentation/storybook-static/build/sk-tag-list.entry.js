import { r as registerInstance, h, e as Host } from './index-8c43d675.js';

const tagListCss = "*,*::before,*::after{box-sizing:border-box}:host{display:flex;flex-wrap:wrap;list-style:none;margin-top:0;margin-bottom:0;padding-left:0}sk-tag{margin-right:0.5rem;margin-bottom:0.5rem}sk-tag:last-child{margin-right:0}";

const TagList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { className: "sk-tag-list" }, this.items.map(item => h("sk-tag", { text: item }))));
    }
};
TagList.style = tagListCss;

export { TagList as sk_tag_list };
