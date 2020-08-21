<h1 align="center">simonknittel/components</h1>

<div align="center">
  <p><strong>This repository contains the interface component library for my <a href="https://github.com/simonknittel/homepage" title="link to the repo">personal website</a>.</strong></p>

  <p>Under the hood the library makes use of <a href="https://stenciljs.com">Stencil</a> for Web Components.</p>

  <a href="https://github.com/simonknittel/components/releases" title="Latest release v0.7.0">
    <img src="https://img.shields.io/github/v/release/simonknittel/components?include_prereleases&style=flat-square" alt="Latest release v0.7.0">
  </a>

  <a href="https://github.com/simonknittel/components/blob/master/LICENSE" title="MIT License">
    <img src="https://img.shields.io/github/license/simonknittel/components?style=flat-square" alt="MIT License">
  </a>

  <img src="https://img.shields.io/david/dev/simonknittel/components?path=stencil&style=flat-square" alt="Badge for devDependencies">  

  <hr>

  <p><em><strong>Disclaimer:</strong> Like my personal website, this component library is still under heavy development, so regular breaking changes can be expected. This won't change until version 1.0 releases.</em></p>
</div>

## Links

* [Documentation via Storybook](https://simonknittel.github.io/components/)
  * Overview of all components and instructions on how to use them
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
