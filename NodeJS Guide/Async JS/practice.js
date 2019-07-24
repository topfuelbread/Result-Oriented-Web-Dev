function generateNum(quantity, min, max){ 
    //2 sec delay, quantity>0, min<max
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if (quantity<=0 || min>max){
                rej('Incorrect input');
            }
            let rands = [];
            for (let i = 0; i < quantity; i++){
                let rand = Math.floor(Math.random()*(max-min+1)+min);
                rands.push(rand);
            }
            res(rands);
        }, 2000)
    })
}

function sum(nums){
    let total = 0;
    for (let i = 0; i < nums.length; i++){
        total += nums[i];
    }
    console.log(total);
}

generateNum(3,12,10).then(sum).catch((msg)=>
{console.log(msg)});