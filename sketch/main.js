let circleSize;

function setup() {
  circleSize = createSlider(0, 255, 0);
  circleSize.position(10, 10);
  circleSize.style("width", 500 + "px");
  createCanvas(600, 800);
}

function draw() {
  let val = circleSize.value();
  noStroke();
  circle(300, 300, 300);
  fill(val);
}
