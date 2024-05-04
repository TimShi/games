import {Button} from "./button.js";
import {BaseView} from "./BaseView.js";

export class DressUp extends BaseView{
  constructor(game, character) {
    super(game, character, "the-dressing-area");
    this.characterImg = document.getElementById(character)

    this.pinkDressButton = new Button(this, 132, 368, 140, 151, document.getElementById("pink_dress"),
        pos=>{},
      (pos, movementX, movementY) => {
      console.log(movementX, movementY)
      console.log(this.pinkDressButton.x, this.pinkDressButton.y)        
      this.pinkDressButton.x = this.pinkDressButton.x + movementX
      this.pinkDressButton.y = this.pinkDressButton.y + movementY
    })
  }
  draw(context) {
    super.draw(context)
    context.drawImage(this.characterImg, 500, 400)
    this.pinkDressButton.draw(context)
  }
}
