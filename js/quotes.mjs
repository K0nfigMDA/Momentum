import {getRandomNum} from './slider.mjs'

const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const reloadBtn = document.querySelector('.change-quote')


async function getQuotes() {  
	const quotes = 'assets/json/quotes.json';
	const res = await fetch(quotes);
	const data = await res.json(); 
	const randomEl = data[getRandomNum(0, data.length - 1)]
	quote.textContent = randomEl.text
	author.textContent = randomEl.author
 }
 getQuotes();

reloadBtn.addEventListener('click', getQuotes)


export{}

