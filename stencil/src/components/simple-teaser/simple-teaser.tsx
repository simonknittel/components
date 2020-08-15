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
    return (
      <Host>
        <div class="text">
          <sk-typography class="heading" as="h3">
            {this.heading}

            {this.badge &&
              <span class="badge">{this.badge}</span>
            }
          </sk-typography>

          <sk-tag-list>
            {this.tags.map(item =>
              <sk-tag text={item}></sk-tag>
            )}
          </sk-tag-list>

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
