import { ChooseAPlayer} from "./chooseAPlayer.js";
import {InputHandler} from "./input.js";

window.addEventListener('load', function (){

  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d')
  canvas.width = 1000;
  canvas.height =700;

  class Game {
    constructor(canvas) {
      this.canvas = canvas
      this.width = this.canvas.width;
      this.height = this.canvas.height;
      this.ChooseAPlayer = new ChooseAPlayer(this)
    }

    update() {
      this.ChooseAPlayer.update()
    }

    draw(context) {
      this.ChooseAPlayer.draw(context)
    }
  }

  const game = new Game(canvas)

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.update()
    game.draw(ctx)
    requestAnimationFrame(animate)
  }

  animate()
})
