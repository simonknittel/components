import { tagToElement } from "../../utils"

export default {
  title: 'Components/Slanted',
  component: 'sk-slanted',
  argTypes: {
    innerHTML: { control: 'text' },
  },
}

export function playground(args) {
  return tagToElement('sk-slanted', args)
}

playground.story = {
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#fff5cc' },
        { name: 'yellow', value: '#fc0' },
      ],
    },
  },
}

playground.args = {
  innerHTML: '<sk-typography>Lorem ipsum</sk-typography>',
}
