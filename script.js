$('.start-popup').addClass('close'); // 임시

// start popup 스크립트
function Popup_close() {
  $('.popup-close > p').click(function () {
    $('.start-popup').addClass('close');
  });
}
Popup_close();



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
      el: ".swiper-box-2 .swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-box-2 .swiper-button-next",
      prevEl: ".swiper-box-2 .swiper-button-prev",
    },
  });
}
Swiper_2();

function Swiper_3() {
  var swiper = new Swiper(".swiper-3", {
    slidesPerView: 3,
    spaceBetween: 32,
    scrollbar: {
      el: ".swiper-box-3 .swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-box-3 .swiper-button-next",
      prevEl: ".swiper-box-3 .swiper-button-prev",
    },
  });
}
Swiper_3();

function Swiper_5() {
  var swiper = new Swiper(".swiper-5", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
      nextEl: ".swiper-box-5 .swiper-button-next",
      prevEl: ".swiper-box-5 .swiper-button-prev",
    },
  });
}
Swiper_5();

function Swiper_8() {
  var swiper = new Swiper(".swiper-8", {
    pagination: {
      el: ".swiper-box-8 .swiper-pagination",
      // clickable: true,
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },
    },
  });
}
Swiper_8();



$(document).ready(function () {
  const $slider = $(".review-slider ul");
  const $slides = $(".review-slider li");
  const totalSlides = $slides.length;
  const itemsPerSlide = 5;
  const totalPages = Math.ceil(totalSlides / itemsPerSlide);
  let currentPage = 0;
  let startX = 0;
  let isDragging = false;

  // 숫자 페이지네이션 생성
  for (let i = 0; i < totalPages; i++) {
      $(".pagination").append(`<span data-index="${i}">${i + 1}</span>`);
  }
  $(".pagination span").eq(0).addClass("active");

  // 페이지 이동 함수
  function goToPage(page) {
      currentPage = page;
      const translateX = -(page * 100);
      $slider.css("transform", `translateX(${translateX}%)`);
      $(".pagination span").removeClass("active").eq(page).addClass("active");
  }

  // 페이지네이션 클릭 이벤트
  $(".pagination").on("click", "span", function () {
      const index = $(this).data("index");
      goToPage(index);
  });

  // 드래그 이벤트 (마우스 + 터치)
  $slider.on("mousedown touchstart", function (e) {
      startX = e.pageX || e.originalEvent.touches[0].pageX;
      isDragging = true;
  });

  $slider.on("mouseup touchend", function (e) {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.pageX || e.originalEvent.changedTouches[0].pageX;
      const diff = endX - startX;

      if (diff > 50 && currentPage > 0) {
          goToPage(currentPage - 1); // 왼쪽으로 드래그 → 이전 페이지
      } else if (diff < -50 && currentPage < totalPages - 1) {
          goToPage(currentPage + 1); // 오른쪽으로 드래그 → 다음 페이지
      }
  });

  $slider.on("mouseleave", function () {
      isDragging = false;
  });
});
