function wordAsciiSum(word) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sum = 0;
            for(let i = 0; i < word.length; i++) {
                sum += word.charCodeAt(i);
            }
            if(sum > 100){
                resolve(sum)
            }else{
                reject("ASKI sum is under 100")
            }
        }, 1000);
    });
}

wordAsciiSum("Sofia").then(sum => {
    console.log(`The ASCII sum is: ${sum}`); 
}).catch(error => {
    console.error(error);
});

wordAsciiSum("a").then(sum => {
    console.log(`The ASCII sum is: ${sum}`);
}).catch(error => {
    console.error(error);
});
