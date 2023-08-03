/**
 * Practice problem 03 
 * 1. You are given three numbers 13, 79 and 45. Write a program that will print the largest number using if-else
 * 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is isosceles or not using if else. 
 * Isosceles => two sides are equal
 *
 */
let num1 = 13, num2 = 79, num3 = 88;
if(num1>num2 && num1 > num3){
    console.log(num1);
}else if(num2 > num1 && num2 > num3){
    console.log(num2);
}else{
    console.log(num3);
}

let side1 = 9, side2 = 8 , side3 = 9;
if(side1 == side2 || side1 == side3){
        console.log("Triangle is isoscels.");
}else{
    console.log("Triangle is not isosceles.");
}

