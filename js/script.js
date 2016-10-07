/*$.fn.zeitgeist = function(){
  this.find('img:not(.reserve)').each(function(i, d){

    // Append backing image for crossfading
    var wrapper = $(d)
      .addClass('front')
      .wrap('<div class="wrapper" />')
      .parent();

    wrapper.append('<img class="back hidden" />');

    // Fade in randomly
    setTimeout(function(){
      $(d).addClass('visible');
    }, Math.random() * 1000);

  });
};

// via http://stackoverflow.com/questions/1533910
$.fn.randomize = function(selector){
  (selector ? this.find(selector) : this).parent().each(function(){
    $(this).children(selector).sort(function(){
      return Math.random() - 0.5;
    }).detach().appendTo(this);
  });

  return this;
};

$('#usa-site-zeitgeist').zeitgeist();*/
$('#staff-member-carousel').slick({
  infinite: false,
  useTransform: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  cssEase: 'ease-in-out',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
]
});


var header = $('#fixed-header');
var headerCollapsed = false;
var awesomeCounter = 0;
$( document ).ready(function() {
    $( window ).scroll(function() {
      var scrollTopPos = $(window).scrollTop();
      if (scrollTopPos > 78 && !headerCollapsed) { // 155 (expanded header) - 77 (collapsed header)
        header.addClass('collapsed');
        headerCollapsed = true;
      } else if (scrollTopPos <= 78 && headerCollapsed) {
        header.removeClass('collapsed');
        headerCollapsed = false;
      }
    });
    
    $( '.navbar-toggle' ).on( 'click', function() {
      if ( $(this).hasClass('collapsed') ) {
        // expand the mobile nav layer
        
        $(this).removeClass('collapsed');
        $('.mobile-nav').removeClass('collapsed');
      } else {
        // collapse the mobile nav layer
        $(this).addClass('collapsed');
        $('.mobile-nav').addClass('collapsed');
      }
      
    });
    
    function swapAnswer(hash) {
      // Guard against missing or malformed hash
      if (!hash || typeof hash !== 'string') {
        return false;
      }

      var $answers = $('.join-page .answers .answer');
      var $answerToActivate = $('.join-page .answers .answer.' + hash);
      var $faqs = $('.join-page .faqs li');
      var $faqToActivate = $('.join-page .faqs li').has('a[href$="#' + hash + '"]');

      // Guard against answer that is not present on the page
      if (($answerToActivate.length === 0) || ($faqToActivate.length === 0)) {
        return false;
      }

      // Hide all the answers,
      // then show only the active answer
      $answers.hide();
      $answerToActivate.show();

      // Remove the `active` class from all FAQs,
      // then add the `active` class to the active FAQ
      $faqs.removeClass('active');
      $faqToActivate.addClass('active');
    }

    // On document ready, hide every answer that is not the application form
    $('.join-page .answers .answer:not(.application)').hide();

    // On document ready, check if hash already exists in window.location,
    // and if it does, swap to the corresponding answer
    if (window.location.hash.length > 0) {
      var hash = window.location.hash.substr(1);
      swapAnswer(hash);
    }
    
    // On document ready, bind FAQ links to swap answers
    $('.join-page .faqs a').on('click', function(event) {
      event.stopPropagation(); // prevent bubbling

      var hash = this.hash.substr(1);
      swapAnswer(hash);
    });

    $( 'a[href^="http"]:not(.target-link)' ).on( "click", function() {
      var domain = this.href.split('/')[2];
      var tld = domain.substring(domain.length - 3);
      if (tld != 'gov' && tld != 'mil' && domain != 'facebook.com' && domain != 'github.com' && domain != 'twitter.com') {
        $( '#site-alert-overlay' ).show();
        $( '#site-alert' ).show();
        var targetLink = $( '#site-alert .target-link')
        targetLink.text(this.href);
        targetLink.attr("href", this.href);
        return false;
      }
    });
    $( '#site-alert .close, #site-alert .target-link, #site-alert-overlay' ).on( "click", function() {
      $( '#site-alert-overlay' ).hide();
      $( '#site-alert' ).hide();
    });
    
    
    $('.everything-is-awesome').on( "click", function() {
      // Yes, there were more important things to get done, but everyone needs a mental break sometimes
      if (awesomeCounter >= 10) {
        window.open('https://www.youtube.com/watch?v=StTqXEQ2l-Y');
      }
      // Not yet awesome
      awesomeCounter++;
    });
    
    
});