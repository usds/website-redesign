$(document).ready(function () {

  var instagram = document.querySelector('#instagram-feed');
  if ( !instagram ) {
    return;
  }

  function drillTo(obj, props) {
    props.forEach(function(prop){
      if ( obj ) {
        obj = obj[prop];
      }
    });
    return obj;
  }

  function getInstagramPics(rawData, count) {
    var pics = [];

    var data = drillTo(rawData,
      [
        "entry_data", "ProfilePage", 0, "graphql",
        "user", "edge_owner_to_timeline_media", "edges"
      ]
    );

    if ( !data ) {
      console.error("Invalid Instagram data (no edges)");
      return [];
    }

    for ( var i=0; i < data.length; i++ ) {
      if ( count <= 0 ) break;
      var node = data[i].node;
      if (!/^Graph/.test(node && node.__typename) ) break;
      pics.push({
        link: node.display_url || "",
        src: node.thumbnail_src || "",
        caption: drillTo(node, ["edge_media_to_caption", "edges", 0, "node", "text"]) || ""
      });
      count--;
    }

    return pics;
  }

  // Why yes, this IS scraping the Instagram page!
  // See issue #464
  function fillInstagramFeed () {
    $.ajax({
      url: "https://www.instagram.com/usdigitalservice/",
      dataType: "text",
      success: function(page) {
        // Strip out everything in the HTML but the JSON payload
        var s = page.replace(/^[^]*window._sharedData = /m, "");
        s = s.replace(/;<\/script>[^]*$/m, "");
        var json;
        try {
          json = JSON.parse(s);
        } catch(err) {
          console.error("Invalid Instagram data (JSON parse)");
          return;
        }
        var pics = getInstagramPics(json, 4);
        if ( !pics || !pics.length ) return;

        // Insert into the carousel
        pics.forEach(function(pic){
          $('#instagram-feed').append(
            '<li class="site-c-instagallery__item">' +
            '<a href="'+ pic.link +'" target="_blank" class="site-c-instagallery__link">' +
            '<img src="'+pic.src+'" class="site-c-instagallery__image" alt="'+ pic.caption +'">' +
            '</a></li>'
          );
        });

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
    { rootMargin: '200px' }
  )).observe(instagram);
});
