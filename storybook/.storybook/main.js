module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-links/register',
    // '@storybook/addon-viewport/register', // BUG: Throws some error to the console
  ],
};
