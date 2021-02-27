import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sk-simple-teaser',
  styleUrl: 'simple-teaser.scss',
  shadow: true
})
export class SimpleTeaser {
  @Prop() heading: string
  @Prop() badge: string
  @Prop() tags: Array<string>
  @Prop() href: string
  @Prop() target: string
  @Prop() rel: string
  @Prop() linkText: string

  render() {
    console.warn('sk-simple-teaser: This component is deprecated and will be removed in a future release.')

    return (
      <Host>
        <div class="text">
          <sk-typography class="heading" as="h3">
            {this.heading}

            {this.badge &&
              <span class="badge">{this.badge}</span>
            }
          </sk-typography>

          <div class="tags">
            {this.tags.map(item =>
              <sk-tag>{item}</sk-tag>
            )}
          </div>

          <slot />
        </div>

        <a
          href={this.href}
          target={this.target}
          rel={this.rel}
          class="link"
        >
          <sk-typography>{this.linkText}</sk-typography>
        </a>
      </Host>
    );
  }
}
