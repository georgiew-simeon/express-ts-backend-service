function findElement(arr, booleanFn) {
  for (let i = 0; i < arr.length; i++) {
    if (booleanFn(arr[i])) {
      return arr[i];
    }
    console.log("No elements match the predicament");
  }
}

function check(element) {
  if (typeof element === "string") {
    return true;
  }
  return false;
}
const str = findElement([1, 2, "a", 3], check);
console.log(str);
