import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sk-not-found',
  styleUrl: 'not-found.scss',
  shadow: true,
})
export class NotFound {
  @Prop() heading: string
  @Prop() subheading: string
  @Prop() linkHref: string
  @Prop() linkText: string
  @Prop() linkIcon: string

  render() {
    return (
      <Host>
        <sk-typography as="h1" size="112-responsive">{ this.heading }</sk-typography>
        <sk-typography as="h2" size="24-responsive">{ this.subheading }</sk-typography>
        <sk-link href={ this.linkHref } icon={ this.linkIcon }>{ this.linkText }</sk-link>
      </Host>
    );
  }
}
