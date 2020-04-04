# components

Component library for https://nightly.simonknittel.de

Makes use of https://stenciljs.com and https://github.com/storybookjs/storybook/tree/next/app/web-components

## Build and watch components

    cd stencil
    npm start

## Build, watch and serve stories

    cd storybook
    npm run storybook

## Build and publish a new version

1. Stage and commit the latest changes
2. Bump version of [./stencil/package.json](stencil/package.json)
3. Create tag and push
4. `cd stencil`
5. `npm run build`
6. `npm publish`
