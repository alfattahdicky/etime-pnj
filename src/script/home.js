// Control Video
const videoEl = document.getElementById('video');
const close = document.getElementById('close');
const brandAntares = document.getElementById('video-antares');
function closeIklan() {
  close.style.display = 'none';
  videoEl.style.display = 'none';
}

const stopBrandAntares = () => {
  brandAntares.classList.add('d-none');
  brandAntares.currentSrc = '';
}
const dateEnd = () => new Date().getDate() === 4;

setTimeout(() => stopBrandAntares(), 32000)

if (dateEnd()) stopBrandAntares();
close.addEventListener('click', closeIklan);
