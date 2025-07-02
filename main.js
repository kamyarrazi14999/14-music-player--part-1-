
const audio = document.getElementById("audio");
const playpauseButton = document.getElementById("play-pause-btn");
const preveButton = document.getElementById(".prev-btn");
const nextButton = document.getElementById(".next-btn");
const volumeSlider = document.querySelector(".volume-slider");
const seekSlider = document.querySelector(".seek-slider");
const coverImage = document.querySelector(".cover-img");
const currentTimeDisplay = document.querySelector(".current-time");
const totalTimeDisplay = document.querySelector(".total-time");
const singerName = document.querySelector(".singer-name");
const musicName = document.querySelector(".music-name");
// Event listeners for play/pause, next, and previous buttons
// Play/Pause button

const playlist = [
  { singerName: 'Abdoul Pit', musicName: 'singer name 1', audioSrc: './assets/1-music.mp3', coverSrc: 'assets/1-cover.jpg' },
  { singerName: 'json jafari', musicName: 'singer name 3', audioSrc: './assets/2-music.mp3', coverSrc: 'assets/2-cover.jpg' },
  { singerName: 'Anjelina Habibi', musicName: 'singer name 3', audioSrc: './assets/3-music.mp3', coverSrc: 'assets/3-cover.jpg' },
];
let currentIndex = 0;
let isPlaying = false;
// load the current track
const loadAudio = () => {
  const track = playlist[currentIndex];
  coverImage.src = track.coverSrc;
  singerName.textContent = track.singerName;
  musicName.textContent = track.musicName;
  audio.src = track.audioSrc;
if(isPlaying) {
    audio.play();
  }
  playpauseButton.addEventListener("click", () => {
    const playIcon = playpauseButton.firstElementChild;
    if (isPlaying) {
      audio.pause();
      // Change the icon to play
      playIcon.classList.replace("fa-pause", "fa-play");
      
    
    } else {
      audio.play();
      // Change the icon to pause
      
      playIcon.classList.replace("fa-play", "fa-pause");
      
    
    }
    isPlaying = !isPlaying;
  });
}
loadAudio();

