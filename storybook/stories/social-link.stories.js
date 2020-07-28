import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: 'sk-social-link',
  component: 'sk-social-link',
  decorators: [withKnobs],
}

export function defaultView() {
  const el = document.createElement('sk-social-link')
  el.url = text('URL', 'https://github.com/simonknittel')
  el.text = text('Text', 'GitHub')
  el.icon = text('Icon', 'github')
  return el
}

defaultView.story = {
  parameters: {
    backgrounds: [
      { name: 'black', value: '#222', default: true },
    ],
  },
}

export function multiple() {
  return `
    <sk-social-link compact="${boolean('Compact', false)}" text="GitHub" icon="github" url="#"></sk-social-link>
    <sk-social-link compact="${boolean('Compact', false)}" text="Twitter" icon="twitter" url="#"></sk-social-link>
    <sk-social-link compact="${boolean('Compact', false)}" text="Patreon" icon="patreon" url="#"></sk-social-link>
    <sk-social-link compact="${boolean('Compact', false)}" text="Stack Overlow" icon="stack-overflow" url="#"></sk-social-link>
    <sk-social-link compact="true" text="XING" icon="xing" url="#"></sk-social-link>
    <sk-social-link compact-on-small="true" text="LinkedIn" icon="linkedin-in" url="#"></sk-social-link>
  `
}

multiple.story = {
  parameters: {
    backgrounds: [
      { name: 'black', value: '#222', default: true },
    ],
  },
}
