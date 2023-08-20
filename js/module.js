const windowWidth = { max: 746, min: 747 };
const body = document.querySelector('body');

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
  join: document.querySelector('#join'),
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

function createSpeakers() {
  const fragment = document.createDocumentFragment();
  speakersData.forEach((speaker, index) => {
    const speakerElement = createSpeakerElement(speaker);
    if (index >= 2) speakerElement.classList.add('hidden');
    fragment.appendChild(speakerElement);
  });
  document.getElementById('speaker').appendChild(fragment);
}

function handleResize() {
  if (window.innerWidth >= windowWidth.min && checkbox.checked) {
    const customFadeElement = document.getElementById('customFadeRDWH');
    customFadeElement.remove();
    checkbox.checked = false;
    if (document.documentElement.classList.contains('disable-overflow')) document.documentElement.classList.remove('disable-overflow');
  }
}

function fade(bool) {
  if (bool) {
    document.documentElement.classList.add('disable-overflow');
    const div = document.createElement('div');
    div.id = 'customFadeRDWH';
    body.prepend(div);
  } else {
    document.documentElement.classList.remove('disable-overflow');
    document.getElementById('customFadeRDWH').remove();
  }
}

export {
  checkbox,
  sections,
  createSpeakers,
  windowWidth,
  handleResize,
  fade,
};