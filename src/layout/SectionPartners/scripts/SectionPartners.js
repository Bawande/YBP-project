import Swiper from 'swiper';

const partnersFirstSwiper = new Swiper('.partners__first-list', {
  slidesPerView: 2.5,
  spaceBetween: 0,
  centeredSlides: true,

  loop: true,

  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },

  wrapperClass: 'partners__list',
  slideClass: 'partners__item',

  breakpoints: {
    768: {
      slidesPerView: 3.5,
    },
    1024: {
      slidesPerView: 4.5,
    },
  },
});

const partnersSecondSwiper = new Swiper('.partners__second-list', {
  slidesPerView: 2.5,
  spaceBetween: 0,
  centeredSlides: true,

  loop: true,

  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },

  wrapperClass: 'partners__list',
  slideClass: 'partners__item',

  breakpoints: {
    768: {
      slidesPerView: 3.5,
    },
    1024: {
      slidesPerView: 4.5,
    },
  },
});
