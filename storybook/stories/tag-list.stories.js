import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'Tag Lust',
  component: 'sk-tag-list',
  decorators: [withKnobs],
}

export const defaultView = (foo) => {
  const el = document.createElement('sk-tag-list')
  el.items = text('Items', 'Lorem ipsum, Dolor sit amet').split(',')
  return el
}
