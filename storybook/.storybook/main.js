module.exports = {
  stories: ['../stories/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@storybook/addon-backgrounds',
    '@storybook/addon-links',
    // '@storybook/addon-viewport/register', // BUG: Throws some error to the console
    '@whitespace/storybook-addon-html',
  ],

  // // Source: https://github.com/storybookjs/storybook/tree/master/app/web-components
  // webpackFinal: async config => {
  //   // find web-components rule for extra transpilation
  //   const webComponentsRule = config.module.rules.find(
  //     rule => rule.use && rule.use.options && rule.use.options.babelrc === false
  //   );
  //   // add your own `my-library`
  //   webComponentsRule.test.push(new RegExp(`node_modules(\\/|\\\\)my-library(.*)\\.js$`));

  //   return config;
  // },
};
