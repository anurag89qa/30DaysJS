const item = document.querySelectorAll('input[type="checkbox"]')


let lastChecked;
function handleShift(e) {
 
  let isBetween = false;
  if (e.shiftKey && this.checked) {
    item.forEach((i) => {
      console.log("checkedddd", lastChecked);
      if (i === this || i === lastChecked) {
        isBetween = !isBetween;
        console.log("strtin---", this);
      }

      if (isBetween) {
        i.checked = true;
      }
    });
  }
  lastChecked = this;
}

item.forEach(i => i.addEventListener('click', handleShift))
