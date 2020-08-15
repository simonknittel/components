import { tagToElement } from '../../utils.js'

export default {
  title: 'Components/Link',
  component: 'sk-link',
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff5cc', default: true },
      { name: 'yellow', value: '#fc0' },
      { name: 'black', value: '#222' },
    ],
  },
  argTypes: {
    iconPosition: { control: {
      type: 'select',
      options: ['left', 'right'],
    } },
    color: { control: {
      type: 'select',
      options: ['inherit', 'yellow', 'black', 'light-black', 'white'],
    } },
    innerHTML: { control: 'text' },
  },
}

export function playground(args) {
  const component = tagToElement('sk-link', args)

  component.addEventListener('clicked', (e) => {
    console.log('clicked(e)', e)
  })

  return component
}

playground.args = {
  href: '#',
  target: '_blank',
  rel: 'noopener',
  icon: '<',
  iconPosition: 'left',
  color: 'inherit',
  innerHTML: 'Go back',
}
