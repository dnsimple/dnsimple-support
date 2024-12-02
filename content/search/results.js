(function () {
  var parseQueryParams = function parseQueryParams (search) {
    var match = search.match(/q=([^&=]+)/g);
    return match ? decodeURIComponent(match[0].split('=')[1]).replace('+', ' ') : '';
  };

  var search = function search ($input, q) {
    $input.value = q;
    return window.DNSimpleSupport.search(q);
  };

  var showResults = function showResults ($main, $input, q) {
    var results = search($input, q);
    var $results = document.createElement('div');
    var $h1 = document.createElement('h1');
    var $ul = document.createElement('ul');

    $h1.innerText = 'Search results';
    $ul.className = 'articles-list';

    if (q.length)
      $h1.innerText += ' for "' + q + '"';

    if (results.length === 0) {
      var $li = document.createElement('li');

      $li.innerText = 'No results found';
      $li.className = 'articles-list-item';

      $ul.appendChild($li);
    }

    results.forEach(function (result) {
      var $li = document.createElement('li');
      var $a = document.createElement('a');

      $a.href = result.id;
      $a.innerHTML = result.title;
      $li.className = 'articles-list-item';

      $li.appendChild($a);
      $ul.append($li);
    });

    $results.appendChild($h1);
    $results.appendChild($ul);

    $main.innerHTML = '';
    $main.appendChild($results);

    return $results;
  };

  var debounce = function debounce (func, delay) {
    var timeout;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        func.call(context, args[0]);
      }, delay);
    };
  };

  var trackSearch = function trackSearch (query) {
    window.posthog.capture('support-search', { query: $input.value });
  };

  if (typeof module === 'object' && typeof module.exports === 'object')
    module.exports = {
      parseQueryParams: parseQueryParams,
      search: search,
      showResults: showResults
    };
  else {
    var $main = document.getElementById('main');
    var $input = document.getElementById('input-search');
    var q = parseQueryParams(window.location.search);

    if (q.length) {
      showResults($main, $input, q);
      trackSearch(q);
    }

    $input.addEventListener('input', debounce(function () {
      showResults($main, $input, $input.value);
      trackSearch($input.value);
    }, 300));
  }
})();
