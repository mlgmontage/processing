let isMousePressed = false;
let shapes = [];
let Line = [];

function setup() {
  createCanvas(600, 800);
}

function mousePressed() {
  isMousePressed = true;
  Line.push(mouseX);
  Line.push(mouseY);
}

function mouseReleased() {
  Line.push(mouseX);
  Line.push(mouseY);
  isMousePressed = false;
  shapes.push(Line);
  Line = [];
}

function draw() {
  background(255);
  if (isMousePressed) {
    line(Line[0], Line[1], mouseX, mouseY);
  }

  for (let i = 0; i < shapes.length; i++) {
    line(shapes[i][0], shapes[i][1], shapes[i][2], shapes[i][3]);
  }
}
