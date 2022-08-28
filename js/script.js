/**
 * @author: Dwindra Sulistyoutomo
 */

(function($) {
  "use strict"; // Start of use strict

  // Get the URL parameters
  const params = (new URL(document.location)).searchParams;

  // Get the guest name
  const guestName = params.get('u');
  if (guestName) {
    $('#guest-name').text(guestName);
    $('#gift-acc').toggleClass('hidden');
  }
  else {
    // Directly open the main page if no guest name provided
    $('#page-starter').toggleClass('hidden');
    $('#main-page').toggleClass('hidden');
  }

  // Open page button
  $('#button-open-page').click(function(){
    $('#page-starter').toggleClass('fixed-page-closed');
    $('#main-page').toggleClass('hidden');
  })
  
  // Smooth scrolling using jQuery Easing
  $('a.js-scroll-trigger[href*="#"]').click(function() {
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
