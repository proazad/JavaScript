/**
 * Write a funciton called make_avg() which will take an three integers and return the average of those values.
 */
function make_avg(a,b,c){
    const total = a + b + c;
    const  avg = total / 3 ;
    return avg;
}

let a = 88;
let b = 95;
let c = 84;
console.log(make_avg(a,b,c));