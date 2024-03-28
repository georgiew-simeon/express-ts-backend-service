function divideElement(a, b) {
  return new Promise((resolve, reject) =>{
    if (b === 0 ){
        reject("Can't divide by 0")
    }
    const result = a / b;
    resolve(result)
  })
}
divideElement(10, 2)
.then((value) => console.log(value))
.catch((error)=> console.log(error))

