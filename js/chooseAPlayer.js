export class ChooseAPlayer {

  character_width = 250
  character_height = 250
  constructor(game) {
    this.game = game
    this.bunny = new player("bunny", document.getElementById('bunny'), 50, 100, this.character_width, this.character_height)
    this.doggy = new player("doggy", document.getElementById('doggy'), 350, 140, this.character_width, this.character_height)
    this.kitty = new player("kitty", document.getElementById('kitty'), 750, 100, this.character_width, this.character_height)

  }
  update() {
    this.bunny.update()
    this.doggy.update()
    this.kitty.update()
  }

  draw(context) {
    this.bunny.draw(context)
    this.doggy.draw(context)
    this.kitty.draw(context)
  }
}

class player {

  constructor(character, image, x, y, width, height) {
    this.character = character
    this.image = image
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image = image;

    this.v0 = 20;
    this.g = -3;
    this.tick = 0.3
    this.d = 0;
    this.time = Math.random() * -1
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
}
