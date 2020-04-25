class CumulativeSum {
  constructor() {
    this._sum = 0;
  }

  add(number) {
    this._sum += number;
    return this;
  }

  printResult() {
    print(this._sum);
    return this;
  }
}

const Summer = new CumulativeSum();

function setup() {
  createCanvas(600, 800);
  createP("Object oriented programming")
    .position(50, 10)
    .style("font-size", "48px");

  Summer.add(10)
    .add(172)
    .printResult()
    .add(74)
    .add(21)
    .printResult()
    .add(198)
    .add(21)
    .add(83)
    .printResult();
}

function draw() {
  background(255);
  rect(30, 30, 500, 500);
}
