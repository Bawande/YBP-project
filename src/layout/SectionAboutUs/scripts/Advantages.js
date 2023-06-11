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
