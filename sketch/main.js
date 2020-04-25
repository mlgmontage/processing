function setup() {
  createCanvas(600, 800);
}

function draw() {
  for (let i = 0; i < 20; i++) {
    noStroke();
    fill(randColor());
    circle(rand(10, 800), rand(10, 800), rand(10, 50));
  }
}
