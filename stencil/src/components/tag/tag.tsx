import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sk-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  render() {
    return (
      <Host>
        <sk-typography size="14-responsive"><slot /></sk-typography>
      </Host>
    )
  }
}
