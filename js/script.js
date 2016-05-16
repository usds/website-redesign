$.fn.zeitgeist = function(){
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

$('#usa-site-zeitgeist').zeitgeist();
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
    
    $( ".join-page .faqs a" ).on( "click", function() {
      var hash = this.hash.substr(1);
      // Hide all the answers that are not this one
      $( ".join-page .answers .answer:not(." + hash + ")" ).hide();
      $( ".join-page .answers .answer." + hash).show();
      console.log( this.hash.substr(1) );
    });
    
});