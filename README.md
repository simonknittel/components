# components

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/simonknittel/components?style=flat-square)](https://github.com/simonknittel/components/releases)
[![David (path)](https://img.shields.io/david/dev/simonknittel/components?path=stencil&style=flat-square)](./stencil/package.json)
[![GitHub](https://img.shields.io/github/license/simonknittel/components?style=flat-square)](./LICENSE)

Component library for [nightly.simonknittel.de](https://nightly.simonknittel.de). Makes use of [Stencil](https://stenciljs.com) and [Storybook](https://github.com/storybookjs/storybook/tree/next/app/web-components).

## Build and watch components

    cd stencil
    npm start

## Build, watch and serve stories

    cd storybook
    npm start

## Build and publish a new version

1. Stage and commit the latest changes
2. Bump version of [./stencil/package.json](stencil/package.json)
3. Create tag and push
4. `cd stencil`
5. `npm run build`
6. `npm publish`
7. Create a new [(pre-)release on GitHub](https://github.com/simonknittel/components/releases/new)
