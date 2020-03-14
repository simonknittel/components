import { Component, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'sk-social-link',
  styleUrl: 'social-link.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class SocialLink {
  @Prop() url: string
  @Prop() text: string
  @Prop() icon: string

  render() {
    const viewbox = {
      'github-square': '448 512',
      'twitter-square': '448 512',
      'patreon': '512 512',
      'stack-overflow': '384 512',
      'xing-square': '448 512',
      'linkedin': '448 512'
    }

    const addBackground = [
      'patreon',
      'stack-overflow'
    ]

    return (
      <a href={this.url} target="_blank" rel="noopener">
        <span class={{
          icon: true,
          'icon--add-background': addBackground.indexOf(this.icon) >= 0,
          'icon--patreon': this.icon === 'patreon'
        }}>
          <svg viewBox={"0 0 " + viewbox[this.icon]}>
            <use xlinkHref={getAssetPath(`./assets/${this.icon}-brands.svg`) + '#id'} />
          </svg>
        </span>

        <sk-typography>{this.text}</sk-typography>
      </a>
    );
  }
}
