export class InputHandler {
  constructor(canvas, mouseDownCallback, mouseMoveCallback, mouseUpCallback, mouseOutCallback) {
    this.events = [];

    if (mouseDownCallback) {
      canvas.addEventListener("mousedown", ev => {
        let position = getMousePos(canvas, ev)
        mouseDownCallback(position)
      })
      canvas.addEventListener("touchend", ev=>{
        let position = getTouchPos(canvas, ev)
        mouseDownCallback(position)
      })
    }
    if (mouseMoveCallback) {
      canvas.addEventListener("mousemove", ev=>{
        console.log(ev.movementX, ev.movementY)
        let position = getMousePos(canvas, ev)
        mouseMoveCallback(position, ev.movementX, ev.movementY)
      })
    }
    if (mouseUpCallback) {
      canvas.addEventListener("mouseup", ev=>{
        let position = getMousePos(canvas, ev)
        mouseUpCallback(position)
      })
    }
    if (mouseOutCallback) {
      canvas.addEventListener("mouseout", ev=>{
        let position = getMousePos(canvas, ev)
        mouseOutCallback(position)
      })
    }
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

function  getTouchPos(canvas, evt) {
  let rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
    scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y

  return {
    x: (evt.touches[0].clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
    y: (evt.touches[0].clientY - rect.top) * scaleY     // been adjusted to be relative to element
  }
}
