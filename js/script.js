$(document).ready(function () {
var mySwiper = new Swiper ('.slide1', {
  // Optional parameters
  autoplay:{delay:100,}, //自動再生
  effect: 'fade',
  loop: true,
  speed:4000, //スクロールスピード小さいほど早い
  // direction: 'vertical', //スクロール方向 縦
  // spaceBetween: 1000, //写真の間の余白

  // pagination //
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

//textillate
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

//swiper
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

  //scrollmagic
  var controller = new ScrollMagic.Controller(); //先頭にかならずつける
  //parallax scene
  var parallaxTL =new TimelineMax();
  parallaxTL
    .from('.contents__wrapper', 2,{opacity: 0, delay:4})
    .from('.bcg',10,{y: '-50%', ease:Power0.easeNone},0)
    ;    
  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    triggerHook:1,
    duration:'150%'
  })
  .addIndicators({
    name: 'parallax', //indicaterの名前
    colorTrigger: 'black', //triggerの色
    colorStart: '#75C695', //開始箇所の色
    colorEnd:'pink' //終了箇所の色
  })
  .setTween(parallaxTL)
  .addTo(controller); //コントローラー（必ずつける）

  //profile部分
  var scene2 = new ScrollMagic.Scene({
    triggerElement:".profile",
    reverse: false,
  })
  .setTween(TweenMax.from('.profile__text', 2,{opacity: 0, delay:0}))
  .addIndicators({
    name: 'profile', //indicaterの名前
    colorTrigger: 'black', //triggerの色
    colorStart: '#75C695', //開始箇所の色
    colorEnd:'pink' //終了箇所の色
  })
  
  .addTo(controller); //コントローラー（必ずつける）

  //product部分
  $('.fadeIn').each(function(){
    var scene = new ScrollMagic.Scene({
      triggerElement: this, //イベント開始場所 入れ子可能
      duration: '110%', //イベント終了場所 要素に対して
      // triggerHook: 0.9, //開始場所変更 0はページトップ 
      // reverse: false, //イベント繰り返し falseは１回だけ durationを消すと良い
    })
    .setClassToggle(".item","fade-in")
    .addIndicators({
      name: 'fade-in', //indicaterの名前
      colorTrigger: 'black', //triggerの色
      colorStart: '#75C695', //開始箇所の色
      colorEnd:'pink' //終了箇所の色
    })
    .addTo(controller); //コントローラー（必ずつける）
  });
});