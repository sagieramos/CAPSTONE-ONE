import {
  sections,
  createSpeakers,
  checkbox,
} from './module.js';

const speakersContainer = document.getElementById('speaker');
const body = document.querySelector('body');

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

function handleNavigation(e) {
  const { target } = e;
  let sectionId = null;
  if (target.matches('#menu-checkbox')) {
    if (checkbox.checked) {
      document.documentElement.classList.add('disable-overflow');
      const div = document.createElement('div');
      div.id = 'customFadeRDWH';
      body.prepend(div);
    } else {
      document.documentElement.classList.remove('disable-overflow');
      document.getElementById('customFadeRDWH').remove();
    }
  }
  if (target.matches('#program')) sectionId = 'program';
  else if (target.matches('#news')) sectionId = 'news';
  else if (target.matches('#sponsor')) sectionId = 'sponsor';
  if (sectionId) {
    checkbox.checked = false;
    sections[sectionId].scrollIntoView({ behavior: 'smooth' });
    document.documentElement.classList.remove('disable-overflow');
    document.getElementById('customFadeRDWH').remove();
  }
}

function handleEvent(e) {
  handleNavigation(e);
  toggleSpeaker(e);
}

function init() {
  createSpeakers();
  window.addEventListener('click', handleEvent);
  window.addEventListener('touchstart', handleEvent);
}

document.addEventListener('DOMContentLoaded', init);
