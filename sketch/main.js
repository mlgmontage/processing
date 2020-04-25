let red, green, blue;

function setup() {
  red = createSlider(0, 255, 0);
  red.position(10, 10);
  red.style("width", 500 + "px");

  green = createSlider(0, 255, 0);
  green.position(10, 30);
  green.style("width", 500 + "px");

  blue = createSlider(0, 255, 0);
  blue.position(10, 50);
  blue.style("width", 500 + "px");

  createCanvas(600, 800);
}

function draw() {
  // color values
  let red_val = red.value();
  let green_val = green.value();
  let blue_val = blue.value();

  noStroke(); // without outline
  // draw circle
  circle(300, 300, 300);
  // color

  let circleColor = color(red_val, green_val, blue_val);
  fill(circleColor);
}
