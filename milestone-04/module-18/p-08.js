/**
 * Problem 08 
 * Write the price of the books that you have. Display the prices if the prices is lower than 200
 */
let books = [130,200,300,280,500,140,90,400,530,434]
for(var i = 0; i < books.length; i++){
    if(books[i] > 200){
        continue;
    }
    console.log(books[i]);
}