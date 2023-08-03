// function leapYear(year) {
//     if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let year = 2100;

// if (leapYear(year)) {
//     console.log(year + " is Leap Year");
// } else {
//     console.log(year + " is not a Leap Year");
// }

var leapYear = [];
for (var i = 1990; i < 4048; i++) {
    if (i % 4 == 0 && (i % 100 != 0 || i % 400 == 0)) {
        leapYear.push(i);
    } else {
        continue;
    }
}
console.log(leapYear);
