import { withKnobs, select, text } from "@storybook/addon-knobs";

export default {
  title: 'sk-typography',
  component: 'sk-typography',
  decorators: [withKnobs],
}

export function onWhite() {
  return `
    <sk-typography
      as=${select('as', ['p', 'h3'], 'p')}
      size=${select('size', ['16-responsive', '24-responsive', '32-responsive', '112-responsive'], '16-responsive')}
      color=${select('color', ['inherit', 'yellow', 'black'], 'inherit')}
    >
      ${text('innerHTML', 'Lorem ipsum')}
    </sk-typography>
  `
}

onWhite.story = {
  parameters: {
    backgrounds: [
      { name: 'yellow', value: '#fff5cc', default: true },
    ],
  },
}
