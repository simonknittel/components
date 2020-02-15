import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'Tag',
  component: 'sk-tag',
  decorators: [withKnobs],
}

export const onYellow = () => {
  const el = document.createElement('sk-tag')
  el.text = text('Text', 'Lorem ipsum')
  return el
}

onYellow.story = {
  parameters: {
    backgrounds: [
      { name: 'yellow', value: '#fc0', default: true },
    ],
  },
}

export const onBlack = () => {
  const el = document.createElement('sk-tag')
  el.text = text('Text', 'Lorem ipsum')
  el.inverted = true
  return el
}

onBlack.story = {
  parameters: {
    backgrounds: [
      { name: 'black', value: '#000', default: true },
    ],
  },
}
