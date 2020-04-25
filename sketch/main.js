// Command pattern

class SpecialMath {
  constructor(num) {
    this._num = num;
  }

  square() {
    return this._num ^ 2;
  }

  cube() {
    return this._num ^ 3;
  }
}

class Command {
  constructor(subject) {
    this._subject = subject;
    this.commandsExecuted = [];
  }

  execute(command) {
    this.commandsExecuted.push(command);
    return this._subject[command]();
  }
}

function setup() {
  createCanvas(600, 800);
  createP("Object oriented programming")
    .position(50, 10)
    .style("font-size", "48px");

  const commander = new Command(new SpecialMath(5));
  print(commander.execute("cube"));
  print(commander.execute("square"));
  print(commander.execute("cube"));
  print(commander.commandsExecuted);
}

function draw() {
  background(255);
  rect(30, 30, 500, 500);
}
