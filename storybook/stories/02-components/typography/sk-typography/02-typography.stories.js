import { withKnobs, select, text } from '@storybook/addon-knobs';
import { htmlToElement } from '../../../utils.js';

export default {
  title: 'Components/Typography/sk-typography',
  component: 'sk-typography',
  decorators: [withKnobs],
}

export function playground() {
  const component = htmlToElement(`
    <sk-typography
      as=${select('as', ['p', 'h3'], 'p')}
      size=${select('size', ['16-responsive', '24-responsive', '32-responsive', '112-responsive'], '16-responsive')}
      color=${select('color', ['inherit', 'yellow', 'black', 'light-black', 'white'], 'inherit')}
      line-height=${select('lineHeight', ['1', '1.2', '1.5'], '1.2')}
    >
      ${text('innerHTML', 'Lorem ipsum')}
    </sk-typography>
  `)

  component.addEventListener('clicked', e => console.log('clicked(e)', e))

  return component
}

playground.story = {
  parameters: {
    backgrounds: [
      { name: 'yellow', value: '#fff5cc', default: true },
      { name: 'yellow', value: '#fc0' },
    ],
    // options: { selectedPanel: 'storybook/canvas/panel' },
  },
}
