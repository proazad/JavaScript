// function sum(a, b, c, d, e){
//     let total = a+b+c+d+e;
//     console.log(a+'+'+b+'+'+c+'+'+d+'+'+e+'= ');
//     console.log(total);
// }

// sum(40, 50, 80, 62, 54);
function sumation(item, units) {
    return item * units;
}
function itemsSummary(item,price,units){
    return item +" "+ units+ " killgram "+ price + " Taka";
}
// Apple 1 kilogram 140 tk, total 5 kilogram
let apple = 140;
let appleKilo = 5;
let applePrice = sumation(apple,appleKilo);
let appleSummary = itemsSummary("Apple",applePrice,appleKilo);
// Graps 1 kilogram 120 tk, total 3 kilogram
let graps = 120; 
let grapskilo = 3;
let grapsPrice = sumation(graps, grapskilo);
let grapsSummary = itemsSummary("Graps",grapsPrice,grapskilo);

// Cart Price and Details 
function cart(){
    console.log(grapsSummary);
    console.log(appleSummary);
    console.log("Total Price: ",grapsPrice + applePrice);
}
cart();