import {Button} from "./button.js";
import {BaseView} from "./BaseView.js";
import {Fall, FallPath} from "./physics/fall.js";

export class DressUp extends BaseView{
  constructor(game, character) {
    super(game, character, "the-dressing-area");
    this.characterImg = document.getElementById(character)
    this.pinkDress = new Clothing("pink_dress", game)

  }

  update() {
    super.update();
    this.pinkDress.update()
  }

  draw(context) {
    super.draw(context)
    context.drawImage(this.characterImg, 500, 400)
    this.pinkDress.draw(context)
  }
}

export class Clothing {
  constructor(name, game) {
    this.game = game
    this.isVisible = true
    this.button = new Button(this, 132, 368, 140, 151, document.getElementById(name),
      pos=>{
        this.stopFalling()
      },
      (pos, movementX, movementY) => {
        this.button.x = this.button.x + movementX
        this.button.y = this.button.y + movementY
      }, pos=>{
        this.fallToGround()
      })
    this.fall = new Fall(0.2)
  }

  update() {
    let y = this.fall.updateDisplacement()
    if (y) {
      this.button.y = y
    }
  }

  draw(context) {
    this.button.draw(context)
  }

  fallToGround() {
    let fallPath = new FallPath(this.button.y, this.game.canvas.height - this.button.h)
    this.fall.fallFrom(fallPath)
  }

  stopFalling() {
    this.fall.stopFall()
  }
}
