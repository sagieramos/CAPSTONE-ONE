import { windowWidth } from './module.js';

let fadeToggle = true;
let check = false;
const body = document.querySelector('body');
const checkbox = document.querySelector('#menu-checkbox');

function fade() {
  if (fadeToggle) {
    const div = document.createElement('div');
    div.id = 'customFadeRDWH';
    body.prepend(div);
    fadeToggle = false;
  } else {
    const customFadeElement = document.getElementById('customFadeRDWH');
    if (customFadeElement) {
      customFadeElement.remove();
      fadeToggle = true;
    }
  }
}

function handleNavigation(e) {
  const { target } = e;
  if (target.matches('.hamburger-menu, .hamburger-menu *')) {
    document.documentElement.classList.toggle('disable-overflow');
    fade();
    check = !check;
  }
}

function handleResize() {
  if (window.innerWidth >= windowWidth.min && check) {
    const customFadeElement = document.getElementById('customFadeRDWH');
    if (customFadeElement) {
      customFadeElement.remove();
      fadeToggle = true;
    }
    checkbox.checked = false;
    check = false;
    if (document.documentElement.classList.contains('disable-overflow')) document.documentElement.classList.remove('disable-overflow');
  }
}

window.addEventListener('click', handleNavigation, { passive: false });
window.addEventListener('touchstart', handleNavigation, { passive: false });
window.addEventListener('resize', handleResize);