import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'Components/Slanted',
  component: 'sk-slanted',
  decorators: [withKnobs],
}

export function playground() {
  const el = document.createElement('sk-slanted')
  el.innerHTML = text('innerHTML', '<sk-typography>Lorem ipsum</sk-typography>')
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
  },
}
