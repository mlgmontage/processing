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
  circles.push({
    x: mouseX,
    y: mouseY,
    color: rand_color(),
    size: parseInt(Math.random() * 40 + 10),
  });
}

function draw() {
  background(255);
  for (let i = 0; i < circles.length; i++) {
    circle(circles[i].x, circles[i].y, circles[i].size);
    fill(circles[i].color);
  }
  fill(0);
  noStroke();
}
