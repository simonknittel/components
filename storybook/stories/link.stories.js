import { withKnobs, text, select } from "@storybook/addon-knobs"

export default {
  title: 'sk-link',
  component: 'sk-link',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff5cc', default: true },
      { name: 'yellow', value: '#fc0' },
      { name: 'black', value: '#222' },
    ],
    knobs: {
      escapeHTML: false,
    },
  },
}

export function defaultView() {
  const el = document.createElement('sk-link')
  el.href = text('Href', '#')
  el.target = text('Target', '_blank')
  el.rel = text('Rel', 'noopener')
  el.icon = text('Icon', '<')
  el.iconPosition = select('Icon position', ['left', 'right'], 'left')
  el.innerHTML = 'Go back'
  el.color = select('color', ['inherit', 'yellow', 'black', 'light-black', 'white'], 'inherit')
  return el
}
