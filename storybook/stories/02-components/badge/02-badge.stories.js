import { tagToElement } from '../../utils.js';

export default {
  title: 'Components/Badge',
  component: 'sk-badge',
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#fff5cc' },
        { name: 'yellow', value: '#fc0' },
      ],
    },
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
