// Control Video
const videoEl = document.getElementById('video');
const close = document.getElementById('close');
const brandOmron = document.getElementById('video-omron');

function closeIklan() {
  close.style.display = 'none';
  videoEl.style.display = 'none';
}

const stopBrand = () => {
  brandOmron.classList.add('d-none');
  brandOmron.currentSrc = '';
}
const dateEnd = () => new Date().getDate() === 2;

setTimeout(() => stopBrand(), 48000)
if (dateEnd()) stopBrand();
close.addEventListener('click', closeIklan);
