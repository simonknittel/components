import { tagToElement } from '../../utils.js';

export default {
  title: 'Components/Badge',
  component: 'sk-badge',
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff5cc', default: true },
      { name: 'yellow', value: '#fc0' },
    ],
  },
  argTypes: {
    innerHTML: { control: 'text' },
  },
}

export function playground(args) {
  return tagToElement('sk-badge', args)
}

playground.args = {
  innerHTML: 'Lorem ipsum'
}
