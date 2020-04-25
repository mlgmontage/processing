function setup() {
  createCanvas(600, 800);
}

const circleSize = 1;

function draw() {
  // tangent function
  for (let i = 0; i < width; i += circleSize) {
    circle(i, Math.tan(i) * 10 + 300, circleSize);
  }
}
