class IceCream {
  constructor(flavour, price) {
    this._flavour = flavour;
    this._price = price;
  }
}

class IceCreamFactory {
  constructor() {
    this._icecreams = [];
  }

  createIceCream(flavour, price) {
    let icecream = this.getIceCream(flavour);
    if (icecream) {
      return icecream;
    } else {
      let newIceCream = new IceCream(flavour, price);
      this._icecreams.push(newIceCream);
      return newIceCream;
    }
  }

  getIceCream(flavour) {
    return this._icecreams.find((icecream) => icecream._flavour === flavour);
  }
}

function setup() {
  createCanvas(600, 800);
  createP("Object oriented programming")
    .position(50, 10)
    .style("font-size", "48px");

  // Creating factory
  const factory = new IceCreamFactory();

  // Creating product
  const choco = factory.createIceCream("chocolate and vanilla", 15);
  const vanilla = factory.createIceCream("chocolate and vanilla", 15);

  print(factory._icecreams); // array contains only one element
  print(choco === vanilla); // they are same
}

function draw() {
  background(255);
  rect(30, 30, 500, 500);
}
