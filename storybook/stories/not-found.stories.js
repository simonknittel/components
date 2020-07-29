import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { htmlStringToElement } from './utils';

export default {
  title: 'Components/Not found',
  component: 'sk-not-found',
  decorators: [withKnobs],
}

export function defaultView() {
  const component = htmlStringToElement(`
    <sk-not-found
      heading="${text('Heading', '404')}"
      subheading="${text('Subheading', 'Page not found')}"
      link-href="${text('Link href', '#')}"
      link-icon="${text('Link icon', '<')}"
      link-text="${text('Link text', 'Go to home')}"
      link-prevent-click="${boolean('Link prevent click', false)}"
    />
  `)

  component.addEventListener('clicked', e => console.log('clicked(e)', e))

  return component
}

defaultView.story = {
  parameters: {
    backgrounds: [
      { name: 'white', value: '#fff5cc', default: true },
    ],
    knobs: {
      escapeHTML: false,
    }
  },
}
