// start popup 스크립트
function Popup_close() {
  $('.popup-close > p').click(function () {
    $('.start-popup').addClass('close');
  });
}
Popup_close() ;

function Coupon_close() {
  $('.coupon-close').click(function () {
    $('.coupon').addClass('close');
  });
}
Coupon_close() ;