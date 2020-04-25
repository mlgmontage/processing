let isMousePressed = false;
let lines = [];
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
  lines.push(Line);
  Line = [];
}

function draw() {
  background(255);
  if (isMousePressed) {
    line(Line[0], Line[1], mouseX, mouseY);
  }

  for (let i = 0; i < lines.length; i++) {
    line(lines[i][0], lines[i][1], lines[i][2], lines[i][3]);
  }
}
