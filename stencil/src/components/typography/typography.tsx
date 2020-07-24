import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'sk-typography',
  styleUrl: 'typography.scss',
  shadow: true
})
export class Typography {
  @Prop() as: string
  @Prop() size: string
  @Prop() color: string

  render() {
    const classesArray = [
      'size-' + this.size,
      'color-' + this.color
    ];
    const classes = classesArray.join(' ')

    switch (this.as) {
      case 'h1':
        return (<Host class="block"><h1 class={classes}><slot /></h1></Host>)
      case 'h2':
        return (<Host class="block"><h2 class={classes}><slot /></h2></Host>)
      case 'h3':
        return (<Host class="block"><h3 class={classes}><slot /></h3></Host>)
      case 'p':
        return (<Host class="block"><p class={classes}><slot /></p></Host>)

      default:
        return <slot />
    }
  }
}
