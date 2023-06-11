import Swiper from 'swiper';

const mediaQuery = window.matchMedia('(max-width: 534px)');

const container = document.querySelector('.services .services__wrapper');
const wrapper = container.querySelector('.services__cards-list');
const items = container.querySelectorAll('.services__card-item');
const feedbackCard = container.querySelector('.service-card-feedback');
const copyFeedbackCard = feedbackCard.cloneNode(true);

const swiperOptions = {
  slidesPerView: 1.2,
  centeredSlides: true,
  updateOnWindowResize: true,
  spaceBetween: 0,
  loop: true,

  breakpoints: {
    // when window width is >=

    534: {
      slidesPerView: 1.4,
    },
  },
};

let serviceSwiper = null;
let removeCard = null;

function handleMobileChange(e) {
  if (e.matches) {
    container?.classList.add('swiper-container');
    wrapper?.classList.add('swiper-wrapper');

    [].forEach.call(items, (item) => {
      item.classList.add('swiper-slide');
    });

    if (removeCard === null) {
      container.appendChild(copyFeedbackCard);
      removeCard = wrapper.removeChild(wrapper.lastElementChild);
    }

    if (serviceSwiper === null) {
      serviceSwiper = new Swiper(container, swiperOptions);
    }
  } else {
    container?.classList.remove('swiper-container');
    wrapper?.classList.remove('swiper-wrapper');

    [].forEach.call(items, (item) => {
      item.classList.remove('swiper-slide');
    });

    if (removeCard !== null) {
      container.removeChild(copyFeedbackCard);
      wrapper.appendChild(removeCard);
      removeCard = null;
    }

    if (serviceSwiper !== null) {
      serviceSwiper.destroy(false, true);
      serviceSwiper = null;
    }
  }
}

mediaQuery.addEventListener('change', handleMobileChange);

handleMobileChange(mediaQuery);
