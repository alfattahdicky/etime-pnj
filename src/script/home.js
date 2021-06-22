// Control Video
const videoEl = document.getElementById('video');
const close = document.getElementById('close');
const brandDicoding = document.getElementById('brand-dicoding');

function closeIklan() {
  close.style.display = 'none';
  videoEl.style.display = 'none';
}

const stopBrandDicoding = () => {
  brandDicoding.className = 'd-none';
  brandDicoding.firstElementChild.src = "";
}

close.addEventListener('click', closeIklan);

const dateEnd = () => {
  return new Date().getDate() === 25;
}

setTimeout(stopBrandDicoding, 32000)

if (dateEnd()) {
  stopBrandDicoding();
}