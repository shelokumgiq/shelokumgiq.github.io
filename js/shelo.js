/* global navigator */
(function(){
  if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('js/sw.js');
  }
})();