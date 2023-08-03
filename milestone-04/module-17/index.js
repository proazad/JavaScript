var numbers = [12,13,94,30,45,35,84,83,84,52,90,67,89,63,23];
// Show me Forth Index Number 
var forth = numbers[3];

console.log(numbers.length);
console.log(forth);
console.log(numbers);
numbers[3]=55;
console.log(numbers);
// Give me specific element Index 
var indexEight = numbers.indexOf(90);
console.log(indexEight);
numbers[indexEight] = 1000;
console.log(numbers);