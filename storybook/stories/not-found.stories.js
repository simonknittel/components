import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'sk-not-found',
  component: 'sk-not-found',
  decorators: [withKnobs],
}

export function defaultView() {
  const el = document.createElement('sk-not-found')
  el.heading = text('Heading', '404')
  el.subheading = text('Subheading', 'Page not found')
  el.linkHref = text('Link href', '#')
  el.linkIcon = text('Link icon', '<')
  el.linkText = text('Link text', 'Go to home')

  el.addEventListener('clicked', (e) => {
    console.log('clicked(e)', e)
  })

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
  },
}
