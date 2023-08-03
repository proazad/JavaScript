/**
 * Write a program to Calculate Avarege marks of Below Subject Number 
 * Bangla : 99.50
 * Mathematics : 75.25
 * Biology : 65
 * Chemistry : 80
 * Physics : 35.45
 */
let bangla,mathematics,biology,chemistry,physics;
bangla = 99.50;
mathematics = 75.25;
biology = 65;
chemistry = 80;
physics = 35.45;
var totla_mark = bangla + mathematics + biology + chemistry + physics;
var avarege_mark = totla_mark / 5;
var m = avarege_mark.toFixed(2);
console.log(parseFloat(m));