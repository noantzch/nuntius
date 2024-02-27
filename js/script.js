$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('white');
        $('.navbar').removeClass('transparent');
      } else {
        $('.navbar').addClass('transparent');
        $('.navbar').removeClass('white');
      }
    });
  });
  