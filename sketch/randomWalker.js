let RandomWalker = {
  x: 400,
  y: 300,
  circleSize: 10,

  step: function () {
    const direction = rand(1, 4);

    if (direction === 1) {
      this.x += this.circleSize;
    } else if (direction === 2) {
      this.x -= this.circleSize;
    } else if (direction === 3) {
      this.y += this.circleSize;
    } else {
      this.y -= this.circleSize;
    }
  },

  draw: function () {
    circle(this.x, this.y, this.circleSize);
  },
};
