npm run build
git add .
git commit -m 'website updates'
git push
git add dist -f
git commit -m 'redeploying'
git subtree push --prefix dist origin gh-pages