export class WakeUp {

  constructor(game) {
    this.game = game

    this.isVisible = false
  }
  update() {
  }

  draw(context) {
    context.beginPath();
    context.rect(20, 20, 150, 100);
    context.stroke();
  }

  setIsVisible(isVisible) {
    this.isVisible = isVisible
  }
}
