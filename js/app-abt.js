import { fade } from './module.js';

function handleNavigation(e) {
    const { target } = e;
      let sectionId = null;
      if (target.matches('.hamburger-menu, .hamburger-menu *')) {
        console.log('click');
        document.documentElement.classList.toggle('disable-overflow');
      }
      if (target.matches('#program')) sectionId = 'program';
      else if (target.matches('#news')) sectionId = 'news';
      else if (target.matches('#sponsor')) sectionId = 'sponsor';
      if (sectionId !== null) {
        checkbox.checked = false;
        sections[sectionId].scrollIntoView({ behavior: 'smooth' });
        document.documentElement.classList.remove('disable-overflow');
      }
}

window.addEventListener('click', handleNavigation, { passive: false });
window.addEventListener('touchstart', handleNavigation, { passive: false });