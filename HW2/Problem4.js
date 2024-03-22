// Реализирайте функция customFilter,
// която приема масив и предикатна функция като аргументи и връща нов масив,
// съдържащ само елементите, които удовлетворяват предиката.

let arr = [1, 2, 3, 4, 5, 6];
function isEven(number) {
  return number % 2 === 0;
}

function customFilter(arr, bool) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (bool(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(customFilter(arr, isEven));
