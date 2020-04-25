// store the previous position
let prev_position = [];

function setup() {
  createCanvas(600, 800);
}

function mouseClicked() {
  if (prev_position.length == 0) {
    line(width / 2, height / 2, mouseX, mouseY);
  } else {
    line(prev_position[0], prev_position[1], mouseX, mouseY);
  }
  prev_position[0] = mouseX;
  prev_position[1] = mouseY;
}

function draw() {
  circle(width / 2, height / 2, 20);
}
