/**
 * factorial Calculation
 * 
 */
function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

let fact = 9
console.log(factorial(fact));
/**
 * Revers factorial calculation
 * 
 */
function reverseFactorial(number){
    let result = 1;
    for(let i = number; i >=1; i--){
        result *= i;
    }
    return result;
}


console.log(reverseFactorial(fact));

/**
 * Factorial Calculation Using while Loop
 */

function whileFactorial(number){
    let result = 1;
    let i = 1;
    while(i <= number){
        result *= i;
        i++;
    }
    return result;
}
console.log(whileFactorial(fact));

/**
 * Factorial Calculation Using while Loop reverse
 */

function reveserWhileFact(number){
    let result = 1;
    let i = number;
    while(i>=1){
        result *= i;
        i--;
    }
    return result;
}
console.log(reveserWhileFact(fact));