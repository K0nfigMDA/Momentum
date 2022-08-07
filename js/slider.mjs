import {getTimeOfDay} from "./greeting.mjs"

const slideNext = document.querySelector('.slide-next')
const slidePrev = document.querySelector('.slide-prev')

let randomNum = getRandomNum(1, 20)


slidePrev.addEventListener('click', getSlidePrev)
slideNext.addEventListener('click', getSlideNext)

function getSlideNext() {
	if(randomNum===20) {
		randomNum = 1
	} else {
		randomNum ++
	}
	setBg(getTimeOfDay(),randomNum)
}

function getSlidePrev() {
	if(randomNum===1) {
		randomNum = 20
	} else {
		randomNum --
	}
	setBg(getTimeOfDay(),randomNum)
}

function getRandomNum(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

function setBg(timeOfDay, bgNum) {
	const img = new Image()
	img.src = `https://github.com/K0nfigMDA/stage1-tasks/blob/assets/images/${timeOfDay}/${String(bgNum).padStart(2,'0')}.jpg?raw=true`
	img.onload = () => {document.body.style.backgroundImage = `url('https://github.com/K0nfigMDA/stage1-tasks/blob/assets/images/${timeOfDay}/${String(bgNum).padStart(2,'0')}.jpg?raw=true')`}
	
}

setBg(getTimeOfDay(),randomNum)


export{getRandomNum}
