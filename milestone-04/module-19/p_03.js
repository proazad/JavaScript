/**
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. 
 */

function make_avg(nums){
    let total = 0;
    for(var i = 0; i < nums.length; i++){
        total += nums[i];
    }
    const avg = total / nums.length;
    return avg;
}

let marks = [89,76,90,85,98,56,98,87,76,93];
const average_num = make_avg(marks);
console.log(average_num);