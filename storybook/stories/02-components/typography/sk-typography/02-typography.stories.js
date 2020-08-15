import { tagToElement } from '../../../utils.js';

export default {
  title: 'Components/Typography/sk-typography',
  component: 'sk-typography',
  argTypes: {
    as: { control: {
      type: 'select',
      options: ['span', 'p', 'h3'],
    } },
    size: { control: {
      type: 'select',
      options: ['12-responsive', '14-responsive', '16-responsive', '24-responsive', '32-responsive', '112-responsive'],
    } },
    color: { control: {
      type: 'select',
      options: ['inherit', 'yellow', 'black', 'light-black', 'white'],
    } },
    lineHeight: { control: {
      type: 'select',
      options: ['1', '1.2', '1.5'],
    } },
    innerHTML: { control: 'text' },
  },
}

export function playground(args) {
  return tagToElement('sk-typography', args)
}

playground.story = {
  parameters: {
    backgrounds: [
      { name: 'yellow', value: '#fff5cc', default: true },
      { name: 'yellow', value: '#fc0' },
    ],
  },
}

playground.args = {
  innerHTML: 'Lorem ipsum',
}
