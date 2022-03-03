const allInput = document.querySelectorAll('.control-list input')

function handleChange(){
    console.log('value', this.dataset.teststring)
    const getSuffix = this.dataset.teststring || ''
    console.log('this.id',this.value)
    document.documentElement.style.setProperty(`--${this.id}`, this.value + getSuffix)
 }

allInput.forEach(i=> i.addEventListener('change' , handleChange) )
allInput.forEach(i=> i.addEventListener('mousemove' , handleChange) )

