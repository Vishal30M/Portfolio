const burger = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu-mobile');
const closeIcon = document.querySelector('.close-icon');

burger.addEventListener('click', () => {
  menuMobile.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  menuMobile.classList.remove('active');
});

Window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menuMobile.classList.remove('active');
  }
});

const projects = [
  {
    title: 'Tonic',
    snapshot: 'images/SS0.png',
    mainDetail: 'CANOPY',
    secondaryDetail: ['Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['HTML', 'CSS', 'Javascript']
  },
  {
    title: 'Tonic',
    snapshot: 'images/SS2.png',
    mainDetail: 'CANOPY',
    secondaryDetail: ['Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['HTML', 'CSS', 'Javascript']
  },
  {
    title: 'Tonic',
    snapshot: 'images/SS1.png',
    mainDetail: 'CANOPY',
    secondaryDetail: ['Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['HTML', 'CSS', 'Javascript']
  },
  {
    title: 'Multi-Post Stories',
    snapshot: 'images/SS4.png',
    mainDetail: 'CANOPY',
    secondaryDetail: ['Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['HTML', 'CSS', 'Javascript']
  }
];

const projectsSection = document.createElement('section');
projectsSection.id = 'Projects';

for (const project of projects) {
  const card = document.createElement('div');
  card.classList.add('card');
  if (projects.indexOf(project) % 2 !== 0) {
    card.classList.add('reverse');
  }

  const snapshot = document.createElement('img');
  snapshot.classList.add('snapshot');
  snapshot.src = project.snapshot;
  snapshot.alt = 'snapshot';
  card.appendChild(snapshot);

  const right = document.createElement('div');
  right.classList.add('right');
  card.appendChild(right);

  const cardText = document.createElement('div');
  cardText.classList.add('card-text');
  right.appendChild(cardText);

  const title = document.createElement('h2');
  title.textContent = project.title;
  cardText.appendChild(title);

  const detailList = document.createElement('ul');
  detailList.classList.add('detail');
  cardText.appendChild(detailList);

  const mainDetail = document.createElement('li');
  mainDetail.classList.add('main');
  mainDetail.textContent = project.mainDetail;
  detailList.appendChild(mainDetail);

  for (const secondaryDetail of project.secondaryDetail) {
    const secondary = document.createElement('li');
    secondary.classList.add('main2');
    secondary.textContent = secondaryDetail;
    detailList.appendChild(secondary);
  }

  const paragraph = document.createElement('div');
  paragraph.classList.add('paragraph');
  right.appendChild(paragraph);

  const description = document.createElement('p');
  description.classList.add('short.descr');
  description.textContent = project.description;
  paragraph.appendChild(description);

  const languageList = document.createElement('ul');
  languageList.classList.add('language');
  right.appendChild(languageList);

  for (const language of project.languages) {
    const languageItem = document.createElement('li');
    languageItem.textContent = language;
    languageList.appendChild(languageItem);
  }

  const seeProjectButton = document.createElement('button');
  seeProjectButton.type = 'button';
  seeProjectButton.textContent = 'See Project';
  right.appendChild(seeProjectButton);

  projectsSection.appendChild(card);
}

document.body.appendChild(projectsSection);