import { handleResize, checkbox, fade } from './module.js';

function handleNavigation(e) {
  const { target } = e;
  if (target.matches('#menu-checkbox')) fade(checkbox.checked);
  else if (target.id === 'customFadeRDWH') {
    checkbox.checked = false;
    fade(checkbox.checked);
  }
}

function init() {
  window.addEventListener('click', handleNavigation);
  window.addEventListener('touchstart', handleNavigation);
  window.addEventListener('resize', handleResize);
}

window.addEventListener('DOMContentLoaded', init);