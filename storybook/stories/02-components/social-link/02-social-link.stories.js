import { tagToElement } from "../../utils"

export default {
  title: 'Components/Social link',
  component: 'sk-social-link',
}

export function playground(args) {
  return tagToElement('sk-social-link', args)
}

playground.story = {
  parameters: {
    backgrounds: [
      { name: 'black', value: '#222', default: true },
    ],
  },
}

playground.args = {
  href: 'https://github.com/simonknittel',
  text: 'GitHub',
  icon: 'github',
  titleAttr: 'Open my GitHub profile',
}

export function multiple(args) {
  return `
    <sk-social-link compact="${args.compact}" text="GitHub" icon="github" href="#"></sk-social-link>
    <sk-social-link compact="${args.compact}" text="Twitter" icon="twitter" href="#"></sk-social-link>
    <sk-social-link compact="${args.compact}" text="Patreon" icon="patreon" href="#"></sk-social-link>
    <sk-social-link compact="${args.compact}" text="Stack Overlow" icon="stack-overflow" href="#"></sk-social-link>
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

multiple.args = {
  compact: true
}
