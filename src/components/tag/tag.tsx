import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sk-tag',
  styleUrl: 'tag.css',
  shadow: true
})
export class Tag {
  @Prop() text: string

  render() {
    return (
      <Host className="sk-tag">
        {this.text}
      </Host>
    )
  }
}
