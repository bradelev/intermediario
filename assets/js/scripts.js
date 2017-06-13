$(init);

function transition(element) {
  $('.js-nav li').click(function() {
    console.log('emras13')
    $('html, body').animate({
        scrollTop: $('#noticias').offset().top
    }, 1000);
  });
}


function init() {
  // alert('carga');
  transition();
}
