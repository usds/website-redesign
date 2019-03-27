$(document).ready(function () {
  $('.site-js-carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

// Set card bodies to equal height, per carousel
$(function () {
  $('.slick-track').each(function () {
    var cards = $(this).find('.site-c-card__body');
    var heights = cards.map(function (){ return this.clientHeight; });
    var highest = Math.max.apply(Math, heights);
    cards.css('min-height', highest);
  });
});
