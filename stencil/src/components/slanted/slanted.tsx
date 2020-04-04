import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sk-slanted',
  styleUrl: 'slanted.scss',
  shadow: true
})
export class Slanted {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
