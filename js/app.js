import { speakersData, createSpeakerElement } from './module.js';

const windowWidth = { max: 746, min: 747 };

const speakersContainer = document.getElementById('speaker');
const body = document.querySelector('body');

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

function handleResize() {
  if (window.innerWidth >= windowWidth.min) {
    while (speakersContainer.firstChild) {
      speakersContainer.removeChild(speakersContainer.firstChild);
    }
    speakersData.forEach((speaker) => {
      const speakerElement = createSpeakerElement(speaker);
      speakersContainer.appendChild(speakerElement);
    });
    document.querySelector('.toggle-more-less').setAttribute('id', 'toggle-less');
  } else if (window.innerWidth <= windowWidth.max) {
    const speakersContainer = document.getElementById('speaker');
    while (speakersContainer.childElementCount > 2) {
      speakersContainer.removeChild(speakersContainer.lastChild);
    }
    document.querySelector('.toggle-more-less').setAttribute('id', 'toggle-more');
  }
}

function createSpeakers() {
  const width = window.innerWidth;
  if (width < windowWidth.min) {
    for (let i = 0; i < 2; i += 1) {
      const speakerElement = createSpeakerElement(speakersData[i]);
      speakersContainer.appendChild(speakerElement);
    }
  } else if (width > windowWidth.max) {
    while (speakersContainer.firstChild) {
      speakersContainer.removeChild(speakersContainer.firstChild);
    }
    speakersData.forEach((speaker) => {
      const speakerElement = createSpeakerElement(speaker);
      speakersContainer.appendChild(speakerElement);
    });
  }
}

document.addEventListener('DOMContentLoaded', createSpeakers);
window.addEventListener('resize', handleResize);
body.addEventListener('click', toggleSpeaker);
body.addEventListener('touchstart', toggleSpeaker);
