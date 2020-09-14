(function () {
  var $main = document.getElementById("main");
  var $input = document.getElementById("input-search");

  var parseQueryParams = function parseQueryParams() {
    return decodeURIComponent(
      window.location.search.substring(3).replace(/\+/g, " ")
    );
  };

  var search = function search(q) {
    $input.value = q;
    return window.DNSimpleSupport.search(q);
  };

  var showResults = function showResults(q) {
    var results = search(q);
    var $results = document.createElement("div");
    var $h1 = document.createElement("h1");
    var $ul = document.createElement("ul");
    $h1.innerText = "Search results";
    if (q.length) $h1.innerText += ' for "' + q + '"';

    if (results.length === 0) {
      var $li = document.createElement("li");
      $li.innerText = "No results found";
      $ul.appendChild($li);
    }

    results.forEach(function (result) {
      var $li = document.createElement("li");
      var $a = document.createElement("a");
      $a.href = result.id;
      $a.innerHTML = result.title;
      $li.appendChild($a);
      $ul.append($li);
    });
    $results.appendChild($h1);
    $results.appendChild($ul);
    $main.innerHTML = "";
    $main.appendChild($results);
  };

  var q = parseQueryParams();
  if (q.length) showResults(q);

  $input.oninput = function (e) {
    return showResults($input.value);
  };
})();
