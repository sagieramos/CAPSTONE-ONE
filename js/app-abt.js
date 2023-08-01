import { fade } from './module.js';

function handleNavigation(e) {
  const { target } = e;
  if (target.matches('.hamburger-menu, .hamburger-menu *')) {
    document.documentElement.classList.toggle('disable-overflow');
    fade();
  }
}

window.addEventListener('click', handleNavigation, { passive: false });
window.addEventListener('touchstart', handleNavigation, { passive: false });