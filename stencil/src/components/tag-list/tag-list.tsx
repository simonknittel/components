import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sk-tag-list',
  styleUrl: 'tag-list.scss',
  shadow: true
})
export class TagList {
  @Prop() items: Array<string>

  render() {
    return (
      <Host className="sk-tag-list">
        {this.items.map(item =>
          <sk-tag text={item}></sk-tag>
        )}
      </Host>
    );
  }
}
