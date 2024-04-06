export class Gravity {

  constructor(t0, v0, tick) {
    this.v0 = v0;
    this.g = -3;
    this.tick = tick
    this.d = 0;
    this.time = t0
  }

  updateDisplacement() {
    if (this.time < 0) { //delay the start of calculation
      this.time = this.time + this.tick/3
      return
    }

    if (this.d <= 0) {
      this.time = this.tick
    }
    this.d = this.v0 * this.time + this.g /2 * this.time ** 2
    this.time = this.time + this.tick
  }
}

export class Pendulum {

}
