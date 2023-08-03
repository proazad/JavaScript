let evenArray= [];
for(let i = 0; i<= 100; i++){
   if(i % 2 == 0 && i != 0){
    evenArray.push(i);
   }
   continue;
}
console.log(evenArray)

function evenNumbersSum(nums){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }   
    return sum;
}

let evenSum = evenNumbersSum(evenArray);
console.log(evenSum);