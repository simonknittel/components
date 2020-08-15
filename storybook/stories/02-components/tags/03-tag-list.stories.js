import { withKnobs, text } from "@storybook/addon-knobs";
import { htmlToElement } from '../../utils.js';

export default {
  title: 'Components/Tags/sk-tag-list',
  component: 'sk-tag-list',
  decorators: [withKnobs],
}

export function playground() {
  const component = htmlToElement(`
    <sk-tag-list>
      <sk-tag>
        ${text('Tag 1', 'Lorem ipsum')}
      </sk-tag>

      <sk-tag>
        ${text('Tag 2', 'Dolor sit amet')}
      </sk-tag>
    </sk-tag-list>
  `)

  return component
}

playground.story = {
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff5cc', default: true },
      { name: 'yellow', value: '#fc0' },
    ],
    knobs: {
      escapeHTML: false,
    }
  }
}
