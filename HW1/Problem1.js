let a = Math.round(Math.random() * 10) / 10;
let b = Math.round(Math.random() * 10) / 10;
let c = Math.round(Math.random() * 10) / 10;

console.log("C = " + c + " A = " + a + " B = " + b);

if (a > c > b || a < c < b) {
  console.log("C is between A and B");
} else if (c == a || c == b) {
  console.log("C is equal to one of the numbers");
} else {
  console.log("C is not between A and B");
}

//option+shift+F