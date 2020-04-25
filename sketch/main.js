let circles = [];

function setup() {
  createCanvas(600, 800);
}

function rand_color() {
  const randomColor = color(
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255),
    parseInt(Math.random() * 255)
  );
  return randomColor;
}

function mousePressed() {
  circles.push([mouseX, mouseY, rand_color()]);
}

function draw() {
  background(255);
  for (let i = 0; i < circles.length; i++) {
    circle(circles[i][0], circles[i][1], 20);
    fill(circles[i][2]);
  }
  fill(0);
  noStroke();
}
