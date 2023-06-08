import Swiper from 'swiper';

const partnersFirstSwiper = new Swiper('.partners__first-list', {
  slidesPerView: 4.5,
  spaceBetween: 0,
  centeredSlides: true,

  loop: true,

  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },

  wrapperClass: 'partners__list',
  slideClass: 'partners__item',
});

const partnersSecondSwiper = new Swiper('.partners__second-list', {
  slidesPerView: 4.5,
  spaceBetween: 0,
  centeredSlides: true,

  loop: true,

  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },

  wrapperClass: 'partners__list',
  slideClass: 'partners__item',
});

// breakpoints: {
//   // when window width is >= 320px
//   320: {
//     // slidesPerView: 2,
//     // spaceBetween: 20,
//   },
//   // when window width is >= 480px
//   480: {
//     // slidesPerView: 3,
//     // spaceBetween: 30,
//   },
//   // when window width is >= 640px
//   640: {
//     slidesPerView: 1,
//     spaceBetween: 20,
//   },
//   // when window width is >= 768px
//   768: {
//     slidesPerView: 1,
//     spaceBetween: 0,
//   },
//   // when window width is >= 1000px
//   1000: {
//     slidesPerView: 1.5,
//     spaceBetween: 20,
//   },
//   // when window width is >= 1200px
//   1200: {
//     slidesPerView: 1.7,
//   },
//   // when window width is >= 1500px
//   1500: {
//     slidesPerView: 2,
//     // spaceBetween: 40,
//   },
// },
