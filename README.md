# components

[![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/simonknittel/components?include_prereleases&style=flat-square)](https://github.com/simonknittel/components/releases)
[![GitHub](https://img.shields.io/github/license/simonknittel/components?style=flat-square)](https://github.com/simonknittel/components/blob/master/LICENSE)
[![David (path)](https://img.shields.io/david/dev/simonknittel/components?path=stencil&style=flat-square)](https://github.com/simonknittel/components/blob/master/stencil/package.json)

Component library for [nightly.simonknittel.de](https://nightly.simonknittel.de). Makes use of [Stencil](https://stenciljs.com) and [Storybook](https://github.com/storybookjs/storybook/tree/next/app/web-components).

## Build and watch components

    cd stencil
    npm start

## Build, watch and serve stories

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
