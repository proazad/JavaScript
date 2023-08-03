var myCar = ['Toyta','Hundai','Volvo','Marchedise','Nissan','Lamborgini'];
console.log(myCar);
// Added a new element in last of array 
myCar.push('Pagero'); 
myCar.push('Rang Rover');
myCar.push("Sonata","Wild Cat");
console.log(myCar); 
var country = ['Bangladesh','Pakistan','Nepal','USA','UK','Saudi Arabia','India'];

// Remove a element from last of the array 
// country.pop();
var lastElement = country.pop();
console.log(country);
country.shift();
console.log(lastElement);
country.unshift("China");
console.log(country);