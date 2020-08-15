# components

[![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/simonknittel/components?include_prereleases&style=flat-square)](https://github.com/simonknittel/components/releases)
[![GitHub](https://img.shields.io/github/license/simonknittel/components?style=flat-square)](https://github.com/simonknittel/components/blob/master/LICENSE)
[![David (path)](https://img.shields.io/david/dev/simonknittel/components?path=stencil&style=flat-square)](https://github.com/simonknittel/components/blob/master/stencil/package.json)
[![Chromatic (Visual Regression Testing)](https://img.shields.io/badge/visual%20regression%20testing-Chromatic-green?style=flat-square)](https://www.chromatic.com/builds?appId=5f2e5d00adfe5000223569a2&branch=master)
[![Storybook](https://img.shields.io/badge/documentation-Storybook-green?style=flat-square)](https://simonknittel.github.io/components/)

This repository contains the interface component library for my personal website ([link to repo](https://github.com/simonknittel/homepage)). Under the hood the library makes use of [Stencil](https://stenciljs.com) for Web Components.

**Disclaimer:** Like my personal website, this component library is still under heavy development, so regular breaking changes can be expected. This won't change until version 1.0 releases.

## Links

* [Documentation via Storybook](https://simonknittel.github.io/components/)
  * Overview of all components and instrctions on how to use them
  * Reflects the latest published release
* [Visual Regression Testing via Chromatic](https://www.chromatic.com/builds?appId=5f2e5d00adfe5000223569a2&branch=master)
  * Tests each commit to the `master` branch
* [Components "live in action" on my personal website](https://nightly.simonknittel.de)
  * Uses the latest commit of the `master` branch

## Contributing

### Build and watch components with Stencil

    cd stencil
    npm start

### Build, watch and serve stories with Storybook

    cd storybook
    npm start

### Build and publish a new version

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

### How to link your local project repository with a local copy of this repository

Linking a local copy of this component library with a local project repository which uses the component library can be helpful when working on components and so see how they behave in real usage outside of Storybook.

1. Open a terminal within your local copy of this repository
2. Run `npm link`
3. Open a terminal within your local project repository
4. Run `npm link @simonknittel/components`
5. The @simonknittel/components directory within node_modules of your local project repository is now linked via a symlink to your local copy of this repository
