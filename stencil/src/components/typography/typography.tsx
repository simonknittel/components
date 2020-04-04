import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sk-typography',
  styleUrl: 'typography.scss',
  shadow: true
})
export class Typography {
  @Prop() as: string

  render() {
    switch (this.as) {
      case 'h3':
        return (<h3><slot /></h3>)
      case 'p':
        return (<p><slot /></p>)

      default:
        return <slot />
    }
  }
}
