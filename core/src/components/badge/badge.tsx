import { Component, h } from '@stencil/core';

@Component({
  tag: 'sk-badge',
  styleUrl: 'badge.scss',
  shadow: true,
})
export class Badge {
  render() {
    return (
      <sk-typography size="12-responsive" color="yellow"><slot /></sk-typography>
    );
  }
}
