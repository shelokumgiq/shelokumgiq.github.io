/* global navigator */
(function () { // eslint-disable-line wrap-iife,func-names
  if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('js/sw.js');
  }
})();
