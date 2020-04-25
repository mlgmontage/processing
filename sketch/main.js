class Basketball {
  constructor() {
    this._type = "Basketball";
  }
  bounce() {
    return "You bounced basketball ball";
  }
}

class Football {
  constructor() {
    this._type = "Football";
  }
  kick() {
    return "You kicked football ball";
  }
}

class Bouling {
  constructor() {
    this._type = "Bouling";
  }
}

class BallFactory {
  constructor() {
    this.create = function (type) {
      let ball;
      if (type === "football" || type === "soccer") ball = new Football();

      if (type === "basketball") ball = new Basketball();
      if (type === "bouling") ball = new Bouling();

      ball.roll = function () {
        return `You rolled ${this._type} ball`;
      };

      return ball;
    };
  }
}

function setup() {
  createCanvas(600, 800);
  createP("Object oriented programming")
    .position(50, 10)
    .style("font-size", "48px");

  // Factory
  const factory = new BallFactory();

  // Product
  const basketball = factory.create("basketball");
  print(basketball.bounce());
  print(basketball.roll());

  const soccer = factory.create("soccer");
  print(soccer.roll());
  print(soccer.kick());

  const bouling = factory.create("bouling");
  print(bouling.roll());
}

function draw() {
  background(255);
  rect(30, 30, 500, 500);
}
