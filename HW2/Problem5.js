function customReduce(arr, initialValue, reducer) {
  return reducer(arr, initialValue);
}

function reducer(arr, initialValue) {
  let summ = 0;
  arr.forEach((element) => {
    summ += element + initialValue;
  });

  return summ;
}
console.log(customReduce([1,2,3], 1, reducer));