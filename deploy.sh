#!/usr/bin/env sh

# 錯誤終止腳本
set -e

# 運行 gulp build
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/TzuChingg/Vue_Week6.git master:gh-pages

cd -