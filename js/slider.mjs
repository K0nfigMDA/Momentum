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


/* async function getLinkToImageUnsplash(timeOfDay) {
	const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=cEdZ2VtLW17tcuba09dhp_nD-IHdqcziBSdff4AUHpg`;
	const res = await fetch(url);
	const data = await res.json(); 
	const img = new Image()
	img.src = data.urls.regular
	img.onload = () => {document.body.style.backgroundImage = `url('${data.urls.regular}')`}
	}

async function getLinkToImageFlickr(timeOfDay) {
		const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8945799a0cf0228d0452f33c2014bcae&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
		const res = await fetch(url);
		const data = await res.json(); 
		const img = new Image()
		img.src = data.photos.photo[getRandomNum(1, data.photos.photo.length)].url_l
		img.onload = () => {document.body.style.backgroundImage = `url('${img.src}')`}
		
		} 
 */
/* 	getLinkToImageUnsplash(getTimeOfDay()) */
/* getLinkToImageFlickr(getTimeOfDay()) */

setBg(getTimeOfDay(),randomNum)


export{getRandomNum}
