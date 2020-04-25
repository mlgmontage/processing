let RandomWalker = {
  x: 400,
  y: 300,
  stepSize: 3,
  circleSize: 40,

  step: function () {
    const direction = rand(1, 4);

    if (direction === 1) {
      this.x += this.stepSize;
    } else if (direction === 2) {
      this.x -= this.stepSize;
    } else if (direction === 3) {
      this.y += this.stepSize;
    } else {
      this.y -= this.stepSize;
    }
  },

  draw: function () {
    circle(this.x, this.y, this.circleSize);
  },
};
