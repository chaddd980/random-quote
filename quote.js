$(document).ready(function(){

  var quote;
  var author;

    function getNewQuote() {
      $.ajax({
        url: 'http://api.forismatic.com/api/1.0/',
        jsonp: 'jsonp',
        dataType: 'jsonp',
        data: {
          method: 'getQuote',
          format: 'jsonp',
          lang: 'en'
        },
        success: function(response) {
          quote = response.quoteText;
          author = response.quoteAuthor;

          $("#quote-text").html(quote);
          if (author) {
            $("#quote-author").html("- " + author);
          } else {
            $("#quote-author").html("- unknown");
          }
        }
      });
    }
    getNewQuote();
    $(".get-another-quote-button").on('click', function() {
      getNewQuote();
    });

    $(".tweet").on('click', function() {
      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + "- " + author));
    });
});
