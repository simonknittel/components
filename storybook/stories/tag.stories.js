import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'sk-tag',
  component: 'sk-tag',
  decorators: [withKnobs],
}

export const onYellow = () => {
  const el = document.createElement('sk-tag')
  el.text = text('Text', 'Lorem ipsum')
  el.style = '--border-color: rgba(#000, .5); color: #000'
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
  el.style = '--border-color: rgba(#fc0, .5); color: #fc0'
  return el
}

onBlack.story = {
  parameters: {
    backgrounds: [
      { name: 'black', value: '#000', default: true },
    ],
  },
}
