let nums = [];
for(var i = 0; i < 5; i++){
    nums.push(Math.round(Math.random() * 100));
    // nums.push(num);
}
console.log(nums);

console.log(Math.max(...nums));
console.log(Math.min(...nums));