import { withKnobs, text } from '@storybook/addon-knobs'
import { htmlStringToElement } from './utils';

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

export function defaultView() {
  const component = htmlStringToElement(`
    <sk-badge>
      ${text('Text', 'Lorem ipsum')}
    </sk-badge>
  `)

  return component
}
