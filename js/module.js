const windowWidth = { max: 746, min: 747 };

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

function createSpeakerElement(speaker) {
  const article = document.createElement('article');
  article.className = 'speaker';
  const {
    imgSrc, name, qualities, speech,
  } = speaker;

  article.innerHTML = `
  <img class="spk-img" src="${imgSrc}" alt="name">
    <section class="spk-bio">
      <h3 class="spk-name">${name}</h3>
      <p class="spk-qualities">${qualities}</p>
      <p class="spk-speach">${speech}</p>
    </section>`;

  return article;
}

const speakerModal = document.getElementById('speaker');

function createSpeakers() {
  const fragment = document.createDocumentFragment();
  speakersData.forEach((speaker, index) => {
    const speakerElement = createSpeakerElement(speaker);
    if (index >= 2) speakerElement.classList.add('hidden');
    fragment.appendChild(speakerElement);
  });
  speakerModal.appendChild(fragment);
}

export {
  checkbox,
  sections,
  createSpeakers,
  windowWidth,
};