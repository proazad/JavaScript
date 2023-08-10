let list1 = [
    'sun',
    'mon',
    'tue'

];
let list2 = [
    'wed',
    'thu',
    'fri',
    'sat'
]

const list = list1.concat(list2);
// console.log(list)
// for(i in list){
//     console.log(list[i]);
// }
for(i of list){
    console.log(i);
}