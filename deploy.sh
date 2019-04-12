#!/bin/bash -eu
mkdir _book/pdf
cp book.pdf _book/pdf/book.pdf
cd _book
rm -f deploy_key deploy_key.enc deploy.sh .travis.yml package.json
git init
git add .
git commit -m "Publishing site on `date "+%Y-%m-%d %H:%M:%S"`"
git push -f git@github.com:hs-demo/md_demo.git master:gh-pages
