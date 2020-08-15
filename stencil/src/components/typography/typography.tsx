import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'sk-typography',
  styleUrl: 'typography.scss',
  shadow: true
})
export class Typography {
  @Prop() as: string = 'span'
  @Prop() size: string = '16-responsive'
  @Prop() color: string = 'inherit'
  @Prop() lineHeight: string = '1.2'

  // @Watch('size')
  // watchSize(newValue: string) {
  //   if (['12-responsive', '14-responsive', '16-responsive', '24-responsive', '32-responsive', '112-responsive', '', undefined, null].indexOf(newValue) === -1) {
  //     console.warn(`sk-typography (size): Unknown value: ${newValue} - Allowed values: 12-responsive, 16-responsive (default), 24-responsive, 32-responsive and 112-responsive`)
  //   }
  // }

  // @Watch('color')
  // watchColor(newValue: string) {
  //   if (['inherit', 'yellow', 'black', '', undefined, null].indexOf(newValue) === -1) {
  //     console.warn(`sk-typography (color): Unknown value: ${newValue} - Allowed values: inherit (default), yellow and black`)
  //   }
  // }

  // @Watch('lineHeight')
  // watchLineHeight(newValue: string) {
  //   console.log('validateLineHeight', newValue)
  //   if (['1', '1.2', '1.5', '', undefined, null].indexOf(newValue) === -1) {
  //     console.warn(`sk-typography (lineHeight): Unknown value: ${newValue} - Allowed values: 1, 1.2 (default), and 1.5`)
  //   }
  // }

  render() {
    const classArray = []

    if (['1', '1.2', '1.5', '', undefined, null].indexOf(this.lineHeight) === -1) {
      console.warn(`sk-typography (lineHeight): Unknown value: ${ this.lineHeight } - Allowed values: 1, 1.2 (default), and 1.5`)
    } else {
      classArray.push('size-' + this.size)
    }

    if (['inherit', 'yellow', 'black', 'light-black', 'white', '', undefined, null].indexOf(this.color) === -1) {
      console.warn(`sk-typography (color): Unknown value: ${ this.color } - Allowed values: inherit (default), yellow, black, light-black and white`)
    } else {
      classArray.push('color-' + this.color)
    }

    if (['12-responsive', '14-responsive', '16-responsive', '24-responsive', '32-responsive', '112-responsive', '', undefined, null].indexOf(this.size) === -1) {
      console.warn(`sk-typography (size): Unknown value: ${ this.size } - Allowed values: 12-responsive, 16-responsive (default), 24-responsive, 32-responsive and 112-responsive`)
    } else {
      classArray.push('line-height-' + this.lineHeight)
    }

    const classes = classArray.join(' ')

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
        return <Host><span class={classes}><slot /></span></Host>
    }
  }
}
