let x = 0;
let y = 0;
let speedX = 5;
let speedY = 8;
let bounceColor;

function setup() {
  createCanvas(600, 500);
  bounceColor = randColor();
  y = height / 2;
  frameRate(60);
}

function randColor() {
  const randomColor = color(
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255)
  );

  return randomColor;
}

function draw() {
  background(255);

  // mover
  circle(x, y, 50);
  fill(bounceColor);
  if (x >= width || x < 0) {
    speedX *= -1;
    bounceColor = randColor();
  }
  if (y >= height || y < 0) {
    speedY *= -1;
    bounceColor = randColor();
  }

  x += speedX;
  y += speedY;
}
