import { playList } from './playlist.mjs';

const playPauseBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');

const soundName = document.querySelector('.music-name');
const volumeContainer = document.querySelector('.volume_container');
const volumeSliderContainer = document.querySelector(
   '.volume__slider__container'
);
const volumeIcon = document.querySelector('.volume-icon');
const volumeSlider = document.querySelector('.volume-slider');

const songTimeLine = document.querySelector('.song-timeline');
const currentSontTime = document.querySelector('.current');
const songLength = document.querySelector('.lentht');

const audio = new Audio();

let isPlay = false;

let playNum = 0;

audio.src = playList[playNum].src;

function activateListText() {
   ListEl[playNum].classList.add('_active');
}
function activateListIcon() {
   ListEl[playNum].classList.add('_active1');
}

function deactivateListText() {
   ListEl[playNum].classList.remove('_active');
}
function deactivateListIcon() {
   ListEl[playNum].classList.remove('_active1');
}

playList.forEach((index) => {
   const li = document.createElement('li');
   li.classList.add('play-item');
   li.textContent = index.title;
   playListContainer.append(li);
});

const ListEl = document.querySelectorAll('.play-item');

function songChange(e) {
   let liNum = [...ListEl].indexOf(e.target);
   deactivateListText();
   deactivateListIcon();

   if (liNum === playNum && isPlay) {
      isPlay = true; // пауза
      playPauseAudio();
      activateListText();
   } else if (liNum !== playNum) {
      isPlay = false;
      playNum = liNum;
      audio.src = playList[liNum].src;
      playPauseAudio();
   } else if (liNum === playNum) {
      isPlay = false; // пуск
      playNum = liNum;
      playPauseAudio();
   }
}

ListEl.forEach((el) => {
   el.addEventListener('click', songChange);
   /* el.addEventListener('click', ()=> {
		el.classList.add('_active')
	}) */
});

function getTimeCodeFromNum(num) {
   let seconds = parseInt(num);
   let minutes = parseInt(seconds / 60);
   seconds -= minutes * 60;
   const hours = parseInt(minutes / 60);
   minutes -= hours * 60;

   if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
   return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
   ).padStart(2, 0)}`;
}

function volumeChange() {
	audio.volume = volumeSlider.value / 100
	currentVolume = volumeSlider.value
}


let currentVolume = volumeSlider.value


function volumeMute() {
	volumeIcon.classList.toggle('_active')
	if(volumeSlider.value>0) {
		audio.muted = true
		volumeSlider.value = 0 
		
		
	} else {
		audio.muted = false
		volumeSlider.value = currentVolume
		
	}
	
	
	
}


function inputChange() {
   audio.currentTime = (songTimeLine.value * audio.duration) / 100;
   timelineChange();
}



function timelineChange() {
   const audioLength = audio.duration;
   const currentAudioTime = audio.currentTime;

   currentSontTime.textContent = getTimeCodeFromNum(currentAudioTime);
   songLength.textContent = getTimeCodeFromNum(audioLength);

   songTimeLine.value = (currentAudioTime * 100) / audioLength;
}

setInterval(timelineChange, 500);





function playNext() {
   isPlay = false;
   deactivateListText();
   deactivateListIcon();
   if (playNum < playList.length - 1) {
      playNum += 1;
   } else {
      playNum = 0;
   }
   audio.src = playList[playNum].src;
   playPauseAudio();
}

function playPrev() {
   deactivateListText();
   deactivateListIcon();
   isPlay = false;
   if (playNum >= 1) {
      playNum -= 1;
   } else {
      playNum = playList.length - 1;
   }
   audio.src = playList[playNum].src;

   playPauseAudio();
}

function playPauseAudio() {
   if (!isPlay) {
      isPlay = true;
      audio.play();
      playPauseBtn.classList.add('pause');
      soundName.textContent = playList[playNum].title;
      activateListText();
      activateListIcon();
   } else {
      isPlay = false;
      audio.pause();
      playPauseBtn.classList.remove('pause');

      deactivateListIcon();
   }
}

function hideVolume() {
   volumeSliderContainer.classList.toggle('_active');
   volumeSlider.classList.toggle('_active');
}

soundName.textContent = playList[playNum].title;

playPauseBtn.addEventListener('click', playPauseAudio);
audio.addEventListener('ended', playNext);
prevBtn.addEventListener('click', playPrev);
nextBtn.addEventListener('click', playNext);
/* volumeContainer.addEventListener('mouseenter', hideVolume);
volumeContainer.addEventListener('mouseleave', hideVolume); */
songTimeLine.addEventListener('change', inputChange);
volumeSlider.addEventListener('input', volumeChange)

volumeIcon.addEventListener('click', volumeMute)
/* volumeIcon.addEventListener('change', volumeMute) */


export {};
