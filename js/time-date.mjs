import { getTimeOfDay } from "./greeting.mjs"

const time = document.querySelector('.time')
const date = document.querySelector('.date')




function showTime(){                                 // Время
  const dateTIme = new Date 
  const currentTime = dateTIme.toLocaleTimeString()
  time.textContent	= currentTime
  showDate()
  getTimeOfDay()
  setTimeout(showTime, 1000)
}

function showDate(){												// Дата
  const dateTime = new Date 
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const currentDate = dateTime.toLocaleDateString('en-en', options)
  date.textContent	= currentDate
  setTimeout(showDate, 1000)
}

showTime()

export{}