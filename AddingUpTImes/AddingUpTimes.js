const totalTime = document.querySelectorAll('[data-time]')

console.log('totalTime',totalTime)

const timeMinuteAndSecond = Array.from(totalTime).map(i => i.dataset.time.split(':'))


let totalMinutes = timeMinuteAndSecond.reduce((total , increment)=> Number(total) + Number(increment[0]), 1)

let totalSeconds = timeMinuteAndSecond.reduce((total , increment)=> Number(total) + Number(increment[1]), 0 )

const getHour = Math.floor(totalMinutes / 60 + totalSeconds / 3600)

const getMinutesFromSecond = (totalSeconds % 3600) / 60

let remainingMinutes = Math.floor((totalMinutes % 60 + getMinutesFromSecond) % 60)

const getSeconds =  (totalSeconds % 3600) % 60



console.log('test',getHour, remainingMinutes, getSeconds )