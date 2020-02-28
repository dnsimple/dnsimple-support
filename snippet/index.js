(function() {
    var PREFIX = 'dnsimple-support-snippet',
        PUNCTUATION = /['";:.()]/;

    function SORT_BY_TITLE(a, b) {
        return a.data.title.localeCompare(b.data.title);
    }

    (window[PREFIX] = {
        init() {
            var _ = this;

            // _.articles = window.articles;
            _.articles = require('./data.json');

            // _.ajax('https://support.dnsimple.com/search.json', function() {

            // })

            _.elements.script = document.querySelectorAll('[' + PREFIX + ']')[0];
            _.elements.css = _.buildCSS();
            _.elements.wrapper = _.buildWrapper();
            _.elements.articles = _.buildArticles();
            _.elements.article = _.buildArticle();
            _.elements.prompt = _.buildPrompt();
            _.elements.search = _.buildSearch();

            _.elements.wrapper.append( _.elements.css );
            _.elements.wrapper.append( _.elements.search );
            _.elements.wrapper.append( _.elements.prompt );
            _.elements.wrapper.append( _.elements.article );
            _.elements.wrapper.append( _.elements.articles );

            if (_.elements.script) {
                _.elements.search.value = _.elements.script.getAttribute(PREFIX);
                _.search( _.elements.search.value );
            }

            document.body.append(_.elements.wrapper);
        },

        elements: {},

        buildWrapper() {
            var el = document.createElement('div');

            el.className = PREFIX;

            return el;
        },

        buildPrompt() {
            var el = document.createElement('p');

            el.className = PREFIX + '-prompt';
            el.innerText = 'Search for something!';

            return el;
        },

        buildSearch() {
            var _ = this,
                el = document.createElement('input');

            el.type = 'text';
            el.placeholder = 'Search...';
            el.className = PREFIX + '-search';

            el.addEventListener('input', function() {
                _.search(el.value);
            });

            el.addEventListener('focus', function() {
                _.elements.articles.style.display = 'block';
                _.elements.article.style.display = 'none';
                _.elements.prompt.style.display = 'none';
            });

            return el;
        },

        buildArticles() {
            var _ = this,
                el = document.createElement('div');

            el.className = PREFIX + '-articles';

            _.articles.sort(SORT_BY_TITLE).forEach(function(article) {
                var articleEl = document.createElement('div'),
                    h3 = document.createElement('h3'),
                    a = document.createElement('a'),
                    p = document.createElement('p');

                a.href = article.data.url;
                a.target = '_blank';
                a.innerHTML = article.data.title;

                a.onclick = function _onClick(event) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    _.visitArticle(article);
                };

                h3.append(a);
                articleEl.append(h3);

                p.innerHTML = article.data.excerpt;

                articleEl.append(p);

                articleEl.className = PREFIX + '-list-article';

                article.el = articleEl;

                el.append(articleEl);
            });

            return el;
        },

        visitArticle(article) {
            var _ = this;

            _.elements.article.innerHTML = _.linkify(article.content);
            _.elements.article.style.display = 'block';
            _.elements.articles.style.display = 'none';
            _.elements.prompt.style.display = 'none';
            _.elements.article.scrollTop = 0;
        },

        linkify(str) {
            return str.replace(/<a\s/gi, '<a target="_blank" ');
        },

        buildArticle() {
            var el = document.createElement('div');

            el.className = PREFIX + '-article';

            return el;
        },

        buildCSS() {
            var el = document.createElement('style'),
                width = '550px',
                height = '400px',
                padding = '15px',
                border = '1px solid #ddd',
                blue = '#1A5EC6';

            el.type = 'text/css';
            el.innerText = `
                .${PREFIX} div, .${PREFIX} span, .${PREFIX} applet, .${PREFIX} object, .${PREFIX} iframe, .${PREFIX} h1, .${PREFIX} h2, .${PREFIX} h3, .${PREFIX} h4, .${PREFIX} h5, .${PREFIX} h6, .${PREFIX} p, .${PREFIX} blockquote, .${PREFIX} pre, .${PREFIX} a, .${PREFIX} abbr, .${PREFIX} acronym, .${PREFIX} address, .${PREFIX} big, .${PREFIX} cite, .${PREFIX} code, .${PREFIX} del, .${PREFIX} dfn, .${PREFIX} em, .${PREFIX} img, .${PREFIX} ins, .${PREFIX} kbd, .${PREFIX} q, .${PREFIX} s, .${PREFIX} samp, .${PREFIX} small, .${PREFIX} strike, .${PREFIX} strong, .${PREFIX} sub, .${PREFIX} sup, .${PREFIX} tt, .${PREFIX} var, .${PREFIX} b, .${PREFIX} u, .${PREFIX} center, .${PREFIX} dl, .${PREFIX} dt, .${PREFIX} dd, .${PREFIX} ol, .${PREFIX} ul, .${PREFIX} li, .${PREFIX} fieldset, .${PREFIX} form, .${PREFIX} label, .${PREFIX} legend, .${PREFIX} table, .${PREFIX} caption, .${PREFIX} tbody, .${PREFIX} tfoot, .${PREFIX} thead, .${PREFIX} tr, .${PREFIX} th, .${PREFIX} td, .${PREFIX} article, .${PREFIX} aside, .${PREFIX} canvas, .${PREFIX} details, .${PREFIX} embed, .${PREFIX} figure, .${PREFIX} figcaption, .${PREFIX} footer, .${PREFIX} header, .${PREFIX} hlocation, .${PREFIX} menu, .${PREFIX} nav, .${PREFIX} output, .${PREFIX} ruby, .${PREFIX} section, .${PREFIX} summary, .${PREFIX} time, .${PREFIX} mark, .${PREFIX} audio, .${PREFIX} video, .${PREFIX} input, .${PREFIX} textarea, .${PREFIX} select, .${PREFIX} button {
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font-size: inherit;
                    font: inherit;
                    color: inherit;
                    font-weight: inherit;
                    line-height: inherit;
                    vertical-align: baseline;
                    background: none;
                    box-shadow: none;
                    outline: none;
                    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
                    box-sizing: inherit;
                }

                .${PREFIX} {
                    font-family: "Roboto", Helvetica Neue, Helvetica, Arial, sans-serif;
                    position: fixed;
                    bottom: 0;
                    right: 0;
                    width: 100%;
                    max-width: ${width};
                    background: #fff;
                    box-sizing: border-box;
                    border-top: ${border};
                    border-left: ${border};
                    font-size: 15px;
                    line-height: 1.5;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                }

                .${PREFIX} input {
                    position: fixed;
                    right: 0;
                    width: 100%;
                    max-width: ${width};
                    padding: ${padding};
                    outline: none;
                    font-size: inherit;
                    border: 0;
                    border-left: ${border};
                    border-bottom: ${border};
                    background: #fff;
                }

                .${PREFIX} .${PREFIX}-prompt,
                .${PREFIX} .${PREFIX}-article,
                .${PREFIX} .${PREFIX}-articles {
                    margin-top: ${parseInt(padding) * 3.5}px;
                    padding: ${padding};
                    height: ${height};
                    -webkit-overflow-scrolling: touch;
                    overflow-y: auto;
                    display: none;
                }

                .${PREFIX} .${PREFIX}-prompt {
                    padding: ${parseInt(padding) * 5}px;
                    text-align: center;
                }

                .${PREFIX} .${PREFIX}-articles {
                    display: block;
                }

                .${PREFIX} .${PREFIX}-articles h3 {
                    color: ${blue};
                    font-weight: bold;
                    font-size: 120%;
                }

                .${PREFIX} .${PREFIX}-list-article {
                    padding-bottom: ${parseInt(padding) / 2}px;
                    margin-bottom: ${parseInt(padding) / 2}px;
                    border-bottom: 1px solid #eee;
                }

                .${PREFIX} .${PREFIX}-article h1,
                .${PREFIX} .${PREFIX}-article h2,
                .${PREFIX} .${PREFIX}-article h3,
                .${PREFIX} .${PREFIX}-article h4,
                .${PREFIX} .${PREFIX}-article h5,
                .${PREFIX} .${PREFIX}-article h6,
                .${PREFIX} .${PREFIX}-article p,
                .${PREFIX} .${PREFIX}-article ul,
                .${PREFIX} .${PREFIX}-article ol,
                .${PREFIX} .${PREFIX}-article table,
                .${PREFIX} .${PREFIX}-article pre,
                .${PREFIX} .${PREFIX}-article warning,
                .${PREFIX} .${PREFIX}-article note,
                .${PREFIX} .${PREFIX}-article tip,
                .${PREFIX} .${PREFIX}-article info,
                .${PREFIX} .${PREFIX}-article .marker {
                    margin-bottom: ${padding};
                }

                .${PREFIX} .${PREFIX}-article ul,
                .${PREFIX} .${PREFIX}-article ol {
                    margin-left: 25px;
                }

                .${PREFIX} .${PREFIX}-article warning,
                .${PREFIX} .${PREFIX}-article note,
                .${PREFIX} .${PREFIX}-article tip,
                .${PREFIX} .${PREFIX}-article info,
                .${PREFIX} .${PREFIX}-article .marker {
                    display: block;
                    padding: ${padding};
                    overflow: auto;
                    background: #f1f1f1;
                    -webkit-overflow-scrolling: touch;
                }

                .${PREFIX} .${PREFIX}-article table {
                    border-collapse: collapse;
                }

                .${PREFIX} .${PREFIX}-article table td,
                .${PREFIX} .${PREFIX}-article table th {
                    padding: 6px;
                    border-bottom: ${border};
                }

                .${PREFIX} .${PREFIX}-article table th {
                    font-weight: bold;
                }

                .${PREFIX} .${PREFIX}-article pre {
                    border-radius: 7px;
                }

                .${PREFIX} .${PREFIX}-article warning,
                .${PREFIX} .${PREFIX}-article .marker-warning {
                    box-shadow: -6px 0 0 0 #ff7f2a;
                }

                .${PREFIX} .${PREFIX}-article tip,
                .${PREFIX} .${PREFIX}-article .marker-tip {
                    box-shadow: -6px 0 0 0 #43a047;
                }

                .${PREFIX} .${PREFIX}-article note,
                .${PREFIX} .${PREFIX}-article .marker-note {
                    box-shadow: -6px 0 0 0 #f8c939;
                }

                .${PREFIX} .${PREFIX}-article info,
                .${PREFIX} .${PREFIX}-article .marker-info {
                    box-shadow: -6px 0 0 0 #7e7e7e;
                }

                .${PREFIX} .${PREFIX}-article h1 {
                    font-size: 160%;
                    color: ${blue};
                    font-weight: bold;
                }

                .${PREFIX} .${PREFIX}-article h2 {
                    font-size: 140%;
                    color: #222;
                    font-weight: bold;
                }

                .${PREFIX} .${PREFIX}-article h3 {
                    font-size: 130%;
                    color: ${blue};
                    font-weight: bold;
                }

                .${PREFIX} .${PREFIX}-article h4 {
                    font-size: 120%;
                    color: #555;
                    font-style: oblique;
                }

                .${PREFIX} .${PREFIX}-article b,
                .${PREFIX} .${PREFIX}-article strong {
                    font-weight: bold;
                }

                .${PREFIX} .${PREFIX}-article i,
                .${PREFIX} .${PREFIX}-article em {
                    font-style: oblique;
                }

                .${PREFIX} .${PREFIX}-article img {
                    max-width: 100%;
                }

                .${PREFIX} .${PREFIX}-article a {
                    color: ${blue};
                }
            `;

            return el;
        },

        search(q) {
            q = q.trim().toLowerCase();

            var _ = this,
                results = _.articles.filter(function(article) {
                    var score = _.articleScore(article, q);

                    article.score = score;
                    // article.el.children[1].innerText = 'Score: ' + score;

                    if (score) {
                        _.showArticleInList(article, score);
                        return true;
                    } else {
                        _.hideArticleInList(article);
                    }
                }).sort(function(a, b) {
                    if (a.score > b.score) return -1;
                    if (a.score < b.score) return  1;
                    return 0;
                });

            results.forEach(function(article) {
                _.elements.articles.append(article.el);
            });

            if (results.length) {
                _.elements.prompt.style.display = 'none';
                _.elements.article.style.display = 'none';
                _.elements.articles.style.display = 'block';
                _.elements.articles.scrollTop = 0;
            } else {
                _.elements.articles.style.display = 'none';
                _.elements.article.style.display = 'none';
                _.elements.prompt.style.display = 'block';
                _.elements.prompt.scrollTop = 0;
            }
        },

        articleScore(article, q) {
            if (!q) {
                return 0;
            }

            var title = article.data.title.toLowerCase(),
                titleWithoutPunctuation = title.replace(PUNCTUATION, ''),
                content = article.content.toLowerCase(),
                contentWithoutPunctuation = content.replace(PUNCTUATION, ''),
                score = 0;

            if (title.indexOf(q) !== -1) {
                score += 100;
            } else if (titleWithoutPunctuation.indexOf(q) !== -1) {
                score += 75;
            }

            if (content.indexOf(q) !== -1) {
                score += 75;
            } else if (contentWithoutPunctuation.indexOf(q) !== -1) {
                score += 50;
            }

            var words = q.split(/\s/).map(function(str) {
                    return str.trim();
                }),
                word;

            for (var i = words.length - 1; i >= 0; i--) {
                word = words[i].trim();

                if (title.indexOf(word) !== -1) {
                    score += 25;
                } else if (titleWithoutPunctuation.indexOf(word) !== -1) {
                    score += 15;
                }

                if (content.indexOf(word) !== -1) {
                    score += 10;
                } else if (contentWithoutPunctuation.indexOf(word) !== -1) {
                    score += 5;
                }
            }

            return score;
        },

        showArticleInList(article, relevance) {
            article.el.style.display = 'block';
        },

        hideArticleInList(article) {
            article.el.style.display = 'none';
        }
    }).init();
})();


