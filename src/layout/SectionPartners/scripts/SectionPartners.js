import Swiper from 'swiper';

const siwperOptions = {
  slidesPerView: 2.5,
  spaceBetween: 0,
  centeredSlides: true,
  speed: 500,

  loop: true,

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
};

const partnersFirstSwiper = new Swiper('.partners__first-list', {
  ...siwperOptions,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const partnersSecondSwiper = new Swiper('.partners__second-list', {
  ...siwperOptions,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
