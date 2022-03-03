window.addEventListener('keyup', handleKey)

const secretCode = 'mishra'

let matchingArray = []
function handleKey(e){
    console.log(e.key)
    matchingArray.push(e.key)
  
    matchingArray.splice(-secretCode , matchingArray.length - secretCode.length)
    if(matchingArray.join('').includes(secretCode)){
        console.log('Ding Ding Mishra ji')
        cornify_add();
    }
}
