// Control Video
const videoEl = document.getElementById('video');
const close = document.getElementById('close');
const brandDicoding = document.getElementById('brand-dicoding');

function closeIklan() {
  close.style.display = 'none';
  videoEl.style.display = 'none';
}

close.addEventListener('click', closeIklan);

const dateEnd = () => {
  return new Date().getDate() === 25;
}

setTimeout(() => {
  brandDicoding.className = 'd-none';
}, 32000)

if (dateEnd()) {
  brandDicoding.className = 'd-none';
}