function counter() {
    let y = 0;
  return function incrementedCounter() {
    return (y += 1);
  };
}
const myCounter = counter();

console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
