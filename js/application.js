$(document).ready(function() {
  $('.tweet-btn').on('click', function() {
    var tweet = document.createElement("li");
    tweet.className += ' collection-item';
    tweet.textContent = $('.tweet-area').val();
    $('.tweets').prepend(tweet);
  });
});
