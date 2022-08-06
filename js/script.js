/**
 * @author: Dwindra Sulistyoutomo
 */

(function($) {
  "use strict"; // Start of use strict
  
  // Smooth scrolling using jQuery Easing
  $('a.js-scroll-trigger[href*="#"]').click(function() {
    console.log('AAAAAAAAa')
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

})(jQuery);
