git add .
git commit -m 'website updates'
git push
npm run build
git add dist -f
git commit -m 'redeploying'
git subtree push --prefix dist origin gh-pages