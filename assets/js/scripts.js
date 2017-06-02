$(document).ready(init);

function transition(element) {
  $('.js-nav li').click(function() {
    $('html, body').animate({
        scrollTop: $('#publicaciones').offset().top
    }, 1000);
  });
}


function init() {
  transition();
}
