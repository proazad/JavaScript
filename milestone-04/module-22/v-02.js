const friends = [23, 74, 15, 55, 26, 100,21, 5, 22, 79, 2, 97, 47, 42];
// for(var i = 0; i<14; i++){
//     let nums = Math.round(Math.random() * 100);
//     friends.push(nums);
// }

// console.log(friends)

const partial = friends.slice(3,10);

// console.log(partial)
// console.log(friends)

/**
 * Removes elements from an array 
 * and, if necessary, inserts new elements in their place, 
 * returning the deleted elements.
 * Change the  original Array
 */
const arrayCut = friends.splice(3,7);
// if necessary, inserts new elements in their place, 
const arrayCut2 = friends.splice(3,7,10,20,30,40,50,60,70,80,90,110);
console.log(arrayCut2)
console.log(arrayCut)
console.log(friends)