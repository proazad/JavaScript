// Regular Function Syntax 
function sum(a,b){
    return a+b;
}

console.log(sum(5, 9))

// Function Expression Syntax 
const sum2 = function(a,b) {
    return a + b;
}
console.log(sum2(6,9));

// Arrow Function syntax 

const sum3 = (a, b) => {
    return a+b;
}
console.log(sum3(9,9))

// Arrow Function Syntax single return

const sum4 = (a,b) => a+b;
console.log(sum4(8,8));

// Arrow Function Syntax single parameter 
const sum5 = a => a**10;
console.log(sum5(10));