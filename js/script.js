$.fn.zeitgeist = function(){
  this.find('img').each(function(d){
    console.log(d);  
  });
};

$('#usa-site-zeitgeist').zeitgeist();
