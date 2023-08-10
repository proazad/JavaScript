const num = 100;
let divisor = '';
for(let i = 1; i<=num; i++){
    if(num % i == 0){
        divisor += i+" ";
    }
}



console.log(divisor);
