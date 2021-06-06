#!/bin/sh

cd documentation
npm run build-storybook

cd ../
git add -A
git commit -m 'Update gh-pages'
git push
git subtree push --prefix documentation/storybook-static/ origin gh-pages
