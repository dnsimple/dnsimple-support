(function(){

  var parseQueryParams = function() {
    return decodeURIComponent(window.location.search.substring(3).replace(/\+/g, " "));
  };

  // Show query on page
  document.getElementById("js-query").innerText = parseQueryParams();

  var titles = [];
  var searchIndex = null;

  var initIndex = function(data) {
    searchIndex = lunr(function(){
      this.ref('id');
      this.field('title', {boost: 10});
      this.field('subtitle', {boost: 5});
      this.field('body');

      for (item of data) {
        this.add(item);
        titles[item.id] = item.title;
      }
    });
  }

  var search = function() {
    return searchIndex.search(parseQueryParams());
  }

  var render = function(results) {
    var el = document.getElementById("js-result-list");
    el.innerHTML = "";

    if (results.length == 0) {
      el.innerHTML = "No results found";
    }

    for (item of results) {
      var ref = item.ref;
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = ref;
      a.innerHTML = titles[ref];
      li.appendChild(a);
      el.append(li);
    }

  }

  var request = new XMLHttpRequest();
  request.open('GET', '/search.json', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      initIndex(data);
      render(search());
    } else {
      document.getElementById("js-result-list").innerHTML = "Sorry, the search is broken at this time. Please contact support.";
    }
  };
  request.onerror = function() {
    document.getElementById("js-result-list").innerHTML = "Sorry, the search is broken at this time. Please contact support.";
  };
  request.send();

})();
