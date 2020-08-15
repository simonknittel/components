import { tagToElement } from "../../../utils"

export default {
  title: 'Components/Teasers/Slanted',
  component: 'sk-slanted-teaser',
  argTypes: {
    innerHTML: { control: 'text' },
    tags: { control: 'array' },
  },
}

export function playground(args) {
  return tagToElement('sk-slanted-teaser', args)
}

playground.story = {
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff5cc', default: true },
    ],
  }
}

playground.args = {
  heading: 'Heading',
  badge: 'work in progress',
  tags: ['Lorem ipsum', 'Dolor sit amet'],
  innerHTML: '<sk-typography as="p">Fugiat ad Lorem exercitation laborum veniam aute cupidatat magna culpa amet aliqua in enim nostrud.</sk-typography>',
  href: '#',
  target: '_blank',
  rel: 'noopener',
  linkText: 'Link text >',
}
