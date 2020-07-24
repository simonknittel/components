import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'sk-link',
  component: 'sk-link',
  decorators: [withKnobs],
}

export const onYellow = () => {
  const el = document.createElement('sk-link')
  el.href = text('Href', '#')
  el.target = text('Target', '_blank')
  el.rel = text('Rel', 'noopener')
  el.icon = text('Icon', '<')
  el.iconPosition = text('Icon position', 'left')
  el.innerHTML = 'Go back'
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
