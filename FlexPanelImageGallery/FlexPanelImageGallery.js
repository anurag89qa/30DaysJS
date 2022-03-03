const panel = document.querySelectorAll('.panel')

function handleClick(e) {
    console.log('handle click',this.classList, e)
    this.classList.add('open-active')
    // console.log('click', this)
    // setInterval(() => this.classList.remove('open-active'),3000)
}

function removeClick(e){
    this.classList.remove('open-active')
    console.log('removing', this.classList)
}
console.log('panel', panel)
panel.forEach(i => i.addEventListener('mouseover', handleClick))

panel.forEach(i => i.addEventListener('mouseout', removeClick))