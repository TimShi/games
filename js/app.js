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
      this.views = []

      this.inputDebugger = new InputHandler(this.canvas, pos => {
        console.log(pos)
      })
    }

    update() {
      if (this.views.length > 0) {
        this.views[this.views.length - 1].update()
      }
    }

    draw(context) {
      if (this.views.length > 0) {
        this.views[this.views.length - 1].draw(context)
      }
    }

    push(view) {
      if (this.views.length > 0) {
        this.views[this.views.length - 1].setIsVisible(false)
      }
      view.setIsVisible(true)
      this.views.push(view)
    }

    pop() {
      if (this.views.length > 1) {
        this.views.pop().setIsVisible(false)
        this.views[this.views.length - 1].setIsVisible(true)
      }
    }
  }

  const game = new Game(canvas)
  const chooseAPlayer = new ChooseAPlayer(game)
  game.push(chooseAPlayer)

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.update()
    game.draw(ctx)
    requestAnimationFrame(animate)
  }

  animate()
})
