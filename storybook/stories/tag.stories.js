import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'sk-tag',
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
  el.style = '--sk-tag-border-color: rgba(#fc0, .5); --sk-tag-color: #fc0'
  return el
}

onBlack.story = {
  parameters: {
    backgrounds: [
      { name: 'black', value: '#222', default: true },
    ],
  },
}
