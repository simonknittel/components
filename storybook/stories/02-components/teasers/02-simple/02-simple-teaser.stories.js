import { tagToElement } from "../../../utils"

export default {
  title: 'Components/Teasers/Simple',
  component: 'sk-simple-teaser',
  argTypes: {
    innerHTML: { control: 'text' },
    tags: { control: 'array' },
  },
}

export function playground(args) {
  return tagToElement('sk-simple-teaser', args)
}

playground.story = {
  parameters: {
    backgrounds: {
      default: 'yellow',
      values: [
        { name: 'yellow', value: '#fc0' },
      ],
    },
  },
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
