const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const secondHand = document.querySelector('.second-hand');
function setDate() {

const currentDate = new Date()
const secondsValue = (currentDate.getSeconds() / 60 )* 360 + 90
// console.log(currentDate.getSeconds())
secondHand.style.transform = `rotate(${secondsValue}deg)`;

//min
const minValue = (currentDate.getMinutes() / 60 )* 360 + 90
// console.log(currentDate.getMinutes())
minHand.style.transform = `rotate(${minValue}deg)`;

//hour
const hourValue =  (360 * currentDate.getHours()) /12 + ((currentDate.getMinutes()/60)*30) + 90
console.log(currentDate.getHours())
hourHand.style.transform = `rotate(${hourValue}deg)`;
}



setInterval(setDate, 1000);

setDate()