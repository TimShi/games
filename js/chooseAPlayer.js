import {InputHandler} from "./input.js";
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
}

class player {

  constructor(parent, character, x, y) {
    this.parent = parent
    this.character = character
    this.image = document.getElementById(character)
    this.x = x;
    this.y = y;

    this.v0 = 20;
    this.g = -3;
    this.tick = 0.3
    this.d = 0;
    this.time = Math.random() * -1

    this.input = new InputHandler(this.parent.game.canvas, pos => {
      if (pos.x > this.x && pos.x < this.x + this.image.width
      && pos.y > this.y - this.d && pos.y < this.y - this.d + this.image.height) {
        this.onMouseDownInside()
      }
    })
  }

  update() {
    if (this.time < 0) {
      this.time = this.time + this.tick/3
      return
    }

    if (this.d <= 0) {
      this.time = this.tick
    }
    this.d = this.v0 * this.time + this.g /2 * this.time ** 2
    this.time = this.time + this.tick
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y - this.d)
  }

  onMouseDownInside() {
    console.log("mouse touched down in " + this.character)
  }
}
