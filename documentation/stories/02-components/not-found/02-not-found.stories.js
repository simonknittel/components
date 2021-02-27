import { tagToElement } from '../../utils.js';

export default {
  title: 'Components/Not found',
  component: 'sk-not-found',
}

export function playground(args) {
  const component = tagToElement('sk-not-found', args)

  component.addEventListener('clicked', e => console.log('clicked(e)', e))

  return component
}

playground.story = {
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#fff5cc' },
      ],
    },
  },
}

playground.args = {
  heading: '404',
  subheading: 'Page not found',
  linkHref: '#',
  linkIcon: '<',
  linkText: 'Go to home',
}
