import {Button} from "./button.js";

export class BaseView {

  constructor(game, character, backgroundImgId) {
    this.game = game
    this.character = character

    this.isVisible = false
    this.image = document.getElementById(backgroundImgId)

    this.backButton = new Button(this, 30, 30, 150, 140, document.getElementById("btn_back"), ev => {
      this.goBack()
    })
  }

  update() {

  }

  draw(context) {
    context.drawImage(this.image, 0, 0)
    this.backButton.draw(context)
  }

  setIsVisible(isVisible) {
    this.isVisible = isVisible
  }

  goBack() {
    this.game.pop()
  }
}
