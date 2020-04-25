function setup() {
  createCanvas(600, 800);
}

function draw() {
  background(255);
  RandomWalker.step();
  RandomWalker.draw();
}
