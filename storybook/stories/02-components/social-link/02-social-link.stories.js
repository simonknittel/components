import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: 'Components/Social link',
  component: 'sk-social-link',
  decorators: [withKnobs],
}

export function playground() {
  const el = document.createElement('sk-social-link')
  el.href = text('Href', 'https://github.com/simonknittel')
  el.text = text('Text', 'GitHub')
  el.icon = text('Icon', 'github')
  el.titleAttr = text('Title', 'Open my GitHub profile')
  return el
}

playground.story = {
  parameters: {
    backgrounds: [
      { name: 'black', value: '#222', default: true },
    ],
  },
}

export function multiple() {
  return `
    <sk-social-link compact="${boolean('Compact', false)}" text="GitHub" icon="github" href="#"></sk-social-link>
    <sk-social-link compact="${boolean('Compact', false)}" text="Twitter" icon="twitter" href="#"></sk-social-link>
    <sk-social-link compact="${boolean('Compact', false)}" text="Patreon" icon="patreon" href="#"></sk-social-link>
    <sk-social-link compact="${boolean('Compact', false)}" text="Stack Overlow" icon="stack-overflow" href="#"></sk-social-link>
    <sk-social-link compact="true" text="XING" icon="xing" href="#"></sk-social-link>
    <sk-social-link compact-on-small="true" text="LinkedIn" icon="linkedin-in" href="#"></sk-social-link>
  `
}

multiple.story = {
  parameters: {
    backgrounds: [
      { name: 'black', value: '#222', default: true },
    ],
  },
}
