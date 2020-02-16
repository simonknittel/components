import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sk-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  @Prop() text: string

  render() {
    return (
      <Host className="sk-tag">
        <sk-typography>{this.text}</sk-typography>
      </Host>
    )
  }
}
