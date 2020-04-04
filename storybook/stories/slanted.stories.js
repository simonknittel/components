import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'sk-slanted',
  component: 'sk-slanted',
  decorators: [withKnobs],
}

export const onYellow = () => {
  const el = document.createElement('sk-slanted')
  el.innerHTML = text('innerHTML', '<sk-typography>Lorem ipsum</sk-typography>')
  return el
}

onYellow.story = {
  parameters: {
    backgrounds: [
      { name: 'yellow', value: '#fc0', default: true },
    ],
    knobs: {
      escapeHTML: false,
    }
  },
}
