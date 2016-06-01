#! /bin/sh

set -eu

echo "Regenerating bundle…"

git checkout gh-pages
git merge master

rm -rf *.bundle.*
NODE_ENV=production npm run bundle

git add .
git commit -m "Rebuild site"

git push origin gh-pages
git checkout master
