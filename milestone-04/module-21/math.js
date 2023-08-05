// Uses of Math.pow();
const math = Math.pow(10, 10);
// console.log(math)


// uses of Math.abs() 
const num1 = 20;
const num2 = 30;
// const gap = num1 - num2;
// const gap = Math.abs(num1 - num2);
// if(gap<5){
//     console.log("You guys can be a Friend");
// }else{
//     console.log("You guys stay apart");
// }

// Uses of Math.round()
const num = 3.502;
// console.log(Math.round(num));

// Uses of Math.ceil();
// console.log(Math.ceil(num));

// Uses of Math.floor();
// console.log(Math.floor(num));

// Random Number 
const randomNumber = Math.random();
// 10 to 1 Random Number 
const random = Math.round(randomNumber * 10);
// console.log(random)

// Using For loop print 10 to 1 Random number 10 times 
for(var i = 0; i<=10; i++){
    console.log(Math.round(Math.random() * 10));
}

