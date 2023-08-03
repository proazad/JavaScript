

let OddArray = []
for(let i=0; i < 100; i++){
    if(i % 2 == 0){
        continue;
    }
    OddArray.push(i);
}

function oddNumbersSum(numbers){
    let sum = 0;
    for(let i = 0; i< numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}


let oddsum = oddNumbersSum(OddArray);
console.log(oddsum);