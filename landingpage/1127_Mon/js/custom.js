/**********************************************
                wow
*********************************************/
$(function() {
  // Handler for .ready() called.
    new WOW().init();

});

/**********************************************
                magnific popup
    http://dimsemenov.com/plugins/magnific-popup/documentation.html#initializing-popup
*********************************************/
$(function() {
$('#work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
    enabled: true
    }
  // other options
});
});

/*
$('.gallery').each(function(){
  $(this).magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
    enabled: true
    }
  // other options
});
});
*/


/**********************************************
                magnific popup
    http://dimsemenov.com/plugins/magnific-popup/documentation.html#initializing-popup
*********************************************/

$(function(){
  $(".owl-carousel").owlCarousel();
  items : 3;
});