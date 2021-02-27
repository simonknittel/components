import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'components',
  outputTargets: [
    // Used for Vue, Vanilla, ...
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },

    // Used for Storybook
    {
      type: 'www',
      serviceWorker: false
    },

    // Used for React
    reactOutputTarget({
      componentCorePackage: '@simonknittel/components',
      proxiesFile: '../react-bindings/src/components.ts'
    }),
  ],
  plugins: [
    sass()
  ]
};
