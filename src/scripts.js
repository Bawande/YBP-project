// --- polyfill

// --- libs
import AOS from 'aos';

// --- layout
import './layout/Header/scripts';
import './layout/SectionIntro/scripts';
import './layout/SectionPartners/scripts';
import './layout/SectionAboutUs/scripts';
import './layout/SectionServices/scripts';

// --- components
import './components/Modal/scripts';

// --- section

// --- AOS
AOS.init({
  disable() {
    const maxWidth = 1024;
    return window.innerWidth < maxWidth;
  },
  duration: 600,
});

// --- dev
const mediaQuery = window.matchMedia('(min-width: 1024px)');

function handleMobileChange(e) {
  window.location.reload();
}

mediaQuery.addEventListener('change', handleMobileChange);
