let position = new Vector2D(0, 0);
let speed = new Vector2D(4, 5);

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
  circle(position.x, position.y, 50);
  fill(bounceColor);
  if (position.x >= width || position.x < 0) {
    speed.x *= -1;
    bounceColor = randColor();
  }
  if (position.y >= height || position.y < 0) {
    speed.y *= -1;
    bounceColor = randColor();
  }

  position.x += speed.x;
  position.y += speed.y;
  noStroke();
}
