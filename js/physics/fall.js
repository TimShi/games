export class Fall {
  constructor(tick) {
    this.g = 3; // a positive number because the y coordinate goes down (opposite of earth coordinate)
    this.tick = tick
    this.falls = []
  }

  updateDisplacement() {
    if (this.falls.length <= 0 ) {
      return null
    }
    let fall = this.falls[0]
    let y = fall.y0 + this.g /2 * (fall.currentTime) ** 2
    fall.currentTime = fall.currentTime + this.tick

    if (y > fall.y1) {
      this.falls.shift()
    }
    return y
  }

  fallFrom(path) {
    this.falls.push(path)
  }
}

export class FallPath {
  constructor(y0, y1) {
    this.y0 = y0
    this.y1 = y1
    this.currentTime = 1
  }
}
