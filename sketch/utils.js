function rand(start, finish) {
  const randomNumber = parseInt(Math.random() * finish);
  return randomNumber + start;
}

function randColor() {
  return color(rand(0, 250), rand(0, 250), rand(0, 250));
}
