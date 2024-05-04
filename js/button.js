import {InputHandler} from "./input.js";

export class Button {
  constructor(parent, x, y, w, h, image, mouseDownCallback, mouseDragCallback) {
    this.parent = parent
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.image = image
    this.isMouseDown = false

    this.input = new InputHandler(this.parent.game.canvas, pos => {
      if (!this.parent.isVisible) {
        return
      }

      if (pos.x > this.x && pos.x < this.x + this.w
        && pos.y > this.y && pos.y < this.y + this.h) {
        this.isMouseDown = true
        this.onMouseDownInside(pos, mouseDownCallback)
      }
    }, (pos, movementX, movementY) => {
      if (!this.parent.isVisible) {
        return
      }
      if (this.isMouseDown) {
        this.onMouseDrag(pos, movementX, movementY, mouseDragCallback)
      }
    }, pos => {
      if (!this.parent.isVisible) {
        return
      }
      this.isMouseDown = false
    })
  }

  update() {

  }

  draw(context) {
    // this is for debugging, we actually just want an invisible button here
    if (this.image) {
      context.drawImage(this.image, this.x, this.y, this.w, this.h)
    } else {
      context.beginPath();
      context.rect(this.x, this.y, this.w, this.h);
      context.stroke();
    }
  }

  onMouseDownInside(pos, callback) {
    callback(pos)
  }

  onMouseDrag(pos, movementX, movementY, callback) {
    console.log("mouse is dragging")
    callback(pos, movementX, movementY)
  }
}
