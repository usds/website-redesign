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

$('#usa-site-zeitgeist').zeitgeist();
