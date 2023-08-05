let num1= 5;
let num2 = 7;
console.log(num1, num2);
[num1, num2]=[num2, num1]
console.log(num1, num2) 
// Wrong Approch 
// num1 = num2;
// num2 = num1;

// Right Approcch Variable Swaipping
// const _temp = num1;
// num1 = num2;
// num2 = _temp;

// Approch 2 : Destructuring 
let first = 6;
let second = 8;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);

