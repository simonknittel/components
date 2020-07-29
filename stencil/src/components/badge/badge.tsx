import { Component, h } from '@stencil/core';

@Component({
  tag: 'sk-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class Badge {
  render() {
    return (
      <sk-typography><slot /></sk-typography>
    );
  }
}
