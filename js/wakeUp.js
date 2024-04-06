import {InputHandler} from "./input.js";
import {Button} from "./button.js";

export class WakeUp {

  constructor(game) {
    this.game = game

    this.isVisible = false
    this.image = document.getElementById("the-sleeping-area")

    this.input = new InputHandler(this.game.canvas, pos => {
      console.log(pos)
    })
  }
  update() {
  }

  draw(context) {
    context.drawImage(this.image, 0, 0)
  }

  setIsVisible(isVisible) {
    this.isVisible = isVisible
  }
}
