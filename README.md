<h1 align="center">simonknittel/components</h1>

<div align="center">
  <p><strong>This repository contains the interface component library for my <a href="https://github.com/simonknittel/homepage" title="link to the repo">personal website</a>.</strong></p>

  <p>Under the hood the library makes use of <a href="https://stenciljs.com">Stencil</a> for Web Components.</p>

  <a href="https://github.com/simonknittel/components/releases" title="Latest release v0.8.1">
    <img src="https://img.shields.io/github/v/release/simonknittel/components?include_prereleases&style=flat-square" alt="Latest release v0.8.1">
  </a>

  <a href="https://github.com/simonknittel/components/blob/master/LICENSE" title="MIT License">
    <img src="https://img.shields.io/github/license/simonknittel/components?style=flat-square" alt="MIT License">
  </a>

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

## Usage

### React

Install `@simonknittel/components-react` as dependency:

```sh
npm install @simonknittel/components-react
```

Add this to your JavaScript entry point:

```js
import { applyPolyfills, defineCustomElements } from '@simonknittel/components/loader'

applyPolyfills().then(() => {
  defineCustomElements()
})
```

Import components like this:

```jsx
import { SkBadge } from "@simonknittel/components-react"

export default function MyReactComponent() {
  return <SkBadge>Hello World!</SkBadge>
}
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)
