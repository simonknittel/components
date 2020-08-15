import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sk-tag-list',
  styleUrl: 'tag-list.scss',
  shadow: true
})
export class TagList {
  render() {
    return (
      <Host className="sk-tag-list">
        <slot />
      </Host>
    );
  }
}
