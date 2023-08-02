import './style.scss'

(function () {
  const items = document.querySelectorAll('.sounds-item');
  const sounds = document.querySelectorAll('.sounds-item audio');
  const bodyBg = document.querySelector('.bg-blur');
  const volume = document.querySelector('.range');

  const playSound = (item) => {
    pauseAllSounds();
    removeAllClass();
    item.classList.add('play');
    item.querySelector('audio').play();
    item.querySelector('audio').dataset.play = 'true';
  }

  const pauseAllSounds = () => {
    sounds.forEach((item) => item.pause());
  }

  const removeAllClass = () => {
    items.forEach((item) => item.classList.remove('play'));
  }

  const pauseSound = (item) => {
    item.classList.remove('play');
    item.querySelector('audio').pause();
    item.querySelector('audio').dataset.play = 'false';
  }

  const changeBg = (item) => {
    bodyBg.style.backgroundImage = `url(./assets/${item.dataset.bg}.jpg)`
  }

  items.forEach((item) => {
    item.addEventListener('click', () => {
      if (!item.classList.contains('play')) {
        playSound(item);
      } else {
        pauseSound(item);
      }

      changeBg(item);
    })
  });

  const changeVolume = () => {
    sounds.forEach((item) => {
      item.volume = +volume.value;
    });
  }

  changeVolume();

  volume.addEventListener('input', changeVolume)
})();
