import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sk-typography',
  styleUrl: 'typography.css',
  shadow: true
})
export class Typography {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
