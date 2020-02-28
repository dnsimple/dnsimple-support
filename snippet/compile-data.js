var ARTICLES_DIR = '../content/articles',
    BASE_URL = 'http://support.dnsimple.com/',
    fs = require('fs'),
    path = require('path'),
    marked = require('marked'),
    matter = require('gray-matter'),
    articleFiles = fs.readdirSync(ARTICLES_DIR),
    articles = [],
    article;

for (var i = articleFiles.length - 1; i >= 0; i--) {
    article = fs.readFileSync(path.join(__dirname, ARTICLES_DIR, articleFiles[i])).toString();
    article = matter(article);
    article.data.url = BASE_URL + 'articles/' + articleFiles[i].replace('.markdown', '');

    article.content = article.content.replace(/-\+-/g, '-|-');
    article.content = article.content.replace(/### Table of Contents[^-]+---/im, '');
    article.content = marked(article.content, {
        gfm: true,
        headerIds: false,
        baseUrl: BASE_URL
    });
    article.content = article.content.replace(/\{\#[^}]+\}/, '');

    articles.push(article);
}

fs.writeFileSync(path.join(__dirname, './data.json'), JSON.stringify(articles));

