#! /bin/sh

set -eu

echo "Regenerating bundle."

rm -rf *.bundle.*
NODE_ENV=production npm run bundle

git checkout gh-pages
git add .
git commit -m "Rebuild site"

git push gh-pages
