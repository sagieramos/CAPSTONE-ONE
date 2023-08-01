import { speakersData, createSpeakerElement, handleResize, createSpeakers } from './module.js';

const checkbox = document.querySelector('#menu-checkbox');

const speakersContainer = document.getElementById('speaker');

const sections = {
    program: document.querySelector('#main-program'),
    join: document.querySelector('join'),
    sponsor: document.querySelector('#sponsors'),
    news: document.querySelector('#news'),
  };

function toggleSpeaker(e) {
  const { target } = e;
  if (target.matches('#toggle-more')) {
    for (let i = 2; i < speakersData.length; i += 1) {
      const speakerElement = createSpeakerElement(speakersData[i]);
      speakersContainer.appendChild(speakerElement);
    }
    target.removeEventListener('click', toggleSpeaker);
    target.setAttribute('id', 'toggle-less');
    target.innerText = 'LESS';
    target.addEventListener('click', toggleSpeaker);
  } else if (target.matches('#toggle-less')) {
    while (speakersContainer.childElementCount > 2) {
      speakersContainer.removeChild(speakersContainer.lastChild);
    }
    target.removeEventListener('click', toggleSpeaker);
    target.setAttribute('id', 'toggle-more');
    target.innerText = 'MORE';
    target.addEventListener('click', toggleSpeaker);
  } 
}

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

document.addEventListener('DOMContentLoaded', createSpeakers);
window.addEventListener('resize', handleResize);
window.addEventListener('click', toggleSpeaker, { passive: false });
window.addEventListener('touchstart', toggleSpeaker, { passive: false });
window.addEventListener('click', handleNavigation, { passive: false });
window.addEventListener('touchstart', handleNavigation, { passive: false });
