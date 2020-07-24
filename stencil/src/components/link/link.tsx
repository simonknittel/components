import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sk-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link {
  @Prop() href: string
  @Prop() target: string
  @Prop() noopener: string
  @Prop() text: string
  @Prop() icon: string
  @Prop() iconPosition: string

  render() {
    return (
      <a
        href={ this.href }
        target={ this.target }
        rel={ this.noopener }
        class={{
          right: this.iconPosition === 'right',
          left: this.iconPosition !== 'right',
        }}
      >
        { this.iconPosition !== 'right' ? this.icon : '' }
        <sk-typography class="text"><slot /></sk-typography>
        { this.iconPosition == 'right' ? this.icon : '' }
      </a>
    );
  }
}
