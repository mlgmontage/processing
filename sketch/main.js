function setup() {
  createCanvas(600, 800);
  frameRate(10);
}

function draw() {
  background(255);
  for (let i = 0; i < 20; i++) {
    noStroke();
    fill(randColor());
    circle(rand(10, 800), rand(10, 800), rand(10, 50));
  }
}
