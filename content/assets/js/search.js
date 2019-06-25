(function($){

  var parseQueryParams = function() {
    return decodeURIComponent(window.location.search.substring(3).replace(/\+/g, " "));
  };

  $resultList = $("#js-result-list");
  $("#js-query").text(parseQueryParams());

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
    $resultList.html("");

    if (results.length == 0) {
      $resultList.html("No results found");
    }

    for (item of results) {
      var ref = item.ref;
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = ref;
      a.innerHTML = titles[ref];
      li.appendChild(a);
      $resultList.append(li);
    }

  }

  $.getJSON('/search.json')
    .done(function(data) {
      initIndex(data);
      render(search());
    })
    .fail(function() {
      $resultList.html("Sorry, the search is broken at this time. Please contact support.");
    });

})(jQuery);
