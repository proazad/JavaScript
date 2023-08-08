//s0 = 1 2 3 4 5 6 7 8....
// for (let i = 1; i < 10; i++) {
//     console.log(i);
// }
//s1 = 2 4 6 8 10 12 14....
console.log("\n s1 = 2 4 6 8 10 12 14.... \n");
var series = "";
var n;
for (let i = 1; i < 10; i++) {
    n = i * 2;
    series += n + " ";
}
console.log(series);

//s2 = 1 4 7 10 13 16 ....
console.log("\n s2 = 1 4 7 10 13 16 .... \n");
series = "1 ";
n = 1;
for (let i = 1; i < 10; i++) {
    n = n + 3;
    series += n + " ";
}
console.log(series);
//s3 = 0 3 8 15 24 35 48....
console.log("\n s3 = 0 3 8 15 24 35 48.... \n");
series = "";
n = 1;
for (let i = 1; i < 10; i++) {
    n = (i ** 2) - 1;
    series += n + " ";
}
console.log(series);
//s4 = 1 4 3 8 5 12 7 16 9 20 ....
console.log("\n s4 = 1 4 3 8 5 12 7 16 9 20 .... \n");
series ="";
n = 1;
for(let i =1; i<13;i++){
    if(i % 2 === 0){
        n = i * 2;
        series += n +" ";
    }else{
        series += i+" ";
    }

}
console.log(series);
//s5 = 0 1 1 2 3 5 8 13 21....
console.log("\n s4 = 0 1 1 2 3 5 8 13 21.... \n");
series ='0 1 ';
n =0;
let x = 0;
let y = 1;
for(let i = 1; i<10;i++){
    n = x + y;
    x = y;
    y = n;
    series += n+" ";
}
console.log(series);

// Array Fibonacci 
let fibo = [0,1];
for(let i = 2; i<10; i++){
    fibo[i] = fibo[i-1]+fibo[i-2];
}
console.log(fibo);