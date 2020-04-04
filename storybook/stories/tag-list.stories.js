import { withKnobs, array } from "@storybook/addon-knobs";

export default {
  title: 'sk-tag-list',
  component: 'sk-tag-list',
  decorators: [withKnobs],
}

export const defaultView = () => {
  const el = document.createElement('sk-tag-list')
  el.items = array('Items', ['Lorem ipsum', 'Dolor sit amet'])
  return el
}
