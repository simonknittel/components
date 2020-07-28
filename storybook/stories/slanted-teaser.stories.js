import { withKnobs, array, text } from "@storybook/addon-knobs";

export default {
  title: 'sk-slanted-teaser',
  component: 'sk-slanted-teaser',
  decorators: [withKnobs],
}

export function defaultView() {
  const el = document.createElement('sk-slanted-teaser')
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

defaultView.story = {
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff5cc', default: true },
    ],
    knobs: {
      escapeHTML: false,
    }
  }
}
