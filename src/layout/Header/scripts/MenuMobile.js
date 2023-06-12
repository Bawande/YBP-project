const buttonTogglerMenuMobile = document.querySelector('.mobile-nav__toggler');
const wrapperMenuMobile = document.querySelector('.mobile-nav__list-wrapper');

function handlerClickBodyTabMenu(e) {
  // console.log(e.currentTarget);

  buttonTogglerMenuMobile?.classList.remove('is-open');
  wrapperMenuMobile?.classList.remove('is-open');
  document.body.removeEventListener('click', handlerClickBodyTabMenu);
}

const hendlerTogglerTabMenu = (e) => {
  // console.log(e.target);

  if (wrapperMenuMobile.matches('.is-open')) {
    wrapperMenuMobile?.classList.remove('is-open');
    buttonTogglerMenuMobile?.classList.remove('is-open');
  } else {
    wrapperMenuMobile?.classList.add('is-open');
    buttonTogglerMenuMobile?.classList.add('is-open');

    setTimeout(() => {
      document.body.addEventListener('click', handlerClickBodyTabMenu);
    }, 0);
  }
};

buttonTogglerMenuMobile?.addEventListener('click', hendlerTogglerTabMenu);
