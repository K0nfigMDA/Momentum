import{} from './time-date.mjs'
import{} from './greeting.mjs'
import{setLocalStorage, getLocalStorage} from './localStorage.mjs'
import{} from './slider.mjs'
import{getWeather} from './weather.mjs'
import{} from './quotes.mjs'
import{} from './player.mjs'

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
window.addEventListener('load', getWeather)
