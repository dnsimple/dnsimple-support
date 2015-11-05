(function($){
  var query = window.location.search.substring(3);
  query= query.replace("+", " ")

  $resultList = $("#js-result-list");
  $("#js-query").text(query);

  $.getJSON('/search.json', function (response) {
    index = lunr(function(){
      this.ref('id');
      this.field('title', {boost: 10});
      this.field('subtitle', {boost: 5});
      this.field('body');
    });

    titles = []
    for (item of response) {
      index.add(item);
      titles[item.id] = item.title;
    }

    indexStringified = JSON.stringify(index.toJSON());
    indexParsed = JSON.parse(indexStringified);
    newIndex = lunr.Index.load(indexParsed);
    results = newIndex.search(query);

    $resultList.html("");

    for (item of results) {
      var ref = item.ref;
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = ref;
      a.innerHTML = titles[ref];
      li.appendChild(a);
      $resultList.append(li);
    }
  });

})(jQuery);
