#!/bin/sh

cd storybook
npm run build-storybook

cd ../
git add -A
git commit -m 'Update gh-pages'
git subtree push --prefix storybook/storybook-static/ origin gh-pages
