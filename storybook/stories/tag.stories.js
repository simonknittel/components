import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'Components/Tags/sk-tag',
  component: 'sk-tag',
  decorators: [withKnobs],
}

export function defaultView() {
  const el = document.createElement('sk-tag')
  el.text = text('Text', 'Lorem ipsum')
  return el
}

defaultView.story = {
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff5cc', default: true },
      { name: 'yellow', value: '#fc0' },
    ],
  },
}

export function onBlack() {
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
