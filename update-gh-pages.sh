#!/bin/sh

cd storybook
npm run build-storybook

cd ../
git subtree push --prefix storybook/storybook-static/ origin gh-pages
