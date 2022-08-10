import{playList} from './playlist.mjs'

const playPauseBtn = document.querySelector('.play')
const prevBtn = document.querySelector('.play-prev')
const nextBtn = document.querySelector('.play-next')
const playListContainer = document.querySelector('.play-list')





let isPlay = false

let playNum = 0





playList.forEach((index) => {
	const li = document.createElement('li');
	li.classList.add('play-item')
	li.textContent = index.title
	playListContainer.append(li)
})





const audio = new Audio()
console.dir(audio);


function playNext() {
	
	isPlay = false
	if (playNum < playList.length - 1) {
		playNum += 1
	} else {
		playNum = 0
	}
	
	playPauseAudio()
}

function playPrev() {
	isPlay = false
	if (playNum >= 1 ) {
		playNum -= 1
	} else {
		playNum = playList.length - 1
	}
	
	playPauseAudio()
}


function playPauseAudio() {
	audio.src = playList[playNum].src;
	audio.currentTime = 0;
	if(!isPlay) {
		isPlay = true
		audio.play()
		playPauseBtn.classList.add('pause')
		console.log(playNum)
	}
	else{
		isPlay = false
		audio.pause();
		playPauseBtn.classList.remove('pause')
	}
	
}



playPauseBtn.addEventListener('click', playPauseAudio)
audio.addEventListener('ended', playNext)
prevBtn.addEventListener('click', playPrev)
nextBtn.addEventListener('click', playNext)


export{}

