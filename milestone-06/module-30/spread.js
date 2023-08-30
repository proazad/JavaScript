// Get Max number 
const mx = Math.max(4,9,47,882,22,44);
console.log(mx)

// try to Get Max Number From a Array 
const numbers = [83,83,833,9393,722,783];
const mx2 = Math.max(numbers);
// console.log(mx2);
// Get Max number with spread Operator 
const mx3 = Math.max(...numbers);
// console.log(mx3)


// Copy Array without Spread Operator 

const heroin = ['Sabnur','Purnima','Mousumi','Bobi','Bubly'];
const someHeroin = heroin;
// console.log(someHeroin);
heroin.push("Pori Moni");
// console.log(heroin);
// console.log(someHeroin)


// Copy Array with Spread Operator 
const hero = ['Manna','Shakib','Ferduos','Riaz','Joshim'];
const heroCopy = [...hero];
hero.push("Bappa Raj")
heroCopy.push('Ruble');
console.log(hero);
console.log(heroCopy)

 
