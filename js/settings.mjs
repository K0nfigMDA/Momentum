
import{} from './time-date.mjs'
import{} from './greeting.mjs'
import{} from './slider.mjs'
import{} from './weather.mjs'
import{} from './quotes.mjs'
import{} from './player.mjs'

const state = {
	language: 'en',
	photoSource: 'github', 
	blocks: ['time', 'date','greeting', 'quote', 'weather', 'audio', 'todolist'],
	tags: 'sex'
}

const checkPlayerBtn = document.querySelector('.player-btn')
const checkWeatherBtn = document.querySelector('.weather-btn')
const checkTimeBtn = document.querySelector('.time-btn')
const checkDateBtn = document.querySelector('.date-btn')
const checkGreetingBtn = document.querySelector('.greeting-btn')
const checkQuotesBtn = document.querySelector('.quotes-btn')
const checkTodolistBtn = document.querySelector('.todolist-btn')

const checkboxPanel = document.querySelector('.disable-functional')


function hideElements(e) {
	if(e.target.tagName === 'INPUT') {
		e.target.className
	} 
}

checkboxPanel.onclick = hideElements
export{}