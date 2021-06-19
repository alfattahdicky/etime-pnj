// Control Video
const videoEl = document.getElementById('video');
const close = document.getElementById('close');
close.addEventListener('click', function () {
  close.style.display = 'none';
  videoEl.style.display = 'none';
})
