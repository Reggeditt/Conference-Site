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
    details: 'Mr. Sam is a celebrated thought leader in the field of music business. His exploits range from production to talent management',
  },
  {
    image: 'reagan.png',
    name: 'Reagan Akowuah Basil',
    portfolio: 'C.E.O, Basil Tech Gh.',
    details: 'Reagan is a trail blazer when it comes to emerging technologies in the music industry. He also champions the mass adoption for new tech.',
  },
  {
    image: 'tetteh.jpg',
    name: 'Kodjo-Sarso Tetteh',
    portfolio: 'Music Director, Love Community Chapel int.',
    details: 'Tetteh is a multi- instrumentalist who serves as the Music Director for variious choirs.',
  },
  {
    image: '/jonah.jpg',
    name: 'Mr. Jonah Frimpong Domfeh',
    portfolio: 'Music tutor, Tritone Music Academy',
    details: 'Mr Jonah is a tutor of music theory. His interests lie in producing Jazz music with AI.',
  },
  {
    image: 'clement.jpg',
    name: 'Mr. Clement Ofori',
    portfolio: 'Business Analyst, Tritone Music Co',
    details: 'Mr Clement is a music entrepreneur specializing in the commercial aspects of music production.',
  },
  {
    image: 'MrDoe.jpg',
    name: 'Mr. Alex Doe',
    portfolio: 'Sound Engineer, Tritone Studios',
    details: 'rising star in the feild of sound engineering.',
  },
];

for (let i = 0; i < speakerData.length; i += 1) {
  const speakerCardEl = document.createElement('article');
  speakerCardEl.className = 'speaker-card';
  speakerCardEl.innerHTML = `
    <figure class="speaker-image">
      <img src="../assets/images/speakers/${speakerData[i].image}" alt="featured speaker ${i} image">
    </figure>
    <aside class="speaker-info">
      <h3 class="name">${speakerData[i].name}</h3>
      <span class="portfolio">${speakerData[i].portfolio}</span>
      <div class="divider"></div>
      <p class="details">${speakerData[i].details}</p>
    </aside>`;
  speakersContainerEl.appendChild(speakerCardEl);
}