const introBox = document.getElementById('intro-box');
const closeIntro = document.getElementById('close-intro');

const navigationType = performance.getEntriesByType("navigation")[0].type;

if (navigationType === "reload") {
  sessionStorage.removeItem('introSeen');
}

if (sessionStorage.getItem('introSeen') === 'true') {
  introBox.classList.add('hidden');
}

const handleCloseIntro = () => {
  introBox.classList.add('hidden');
  sessionStorage.setItem('introSeen', 'true');
};

closeIntro.addEventListener('click', handleCloseIntro);

