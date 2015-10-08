(function($){

  $(function() {

    // Temporary hack the search for to narrow the search to the current site.
    $(".js-search-form").submit(function(event) {
      var $searchInput = $(this).find("input[type=search]");
      $searchInput.val("site:support.dnsimple.com " + $searchInput.val());
    });

})

})(jQuery);
