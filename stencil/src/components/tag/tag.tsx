import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sk-tag',
  styleUrl: 'tag.scss',
  shadow: true
})
export class Tag {
  @Prop() text: string
  @Prop() inverted: boolean

  render() {
    return (
      <Host
        class={{
          "sk-tag": true,
          "inverted": this.inverted === true
        }}
      >
        {this.text}
      </Host>
    )
  }
}
