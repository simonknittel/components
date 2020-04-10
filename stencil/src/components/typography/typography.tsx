import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sk-typography',
  styleUrl: 'typography.scss',
  shadow: true
})
export class Typography {
  @Prop() as: string
  @Prop() size: string

  render() {
    switch (this.as) {
      case 'h3':
        return (<h3 class={'size-' + this.size}><slot /></h3>)
      case 'p':
        return (<p class={'size-' + this.size}><slot /></p>)

      default:
        return <slot />
    }
  }
}
