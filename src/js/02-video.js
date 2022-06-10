import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onPlay, 1000));
setTime();
function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

function setTime() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}

console.log(Player);
