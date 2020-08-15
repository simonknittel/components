module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@storybook/addon-backgrounds',
    '@storybook/addon-links',
    // '@storybook/addon-viewport/register', // BUG: Throws some error to the console
    '@whitespace/storybook-addon-html',
  ],
};
