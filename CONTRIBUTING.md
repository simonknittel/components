# Contributing

## Build and watch components with Stencil

    cd stencil
    npm start

## Build, watch and serve stories with Storybook

    cd storybook
    npm start

## Build and publish a new version

1. Stage and commit the latest changes
2. Bump version of [stencil/package.json](./stencil/package.json) and [stencil/package-lock.json](./stencil/package-lock.json)
3. Update CHANGELOG.md
4. `git add -A && git commit -m 'Bump to vX.X.X' && git push`
5. `git tag vX.X.X && git push --tags`
6. Create a new [(pre-)release on GitHub](https://github.com/simonknittel/components/releases/new)
7. `cd stencil`
8. `npm run build`
9. `npm publish`
10. `cd ../`
11. `sh update-gh-pages.sh`

## How to link your local project repository with a local copy of this repository

Linking a local copy of this component library with a local project repository which uses the component library can be helpful when working on components and so see how they behave in real usage outside of Storybook.

1. Open a terminal within your local copy of this repository
2. Run `npm link`
3. Open a terminal within your local project repository
4. Run `npm link @simonknittel/components`
5. The @simonknittel/components directory within node_modules of your local project repository is now linked via a symlink to your local copy of this repository
