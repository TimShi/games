export class InputHandler {
  constructor(canvas, callback) {
    this.events = [];
    canvas.addEventListener("mousedown", ev => {
      let position = getMousePos(canvas, ev)
      callback(position)
    })
    canvas.addEventListener("touchend", ev=>{
      let position = getMousePos(canvas, ev)
      callback(position)
    })
  }
}

function  getMousePos(canvas, evt) {
  let rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
    scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y

  return {
    x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
    y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
  }
}
