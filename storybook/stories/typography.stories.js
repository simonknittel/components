import { withKnobs, select, text } from "@storybook/addon-knobs";

export default {
  title: 'sk-typography',
  component: 'sk-typography',
  decorators: [withKnobs],
}

export const onWhite = () => {
  return `
    <sk-typography
      as=${select('as', ['p', 'h3'], 'p')}
      size=${select('size', ['1-responsive'], '1-responsive')}
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
