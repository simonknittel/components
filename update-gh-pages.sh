#!/bin/sh

cd storybook
npm run build-storybook

cd ../
git add -A
git commit -m 'Update gh-pages'
git push
git subtree push --prefix storybook/storybook-static/ origin gh-pages
