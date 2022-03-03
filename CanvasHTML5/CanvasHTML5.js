// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let initialX = 0
let initialY = 0

ctx.lineCap ='round'
ctx.lineJoin = 'round'
ctx.lineWidth = 10

let isDrawing = false
let hue = 0; 
function onDrawing(e) {
    console.log('isDrawing',isDrawing)
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    if(!isDrawing) return; // stop drwaing
    ctx.beginPath();
    ctx.moveTo (initialX, initialY);
    ctx.lineTo (e.offsetX, e.offsetY);
    ctx.stroke();                                 // now: stroke() insted of fill()
    [initialX , initialY] = [e.offsetX, e.offsetY]
    hue++;
  if (hue >= 360) {
    hue = 0;
  }
}

canvas.addEventListener('mousemove', onDrawing)
canvas.addEventListener('mousedown', (e)=> {isDrawing = true, [initialX , initialY] = [e.offsetX, e.offsetY]  })
canvas.addEventListener('mouseup', ()=> isDrawing = false)
canvas.addEventListener('mouseout', ()=> isDrawing = false)
