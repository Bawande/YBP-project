const buttonTogglerMenuTablet = document.querySelector('.contacts__tablet');
const wrapperMenuTablet = document.querySelector('.contacts__wrapper');

function handlerClickBodyTabMenu(e) {
  // console.log(e.currentTarget);

  wrapperMenuTablet?.classList.remove('is-open');
  document.body.removeEventListener('click', handlerClickBodyTabMenu);
}

const hendlerTogglerTabMenu = (e) => {
  // console.log(e.target);

  if (wrapperMenuTablet.matches('.is-open')) {
    wrapperMenuTablet?.classList.remove('is-open');
  } else {
    wrapperMenuTablet?.classList.add('is-open');

    setTimeout(() => {
      document.body.addEventListener('click', handlerClickBodyTabMenu);
    }, 0);
  }
};

buttonTogglerMenuTablet?.addEventListener('click', hendlerTogglerTabMenu);
