//module.exports.KEY = FunctionName;

let PI = 3.14;
function sum(elem){
    let total = 0;
    for (let i = 0; i < elem.length; i++)
        total+=elem[i];
    console.log("sum: "+total);
}
function max(elem){
    let max = elem[0];
    for (let i = 1; i < elem.length; i++){
        if (elem[i]>max)
            max = elem[i];
    }
    console.log("max: "+max);
}
function min(elem){
    let min = elem[0];
    for (let i = 1; i < elem.length; i++){
        if (elem[i]<min)
            min = elem[i];
    }
    console.log("min: "+min);
}

module.exports.PI = PI;
module.exports.sum = sum;
module.exports.max = max;
module.exports.min = min;
