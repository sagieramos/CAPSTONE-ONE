const speakersData = [
  {
    imgSrc: './assets/speakers/omos.jpg',
    name: 'Stanley Osagie',
    qualities: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    speech: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptates ipsa libero enim deserunt quia sunt quam laudantium nisi veniam, asperiores neque sed quaerat.',
  },
  {
    imgSrc: './assets/speakers/Tosin.jpg',
    name: 'Tosin Adewale',
    qualities: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    speech: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptates ipsa libero enim deserunt quia sunt quam laudantium nisi veniam, asperiores neque sed quaerat.',
  },
  {
    imgSrc: './assets/speakers/mama.jpg',
    name: 'Samuel Juliana',
    qualities: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    speech: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptates ipsa libero enim deserunt quia sunt quam laudantium nisi veniam, asperiores neque sed quaerat.',
  },
  {
    imgSrc: './assets/speakers/omos.jpg',
    name: 'Omos Ehigbe',
    qualities: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    speech: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptates ipsa libero enim deserunt quia sunt quam laudantium nisi veniam, asperiores neque sed quaerat.',
  },
  {
    imgSrc: './assets/speakers/Tosin.jpg',
    name: 'Iya Alata',
    qualities: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    speech: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptates ipsa libero enim deserunt quia sunt quam laudantium nisi veniam, asperiores neque sed quaerat.',
  },
  {
    imgSrc: './assets/speakers/mama.jpg',
    name: 'Mama Omos',
    qualities: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    speech: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptates ipsa libero enim deserunt quia sunt quam laudantium nisi veniam, asperiores neque sed quaerat.',
  },
];

const sections = {
  program: document.querySelector('#main-program'),
  join: document.querySelector('join'),
  sponsor: document.querySelector('#sponsors'),
  news: document.querySelector('#news'),
};

const checkbox = document.querySelector('#menu-checkbox');
const body = document.querySelector('body');

function createSpeakerElement(speaker) {
  const article = document.createElement('article');
  article.classList = 'speaker';

  const img = document.createElement('img');
  img.className = 'spk-img';
  img.src = speaker.imgSrc;
  img.alt = speaker.name;

  const section = document.createElement('section');
  section.className = 'spk-bio';

  const h2 = document.createElement('h2');
  h2.className = 'spk-name';
  h2.textContent = speaker.name;

  const pQualities = document.createElement('p');
  pQualities.className = 'spk-qualities';
  pQualities.textContent = speaker.qualities;

  const pSpeech = document.createElement('p');
  pSpeech.className = 'spk-speach';
  pSpeech.textContent = speaker.speech;

  section.appendChild(h2);
  section.appendChild(pQualities);
  section.appendChild(pSpeech);

  article.appendChild(img);
  article.appendChild(section);

  return article;
}

const speakerModal = document.getElementById('speaker');
const windowWidth = { max: 746, min: 747 };
let fadeToggle = true;

function handleResize() {
  if (window.innerWidth >= windowWidth.min) {
    while (speakerModal.firstChild) {
      speakerModal.removeChild(speakerModal.firstChild);
    }
    speakersData.forEach((speaker) => {
      const speakerElement = createSpeakerElement(speaker);
      speakerModal.appendChild(speakerElement);
    });
    document.querySelector('.toggle-more-less').setAttribute('id', 'toggle-less');

    const customFadeElement = document.getElementById('customFadeRDWH');
    if (customFadeElement) {
      customFadeElement.remove();
      fadeToggle = true;
    }
    checkbox.checked = false;
    if (document.documentElement.classList.contains('disable-overflow')) document.documentElement.classList.remove('disable-overflow');
  } else if (window.innerWidth <= windowWidth.max) {
    while (speakerModal.childElementCount > 2) {
      speakerModal.removeChild(speakerModal.lastChild);
    }
    document.querySelector('.toggle-more-less').setAttribute('id', 'toggle-more');
  }
}

function createSpeakers() {
  const width = window.innerWidth;
  if (width < windowWidth.min) {
    for (let i = 0; i < 2; i += 1) {
      const speakerElement = createSpeakerElement(speakersData[i]);
      speakerModal.appendChild(speakerElement);
    }
  } else if (width > windowWidth.max) {
    while (speakerModal.firstChild) {
      speakerModal.removeChild(document.getElementById('speaker').firstChild);
    }
    speakersData.forEach((speaker) => {
      const speakerElement = createSpeakerElement(speaker);
      speakerModal.appendChild(speakerElement);
    });
  }
}

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

export {
  windowWidth,
  checkbox,
  sections,
  speakersData,
  createSpeakerElement,
  handleResize,
  createSpeakers,
  fade,
};