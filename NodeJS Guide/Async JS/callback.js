//callback function is called within high-order function as an argument
function randomNum(min,max,next){
    //next is a callback function
    setTimeout(() => {
        let rand = Math.floor(Math.random()*(max-min+1)+min);
        next(rand);
    }, 2000);
}

function printNum(num){
    console.log(num);
}

randomNum(1,10, printNum);
