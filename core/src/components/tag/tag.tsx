import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sk-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  @Prop() description: string

  render() {
    return (
      <Host>
        <sk-typography size="14-responsive"><slot /></sk-typography>

        <sk-typography class="tooltip" size="12-responsive">
          { this.description }
        </sk-typography>
      </Host>
    )
  }
}
