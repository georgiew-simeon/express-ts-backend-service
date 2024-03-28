function add(element) {
  return (element += 1);
}

let arr = [1, 2, 3];

function customMap(arr, add) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = add(arr[i]);
  }
  console.log(arr);
}
customMap(arr, add);
