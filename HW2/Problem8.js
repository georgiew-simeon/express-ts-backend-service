// Напишете функция counter, която връща функция. 
// Върнатата функция трябва да увелиява променлива брояч на всяко извикване.
// >> let x = counter(); console.log(x()) console.log(x()) console.log(x())
// << 1, 2, 3

function counter(){
    function tmp(){

    }


    return tmp();
}

let x = counter();
console.log(x());
console.log(x());
console.log(x());
