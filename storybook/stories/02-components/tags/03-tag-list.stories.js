import { htmlToElement } from '../../utils.js';

export default {
  title: 'Components/Tags/sk-tag-list',
  component: 'sk-tag-list',
  argTypes: {
    tag1: { control: 'text' },
    tag2: { control: 'text' },
  },
}

export function playground(args) {
  const component = htmlToElement(`
    <sk-tag-list>
      <sk-tag>
        ${args.tag1}
      </sk-tag>

      <sk-tag>
      ${args.tag2}
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
  }
}

playground.args = {
  tag1: 'Lorem ipsum',
  tag2: 'Dolor sit amet',
}
