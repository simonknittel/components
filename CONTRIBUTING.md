# Contributing

## Build and watch components with Stencil

    cd core
    npm start

## Build, watch and serve stories with Storybook

    cd documentation
    npm start

## Build and publish a new version

1. Stage and commit the latest changes
2. Update CHANGELOG.md
3. Bump version in `release` badge of the [README.md](./README.md)
4. Bump version of [core/package.json](./core/package.json) and recreate the package-lock.json
5. `cd core && npm run build && npm publish`
6. Bump version of `@simonknittel/components` in [react-bindings/package.json](./react-bindings/package.json)
7. Bump version of [react-bindings/package.json](./react-bindings/package.json) and recreate the package-lock.json
8. `cd ../react-bindings && npm run build && npm publish`
9. `git add -A && git commit -m 'Bump to vX.X.X' && git push`
10. `git tag vX.X.X && git push --tags`
11. Create a new [(pre-)release on GitHub](https://github.com/simonknittel/components/releases/new)

## How to link your local project repository with a local copy of this repository

Linking a local copy of this component library with a local project repository which uses the component library can be helpful when working on components and so see how they behave in real usage outside of Storybook.

1. Open a terminal within your local copy of this repository
2. Run `npm link`
3. Open a terminal within your local project repository
4. Run `npm link @simonknittel/components`
5. The `@simonknittel/components` directory within `node_modules` of your local project repository is now linked via a symlink to your local copy of this repository
