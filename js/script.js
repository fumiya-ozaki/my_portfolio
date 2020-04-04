$(document).ready(function () {
var mySwiper = new Swiper ('.slide1', {
  // Optional parameters
  autoplay:{delay:100,}, //自動再生
  effect: 'fade',
  loop: true,
  speed:4000, //スクロールスピード小さいほど早い
  // direction: 'vertical', //スクロール方向 縦
  // spaceBetween: 1000, //写真の間の余白
  // pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

$('#mv-title').textillate({
  loop:true,
  in:{
    effect: 'fadeInDown',
    delay: 50,
    shuffle: true,
  },
  out:{
    effect: 'fadeOut',
    delay: 50,
    shuffle: true,
  }

});

var swiper = new Swiper('.slide2', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  autoplay:{delay:2000,}, //自動再生
  // runCallbacksOnInit: true,
  // initialSlide: 3,
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

});