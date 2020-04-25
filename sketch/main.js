class Hero {
  constructor(name, ability) {
    this.name = name;
    this.ability = ability;
  }

  getDescription() {
    return `${this.name} can ${this.ability}`;
  }
}

let IronMan = new Hero("Ironman", "fly");
let SuperMan = new Hero("Superman", "fly");
const Batman = new Hero("Batman", "drive");

function setup() {
  createCanvas(600, 800);
  createP("Object oriented programming")
    .position(50, 10)
    .style("font-size", "48px");

  // Objects
  print(IronMan.getDescription());
  print(SuperMan.getDescription());
  print(Batman.getDescription());
}

function draw() {
  background(255);
  rect(30, 30, 500, 500);
}
