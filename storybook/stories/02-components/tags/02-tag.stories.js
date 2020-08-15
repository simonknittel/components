import { tagToElement } from '../../utils.js';

export default {
  title: 'Components/Tags/sk-tag',
  component: 'sk-tag',
  argTypes: {
    innerHTML: { control: 'text' }
  },
}

export function playground(args) {
  return tagToElement('sk-tag', args)
}

playground.story = {
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff5cc', default: true },
      { name: 'yellow', value: '#fc0' },
    ],
  },
}

playground.args = {
  innerHTML: 'Lorem ipsum',
}

export function onBlack(args) {
  const component = tagToElement('sk-tag', args)
  component.style = '--sk-tag-border-color: rgba(#fc0, .5); --sk-tag-color: #fc0'
  return component
}

onBlack.story = {
  parameters: {
    backgrounds: [
      { name: 'black', value: '#222', default: true },
    ],
  },
}

onBlack.args = {
  innerHTML: 'Lorem ipsum',
}
