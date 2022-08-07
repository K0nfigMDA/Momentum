const greeting = document.querySelector('.greeting')


const timeDayArr = ['night', 'morning', 'afternoon', 'evening'] 
 
  function getTimeOfDay() {
	const dateTime = new Date
	const hours = dateTime.getHours()
	greeting.textContent = `Good ${timeDayArr[Math.floor(hours/6)]}`
	return timeDayArr[Math.floor(hours/6)]
  
}

export{getTimeOfDay}
