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
  @Prop() iconViewbox: string
  @Prop() iconAddBackground: boolean

  render() {
    return (
      <a href={this.url} target="_blank" rel="noopener">
        <span class={{
          icon: true,
          'icon--add-background': this.iconAddBackground,
          'icon--patreon': this.icon === 'patreon'
        }}>
          <svg viewBox={"0 0 " + this.iconViewbox}>
            <use xlinkHref={getAssetPath(`./assets/${this.icon}-brands.svg`) + '#id'} />
          </svg>
        </span>

        <sk-typography>{this.text}</sk-typography>
      </a>
    );
  }
}
