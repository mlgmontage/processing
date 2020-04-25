class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  getDescription() {
    return `${this._title} by ${this._author}`;
  }
}

// Decorator
function giftWrap(book) {
  book.isWrapped = true;
  book.unwrap = function () {
    this.isWrapped = false;
    return `Unwrapped ${this.getDescription()}`;
  };

  return book;
}

function setup() {
  createCanvas(600, 800);
  createP("Object oriented programming")
    .position(50, 10)
    .style("font-size", "48px");

  // usage

  const inferno = giftWrap(new Book("Inferno", "CSGO"));
  print(inferno.getDescription());
  print(inferno.unwrap());
}

function draw() {
  background(255);
  rect(30, 30, 500, 500);
}
