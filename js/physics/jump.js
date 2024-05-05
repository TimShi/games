export class Jump {

  constructor(tick) {
    this.g = 3; // a positive number because the y coordinate goes down (opposite of earth coordinate)
    this.tick = tick
    this.paths = []
  }

  updateDisplacement() {
    if (this.paths.length <= 0) {
      return null
    }
    let d = new Object()
    let p = this.paths[0]

    if (p.skip && p.skip()) {
      return null
    }

    d.x = p.x0 + p.v0x * p.currentTime
    d.y = p.y0 + p.v0y * p.currentTime + this.g /2 * (p.currentTime) ** 2

    p.currentTime = p.currentTime + this.tick

    if (p.currentTime > p.dt) {
      if (p.shouldRepeat) {
        p.currentTime = 0
      } else {
        this.paths.shift()
        if (p.done) {
          p.done()
        }
      }
    }

    return d
  }

  addPath(p) {
    // p should have
    // p.x0, p.y0 initial coordinate
    // p.x1, p.y1 target coordinate
    // p.dy the highest on the path
    // p.shouldRepeat
    // calculate p.v0 the initial velocity and p.dt the duration of the path
    // and the update method will use it to update and stop after the time has lapsed
    // if p.shouldRepeat is true, put the event back in the queue so that it can happen again.
    this.paths.push(p)

    p.v0y = -Math.sqrt((p.y0-p.dy)*this.g)
    p.dt = (-p.v0y + Math.sqrt(p.v0y**2 - 2*this.g*(p.y0 - p.y1)))/this.g
    p.v0x = (p.x1 - p.x0)/p.dt
  }
}

export function withDone(done) {
  return function(p) {
    p.done = done
  }
}

export function withSkipCondition(skip) {
  return function(p) {
    p.skip = skip
  }
}

export class Path {
  constructor(src, target, dy, shouldRepeat, ...opts) {
    this.x0 = src.x
    this.y0 = src.y
    this.x1 = target.x
    this.y1 = target.y
    this.dy = dy
    this.shouldRepeat = shouldRepeat

    this.v0x = 0
    this.v0y = 0
    this.dt = 0

    this.currentTime = 1 // running time of this event

    //options
    this.done = null //callback when done
    this.skip = null

    for (let i=0; i<opts.length; i++) {
      let f = opts[0]
      f(this)
    }
  }
}
