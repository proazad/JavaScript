/**
 * Write a funciton called odd_even() which take an integer value and tells whether this value is even or odd. You need ot do it in ways. 
 * Has return + Has Parameter
 * No return + Has Parameter
 */


/**
 * Firts  way
 * Has return has parameter
 */
function odd_even(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false; 
    }
}

let num = 8843;
if(odd_even(num)){
    console.log(num+" is an Even number");
}else{
    console.log(num+" is an Odd number");
}

/**
 * Second Way 
 * Has return no parameter
*/
function odd_even1(num){
    if(num % 2 !== 0){
        console.log(num+" is an Odd number");
    }else{
        console.log(num+" is an Even number");
    }
}
odd_even1(num);

/**
 * No Parameter Has Return 
 */
function even_odd(){
    let num = 8843;
    if(num % 2 === 1){
        console.log(num+" is an Odd number");
    }else{
        console.log(num+" is an Even number");
    }
}
even_odd();