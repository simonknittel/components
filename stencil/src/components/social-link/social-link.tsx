import { Component, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'sk-social-link',
  styleUrl: 'social-link.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class SocialLink {
  @Prop() href: string
  @Prop() text: string
  @Prop() icon: string
  @Prop() compact: boolean = false
  @Prop() compactOnSmall: boolean = false
  @Prop() titleAttr: string = ''

  render() {
    const viewbox = {
      'github': '496 512',
      'twitter': '512 512',
      'patreon': '512 512',
      'stack-overflow': '384 512',
      'xing': '384 512',
      'linkedin-in': '448 512'
    }

    return (
      <a
        href={this.href}
        target="_blank"
        rel="noopener"
        class={{
          compact: this.compact,
          'compact-on-small': this.compactOnSmall,
        }}
        title={this.titleAttr}
      >
        <span class="icon">
          <svg viewBox={"0 0 " + viewbox[this.icon]}>
            <use xlinkHref={getAssetPath(`./assets/${this.icon}-brands.svg`) + '#id'} />
          </svg>
        </span>

        <sk-typography class="text">{this.text}</sk-typography>
      </a>
    );
  }
}
