import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: 'sk-social-link',
  component: 'sk-social-link',
  decorators: [withKnobs],
}

export const onBlack = () => {
  const el = document.createElement('sk-social-link')
  el.url = text('URL', 'https://github.com/simonknittel')
  el.text = text('Text', 'GitHub')
  el.icon = text('Icon', 'github-square')
  el.iconViewbox = text('Icon Viewbox', '448 512')
  el.iconAddBackground = boolean('Icon Add Background', false)
  return el
}

onBlack.story = {
  parameters: {
    backgrounds: [
      { name: 'black', value: '#000', default: true },
    ],
  },
}
