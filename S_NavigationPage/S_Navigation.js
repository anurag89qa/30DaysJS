const lastElement = document.querySelectorAll('.variables')

function onHandleClick() {
    console.log('clicked')
}
lastElement.forEach(i => i.addEventListener('mousemove', onHandleClick))

console.log('lastElement', lastElement)