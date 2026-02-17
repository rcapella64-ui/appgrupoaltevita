// Smart redirect for /baixar page
(function () {
  var APP_STORE_URL = 'https://apps.apple.com/br/app/cuidame-gestor-de-sa%C3%BAde/id6744027992';
  var GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=br.com.cuidame&hl=pt';

  var ua = navigator.userAgent || navigator.vendor || window.opera;

  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    window.location.href = APP_STORE_URL;
  } else if (/android/i.test(ua)) {
    window.location.href = GOOGLE_PLAY_URL;
  }
  // Desktop: no redirect, show fallback content
})();
