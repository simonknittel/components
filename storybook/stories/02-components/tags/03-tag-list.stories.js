import { withKnobs, array } from "@storybook/addon-knobs";

export default {
  title: 'Components/Tags/sk-tag-list',
  component: 'sk-tag-list',
  decorators: [withKnobs],
}

export function playground() {
  const el = document.createElement('sk-tag-list')
  el.items = array('Items', ['Lorem ipsum', 'Dolor sit amet'])
  return el
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
