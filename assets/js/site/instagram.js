$(document).ready(function () {

  var token = '7125099797.0ea7069.7e845ba0cc98481cbabbb8f7f2860444',
    userid = '7125099797', // rudrastyh - my username :)
    num_photos = 4;

  var instagram = document.querySelector('#instagram-feed');
  if ( !instagram ) {
    return;
  }

  function fillInstagramFeed () {
    $.ajax({
      url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
      dataType: 'jsonp',
      type: 'GET',
      data: { access_token: token, count: num_photos },
      success: function (data){
        for( x in data.data ){
          $('#instagram-feed').append('<li class="site-c-instagallery__item"><a href="'+ data.data[ x ].link +'" target="_blank" class="site-c-instagallery__link"><img src="'+data.data[ x ].images.standard_resolution.url+'" class="site-c-instagallery__image" alt="'+ data.data[ x ].caption.text +'"></a></li>');
          // data.data[x].images.low_resolution.url - URL of image, 306х306
          // data.data[x].images.thumbnail.url - URL of image 150х150
          // data.data[x].images.standard_resolution.url - URL of image 612х612
          // data.data[x].link - Instagram post URL
        }

        var $item = $('.site-c-instagallery__item a');
        $item.height($item.width());

        $(window).on('resize', function (){
          var win = $(this),
            new_height = $item.width();
          $item.height(new_height);
        });
      },
      error: function (data){
        console.error(data);
      },
    });
  }

  // Don't go to Instagram until the user scrolls near the feed area
  if ( !window.IntersectionObserver ) {
    fillInstagramFeed();
    return;
  }
  (new IntersectionObserver(
    function (entries, io){
      if ( entries[ 0 ].isIntersecting ) {
        fillInstagramFeed();
        io.unobserve(instagram);
      }
    },
    { rootMargin: '50px' }
  )).observe(instagram);
});