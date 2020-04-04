import { withKnobs, array, text } from "@storybook/addon-knobs";

export default {
  title: 'sk-simple-teaser',
  component: 'sk-simple-teaser',
  decorators: [withKnobs],
}

export const onYellow = () => {
  const el = document.createElement('sk-simple-teaser')
  el.heading = text('Heading', 'Heading')
  el.badge = text('Badge', 'work in progress')
  el.tags = array('Items', ['Lorem ipsum', 'Dolor sit amet'])
  el.innerHTML = text('innerHTML', '<sk-typography as="p">Fugiat ad Lorem exercitation laborum veniam aute cupidatat magna culpa amet aliqua in enim nostrud.</sk-typography>')
  el.href = text('href', '#')
  el.target = text('target', '_blank')
  el.rel = text('rel', 'noopener')
  el.linkText = text('linkText', 'Link text >')
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
