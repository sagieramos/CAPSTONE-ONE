import {
  sections,
  createSpeakers,
  checkbox,
  handleResize,
  fade,
} from './module.js';

const speakersContainer = document.getElementById('speaker');

function toggleSpeaker(e) {
  const { target } = e;
  const speakerChildren = [...speakersContainer.children];
  if (target.matches('#toggle-more')) {
    speakerChildren.slice(2).forEach((speaker) => {
      speaker.classList.remove('hidden');
    });
    target.removeEventListener('click', toggleSpeaker);
    target.setAttribute('id', 'toggle-less');
    target.innerText = 'LESS';
    target.addEventListener('click', toggleSpeaker);
  } else if (target.matches('#toggle-less')) {
    speakerChildren.slice(2).forEach((speaker) => {
      speaker.classList.add('hidden');
    });
    target.removeEventListener('click', toggleSpeaker);
    target.setAttribute('id', 'toggle-more');
    target.innerText = 'MORE';
    target.addEventListener('click', toggleSpeaker);
  }
}

const menu = document.querySelector('.sidebar');

function handleNavigation(e) {
  const { target } = e;
  if (target.matches('#menu-checkbox')) {
    fade(checkbox.checked);
  }

  if (target.parentNode === menu) {
    e.preventDefault();
    checkbox.checked = false;

    if (target.id in sections) sections[target.id].scrollIntoView({ behavior: 'smooth' });
    else window.location.href = target.href;

    fade(checkbox.checked);
  }
}

function handleEvent(e) {
  handleNavigation(e);
  toggleSpeaker(e);
}

function init() {
  createSpeakers();
  window.addEventListener('click', handleEvent, { passive: false });
  window.addEventListener('touchstart', handleEvent, { passive: false });
  window.addEventListener('resize', handleResize);
}

document.addEventListener('DOMContentLoaded', init);
