let x = 0;
let y = 0;
let speedX = 10;
let speedY = 10;

function setup() {
  createCanvas(600, 500);
  y = height / 2;
  frameRate(60);
}

function draw() {
  background(255);

  // mover
  circle(x, y, 50);
  fill(125);
  if (x >= width || x < 0) {
    speedX *= -1;
  }
  if (y >= height || y < 0) {
    speedY *= -1;
  }

  x += speedX;
  y += speedY;
}
