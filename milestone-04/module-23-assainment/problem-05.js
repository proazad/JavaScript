

function canPay(changeArray, totalDue) {
    let errorMsg = '';
    let sum = 0;

    if (!Array.isArray(changeArray)) {
        return errorMsg += "Only Array is acceptable! ";
    } else if (changeArray.length === 0) {
        return errorMsg += "This is an empty Array! also not acceptable !";
    }
    for (let taka of changeArray) {
        sum += taka;
    }
    if (sum >= totalDue) {
        return true;
    }
    return false;
}



console.log(canPay(8, 10));
console.log(canPay([1, 5, 5], 10));