import { withKnobs, text } from '@storybook/addon-knobs'
import { htmlToElement } from '../../utils.js';

export default {
  title: 'Components/Badge',
  component: 'sk-badge',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff5cc', default: true },
      { name: 'yellow', value: '#fc0' },
    ],
    knobs: {
      escapeHTML: false,
    },
  },
}

export function playground() {
  const component = htmlToElement(`
    <sk-badge>
      ${text('Text', 'Lorem ipsum')}
    </sk-badge>
  `)

  return component
}
