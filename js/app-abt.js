import { handleResize, checkbox, fade } from './module.js';

function handleNavigation(e) {
  if (e.target.matches('#menu-checkbox')) fade(checkbox.checked);
}

function init() {
  window.addEventListener('click', handleNavigation);
  window.addEventListener('touchstart', handleNavigation);
  window.addEventListener('resize', handleResize);
}

window.addEventListener('DOMContentLoaded', init);