/**
 * This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Cay you Find out who get the delicious Cake ?
 * Jim = 84; 69
 * Dela = 99; 97,
 * Chinku = 77; 99
 */

const jim = 84, dela = 99, chinku = 77;
function topper(jim, dela, chinku){
    const max = Math.max(jim, dela, chinku);
    if(max === jim){
        console.log("In this Exam Jim is Topper, And Jim get the Delicious Cake. Dela Chinku don't mind better luck Next time.");
    }else if(max === dela){
        console.log("In this Exam Dela is Topper, And Dela get the Delicious Cake. Jim, Chinku don't mind better luck Next time.");
    }else{
        console.log("In this Exam Chinku is Topper, And Chinku get the Delicious Cake. Jim, Dela don't mind better luck Next time.");
    }
}

topper(jim, dela, chinku);