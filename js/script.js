$('#staff-member-carousel').slick({
  infinite: false,
  useTransform: true,
  slidesToShow: 3,
  dots: true,
  slidesToScroll: 3,
  cssEase: 'ease-in-out',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
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
    //
    // Collapse and expand the static / fixed header depending on the scrollTop position
    //
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

    //
    // Show a full-screen width background behind the second level navigation
    // If anyone has a better idea how to do this cleaner/using only CSS, ideas
    // are welcome (PS: 'width: 100vw;' didn't do the trick for a number of reasons)
    //
    var activeSubNav = $('#fixed-header nav.site-navbar .nav-item.active ul');
    var subMenuBackground = $('#submenu-background')
    if(activeSubNav.length) {
      activeSubNav.addClass('borderless')
      subMenuBackground.show();
    }
    $('#fixed-header nav.site-navbar .nav-item').hover(function() {
      var ul = $(this).find('ul')
      if (ul.length) {
        ul.addClass('borderless');
        subMenuBackground.show();
        subMenuBackground.addClass('middle');
      }
    }, function() {
      subMenuBackground.removeClass('middle');
      if(!activeSubNav.length) {
        subMenuBackground.hide();
      }
    })

    //
    // Support for mobile hamburger nav
    //
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

    //
    // Handle all section show/hide behavior on join page
    //
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

      $answers.hide();
      $answerToActivate.show();

      $faqs.removeClass('active');
      $faqToActivate.addClass('active');
    }

    // On document ready,
    // - hide every answer that is not the application form
    // - swap to corresponding answer if hash already exists in window.location
    // - bind FAQ links so that they cause answers to swap

    $('.join-page .answers .answer:not(.application)').hide();

    if (window.location.hash.length > 0) {
      var hash = window.location.hash.substr(1);
      swapAnswer(hash);
    }

    $('.join-page .faqs a').on('click', function(event) {
      event.stopPropagation(); // prevent bubbling

      var hash = this.hash.substr(1);
      swapAnswer(hash);
    });

    //
    // Catch all outgoing liks that are not to .gov, .mil, facebook.com, github.com, or twitter.com
    // and display a "you are now leaving..." message
    //
    $( 'a[href^="http"]:not(.target-link)' ).on( "click", function(e) {
      var domain = this.href.split('/')[2].replace('www.','');
      var tld = domain.substring(domain.length - 3);
      if (tld != 'gov' && tld != 'mil' && domain != 'facebook.com' && domain != 'github.com' && domain != 'twitter.com' && domain != 'medium.com' && domain != 'instagram.com') {
        $( '#site-alert-overlay' ).show();
        $( '#site-alert' ).show();
        if (domain == 'youtube.com') {
            $( '#site-alert-exit-contents' ).hide();
            $( '#site-alert-video' ).show();
            // parse YouTube URL
            // https://www.youtube.com/watch?v=aGe5rEDv3g8 -> https://www.youtube.com/embed/aGe5rEDv3g8
            var matches = this.href.match(/watch\?v=([a-z0-9]+)/i)
            console.log(matches[1]);
            $( '#site-alert-video-frame' ).attr('src', 'https://www.youtube.com/embed/' + matches[1])
        } else {
            $( '#site-alert-exit-contents' ).show();
            $( '#site-alert-video' ).hide();
            var targetLink = $( '#site-alert .target-link')
            targetLink.text(this.href);
            targetLink.attr("href", this.href);
        }
        e.preventDefault();
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
        $('.ted-teaser').show();
      }
      // Not yet awesome
      awesomeCounter++;
    });


});
