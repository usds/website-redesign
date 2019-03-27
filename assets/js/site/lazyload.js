
window.addEventListener('DOMContentLoaded', function (){
  var lazies = Array.prototype.slice.call(document.querySelectorAll('img[data-lazy-src]'));

  // Internet Explorer
  if ( !window.IntersectionObserver ) {
    lazies.forEach(function (img){ img.src = img.getAttribute('data-lazy-src'); });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs){
      entries.forEach(function (entry){
        if ( entry.isIntersecting ) {
          entry.target.src = entry.target.getAttribute('data-lazy-src');
          obs.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '50px' }
  );
  lazies.forEach(function (img){ observer.observe(img); });
});
