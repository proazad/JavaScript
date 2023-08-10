let list = [
    undefined,
    'sun',
    'mon',
    NaN,
    'tue',
    'wed',
    'thu',
    ,,
    'fri',
    'sat',
    null,
];

console.log(list);

// let newArray = [];
// for(i in list){
//     if(list[i]){
//         newArray.push(list[i]);
//     }
// }
let newArray = list.filter(Boolean);
console.log(newArray);