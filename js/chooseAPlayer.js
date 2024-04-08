import {InputHandler} from "./input.js";
import {WakeUp} from "./wakeUp.js";
import {Gravity} from "./gravity.js";
import {Path} from "./gravity.js";

export class ChooseAPlayer {

  character_width = 250
  character_height = 250

  bunny = "bunny"
  doggy = "doggy"
  kitty = "kitty"
  elephant = "elephant"
  zebra = "zebra"

  constructor(game) {
    this.game = game

    this.players = []
    this.players.push(
      new player(this, this.bunny, 50, 100),
      new player(this, this.doggy, 350, 140),
      new player(this, this.kitty, 750, 100),
      new player(this, this.elephant, 140, 430),
      new player(this, this.zebra, 580, 430)
    )

    this.isVisible = false
  }
  update() {
    this.players.forEach((p, i) => {
      p.update()
    })
  }

  draw(context) {
    this.players.forEach((p, i) => {
      p.draw(context)
    })
  }

  setIsVisible(isVisible) {
    this.isVisible = isVisible
  }
}

class player {

  constructor(parent, character, x, y) {
    this.parent = parent
    this.character = character
    this.image = document.getElementById(character)
    this.x = x;
    this.y = y;

    this.gravity = new Gravity(0.3)
    this.gravity.addPath(new Path(this.x, this.y, this.x, this.y, this.y - 100,true))

    this.input = new InputHandler(this.parent.game.canvas, pos => {
      if (!this.parent.isVisible) {
        return
      }

      if (pos.x > this.x && pos.x < this.x + this.image.width
      && pos.y > this.y && pos.y < this.y + this.image.height) {
        this.onMouseDownInside()
      }
    })
  }

  update() {
    let d = this.gravity.updateDisplacement()
    this.x = d.x
    this.y = d.y
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y)
  }

  onMouseDownInside() {
    this.parent.game.push(new WakeUp(this.parent.game, this.character))
  }
}
