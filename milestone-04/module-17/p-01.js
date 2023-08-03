/**
 * Practice problem 01 
 * you are given an array 
 * var fruits = ['apple','Banana','Orange']
 * a) Find the index of Banana and replace Banana with Mango
 * Remove Orange and add Watermelon
 */
var fruits = ['apple','Banana','Orange'];
var postion = fruits.indexOf("Banana");
fruits[postion] = "Mango";
console.log(fruits);
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);