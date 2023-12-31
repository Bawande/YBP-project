import Swiper from 'swiper';

const mediaQuery = window.matchMedia('(max-width: 414px)');

const container = document.querySelector('.about-us .advantages');
const wrapper = container.querySelector('.advantages__list');
const items = container.querySelectorAll('.advantages__item');

const swiperOptions = {
  slidesPerView: 1.4,
  centeredSlides: true,
  updateOnWindowResize: true,
  spaceBetween: 0,

  loop: true,

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  // wrapperClass: 'advantages__list',
  // slideClass: 'advantages__item',
};

let advantagesSwiper = null;

function handleMobileChange(e) {
  if (e.matches) {
    container?.classList.add('swiper-container');
    wrapper?.classList.add('swiper-wrapper');

    [].forEach.call(items, (item) => {
      item.classList.add('swiper-slide');
    });

    if (advantagesSwiper === null) {
      advantagesSwiper = new Swiper(container, swiperOptions);
    }
  } else {
    container?.classList.remove('swiper-container');
    wrapper?.classList.remove('swiper-wrapper');

    [].forEach.call(items, (item) => {
      item.classList.remove('swiper-slide');
    });

    if (advantagesSwiper !== null) {
      advantagesSwiper.destroy(false, true);
      advantagesSwiper = null;
    }
  }
}

mediaQuery.addEventListener('change', handleMobileChange);

handleMobileChange(mediaQuery);

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
