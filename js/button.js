import {InputHandler} from "./input.js";

export class Button {
  constructor(parent, x, y, w, h, callback) {
    this.parent = parent
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.callback = callback

    this.input = new InputHandler(this.parent.game.canvas, pos => {
      if (!this.parent.isVisible) {
        return
      }

      if (pos.x > this.x && pos.x < this.x + this.w
        && pos.y > this.y && pos.y < this.y + this.h) {
        this.onMouseDownInside(pos, callback)
      }
    })
  }

  update() {

  }

  draw(context) {
    // this is for debugging, we actually just want an invisible button here
    context.beginPath();
    context.rect(this.x, this.y, this.w, this.h);
    context.stroke();
  }

  onMouseDownInside(pos, callback) {
    callback(pos)
  }
}
