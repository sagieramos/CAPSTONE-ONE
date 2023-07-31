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
    name: 'Tosin Adewale',
    qualities: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    speech: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptates ipsa libero enim deserunt quia sunt quam laudantium nisi veniam, asperiores neque sed quaerat.',
  },
  {
    imgSrc: './assets/speakers/omos.jpg',
    name: 'Samuel Juliana',
    qualities: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    speech: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptates ipsa libero enim deserunt quia sunt quam laudantium nisi veniam, asperiores neque sed quaerat.',
  },
  {
    imgSrc: './assets/speakers/Tosin.jpg',
    name: 'Stanley Osagie',
    qualities: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    speech: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptates ipsa libero enim deserunt quia sunt quam laudantium nisi veniam, asperiores neque sed quaerat.',
  },
  {
    imgSrc: './assets/speakers/mama.jpg',
    name: 'Stanley Osagie',
    qualities: 'Lorem ipsum dolor sit, amet consectetur adipisicing.',
    speech: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptates ipsa libero enim deserunt quia sunt quam laudantium nisi veniam, asperiores neque sed quaerat.',
  },
];

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

export { speakersData, createSpeakerElement };