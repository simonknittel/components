import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sk-link',
  styleUrl: 'link.scss',
  shadow: true,
})
export class Link {
  @Prop() href: string
  @Prop() target: string
  @Prop() noopener: string
  @Prop() text: string
  @Prop() icon: string
  @Prop() iconPosition: string = 'left'
  @Prop() color: string = 'inherit'

  @Event() clicked: EventEmitter<MouseEvent>
  private onClick(e: MouseEvent) {
    e.preventDefault() // TODO: For some reason not cancelable from Vue
    this.clicked.emit(e)
  }

  render() {
    const classArray = []

    if (['left', 'right', '', undefined, null].indexOf(this.iconPosition) === -1) {
      console.warn(`sk-link (iconPosition): Unknown value: ${ this.iconPosition } - Allowed values: left (default) and right`)
    } else {
      classArray.push('icon-position-' + this.iconPosition)
    }

    if (['inherit', 'yellow', 'black', 'light-black', 'white', '', undefined, null].indexOf(this.color) === -1) {
      console.warn(`sk-link (color): Unknown value: ${ this.color } - Allowed values: inherit (default), yellow, black, light-black and white`)
    } else {
      classArray.push('color-' + this.color)
    }

    return (
      <a
        href={ this.href }
        target={ this.target }
        rel={ this.noopener }
        class={ classArray.join(' ') }
        onClick={ this.onClick.bind(this) }
      >
        { this.iconPosition !== 'right' ? this.icon : '' }
        <sk-typography class="text"><slot /></sk-typography>
        { this.iconPosition == 'right' ? this.icon : '' }
      </a>
    );
  }
}
