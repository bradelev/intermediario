$(init);

function transition(element) {
  $('.js-nav li').click(function() {
    $('html, body').animate({
        scrollTop: $('#noticias').offset().top
    }, 1000);
  });
}

function waypoints() {
  var waypoint = new Waypoint({
  element: document.getElementById('noticias'),
  handler: function(direction) {
    if (direction === 'down') {

      console.log('Basic waypoint triggered, down')
    } else {
      console.log('Basic waypoint triggered, up')

    }
    
  }
})
}

function init() {
  // alert('carga');
  // transition();
  waypoints()
}
