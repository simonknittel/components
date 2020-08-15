import { withKnobs, text } from "@storybook/addon-knobs";
import { htmlToElement } from '../../utils.js';

export default {
  title: 'Components/Tags/sk-tag',
  component: 'sk-tag',
  decorators: [withKnobs],
}

export function playground() {
  const component = htmlToElement(`
    <sk-tag>
      ${text('Text', 'Lorem ipsum')}
    </sk-tag>
  `)

  return component
}

playground.story = {
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff5cc', default: true },
      { name: 'yellow', value: '#fc0' },
    ],
  },
}

export function onBlack() {
  const component = htmlToElement(`
    <sk-tag>
      ${text('Text', 'Lorem ipsum')}
    </sk-tag>
  `)

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
