function arrayElementSum(numbers){
    let sum = 0;
    for(var i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

let numbers = [22,13,24,32,76,54,64,87,67,52,86,93];
console.log(arrayElementSum(numbers));