function setup() {
  createCanvas(600, 800);
}

function draw() {
  RandomWalker.step();
  RandomWalker.draw();
}
