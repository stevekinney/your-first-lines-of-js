#! /bin/sh

set -eu

echo "Regenerating bundle…"

git checkout gh-pages

rm -rf *.bundle.*
NODE_ENV=production npm run bundle

git add .
git commit -m "Rebuild site"

git push origin gh-pages
