import{weatherCity} from "./weather.mjs"


const inputName = document.querySelector('.name')

function setLocalStorage() {
	localStorage.setItem('name', inputName.value)
	localStorage.setItem('city', weatherCity.value)
}



function getLocalStorage() {
	if(localStorage.getItem('name')) {
		inputName.value = localStorage.getItem('name')
	}
	if(localStorage.getItem('city')) {
		weatherCity.value = localStorage.getItem('city')
	} else {
		weatherCity.value = 'Minsk'
	}
}




export{setLocalStorage, getLocalStorage}