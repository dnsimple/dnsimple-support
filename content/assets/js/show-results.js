(function () {
  const $main = document.getElementById('main');
  const $input = document.getElementById('input-search');

  // Decodes query parameter for search
  const parseQueryParams = function () {
    return decodeURIComponent(window.location.search.substring(3).replace(/\+/g, ' '));
  };

  // Search based on a query parameter
  const search = function (q) {
    $input.value = q;
    return window.DNSimpleSupport.search(q);
  };

  const showResults = (q) => {
    const results = search(q);
    const $results = document.createElement('div');
    const $h1 = document.createElement('h1');
    const $ul = document.createElement('ul');

    $h1.innerText = 'Search results';

    if (q.length)
      $h1.innerText += ` for "${q}"`;

    if (results.length === 0) {
      const $li = document.createElement('li');
      $li.innerText = 'No results found';
      $ul.appendChild($li);
    }

    results.forEach(function (result) {
      const $li = document.createElement('li');
      const $a = document.createElement('a');
      $a.href = result.id;
      $a.innerHTML = result.title;
      $li.appendChild($a);
      $ul.append($li);
    });

    $results.appendChild($h1);
    $results.appendChild($ul);

    $main.innerHTML = '';
    $main.appendChild($results);
  };

  const q = parseQueryParams();

  if (q.length)
    showResults(q);

  $input.oninput = (e) => showResults($input.value);
})();
