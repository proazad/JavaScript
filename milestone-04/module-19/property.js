let myComputer = {
    computer: "Lenovo",
    pen: 5,
    books:10,
    sunglass: 2,
    keyboard: 5,
    mouse:3
}
console.log(myComputer);
let mouseValue= myComputer.mouse;
console.log(mouseValue);
let computer = myComputer['computer'];
console.log(computer);
let books = "books";
let myBooks = myComputer[books];
console.log(myBooks);

// Get All Property 
let allproperty = Object.keys(myComputer);
console.log(allproperty);
let allvalue = Object.values(myComputer);

for(var i = 0; i <allproperty.length; i++){
    console.log(allproperty[i]+ " = "+ allvalue[i]);
}