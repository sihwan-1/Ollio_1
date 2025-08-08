// start popup 스크립트
function Popup_close() {
  $('.popup-close > p').click(function () {
    $('.start-popup').addClass('close');
  });
}
Popup_close() ;

$(window).on('scroll', function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop > 20) {
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
});


function Coupon_close() {
  $('.coupon-close').click(function () {
    $('.coupon').addClass('close');
  });
}
Coupon_close() ;

function Search_1() {
  $('.search').click(function () {
    $('.search-box').toggleClass('show');
    $('header').toggleClass('show');
  });
}
Search_1();

function Swiper_1() {
  var swiper = new Swiper(".swiper-1", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
Swiper_1();

function Swiper_2() {
  var swiper = new Swiper(".swiper-2", {
    slidesPerView: 4,
    spaceBetween: 32,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
Swiper_2();

function Swiper_3() {
  var swiper = new Swiper(".swiper-3", {
    slidesPerView: 3,
    spaceBetween: 32,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
Swiper_3();

function Swiper_5() {
  var swiper = new Swiper(".swiper-5", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
Swiper_5();

