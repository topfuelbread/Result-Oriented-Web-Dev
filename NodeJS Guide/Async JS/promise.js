function printNumber(num){
    console.log(num);
}

function randomOddNumber(min,max){
    let promise = new Promise((resolve,reject) =>{
        setTimeout(() => {
            let rand = Math.floor(Math.random()*(max-min+1)+min);
            if (rand %2 === 1)
                resolve(rand);
            else reject("The random number is even: " + rand);
        }, 2000);
    });
    return promise;
}

randomOddNumber(1,10)
    .then(printNumber)
    .catch((msg)=>console.log(msg));