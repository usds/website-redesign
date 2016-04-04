(function(){
  var images = document.querySelectorAll('#usa-site-zeitgeist img');

  // Cast images to array
  var arr = [];
  for (var i=0; i<images.length; i++){
    arr.push(images[i]);
  }

  arr.forEach(function(d){
    setTimeout(function(){
      d.style.opacity = 1;
    }, Math.random() * 1000);
  });

})();
