import { speakersData, createSpeakerElement } from './module.js';

const speakersContainer = document.getElementById('speaker');
const body = document.querySelector('body');

function toggleSpeeker(e) {
  const { target } = e;
  if (target.matches('#toggle-more')) {
    for (let i = 2; i < speakersData.length; i += 1) {
      const speakerElement = createSpeakerElement(speakersData[i]);
      speakersContainer.appendChild(speakerElement);
    }
    target.removeEventListener('click', toggleSpeeker);
    target.setAttribute('id', 'toggle-less');
    target.innerText = 'LESS';
    target.addEventListener('click', toggleSpeeker);
  } else if (target.matches('#toggle-less')) {
    while (speakersContainer.childElementCount > 2) {
      speakersContainer.removeChild(speakersContainer.lastChild);
    }
    target.removeEventListener('click', toggleSpeeker);
    target.setAttribute('id', 'toggle-more');
    target.innerText = 'MORE';
    target.addEventListener('click', toggleSpeeker);
  }
}

function handleResize() {
  if (window.innerWidth >= 747) {
    while (speakersContainer.firstChild) {
      speakersContainer.removeChild(speakersContainer.firstChild);
    }
    speakersData.forEach((speaker) => {
      const speakerElement = createSpeakerElement(speaker);
      speakersContainer.appendChild(speakerElement);
    });
  } else if (window.innerWidth <= 746) {
    const speakersContainer = document.getElementById('speaker');
    while (speakersContainer.childElementCount > 2) {
      speakersContainer.removeChild(speakersContainer.lastChild);
    }
    document.querySelector('.toggle-more-less').setAttribute('id', 'toggle-more');
  }
}

function createSpeakers() {
  if (window.innerWidth >= 747) {
    speakersData.forEach((speaker) => {
      const speakerElement = createSpeakerElement(speaker);
      speakersContainer.appendChild(speakerElement);
    });
  } else {
    for (let i = 2; i < speakersData.length; i += 1) {
      const speakerElement = createSpeakerElement(speakersData[i]);
      speakersContainer.appendChild(speakerElement);
    }
  }
}

document.addEventListener('DOMContentLoaded', createSpeakers);
window.addEventListener('resize', handleResize);
body.addEventListener('click', toggleSpeeker);
body.addEventListener('touchstart', toggleSpeeker);
