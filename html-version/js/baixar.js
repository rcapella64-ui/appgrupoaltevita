// Smart redirect for /baixar page
(function () {
  var APP_STORE_URL = 'https://apps.apple.com/br/app/cuidame-gestor-de-sa%C3%BAde/id6744027992';
  var GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=br.com.cuidame&hl=pt';
  var BAIXAR_URL = 'https://appgrupoaltevita.lovable.app/baixar';

  var ua = navigator.userAgent || navigator.vendor || window.opera;

  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    window.location.href = APP_STORE_URL;
  } else if (/android/i.test(ua)) {
    window.location.href = GOOGLE_PLAY_URL;
  }

  // Generate QR Code on desktop
  var qrEl = document.getElementById('qrcode');
  if (qrEl && typeof QRCode !== 'undefined') {
    new QRCode(qrEl, {
      text: BAIXAR_URL,
      width: 160,
      height: 160,
      colorDark: '#1b4332',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.H
    });
  }
})();
