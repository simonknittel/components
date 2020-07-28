import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'sk-slanted',
  component: 'sk-slanted',
  decorators: [withKnobs],
}

export function defaultView() {
  const el = document.createElement('sk-slanted')
  el.innerHTML = text('innerHTML', '<sk-typography>Lorem ipsum</sk-typography>')
  return el
}

defaultView.story = {
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
