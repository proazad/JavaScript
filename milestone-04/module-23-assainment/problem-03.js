// function sortMaker(arr) {
//     if (arr[0] <= 0 || arr[1] <= 0) {
//         return "invalid input";
//     }
//     else if (arr[0] === arr[1]) {
//         return "equal";
//     } else {
//         const compare = (a, b) => b - a;
//         return arr.sort(compare);
//     }
// }

// function sortMaker(arr) {
//     let newarr = [];
//     if (arr[0] <= 0 || arr[1] <= 0) {
//         return "invalid input";
//     }
//     else if (arr[0] === arr[1]) {
//         return "equal";
//     } else {
//        if(arr[0]>arr[1]){
//         newarr =[arr[0],arr[1]];
//         return newarr;
//        }else{
//         newarr = [arr[1],arr[0]];
//         return newarr;
//        }

//     }
// }

// function sortMaker(arr) {
//     if (arr[0] <= 0 || arr[1] <= 0) {
//         return "invalid input";
//     }
//     else if (arr[0] === arr[1]) {
//         return "equal";
//     } else {
//         if (arr[0] > arr[1]) {
//             newarr = [arr[0], arr[1]];
//             return newarr;
//         } else {
//             let large = arr[0] > arr[1] ? arr[0] : arr[1];
//             let small = arr[0] > arr[1] ? arr[1] : arr[0];
//             return [large, small];
//         }
//     }
// }

function sortMaker(arr) {
    if (arr[0] <= 0 || arr[1] <= 0) {
        return "Invalid Input";
    }
    else if (arr[0] === arr[1]) {
        return "equal";
    } else {
        if (arr[0] < arr[1]) {
            return [arr[0],arr[1]] = [arr[1],arr[0]];
        } else {
            return arr;
        }
    }
}

console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([-4, -2]));
console.log(sortMaker([37323, 84738]));
console.log(sortMaker([1, 2]));