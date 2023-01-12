const menuIconEl = document.getElementById('menu-icon');
const menuIconCloseEl = document.getElementById('menu-close-icon');
const menuEl = document.getElementById('nav-links');

menuIconEl.addEventListener('click', () => {
  menuEl.style.display = 'flex';
  menuIconEl.style.display = 'none';
  menuIconCloseEl.style.display = 'inline-block';
  document.body.style.overflow = 'hidden';
});

menuIconCloseEl.addEventListener('click', () => {
  menuEl.style.display = 'none';
  menuIconEl.style.display = 'block';
  menuIconCloseEl.style.display = 'none';
  document.body.style.overflow = 'auto';
});

const mainEl = document.getElementById('main');
const speakerSectionEl = document.createElement('section');
speakerSectionEl.className = 'speaker-section';
const mainSpeakerHeading = document.createElement('h2');
mainSpeakerHeading.textContent = 'Featured Speakers';
const mainHeadingDivider = document.createElement('div');
mainHeadingDivider.className = 'divider';
const speakersContainerEl = document.createElement('div');
speakersContainerEl.className = 'speakers-container';

speakerSectionEl.append(mainSpeakerHeading, mainHeadingDivider, speakersContainerEl);
mainEl.insertBefore(speakerSectionEl, mainEl.children[2]);
const speakerData = [
  {
    image: 'ab-sam.png',
    name: 'Aboagye Sam',
    portfolio: 'Supervising Lead, Whizzy Music.',
    details: 'more details about mr. Ab-Sam',
  },
  {
    image: 'reagan.png',
    name: 'Reagan Akowuah Basil',
    portfolio: 'C.E.O, Basil Tech Gh.',
    details: 'More details about mr. Akowuah',
  },
  {
    image: 'reagan.png',
    name: 'Reagan A. Basil',
    portfolio: 'C.E.O, Basil Tech Gh.',
    details: 'More details about Reagan',
  },
  {
    image: 'ab-sam.png',
    name: 'Mr. Sam Aboagye',
    portfolio: 'Supervising Lead, Whizzy Music.',
    details: 'more details about Mr. Sam',
  },
  {
    image: 'ab-sam.png',
    name: 'Aboagye Samuel',
    portfolio: 'Supervising Lead, Whizzy Music.',
    details: 'more details about Samuel',
  },
  {
    image: 'reagan.png',
    name: 'Mr. Reagan A. Basil',
    portfolio: 'C.E.O, Basil Tech Gh.',
    details: 'More details about Basil',
  },
];

for (let i = 0; i < speakerData.length; i += 1) {
  const speakerCardEl = document.createElement('article');
  speakerCardEl.className = 'speaker-card';
  speakerCardEl.innerHTML = `
    <figure class="speaker-image">
      <img src="assets/images/speakers/${speakerData[i].image}" alt="featured speaker ${i} image">
    </figure>
    <aside class="speaker-info">
      <h3 class="name">${speakerData[i].name}</h3>
      <span class="portfolio">${speakerData[i].portfolio}</span>
      <div class="divider"></div>
      <p class="details">${speakerData[i].details}</p>
    </aside>`;
  speakersContainerEl.appendChild(speakerCardEl);
}