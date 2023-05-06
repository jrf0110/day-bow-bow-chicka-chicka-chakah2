#!/bin/bash
set -xe

yarn -v
yarn -v

locales=($(ls -d ./locales/*))

for locale in "${locales[@]}"; do
  locale=${locale##*/}
  mv ./dist/$locale/404/index.html ./dist/$locale/404.html || echo "No 404 page for $locale"
  rmdir ./dist/$locale/404 || echo "No 404 folder for $locale"
done
