function findAddress(obj) {
    const key = ['street', 'house', 'society'];
    let value = "";
    for (let i = 0; i < key.length; i++) {
        if (obj[key[i]]) {
            if (i == key.length - 1) {
                value += obj[key[i]];
            } else {
                value += obj[key[i]] + ",";
            }
        } else {
            if (i == key.length - 1) {
                value += "__";
            } else {
                value += "__,";
            }
        }
    }
    return value;
}



// function findAddress(obj) {
//     const key = ['street', 'house', 'society'];
//     let value = "";
//     for (let i = 0; i < key.length; i++) {
//         if (obj[key[i]]) {
//             (i == key.length - 1) ? value += obj[key[i]] : value += obj[key[i]] + ",";
//         } else {
//             (i == key.length - 1) ? value += "__" : value += "__,";
//         }
//     }
//     return value;
// }











const address = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}
console.log(findAddress(address));

const address2 = {
    street: 10,
    society: "Earth Perfect"
}
console.log(findAddress(address2));
const address3 = {
    street: 10,
}
console.log(findAddress(address3));

const address4 = {};
console.log(findAddress(address4));