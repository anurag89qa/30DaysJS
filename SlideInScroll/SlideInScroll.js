function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };


const allSlide = document.querySelectorAll('.slide-in')

console.log('sliden', allSlide)

function checkScrolling(e){
    allSlide.forEach(sliderImage => { 
       console.log(e, window.innerHeight)
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
     
    const isHalfWay = slideInAt > sliderImage.offsetTop
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfWay && isNotScrolledPast){
        sliderImage.classList.add('active')
    } else {
        sliderImage.classList.remove('active')
    }

})
}

window.addEventListener('scroll', debounce(checkScrolling,10))